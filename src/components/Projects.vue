<template>
  <section class="proyectos">
    <h2>{{ $t('project') }}</h2>
    <div class="grid">
      <TarjetaProyecto
        v-for="(proyecto, index) in proyectos"
        :key="index"
        :proyecto="proyecto"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TarjetaProyecto from '@/components/TarjetaProyecto.vue';
import { Proyecto } from '@/types';
import { useI18n } from 'vue-i18n'; 

export default defineComponent({
  name: 'Proyectos',
  components: {
    TarjetaProyecto,
  },
  setup() {
    const { t } = useI18n();

    const proyectos = [
      {
        title: t('project1.title'),
        description: t('project1.description'),
       link: "https://github.com/Shulkiora8/LOL",
      },
      {
        title: t('project2.title'),
        description: t('project2.description'),
        link: "https://github.com/Shulkiora8/Poketrafico"
      },
    ];

    return { proyectos };
  },
});
</script>

<style scoped>
.proyectos {
  padding: 32px;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
