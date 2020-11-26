###Mock.js

1. **Mock.js 拦截ajax 原理**

   自己实现XMLHttpRequest，替换原来的XMLHttpRequest，从而达到拦截目的。源代码如下：

   ```javascript
   // ./mock/xhr文件代码    
   		//备份原生 XMLHttpRequest，
   window._XMLHttpRequest = window.XMLHttpRequest
   window._ActiveXObject = window.ActiveXObject
   
   
   // index.js
   var XHR
   if (typeof window !== 'undefined') XHR = require('./mock/xhr')
   
   		// 拦截 XHR
   if (XHR) window.XMLHttpRequest = XHR
   ```

   

