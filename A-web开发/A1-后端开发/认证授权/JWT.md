#### JSON Web Token （jwt）

#### 1.jwt 认证原理

jwt由头部、载荷、签名三部分组成

- 头部：用于描述该JWT的最基本信息，如：类型、签名所用算法

  ```json
  {
    "typ": "JWT",
    "alg": "HS256"
  }
  ```

- 载荷(Payload):用来放一些不明感信息

  ```json
  {
      "iss": "John Wu JWT", // JWT 签发这
      "iat": 1441593502, //签发时间
      "exp": 1441594722, // 过期时间
      "aud": "www.example.com", // 接受方
      "sub": "jrocket@example.com", //主题
    	"jti":     //JWT ID 用户表示该JWT
    	"nbf":"再次之前不可用",
      "from_user": "B",
      "target_user": "A"
  }
  ```

  前七个个字段由JWT的标注所定义

  把头部和载荷进行base64编码，然后用`.` 连接 形成新字符串

  `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcm9tX3VzZXIiOiJCIiwidGFyZ2V0X3VzZXIiOiJBIn0`

- 签名 signature

  将上面拼完的字符串进行HS256 算法加密，得到签名，并拼接在后面

  `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcm9tX3VzZXIiOiJCIiwidGFyZ2V0X3VzZXIiOiJBIn0.rSWamyAYwuHCo7IFAgd1oRpSP7nzL7BF5t7ItqpKViM`

#### 2.jwt优缺点

- 优点：

  - 无跨域问题、通过http Authorization 收不传输token
  - 额外信息存储在客户端，服务器端占用资源不多，也不存在session共享问题

- 缺点：

  - 安全性：jwt的payload 使用base64 编码所以不能存储敏感数据

  - 性能：编码之后jwt 太长，一般放在localStorage 

  - 一次性：jwt是 无状态 ，导致jwt 是一次性的，想要修改内容就必须签发一个新的jwt

    - 无法废弃

      一旦签发，在到期之前无法中途废弃。会导致新、旧jwt都可以登录

      解决方案：服务端额外部署逻辑，如设置黑名单，一旦签发新的jwt，旧的就加入黑名单

    - 续签问题

      要改变jwt的有效时间，就要签发新的jwt

      1. 每个http请求都返回一个新的jwt，每次请求都要做jwt的加密解密，性能差
      2. redis中单独为每个jwt设置过期时间，每次访问时刷新jwt的过期时间


#### 3.适用场景

- 有效期短
- 只希望被适用一次

#### [4.JWS](https://github.com/auth0/node-jws)

JSON Web Signatures

[1]: https://github.com/nestjs/jwt?tab=readme-ov-file	" @nestjs/jwt"
[2]: https://github.com/auth0/node-jsonwebtoken	" Jsonwebtoken"
[3]: https://github.com/auth0/node-jws	"node-jws"

