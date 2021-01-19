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

output：[1, NaN, NaN]

#### 6.如何实现一个new

```

```

#### 7.有以下3 个判断数组的方法，请分别介绍它们之间的区别和优劣

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


#### 12.原型链

```javascript
Function.prototype.a = function(){
   console.log('a')
 }
Object.prototype.b = function(){
  console.log('b')
}

function Foo(){}

let A = new Foo()


A.a()
A.b()

```

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

#### 15.实现一个防抖函数

```

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

12.  add(1,2,3)、add(1,2)(3)、add(1)(2)(3) 运算结果相同都为6

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
=======
