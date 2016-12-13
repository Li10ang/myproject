---
title: iphone点击
date: 2016-12-09T19:29:11.000Z
tags:
  - iphone点击
---

今天在写东西的时候，不小心掉进一个坑～然后在坑里呆了好久～....心情很差...不过之后幸好解决了这个问题。现在记录这个填坑的方法：

<!--more-->

例如有下面的这样一段代码：
```html
<body>
	<div class="btn">这是一个按钮</div>
</body>
<script type="text/javascript">
	$(function(){
		$('body').on('click','.btn',function(){
			alert(1);
		})
	})
</script>
```

之后发现这个东西在iphone上根本不能点击。。。。我去...

马上百度...
原来只要在标签的样式文件上加上手就好了～
```html
.btn{
	cursor: pointer;
	}
```