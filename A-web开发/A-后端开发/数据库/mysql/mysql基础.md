

### mysql基础

#### 1.`mysql -V`  查看mysql 版本号

#### 2.mysql 登录

```mysql
Mysql -u root -p 
password：admin
```

#### 3.mysql常用命令

```mysql
SHOW DATABASES;  // 查看所有数据库
use 数据库; // 选择要操作的数据库
SHOW TABLES;  // 查看所有数据表
SHOW COLUMNS FROM 数据表; // 显示数据表的所有属性
SELECT 字段列表 FROM 表名; // 查看具体列的值
grant all privileges on *.*  to  '用户'@'%'  identified by '密码'  with grant option;
// 
```



