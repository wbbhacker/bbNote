## 一、[Commonly Used Lifecycle Methods](https://reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods)

### 1.`reander()`

在类组件中唯一必需的方法。`render()`应该是纯函数，不应该在render函数里面修改组件的`state`,在每次被调用时应返回相同的结果，且不应该直接与浏览器交互。

> `render()` will not be invoked if [`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) returns false.

When called, it should examine `this.props` and `this.state` and return one of the following types:

1. **React elements**

2. **Arrays and fragments**

3. **Portals**

   Let you render children into a different DOM subtree. See the documentation on [portals](https://reactjs.org/docs/portals.html) for more details.

4. **String and numbers.**

   These are rendered as text nodes in the DOM.

5. **Booleans or `null`**.

   Render nothing.

### 2.`constructor()`

如果你不初始化State、不绑定方法，不需要实现`constrcutor()`方法。

`constructor()`在类组件被mounted前，被调用。且必须在最上面调用`super(props) `，否则`this.props`为`undefined`在constructor中。

#### 1.初始化本地state

在`constructor` 中不要调用 `setState` ,直接用 `this.state` 修改即可（唯一可以直接调用this.state的地方）。在其他所有方法中你需要用`setState` 修改。

```javascript
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

> 注意：不要复制`props`到`state`上。
>
> ```javascript
> constructor(props) {
>  super(props);
>  // Don't do this!
>  this.state = { color: props.color };
> }
> ```
>
> 原因：
>
> 1. 可以直接使用`this.props.color` 
> 2. 会出现bug：更新color prop时不会映射到 state上

##### 1.[**完全不受控组件的解决方法：**](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)

###### 1.添加一个 `key` 属性

```react
class EmailInput extends Component {
  state = { email: this.props.defaultEmail };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }
}

<EmailInput
  defaultEmail={this.props.user.email}
  key={this.props.user.id}
/>
```

###### 2.Reset uncontrolled component with an ID prop

If `key` doesn’t work for some reason (perhaps the component is very expensive to initialize), a workable but cumbersome solution would be to watch for changes to “userID” in `getDerivedStateFromProps`:

```react
class EmailInput extends Component {
  state = {
    email: this.props.defaultEmail,
    prevPropsUserID: this.props.userID
  };

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.userID !== state.prevPropsUserID) {
      return {
        prevPropsUserID: props.userID,
        email: props.defaultEmail
      };
    }
    return null;
  }

  // ...
}
```

###### 2.Reset uncontrolled component with an instance method

```javascript
class EmailInput extends Component {
  state = {
    email: this.props.defaultEmail
  };

  resetEmailForNewUser(newEmail) {
    this.setState({ email: newEmail });
  }

  // ...
}
```

#### 2.给实例绑定事件 Binding event handler

```react
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

### 3.`componentDidMount()`

1. `componentDidMount()` is invoked immediately after a component is mounted (inserted into the tree). 

2. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

3. This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in `componentWillUnmount()`.
4. You **may call `setState()` immediately** in `componentDidMount()`. It will trigger an extra rendering, **but it will happen before the browser updates the screen.** This guarantees that even though the `render()` will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues. In most cases, you should be able to assign the initial state in the `constructor()` instead. It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.

### 4.`componentDidUpdate()`

1. `componentDidUpdate()` is invoked immediately after updating occurs. This method is not called for the initial render.

2. Use this as an opportunity to operate on the DOM when the component has been updated. 

3. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

   ```react
   componentDidUpdate(prevProps) {
     // Typical usage (don't forget to compare props):
     if (this.props.userID !== prevProps.userID) {
       this.fetchData(this.props.userID);
     }
   }
   ```

4. You **may call `setState()` immediately** in `componentDidUpdate()` but note that **it must be wrapped in a condition** like in the example above, or you’ll cause an infinite loop. It would also cause an extra re-rendering which, while not visible to the user, can affect the component performance. If you’re trying to “mirror” some state to a prop coming from above, consider using the prop directly instead. 

5. If your component implements the `getSnapshotBeforeUpdate()` lifecycle (which is rare), the value it returns will be passed as a third “snapshot” parameter to `componentDidUpdate()`. Otherwise this parameter will be undefined.

6. `componentDidUpdate()` will not be invoked if [`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) returns false.

### 5.`componentWillUnmount()`

1.`componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed. 

> Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()`.

2.You **should not call `setState()`** in `componentWillUnmount()` because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again

## 二、[Rarely Used Lifecycle Methods](https://reactjs.org/docs/react-component.html#rarely-used-lifecycle-methods)

### 1.[`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

1. `shouldComponentUpdate()` is invoked before rendering when new props or state are being received.efaults to `true`. This method is not called for the initial render or when `forceUpdate()` is used.
2. This method only exists as a **[performance optimization](https://reactjs.org/docs/optimizing-performance.html).** Do not rely on it to “prevent” a rendering, as this can lead to bugs. **Consider using the built-in [`PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent)** instead of writing `shouldComponentUpdate()` by hand. `PureComponent` performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.
3. If you are confident you want to write it by hand, you may compare `this.props` with `nextProps` and `this.state` with `nextState` and return `false` to tell React the update can be skipped. **Note that returning `false` does not prevent child components from re-rendering when *their* state changes.**
4. We do not recommend doing deep equality checks or using `JSON.stringify()` in `shouldComponentUpdate()`. It is very inefficient and will harm performance.
5. Currently, if `shouldComponentUpdate()` returns `false`, then [`UNSAFE_componentWillUpdate()`](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate), [`render()`](https://reactjs.org/docs/react-component.html#render), and [`componentDidUpdate()`](https://reactjs.org/docs/react-component.html#componentdidupdate) will not be invoked.

### 2.`static getDerivedStateFromProps()`

1. `getDerivedStateFromProps` is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or `null` to update nothing.
2. Deriving state leads to verbose code and makes your components difficult to think about. [Make sure you’re familiar with simpler alternatives:](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
   1. if you need to **perform a side effect** (for example, data fetching or an animation) in response to a change in props, use [`componentDidUpdate`](https://reactjs.org/docs/react-component.html#componentdidupdate) lifecycle instead.
   2. If you want to **re-compute some data only when a prop changes**, [use a memoization helper instead](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization).
   3. If you want to **“reset” some state when a prop changes**, consider either making a component [fully controlled](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) or [fully uncontrolled with a `key`](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) instead.

### 3.`getSnapshotBeforeUpdate`

`getSnapshotBeforeUpdate()` is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle method will be passed as a parameter to `componentDidUpdate()`.

## 三、boundaries

### 1.`getDerivedStateFromError`（）

### 2.`componentDidCatch`

## 四、Other APIs

### 1.setState()

1. `setState` 不会立即更新组件，可能会批量更新或推迟更新。

    Instead, use `componentDidUpdate` or a `setState` callback (`setState(updater, callback)`), either of which are guaranteed to fire after the update has been applied

2. `setState()` will always lead to a re-render unless `shouldComponentUpdate()` returns `false`.

3. The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered. Generally we recommend using componentDidUpdate() for such logic instead.

#### [1.The Data Flows Down](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down) 为什么react 是”单向数据流“或“自顶向下”数据流

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

父组件和子组件都无法知道某个组件是有状态的还是无状态的，并且他们不应该关心它是定义为函数还是类。

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

这就是为什么状态通常被称为本地或封装的。 除了拥有和设置它的组件之外，任何组件都无法访问它。

This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

这通常称为“自顶向下”或“单向”数据流。 任何状态始终由某个特定组件拥有，并且从该状态派生的任何数据或 UI 只能影响树中“低于”它们的组件。

### [2.forceUpdate()](https://reactjs.org/docs/react-component.html#forceupdate)

1. 如果`reader()` 依赖除了`state` 和 `props`之外的其它数据，可以使用`forceUpdate（）` 告诉组件重新渲染。
2. Calling `forceUpdate()` will cause `render()` to be called on the component, skipping `shouldComponentUpdate()`. This will trigger the normal lifecycle methods for child components, including the `shouldComponentUpdate()` method of each child. React will still only update the DOM if the markup changes. 

## 五、Class Propertires

### 1.defaultProps

`defaultProps` can be defined as a property on the component class itself, to set the default props for the class. 

### 2.displayName

The `displayName` string is used in debugging messages.

## 六、Instance Properties

### 1.props

1. In particular, `this.props.children` is a special prop, typically defined by the child tags in the JSX expression rather than in the tag itself.

2. [**Props are Read-Only**](https://reactjs.org/docs/components-and-props.html#props-are-read-only)

   Whether you declare a component [as a function or a class](https://reactjs.org/docs/components-and-props.html#function-and-class-components), it must never modify its own props.

   A component should manage its own state, but it should not manage its own props. `props` is essentially "state that is managed by the component owner." That's why props are *immutable*.

   [1]: https://codeburst.io/a-complete-guide-to-props-children-in-react-c315fab74e7c	"sldjs"

   

   

### 2.state

1. 不用直接修改`state`,用`setState` 去修改。

   ```react
   // Wrong
   this.state.comment = 'Hello';
   // Correct
   this.setState({comment: 'Hello'});
   ```

2. State 可能异步更新

   React may batch multiple `setState()` calls into a single update for performance.

   Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

   ```javascript
   // Wrong
   this.setState({
     counter: this.state.counter + this.props.increment,
   });
   
   // Correct
   this.setState((state, props) => ({
     counter: state.counter + props.increment
   }));
   
   // Correct
   this.setState(function(state, props) {
     return {
       counter: state.counter + props.increment
     };
   });
   ```

   











