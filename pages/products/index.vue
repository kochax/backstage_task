<script lang="ts" setup>
import type { Product } from '~/shared/types/api/product';

const { data: products, pending, error } = useFetch<Product[]>('/api/products', { server: false })
</script>

<template>
  <div class="container flex flex-col gap-4">
    <h1 class="text-center py-4">Check out our awesome products</h1>
    <div class="grid 
      justify-center
      lg:grid-cols-[repeat(3,minmax(0,_20em))]
      md:grid-cols-[repeat(2,minmax(0,_20em))]
      sm:grid-cols-[repeat(1,minmax(0,_20em))]
      lg:gap-2
      md:gap-2
      gap-4
    ">
      <slot v-if="pending && !error">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </slot>
      <Product v-for="product in products" :product="product" />
    </div>
  </div>
</template>
