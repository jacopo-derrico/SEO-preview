// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-9793954299605461'
    }]
  ],
  app: {
    head: {
      title: 'SEO Preview',
      meta: [
        { name: 'description', content: 'Test the SEO for your website, see how it will show on browser and easily copy-paste it, or embed the code for free!'}
      ]
    }
  }
})
