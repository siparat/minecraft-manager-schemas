import z from 'zod';

export const UploadImageSchema = z.object({
	oldImageFilename: z.optional(z.string())
});
