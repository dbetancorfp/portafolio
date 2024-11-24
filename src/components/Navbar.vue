<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" v-bind:to="{ name: 'Aboutme', params: { lang: currentLang } }">
          {{ $t("portfolio") }}
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Aboutme', params: { lang: currentLang } }">
                {{ $t("aboutme") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Projects', params: { lang: currentLang } }">
                {{ $t("projects") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Skills', params: { lang: currentLang } }">
                {{ $t("skills") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Experience', params: { lang: currentLang } }">
                {{ $t("experience") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Contact', params: { lang: currentLang } }">
                {{ $t("contact") }}
              </router-link>
            </li>
            <li class="nav-item dropdown ms-auto">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <b-icon-globe />
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <button class="dropdown-item" @click="changeLanguage('es')">
                    {{ $t("spanish") }}
                  </button>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <button class="dropdown-item" @click="changeLanguage('en')">
                    {{ $t("english") }}
                  </button>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <button class="dropdown-item" @click="changeLanguage('zh')">
                    {{ $t("chinese") }}
                  </button>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <button class="dropdown-item" @click="changeLanguage('mc')">
                    {{ $t("minecraft") }}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-5 pt-3"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

const { locale, t } = useI18n();
const router = useRouter();
const route = useRoute();
const currentLang = computed(() => route.params.lang || "es");
const changeLanguage = (lang) => {
  if (locale.value !== lang) {
    locale.value = lang; // Cambia el idioma en i18n
    localStorage.setItem("language", lang); // Guarda en localStorage
    router.push({ name: route.name, params: { ...route.params, lang } }); // Navega con el nuevo idioma
  }
};
</script>

<style scoped>
.mt-5 {
  margin-top: 4rem;
}
</style>
