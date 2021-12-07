## html 标签

#### 1.dfn

#### 2.Script 

```html
<script type="module" src="src/index.js">  
// type=module 这种用法是ES Modules 中提出的标准，用来区分加载的是一个普通js脚本还是一个模块
```

#### 3.link

```javascript
< ref="preload/prefetch" src="url" as="script">
```

#### 3.meta -- render

 render 指定双核浏览器默认以何种方式渲染页面

```html
<meta name="renderer" content="webkit">  // 默认webkit内核
<meta name="renderer" content="ie-comp">   //默认IE兼容模式
<meta name="renderer" content="ie-stand">  <!-- 默认IE标准模式 -->
```

#### 4. 浏览器中地址栏左侧显示的图标

 一般大小16*16、.ico 后缀

```html
<link rel="bookmark" type="image/x-icon" href="favicon.ico"/>
<!-- 收藏用logo图标 --> 


<link rel="shortcut icon" href="favicon.ico">
<!-- 网站显示页logo图标 -- > 

```



