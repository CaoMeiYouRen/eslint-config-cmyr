import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import { __WARN__, createLanguageOptions } from './utils.js'
import indexConfig from './index.js'

export default defineConfig([
    indexConfig,
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        extends: [
            tseslint.configs.recommendedTypeChecked,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
        ],
        plugins: {
            tseslint,
        },
        languageOptions: createLanguageOptions({}, {
            projectService: {
                defaultProject: 'tsconfig.json',
            },
            tsconfigRootDir: process.cwd(),
        }),
        rules: {
            '@typescript-eslint/no-deprecated': [__WARN__],
            '@typescript-eslint/no-explicit-any': [__WARN__],
            '@typescript-eslint/no-floating-promises': [__WARN__],
            '@typescript-eslint/no-misused-promises': [__WARN__],
            '@typescript-eslint/await-thenable': [__WARN__],
            '@typescript-eslint/no-base-to-string': [__WARN__],
            '@typescript-eslint/no-unnecessary-type-assertion': [__WARN__],
            '@typescript-eslint/no-unsafe-enum-comparison': [__WARN__],
            '@typescript-eslint/no-unsafe-argument': [__WARN__],
            '@typescript-eslint/no-unsafe-assignment': [__WARN__],
            '@typescript-eslint/no-unsafe-call': [__WARN__],
            '@typescript-eslint/no-unsafe-member-access': [__WARN__],
            '@typescript-eslint/no-unsafe-return': [__WARN__],
            '@typescript-eslint/no-redundant-type-constituents': [__WARN__],
            '@typescript-eslint/only-throw-error': [__WARN__],
            '@typescript-eslint/prefer-optional-chain': [__WARN__],
            '@typescript-eslint/require-await': [__WARN__],
            '@typescript-eslint/non-nullable-type-assertion-style': [__WARN__],
        },
    },
])
