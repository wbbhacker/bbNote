## webpack配置属性

1. entry 入口

2. output 出口

   ```javascript
   output:{
   	filename:'bundle.js'
   }
   path:path.join(__dirname,'output')
   ```

   

3. mode 模式

4. module

   ```javascript
   module:{
   	rules:[
       {
         test:'', //根据打包过程中所遇到文件路径匹配是否使用这个loader
         use:[]  // 指定具体的loader, 从后往前执行loader
       }
     ]
   }
   ```

   