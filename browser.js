import { defineConfig } from 'eslint/config'
import { __ERROR__ } from './utils.js'
import indexConfig from './index.js'

export default defineConfig([
    {
        extends: [indexConfig],
        rules: {
            'no-console': [__ERROR__, { allow: ['warn', 'error'] }], // 禁止console
        },
    },
])
