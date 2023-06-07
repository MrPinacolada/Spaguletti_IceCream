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
        <h2 id="Spaguletti" @click="scrollIntoView('betweenContainer')">SPAGULETTI</h2>
        <span @click="scrollIntoView('shopsicecream')">SHOPS</span>
        <span @click="scrollIntoView('Storysection')">OUR STORY</span>
        <span>ORDER ONLINE</span>
        <span id="lastSpanHeader" @click="scrollIntoView('getintouch')">CONTACT US</span>
      </div>
    </header>
    <div class="betweenContainer animate__animated animate__slideInDown">
      <img id="SPlogo" src="@/assets/Header/fotor_2023-6-5_16_4_7.png" alt="Spaguletti LOGO" />
    </div>
    <div class="scoop-scoop"></div>
    <main class="pageContainer animate__animated animate__slideInUp">
      <section>
        <div class="AboutUSWrapper">
          <div class="AboutUS">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa dicta praesentium
              sunt, fuga quidem fugit natus laboriosam quod aperiam necessitatibus rerum, dolore
              voluptas quis at unde voluptates ut! <br /><br />
              Quaerat ut dolorem doloribus, inventore quasi voluptatem praesentium deserunt,
              accusantium mollitia, eius laboriosam pariatur animi cupiditate sed quae provident.
              Hic, labore.
            </p>
          </div>
        </div>
      </section>
      <section>
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

          <a href="/" target="_blank" class="shopButt menuShopButt">download our menu</a>
          <swiper :pagination="true" :modules="modules">
            <swiper-slide><img src="@/assets/Body/116708427.jpg" alt="" /></swiper-slide>
            <swiper-slide><img src="@/assets/Body/119452030.jpg" alt="" /></swiper-slide>
            <swiper-slide><img src="@/assets/Body/120779949.jpg" alt="" /></swiper-slide>
            <swiper-slide><img src="@/assets/Body/116708427.jpg" alt="" /></swiper-slide>
            <swiper-slide><img src="@/assets/Body/116708427.jpg" alt="" /></swiper-slide>
          </swiper>
        </div>
      </section>
      <section
        class="back-ice flavoursection"
        v-intersection-observer="onIntersectionObserverIceCups"
      >
        <div class="flavours">
          <img
            v-for="(flavour, index) in flavours"
            :key="index"
            class="flavour-item"
            :class="iceCreamFlavorsinView"
            :src="flavour"
            alt=""
          />
        </div>
      </section>
      <section class="back-ice Storysection">
        <div class="ourStory">
          <lottie-player
            class="first-story-arrow"
            v-if="showFirstStoryArr"
            src="https://assets1.lottiefiles.com/packages/lf20_pztylarp.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            autoplay
          ></lottie-player>
          <lottie-player
            v-if="showFirstStoryArr"
            class="second-story-arrow"
            src="https://assets4.lottiefiles.com/packages/lf20_2z4qmxlj.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            autoplay
          ></lottie-player>
          <h2>OUR HISTORY</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, dicta.
            <br /><strong>Lorem ipsum dolor sit amet.</strong>
          </p>
          <p>Lorem ipsum dolor sit amet. <br /><strong>Lorem, ipsum dolor.</strong></p>
          <div class="storyContainer">
            <img src="@/assets/Body/1992story.png" alt="" />
            <span class="storybox storyboxgreen"
              ><p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A earum recusandae atque
                voluptate quo cum deleniti delectus vitae minus architecto!
              </p></span
            >
            <img src="@/assets/Body/1992story.png" alt="" />
            <span class="storybox storyboxpurple"
              ><p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A earum recusandae atque
                voluptate quo cum deleniti delectus vitae minus architecto!
              </p></span
            >
            <img
              src="@/assets/Body/1992story.png"
              v-intersection-observer="onIntersectionObserverArrows"
              alt=""
            />
            <span class="storybox storyboxbrown"
              ><p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A earum recusandae atque
                voluptate quo cum deleniti delectus vitae minus architecto!
              </p></span
            >
          </div>
        </div>
      </section>
      <section>
        <div class="getintouch">
          <h2>GET IN TOUCH</h2>
          <p>Have a question or just want to say hello?</p>
          <p>Give us a tweet, check out our latest updates</p>
          <p>or send us a message below</p>
          <div class="socialmedia-icons">
            <img src="@/assets/Body/instagram_logo_icon.svg" alt="" />
            <img src="@/assets/Body/whatsapp_logo_icon.svg" alt="" />
            <img src="@/assets/Body/twitter_logo_icon.svg" alt="" />
          </div>
          <form class="getintouch-form">
            <input required v-model="mesName" type="text" placeholder="Your name" />
            <input required v-model="mesEmail" type="email" placeholder="Your email address" />
            <textarea
              required
              v-model="mesMessage"
              placeholder="Your message"
              cols="30"
              rows="10"
            ></textarea
            ><br />
            <button @click="handleSendMessage" class="shopButt">Send</button>
          </form>
        </div>
      </section>
    </main>
    <footer>
      <div class="footer-container">
        <h2>SPAGULETTI©2023</h2>
        <div class="footer-container-flex">
          <p>LEGAL</p>
          <p>TERMS & CONDITIONS</p>
          <p>ALLERGY INFORMATION</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import SwiperCore from 'swiper'
SwiperCore.use([Pagination])
import 'swiper/css/pagination'
import 'swiper/css'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    let ShowLoadingScreen = ref(true)
    let showFirstStoryArr = ref(false)
    let mesName = ref()
    let mesEmail = ref()
    let mesMessage = ref()
    let iceCreamFlavorsinView = ref()
    let flavours = [
      './Spaguletti_IceCream/assets/Body/gridicetable/chocolate.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/honey.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/mint.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/chocolate.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/honey.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/mint.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/chocolate.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/honey.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/mint.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/chocolate.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/honey.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/mint.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/chocolate.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/honey.svg',
      './Spaguletti_IceCream/assets/Body/gridicetable/mint.svg'
    ]
    let onIntersectionObserverIceCups = ([{ isIntersecting }]: any) => {
      if (isIntersecting) {
        iceCreamFlavorsinView.value = 'animate__animated animate__flipInY'
      } else iceCreamFlavorsinView.value = ''
    }
    let onIntersectionObserverArrows = ([{ isIntersecting }]: any) => {
      if (isIntersecting) {
        showFirstStoryArr.value = isIntersecting
      } else showFirstStoryArr.value = false
    }
    let scrollIntoView = (view: string) => {
      let currentView = document.getElementsByClassName(view)[0] as HTMLElement
      currentView.scrollIntoView({ behavior: 'smooth' })
    }
    let handleSendMessage = () => {
      let message = {
        username: mesName.value,
        useremail: mesEmail,
        usermessage: mesMessage
      }
      console.log(message)
    }

    let HandlePageLoaded = () => {
      setTimeout(() => {
        let screenWidth = window.innerWidth
        let screenHeight = window.innerHeight
        if (screenWidth > 500) {
          return
        } else ShowLoadingScreen.value = false
      }, 2500)
    }
    onMounted(() => {
      HandlePageLoaded()
    })
    return {
      ShowLoadingScreen,
      modules: [Pagination],
      scrollIntoView,
      onIntersectionObserverIceCups,
      onIntersectionObserverArrows,
      iceCreamFlavorsinView,
      flavours,
      showFirstStoryArr,
      mesName,
      mesEmail,
      mesMessage,
      handleSendMessage
    }
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

@media only screen and (max-width: 768px) {
  .storyimg {
    width: 50px;
  }
  .swiper {
    width: 95%;
    height: 90%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
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
    cursor: pointer;
  }
  footer {
    width: 100%;
    height: 50px;
  }
  .footer-container > h2 {
    text-align: center;
    margin: 0;
    grid-column: span 3;
  }
  .footer-container {
    width: 100%;
    height: 50px;
    background-color: rgb(24, 146, 221, 0.7);
    font-family: 'Anton', sans-serif;
    font-size: 10px;
    letter-spacing: 1px;
    display: grid;
    padding-top: 5px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .footer-container-flex {
    display: flex;
    grid-column: span 3;
    justify-content: center;
    gap: 15px;
  }
  .footer-container-flex > p {
    margin: 0;
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

  .AboutUS > p {
    padding-top: 90px;
  }
  .AboutUS {
    /* display: grid; */
    margin: auto;
    text-align: center;
    width: 90%;
    height: 300px;
    margin-top: -20px;
    color: white;
    font-size: 13px;
    line-height: 1.4;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
  }
  .AboutUSWrapper {
    width: 100%;
    height: fit-content;
    background-color: #45eec4;
  }
  .shopsWrapper {
    padding-bottom: 25px;
    background: url(@/assets/Body/bits-bg.svg) no-repeat 50%;
    background-position: center center;
    background-size: cover;
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
    height: 100px;
    position: absolute;
    top: -4%;
  }
  /* .shopsWrapper::after {
    transform: rotate(-180deg) scale(1.5);
    content: '';
    background-image: url(/Spaguletti_IceCream/src/assets/Body/scoops-separator.svg);
    background-repeat: no-repeat;
    position: relative;
    top: 20px;
    width: 100%;
    height: 100px;
  } */
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
  .menuShopButt {
    background-image: url(@/assets/Body/arrow.svg);
  }

  .flavours {
    row-gap: 4px;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 19px;
    column-gap: 4px;
    padding: 4px;
  }
  .flavour-item {
    margin: 0 auto;
    padding: 0;
    object-fit: cover;
    border-radius: 5px;
  }
  section {
    width: 100%;
  }
  .back-ice::before {
    content: '';
    width: 100%;
    background-repeat: no-repeat;
    height: 100px;
    position: absolute;
    top: -11%;
  }

  .back-ice {
    background-position: center center;
    padding-top: 30px;
    position: relative;
  }
  .flavoursection::before {
    background-image: url(@/assets/Body/wavy-top2.svg);
  }

  .flavoursection {
    background: url(@/assets/Body/bits-bg2.svg) no-repeat 50%;
    padding-bottom: 50px;
  }
  .Storysection::before {
    background-image: url(@/assets/Body/wavy-top3.svg);
    top: -2%;
    transform: scaleX(-1);
  }
  .Storysection::after {
    transform: rotate(-180deg) scale(1.7);
    content: '';
    background-image: url(@/assets/Body/scoops-separator.svg);
    background-repeat: no-repeat;
    position: relative;
    top: 20px;
    width: 100%;
    height: 100px;
    display: block;
    left: -20%;
  }
  .Storysection {
    background: url(@/assets/Body/bits-bg3.svg) no-repeat 50%;
    position: relative;
  }
  .ourStory {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 20px;
    color: whitesmoke;
  }
  .storyContainer {
    display: grid;
    align-items: center;
    justify-items: center;
  }
  .storyContainer > img {
    max-width: 250px;
  }
  .storybox {
    width: 300px;
    height: 100px;
    margin-top: 20px;
    text-align: left;
    padding: 10px;
    border-radius: 10px;
    position: relative;
  }
  .storyboxgreen {
    background-color: #00a094;
    transform: rotate(5deg);
    margin-bottom: 50px;
  }
  .storyboxpurple {
    background-color: #b50981;
    transform: rotate(-3deg);
    margin-bottom: 50px;
  }
  .storyboxbrown {
    background-color: #de7914;
    transform: rotate(2deg);
  }
  .first-story-arrow {
    left: -27%;
    position: absolute;
    top: 34%;
    transform: rotate(45deg) scale(0.6);
  }
  .second-story-arrow {
    left: 48%;
    position: absolute;
    top: 58%;
    transform: rotate(90deg) scaley(-0.7) scaleX(0.7);
  }
  .getintouch {
    background: url(@/assets/Body/fotor_2023-6-7_17_38_4.png) no-repeat 50%;
    background-position: center center;
    background-size: cover;
    padding: 20px;
    color: whitesmoke;
    text-align: center;
    margin-top: 10px;
  }

  .getintouch > p {
    background-color: #b50981;
    margin: auto;
    width: fit-content;
  }
  .socialmedia-icons {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    justify-content: center;
  }
  .socialmedia-icons > img {
    max-width: 30px;
  }
  .getintouch-form {
    width: 100%;
    display: grid;
    color: whitesmoke;
    margin-top: 10px;
  }
  label {
    margin-bottom: 3px;
    text-align: left;
  }
  input {
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
  textarea {
    border: none;
    border-radius: 10px;
    padding: 10px;
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
