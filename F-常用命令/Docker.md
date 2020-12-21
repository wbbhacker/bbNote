### 一、Docker 介绍

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



### 二、Docker 命令

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