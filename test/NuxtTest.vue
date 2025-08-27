<template>
    <div class="nuxt-test">
        <h1>{{ title }}</h1>
        <p>Current route path test</p>

        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>

        <div v-if="pending">
            Loading...
        </div>
        <div v-else-if="error">
            Error occurred
        </div>
        <div v-else>
            <h2>Posts</h2>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    {{ post.title }}
                </li>
            </ul>
        </div>

        <div class="content">
            <p>Default content</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// 这是一个用于测试ESLint Nuxt规则的TypeScript测试文件
// 使用Vue 3 Composition API with TypeScript

// 模拟Vue API，用于ESLint测试
declare function ref<T>(value: T): { value: T }

// 定义数据类型接口
interface Post {
    id: number
    title: string
}

// 响应式数据 - 使用明确的类型注解
const title = ref<string>('Nuxt Test Page')
const pending = ref<boolean>(false)
const error = ref<Error | null>(null)
const posts = ref<Post[]>([
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
])
</script>

<style lang="scss" scoped>
.nuxt-test {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    h1 {
        color: #00dc82;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    nav {
        margin: 20px 0;

        a {
            margin-right: 15px;
            color: #00dc82;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .content {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            padding: 10px;
            margin: 5px 0;
            background: white;
            border: 1px solid #e9ecef;
            border-radius: 4px;

            &:hover {
                background: #f8f9fa;
            }
        }
    }
}
</style>
