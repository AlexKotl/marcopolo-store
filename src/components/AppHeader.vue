<script setup lang="ts">
import CountButton from "./common/CountButton.vue";
import { iconBasket, iconStarO } from "@/config/icons";
import { useStore } from "@/stores/store";

const store = useStore();
</script>

<template>
  <div class="header">
    <div class="header__search">
      <input type="text" placeholder="Quick search..." class="header__search__input" />
    </div>
    <div class="header__menu">
      <CountButton :count="store.wishlistCount" :icon="iconStarO" />
      <CountButton :count="store.basketCount" :icon="iconBasket" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;

  &__search {
    flex: 1 1 0;
    &__input {
      border-radius: 24px;
      border: 1px solid #ccc;
      padding: 10px 20px;
      font-size: 20px;
      outline: none;
      width: 100%;
    }
  }

  &__menu {
    display: flex;
    margin-left: 20px;
  }
}
</style>
