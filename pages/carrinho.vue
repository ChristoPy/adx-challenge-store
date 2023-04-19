<template>
  <section class="py-8 mt-12 px-4">
    <div class="container mx-auto max-w-5xl">
      <h1 class="font-bold text-4xl my-4 py-8">Carrinho</h1>

      <ShoppingCartItem
        v-for="item of $store.getters['shoppingCart/items']"
        :key="item.product._id"
        :item="item"
      />
      <ShoppingCartTotal />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ShoppingCartPage',
  head: {
    title: 'Carrinho',
  },
})
</script>
