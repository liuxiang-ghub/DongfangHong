<!-- 首页 -->

<template>
  <section>
    <ul class="home">
      <li class="home-banner">
        <a href="#">
          <img src="../../imgs/【哲风壁纸】嘿猫-猫.png" alt="" />
          <!-- <carousel /> -->
        </a>
      </li>
      <li class="home-product">
        <main class="w">
          <section class="home-product-top">
            <h1>产品体系</h1>
            <p>我是描述内容我是描述内容我是描述内容</p>
          </section>
          <section class="home-product-bottom">
            <ul class="home-product-bottom-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </main>
      </li>
      <li class="home-global"></li>
      <li class="home-scientific"></li>
      <li class="home-pageant"></li>
      <li class="home-video"></li>
      <li class="home-benefit"></li>
    </ul>
  </section>
</template>

<script setup>
// import carousel from '../../components/Carousel.vue'
</script>

<style scoped>
section {
  width: 100%;
  height: auto;
}

.home {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}

/* 首页轮播图 */
.home-banner {
  width: 100%;
  height: auto;
}
.home-banner a img {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 40rem;
}
/* 首页产品体系 */
.home-product {
  width: 100%;
  min-height: 12rem;
}
.home-product main.w {
  height: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
}
.home-product-top {
  flex: 1;
  background-color: #b5d6e2;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-product-bottom {
  flex: 1;
  background-color: #d6e2b5;
}
.home-product-bottom-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.home-product-bottom ul li {
  width: 150px;
  height: 150px;
  background-color: #fff;
  border: 1px solid #000;
}
</style>
