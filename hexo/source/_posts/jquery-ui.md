---
title: jquery UI -slider
date: 2017-04-13T11:29:11.000Z
tags:
  - jqueryUI
  - slider
---

使用jqueryUI滑动条，记录下滑动条的参数设置。
官方地址：http://jqueryui.com/slider/

<!--more-->

·参数（参数名 : 参数类型 : 默认名称）  
animate : Boolean : false  
  设置是否在拖动滑块时执行动画效果。  
  初始：$('.selector').slider({ animate: true });  
  获取：var animate = $('.selector').slider('option', 'animate');  
  设置：$('.selector').slider('option', 'animate', true);  
  
max : Number : 100  
  设置滑动条的最大值。  
  初始：$('.selector').slider({ max: 7 });  
  获取：var max = $('.selector').slider('option', 'max');  
  设置：$('.selector').slider('option', 'max', 7);  
  
min : Number : 0  
  设置滑动条的最小值。  
  初始：$('.selector').slider({ min: -7 });  
  获取：var min = $('.selector').slider('option', 'min');  
  设置：$('.selector').slider('option', 'min', -7);  
  
orientation : String : 'auto'  
  通常不需要设置此选项，程序会自动识别，如果未正确识别，则可以设置为：'horizontal' 或 'vertical'。  
  初始：$('.selector').slider({ orientation: 'vertical' });  
  获取：var orientation = $('.selector').slider('option', 'orientation');  
  设置：$('.selector').slider('option', 'orientation', 'vertical');  
  
range : Boolean, String : false  
  如果设置为true，滑动条会自动创建两个滑块，一个最大、一个最小，用于设置一个范围内值。  
  初始：$('.selector').slider({ range: 'min' });  
  获取：var range = $('.selector').slider('option', 'range');  
  设置：$('.selector').slider('option', 'range', 'min');  
  
step : Number : 1  
  在最大值和最小值中间设置滑块步进大小，此值必须能被(max-min)平分。  
  初始：$('.selector').slider({ step: 5 });  
  获取：var step = $('.selector').slider('option', 'step');  
  设置：$('.selector').slider('option', 'step', 5);  
  
value : Number : 0  
  设置初始时滑块的值，如果有多个滑块，则设置第一个滑块。  
  初始：$('.selector').slider({ value: 37 });  
  获取：var value = $('.selector').slider('option', 'value');  
  设置：$('.selector').slider('option', 'value', 37);  
  
values : Array : null  
  此属性用于设置滑块的初始值，并且只当range设置为true时有效。（至少两个滑块值）  
  初始：$('.selector').slider({ values: [1,5,9] });  
  获取：var values = $('.selector').slider('option', 'values');  
  设置：$('.selector').slider('option', 'values', [1,5,9]);  
  
  
·事件  
start : slidestart  
  当滑块开始滑动时，触发此事件。  
  初始：$('.selector').slider({ start: function(event, ui) { ... } });  
  绑定：$('.selector').bind('slidestart', function(event, ui) { ... });  
  
slide : slide  
  当滑块滑动时，触发此事件。使用ui.value获取当前值，或$(..).slider('value', index)获取其它滑块的值。  
  初始：$('.selector').slider({ slide: function(event, ui) { ... } });  
  绑定：$('.selector').bind('slide', function(event, ui) { ... });  
  
change : slidechange  
  当滑块滑动且值发生改变时，触发此事件。事件带两个参数event and ui，使用event.orginalEvent来判断是键盘或鼠标或其它触发，用ui.value获取当前值，用$(this).slider('values', index)获取其它滑块的值。  
  初始：$('.selector').slider({ change: function(event, ui) { ... } });  
  绑定：$('.selector').bind('slidechange', function(event, ui) { ... });  
  
stop : slidestop  
  当滑块停止滑动时，触发此事件。  
  初始：$('.selector').slider({ stop: function(event, ui) { ... } });  
  绑定：$('.selector').bind('slidestop', function(event, ui) { ... });  
  
  
·属性  
destroy  
  销毁当前滑动条对象。  
  用法：.slider( 'destroy' )  
  
disable  
  禁用当前滑动条。  
  用法：.slider( 'disable' )  
  
enable  
  启用当前滑动条。  
  用法：.slider( 'enable' )  
  
option  
  获取或设置当前滑动条的参数。  
  用法：.slider( 'option' , optionName , [value] )  
  
value  
  获取或设置当前滑动条的值。  
  用法：.slider( 'value' , [value] )  
  
values  
  获取或设置当前滑动条的所有滑块的值。  
  用法：.slider( 'values' , index , [value] )  