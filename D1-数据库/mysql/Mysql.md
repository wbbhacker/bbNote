### 1.服务

#### 1.连接与断开服务器 

`mysql -h 地址 -P 端口 -u 用户名 -p 密码`

> mysql 默认端口为：3306

#### 2.显示哪些线程正在运行

`SHOW PROCESSLIST`  

#### 3.显示系统变量信息

`SHOW VARIABLES` 

#### 4.mysql 服务启动

##### 1.mac 上启动

```shell
mysql.server start/stop/restart
brew services stop mysql // brew 停止mysql
```

##### 2.linux 启动

```shell
systemctl restart mysqld
```

### 2.数据库操作

#### 1.查看当前数据库

`SELECT DATABASE();`



#### 2.显示当前时间、用户名、数据库版本

`SELECT now(),user(),version()`

#### 3.创建数据库

```sql
CREATE DATABASE[ IF NOT EXISTS] 数据库名 数据库选项
    数据库选项：
        CHARACTER SET charset_name
        COLLATE collation_name
```

#### 4.查看已有库

`SHOW DATABASES[ LIKE 'PATTERN']`

#### 5.查看当前库信息

`SHOW CREATE DATABASE 数据库名`

#### 6.修改库的选项信息

`ALTER DATABASE 库名 选项信息`

#### 7.删除库

```sql
DROP DATABASE[ IF EXISTS] 数据库名
        同时删除该数据库相关的目录及其目录内容
```

### 3.表的操作\数据操作

#### 见sql 语言

[1]: https://www.tutorialspoint.com/sql/index.htm	"tutorialspoint SQL"
[2]: https://www.w3schools.com/sql/default.asp	"w3schools SQL"
[3]: https://www.runoob.com/w3cnote/sql-join-image-explain.html	" SQL 的各种 JOIN 用法"
[4]: https://www.cnblogs.com/slivelove/p/10956433.html	"sql中on和where的区别"



























