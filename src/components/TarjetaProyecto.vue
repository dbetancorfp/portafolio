<template>
  <div class="tarjeta-proyecto">
    <h3>{{ $t(proyecto.title) }}</h3> 
    <p>{{ $t(proyecto.description) }}</p> 
    <a :href="proyecto.link" target="_blank" rel="noopener noreferrer">
      Ver Proyecto
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Proyecto } from "@/types";

export default defineComponent({
  name: "TarjetaProyecto",
  props: {
    proyecto: {
      type: Object as PropType<Proyecto>,
      required: true,
    },
  },
});
</script>

<style scoped>
.tarjeta-proyecto {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
}
a {
  color: #007bff;
  text-decoration: none;
}
</style>
