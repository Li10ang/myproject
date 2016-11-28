---
title: sticky Footer应用
date: 2016-11-22T19:45:22.000Z
tags:
  - web
  - css
---

> 我们有时候会遇到这样一个问题，就是当你的页面高度不够，但是你又想你的`foot`标签定在页面的最下面，一般我们会使用绝对定位的方式去实现，但是存在一个问题就是当我们浏览器的高度比较小的时候底部就会把内容遮盖住，这就比较尴尬了。现在使用Sticky Footer的方式实现一下(纯css)

```html
<div id="wrap">
    <div id="main" class="clearfix">
    <div id="side"></div>
        <div id="content"></div>
    </div>
</div>
<div id="footer"></div>
```

<div class="tip">
    [注意] : 使用这个布局的前提，就是footer要在总的div容器之外，footer使用一个层，其它所有内容使用一个总的层。如果确实需要到添加其它同级层，那这个同级层就必须使用position:absolute进行绝对定位
</div>

<!-- more -->

```css
html,
body,
#wrap {
  height: 100%;
  }
  body > #wrap {
    height: auto;
    min-height: 100%;
  }
  #main {
    padding-bottom: 80px;
  }
  /* 必须使用和footer相同的高度 */
  #footer {
    position: relative;
    background:red;
    margin-top: -80px;
    /* footer高度的负值 */
    height: 80px;
    clear: both;
  }
```
<div class="tip">
    [注意] : 主体是使用悬浮布局，还得解决一些浏览器的兼容问题，对#main部份进行著名的 Clearfix Hack
</div>

``` css
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.clearfix {
    display: inline-block;
}
/* Hides from IE-mac \*/

* html .clearfix {
    height: 1%;
}

.clearfix {
    display: block;
}
/* End hide from IE-mac */
```
