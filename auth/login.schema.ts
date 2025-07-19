import z from 'zod'

export const LoginSchema = z.object({
	username: z.string({ message: 'Не указано имя пользователя' }),
	password: z.string({ message: 'Не указан пароль' })
});