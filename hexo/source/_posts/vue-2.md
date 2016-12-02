---
title: vue-第二天
date: 2016-11-30T11:11:11.000Z
tags:
  - vue
---
之前搭建了Vue的开发环境，对于Vue的具体使用还不是太了解。今天写一个demo试一下这个东西到底是怎么用的～开工...

首先：

Vue.js是一套构建用户界面的渐进式框架。Vue采用自底向上增量开发的设计。Vue的核心只关注视图层。
Vue.js的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。

照着官方文档的东西做一遍先～

<!--more-->

### 声明式渲染
```html
<div id="app">
    {{ message }}
</div>
```

```js
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
```

```html
<div id="app-2">
  <span v-bind:title="message">
    Hover your mouse....   
  </span>
</div>
```
```js
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'you loaded this page on ' + new Date()
    }
})
```
这里的v-bind属性被称为指令。指令带有前缀 v- ，以表示它们是Vue.js提供的特殊属性。这个指令的简单含义是：将这个元素节点的title属性和Vue实例的message属性绑定到一起。

### 条件与循环
```html
<div id="app-3">
    <p v-if="seen">Now you see me</p>
</div>
```
```js
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
```
如果在控制台设置app3.seen = false,你会发现'Now you see me'消失了～
#### 使用v-for指令循环列表
```html
<div id="app-4">
    <ol>
        <li v-for="todo in todos">
            {{ todo.text }}
        </li>
    </ol>
</div>
```

```js
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Javascript' },
            { text: 'Learn Vue' },
            { text: 'Build somethig awesome' }
        ]
    }
})
```
在控制台里输入：app4.todos.push({ text: 'New item' })。列表中就多了一栏新内容。
### 处理用户输入
使用v-on绑定监听事件用于调用Vue实例中定义的方法：
```html
<div id="app-5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```
```js
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
          this.message = this.message.split('').reverse().join()
        }
    }
})
```
使用v-model指令，在表单输入和应用状态中做双向数据绑定
```html
<div id="app-6">
    <p>{{ message }}</p>
    <input v-model="message">
</div>
```
```js
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})
```

### 用组件构建（应用）？？？ .－.
用独立可复用的小组件来构建大型应用。
在Vue里，一个组件实质上是一个拥有预定义选项的一个Vue实例：
```js
//Define a new component called todo-item
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})
```
现在你可以在另一个组件模版中写入它：
```html
<ol>
    <!--Create an instance of the todo-item component-->
    <todo-item></todo-item>
</ol>
```
我们应该将数据从父作用域传到子组件。修改一下组件的定义，使得它能够接受一个prop字段。
```js
Vue.component('todo-item', {
    //The todo-item component now accepts a
    //'prop', which is like a custom attribute.
    //This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
```
使用v-bind指令将todo传到每一个重复的组件中：
```html
<div id="app-7">
    <ol>
        <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
    </ol>
</div>
```
```js
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { text: 'Vegetables' },
            { text: 'Cheese' },
            { text: 'Whatever else humans are supposed to eat' }
        ]
    }
})
```

