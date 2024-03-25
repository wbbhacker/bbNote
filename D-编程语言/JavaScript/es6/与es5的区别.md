#### 1.ES5/ES6 的继承除了写法以外还有什么区别？

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