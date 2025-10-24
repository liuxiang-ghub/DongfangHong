<template>
  <!-- 导航栏 -->
  <header>
    <section class="navigate w">
      <a href="#" class="logo"></a>
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
  <!-- 展示栏 -->
  <article>
    <RouterView></RouterView>
  </article>
  <!-- 底部栏 -->
  <footer>
    <div class="footerTop w">
      <div class="footer-container">
        <div class="footer-logo">
          <img src="./imgs/【哲风壁纸】护眼-舒适.png" alt="东方红" />
        </div>
        <div class="footer-columns w">
          <div v-for="(col, index) in footerData" :key="index" class="footer-col">
            <h3>{{ col.title }}</h3>
            <ul>
              <li v-for="(item, i) in col.items" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBottom w">
      <ul>
        <li>
          <a href="#"> 网站导航</a>
        </li>
        <li>
          <a href="#"> 隐私条款</a>
        </li>
        <li>
          <a href="#"> 法律声明</a>
        </li>
        <li>
          <a href="#"> 联系我们</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="js">
import { RouterView, RouterLink } from 'vue-router'
const footerData = [
  {
    title: '关于东方红',
    items: [
      '集团概况',
      '董事长致辞',
      '发展历程',
      '产业基地',
      '公司荣誉',
      '社会责任和公益',
      '企业使命',
    ],
  },
  {
    title: '科研创新',
    items: ['核心技术', '科研体系', '研发团队', '专利成果', '科研奖项'],
  },
  {
    title: '新闻中心',
    items: ['集团新闻', '集团公告', '媒体报道', '荣耀盛会'],
  },
  {
    title: '产品解决方案',
    items: ['营养保健', '美妆护肤', '家居生活', '健康设备'],
  },
  {
    title: '全球事业',
    items: ['全球发展', '事业机会', '加入我们'],
  },
]
</script>

<style scoped>
/* 项目头部 */
header {
  width: 100%;
  height: 6rem;
}
.navigate.w {
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: block;
  width: 20%;
  height: 100%;
  background: url('./imgs/【哲风壁纸】嘿猫-猫.png') no-repeat center;
  background-size: contain;
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

/* 项目主体 */
article {
  width: 100%;
  height: auto;
}

/* 项目底部 */
footer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footerTop.w {
  width: 100%;
  height: 16rem;
  background-color: #8c6b6b;
}
.footer-container.w {
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.footer-logo img {
  width: 120px;
  margin-right: 50px;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-wrap: wrap; /* 保证小屏自适应 */
}

.footer-col {
  width: auto;
  margin-bottom: 20px;
}

.footer-col h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  font-size: 14px;
  line-height: 2;
  cursor: pointer;
  transition: color 0.3s;
}

.footer-col li:hover {
  color: #0076ff;
}

.footerBottom.w {
  width: 100%;
  height: 4rem;
}
.footerBottom {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerBottom ul {
  width: 16rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
}
.footerBottom ul li {
  position: relative;
}

.footerBottom ul li:not(:last-child)::after {
  content: '|';
  margin-left: 5px; /* 与 gap 对齐 */
  color: #000000;
}
/* 矢量图 */
.icon-icon-sousu-copy,
.icon-diqiu,
.icon-zhongyingwenqiehuan-xianshizhongyingwen {
  font-size: 1.4rem;
}

.icon-xiangxiajiantou {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
