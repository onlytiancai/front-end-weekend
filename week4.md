# 艾氪森 H5 周末班 Week4

---


## 布局

CSS有三种基本的布局机制

- 普通流
- 浮动
- 绝对定位

---

# 定位对文档流的影响

DEMO

---

# 定位：静态定位 static

元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。

---

# 定位：绝对定位 absolute

- 当元素绝对定位时，会从文档流中完全删除。元素位置相对于最近的已定位祖先元素。
- 元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。
- 滚动滚动条时，绝对定位元素会随着其滚动，因为元素最终会相对于正常流的某一部分定位。 demo

---
# 定位：绝对定位 包含块

- 如果这个祖先是块级元素，包含块则设置为该元素的内边距边界。换句话说，就是由边框界定的区域
- 如果这个祖先是行内元素，包含块则设置为该祖先元素的内容边界。DEMO
- 如果没有祖先，元素的包含块定义为初始包含块，即 document。
  
---
# 定位：绝对定位 auto

auto

- `left: auto` 元素的左边界位于元素处于静态位置时的左边界
- `top: auto` 元素的上边界位于元素处于静态位置时的上边界
- `right: auto` 元素的右边界位于正好能包裹住元素的右边界
- `bottom: auto` 元素的下边界位于正好能包裹住元素的下边界

注意

- 元素的静态位置是指元素在正常流中原本的位置。demo
- 可用负 margin 针对静态位置做偏移，类似 relation 定位，但脱离文档流。 demo
- auto 值的赋值顺序为：margin先置0或其他值，然后宽高置为最小值，然后left/top置为0，最后right/bottom为等式计算值，加在一起必须是元素包含块的宽度，可实现水平垂直居中。demo

---

# 定位：绝对定位 偏移

- top: 描述了定位元素上外边界离其包含块的顶端有多远。如果top为正值，会把定位元素的上外边距边界下移，若为负值，则会把定位元素的上外边距移到其包含块的顶端之上。
- bottom  left  right: 类似

正值会导致向内偏移，使边界朝着包含块的中心移动，而负值会导致向外偏移。

- 定位元素的边界是指定位元素 margin 外侧的边界
- 包含块的包含区域是指包含块的 border 内侧的 padding + content 区域
- 偏移值如果是 百分比，针对包含块的 clientHeight 和 clientWidth，就是 width + padding
---

---
## 定位：绝对定位 包裹性

- 元素绝对定位后，会为其后代元素建立一个包含块。且若该绝对定位元素不设置宽度，宽度由内容撑开。
- 浮动的包含块会延伸，进而包含所有后代浮动元素，但绝对定位的包含块并不会包含后代的定位元素，只是作为后代定位元素的定位父级

demo

---
## 定位：绝对定位 破坏性

- 元素绝对定位后，会脱离文档流，若父级不设置高度，则父级高度塌陷；若父级为行内元素，无其他内容，则父级宽度也将塌陷

---
## 定位：绝对定位 去浮动

元素绝对定位后，元素原来的浮动效果将失效

---

## 定位： 绝对定位 偏移特性

- 如果使用top、right、bottom、left这4个偏移特性来描述元素 4 个边的放置位置，那么元素的高度和宽度将由这些偏移隐含确定，元素将会拉伸
- 通常情况下，元素高度百分比要想起作用，需要父级元素的高度值不是 auto ；但是如果容器由绝对定位拉伸形成，百分比高度值也是支持的。 demo


---
## 定位 绝对定位 对居中行元素的影响

- 对于居中对齐的行内元素来说，将元素设置为absolute或fixed会发生静态位置跳动问题。而relative或static则不会有此问题。
- 这是因为元素默认的居中对齐是元素的内容中线对应父级块级元素中线，而当元素绝对定位或固定定位之后，定位元素左边界将与其父级块级元素的中线对齐。

demo
 
---
## 定位： 绝对定位 对 overflow 的影响

- `overflow:hidden` 同样会隐藏 `position:absolute` 的子元素，虽然 absolute 脱离了文档流。
- 这种情况通常会出现在我们在做一些具有弹出或下拉的控件时，所以还是把弹出层直接放到body中比较可靠。
- `overflow:hidden` 并不是万能的，要想彻底剪裁它的所有子元素，它不但要有`overflow:hidden`，而且还要作为所有子元素的包含块(`position`定位)

[overflow不一定能隐藏元素（position:absolute）](https://blog.csdn.net/liufeng520/article/details/26058775)

---
## 定位：相对定位

`position: relative;`

- 通过使用偏移属性移动定位元素。当元素相对定位时，它会从其正常位置移走，不过，原来所占的空间并不会因此消失
- 相对定位元素，会为其所有子元素建立一个新的**包含块**。这个包含块对应于该元素原本所在的位置（未设置偏移前）。
- 相对定位应用于 `inline` 元素后，由于无法改变其行内元素，不具备块级元素属性，无法设置宽高，其上下margin也依然存在问题


---
## 定位：相对定位 应用

- 给绝对定位元素限制范围时，为其父级元素设置相对定位relative，因为相对定位元素不脱离文档流
- 当想要提升元素层级（防止覆盖），又不想脱离文档流时，使用相对定位是一个好主意

---
## 定位：固定定位

`position: fixed;`

- 固定定位与绝对定位很类似，元素会完全从文档流中去除，但固定元素的偏移是相对于视窗。
	
- IE 6 不支持

用途
- 做全屏遮罩时需要固定定位，如果用绝对定位，会覆盖不住滚动条外的部分。
- 固定表头，固定菜单，固定 `footer` 等

[Using Position Absolute Inside A Scrolling Overflow Container](https://www.bennadel.com/blog/3409-using-position-absolute-inside-a-scrolling-overflow-container.htm)


---
## window document html body

- window 高度是可视窗口高度，不包括浏览器滚动条。
- document 高度是完全显示所有文档内容的高度(包括脱离文档流的元素显示）和可视窗口高度取最大值
- html 高度和 body 内容高度相同
- body 高度内容真实高度（脱离文档流定位的不再里面）

[window、document、html、body高度的探究（关注Chrome）](https://www.cnblogs.com/chuaWeb/p/html_css_1.html)
[对html与body的一些研究与理解](http://www.zhangxinxu.com/wordpress/2009/09/%E5%AF%B9html%E4%B8%8Ebody%E7%9A%84%E4%B8%80%E4%BA%9B%E7%A0%94%E7%A9%B6%E4%B8%8E%E7%90%86%E8%A7%A3/)

---

# 行元素的对齐测试

- 多行文本垂直居中
- 图片垂直居中
- 文本图片垂直居中
- 行元素对齐测试

---
# absolute 的应用

- 跟随文字的图标
- 使用 inline-block 但不需要父元素相对定位的四角提示
- 下拉菜单
- 边缘对齐
- 表单星号对齐
- 全屏自适应
- 左右半区轮播
- 九宫格
- 等高布局
- 整体布局

[静态位置的理解](https://segmentfault.com/q/1010000010261523)


---

## 参考链接

定位

- [深入理解CSS绝对定位absolute](http://www.cnblogs.com/xiaohuochai/p/5312917.html)
- [CSS绝对定位的应用](http://www.cnblogs.com/xiaohuochai/p/5315942.html)
- [理解CSS相对定位和固定定位](http://www.cnblogs.com/xiaohuochai/p/5321487.html)

Margin

- [理解CSS外边距margin](http://www.cnblogs.com/xiaohuochai/p/6255046.html)
- [深入理解CSS中的margin负值](https://www.cnblogs.com/xiaohuochai/p/5314289.html)

浮动

- [深入理解CSS浮动](http://www.cnblogs.com/xiaohuochai/p/5243735.html)
- [CSS清浮动](http://www.cnblogs.com/xiaohuochai/p/5248981.html)

BFC, Overflow

- [深入理解CSS溢出overflow](http://www.cnblogs.com/xiaohuochai/p/5289653.html)
- [深入理解BFC](http://www.cnblogs.com/xiaohuochai/p/5248536.html)

