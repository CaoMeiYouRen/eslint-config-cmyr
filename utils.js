import tseslint from 'typescript-eslint'
import globals from 'globals'

export const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
export const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0

// 通用的全局变量配置
export const commonGlobals = {
    ...globals.browser, // 包含浏览器环境的全局变量
    ...globals.node, // 包含 Node.js 环境的全局变量
    ...globals.commonjs, // 包含 CommonJS 环境的全局变量
    ...globals.amd, // 包含 AMD 环境的全局变量
    ...globals.jest, // 包含 Jest 测试框架的全局变量
    ...globals.vitest, // 包含 Vitest 环境的全局变量
    ...globals.mocha, // 包含 Mocha 测试框架的全局变量
    ...globals.jquery, // 包含 jQuery 环境的全局变量
    ...globals.es2026, // 包含最新的 ECMAScript 全局变量
}

// 通用的解析器选项
export const commonParserOptions = {
    parser: tseslint.parser,
    ecmaVersion: 'latest',
    ecmaFeatures: {
        modules: true, // 启用模块化语法
        jsx: true, // 启用 JSX 语法
    },
}

// 基础语言选项配置
export const languageOptions = {
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module', // 使用模块化语法
    globals: commonGlobals,
    parserOptions: commonParserOptions,
}

// 创建自定义语言选项的工具函数
export function createLanguageOptions(customGlobals = {}, customParserOptions = {}) {
    return {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
            ...commonGlobals,
            ...customGlobals,
        },
        parserOptions: {
            ...commonParserOptions,
            ...customParserOptions,
        },
    }
}

// 通用的忽略配置
export const commonIgnores = [
    '**/coverage',
    '**/.vscode',
    '**/docker-compose.yml',
    '.github',
    '.husky',
    '.nuxt',
    '.output',
    '.vercel',
    '.vitepress',
    'node_modules',
    'dist',
    'public',
    'build',
    'coverage',
    'out',
    'temp',
    'tmp',
    'logs',
    'log',
]

// Nuxt 专用的全局变量
export const nuxtGlobals = {
    useFetch: false,
    useAsyncData: false,
    useCookie: false,
    useError: false,
    useHead: false,
    useLazyAsyncData: false,
    useLazyFetch: false,
    useNuxtApp: false,
    useNuxtData: false,
    useRoute: false,
    useRouter: false,
    useState: false,
    useRuntimeConfig: false,
    useSeoMeta: false,
}
