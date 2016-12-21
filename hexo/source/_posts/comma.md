---
title: 数字显示国际规范化
date: 2016-12-21T10:29:11.000Z
tags:
  - 数字显示国际规范化
---
要将形如1000000的数字变为1,000,000这样式的格式：
```js
function addComma(num){
		//将获取的数字规范为1,000,000
		var num  = parseInt(num).toString();
		var len = num.length;
		if(len<3){return num;}
		var r = len%3;
		return r>0?num.slice(0,r)+","+num.slice(r, len).match(/\d{3}/g).join(","):num.slice(r, len).match(/\d{3}/g).join(",");
	}
```
上面的写法解决了部分的需求，但是在包含小数的时候就不可以那样用了。
下面是添加了小数的写法：
```js
function formatNum(str){
var newStr = "";
var count = 0;
 
if(str.indexOf(".")==-1){
   for(var i=str.length-1;i>=0;i--){
 if(count % 3 == 0 && count != 0){
   newStr = str.charAt(i) + "," + newStr;
 }else{
   newStr = str.charAt(i) + newStr;
 }
 count++;
   }
   str = newStr + ".00"; //自动补小数点后两位
   console.log(str)
}
else
{
   for(var i = str.indexOf(".")-1;i>=0;i--){
 if(count % 3 == 0 && count != 0){
   newStr = str.charAt(i) + "," + newStr;
 }else{
   newStr = str.charAt(i) + newStr; //逐个字符相接起来
 }
 count++;
   }
   str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
   console.log(str)
 }
}
```