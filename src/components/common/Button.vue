<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  border-radius: 3px;
  background-color: var(--color-primary);
  color: var(--color-white);
  cursor: pointer;
  font-weight: bold;
  padding: 6px 10px;
  width: 100%;
  border: 0;

  &:disabled {
    background-color: white;
    border: 1px solid #aaa;
    color: black;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
