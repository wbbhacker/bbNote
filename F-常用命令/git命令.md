# git命令

> wangbin

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

9. `git config --global alias.st status`

   git 命令缩写

10. `git config --global user.name "yourname"`  `git config --global user.email "youremail"` 

     配置用户名跟邮箱

11. `git config --list`

    查看git配置

12. ` git config credential.helper wincred`

    解决git密码保存不了 fatal: unable to get credential storage lock: File exists

    