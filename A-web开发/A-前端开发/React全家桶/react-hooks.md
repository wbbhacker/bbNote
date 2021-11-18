#### 1.React Hooks 介绍

对函数组件进行增强，让函数型组件可以存储状态，可以拥有处理副作用的能力。让开发者在不使用类组件的情况下，实现相同的功能。

> 副作用：在一个组件中，只要不是转化成视图的代码就是副作用。比如获取dom，为Dom 添加元素、设置定时器、发送ajax 等。在类组件中通常使用声明周期处理副作用，在函数组件中使用hooks处理

#### 2.Hooks 要解决的问题

1. 类组件的不足（Hooks 要解决的问题）

   1. 缺少逻辑复用机制

      为了复用逻辑增加无实际渲染效果的组件，增加了组件层级显示十分臃肿增加了调试的难度以及运行效率的降低

   2. 类组件经常变得很复杂难以维护

      将一组件相干的业务拆分到了多个生命周期函数中

      在一个生命周期函数内，存在多个不相干的业务逻辑

   3. 类成员方法不能保证this指向的正确性

#### 3.Hooks 使用

##### [1.useState（）](https://reactjs.org/docs/hooks-state.html)

定义：用于为函数组件引入状态

###### 1.useState方法的使用细节

![image-20210507163203536](../../../image/image-20210507163203536.png)

1. 参数是函数的情况：

![image-20210507163430530](../../../image/image-20210507163430530.png)

2.  Using Multiple State Variables  方法可以被调用多次

   ```react
   function ExampleWithManyStates() {
     // Declare multiple state variables!
     const [age, setAge] = useState(42);
     const [fruit, setFruit] = useState('banana');
     const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
   ```

   You **don’t have to** use many state variables. State variables can hold objects and arrays just fine, so you can still group related data together. However, unlike `this.setState` in a class, updating a state variable always *replaces* it instead of merging it.

###### 2.设置状态值方法的使用细节

![image-20210507163627736](../../../image/image-20210507163627736.png)

![image-20210507164026418](../../../image/image-20210507164026418.png)

##### 2.useReducer()

useReducer是另一种让函数组件保存状态的方式。

![image-20210507164951984](../../../image/image-20210507164951984.png)

##### 3.useContext()

在跨组件层级获取数据时简化获取数据的代码

![image-20210507165651753](../../../image/image-20210507165651753.png)

##### 4.useEffect()

让函数型组件拥有处理副作用的能力，类似声明周期函数。

![image-20210507170119409](../../../image/image-20210507170119409.png)

![image-20210507170335955](../../../image/image-20210507170335955.png)

![image-20210507170455320](../../../image/image-20210507170455320.png)

###### useEffect 例子

![image-20210507170744223](../../../image/image-20210507170744223.png)

`ReactDOM.unmountComponentAtNode()` 卸载组件

###### useEffect 解决的问题

![image-20210507171347662](../../../image/image-20210507171347662.png)

###### useEffect 钩子函数的第二个参数

当数据发生改变的时候执行useEffect，第二个参数指定 具体数据发生改变时执行函数

只有指定数据发生变化时触发effect

```
useEffect(()=>{
	document.title = count;
},[count]);
```

###### useEffect 钩子函数结合异步函数

![image-20210508144837182](../../../image/image-20210508144837182.png)

##### 5.useMemo()

![image-20210508145324263](../../../image/image-20210508145324263.png)

```react

import React, { useState, useMemo } from "react";
// bool 的改变导致组件重新渲染，但是不会重新计算result，因为count 没发生变化
export default function App() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(true);
  const result = useMemo(() => {
    console.log("重新渲染了");
    return count * 2;
  }, [count]);
  return (
    <div>
      <span>
        {count} {result}
      </span>
      <span> {bool ? "真" : "假"} </span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          console.log("s");
          setBool(!bool);
        }}
      >
        reset
      </button>
    </div>
  );
}

```

##### 6.memo 方法

![image-20210508145926516](../../../image/image-20210508145926516.png)

```react
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span> {count} </span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <FooMemo />
    </div>
  );
}
const FooMemo = React.memo(Foo);
function Foo() {
  console.log("Foo 重新渲染");
  return <div>我是Foo组件</div>;
}

```

##### 7.useCallback钩子函数

![image-20210508150721002](../../../image/image-20210508150721002.png)

防止Counter组件重新渲染时，resetCount 函数重新生成导致Test组件重新渲染。

```react
import React, { useState, useCallback } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const resetCount = useCallback(() => {
    setCount(0);
  }, [setCount]);
  return (
    <div>
      <span> {count} </span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <FooMemo resetCount={resetCount} />
    </div>
  );
}
const FooMemo = React.memo(Foo);
function Foo(props) {
  console.log("Foo 重新渲染");
  return (
    <div>
      <button onClick={props.resetCount}>reset</button>
      我是Foo组件
    </div>
  );
}
```

##### 8.useRef()

1.绑定Dom 后者 类组件，函数组件不行，函数组件要用 `forwardRef()`

![image-20210508151301260](../../../image/image-20210508151301260.png)

2.保存数据，跨组件周期

```react
// 用useRef 保存 timerId
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  let timerId = null;
  useEffect(() => {
    timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);
  }, []);
  const stopCount = () => {
    clearInterval(timerId);
  };
  return (
    <div>
      {count}
      <button onClick={stopCount}>停止</button>
    </div>
  );
}

export default App;
```

#### 4.自定义hooks 

> 记忆点：自定义hooks是一个函数名以'use'字符串开头的js函数。

##### 1. FriendStatus 组件 与  FriendListItem 组件有相同的逻辑

```javascript
// FriendStatus 组件
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


// FriendListItem 组件

import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

```

##### 2.提取组件相同的逻辑

**A custom Hook is a JavaScript function whose name starts with ”`use`” and that may call other Hooks.**

Traditionally in React, we’ve had two popular ways to share stateful logic between components: [render props](https://reactjs.org/docs/render-props.html) and [higher-order components](https://reactjs.org/docs/higher-order-components.html). We will now look at how Hooks solve many of the same problems without forcing you to add more components to the tree.

When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!

```javascript
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

##### 3.使用自定义hooks

```javascript
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

##### 4.问题

1. **Do I have to name my custom Hooks starting with “`use`”?** 

   Please do. This convention is very important. Without it, we wouldn’t be able to automatically check for violations of [rules of Hooks](https://reactjs.org/docs/hooks-rules.html) because we couldn’t tell if a certain function contains calls to Hooks inside of it.

2. **Do two components using the same Hook share state?**

    No. Custom Hooks are a mechanism to reuse *stateful logic* (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

3. **How does a custom Hook get isolated state?** 

   Each *call* to a Hook gets isolated state. Because we call `useFriendStatus` directly, from React’s point of view our component just calls `useState` and `useEffect`. And as we [learned](https://reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables) [earlier](https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns), we can call `useState` and `useEffect` many times in one component, and they will be completely independent.

##### 5.Tips

1.  [Pass Information Between Hooks](https://reactjs.org/docs/hooks-custom.html#tip-pass-information-between-hooks)
2. [`useYourImagination()`](https://reactjs.org/docs/hooks-custom.html#useyourimagination)

[1]: https://reactjs.org/docs/hooks-custom.html

