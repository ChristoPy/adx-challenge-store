<template>
  <ProductsGrid />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "IndexPage",
  created() {
    this.$store.dispatch("products/getProducts");
  },
})
</script>
