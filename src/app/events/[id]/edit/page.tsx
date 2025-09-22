"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEventSchema } from "@/lib/schemas/event";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";
import { format } from "date-fns";

const MapPicker = dynamic(() => import("@/components/map/Map"), { ssr: false });

const HARDCODED_EVENT_TYPES = [
  "Yhteisö", "Nuoret", "Perhe", "Jumalanpalvelus", "Muu"
];

const HARDCODED_TARGET_GROUPS = [
  { id: "1", name: "Nuoret" },
  { id: "2", name: "Aikuiset" },
  { id: "3", name: "Perheet" },
  { id: "4", name: "Kaikki" }
];

interface EventFormValues {
  title: string;
  description?: string;
  date: string;
  location: string;
  latitude?: number;
  longitude?: number;
  type: string;
  targetGroupIds: string[];
  image?: FileList | null;
}

export default function EditEventPage({ params }: { params: { id: string } }) {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [initialImage, setInitialImage] = useState<string | null>(null);
  const [mapZoom, setMapZoom] = useState<number>(16);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      location: "",
      latitude: undefined,
      longitude: undefined,
      type: "",
      targetGroupIds: [],
      image: null,
    },
  });

  // Fetch event data on mount
  useEffect(() => {
    async function fetchEvent() {
      setLoading(true);
      const res = await fetch(`/api/events/${params.id}`);
      if (!res.ok) {
        alert("Tapahtumaa ei löytynyt");
        router.replace("/events");
        return;
      }
      const event = await res.json();
      reset({
        title: event.title,
        description: event.description || "",
        date: event.date ? format(new Date(event.date), "yyyy-MM-dd'T'HH:mm") : "",
        location: event.location,
        latitude: event.latitude,
        longitude: event.longitude,
        type: event.type,
        targetGroupIds: event.targetGroups?.map((tg: { id: string }) => tg.id) || [],
        image: null,
      });
      setInitialImage(event.image || null);
      setImagePreview(event.image || null);
      // If event has coordinates, zoom in
      if (event.latitude && event.longitude) setMapZoom(16);
      setLoading(false);
    }
    fetchEvent();
    // eslint-disable-next-line
  }, [params.id, reset, router]);

  // Watch image selection for preview
  const watchImage = watch("image");
  useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      const file = watchImage[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [watchImage]);

  // Watch lat/lng for display
  const latitude = watch("latitude");
  const longitude = watch("longitude");

  const onSubmit = async (data: EventFormValues) => {
    if (!user) return alert("Kirjaudu sisään ensin");
    setSubmitting(true);

    try {
      let imageUrl: string | undefined = initialImage || undefined;

      // Upload new image if changed
      if (data.image && data.image.length > 0) {
        const file = data.image[0];
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("event-images")
          .upload(`events/${Date.now()}-${file.name}`, file);

        if (uploadError) {
          throw new Error("Kuvan lataus epäonnistui: " + uploadError.message);
        }

        const { data: publicData } = supabase.storage
          .from("event-images")
          .getPublicUrl(uploadData.path);

        imageUrl = publicData.publicUrl;
      }

      const eventPayload = {
        title: data.title,
        description: data.description || "",
        date: new Date(data.date).toISOString(),
        location: data.location,
        latitude: data.latitude,
        longitude: data.longitude,
        type: data.type,
        targetGroupIds: data.targetGroupIds,
        image: imageUrl,
      };

      const res = await fetch(`/api/events/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventPayload),
      });

      if (!res.ok) {
        let errorMsg = "Tapahtuman muokkaus epäonnistui";
        try {
          const error = await res.json();
          errorMsg = error.message || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }

      alert("Tapahtuma päivitetty!");
      router.push(`/events/${params.id}`);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Tapahtuman muokkaus epäonnistui"
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-lg text-gray-500">
        Ladataan tapahtumaa...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl border border-blue-100">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
        Muokkaa tapahtumaa
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <Label htmlFor="title">Tapahtuman nimi *</Label>
          <Input
            id="title"
            {...register("title")}
            placeholder="Nuorten Raamattupiiri"
            className={errors.title ? "border-red-500" : ""}
          />
          {errors.title && (
            <span className="text-red-500 text-xs">{errors.title.message}</span>
          )}
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Kuvaus</Label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Kuvaus tapahtumasta"
            rows={4}
          />
        </div>

        {/* Date */}
        <div>
          <Label htmlFor="date">Päivämäärä ja aika *</Label>
          <Input
            id="date"
            type="datetime-local"
            {...register("date")}
            className={errors.date ? "border-red-500" : ""}
          />
          {errors.date && (
            <span className="text-red-500 text-xs">{errors.date.message}</span>
          )}
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Sijainti (teksti) *</Label>
          <Input
            id="location"
            {...register("location")}
            placeholder="Helsinki, Nuorten tila"
            className={errors.location ? "border-red-500" : ""}
          />
          {errors.location && (
            <span className="text-red-500 text-xs">{errors.location.message}</span>
          )}
        </div>

        {/* Map Picker */}
        <div>
          <Label>Valitse sijainti kartalta</Label>
          <div className="rounded-lg border border-blue-200 mt-2">
            <MapPicker
              onSelect={(lat?: number, lng?: number) => {
                setValue("latitude", lat);
                setValue("longitude", lng);
              }}
              initialLat={latitude}
              initialLng={longitude}
              initialZoom={mapZoom}
            />
          </div>
          {typeof latitude === "number" && typeof longitude === "number" && (
            <div className="text-xs text-gray-500 mt-1">
              Valittu sijainti: {latitude.toFixed(5)}, {longitude.toFixed(5)}
            </div>
          )}
        </div>

        {/* Event Type */}
        <div>
          <Label>Tapahtuman tyyppi *</Label>
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={errors.type ? "border-red-500" : ""}>
                  <SelectValue placeholder="Valitse tyyppi" />
                </SelectTrigger>
                <SelectContent>
                  {HARDCODED_EVENT_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.type && (
            <span className="text-red-500 text-xs">{errors.type.message}</span>
          )}
        </div>

        {/* Target Groups */}
        <div>
          <Label>Kohderyhmät *</Label>
          <div className="flex flex-wrap gap-3 mt-2">
            {HARDCODED_TARGET_GROUPS.map((tg) => (
              <label
                key={tg.id}
                className={`flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 ${
                  watch("targetGroupIds")?.includes(tg.id)
                    ? "ring-2 ring-blue-400"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  {...register("targetGroupIds")}
                  value={tg.id}
                  className="accent-blue-600"
                  checked={watch("targetGroupIds")?.includes(tg.id)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const current = watch("targetGroupIds") || [];
                    if (checked) {
                      setValue("targetGroupIds", [...current, tg.id]);
                    } else {
                      setValue(
                        "targetGroupIds",
                        current.filter((id: string) => id !== tg.id)
                      );
                    }
                  }}
                />
                <span className="text-sm">{tg.name}</span>
              </label>
            ))}
          </div>
          {errors.targetGroupIds && (
            <span className="text-red-500 text-xs">{errors.targetGroupIds.message}</span>
          )}
        </div>

        {/* Image */}
        <div>
          <Label>Kuva (valinnainen)</Label>
          <Input type="file" accept="image/*" {...register("image")} />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full max-h-64 object-cover rounded-lg shadow-md mt-2"
            />
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full text-lg py-3 mt-4"
          disabled={submitting}
        >
          {submitting ? "Tallennetaan..." : "Tallenna muutokset"}
        </Button>
      </form>
    </div>
  );
}