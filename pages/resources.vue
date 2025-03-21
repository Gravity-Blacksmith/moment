<template>
  <div class="bg-white-200">
    <header
      class="header relative -top-50 pt-50 bg-gradient-to-r from-primary-100 to-secondary-100"
    ></header>
    <main id="resources" class="index bg-white-20 relative -top-50">
      <section class="section2 bg-white-200 pb-20">
        <div class="container mx-auto max-w-[1200px] px-10 py-8">
          <HeroSideImage image="moment_resource1_FR.png">
            <template #title>
              <h1
                class="text-xl md:text-2xl font-title font-bold mb-10 text-black"
              >
                {{ $t("resources.resource1.title") }}
              </h1>
            </template>
            <template #description>
              <p class="text-black mb-5">
                {{ $t("resources.resource1.intro") }} <br />
                {{ $t("resources.resource1.description") }}
              </p>
            </template>
            <template #cta>
              <RoundedButton
                @click="openModal"
                class="text-md font-semibold text-black bg-primary-200 hover:bg-primary-100 hover:text-white"
                >{{ $t("resources.resource1.cta") }}</RoundedButton
              >
            </template>
          </HeroSideImage>
        </div>
      </section>
      <section class="section3 bg-white-200 pb-20">
        <div class="container mx-auto max-w-[1200px] px-10 py-8">
          <HeroSideImage image="moment_resource2_FR.png">
            <template #title>
              <h1
                class="text-xl md:text-2xl font-title font-bold mb-10 text-black"
              >
                {{ $t("resources.resource1.title") }}
              </h1>
            </template>
            <template #description>
              <p class="text-black mb-5">
                {{ $t("resources.resource1.intro") }} <br />
                {{ $t("resources.resource1.description") }}
              </p>
            </template>
            <template #cta>
              <RoundedButton
                @click="downloadResource1"
                class="text-md font-semibold text-black bg-primary-200 hover:bg-primary-100 hover:text-white"
                >{{ $t("resources.resource1.cta") }}</RoundedButton
              >
            </template>
          </HeroSideImage>
        </div>
      </section>
    </main>
  </div>

  <div
    v-if="showModal"
    class="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div id="modal" class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 class="text-xl font-bold mb-4 font-title">
        Télécharger la ressource
      </h2>
      <p class="text-gray-600 mb-4 font-text">
        Entrez votre nom et votre email pour continuer.
      </p>
      <div class="mb-4 font-text">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Nom</label
        >
        <input
          id="name"
          v-model="name"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
          :placeholder="$t('resources.modal.namePlaceholder')"
        />
      </div>
      <div class="mb-4 font-text">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
          :placeholder="$t('resources.modal.emailPlaceholder')"
        />
      </div>
      <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>
      <div class="flex justify-end space-x-4 font-text">
        <button
          @click="closeModal"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          {{ $t("resources.modal.cancel") }}
        </button>
        <button
          @click="submitEmail"
          class="px-4 py-2 bg-primary-100 text-white rounded-md hover:bg-primary-200 hover:text-black"
        >
          {{ $t("resources.modal.send") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  gsap.to("#resources", { opacity: 1, duration: 1 });
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
});

const name = ref("");
const email = ref("");
const error = ref("");
const downloading = ref(false);
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
  nextTick(() => {
    gsap.fromTo(
      "#modal",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );
  });
};

const closeModal = () => {
  gsap.to("#modal", {
    opacity: 0,
    scale: 0.5,
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => (showModal.value = false),
  });
};

const submitEmail = async () => {
  if (!email.value.includes("@")) {
    error.value = "Veuillez entrer un email valide.";
    return;
  }

  const response = await fetch("/api/save-prospect", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value }),
  });

  const result = await response.json();
  if (result.success) {
    closeModal();
    downloading.value = true;

    const pdfUrl = "http://localhost:3000/moment_acv_analysis_FR.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "moment_acv_analysis_FR.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    error.value = "Une erreur est survenue";
  }
};
</script>
