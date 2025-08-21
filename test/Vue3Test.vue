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

<script>
export default {
    name: 'Vue3Test',
    props: {
        initialTitle: {
            type: String,
            default: 'Default Title',
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
    emits: ['custom-event'],
    data() {
        return {
            title: this.initialTitle,
            subtitle: 'Test subtitle',
            isVisible: true,
            inputValue: '',
            showElement: true,
            isActive: false,
        }
    },
    methods: {
        handleClick() {
            this.isActive = !this.isActive
            this.$emit('custom-event', { type: 'click', timestamp: Date.now() })
        },
    },
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
