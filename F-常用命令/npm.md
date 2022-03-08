## npm

### 1.npm 知识

##### 全局安装路径

​	Mac上npm 包的全局安装路：径`usr/local/lib/node_modules`

##### --save与--save-dev 的区别

​	--save 添加到 dependencies 中,记录的都是项目运行时需要的文件

​	--save-dev 添加到

##### 库的版本控制

​	`>=` `^` `*`

http://www.conardli.top/blog/article/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%EF%BC%88%E4%B8%80%EF%BC%89npm%E5%8C%85%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%EF%BC%9F.html

### 2.常用命令

##### 1.npm install

​	Nom install moduleName 安装 moduleName 模块. -g 为全局安装

##### 2.npm list

​	列出已安装模块

##### 3.npm show

​	npm show moduleName 显示 moduleName 模块详情

##### 4.npm config

​	npm show  ls 查看安装路径

##### 5.npm link

1. 功能

   在本地开发npm模块的时候，我们可以使用npm link命令，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试

2. 在这里，我们有两个项目，一个是`npm-link-module`，是我们要开发的npm模块,另一个是`npm-link-example`,是我们要运行npm模块的项目。

   1. 首先，进入我们的`npm-link-module`项目，执行npm link
   2. 然后，进入`npm-link-example`项目，执行 npm link npm-link-module

##### 6.npm config set

`npm config set cache C:\Devel\nodejs\npm-cache --global `

设置npm 缓存

##### 7.npm cache

8.

[]: 
[]: 

npm install 包名@版本号 -S `





## npx

1. npx 想要解决的主要问题，就是调用项目内部安装的模块

npm 调用内部模块方法

```shell
# 项目的根目录下执行
$ node-modules/.bin/mocha --version
```

npx 调用内部模块方法

```shell
npx mocha --version
```

2. 避免全局安装

   `create-react-app`这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

   `npx create-react-app my-react-app`












​      

