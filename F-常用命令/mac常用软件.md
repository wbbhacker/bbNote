### mac

#### 1.常用命令

1. `Command+Shift+.`

2. 显示/隐藏 隐藏文件/文件夹

3. `Command+H` 隐藏当前应用程序窗口

4. `Command+Option+H` 隐藏其它应用程序窗口

5. `Command+I` 显示文件简介

6. 截图
   - command+shift+3 全屏截图
   - command+shift+4 局部截图
   - shift+command+4 ，在按空格  窗口截图 
   - shift+command+5 截图+录屏菜单
   
7. 设置访达默认窗口大小

   关闭所有访达窗口，然后打开一个窗口，按住`option`键并调整好你希望的窗口大小，然后关闭当前窗口，下次打开就默认是你设置的窗口大小了

#### 2.常用软件

1. ##### 日常软件

   1. WPS、百度网盘、迅雷、BitterZip（解压工具）、Tencent lemon（系统清理工具）

2. ##### 开发软件

   1. iTerm2+oh my Zsh+PowerLine+PowerFont  终端工具
   2. oh my Zsh 插件   终端工具
      1. wd
      2. zsh-autosuggestions 
      3. zsh-syntax-highlighting
   3. postman 接口测试
   4. Wireshark 抓包工具
   5. Axure 原型设置
   6. Beyond Compare  文件比较
   7. Alfred  文件搜索
   8. Typora markdown 软件
   9. SourceTree  gitlab 可视化软件
   10. Charles 抓包工具
   
       > [10 款好用的 mac 抓包工具推荐（2024 最新）)](https://promptchoose.com/ai-tools/mac-curl-tools/)
   11. MarginNote  pdf阅读软件
   12. VScode、Sublime Text、Vim  开发工具
       1. Fold
       2. Bookmarks
       3. Sublime Text Keymap and Settings Importer
   13. magnet 
   14. SecureCRT （终端仿真 SSH）   ssh 连接工具
   15. SecureFx 文件上传下载工具
   16. Homebrew  管理工具
   17. Navicat Premium 数据库连接工具
   18. underStand  源代码阅读工具
   19. StarUML  UML 设计工具
   20. TextLab 数据格式
   21. ps 
   22. patterns 正则表达式工具
   23. istat menus  性能监控工具
   24. WidsMobViewer 图片查看工具
   25. xmind 思维导图工具
   26. cleanMyMac mac系统清理软件

#### 3.关闭进程

```
sudo mdutil -a -i on/off  //打开/关闭Spotlight进程
sudo launchctl unload -w /System/Library/LaunchAgents/com.apple.Spotlight.plist //关闭Spotlight进程
```

#### 4.重装系统

https://support.apple.com/zh-cn/guide/mac-help/mchlp1599/10.15/mac/10.15

