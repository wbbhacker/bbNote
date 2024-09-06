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

9. Color Highlight

   看名字就知道了，用于给我们代码中的颜色进行高亮展示的插件。

10. **Trailing Spaces**

   把[尾随空格](https://zhida.zhihu.com/search?q=尾随空格&zhida_source=entity&is_preview=1)显示出来。

11. CodeIf

    变量命名推荐  https://bailongma.yuque.com/fbyium/ucue94/vlrgb9

12. **koroFileHeader**

    自动添加**[头部注释](https://zhida.zhihu.com/search?q=头部注释&zhida_source=entity&is_preview=1)**和**函数注释**的插件

13. 

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

