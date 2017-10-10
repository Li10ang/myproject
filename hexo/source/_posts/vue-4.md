---
title: vue-计算属性
date: 2016-12-01T14:52:11.000Z
tags:
  - vue
---
## 计算属性
<!--more-->
#### #基础栗子
```html
<div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```js
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function() {
          return this.message.split('').reverse().join('')
        }
    }
})
```
这里我们声明了一个计算属性reversedMessage。我们提供的函数将用作属性vm.reversedMessage的getter。
```js
console.log(vm.reversedMessage) // -> 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // -> 'eybdooG'
```
vm.reversedMessage的值始终取决于vm.message的值。

#### #计算缓存vs Methods
