<template>
    <section class="habilidades">
      <h2>{{ $t('habilites') }}</h2>
      <div class="grid">
        <TarjetaHabilidad
          v-for="(habilidad, index) in habilidades"
          :key="index"
          :habilidad="habilidad"
        />
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import TarjetaHabilidad from "@/components/TarjetaHabilidad.vue";
  import { Habilidad } from "@/types";
  import habilidadesData from "@/locales/es/habilidades.json"; 
  
  export default defineComponent({
    name: "Habilidades",
    components: {
      TarjetaHabilidad,
    },
    data() {
      return {
        habilidades: habilidadesData.cards as Habilidad[],
      };
    },
  });
  </script>
  
  <style scoped>
  .habilidades {
    padding: 32px;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  </style>
  