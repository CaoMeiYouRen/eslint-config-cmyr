import { defineConfig } from 'eslint/config'
import { createLanguageOptions, nuxtGlobals } from './utils.js'
import vueConfig from './vue.js'

// Nuxt.js 规则
export default defineConfig([
    vueConfig,
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue}'],
        languageOptions: createLanguageOptions(nuxtGlobals),
    },
])
