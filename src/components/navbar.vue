<template>
  <header :class="{ 'home-header': isHome }">
    <section class="navigate w">
      <img src="../imgs/【哲风壁纸】护眼-舒适.png" alt="" class="logo" />
      <div class="nav">
        <ul>
          <li>
            <RouterLink to="/">首页</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">关于东方红</RouterLink>
            <span class="iconfont icon-xiangxiajiantou"></span>
          </li>
          <li>
            <RouterLink to="/scientific">科研创新</RouterLink>
            <span class="iconfont icon-xiangxiajiantou"></span>
          </li>
          <li>
            <RouterLink to="/news">新闻中心</RouterLink>
            <span class="iconfont icon-xiangxiajiantou"></span>
          </li>
          <li>
            <RouterLink to="/product">产品解决方案</RouterLink>
            <span class="iconfont icon-xiangxiajiantou"></span>
          </li>
          <li>
            <RouterLink to="/global"> 全球事业</RouterLink>
            <span class="iconfont icon-xiangxiajiantou"></span>
          </li>
        </ul>
      </div>
      <div class="lan">
        <ul>
          <li><span class="iconfont icon-icon-sousu-copy"></span></li>
          <li>
            <span class="iconfont icon-diqiu"></span>
            <span>Global</span>
            <span>|</span>
            <span class="iconfont icon-zhongyingwenqiehuan-xianshizhongyingwen"></span>
            <span>中文</span>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>
<script setup lang="js">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const isHome = computed(() => route.path === '/' || route.name === 'home')
</script>
<style scoped>
/* 首页样式 */
.home-header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
}
/* 通用样式 */
header {
  width: 100%;
  height: 6rem;
  position: sticky;
  top: 0;
  background-color: transparent;
}
.navigate.w {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: block;
  width: 20%;
  height: 100%;
}

.nav {
  width: 60%;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav ul:nth-child(1) {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 2rem;
}

.nav ul:nth-child(1) li {
  cursor: pointer;
  font-weight: 400;
}
.nav ul:nth-child(1) li:hover {
  color: rgb(208, 41, 41);
  transition: color 0.5s;
}

.lan {
  width: 20%;
  height: 100%;
}

.lan ul {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-right: 1rem;
}

.lan ul li:nth-child(1) {
  width: 20%;
  height: auto;
  text-align: center;
}

.lan ul li:nth-child(2) {
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
