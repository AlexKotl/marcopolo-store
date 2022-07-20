<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  open: boolean;
  onClose: any;
}>();

// const open = ref(false);
</script>

<template>
  <div :class="{ modal: true, 'modal--open': props.open }">
    <div class="modal__content">
      <span class="modal__content__close" @click="onClose">&times;</span>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  &--open {
    display: block;
  }

  &__content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 700px;

    &__close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;

      :hover {
        color: black;
        text-decoration: none;
      }
    }
  }
}
</style>
