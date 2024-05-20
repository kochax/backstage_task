<script lang="ts" setup>
import type { Product } from '~/shared/types/api/product';

const route = useRoute()
const { formatPrice } = usePriceUtils()
const { data: product, pending, error, refresh } = useFetch<Product>(`/api/products/${route.params.id}`, { server: false })
</script>

<template>
    <div v-if="pending">
        <ProductSkeleton layout="info" />
    </div>
    <slot v-else-if="error">
        <ProductLoadError v-on:refresh="refresh()" />
    </slot>
    <div v-else class="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4">
        <div>
            <ProductImage :image-url="product?.image" class-add="image-wrap" sizes="sm:50vw md:200px lg:400px" />
        </div>
        <div>
            <h2 class="font-bold text-2xl">{{ product?.title }}</h2>
            <span v-if="product?.price">{{ formatPrice(product.price) }}</span>
            <p>{{ product?.description }}</p>
        </div>
    </div>
</template>
