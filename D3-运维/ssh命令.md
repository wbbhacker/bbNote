# ssh 命令

#### 1.ssh 登录

`ssh username@ipadress`

#### 2.ssh 创建秘钥

1. 生成ssh-key

   `ssh-keygen -t rsa -C "aaa@gmail.com" -f ~/.ssh/github_id_rsa`

2. 添加SSH agent

   `ssh-add ~/.ssh/github_id_rsa`

   > 在执行 `ssh-add ~/.ssh/id_ras` 时发生此错，
   >
   > 执行如下命令　`ssh-agent bash`
   > 然后再执行 `ssh-add ~/.ssh/id_ras` 即可
   >
   > win 下，在git bash 中执行正常

3. 为了让两个ssh-key共存，在/.ssh下生成一个`config`文件,通过config文件指定不同的私钥对应的不同git服务器

   ```
   #GitHub(2404016117@qq.com)
   Host github.com
   HostName github.com
   User wbbhacker
   IdentityFile ~/.ssh/github_id_rsa 
   PreferredAuthentications publickey
   
   #GitLab(wangbinbinc@enn.cn)
   Host git.ennew.alpha
   HostName git.ennew.alpha
   User 王彬彬
   IdentityFile ~/.ssh/id_rsa
   PreferredAuthentications publickey
   ```

#### 3.mac .ssh 路径





