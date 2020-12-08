#### 1.pointer-events

auto、none、svg的一些属性

除了指示该元素不是鼠标事件的目标之外，值`none`表示鼠标事件“穿透”该元素并且指定该元素“下面”的任何东西。

#### 2.box-sizing

content-box(default) | border-box |  inherit

#### 3.Overflow:

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

