import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Spaguletti_IceCream',
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ["lottie-player"].includes(tag),
      },
    },
  }), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
