### 1.设置环境变量

```nginx
server {
        listen       80;
        server_name  localhost;

        location / {
            root   F:/workspace/pixijs_demo/;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }
```

