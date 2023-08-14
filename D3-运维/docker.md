### 1.Docker 介绍

快捷部署很多开发工具

1. 文档管理工具 YAPI

2. Docker hub 镜像下载网站

3. 配置国内镜像下载地址，npm也可以。

4. 输出详情介绍

     CONTAINER ID: 容器 ID。

     IMAGE: 使用的镜像。

     COMMAND: 启动容器时运行的命令。

     CREATED: 容器的创建时间。

     PORTS: 容器的端口信息和使用的连接类型（tcp\udp）。

     NAMES: 自动分配的容器名称。

     STATUS: 容器状态。

   

   ​     created（已创建）

   ​     restarting（重启中）

   ​     running 或 Up（运行中）

   ​     removing（迁移中）

   ​     paused（暂停）

   ​     exited（停止）

   ​     dead（死亡）

### 2.Docker 命令

#### 1.docker images 查看docker安装的镜像

  	docker search imageName 查找镜像

#### 2.docker rmi 镜像ID 删除镜像

#### 3.docker pull 拉取镜像

#### 4.docker tag image-id tagName 为镜像

#### 5.docker ps 查看所有正在运行的容器

  	docker ps -a 查看所有容器
  	
  	docker log -f  imageName 查看容器输出日志
  	
  	 **-f:** 让 **docker logs** 像使用 **tail -f** 一样来输出容器内部的标准输出

#### 6.docker run -it cents /bin/bash 创建运行交互式的容器

   	-I 交互式操作  -t 终端  centos 镜像名字 ./bin/bash 镜像运行以后执行的命令打开终端
   	
   	exit  退出终端
   	
   	docker run -d --name  nginx-server -p 8080:80 nginx 启动容器（后台模式）
   	
   	docker exec -it <container ID>  /bin/bash  进入在后台运行的容器

#### 7.docker stats 查看运行中容器的状态

#### 8.docker command —help 深入了解指定的docker 命令

#### 9.docker start 启动一个已停止的容器

  	docker stop  <容器 ID> 停止一个容器
  	
  	docker restart <容器 ID>  重启真正在运行的容器
  	
  	docker rm -f imageName 强制删除正在运行的容器
  	
  	docker container prune 清理所以终止的容器

### 3.docker服务

查看docker运行状态的方法:sudo service docker status  

打开/关闭/重启docker服务：sudo service docker start/stop/restart  

start docker

` sudo systemctl start docker`

### 4.与容器交互模式

` docker exec -it containerID /bin/sh`

> [`podman`](https://github.com/containers/podman) 是一个无守护程序与 docker 命令兼容的下一代 Linux 容器工具。

### 5.docker 中的 Dockerfile文件与docker-compose.yml 文件的区别

Dockerfile 和 docker-compose.yml 是 Docker 中两种非常重要的文件，它们都用于创建和配置 Docker 容器，但是它们的用途和功能有所不同。

1. Dockerfile：Dockerfile 是一个文本文件，它包含了一系列的指令，用于定义如何创建一个 Docker 镜像。这些指令包括但不限于设置工作目录、复制文件、安装依赖、暴露端口等。当你运行 `docker build` 命令时，Docker 会按照 Dockerfile 中的指令，一步步构建出一个 Docker 镜像。
2. docker-compose.yml：docker-compose.yml 是 Docker Compose 的配置文件，它是一个 YAML 格式的文件，用于定义和配置多个 Docker 容器的应用服务。在这个文件中，你可以定义服务的名称、使用的镜像、端口映射、挂载的卷、环境变量、依赖关系等。当你运行 `docker-compose up` 命令时，Docker Compose 会按照 docker-compose.yml 文件中的配置，启动一组互相关联的 Docker 容器。

总的来说，Dockerfile 主要用于定义单个 Docker 镜像，而 docker-compose.yml 主要用于定义和配置由多个 Docker 容器组成的应用服务。
