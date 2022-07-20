<script setup lang="ts">
const props = defineProps<{
  count: number;
  icon: string;
}>();
</script>

<template>
  <div class="count-button">
    <div class="count-button__count">{{ count > 0 ? count : "" }}</div>
    <img :src="icon" class="count-button__icon" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.count-button {
  position: relative;
  margin: 10px;
  cursor: pointer;

  &__count {
    position: absolute;
    top: -11px;
    right: -5px;
    font-weight: bold;
    font-size: 12px;
  }
  &__icon {
    height: 24px;
  }
}
</style>
