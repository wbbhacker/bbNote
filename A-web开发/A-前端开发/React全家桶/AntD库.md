### 1.antd table 删除功能错乱

这是因为table 组件未指定 `rowKey`

![image-20220623162616305](../../../image/image-20220623162616305.png)

```jsx
    <Table rowKey='id' dataSource={data} columns={TableColums}></Table>
```

