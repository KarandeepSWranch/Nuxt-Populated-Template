import { AppEnvironment } from './environment';

export type AppConfigOptions = {
    name: string;
    description: string;
    descriptionShort: string;
    version: string;
    url: string;
    socials: string[];
    apiUrls: Record<AppEnvironment, string>;
};

export type SeoKitConfigOptions = {
    siteUrl: AppConfigOptions['url'];
    siteName: AppConfigOptions['name'];
    socials: AppConfigOptions['socials'];
    siteDescription: AppConfigOptions['description'];
    language: 'en';
    trailingSlash: boolean;
    titleSeparator: '|' | '-' | ' ' | '·' | '»';
};
