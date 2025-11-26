import z from 'zod'

export const CreatePolicySchema = z.object({
	title: z.string().min(1, 'Заголовок обязателен').max(64, 'Заголовок слишком длинный'),

	slug: z
		.string()
		.min(1, "Slug обязателен")
		.regex(
			/^([a-z0-9-]+|[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z0-9]+)$/i,
			"Slug должен быть либо обычным (tnt-app), либо с расширением (tnt-app.html)"
		),
  
	content: z
		.string()
		.min(10, "Текст политики слишком короткий")
		.max(200000, "Текст слишком длинный")
})