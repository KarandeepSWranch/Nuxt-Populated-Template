import { APP_CONFIG_OPTIONS } from './app.config';

import type { SeoKitConfigOptions } from './types/project';

const { name, description, url, socials } = APP_CONFIG_OPTIONS;

export const SEO_KIT_OPTIONS: Partial<SeoKitConfigOptions> = {
    siteUrl: url,
    siteName: name,
    siteDescription: description,
    trailingSlash: true,
    language: 'en',
    titleSeparator: '|',
    socials
};
