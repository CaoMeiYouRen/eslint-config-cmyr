// eslint.config.js
import { defineConfig } from 'eslint/config'
import indexConfig from './index.js'
export default defineConfig([
    {
        extends: [indexConfig],
        ignores: [
            'node_modules',
            'dist',
            'public',
        ],
    },
])
