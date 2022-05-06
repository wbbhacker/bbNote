#### 1.介绍下Set、Map、WeakSet 和WeakMap 的区别？

##### **Map构造函数**

作为ECMAScript 6 的新增特性，Map 是一种新的集合类型，为这门语言带来了真正的键/值存储机制。

```
// 强调
//1.Map 可以使用任何JavaScript 数据类型作为键
//2.在映射中用作键和值的对象及其他“集合”类型，在自己的内容或属性被修改时仍然保持不变（猜测可能映射中键值位为对象的内存地址）  SameValueZero相等比较算法
//3.Map实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作
//4.键和值在迭代器遍历时是可以修改的，但映射内部的引用则无法修改。当然，这并不妨碍修改作为键或值的对象内部的属性，因为这样并不影响它们在映射实例中的身份

const m = new Map(); 
const m = new Map([   //Map 构造函数入参为可迭代对象
    ['key1','val1'],
    ['key2','val2'],
    ['key3','val3'],
])
const m2 = new Map({
    [Symbol.iterator]: function*() {
        yield ["key1", "val1"];
        yield ["key2", "val2"];
        yield ["key3", "val3"];
    }
});
// 属性
m.size

// 方法
m.set()  // set()方法返回映射实例，因此可以把多个操作连缀起来
m.get()
m.has()
m.delete()
m.clear()

m.keys()  // 返回迭代器对象，key为元素
m.values() // 返回迭代器对象，valeu为元素
m.entries()  // 返回迭代器对象，[key，vallue]为元素

m.foreach()
```

1. 选择Object 还是Map
   1. **内存占用** Map 比 Object 多存储50%的键/值对
   2. **插入性能** Map性能更佳
   3. **查找速度** Object更好一些
   4. **删除性能** Map 性能好些

##### [**weakMap弱引用**](https://javascript.info/weakmap-weakset)

弱映射**weakMap**中的键**只能**是Object 或者继承自Object 的类型

1. 弱键

   弱映射中的键不属于正式的引用，不会阻止垃圾回收（弱映射中值得引用是正式引用）。

   > 意思就是如果键没有被其它地方引用则会被当做垃圾回收。

   只要键存在，键/值对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。

   ```
   const wm = new WeakMap();
   const container = {
       key: {}
   };
   wm.set(container.key, "val");
   function removeReference() {
       container.key = null;
   }
   ```

2. 不可迭代键

   因为WeakMap 中的键/值对任何时候都可能被销毁，所以没必要提供迭代其键/值对的能力。

   WeakMap 实例之所以限制只能用对象作为键，是为了保证只有通过键对象的引用才能取得值。如果 允许原始值，那就没办法区分初始化时使用的字符串字面量和初始化之后使用的一个相等的字符串了。

3. DOM节点元数据 

   ```
   const m = new Map();
   const loginButton = document.querySelector('#login');
   // 给这个节点关联一些元数据
   m.set(loginButton, {disabled: true});
   // 登陆按钮从DOM删除但由于映射中还保存着按钮的引用，所以对应的DOM 节点仍然会逗留在内存中，除非明确将其从映射中
   删除或者等到映射本身被销毁。
   
   
   // 如果这里使用的是弱映射,那么当节点从DOM 树中被删除后，垃圾回收程序就可以立即释放其内存（假设没有其他地方引用这个对象）
   const wm = new WeakMap();
   const loginButton = document.querySelector('#login');
   // 给这个节点关联一些元数据
   wm.set(loginButton, {disabled: true});
   
   
   ```

##### **set 集合类型**

ECMAScript 6 新增的Set 是一种新集合类型，为这门语言带来集合数据结构。

它**类似于数组**用`Array.form`转换成数组，但是成员的值都是唯一的，没有重复的值。

```
//强调
//1.与Map 类似，Set 可以包含任何JavaScript 数据类型作为值。
//2.与严格相等一样，用作值的对象和其他“集合”类型在自己的内容或属性被修改时也不会改变，修改集合中值的属性不会影响其作为集合值的身份：
//3.Set 会维护值插入时的顺序，因此支持按顺序迭代。
//
const m = new Set();
const s1 = new Set(["val1", "val2", "val3"]);
const s2 = new Set({  // set 传入可迭代对象
    [Symbol.iterator]: function*() {
        yield "val1";
        yield "val2";
        yield "val3";
    }
});

// 属性
m.size

// 方法
m.add()
m.has()
m.delete()

const s = new Set(["val1", "val2", "val3"]);
console.log([...s]); // ["val1", "val2", "val3"]  转化为数组

```

##### WeakSet  弱集合

ECMAScript 6 新增的“弱集合”（WeakSet）是一种新的集合类型，为这门语言带来了集合数据结构。

弱集合中的值只能是Object 或者继承自Object 的类型



#### 2.ES5/ES6 的继承除了写法以外还有什么区别？

1. ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.apply(this)）

2. ES6的继承机制完全不同，实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法）,

   然后再用子类的构造函数修改this

3. ES5的继承时通过原型或构造函数机制来实现

4. ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承

   > 1. super 关键字指代父类的实例，即父类的this对象
   > 2. 在子类构造函数中，调用super后，才可使用this关键字，否则会报错

5. Function 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于let、const声明变量。

   ```javascript
   const bar = new Bar();
   function Bar(){
   	this.bar = 42;
   }
   const foo = new Foo();  // 报错
   
   class Foo{
   	constructor(){
   		this.foo =42;
   	}
   }
   ```

6. class 声明内部会启用严格模式

   ```javascript
   function Bar(){
     baz = 42;
   }
   const bar = new Bar();
   
   class Foo{
     constructor(){
       fol = 42;  // 报错
     }
   }
   const foo = new Foo();
   ```

7. class 的所有方法（包括静态方法和实例方法）都是不可枚举的。

   ```javascript
   function Bar(){
   	this.bar = 42;
   }
   Bar.answer = function(){
     retrun 42;
   }
   Bar.prototype.print = function(){
     console.log(this.bar)
   }
   const barKeys = Object.keys(Bar);
   const barProtoKeys = Object.keys(Bar.prototype)
   
   class Foo{
     constructor(){
       this.foo = 42;
     }
     static answer(){
       return 42
     }
     print(){
      	console.log(this.foo)
     }
   }
   const fooKeys = Objectkeys(Foo); // 报错
   const fooPortoKeys = Object.keys(Foo.porototype) //报错
   ```

8. class 的所有方法（包括静态方法和实例方法）都没有原型对象prototype，所以也没有[[construct]], 不能使用new 来调用

```javascript
function Bar(){
	this.bar = 42;
}
Bar.prototype.print = function(){
  console.log(this.bar)
}
const bar = new Bar()
const barPrint = new bar.print()



class Foo{
  constructor(){
    this.foo = 42;
  }
  print(){
   	console.log(this.foo)
  }
}
const fooPrint = new foo.print()
```

9. 必须使用new 调用class

```javascript
function Bar(){
	this.bar = 42;
}
const bar = Bar()

class Foo{
  constructor(){
    this.foo = 42;
  }
}

const foo = Foo(); // 报错
```

10.class 内部无法重写类名

```javascript
function Bar(){
	Bar = 'Baz'
}
const bar = new Bar()



class Foo{
	constructor(){
		this.foo = 42
    Foo = 'Fol' // 报错
	}
}
const foo = new Foo();
foo = 'Fol' // 外面写没事
```

#### 3.var、let、const 的区别？