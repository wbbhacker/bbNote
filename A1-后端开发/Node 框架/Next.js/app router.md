#### 1.不能再服务端组件使用的情况

##### 1.antd 库 不能用在server Component中

##### 2.css-in-js 不能再server component 中

 CSS-in-JS libraries which require runtime JavaScript are not currently supported in Server Components.

#### 2.只有文件夹下有`page.js` 的才可以作为路由

#### [3.在app router 中默认为`server components`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages) 

- Pages are [Server Components](https://nextjs.org/docs/getting-started/react-essentials) by default but can be set to a [Client Component](https://nextjs.org/docs/getting-started/react-essentials#client-components).