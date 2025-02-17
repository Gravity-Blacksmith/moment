<template>
  <button :class="['rounded-full px-8 py-2 cursor-pointer', customClass]">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
</script>
