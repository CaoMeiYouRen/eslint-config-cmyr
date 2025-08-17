import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0

export default defineConfig([
    // 基础规则
    {
        ignores: [
            '**/coverage',
            '**/.vscode',
            '**/docker-compose.yml',
            '!.github',
            'node_modules',
            'dist',
            'public',
        ],
        plugins: {
            js,
        },
        extends: [js.configs.recommended],
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
                    jsx: true, // 启用 JSX 语法
                },
            },
        },
        rules: {
            'no-unused-vars': [__WARN__], // 禁止出现未使用过的变量
        },
    },
    // 代码风格规则
    stylistic.configs.customize({
        indent: 4, // 缩进空格数
        quotes: 'single', // 使用单引号
        semi: false, // 不使用分号
        jsx: true, // 支持 JSX 语法
        arrowParens: 'always', // 箭头函数参数总是使用括号
        braceStyle: '1tbs', // 大括号风格为 1TBS
        blockSpacing: true, // 块内空格
        quoteProps: 'as-needed', // 属性名引号按需使用
        commaDangle: 'always-multiline', // 多行时逗号尾随
        severity: 'error', // 设置错误级别为error
    }),
    {
        files: ['**/*.jsx'], // 添加对 JSX 文件的支持
    },
    /**
   * typescript 规则
   */
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        extends: [tseslint.configs.recommended],
        rules: {
        },
    },
])
