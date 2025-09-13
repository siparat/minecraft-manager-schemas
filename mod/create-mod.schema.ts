import z from 'zod';

export const CreateModSchema = z.object({
	title: z
		.string()
		.min(2, { message: 'Минимальная длина заголовка – 2 символа' })
		.max(50, { message: 'Максимальная длина заголовка – 50 символов' }),
	description: z.string().min(50, { message: 'Минимальная длина описания – 50 символов' }),
	descriptionImages: z.array(
		z.string().regex(/^(?:https?:\/\/[^/]+)?(?:\/[^/]+)*\/[^/]+\.(?:png|gif|jpe?g|webp|bmp|svg|tiff)$/, {
			message: 'Используйте загруженное изображение'
		})
	),
	image: z.string().regex(/^(?:https?:\/\/[^/]+)?(?:\/[^/]+)*\/[^/]+\.(?:png|gif|jpe?g|webp|bmp|svg|tiff)$/, {
		message: 'Используйте загруженное изображение'
	}),
	files: z.array(
		z.string().regex(/^(?:https?:\/\/[^/]+)?(?:\/[^/]+)*\/[^/]+\.(?:zip|mc\w+)$/, {
			message: 'Используйте загруженный файл мода'
		})
	),
	versions: z.array(
		z.string().regex(/^\d+\.\d+(\.\d+)?$/, {
			message: 'Версионность указана неверно. Пример: X.Y или X.Y.Z'
		})
	)
});