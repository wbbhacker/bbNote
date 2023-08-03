### Python 基础

1. mac切换python2、3

   ```shell
    vim ~/.bash_profile
    #下面代码注释掉即可
    #alias python="/Library/Frameworks/Python.framework/Versions/3.6/bin/python3.6"  
   ```

2. 进入虚拟环境

   `source ./bin/activate`

3. 退出虚拟环境

   `deactivate`
   
4. 创建虚拟环境

   `python3 -m venv [venvName]`

   example:`python3 -m venv venv`  `source venv/bin/activate`
   
   > 在 `/` 目录下没有权限，就在自己的 `~/` 用户目录下执行
