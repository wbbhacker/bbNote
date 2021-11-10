### 1.git命令

1. `git reset --hard commitId ` 

   **删除**工作空间改动代码，撤销commit，撤销git add .

2. `git reset --soft commitId`  

   **不删除**工作空间改动代码，撤销commit，不撤销git add . 

3. `git reset --mixed commitId`

​       **不删除**工作空间改动代码，撤销commit，并且撤销git add . 操作

> `git revert commitId` 撤销 commit 提交

4. `git log` 

    记录所有commit历史

5. `git reflog`  

    记录所有HEAD历史

6. `git branch -a` 

   查看所有分支包括远程分支

7. `git branch branchName`

   创建分支

8. `git branch -d branchNname`

   删除分支

   > `git push origin --delete [branch_name]` 删除远程分支
   >
   > ` git remote show origin` 以查看remote地址，远程分支，还有本地分支与之相对应关系等信息
   >
   > `git remote prune origin`  本地删除远程不存在的分支

9. `git config --global alias.st status`

   git 命令缩写

10. `git config --global user.name "yourname"`  `git config --global user.email "youremail"` 

     配置全局用户名跟邮箱

    局部配置（命令行需要进入对应的代码工作目录）

    `git config user.name "name"`  `git config user.email "email"`

11. `git config --list`

    查看git配置

12. ` git config credential.helper wincred`

    解决git密码保存不了 fatal: unable to get credential storage lock: File exist

13. `git checkout . ` 删除所有 修改

14. `git clean -f ` 删除所有未跟踪文件  `git clean -fd` 删除所有未跟踪文件和目录

     `git clean -nf` 1`git clean -nfd`  强烈建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删
    
15. `git clone -b branchName gitAddress dirName`

     clone 具体分支到指定文件夹
    
16. `git rebase `

     https://juejin.cn/post/6844903600976576519 git合并commit
    
17. `git stash`

     1. `git stash list`  查看stash存储

     2. `git stash save "save message"`  存储

     3. `git stash show`  默认显示第一个存储 

        >  `git stash show stash@{$num}`  显示第几stash

     4. `git stash apply` 应用某个存储，但不会从存储列表中删除

        > `git stash apply stash@{$num}` 应用第几个存储

     5. `git stash pop` 应用并删除  

        > `git stash pop stash@{$num}`

     6. `git stash drop stash@{$num}` 从存储列表中删除存储

     7. `git stash clear `  删除所有缓存的stash

18.撤销merge

https://segmentfault.com/q/1010000000140446

19.删除分支

`git branch -d branchName`  删除本地分支

`git push  origin --delete branchName` 删除远程分支

20.远程仓库操作

​	`git remote `







### 2.git 提交功能备注

feat: 新功能 （feature）
fix: 修补 bug
docs: 文档（document）
style: 格式/样式（不影响代码运行的变动）
refactor: 重构（既不是新增功能，也不是修改bug的代码改动）
test: 增加测试
chore: 构建过程或辅助工具的变动
perf: 提高性能的代码更改
build: 影响构建系统或外部依赖项的更改（示例范围： gulp, npm）
ci: 对CI配置文件和脚本的更改（示例范围：Travis，Circle，BrowserStack）
revert: 恢复到以前的提交

https://github.com/liuchengxu/git-commit-emoji-cn

### 3.将子文件夹拆分成新仓库

`git filter-repo --path FOLDER-NAME`

https://docs.github.com/cn/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository

### 4.移动文件 [git mv](https://git-scm.com/docs/git-mv)

`git mv <source> <destination>`

