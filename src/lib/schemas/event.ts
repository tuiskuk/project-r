// src/lib/schemas/event.ts
import { z } from "zod";


export const createEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.string().min(1),
  location: z.string().min(1),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  type: z.string().min(1),
  targetGroupIds: z.array(z.string()),
  image: z.any().optional(),
});
