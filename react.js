import { defineConfig } from 'eslint/config'
import react from 'eslint-plugin-react'
import browserConfig from './browser.js'

const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0

export default defineConfig([
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
        plugins: {
            react,
        },
        extends: [browserConfig, react.configs.flat.recommended, react.configs.flat['jsx-runtime']],
        rules: {
        },
        settings: {
            react: {
                version: 'detect',
                defaultVersion: '18',
            },
        },
    },
])
