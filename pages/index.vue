<template>
  <div class="index bg-white-200">
    <div class="header bg-gradient-to-r from-primary-100 to-secondary-100">
      <div class="hidden md:block headerSvg absolute top-0 left-0 w-full">
        <NuxtImg
          src="moment_saas_esg_hero_lines.svg"
          alt="Header SVG"
          class="w-full h-full opacity-55"
        />
      </div>
      <HeroSideImage
        image="moment_saas_esg_hero.svg"
        custom-class="text-white-200 pt-20 pb-20"
      >
        <template #title>
          <h1 class="text-2xl md:text-4xl font-title mb-4">
            {{ $t("index.title") }}
          </h1>
        </template>
        <template #subtitle>
          <p class="text-base md:text-lg mb-6 font-text font-semibold">
            {{ $t("index.subtitle") }}
          </p>
        </template>
        <template #description>
          <p class="text-base md:text-lg mb-6 font-text font-light">
            {{ $t("index.description") }}
          </p>
        </template>
        <template #cta>
          <RoundedButton
            custom-class="bg-white-200 font-text text-black font-semibold"
          >
            {{ $t("index.cta") }}
          </RoundedButton>
        </template>
      </HeroSideImage>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
