---
title: 利用nvm实现node版本控制
date: 2017-08-16T11:04:11.000Z
tags:
  - nvm
  - node版本控制
---
# nodejs在windows下的安装
* 首先确保你的网络畅通，还有不被墙，如果需要翻墙，请看： 
* https://github.com/getlantern/lantern
* 下载 nvm 包 地址：https://github.com/coreybutler/nvm-windows/releases，我们选择第一个：nvm-noinstall.zip 下载完成后解压到一个地方，比如: C:\dev\nvm 里面的文件列表是这样的：elevate.cmd、elevate.vbs、install.cmd、LICENSE、nvm.exe
* 备注：windows下要设置显示文件类型的扩展名，这样才能看到上述文件的后缀
* 双击 install.cmd 然后会让你输入”压缩文件解压或拷贝到的一个绝对路径” 先不用管它，直接回车，成功后，会在C盘的根目录生成一个settings.txt的文本文件，把这个文件剪切到C:\dev\nvm目录中，然后我们把它的内容修改成这样：

> root: C:\dev\nvm 
> path: C:\dev\nodejs 
> arch: 64 
> proxy: none 
> node_mirror: http://npm.taobao.org/mirrors/node/ 
> npm_mirror: https://npm.taobao.org/mirrors/npm/

* 然后我们开始配置环境变量了，因为刚刚点击了install.cmd的文件，那么会在环境变量的系统变量中，生成两个环境变量：NVM_HOME 和 NVM_SYMLINK 我们开始修改这两个变量名的变量值：NVM_HOME的变量值为：C:\dev\nvm； NVM_SYMLINK的变量值为：C:\dev\nodejs
* 我们还会发现，在Path中也会自动添加上C:\dev\nvm;或者是C:\dev\nodejs，如果有的话，把他们删掉，没有的话更好，我们自己来配置，在Path的最前面输入： ;%NVM_HOME%;%NVM_SYMLINK%;
* 打开一个cmd窗口输入命令：nvm v ，那么我们会看到当前nvm的版本信息。然后我们可以安装nodejs了。
* 继续输入命令：nvm install latest 如果网络畅通，我们会看到正在下载的提示，下载完成后 会让你use那个最新的node版本。
* 如果你是第一次下载，在use之前，C:\dev目录下是没有nodejs这个文件夹的，在输入比如： nvm use 5.11.0 之后，你会发现，C:\dev目录下多了一个nodejs文件夹，这个文件夹不是单纯的文件夹，它是一个快捷方式，指向了 C:\dev\nvm 里的 v5.11.0 文件夹。
* 同样的咱们可以下载其他版本的nodejs，这样通过命令:nvm use 版本号 比如：nvm use 5.11.0就可以轻松实现版本切换了。
* 备注： 如果你的电脑系统是32 位的，那么在下载nodejs版本的时候，一定要指明 32 如： nvm install 5.11.0 32 这样在32位的电脑系统中，才可以使用，默认是64位的。

# npm的安装

> 首先 npm是什么？ 
> npm有两层含义，第一是npm这个开源的模块登记和管理系统，也就是这个站点：https://www.npmjs.com。 
> 第二个指的是 nodejs package manager 也就是nodejs的包管理工具。我们主要说的就是这一个。 
> 在每个版本的nodejs中，都会自带npm，为了统一起见，我们安装一个全局的npm工具，这个操作很有必要，因为我们需要安装一些全局的其他包，不会因为切换node版本造成原来下载过的包不可用。

* 首先我们进入命令模式，输入 npm config set prefix "C:\dev\nvm\npm" 回车，这是在配置npm的全局安装路径，然后在用户文件夹下会生成一个.npmrc的文件，用记事本打开后可以看到如下内容：

> prefix=C:\dev\nvm\npm
> 我在执行了这段代码的时候并没有看到这个文件，并且在执行下一步的npm install npm -g的时候会报错，但整体没有影响。不知道怎么回事。

* 然后继续在命令中输入： npm install npm -g 回车后会发现正在下载npm包，在C:\dev\nvm\npm目录中可以看到下载中的文件，以后我们只要用npm安装包的时候加上 -g 就可以把包安装在我们刚刚配置的全局路径下了。
* 我们为这个npm配置环境变量： 变量名为：NPM_HOME，变量值为 ：C:\dev\nvm\npm
* 在Path的最前面添加;%NPM_HOME%，注意了，这个一定要添加在 %NVM_SYMLINK%之前，所以我们直接把它放到Path的最前面
* 最后我们新打开一个命令窗口，输入npm -v ,此时我们使用的就是我们统一下载的npm包了。
* 同样的我们还可以安装cnpm工具，它是中国版的npm镜像库，地址在这里：https://cnpmjs.org/，也是npm官方的一个拷贝，因为我们和外界有一堵墙隔着，所以用这个国内的比较快，淘宝也弄了一个和npm一样的镜像库，http://npm.taobao.org/，它和官方的npm每隔10分钟同步一次。安装方式：

### 原文中还包括nrm（npm的镜像源管理工具）的安装，但我觉得改变node版本的时候npm的版本随之改变，好像没有必要再单独做npm的版本控制。
### 如果有需要安装nrm的，请看 [原文链接](http://blog.csdn.net/tyro_java/article/details/51232458)
### 如有侵权，请联系博主删除。













