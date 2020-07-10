<!-- $theme: gaia -->

# 艾氪森 H5 周末班 week 7

---

# 目录

- CSS 过渡动画
- CSS 关键帧动画
- CSS 变形
- SVG 画图
- SVG 动画
- 遮罩动画
- 动画组合


---

# 微信图标动画

![](images/week7-01.jpg) ![](images/week7-02.jpg)

如何让微信图标的小眼睛动起来

- 准备两张图片，叠加在一起
- 让上面的图片透明度随时间变化

---

HTML 结构

```
<div class="test1">
  <div class="weixin-box">
    <img src="../images/week7/weixin_2.svg">
    <img class="weixin-mask" 
      src="../images/week7//weixin_1.svg">
  </div>
</div>
```
---

两张图片叠加在一起

```
.test1 {
  position: relative;            
}

.test1 img {
  position: absolute;
  top: 0;
  left: 0;
}
```

---

上面的图片增加动画

```
.test1 img.weixin-mask {
  animation-name: weixin; /* 动画名 */
  animation-duration: 3s; /* 持续时间 */
  animation-timing-function: linear; /* 时间曲线 */
  animation-delay: 0s; /* 延迟时间 */
  animation-iteration-count: infinite; /* 播放次数*/
  animation-direction: normal; /* 动画方向 */
  animation-play-state: running; /* 播放还是暂停 */
}
```

http://www.runoob.com/css3/css3-animations.html

---

定义关键帧动画

```
@keyframes weixin {
  0% {opacity: 1;}

  0.1% {opacity: 0;}

  50% {opacity: 0;}

  50.1% {opacity: 1;}

  100% {opacity: 1;}
}
```

---

# SVG 


可缩放矢量图形是基于可扩展标记语言（标准通用标记语言的子集），用于描述二维矢量图形的一种图形格式。

```
<svg 
  class="signal-line"
  width="100%" 
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 131.333 120">
</svg>
```

[菜鸟教程：SVG 教程](http://www.runoob.com/svg/svg-tutorial.html)
[张鑫旭：理解SVG viewport, viewBox, preserveAspectRatio 缩放](http://www.zhangxinxu.com/wordpress/2014/08/svg-viewport-viewbox-preserveaspectratio/)

---

线

```
<line x1="200"
  y1="0" x2="400"
  y2="200"
  style="stroke:#fff;stroke-width:2" />
```

---

矩形

```
<rect 
  x="50" 
  y="0" 
  width="50" 
  height="100" 
  style="fill:blue;stroke-width:1;stroke:yellow" />
```

---

圆

```
<circle 
  cx="50" 
  cy="50" 
  r="40" 
  stroke="black" 
  stroke-width="2" 
  fill="red" />

```

---

折线

```
<polyline 
points="20,20 40,25 60,40 80,120 120,140 200,180" 
style="fill:none;stroke:black;stroke-width:3" />
```

---


# path

path元素是SVG基本形状中最强大的一个，它不仅能创建其他基本形状，还能创建更多其他形状。

```
<path d="M150 0 L75 200 L225 200 Z" fill="yellow" />
```
- M = moveto
- L = lineto
- Z = closepath

[菜鸟教程：SVG 在线编辑器](https://c.runoob.com/more/svgeditor/)
[简书：svg 之 path 详解](https://www.jianshu.com/p/c819ae16d29b)

--- 

# stroke

- stroke 表示描边颜色
- stroke-width 表示描边的粗细
- stroke-dasharray 表示虚线描边。
- stroke-dashoffset 表示虚线的起始偏移

% 单位是基于 viewBox

---
# 描边动画


1. 把 `stroke-dasharray` 和 `stroke-dashoffset` 设置为特别大的值
2. 用 CSS 关键帧动画把 `dashoffset` 值逐渐变小


[css-tricks: stroke-dashoffset](https://css-tricks.com/almanac/properties/s/stroke-dashoffset/)
[张鑫旭：纯CSS实现帅气的SVG路径描边动画效果](http://www.zhangxinxu.com/wordpress/2014/04/animateion-line-drawing-svg-path-%E5%8A%A8%E7%94%BB-%E8%B7%AF%E5%BE%84/)

---

# 变形介绍

- 转换：translate，translateX， translateY，translateZ
- 缩放：scale，scaleX，scaleY，scaleZ
- 旋转：rotate，rotateX，rotateY，rotateZ
- 倾斜：skew， skewX，skewY

https://c.runoob.com/codedemo/3391

理解：`Perspective` 和 `Transform origin` 

---

变形动画

HTML

```
<div class="test4">
  <img src="../images/week7/shake_phone.svg">
</div>

```
CSS
```
.test4 img {animation-name: shake;}
@keyframes shake {
  0% {transform: rotate(0deg);}
  1% {transform: rotate(10deg);}
  3% {transform: rotate(-10deg);}
  5% {transform: rotate(10deg);}
}
```

---

# 组合动画：初始状态

HTML 

```
<div class="test5-1">
  <img src="../images/week7/email_bg.svg">
  <div class="email-inner">
    <img src="../images/week7/email_inner.svg">
  </div>
  <div class="email-top">
    <img src="../images/week7/email_top.svg">
  </div>
  <div class="email-bottom">
    <img src="../images/week7/email_top.svg">
  </div>
</div>
```

---

CSS

```
.test5-1 {
  width: 200px; height:100px; position:relative; top:50px;
}
.test5-1 .email-top {
  position:absolute; top:-4px; left:2px;
  transform: rotate(180deg); /* 信封三角向下 */
}
.test5-1 .email-inner {
  position:absolute; top:40px;left: 19px;     

  /* 默认把信件隐藏 */
  overflow:hidden; height:0;
}
.test5-1 .email-bottom {
  position:absolute; top:25px; left:2px;
}
```

---
结束状态

```
.test5-2 .email-top {
  position: absolute;
  left: 2px;
  
  /* 再旋转 180 度，相当于取消旋转，但位置要靠上一些*/
  top: -30px;
}

.test5-2 .email-inner {
  position: absolute;
  left: 19px;
  overflow: hidden;
  
  /* 信封向上抽出来 */
  top: 8px;
  height: 32px;
}
```

---

信封开启

- 动画属性简写：`animation: name duration timing-function delay iteration-count direction;`
- 设置旋转轴：`transform-origin`

```
.test5 .email-top img {
  transform-origin: 50% 100%;
  animation: openemail 5s linear 0s infinite;
}

@keyframes openemail {
  35% {
    transform: rotateX(180deg);
  }
}
```

---

信件抽出

```
.test5 .email-inner {
  position: absolute;
  overflow: hidden;
  height: 0px;
  top: 40px;
  left: 19px;
  animation: emailinner 5s linear 0s infinite;
}

@keyframes emailinner {
  60% {
    top: 8px;
    height: 32px;
  }
}
```

---
# 渐变

- 线性渐变
	- 至少定义两种颜色结点，也可以设置一个起点和一个方向（或一个角度） 
- 径向渐变
	- 指定渐变的中心、形状（圆形或椭圆形）、大小

```
background: -webkit-linear-gradient(left, yellow, green);
background: -webkit-linear-gradient(yellow, transparent);
background: -webkit-radial-gradient(yellow 30%,
                                    green 100%);
```

[菜鸟教程：CSS3 渐变](http://www.runoob.com/css3/css3-gradients.html)

---

# 遮罩

白色意味着不透明，黑色意味着透明，介于黑白之间的灰色表示半透明。

```
<div class="test6"></div>

.test6 {
  background-image: url("../images/onepiece.jpg");
  -webkit-mask-image: url("../images/mask.png"); 
  height: 260px;  /* 遮罩图片的高度 */
}
```


[简单说 CSS中的mask—好好利用mask-image](https://segmentfault.com/a/1190000011838367)
[小火柴：CSS遮罩mask](https://www.cnblogs.com/xiaohuochai/p/7182507.html)
[张鑫旭：CSS遮罩CSS3 mask/masks 详细介绍](http://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/)

---

# 渐变遮罩

```
<div class="test8"></div>

.test8 {
  height: 300px;
  background-image: url("../images/onepiece.jpg");
  -webkit-mask-image:
    -webkit-linear-gradient(left, transparent, white);
}
```

---

# svg 遮罩

略

---
遮罩动画

```
<div class="test9"></div>
.test9 {
  height: 300px;
  background-image: url("../images/onepiece.jpg");
  -webkit-mask-image: -webkit-linear-gradient(
    left, transparent, white);    
  /* 设置遮罩大小，否则默认遮罩占满全屏*/
  -webkit-mask-size: 100px 100%;    
  /* 禁止水平平铺，通过 position 移动来达到扫描效果 */
  -webkit-mask-repeat: no-repeat;

  -webkit-mask-position: -10% 0;
  animation: heartbeat 5s linear 0s infinite;
}
@keyframes heartbeat {
  from { -webkit-mask-position: -10% 0; }
  to {-webkit-mask-position: 110% 0; }
}
```

---

# 荧光动画

HTML
```
<div class="test10">
  <div class="bg-shadow"></div>
  <img src="../images/week7/Dtoken.svg">
</div>
```

---

CSS
```
.test10 .bg-shadow {
  position:absolute; top:10px; left:10px;width: 163px;
  height: 180px; border-radius: 50%;
  z-index: -1; /* 防止遮盖图片 */
  animation: shadow 3s linear 1s infinite alternate;
}

@keyframes shadow {
  from {box-shadow: 0 0 10px white;opacity: 0.7;}
  to {box-shadow: 0 0 150px white;opacity: 1;}
}
```

---

# 路径动画

- [CSS秘密花园： 沿着路径的动画](https://www.w3cplus.com/css3/css-secrets/animation-along-a-circular-path.html)
- [CSS分层动画可以让元素沿弧形路径运动](http://jinlong.github.io/2016/01/14/moving-along-a-curved-path-in-css-with-layered-animation/)
- [超级强大的SVG SMIL animation动画详解](http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)

---

HTML

```
<div class="test11">
  <div class="path">
    <div class="avatar">
      <img src="../images/week7/Dtoken.svg" /> 
    </div>
  </div>
</div>
```

---
CSS

```
.test11 .path {
  width:300px; height: 300px; background:orange;
  border-radius:50%; text-align:center;
}

@keyframes spin {
  to {transform: rotate(1turn);}
}

.test11 .avatar {
  animation: spin 3s infinite linear;
  transform-origin: 50% 150px;
  /* 150px = path radius */
}

.test11 .avatar>img {
  width:30px; animation: infinite;
  animation-direction: reverse;
}
```
---

# js 控制动画

```
$(function () {
  var checkActive = function () {
    $(".page").each(function () {
      var scroll = $(document).scrollTop();
      // 检测滚动位置
      if ($(this).offset().top - scroll < 200) { 
        $(this).addClass("active");
  	  }
    });
  };
     
  $(window).scroll(function (e, delta) {
  	checkActive();
  });
  
  checkActive();
});
```

---

# 其它

- Bootstrap组件综合案例：week6/qcloud.html
- 常用布局组件：
    - week6/float.html,grid.1.html,grid.2.html,grid.3.html
	- herounit.2.html,herounit.html,mutil-col.html,towcol.html


---

# 谢谢