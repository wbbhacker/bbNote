#### 1.vue3今年发布了，请你说一下他们之间在相应式的实现上有什么区别？

vue2采用的是defineProperty去定义get，set，而vue3改用了proxy。也代表着vue放弃了兼容ie。

https://www.cnblogs.com/cxddgz/p/13153570.html

#### 2.像vue-router，vuex他们都是作为vue插件，请说一下他们分别都是如何在vue中生效的？

通过vue的插件系统，用vue.mixin混入到全局，在每个组件的生命周期的某个阶段注入组件实例。

#### 3.请你说一下vue的设计架构

 vue2采用的是典型的混入式架构，类似于express和jquery，各部分分模块开发，再通过一个mixin去混入到最终暴露到全局的类上。

#### 4.写React / Vue 项目时为什么要在列表组件中写key，其作用是什么？

#### 5.聊聊Redux 和Vuex 的设计思想

#### 6.聊聊Vue 的双向数据绑定，Model 如何改变View，View 又是如何改变Model 的

#### 6.vue 单向流与双向流

https://www.cnblogs.com/xuefang-yang/p/13048510.html

看到网上很多人讨论vue是双向数据绑定，怎么又是单向数据流呢？ 其实，这两个是不同的概念，双向绑定是model改变view自动更新，view改变model自动更新；而单向数据流指的父组件传值给子组件，子组件不能修改这个值，二父组件修改这个值的话子组件也会受影响，这个影响是单向的，只能从父组件流向子组件，不能反向。

**react是单向数据绑定**

**react和vue都是单向数据流**

