[CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

#### 1.pointer-events

auto、none、svg的一些属性

除了指示该元素不是鼠标事件的目标之外，值`none`表示鼠标事件“穿透”该元素并且指定该元素“下面”的任何东西。

#### 2.box-sizing

content-box(default) | border-box |  inherit

#### 3.Overflow:

`overflow-y:scroll`

#### 4.box-shadow

阴影不会占用盒子模型的，所以可能会遮挡下面的元素，用z-index解决

#### 5.touch-action:

CSS属性 touch-action 用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）

 touch-action 允许你在触摸时控制滚动行为;

- auto 

-  none 

  当触控事件发生在元素上时，不进行任何操作

- pan-x 、pan-y

- manipulation

- pan-left、pan-right、pan-up、pan-down

#### 6.LVHA 伪类

```
a:link // 默认连接样式
a:visited //已访问连接样式
a:hover //鼠标悬停样式
a:active // 鼠标点击样式

ps:love hate 方法记忆
```

#### 7.mix-blend-mo 、background-blend-mode

可实现ps中的 正片叠底之类的效果

#### 8.word-break

```css
word-break:break-all; 
/*数字换行*/
```

#### 9.overflow-x

```css
overflow-x:auto;  
/*会在小于某宽度值的时候出现滚动条，大于的时候不显示滚动条*/
overflow-x:scroll; 
/*会一直出现滚动条那一栏的高度，不管有没有滚动条*/
```

#### 10.clip 

裁剪 使用于绝对定位元素（positon:absolute）

#### 11.box-flex

  使用浮点数指定对象分配其父元素剩余空间的比例（即：如果想平均分配子元素的话，每个子元素width设置为0即可）

#### 12.user-select

禁止用户选中文本。

The **`user-select`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its [chrome](https://developer.mozilla.org/en-US/docs/Glossary/Chrome)), except in textboxes.

#### 13.will-change

will-change 属于允许你提前通知浏览器你可能会对某个元素做什么类型的操作，以便于浏览器在需要的时候采取适当的优化方案。

> 不要使用will-change声明对太多属性或元素的更改

#### 14.positions: sticky

```html
<div class="header">

</div>
<nav>
    用于显示粘性定位的头
</nav>
<div class="content">

</div>
<footer>
    底部
</footer>

<style>
.header {
	width:100%;
	height:160px;
	background:#87CEEB;
}
nav {
	width:100%;
	height:100px;
	position:sticky;
	top:0px;
	background:#F98202;
}
.content {
	width:100%;
	background:blue;
	height:1000px;
}
footer {
	background:#87CEEB;
}
</style>
```

#### 15.Object-fit

The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.

> video 视频撑满整个父div 可用 `object-fit:fill`

#### 16.calc()

```css
width: calc(10px + 100px);
width: calc(100% - 30px);
width: calc(2em * 5);
width: calc(var(--variable-width) + 20px);
```

#### 17.var()

Using a custom property set on` :root`

```css
:root {
  --main-bg-color: pink;
}
body {
  background-color: var(--main-bg-color);
}
```

Custom properties with fallbacks for use when the property has not been set

```css
/* Fallback */
/* In the component’s style: */
.component .header {
  color: var(--header-color, blue); /* header-color isn’t set, and so remains blue, the fallback value */
}

.component .text {
  color: var(--text-color, black);
}

/* In the larger application’s style: */
.component {
  --text-color: #080;
}
```



