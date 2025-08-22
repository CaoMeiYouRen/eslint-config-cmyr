import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import { __ERROR__, __WARN__, languageOptions, commonIgnores } from './utils.js'

export default defineConfig([
    {
        ignores: commonIgnores,
    },
    // js 规则
    // 基础规则
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
        extends: [js.configs.recommended],
        plugins: {
            js,
        },
        languageOptions,
        rules: {
            // 'no-unused-vars': [__WARN__], // 禁止出现未使用过的变量
            'array-callback-return': [1], // 强制数组方法的回调函数中有 return 语句
            'arrow-body-style': [__WARN__, 'as-needed'], // 要求箭头函数体使用大括号,当大括号是可以省略的，强制不使用它们 (默认)
            'consistent-this': [1], // 当获取当前执行环境的上下文时，强制使用一致的命名
            curly: [2, 'all'], // 要求遵循大括号约定
            'dot-notation': [0], // 强制尽可能地使用点号
            eqeqeq: [2], // 要求使用 === 和 !==
            'func-style': [2, 'declaration', { allowArrowFunctions: true }], // 强制 function 声明或表达式的一致性
            'handle-callback-err:': [0, '^(e|err|error)$'], // 强制回调错误处理
            'new-cap': [0], // 要求构造函数首字母大写
            'no-alert': [__WARN__], // 禁用 Alert
            'no-console': [0, { allow: ['warn', 'error', 'info'] }], // 禁止console
            'no-debugger': [__ERROR__], // 禁止debugger
            'no-div-regex': [1], // 禁止除法操作符显式的出现在正则表达式开始的位置
            'no-duplicate-imports': [2], // 禁止模块重复导入
            'no-else-return': [2,
                {
                    allowElseIf: false, // 禁止在 return 之后有 else if 块
                }], // 禁止在 else 前有 return
            'no-empty': [1], // 禁止有空代码块
            'no-eval': [2], // 禁用 eval()
            'no-extend-native': [2, { exceptions: [] }], // 禁止扩展原生对象
            'no-extra-boolean-cast': [2], // 禁止不必要的布尔类型转换
            'no-implied-eval': [1], // 禁用隐式的eval()
            'no-lonely-if': [2], // 禁止 if 语句作为唯一语句出现在 else 语句块中
            'no-loop-func': [1], // 禁止在循环语句中出现包含不安全引用的函数声明
            'no-multi-assign': [2], // 禁止连续赋值
            'no-nested-ternary': [2], // 禁止使用嵌套的三元表达式
            'no-new-wrappers': [2], // 禁止原始包装实例
            'no-plusplus': [0], // 禁止++或--
            // 'no-redeclare': [2, { builtinGlobals: true }], // 禁止重新声明变量
            'no-return-assign': [2], // 禁止在返回语句中赋值
            // 'no-shadow': [2], // 禁止变量声明与外层作用域的变量同名
            'no-unneeded-ternary': [2], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
            'no-use-before-define': [0], // 禁止在变量定义之前使用它们
            'no-useless-call': [1], // 禁止不必要的 .call() 和 .apply()
            'no-useless-constructor': [__ERROR__], // 禁用不必要的构造函数
            'no-useless-return': [__ERROR__], // 禁止多余的 return 语句
            'no-var': [2], // 要求使用 let 或 const 而不是 var
            'max-lines': [0, { max: 500 }], // 强制文件的最大行数
            'max-lines-per-function': [0, { max: 120 }], // 强制函数最大行数
            'max-nested-callbacks': [1, { max: 5 }], // 强制回调函数最大嵌套深度
            'max-params': [1, { max: 5 }], // 强制函数定义中最大参数个数
            'object-shorthand': [2], // 要求或禁止对象字面量中方法和属性使用简写语法
            'one-var': [1, 'never'], // 强制函数中的变量在一起声明或分开声明
            'operator-assignment': [2], // 要求或禁止尽可能地简化赋值操作
            'prefer-arrow-callback': [2], // 要求回调函数使用箭头函数
            'prefer-const': [__ERROR__], // 建议使用const
            'prefer-rest-params': [2], // 要求使用剩余参数而不是 arguments
            'prefer-template': [2], // 建议使用模板字面量而非字符串连接 (prefer-template)
            'require-await': [0], // 不允许没有异步函数的异步函数await表达
            'sort-imports': [0], // import 排序

            'no-redeclare': [0], // 禁止重新声明变量
            'no-shadow': [0], // 禁止变量声明与外层作用域的变量同名
            'no-unused-vars': [0], // 禁止出现未使用过的变量
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
        severity: 'warn', // 设置错误级别为 warn
    }),
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
        rules: {
            '@stylistic/quote-props': [1, 'as-needed', { keywords: false, numbers: true }], // 当没有严格要求时，禁止对象字面量属性名称使用引号
            '@stylistic/no-multiple-empty-lines': [1, { max: 2, maxBOF: 0, maxEOF: 1 }], // 禁止多余的空行
            '@stylistic/padded-blocks': [0, { blocks: 'always', classes: 'always', switches: 'never' }], // 强制在代码块中保持一致的空行填充
            '@stylistic/no-mixed-operators': [1], // 允许混合使用不同的操作符
            '@stylistic/multiline-ternary': [1, 'always-multiline'], // 在三元表达式跨越多行时，强制操作符之间的换行。
            '@stylistic/operator-linebreak': [1, 'before', { overrides: { '=': 'after' } }], // 强制执行运算符的一致换行风格。
        },
    },
    // import 插件配置
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
        extends: [
            importPlugin.flatConfigs.recommended,
            importPlugin.flatConfigs.typescript,
        ],
        rules: {
            'import/no-unresolved': 0,
            'import/order': 1,
            'import/default': 0,
            'import/namespace': 0,
            'import/no-named-as-default': 0,
            'import/no-named-as-default-member': 0,
        },
    },
    // tseslint 规则
    /**
   * typescript 规则
   */
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
        extends: [tseslint.configs.recommended],
        rules: {
            '@typescript-eslint/camelcase': [0], // 驼峰式风格
            '@typescript-eslint/default-param-last': [2], // 最后执行缺省参数
            '@typescript-eslint/explicit-function-return-type': [0], // 要求函数和类方法的显式返回类型
            '@typescript-eslint/explicit-module-boundary-types': [0, {
                allowArgumentsExplicitlyTypedAsAny: true,
            }], // 要求导出函数和类的公共类方法的显式返回和参数类型
            '@typescript-eslint/no-empty-function': [__WARN__], // 禁止空函数
            '@typescript-eslint/no-explicit-any': [0], // 不允许使用any类型
            '@typescript-eslint/no-inferrable-types': [0], // 对于初始化为数字、字符串或布尔值的变量或参数，不允许显式类型声明
            '@typescript-eslint/no-redeclare': [1, { ignoreDeclarationMerge: true }], // 禁止重新声明变量
            '@typescript-eslint/no-shadow': [2], // 禁止变量声明与外层作用域的变量同名
            '@typescript-eslint/no-unused-vars': [__WARN__], // 禁止未使用的变量
            '@typescript-eslint/prefer-as-const': [1], // 强制在文本类型上使用 as const。
            '@typescript-eslint/no-require-imports': 1, // 禁止使用 require 导入
            '@typescript-eslint/no-empty-object-type': 1, // 禁止空对象类型
            '@typescript-eslint/no-unsafe-function-type': 1, // 禁止使用 Function 类型
            '@typescript-eslint/no-wrapper-object-types': 1, // 禁止使用 原始类型
        },
    },
])
