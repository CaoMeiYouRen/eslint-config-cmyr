<template>
    <section class="nuxt-strict-test">
        <h1>{{ title }}</h1>
        <p>{{ payloadLabel }}</p>
    </section>
</template>

<script setup lang="ts">
declare function ref<T>(value: T): { value: T }

async function loadPayload(): Promise<any> {
    return {
        metadata: {
            label: 'nuxt strict payload',
        },
    }
}

const title = ref<string>('Nuxt Strict Mode')
const payload = ref<any>({
    metadata: {
        label: 'fallback',
    },
})

loadPayload()

const payloadLabel = payload.value.metadata.label
</script>

<style scoped>
.nuxt-strict-test {
    padding: 16px;
}
</style>
