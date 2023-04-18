<script setup lang="ts">
import { defineProps } from 'vue'

import { Product } from '@/types/product'

function onclick() {
  console.log('clicked')
}

defineProps<{
  product: Product
}>()
</script>

<template>
  <Button full text="Por no Carrinho" :onClick="onclick"></Button>
</template>
