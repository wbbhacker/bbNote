### 1.mysql 实例

docker-compose.yml

```yaml
# Use root/example as user/password credentials
version: '3.1'

services:

  db:
    image: mysql
    # NOTE: use of "mysql_native_password" is not recommended: https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password
    # (this is just an example, not intended to be a production configuration)
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

运行 `docker-compose -f docker-compose.yml up`,在浏览器中打开`http://localhost:8080` 用户名`root` ,密码 `123456` 登录。

### 2.单独启mysql image

启动 `docker run -p 3307:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql`

访问 `mysqlsh --host=127.0.0.1 --port=3307 -u root`



