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