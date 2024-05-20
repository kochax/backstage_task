<script setup lang="ts">
const props = defineProps<{ layout?: 'tile' | 'info' }>()
const selectedLayout = props.layout || 'tile';
</script>

<template>
  <div :class="selectedLayout">
    <slot v-if="selectedLayout === 'info'">
      <USkeleton class="h-64 w-96" />
      <div class="flex flex-col h-full items-start space-y-2 w-96">
        <USkeleton class="w-full h-4" />
        <USkeleton class="w-full h-4" />
        <USkeleton class="w-full h-4" />
      </div>
    </slot>
    <slot v-if="selectedLayout === 'tile'">
      <USkeleton class="h-48 w-80" />
      <USkeleton class="h-12 w-80" />
    </slot>
  </div>
</template>

<style scoped lang="scss">
.tile {
  @apply flex flex-col w-80 h-72 gap-2 justify-evenly;
}

.info {
  @apply flex flex-col md:flex-row xl:flex-row w-full h-auto gap-2 items-start;
}
</style>