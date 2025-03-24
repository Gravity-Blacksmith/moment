// Ajouter le script de recaptcha dans le head de la page

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  useHead({
    script: [
      {
        src: `https://www.google.com/recaptcha/api.js?render=${config.public.recaptchaSiteKey}`,
        async: true,
        defer: true,
      },
    ],
  });
});