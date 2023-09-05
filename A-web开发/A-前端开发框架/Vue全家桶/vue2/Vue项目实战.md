Vue 项目实战--云缴费

### 1.技术集成

1. 框架 `Vue`、路由 `Vue-router` 、状态管理 `Vuex`  

2. UI 库`element-ui` 、`postcss`

3. Http库`axios`

4. 工具库 `lodash`

5. 单元测试 `chai` `mocha` `karma`、E2E `nightWatch`

6. 功能库

   1. 图表 `vue-echarts`

   2. 文件上传 `vue-upload-component`

      

### 2.项目目录结构

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

### 3.Vue-CLI3 和 Vue Test Utils 用 Karma 测试单文件组件

#### 安装与配置

##### 1.安装依赖包

```javascript
npm install --save-dev @vue/test-utils karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha karma-chai chai
```

##### 2.在`package.json` 定义一个测试脚本

```javascript
// package.json
{
  "scripts": {
    "test": "karma start --single-run"
  }
}
```

##### 3.在项目的主目录创建一个 `karma.conf.js` 文件

```	
// karma.conf.js

let webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],

    files: ['test/**/*.spec.js'],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec'],

    browsers: ['Chrome']
  })
}
```

#### 测试用例

##### 1.在 `src` 中创建一个名为 `Counter.vue` 的文件

``` javascript
<template>
  <div>
    {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },

    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>
```

##### 2.然后添加一个名为 `test/Counter.spec.js` 的测试文件

```javascript
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).contains('1')
  })
})
```

##### 3.运行测试

```javascript
npm run test
```

```
[GitHub](http://github.com)
```

> 参考文章
>
> [Vue Test Utils官方文档](https://vue-test-utils.vuejs.org/zh/guides/#用-karma-测试单文件组件)

### 4.vue-cli3 修改 eslint配置

##### 1.在项目根目录下package.json文件

```javascript
rules: {
    "规则名": [规则值, 规则配置]
}

/*
 规则值
"off"或者0    //关闭规则关闭
"warn"或者1    //在打开的规则作为警告（不影响退出代码）
"error"或者2    //把规则作为一个错误（退出代码触发时为1）
*/
```

##### 2.规则值

```javascript
"off"或者0    //关闭规则关闭
"warn"或者1    //在打开的规则作为警告（不影响退出代码）
"error"或者2    //把规则作为一个错误（退出代码触发时为1）
```

##### 3.实例

1. 不检测 "console"、"定义变量但未使用"

```javascript
"eslintConfig":{
  "rules": {
    "no-unused-vars": 0,
    "no-console": [
      0,
      "log",
      "error"
    ]
  }
}

```
2. 全局不检测 "未定义变量直接使用" 如 _ 、_htm

```javascript
"eslintConfig":{
  "globals":{
    "_hmt":"writable",
    "_":"writable"
  }
}

```

> 单个文件不检测 的话，在js最上面加上 `/* global _, _htm */`

### 5.项目放到网站子目录

```nginx
#nginx 配置
location /datasource {
            alias /Users/binbin.wang/workspace/work-1/ai-doc/build/datasource;
            index index.html index.htm;
        }
```

webpack 打包设置 `PUBLIC_URL='/datasource'` ,`public_url` 指定页面静态资源加载路径

访问路径为 `http://localhost:3000/datasource` 
