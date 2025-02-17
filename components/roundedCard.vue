<template>
  <div :class="['rounded-lg shadow-2xl overflow-hidden', customClass]">
    <img :src="imageSrc" alt="Card Image" class="max-w-180px mx-auto pt-8 h-50" />
    <div class="p-4">
      <h2 class="text-xl md:text-2xl font-title font-bold mb-2 text-black text-center">
      <slot name="title"></slot>
      </h2>
      <p class="text-black font-text text-center text-base">
      <slot name="text"></slot>
      </p>
    </div>
    <div class="p-4 mx-auto text-black text-center font-bold text-xl md:text-2xl font-title">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>
