<template>
  <NuxtLayout>
    <AppNavbar class="relative z-500" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
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
</script>
