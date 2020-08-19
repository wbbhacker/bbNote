#### 1.打开提交控制台

**Preferences > Advanced > Always display full console output**

#### 2.git hooks不起作用，`Can't find npx` `Can't find node`

解决方法：`~/.huskyrc` 里面添加 `PATH="/usr/local/bin:$PATH"`

