<template>
  <div class="backGroung"></div>
  <div class="iceCreamContainer">
    <lottie-player
      src="https://assets6.lottiefiles.com/private_files/lf30_t8nkvzcj.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></lottie-player>
  </div>
</template>
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  components: {},
  setup() {
    return {}
  }
})
</script>
<style scoped>
@media only screen and (max-width: 768px) {
  .iceCreamContainer {
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: center;
    padding: 10px;
    margin-top: 40%;
  }
}
.backGroung {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(24,146,221,0.7);
}
</style>
