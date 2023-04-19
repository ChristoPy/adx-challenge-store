<script lang="ts">
import Vue from 'vue'
import { Product } from '@/types/product'

export default Vue.extend({
  name: 'AddToCartButton',
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  methods: {
    onclick() {
      this.$store.dispatch('shoppingCart/addProduct', this.product)
    },
  },
})
</script>

<template>
  <Button full text="Por no Carrinho" :on-click="onclick">
    <svg
      v-if="!$store.getters['shoppingCart/isProductInCart'](product)"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      ></path>
    </svg>
    <svg
      v-else
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  </Button>
</template>
