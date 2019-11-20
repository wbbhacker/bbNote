# Shell实例

> 王斌 2019.11.29

## 安装node

1. 建立node文件夹 

```shell
mkdir /usr/local/node
```

2. 下载node 文件

```shell
wget https://nodejs.org/dist/v12.13.1/node-v12.13.1-linux-x64.tar.xz
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

