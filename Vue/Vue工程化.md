# Vue工程化

>王斌

## vue-cli3 修改 eslint配置

1. 在项目根目录下package.json文件

   ```javascript
   rules: {
       "规则名": [规则值, 规则配置]
   }
   
   /*
    规则值
   "off"或者0    //关闭规则关闭
   "warn"或者1    //在打开的规则作为警告（不影响退出代码）
   "error"或者2    //把规则作为一个错误（退出代码触发时为1）
   */
   ```

2. 规则值

   ```javascript
   "off"或者0    //关闭规则关闭
   "warn"或者1    //在打开的规则作为警告（不影响退出代码）
   "error"或者2    //把规则作为一个错误（退出代码触发时为1）
   ```

3. 实例

   1. 不检测 "console"、"定义变量但未使用"

   ```javascript
   "eslintConfig":{
     "rules": {
       "no-unused-vars": 0,
       "no-console": [
         0,
         "log",
         "error"
       ]
     }
   }
   
   ```
   2. 全局不检测 "未定义变量直接使用" 如 _ 、_htm

   ```javascript
   "eslintConfig":{
     "globals":{
       "_hmt":"writable",
       "_":"writable"
     }
   }
   
   ```

   > 单个文件不检测 的话，在js最上面加上 `/* global _, _htm */`

   