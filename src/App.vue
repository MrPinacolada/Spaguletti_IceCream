<template>
  <MainPage />
</template>
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent, ref, watch } from 'vue'
import MainPage from './components/MainPage.vue'
import 'animate.css';
export default defineComponent({
  components: { MainPage },
  setup() {
    return {}
  }
})

</script>
<style>
body {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}
</style>
