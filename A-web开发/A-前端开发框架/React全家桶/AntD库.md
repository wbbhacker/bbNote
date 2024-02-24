### 1.antd table 删除功能错乱

这是因为table 组件未指定 `rowKey`

![image-20220623162616305](../../../image/image-20220623162616305.png)

```jsx
    <Table rowKey='id' dataSource={data} columns={TableColums}></Table>
```

### 2.`<Input>` onChange 事件执行 setState 会导致输入很卡顿。

使用`onBlur`事件

### 3.Dropdown、select下拉相对于父元素滚动,设置`getPopupContainer`属性

```react
<Dropdown overlay={menu} placement="bottomLeft" trigger={['click']} getPopupContainer={triggerNode => triggerNode.parentNode}>
```

### 4.自定义组件

1. antd 组件中的`defaultValue` 值，不会触发 `onChange` 事件 

2. antd 组件中的 value 优先级高于defaultValue.
3. Input组件 中 value 改变会触发change(prevValue+changeValue), 但是从外面修改value值 不会触发change


### 5.`popover` 组件的`getPopupContainer` 属性 有时会造成页面卡死情况

```react
<Popover
                visible={visible}
                // getPopupContainer={() => {
                //     return popRef.current
                // }}
                placement='bottomLeft'
                title={null}
                trigger='click'
                content={() => {
                    return (
                        <Content
                            options={options}
                            value={value}
                            onChange={onChange}
                        ></Content>
                    )
                }}
            >
```

