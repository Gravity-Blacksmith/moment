<template>
  <div class="index bg-white-200">
    <div
      class="header bg-gradient-to-r from-primary-100 to-secondary-100 [clip-path:polygon(0_0,100%_0,100%_80%,0_100%)]"
    >
      <div class="hidden md:block headerSvg absolute top-0 left-0 w-full -z-10">
        <NuxtImg
          src="moment_saas_esg_hero_lines.svg"
          alt="Header SVG"
          class="w-full opacity-55"
        />
      </div>
      <HeroSideImage
        image="moment_saas_esg_hero.svg"
        custom-class="text-white-200 pt-20 pb-30"
      >
        <template #title>
          <h1 class="text-2xl md:text-5xl font-title mb-10">
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
          <a
            href="https://tally.so/r/mJR7OX"
            target="_blank"
            rel="noreferrer noopener"
          >
            <RoundedButton
              custom-class="bg-white-200 font-text text-black font-semibold"
            >
              {{ $t("index.cta") }}
            </RoundedButton>
          </a>
        </template>
      </HeroSideImage>
    </div>

    <div class="section2 bg-white-200 pb-20">
      <div class="container mx-auto max-w-[1200px] px-10 py-8">
        <div class="section2-title max-w-[700px] mx-auto">
          <h2
            class="text-2xl md:text-3xl font-title mb-12 text-center"
            v-html="
              t('index.section2Title', {
                strong: `<strong class='font-semibold'>`,
                endStrong: '</strong>',
              })
            "
          ></h2>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
            <div class="roundBlock relative">
              <Circle class="h-40 w-40 relative fill-primary-200" />
              <div class="text-center absolute top-0">
                <div class="text-2xl md:text-4xl font-title font-semibold mb-2">
                  70%
                </div>
                <div class="text-sm md:text-base font-text font-regular">
                  {{ $t("index.block1Text") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
            <div class="roundBlock relative">
              <Circle class="h-40 w-40 relative fill-secondary-200" />
              <div class="text-center absolute top-0">
                <div class="text-4xl font-title font-semibold mb-2">88%</div>
                <div class="text-base font-text font-regular">
                  {{ $t("index.block2Text") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
            <div class="roundBlock relative">
              <Circle class="h-40 w-40 relative fill-accent-200" />
              <div class="text-center absolute top-0">
                <div class="text-4xl font-title font-semibold mb-2">33 B€</div>
                <div class="text-base font-text font-regular">
                  {{ $t("index.block3Text") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section3 relative">
      <div class="section3-background  bg-primary-100 md:min-h-screen text-white-200 pt-10 md:[clip-path:polygon(0_0,100%_0,100%_30%,0_90%)]">
        <div class="container mx-auto max-w-[1200px] px-10 py-8 -z-10">
          <div class="section3-title max-w-[700px] mx-auto mb-10">
            <h2 class="text-2xl md:text-3xl font-title mb-4 text-center">
              {{ $t("index.section3Title") }}
            </h2>
            <p class="text-base md:text-lg font-text font-light text-center">
              {{ $t("index.section3Text") }}
            </p>
          </div>
        </div>
      </div>
      <div class="cards relative md:absolute md:top-1/3 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col items-center md:flex-row gap-4 justify-center z-10">
        <RoundedCard
          imageSrc="moment_card_1.svg"
          customClass="bg-white-200 w-full max-w-[300px] shrink-0"
        >
          <template #title>
        {{ $t("index.card1Title") }}
          </template>
          <template #text>
        {{ $t("index.card1Text") }}
          </template>
          <template #footer>
        {{ $t("index.card1Footer") }}
          </template>
        </RoundedCard>
        <RoundedCard
          imageSrc="moment_card_2.svg"
          customClass="bg-white-200 md:w-full max-w-[300px] shrink-0"
        >
          <template #title>
        {{ $t("index.card2Title") }}
          </template>
          <template #text>
        {{ $t("index.card2Text") }}
          </template>
          <template #footer>
        {{ $t("index.card2Footer") }}
          </template>
        </RoundedCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Circle from "~/assets/images/circle.vue";

const { t } = useI18n();
</script>
