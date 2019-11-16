#Vue 项目实战--云缴费

> 王斌

## 技术集成

1. 框架 `Vue`、路由 `Vue-router` 、状态管理 `Vuex`  

2. UI 库`element-ui` 、`postcss`

3. Http库`axios`

4. 工具库 `lodash`

5. 单元测试 `chai` `mocha` `karma`、E2E `nightWatch`

6. 功能库

   1. 图表 `vue-echarts`

   2. 文件上传 `vue-upload-component`

      

## 项目目录结构

app

​	|-- public  // index.html  Template                                                         

​	|-- src 

​		  |-- api   // 请求模块

​		  |-- assets  // 静态资源                       

 		 |-- common  

​				|-- css  //全局css样式

​				|--utils  //工具方法

​		  |-- components  // 公用组件

 		 |-- store  // 状态管理

​          |-- views 

​          |-- App.vue

​          |-- main.js

​	|-- test

1. **api 文件夹**
   1. http.js.  // http请求/响应拦截,
      1. 请求header设置和响应状态码处理
      2. 合并method.js 传过来的config
   2. url.js  // 接口url 常量
      1. 公用url
      2. 页面url划分
   3. methods.js  // 请求方法, 封装请求方法
      1. 默认处理/不处理响应返回
      2. 默认/自定义方法配置config
      3. 是否请求loading
      4. 是否错误响应弹层
      5. 是否中断接口请求
      6. 设置重置次数
   4. index.js  api 出口
2.  