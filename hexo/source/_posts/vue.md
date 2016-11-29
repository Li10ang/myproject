---
title: 安装vue
date: 2016-11-29T11:07:22.000Z
tags:
  - npm
  - vue
---
安装npm 
npm 是node.js 的包管理工具, 安装流程地址：https://docs.npmjs.com/cli/install 
估计会非常慢，我们可以使用淘宝NPM镜像下载安装：https://npm.taobao.org/

```
##安装npm##
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
##安装vue##
sudo npm install -g vue-cli
```

<!--more-->

创建vue模版
```
## 创建一个基于 "webpack" 模板的新项目
sudo vue init webpack my-project

? Project name 项目名
? Project description 项目名描述
? Author 作者邮箱
? Use ESLint to lint your code? 是否需要ESlist语法检查
? Setup unit tests with Karma + Mocha? 是否需要单元测试
? Setup e2e tests with Nightwatch? Yes是否需要e2e测试
```

安装vue依赖
安装过程中发现npm install会报错，报错信息为：npm ERR！tar.unpack....
解决这个错误的办法是sudo一下就好了
```
sduo npm install
```

运行项目
```
sudo npm run dev
```

运行成功监听在8080 端口.. 

Vue的官方命令行说明http://vuejs.org.cn/guide/installation.html#
安装过程中提示了一个问题，npm的版本过低，网上百度了一下解决办法，在这里纪录一下：
node有一个模块叫n（num？？哈哈哈），是用来专门管理node.js的版本的。
首先安装n模块
```
npm install -g n
```
升级node.js到最新版本
```
n stable
```
n后面也可以跟随版本号比如：
```
n v0.10.26或
n 0.10.26
```

