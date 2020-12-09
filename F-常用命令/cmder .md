#### 1.vscode 集成 cmder

`shift+ctrl+p` 选择 User settings > Features > Terminal > Automation shell: Windows, Edit in settings.json

```json
"terminal.integrated.shell.windows": "cmd.exe",
"terminal.integrated.shellArgs.windows": ["/k","D:\\programWork\\cmder\\vendor\\init.bat"]
```

#### 2.cmder 启动分屏

```bash
-cur_console:s1T50H -cur_console:d:D:\workspace -cur_console:C:D:\programWork\cmder\icons\cmder.ico cmd /c ""%ConEmuDir%\..\git-for-windows\bin\bash" --login -i"

-cur_console:s2T50H -cur_console:d:D:\workspace -cur_console:C:D:\programWork\cmder\icons\cmder.ico cmd /c ""%ConEmuDir%\..\git-for-windows\bin\bash" --login -i"

-cur_console:s1T50V -cur_console:d:D:\workspace -cur_console:C:D:\programWork\cmder\icons\cmder.ico cmd /c ""%ConEmuDir%\..\git-for-windows\bin\bash" --login -i"

-cur_console:s2T50V -cur_console:d:D:\workspace -cur_console:C:D:\programWork\cmder\icons\cmder.ico cmd /c ""%ConEmuDir%\..\git-for-windows\bin\bash" --login -i"
```

