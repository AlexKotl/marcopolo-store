<script setup lang="ts">
import { ref } from "vue";
import { productImage, iconStarO, iconStar } from "@/config/icons";
import Button from "@/components/common/Button.vue";
import { useStore } from "@/stores/store";
import type { IProduct } from "@/types/products";

const props = defineProps<{
  productId: string;
  title: string;
  quality?: string;
  imageUrl?: string;
}>();

const product: IProduct = {
  id: props.productId,
  title: props.title,
  quality: props.quality,
  imageUrl: props.imageUrl,
};

const inBasket = ref(false);
// TODO refactor based on store
const inWishlist = ref(false);
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
    <div class="product__description">
      <div>
        <h3 class="product__description__title">
          {{ title }}
        </h3>
        <div class="product__description__subtitle">
          {{ quality }}
        </div>
      </div>
      <div class="product__wishlist">
        <img
          v-if="inWishlist"
          @click="
            () => {
              inWishlist = false;
              store.removeWishlist(product);
            }
          "
          :src="iconStar"
          alt="Remove from wishlist"
        />
        <img
          v-else
          @click="
            () => {
              inWishlist = true;
              store.addWishlist(product);
            }
          "
          :src="iconStarO"
          alt="Save to wishlist"
        />
      </div>
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
  &__description {
    display: flex;
    margin-bottom: 12px;

    &__title {
      font-size: 15px;
    }
    &__subtitle {
      font-size: 13px;
      color: gray;
    }
  }
  &__wishlist {
    img {
      width: 24px;
      cursor: pointer;
    }
  }
}
</style>
