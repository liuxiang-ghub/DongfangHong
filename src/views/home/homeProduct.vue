<!-- 产品体系 -->
<template>
  <section>
    <li class="home-product w">
      <section class="home-navigationTitle">
        <h1>产品体系</h1>
        <p>我是描述内容我是描述内容我是描述内容</p>
      </section>
      <section class="home-product-middle">
        <ul class="home-product-middle-list">
          <li
            v-for="item in homeProduct"
            :key="item.id"
            :class="{ active: activeIndex === item.id }"
            @mouseenter="setActive(item.id)"
          >
            <a href="#">
              <img :src="item.img" alt="item.title" />
            </a>
            <section>
              <h2>{{ item.title }}</h2>
              <p>{{ item.content }}</p>
              <a href="#" id="home-productDetail">
                <span>了解更多</span>
                <img src="/imgs/home/Frame.png" alt="" />
              </a>
            </section>
          </li>
        </ul>
      </section>
    </li>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const activeIndex = ref(1)
const homeProduct = ref([
  {
    id: 1,
    img: '/imgs/home/Rectangle 696.png',
    title: '营养保健',
    content: '我是描述内容我是描述内容我是描述内容我是描述内容我是描述内容我是描述内容',
  },
  {
    id: 2,
    img: '/imgs/home/Rectangle 705.png',
    title: '美妆护肤',
    content: '我是描述内容我是描述内容我是描述内容我是描述内容我是描述内容我是描述内容',
  },
  {
    id: 3,
    img: '/imgs/home/Rectangle 706.png',
    title: '家居生活',
    content: '我是描述内容我是描述内容我是描述内容我是描述内容我是描述内容我是描述内容',
  },
  {
    id: 4,
    img: '/imgs/home/Rectangle 707.png',
    title: '健康设备',
    content: '我是描述内容我是描述内容我是描述内容我是描述内容我是描述内容我是描述内容',
  },
])
const setActive = (id) => {
  activeIndex.value = id
}
</script>

<style scoped>
.home-product {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.home-product-top p {
  font-size: 16px;
}
.home-product-middle {
  flex: 1;
}
.home-product-middle-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* 光标滚动切换产品体系 */
.home-product-middle-list li {
  max-height: 482px;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}
.home-product-middle-list li.active {
  width: 391px;
  transition: all 0.3s ease;
  opacity: 1;
}

.home-product-middle-list li:not(.active) {
  width: 257.67px;
  opacity: 0.8;
}

.home-product-middle-list li img {
  width: 100%;
  height: 304px;
  object-fit: fill;
  transition: all 0.3s ease;
}
.home-product-middle-list li section {
  width: 100%;
  height: 178px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.home-product-middle-list li section h2 {
  font-size: 24px;
  font-weight: 600;
}
.home-product-middle-list li section p {
  font-size: 14px;
  font-weight: 300;
}
#home-productDetail {
  display: flex;
  align-items: center;
}
#home-productDetail span {
  font-size: 16px;
  font-weight: 400;
}
#home-productDetail img {
  width: 24px;
  height: auto;
}
</style>
