import { AppEnvironment } from '.././types/environment';
import { APP_CONFIG_OPTIONS, VALID_ENVIRONMENTS } from '.././app.config';

export function initEnvironment(): AppEnvironment {
    const environment = process.env.NUXT_PUBLIC_ENVIRONMENT as AppEnvironment;

    if (!environment || !VALID_ENVIRONMENTS.includes(environment)) {
        throw new Error(`${environment} is not a valid environment. Valid environments are ${VALID_ENVIRONMENTS.join(', ')}`);
    }

    const overriddenApiUrl = process.env.NUXT_PUBLIC_OVERRIDDEN_API_URL?.trim();
    const normalizedOverriddenUrl = !overriddenApiUrl || isEmpty(overriddenApiUrl) ? undefined : overriddenApiUrl;

    if (normalizedOverriddenUrl && environment !== 'development') {
        throw new Error(`You can only override the API URL in the development environment. You are currently running in ${environment}`);
    }

    process.env.NUXT_PUBLIC_API_URL = normalizedOverriddenUrl ?? APP_CONFIG_OPTIONS.apiUrls[environment];

    return environment;
}
