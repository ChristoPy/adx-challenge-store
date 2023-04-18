
import Section from './Section.vue';

<template>
  <Section>
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <ProductCard v-for="product of $store.getters['products/products']" :product="product" :key="product._id" />
    </div>
  </Section>
</template>
