import z from 'zod';

export const UpdateSdkSchema = z.object({
	metricaToken: z.string(),
	appLovinToken: z.string(),
	adMobToken: z.string(),
	firstOpenCode: z.string(),
	firstInterCode: z.string(),
	firstNativeCode: z.string(),
	secondOpenCode: z.string(),
	secondInterCode: z.string(),
	secondNativeCode: z.string(),
	thirdOpenCode: z.string(),
	thirdInterCode: z.string(),
	thirdNativeCode: z.string()
});