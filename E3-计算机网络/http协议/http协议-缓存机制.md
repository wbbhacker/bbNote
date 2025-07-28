https://www.cnblogs.com/ranyonsue/p/8918908.html



Web 缓存大致可以分为：数据库缓存、服务器端缓存（代理服务器缓存、CDN 缓存）、浏览器缓存。
浏览器缓存也包含很多内容： HTTP 缓存、indexDB、cookie、localstorage 等等。

### 1.http缓存术语：

- **缓存命中率**：从缓存中得到数据的请求数与所有请求数的比率。理想状态是越高越好。
- 过期内容：超过设置的有效时间，被标记为“陈旧”的内容。通常过期内容不能用于回复客户端的请求，必须重新向源服务器请求新的内容或者验证缓存的内容是否仍然准备。
- **验证**：验证缓存中的过期内容是否仍然有效，验证通过的话刷新过期时间。
- **失效**：失效就是把内容从缓存中移除。当内容发生改变时就必须移除失效的内容。

### 2.浏览器缓存分类

浏览器缓存分别为强缓存和协商缓存，浏览器加载一个页面的简单流程如下：

1. 浏览器先根据这个资源的http头信息来判断是否命中强缓存。如果命中则直接加在缓存中的资源，并不会将请求发送到服务器。
2. 如果未命中强缓存，则浏览器会将资源加载请求发送到服务器。服务器来判断浏览器本地缓存是否失效。若可以使用，则服务器并不会返回资源信息，浏览器继续从缓存加载资源。
3. 如果未命中协商缓存，则服务器会将完整的资源返回给浏览器，浏览器加载新资源，并更新缓存。

### 3.强缓存

> 使用强缓存时，浏览器不会发送请求到服务端，若在此期间资源发生了变化，如何更新？
>
> 需要更新页面中引用的资源路径，让浏览器主动放弃缓存，加载新资源。添加版本号
>

命中强缓存时，浏览器并不会将请求发送给服务器。在Chrome的开发者工具中看到http的返回码是200，但是在Size列会显示为(from cache)。

强缓存是利用http的返回头中的Expires或者Cache-Control两个字段来控制的，用来表示资源的缓存时间。

#### **Expires**

缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。也就是说，**Expires=max-age + 请求时间**，需要和Last-modified结合使用。但在上面我们提到过，cache-control的优先级更高。 Expires是Web服务器响应消息头字段，在响应http请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。

该字段会返回一个时间，比如Expires:Thu,31 Dec 2037 23:59:59 GMT。这个时间代表着这个资源的失效时间，也就是说在2037年12月31日23点59分59秒之前都是有效的，即命中缓存。**这种方式有一个明显的缺点，由于失效时间是一个绝对时间，所以当客户端本地时间被修改以后，服务器与客户端时间偏差变大以后，就会导致缓存混乱**。于是发展出了Cache-Control。

#### Cache-Control

Cache-Control是一个相对时间，例如Cache-Control:3600，代表着资源的有效期是3600秒。由于是相对时间，并且都是与客户端时间比较，所以服务器与客户端时间偏差也不会导致问题。
Cache-Control与Expires可以在服务端配置同时启用或者启用任意一个，同时启用的时候Cache-Control优先级高。

1. **max-age** 指定一个时间长度，在这个时间段内缓存是有效的，单位是s。例如设置 Cache-Control:max-age=31536000，也就是说缓存有效期为（31536000 / 24 / 60 * 60）天，第一次访问这个资源的时候，服务器端也返回了 Expires 字段，并且过期时间是一年后。

   在没有禁用缓存并且没有超过有效时间的情况下，再次访问这个资源就命中了缓存，不会向服务器请求资源而是直接从浏览器缓存中取。

2. **s-maxage** 同 max-age，覆盖 max-age、Expires，但仅适用于共享缓存，在私有缓存中被忽略。

3. **public** 表明响应可以被任何对象（发送请求的客户端、代理服务器等等）缓存。

4. **private** 表明响应只能被单个用户（可能是操作系统用户、浏览器用户）缓存，是非共享的，不能被代理服务器缓存。

5. **no-cache** 强制所有缓存了该响应的用户，在使用已缓存的数据前，发送带验证器的请求到服务器。不是字面意思上的不缓存。

6. **no-store** 禁止缓存，每次请求都要向服务器重新获取数据。

7. **must-revalidate**指定如果页面是过期的，则去服务器进行获取。这个指令并不常用，就不做过多的讨论了。

### 4.协商缓存

若未命中强缓存，则浏览器会将请求发送至服务器。服务器根据http头信息中的Last-Modify/If-Modify-Since或Etag/If-None-Match来判断是否命中协商缓存。如果命中，则http返回码为304，浏览器从缓存中加载资源。

#### Last-Modify/If-Modify-Since

浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify，Last-modify是一个时间标识该资源的最后修改时间，例如Last-Modify: Thu,31 Dec 2037 23:59:59 GMT。

当浏览器再次请求该资源时，发送的请求头中会包含If-Modify-Since，该值为缓存之前返回的Last-Modify。服务器收到If-Modify-Since后，根据资源的最后修改时间判断是否命中缓存。

如果命中缓存，则返回http304，并且不会返回资源内容，并且不会返回Last-Modify。由于对比的服务端时间，所以客户端与服务端时间差距不会导致问题。但是有时候通过最后修改时间来判断资源是否修改还是不太准确（资源变化了最后修改时间也可以一致）。于是出现了ETag/If-None-Match。

#### **ETag/If-None-Match**

与Last-Modify/If-Modify-Since不同的是，Etag/If-None-Match返回的是一个校验码（ETag: entity tag）。ETag可以保证每一个资源是唯一的，资源变化都会导致ETag变化*。ETag值的变更则说明资源状态已经被修改。服务器根据浏览器上发送的If-None-Match值来判断是否命中缓存。

### 4.1 启发式缓存

### 5.ETag扩展说明

1. 文件的i-node编号，此i-node非彼iNode。是Linux/Unix用来识别文件的编号。是的，识别文件用的不是文件名。使用命令’ls –I’可以看到。
2. 文件最后修改时间
3. 文件大小

生成Etag的时候，可以使用其中一种或几种因子，使用抗碰撞散列函数来生成。所以，理论上ETag也是会重复的，只是概率小到可以忽略

### 6.既生Last-Modified何生Etag？

你可能会觉得使用Last-Modified已经足以让浏览器知道本地的缓存副本是否足够新，为什么还需要Etag（实体标识）呢？HTTP1.1中Etag的出现主要是为了解决几个Last-Modified比较难解决的问题：

1. Last-Modified标注的最后修改只能精确到秒级，如果某些文件在1秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间

2. 如果某些文件会被定期生成，当有时内容并没有任何变化，但Last-Modified却改变了，导致文件没法使用缓存

   有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形

Etag是服务器自动生成或者由开发者生成的对应资源在服务器端的唯一标识符，能够更加准确的控制缓存。Last-Modified与ETag是可以一起使用的，服务器会优先验证ETag，一致的情况下，才会继续比对Last-Modified，最后才决定是否返回304。

#### 7.用户行为与缓存

![image-20210109214921777](../../image/image-20210109214921777.png)

### 8.总结

![image-20210109214955302](../../image/image-20210109214955302.png)

![image-20210109215004273](../../image/image-20210109215004273.png)

> | 前缀          | 含义                       | 示例              |
> | :------------ | :------------------------- | :---------------- |
> | **`X-`**      | 传统自定义头部（已不推荐） | `X-Request-ID`    |
> | **`Sec-`**    | 浏览器安全控制头部         | `Sec-Fetch-Site`  |
> | **`Accept-`** | 内容协商标准头部           | `Accept-Encoding` |

[1]: https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html	"Caching in HTTP"
[2]: https://httpwg.org/specs/rfc9111.html#cache-request-directive.no-cache
[3]: https://www.mnot.net/cache_docs/
[4]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Content_negotiation
[5]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching#vary
[6]: https://www.chromium.org/developers/design-documents/network-stack/
[7]: https://httpwg.org/specs/rfc9110.html
[8]: https://www.chromium.org/developers/design-documents/network-stack/

> 那我如果不设置 cache-control 和 expire 的是不是一致就是用的强缓存?
>
> ### **如果不设置 `Cache-Control` 和 `Expires`，浏览器是否会使用强缓存？**  
>
> **答案：不一定！** 浏览器的默认缓存行为取决于多种因素，包括：  
> 1. **HTTP/1.1 默认缓存策略**  
> 2. **浏览器的启发式缓存（Heuristic Caching）**  
> 3. **资源类型（HTML、JS、CSS、图片等）**  
>
> ---
>
> ## **1. 如果没有 `Cache-Control` 和 `Expires`，会发生什么？**
> ### **(1) HTTP/1.1 默认行为（RFC 规范）**
> - **如果服务器没有返回任何缓存控制头（`Cache-Control`、`Expires`）**，浏览器 **不会使用强缓存**，而是 **每次都会发送请求** 到服务器（但可能使用协商缓存，如 `If-Modified-Since` 或 `If-None-Match`）。  
> - **例外情况**：如果服务器返回了 `Last-Modified`，浏览器可能会在后续请求中带上 `If-Modified-Since` 进行缓存验证（返回 `304 Not Modified` 或 `200 OK`）。  
>
> ### **(2) 浏览器的启发式缓存（Heuristic Caching）**
> - 如果服务器没有明确设置 `Cache-Control` 或 `Expires`，但资源有 `Last-Modified`，**部分浏览器可能会自动计算一个缓存时间**（如 `(Date - Last-Modified) * 0.1`），并临时启用强缓存。  
> - **示例**：
>   - 如果 `Last-Modified` 是 10 天前，浏览器可能会缓存该资源 **1 天**（`10 * 0.1 = 1`）。  
>   - 在此期间，浏览器 **不会发送请求**，直接使用缓存（类似强缓存）。  
>   - 超过这个时间后，浏览器才会发送请求，并带上 `If-Modified-Since`。  
>
> ---
>
> ## **2. 不同资源的默认缓存行为**
> | 资源类型      | 默认缓存行为（无 `Cache-Control` 和 `Expires`）  |
> | ------------- | ------------------------------------------------ |
> | **HTML**      | 通常 **不缓存**（每次请求服务器）                |
> | **JS/CSS**    | 可能被浏览器启发式缓存（取决于 `Last-Modified`） |
> | **图片/字体** | 可能被浏览器长期缓存（部分浏览器默认缓存）       |
>
> ---
>
> ## **3. 如何确保强缓存生效？**
> 如果想 **明确使用强缓存**，必须显式设置：
> ```http
> Cache-Control: max-age=3600  # 强缓存 1 小时
> ```
> 或（HTTP/1.0 兼容）：
> ```http
> Expires: Wed, 21 Oct 2025 07:28:00 GMT
> ```
>
> 如果想 **完全禁用缓存**，使用：
> ```http
> Cache-Control: no-store
> ```
>
> ---
>
> ## **4. 实验验证**
> ### **场景 1：无任何缓存头**
> ```http
> HTTP/1.1 200 OK
> Content-Type: text/html
> ```
> - **浏览器行为**：每次访问都会请求服务器（无缓存）。  
>
> ### **场景 2：仅有 `Last-Modified`**
> ```http
> HTTP/1.1 200 OK
> Last-Modified: Wed, 21 Oct 2023 07:00:00 GMT
> Content-Type: text/html
> ```
> - **浏览器行为**：
>   - **首次请求**：正常返回 `200 OK`。
>   - **后续请求**：可能带上 `If-Modified-Since`，服务器可返回 `304 Not Modified`（协商缓存）。  
>   - **部分浏览器** 可能启用启发式缓存（短期强缓存）。  
>
> ---
>
> ## **结论**
> - **如果不设置 `Cache-Control` 和 `Expires`，浏览器默认不会使用强缓存**（除非触发启发式缓存）。  
> - **强缓存必须显式声明**（如 `Cache-Control: max-age=3600`）。  
> - **协商缓存（`ETag`/`Last-Modified`）仍然可能生效**，但需要发送请求验证。  
>
> **最佳实践**：  
> ✅ 明确设置 `Cache-Control` 来控制缓存行为，避免依赖浏览器默认策略。
