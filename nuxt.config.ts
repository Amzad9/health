// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/icon'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  site: {
    url: 'https://yourhealthwebsite.com',
    name: 'Health & Wellness Center',
    description: 'Your trusted health and wellness partner offering comprehensive medical services, consultations, and personalized care.',
    defaultLocale: 'en'
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  ssr: false
})

