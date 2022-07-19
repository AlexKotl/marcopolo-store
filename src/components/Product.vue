<script setup lang="ts">
import { ref } from "vue";
import { productImage } from "@/config/icons";
import Button from "@/components/common/Button.vue";
import { useStore } from "@/stores/store";
import type { IProduct } from "@/types/products";

const props = defineProps<{
  title: string;
  quality?: string;
  imageUrl?: string;
}>();

const product: IProduct = {
  title: props.title,
  quality: props.quality,
  imageUrl: props.imageUrl,
};

const inBasket = ref(false);
const store = useStore();

const addBasket = () => {
  if (!inBasket.value) {
    store.addBasket(product);
    inBasket.value = true;
  }
};
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
    <Button @click="addBasket" :disabled="inBasket">{{ inBasket ? "In the cart" : "Add to cart" }}</Button>
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
