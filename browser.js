import { defineConfig } from 'eslint/config'
import indexConfig from './index.js'
const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0

export default defineConfig([
    {
        extends: [indexConfig],
        rules: {
            'no-console': [__ERROR__, { allow: ['warn', 'error'] }], // 禁止console
        },
    },
])
