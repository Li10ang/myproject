---
title: 响应式图片img的srcset属性
date: 2016-12-09T16:29:11.000Z
tags:
  - 响应式
  - img
---

## 响应式图片srcset属性
这个属性可以根据屏幕密度现实对应尺寸图片，例如……
```html
<img src="mm-width-128px.jpg" srcset="mm-width-128px.jpg 1x, mm-width-256px 2x">
<!--可以简写为-->
<img src="mm-width-128px.jpg" srcset="mm-width-256px 2x">
```

<!--more-->

## srcset、sizes属性和w描述符

旧的srcset是人主导，而现在新的srcset是浏览器主导，你主需要提供图片资源、以及断点，其他都交给浏览器智能解决，什么响应宽度啊、设备像素比啊，你都不要关心了，浏览器会自动匹配最佳显示图片。

如下HTML示例：
```html
<img class="image" src="mm-width-128px.jpg"
     srcset="mm-width-128px.jpg 128w, mm-width-256px.jpg 256w, mm-width-512px.jpg 512w"
     sizes="(max-width: 360px) 340px, 128px">
```
1. srcset 用来指向提供的图片资源
2. sizes 用来表示尺寸的零界点。语法如下：
```html
sizes="[media query] [length], [media query] [length] ... etc"
```
size = "(max-width: 360px) 340px, 128px"表示当视区宽度不大于360像素时候，图片的宽度限制为340像素，其他情况下，使用128像素（对应下面demo页面第1张图）。

如果sizes="128px", 则尺寸就一直是128像素，图片只会根据设备像素比发生变化。

注意，这里所有的值都是指宽度值，且单位任意，em, px, cm, vw, ...都是可以的，甚至可以CSS3的calc计算（对应下面demo页面第2张图），例如：

```html
sizes="(max-width: 360px) calc(100vw - 20px), 128px"
```
表示当视区宽度不大于360像素时候，图片宽度为整个视区宽度减去20像素的大小。

w用来描述文件的宽度，我们可以形象理解为规格，就像手机一样，有大小不一样的尺寸与规格。根据我浅薄的经验，我们可以直接等同于像素去理解。可能你会疑问，那为何不直接256px而是256w, 因为，请注意，这里的256w并不是指图片的宽度，而是图片的宽度规格，例如，一张图片实际宽度是256像素，但是，这种图片是png24无损图片，或100%质量JPG图片，则，我们可以使用512w表示这张图片，质量好规格就高，不难理解吧！如果是512px显然就有问题了，明明图片256像素，搞个512px，歧义到王母娘娘哪儿去了！因此，需要一个没人见过的w表示，同时，需要意识到，w不是单位，而是一个描述符(descriptor)。

