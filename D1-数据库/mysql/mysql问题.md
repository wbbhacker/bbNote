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

https://blog.csdn.net/q258523454/article/details/84555847

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

#### 4.开启远程链接

1. 使用SSH链接到服务器，登录到MySQL

   `mysql -u root -p`

2. 写入SQL语句，开启远程访问

   `use mysql;`

   `update use set host ='%' where user = 'root'`

3. 运行下面的语句, 查看设置是否生效

   `select host, user from user where user='root'`

4. 退出MySQL 命令，回到Linux命令模式， 重启MySQL

   `systemctl restart mysqld`

#### 5.数据库导入数据

mysql source命令主要用来倒入超大的sql文件，在日常工作中，我们往往会遇到导入大的数据文件的情况，在MySQL中，用mysql source命令可以导入轻松解决这个问题，MySQL source的基本语法如下：

```mysql
mysql>use dbtest;
mysql>set names utf8;
mysql>source D:/xxx/xxx/back.sql;
```

```mysql
source /Users/admin/git/test_db/employees.sql
```

```mysql
mysql>use db_test
mysql>source D:/test.sql > output.log
```

#### 6.mysql 日志问题

https://zhuanlan.zhihu.com/p/190886874

#### 7.mysql 可视化管理工具

[mysqlWorkbench](http://www.mysqlworkbench.cn/)

[DBeaver](https://dbeaver.io/)

[Navicat](https://www.navicat.com.cn/)

[1]: https://blog.csdn.net/y1282037271/article/details/128547052

#### 8.ER 图

Entity Relationship Diagram 实体关系图

#### 9.DDL  数据

DDL(Data Definition Language) 数据定义语言





