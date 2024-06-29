import * as z from 'zod';
export const productSchema = z.object({
    id: z.string(),
    name_EN: z.string(),
    name_AR: z.string(),
    description_EN: z.string(),
    description_AR: z.string(),
    imageUrls: z.array(z.string()),
    price: z.number()
});

export type productSchemaType = z.infer<typeof productSchema>;