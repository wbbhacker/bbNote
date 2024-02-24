## vsCode

#### 1.设置格式化 4个空格

```javascript
"vetur.format.options.tabSize": 4 
```

#### 2.vsCode 插件

1. Bookmarks

2. `shift+command+p`   command Palette

3. 常用插件

   1. babel-javascript 高亮显示文件 如：最新es语法、flow、ts等
   2. bookmarks 书签
   3. sublime text keymap and setting importer 设置sub text 快捷键
   4. prettier 代码格式化
   5. GitLens 显示代码提交者
4. Markdown Preview Enhanced

3.保存是文件格式化：

`Format On Save`  勾选即可 

### 3.vsCode 快捷键

```mathematica
Command + Shift + [ 折叠代码块
Command + Shift + ] 展开代码块
Command + K Command + [ 折叠全部子代码块
Command + K Command + ] 展开全部子代码块
Command + K Command + 0 折叠全部代码块
Command + K Command + J 展开全部代码块
```

### 4.find 过滤文件

#### 1.superset

`*.test.ts,*.test.tsx,*.test.js,*_spec.jsx,*_spec.tsx,`

### 5.vue 文件单引号 格式化为双引号问题

通过在项目更目录下 `.prettierrc.js` 设置配置文件

https://stackoverflow.com/questions/53672888/vscode-not-changing-double-quotes-to-single-quotes-in-template-when-using-vetu



### 7.vsCode 自用配置

```json
{
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,   // 单引号
  "editor.formatOnSaveMode": "file",  // 保存时格式化文件
  "editor.defaultFormatter": "esbenp.prettier-vscode" // 格式化文件默认用prettier插件
}

```

