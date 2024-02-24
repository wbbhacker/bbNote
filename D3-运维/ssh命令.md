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

#### 4.ssh-agent 客户端启动

`eval "$(ssh-agent -s)"` 是一个在 Unix-like 系统（包括 Linux 和 macOS）上常用的命令，用于启动 SSH 代理（agent）并设置环境变量，以便其他 SSH 工具可以与代理通信。

当你运行这个命令时，它会执行以下操作：

1. 启动 `ssh-agent`，这是一个负责存储私钥和管理公钥身份验证的后台程序。
2. `ssh-agent` 输出一些设置环境变量的 shell 命令，通常是 `SSH_AUTH_SOCK` 和 `SSH_AGENT_PID`。
3. `eval` 命令执行 `ssh-agent` 输出的 shell 命令，这样当前的 shell 会话就知道如何连接到 `ssh-agent`。

`SSH_AUTH_SOCK` 环境变量保存了一个文件路径，这个文件是一个套接字，SSH 客户端用它来与 `ssh-agent` 通信。`SSH_AGENT_PID` 环境变量保存了 `ssh-agent` 进程的进程 ID。

这个命令通常在启动新的终端会话时运行，以确保 SSH 代理运行并准备好管理你的 SSH 密钥。一旦 SSH 代理启动，你可以使用 `ssh-add` 命令将你的私钥添加到代理中，这样在进行 SSH 连接时就不需要每次都输入密钥的密码了。

如果你在使用 Git Bash、Cygwin 或者 WSL（Windows Subsystem for Linux）等类似 Unix 的环境中工作，这个命令也应该是有效的。在标准的 Windows 命令行或 PowerShell 中，这个命令可能不会工作，因为它们不支持 `eval` 命令或者可能没有预装 `ssh-agent`。

> 启动 `ssh-add` 代理之后 添加ssh 秘钥到ssh 代理 `ssh-add ~/.ssh/your_private_key`
>
> `ssh-add -l` 

> 解决 这个问题  如果你已经正确设置了 SSH key，并且它已经添加到了你的 Git 托管服务账户中，这样做应该可以避免在使用 `git clone` 和其他 Git 操作时被要求输入账号和密码。如果问题仍然存在，你可能需要检查你的 SSH key 是否已经正确加载到 SSH agent 中，命令如下：

