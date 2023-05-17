import { ModuleOptions, NuxtConfig } from '@nuxt/schema';

export const MODULES: NuxtConfig['modules'] = [
    '@pinia/nuxt',
    'nuxt-lodash',
    '@vueuse/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@invictus.codes/nuxt-vuetify',
    '@pinia-plugin-persistedstate/nuxt',
    ['unplugin-icons/nuxt', { autoInstall: true }]
];

const PINIA_OPTIONS: NuxtConfig['pinia'] = {
    autoImports: ['defineStore', 'storeToRefs']
};

const VUETIFY_OPTIONS: NuxtConfig['vuetify'] = {
    vuetifyOptions: {},
    moduleOptions: {
        treeshaking: true,
        autoImport: true
    }
};

export const MODULE_OPTIONS: { [key: string]: Partial<ModuleOptions> } = {
    pinia: PINIA_OPTIONS,
    vuetify: VUETIFY_OPTIONS
};
