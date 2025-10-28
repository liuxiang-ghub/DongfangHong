<template>
  <li class="home-global">
    <section class="home-navigationTitle">
      <h1>全球视野</h1>
      <p>让全球每一个家庭都能享受到源自航天品质的健康与美好生活</p>
    </section>
    <main class="w">
      <div class="homeGlobal-left">
        <ul>
          <li v-for="items in GlobalList" :key="items.id">
            <p v-html="items.Contont"></p>
            <img v-if="items.img" :src="items.img" id="arrows" />
          </li>
        </ul>
      </div>
      <a href="#" class="homeGlobal-right"></a>
    </main>
  </li>
</template>
<script setup>
import { ref } from 'vue'
const GlobalList = ref([
  {
    id: 1,
    Contont: '关于东方红',
  },
  {
    id: 2,
    Contont:
      '北京东方红航天生物技术股份有限公司是一家植根中国、面向全球的领先企业集团，专注于航天高科技健康产品的研发、生产与销售。公司成立于1997年，总部位于北京，是由中国航天科技集团有限公司所属中国空间技术研究院发起成立、华润集团共同持股的国家高新技术企业。作为中国航天技术应用产业的核心力量，东方红集团肩负着推动航天生物技术应用与航天医学成果转化的重大使命。',
  },
  {
    id: 3,
    Contont: '践行“一带一路”，服务世界健康',
  },
  {
    id: 4,
    Contont:
      '历经28载的开拓与创新，东方红集团的高品质航天健康产品不仅成功进入国际市场，更作为中国高科技民族品牌的卓越代表，赢得了全球消费者的广泛认可。<br>在全球化浪潮与国家“一带一路”倡议的指引下，东方红集团正积极加速国际化战略布局。公司持续加大对“一带一路”沿线国家的投资与市场拓展力度，矢志将源自航天科技的尖端健康产品与解决方案推广至世界每一个角落。',
  },
  {
    id: 5,
    Contont: '了解更多',
    img: 'imgs/home/Frame.png',
  },
])
</script>
<style scoped>
main.w {
  height: 453px;
  display: flex;
  align-items: center;
  position: relative;
}
.homeGlobal-left {
  width: 576px;
  height: 453px;
  background-color: transparent;
  z-index: 2; /* 高于图片 */
  position: absolute;
}
.homeGlobal-left ul {
  height: 453px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.homeGlobal-left ul li:nth-child(1),
.homeGlobal-left ul li:nth-child(3) {
  font-family:
    PingFang SC,
    PingFang SC;
  font-weight: 600;
  font-size: 32px;
  line-height: 45px;
  text-align: left;
  font-style: normal;
  color: #e6002d;
}
.homeGlobal-left ul li:nth-child(2),
.homeGlobal-left ul li:nth-child(4) {
  font-family:
    PingFang SC,
    PingFang SC;
  font-weight: 400;
  font-size: 14px;
  color: #545454;
  line-height: 20px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.homeGlobal-left ul li:nth-child(5) p {
  font-size: 16px;
}
.homeGlobal-left ul li:nth-child(5) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
}
.homeGlobal-left ul li:nth-child(5):hover #arrows {
  transform: translateX(100px);
  transition: transform 0.4s ease;
}

.homeGlobal-right {
  width: 850px;
  height: 404px;
  border: 1px dashed #beb0b0;
  position: absolute;
  z-index: 1;
  right: -100px;
  background: url('/imgs/home/map.png');
}
</style>
