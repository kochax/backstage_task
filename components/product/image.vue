<script lang="ts" setup>
const props = defineProps<{ imageUrl?: string, classAdd?: string, sizes?: string | Record<string, any> | undefined }>()
const imageUrl = ref(props.imageUrl)

function onImageLoadError() {
  imageUrl.value = 'product-placeholder.png'

}
</script>
<template>
  <NuxtImg :src="imageUrl" :sizes="props.sizes" fit="cover" :class="props.classAdd" @error="onImageLoadError" />
</template>