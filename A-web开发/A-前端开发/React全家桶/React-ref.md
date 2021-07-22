### 1.为什么要使用refs

1. 获取react component 实例
2. 获取Dom element

### 2.使用场景

1. 对DOM 元素焦点的控制、内容选择或者媒体播放；
2. 通过对DOM元素控制，触发动画特效；
3. 通第三方DOM库的集成

### 3.使用方法

#### 1.`React.createRef()`

```react
class childrenCp extends React.Component {
  render(){
    return <input placeholder="请输入"></input>;
  }
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.inputRef = React.createRef();
  }
  componentDidMount(){
    console.log(this.myRef)
    console.log(this.inputRef)
  }
  render() {
    return <div ref={this.myRef} >
      				<childrenCp />
      		 </div>
  }
}
```

 1. ref 被直接用在HTML element上，通过`ref.current`访问DOM node。

 2. ref 被直接用在 a custom class component 上，通过`ref.current` 访问组件实例。

 3. ref 不可以被用在function component 上，因为函数组件没有实例。

    函数组件 引用 ref 的方法

    ```react
    function FancyInput(props, ref) {
      const inputRef = useRef();
      useImperativeHandle(ref, () => ({
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

    ```react
    function FancyInput(props, ref) {
      return <input ref={ref} ... />;
    }
    FancyInput = forwardRef(FancyInput);
    
    // FancyInput 这样就可以在FancyInput 组件上使用ref了  
    // 相比于上面一种方式，上面的直接返回对象，可以返回定义的事件供父组件调用。
    <FancyInput ref={inputRef} />  
    ```

#### 2.`React.forwardRef()`

1.Forwarding refs to DOM components

Although such encapsulation is desirable for application-level components like `FeedStory` or `Comment`, it can be inconvenient for highly reusable “leaf” components like `FancyButton` or `MyTextInput`. These components tend to be used throughout the application in a similar manner as a regular DOM `button` and `input`, and accessing their DOM nodes may be unavoidable for managing focus, selection, or animations.

高度重复使用的叶子结点，如按钮，更倾向于操作Dom等。

```react
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```



2.Forwarding refs in higher-order components

```react
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}
```

> That’s because `ref` is not a prop. Like `key`, it’s handled differently by React.

#### 3.`useRef()`

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

注意：`useRef` 不会监听它的内容变化，修改它的`.current` 属性不会引起组件的重新渲染。如果你想将ref附加或分离到DOM节点上运行一些代码，需要用`callbask ref`

#### 4.`callback ref`

React will call the `ref` callback with the DOM element when the component mounts, and call it with `null` when it unmounts. Refs are guaranteed to be up-to-date before `componentDidMount` or `componentDidUpdate` fires.

```javascript
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // autofocus the input on mount
    this.focusTextInput();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

```javascript
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
```

