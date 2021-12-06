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

