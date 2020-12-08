#### 1.css3动画执行起来的两种方法

1. 给元素添加动画类`className`
2. 元素的 `display:none` 变 `block`

#### 2.动画事件

```css
animation 事件
webkitAnimationStart        //开始播放 
webkitAnimationIteration    //重复播放
webkitAnimationEnd          //播放结束

transition 事件
webkitTransitionEnd         //播放结束
```

#### 3.同时执行两个动画

```css
animation:run 1s,jump 1s;
-webkit-animation:run 1s,jump 1s;
/* ps:兼容性不好,比如:动画结束时,不能保持元素的最后状态
```

#### 4.animation-play-state

`animation-play-state: paused or running` 是在动画过程中可以用该属性。
如果动画播放完了，你在running，它是不会动的，要用`display：block or none`让它动起来;

#### 5.transform 

1. transform 为什么比left、top性能好？

   transform 属性不会触发浏览器的repaint,而left、top则会一直触发repaint

2. css3开启硬件加速，使GPU发挥性能

   `transform:translateZ(0);`

   > 1. 开启GPU硬件加速之后，可能会导致浏览器频繁闪烁或抖动 
   >
   >    ```
   >     -webkit-backface-visibility:hidden;
   >     -webkit-perspective:1000;
   >    ```
   >
   > 2. transform只是元素外观上的放大放小，元素的实际物理占位不会变;
   >
   > 3. scale()对行内元素不管用，设置`display:block`，即可;
   >
   > 4. 科学计数法： 1e3 1s   2e3  2s   3e3  3s
   >
   > 5. 用 transition 的时候要小心，因为页面刷新的时候页面发生重绘，触发transition,发生动画效果；

3. `transform:translateX(-50%) translateY(-50%); ` // 百分比是相对于自身的

#### 6.css3 动画序列帧

```css
animation-timing-function:step-start; 
/*css3动画序列帧需要设置这个属性
```



