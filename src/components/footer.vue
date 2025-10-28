<template>
  <footer>
    <div class="footerTop w">
      <div class="footer-container w">
        <div class="footer-logo">
          <img src="/imgs/home/logo.png" alt="东方红" />
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
<script setup>
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
footer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
}

.footerTop.w {
  height: auto;
  display: flex;
  justify-content: flex-start;
}
.footer-container.w {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 40px;
}

.footer-logo img {
  width: 100px;
  height: auto;
}

.footer-columns {
  width: 804px;
  display: flex;
  justify-content: space-between;
}

.footer-col {
  width: auto;
  margin-bottom: 20px;
}

.footer-col h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  font-size: 12px;
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
</style>
