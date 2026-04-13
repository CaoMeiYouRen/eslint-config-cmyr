<template>
    <section class="vue-strict-test">
        <h1>{{ title }}</h1>
        <p>{{ profileLabel }}</p>
    </section>
</template>

<script setup lang="ts">
declare function ref<T>(value: T): { value: T }

async function loadProfile(): Promise<any> {
    return {
        title: 'Vue Strict Mode',
        metadata: {
            label: 'strict payload',
        },
    }
}

const title = ref<string>('Vue Strict Mode')
const profile = ref<any>({
    title: 'fallback',
    metadata: {
        label: 'fallback',
    },
})

loadProfile()

const profileLabel = profile.value.metadata.label
</script>

<style scoped>
.vue-strict-test {
    padding: 16px;
}
</style>
