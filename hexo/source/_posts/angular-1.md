---
title: Angular2
date: 2017-08-01T10:29:11.000Z
tags:
  - Angular2
---
## 1.搭建本地开发环境
### 安装node和npm，这个就不说了。
```html
在终端/控制台窗口中运行命令 node -v 和 npm -v， 来验证一下你正在运行 node 6.9.x 和 npm 3.x.x 以上的版本。 更老的版本可能会出现错误，更新的版本则没问题。
```

## 2.安装Angular-CLI
### Angular CLI是一个命令行界面工具，它可以创建项目、添加文件以及执行一大堆开发任务，比如测试、打包和发布。
### 在安装的过程中我还遇到一个问题，每次在快完成的时候报错...之后发现是我安装的Python环境的问题，把Python的路径复制到环境变量的path里就好了。
```html
//全局安装 Angular CLI
npm install -g angular/cli
//生成一个新项目以及应用的骨架代码
//官网上的写法是这样的：npm install -g @angular/cli
//angular前面的这个@有什么用。Look here：https://segmentfault.com/q/1010000010084647
ng --version
ng new my-app
//进入项目目录，并启动服务器。
cd my-app
ng serve --open
使用--open（或-o）参数可以自动打开浏览器并访问http://localhost:4200/
```
