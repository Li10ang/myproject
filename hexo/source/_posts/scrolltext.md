---
title: 文字滚动显示
date: 2017-02-20T11:29:11.000Z
tags:
  - 文字滚动显示
---



```html
<div role="tabpanel" class="tab-pane fade in active" id="Section1">
    <ul style="position: absolute; margin: 0px; padding: 0px; top: 0px;">
		<li style="margin: 0px; padding: 0px; height: 48px; display: block;">
		    <div> 1) Lorem ipsum dolor sit neque. more info </div>
		</li><li style="margin: 0px; padding: 0px; height: 48px; display: block;">
			<div> 2) Lorem ipsum onsectetur adipiscing elit. more info </div>
		</li><li style="margin: 0px; padding: 0px; height: 48px; display: block;">
			<div> 3) Lorem ipsum d info more info more info more info </div>
		</li><li style="margin: 0px; padding: 0px; height: 48px; display: block;">
			<div> 4) juginfo more info more info more info more info </div>
		</li></ul>
		                            </div>
<script>
$('#Section1').vTicker({
				speed: 700,
				pause: 1000,
				animation: 'fade',
				mousePause: false,
				showItems: 3
			});
</script>
```
<!--more-->
```js
(function(a) {
	a.fn.vTicker = function(b) {
		var c = {
			speed: 700,
			pause: 4000,
			showItems: 3,
			animation: "",
			mousePause: true,
			isPaused: false,
			direction: "up",
			height: 0
		};
		var b = a.extend(c, b);
		moveUp = function(g, d, e) {
			if(e.isPaused) {
				return
			}
			var f = g.children("ul");
			var h = f.children("li:first").clone(true);
			if(e.height > 0) {
				d = f.children("li:first").height()
			}
			f.animate({
				top: "-=" + d + "px"
			}, e.speed, function() {
				a(this).children("li:first").remove();
				a(this).css("top", "0px")
			});
			if(e.animation == "fade") {
				f.children("li:first").fadeOut(e.speed);
				if(e.height == 0) {
					f.children("li:eq(" + e.showItems + ")").hide().fadeIn(e.speed)
				}
			}
			h.appendTo(f)
		};
		moveDown = function(g, d, e) {
			if(e.isPaused) {
				return
			}
			var f = g.children("ul");
			var h = f.children("li:last").clone(true);
			if(e.height > 0) {
				d = f.children("li:first").height()
			}
			f.css("top", "-" + d + "px").prepend(h);
			f.animate({
				top: 0
			}, e.speed, function() {
				a(this).children("li:last").remove()
			});
			if(e.animation == "fade") {
				if(e.height == 0) {
					f.children("li:eq(" + e.showItems + ")").fadeOut(e.speed)
				}
				f.children("li:first").hide().fadeIn(e.speed)
			}
		};
		return this.each(function() {
			var f = a(this);
			var e = 0;
			f.css({
				overflow: "hidden",
				position: "relative"
			}).children("ul").css({
				position: "absolute",
				margin: 0,
				padding: 0
			}).children("li").css({
				margin: 0,
				padding: 0
			});
			if(b.height == 0) {
				f.children("ul").children("li").each(function() {
					if(a(this).height() > e) {
						e = a(this).height()
					}
				});
				f.children("ul").children("li").each(function() {
					a(this).height(e)
				});
				f.height(e * b.showItems)
			} else {
				f.height(b.height)
			}
			var d = setInterval(function() {
				if(b.direction == "up") {
					moveUp(f, e, b)
				} else {
					moveDown(f, e, b)
				}
			}, b.pause);
			if(b.mousePause) {
				f.bind("mouseenter", function() {
					b.isPaused = true
				}).bind("mouseleave", function() {
					b.isPaused = false
				})
			}
		})
	}
})(jQuery);
```