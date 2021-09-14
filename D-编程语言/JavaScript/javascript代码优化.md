1.`_event = callbackFn`  比 `_event = [callbackFn]` 节省空间,两个元素以上在用数组

eg: node 源码中 `events`的 on 事件