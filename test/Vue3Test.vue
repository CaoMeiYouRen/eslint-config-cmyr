<template>
    <div class="vue3-test">
        <h1>{{ title }}</h1>
        <p v-if="isVisible">
            {{ subtitle }}
        </p>
        <p v-else>
            Hidden content
        </p>

        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
            </li>
        </ul>

        <button @click="handleClick">
            Click me
        </button>

        <input v-model="inputValue" type="text">

        <div v-show="showElement">
            Shown element
        </div>

        <div :class="{active: isActive}">
            Dynamic class
        </div>
    </div>
</template>

<script setup lang="ts">
// 这是一个用于测试ESLint Vue规则的TypeScript测试文件
// 使用Vue 3 Composition API with TypeScript

// 模拟Vue API，用于ESLint测试
declare function ref<T>(value: T): { value: T }
declare function defineProps<T>(): T
declare function withDefaults<T, D>(props: T, defaults: D): T & D
declare function defineEmits<T = Record<string, any[]>>(): (event: keyof T, ...args: any[]) => void

// 定义 props 类型接口
interface Props {
    initialTitle?: string
    items?: Array<{ id: number; name: string }>
}

// 使用 withDefaults 和 defineProps 的 TypeScript 语法
const props = withDefaults(defineProps<Props>(), {
    initialTitle: 'Default Title',
    items: () => [],
})

// 定义 emits 事件类型
interface EmitEvents {
    'custom-event': [payload: { type: string; timestamp: number }]
}

const emit = defineEmits<EmitEvents>()

// 响应式数据 - 使用明确的类型注解
const title = ref<string>(props.initialTitle ?? 'Default Title')
const subtitle = ref<string>('Test subtitle')
const isVisible = ref<boolean>(true)
const inputValue = ref<string>('')
const showElement = ref<boolean>(true)
const isActive = ref<boolean>(false)

// 方法定义 - 使用明确的返回类型
const handleClick = (): void => {
    isActive.value = !isActive.value
    emit('custom-event', { type: 'click', timestamp: Date.now() })
}
</script>

<style lang="scss" scoped>
.vue3-test {
    padding: 20px;

    h1 {
        color: #2c3e50;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding: 8px 0;
        border-bottom: 1px solid #eee;
    }

    button {
        margin: 5px;
        padding: 8px 16px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input {
        width: 100%;
        padding: 8px;
        margin: 5px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .active {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
    }
}
</style>
