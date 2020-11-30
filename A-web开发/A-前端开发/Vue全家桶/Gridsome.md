### 一、静态网站

#### 1.静态网站的好出

​	省钱、快速、安全

#### 2.静态网站框架

​	**JAMStack**(Javascript API Markup) ：使用**SSG**（static site generators） 静态网站生成技术的框架

#### 3.使用场景

​	不适合有大量路由页面的应用、不适合有大量动态内容的应用

### 二、Gridsome基础

#### 1.gridsome.config.js

插件和项目配置设置

#### 2.页面生成

1. 文件系统生成，在src/pages/ 创建.vue 文件自动生成
2. 编程式创建页面，在gridsome.server.js  中的 createPages hook 中创建

#### 3.Vue-méta

生成页面head 信息

#### 4.Collections 集合 预取数据

数据的预取，保存在collections 的Node 中

```javascript
module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection('Post')
    const { data } = await axios.get('https://api.example.com/posts')
    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.content
      })
    }
  })
}
```

数据的获取从graphQL 中查询获取

```javascript
// in Pages & Templates
// dev 模式下 spa， build 构建之后会是静态页面
<template>
  <div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link to="/">{{ edge.node.title }}</g-link> 
    </div>
  </div>
</template>

<page-query>
query {
  posts: allWordPressPost {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

//Components 用这个
<static-query>
```

注：在created 里面请求数据 build 之后会是SPA 页面

```javascript
export default {
  data(){
    return {
      posts:[]
    }
  },
  async created(){
    const {data} = await await axios.get('http://jsonplaceholder.typicode.com/posts')
    this.posts = data
  }
}
```

#### 5.模板 template 

模板放在templates 文件夹下，并在gridsome.config.js 中配置 templates

![image-20201126134815562](../../../image/image-20201126134815562.png)

```javascript
// gridsome.config.js
module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  templates:{
    Post:[
      {
        path:'/post/:id',
        component:'./src/templates/Post.vue'
      }
    ]
  }
}
```

```javascript
// template/Post.vue
<template>
<layout>
  <div>
    <h1>{{ $page.post.title }}</h1>
    <div>{{ $page.post.content }}</div>
  </div>
</layout>
</template>
<!—ID! ID不为空-->
<page-query>
query ($id: ID!) {
  post(id: $id){
    id
    title
    content
  }
}
</page-query>

<script>
export default {
  name: 'PostPage',
  metaInfo(){
    return {
      title: this.$page.post.title
    }
  }
}
</script>


<style>

</style>
```

#### 6.Layout 布局

要在main.js 中注册才能使用

### 三、案例

#### 1.导入数据

可以导入任何形式的数据

```javascript
import with  source plugins 
import from APIs
import from local files （markdown、images、YAML、CSV、JSON）
     @gridsome/source-filesystem 插件读取markdown 文件、
     @gridsome/transformer-remark 插件把markdown 导入graphGL
```

#### 2.Strapi 通用的内容管理系统

demo：

Super user 2404016117@qq.com Wbb121628170
User demo 2404016117@qq.com admin

121628170@qq.com Wbb121628170



创建好内容保存之后，publish 才可以查询到

字段要从“角色与权限”菜单中去配置访问权限

#### 3.获取Strapi 中的数据

1. Strapi 安装 GraphGL 插件
2. gridsome项目中安装 `@gridsome/source-strapi` 插件
3. 配置

```javascript
module.exports = {
  siteName: 'Gridsome',
  plugins: 
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ]
}
```

> 删除content Type 从编辑处 点击删除
>
> <img src="../../../../local/bbNote/image/image-20201130161221506.png" alt="image-20201130161221506" style="zoom:50%;" />



#### 4.获取分页数据

```javascript
query ($page: Int) {
  posts: allBlogPost(perPage: 10, page: $page) @paginate { // posts 为别名
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
      }
    }
  }
}

```

>  分页访问地址为：http://192.168.170.183:8080/ 第一页 http://192.168.170.183:8080/2 第二页

分页插件用gridsome 的[Pager](https://gridsome.org/docs/pagination/)

#### 5.创建文章和tag模板

gridsome.config.js 配置模板信息

```javascript
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'BlogPost',
      }, 
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post','tag'],  // 查询那些数据，就要在这里声明下
        // typeName: 'Strapi', // 默认为Strapi
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  templates:{
    StrapiPost:[  // 规则为 typeName+contentTypes
      {
        path:'/post/:id',
        component:'./src/templates/Post.vue'
      }
    ],
    StrapiTag:[  // 规则为 typeName+contentTypes
      {
        path:'/tag/:id',
        component:'./src/templates/Tag.vue'
      }
    ]
  }
}
```

#### 6.处理markdwon格式的文章内容

>  strapi content 是支持markdown的，且有预览功能

```html
<article>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.post.content)">

            </div>
        </div>
    </div>
</article>
```



```javascript
<script>
import MarkdownIt from 'markdown-it'
const    md = new MarkdownIt()

export default {
  name: 'PostPage',
  methods:{
    mdToHtml(markdown){
      return md.render(markdown)
    }
  }
}
</script>
```

#### 7.基本设置

single type 是单个数据（即只有一个数据）， content type 是数据集合

` singleTypes: ['impressum']`  拿单个数据节点

```javascript
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'BlogPost',
      }, 
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post','tag'], 
        // typeName: 'Strapi', // 默认为Strapi
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  templates:{
    StrapiPost:[  // 规则为 typeName+contentTypes
      {
        path:'/post/:id',
        component:'./src/templates/Post.vue'
      }
    ],
    StrapiTag:[  // 规则为 typeName+contentTypes
      {
        path:'/tag/:id',
        component:'./src/templates/Tag.vue'
      }
    ]
  }
  
}
```

请求的接口可以在权限设置那边查看或者去官网查看

![image-20201130204321685](../../../../local/bbNote/image/image-20201130204321685.png)