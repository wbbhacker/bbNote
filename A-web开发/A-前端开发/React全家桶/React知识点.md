### React 知识点

#### 1.react 循环 用map 

```react
<select>
  {
    config.CUSTOMER_ID_TYPE.map((item, index) => {
      return (
      	<option value={item.value} key={item, index}>{item.label}</option>
      );
    })
  }
</select>
```

#### 2.Prop 的类型检查 与默认值

```javascript
// 类组件
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};

MyComponent.defaultProps = {
	children:<span>chilren</span>,
}

// 函数组件
import PropTypes from 'prop-types'

function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string
}

export default HelloWorldComponent

```

#### 3.React中父组件调用子组件方法

 https://juejin.cn/post/6844904186564329486

https://codeburst.io/a-complete-guide-to-props-children-in-react-c315fab74e7c

https://medium.com/@nugen/react-hooks-calling-child-component-function-from-parent-component-4ea249d00740

```
举 superset 的例子
```

#### 4.React 中子组件调用父组件方法

#### 5.函数组件异步调用 实现setState回调

#### 6.`props.children`

https://codeburst.io/a-complete-guide-to-props-children-in-react-c315fab74e7c

#### 7.**Capture Value**

https://blog.csdn.net/hl971115/article/details/104564923

https://segmentfault.com/a/1190000018639033
