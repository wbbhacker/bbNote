## History

1. Properties

   1. Length

   2. scrollRestoration

      *auto*

      The location on the page to which the user has scrolled will be restored.

      *manual*

      The location on the page is not restored. The user will have to scroll to the location manually.

   3. state

      The **`History.state`** property returns a value representing the state at the top of the history stack.

      >The state at the top of the history stack. The value is [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) until the [`pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) or [`replaceState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) method is used.
      >
      > a size limit of **640k** characters on the serialized representation of a state object

2. Methods

   1. back()

   2. forward()

   3. go()在

   4. pushState()、replaceState()

      > 可以改变网址(存在跨域限制)而不刷新页面，这个强大的特性后来用到了单页面应用如：vue-router，react-router-dom中。
      >
      > **注意:仅改变网址,网页不会真的跳转,也不会获取到新的内容,本质上网页还停留在原页面!**

3. `onpopstate`

   `popstate`事件会在点击后退、前进按钮(或调用`history.back()`、`history.forward()`、`history.go()`方法)时触发。**前提是不能真的发生了页面跳转,而是在由`history.pushState()`或者`history.replaceState()`形成的历史节点中前进后退**

   > **注意:用`history.pushState()`或者`history.replaceState()`不会触发`popstate`事件。**

