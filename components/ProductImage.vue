<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  image?: string
  name: string
}>()
</script>

<template>
  <img class="object-cover w-full hover:shadow-lg rounded-md"
    :src="image || 'https://via.placeholder.com/336x336.png?text=No+Image'" :alt="name"
    style="maxHeight: 336px; maxWidth: 336px;" />
</template>
