### js技巧

#### 1.深浅拷贝

1. ```Object.assign()``` 与 ```...```  深拷贝对象第一层，浅拷贝对象第二层的嵌套对象
2. ```JSON.parse(JSON.stringify(obj))``` 深拷贝

#### 2.!!

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

#### 3.for 跳出多层循环

##### 1.单层循环

1. for循环中return语句：会直接跳出循环，因为js中for是没有局部作用域的概念的，所以只有把for循环放在函数中时，才可以在for循环中使用return语句。
2. for循环中的break语句：和return一样会直接跳出循环与return不同的是，使用break时，for循环可以不用一定放在函数中。

##### 2.多层循环

1. return：和单层循环一样必须放在函数中，否则将会报语法错误。

2. break语句：和单层循环一样，可以不用放在函数中但是在多层循环中与return不同的是，break不是跳出函数，而是跳出最里层的for循环，外面的循环和最外层for循环后面的语句也将继续执行。

#### 4.`mouseOver`有时比 `mouseEnter`管用

