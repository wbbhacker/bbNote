### js性能优化？

#### 1.`_event = callbackFn`  比 `_event = [callbackFn]` 节省空间,两个元素以上在用数组

eg: node 源码中 `events`的 on 事件



#### 2.建立对象池



#### 3.尾调用 tail call

https://stackoverflow.com/questions/42788139/es6-tail-recursion-optimisation-stack-overflow

https://baike.baidu.com/item/%E5%B0%BE%E8%B0%83%E7%94%A8/22718028?fr=aladdin

[JavaScript](https://baike.baidu.com/item/JavaScript?fromModule=lemma_inlink)则原本不支持尾调用优化，到其第6代语言核心标准“[ECMAScript 6](https://baike.baidu.com/item/ECMAScript 6?fromModule=lemma_inlink)”开始规定程序引擎应在严格模式下使用尾调用优化。而且ECMAScript 6限定了尾位置不含[闭包](https://baike.baidu.com/item/闭包?fromModule=lemma_inlink)的尾调用才能进行优化。 [2] 

For example, a tail position call should only grow an implementation's activation record stack by the amount that the size of the target function's activation record exceeds the size of the calling function's activation record. If the target function's activation record is smaller, then the total size of the stack should decrease.



#### 4.[Using parseInt() with map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_parseint_with_map)

#### 5.避免使用全局变量

#### 6.隐藏类与删除操作

#### 7.内存泄露

​	定时器跟闭包

#### 8.静态分配与对象池

#### 9.不使用with、少用try catch

#### 10.避免不正确的查找

#### 11.使用原生的方法

#### 12.优化循环

1. 多层条件判断用switch，别写很多个if

2. 多层嵌套循环，要最外面的循环次数少点。这样有利于CPU 的预测，运行速度更快。

   ```java
   public class BranchPrediction {
       public static void main(String args[]) {
           long start = System.currentTimeMillis();
           for (int i = 0; i < 100; i++) {
               for (int j = 0; j <1000; j ++) {
                   for (int k = 0; k < 10000; k++) {
                   }
               }
           }
           long end = System.currentTimeMillis();
           System.out.println("Time spent is " + (end - start));
   
           start = System.currentTimeMillis();
           for (int i = 0; i < 10000; i++) {
               for (int j = 0; j <1000; j ++) {
                   for (int k = 0; k < 100; k++) {
                   }
               }
           }
           end = System.currentTimeMillis();
           System.out.println("Time spent is " + (end - start) + "ms");
       }
   }
   ```

   ```java
   Time spent in first loop is 5ms
   Time spent in second loop is 15ms
   ```

   



