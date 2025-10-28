<!-- /* 首页轮播图 */ -->
<template>
  <li class="home-banner">
    <a href="#" v-for="(items, index) in bannerList" :key="index">
      <Transition :name="dir"> <img :src="items" v-show="index === showIndex" /></Transition>
    </a>
    <button class="left-btn" v-on:click="lastImg">
      <img src="/imgs/home/Frame@2x(10).png" />
    </button>
    <button class="right-btn" v-on:click="nextImg">
      <img src="/imgs/home/Frame@2x(11).png" />
    </button>
  </li>
</template>

<script setup>
import { ref } from 'vue'
let dir = ref('last')
const bannerList = ref([
  '/imgs/home/豆包.jpg',
  '/imgs/home/兰州中山桥.jpg',
  '/imgs/home/轮播图.png',
])
let showIndex = ref(0)
let timerDelay = null
let timer = null
//节流
function throttle(fn, delay = 1000) {
  let flag = true
  return function (...args) {
    if (!flag) return
    flag = false
    fn.apply(this, args)
    setTimeout(() => (flag = true), delay)
  }
}
const lastImg = throttle(_lastImg, 1000) // 1秒内多次点击只执行一次
const nextImg = throttle(_nextImg, 1000)

// 点击左侧按钮切换上一张
function _lastImg() {
  dir.value = 'last'
  clearInterval(timer)
  clearTimeout(timerDelay)
  showIndex.value = showIndex.value === 2 ? 0 : showIndex.value + 1
  timerDelay = setTimeout(() => {
    timer = timeStart()
    dir.value = 'next' //此处为无操作后将方向改正。
  }, 5000)
}
// 点击右侧按钮切换下一张
function _nextImg() {
  dir.value = 'next'
  clearInterval(timer)
  clearTimeout(timerDelay)
  showIndex.value = showIndex.value === 0 ? 2 : showIndex.value - 1
  timerDelay = setTimeout(() => {
    timer = timeStart()
  }, 5000)
}
//定时切换
function timeStart() {
  return setInterval(() => {
    showIndex.value = showIndex.value === 2 ? 0 : showIndex.value + 1
  }, 5000)
}
timer = timeStart()
</script>

<style scoped>
.home-banner {
  width: 1920px;
  height: 890px;
  position: relative;
  overflow: hidden;
}
.home-banner a {
  display: block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.home-banner a img {
  width: 1920px;
  height: 890px;
  position: absolute;
}

/* 轮播图过度样式 */
/* 右侧切换 */
.next-enter-active,
.next-leave-active {
  transition: transform 1s ease;
}

.next-enter-from {
  transform: translateX(100%);
}
.next-leave-to {
  transform: translateX(-100%);
}
/* 左侧切换 */
.last-enter-active,
.last-leave-active {
  transition: transform 1s ease;
}

.last-enter-from {
  transform: translateX(-100%);
}
.last-leave-to {
  transform: translateX(100%);
}
/* 左侧按钮 */
.left-btn {
  width: 56px;
  height: 56px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  position: absolute;
  top: 50%;
  left: 64px;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
}
/* 右侧按钮 */
.right-btn {
  width: 56px;
  height: 56px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  position: absolute;
  top: 50%;
  right: 64px;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.left-btn img,
.right-btn img {
  width: 24px;
  height: 24px;
  border: 1px dashed #a49a9a;
  color: #fff;
}
</style>
