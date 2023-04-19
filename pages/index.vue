<template>
  <section
    class="container mx-auto flex items-center flex-wrap mt-12 pt-8 pb-12"
  >
    <ProductCard
      v-for="product of $store.getters['products/products']"
      :key="product._id"
      :product="product"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head: {
    title: 'Loja',
  },
  created() {
    this.$store.dispatch('products/getProducts')
  },
})
</script>
