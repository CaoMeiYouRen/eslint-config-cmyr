// 测试Browser环境下的ESLint规则边界情况（合规版本）

// 1. 测试全局变量使用
function testGlobalVariables() {
    // 使用window对象
    console.info(window.location.href)
    console.info(document.title)
    console.info(navigator.userAgent)

    // localStorage和sessionStorage
    localStorage.setItem('test', 'value')
    const stored = sessionStorage.getItem('test')

    return stored
}

// 2. 测试DOM操作
function testDOMManipulation() {
    const element = document.getElementById('test')
    if (element) {
        element.textContent = 'Safe content' // 使用textContent而不是innerHTML
        element.style.color = 'red'
        element.addEventListener('click', handleClick)
    }

    // 创建新元素
    const newDiv = document.createElement('div')
    newDiv.className = 'test-div'
    newDiv.textContent = 'New element'
    document.body.appendChild(newDiv)
}

// 3. 测试事件处理
function handleClick(event) {
    event.preventDefault()
    console.info('Element clicked', event.target)

    // 事件委托
    if (event.target.matches('.button')) {
        console.info('Button clicked')
    }
}

// 4. 测试异步操作
async function testAsyncOperations() {
    // fetch API
    try {
        const response = await fetch('/api/data')
        const data = await response.json()
        console.info('Data received:', data)
    } catch (error) {
        console.error('Fetch failed:', error)
    }

    // setTimeout和setInterval
    const timeoutId = setTimeout(() => {
        console.info('Timeout executed')
    }, 1000)

    const intervalId = setInterval(() => {
        console.info('Interval tick')
    }, 5000)

    // 清理定时器
    clearTimeout(timeoutId)
    clearInterval(intervalId)
}

// 5. 测试表单处理
function testFormHandling() {
    const form = document.querySelector('form')
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formData = new FormData(form)
            const data = Object.fromEntries(formData.entries())

            console.info('Form data:', data)

            // 表单验证
            const email = formData.get('email')
            if (!email || !email.includes('@')) {
                console.error('Invalid email')
                return false
            }
            return true
        })
    }
}

// 6. 测试Web APIs
function testWebAPIs() {
    // Geolocation API
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.info('Location:', position.coords.latitude, position.coords.longitude)
            },
            (error) => {
                console.error('Geolocation error:', error)
            },
        )
    }

    // Notification API
    if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                const notification = new Notification('Test notification')
                return notification
            }
            return null
        })
    }
}

// 7. 测试Web Storage
function testWebStorage() {
    // 检查支持
    if (typeof Storage !== 'undefined') {
        // localStorage
        localStorage.setItem('user', JSON.stringify({ name: 'John', age: 30 }))
        const user = JSON.parse(localStorage.getItem('user') || '{}')

        // sessionStorage
        sessionStorage.setItem('session', 'active')

        console.info('User from storage:', user)
    } else {
        console.warn('Web Storage not supported')
    }
}

// 正确的导出函数
export function test() {
    window.onload = () => {
        testGlobalVariables()
        testDOMManipulation()
        testFormHandling()
        testAsyncOperations()
        testWebAPIs()
        testWebStorage()
    }
}
