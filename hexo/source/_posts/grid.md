---
title: CSS Grid布局
date: 2017-10-10T16:29:11.000Z
tags:
  - Grid
---

交互式学习Grid布局
http://cssgridgarden.com/
<!--more-->

1.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column-start: 3;
}
```
2.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#poison {
    grid-column-start: 5;
}
```
3.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column-start: 1;
    grid-column-end: 4;
}
```
4.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column-start: 5;
    grid-column-end: 2;
}
```
5.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column-start: 1;
    grid-column-end: 5;
}
```
6.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#poison {
    grid-column-start: 4;
}
```
7.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column-start: 2;
    grid-column-end: span 2;
}
```
8.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column-start: 1;
    grid-column-end: span 5;
}
```
9.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column-start: span 3;
    grid-column-end: 6;
}
```
10.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column: 4/6;
}
```
11.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column: span 3/5;
}
```
12.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-row-start: 3;
}
```
13.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-row: 3/6;
}
```
14.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#poison {
    grid-column: 2;
    grid-row: 5;
}
```
15.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column: 2/6;
    grid-row: 1/6;
}
```
16.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-area: 1/2/4/6;
}
```
17.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water-1 {
    grid-area: 1/4/6/5;
}
#water-2 {
    grid-area: 2/3/5/6;
}
```
18.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
.water {
    order: 0;
}
#poison {
    order: 1;
}
```
19.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
.water {
    order: 0; 
}
.poison {
    order: -1;
}
```
20.
```css
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
    grid-column: 1;
    grid-row: 1;
}
```
21.
```css
#garden {
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: 20% 20% 20% 20% 20%;
}
#water {
  grid-column: 1;
  grid-row: 1;
}
```
22.
```css
#garden {
    display: grid;
    grid-template-columns: 100px 3em 40%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
```
23.
```css
#garden {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
```
24.
```css
#garden {
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 50px;
    grid-template-rows: 20% 20% 20% 20% 20%；
}
#water {
    grid-area: 1/1/6/2;
}
#poison {
    grid-area: 1/5/6/6;
}
```
25.
```css
#garden {
    display: grid;
    grid-template-columns: 75px 3fr 2fr;
    grid-template-rows: 100%;
}
```
26.
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;

grid-template-rows: 50px 0 0 0 5fr
}
#water {
  grid-column: 1 / 6;
  grid-row: 5 / 6;
}
```
27.
```css
#garden {
    display: grid;
    grid-template: 60% 40% / 200px;
}
#water {
    grid-column: 1;
    grid-row: 1;
}
```
28.
```css
#garden {
    display: grid;
    grid-template: 1fr 50px / 1fr 4fr;
}
```
