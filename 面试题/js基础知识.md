#### 3.setTimeout、Promise、Async/Await 的区别

#### 4.Async/Await 如何通过同步的方式实现异步

#### 5.JS 异步解决方案的发展历程以及优缺点。

1. 回调函数（callback）

   优点：解决了同步的问题（只要有一个任务耗时很长，后面的任务都必须排队 等着，会拖延整个程序的执行。）

    缺点：回调地狱，不能用 try catch 捕获错误，不能 return

2. Promsie

   优点：解决了回调地狱的问题 

   缺点：无法取消 Promise ，错误需要通过回调函数来捕获

3. Generator

   特点：可以控制函数的执行，可以配合 co 函数库使用 

4. Async/await

   优点：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题 

   缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使 

   用 await 会导致性能上的降低。

#### 6.Promise 构造函数是同步执行还是异步执行，那么then 方法呢？

pomise构造函数是同步执行的，then方法是异步执行的

#### 8.js的数据类型及判断方法

`undefined`、`null` 、`string`、`number`、`boolean` 、`object`、`symbol`

`typeof`、`Object.toString()`、`instanceof`

#### 9.async/await 如何通过同步的方式实现异步
async起什么作用---输出的是一个Promise对象。

#### 10.深拷贝的方法

1. JSON转换

   ```javascript
   var targetObj = JSON.parse(JSON.stringify(copyObj))
   let arr4 = JSON.parse(JSON.stringify(arr))
   ```

   缺点：

   （1）如果对象里有函数,函数无法被拷贝下来

   （2）无法拷贝copyObj对象原型链上的属性和方法

   （3）当数据的层次很深，会栈溢出

2. 普通递归函数

```javascript
function deepCopy( source ) {
if (!isObject(source)) return source; //如果不是对象的话直接返回
    let target = Array.isArray( source ) ? [] : {} //数组兼容
    for ( var k in source ) {
    	if (source.hasOwnProperty(k)) {
    		if ( typeof source[ k ] === 'object' ) {
            	target[ k ] = deepCopy( source[ k ] )
        	} else {
            	target[ k ] = source[ k ]
        	}
    	}
    }
    return target
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
```

缺点：

（1）无法保持引用

（2）当数据的层次很深，会栈溢出

3.防栈溢出函数

```javascript
function cloneLoop(x) {
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}
```

优点：

（1）不会栈溢出

（2）支持很多层级的数据

```javascript
 function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
  }


  function copyOwnPropertiesFrom(target, source) {
    Object
    .getOwnPropertyNames(source)
    .forEach(function (propKey) {
      var desc = Object.getOwnPropertyDescriptor(source, propKey);
      Object.defineProperty(target, propKey, desc);
    });
    return target;
  }

  var obj = {
    name: 'Jack',
    age: '32',
    job: 'developer'
  };

  var obj2 = copyObject(obj);
  console.log(obj2);
  obj.age = 39;
  obj.name = 'Tom';
  console.log(obj);
  console.log(obj2);
```

#### 11.元素的nodeName 与 tagName 哪个兼容性强

nodeName  兼容性强

但如果是你同样需要支持IE 5.5的话，那tagName却是更好的选择。

#### 12.阻止事件默认事件和冒泡

e.preventDefault

e.stopPropagation

#### 13.数字转化、2、8、10、17

```
let a = 255
a.toString(16)  // 'ff'
```

#### 14.对象并不具有prototype属性，只有函数才有prototype属性。

```javascript
function Person(){
	this.sex = "man"
}
function animation(){
 
}
function goods(){
	this.name = '冰激淋';
	this.say = function(){
		console.log('ss')
	}
}
function sun(){

}

console.log(Person.prototype);

Person.prototype = {
	constructor:Person,
	// name:"N"
}
goods.prototype = {
	name:"goods",
	say:function(){
		console.log('www')
	}
}
animation.prototype.run = {
	name:"animation"
}

var friend = new Person();
var goodss = new goods();

var runs = new animation();

console.log(sun.prototype)

console.log(friend.__proto__)	 //
console.log(goodss.prototype)    //  这就是有无constructor


console.log(Function.__proto__.__proto__ == Person.__proto__.__proto__)
console.log(Function.__proto__)
console.log(Function.__proto__.__proto__ )
console.log(Function.__proto__.__proto__.__proto__ )
console.log(typeof Person)
console.log(animation.prototype)
console.log(friend.prototype)

console.log({}.prototype)
console.log({}.__proto__.constructor.__proto__.__proto__)
console.log({}.__proto__.__proto__)

console.log(runs.__proto__)

console.log(goodss instanceof goods)
console.log(goodss.__proto__ === goods.prototype )
console.log(goods.prototype)


console.log(friend.__proto__ === Person.prototype )
console.log(friend.__proto__ )


console.log(friend instanceof Object )
console.log(friend instanceof Person )

console.log( friend.constructor == Person )
console.log( friend.constructor == Object )

function Person(){

}
Person.prototype = {
	constructor:Person,
	name:"N"
}
var friend = new Person();
console.log( friend.constructor == Person )
console.log( Person.prototype )
console.log( friend.constructor == Object )
console.log(friend)
console.log(document.getElementsByTagName('div'))
```

#### 15.V8 垃圾回收机制



#### 16.**为什么操作DOM会很慢**

虽然DOM是由JavaScript实现的，但是在浏览器中都是把DOM和JavaScript分开来实现的，比如IE中，JavaScript的实现名为JScript，放在jscript.dll文件中，而DOM则放在另一个叫做mshtml.dll的库中。在Safari中，DOM和渲染是使用Webkit中的WebCore实现，而JavaScript是由独立的JavaScriptCore引擎实现，同样在Chrome中，同样是使用WebCore来实现渲染，而JavaScript引擎则是他们自己研发的V8引擎。

由于DOM和JavaScript是被分开独立实现的，因此，每一次在通过js操作DOM的时候，就需要先去连接js和DOM，我们可以这样理解：把DOM和JavaScript比作两个岛，他们之间通过一个收费的桥连接着，每一次访问DOM的时候，就需要经过这座桥，并且给“过路费”，访问的次数越多，路费就会越高，并且访问到DOM后，操作具体的DOM还需要给“操作费”，由于浏览器访问DOM的操作很多，因此，“路费”和“操作费”自然会增加，这就是为什么操作DOM会很慢的原因

#### 51.如何优雅处理JavaScript异步错误？

https://juejin.cn/post/6844903991793451016#heading-5

#### 52.`===` 与`==` 的区别？

