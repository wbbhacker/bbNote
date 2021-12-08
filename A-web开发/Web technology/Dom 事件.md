### 1.事件的传播

#### 1.传播的三个阶段

- 阶段一：从window对象传导到目标节点，称为”捕获阶段“( capture phase)
- 阶段二:  在目标节点上触发，称为”目标阶段“ （target phase）
- 阶段三：从目标节点传导回widnow对象， 称为”冒泡阶段“ （bubbling phase）

这种三个阶段的传播模型，会使得一个事件在多个节点上触发。如：

```html
<div>
  <p> click Me </p>
</div>
```

如果对这个两个节点的click事件都设定监听函数，则click事件会被触发四次

```javascript
var phases = {
  0:'这个时间，没有事件正在被处理',
  1: 'capture',
  2: 'target',
  3: 'bubble'
};
 
var div = document.querySelector('div');
var p = document.querySelector('p');
 
div.addEventListener('click', callback, true);
p.addEventListener('click', callback, true);
div.addEventListener('click', callback, false);
p.addEventListener('click', callback, false);
 
function callback(event) {
  var tag = event.currentTarget.tagName;
  var phase = phases[event.eventPhase];
  console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'");
}
 
// 点击以后的结果
// Tag: 'DIV'. EventPhase: 'capture'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'DIV'. EventPhase: 'bubble'

```

上面代码表示，click事件被触发了四次：p节点的捕获阶段和冒泡阶段各1次，div节点的捕获阶段和冒泡阶段各1次。

1. 捕获阶段：事件从div向p传播时，触发div的click 事件；
2. 目标阶段：事件从div到达p时，触发p的click事件；
3. 目标阶段：事件离开p时，触发p的click 事件；
4. 冒泡阶段：事件从p传回div时，再次触发div的click 事件；

> 注意：用户点击网页的时候，浏览器总是假定click事件的目标节点，就是点击位置的嵌套最深的那个节点（嵌套在div节点的p节点）
>
> 事件传播的最上层对象是window，接着依次是document，html（document.documentElement）和body（document.dody）。也就是说，如果body元素中有一个div元素，点击该元素。事件的传播顺序，在捕获阶段依次为window、document、html、body、div，在冒泡阶段依次为div、body、html、document、window。

#### 2.事件的代理

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。

```javascript
var ul = document.querySelector('ul');
 
ul.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // some code
  }
})
```

上面代码的click事件的监听函数定义在ul节点，但是实际上，它处理的是子节点li的click事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而且以后再添加子节点，监听函数依然有效。

> `stopPropagation` 和 `stopImmediatePropagation`
>
> `event.stopPropagation();`阻止事件冒泡
>
> `event.stopImmediatePropagation();` 阻止事件冒泡并且阻止该元素上同事件类型的监听器被触发

#### 3.监听函数

监听函数（listener）是事件发生时，程序所要执行的函数。它是事件驱动编程模式的主要编程方式。

DOM提供三种方法，可以用来为事件绑定监听函数。

1. HTML 标签`on-` 属性

   ```html
   <body onload="doSomething()"></body>
   <div onclick="console.log('触发事件')"></div>
   ```

   这个方法指定的监听函数，**只会在冒泡阶段触发**

   这种方法如果当前节点绑定click事件，而它的子节点阻止了click冒泡，则当前节点无法触发click 事件如下：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
   	<meta charset="UTF-8">
   	<meta name="viewport" content="width=device-width, initial-scale=1.0">
   	<title>Document</title>
   	<style>
   		*{
   			margin:0;
   			padding:0;
   		}
   		.box1{
   			width: 200px;
   			height: 200px;
   			border:1px solid #f00;
   		}
   		.box2{
   			width: 100px;
   			height: 100px;
   			border: 1px solid #000;
   		}
   	</style>
   </head>
   <body>
   	<div class="box1" onclick="console.log('ss')">
   		<div class="box2" ></div>
   	</div>
   	<script>
   		let box1Elem = document.querySelector('.box1')
   		let box2Elem = document.querySelector('.box2')
   
   		box2Elem.addEventListener('click',function(e){
   			console.log(e)
   			e.stopPropagation()
   		})
   		// ss 不会打印，因为box2 阻止冒泡了
   	</script>
   </body>
   </html>
   ```

   > 注意，使用这种方法时，on-属性的值是“监听代码”，而不是“监听函数”。也就是说，一旦指定事件发生，这些代码是原样传入JavaScript引擎执行。因此如果要执行函数，必须在函数名后面加上一对圆括号。
   >
   > 另外，Element节点的setAttribue方法，其实设置的也是这种效果。
   >
   > `el.setAttribute('onclick', 'doSomething()');`

2. Element 节点有事件属性，可以定义监听函数

   ```javascript
   window.onload = doSomething;
    
   div.onclick = function(event){
     console.log('触发事件');
   };
   ```

   使用这个方法指定的监听函数，**只会在冒泡阶段触发** ，会有跟`on-` 绑定的同样问题

3. addEventListener 方法

   通过Element节点、document节点、window对象的addEventListener方法，也可以定义事件的监听函数。

   > 在上面三种方法中，
   >
   > 第一种“HTML标签的on-属性”，违反了HTML与JavaScript代码相分离的原则；
   >
   > 第二种“Element节点的事件属性”的缺点是，同一个事件只能定义一个监听函数，也就是说，如果定义两次onclick属性，后一次定义会覆盖前一次。
   >
   > 因此，这两种方法都不推荐使用，除非是为了程序的兼容问题，因为所有浏览器都支持这两种方法。

   addEventListener是推荐的指定监听函数的方法。它有如下优点：

   - 可以针对同一个事件，添加多个监听函数，这些函数按照添加顺序触发，即先添加先触发
   - 能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发回监听函数。
   - 除了DOM节点，还可以部署在window、XMLHttpRequest等对象上面，等于统一了整个JavaScript的监听函数接口。

#### 4.addEventListener

1. addEventListener()

   `button.addEventListener('click', hello, false);`

   语法：

   ```javascript
   target.addEventListener(type, listener [, options]);
   target.addEventListener(type, listener [, useCapture])
   ```

​	   **useCapture** 默认为false，在冒泡阶段捕获

​	   **options**：**capture** 、 **once**、**passive** 三个属性

​	   capture 在哪个阶段捕获事件

​	   once 是否执行一次

​	   passive 为true ，则监听着 不会调用  `preventDefault()` 阻止默认事件

2. removeEventListener()

   ```javascript
   div.addEventListener('click', listener, false);
   div.removeEventListener('click', listener, false);
   ```

   > 注意，removeEventListener方法移除的监听函数，必须与对应的addEventListener方法的参数完全一致，而且在同一个元素节点，否则无效。

3. dispatchEvent()

   dispatchEvent（）方法在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了Event.preventDefault()，则返回值为false，否则为true。

   dispatchEvent方法的参数是一个Event对象的实例。

   ```javascript
   para.addEventListener('click', hello, false);
   var event = new Event('click');
   para.dispatchEvent(event);
   ```

#### 5.Event对象

1. 定义：

事件发生以后，会生成一个事件对象，作为参数传给监听函数。浏览器原生提供一个Event对象，所有的事件都是这个对象的实例，或者说继承了Event.prototype对象。

Event对象本身就是一个构造函数，可以用来生成新的实例。

```javascript
event = new Event(typeArg, eventInit);
```

Event构造函数接受两个参数。第一个参数是字符串，表示事件的名称；第二个参数是一个对象，表示事件对象的配置。

- bubbles：布尔值，可选，默认为false，表示事件对象是否冒泡。
- cancelable：布尔值，可选，默认为false，表示事件是否可以被取消。

```javascript
var ev = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(ev);
```

2. Event实例的属性和方法。

   1. 属性与事件阶段有关的

      - bubbles

        bubbles属性返回一个布尔值，表示当前事件是否会冒泡。该属性为只读属性，只能在新建事件时改变。除非显式声明，Event构造函数生成的事件，默认是不冒泡的。

        ```javascript
        function goInput(e) {
          if (!e.bubbles) {
            passItOn(e);
          } else {
            doOutput(e);
          }
        }
        // 根据事件是否冒泡，调用不同的函数
        ```

      - eventPhase

        eventPhase 属性返回一个整数值，表示事件目前所处的节点

        `let phase = event.eventPhase;`

        - 0： 事件目前没有发生
        - 1：事件目前处于捕获阶段
        - 2：事件到达目标节点
        - 3：事件处于冒泡阶段

   2. 属性与事件的默认行为有关

      - currentTarget 属性

        currentTarget属性返回事件当前所在的节点，即正在执行的监听函数所绑定的那个节点。作为比较，target属性返回事件发生的节点。如果监听函数在捕获阶段和冒泡阶段触发，那么这两个属性返回的值是不一样的。

      - target 属性

        target属性返回触发事件的那个节点，即事件最初发生的节点。如果监听函数不在该节点触发，那么它与currentTarget属性返回的值是不一样的。

   3. 属性与事件对象的其它信息相关

      - type

        type属性返回一个字符串，表示事件类型

      - detail 

        detail属性返回一个数值，表示事件的某种信息

      - timeStamp

        timeStamp 属性返回一个毫秒时间戳，表示事件发生的时间

      - preventDefault()

        取消浏览器对当前时间的默认行为

      - stopPropagation()

        stopPropagation方法阻止事件在DOM中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上新定义的事件监听函数。

      - stopImmediatePropagation()

        如果同一个节点对于同一个事件指定了多个监听函数，这些函数会根据添加的顺序依次调用。只要其中有一个监听函数调用了stopImmediatePropagation方法，其他的监听函数就不会再执行了。







