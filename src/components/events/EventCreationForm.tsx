"use client";

import { useEffect, useState } from "react";
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

// Dynamically import MapPicker (avoid SSR issues)
const MapPicker = dynamic(() => import("../map/Map"), { ssr: false });

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

interface TargetGroup {
  id: string;
  name: string;
}

interface Props {
  targetGroups: TargetGroup[];
  eventTypes: string[];
}

export function EventCreationForm({ targetGroups, eventTypes }: Props) {
  const { user } = useUser();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  // Watch image selection for preview
  const watchImage = watch("image");
  if (watchImage && watchImage.length > 0 && !imagePreview) {
    const file = watchImage[0];
    setImagePreview(URL.createObjectURL(file));
  }

  // Watch lat/lng for display
  const latitude = watch("latitude");
  const longitude = watch("longitude");

  // Log all form values for debugging
  const allValues = watch();
  useEffect(() => {
    // Only log when values change, not on every render
    console.log("EventCreationForm values:", allValues);
  }, [allValues]);

  const onSubmit = async (data: EventFormValues) => {
    if (!user) return alert("Kirjaudu sisään ensin");
    setLoading(true);

    try {
      let imageUrl: string | undefined;

      // Upload image if provided
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

      // Log payload before sending
      console.log("Submitting event payload:", eventPayload);

      const res = await fetch("/api/events/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventPayload),
      });

      if (!res.ok) {
        let errorMsg = "Tapahtuman luominen epäonnistui";
        try {
          const error = await res.json();
          errorMsg = error.message || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }

      alert("Tapahtuma luotu!");
      reset();
      setImagePreview(null);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Tapahtuman luominen epäonnistui"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl border border-blue-100">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
        Luo uusi tapahtuma
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
            />
          </div>
          {(latitude && longitude) && (
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
                  {eventTypes.map((type) => (
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
            {targetGroups.map((tg) => (
              <label
                key={tg.id}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100"
              >
                <input
                  type="checkbox"
                  {...register("targetGroupIds")}
                  value={tg.id}
                  className="accent-blue-600"
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
          disabled={loading}
        >
          {loading ? "Luodaan..." : "Luo tapahtuma"}
        </Button>
      </form>
    </div>
  );
}