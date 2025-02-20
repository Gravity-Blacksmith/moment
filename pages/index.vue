<template>
  <main class="index bg-white-200">
    <header
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
    </header>

    <section class="section2 bg-white-200 pb-20">
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
    </section>

    <section class="section3 bg-primary-100 w-full z-0">
      <div class="section3-greenbg relative z-1">
        <div class="container text-white-200 mx-auto max-w-[1200px] px-10 py-8">
          <div
            class="section3-title max-w-[700px] mx-auto py-10 text-white-200"
          >
            <h2 class="text-2xl md:text-3xl font-title mb-4 text-center">
              {{ $t("index.section3Title") }}
            </h2>
            <p class="text-base md:text-lg font-text font-light text-center">
              {{ $t("index.section3Text") }}
            </p>
          </div>

          <div
            class="cards flex flex-col items-center md:flex-row gap-10 justify-center"
          >
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
      <div class="quote relative w-full py-10 min-h-[200px] bg-white-200">
        <div
          class="container h-fit md:absolute max-w-[300px] md:left-1/2 md:transform md:-translate-x-1/2 mx-auto px-10 py-5 rounded-3xl border-primary-100 border-3 z-150"
        >
          <h4
            class="font-title text-center text-black text-lg md:text-xl font-semibold"
          >
            {{ $t("index.quote") }}
          </h4>
        </div>
        <Circle
          class="h-30 w-30 fill-secondary-200 mx-auto mb-6 hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-x-[200px]"
        />
      </div>
    </section>

    <section class="section4 bg-primary-200 pb-10 md:pb-50">
      <div class="section4-title w-fit mx-auto pb-16 relative pt-5">
        <h2
          class="text-2xl md:text-3xl font-title mb-4 text-center relative w-fit mx-auto z-10"
        >
          {{ $t("index.section4Title") }}
        </h2>
        <Circle
          class="h-25 w-25 fill-accent-200 hidden md:block md:absolute md:-top-5 md:-left-10 z-0"
        />
      </div>
      <div
        class="section4-trust relative container mx-auto max-w-[700px] bg-grey-100 rounded-xl shadow-lg p-10"
      >
        <div class="logos flex flex-col md:grid grid-cols-4 gap-4 p-4">
          <div class="logo">
            <NuxtImg src="keolis_logo.svg" alt="Logos" />
          </div>
          <div class="logo">
            <NuxtImg src="bpi_logo.svg" alt="Logos" />
          </div>
          <div class="logo">
            <NuxtImg src="station_f_logo.svg" alt="Logos" />
          </div>
          <div class="logo">
            <NuxtImg src="bearing_point_logo.svg" alt="Logos" />
          </div>
        </div>

        <div
          class="testimonial bg-primary-100 md:absolute rounded-xl p-4 w-7/8 mx-auto text-center"
        >
          <p
            class="text-base md:text-lg font-text text-white-200 p-4 font-medium"
          >
            "{{ $t("index.testimonial") }}"
          </p>
          <p>
            <span
              class="text-base md:text-lg font-text font-thin text-white-200"
              >{{ $t("index.testimonialAuthor") }}</span
            >
          </p>
        </div>
      </div>
    </section>

    <section class="section5 bg-white-200 p-14">
      <div
        class="section5-title w-fit mx-auto pb-16 max-w-[700px] pt-8 relative"
      >
        <Circle
          class="h-25 w-25 fill-accent-200 hidden md:block md:absolute md:top-0 md:right-10 z-0"
        />
        <h2
          class="text-2xl md:text-3xl font-title mb-4 text-center relative w-fit mx-auto z-10"
        >
          {{ $t("index.section5Title") }}
        </h2>
      </div>
      <div
        class="relative container mx-auto max-w-[1200px] bg-white-200 p-10"
      >
      <div class="logos flex flex-col md:grid grid-cols-4 gap-4 p-4">
        <div class="logo2">
          <NuxtImg src="science_based_target.svg" alt="Logos"/>
        </div>
        <div class="logo2">
          <NuxtImg src="csrd.svg" alt="Logos"/>
        </div>
        <div class="logo2">
          <NuxtImg src="greenhouse_gas_protocol.svg" alt="Logos"/>
        </div>
        <div class="logo2">
          <NuxtImg src="cdp.svg" alt="Logos"/>
        </div>
      </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Circle from "~/assets/images/circle.vue";

const { t } = useI18n();
</script>

<style scoped>
.section3-greenbg::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%; /* Ajuste la hauteur du triangle */
  background-color: var(--color-white-200);
  z-index: -1;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.logo {
  width: auto;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo2 {
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: auto;
    height: 100%;
  }
}

.section5-title::before {
  content: Circle;
  position: absolute;
  top: -20px;
  left: 50%;
}
</style>
