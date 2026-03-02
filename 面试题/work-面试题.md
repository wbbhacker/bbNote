### 面试题

### 1.CCS方面 

1.justify-content 与  align-content 的区别  

> - justify-content：控制主轴（main axis）上的对齐
>
> - align-content：控制交叉轴（cross axis）上的对齐（仅在多行容器中生效）

2.css 性能优化？



### 2.JS 方面

#### 1.作用域

```javascript
let name = 1
function A(){
  console.log(name)
}
function B(){
  var name = 2
  A()
}
B()
/*
/*
函数的作用域链由定义位置决定，不是调用位置
demo 定义在全局，因此只能访问全局的 a = 1
test 内部的 a = 2 是局部变量，不影响 demo 的查找
最终输出 1
*/ 
*/
```

#### 2.原型链

```javascript
// 原型链
function A(){
  this.name = 1
}
let B = new A()
console.log(B.__proto__)
console.log(B.__proto__ === A.prototype)    // true
console.log(B.prototype) 
console.log(A.__proto__)
console.log(A.__proto__ === Function.prototype)   // true
console.log(A.__proto__.__proto__)
console.log(A.__proto__.__proto__ === Object.prototype)   // true


```

#### 3.事件循环

```javascript


//事件循环
//  添加 awiat 之后呢？
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
/*
未添加await 结果
同步代码：
DDDD → AAAA → CCCC → BBBB → GGGG → IIII

宏任务：
FFFF
*/


/*
添加await 的结果
同步代码：DDDD → AAAA → CCCC → GGGG → IIII
微任务：BBBB（await 后面的代码）
宏任务：FFFF（setTimeout）
*/

// await 实际上是一个语法糖，它会将后面的代码包装成 Promise.then() 的回调。


function foo(){
  foo()
}
foo()


//不溢出修改方法,添加setTimeout
function foo(){
  console.count('foo')
  setTimeout(foo,0)
}
foo()
// 添加微任务
function foo(){
 console.count('foo')
  Promise.resolve('1').then(foo)
}
foo()
```

4. chorme 垃圾回收机制

### 3.网络方面

1. http强弱缓存
2. http 浏览器并发请求有上限吗？ 怎么突破这个上线？

### 4.Vue

#### 1.vue3中 怎么在组件内部获取v-model的值,怎么绑定多个model？

单个

```vue
<script>
  // Vue 3.4+ 新增的 defineModel()，最简单的方式
const modelValue = defineModel()

// 3.4之前
// 1. 接收 props
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

// 2. 定义 emits
const emit = defineEmits(['update:modelValue'])
</script>
```



多个

```vue
 <ChildComponent 
    v-model:firstName="firstName"
    v-model:lastName="lastName"
    v-model:age="age"
  />
<script>
  const props = defineProps({
  firstName: String,
  lastName: String,
  age: Number
})
// 定义 emits
const emit = defineEmits([
  'update:firstName',
  'update:lastName',
  'update:age'
])

// 更新方法
const updateFirstName = (e) => {
  emit('update:firstName', e.target.value)
}

const updateLastName = (e) => {
  emit('update:lastName', e.target.value)
}

const updateAge = (e) => {
  emit('update:age', Number(e.target.value))
}
</script>

```



#### 2.vue3中 ，Watch 怎么监听多个数据？

3.Vue 3中组件通信有哪些



### 5.React

#### 1.怎么获取组件的实例？类组件、函数式组件？

```react
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({ // useImperativeHandle 父组件怎么调用子组件的方法
    focus: () => {
      inputRef.current.focus();
    },
    ref:inputRef
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);

// FancyInput 这样就可以在FancyInput 组件上使用ref了
<FancyInput ref={inputRef} />  
```

#### 2.useEfect、useCallback

#### 3.React中父组件调用子组件方法

##### 1.通过callback,把子组件方法传给父组件

通过callback，把子组件的方法设置到父组件的state上。

```react
//index.js
import React, { Component } from "react";
import Child from './child'

export default class Parent extends Component {
componentDidMount(){
    this.child.test('1111')
}

onRef(ref){this.child = ref}
  
render() {
    return (
      <div>
        <Child onRef={this.onRef} />
      </div>
    );
  }
}
// child.js

import React, { Component } from "react";

export default class Child extends Component {
componentDidMount(){
    this.props.onRef(this)
}
  
test(val){
    console.log(val) // 打印 1111
}
render() {
    return (
      <div> </div>
    );
  }
}

```

##### 2.通过ref 获取子组件实例

##### 3.状态管理`redux`

#### 4.React 中子组件调用父组件方法

##### 1.通过 `props` 传递方法

##### [2.`createContext`、`useContext`](https://react.dev/reference/react/useContext)

```react
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
```

##### 3.状态管理`redux`



