

### mysql基础

#### 1.连接与断开服务器

`mysql -h addressIP -P port -u username -p 密码 `

>  mysql 默认端口为：3306

#### 2.mysql 服务启动

##### 1.mac 上启动

```shell
mysql.server start/stop/restart
```

##### 2.linux 启动

```shell
systemctl restart mysqld
```



#### 3.数据库操作

##### 1.查看当前使用的数据库

`SELECT DATABASE();`

> 显示当前时间、用户名、数据库版本： `SELECT now(), user(), version();`

##### 2.使用某个数据库

`USE 数据库名;`

##### 3.创建数据库

`CREATE DATABASE [IF NOT EXISTS] 数据库名 数据库选项;`

> 数据库选项：`CHARACTER SET charset_name` `COLLATE collation_name`

##### 4.删除数据库

`DROP DATABASE [IF EXISTS] 数据库名;`

##### 5.修改数据库的选项信息

`ALTER DATABASE 库名 选项信息;`

##### 6.查看当前库信息

`SHOW CREATE DATABASE 数据库名;`

##### 7.查看所有数据库；

`SHOW DATABASES [LIKE 'PATTERN'];`

