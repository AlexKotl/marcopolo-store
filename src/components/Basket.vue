<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/stores/store";
import Modal from "./elements/Modal.vue";
import Button from "./elements/Button.vue";

const store = useStore();
</script>

<template>
  <Modal :open="store.isShowBasket" :onClose="() => store.setShowBasket(false)">
    <div class="cart">
      <h2>Your cart:</h2>
      <ul class="cart__list">
        <li v-for="product in store.getBasket" :key="product.id">{{ product.title }}</li>
      </ul>
      <Button @click="() => store.setShowBasket(false)">Continue</Button>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.cart {
  &__list {
    margin-left: 20px;
    margin-bottom: 30px;
  }
}
</style>
