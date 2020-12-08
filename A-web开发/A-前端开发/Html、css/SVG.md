> 1. svg 基本元素 和 操作
> 2. svg 滤镜效果
> 3. svg 和 SMIL 动画
> 4. svg 和 js 动画
> 5. svg 和 html 

#### 1.svg的基本结构

```xml
<svg viewBox="0 0 1080 620" width="100%" height="620px" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg"></svg>
```

`viewBox=”x, y, w, h”`

x、y 控制SVG内所有元素的相对位置。w，h用来控制svg宽高，这里的宽高并不是svg元素的dom尺寸，而是svg的内分辨率，受svg的width，height和preserveAspectRatio等属性值影响。

`preserveAspectRatio=”xMinYMin meet”`

preserveAspectRatio属性用来设置viewBox的缩放和对齐方式，xMinYMin meet的意思是，根据视口的宽高进行等比例缩放，这里的视口就是指width和height值组成的矩形区域。

#### 2.svg 元素

##### 1.`<g>` 元素

g标签即group的缩写，用来对元素进行组合， 这样animate效果就限制在组内

```xml
<svg viewBox="0 0 1080 620" width="100%" height="620px" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
  <g>
     <animate attributeName="opacity" begin="0s" dur="1s" values="1;0;1" repeatCount="indefinite"></animate>
     <text x="340" y="1750" fill="#fff" style="font-size:36px">>点一下屏幕，有请主角<</text>
  </g>
</svg>
```

- animate标签用来对元素的某个属性进行动画。
- attributeName指定属性名，这里是透明度opacity。
- begin指定动画开始的时间，可以是一组用分号分隔的值。
- dur指定动画的时长，值越小动画越快，反之亦然。
- values指定attributeName属性的变化值，可以是单值也可以是分号分隔的列表。这里的1;0;1指定是透明度在0->1->0之间变换，产生闪烁的效果。

##### 2.`<foreignObject>` 元素

foreignObject可以理解成一个svg容器，支持x, y, width, height, transform位移等属性，这里我们将包含gif动画图片的foreignObject位移属性设置为 transform=”translate(1080, 0)，使gif动画沿x轴向右移动自身宽度距离，使动画开始隐藏起来，等待事件触发显示。

#### 3.加入事件

```xml
<svg style="transform:rotateZ(0deg);background-color:#000;background-size:100% auto;background-repeat:no-repeat;width:100%;height:620px;" version="1.1" viewBox="0 0 1080 620" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
  <animate attributeName="height" begin="click+3.5s" restart="never" dur="0.01s" from="620" to="0" fill="freeze"></animate>
  <animate attributeName="opacity" begin="click+3.5s" restart="never" dur="0.02s" from="1" to="0" fill="freeze"></animate>
  <g>
    <animateTransform attributeName="transform" type="translate" fill="freeze" calcMode="discrete" restart="never" keyTimes="0;0.000001;1" values="0 0;-1080 0;-1080 0" dur="1200s" begin="click"></animateTransform>
      <!-- 鼠标点击后，我们将gif动画所在组向左移动1080距离，使原来隐藏的动画暴露出来，还记得我们开始是怎么隐藏gif动画的么。 -->
    <g>
      <foreignObject x="0" y="0" width="1080" height="1950">
        <svg style="background-image:url(https://mmbiz.qpic.cn/mmbiz_jpg/EuxhLFibtZGVfySiclAldZiczt0rl2iaYodU4BzCibiaZ4qxnNPJ0Xv8OTrREXGkNVseloVTpkSx1hAvliaAS8DgZEVYA/0?wx_fmt=jpeg);background-size:100% auto;background-repeat:no-repeat;width:100%;height:100%;"></svg>
      </foreignObject>
      <foreignObject x="0" y="0" width="1080" height="1950" transform="translate(1080, 0)">
        <svg xmlns="http://www.w3.org/2000/svg" style="background-image:url(https://mmbiz.qpic.cn/mmbiz_gif/EuxhLFibtZGVfySiclAldZiczt0rl2iaYodUxb1FiaX3Miaiaq6TIaxyHIicCEDgZAibgqHVTwG2Gxq2Pmt3GAwXibj7VOfA/0?wx_fmt=gif);background-size:100% auto;background-repeat:no-repeat;width:100%;height:100%;">
        </svg>
      </foreignObject>
      <g>
        <animate attributeName="opacity" begin="0s" dur="1s" values="1;0;1" repeatCount="indefinite"></animate>
        <text x="340" y="1750" fill="#fff" style="font-size:36px">>点一下屏幕，有请主角<</text>
      </g>
    </g>
  </g>
</svg>
```

- animateTransform用来对元素进行位移，旋转，斜切等操作。
- transform，可以是 translate、scale、rotate、skewX、skewY 。
- fill，指定动画间隙的填充方式。支持参数有：freeze、remove。remove是默认值，表示动画结束直接回到开始的地方。freeze表示动画维持结束后的状态。
- restart， 支持的参数有always、whenNotActive、never。always是默认值，表示每点一次重新执行动画；whenNotActive表示动画正在进行的时候不能重启动画；never表示动画仅执行一次。
- begin， 延迟时间已经介绍过，这里补充下click，表示点击后立即触发， click+2表示点击后2秒触发。

#### [4.Chapter IV: SMIL animations embedded in SVG](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#SMIL_animations)

Synchronized Multimedia Integration Language  同步多媒体集成语言

> SMIL 不止仅用于SVG

`<animate>`

```xml
<ellipse cx="150" cy="75" rx="10" ry="40" fill="grey">
 <animate attributeName="rx" begin="G.click" end="S.click" dur="4s" 
 values="10; 110; 10" repeatCount="indefinite"/>
</ellipse>
<g id="G">
<rect x="85" y="130" height="20" width="60" fill="#bbb"/>
<text x="90" y="148" font-size="20" fill="black">GO
</g>
<g id="S">
<rect x="150" y="130" height="20" width="60" fill="black"/>
<text x="155" y="148" font-size="20" fill="white">STOP
</g>
```

#### 5.[Chapter V: Dynamic SVG and JavaScript](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#JavaScript)

[An SVG Primer]: https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html























