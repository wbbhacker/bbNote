#### 1.vue3今年发布了，请你说一下他们之间在相应式的实现上有什么区别？

vue2采用的是defineProperty去定义get，set，而vue3改用了proxy。也代表着vue放弃了兼容ie。

#### 2.像vue-router，vuex他们都是作为vue插件，请说一下他们分别都是如何在vue中生效的？

通过vue的插件系统，用vue.mixin混入到全局，在每个组件的生命周期的某个阶段注入组件实例。

#### 3.请你说一下vue的设计架构

 vue2采用的是典型的混入式架构，类似于express和jquery，各部分分模块开发，再通过一个mixin去混入到最终暴露到全局的类上。

#### 4.写React / Vue 项目时为什么要在列表组件中写key，其作用是什么？

#### 5.聊聊Redux 和Vuex 的设计思想

#### 6.聊聊Vue 的双向数据绑定，Model 如何改变View，View 又是如何改变Model 的