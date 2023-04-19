<script setup lang="ts">
import Button from '~/components/Button.vue'
import { CartItem } from '~/types'
import { formatMoney } from '~/utils/money';

defineProps<{
  item: CartItem
}>()
</script>

<template>
  <ul class="grid gap-4">
    <li :key="item.product._id" class="flex items-center justify-between border-b py-4">
      <div>
        <p>{{ item.product.name }}</p>
        <p>{{ formatMoney(item.product.price) }}</p>
      </div>
      <div class="flex justify-center items-center space-x-2">
        <Button text="-" :onClick="() => $store.dispatch('shoppingCart/setQuantity', { product: item.product, quantity: item.quantity - 1 })" />
        <span>{{ item.quantity }}</span>
        <Button text="+" :onClick="() => $store.dispatch('shoppingCart/setQuantity', { product: item.product, quantity: item.quantity + 1 })" />
      </div>
    </li>
  </ul>
</template>
