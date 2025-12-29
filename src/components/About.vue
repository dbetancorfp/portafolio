<template>
  <section id="about">
    <div v-if="portfolio.loading">Cargando…</div>
    <div v-else-if="portfolio.error">Error: {{ portfolio.error }}</div>

    <div v-else-if="portfolio.data">
      <h1>{{ portfolio.data.acercaDeMi?.titulo }}</h1>
      <p>{{ portfolio.data.acercaDeMi?.resumen }}</p>
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
