### mysql常见问题

#### 1.Client does not support authentication protocol requested by server; consider upgrading MySQL client 报错

主要原因是mysql服务器要求的认证插件版本与客户端不一致造成的。
查看服务器认证插件：

```mysql
select user,plugin from mysql. user; 
```

解决方法：

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你想设置的MySQL登录密码';

```

#### 2.win 下重置mysql 8.0 root密码

1. 关闭mysql 服务

   services.msc 

2. 在D盘下创建文件mysql-init.txt, 内容为下：

   `ALTER USER 'root'@'localhost' IDENTIFIED BY '你的新密码';`

3. 进入mysql bin

   `> cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"`

   ` > mysqld --init-file=D:\\mysql-init.txt`
   
   > 如果你是使用的安装包安装的msyql你需要制定配置文件
   >
   > `mysqld  --defaults-file="C:\\ProgramData\\MySQL\\MySQL Server 8.0\\my.ini" --init-file=D:\\mysql-init.txt`
   
4. 启动mysql 服务即可

#### 3.远程登录mysql 需要授权用户远程登录权限

mysql8.0 不能授权给自己，授权自己会出错。要新创建一个用户授权给自己。





