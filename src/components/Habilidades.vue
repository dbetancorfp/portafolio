<template>
  <section id="skills">
    <div v-if="portfolio.loading">Cargando…</div>
    <div v-else-if="portfolio.error">Error: {{ portfolio.error }}</div>

    <div v-else-if="portfolio.data">
      <h1>{{ portfolio.data.habilidades?.titulo }}</h1>
      <ul>
        <div v-for="habilidad in portfolio.data.habilidades?.categorias" :key="habilidad.id">
          <h2>{{ habilidad.nombre }}</h2>
          <li v-for="skill in habilidad.items" :key="skill.id">{{ skill.nombre }}</li>
        </div>
      </ul>
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
