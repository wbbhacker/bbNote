### 1.为什么不能在循环、判断内部使用Hooks

https://juejin.cn/post/6844903975838285838#heading-2

https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e

- **Don’t call Hooks inside loops, conditions, or nested functions**
- **Only Call Hooks from React Functions**

https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/

### 2.Evenbus是什么东西？

EventBus（事件总线）是一种在软件架构中用于组件间通信的模式或工具。它通常被用于解耦组件之间的直接依赖关系，使得组件之间可以更灵活地进行通信和交互。

在前端开发中，特别是在Vue.js等现代JavaScript框架中，EventBus通常指的是一个全局事件总线实例，用于在不同组件之间进行通信。它可以帮助组件之间进行解耦，使得组件的通信更加简单和灵活。

EventBus通常具有以下特点：

1. **全局单例：** EventBus通常是一个全局单例对象，可以在应用的任何地方被访问和使用。
2. **发布订阅模式：** EventBus基于发布-订阅模式，它允许组件订阅特定类型的事件，并在其他组件发布该类型的事件时接收到通知。
3. **事件类型：** EventBus通常支持多种事件类型，开发者可以自定义事件类型来满足不同的需求。
4. **异步通信：** EventBus通常支持同步和异步两种通信方式，使得组件之间的通信更加灵活。

在Vue.js中，可以使用Vue实例作为EventBus，通过`$emit`方法触发事件，通过`$on`方法监听事件，从而实现组件之间的通信。例如：

```javascript
// 创建一个全局的EventBus实例
const EventBus = new Vue();

// 在组件A中发布事件
EventBus.$emit('event-name', eventData);

// 在组件B中订阅事件
EventBus.$on('event-name', eventData => {
  // 处理事件数据
});
```

总之，EventBus是一种用于在组件间进行解耦的通信机制，它可以帮助开发者构建更灵活和可维护的应用程序。

[1]: https://gugiegie.gitee.io/frontend/frontend/framework/react.html#_1-setstate%E6%98%AF%E5%90%8C%E6%AD%A5%E8%BF%98%E6%98%AF%E5%BC%82%E6%AD%A5

### [3.Fiber](https://juejin.cn/post/7258881840823844920#heading-0)





[1]: https://juejin.cn/post/7212918899867041849#heading-21	"一文讲通React的diff过程"

