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

> Relative、absolute、static、fixed、sticky

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

#### 18.margin-top、padding-top

 `margin-top:50%` 的百分比是相对于父元素的`width`，不管父元素的`position` 设置为何值。

> padding-top 也是 ，见2.3-Layout-contenting block 关于包含块的定义

#### 19.letter-spacing

The **`letter-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal spacing behavior between text characters. 

#### 20.text-align、text-justify、vertical-align

##### [1.text-algin](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

The **`text-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal alignment of the content inside a block element or table-cell box. This means it works like [`vertical-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) but in the horizontal direction.

##### [2.text-justify](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)

The **`text-justify`** CSS property sets what type of justification should be applied to text when [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)`: justify;` is set on an element.

[3.vertical-align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)

The **`vertical-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets vertical alignment of an inline, inline-block or table-cell box.

#### 21.align-content、align-items、align-self

When aligning items on **the block axis** you will use the properties that begin `align-`:

##### [1.align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`align-content`** property sets the distribution of space between and around content items along a [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)'s cross-axis or a [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)'s block axis.

tips:This property has no effect on single line flex containers (i.e. ones with `flex-wrap: nowrap`).

##### [2.align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`align-items`** property sets the [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) value on all direct children **as a group**. In Flexbox, it controls the alignment of items on the [Cross Axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis). In Grid Layout, it controls the alignment of items on the Block Axis within their [grid area](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas).

##### [3.align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

The **`align-self`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property overrides a grid or flex item's [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) value. In Grid, it aligns the item inside the [grid area](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas). In Flexbox, it aligns the item on the [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis).

#### 22.justify-content、justify-items、justify-self

When aligning items on **the inline axis** you will use the properties which begin with `justify-`:

##### [1.justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-content`** property defines how the browser distributes space between and around content items along the [main-axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) of a flex container, and the inline axis of a grid container.

tips:The alignment is done after the lengths and auto margins are applied, meaning that, if in a [Flexbox layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) there is at least one flexible element, with [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) different from `0`, it will have no effect as there won't be any available space.



> `justify-content`与`align-content` 分别定义内容项在 main axis 与 cross axis 如何分配空间。且 `aligin-content`在单行flex container 无效。 `justify-content` 也有类似约束。见上

##### [2.justify-items](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)

The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-items`** property defines the default [`justify-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self) for all items of the box, giving them all a default way of justifying each box along the appropriate axis.

The effect of this property is dependent of the layout mode we are in:

- In block-level layouts, it aligns the items inside their containing block on the inline axis.

- For absolutely-positioned elements, it aligns the items inside their containing block on the inline axis, accounting for the offset values of top, left, bottom, and right.

- In table cell layouts, this property is *ignored* ([more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables) about alignment in block, absolute positioned and table layout)

- In flexbox layouts, this property is *ignored* ([more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox) about alignment in Flexbox)

- In grid layouts, it aligns the items inside their grid areas on the inline axis ([more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout) about alignment in grid layouts)

  > 试验的出目前只在 grid 布局中生效

##### [3.justify-self](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)

The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.

#### [23.background:linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient())

> 可以用来做图表的百分比背景条

```javascript
 return (
   //这么设置 背景条是一段一段的
   `linear-gradient(to right, rgba(${r},0,0,0.2), rgba(${r},0,0,0.2) ${perc}%, ` +
   `rgba(0,0,0,0.01) ${perc}%, rgba(0,0,0,0.001) 100%)`
 );
//eg:background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
//                  url("../../media/examples/lizard.png");
```

#### 24. border-collapse

`position:sticky ` 做粘黏效果时，`border-collapse` 要设置边框不共用，不然滚动时边框会发生滚动

```css
table{
	border-collapse:separate !important
}
```

#### [25.place-items](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)

#### 25. overscroll-behavior

防止页面抖动左右滑的时候

`overscroll-behavior: none;`
