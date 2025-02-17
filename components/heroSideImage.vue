<template>
  <div class="heroSideImage" :class="props.customClass">
    <div class="container m-auto" style="max-width: var(--container-width);">
      <div
        class="flex flex-col md:flex-row items-center justify-between p-6"
      >
        <div class="md:w-1/2 text-center md:text-left">
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
          <slot name="description"></slot>
          <slot name="cta"></slot>
        </div>
        <div class="md:w-1/3 mt-6 md:mt-0">
          <NuxtImg :src="props.image" alt="Hero Image" class="rounded-lg w-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>
