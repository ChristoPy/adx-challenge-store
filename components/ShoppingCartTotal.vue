<script setup lang="ts">
import { formatMoney } from '~/utils/money'
</script>

<template>
  <div class="mt-6">
    <p class="text-2xl text-gray-900">
      Total: {{ formatMoney($store.getters['shoppingCart/total']) }}
    </p>
  </div>
</template>
