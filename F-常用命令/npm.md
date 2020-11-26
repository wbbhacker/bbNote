## npm

#### npm 知识

##### 全局安装路径

​	Mac上npm 包的全局安装路：径`usr/local/lib/node_modules`

##### --save与--save-dev 的区别

​	--save 添加到 dependencies 中,记录的都是项目运行时需要的文件

​	--save-dev 添加到

##### 库的版本控制

​	`>=` `^` `*`

#### 常用命令

##### npm install

​	Nom install moduleName 安装 moduleName 模块. -g 为全局安装

##### npm list  

​	列出已安装模块

##### npm show 

​	npm show moduleName 显示 moduleName 模块详情

##### npm config

​	npm show  ls 查看安装路径

##### npm link

1. 功能

   在本地开发npm模块的时候，我们可以使用npm link命令，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试

2. 在这里，我们有两个项目，一个是`npm-link-module`，是我们要开发的npm模块,另一个是`npm-link-example`,是我们要运行npm模块的项目。

   1. 首先，进入我们的`npm-link-module`项目，执行npm link
   2. 然后，进入`npm-link-example`项目，执行 npm link npm-link-module

#### npm 常用模块

##### 	js AST 互相转化

​     `esmangle` 与 `escodegen`     

 	`Babel parser` 和 `generator`

#####    Terminals 输入对象

​	 `ololog` 

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

