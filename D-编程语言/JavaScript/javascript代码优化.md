1.`_event = callbackFn`  比 `_event = [callbackFn]` 节省空间,两个元素以上在用数组

eg: node 源码中 `events`的 on 事件



2.建立对象池



3.尾调用 tail call

https://stackoverflow.com/questions/42788139/es6-tail-recursion-optimisation-stack-overflow

https://baike.baidu.com/item/%E5%B0%BE%E8%B0%83%E7%94%A8/22718028?fr=aladdin

[JavaScript](https://baike.baidu.com/item/JavaScript?fromModule=lemma_inlink)则原本不支持尾调用优化，到其第6代语言核心标准“[ECMAScript 6](https://baike.baidu.com/item/ECMAScript 6?fromModule=lemma_inlink)”开始规定程序引擎应在严格模式下使用尾调用优化。而且ECMAScript 6限定了尾位置不含[闭包](https://baike.baidu.com/item/闭包?fromModule=lemma_inlink)的尾调用才能进行优化。 [2] 

https://2ality.com/2015/02/es6-classes-final.html

For example, a tail position call should only grow an implementation's activation record stack by the amount that the size of the target function's activation record exceeds the size of the calling function's activation record. If the target function's activation record is smaller, then the total size of the stack should decrease.

https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-preparefortailcall

https://stackoverflow.com/questions/37224520/are-functions-in-javascript-tail-call-optimized

4.[Using parseInt() with map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_parseint_with_map)



