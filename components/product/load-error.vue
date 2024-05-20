<script lang="ts" setup>
const emits = defineEmits(['refresh'])
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <h2>Could not load product</h2>
    <div class="flex gap-2">
      <UButton to="/products">Go to products</UButton>
      <UButton @click="$emit('refresh')">Reload</UButton>
    </div>
  </div>
</template>
