<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { getProducts } from "./api/products";

onMounted(async () => {
  const { data } = await getProducts();
});
</script>

<template></template>

<style scoped></style>
