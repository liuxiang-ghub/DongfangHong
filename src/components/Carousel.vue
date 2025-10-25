<template>
  <swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 3000 }" class="carousel">
    <swiper-slide v-for="(img, index) in images" :key="index">
      <img :src="img" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
const images = ['../imgs/星空.png', '../imgs/星空.png', '../imgs/星空.png']
</script>

<style scoped>
.carousel {
  width: 100vw;
  padding-top: 40%;
  position: relative;
  overflow: hidden;
}

.carousel img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 高度自适应并保持比例 */
  display: block;
}
</style>
