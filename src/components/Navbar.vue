<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" v-bind:to="{ name: 'Aboutme', params: { lang: currentLang } }">{{
                                $t("aboutme") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Projects', params: { lang: currentLang } }">{{
                                $t("projects") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Skills', params: { lang: currentLang } }">{{
                                $t("skills") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Experience', params: { lang: currentLang } }">{{
                                $t("experience") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Contact', params: { lang: currentLang } }">{{
                                $t("contact") }}
                            </router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Idiomas
                            </a>
                            <ul class="dropdown-menu">
                                <li><button @click="changeLanguage('en')">English</button></li>
                                <li><button @click="changeLanguage('es')">Español</button></li> 
                            </ul>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
        <div class="mt-5 pt-4"></div>
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
        locale.value = lang;
        localStorage.setItem("language", lang);
        router.push({ name: route.name, params: { ...route.params, lang } });
    }
};
</script>


<style scoped>
.mt-5 {
    margin-top: 4rem;
}</style>