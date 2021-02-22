1.工作线程的类型

- 专用工作者线程‘

  DedicatedWorkerGlobalScope

  new Worker

- 共享工作者线程

  SharedWorkerGlobalScope

  new SharedWorkder

- 服务工作者线程

  ServiceWorkerGlobalScope

  navigator.serviceWorker.register

全局对象是：WorkerGlobalScope

onmessage：该事件会在工作者线程向父上下文发送消息时发生。

postMessage：用于通过异步消息事件向工作者线程发送信息。

terminate

在 JavaScript 中，有三种在上下文间转移信息的方式：

1. 结构化克隆算法（structured clone algorithm）
2. 可转移对象（transferable objects）
3. 共享数组缓冲区（shared array buffers）。