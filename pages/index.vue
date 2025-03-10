<template>
  <div id="content" class="opacity-0 bg-white-200">
    <header
      class="header bg-gradient-to-r from-primary-100 to-secondary-100 [clip-path:polygon(0_0,100%_0,100%_80%,0_100%)]"
    >
      <AppNavbar />
      <div class="hidden md:block headerSvg absolute top-0 left-0 w-full -z-10">
        <NuxtImg
          src="moment_saas_esg_hero_lines.svg"
          alt="Header SVG"
          class="w-full opacity-55"
        />
      </div>
      <HeroSideImage
        id="appHero"
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
    <main class="index bg-white-200">
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
              <div class="roundBlock relative h-60 w-60">
                <Circle class="h-60 w-60 absolute top-0 fill-primary-200" />
                <div class="text-center absolute top-1/2 transform -translate-y-1/2">
                  <div
                    class="text-2xl md:text-4xl font-title font-semibold mb-2"
                  >
                    70%
                  </div>
                  <div class="text-sm md:text-base font-text font-regular">
                    {{ $t("index.block1Text") }}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
              <div class="roundBlock relative h-60 w-60">
                <Circle class="h-60 w-60 absolute top-0 fill-secondary-200" />
                <div class="text-center absolute top-1/2 transform -translate-y-1/2">
                  <div class="text-4xl font-title font-semibold mb-2">88%</div>
                  <div class="text-base font-text font-regular">
                    {{ $t("index.block2Text") }}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
              <div class="roundBlock relative h-60 w-60">
                <Circle class="h-60 w-60 absolute top-0 fill-accent-200" />
                <div class="text-center absolute top-1/2 transform -translate-y-1/2">
                  <div class="text-4xl font-title font-semibold mb-2">
                    {{ $t("index.block3Figure") }}
                  </div>
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
        <div class="section3-greenbg relative">
          <div
            class="container text-white-200 mx-auto max-w-[1200px] px-10 py-8"
          >
            <div
              class="section3-header max-w-[500px] mx-auto py-10 text-white-200 w-fit"
            >
              <div class="section3-title relative">
                <h2
                  class="text-2xl md:text-3xl font-title mb-10 text-center relative"
                >
                  {{ $t("index.section3Title") }}
                </h2>
                <svg
                  width="240"
                  height="40"
                  viewBox="0 0 200 40"
                  class="svgToAnimate absolute -bottom-6 left-1/2 -translate-x-1/2 stroke-primary-200"
                >
                  <path
                    d="M10,30 C50,50 150,10 190,30"
                    stroke-width="4"
                    fill="transparent"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
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
        <div
          class="quote relative w-full py-10 min-h-[200px] -z-1 bg-white-200"
        >
          <div
            class="container h-fit md:absolute max-w-[300px] md:left-1/2 md:transform md:-translate-x-1/2 mx-auto px-10 py-5 rounded-3xl z-150"
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

      <section class="section4 bg-primary-200 pb-10">
        <div class="section4-header w-fit mx-auto pb-16 relative pt-5">
          <div class="section4-title relative">
            <h2
              class="text-2xl md:text-3xl font-title mb-4 text-center relative w-fit mx-auto z-10"
            >
              {{ $t("index.section4Title") }}
            </h2>
            <svg
              width="240"
              height="40"
              viewBox="0 0 200 40"
              class="svgToAnimate absolute -bottom-6 left-1/2 -translate-x-1/3 stroke-primary-100"
            >
              <path
                d="M10,30 C50,50 150,10 190,30"
                stroke-width="4"
                fill="transparent"
                stroke-linecap="round"
              />
            </svg>
          </div>
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

          <!-- <div
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
          </div> -->
        </div>
      </section>

      <section class="section5 bg-white-200 p-14">
        <div
          class="section5-header w-fit mx-auto pb-16 max-w-[700px] pt-8 relative"
        >
          <Circle
            class="h-25 w-25 fill-accent-200 hidden md:block md:absolute md:top-0 md:right-10 z-0"
          />
          <div class="section5-title relative">
            <h2
              class="text-2xl md:text-3xl font-title mb-4 text-center relative w-fit mx-auto z-10"
            >
              {{ $t("index.section5Title") }}
            </h2>
            <svg
              width="240"
              height="40"
              viewBox="0 0 200 40"
              class="svgToAnimate absolute -bottom-6 left-1/2 -translate-x-1/3 stroke-primary-100"
            >
              <path
                d="M10,30 C50,50 150,10 190,30"
                stroke-width="4"
                fill="transparent"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div
          class="relative container mx-auto max-w-[1200px] bg-white-200 p-25"
        >
          <div class="logos flex flex-col md:grid grid-cols-4 gap-4 p-4">
            <div class="logo2">
              <NuxtImg src="science_based_target.svg" alt="Logos" />
            </div>
            <div class="logo2">
              <NuxtImg src="csrd.svg" alt="Logos" />
            </div>
            <div class="logo2">
              <NuxtImg src="greenhouse_gas_protocol.svg" alt="Logos" />
            </div>
            <div class="logo2">
              <NuxtImg src="cdp.svg" alt="Logos" />
            </div>
          </div>
        </div>
      </section>

      <section class="section6 bg-white-200 pb-8">
        <div
          class="container max-w-[700px] bg-primary-100 rounded-xl shadow-lg text-white-200 mx-auto"
        >
          <div
            class="flex flex-col md:flex-row justify-between items-center p-10"
          >
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h2 class="text-xl md:text-2xl font-title mb-4">
                {{ $t("index.section6Title") }}
              </h2>
              <p class="text-base md:text-lg font-text font-light">
                {{ $t("index.section6Text") }}
              </p>
            </div>
            <div class="md:w-1/2 flex justify-center md:justify-end">
              <a
                href="https://tally.so/r/mJR7OX"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RoundedButton
                  custom-class="bg-white-200 font-text text-black font-semibold"
                >
                  {{ $t("index.section6Button") }}
                </RoundedButton>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div
        class="footer relative bg-primary-100 text-white-200 py-10 overflow-hidden z-0"
      >
        <div class="hidden md:block absolute top-0 left-0 w-full -z-1">
          <NuxtImg
            src="moment_saas_esg_hero_lines.svg"
            alt="Header SVG"
            class="w-full opacity-55"
          />
        </div>
        <div class="container mx-auto max-w-[1200px] px-10">
          <div class="flex justify-center mb-6">
            <MomentLogo class="h-6 w-auto fill-white-200" />
          </div>
          <hr class="border-white-200 mb-6" />
          <div class="flex justify-center space-x-4 mb-6">
            <a
              href="https://www.linkedin.com/company/moment-green/"
              target="_blank"
              rel="noreferrer noopener"
              class="cursor-pointer"
            >
              <div class="rounded-full overflow-hidden">
                <NuxtImg
                  src="linkedin_logo.svg"
                  alt="Moment Green AI"
                  class="h-8 w-auto"
                />
              </div>
            </a>
          </div>
          <div class="text-center text-sm">
            &copy; {{ new Date().getFullYear() }} Moment.green. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Circle from "~/assets/images/circle.vue";
import MomentLogo from "~/assets/images/momentLogo.vue";

const { t } = useI18n();

import { onMounted } from "vue";
import { gsap } from "gsap";
const { locale } = useI18n();

const metaConfig = {
  en: {
    description:
      "The first SAAS platform that simplifies and accelerates ESG assessments for both buyers and suppliers using artificial intelligence.",
    twitterCard: "summary_large_image",
  },
  fr: {
    description:
      "La première plateforme SAAS qui simplifie et accélère les évaluations ESG pour les acheteurs et les fournisseurs en utilisant l'intelligence artificielle.",
    twitterCard: "summary_large_image",
  },
};

useSeoMeta({
  title: "Moment.green",
  ogTitle: "Moment.green",
  ogUrl: "https://moment.green",
  description: () =>
    metaConfig[locale.value]?.description ||
    "La première plateforme SAAS qui simplifie et accélère les évaluations ESG pour les acheteurs et les fournisseurs en utilisant l'intelligence artificielle.'",
  ogDescription: () =>
    metaConfig[locale.value]?.description ||
    "La première plateforme SAAS qui simplifie et accélère les évaluations ESG pour les acheteurs et les fournisseurs en utilisant l'intelligence artificielle.'",
  ogImage: "/public/moment_image.png",
  twitterCard: "summary_large_image",
});

onMounted(() => {
  gsap.to("#content", { opacity: 1, duration: 1 });
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 99%",
          end: "bottom 20%",
          toggleActions: "play none none",
        },
      }
    );
  });
  const svgCollection = document.querySelectorAll(".svgToAnimate");
  svgCollection.forEach((svg) => {
    gsap.fromTo(
      svg,
      { strokeDasharray: 300, strokeDashoffset: 300 },
      {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svg,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});
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
  clip-path: polygon(100% 0, 0 100%, 100% 101%);
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
