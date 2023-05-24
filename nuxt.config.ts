import inject from '@rollup/plugin-inject';
import commonjs from '@rollup/plugin-commonjs';

import { resolve } from 'path';
import { SEO_KIT_OPTIONS } from './seo.config';
import { APP_CONFIG_OPTIONS } from './app.config';
import { initEnvironment } from './config/environment';
import { MODULES, MODULE_OPTIONS } from './modules.config';
import { generateSwaggerTypes } from './config/swagger-codegen';

const environment = initEnvironment();
const isDevelopment = environment === 'development';

const { name, version } = APP_CONFIG_OPTIONS;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    hooks: {
        'modules:before': () => {
            console.log(`🖥️  Building ${name} v${version} in environment: ${environment}\n`);

            if (!!process.env.NUXT_PUBLIC_OVERRIDDEN_API_URL) {
                console.log(`⚠️  Overriding API URL with ${process.env.NUXT_PUBLIC_OVERRIDDEN_API_URL}`);
            }

            if (process.env.GENERATE_SWAGGER) {
                generateSwaggerTypes();
            }
        }
    },

    runtimeConfig: {
        public: {
            ...SEO_KIT_OPTIONS
        }
    },

    modules: MODULES,
    ...MODULE_OPTIONS,

    extends: ['nuxt-seo-kit'],

    alias: {
        css: resolve(__dirname, './assets/css'),
        stores: resolve(__dirname, './stores'),
        types: resolve(__dirname, './types'),
        utils: resolve(__dirname, './utils'),
        config: resolve(__dirname, './config'),
        packages: resolve(__dirname, './packages'),
        contracts: resolve(__dirname, './contracts'),
        components: resolve(__dirname, './components'),
        composables: resolve(__dirname, './composables'),
        environment: resolve(__dirname, 'environment.ts'),
        'app.config': resolve(__dirname, 'app.config.js'),
        'tailwind.config.js': resolve(__dirname, 'tailwind.config.js')
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    css: ['assets/css/main.css', 'assets/css/tailwind.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    build: {
        transpile: ['trpc-nuxt']
    },

    vite: {
        build: {
            rollupOptions: {
                plugins: [
                    commonjs({
                        requireReturnsDefault: 'auto',
                        sourceMap: false
                    }),
                    {
                        ...inject({
                            sourceMap: false
                        })
                    }
                ]
            },
            commonjsOptions: {
                include: ['tailwind.config.js'],
                sourceMap: false
            }
        },
        resolve: {
            alias: {
                'tailwind.config.js': resolve(__dirname, 'tailwind.config.js')
            }
        },
        optimizeDeps: {
            include: ['tailwind.config.js'],
            /**
             * `fsevents` cannot be optimized on MacOS when using Vite in development.
             * @see https://stackoverflow.com/questions/75640753/vite-esbuild-error-no-loader-is-configured-for-node-files-node-modules-fs
             */
            exclude: isDevelopment && process.server && process.platform === 'darwin' ? ['fsevents'] : []
        }
    },

    typescript: {
        shim: false
    },

    devtools: {
        enabled: true
    },

    experimental: {
        typedPages: true
    }
});
