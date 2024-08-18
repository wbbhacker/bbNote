#### 0.The rendering pipeline

1.**Loading css**

2.**Style**: Calculate the styles that apply to the elements.

3.**Layout**: Generate the geometry and position for each element.

4.**Paint**: Fill out the pixels for each element into [layers](https://web.dev/animations-overview/#layers).

5.**Composite**: Draw the layers to the screen.

> 从这几方面去优化css

#### 1.css3属性的书写顺序

（1）定位属性：position display float left top right bottom  overflow clear  z-index

（2）自身属性：width height padding border margin  background

（3）文字样式：font-family  font-size  font-style  font-weight  font-varient  color  

（4）文本属性：text-align  vertical-align  text-wrap  text-transform  text-indent  text-decoration  letter-spacing  word-spacing  white-space  text-overflow

（5）css3中新增属性：content  box-shadow  border-radius transform…

按照上述1 2 3 4 5的顺序进行书写。

**目的**：减少浏览器reflow（回流），提升浏览器渲染dom的性能



#### 2.css3 选择器优化

CSS**选择器的匹配是从右向左进行的**

1.保持简单，不要使用嵌套过多过于复杂的选择器

2.通配符和属性选择器效率最低，需要匹配的元素最多，尽量避免使用

> 相比于`#markdown-content-h3`，显然使用`#markdown .content h3`时，浏览器生成渲染树（render-tree）所要花费的时间更多。因为后者需要先找到DOM中的所有`h3`元素，再过滤掉祖先元素不是`.content`的，最后过滤掉`.content`的祖先不是`#markdown`的。

> ##### 为什么CSS选择器是从右向左匹配的？
>
> CSS中更多的选择器是不会匹配的，所以在考虑性能问题时，需要考虑的是如何在选择器不匹配时提升效率。从右向左匹配就是为了达成这一目的的，通过这一策略能够使得CSS选择器在不匹配的时候效率更高。这样想来，在匹配时多耗费一些性能也能够想的通了。

#### 3.css3 属性优化、属性书写规则

##### 1.减少重排、重绘

##### 2.尽可能的时候用css的实际值，来书写属性，减少浏览器的计算

> `background:#E5E5E5; ` 写法浏览器最终会转化为 `background-color:rgb(240,240,240) `，所以直接写成`background-color:rgb(240,240,240)`会省去浏览器的计算，速度会得到很快提升。

#### 4.构建高性能的css动画

- [`transform`](https://developer.mozilla.org/docs/Web/CSS/transform#Browser_compatibility)

  - Move an element
  - Resize an element

- [`opacity`](https://developer.mozilla.org/docs/Web/CSS/opacity#Browser_compatibility)

  - Change an element's visibility

- [`will-change`](https://developer.mozilla.org/docs/Web/CSS/will-change#Browser_compatibility)

  If you need a way to force layer creation in one of the rare browsers that doesn't support `will-change` (most likely Internet Explorer at this point), you can set `transform: translateZ(0)`.

[1]: https://web.dev/animations-guide/	"How to create high-performance CSS animations"

#### 5.内嵌/内联首屏关键css Critical csss

首次有效绘制 First Meaningful Paint FMP，内嵌/内联首屏关键css 能减少FMP时间。

>  异步加载压缩的css, 保证首屏开始渲染
>
> 雪碧图
>
> 不用使用 @import











































