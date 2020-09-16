'use strict'
const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    extends: [
        'plugin:vue/essential',
        '@vue/typescript/recommended',
        require.resolve('./index'),
    ],
    plugins: [
        'vue',
    ],
    parser: 'vue-eslint-parser',
    rules: {
        'vue/array-bracket-spacing': 2,
        'vue/arrow-spacing': 2,
        'vue/block-spacing': 2,
        'vue/brace-style': 2,
        'vue/camelcase': 2,
        'vue/comma-dangle': 2,
        'vue/component-name-in-template-casing': 2,
        'vue/eqeqeq': 2,
        'vue/key-spacing': 2,
        'vue/match-component-file-name': 2,
        'vue/object-curly-spacing': 2,
        'vue/html-indent': [2, 4], // vue中缩进为4
        'vue/html-quotes': [2, 'double'], // vue中用双引号
        'vue/html-self-closing': [IS_PROD ? 2 : 0], // 自闭合标签
        'vue/require-default-prop': [0],
        'vue/no-unused-vars': 0, // 禁止未使用变量
        'vue/no-unused-components': [IS_PROD ? 2 : 0], // 禁止未使用的组件
    },
}