<template>
  <div class="aboutme container py-5">
    <div class="d-flex flex-column row align-items-center">
      <!-- Imagen de perfil -->
      <div class="col-md-4 text-center mb-5">
        <img src="../assets/veinteañitostengo.jpg" alt="Foto de perfil" class="img-fluid rounded-circle shadow" />
      </div>

      <!-- Información personal -->
      <div class="col-md-8">
        <h1 class="display-4 mb-5">{{ $t("aboutme") }}</h1>
        <p class="lead">
          {{ $t("description") }}
        </p>
        <ul class="list-unstyled">
          <li class="d-flex align-items-center justify-content-center mb-2">
            <b><b-icon-person class="mr-2" /> {{ $t("name") }}:</b> {{ $t("name_value") }}
          </li>
          <li class="d-flex align-items-center justify-content-center mb-2">
            <b><b-icon-envelope-at class="mr-2" /> {{ $t("email") }}:</b>
            <a href="mailto:elreekdev33@gmail.com"> elreekdev33@gmail.com</a>
          </li>
          <li class="d-flex align-items-center justify-content-center mb-2">
            <b><b-icon-geo-alt class="mr-2" /> {{ $t("location") }}:</b> {{ $t("location_value") }}
          </li>
        </ul>
        <h2 class="mt-4">{{ $t("interests_title") }}</h2>
        <p>{{ $t("interests_description") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.aboutme img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
