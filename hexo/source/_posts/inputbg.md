---
title: 谷歌浏览器中input输入框的背景色
date: 2016-12-29T11:29:11.000Z
tags:
  - input
  - chrome
---
在chrome浏览器中input输入框在模糊提示的时候输入框会有一个相当亮眼的黄色背景～
```html
<input type="text" autocomplete="off">
```
```css
input:-webkit-autofill {
//去掉背景色 
-webkit-box-shadow: 0 0 0px 1000px #fff inset; 
//去掉边框的颜色
outline:none;
}
```
<!--more-->