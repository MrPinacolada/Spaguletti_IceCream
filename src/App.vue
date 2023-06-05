<template>
  <MainPage />
</template>
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent, ref, watch } from 'vue'
import MainPage from './components/MainPage.vue'
export default defineComponent({
  components: { MainPage },
  setup() {
    return {}
  }
})
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  overflow-x: hidden;
}
</style>
