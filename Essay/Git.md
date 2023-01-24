# git 笔记 

# 1.安装
如果你是Mac用户，那么使用下边命令进行安装。
``
brew instal git
``
如果是Linux的话，那么就是
``
apt-get install git 或者 yum install git
``
如果你是windows的话，那么去git官网下载exe直接就可以使用了（需要科学上网）。

# 2.新建版本库
我们进入GitHub仓库，点击New，这样我们就会新建出来一个代码仓库，
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191130145823313.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)

来到下边的页面，我们可以选择仓库的名称，描述文件和是否在新建仓库的时候新建read.md文件。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191130145918538.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)

我一般是通过命令行去新建一个新的代码仓库。
我们在想要关联仓库的文件夹中打开终端，输入如下的代码：
`` echo "# xxx-" >> README.md `` 这句是把一“# xxx- ”这个字符串写到readme.md这个文件夹中，同时也会在这个目录新建readme.md这个文件。
```git init```是初始化git仓库，这样这个文件夹才会被视为是git的项目文件，如果终端执行```ls -a```的话，我们才能看见一个.git的隐藏文件夹。之所以称它为文件夹而不是文件，因为在终端确实是可以cd进去的。

有了.git文件夹，我们才可以执行后边的命令把项目文件夹关联到github仓库中。
```git add README.md```这句是把Readme.md这个文件放在暂存区，其实更多的时候，我这个步骤使用的代码是```git add .```或者```git add  -A```，如果用Linux使用经验的朋友们都知道，```.```在Linux文件夹中是当前目录的意思，也就是说这两个命令其实是把当前文件夹的所有文件都提交到暂存区，方便我们后续的操作。

```commit -m "这里写提交信息，可以理解为注释"```这句就是把代码暂存区的代码变成可以提交的状态，后边吧我们之前push就可以了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191130150054355.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)
如果你是第一次建立仓库并且关联文件夹的话，我们可以使用这两句把GitHub上的仓库信息储存到我们的.git文件夹里，换句话说，就是仓库和文件夹的绑定。
```
git remote add origin https://github.com/Github用户名/项目名称-git
git push -u origin master
```
```git push -u origin master```是默认提交到master分支，如果后续提交，直接```git push```就好了。

git init——初始化仓库

git status——查看仓库的状态

git add——向暂存区中添加文件 (如何清空暂存区呢)

git commit——保存仓库的历史记录

git commit -am --改动文件而没有新建文件的时候合并提交

git commit --amend——修改提交信息

git log——查看提交日志

git log --graph——以图表形式查看分支

git reflog命令，查看当前仓库的操作日志

git diff——查看更改前后的差别

git branch——显示分支一览表

git checkout -b——创建、切换分支

git checkout - 切换回上一个分支

git merge——合并分支

git reset——回溯历史版本

```
git rest --hard hash
```

git rebase -i HEAD~n ——压缩历史  (多个commit压缩成一个)pick -> fixup

git remote add——添加远程仓库

git push——推送至远程仓库

```
git push -u origin master
```

git pull

```
git pull origin dev
```

### notes:

Pro Git

LearnGitBranching

tryGit



### tricks:

```
git checkout -b branch-name origin/branch-name
```


### 新建git仓库的命令说明

##### Git global setup

```shell
git config --global user.name "username"
git config --global user.email your-email
```


在Git中，用`HEAD`表示当前版本，也就是最新的提交`1094adb...`，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`

`git reset --hard HEAD^`  	回退到上次提交

`git reset --hard HEAD^^` 	回退到上上次提交

`git reset --hard HEAD~n` 	回退到上n次提交

`git reset --hard commit_id`	回退到指定id

`git reflog` 用来记录每一次命令

`git diff HEAD -- filename` 查看工作区和版本库里面最新版本的区别



撤销操作：

工作区： `git checkout -- filename`  撤销工作区

暂存区：`git reset HEAD <file>`  撤销暂存区,重新放回工作区

已经commit的时候使用reset



删除操作：

暂存区删除： `git rm `

误删除恢复：git checkout -- file （等于撤销工作区的操作）



`git stash`  `git stash list`

`git stash apply`不删除stash，需要使用`git stash drop` （`git stash apply stash@{0}`）

`git stash pop`	恢复的同时删除删除stash

`git cherry-pick `命令，把bug提交的修改“复制”到当前分支，避免重复劳动






##### Create a new repository

```shell
git clone git@xxxx.git
cd test
touch README.md
git add README.md
git commit -m "add README"
```



##### Push an existing folder

```shell
cd existing_folder
git init
# 关联远程仓库命名为origin， 可以使用git remote rm origin删除
git remote add origin git@xxxx.git
git add .
git commit -m "Initial commit"
```

##### Push an existing Git repository

```shell
cd existing_repo
# git仓库迁移
git remote rename origin old-origin
git remote add origin git@xxxx.git
```



------
`git remote -v`  查看关联远程仓库

git push -u origin master  默认把mater分支提交到origin远程，之后只要git push就行了





Github和gitee双向同步

```
$ git remote set-url --add origin git@xxxx.git
```

git push 就会同时同步github和gitee了，如果分别拉取和推送的话同**Push an existing Git repository**

## git 如何管理远程仓库

https://docs.github.com/cn/free-pro-team@latest/github/using-git/managing-remote-repositories



远程仓库有https协议和ssh 协议的两种，一般的来说，一个本地仓库对应一个远程仓库，当然也有对应多个的时候，比如说git仓库迁移又不想丢失原来的commit信息，这个时候就可以对应原来的远程分支（origin）和新的远程（new）

```
https://github.com/user/repo.git
git@github.com:user/repo.git
```

有关这些 URL 之间差异的信息，请参阅“[我应使用哪种远程 URL？](https://docs.github.com/cn/free-pro-team@latest/articles/which-remote-url-should-i-use)”

### 创建远程

使用 `git remote add` 命令将远程 URL 与名称匹配。 例如，在命令行中输入以下命令：

```shell
git remote add origin  <REMOTE_URL> 
```

这会将名称 `origin` 与 `REMOTE_URL` 关联。

您可以使用命令 `git remote set-url` 来[更改远程 URL](https://docs.github.com/cn/free-pro-team@latest/articles/changing-a-remote-s-url)。

### 添加远程

`git remote add` 命令使用两个参数：

- 远程命令，如 `origin`
- 远程 URL，如 `https://github.com/user/repo.git`

```shell
$ git remote add origin https://github.com/user/repo.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://github.com/user/repo.git (fetch)
> origin  https://github.com/user/repo.git (push)
```

### 更改远程

`git remote set-url` 命令可更改现有远程仓库的 URL。

```shell
$ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

### 重命名远程

使用 `git remote rename` 命令可重命名现有的远程。

```shell
$ git remote -v
# 查看现有远程
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# 将远程名称从 'origin' 更改为 'destination'

$ git remote -v
# 验证远程的新名称
> destination  https://github.com/OWNER/REPOSITORY.git (fetch)
> destination  https://github.com/OWNER/REPOSITORY.git (push)
```

### 删除远程

使用 `git remote rm` 命令可从仓库中删除远程 URL。

`git remote rm` 命令使用一个参数：

- 远程名称，例如 `destination`

```shell
$ git remote -v
# 查看当前远程
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
> destination  https://github.com/FORKER/REPOSITORY.git (fetch)
> destination  https://github.com/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# 删除远程
$ git remote -v
# 验证其已删除
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
```

> `git remote rm` 不会从服务器中删除远程仓库。 它只是从本地仓库中删除远程及其引用。


最近入了mac的坑，装了Xcode要写c++，索性直接配置了xcode的git，省着命令行commit了。

首先新建工程，一定要点create git。。。。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911071635629.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)

接下来添加git信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911071902437.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)
这里可以关联github已经有的仓库，也可以使用新的仓库，这里我选择新的仓库。接下来填入github的用户名和密码确认就发现远程github就已经创建了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911071959945.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)
这个就是我刚才新建的仓库，在github上边已经显示出来了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911072147512.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)

接下来是commit和pull代码，这里没有add的选项，可能鼠标直接代替了吧。
![](https://img-blog.csdnimg.cn/2019091107250154.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)

我们添加了一行代码，一会提交试试。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911072550568.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)

点击这里的commit，我们可以再选中我们的main.cpp。
![](https://img-blog.csdnimg.cn/20190911072647174.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)

git已经告诉我们改动了什么。点击右下角的commit file。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911072750138.png)
然后push就ok啦。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911072845894.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODc4MTQ5OA==,size_16,color_FFFFFF,t_70)

在github已经看见提交信息。大功告成！！！！！

PS：新建branch

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911073543539.png)

