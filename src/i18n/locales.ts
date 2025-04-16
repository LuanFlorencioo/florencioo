export const locales = [
	"pt", // Portuguese - The first one will always be the default
	"en", // English
	"es", // Spanish
];

export const defaultLocale = locales[0]; // The first one will always be the default

export const isLocaleValid = (locale: string) => locales.includes(locale);
