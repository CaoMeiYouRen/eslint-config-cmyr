import { defineConfig } from 'eslint/config'
import { __PROD_ERROR__ } from './utils.js'
import indexConfig from './index.js'

export default defineConfig([
    {
        extends: [indexConfig],
        rules: {
            'no-console': [__PROD_ERROR__, { allow: ['warn', 'error', 'info'] }], // 禁止console
        },
    },
])
