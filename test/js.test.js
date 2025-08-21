// 测试JavaScript ESLint规则的各种边界情况（合规版本）

// 1. 测试 prefer-const 规则 - 使用const
const shouldBeConst = 'never changed'
console.info('使用const:', shouldBeConst)

// 2. 测试现代变量声明 - 避免var
const modernVar = 'use const/let instead of var'

// 3. 测试 eqeqeq 规则 - 使用 === 而不是 ==
function testEquality(a, b) {
    return a === b // 正确使用严格相等
}

// 4. 测试已使用的变量
const usedVariable = 'this is used'

// 5. 测试 no-debugger 规则 - 使用console.error代替
function debugTest() {
    console.error('Debug info instead of debugger')
}

// 6. 测试允许的console方法
function consoleTest() {
    console.warn('Warning message') // 允许的console方法
    console.error('Error message') // 允许的console方法
    console.info('Info message') // 允许的console方法
}

// 7. 测试单一导入
// import { test } from './test-module' // 单个导入

// 8. 测试 no-else-return 规则 - 避免不必要的else
function noUnnecessaryElse(condition) {
    if (condition) {
        return true
    }
    return false // 避免else
}

// 9. 测试 no-empty 规则 - 避免空块
function noEmptyBlock(condition) {
    if (condition) {
        console.info('Condition is true')
    }
}

// 10. 测试避免eval - 使用JSON.parse或其他安全方法
function safeEval() {
    const data = '{"value": 42}'
    return JSON.parse(data) // 安全的替代方案
}

// 11. 测试避免 lonely-if - 使用 else if
function avoidLonelyIf(condition1, condition2) {
    if (condition1) {
        return 'first'
    }
    if (condition2) {
        return 'second'
    }
    return 'default'
}

// 12. 测试避免多重赋值
function avoidMultiAssign() {
    const a = 5
    const b = 5
    return a + b
}

// 13. 测试避免嵌套三元运算符
function avoidNestedTernary(a, b, c) {
    if (a) {
        return b
    }
    return c || 'default'
}

// 14. 测试避免不必要的三元运算符
function avoidUnneededTernary(condition) {
    return Boolean(condition) // 直接返回布尔值
}

// 15. 测试避免无用的return
function avoidUselessReturn() {
    console.info('Function completed')
    // 函数自然结束，无需return
}

// 16. 测试对象方法简写
const obj = {
    method() {
        return 'using shorthand'
    },
    value: 42,
}

// 17. 测试箭头函数回调
const arr = [1, 2, 3]
const doubled = arr.map((item) => item * 2)

// 18. 测试模板字符串
function templateTest(name) {
    return `Hello ${name}` // 使用模板字符串
}

// 19. 测试正确的代码风格
function styleTest() {
    const properIndent = 'single quotes'
    return properIndent
}

// 20. 测试大括号使用
function useBraces(condition) {
    if (condition) {
        return true
    }
    return false
}

// 21. 测试合理的参数数量
function reasonableParams(config) {
    return config.a + config.b + config.c
}

// 22. 测试避免过深的回调嵌套 - 使用async/await
async function avoidDeepNesting() {
    try {
        const result1 = await new Promise((resolve) => setTimeout(() => resolve('step1'), 100))
        const result2 = await new Promise((resolve) => setTimeout(() => resolve('step2'), 100))
        console.info('Results:', result1, result2)
        return 'completed'
    } catch (error) {
        console.error('Error:', error)
        return 'failed'
    }
}

// 正确的导出函数
export function test() {
    // 调用各种测试函数以确保它们被使用
    console.info('Testing equality:', testEquality(1, 1))
    console.info('Used variable:', usedVariable)
    debugTest()
    consoleTest()
    noUnnecessaryElse(true)
    noEmptyBlock(true)
    console.info('Safe eval result:', safeEval())
    avoidLonelyIf(false, true)
    console.info('Multi assign result:', avoidMultiAssign())
    console.info('Ternary result:', avoidNestedTernary(true, 'yes', 'no'))
    console.info('Boolean result:', avoidUnneededTernary(true))
    avoidUselessReturn()
    console.info('Object method:', obj.method())
    console.info('Doubled array:', doubled)
    console.info('Template:', templateTest('World'))
    console.info('Style test:', styleTest())
    console.info('Braces test:', useBraces(true))
    console.info('Reasonable params:', reasonableParams({ a: 1, b: 2, c: 3 }))
    avoidDeepNesting()

    return typeof globalThis
}
