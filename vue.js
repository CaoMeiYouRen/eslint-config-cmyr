import eslintPluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
    // Vue.js 规则
    {
        extends: [eslintPluginVue.configs['flat/recommended']],
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                /** typescript项目需要用到这个 */
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                /** 允许在.vue 文件中使用 JSX */
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            'vue/html-indent': [1, 4], // vue中缩进为4
            'vue/html-quotes': [1, 'double'], // vue中用双引号
        },
    }
])