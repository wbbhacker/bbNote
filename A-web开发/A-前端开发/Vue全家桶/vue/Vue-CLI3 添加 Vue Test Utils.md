###Vue-CLI3 和 Vue Test Utils 用 Karma 测试单文件组件

#### 安装与配置

##### 1.安装依赖包

```javascript
npm install --save-dev @vue/test-utils karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha karma-chai chai
```

##### 2.在`package.json` 定义一个测试脚本

```javascript
// package.json
{
  "scripts": {
    "test": "karma start --single-run"
  }
}
```

##### 3.在项目的主目录创建一个 `karma.conf.js` 文件

```	
// karma.conf.js

let webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],

    files: ['test/**/*.spec.js'],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec'],

    browsers: ['Chrome']
  })
}
```

#### 测试用例

##### 1.在 `src` 中创建一个名为 `Counter.vue` 的文件

``` javascript
<template>
  <div>
    {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },

    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>
```

##### 2.然后添加一个名为 `test/Counter.spec.js` 的测试文件

```javascript
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).contains('1')
  })
})
```

##### 3.运行测试

```javascript
npm run test
```

```
[GitHub](http://github.com)
```

> 参考文章
>
> [Vue Test Utils官方文档](https://vue-test-utils.vuejs.org/zh/guides/#用-karma-测试单文件组件)

