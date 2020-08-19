#### 1.LocalStorage 和 SessionStorage 

1. 不同浏览器无法共享**localStorage**或**sessionStorage**中的信息。

2. 相同浏览器下，**同源的不同页面间**可以共享相同的 **localStorage**，

   不同页面或标签页间无法共享sessionStorage的信息，同标签页下同源iframe 可共享sessionStorage

3. **localStorage** 数据永久保存、clear()清空

   **sessionStorage** 窗口或标签页关闭数据被清空

#### 2.storage 事件

- storage 触发条件
  - 同一浏览器同源a、b两个页面
  - a注册storage 事件，b页面修改localStorage或sessionStorage 时触发
- `window.addEventListener('storage')`  `window.onStorage`



