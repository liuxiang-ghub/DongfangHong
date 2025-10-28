<template>
  <li class="home-pageant">
    <section class="home-navigationTitle">
      <h1>荣耀盛会</h1>
      <p>我是描述内容我是描述内容我是描述内容</p>
    </section>
    <main>
      <a href="#" class="bannerList">
        <ul>
          <li v-for="(items, index) in PageantBanner" :key="index">
            <img :src="items.img" alt="" />
            <p>{{ items.title }}</p>
          </li>
        </ul>
      </a>
      <div class="bannerBtn w">
        <button class="left-btn" v-on:click="lastImg">
          <img src="/imgs/home/Frame@2x(10).png" />
        </button>
        <button class="right-btn" v-on:click="nextImg">
          <img src="/imgs/home/Frame@2x(11).png" />
        </button>
      </div>
    </main>
  </li>
</template>
<script setup>
import { ref } from 'vue'
const PageantBanner = ref([
  {
    id: 1,
    title: '十周年庆典',
    img: '/imgs/home/Rectangle 700.png',
  },
  {
    id: 1,
    title: '上海世博会',
    img: '/imgs/home/Rectangle 700(1).png',
  },
  {
    id: 1,
    title: '九三阅兵',
    img: '/imgs/home/Rectangle 700(2).png',
  },
  {
    id: 1,
    title: '航天之夜',
    img: '/imgs/home/Rectangle 700(3).png',
  },
  {
    id: 1,
    title: '十周年庆典',
    img: '/imgs/home/Rectangle 700.png',
  },
])
</script>

<style scoped>
/* 荣耀盛会 */
.home-pageant {
  width: 100%;
  height: 690px;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
}
main {
  width: 1920px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 0 0 25px 25px;
}
.bannerBtn.w {
  height: 112px;
  position: relative;
}
.bannerList {
  display: flex;
  width: 100%;
  height: 362px;
}
.bannerList ul {
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
}
.bannerList ul li {
  position: relative;
}
.bannerList ul li p {
  width: 100%;
  height: 82px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  font-family:
    PingFang SC,
    PingFang SC;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  line-height: 82px;
  text-align: center;
  font-style: normal;
  text-transform: none;
}

/* 左侧按钮 */
.left-btn {
  width: 56px;
  height: 56px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  position: absolute;
  top: 50%;
  left: 0;
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
  right: 0;
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
