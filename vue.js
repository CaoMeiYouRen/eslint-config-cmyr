'use strict'
const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0

/**
 * str1 比 str2 大则返回 1 ； str1 比 str2 小则返回 -1；相等返回 0
 *
 * @author CaoMeiYouRen
 * @date 2022-07-27
 * @param str1 {string}
 * @param str2 {string}
 */
function versionCompare(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new Error('传入的版本号必须为字符串')
    }
    // 第一步：使用正则，先把传参进来的两个版本号中空格给替换成空。
    let nStr1 = str1.replace(/(^\s+)|(\s+$)/gi, '')
    let nStr2 = str2.replace(/(^\s+)|(\s+$)/gi, '')
    // 第三步：使用正则来匹配截取两个传进来的版本号中的版本数字
    const req = /\d(\.|\d)*\d/gi // 这个是匹配**.**.**数字的正则
    nStr1 = nStr1.match(req)[0] // match出来的是一个数组，这个匹配出来在第0个
    nStr2 = nStr2.match(req)[0]
    // 第四步：版本比较，先把版本号字符串切割成数组，[主版本号，次版本号，修订号]
    const arr1 = nStr1.split('.').map((e) => parseInt(e)) // [**,**,**]
    const arr2 = nStr2.split('.').map((e) => parseInt(e))
    // 第五步：分别开始分情况比较版本号
    const n = Math.min(arr1.length, arr2.length)
    for (let i = 0; i < n; i++) {
        if (arr1[i] > arr2[i]) {
            return 1
        }
        if (arr1[i] < arr2[i]) {
            return -1
        }
    }
    if (arr1.length > arr2.length && arr1[n] > 0) {
        return 1
    }
    if (arr1.length < arr2.length && arr2[n] > 0) {
        return -1
    }
    return 0
}

function getRules() {
    const { version = '' } = require('eslint-plugin-vue/package.json')
    const rules = {
        'vue/array-bracket-spacing': 2,
        'vue/arrow-spacing': 2,
        'vue/block-spacing': 2,
        // 'vue/block-tag-newline': 2, // 在打开后和关闭块级标记之前强制换行
        'vue/brace-style': 2,
        'vue/camelcase': 2,
        'vue/comma-dangle': 2,
        'vue/component-name-in-template-casing': 2, // 校验组件 case
        'vue/eqeqeq': 2,
        'vue/html-indent': [2, 4], // vue中缩进为4
        'vue/html-quotes': [2, 'double'], // vue中用双引号
        'vue/html-self-closing': [__ERROR__], // 自闭合标签
        'vue/key-spacing': 2,
        'vue/match-component-file-name': [1, { // 要求组件名称属性与其文件名匹配
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
    }

    if (versionCompare(version, '7.20.0') >= 0) {
        rules['vue/multi-word-component-names'] = [1] // 要求组件名称始终为多个单词
    }
    if (versionCompare(version, '8.4.0') >= 0) {
        rules['vue/no-v-text-v-html-on-component'] = [1]// 禁止组件上的 v-text / v-html
    }
    return rules
}

module.exports = {
    extends: [
        'plugin:vue/recommended',
        '@vue/typescript/recommended',
        require.resolve('./index'),
        require.resolve('./browser'),
    ],
    plugins: [
        'vue',
    ],
    parser: 'vue-eslint-parser',
    rules: getRules(),
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
