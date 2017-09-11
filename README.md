# 前言

<ol>
<li>takeaway app(https://camille0918.github.io/vue_app/dist/index.html#/goods)</li>
<li>由于是node模拟的数据，没有上传到服务器。所以打开的静态页面获取不到数据</li>
<li>仿饿了么app是基于vue2.x最新实战项目，用到的技术栈：<br/>
  <span>vue2 + vue-router2 + vue-cli2 + vue-resource + stylus + flex布局 + es6 + eslint + webpack2</span>
</li>
</ol>  

## 项目运行

``` bash

# 克隆项目到本地
git clone https://github.com/camille0918/vue_app.git
# 安装依赖
npm install
# 本地开发，开启服务器，浏览器访问http://localhost:8080
npm run dev
# 构建生产
npm run build
# 运行打包文件
node prod.server.js 
会看到 Listening at http://localhost:9000 在浏览器中打开即可
```

## vue2相较vue1的改动
<ul>
  <li>v-for的书写格式，多出：key值，而且必须写
  <li>transition书写格式不在是在元素标签上写，而是作为一个标签<transition></transition>将目标元素包起来,过渡状态变为4种状态</li>
  <li>v-el 和 v-ref 都弃用，改为使用ref属性为元素或组件添加标记，通过$refs获取</li>
</ul>
