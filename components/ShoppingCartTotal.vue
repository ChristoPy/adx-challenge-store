<script setup lang="ts">
import { formatMoney } from '~/utils/money';
</script>

<template>
  <div class="mt-6">
    <p class="text-2xl font-bold">Total: {{formatMoney($store.getters['shoppingCart/total'])}}</p>
  </div>
</template>
