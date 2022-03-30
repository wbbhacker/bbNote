#### 1.which

```shell
which npm 
// OUTPUT SAMPLE
/usr/local/bin/npm
```

#### 2.la

#### 3.查杀端口号进程

`lsof -i:8080` 查看占用端口的进程号

```
kill -9 `lsof -ti:8080`  直接通过端口号杀进程
```

#### 4.service 查看服务状态

##### 1.查看单个服务运行状态

`service 服务名 status`

##### 2.查看所有服务的运行状态

`service --status-all`

#### 5.Systemctl

##### 1.check service status

`systemctl status servicename.service`

##### 2.Start service

`systemctl start servicename`





![image-20220329140531849](../../image/image-20220329140531849.png)

[1]: https://www.liquidweb.com/kb/what-is-systemctl-an-in-depth-overview/

