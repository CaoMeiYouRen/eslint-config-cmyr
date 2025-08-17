// eslint.config.js
import indexConfig from './index.js'
import { defineConfig } from 'eslint/config'
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
