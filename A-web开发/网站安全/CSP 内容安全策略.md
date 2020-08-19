### CSP 内容安全策略

#### 1.配置方法

- 方法一：配置 HTTP header  `Content-Security-Policy`

  配置好并启用后，不符合 CSP 的外部资源就会被阻止加载。

  > Content-Security-Policy-Report-Only
  >
  > 表示不执行限制选项，只是记录违反限制的行为。它必须与`report-uri`选项配合使用。

- 方法二：页面配置 `<meta>`  

  `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';"`

#### 2.原理

​	白名单制度，开发者告诉客户端，哪些资源可以加载和执行，等同于提供白名单。它的实现和执行由浏览器完成，开发者只需提供配置。

