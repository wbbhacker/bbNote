#### 1.css的权重：

  权重的规则： important > 内嵌样式 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符

  第一等：代表内联样式，如: style=""，权值为1000。

  第二等：代表ID选择器，如：#content，权值为100。

  第三等：代表类，伪类和属性选择器，如.content，权值为10。

  第四等：代表类型选择器和伪元素选择器，如div p，权值为1。 

```
/权重为1/

  div{

  }

  /权重为10/

  .class1{

  }

  /权重为100/

  #id1{

  }

  /权重为100+1=101/

  #id1 div{

  }

  /权重为10+1=11/

  .class1 div{

  }

  /权重为10+10+1=21
  .class1 .class2 div{

  }
  /权重为1000+100=1100/

  #left{color:black!important;} 

```

  ps:

  1.如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现

  2.如果样式上加有!important标记,那么始终采用这个标记的样式。

#### 2.margin-top

 margin-top 的百分比是相对于父元素的，不管父元素的positon:relative还是positon:absolute

#### 3.meta -- render

 render 指定双核浏览器默认以何种方式渲染页面

 

<meta name="renderer" content="webkit">  // 默认webkit内核

<meta name="renderer" content="ie-comp"> //默认IE兼容模式

<meta name="renderer" content="ie-stand"> //默认IE标准模式
#### 4. 浏览器中地址栏左侧显示的图标

 一般大小16*16、.ico 后缀

 <link rel="bookmark" type="image/x-icon" href="favicon.ico"/>

 //收藏用logo图标

 <link rel="shortcut icon" href="favicon.ico">

 //网站显示页logo图标

#### 5.css3属性的书写顺序

（1）定位属性：position display float left top right bottom  overflow clear  z-index

（2）自身属性：width height padding border margin  background

（3）文字样式：font-family  font-size  font-style  font-weight  font-varient  color  

（4）文本属性：text-align  vertical-align  text-wrap  text-transform  text-indent  text-decoration  letter-spacing  word-spacing  white-space  text-overflow

（5）css3中新增属性：content  box-shadow  border-radius transform…

按照上述1 2 3 4 5的顺序进行书写。

**目的**：减少浏览器reflow（回流），提升浏览器渲染dom的性能