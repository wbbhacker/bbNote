### 1.antd table 删除功能错乱

这是因为table 组件未指定 `rowKey`

![image-20220623162616305](../../../image/image-20220623162616305.png)

```jsx
    <Table rowKey='id' dataSource={data} columns={TableColums}></Table>
```

### 2.`<Input>` onChange 事件执行 setState 会导致输入很卡顿。

使用`onBlur`事件

#### 3.Dropdown、select下拉相对于父元素滚动,设置`getPopupContainer`属性

```react
<Dropdown overlay={menu} placement="bottomLeft" trigger={['click']} getPopupContainer={triggerNode => triggerNode.parentNode}>
```

