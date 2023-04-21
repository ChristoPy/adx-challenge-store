<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  created() {
    this.$store.dispatch('shoppingCart/getCart')
  },
})
</script>

<template>
  <div class="text-gray-600 work-sans leading-normal text-base tracking-normal">
    <PageHeader />
    <Nuxt />
  </div>
</template>
