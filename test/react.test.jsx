// 测试React JSX ESLint规则的各种边界情况（简化版本）

// 基础组件测试
function SimpleComponent() {
    return (
        <div>
            <h1>Simple Component</h1>
        </div>
    )
}

// 带props的组件
function PropsComponent({ title }) {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

// 列表渲染组件
function ListComponent({ items = [] }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

// 事件处理组件
function ButtonComponent() {
    const handleClick = () => {
        console.info('Button clicked')
    }

    return (
        <button onClick={handleClick} type="button">
            Click Me
        </button>
    )
}

// 条件渲染组件
function ConditionalComponent({ show = true }) {
    return (
        <div>
            {show && <p>Content is visible</p>}
            {!show && <p>Content is hidden</p>}
        </div>
    )
}

// Fragment组件
function FragmentComponent() {
    return (
        <>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </>
    )
}

// 主测试组件
export function Test() {
    const testItems = ['Item 1', 'Item 2', 'Item 3']

    return (
        <div>
            <SimpleComponent />
            <PropsComponent title="Test Title" />
            <ListComponent items={testItems} />
            <ButtonComponent />
            <ConditionalComponent show={true} />
            <ConditionalComponent show={false} />
            <FragmentComponent />
        </div>
    )
}
