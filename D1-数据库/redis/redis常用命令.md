#### 1.查看所有配置

`config get  *`

#### 2.查看密码

`config get requirepass`

#### 3.验证密码

`auth password`

#### 4.设置密码

`config set requirepass password`

#### 5.登录

`redis-cli -p 6379 -a password`

#### 6.默认端口号为：6379

#### 7.启动redis

`redis-server`

#### 8.连接redis

`redis-cli -p 6379 -a password`

#### 9.查看密码配置

`config get requirepass`

#### 10.设置密码

`config set requirepass 123456`

