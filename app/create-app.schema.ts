import z from 'zod';

export const CreateAppSchema = z.object({
	packageName: z
		.string()
		.regex(/^[a-z]+(\.[a-z][a-z0-9_]*)+$/, { message: 'Некорректное имя пакета. Пример: com.example.app' }),
	banner: z.optional(z.string().regex(/^\/(?:[^/]+\/)*[^/]+\.webp$/, { message: 'Используйте загруженное изображение' })),
	logo: z.string().regex(/^\/(?:[^/]+\/)*[^/]+\.webp$/, { message: 'Используйте загруженное изображение' }),
	translations: z
		.array(
			z.object({
				languageId: z.number({ message: 'Некорректный идентификатор языка' }).min(1),
				name: z.string().min(1, 'Имя не должно быть пустым').max(30, 'Название не может быть длиньше 30 символов')
			})
		)
		.refine(
			(arr) => {
				const seen = new Set();
				for (const item of arr) {
					if (seen.has(item.languageId)) return false;
					seen.add(item.languageId);
				}
				return true;
			},
			{
				message: 'Коды языков должны быть уникальны'
			}
		)
});