import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator'

export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://quiz.caminhoanglicano.com.br',
      siteBase: process.env.NUXT_PUBLIC_SITE_BASE ?? 'https://caminhoanglicano.com.br',
      ordoAppStore: process.env.NUXT_PUBLIC_ORDO_APP_STORE ?? 'https://apps.apple.com/br',
      ordoPlayStore: process.env.NUXT_PUBLIC_ORDO_PLAY_STORE ?? 'https://play.google.com/store',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Raleway: [300, 400, 500, 600, 700, 800],
      'Cormorant+Garamond': [400, 500, 600, 700],
    },
    display: 'swap',
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: process.env.NODE_ENV === 'production' ? [
      obfuscatorPlugin({
        apply: 'build',
        debugger: false,
        options: {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.75,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.2,
          identifierNamesGenerator: 'hexadecimal',
          renameGlobals: false,
          stringArray: true,
          stringArrayEncoding: ['rc4'],
          stringArrayThreshold: 0.75,
          stringArrayRotate: true,
          stringArrayShuffle: true,
          selfDefending: false,
          splitStrings: true,
          splitStringsChunkLength: 8,
          numbersToExpressions: true,
          transformObjectKeys: true,
        },
      }),
    ] : [],
  },
  app: {
    head: {
      title: 'Teste Anglicano | Caminho Anglicano',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Teste seus conhecimentos sobre o anglicanismo em 30 perguntas! História, liturgia, Livro de Oração Comum e muito mais.',
        },
        { property: 'og:title', content: 'Teste Anglicano | Caminho Anglicano' },
        {
          property: 'og:description',
          content: 'Quanto você sabe sobre o anglicanismo? Faça o teste e descubra!',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
