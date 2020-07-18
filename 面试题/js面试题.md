```javascript
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
```

```javascript
var tmp = 123;
if(true){
  console.log(tmp)
  let tmp
}
```

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

```javascript
function fn() {
	console.log(this.length)
	console.log(arguments[0] && arguments[0]())
}

var a = { length: 10, fn }

a.fn(fn, 2, 4)
```

