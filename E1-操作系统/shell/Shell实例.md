#### 1.安装node

1. 建立node文件夹 

```shell
mkdir /usr/local/node
```

2. 下载node 文件

```shell
wget https://nodejs.org/dist/v12.15.0/node-v12.15.0-linux-x64.tar.xz
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

#### 2.查看进程及杀死进程

```shell
ps aux | grep node
kill -9 进程号

netstat -an | grep 8080   查看8080端口是否起来
sudo lsof -i :8080 查看8080 端口
```

#### 3.关闭防火墙

```shell
systemctl stop firewalld
```

#### 4.修改权限

```shell
chmod 777 filename
sudo chmod -R 777 filename
```

#### 5.文件夹类型

d 开头是文件夹  - 开头是文件 

```shell
drwxr-xr-x 2 root     root     4096 Mar 11 15:44 conf.d
-rw-r--r-- 1 appadmin appadmin 1077 Apr 25  2019 fastcgi.conf
-rw-r--r-- 1 appadmin appadmin 1077 Apr 25  2019 fastcgi.conf.default
-rw-r--r-- 1 appadmin appadmin 1007 Apr 25  2019 fastcgi_params
-rw-r--r-- 1 appadmin appadmin 1007 Apr 25  2019 fastcgi_params.default
-rw-r--r-- 1 appadmin appadmin 2837 Apr 25  2019 koi-utf
```

```bash
ps -ef | grep php-fpm
```

ss -lnt 查看端口

#### 6.查看npm 安装路径

```bash
which npm // locate a program file in the user's path SEE man which
// OUTPUT SAMPLE
/usr/local/bin/npm
la /usr/local/bin/npm // la: aliased to ls -lAh SEE which la THEN man ls
lrwxr-xr-x  1 t04435  admin    46B 18 Sep 10:37 /usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
```

#### 7.`curl` 与 `ping` 命令的区别？

**ping命令属于icmp协议，而curl网页属于http或者https协议**，能正常上网但是ping不同，就很有可能是中间的某个路由器或防火墙上做了策略，禁止了icmp协议的数据包通过，但是允许http协议的数据包通过，这样一来就不能通过icmp协议的ping命令访问了。

