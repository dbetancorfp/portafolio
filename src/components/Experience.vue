<template>
  <section id="experience">
    <div v-if="portfolio.loading">Cargando…</div>
    <div v-else-if="portfolio.error">Error: {{ portfolio.error }}</div>

    <div v-else-if="portfolio.data">
      <h1>{{ portfolio.data.experiencia?.titulo }}</h1>
      <ul>
        <div v-for="item in portfolio.data.experiencia?.items" :key="item.id">
          <h2>{{ item.empresa }}</h2>
          <h4>{{ item.rol }}</h4>
          <p>{{ item.descripcion }}</p>
          <li v-for="logro in item.logros" :key="logro.id">{{ logro }}</li>
          <p><em>{{ item.fechaInicio }} - {{ item.fechaFin || 'Presente' }}</em></p>
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
