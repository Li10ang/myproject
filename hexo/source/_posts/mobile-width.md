---
title: 移动端的宽度适应
date: 2016-12-29T11:29:11.000Z
tags:
  - 移动端
---
```js
(function () {
	    document.addEventListener('DOMContentLoaded', function () {
	        var html = document.documentElement;
	        var windowWidth = html.clientWidth;
	        html.style.fontSize = windowWidth / 6.4 + 'px';
	        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';
	    }, false);
	})();
```
<!--more-->
因为设计图基本上都是基于750的宽度来设计的。我直接修改了上面的栗子～
```js
(function () {
	    document.addEventListener('DOMContentLoaded', function () {
	        var html = document.documentElement;
	        var windowWidth = html.clientWidth;
	        html.style.fontSize = windowWidth / 7.5 + 'px';
	        // 等价于html.style.fontSize = windowWidth / 750 * 100 + 'px';
	    }, false);
	})();
```