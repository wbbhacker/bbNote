### React 基本用法

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

#### 8.延迟渲染组件

```react
// 延迟loading的渲染，以避免数据请求过快造成 loading 一闪。
const DataComponent = ({ url, fallback, fallbackDelay }) => {
  const [data, setData] = useState(null);
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    let unmounted = false;
    fetch(url)
      .then(res => res.json())
      .then(data => !unmounted && setData(data))
      .catch(console.error);
    return () => (unmounted = true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), fallbackDelay);
    return () => clearTimeout(timeout);
  }, []);

  return data ? <pre>JSON.stringify(data, null, 2)</pre> : !delayed && fallback;
};
// 即500ms 请求回来的数据 不会显示loading 
<DataComponent url="http://domain/data" fallback={<p>Loading...</p>} fallbackDelay={500} />;
```

```react
// 自定义hooks
const useDelayedRender = delay => {
  const [delayed, setDelayed] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, []);
  return fn => !delayed && fn();
};
const DelayedRender = ({ delay, children }) => useDelayedRender(delay)(() => children);


// 很常用的组合
const Component = lazy(() => import("./some-large-component"));
<Suspense fallback={<DelayedRender delay={500}>Loading...</DelayedRender>}>
  <Component />
</Suspense>
```

#### 9.防抖节流组件

npm **[ react-debounce-render](https://github.com/podefr/react-debounce-render)** 解决防抖

```tsx
import React, { Component, ComponentType } from 'react';
import _debounce from 'lodash.debounce';
import { DebounceSettings } from 'lodash';

import hoistNonReactStatics from 'hoist-non-react-statics';

function debounceRender<T>(ComponentToDebounce: ComponentType<T>, wait?: number, debounceArgs?: DebounceSettings): ComponentType<T> {
    class DebouncedContainer extends Component<T> {
        public static readonly displayName = `debounceRender(${ ComponentToDebounce.displayName || ComponentToDebounce.name || 'Component' })`;
        updateDebounced = _debounce(this.forceUpdate, wait, debounceArgs);

        shouldComponentUpdate() {
            this.updateDebounced();
            return false;
        }

        componentWillUnmount() {
            this.updateDebounced.cancel();
        }

        render() {
            return <ComponentToDebounce {...this.props} />;
        }
    }

    return hoistNonReactStatics(DebouncedContainer, ComponentToDebounce);
};

export const debounce = (wait?: number, debounceArgs?: DebounceSettings) => <T extends unknown>(ComponentToDebounce: ComponentType<T>) =>
  debounceRender(ComponentToDebounce, wait, debounceArgs);

export default debounceRender;
```



[1]: https://blog.logrocket.com/how-and-when-to-debounce-or-throttle-in-react/













