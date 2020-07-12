### Module

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