import type { AppConfigOptions } from './types/project';

export const VALID_ENVIRONMENTS = ['production', 'development', 'staging'] as const;

export const APP_CONFIG_OPTIONS: AppConfigOptions = {
    name: 'Example',
    description: 'Example Description Default',
    descriptionShort: 'Example Description Short',
    version: '0.0.1-alpha-1',
    url: 'https://example.com',
    socials: ['https://twitter.com/example', 'https://instagram.com/example'],
    apiUrls: {
        production: 'https://api.example.com',
        development: 'https://staging.api.example.com',
        staging: 'https://staging.api.example.com'
    }
};

export default { VALID_ENVIRONMENTS, APP_CONFIG_OPTIONS };
