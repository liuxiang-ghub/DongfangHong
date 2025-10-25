<template>
  <div id="app">
    <!-- 导航栏 -->
    <Navbar />
    <!-- 展示栏 -->
    <article>
      <RouterView></RouterView>
    </article>
    <!-- 底部栏 -->
    <Footer />
  </div>
</template>

<script setup lang="js">
import { RouterView } from 'vue-router'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
/* 项目主体 */
article {
  width: 100%;
  min-height: 60vh;
}
</style>
