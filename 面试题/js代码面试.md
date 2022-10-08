#### 1.async promise

```javascript
// 第一题
async function async1(){
  console.log('AAAA')
  async2()
  console.log('BBBB')
}
async function async2(){
  console.log('CCCC')
}
console.log('DDDD')
setTimeout(() => {
  console.log('FFFF')
}, 0);
async1()
new Promise(function(resolve) {
  console.log('GGGG')
}).then(function () {
    console.log('HHHH')
})
console.log('IIII')


// 第二题
setTimeout(_ => console.log(1))

new Promise(resolve => {
  resolve()
  console.log(2)
}).then(_ => {
  console.log(3)
})

console.log(4)


```



#### 2. 

```javascript
function a(xx) {
   this.x = xx
   return this
 }

var x = a(5)
var y = a(6)
console.log(x.x)
console.log(y.x)
```

#### 3.

```javascript
var length = 10;
 function fn(){
 	console.log(this.length)
 }
 var obj = {
 	length:5,
 	method:function(fn){
 		fn();
 		arguments[0]()
 		}
 	}
 obj.method(fn)
```

#### 4.

```javascript
function fn() {
	console.log(this.length)
	console.log(arguments[0] && arguments[0]())
}

var a = { length: 10, fn }

a.fn(fn, 2, 4)
```

#### 5.`[1,2,3].map(parseInt)` 

#### 6.如何实现一个new

#### 7.有以下3 个判断数组的方法，请分别介绍它们之间的区别和优劣

1. `Object.prototype.toString.call()`

2. `instanceof`

3. `Array.isArray()`

   >  实现 instanceof

#### 8.两个数组合并成一个数组

请把两个数组['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和['A', 'B', 'C', 'D']，合并
为['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。

#### 9.删除左右两端的空格

```js
// 删除左右两端的空格
let str = '   fffasfasfa   ';

function trim(str){
    if(typeof str !== 'string') return
    // let reg = /^(\s*)(\w+)(\s*)$/
    let reg = new RegExp('^(\\s*)(\\w+)(\\s*)$')
    return RegExp.$2
}

function trim(str){
    if(typeof str !== 'string') return
    return str.replace(/^(\s*)(\w+)(\s*)$/,function(match,$1,$2){
        return $2
    })
}


```

#### 10. // 请使用两种方法把a转换成b

```js

let a = 'hello_world_web_site'
let b = 'helloWorldWebSite'

 a = a.replace(/_(\w{1})/g,function(match,$1,offset,input){
     console.log(match)
     console.log($1)
     console.log(offset)
     console.log(input)
     return $1.toUpperCase()
 })
console.log(a)
console.log(a === b)
```

#### 11.ES6 的模块机制

https://zhuanlan.zhihu.com/p/33843378

```javascript
//1.comcom.js
// a.js
console.log('a starting');
exports.done = false;
const b = require('./b');
console.log('in a, b.done =', b.done);
exports.done = true;
console.log('a done');

// b.js
console.log('b starting');
exports.done = false;
const a = require('./a');
console.log('in b, a.done =', a.done);
exports.done = true;
console.log('b done');

// node a.js
// 执行结果：
// a starting
// b starting
// in b, a.done = false
// b done
// in a, b.done = true
// a done

// es6
// a.js
console.log('a starting')
import {foo} from './b';
console.log('in b, foo:', foo);
export const bar = 2;
console.log('a done');

// b.js
console.log('b starting');
import {bar} from './a';
export const foo = 'foo';
console.log('in a, bar:', bar);
setTimeout(() => {
  console.log('in a, setTimeout bar:', bar);
})
console.log('b done');

// babel-node a.js
// 执行结果：
// b starting
// in a, bar: undefined
// b done
// a starting
// in b, foo: foo
// a done
// in a, setTimeout bar: 2
```



#### 11.Tres shaking 原理

Tree-shaking 关注与无用模块的消除，消除那些引用了但没有被使用的模块吗，tree-shaking 的消除原理是依赖于ES6的模块特性。

ES6 module 特点：

- 只能作为模块顶层的语句出现

- import 的模块名只能是字符串变量

- import binding 是immutable 的

  依赖关系是确定的，和运行时的状态无关可以进行可靠的静态分析，然后进行消除

  [控制流](https://baike.baidu.com/item/控制流)分析：生成有向[控制流图](https://baike.baidu.com/item/控制流图)，用节点表示基本代码块，节点间的有向边代表控制流路径，反向边表示可能存在的循环；还可生成[函数调用](https://baike.baidu.com/item/函数调用)关系图，表示函数间的嵌套关系。无效代码分析，根据控制流图可分析孤立的节点部分为无效代码。

> 所谓静态分析就是不执行代码，从字面量上对代码进行分析，ES6之前的模块化，比如我们可以动态require一个模块，只有执行后才知道引用的什么模块，这个就不能通过静态分析去做优化。google 静态分析技术

#### 13.作用域

```javascript
//第一道
var conut = 10

function a(){
	return conut + 10
}
function b(){
	var conut = 20
	return a()
}
console.log(b());  // 20

// 第二道
this.conut = 10

function a(){
	return this.conut + 10
}
function b(){
	this.conut = 20
return a()
}
console.log(b()); // 30
```

#### 14.实现一个请求池，要求同时只能有最多 4 个请求在处理，多余的请求需要排队

```javascript
function request(url){

}
request(url1).then()
request(url2).then()
request(url3).then()


//模拟代码
function request(url){

    if(request.nums === undefined){
        request.nums = 0
        request.q = []
    }else{
        request.nums +=1
    }
    
    console.log(request.nums)

    if(request.nums === 4){
        return Promise.all(request.q).then(function(){
            request.nums = 1
            return new Promise(function(resolve, reject){
                setTimeout(function(){
                    resolve(url)
                },url)
            })
        })
    }else{
        let p = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(url)
            },url)
        })
        request.q.push(p)
        return p
    }
}


request(1000).then(res=> console.log(res));
request(2000).then(res=> console.log(res));
request(3000).then(res=> console.log(res));
request(4000).then(res=> console.log(res));
request(500).then(res=> console.log(res));
```

#### 16.实现有序数组的排序 [1, 3, 5] [2, 4, 6] -> [1, 2, 3, 4, 5, 6]， 不能用concat sort方法

#### 17.new 操作的内部执行过程

```javascript

function Foo() {

    this.a = 1;

    return {
        a: 4,
        b: 5,
    };
}



Foo.prototype.a = 6;
Foo.prototype.b = 7;
Foo.prototype.c = 8;


var o = new Foo();


console.log(o.a);
console.log(o.b);
console.log(o.c);
```

#### 12.add(1,2,3)、add(1,2)(3)、add(1)(2)(3) 运算结果相同都为6

```javascript
let add = function(a,b,c){
  return a+b+c
}
function curry(fn) {
  return function curriedFn(...args){
    if(args.length < fn.length){
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }else{
      return fn.call(this,...args)
    }
  }
}
let addCurry = curry(add)
console.log(addCurry(1,2,3))
console.log(addCurry(1)(2)(3))
console.log(addCurry(1,2)(3))

```


#### 12.js 原型链

https://juejin.cn/post/6844903936365690894

#### 13.作用域块

```javascript
var a = 1

{
    console.log(a)  // 1
    var a = function() {}
}

var a = 1

{
    console.log(a)  // 报错
    let a = function() {}
}
```

14.

```javascript
var f = {
    x:function {
        console.log(this)  /
        console.log(this == f)
    }
}
f.x(); 
var a = f.x;
a() 


var f = {
    x:() => {
        console.log(this)  
        console.log(this == f)
    }
}
f.x();  
var a = f.x;
a() 
```

#### 14.获取 url 中的参数

1. 指定参数名称，返回该参数的值 或者 空字符串

2. 不指定参数名称，返回全部的参数对象 或者 {}

3. 如果存在多个同名参数，则返回数组

```javascript
// 自己写的
function getUrlParams(sUrl,skey){
        let regStr = `(\\?|&)?(${skey ? skey : '[0-9a-zA-Z]+'})=([0-9a-zA-Z]+)(#|&)?`
        let reg = new RegExp(regStr,'g')
        let arr = [...sUrl.matchAll(reg)]
        if(skey){
          switch( arr.length ){
            case 0:
              return ''
            case 1:
              return arr[0][3]
            default:
              return arr.map((item)=>item[3])
          }
        }else{
          if(arr.length ===0){
            return {}
          }else{
            let o = {}
            arr.forEach(function(item){
              if(o[item[2]] !== undefined){
                if(o[item[2]] instanceof Array){
                  o[item[2]].push(item[3])
                }else{
                  o[item[2]] = [o[item[2]]]
                }
              }else{
                o[item[2]] = item[3]
              }
            })
            return o
          }
        }
    }

// 参考
function getUrlParam(sUrl,sKey){
	var result = {};
	sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
		if(result[k] !== void 0){
			var t = result[k];
			result[k] = [].concat(t,v);
		}else{
			result[k] = v;
		}
	});
	if(sKey === void 0){
		return result;
	}else{
		return result[sKey] || '';
	}
}
```

#### 15.查找两个节点的最近的一个共同父节点，可以包括节点自身

> oNode1 和 oNode2 在同一文档中，且不会为相同的节点

```
 function commonParentNode(oNode1, oNode2) {
    for(;oNode1;oNode1=oNode1.parentNode){
    	if(oNode1.contains(oNode2)){
    		return oNode1;
    	}
    }
} 
```

#### 16.根据包名，在指定空间中创建对象

```javascript
namespace({a: {test: 1, b: 2}}, 'a.b.c.d')

//{a: {test: 1, b: {c: {d: {}}}}}
```

```javascript
function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.')
    let cur = oNamespace
    while(arr.length > 0){
        if(typeof cur[arr[0]] !== 'object'){
            cur[arr[0]] = {}
        }
        cur = cur[arr[0]]
        arr.shift()
       
    }
    return oNamespace
}
```

#### 17.为 Array 对象添加一个去除重复项的方法

```javascript
Array.prototype.uniq = function () {
   var resArr = [];
   var flag = true;
    
   for(var i=0;i<this.length;i++){
       if(resArr.indexOf(this[i]) == -1){
           if(this[i] != this[i]){   //排除 NaN
              if(flag){
                   resArr.push(this[i]);
                   flag = false;
              }
           }else{
                resArr.push(this[i]);
           }
       }
   }
    return resArr;
}

Array.prototype.uniq = function(){
    return [...new Set(this)];
}
```

#### 18.用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等

```
function fibonacci(n) {
    if(n ===1 || n===2) return 1
    let sum = 0
    let n1 = 1
    let n2 = 1
    while( n > 2){
        sum = n1 + n2
        n1 = n2
        n2 = sum
        n--
    }
   return sum
}

function fibonacci(n) {
    if(n ===1 || n===2) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}
```

#### 19.如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1

否则如果字符 Unicode 编码 > 255 则长度为 2

```javascript
function strLength(s, bUnicode255For1) {
    if( bUnicode255For1 ){
        return s.length;
    }else{
        var len = s.length;
        for( var i=0; i<s.length; i++ ){
            if( s.charCodeAt(i) > 255 ){
                len++;
            }
        }
        return len;
    }
}

strLength('hello world, 哈哈', false)

//输出 17
```

#### 20.map, parseInt()

```
console.log(["10","20","30"].map(parseInt))
console.log(['10', '10', '10'].map(parseInt))
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### 21.

```javascript
var n = 0;
function a(){
    var n = 10;
    
	function b(){
		n++;
		console.log(n)
		// console.log('1')
    }
    
	b();
	// console.log('2')
	return b;
}
var c = a();
c();
console.log(n);
```

> // 词法作用域规则：函数的嵌套关系是定义时决定的，而非调用时决定的，即词法作用域，即嵌套关系是由词法分析时确定的，而非运行时决定。

#### 22.

```javascript
var name = 'wang';

function echo(){
	console.log(name);
}

function env(){
	var name = 'eve';
	echo();
}

env();



var x = 100;  
var inc = function(){  
  var x = 0;
  return function(){
    console.log(x++);
  };
};

var inc1 = inc();  
var inc2 = inc();

inc1();  
inc1();  
inc2();  
inc1();  
inc2();  
x;       
```

> // 一和二对比可知函数在那个作用域下定义，那此函数就在那个作用域下开始往作用域链上找变量;

#### 23.

```javascript
function b(x,y,a){
    console.log(arguments);
	arguments[2] = 10;
	console.log(a);
}
b(1,2,3)
```

#### 24.

```javascript
if(!("a" in window)){
	var a = 1;  // let a = 1; ?
}
console.log(a)


```

> /*首先会解析所有函数，其次是var声明的变量，但是不会赋值;因为javascript没有块的概念，像
>
>  for(var i in array)这里的i依然是全局变量。因此，这几行代码的执行顺序是：
>
>  1.var a; //声明一个变量，但是不会赋值
>
>  2.if语句，全局变量相当于window的属性，所以"a" in window为真，取反为假。故不会执行大括号里面的语句
>
>  3.console.log(a) // undefined 
>
> */

#### 25.

```javascript
var a = 10;

function test(){
	a = 100;
	b = 10;

	console.log(this);
	console.log(a);
	console.log(this.a);
	var a;
	console.log(a)
}
test();
```

#### 26.

```javascript
var name = "The window";
var object = {
	name:"My Object",
	getNameFunc:function(){
		var a = 1;
		return function(){
			console.log(a)
			console.log(this)
			return this.name;
    	};
	}
};

var object = {
	name:"My Object",
	getNameFunc:function(){
		var a = 1;
		var bb =  function(){
			console.log(a)
			console.log(this)
			return this.name;
    	};
        return bb
	}
};
console.log(this.name);
console.log(object.getNameFunc()());
```

#### 27.

```javascript
var a = "a";
function say(a) {
    console.log(a);
}

function execute(someFunction, value) {
  	var  a = "b";
    someFunction(a);
}

execute(say, "Hello");

```

#### 28.

```javascript
var a = 1;

function demo(){
	console.log(a)
}
function test(conf){
	var a = 2;
	conf();
}
test(demo);

```

#### 29.

```javascript
function fun(n,o){

	console.log(o);

	return {
		fun:function(m){
			return fun(m,n);
		}
	};
};
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);   
var b = fun(0).fun(1).fun(2).fun(3);   
var c = fun(0).fun(1); c.fun(2); c.fun(3); 

```

> // 闭包的作用：
>
> // 1.匿名自执行函数
>
> // 2.延长作用域链
>
> // 3.封装 实现对象的私有方法，等 （隐藏对象的细节）
>
> // 4.

#### 30.

```javascript
console.log(a)
var a = 1
function a(){

}
```

> 变量提升 最高级

#### 31.

```javascript
// 非严格模式下
function fn() {
    console.log('s')
    prop = function () {
   	 	console.log(1)
    }
    return this
}
fn.prop = function () {
    console.log('ss')
    console.log(2)
}
fn.prototype.prop = function () {
    console.log('sss')
    console.log(3)
}
var prop = function () {
	console.log(4)
}
function prop() {
	console.log(5)
}


//  连续代码段， 不是独立的

fn.prop();  
prop();  
fn().prop(); 
prop(); 
new fn.prop(); 
new fn().prop(); 
new new fn().prop(); 
```

> new 关键字 比  .执行的优先级高

#### 32.

```javascript

function a(){
  
    console.log(this)
    console.log("我是内部");
    this.name = function(){
        console.log("我是内部的方法")
    }();
    console.log(this)
    // return this
    // return "c"
    // return {}
    // 没有return 的情况下返回什么
  
}

a.prototype.say = function(){

console.log("我是原型链")

}();

console.log( new a() );

var s1 = new String('hello');
var s2 = new String('hello');

console.log(s1 === s2)
console.log(s1 == s2)
console.log(s2)
console.log(s2.toString())

// 对象通过指针指向的内存地址来做比较。

var s3 = 'hello';
var s4 = 'hello';


var a = 'sssss';
var b = a;
console.log(s3 === s4)
console.log(s3)
console.log(s4)

console.log([1,2] == [1,2])

var s5 = String('hello');
var s6 = String('hello');

console.log(this)
console.log(typeof s1)
```

#### 33.

```javascript
 console.log(undefined == null);
      console.log(undefined === null);
      console.log(undefined == NaN);
      console.log(undefined === NaN);
      console.log( null == NaN );
      console.log( null === NaN );
      console.log( undefined == 0)
      console.log( undefined === 0)
      console.log( null == 0 )
      console.log(++undefined)
      console.log( null === 0 )

      console.log(Number(null))

      console.log(var undefined);

      console.log( [] == false );
      console.log( [] == ![] );

      console.log(2+true)


      console.log(!!(0 == false))
      console.log(!!( 0 == undefined ))
      console.log(undefined == null )
      console.log(isNaN("1312") == NaN )
      console.log(typeof 1 == true ? 1 : 0)
      console.log(typeof [] == "array")
      console.log([] instanceof Array )


      console.log(2&3) // 2
      console.log(2|3) //3
      console.log(~true)    //true boolean   -2


      console.log(NaN == NaN)
      console.log(undefined === undefined)
      console.log(null === null)

      console.log( typeof(NaN) )
      console.log( typeof(undefined) )
      console.log( typeof(null) )
      console.log( typeof([]) )
```

#### 38.

```javascript
  var color = "red";
  var o = {
    color:"blue"
  }

  function getColor(){
    console.log(this.color)	
  }


  getColor();     		//call和apply真正强大的地方是能够扩充函数赖以运行的作用域。
  getColor.call(o);       //在使用call方法时，传递给函数的参数必须逐个列举出来。
  getColor.apply(o);		//在使用apply方法时，传递给函数的第二个参数是Array实例。
```

#### 39.

```javascript
      function b(x, y, a) {
        arguments[2] = 10 //它的值永远与对应名字参数的值保持同步。
        console.log(a)
      }
      b(1, 2, 3) //  10
      function c(x, y, a) {
        a = 10
        console.log(arguments[2]) //它的值永远与对应名字参数的值保持同步。
      }
      c(1, 2, 3)
```

#### 40.

```javascript
    n = 1;
	  function f1(){
	  	test = 10;
	  	var n = 999;
	  	nAdd = function(){ n += 1 }
	  	function f2(){
	  		return n;
	  	}
	  	return f2;
	  }
	  var result = f1()();
	  console.log(result)
```

#### 41.

```javascript
      var n = 888
      function f1() {
        var n = 999
        nAdd = function () {
          n += 1
        } // var nAdd=function(){n+=1}
        function f2() {
          console.log(n)
        }
        return f2
      }
      var result = f1()
      result() // 999
      nAdd()
      result() // 1000
```

#### 42.

```javascript
      var name = 'The Window'

      var object = {
        name: 'My Object',
        getNameFunc: function () {
          return function () {
            return this.name
          }
        },
      }

      console.log(object.getNameFunc()())
```

#### 43.

```javascript
  var x = 1;
	var y = 0;
	var z = 0;
	function add(n){ 
		n = n+1;
		return n;
	};
	y = add(x);
	function add(n){ 
		n = n+4;
	};
	z = add(x);
	console.log(y);
	console.log(z);
```

#### 44.

```javascript
      var Obj = function (msg) {
        this.msg = msg

        this.shout = function () {
          console.log(this.msg)
        }

        this.waitAndShout = function () {
          var aaa = function (ss) {
            var b = ss
            return function () {
              console.log(b)
            }
          }

          setTimeout(aaa(this.msg), 2000)
        }
      }
      var aa = new Obj('abc')
      aa.waitAndShout()
```

#### 45.

```javascript
  	  var t=true;                 //js 是单线程语言
      setTimeout(function(){
        console.log(123);
          t=false;
      },1000);

      while(t)
      { }
      console.log('end');
```

#### 46.

```javascript
  var name = "global";  
    var oo = {  
      name: "oo",
      getNameFunc: function(){
        return function(){
          return this.name;
        };
      }
    }
    var ooo = {  
      name: "ooo",
      getName: oo.getNameFunc() // 此时闭包函数的this被绑定到新的Object
    };

    console.log(ooo.getName())

```

#### 47.

```javascript
        Foo.a = function () {
          console.log(4, this)
        }

        this.a = function () {
          console.log(3, this)
        }

        a = function () {
          console.log(1, this)
        }
        return this
      }

      Foo.a = function () {
        console.log(10)
      }
      Foo.prototype.a = function () {
        console.log(13)
      }
      var a = function () {
        console.log(11)
      }
      function a() {
        console.log(12)
      }

      Foo()
      Foo.a()
      a()
      Foo().a()
      new Foo().a()
      new Foo.a()
```

#### 48.

```
let a = function(){}
typeof a
typeof {}
typeof []
```

#### 49.Function.prototype.bind 的实现

```javascript
//  Yes, it does work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind) (function(){
  var ArrayPrototypeSlice = Array.prototype.slice;
  Function.prototype.bind = function(otherThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var baseArgs= ArrayPrototypeSlice.call(arguments, 1),
        baseArgsLength = baseArgs.length,
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          baseArgs.length = baseArgsLength; // reset to default base arguments
          baseArgs.push.apply(baseArgs, arguments);
          return fToBind.apply(
                 fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
          );
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;   
    }
    fBound.prototype = new fNOP();
    
    // 用fNOP 是因为 原型的constructor指向函数本身，不能指向两个函数所以要用new fNOP()

    return fBound;
  };
})();
```

```javascript
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```

> bind 函数特点：
>
> 1. 返回一个函数
> 2. 传入的参数
> 3. 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
> 4. 函数的原型继承
```javascript
var b = 10
;(function b() {
  b = 20
  console.log(b)
})()

```

#### 49.下面代码中a在什么情况下会打印1？

```
var a = ?
if(a ==1 && a==2 && a ==3){
	console.log(1)
}

// 答案
var a = {
	i:1,
	valueOf(){
		return a.i++
	}
}

var a = [1,2,3]
a.toString = a.shift

```

#### 50.

```javascript
var obj = {
	'2':3,
	'3':4,
	'length':2,
	'splice':Array.prototype.splice,
	'push':Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```

#### 51.setTimeout

```javascript
for(var i=0; i<6; i++){
    setTimeout(function(){
        console.log(Date.now())
        // console.log(i)
    },1000)
}
```

