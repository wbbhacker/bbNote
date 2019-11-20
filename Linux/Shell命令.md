#shell命令

> 王斌 2019.11.19

1. ##### 别名设置

   1. alias 设置一个别名 `alias  alias_name='origin_command'`
   2. unaries 删除已设置别名 `unalias [-a][alias_name]`    
      1.  `unalias -a` 删除所有别名， `unalias alias_name` 仅删除alias_name的别名clear

2. 环境变量

   1. `env`查看环境变量
   2. `echo $PATH` 查看单个环境变量
   3. `set` 查看本地变量
   4. `sex=man` 设置变量. `PATH=${PATH}:/home/bin` 扩容变量
   5. `unset sex` 取消变量 

3. `uname -a` 显示电脑以及操作系统的相关信息

4. `tar` 命令

   1. 解压命令
      1. `tar -xf filename.tar.xz`

5. wget

   1. `wget downloadUrl` 下载文件