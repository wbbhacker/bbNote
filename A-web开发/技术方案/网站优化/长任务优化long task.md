### [长任务优化](https://web.dev/articles/optimize-long-tasks)

#### 1.思想

##### 1.不用阻塞主线程

##### 2.分解长任务

#### 2.方案

##### 1.`setTimeout` 

 [involves using `postMessage()` for faster timeouts](https://dbaron.org/log/20100309-faster-timeouts).

```javascript
function processData () {
  for (const item of largeDataArray) {
    // Process the individual item here.
  }
}
```

##### 2.`requestIdleCallback

任务执行优先级最低



##### 3.`async/await`、`promise`

让出主线程

```javascript
function yieldToMain () {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
```

```javascript
async function saveSettings () {
  // A task queue of functions
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ];
  
  while (tasks.length > 0) {
    // Yield to a pending user input:
    if (navigator.scheduling.isInputPending()) {
      // There's a pending user input. Yield here:
      await yieldToMain();
    } else {
      // Shift the task out of the queue:
      const task = tasks.shift();

      // Run the task:
      task();
    }
  }
}
```

> `isInputPending()` may not always return `true` immediately after user input. This is because it takes time for the operating system to tell the browser that the interaction occurred. 

`isInputPending`不支持的情况

```javascript
async function saveSettings () {
  // A task queue of functions
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ];
  
  let deadline = performance.now() + 50;

  while (tasks.length > 0) {
    // Optional chaining operator used here helps to avoid
    // errors in browsers that don't support `isInputPending`:
    if (navigator.scheduling?.isInputPending() || performance.now() >= deadline) {
      // There's a pending user input, or the
      // deadline has been reached. Yield here:
      await yieldToMain();

      // Extend the deadline:
      deadline = performance.now() + 50;

      // Stop the execution of the current loop and
      // move onto the next iteration:
      continue;
    }

    // Shift the task out of the queue:
    const task = tasks.shift();

    // Run the task:
    task();
  }
}
```



##### 4.`web workers` 



##### [5.`scheduler`](https://developer.mozilla.org/en-US/docs/Web/API/Scheduler)

```javascript
function saveSettings () {
  // Validate the form at high priority
  scheduler.postTask(validateForm, {priority: 'user-blocking'});

  // Show the spinner at high priority:
  scheduler.postTask(showSpinner, {priority: 'user-blocking'});

  // Update the database in the background:
  scheduler.postTask(saveToDatabase, {priority: 'background'});

  // Update the user interface at high priority:
  scheduler.postTask(updateUI, {priority: 'user-blocking'});

  // Send analytics data in the background:
  scheduler.postTask(sendAnalytics, {priority: 'background'});
};
```

```javascript
async function saveSettings () {
  // Create an array of functions to run:
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics
  ]

  // Loop over the tasks:
  while (tasks.length > 0) {
    // Shift the first task off the tasks array:
    const task = tasks.shift();

    // Run the task:
    task();

    // Yield to the main thread with the scheduler
    // API's own yielding mechanism:
    await scheduler.yield();
  }
}
```





##### 6.`OffscreenCanvas`

[1]: https://web.dev/articles/optimize-long-tasks	"Optimize long tasks"

https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas

