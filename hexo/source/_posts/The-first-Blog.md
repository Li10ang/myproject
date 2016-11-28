---
title: sticky Footer应用
date: 2016-11-28T19:45:22.000Z
tags:
  - web
  - css
---

> 在网页设计中，Sticky footers设计是最古老和最常见的效果之一，大多数人都曾经经历过。它可以概括如下：如果页面内容不够长的时候，页脚块粘贴在视窗底部；如果内容足够长时，页脚块会被内容向下推送。

```html
<header>
    <h1>Site name</h1>
</header>
<main>
    <p>Bacon Ipsum dolor sit amet...
    <!-- Filler text from baconipsum.com --></p>
</main>
<footer>
<p>© 2015 No rights reserved.</p>
<p>Made with ♥ by an anonymous pastafarian.</p>
</footer>
```

```css
body {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
}
main { flex: 1; }
```