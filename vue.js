'use strict'
const IS_PROD = process.env.NODE_ENV === 'production' ? 2 : 0
module.exports = {
    extends: [
        'plugin:vue/recommended',
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
        'vue/html-indent': [2, 4], // vue中缩进为4
        'vue/html-quotes': [2, 'double'], // vue中用双引号
        'vue/html-self-closing': [IS_PROD], // 自闭合标签
        'vue/key-spacing': 2,
        'vue/match-component-file-name': [2, { // 要求组件名称属性与其文件名匹配
            extensions: ['jsx', 'tsx', 'vue'],
            shouldMatchCase: true,
        }],
        'vue/max-attributes-per-line': [2, { // 每行属性最大数量
            singleline: 2,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        'vue/no-unused-components': [IS_PROD], // 禁止未使用的组件
        'vue/no-unused-vars': 0, // 禁止未使用变量
        'vue/no-reserved-component-names': [2], // 不允许在组件定义中使用保留名称
        'vue/object-curly-spacing': 2,
        'vue/require-default-prop': [0],
        'vue/require-name-property': [2], // 组件必须命名
    },
}

// const fs = require('fs')
// const { rules } = module.exports
// const ruleList = Object.entries(rules).sort((a, b) => {
//     return a[0].localeCompare(b[0])
// })
// const obj = {}
// ruleList.forEach((e) => {
//     obj[e[0]] = e[1]
// })
// fs.writeFileSync('vue-rules.json', JSON.stringify(obj, null, 4))