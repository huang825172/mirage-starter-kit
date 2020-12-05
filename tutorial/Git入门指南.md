# Git 入门指南

Git 是一个开源的分布式版本控制系统。使用 Git 可以完成项目开发过程中的代码编写、版本管理、冲突合并等工作。本指引将基于 `Mirage-Starter-Kit` ，展示使用 git 添加代码更改，编写提交信息，提交代码更改，同步代码更改的步骤。

## 基本概念

### Github

`Github` 是一个软件项目托管平台，只支持 `Git` 作为唯一的存储格式。除了提供代码托管服务，`Github` 还提供了诸如持续集成、代码检查、项目运营、社交等功能。`Github` 不是唯一一个支持 `Git` 软件的网站，也不是 `Git` 的创始者，类似的网站系统有 `GitLab`、`Gitea` 等。

### 仓库（Repository）

Git 系统中的代码以仓库的形式存储。一般来说，一个项目对应一个 Git 仓库。仓库中的代码可以被查看、下载（**Clone**），也可以向仓库进行代码推送（**Push**）。一个仓库不仅包含其中的软件代码、还包括所有文件的更改历史信息：更改人、更改时间、更改内容等。

### 提交（Commit）

要向仓库中提交新的代码，首先需要将代码的更改保存为提交。一次提交中可以包含多个文件的修改情况，并带有一段描述此次提交内容的文本（**Commit log**）。提交新建后会被保存在本地，本地可以累计保存多次提交，并在下次 **Push** 时一次性推送到仓库。

## 实践

根据上述概念，使用 Git 工具进行协作开发的基本步骤包括：

+ 克隆（下载）仓库
+ 同步仓库
+ 添加文件修改
+ 创建新提交
+ 推送提交

### 克隆（下载）仓库

> **在适当的项目文件夹下执行 `git clone`**

```bash
$ git clone https://github.com/limBuddies/Blog.git
```

下载完成后，一个名为 `mirage-starter-kit` 的文件夹将被创建，包含整个模板的代码。

### 同步仓库

在每次进行开发、提交之前，最好先将本地仓库内容于云端存储同步，尽可能避免出现内容冲突。

> **执行 `git pull`**

```bash
$ git pull
```

### 添加文件修改

此处进行一个文件的修改，以演示修改提交。

> **对 `README.md` 进行如下修改**

```markdown
# Blog

![Docker Image](https://github.com/limBuddies/Blog/workflows/Docker%20Image/badge.svg)

基于 Mirage-Starter-Kit 构建的微型博客。

![Mirage](mirage.png)

<!-- 添加下面一行内容 -->
## 新增加的说明

<!-- 以下内容省略 -->
```

> **在 `mirage-starter-kit` 文件夹下执行 `git add`**

```bash
$ git add -A
```

`-A` 选项指的是 `All`，即添加当前仓库下所有文件更改。

### 创建新提交

> **执行 `git commit`**

```bash
$ git commit -m "Add: README.md section."
```

`-m` 选项后跟一个字符串，代表此次提交的 `Commit log`，用于说明更改的内容。`Commit log` 的一般格式如下：

`Add:` `Fix:` `Feat:` `Del:` 前缀，分别代表增加文件、修正错误、增加功能、删除文件。后跟具体描述信息，尽量简短可读。

### 推送提交

在执行首次推送之前，需要先对 `Git` 做一些配置

> **执行 `git config`**

```bash
$ git config --global user.name "Your username"
$ git config --global user.email your@email.com
```

> **执行 `git push`**

```bash
$ git push
```

首次推送可能要求输入 `Github` 密码。

如果一切正常，打开 [https://github.com/limBuddies/Blog](https://github.com/limBuddies/Blog) ，即可看到提交的更改。

## 总结

以上就是使用 `Git` 工具最基本的流程。在实际开发过程中，还可能用到 `fork`，`git merge`，`git rebase` 等操作，具体技术可以在开发过程中逐一学习。