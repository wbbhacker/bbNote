### [1.React.memo](https://reactjs.org/docs/react-api.html#reactmemo)

`React.memo` only checks for prop changes. If your function component wrapped in `React.memo` has a [`useState`](https://reactjs.org/docs/hooks-state.html), [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer) or [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) Hook in its implementation, it will still rerender when state or context change.

### [2.Creating React Elements](https://reactjs.org/docs/react-api.html#creating-react-elements)

#### [1.createElement](https://reactjs.org/docs/react-api.html#createelement)

```react
React.createElement(
  type,
  [props],
  [...children]
)
```

Create and return a new [React element](https://reactjs.org/docs/rendering-elements.html) of the given type. The type argument can be either a tag name string (such as `'div'` or `'span'`), a [React component](https://reactjs.org/docs/components-and-props.html) type (a class or a function), or a [React fragment](https://reactjs.org/docs/react-api.html#reactfragment) type.     

#### [2.cloneElement](https://reactjs.org/docs/react-api.html#cloneelement)

> `React.createFactory(type)` 废弃

#### [3.`isValidElement()`](https://reactjs.org/docs/react-api.html#isvalidelement)

#### [4.`React.Fragment`](https://reactjs.org/docs/react-api.html#reactfragment)

The `React.Fragment` component lets you return multiple elements in a `render()` method without creating an additional DOM element:

```react
render() {
  return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
  );
}
```

You can also use it with the shorthand `<></>` syntax. 

### [3.`React.Children`](https://reactjs.org/docs/react-api.html#reactchildren)

`React.Children` provides utilities for dealing with the `this.props.children` opaque data structure.

### [4.Suspense](https://reactjs.org/docs/react-api.html#suspense)





