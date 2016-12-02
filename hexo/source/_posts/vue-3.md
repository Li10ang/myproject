---
title: vue-模板语法
date: 2016-12-01T11:11:11.000Z
tags:
  - vue
---

## Vue实例
### 构造器
每个Vue.js应用都是通过构造函数Vue创建一个Vue的根实例启动的：
```js
var vm = new Vue({
    //选项
})
```
在实例化Vue时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。全部的选项可以在[API文档](https://vuefe.cn/v2/api/)中查看.

<!--more-->

可以扩展Vue构造器，从而用预定义选项创建可复用的组件构造器：
```js
var MyComponent = Vue.extend({
    //扩展选项
})
//所有的'MyComponent'实例都将以预定义的扩展选项被创建
var myComponentInstance = new MyComponent()
```

### 属性与方法
每个Vue实例都会代理其data对象里所有的属性；
```js
var data = { a:1 }
var vm = new Vue({
    data: data
})
vm.a === data.a // -> true
vm.a = 2
data.a // -> 2

// ...反之
data.a = 3
vm.a // -> 3
```
除了data属性，Vue实例暴露了一些有用的实例属性和方法。这些属性和方法都有前缀 $ ，以便与代理的data属性区分。
```js
var data = { a:1 }
var vm = new Vue({
    el: '#example',
    data: data
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true

// $watch 是一个实例方法
vm.$watch('a', function(newVal, oldVal) {
  //这个回调将在'vm.a'改变后调用
})
```
### 实例生命周期
每个Vue实例在被创建之前都要经过一系列的初始化过程。created这个钩子在实例被创建之后被调用：
```js
var vm = new Vue({
    data: {
        a: 1
    },
    create: function() {
      // 'this'指向vm实例
      console.log('a is: ' + this.a)
    }
})
// -> 'a is: 1'
```
[生命周期图示](https://vuefe.cn/images/lifecycle.png)

## 模板语法
### 插值

#### #文本
数据绑定最常见的形式就是使用'Mustache'语法（双大括号）的文本插值：
```html
<span>Message: {{ msg }}</span>
```
Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。

通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上所有的数据绑定：
```html
<span v-once>This will never change: {{ msg }}</span>
```
#### #纯HTML
双大括号会将数据解释为纯文本，而非HTML。为了输出真正的HTML，你需要使用v-html指令：
```html
<div v-html="rawHtml"></div>
```
#### #属性
Mustache不能在HTML属性中使用，应使用v-bind指令
```html
<div v-bind:id="dynamicId"></div>
```
这对布尔值的属性也有效－－如果条件被求值为false的话该属性会被移除：
```html
<button v-bind:disabled="someDynamicCondition">Button</button>
```
#### #使用JavaScript表达式
对于所有的数据绑定，Vue.js都提供了完全的JavaScript表达式支持。
```html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id=" 'list-' + id "></div>
```
这些表达式会在所属Vue实例的数据作用域下作为JavaScript被解析。有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if(ok) { return message } }}
```
###指令
指令是带有v-前缀的特殊属性。指令属性的值预期是单一JavaScript表达式（除了v-for....）。举个栗子：
```html
<p v-if="seen">Now you see me</p>
```
这里，v-if指令将根据表达式seen的值的真假来移除／插入<p>元素
#### #参数
一些指令能接受一个'参数'，在指令后以冒号指明。例如，v-bind指令被用来响应的更新HTML属性：
```html
<a v-bind:href="url"></a>
```
在这里href是参数，告知v-bind指令将该元素的href属性与表达式url的值绑定。
另一个栗子是v-on指令。它用于监听DOM事件：
```html
<a v-on:click="doSomething"></a>
```
#### #修饰符
修饰符是以半角句号.指明的特殊后缀，用于指出一个制定应该以特殊方式绑定。例如，.prevent修饰符告诉v-on指令对于触发的事件调用event.preventDefault():
```html
<from v-on:submit.prevent="onSubmit"></from>
```

#### #过滤器
Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。过滤器应该被添加在 mustache 插值的尾部，由“管道符”指示：
```html
    <!-- in mustaches -->
    {{ message | capitalize }}
    <!-- in v-bind -->
    <div v-bind:id="rawId | formatId"></div>
```
过滤器函数总接受表达式的值作为第一个参数。
```js
new Vue({
  // ...
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
```
过滤器可以串联：
```html
{{ message | filterA | filterB }}
```
过滤器是JavaScript函数，因此可以接受参数；
```html
{{ message | filterA('arg1', arg2) }}
```
这里，字符串'arg1'将传给过滤器作为第二个参数，arg2表达式的值将被求值然后传给过滤器作为第三个参数。

### 缩写
#### #v-bind 缩写
```html
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```
#### #v-on缩写
```html
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```