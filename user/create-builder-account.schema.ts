import z from 'zod';

export const CreateBuilderAccountSchema = z.object({
	username: z
		.string({ message: 'Не указано имя пользователя' })
		.min(4, { message: 'Минимальная длина имени – 4' })
		.max(32, { message: 'Максимальная длина имени — 32' }),
	password: z
		.string({ message: 'Не указан пароль' })
		.min(8, { message: 'Минимальная длина пароля – 8' })
		.max(32, { message: 'Максимальная длина пароля — 32' })
});
