import { defineConfig } from 'eslint/config'
import vueParser from 'vue-eslint-parser'
import vueConfig from './vue.js'
import { createStrictTypeCheckedConfig } from './strict-type-checked.js'

export default defineConfig([
    vueConfig,
    createStrictTypeCheckedConfig({
        files: ['**/*.{ts,tsx,mts,cts,vue}'],
        extraFileExtensions: ['.vue'],
        allowDefaultProject: ['*.vue', 'test/*.vue'],
        parser: vueParser,
    }),
])
