#### 2.flex 属性布局

#### 3.css中行内元素和行内块元素空白间隙的问题

在html代码中，如果把行内元素或者行内块元素写成下面这样的话，会出现空格的问题：

```
<div class="wrapper">
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

![image-20210112230530633](../image/image-20210112230530633.png)

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
> font-size:0;letter-spaceing:-4px;

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
3. canvas、2D、3D webgl 
4. setInterval()、requestAnimationFrame
6. svg
8. GIF
9. web API animation //  兼容性不好

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

#### 7.margin-top 百分比是相对于

父元素的width来参考的

#### 8.背景图像百分之百显示

`background-size:100% 100%`

#### 9.css 性能优化

https://www.cnblogs.com/heroljy/p/9412704.html


#### 10.垂直居中

https://juejin.cn/post/6844903839187877895

1. line-height

2. tranform

3. flexbox `align-items或align-content`

   ```
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
   
   
   
4. 绝对定位: `position:absolute`

   ```
   .use-absolute{
       position: relative;
       width:200px;
       height:150px;
       border:1px solid #000;
   }
   .use-absolute div{
       position: absolute;
       width:100px;
       height:50px;
       top:0;
       right:0;
       bottom:0;
       left:0;
       margin:auto;
       background:#f60;
   }
   ```

5. calc动态计算
#### 10.p 的颜色？

 如果`class="classA classB"` 与`class="classB classA"` 相等吗？

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

#### 11.margin 塌陷

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1{
            width:100px;
            height: 100px;
            margin:10px;
            background-color: #f0f;
        }
        .box2{
            width:100px;
            height:100px;
            margin:20px;
            background-color: #0ff;
        }
    </style>
    
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
</body>
</html>
```

#### 12.1rem、1em、1vh、1px各自代表的含义？

> rem

rem是全部的长度都相对于根元素<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。

> em

- 子元素字体大小的em是相对于父元素字体大小
- 元素的width/height/padding/margin用em的话是相对于该元素的font-size

> vw/vh

全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好。

> px

px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。

一般电脑的分辨率有{1920*1024}等不同的分辨率

1920*1024 前者是屏幕宽度总共有1920个像素,后者则是高度为1024个像素

#### 13.介绍下BFC及其应用

BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于 一个独立的容器，里面的元素和外部的元素相互不影响。

创建BFC 的方式有：

1. html根元素
2. float浮动
3. 绝对定位
4. overflow 部位 visiable

BFC 的主要作用是：

1. 清楚浮动
2. 防止同一BFC容器中的相邻元素间的外边距重叠问题

#### 14.css3吸顶效果

position:sticky

```css
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

```



























