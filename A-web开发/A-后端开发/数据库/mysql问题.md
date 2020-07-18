# mysql常见问题

1. ##### Client does not support authentication protocol requested by server; consider upgrading MySQL client 报错

   主要原因是mysql服务器要求的认证插件版本与客户端不一致造成的。

   查看服务器认证插件：

   ```mysql
   select user,plugin from mysql. user; 
   ```

   解决方法：

   ```mysql
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你想设置的MySQL登录密码';
   
   ```

   

   

