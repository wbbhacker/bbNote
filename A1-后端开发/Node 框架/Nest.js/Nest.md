### 1.技术

#### 1.数据库

[TypeORM](https://github.com/typeorm/typeorm) 绝对是 node.js 世界中可用的最成熟的对象关系映射器 (ORM)。

#### 2.验证

DTO（Data Transfer Object）是一种用于描述数据模型和数据传输的对象。

#### 3.OpenApi

[OpenAPI](https://swagger.io/specification/) 规范是一种与语言无关的定义格式，用于描述 RESTful API。Nest 提供了一个专用的 [module](https://github.com/nestjs/swagger)，它允许通过利用装饰器生成这样的规范。

[1]: https://juejin.cn/post/6925605351475806216	"深入了解Nest的模块Module"
[2]: https://www.cnblogs.com/venblogs/p/14966132.html	"nestjs 原理"
[3]: https://blog.csdn.net/lin_fightin/article/details/124218402	"jwt+nest.js，实现登录挤出功能"
[4]: https://www.elvisduru.com/blog/nestjs-jwt-authentication-refresh-token	"NestJS JWT Authentication with Refresh Tokens Complete Guide"

#### [4.请求声明周期](https://nest.nodejs.cn/faq/request-lifecycle)

Nest 应用按我们称为请求生命周期的顺序处理请求并生成响应。通过使用中间件、管道、守卫和拦截器，追踪特定代码片段在请求生命周期中的执行位置可能具有挑战性，尤其是在全局、控制器级别和路由级别组件发挥作用时。通常，请求通过中间件流向守卫，然后流向拦截器，然后流向管道，最后返回返回路径上的拦截器（生成响应时）。



```tsx
    return this.usersService.update(userId, { refreshToken: null });
```
