---
title: 移动端页面排坑
date: 2016-12-12T11:29:11.000Z
tags:
  - 移动端
---
## 外观
1. 页面高度渲染错误
![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304280712440.gif)

 在各移动端浏览器中经常会出现这种页面高度100%的渲染错误，页面低端和系统自带的导航条重合了，高度的不正确我们需要重置修正它，通过javascript代码重置掉：
 
 ```js
 document.documentElement.style.height = window.innerHeight + 'px';
 ```
 2. 叠加区高亮
 ![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304280131383.jpg)
 
 在部分android机型中点击页面某一块区域可能会出现如图所示的黄色框秒闪，这是部分机型系统自身的默认定制样式，给该元素一个CSS样式重置掉：
 
 ```
 -webkit-tap-highlight-color:rgba(0,0,0,0);
 ```
 ## 行为
 1. 事件无法被触发
 ![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304280403333.gif)
 在部分android机型的微信环境中会出现事件无法触发、表单无法输入的情况，我们针对需要输入或者触发事件的元素设置样式：-webkit-transform: translate3d(0,0,0) ，不过新版本的微信已经直接修复了该问题。
 2. :active效果不兼容
 ![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304280054931.gif)
 
 在android 4.0版本以下CSS :active伪状态效果无法兼容，我们给该元素的touch系列的事件（touchstart/touchend/touchmove）绑定一个空匿名方法:
 
 ```js
 var element=document.getElementsById(”btnShare”);
 element.addEventListener(‘touchstart’,function(){},false);
 ```
 ## 应用
 1. 浏览器奔溃
 ```js
 var act = function(){
     window.removeEventListener('devicemotion',act);
 };
 window.addEventListener('devicemotion',act,false);
 ```
 解绑函数写在了事件处理中导致小米手机中的微信崩溃，那么我们不要将解绑时间写在事件处理中即可。
 
2. 预加载、自动播放无效

![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304281067074.jpg)

如上表所示，经过简单的测试发现预加载、自动播放的有效性受操作系统、浏览器（webview）、版本等的影响，苹果官方规定必须由用户手动触发才会载入音频，那么我们捕捉一次用户输入后，让音频加载实现预加载:

```js
//play and pause it once
 
document.addEventListener('touchstart', function () {
 
 document.getElementsByTagName('audio')[0].play();
 
 document.getElementsByTagName('audio')[0].pause();
 
});
```

3. 不支持局部滚动
![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304282050681.gif)

在android 4.0版本以下在body(html)元素之外的元素 overflow:scroll 样式设置滚动条无效，这里有两种解决方案:

1. 巧用布局直接设置样式滚动条在body(html)上，其他元素“错觉滚动”。

2. 利用iscroll、自写js控制translate、scrollTop模拟

## 系统/硬件

1. 怪异悬浮的表单
![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304282155784.gif)

在部分android 机型中的输入框可能会出现如图怪异的多余的浮出表单，经过观察与测试发现只有input:password类型的输入框存在，那么我们只要使用input:text类型的输入框并通过样式-webkit-text-security: disc; 隐藏输入密码从而解决。

2. 错误出现滚动条
![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304282257464.jpg)

在游戏内嵌页中出现了不应该出现的滚动条，而且内容并没有超出内容区宽度，经过测试overflow:hidden 无效，通过一系列尝试使用古老的 <body scroll="no"> 写法解决，多尝试一下不同的写法和属性会有不一样的惊喜哦！

3. 链接打开系统浏览器

在游戏内webview的部分android机型中可能会出现点击链接调用系统浏览器的情况，这是一个非常不好的体验。那么我们尝试给这个元素添加 target="_blank"' 属性有可能解决，如果还不能解决那么需要修改IOS或android原生系统函数了。

4. Flex box不兼容

![](http://ossweb-img.qq.com/upload/webplat/info/tgideas/20141118/1416304282160849.jpg)

在游戏内嵌webview中碰到Flex box布局不兼容的情况，图中所示下面部分的导航错位了，虽然之前有仔细查看过Flex box的兼容性，但是在游戏内嵌页中无法确定其调用的系统浏览器版本及兼容，所以导致错误，所以我们写完整历史版本呢的3种Flex box 解决。那么我们思考在写页面过程中还是本着保守稳定的方式书写样式可以减少不不要的麻烦。

