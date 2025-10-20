import z from 'zod';
import { ModCategory } from './mod-category.enum.js';

export const CreateModSchema = z.object({
	title: z
		.string()
		.min(2, { message: 'Минимальная длина заголовка – 2 символа' })
		.max(200, { message: 'Максимальная длина заголовка – 200 символов' }),
	description: z.string().min(1, { message: 'Минимальная длина описания – 1 символ' }),
	descriptionImages: z.array(
		z.string().regex(/^(?:https?:\/\/[^\/]+)?(?:\/[^\/]+)*\/[^\/]+\.(?:png|gif|jpe?g|webp|bmp|svg|tiff)$/i, {
			message: 'Используйте загруженное изображение'
		})
	),
	image: z.string().regex(/^(?:https?:\/\/[^\/]+)?(?:\/[^\/]+)*\/[^\/]+\.(?:png|gif|jpe?g|webp|bmp|svg|tiff)$/i, {
		message: 'Используйте загруженное изображение'
	}),
	files: z.array(
		z.string()
	),
	category: z.nativeEnum(ModCategory, { message: 'Укажите категорию' }),
	versions: z.array(
		z.string().regex(/^\d+(?:\.\d+){0,3}(?: \(beta\))?$/, {
			message: 'Версия указана неверно. Пример: X, X.Y, X.Y.Z, X.Y.Z.W или X.Y (beta)'
		})
	)
});