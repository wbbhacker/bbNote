#### 1.说说浏览器和Node 事件循环的区别

https://segmentfault.com/a/1190000017893482

https://www.jianshu.com/p/b221e6e36dcb

#### 2.介绍模块化发展历程

#### 3.介绍下npm模块安装机制，为什么输入`npm  install`就可以自动安装对应的模块？

1. 发出`npm install` 命令查询`node_modules`目录之中是否已经存在制定模块
2. 若存在，不再重新安装
3. 若不存在
4. npm 向registry 查询模块压缩包的网址
5. 下载压缩包，存放在根目录下的`.npm`目录里
6. 解压压缩包到当前项目的`node_modules`目录 

