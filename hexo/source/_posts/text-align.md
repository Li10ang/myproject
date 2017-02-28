---
title: 文字两端对齐
date: 2016-02-15T11:29:11.000Z
tags:
  - text－align
  - justify-content:space-between
  - column
  - 两端对齐
---
CSS text-align 属性

<!--more-->
值 justify 可以使文本的两端都对齐。在两端对齐文本中，文本行的左右两端都放在父元素的内边界上。然后，调整单词和字母间的间隔，使各行的长度恰好相等。



关于text-align:justify;不起作用是怎么回事?
文章来源：https://segmentfault.com/q/1010000007136263
为什么单独设置text-align:justify;不起作用，非要在后面加一个内联块状元素宽度为100%的才可以？
```html
<p class="center">我是两端对齐文字端对齐文字<span></span></p>
.center{
  text-align:justify;
}

span{
  display:inline-block;
  width:100%;
}
```
引用一个比较好的回答：
    这个是因为text-align不会处理被打断的行和最后一行。因为你这里的文字只占了一行，所以也是最后一行了，所以text-align设置为justify不会产生任何效果。
    解决方法是使用text-align-last，并将其设置为justify。
    不过不幸的是，text-align-last不是所有浏览器支持。
    
    所以对于不支持text-align-last的，可以在最后一行人工生成两行文本，然后把第二行隐藏了，那么我们要现实的第一行自然就可以实现两端对齐了。
    
    而你的span是inline-block，也可以设置宽度（100%），那么这个时候内联匿名盒的宽度超过行盒，浏览器会将其拆成两行，自然第一行文本的text-align效果就生效了。你的实现刚刚好是上面的第二个实现方法。

下面内容转自：http://www.cnblogs.com/PeunZhang/p/3289493.html
响应式网页设计出现以来，更多是使用百分比布自适应布局，特别是在移动端，两端对齐的方式显得越来越重要。那么，如何使用css实现两端对齐，相信很多同学会文本对齐的text-align:justify，这是今天要讲的其中一种方式，另外还有两种更精彩的实现方式，请往下看~

下图是需要实现的demo，取了宽度分别为320px、480px、640px下的截图，也就是说再随浏览器窗口宽度的调整，按钮菜单高度不变，宽度会按比例自动适应，且左右两端对齐：
![图片](http://images.cnitblog.com/blog/278431/201308/29224628-58a335b469c447019c99e9f880372db2.jpg)
目录

* 使用text-align:justify 
* 使用justify-content:space-between
* 使用column(多列布局)
* 移动端文本两端对齐示例 （new）

方法一：使用text-align:justify
感谢join同学提供的方案，使用该方案可以做到兼容所有的浏览器，不过实现起来会比较复杂，而且带有hack的味道

text-align:justify 属性是全兼容的，使用它实现两端对齐，需要注意在模块之间添加[空格/换行符/制表符]才能起作用，同样，实现文本对齐也是需要在字与字之间添加[空格/换行符/制表符]才能起作用
![图片](http://images.cnitblog.com/blog/278431/201308/30091031-44c98f21187a436090d15d1863f78b4f.jpg)
```html
<p>模块内的元素之间为&nbsp;分隔，只支持webkit和Gecko内核浏览器</p>
<br />
<div class="demo"><a class="link" href="#none">10元</a>&nbsp;<a class="link" href="#none">20元</a>&nbsp;<a class="link" href="#none">30元</a>&nbsp;<a class="link" href="#none">50元</a>
</div>
<br />
<p>模块内的元素之间为换行符</p>
<br />
<div class="demo">
    <a class="link" href="#none">10元</a>
    <a class="link" href="#none">20元</a>
    <a class="link" href="#none">30元</a>
    <a class="link" href="#none">50元</a>
</div>
<br />
<p>模块内的元素之间为空格符</p>
<br />
<div class="demo">
<a class="link" href="#none">10元</a> <a class="link" href="#none">20元</a> <a class="link" href="#none">30元</a> <a class="link" href="#none">50元</a>
</div>
<br />
<p>模块内的元素之间为无分隔符，justify不起作用</p>
<br />
<div class="demo"><a class="link" href="#none">选项1</a><a class="link" href="#none">选项2</a><a class="link" href="#none">选项3</a><a class="link" href="#none">选项4</a></div>
<br />
```
```css
*{margin:0;padding:0;}
/* 
 说明：
 1.IE中要实现块内单行两端对齐需要使用其私有属性text-align-last:justify配合，text-align-last 要生效，必须先定义text-align 为justify
 2.line-height:0 解决标准浏览器容器底部多余的空白
*/
.demo{
     text-align:justify;
     text-align-last:justify;
     line-height:0;
     height:44px;
}
/*
 说明：
 模块使用[换行符]或[空格符]后，webkit浏览器中会引起最后一个模块有多余空白，使用font-size:0可清除该空格
*/
@media all and (-webkit-min-device-pixel-ratio:0){
.demo{
     font-size:0;
}
}
 /* 
 说明：
 1.text-align-last:justify 目前只有IE支持，标准浏览器需要使用 .demo:after 伪类模拟类似效果 
 2.opera浏览器需要添加 vertical-align:top 才能完全解决底部多余的空白
 */
.demo:after{
     display:inline-block;
     overflow:hidden;
     width:100%;
     height:0;
     content:'';
     vertical-align:top;
}
.demo a{
     width:20%;
     display:inline-block;
     height:44px;
     line-height:44px;
     text-align:center;
     border:1px solid #428cc8;
     color:#666;
     font-size:16px;
     margin-bottom:5px;
     border-radius:3px;
     background-color:#fefefe;
     background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fefefe),color-stop(1,#eee));
     color:#666;
     text-decoration:none;
}
```
方法二：使用justify-content:space-between

box-pack是css3的新属性，依赖于display:box(旧版弹性布局)，受box-orient影响，box-pack决定了子标签水平对齐的方式，可选值有start | end | center | justify。使用box-pack:justify来实现两端对齐非常简单，代码量也少。为了向前看齐，把display:flex(新版弹性布局)也一起写进去~

如果是做基于webkit内核的webapp开发和winphone IE10及以上，那么一切都好办~

关于盒模型布局的介绍，这里有篇文章[《CSS box-flex属性，然后弹性盒子模型简介》](http://www.zhangxinxu.com/wordpress/?p=1338)，写得不错，推荐给大家~
```html
<div class="demo">
    <a class="link" href="#none">10元</a>
    <a class="link" href="#none">20元</a>
    <a class="link" href="#none">30元</a>
    <a class="link" href="#none">50元</a>
</div>
```
```css
    *{margin:0;padding:0;}
    /*
     说明：
     display:box定义布局为盒模型后，可使用盒模型下的box-pack:justify属性
    */
    .demo{
        display:-webkit-box;
        display:-webkit-flex;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-pack:justify;
        -webkit-justify-content:space-between;
        -ms-flex-pack:justify;
        justify-content:space-between;
    }
    
    .demo a{
         width:20%;
         display:block;
         height:44px;
         line-height:44px;
         text-align:center;
         border:1px solid #428cc8;
         color:#666;
         font-size:16px;
         margin-bottom:5px;
         border-radius:3px;
         background-color:#fefefe;
         background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fefefe),color-stop(1,#eee));
         color:#666;
         text-decoration:none;
    }
```
方法三：使用column(多列布局)
column也是是css3的属性，意思是多列布局，使用column来实现两端对齐也十分简单，只需要设置模块的个数跟column的列数一致即可，不过它的自动适应方式跟使用box-pack还有有点差别，并不是很标准，像列与列的间距暂无法定义为百分比。值得高兴的是目前支持所有高级浏览器，对IE10的支持也良好，而IE9及以下版本不支持，webapp开发中，对于不需要兼容winphone7手机(IE9)的需求来说，可以充分发挥column的强大作用~

关于column的使用方法，w3school的有相关教程：http://www.w3school.com.cn/css3/css3_multiple_columns.asp

```html
<div class="demo">
    <a class="link" href="#none">10元</a>
    <a class="link" href="#none">20元</a>
    <a class="link" href="#none">30元</a>
    <a class="link" href="#none">50元</a>
</div>
```
```css
*{margin:0;padding:0;}
/* 
 说明：
 1.column-count定义了对象的列数,例子中有4个模块，那么定义为4列
 2.column-gap定义了对象中列与列的间距，间距不能设置为百分比，显得不够灵活
*/
.demo{
     -webkit-column-count:4;-moz-column-count:4;column-count:4;
     -webkit-column-gap:20px;-moz-column-gap:20px;column-gap:20px; 
}

.demo a{
     display:block;
     height:44px;
     line-height:44px;
     text-align:center;
     border:1px solid #428cc8;
     color:#666;
     font-size:16px;
     margin-bottom:5px;
     border-radius:3px;
     background-color:#fefefe;
     background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fefefe),color-stop(1,#eee));
     color:#666;
     text-decoration:none;
}
```
移动端文本两端对齐示例
text-justify示例（补充于：20160407）

http://peunzhang.github.io/demo/justify/text_justify.html

 

justify-content:space-between示例（补充于：20160628）

http://peunzhang.github.io/demo/justify/space-between.html

 

林小志大神的解决方案（补充于：20160628）

http://mp.weixin.qq.com/s?__biz=MzI1MTA2MDcyOQ==&mid=2649567067&idx=1&sn=8c9602c305026c55f412fe3d398cbf58