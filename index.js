import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
export default defineConfig([
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
])
