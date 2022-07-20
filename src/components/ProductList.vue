<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useStore } from "@/stores/store";
import { getProducts, getFilteredProducts } from "@/api/products";
import Product from "./Product.vue";
import type { IProduct } from "@/types/products";

const store = useStore();

const products = ref([] as Array<IProduct>);

// call api for products list
onMounted(async () => {
  products.value = await getFilteredProducts();
});

// check if specific product matches search query
const matchQuery = (product: IProduct) =>
  store.searchQuery === "" || product.title.toLowerCase().indexOf(store.searchQuery.toLowerCase()) !== -1;
</script>

<template>
  <div class="product-list">
    <template v-for="product in products" :key="product.id">
      <Product
        v-show="matchQuery(product)"
        :title="product.title"
        :quality="product.quality"
        :image="product.image"
        :productId="product.id"
      ></Product>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
