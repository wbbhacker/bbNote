### Vue首次渲染过程

#### 一、查看vue源代码准备工作

1. vue 源代码目录结构

   ```
   src
   	|-compiler		编译相关
   	|-core				Vue核心库
   	|-platforms		平台相关代码
   	|-server			SSR 服务端渲染
   	|-sfc					.vue文件编译为js 对象
   	|_shared 			公共代码
   ```

2. 安装依赖、开启代码地图

   - 安装依赖根目录执行`npm i`

   - 开启代码地图

     修改package.json 中的”dev“ 脚本 ，添加参数 `--sourcemap` 和 `-w`

     `"dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev"`

3. 代码格式问题

   - vsCode 安装 babel javascript 插件，能高亮flow、ts等

   - 设置vsCode 不检查js的语法问题，法制flow 报错，设Settings.json

     `javascript.validate.enable:false`

#### 二、demo 代码，打断点调试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app">
    Hello World
  </div>
  <script src="../../dist/vue.js"></script>
  <script>
      const vm = new Vue({
        el:'#app',
        tempalte:'<h1> Hello Template</h1>',
        render(h){
          return h('h1', 'Hello Render')
        }
      })
  </script>
</body>
</html>
```

#### 三、Vue 首次渲染过程（主分析 web端编译运行时版本）

​	从外到内依次是：

1. web 编译运行时入口文件为:`src/platforms/web/entry-runtime-with-compiler.js`，主要实现

   - 重写Vue 原型(prototype) `$mount` 方法，处理如配置项options 中无render ，则将template模板编译成render 函数

     `Vue.prototype.$mount `

   - Vue 注册 `compile` 静态方法，传递一个HTML字符串返回render 函数

     `Vue.compile` 

2. web运行时文件:`src/platforms/web/runtime/index.js`,主要实现

   - Vue.config  全局工具对象

   - Vue.options 注册 全局指令:`v-model`、`v-show`,全局组件 `v-transition`、`v-transition-group`

     `extend(Vue.options.directives, platformDirectives)`

     `extend(Vue.options.components, platformComponents)`

   - `Vue.prototype.__patch__` 把虚拟DOM 转化成真是DOM

   - `Vue.prototype.$mount` 方法

3. 与平台无关的核心文件：`src/core/index.js`,主要实现
   - 实现Vue 的静态方法：Vue.xxx  
   - Vue.prototype 添加`$isServer` 、`$ssrContext`

4. Vue 定义文件：`src/core/instance/index.js`, 主要实现

   - Vue 类
   - Vue.prototype 上添加各种方法
     - `initMixin(Vue)`  挂载  `Vue.prototype._init` 
     - `stateMixin` 挂载 `$data/$props/$set/$delete/$watch`
     - `eventsMixin` 挂载 `$on/$once/$off/$emit`
     - `lifecycleMixin` 挂载 `_update/$forceUpdate/ $destroy`
     - `renderMixin` 挂载 `$nextTick /_render`

   - `Vue.prototype._init`   方法主要为Vue 的实例 添加各种属性和方法，并执行 `$mount` 

#### 四、总结

```javascript
function Vue(){
	//Vue实例初始化 Vue.prototype._init 函数中实现
  //文件路径：src/core/instance/init.js 
	this.x1 = xx
}
// Vue 原型继承的函数主要在 initMixin、stateMixin、eventsMixin、lifecycleMixin、renderMixin中实现
// 文件路径:src/core/instance/index.js
Vue.prototype.x1 = 
  
// Vue 的静态方法 在主要 initGlobalAPI(Vue) 中实现
// 文件路径：src/core/index.js
Vue.x4 = 
new Vue()
```



