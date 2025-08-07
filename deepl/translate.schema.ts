import z from 'zod';

export const TranslateSchema = z.object({
	code: z.string().length(2, { message: 'Код языка невалиден' }),
	text: z.string()
});