<script setup lang="ts">
const props = defineProps<{
  image?: string
  name: string
}>()
</script>

<template>
  <img class="object-cover w-full hover:shadow-lg rounded-md"
    :src="image || 'https://via.placeholder.com/336x460.png?text=No+Image'" :alt="name" style="maxHeight: 336px;" />
</template>
