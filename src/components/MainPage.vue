<template>
  <div v-show="ShowLoadingScreen" class="backGroung"></div>
  <div class="iceCreamContainer" v-show="ShowLoadingScreen">
    <lottie-player
      src="https://assets6.lottiefiles.com/private_files/lf30_t8nkvzcj.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></lottie-player>
  </div>
  <div class="bodyContainer" v-show="!ShowLoadingScreen">
    <header>
      <div class="HeaderContainer animate__animated animate__slideInDown">
        <h2 id="Spaguletti">SPAGULETTI</h2>
        <span>SHOPS</span>
        <span>ABOUT</span>
        <span>ORDER ONLINE</span>
        <span id="lastSpanHeader">CONTACT US</span>
      </div>
    </header>
    <div class="betweenContainer animate__animated animate__slideInDown">
      <img id="SPlogo" src="@/assets/Header/fotor_2023-6-5_16_4_7.png" alt="Spaguletti LOGO" />
    </div>
    <div class="scoop-scoop"></div>
    <div class="pageContainer animate__animated animate__slideInUp">
      <div class="AboutUSWrapper">
        <div class="AboutUS">
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa dicta praesentium
            sunt, fuga quidem fugit natus laboriosam quod aperiam necessitatibus rerum, dolore
            voluptas quis at unde voluptates ut! <br /><br />
            Quaerat ut dolorem doloribus, inventore quasi voluptatem praesentium deserunt,
            accusantium mollitia, eius laboriosam pariatur animi cupiditate sed quae provident. Hic,
            labore.
          </p>
        </div>
      </div>
      <div class="shopsWrapper">
        <div class="shopsicecream">
          <img src="@/assets/Body/288870800_561000605625699_2838917795971859607_n.jpg" alt="" />
          <p>
            Lorem ipsum dolor ctr amet consectetur adipisicing elit. <br />
            Opening times: <br />
            <strong
              >Tuesday to Sunday — <br />
              12 midday to 10pm <br />Monday — Closed</strong
            ><br />
          </p>
          <p>
            Find us at: <br />
            <strong>Kostava 21, 1 Vashlovani St</strong>
          </p>
          <a
            href="https://goo.gl/maps/mwenWCDLfkWvHkke9"
            target="_blank"
            class="shopButt mapShopButt"
            >Visit the Spaguletti</a
          >
        </div>
        <a
          href="/"
          target="_blank"
          class="shopButt menuShopButt"
          >download our menu</a
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent, onMounted, ref, watch } from 'vue'
export default defineComponent({
  components: {},
  setup() {
    let ShowLoadingScreen = ref(true)
    let HandlePageLoaded = () => {
      setTimeout(() => {
        ShowLoadingScreen.value = false
      }, 2500)
    }
    onMounted(() => {
      HandlePageLoaded()
    })
    return { ShowLoadingScreen }
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

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
    font-family: 'Anton', sans-serif;
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
    background: url(@/assets/Body/scoops-separator.svg) no-repeat 50%;
    width: 100%;
    height: 44px;
    z-index: 15;
    position: relative;
    animation: slide-in-top 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes slide-in-top {
    0% {
      /* transform: translateY(-1000px); */
      opacity: 0;
    }
    100% {
      transform: scale(4) rotate(7deg);
      opacity: 1;
    }
  }

  .AboutUS {
    /* display: grid; */
    margin: auto;
    text-align: center;
    width: 90%;
    height: 300px;
    margin-top: 60px;
    color: white;
    font-size: 13px;
    line-height: 1.4;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
    background-color: black;
  }
  .AboutUSWrapper {
    width: 100%;
    height: fit-content;
    background-color: black;
  }
  .shopsWrapper {
    background: url(@/assets/Body/bits-bg.svg) no-repeat 50%;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    margin-top: 20px;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 20px;
  }
  .shopsWrapper::before {
    content: '';
    background-image: url(@/assets/Body/wavy-top.svg);
    width: 100%;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    top: -5%;
  }
  .shopsicecream {
    width: 80%;
    height: fit-content;
    background-color: whitesmoke;
    border-radius: 25px;
    display: grid;
    align-items: center;
    justify-items: center;
    margin: auto;
    padding: 10px;
    margin-top: 40px;
    text-align: center;
  }
  .shopsicecream > img {
    max-width: 300px;
    max-height: 100%;
    border-radius: 25px;
  }
  .shopButt {
    text-decoration: none;
    color: black;
    background-position: 97%;
    background-size: 8%;
    background-repeat: no-repeat;
    display: inline-block;
    background-color: #00a094;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: futura-pt-condensed, sans-serif;
    font-weight: 700;
    font-size: 1em;
    letter-spacing: -0.03em;
    line-height: 1;
    padding: 0.8em 3em;
    border: 0;
    border-radius: 0.5em;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.3s ease, opacity 0.3s ease;
  }
  .mapShopButt {
    background-image: url(@/assets/Body/marker.svg);
  }
  .menuShopButt{
    background-image: url(@/assets/Body/arrow.svg);

  }
}
.backGroung {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(@/assets/Body/loadingBack.svg) no-repeat 50%;
  background-position: center center;
  background-size: cover;
  animation: borderadius 2s ease-in-out;
}
</style>
