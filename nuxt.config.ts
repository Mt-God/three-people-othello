import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins!.push(vuetify());
      });
    },
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    vue: {
      template: { transformAssetUrls },
    },
  },
  typescript: {
    shim: false,
  },
});
