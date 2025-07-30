import z from 'zod'

export const LoginSchema = z.object({
	username: z.string({ message: 'Не указано имя пользователя' }).min(4, { message: 'Минимальная длина имени – 4 символа' }).max(32, { message: 'Максимальная длина имени – 32 символа' }),
	password: z.string({ message: 'Не указан пароль' }).min(4, { message: 'Минимальная длина пароля – 4 символа' }).max(64, { message: 'Максимальная длина пароля – 64 символа' })
});