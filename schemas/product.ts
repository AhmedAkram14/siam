import * as z from 'zod';
import { v4 } from 'uuid';
export const productSchema = z.object({
    id: z.string().default(v4()),
    name_EN: z.string(),
    name_AR: z.string(),
    description_EN: z.string(),
    description_AR: z.string(),
    imageUrls: z.array(z.string()).default([]),
    price: z.number(),
    status: z.union([z.literal('active'), z.literal('archived')]).default("active"),
    createdAt: z.date().default(new Date()),
    updatedAt: z.date().optional(),
});

export type productSchemaType = z.infer<typeof productSchema>;