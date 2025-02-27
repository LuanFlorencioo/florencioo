import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { isLocaleValid } from "./locales";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale || !isLocaleValid(locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../translations/${locale}.json`)).default,
	};
});
