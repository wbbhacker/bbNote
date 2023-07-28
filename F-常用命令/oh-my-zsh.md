### 1.主题配置路径

`~/.zshrc`

### 2.修改主题路径

`vim ~/.oh-my-zsh/themes/agnoster.zsh-theme`

### 3.只显示当前文件夹

`/Users/binbin.wang/.oh-my-zsh/themes/agnoster.zsh-theme`

`%1~` 只显示当前文件夹

```shell
prompt_dir() {
  prompt_segment blue $CURRENT_FG '%1~'
}
```

```shell
build_prompt() {
  RETVAL=$?
  # prompt_status
  # prompt_virtualenv
  # prompt_aws
  # prompt_context
  prompt_dir
  prompt_git
  prompt_bzr
  prompt_hg
  prompt_end
}
```

