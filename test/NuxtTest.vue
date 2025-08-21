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

<script>
export default {
    name: 'NuxtTest',
    data() {
        return {
            title: 'Nuxt Test Page',
            pending: false,
            error: null,
            posts: [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' },
                { id: 3, title: 'Post 3' },
            ],
        }
    },
}
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
