import z from 'zod';

export const CreateIssueSchema = z.object({
	text: z
		.string({ message: 'Укажите текст жалобы' })
		.min(32, { message: 'Минимальная длина теста – 32 символа' })
		.max(1024, { message: 'Максимальная длина текста – 1024 символа' })
});