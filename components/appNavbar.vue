<template>
  <div class="appNavbar max-w-[1200px] mx-auto">
    <nav
      class="appIndex-navbar flex items-center justify-between p-6 lg:px-16"
      aria-label="Global"
    >
    <!-- logo -->
      <div class="flex lg:flex-1">
        <nuxtLink
          to="/"
          class="flex items-center gap-x-2"
          @click="scrollTo('#appHero')"
        >
          <MomentLogo class="sm:h-7 fill-white-200" />
        </nuxtLink>
      </div>

      <!-- Mobile hamburger -->
      <!-- <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div> -->

      <!-- Barre de navigation -->
      <div class="hidden lg:flex lg:gap-x-12 text-white-200 font-text font-medium">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          class="appIndex-navbar-link text-md text-light-100 font-sans"
          to="/"
          @click="scrollTo(item.href)"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:gap-x-4 lg:justify-end lg:items-center">
        <div
          class="hidden lg:flex lg:mr-4 text-light-100 lg:items-center justify-between rounded-full bg-light-200 h-8 p-2"
        >
          <button
            class="w-6 h-6 p-5 rounded-full flex items-center justify-center"
            :class="locale === 'en' ? 'bg-primary-200' : 'bg-transparent'"
            @click="setLocale('en')"
          >
            en
          </button>
          <button
            class="w-6 h-6 p-5 rounded-full flex items-center justify-center"
            :class="locale === 'fr' ? 'bg-primary-200' : 'bg-transparent'"
            @click="setLocale('fr')"
          >
            fr
          </button>
        </div>
        <NuxtLink class="hidden lg:flex" to="https://app.moment.green/login" target="_blank">
          <RoundedButton
            class="text-md font-semibold text-black border-2 border-white-200"
            
            >{{ $t('index.login') }}</RoundedButton>
        </NuxtLink>
        <NuxtLink class="hidden lg:flex" to="https://tally.so/r/mJR7OX" target="_blank">
          <RoundedButton
            class="text-md font-semibold text-black bg-white-200"
            
            >{{ $t('index.cta') }}</RoundedButton>
        </NuxtLink>
      </div>
    </nav>

    <!-- Mobile menu -->
    <!-- <Dialog
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                to="/"
                @click="
                  () => {
                    mobileMenuOpen = false;
                    scrollTo(item.href);
                  }
                "
              >
                {{ item.name }}
              </NuxtLink>
              <NuxtLink
                class="-mx-4 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                to="/"
                @click="scrollTo('#contact')"
              >
                <span
                  class="rounded-lg bg-accent-100 hover:bg-primary-100 hover:text-light-100 px-3.5 py-2.5 text-md font-semibold leading-6 text-dark-300"
                  >Contactez-nous</span
                >
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog> -->
  </div>
</template>

<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "vue-i18n";
import MomentLogo from "~/assets/images/momentLogo.vue";

gsap.registerPlugin(ScrollTrigger);

const mobileMenuOpen = ref(false);

const appConfig = useAppConfig();

const { setLocale } = useI18n();

const { locale } = useI18n();

const navigation = [
  // { name: "Qui sommes nous?", href: "#whoWeAre" },
];

const links = ref([]);

onMounted(() => {
  links.value = document.querySelectorAll(".appIndex-navbar-link");

  // Surlignage

  links.value.forEach((link) => {
    const underline = document.createElement("div");
    underline.classList.add("underline");
    link.appendChild(underline);

    // Animation au hover
    link.addEventListener("mouseenter", () => {
      gsap.to(underline, { width: "100%", duration: 0.5, ease: "power2.out" });
    });

    // Animation quand la souris quitte le lien
    link.addEventListener("mouseleave", () => {
      gsap.to(underline, { width: "0%", duration: 0.5, ease: "power2.out" });
    });
  });
});
</script>

<style lang="scss">
.appIndex-navbar-link {
  position: relative;
}

.underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 5px;
  background-color: var(--color-accent-100);
  width: 0;
}
</style>