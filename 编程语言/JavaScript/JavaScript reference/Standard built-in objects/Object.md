# Object 对象

1. ### Object.defineProperty()

   ```javascript
   // 语法
   Object.defineProperty(obj, prop, descriptor)
   
   // 例子
    Object.defineProperty(obj, 'temperature', {
       value: 37, 
       writable: true, //是否可以修改
       enumerable: true, // 是否可以枚举
       configurable: true  //是否可以删除
       get() {
         return temperature;
       },
       set(value) {
       }
     });
   
   ```

2. ### Object.assign() 与 `...` 用法一致

3. ### Object.create()

   ```javascript
   //Polyfill
   if (typeof Object.create !== "function") {
       Object.create = function (proto, propertiesObject) {
           if (typeof proto !== 'object' && typeof proto !== 'function') {
               throw new TypeError('Object prototype may only be an Object: ' + proto);
           } else if (proto === null) {
               throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
           }
   
           if (typeof propertiesObject != 'undefined') {
               throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
           }
   
           function F() {}
           F.prototype = proto;
   
           return new F();
       };
   }
   ```

   1. #### Object.create(null)

   使用`create`创建的对象，没有任何属性，显示`No properties`，我们可以把它当作一个非常**纯净**的map来使用，我们可以自己定义`hasOwnProperty`、`toString`方法，不管是有意还是不小心，我们完全不必担心会将原型链上的同名方法覆盖掉。举个例子：

   ```javascript
   //Demo1:
   var a= {...省略很多属性和方法...};
   //如果想要检查a是否存在一个名为toString的属性，你必须像下面这样进行检查：
   if(Object.prototype.hasOwnProperty.call(a,'toString')){
       ...
   }
   //为什么不能直接用a.hasOwnProperty('toString')?因为你可能给a添加了一个自定义的hasOwnProperty
   //你无法使用下面这种方式来进行判断,因为原型上的toString方法是存在的：
   if(a.toString){}
   
   //Demo2:
   var a=Object.create(null)
   //你可以直接使用下面这种方式判断，因为存在的属性，都将定义在a上面，除非手动指定原型：
   if(a.toString){}
   复制代码
   ```

   另一个使用`create(null)`的理由是，在我们**使用`for..in`循环的时候会遍历对象原型链上的属性**，使用`create(null)`就不必再对属性进行检查了，当然，我们也可以直接使用`Object.keys[]`。

   1. 你需要一个非常干净且高度可定制的对象当作数据字典的时候；

   2. 想节省`hasOwnProperty`带来的一丢丢性能损失并且可以偷懒少些一点代码的时候

4. #### getOwnPropertyNames

```javascript
var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() is an array method.
// logs ["0", "1", "2", "length"]

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() is an array method.
// logs ["0", "1", "2"]
```

5. #### getOwnPropertyDescriptor

 ```javascript
var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, 'foo');
// d is {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }
 ```

