// 测试TypeScript ESLint规则的各种边界情况（合规版本）

// 1. 测试类型安全 - 避免any
function acceptsTyped(param: string | number): string {
    return param.toString()
}

// 2. 测试使用变量
const usedTsVariable = 'this is used'

// 3. 测试非空函数
function nonEmptyFunction(): void {
    console.info('Function with implementation')
}

// 4. 测试避免变量遮蔽
const shadowVar = 'outer'
function testNoShadow() {
    const innerVar = 'inner' // 使用不同名称
    return { outer: shadowVar, inner: innerVar }
}

// 5. 测试类型断言的正确使用
const literalObject = { type: 'test' } as const

// 6. 测试ES模块导入
import * as fs from 'fs'

// 7. 测试接口定义
interface TestInterface {
    name: string
    age?: number
}

// 8. 测试类型定义
type SafeFunction = () => string

// 9. 测试基本类型推断
const inferrableNumber = 42 // 类型推断，无需显式声明

// 10. 测试接口和类型的使用
interface ExtendedInterface extends TestInterface {
    email: string
}

interface TestType {
    title: string
    count: number
}

// 11. 测试泛型函数
function genericFunction<T>(param: T): T {
    return param
}

// 12. 测试枚举
enum TestEnum {
    FIRST = 'first',
    SECOND = 'second',
}

// 13. 测试类的定义
class TestClass {
    private readonly _value: string

    constructor(value: string) {
        this._value = value
    }

    public getValue(): string {
        return this._value
    }

    public processValue(): string {
        return this._value.toUpperCase()
    }
}

// 14. 测试装饰器函数
function testDecorator(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    console.info(`Decorating ${propertyName}`)
    return descriptor
}

// 15. 测试联合类型处理
type UnionType = string | number | boolean

function handleUnion(value: UnionType): string {
    if (typeof value === 'string') {
        return value.toUpperCase()
    }
    if (typeof value === 'number') {
        return value.toString()
    }
    return value ? 'true' : 'false'
}

// 16. 测试交叉类型
type IntersectionType = TestInterface & TestType

// 17. 测试映射类型
type PartialTest = Partial<TestInterface>
type RequiredTest = Required<TestInterface>

// 18. 测试条件类型
type ConditionalType<T> = T extends string ? 'string' : 'not string'

// 19. 测试模板字面量类型
type TemplateType = `prefix_${string}_suffix`

// 20. 测试异步函数
async function asyncFunction(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('async result')
        }, 1000)
    })
}

// 21. 测试生成器函数
function* generatorFunction(): Generator<number, void, unknown> {
    yield 1
    yield 2
    yield 3
}

// 22. 测试可选链和空值合并
function testOptionalChaining(obj?: { nested?: { value?: string } }): string {
    return obj?.nested?.value ?? 'default'
}

// 23. 测试断言函数
function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('Not a string')
    }
}

// 24. 测试重载函数
function overloadedFunction(param: string): string
function overloadedFunction(param: number): number
function overloadedFunction(param: string | number): string | number {
    return param
}

// 正确的导出函数，使用所有定义的类型和函数
export function uuid(): string {
    // 使用各种定义来避免unused warnings
    console.info('Used variable:', usedTsVariable)
    console.info('Accept typed:', acceptsTyped('test'))
    nonEmptyFunction()
    console.info('No shadow test:', testNoShadow())
    console.info('Literal object:', literalObject)
    console.info('Fs exists:', typeof fs)
    console.info('Generic result:', genericFunction('hello'))
    console.info('Enum value:', TestEnum.FIRST)

    const testInstance = new TestClass('test')
    console.info('Class result:', testInstance.processValue())

    console.info('Union handling:', handleUnion('test'))
    console.info('Optional chaining:', testOptionalChaining({ nested: { value: 'found' } }))

    try {
        assertIsString('valid string')
        console.info('Assertion passed')
    } catch (error) {
        console.error('Assertion failed:', error)
    }

    console.info('Overloaded function:', overloadedFunction('test'))

    // 使用异步函数和生成器
    asyncFunction().then((result) => console.info('Async result:', result))

    const gen = generatorFunction()
    console.info('Generator first value:', gen.next().value)

    // 类型示例
    const partialExample: PartialTest = { name: 'partial' }
    const intersectionExample: IntersectionType = {
        name: 'test',
        title: 'title',
        count: 1,
    }

    console.info('Types used:', partialExample, intersectionExample)

    // 使用装饰器引用
    console.info('Decorator function:', testDecorator.name)

    return typeof globalThis as string
}
