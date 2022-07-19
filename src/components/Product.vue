<script setup lang="ts">
import { productImage } from "@/config/icons";
import Button from "@/components/common/Button.vue";

const props = defineProps<{
  title: string;
  quality?: string;
  imageUrl?: string;
}>();
</script>

<template>
  <div class="product">
    <div class="product__image">
      <img :src="imageUrl || productImage" alt="" />
    </div>
    <h3 class="product__title">
      {{ title }}
    </h3>
    <div class="product__subtitle">
      {{ quality }}
    </div>
    <Button>Add to cart</Button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  &__image {
    img {
      width: 100%;
    }
  }
}
</style>
