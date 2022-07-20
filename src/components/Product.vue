<script setup lang="ts">
import { ref } from "vue";
import { productImage, iconStarO, iconStar } from "@/config/icons";
import Button from "@/components/elements/Button.vue";
import { useStore } from "@/stores/store";
import type { IProduct } from "@/types/products";

const props = defineProps<{
  productId: string;
  title: string;
  quality?: string;
  image?: string;
}>();

const product: IProduct = {
  id: props.productId,
  title: props.title,
  quality: props.quality,
  image: props.image,
};

const inBasket = ref(false);
// TODO refactor based on store
const inWishlist = ref(false);
const store = useStore();

const addBasket = () => {
  if (!inBasket.value) {
    store.addBasket(product);
    inBasket.value = true;
    store.setShowBasket(true);
  }
};

const addWishlist = () => {
  inWishlist.value = true;
  store.addWishlist(product);
};

const removeWishlist = () => {
  inWishlist.value = false;
  store.removeWishlist(product);
};
</script>

<template>
  <div class="product">
    <div class="product__image">
      <img :src="image || productImage" alt="" />
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
        <img v-if="inWishlist" @click="removeWishlist" :src="iconStar" alt="Remove from wishlist" />
        <img v-else @click="addWishlist" :src="iconStarO" alt="Save to wishlist" />
      </div>
    </div>

    <Button @click="addBasket" :disabled="inBasket">{{ inBasket ? "In the cart" : "Add to cart" }}</Button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__image {
    img {
      width: 100%;
    }
  }
  &__description {
    display: flex;
    flex: 1 1 0;
    justify-content: space-between;
    margin-bottom: 8px;

    &__title {
      font-size: 15px;
      line-height: 20px;
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
