Vue 项目实战--云缴费

#### 1.技术集成

1. 框架 `Vue`、路由 `Vue-router` 、状态管理 `Vuex`  

2. UI 库`element-ui` 、`postcss`

3. Http库`axios`

4. 工具库 `lodash`

5. 单元测试 `chai` `mocha` `karma`、E2E `nightWatch`

6. 功能库

   1. 图表 `vue-echarts`

   2. 文件上传 `vue-upload-component`

      

#### 2.项目目录结构

app

​	|-- public  // index.html  Template                                                         

​	|-- src 

​		  |-- api   // 请求模块

​		  |-- assets  // 静态资源                       

 		 |-- common  

​				|-- css  //全局css样式

​				|--utils  //工具方法

​		  |-- components  // 公用组件

 		 |-- router // 路由

 		 |-- store  // 状态管理

​          |-- views  // 页面

​                  --index.vue

​          		-- App.vue

​          |-- main.js  // 项目入口

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
      7. 请求参数是否加密
   4. index.js  api 出口
   
2. **store文件夹** `   export default new Vuex.Store({})`

   1. page.js 各个页面的store
   2. common.js 页面公用store
   3. index.js 合并所有子store，汇成总sotre

3. **Views文件夹** (各种vue 组件对象)

   1. page.vue 各个页面vue单文件

   2. 404页面
   3. login.vue 登录页面
   4. index.vue  内容页面
   5. `app.vue` 主页面（主路由）

4. **router 文件夹**

   1. 各模块路由
   2. index.js 路由汇总 `export default new Router()`
   
5. const.js 保存网站所有常量，包括 判断条件变量

   ```javascript
   const code = '000000'
   if(res.retCode = code){ do something}
   ```

   