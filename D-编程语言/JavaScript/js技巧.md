# js技巧

#### 深浅拷贝

1. ```Object.assign()``` 与 ```...```  深拷贝对象第一层，浅拷贝对象第二层的嵌套对象
2. ```JSON.parse(JSON.stringify(obj))``` 深拷贝

## !!

！可将变量转换成boolean类型，null、undefined和空字符串取反都为false，其余都为true。

！！常常用来做类型判断，在第一步!（变量）之后再做逻辑取反运算，在js中常常会写这样臃肿的代码：
判断变量a为非空，未定义或者非空串才能执行方法体的内容

```
var a;
if(a!=null&&typeof(a)!=undefined&&a!=''){
    //a有内容才执行的代码  
}
```

```
if(!!a){
    //a有内容才执行的代码...  
}
```

