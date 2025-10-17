import z from 'zod';

export const SetOrderSchema = z.object({
	order: z.array(z.number().min(1))
});