###Nginx命令

#### 1.查看nginx 安装路径

```nginx
nginx -V
#configure arguments: --prefix=/usr/local/ngin
```

#### 2.查看nginx.conf 配置文件目录

```nginx
nginx -t
```

#### 3.重启，并重新载入配置文件nginx.conf

```nginx
nginx -s reload
```

##### 4.停止服务

```nginx
nginx -s stop #立即停止服务，无论进程是否在工作，都直接停止进程
nginx -s quit #停服，需要进程完成当前工作后再停止
```

#### 5.nginx 安装ssl模块

1. 解压安装包 `tar -zxvf nginx-1.16.1.tar.gz`

2. 进入安装包 `cd nginx-1.16.1`

3. 修改编译配置 

   `./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module `

4. 编译 `make`

5. 安装 `make install` 即可

6. 验证 `nginx -v` 有以下代码即成功

   `configure arguments: --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module`

6. 无法访问nginx

   在配置nginx.conf 头部添加`user root;`

7. Nginx.conf 文件配置ssl  及 80 http端口跳转 https

   ```nginx
    # HTTPS server
       #
       server {
           listen       443 ssl;
           server_name  localhost;
   
           ssl_certificate      /usr/local/nginx/cert/3537186_wbbyouzi.com.pem;
           ssl_certificate_key  /usr/local/nginx/cert/3537186_wbbyouzi.com.key;
   
           #ssl_session_cache    shared:SSL:1m;
           #ssl_session_timeout  5m;
   
           #ssl_ciphers  HIGH:!aNULL:!MD5;
           #ssl_prefer_server_ciphers  on;
           keepalive_timeout   70;
           server_name wbbyouzi.com;
           #root /data/webroot/example;
           charset utf-8;
           ssl_session_timeout 5m;
           ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
           ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
           ssl_prefer_server_ciphers on;
           fastcgi_param   HTTPS               on;
           fastcgi_param   HTTP_SCHEME         https;
   
           location / {
               root   /root/www;
               index  index.html index.htm;
           }
       }
   
   server {
   	listen    80;
   	server_name wbbyouzi.com;
   	return    301 https://$server_name$request_uri;
   }
   
   ```

   > https://www.cnblogs.com/alexfly/p/10615986.html 参考链接

​		 