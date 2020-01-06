# ArrayBuffer、TypedArray、DataView

1. 什么是ArrayBuffer？

   > 带类型的高速数组

   ```javascript
   //ArrayBuffer是一块内存,下面是开辟了1kb大小的内存
   //不能通过buf变量的索引去操作这块内存
   //要访问ArrayBuffer，需要用到 Typed Array
   var buf = new ArrayBuffer(1024)
   var view   = new Int32Array(buffer);
   ```

   