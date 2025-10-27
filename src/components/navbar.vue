<template>
  <header :class="{ 'home-header': isHome, scrolled: isScrolled }">
    <section class="navigate w">
      <a href="#">
        <img src="/imgs/home/Group.png" alt="" class="logo" />
      </a>
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
import { computed, ref, onMounted, onUnmounted } from 'vue'
const route = useRoute()
const isHome = computed(() => route.path === '/' || route.name === 'home')
const isScrolled = ref(false)
let scrollTimer = null
//滚动事件，节流
const handleScroll = () => {
  if (scrollTimer) return

  scrollTimer = setTimeout(() => {
    isScrolled.value = window.scrollY > 50
    scrollTimer = null
  }, 10)
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
  height: 100px;
  position: sticky;
  top: 0;
  background-color: transparent;
}
/*  滚动后样式 */
.home-header.scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition:
    background-color 0.3s,
    box-shadow 0.3s,
    border-bottom 0.3s;
}
.navigate.w {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: block;
  max-width: 113px;
  max-height: 40px;
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
