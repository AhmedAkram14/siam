import * as z from 'zod';
import { Timestamp } from 'firebase/firestore';
export const categorySchema = z.object({
    id: z.string(),
    title_EN: z.string(),
    title_AR: z.string(),
    imageUrl: z.string().optional(),
    description_EN: z.string(),
    description_AR: z.string(),
    createdAt: z.date().or(z.instanceof(Timestamp)).optional(),
    updatedAt: z.date().optional(),
    items: z.array(z.object({
        id: z.string(),
        imageUrls: z.array(z.string()),
        name_EN: z.string(),
        name_AR: z.string(),
        description_EN: z.string(),
        description_AR: z.string(),
        price: z.number(),
        status: z.union([z.literal('active'), z.literal('archived')]).default("active"),
        createdAt: z.date(),
        updatedAt: z.date().optional(),
    })).default(() => [])
});

export type categorySchemaType = z.infer<typeof categorySchema>;