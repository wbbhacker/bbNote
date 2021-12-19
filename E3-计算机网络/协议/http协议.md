### 1、http1属性

#### 1.**Content-Type**

如果response 不设置Content-Type，浏览器会解析乱码

```javascript
html = '<div id="app" data-server-rendered="true"><h1>我的世界</h1></div>’
// 方法一
res.setHeader('Content-Type','text/html; charset=utf8')
res.end(html)

//方法二
res.end(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"> //设置文章编码方式
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        ${html}
    </body>
</html>
`)
```

#### 2.Access-Control-Max-Age

缓存问题 设置时刻了发

#### 3.Options

方法请求

### 2.http2

### 3.http3