<template>
  <div id="resources" class="bg-white-200">
    <header
      class="header bg-gradient-to-r from-primary-100 to-secondary-100"
    >
      <AppNavbar />
    </header>
  </div>

  <!-- 
  <button @click="showModal = true">Télécharger</button>

  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h2>Entrez votre email pour télécharger</h2>
      <input v-model="email" placeholder="Votre email" type="email" />
      <p v-if="error" class="error">{{ error }}</p>
      <button @click="submitEmail">Envoyer</button>
      <button @click="showModal = false">Annuler</button>
    </div>
  </div>

  <div v-if="downloading">Téléchargement en cours...</div> -->
</template>

<script setup>
const email = ref("");
const error = ref("");
const downloading = ref(false);
const showModal = ref(false);

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
    showModal.value = false;
    downloading.value = true;
    setTimeout(() => {
      window.location.href = "/index"; // Remplace par le bon chemin
      downloading.value = false;
    }, 1000);
  } else {
    error.value = "Une erreur est survenue";
  }
};
</script>
