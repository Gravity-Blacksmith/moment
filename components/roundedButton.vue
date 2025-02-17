<template>
  <button :class="['rounded-full px-8 py-2', customClass]">
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
