#### 1.默认端口号为：6379

#### 2.启动redis

`redis-server`

#### 3.连接redis

`redis-cli -p 6379 -a password`

#### 3.查看密码配置 

`config get requirepass`

#### 4.设置密码

`config set requirepass 123456`

