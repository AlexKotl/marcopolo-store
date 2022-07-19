<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { getProducts, getFilteredProducts } from "@/api/products";
import Product from "./Product.vue";
import type { IProduct } from "@/types/products";

const products = ref([] as Array<IProduct>);

onMounted(async () => {
  products.value = await getFilteredProducts();
});
</script>

<template>
  <div class="products">
    <Product
      v-for="product in products"
      :title="product.articleDescription"
      :quality="product.qualityName"
      :image="products.image"
      :productId="product.id"
      :key="product.articleNumber"
    ></Product>
  </div>
</template>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
