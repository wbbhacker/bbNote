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

