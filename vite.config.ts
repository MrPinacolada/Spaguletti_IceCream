import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
export default defineConfig({
  base: '/Spaguletti_IceCream',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['lottie-player'].includes(tag)
        }
      }
    }),

    vueJsx()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@SwiperBundleCss',
        replacement: path.resolve(__dirname, './node_modules/swiper/swiper-bundle.min.css')
      },
      {
        find: '@SwiperBundle',
        replacement: path.resolve(__dirname, './node_modules/swiper/swiper-bundle.esm.js')
      },
      {
        find: '@Swiper',
        replacement: path.resolve(__dirname, './node_modules/swiper/swiper.esm.js')
      },
      {
        find: '@SwiperVue',
        replacement: path.resolve(__dirname, './node_modules/swiper/vue/swiper-vue.js')
      }
    ]
  }
})
