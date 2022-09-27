### React

#### 1.创建HTML元素 React.createElement() 与 JSX 

#### 2.更新视图方法

1.  ReactDOM.render()
2. 阻止视图渲染`return null` 

#### 3.Function and Class Components

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

//Props are Read-Only
```

#### 4.生命周期、state、props

```javascript
componentDidMount()
componentWillUnmount()
```

#### 5.Handing Events

```javascript
// 绑定this 方法一
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

// 绑定this 方法二
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
// 绑定this 方法三

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

```

#### 6.组件概念

##### 1.stateful compnent and stateless component 有状态组件和无状态组件

##### 2.class component and function component 类组件和函数组件

##### 3.regular component and PureComponent 普通组件和纯组件

If you use *React.Component* then the child component is also re-rendered if the parent component re-renders itself but in the React.PureComponent, the child component only re-renders if the props passed to it changes.

