<template>
  <div v-if="ShowLoadingScreen" class="backGroung"></div>
  <div class="iceCreamContainer" v-if="ShowLoadingScreen">
    <lottie-player
      src="https://assets6.lottiefiles.com/private_files/lf30_t8nkvzcj.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></lottie-player>
  </div>
  <div class="bodyContainer">
    <header>
      <div class="HeaderContainer">
        <h2 id="Spaguletti">SPAGULETTI</h2>
        <span>SHOPS</span>
        <span>ABOUT</span>
        <span>ORDER ONLINE</span>
        <span id="lastSpanHeader">CONTACT US</span>
      </div>
    </header>
    <div class="betweenContainer">
      <img id="SPlogo" src="@/assets/Header/fotor_2023-6-5_16_4_7.png" alt="Spaguletti LOGO" />
    </div>
    <div class="scoop-scoop"></div>
    <div class="pageContainer">
      <div class="AboutUS">
        <h3>ABOUT US</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis mollitia
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  components: {},
  setup() {
    let ShowLoadingScreen = ref(false)
    return { ShowLoadingScreen }
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

@media only screen and (max-width: 768px) {
  .iceCreamContainer {
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: center;
    padding: 10px;
    margin-top: 40%;
  }
  .bodyContainer {
    display: grid;
    align-items: center;
    justify-items: center;
    font-family: 'Anton', sans-serif;
    grid-template-rows: 0.23fr 1fr;
    overflow-x: hidden;
  }
  #SPlogo {
    max-width: 150px;
    max-height: 150px;
    z-index: 10;
  }
  header {
    width: 100%;
  }
  #lastSpanHeader {
    grid-column: span 2;
  }
  .HeaderContainer {
    display: grid;
    justify-items: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(5, 1fr);
    font-size: 11px;
    letter-spacing: 1px;
    width: 100%;
    background-color: rgb(24, 146, 221, 0.7);
    row-gap: 10px;
    box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.55);
    position: fixed;
    top: 0;
    z-index: 100;
  }
  #Spaguletti {
    grid-column: span 5;
  }
  .betweenContainer {
    width: 100%;
    height: 300px;
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .betweenContainer::before {
    content: '';
    background-image: url(@/assets/Body/309856059.jpg);
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.7;
    z-index: 10;
  }
  h2 {
    margin: 0;
    margin-top: 5px;
  }
  .pageContainer {
    display: grid;
    align-items: center;
    justify-items: center;
    position: relative;
  }
  
  .scoop-scoop {
    transform: scale(4) rotate(7deg);
    content: '';
    background: url(/Spaguletti/src/assets/Body/scoops-separator.svg) no-repeat 50%;
    width: 100%;
    height: 44px;
    z-index: 15;
    position: relative;
  }
  .AboutUS {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 300px;
    margin-top: 50px;
  }
}
.backGroung {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(24, 146, 221, 0.7);
}
</style>
