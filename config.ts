// A list of all locales that are supported
export const locales = ['en', 'ar'] as const;
import { LocalePrefix } from 'next-intl/routing';

export const localePrefix = 'always' satisfies LocalePrefix;