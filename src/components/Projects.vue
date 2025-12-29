<template>
  <section id="projects">
    <div v-if="portfolio.loading">Cargando…</div>
    <div v-else-if="portfolio.error">Error: {{ portfolio.error }}</div>

    <div v-else-if="portfolio.data">
      <h1>{{ portfolio.data.proyectos?.titulo }}</h1>
      <div v-for="proyecto in portfolio.data.proyectos?.items" :key="proyecto.id">
        <h2>{{ proyecto.nombre }}</h2>
        <p>{{ proyecto.descripcion }}</p>
        <a :href="proyecto.url" target="_blank">Ver proyecto</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../stores/portfolio'

const portfolio = usePortfolioStore()

</script>

<style scoped>
/* Estilos específicos */
</style>
