<script lang="ts" setup>
const route = useRoute()
</script>

<template>
    <nav v-if="route.path !== '/'" class="w-full h-10 flex items-center gap-2 px-3">
        <NuxtLink to="/">
            <UIcon name="i-heroicons-light-bulb" />
            Home
        </NuxtLink>
        <NuxtLink to="/task">
            <UIcon name="i-heroicons-light-bulb" />
            Task
        </NuxtLink>

        <NuxtLink to="/products">
            <UIcon name="i-heroicons-light-bulb" />
            Products
        </NuxtLink>

        <NuxtLink to="/products/new">
            <UIcon name="i-heroicons-light-bulb" />
            Create product
        </NuxtLink>
    </nav>
</template>

<style scoped lang="scss">
a {
    text-decoration: none;
    @apply flex items-center gap-1
}
</style>