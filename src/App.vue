<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import ProductList from "./components/ProductList.vue";
import AppFooter from "./components/AppFooter.vue";
import Basket from "./components/Basket.vue";
</script>

<template>
  <Basket></Basket>
  <AppHeader />
  <div class="container">
    <ProductList />
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 0 10px;
}
</style>
