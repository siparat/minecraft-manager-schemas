import z from 'zod';
import { ModCategory } from './mod-category.enum';

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
	category: z.nativeEnum(ModCategory, { message: 'Укажите категорию' }),
	versions: z.array(
		z.string().regex(/^\d+(?:\.\d+){0,3}(?: \(beta\))?$/, {
			message: 'Версия указана неверно. Пример: X, X.Y, X.Y.Z, X.Y.Z.W или X.Y (beta)'
		})
	)
});