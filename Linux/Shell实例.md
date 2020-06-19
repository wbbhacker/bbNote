# Shell实例

> 王斌 2019.11.29

## 安装node

1. 建立node文件夹 

```shell
mkdir /usr/local/node
```

2. 下载node 文件

```shell
wget https://nodejs.org/dist/v12.15.0/node-v12.15.0-linux-x64.tar.gz
```

3. 解压node 

```shell
tar -xf node-v12.13.1-linux-x64.tar.xz
```

4. 将node路径添加到环境变量

```shell
vim /etc/profile
export NODE_HOME="/usr/local/node/node-v12.13.1-linux-x64"
export PATH=$PATH:$NODE_HOME/bin
```

5. 刷新权限 

```shell
source /etc/profile
```

## 查看进程及杀死进程

```shell
ps aux | grep node
kill -9 进程号

netstat -an | grep 8080   查看8080端口是否起来
sudo lsof -i :8080 查看8080 端口
```

## 关闭防火墙

```shell
systemctl stop firewalld
```

## 修改权限

```shell
chmod 777 filename
sudo chmod -R 777 filename
```

## 文件夹类型

d 开头是文件夹  - 开头是文件 

```shell
drwxr-xr-x 2 root     root     4096 Mar 11 15:44 conf.d
-rw-r--r-- 1 appadmin appadmin 1077 Apr 25  2019 fastcgi.conf
-rw-r--r-- 1 appadmin appadmin 1077 Apr 25  2019 fastcgi.conf.default
-rw-r--r-- 1 appadmin appadmin 1007 Apr 25  2019 fastcgi_params
-rw-r--r-- 1 appadmin appadmin 1007 Apr 25  2019 fastcgi_params.default
-rw-r--r-- 1 appadmin appadmin 2837 Apr 25  2019 koi-utf
```

