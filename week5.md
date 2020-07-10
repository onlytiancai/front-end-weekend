# 艾氪森 H5 周末班 Week 5

---

# 常用组件

- 下拉菜单
- 悬浮图层
- 弹窗
- 标签页
- 折叠面板

---
# 下拉菜单

基本 HTML

```
<ul class="menu">
  <li><a href="">主页</a></li>
  <li><a href="">新闻</a>
    <ul>
      <li><a href="">体育</a></li>
      <li><a href="">天气</a></li>
      <li><a href="">金融</a></li>
    </ul>
  </li>
  <li><a href="">产品</a>
	<ul>
      <li><a href="">机器</a></li>
      <li><a href="">压缩机</a></li>
      <li><a href="">车辆</a></li>
      <li><a href="">建筑</a></li>
	</ul>
  </li>
  <li><a href="">服务</a></li>
  <li><a href="">联系我们</a></li>
</ul>
```

---

# 下拉菜单

一级菜单

```
ul {
  margin: 0;  padding: 0;  list-style: none;
}

.menu {
  background: #27ae60;
  height: 65px;
}

.menu  li {
  display: block; float: left;  position: relative;
  border-right: 1px solid rgba(255, 255, 255, .3);

}

.menu li a {
	display: block;
	line-height: 65px;
}
```

---
# 下拉菜单

二级菜单

```
.menu li ul {
  display: none;
  position: absolute;
  top: 65px;
  background: #2ecc71;
}
.menu li ul li {
  width: 100%;
  border-right: 0;
  border-top: 1px solid rgba(255, 255, 255, .3);
}

.menu li ul li a {
  font-size: 14px;
  line-height: 50px;
}
```

---

# 下拉菜单

动态下拉

```
.menu li:hover ul {
  display: block;
}

.menu li:hover {
  background: rgba(0, 0, 0, .2);
}
```

---

# 悬浮图层

- 应用：回到顶部，购物车，分享按钮，咨询按钮，悬浮导航
- JS 基础：
	-  获取元素：`document.getElementById("top")`
	-  添加事件：`nav.addEventListener('click', function()`
	-  设置样式：`nav.className = 'show'`
	-  调用方法：`window.scrollTo(0, 0)`
	-  获取属性：`document.documentElement.scrollTop`
- CSS：
	- 透明色：`background: rgba(255, 255, 255, .2);`
	- 鼠标样式：`cursor: pointer;`
	- 透明度：`opacity: 0;`
	- after 伪类：`#top::after`
	- 过渡动画：`transition: all 1s;`

---
# 悬浮图层

基本结构和样式：
`<div id="top">Top</div>`

```
#top {
	position: fixed;
	z-index: 5000;
	right: 50px;
	bottom: 50px;
}
```

---
# 悬浮图层

小三角：

```
#top::after {
  content: '';
  width: 0;
  height: 0;

  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent #fff transparent;

  position: absolute;
  top: 5px;
  left: 50%;
  margin-left: -8px;
}
```

---

# 悬浮图层

动画：
```
#top {
    opacity: 0;
    transition: all 1s;
}

#top.show {
    opacity: 1;
}
```

```
nav.className = 'show';
```

---

# 悬浮图层

滚动：

- [addEventListener vs onclick](https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick)
- [body.scrollTop](https://stackoverflow.com/questions/19618545/body-scrolltop-vs-documentelement-scrolltop-vs-window-pageyoffset-vs-window-scro)
- [$(window).scrollTop() vs. $(document).scrollTop()](https://stackoverflow.com/questions/5371139/window-scrolltop-vs-document-scrolltop)

---
# 弹窗

- jQuery 基础
	- 文档就绪事件：`$(document).ready(function(){})`
	- 选择器：`$('a, .popup-close, .popup-bg')`
	- 事件: `element.on('click', function(){})` 
	- 切换 CSS 类： `toggleClass('show')`
- CSS:
	- `visibility: hidden;` `opacity: 0;` `display: none` 的区别
	- `z-index` 的应用

---
# 弹窗

HTML

```
<div class="popup">
  <div class="popup-content">
    <h2>假如生活护龙了你</h2>
    <p>假如生活护龙了你</p>
    <p>表吱声</p>
    <p>表咋呼</p>
    <p>表嘟囔</p>
    <button class="popup-close">关闭弹窗</button>
  </div>
  <div class="popup-bg"></div>
</div>
```

---

# 弹窗

CSS

```
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.popup-content {
  position: absolute;
  z-index: 200;
}

.popup-bg {
  position: absolute;
  z-index: 100;
  background: rgba(0, 0, 0, .3);
}
```

---

# 弹窗

弹出效果

```
.popup {
  visibility: hidden;
  opacity: 0;
  transition: all .5s;
}

.popup.show {
  visibility: visible;
  opacity: 1;
}
```

---
# 弹窗

JS 弹窗逻辑

```
$(document).ready(function() {
  $('a, .popup-close, .popup-bg').on('click', function(e) {
    e.preventDefault();
    $('.popup').toggleClass('show');
  });
});
```

---

# 标签页

防止全局变量污染


```
(function() {
    // Your code here

})();

```

- [How to avoid global variables in JavaScript?](https://stackoverflow.com/questions/1841916/how-to-avoid-global-variables-in-javascript)

---

# 标签页

基础 HTML

```
<div class="tab-container">
  <ul class="tab-nav">
    <li>
    	<a href="#content-russia" id="nav-russia">俄语</a>
    </li>
    <li>
    	<a href="#content-english" id="nav-english">英语</a>
    </li>
  </ul>

  <div id="content-russia" class="tab-content">
  	<h2>Если жизнь тебя обманет</h2>
  </div>
  <div id="content-english" class="tab-content">
  	<h2>If by Life You Were Deceived</h2>
  </div>  

</div>
```

---

# 标签页

导航 CSS: 横向排列 `ul`

```
.tab-container .tab-nav {
  background: #1abc9c;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tab-container .tab-nav li {
  display: inline-block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
```

---
# 标签页

导航 CSS ：当前标签 和非当前 标签使用不同样式

```
.tab-container .tab-nav li a {
  display: block;  /* 必须，否则背景色不会占满*/
  color: #fff;
  text-decoration: none;
}

.tab-nav li a.active {
  color: #1abc9c;
  background: #fff;
}
```

---
# 标签页

JS 逻辑
```
function hideAll() {
  nav_russia.className = nav_english.className 
    = nav_chinese.className = nav_yantai.className = 'none';
    
  content_russia.style.display 
    = content_english.style.display 
    = content_chinese.style.display 
    = content_yantai.style.display 
    = 'none';
}

function showRussia() {
  hideAll();
  nav_russia.className = 'active';
  content_russia.style.display = 'block';
}

nav_russia.addEventListener('click', showRussia);

showRussia()
```

---
# 折叠面板

JS 基础

- 内置选择器：`querySelectorAll` `querySelector`
- this: 事件处理器里的 `this` 表示触发事件的 dom 元素

---
# 折叠面板

基础 HTML

```
<div class="collapse">

  <div class="item">
  <h2>Если жизнь тебя обманет</h2>
    <div class="content">
    <p>Если жизнь тебя обманет,</p>
  </div>
  </div>

  <div class="item">
    <h2>If by Life You Were Deceived</h2>
    <div class="content">
    	<p>If by life you were deceived,</p>
    </div>
  </div>
</div>
```

---
# 折叠面板

基础 CSS

```
.collapse .item {
  background: #9b59b6;
  border-bottom: 1px solid rgba(255, 255, 255, .3);
}

.collapse .item h2 {
  position: relative;
  height: 70px;
  line-height: 70px;  
  background: #8e44ad;
  cursor: pointer;
  transition: all .5s;
}

.collapse .item h2:hover {
  background: #6e208e;
}
```

---
# 折叠面板

动态效果

```
.collapse .item h2::after {
  border-width: 7px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;

  position: absolute;
  top: 35px;
  right: 20px;
}

.collapse h2.hide::after {
  border-color: transparent #fff transparent transparent;
  top: 30px;
  right: 22px;
}

.collapse .content.hide {
  display: none;
}
```

---
# 折叠面板

初始化逻辑

```
var titles = document.querySelectorAll('.collapse h2'),
	items = document.querySelectorAll('.collapse .item');

function foldAll() {
  for (var i = 0; i < titles.length; i++) {
    items[i].querySelector('.content').className = 'content hide';
    titles[i].className = 'hide';         
  }
}

foldAll();
```

---
# 折叠面板

挂载事件

```
function openPanel(panel) {
  var targetClass = panel.className == 'hide' ? '' : 'hide';
  foldAll();
  panel.parentNode.querySelector('.content').className 
  	= 'content ' + targetClass;
  panel.className = targetClass;
}

for (var i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function() {
  	openPanel(this);
  });                
}
```




