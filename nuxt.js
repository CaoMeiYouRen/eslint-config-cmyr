import { defineConfig } from 'eslint/config'
import vueConfig from './vue.js'
// Nuxt.js 规则
export default defineConfig([
    vueConfig,
    {
        files: ['**/*.{js,cjs,mjs,jsx,ts,tsx,mts,cts,vue}'],
        languageOptions: {
            globals: {
                useFetch: false,
                useAsyncData: false,
                useCookie: false,
                useError: false,
                useHead: false,
                useLazyAsyncData: false,
                useLazyFetch: false,
                useNuxtApp: false,
                useNuxtData: false,
                useRoute: false,
                useRouter: false,
                useState: false,
                useRuntimeConfig: false,
                useSeoMeta: false,
            },
        },
    },
])
