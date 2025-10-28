<!-- 首页 -->
<template>
  <section>
    <ul class="home">
      <!-- 轮播图 -->
      <homeBanner />
      <!-- 产品体系 -->
      <homeProduct />
      <!-- 全球视野 -->
      <HomeGobal />
      <!-- 科研创新 -->
      <homeScientific />
      <!-- 荣耀盛会 -->
      <homePageant />
      <!-- 精彩视频 -->
      <li class="home-video">
        <section class="home-navigationTitle">
          <h1>精彩视频</h1>
          <p>我是描述内容我是描述内容我是描述内容</p>
        </section>
      </li>
      <!-- 公益事业 -->
      <li class="home-benefit">
        <section class="home-navigationTitle">
          <h1>公益事业</h1>
          <p>我是描述内容我是描述内容我是描述内容</p>
        </section>
      </li>
    </ul>
  </section>
</template>

<script setup>
import homeBanner from './homeBanner.vue'
import homeScientific from './homeScientific.vue'
import homeProduct from './homeProduct.vue'
import HomeGobal from './homeGobal.vue'
import homePageant from './homePageant.vue'
// 产品体系
</script>

<style>
/* 首页导航栏通用样式 */
.home-navigationTitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 204px;
  gap: 6px;
}
.home-navigationTitle h1 {
  font-size: 36px;
}
.home-navigationTitle p {
  font-size: 16px;
}
section {
  width: 100%;
  height: auto;
}

.home {
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
  list-style: none;
}

/* 产品体系 */
.home-product.w {
  height: 758px;
}
/* 全球视野 */
.home-global {
  width: 100%;
  height: 808px;
  background-color: #f6f6f6;
}
/* 科研创新  */
.home-scientific.w {
  height: 754px;
  background-color: #fff;
}

/* 精彩视频 */
.home-video {
  width: 100%;
  height: 1028px;
  background-color: #f6f6f6;
}
/* 公益事业 */
.home-benefit {
  width: 100%;
  height: 864px;
  background-color: #fff;
}
</style>
