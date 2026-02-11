import z from 'zod';
import { AdsNativeType } from './ads-native-type.enum.js';

export const UpdateSdkSchema = z.object({
	metricaToken: z.string(),
	appLovinToken: z.string(),
	adMobToken: z.string(),
	firstOpenCode: z.string(),
	firstInterCode: z.string(),
	firstNativeCode: z.string(),
	firstBannerCode: z.string(),
	secondOpenCode: z.string(),
	secondInterCode: z.string(),
	secondNativeCode: z.string(),
	secondBannerCode: z.string(),
	thirdOpenCode: z.string(),
	thirdInterCode: z.string(),
	thirdNativeCode: z.string(),
	thirdBannerCode: z.string(),
	delayInter: z.number().min(0),
	adsNativeType: z.nativeEnum(AdsNativeType, { message: 'Укажите корректный тип нативной рекламы' }),
	countNativePreload: z.number().min(0),
	chanceShowOpenAds: z.number().min(0).max(100),
	chanceShowInterAds: z.number().min(0).max(100),
	chanceShowNativeAds: z.number().min(0).max(100)
});