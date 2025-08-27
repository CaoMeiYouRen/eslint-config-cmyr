// 测试TypeScript规则的边界情况（不使用React）

// 1. 测试接口定义
interface ComponentConfig {
    title: string
    count?: number
    callback?: () => void
}

// 2. 测试类型定义
type ButtonVariant = 'primary' | 'secondary' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

// 3. 测试泛型接口
interface GenericContainer<T> {
    items: T[]
    processor: (item: T) => string
}

// 4. 测试类的定义
class ConfigManager {
    private readonly config: ComponentConfig

    constructor(config: ComponentConfig) {
        this.config = config
    }

    public getTitle(): string {
        return this.config.title
    }

    public getCount(): number {
        return this.config.count ?? 0
    }

    public executeCallback(): void {
        if (this.config.callback) {
            this.config.callback()
        }
    }
}

// 5. 测试枚举
enum ActionType {
    CREATE = 'create',
    UPDATE = 'update',
    DELETE = 'delete',
}

// 6. 测试泛型函数
function processItems<T>(container: GenericContainer<T>): string[] {
    return container.items.map(container.processor)
}

// 7. 测试联合类型函数
function createButton(variant: ButtonVariant, size: ButtonSize): string {
    return `Button: ${variant} ${size}`
}

// 8. 测试异步函数
async function fetchConfig(): Promise<ComponentConfig> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                title: 'Async Config',
                count: 42,
            })
        }, 100)
    })
}

// 9. 测试类型守卫
function isValidConfig(config: unknown): config is ComponentConfig {
    return (
        typeof config === 'object'
        && config !== null
        && 'title' in config
        && typeof (config as ComponentConfig).title === 'string'
    )
}

// 10. 测试映射类型
type PartialConfig = Partial<ComponentConfig>
type RequiredConfig = Required<ComponentConfig>

// 11. 测试条件类型
type ConfigValue<T> = T extends string ? string : number

// 12. 测试工具类型使用
function updatePartialConfig(config: ComponentConfig, updates: PartialConfig): ComponentConfig {
    return { ...config, ...updates }
}

// 正确的导出函数，使用所有定义的类型和函数
export function Test(): string {
    // 使用各种定义来避免unused warnings
    const config: ComponentConfig = {
        title: 'Test Config',
        count: 10,
        callback: () => console.info('Callback executed'),
    }

    const manager = new ConfigManager(config)
    console.info('Title:', manager.getTitle())
    console.info('Count:', manager.getCount())
    manager.executeCallback()

    const stringContainer: GenericContainer<string> = {
        items: ['hello', 'world'],
        processor: (item) => item.toUpperCase(),
    }

    const numberContainer: GenericContainer<number> = {
        items: [1, 2, 3],
        processor: (item) => `Number: ${item}`,
    }

    console.info('String processed:', processItems(stringContainer))
    console.info('Number processed:', processItems(numberContainer))

    console.info('Button:', createButton('primary', 'lg'))
    console.info('Action type:', ActionType.CREATE)

    // 异步操作
    fetchConfig().then((asyncConfig) => {
        console.info('Async config:', asyncConfig)
    })

    // 类型守卫测试
    const unknownData: unknown = { title: 'Valid', count: 5 }
    if (isValidConfig(unknownData)) {
        console.info('Valid config:', unknownData.title)
    }

    // 类型工具使用
    const partialUpdate: PartialConfig = { count: 20 }
    const updatedConfig = updatePartialConfig(config, partialUpdate)
    console.info('Updated config:', updatedConfig)

    return 'TypeScript test completed'
}
