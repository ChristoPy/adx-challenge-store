<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  text: string
  onClick: () => void
  full?: boolean
}>()
</script>

<template>
  <button
    class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-all duration-300 ease-in-out"
    :class="full ? 'w-full' : ''" @click="onClick">
    <span class="w-full text-center">{{ text }}</span>
  </button>
</template>
