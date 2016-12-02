---
title: vue-计算属性
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

<ul class="answers">
    <li>
       <input type="radio" name="question-1" id="answer-1-1">
       <label for="answer-1-1">"object"</label>
    </li>
    <li>
       <input type="radio" name="question-1" id="answer-1-2">
       <label for="answer-1-2">"array"</label>
    </li>
    <li>
       <input type="radio" name="question-1" id="answer-1-3">
       <label for="answer-1-3">"arguments"</label>
    </li>
    <li>
       <input type="radio" name="question-1" id="answer-1-4">
       <label for="answer-1-4">"undefined"</label>
    </li>
</ul>
2.

```js
var f = function g(){ return 23; };
typeof g();
```

<ul class="answers">
        <li>
          <input type="radio" name="question-2" id="answer-2-1">
          <label for="answer-2-1">"number"</label>
        </li>
        <li>
          <input type="radio" name="question-2" id="answer-2-2">
          <label for="answer-2-2">"undefined"</label>
        </li>
        <li>
          <input type="radio" name="question-2" id="answer-2-3">
          <label for="answer-2-3">"function"</label>
        </li>
        <li>
          <input type="radio" name="question-2" id="answer-2-4">
          <label for="answer-2-4">Error</label>
        </li>
      </ul>
3.

```js
(function(x){
  delete x;
  return x;
})(1);
```

<ul class="answers">
        <li>
          <input type="radio" name="question-3" id="answer-3-1">
          <label for="answer-3-1">1</label>
        </li>
        <li>
          <input type="radio" name="question-3" id="answer-3-2">
          <label for="answer-3-2">null</label>
        </li>
        <li>
          <input type="radio" name="question-3" id="answer-3-3">
          <label for="answer-3-3">undefined</label>
        </li>
        <li>
          <input type="radio" name="question-3" id="answer-3-4">
          <label for="answer-3-4">Error</label>
        </li>
      </ul>
      
4.
```js
var y = 1, x = y = typeof x;
x;
```
<ul class="answers">
        <li>
          <input type="radio" name="question-4" id="answer-4-1">
          <label for="answer-4-1">1</label>
        </li>
        <li>
          <input type="radio" name="question-4" id="answer-4-2">
          <label for="answer-4-2">"number"</label>
        </li>
        <li>
          <input type="radio" name="question-4" id="answer-4-3">
          <label for="answer-4-3">undefined</label>
        </li>
        <li>
          <input type="radio" name="question-4" id="answer-4-4">
          <label for="answer-4-4">"undefined"</label>
        </li>
      </ul>
      
5.
```js
(function f(f){
  return typeof f();
})(function(){ return 1; });
```
<ul class="answers">
        <li>
          <input type="radio" name="question-5" id="answer-5-1">
          <label for="answer-5-1">"number"</label>
        </li>
        <li>
          <input type="radio" name="question-5" id="answer-5-2">
          <label for="answer-5-2">"undefined"</label>
        </li>
        <li>
          <input type="radio" name="question-5" id="answer-5-3">
          <label for="answer-5-3">"function"</label>
        </li>
        <li>
          <input type="radio" name="question-5" id="answer-5-4">
          <label for="answer-5-4">Error</label>
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
<ul class="answers">
        <li>
          <input type="radio" name="question-6" id="answer-6-1">
          <label for="answer-6-1">"undefined"</label>
        </li>
        <li>
          <input type="radio" name="question-6" id="answer-6-2">
          <label for="answer-6-2">"object"</label>
        </li>
        <li>
          <input type="radio" name="question-6" id="answer-6-3">
          <label for="answer-6-3">"number"</label>
        </li>
        <li>
          <input type="radio" name="question-6" id="answer-6-4">
          <label for="answer-6-4">"function"</label>
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
<ul class="answers">
        <li>
          <input type="radio" name="question-7" id="answer-7-1">
          <label for="answer-7-1">"undefined"</label>
        </li>
        <li>
          <input type="radio" name="question-7" id="answer-7-2">
          <label for="answer-7-2">"object"</label>
        </li>
        <li>
          <input type="radio" name="question-7" id="answer-7-3">
          <label for="answer-7-3">"number"</label>
        </li>
        <li>
          <input type="radio" name="question-7" id="answer-7-4">
          <label for="answer-7-4">"function"</label>
        </li>
      </ul>
8.

```js
var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;
```
<ul class="answers">
        <li>
          <input type="radio" name="question-8" id="answer-8-1">
          <label for="answer-8-1">"string"</label>
        </li>
        <li>
          <input type="radio" name="question-8" id="answer-8-2">
          <label for="answer-8-2">"number"</label>
        </li>
        <li>
          <input type="radio" name="question-8" id="answer-8-3">
          <label for="answer-8-3">"function"</label>
        </li>
        <li>
          <input type="radio" name="question-8" id="answer-8-4">
          <label for="answer-8-4">"undefined"</label>
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
<ul class="answers">
        <li>
          <input type="radio" name="question-9" id="answer-9-1">
          <label for="answer-9-1">1</label>
        </li>
        <li>
          <input type="radio" name="question-9" id="answer-9-2">
          <label for="answer-9-2">"1function"</label>
        </li>
        <li>
          <input type="radio" name="question-9" id="answer-9-3">
          <label for="answer-9-3">"1undefined"</label>
        </li>
        <li>
          <input type="radio" name="question-9" id="answer-9-4">
          <label for="answer-9-4">NaN</label>
        </li>
      </ul>
10.

```js
var x = [typeof x, typeof y][1];
typeof typeof x;
```
<ul class="answers">
        <li>
          <input type="radio" name="quiz-10" id="answer-10-1">
          <label for="answer-10-1">"number"</label>
        </li>
        <li>
          <input type="radio" name="quiz-10" id="answer-10-2">
          <label for="answer-10-2">"string"</label>
        </li>
        <li>
          <input type="radio" name="quiz-10" id="answer-10-3">
          <label for="answer-10-3">"undefined"</label>
        </li>
        <li>
          <input type="radio" name="quiz-10" id="answer-10-4">
          <label for="answer-10-4">"object"</label>
        </li>
      </ul>
      
11.

```js
(function(foo){
  return typeof foo.bar;
})({ foo: { bar: 1 } });
```
<ul class="answers">
        <li>
          <input type="radio" name="quiz-11" id="answer-11-1">
          <label for="answer-11-1">"undefined"</label>
        </li>
        <li>
          <input type="radio" name="quiz-11" id="answer-11-2">
          <label for="answer-11-2">"object"</label>
        </li>
        <li>
          <input type="radio" name="quiz-11" id="answer-11-3">
          <label for="answer-11-3">"number"</label>
        </li>
        <li>
          <input type="radio" name="quiz-11" id="answer-11-4">
          <label for="answer-11-4">Error</label>
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
<ul class="answers">
        <li>
          <input type="radio" name="answer-12" id="answer-12-1">
          <label for="answer-12-1">1</label>
        </li>
        <li>
          <input type="radio" name="answer-12" id="answer-12-2">
          <label for="answer-12-2">2</label>
        </li>
        <li>
          <input type="radio" name="answer-12" id="answer-12-3">
          <label for="answer-12-3">Error (e.g. "Too much recursion")</label>
        </li>
        <li>
          <input type="radio" name="answer-12" id="answer-12-4">
          <label for="answer-12-4">undefined</label>
        </li>
      </ul>
      
13.
```js
function f(){ return f; }
new f() instanceof f;
```
<ul class="answers">
        <li>
          <input type="radio" name="answer-13" id="answer-13-2">
          <label for="answer-13-2">true</label>
        </li>
        <li>
          <input type="radio" name="answer-13" id="answer-13-1">
          <label for="answer-13-1">false</label>
        </li>
      </ul>
      
14.
```js
with (function(x, undefined){}) length;
```
<ul class="answers">
        <li>
          <input type="radio" name="answer-14" id="answer-14-1">
          <label for="answer-14-1">1</label>
        </li>
        <li>
          <input type="radio" name="answer-14" id="answer-14-2">
          <label for="answer-14-2">2</label>
        </li>
        <li>
          <input type="radio" name="answer-14" id="answer-14-3">
          <label for="answer-14-3">undefined</label>
        </li>
        <li>
          <input type="radio" name="answer-14" id="answer-14-4">
          <label for="answer-14-4">Error</label>
        </li>
      </ul>