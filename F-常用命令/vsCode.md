### 1.设置格式化 4个空格

```javascript
"vetur.format.options.tabSize": 4 
```

### 2.vsCode 插件

[vsCode 插件市场](https://marketplace.visualstudio.com/vscode) 

1. Bookmarks

2. `shift+command+p`   command Palette

3. 常用插件

   1. babel-javascript 高亮显示文件 如：最新es语法、flow、ts等
   2. bookmarks 书签
   3. sublime text keymap and setting importer 设置sub text 快捷键
   4. prettier 代码格式化
   5. GitLens 显示代码提交者
   6. Gitlens inspect 查看代码历史：单文件历史 、单行历史等

4. Markdown Preview Enhanced

5. theme-timer 

   An extension which switches Color themes based on a schedule

6. Todo Tree

   Show TODO, FIXME, etc. comment tags in a tree view

7. SVG

   SVG Coding, Minify, Pretty, Preview All-In-One

8. vsCode-icons

   VSCode官方出品的图标库


12. **koroFileHeader**

    自动添加**[头部注释](https://zhida.zhihu.com/search?q=头部注释&zhida_source=entity&is_preview=1)**和**函数注释**的插件

13. GItLens 

14.MarsCode Ai Coding

15.postman

16.Path Intellisense 

Visual Studio Code plugin that autocompletes filenames.

17.JavaScript(ES6) code snippets 

DOM对象、js对象代码提示

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

### 6.保存是文件格式化：

`Format On Save`  勾选即可 

### 7.vsCode 自用配置

```json
{
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,   // 单引号
  "editor.formatOnSaveMode": "file",  // 保存时格式化文件
  "editor.defaultFormatter": "esbenp.prettier-vscode" // 格式化文件默认用prettier插件
}

```

### 8.vscode code 命令怎么安装

要在 VSCode 中使用 `code` 命令行工具，可以按照以下步骤进行配置： 1. 打开 VSCode。 2. 按下 `Ctrl + Shift + P`（或 `Cmd + Shift + P` 在 macOS 上）调出命令面板。 3. 输入 `Shell Command: Install 'code' command in PATH`，然后按下回车键。 执行完这些步骤后，你应该能够在终端中使用 `code` 命令来打开文件或文件夹。注意，如果终端已经打开，可能需要重新启动终端以生效对路径的更改。
