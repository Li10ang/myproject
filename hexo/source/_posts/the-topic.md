---
title: 怎么看这14道题～
date: 2016-12-01T17:52:11.000Z
tags:
  - javascript
---

如何理解这14道题
1.

```js
(function(){
  return typeof arguments;
})();
```
<!--more-->
<ul class="answers" style="list-style: none;">
    <li>
       <input type="radio" name="question-1" id="answer-1-1"><label for="answer-1-1" style="margin-left: 10px">object</label>
    </li>
    <li>
       <input type="radio" name="question-1" id="answer-1-2"><label for="answer-1-2" style="margin-left: 10px">array</label>
    </li>
    <li>
       <input type="radio" name="question-1" id="answer-1-3"><label for="answer-1-3" style="margin-left: 10px">arguments</label>
    </li>
    <li>
       <input type="radio" name="question-1" id="answer-1-4"><label for="answer-1-4" style="margin-left: 10px">undefined</label>
    </li>
</ul>
2.

```js
var f = function g(){ return 23; };
typeof g();
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="question-2" id="answer-2-1"><label for="answer-2-1" style="margin-left: 10px">number</label>
        </li>
        <li>
          <input type="radio" name="question-2" id="answer-2-2"><label for="answer-2-2" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="question-2" id="answer-2-3"><label for="answer-2-3" style="margin-left: 10px">function</label>
        </li>
        <li>
          <input type="radio" name="question-2" id="answer-2-4"><label for="answer-2-4" style="margin-left: 10px">Error</label>
        </li>
      </ul>
3.

```js
(function(x){
  delete x;
  return x;
})(1);
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="question-3" id="answer-3-1"><label for="answer-3-1" style="margin-left: 10px">1</label>
        </li>
        <li>
          <input type="radio" name="question-3" id="answer-3-2"><label for="answer-3-2" style="margin-left: 10px">null</label>
        </li>
        <li>
          <input type="radio" name="question-3" id="answer-3-3"><label for="answer-3-3" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="question-3" id="answer-3-4"><label for="answer-3-4" style="margin-left: 10px">Error</label>
        </li>
      </ul>
      
4.
```js
var y = 1, x = y = typeof x;
x;
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="question-4" id="answer-4-1"><label for="answer-4-1" style="margin-left: 10px">1</label>
        </li>
        <li>
          <input type="radio" name="question-4" id="answer-4-2"><label for="answer-4-2" style="margin-left: 10px">number</label>
        </li>
        <li>
          <input type="radio" name="question-4" id="answer-4-3"><label for="answer-4-3" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="question-4" id="answer-4-4"><label for="answer-4-4" style="margin-left: 10px">undefined</label>
        </li>
      </ul>
      
5.
```js
(function f(f){
  return typeof f();
})(function(){ return 1; });
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="question-5" id="answer-5-1"><label for="answer-5-1" style="margin-left: 10px">number</label>
        </li>
        <li>
          <input type="radio" name="question-5" id="answer-5-2"><label for="answer-5-2" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="question-5" id="answer-5-3"><label for="answer-5-3" style="margin-left: 10px">function</label>
        </li>
        <li>
          <input type="radio" name="question-5" id="answer-5-4"><label for="answer-5-4" style="margin-left: 10px">Error</label>
        </li>
      </ul>
      
6.
```js
var foo = {
  bar: function() { return this.baz; },
  baz: 1
};
(function(){
  return typeof arguments[0]();
})(foo.bar);
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="question-6" id="answer-6-1"><label for="answer-6-1" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="question-6" id="answer-6-2"><label for="answer-6-2" style="margin-left: 10px">object</label>
        </li>
        <li>
          <input type="radio" name="question-6" id="answer-6-3"><label for="answer-6-3" style="margin-left: 10px">number</label>
        </li>
        <li>
          <input type="radio" name="question-6" id="answer-6-4"><label for="answer-6-4" style="margin-left: 10px">function</label>
        </li>
      </ul>

7.
```js
var foo = {
  bar: function(){ return this.baz; },
  baz: 1
}
typeof (f = foo.bar)();
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="question-7" id="answer-7-1"><label for="answer-7-1" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="question-7" id="answer-7-2"><label for="answer-7-2" style="margin-left: 10px">object</label>
        </li>
        <li>
          <input type="radio" name="question-7" id="answer-7-3"><label for="answer-7-3" style="margin-left: 10px">number</label>
        </li>
        <li>
          <input type="radio" name="question-7" id="answer-7-4"><label for="answer-7-4" style="margin-left: 10px">function</label>
        </li>
      </ul>
8.

```js
var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="question-8" id="answer-8-1"><label for="answer-8-1" style="margin-left: 10px">string</label>
        </li>
        <li>
          <input type="radio" name="question-8" id="answer-8-2"><label for="answer-8-2" style="margin-left: 10px">number</label>
        </li>
        <li>
          <input type="radio" name="question-8" id="answer-8-3"><label for="answer-8-3" style="margin-left: 10px">function</label>
        </li>
        <li>
          <input type="radio" name="question-8" id="answer-8-4"><label for="answer-8-4" style="margin-left: 10px">undefined</label>
        </li>
      </ul>
9.

```js
var x = 1;
if (function f(){}) {
  x += typeof f;
}
  x;
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="question-9" id="answer-9-1"><label for="answer-9-1" style="margin-left: 10px">1</label>
        </li>
        <li>
          <input type="radio" name="question-9" id="answer-9-2"><label for="answer-9-2" style="margin-left: 10px">1function</label>
        </li>
        <li>
          <input type="radio" name="question-9" id="answer-9-3"><label for="answer-9-3" style="margin-left: 10px">1undefined</label>
        </li>
        <li>
          <input type="radio" name="question-9" id="answer-9-4"><label for="answer-9-4" style="margin-left: 10px">NaN</label>
        </li>
      </ul>
10.

```js
var x = [typeof x, typeof y][1];
typeof typeof x;
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="quiz-10" id="answer-10-1"><label for="answer-10-1" style="margin-left: 10px">number</label>
        </li>
        <li>
          <input type="radio" name="quiz-10" id="answer-10-2"><label for="answer-10-2" style="margin-left: 10px">string</label>
        </li>
        <li>
          <input type="radio" name="quiz-10" id="answer-10-3"><label for="answer-10-3" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="quiz-10" id="answer-10-4"><label for="answer-10-4" style="margin-left: 10px">object</label>
        </li>
      </ul>
      
11.

```js
(function(foo){
  return typeof foo.bar;
})({ foo: { bar: 1 } });
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="quiz-11" id="answer-11-1"><label for="answer-11-1" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="quiz-11" id="answer-11-2"><label for="answer-11-2" style="margin-left: 10px">object</label>
        </li>
        <li>
          <input type="radio" name="quiz-11" id="answer-11-3"><label for="answer-11-3" style="margin-left: 10px">number</label>
        </li>
        <li>
          <input type="radio" name="quiz-11" id="answer-11-4"><label for="answer-11-4" style="margin-left: 10px">Error</label>
        </li>
      </ul>
      
12.

```js
(function f(){
  function f(){ return 1; }
  return f();
  function f(){ return 2; }
})();
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="answer-12" id="answer-12-1"><label for="answer-12-1" style="margin-left: 10px">1</label>
        </li>
        <li>
          <input type="radio" name="answer-12" id="answer-12-2"><label for="answer-12-2" style="margin-left: 10px">2</label>
        </li>
        <li>
          <input type="radio" name="answer-12" id="answer-12-3"><label for="answer-12-3" style="margin-left: 10px">Error (e.g. "Too much recursion")</label>
        </li>
        <li>
          <input type="radio" name="answer-12" id="answer-12-4"><label for="answer-12-4" style="margin-left: 10px">undefined</label>
        </li>
      </ul>
      
13.
```js
function f(){ return f; }
new f() instanceof f;
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="answer-13" id="answer-13-2"><label for="answer-13-2" style="margin-left: 10px">true</label>
        </li>
        <li>
          <input type="radio" name="answer-13" id="answer-13-1"><label for="answer-13-1" style="margin-left: 10px">false</label>
        </li>
      </ul>
      
14.
```js
with (function(x, undefined){}) length;
```
<ul class="answers" style="list-style: none;">
        <li>
          <input type="radio" name="answer-14" id="answer-14-1"><label for="answer-14-1" style="margin-left: 10px">1</label>
        </li>
        <li>
          <input type="radio" name="answer-14" id="answer-14-2"><label for="answer-14-2" style="margin-left: 10px">2</label>
        </li>
        <li>
          <input type="radio" name="answer-14" id="answer-14-3"><label for="answer-14-3" style="margin-left: 10px">undefined</label>
        </li>
        <li>
          <input type="radio" name="answer-14" id="answer-14-4"><label for="answer-14-4" style="margin-left: 10px">Error</label>
        </li>
      </ul>
      
问题解答：
1.
```js
(function(){
    return typeof arguments;
})()
```
答案：object。arguments是对象，虽然像数组～

2.
```js
var f = function g() { return 23; };
typeof g();
```
答案：Error。g未定义。
在JS里，声明函数只有2种方法：
第一种：function foo(){...} (函数声明)
第二种：var foo = function(){...} (等号后面必须是匿名函数，这句实质是函数表达式)

3.
```js
(function(x){
    delete x;
    return x;
})(1)
```
答案：1
delete操作符用于删除对象的成员变量，不能删除函数的参数。
1.对象属性删除
```js
function fun(){
    this.name = 'mm';
}
var obj = new fun();
console.log(obj.name);//mm
delete obj.name;
console.log(obj.name);//undefined
```
2.变量删除
```js
var name = 'lily';
delete name;
console.log(name);//lily
//直接用delete删除不了变量
```
3.删除不了原型链中的变量
```js
fun.prototype.age = 18;
delete obj.age;
console.log(obj.age)//18
```

4.
```js
var y = 1,x = y = typeof x;
x;
```
答案：undefined

5.
```js
(function f(f){
    return typeof f();
})(function(){ return 1; })
```
答案：number

6.
```js
var foo = {
    bar: function() {
      return this,baz;
    },
    baz: 1
};
(function() {
  return typeof arguments[0]();
})(foo.bar)
```
答案：undefined。（这里的this指的是arguments）

7.
```js
var foo = {
    bar: function() {
      return this.baz;
    },
    baz: 1
}
typeof (f = foo.bar)()
```
答案：undefined

8.
```js
var f = (function f() {
  return '1'
},function g() {
  return 2;
})();
typeof f;
```
答案：number。（只有最后面的函数会被执行）
逗号操作符多用于声明多个变量，但除此之外，逗号操作符还可以用于赋值。在用于赋值时，逗号操作符总会返回表达式中的最后一项，如下面的栗子：
```js
var num = (1, 2, 3, 4, 5); //num的值为5
```

9.
```js
var x = 1;
if(function(){}){
    x += typeof f;
}
x;
```
答案：1undefined.括号内的function f(){}不是函数声明，会被转换成true，因此f未定义。

10.
```js
var x = [typeof x, typeof y][1];
typeof typeof x;
```
答案：string。
第一次执行完成后 x === 'undefined',所以连续2次typeof还是string。

11.
```js
(function(foo) {
  return typeof foo.bar;
})({foo: {bar: 1}});
```
答案：undefined

12.
```js
(function f() {
  function f() {
    return 1;
  }
  return f();
  function f() {
    return 2;
  }
})()
```
答案：2
由于声明提前，后面的f()回覆盖前面的f()

13.
```js
function f() {
  return f;
}
new f() instanceof f;
```
答案：false

14.
```js
with (function(x, undefined){}) length;
```
对with语句有一点了解的话，就知道这代码相当于
(function(x,undefined){}).length
