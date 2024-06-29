import * as z from 'zod';
export const categorySchema = z.object({
    title_EN: z.string(),
    title_AR: z.string(),
    imageUrl: z.string().optional(),
    description_EN: z.string(),
    description_AR: z.string(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    items: z.array(z.object({
        id: z.string(),
        imageUrls: z.array(z.string()),
        name_EN: z.string(),
        name_AR: z.string(),
        description_EN: z.string(),
        description_AR: z.string(),
        price: z.number()
    })).default(() => [])
});

export type categorySchemaType = z.infer<typeof categorySchema>;