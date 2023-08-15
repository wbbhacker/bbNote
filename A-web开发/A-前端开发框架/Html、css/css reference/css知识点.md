#### 1.html 嵌入 css样式的方法

##### 1.行内样式（内联样式）

```html
<p style="background-color: #999900">行内元素，控制段落-1</p>
```

##### 2.内嵌样式

```html
<style type="text/css">
p{
    text-align: left;  /*文本左对齐*/
    font-size: 18px;  /*字体大小 18 像素*/
    line-height: 25px;  /*行高 25 像素*/
    text-indent: 2em;  /*首行缩进2个文字大小空间*/
    width: 500px;  /*段落宽度 500 像素*/
    margin: 0 auto;  /*浏览器下居中*/
    margin-bottom: 20px;  /*段落下边距 20 像素*/
}
</style>
```

##### 3.链接式

```html
<link href="lianjie.css" type="text/css" rel="stylesheet" />
```

##### 4.导入式

```css
@import daoru.css;
```

#### 2.`<table>`表格中tr hover 高亮比 td hover 高亮效果好  

` <table>` 表格中数据量多的时候，`td` hover 高亮时，会有很明显的延迟。改为` tr` hover 延迟会好很多,同时要取消`td` hover。

> 分析原因：
>
> 1. `.ant-table-tbody > tr.ant-table-row:hover` 比 `.ant-table-tbody > tr.ant-table-row:hover > td` 嵌套层级少，查找速度快
> 2. `background:#E5E5E5; ` 写法浏览器最终会转化为 `background-color:rgb(240,240,240) `，所以直接写成`background-color:rgb(240,240,240)`会省去浏览器的计算，速度会得到很快提升。
>
> antd 中table 组件数据量大的时候，高亮会有延迟，通过这种方法可以解决。

#### 3.css中行内元素和行内块元素空白间隙的问题

因换行符（空文本节点）会保留一个空格，导致间隙问题

1. 父元素设置：`font-size:0;letter-spaceing:-4px`
2. 取消换行

详细如下：

在html代码中，如果把行内元素或者行内块元素写成下面这样的话，会出现空格的问题：

```
1<div class="wrapper">
  <span>我是行内元素</span>
  <span>我是行内元素</span>
  <span>我是行内元素</span>
</div>
.wrapper span {
  /*display: inline-block;*//* 这句代码加不加效果都一致 */
  font-size: 16px;
  background-color: lime;
  color: #fff;
}
```

![image-20210112230530633](../../../../image/image-20210112230530633.png)

我们代码里面的这几个`span`标签都有换行，这些换行也叫作空文本节点，会被保留为一个空格，所以我们要去掉这个空文本节点带来的问题。

1.给他们的父级元素加上`font-size: 0;`这个属性，就可以解决。原理是：空文本节点也是文本，自然可以被`font-size: 0;`作用到，那么空文本节点自然就没了。ie7级ie版本中不兼容

```
.wrapper {
  font-size:0;letter-spaceing:-4px;/* 去掉空文本节点 */
}
```

> 3，font-size:0，去除换行符间隙，在IE6/7下残留1像素间隙，Chrome浏览器无效，其他浏览器都完美去除；
> 4，letter-spacing负值可以去除所有浏览器的换行符间隙，但是，Opera浏览器下极限是间隙1像素，0像素会反弹，换行符间隙还原。
>
> 推荐解决方法：
>
> ### 父元素中设置 
>
> **font-size:0;letter-spaceing:-4px;**

2.取消代码换行

这种方法非常直观，但是代码并不美观了。。。而且维护起来也不方便。但是兼容性好。

```html
<div class="wrapper">
  <span>我是行内元素</span><span>我是行内元素</span><span>我是行内元素</span>
</div>
```

3.还有其他的一些方法都类似于第二种方法，就是变相的取消换行（在这里我只说一个吧）：

```html
<div class="wrapper">
  <span>我是行内元素</span
  ><span>我是行内元素</span
  ><span>我是行内元素</span>
</div>
```

#### 4.单行省略 跟 多行省略怎么写？

```css
/*单行省略*/
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap


/*多行省略*/
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```

#### 5.web开发中动画效果的实现方法

1. animation+keyframes 、transition  
2. canvas、2D、3D webgl 
3. setInterval()、requestAnimationFrame
4. svg
5. GIF
6. 序列帧
7. web API animation //  兼容性不好

```css
const element = document.getElementById('some-element-you-want-to-animate');
let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;

  //这里使用`Math.min()`确保元素刚好停在200px的位置。
  element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

  if (elapsed < 2000) { // 在两秒后停止动画
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

#### 6.获取元素的样式信息

获取元素的样式信息，通过elem.style[’属性’] ,只能获取元素内嵌style属性上的生命的css属性，

而不包括来自其他地方声明的样式，如<head>部分的内嵌样式表，或外部样式表；

要获取一个元素的所有css 属性，使用window.getComputedStyle();

```css
let para = document.querySelector('p');
let compStyles = window.getComputedStyle(para);
para.textContent = 'My computed font-size is ' +
    compStyles.getPropertyValue('font-size') +
    ',\nand my computed line-height is ' +
    compStyles.getPropertyValue('line-height') +
    '.';

<style>
  h3::after {
    content: ' rocks!';
  }
</style>

<h3>Generated content</h3>

<script>
  var h3 = document.querySelector('h3');
  var result = getComputedStyle(h3, ':after').content;

  console.log('the generated content is: ', result); // returns ' rocks!'
</script>
```

#### 7.背景图像百分之百显示

`background-size:100% 100%; `

#### 8.像素显示问题

iphone6的屏幕宽度为375px，设计师做的`视觉稿`一般是750px，也就是2x，这个时候设计师在`视觉稿`上画了1px的边框，于是你就写了“`border-width:1px`”，**so...1px边框问题产生了**。

对设计师来说它的1px是相对于750px的（物理像素），对你来说你的1px是相对于375px的（css像素）“**实际上你应该是border-width:0.5px**”。

window.**devicePixelRatio**  = 物理像素/css像素

解决方案：

##### 1.媒体查询

```javascript
.border { border: 1px solid #999 }
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border { border: 0.5px solid #999 }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border { border: 0.333333px solid #999 }
}
```

优点：方便      缺点：要支持媒体查询

##### 2.Transform 加伪类标签

```less
// less
.border-1px{
  position: relative;
  &::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border:1px solid red;
    color: red;
    transform-origin: left top
    transform: scale(1);
    pointer-events: none; /* 防止点击触发 */
    box-sizing: border-box;
    @media screen and (min-device-pixel-ratio:2),(-webkit-min-device-pixel-ratio:2){
      width: 200%;
      height: 200%;
      transform: scale(0.5);
    }
    @media screen and (min-device-pixel-ratio:3),(-webkit-min-device-pixel-ratio:3){
      width: 300%;
      height: 300%;
      transform: scale(0.33);
    }
  }
}
```

- 优点：直接通过CSS实现，无论是圆角还是直角都可以实现。
- 缺点：代码量比较多，占有了伪元素。

##### 3.使用box-shadow

```html
<span class="border-1px">1像素边框问题</span>

.border-1px{
  box-shadow: 0px 0px 1px 0px red inset;
}
```

- 优点：直接通过CSS实现，无论是圆角还是直角都可以实现。
- 缺点：由于是使用阴影的方式，边框线的颜色会比真实颜色淡一点。
- 

##### 4.Border-image、background-image

在devicePixelRatio 为2下，准备一张上部的1px颜色为透明，下部的1px使用视觉规定的border的颜色的2px 高的图片

devicePixelRatio为3 则需要1px为颜色 2px为透明  太麻烦了 丢弃

##### 5.多背景渐变实现

与background-image方案类似，只是将图片替换为css3渐变。设置1px的渐变背景，50%有颜色，50%透明。 

1. 根据设备像素设置viewport，代码只需要写正常像素就可以了。

   ```html
   <html>
     <head>
         <title>1px question</title>
         <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
         <meta name="viewport" id="WebViewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">        
         <style>
             html {
               font-size: 1px;
             }            
             * {
               padding: 0;
               margin: 0;
             }
             .top_b {
               border-bottom: 1px solid #E5E5E5;
             }
             .a,.b {
               box-sizing: border-box;
               margin-top: 1rem;
               padding: 1rem;                
               font-size: 1.4rem;
             }
   
             .a {
                 width: 100%;
             }
   
             .b {
                 background: #f5f5f5;
                 width: 100%;
             }
         </style>
         <script>
             var viewport = document.querySelector("meta[name=viewport]");
             //下面是根据设备像素设置viewport
             if (window.devicePixelRatio == 1) {
                 viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
             }
             if (window.devicePixelRatio == 2) {
                 viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
             }
             if (window.devicePixelRatio == 3) {
                 viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
             }
             var docEl = document.documentElement;
             var fontsize = 32* (docEl.clientWidth / 750) + 'px';
             docEl.style.fontSize = fontsize;
         </script>
     </head>
     <body>
         <div class="top_b a">下面的底边宽度是虚拟1像素的</div>
         <div class="b">上面的边框宽度是虚拟1像素的</div>
     </body>
   </html>
   
   ```

#### 9.空元素不支持 `::before，::after`

- IE 不支持的元素有：img，input，select，textarea。
- FireFox 不支持的元素有：input，select，textarea。
- Chrome 不支持的元素有：input[type=text]，textarea。

#### 10.垂直居中

##### 1.line-height

##### 2.transform

##### 3.flex

```css
.use-flexbox{
    display:flex;
    align-items:center;
    justify-content:center;
    width:200px;
    height:150px;
    border:1px solid #000;
}
.use-flexbox div{
    width:100px;
    height:50px;
    background:#099;
}
```

##### 4.绝对定位 `position:absolute`

##### 5.calc() 动态计算

#### 11.p 的颜色

 如果`class="classA classB"` 与`class="classB classA"` 相等吗？

> 相等，与类的书写顺序无关。
>
> 只跟classA与classB的定义位置顺序有关。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .classA{
            color:blue
        }
        .classB{
            color:red
        }
    </style>
</head>
<body>
    <p class="classA classB">ssssss</p>
</body>
</html>
```

#### 12.1rem、1em、1vh、1px 各自代表的含义

##### 1.`1rem`

rem是全部的长度都相对于根元素<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。

##### 2.`1em`

- 子元素字体大小的em是相对于父元素字体大小
- 元素的width/height/padding/margin用em的话是相对于该元素的font-size

##### 3.`vw/vh`

全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好。

##### 4.`px`

px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。

#### 13.Table cell 不换行

`td`、`th`、`tr`设置：

```css
word-break: keep-all; // 这种情况在中文下，也不会换行
word-wrap:break-word; // 英文不会换行 
white-space: nowrap;  // 如果中间有空格，在空格处默认会换行，如果需要不换行，使用下面样式
```

#### 14.flex 属性 设置高度失效

给元素设置 vh

```css
div{
	flex:0 0 200px;
	height:calc(100vh - 84px);
}
//设置 height：100% 不生效，可用100vh来做。
```

#### 15.css 布局中，怎么让子元素 flex:1 最大扩大的时候不能超过父元素的快读

在 CSS Flexbox 布局中，`flex: 1` 会使子元素尽可能地扩大以填充其父元素的剩余空间。然而，子元素的大小不会超过其父元素的大小，除非父元素的大小没有明确设置（例如，它的大小由其内容决定）。

如果你发现子元素的大小超过了父元素的大小，可能是因为父元素的 `overflow` 属性设置为了 `visible`（这是默认值），并且子元素的大小由其内容决定。在这种情况下，你可以通过设置父元素的 `overflow` 属性为 `auto` 或 `hidden` 来防止子元素超出父元素的边界。

以下是一个示例：

```html
<div style="width: 200px; height: 200px; overflow: auto; display: flex;">
  <div style="flex: 1; background-color: lightblue;">Hello, world!</div>
</div>
```

在这个例子中，父元素的大小被设置为 200px x 200px，`overflow` 属性被设置为 `auto`，并且使用了 Flexbox 布局。子元素的 `flex` 属性被设置为 1，这意味着它会尽可能地扩大以填充父元素的剩余空间，但是它的大小不会超过父元素的大小。
