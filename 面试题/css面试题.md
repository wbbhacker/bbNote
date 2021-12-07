

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

#### 15.浮动元素的影响

https://www.jianshu.com/p/4ea182f0ad12























