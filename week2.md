# 艾氪森 H5 周末班 week2

---

## 什么是 CSS 

- 层叠样式表
- 控制 HTML 的显示
- 内容和表现分离

---
CSS 是如何工作的

[CSS in Action](http://www.runoob.com/try/demo_source/demo_default.htm)

---

## CSS 语法

- 规则
	- 选择器
	- 声明
		- 属性
		- 值
- 注释 

```
/*这是个注释*/
p {
    font-family: "Times New Roman";
    font-size: 20px;
}
```

---
## id 和 class 选择器

- id 是唯一的：`#main-container`
- class 选择多个元素: `.item`

---

## 创建 CSS

- 外部：`<link rel="stylesheet" type="text/css" href="mystyle.css">`
- 内部：`<style>p {margin-left:20px;}</style>`
- 内联：`<p style="color:sienna;margin-left:20px">这是一个段落。</p>`

为了网页能够正常显示，外部和内部样式都定义在 `head` 里。

[网页 head 标签中的 JS 和 CSS，哪种文件放在前面，哪种放在后面比较好？](https://www.zhihu.com/question/20357435)

---

## 层叠和优先级

- 层叠：为同一个元素设置多个规则，所有属性效果是叠加的
- 优先级：
	- 内联 > 内部 > 外部
	- 下面的 > 上面的

---

## 背景

---
## 背景色

`background-color: #b0c4de;`

- 16 进制颜色：`abcdef`, `eee`
- RGB 格式：`rgb(255, 0, 0)`
- 命名颜色：`red`

理解透明： `transparent`，显示视觉上底层元素的背景色。
理解继承： `inherit`，继承父元素的背景色设置，不管视觉上在什么位置。
	
---
## 继承 和 透明 示例

```
body {
    background-color: burlywood;
}

div {
    background: cadetblue;
    height: 300px;
    width: 300px;
}
p {
    position: absolute;
    right: 0;
    background: inherit;
}
<body>
    <div>
        <p>我们都有一个家</p>
    </div>    
</body>
```
---

## 背景图片

`background-image: url("paper.gif");`

- `none` 去掉背景
- 填充区域包括内容区域和内边距区域，不包含边框和外边距
- 图片地址用双引号括起来
- 图片相对路径是相对 css 文件，不是 html 文件

```
|- images
|- week2
    |- background-img.html
    |- css
        |- style.css
```
下面应该写几个 `../` 呢？
```
background-image: url("???images/logo.png");
```

---
## 背景图片平铺方式

`background-repeat: repeat-x;` 
- `repeat`(默认)
- `repeat-x`
- `repeat-y`
- `no-repeat`

---
## 背景图片位置

`background-position: left top`

- 偏移量针对元素容器，第一个值是水平偏移，第二个值是垂直偏移，省略的话默认为 `center`
- 内置偏移：九宫格位置，left, right, top, left, center 组合
- 百分比偏移：弹性布局
- 像素偏移：固定布局

---
## 背景图片固定，不跟随滚动

取值
- 默认：`scroll`
- 固定：`fixed`

---
## 背景属性简写

`background:#ffffff url('img_tree.png') no-repeat right top;`

当使用简写属性时，属性值的顺序为：:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

图片加载失败会使用背景色

---

## 文本格式

- 颜色： `color`， 取值参考背景色
- 文本对齐：`text-align`，取值 `left`, `right`, `center`, `justify`
	- 只会在文本上生效，不会在其它元素上生效
- 文本修饰：`text-decoration`，取值 `underline`, `overline`, `line-through`, `blink`
	- 可用 `none` 给去掉链接的默认下划线
- 大小写转换：`text-transform`, 取值 `capitalize`, `uppercase`, `lowercase`
- 文本缩进：`text-indent: 10px`, 常用于段落的首行缩进。    

---
## 文本格式

- 字间距：`letter-spacing`，常用语一些艺术效果
- 词间距: `word-spacing`
- 行间距： `line-height`,常用于设置段落的行间距, 
	- 可用于文本和图片垂直对齐
	- 取值 `1.5` 表示 `150%` 

- 文本方向：`direction`，一般用不到
- 空白控制：`white-space`，默认文本自动换行，如设置为 `nowrap` 则不自动换行，其它取值不常用。

---
## 垂直对齐方式

`vertical-align: middle` 常用语设置图片和文本的对齐方式

- `baseline`: 默认，英文字母 `e` 的下边缘
- `top`, `bottom`, `middle`
- `text-top`, `text-bottom`: 不常用

扩展阅读：[我对CSS vertical-align的一些理解](http://www.zhangxinxu.com/wordpress/2010/05/%E6%88%91%E5%AF%B9css-vertical-align%E7%9A%84%E4%B8%80%E4%BA%9B%E7%90%86%E8%A7%A3%E4%B8%8E%E8%AE%A4%E8%AF%86%EF%BC%88%E4%B8%80%EF%BC%89/)

---

## CSS 字体

- 衬线字体：Serif(Times New Roman, Georgia)
- 非衬线字体：Sans-serif(Arial, Verdana)
- 等宽字体：Monospace(Courier New, Lucida Console)

---

## font-family

- 设置通用字体系列：`font-family: "Serif"`， `font-family: "Monospace"`
- 设置特定字体系列：`font-family: "Times"`
- 设置具体字体：`font-family: "Times New Roman"`
- 设置多个字体：`font-family:"Times New Roman", Times, serif;`, 具体的放前面

[Web 安全字体组合(英文)](http://www.runoob.com/cssref/css-websafe-fonts.html)

---

## Windows 中文字体


- 宋体：SimSun，常用于正文，但它是印刷字体，不适合电脑显示
- 黑体：SimHei，常用于标题
- 微软雅黑："Microsoft Yahei", 为屏幕优化

安装 Office 后会新增很多字体，但不要依赖这些字体。

[为什么很多网站使用微软雅黑？](https://www.zhihu.com/question/19685531)

---

## 苹果中文字体

- 华文黑体：STHeiti
- 华文楷体：STKaiti
- 苹方: PingFang SC

苹果内置字体比较丰富

[CSS font-family 常见中文字体对应的英文名称](http://www.zhangxinxu.com/wordpress/2017/03/css-font-family-chinese-english/?replytocom=354389)
[字体演示](http://www.zhangxinxu.com/study/201703/font-family-chinese-english.html)

---
## Linux 中文字体

Ubuntu 默认是英文字体是 ubuntu，中文字体是 文泉驿微米黑，但 Linux 的用户爱折腾，经常会安装新字体并修改默认字体，所以基本不用考虑。

---

## 了解字体渲染的原理


- 点阵字体：由像素组成，放大失真，有锯齿。后缀是`.fon`
- 矢量字体：保存字体的描述信息，比如一个笔划的起始、终止坐标，半径、弧度等等，放大不失真。后缀是 `.ttf`
- Truetype就是能缩放带有灰阶的效果，
- Cleartype是为了让字显示的更清晰，带有彩色的灰阶效果。

[字体渲染背后不得不说的故事](https://www.jianshu.com/p/8414b96549e3)
[如何评价Windows 10和Ubuntu的中文字体渲染？](https://www.zhihu.com/question/67991459/answer/311538009)
[适合阅读的中文字体](https://www.jianshu.com/p/227e2e87855e)

原则：分辨率低，比如 800 * 600，字号比较小，宋体这样的点阵字体效果不错，字号比较大，用雅黑效果比较好，但苹果 retina 屏4个像素模拟 1 像素，宋体效果也很好。

--- 
## 常用字体设置

`font-family:Arial,'Times New Roman', Times， 'Microsoft YaHei', SimHei, sans-serif;   `

- 先英文，后中文
- 先具体字体，后系列字体，
- 最后是 `sans-serif`

设置中文字体后用户自定义的默认字体会失效，所以有些网站不设置中文字体。

[页面可用性之浏览器默认字体与CSS中文字体](http://www.zhangxinxu.com/wordpress/2010/06/%E5%8F%AF%E7%94%A8%E6%80%A7%E4%B9%8B%E6%B5%8F%E8%A7%88%E5%99%A8%E9%BB%98%E8%AE%A4%E5%AD%97%E4%BD%93%E4%B8%8Ecss%E5%AD%97%E4%BD%93/)

---

## 字体样式

font-style
- normal
- italic: 单独的字体风格，对每个字母的结构有一些小改动，来反映外观的变化,不一定每种字体都有这种风格;
- oblique: 指的是将正常竖直文本倾斜;

[oblique 字体和 italic 字体在 CSS 样式中有什么差别？](https://www.zhihu.com/question/21443831)

---

## 字体大小

font-size

- 绝对大小：窗口缩放，大小不变，但现代浏览器可以整体缩放
	- px
	- pt： 不常用， PS 里常用
- 相对大小：常用于弹性布局，自适应布局
	- %：[css样式的百分比都相对于谁？](https://www.zhihu.com/question/36079531)
	- em：相对父元素的字体大小
	- rem：相对 html 根元素的字体大小，CSS3 支持，注意优雅降级
	
浏览器的默认字体高都是16px    
    
[CSS中惯用的字体单位：px、em、rem和%的区别](http://blog.csdn.net/fanzh90/article/details/51096494)    
[七个你可能不了解的CSS单位](https://www.w3cplus.com/css/7-css-units-you-might-not-know-about.html)

---
## 字重

`font-weight:bold;`

400 等同于 normal，而 700 等同于 bold。

---
## 链接

- a:link - 正常，未访问过的链接
- a:visited - 用户已访问过的链接
- a:hover - 当用户鼠标放在链接上时
- a:active - 链接被点击的那一刻

a:hover 必须跟在 a:link 和 a:visited后面
a:active 必须跟在 a:hover后面

去掉默认下划线：`text-decoration:none;`

设置链接的背景色，不包含 `line-height` 的部分，只是包裹文字

---
## 列表

- 设置小图标类型：`list-style-type`， 小黑点、小方框
- 设置列表图片：` list-style-image: url('sqpurple.gif');`
- 简写：`list-style: square url("sqpurple.gif");`
- `list-style-position` 不常用

注意 ul, ol 默认的 padding 和 margin，如果要做导航或菜单时可以去掉。

---
## 表格

- 边框：`table, th, td {border: 1px solid black;}`，注意哪个是 `table` 的边框，哪个是 `td` 的边框
- 折叠边框：`table { border-collapse:collapse; }` 注意是在 `table` 上设置
- 内边距：`th, td { padding:15px;}`

其它：`background-color`, `color`, `text-align`, `vertical-align`
