import z from 'zod';

export const RecommendModSchema = z.object({
	email: z.string().email({ message: 'Невалидный email' }),
	description: z.string().max(2024),
	url: z.string().url({ message: 'Невалидный url' })
})