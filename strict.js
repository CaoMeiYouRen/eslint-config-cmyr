import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import { __WARN__, createLanguageOptions } from './utils.js'
import indexConfig from './index.js'

export default defineConfig([
    indexConfig,
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        extends: [
            tseslint.configs.recommendedTypeChecked,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
        ],
        plugins: {
            tseslint,
        },
        languageOptions: createLanguageOptions({}, {
            projectService: {
                defaultProject: 'tsconfig.json',
            },
            tsconfigRootDir: process.cwd(),
        }),
        rules: {

            '@typescript-eslint/no-deprecated': [1], // 禁止使用已废弃的 API
            '@typescript-eslint/no-floating-promises': [1], // 禁止忽略 Promise 返回值
            '@typescript-eslint/no-misused-promises': [1], // 禁止将 Promise 误用为条件表达式
            '@typescript-eslint/await-thenable': [1], // 禁止等待非 Promise 类型的值
            '@typescript-eslint/no-base-to-string': [1], // 禁止将对象直接转换为字符串
            '@typescript-eslint/no-unnecessary-type-assertion': [0], // 禁止不必要的类型断言
            '@typescript-eslint/no-unsafe-enum-comparison': [1], // 禁止将枚举与非枚举类型进行比较
            '@typescript-eslint/no-redundant-type-constituents': [1], // 禁止联合类型中包含冗余的成员
            '@typescript-eslint/only-throw-error': [1], // 禁止不做任何处理就再次向上抛出相同的 error
            '@typescript-eslint/prefer-optional-chain': [1], // 建议使用可选链 (?.) 替代逻辑与 (&&) 来访问深层嵌套的属性
            '@typescript-eslint/require-await': [1], // 禁止在 async 函数中不使用 await 表达式
            '@typescript-eslint/non-nullable-type-assertion-style': [0], // 建议使用非空断言 (postfix !) 替代类型断言来消除 null 和 undefined
            '@typescript-eslint/no-inferrable-types': [0], // 对于初始化为数字、字符串或布尔值的变量或参数，不允许显式类型声明
            '@typescript-eslint/explicit-function-return-type': [0], // 要求函数和类方法的显式返回类型
            '@typescript-eslint/explicit-module-boundary-types': [1, {
                allowArgumentsExplicitlyTypedAsAny: true,
            }], // 要求导出函数和类的公共类方法的显式返回和参数类型
            '@typescript-eslint/no-explicit-any': [1], // 不允许使用any类型
            '@typescript-eslint/no-unsafe-argument': [1], // 不允许传递 any 类型的值作为参数
            '@typescript-eslint/no-unsafe-assignment': [1], // 不允许将 any 类型的值分配给其他类型
            '@typescript-eslint/no-unsafe-member-access': [1], // 不允许对 any 类型的值进行成员访问
            '@typescript-eslint/no-unsafe-return': [1], // 不允许从函数返回 any 类型的值
            '@typescript-eslint/no-unsafe-call': [1], // 不允许对 any 类型的值进行调用
            '@typescript-eslint/unbound-method': [1], // 不允许不绑定上下文的类方法引用
            '@typescript-eslint/restrict-template-expressions': [0], // 允许在模板字符串中使用非字符串类型的表达式
            '@typescript-eslint/prefer-nullish-coalescing': [1], // 建议使用空值合并运算符 (??) 替代逻辑或 (||) 来处理 null 或 undefined
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': [1], // 禁止与 boolean 字面量进行不必要的比较
            '@typescript-eslint/return-await': [1], // 禁止在返回语句中使用 await，除非在 try/catch 块中
            '@typescript-eslint/no-invalid-void-type': [1], // 禁止在泛型或返回类型之外使用 void 类型
            '@typescript-eslint/no-unnecessary-type-parameters': [1], // 禁止在类型参数未被使用时将其添加到泛型函数中
            '@typescript-eslint/no-misused-spread': [0], // 禁止在可能引起意外行为时使用展开运算符
            '@typescript-eslint/no-dynamic-delete': [0], // 允许使用 delete 操作符删除对象的属性，即使该对象的类型不包含索引签名
            '@typescript-eslint/no-unnecessary-type-conversion': [0], // 禁止在表达式类型或值未发生变化时使用转换惯用法
        },
    },
])
