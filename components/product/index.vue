<script lang="ts" setup>
import type { Product } from '~/shared/types/api/product';

defineProps<{ product: Product }>();

const { formatPrice } = usePriceUtils()
</script>

<template>
  <NuxtLink :to="'/products/' + product.id">
    <div class="flex flex-col w-80 h-72 product-card">
      <div class="description">
        {{ product.description }}
      </div>
      <ProductImage :image-url="product.image" class-add="image-wrap" sizes="sm:50vw md:200px" />
      <h2 class="text-xl link-title">{{ product.title }}</h2>
      <span class="text-xs link-price">{{ formatPrice(product.price) }}</span>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
$animation-duration: 0.5s;
$animation-type: ease;

a {
  @apply no-underline;

  &:hover {
    @apply text-white;

    .link-title,
    .link-price {
      opacity: .67;
    }
  }
}

.product-card {
  position: relative;
  overflow: hidden;

  .description {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    background: transparent;
    opacity: 0;
    transform: translateY(100%);
    transition: opacity $animation-duration $animation-type, transform $animation-duration $animation-type;
  }

  .image-wrap {
    aspect-ratio: 4 / 3;
    transition: opacity $animation-duration $animation-type, transform $animation-duration $animation-type;
  }

  &:hover {
    .description {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }

    .image-wrap {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
}
</style>
