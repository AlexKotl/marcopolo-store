<script setup lang="ts">
import { ref, watch } from "vue";
import CountButton from "./common/CountButton.vue";
import { iconBasket, iconStarO } from "@/config/icons";
import { useStore } from "@/stores/store";

const store = useStore();
let searchQuery = ref("");

watch(searchQuery, (query) => {
  store.setSearchQuery(query);
});
</script>

<template>
  <div class="header">
    <div class="header__container">
      <div class="header__search">
        <input v-model="searchQuery" type="text" placeholder="Quick search..." class="header__search__input" />
      </div>
      <div class="header__menu">
        <CountButton :count="store.wishlistCount" :icon="iconStarO" />
        <CountButton :count="store.basketCount" :icon="iconBasket" />
      </div>
    </div>
  </div>
  <div class="spacer"></div>
</template>

<style lang="scss" scoped>
.spacer {
  height: 100px;
}
.header {
  background-color: white;
  box-shadow: 0 0 10px #e2e2e2;
  position: fixed;
  width: 100%;
  z-index: 5;

  &__container {
    display: flex;
    margin: auto;
    padding: 17px 10px;
    max-width: 800px;
  }

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
