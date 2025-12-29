// src/stores/portfolio.ts
import { defineStore } from 'pinia'
import data from '../data/datasAboutMe.json' // si NO tienes alias @, usa la opción B abajo

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    data: data as any, // ya cargado desde el build
  }),
  actions: {
    // opcional: por si quieres poder recargar/reescribir más adelante
    setData(payload: any) {
      this.data = payload
    },
  },
})
