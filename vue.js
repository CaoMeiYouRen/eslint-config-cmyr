import eslintPluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import browserConfig from './browser.js'
const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0

export default defineConfig([
    browserConfig,
    // Vue.js 规则
    {
        extends: [eslintPluginVue.configs['flat/recommended']],
        files: ['**/*.vue'],
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
            'vue/html-indent': [1, 4], // vue中缩进为4
            'vue/html-quotes': [1, 'double'], // vue中用双引号
            'vue/multi-word-component-names': 0, // 要求组件名称始终为多个单词
            'vue/no-v-text-v-html-on-component': 0, // 禁止组件上的 v-text / v-html
            'vue/array-bracket-spacing': 2,
            'vue/arrow-spacing': 2,
            'vue/block-spacing': 2,
            // 'vue/block-tag-newline': 2, // 在打开后和关闭块级标记之前强制换行
            'vue/brace-style': 2,
            'vue/camelcase': 2,
            'vue/comma-dangle': 2,
            'vue/component-name-in-template-casing': 2, // 校验组件 case
            'vue/eqeqeq': 2,
            'vue/html-self-closing': [__ERROR__], // 自闭合标签
            'vue/key-spacing': 2,
            'vue/match-component-file-name': [0, { // 要求组件名称属性与其文件名匹配
                extensions: ['jsx', 'tsx', 'vue'],
                shouldMatchCase: false,
            }],
            'vue/max-attributes-per-line': [2, { // 每行属性最大数量
                singleline: 2,
                multiline: {
                    max: 1,
                },
            }],
            'vue/no-unused-components': [__WARN__], // 禁止未使用的组件
            'vue/no-unused-vars': 0, // 禁止未使用变量
            'vue/no-reserved-component-names': [2, {
                disallowVueBuiltInComponents: true, // 禁用 vue2 的内置组件
                disallowVue3BuiltInComponents: true, // 禁用 vue3 的内置组件
            }], // 不允许在组件定义中使用保留名称
            'vue/object-curly-spacing': 2,
            'vue/padding-line-between-blocks': [2], // 要求或不允许块之间的填充行
            'vue/require-default-prop': [0],
            'vue/require-name-property': [2], // 组件必须命名
            'vue/static-class-names-order': [2], // 静态 class 排序
            'vue/v-for-delimiter-style': [2, 'in'], // v-for 循环使用 in
        },
    },
    {
        ignores: [
            '**/coverage',
            '**/.vscode',
            'node_modules',
            'dist',
            'public',
            '.nuxt',
            'coverage',
            '.output',
            'build',
        ],
    },
])
