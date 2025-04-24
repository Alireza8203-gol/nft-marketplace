import { defineNuxtPlugin } from '#app'
import { addCollection } from '@iconify/vue'

export default defineNuxtPlugin(async (nuxtApp) => {
  const heroicons = await import('@iconify-json/heroicons/icons.json')
  addCollection(heroicons)
}) 