import z from 'zod'

export const CreatePolicySchema = z.object({
	title: z.string().min(1, 'Заголовок обязателен').max(64, 'Заголовок слишком длинный'),

	slug: z
		.string()
		.min(1, "Slug обязателен")
		.regex(/^[a-z0-9-]+$/, "Slug может содержать только строчные буквы, цифры и дефисы"),
  
	content: z
		.string()
		.min(10, "Текст политики слишком короткий")
		.max(200000, "Текст слишком длинный")
})