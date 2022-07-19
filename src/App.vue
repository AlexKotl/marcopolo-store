<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import ProductList from "./components/ProductList.vue";
</script>

<template>
  <div class="container">
    <AppHeader />
    <ProductList />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;
}
</style>
