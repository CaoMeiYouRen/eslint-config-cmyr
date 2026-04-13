import tseslint from 'typescript-eslint'
import { __WARN__, createLanguageOptions } from './utils.js'

/**
 * @param {{
 *   files?: string[]
 *   extraFileExtensions?: string[]
 *   allowDefaultProject?: string[]
 *   parser?: any
 * }} [options]
 * @returns {any}
 */
export function createStrictTypeCheckedConfig(options = {}) {
    const {
        files = ['**/*.{ts,tsx,mts,cts}'],
        extraFileExtensions = [],
        allowDefaultProject = [],
        parser,
    } = options

    const languageOptions = createLanguageOptions({}, {
        projectService: {
            defaultProject: 'tsconfig.json',
            ...(allowDefaultProject.length > 0 ? { allowDefaultProject } : {}),
        },
        tsconfigRootDir: process.cwd(),
        ...(extraFileExtensions.length > 0 ? { extraFileExtensions } : {}),
    })

    if (parser) {
        languageOptions.parser = parser
    }

    return {
        files,
        extends: [
            tseslint.configs.recommendedTypeChecked,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
        ],
        plugins: {
            tseslint,
        },
        languageOptions,
        rules: {
            '@typescript-eslint/consistent-type-definitions': [__WARN__, 'interface'],
            '@typescript-eslint/no-deprecated': [__WARN__],
            '@typescript-eslint/no-floating-promises': [__WARN__],
            '@typescript-eslint/no-misused-promises': [__WARN__],
            '@typescript-eslint/await-thenable': [__WARN__],
            '@typescript-eslint/no-base-to-string': [__WARN__],
            '@typescript-eslint/no-unnecessary-type-assertion': [0],
            '@typescript-eslint/no-unsafe-enum-comparison': [__WARN__],
            '@typescript-eslint/no-redundant-type-constituents': [__WARN__],
            '@typescript-eslint/only-throw-error': [__WARN__],
            '@typescript-eslint/prefer-optional-chain': [__WARN__],
            '@typescript-eslint/require-await': [__WARN__],
            '@typescript-eslint/no-empty-function': [__WARN__],
            '@typescript-eslint/non-nullable-type-assertion-style': [0],
            '@typescript-eslint/no-inferrable-types': [0],
            '@typescript-eslint/explicit-function-return-type': [0],
            '@typescript-eslint/explicit-module-boundary-types': [__WARN__, {
                allowArgumentsExplicitlyTypedAsAny: true,
            }],
            '@typescript-eslint/no-explicit-any': [__WARN__],
            '@typescript-eslint/no-unsafe-argument': [__WARN__],
            '@typescript-eslint/no-unsafe-assignment': [__WARN__],
            '@typescript-eslint/no-unsafe-member-access': [__WARN__],
            '@typescript-eslint/no-unsafe-return': [__WARN__],
            '@typescript-eslint/no-unsafe-call': [__WARN__],
            '@typescript-eslint/unbound-method': [__WARN__],
            '@typescript-eslint/restrict-template-expressions': [0],
            '@typescript-eslint/prefer-nullish-coalescing': [__WARN__],
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': [__WARN__],
            '@typescript-eslint/return-await': [__WARN__],
            '@typescript-eslint/no-invalid-void-type': [__WARN__],
            '@typescript-eslint/no-unnecessary-type-parameters': [__WARN__],
            '@typescript-eslint/no-misused-spread': [0],
            '@typescript-eslint/no-dynamic-delete': [0],
            '@typescript-eslint/no-unnecessary-type-conversion': [0],
        },
    }
}
