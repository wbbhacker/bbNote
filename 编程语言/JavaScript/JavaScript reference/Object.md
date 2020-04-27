# Object 对象

1. Object.defineProperty()

   ```javascript
   // 语法
   Object.defineProperty(obj, prop, descriptor)
   
   // 例子
    Object.defineProperty(obj, 'temperature', {
       value: 37, 
       writable: true, //是否可以修改
       enumerable: true, // 是否可以枚举
       configurable: true  //是否可以删除
       get() {
         return temperature;
       },
       set(value) {
       }
     });
   
   ```

2. Object.assign() 与 `...` 用法一致

   

