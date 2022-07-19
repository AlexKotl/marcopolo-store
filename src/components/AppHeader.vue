<script setup lang="ts">
import CountButton from "./common/CountButton.vue";
import { iconBasket, iconStarO } from "@/config/icons";
</script>

<template>
  <div class="header">
    <div class="header__search">
      <input type="text" placeholder="Quick search..." class="header__search__input" />
    </div>
    <div class="header__menu">
      <CountButton :count="4" :icon="iconStarO" />
      <CountButton :count="2" :icon="iconBasket" />
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
