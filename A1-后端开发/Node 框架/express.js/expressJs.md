### [1.exprss 方法](https://expressjs.com/en/4x/api.html#express)

1. express.static

   以磁盘创建静态服务器

### 2.express 单页面部署方法

用这个库[connect-history-api-fallback](https://www.npmjs.com/package/connect-history-api-fallback)  重写路由

### 3.express-session

> `cookie`、`cookie-parser`、[cookies](https://www.npmjs.com/package/cookies) 等库

### 4.多级路由

```javascript
//index.js
'use strict'

var express = require('../..');

var app = module.exports = express();

app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));

app.get('/', function(req, res) {
  res.send('Hello from root route.')
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
```

```javascript
// controllers/apiv1.js
'use strict'

var express = require('../../..');

var apiv1 = express.Router();

apiv1.get('/', function(req, res) {
  res.send('Hello from APIv1 root route.');
});

apiv1.get('/users', function(req, res) {
  res.send('List of APIv1 users.');
});

module.exports = apiv1;
```

```javascript
//controllers/apiv2.js
'use strict'

var express = require('../../..');

var apiv2 = express.Router();

apiv2.get('/', function(req, res) {
  res.send('Hello from APIv2 root route.');
});

apiv2.get('/users', function(req, res) {
  res.send('List of APIv2 users.');
});

module.exports = apiv2;
```

### 5.form 格式数据解析 multipart/form-data 

[multiparty](https://www.npmjs.com/package/multiparty)

```javascript
'use strict'

/**
 * Module dependencies.
 */

var express = require('../..');
var multiparty = require('multiparty');
var format = require('util').format;

var app = module.exports = express();

app.get('/', function(req, res){
  res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>Title: <input type="text" name="title" /></p>'
    + '<p>Image: <input type="file" name="image" /></p>'
    + '<p><input type="submit" value="Upload" /></p>'
    + '</form>');
});

app.post('/', function(req, res, next){
  // create a form to begin parsing
  var form = new multiparty.Form();
  var image;
  var title;

  form.on('error', next);
  form.on('close', function(){
    res.send(format('\nuploaded %s (%d Kb) as %s'
      , image.filename
      , image.size / 1024 | 0
      , title));
  });

  // listen on field event for title
  form.on('field', function(name, val){
    if (name !== 'title') return;
    title = val;
  });

  // listen on part event for image file
  form.on('part', function(part){
    if (!part.filename) return;
    if (part.name !== 'image') return part.resume();
    image = {};
    image.filename = part.filename;
    image.size = 0;
    part.on('data', function(buf){
      image.size += buf.length;
    });
  });


  // parse the form
  form.parse(req);
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(4000);
  console.log('Express started on port 4000');
}
```

### [6.Keygrip](https://www.npmjs.com/package/keygrip)

Keygrip是一个用于生成和验证密钥的库，通常用于在Node.js应用程序中对cookie进行签名和验证。

在Node.js中，cookie的签名是为了防止客户端篡改cookie数据。Keygrip库提供了生成和验证签名的功能

1. 创建Keygrip实例：
   使用Keygrip构造函数创建一个Keygrip实例，并传入一个密钥数组。密钥数组是用于生成和验证签名的密钥列表，通常包含多个密钥，用于提高安全性。

```javascript
const keys = ['key1', 'key2', 'key3'];
const keygrip = new Keygrip(keys);
```

2. 生成签名：
   使用Keygrip实例的`sign`方法生成签名。该方法接收两个参数：要签名的数据和可选的哈希算法。默认情况下，使用的是sha1算法。

```javascript
const data = 'example data';
const signature = keygrip.sign(data);
```

3. 验证签名：
   使用Keygrip实例的`index`方法验证签名。该方法接收两个参数：要验证的数据、签名和可选的哈希算法。

```javascript
const isValid = keygrip.index(data, signature);
```
