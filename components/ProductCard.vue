<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { formatMoney } from '@/utils/money'
import { Product } from '@/types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <RouterLink :to="`/produto/${product._id}`">
      <ProductImage :name="product.name" :image="product.image" />
      <h3 class="pt-3 font-bold text-2xl">{{ product.name }}</h3>

      <p class="pt-1 pb-3 text-gray-900">{{ formatMoney(product.price) }}</p>
    </RouterLink>
    <AddToCartButton :product="product" />
  </div>
</template>
