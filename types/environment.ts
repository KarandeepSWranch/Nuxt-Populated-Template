import { VALID_ENVIRONMENTS } from '.././app.config';

export type AppEnvironment = (typeof VALID_ENVIRONMENTS)[number];

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            NUXT_PUBLIC_ENVIRONMENT: AppEnvironment;
            NODE_DEBUG: boolean;
            DATABASE_URL: string;
            NUXT_PUBLIC_OVERRIDDEN_API_URL: string;
            GENERATE_SWAGGER: boolean;
        }
    }
}
