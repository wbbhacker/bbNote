# Nginx

> 王斌 2019.11.23

1. 查看nginx 安装路径

```nginx
nginx -V
#configure arguments: --prefix=/usr/local/ngin
```

2. 查看nginx.conf 配置文件目录

```nginx
nginx -t
```

3. 重启，并重新载入配置文件nginx.conf

```nginx
nginx -s reload
```

4. 停止服务

```nginx
nginx -s stop #立即停止服务，无论进程是否在工作，都直接停止进程
nginx -s quit #停服，需要进程完成当前工作后再停止
```



