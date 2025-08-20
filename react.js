import { defineConfig } from 'eslint/config'
import react from 'eslint-plugin-react'
import { languageOptions } from './utils.js'
import browserConfig from './browser.js'

export default defineConfig([
    browserConfig,
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
        plugins: {
            react,
        },
        extends: [react.configs.flat.recommended, react.configs.flat['jsx-runtime']],
        languageOptions,
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
