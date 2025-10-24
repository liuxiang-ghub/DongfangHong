<template>
  <section
    v-for="(img, i) in images"
    :key="i"
    class="banner"
    :style="{ backgroundImage: `url(${img})` }"
  ></section>
</template>

<script setup>
// import { computed } from 'vue'

// // 从 src/imgs 读取图片（路径以项目根为基准）；eager + as:'url' 直接返回可用的 URL
// const modules = import.meta.glob('/src/imgs/*.{png,jpg,jpeg,gif,svg}', { eager: true, as: 'url' })

// const images = computed(() =>
//   Object.entries(modules)
//     .map(([path, url]) => ({ path, url }))
//     .sort((a, b) => a.path.localeCompare(b.path))
//     .map((i) => i.url),
// )
//
</script>

//
<style scoped>
.banner {
  width: 100%;
  height: clamp(240px, 40vh, 500px); /* 高度随视口缩放 */
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 保持比例并完整展示 */
}
</style>
