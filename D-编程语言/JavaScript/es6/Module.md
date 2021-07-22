### 1.Module

#### `export` 命令

> `export` 命令用于规定模块的对外接口

1. There ara two types of exports:
   1.  Named Exports (Zero or more exports per module) 
   2. Default Exports (One per module)

```javascript
// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports 
// Only expressions, functions or classes are allowed as the `default` export
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };
                               
```

2. 

this syntax:

```javascript
export foo from 'bar.js';
```

is equivalent to :

```javascript
import foo from 'bar.js';
export foo;
```

#### import

```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```

#### Dynamic Imports

```javascript
//第一种方式
import('/modules/my-module.js')
  .then((module) => {
    // Do something with the module.
  });
 // 第二种方式
 let module = await import('/modules/my-module.js');

```

#### Tree shaking 

`Tree shaking`是一个通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code) 行为的术语。

它依赖于ES2015中的 [import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 和 [export](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。

在现代 JavaScript 应用程序中，我们使用模块打包(如[webpack](https://webpack.js.org/)或[Rollup](https://github.com/rollup/rollup))将多个 JavaScript 文件打包为单个文件时自动删除未引用的代码。这对于准备预备发布代码的工作非常重要，这样可以使最终文件具有简洁的结构和最小化大小。

### 2.ES6模块机制

#### 1.ES6模块的特性

##### 1.ES6 模块输出的是值的引用，输出接口动态绑定，而 CommonJS 输出的是值的拷贝

1. ES6 输出值的引用

   ```javascript
   // a.js
   import { foo } from './b';
   console.log(foo);
   setTimeout(() => {
     console.log(foo);
     import('./b').then(({ foo }) => {
       console.log(foo);
     });
   }, 1000);
   
   // b.js
   export let foo = 1;
   setTimeout(() => {
     foo = 2;
   }, 500);
   // 执行：babel-node a.js
   // 执行结果：
   // 1
   // 2
   // 2
   ```

2. CommonJS 输出的是值的拷贝(原始值的拷贝)

   ```javascript
   // a.js
   var b = require('./b');
   console.log(b.foo);
   setTimeout(() => {
     console.log(b.foo);
     console.log(require('./b').foo);
   }, 1000);
   
   // b.js
   let foo = 1;
   setTimeout(() => {
     foo = 2;
   }, 500);
   module.exports = {
     foo: foo,
   };
   // 执行：node a.js
   // 执行结果：
   // 1
   // 1
   // 1
   ```

   > 如果想要在 CommonJS 中动态获取模块中的值，那么就需要借助于函数延时执行的特性。
   >
   > ```javascript
   > // a.js
   > var b = require('./b');
   > console.log(b.foo());
   > setTimeout(() => {
   >   console.log(b.foo());
   >   console.log(require('./b').foo());
   > }, 1000);
   > 
   > // b.js
   > let foo = 1;
   > setTimeout(() => {
   >   foo = 2;
   > }, 500);
   > module.exports = {
   >   foo: () => {
   >     return foo;
   >   },
   > };
   > // 执行：node a.js
   > // 执行结果：
   > // 1
   > // 2
   > // 2
   > ```
   >
   > 输出对象而言无差别

##### 2.ES6 模块编译时执行，而 CommonJS 模块总是在运行时加载。（因为编译时执行，所以才能在编译阶段做到tree shaking）

1. ES6 模块编译时执行

   1. import 命令会被 JavaScript 引擎静态分析，优先于模块内的其他内容执行。

      import 优先执行:

      ```javascript
      // a.js
      console.log('a.js')
      import { foo } from './b';
      
      // b.js
      export let foo = 1;
      console.log('b.js 先执行');
      
      // 执行结果:
      // b.js 先执行
      // a.js
      ```

   2. export 命令会有变量声明提前的效果。

      export 变量声明提升:

      ```javascript
      // a.js
      import { foo } from './b';
      console.log('a.js');
      export const bar = 1;
      export const bar2 = () => {
        console.log('bar2');
      }
      export function bar3() {
        console.log('bar3');
      }
      
      // b.js
      export let foo = 1;
      import * as a from './a';
      console.log(a);
      
      // 执行结果:
      // { bar: undefined, bar2: undefined, bar3: [Function: bar3] }
      // a.js
      //a 模块引用了 b 模块，b 模块也引用了 a 模块，export 声明的变量也是优于模块其它内容的执行的，但是具体对变量赋值需要等到执行到相应代码的时候。(当然函数声明和表达式声明不一样，这一点跟 JS 函数性质一样，这里就不过多解释)
      ```

#### 2.模块不会重复执行

无论是 ES6 模块还是 CommonJS 模块，当你重复引入某个相同的模块时，模块只会执行一次。

```javascript
// a.js
import './b';
import './b';

// b.js
console.log('只会执行一次');

// 执行结果：
// 只会执行一次
```

##### 1.CommonJS 模块循环依赖

```javascript
// a.js
console.log('a starting');
exports.done = false;
const b = require('./b');
console.log('in a, b.done =', b.done);
exports.done = true;
console.log('a done');

// b.js
console.log('b starting');
exports.done = false;
const a = require('./a');
console.log('in b, a.done =', a.done);
exports.done = true;
console.log('b done');

// node a.js
// 执行结果：
// a starting
// b starting
// in b, a.done = false
// b done
// in a, b.done = true
// a done
```

结合之前讲的特性很好理解，当你从 b 中想引入 a 模块的时候，因为 node 之前已经加载过 a 模块了，所以它不会再去重复执行 a 模块，而是直接去生成当前 a 模块吐出的 module.exports 对象，因为 a 模块引入 b 模块先于给 done 重新赋值，所以当前 a 模块中输出的 module.exports 中 done 的值仍为 false。而当 a 模块中输出 b 模块的 done 值的时候 b 模块已经执行完毕，所以 b 模块中的 done 值为 true。

从上面的执行过程中，我们可以看到，在 CommonJS 规范中，当遇到 require() 语句时，会执行 require 模块中的代码，并缓存执行的结果，当下次再次加载时不会重复执行，而是直接取缓存的结果。正因为此，出现循环依赖时才不会出现无限循环调用的情况。虽然这种模块加载机制可以避免出现循环依赖时报错的情况，但稍不注意就很可能使得代码并不是像我们想象的那样去执行。因此在写代码时还是需要仔细的规划，以保证循环模块的依赖能正确工作。

所以有什么办法可以出现循环依赖的时候避免自己出现混乱呢？一种解决方式便是将每个模块先写 exports 语法，再写 requre 语句，利用 CommonJS 的缓存机制，在 require() 其他模块之前先把自身要导出的内容导出，这样就能保证其他模块在使用时可以取到正确的值。比如：

```javascript
// a.js
exports.done = true;
let b = require('./b');
console.log(b.done)

// b.js
exports.done = true;
let a = require('./a');
console.log(a.done)
// 缺点是要改变每个模块的写法，而且大部分同学都习惯了在文件开头先写 require 语句。
```

##### 2.ES6模块循环依赖

```javascript
// a.js
console.log('a starting')
import {foo} from './b';
console.log('in b, foo:', foo);
export const bar = 2;
console.log('a done');

// b.js
console.log('b starting');
import {bar} from './a';
export const foo = 'foo';
console.log('in a, bar:', bar);
setTimeout(() => {
  console.log('in a, setTimeout bar:', bar);
})
console.log('b done');

// babel-node a.js
// 执行结果：
// b starting
// in a, bar: undefined
// b done
// a starting
// in b, foo: foo
// a done
// in a, setTimeout bar: 2
```

##### 3.动态import()

ES6 模块在编译时就会静态分析，优先于模块内的其他内容执,所以导致了我们无法写出像下面这样的代码：

```javascript
if(some condition) {
  import a from './a';
}else {
  import b from './b';
}

// or 
import a from (str + 'b');
```

`import()` 允许你在运行时动态地引入 ES6 模块, 与`require.ensure` 用途不同：

1. require.ensure 的出现是 webpack 的产物，它是因为浏览器需要一种异步的机制可以用来异步加载模块，从而减少初始的加载文件的体积，所以如果在服务端的话 require.ensure 就无用武之地了，因为服务端不存在异步加载模块的情况，模块同步进行加载就可以满足使用场景了。 CommonJS 模块可以在运行时确认模块加载。

2. 而` import() `则不同，它主要是为了解决 ES6 模块无法在运行时确定模块的引用关系，所以需要引入` import()`

   用法：

   1. 动态的 import() 提供一个基于 Promise 的 API
   2. 动态的import() 可以在脚本的任何地方使用
   3. import() 接受字符串文字，你可以根据你的需要构造说明符

```javascript
// a.js
const str = './b';
const flag = true;
if(flag) {
  import('./b').then(({foo}) => {
    console.log(foo);
  })
}
import(str).then(({foo}) => {
  console.log(foo);
})

// b.js
export const foo = 'foo';

// babel-node a.js
// 执行结果
// foo
// foo
```

1. 同时加载多个模块的话，可以是 Promise.all 进行并行异步加载。

```javascript
Promise.all([
  import('./a.js'),
  import('./b.js'),
  import('./c.js'),
]).then(([a, {default: b}, {c}]) => {
    console.log('a.js is loaded dynamically');
    console.log('b.js is loaded dynamically');
    console.log('c.js is loaded dynamically');
});
```

2. Promise.race 方法，它检查哪个 Promise 被首先 resolved 或 reject。我们可以使用import()来检查哪个CDN速度更快

```javascript
const CDNs = [
  {
    name: 'jQuery.com',
    url: 'https://code.jquery.com/jquery-3.1.1.min.js'
  },
  {
    name: 'googleapis.com',
    url: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'
  }
];

console.log(`------`);
console.log(`jQuery is: ${window.jQuery}`);

Promise.race([
  import(CDNs[0].url).then(()=>console.log(CDNs[0].name, 'loaded')),
  import(CDNs[1].url).then(()=>console.log(CDNs[1].name, 'loaded'))
]).then(()=> {
  console.log(`jQuery version: ${window.jQuery.fn.jquery}`);
});
```







