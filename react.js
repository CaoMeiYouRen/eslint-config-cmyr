import { defineConfig } from 'eslint/config'
import react from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import browserConfig from './browser.js'

const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0

export default defineConfig([
    browserConfig,
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
        plugins: {
            react,
        },
        extends: [react.configs.flat.recommended, react.configs.flat['jsx-runtime']],
        languageOptions: {
            ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
            sourceType: 'module', // 使用模块化语法
            globals: {
                ...globals.browser, // 包含浏览器环境的全局变量
                ...globals.node, // 包含 Node.js 环境的全局变量
                ...globals.commonjs, // 包含 CommonJS 环境的全局变量
                ...globals.amd, // 包含 AMD 环境的全局变量
                ...globals.jest, // 包含 Jest 测试框架的全局变量
                ...globals.vitest, // 包含 Vitest 环境的全局变量
                ...globals.mocha, // 包含 Mocha 测试框架的全局变量
                ...globals.jquery, // 包含 jQuery 环境的全局变量
                ...globals.es2026, // 包含最新的 ECMAScript 全局变量
            },
            parserOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                ecmaFeatures: {
                    modules: true, // 启用模块化语法
                    jsx: true, // 启用 JSX 语法
                },
            },
        },
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
