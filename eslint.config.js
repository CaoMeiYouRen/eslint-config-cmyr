// eslint.config.js
import indexConfig from './index.js'
import { defineConfig } from 'eslint/config'
export default defineConfig([
    {
        ignores: [
            'node_modules',
            'dist',
            'public',
        ],
    },
    ...indexConfig,
])
