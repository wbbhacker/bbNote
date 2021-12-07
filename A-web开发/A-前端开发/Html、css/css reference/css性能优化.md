#### 1.css3属性的书写顺序

（1）定位属性：position display float left top right bottom  overflow clear  z-index

（2）自身属性：width height padding border margin  background

（3）文字样式：font-family  font-size  font-style  font-weight  font-varient  color  

（4）文本属性：text-align  vertical-align  text-wrap  text-transform  text-indent  text-decoration  letter-spacing  word-spacing  white-space  text-overflow

（5）css3中新增属性：content  box-shadow  border-radius transform…

按照上述1 2 3 4 5的顺序进行书写。

**目的**：减少浏览器reflow（回流），提升浏览器渲染dom的性能