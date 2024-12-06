<template>
    <div class="tarjeta-habilidad">
      <h3>{{ habilidad.name }}</h3>
      <p>{{ habilidad.description }}</p>
      <div class="nivel">
        <span
          v-for="n in 5"
          :key="n"
          :class="{ activo: n <= habilidad.level }"
        >★</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { Habilidad } from "@/types";
  
  export default defineComponent({
    name: "TarjetaHabilidad",
    props: {
      habilidad: {
        type: Object as PropType<Habilidad>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .tarjeta-habilidad {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    max-width: 300px;
    text-align: center;
  }
  .logo {
    max-width: 100px;
    height: auto;
  }
  .nivel span {
    color: #ccc;
    font-size: 20px;
  }
  .nivel .activo {
    color: #ffd700;
  }
  </style>
  