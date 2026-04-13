import { defineConfig } from 'eslint/config'
import vueParser from 'vue-eslint-parser'
import nuxtConfig from './nuxt.js'
import { createStrictTypeCheckedConfig } from './strict-type-checked.js'

export default defineConfig([
    nuxtConfig,
    createStrictTypeCheckedConfig({
        files: ['**/*.{ts,tsx,mts,cts,vue}'],
        extraFileExtensions: ['.vue'],
        allowDefaultProject: ['*.vue', 'test/*.vue'],
        parser: vueParser,
    }),
])
