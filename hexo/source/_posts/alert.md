---
title: iphone点击
date: 2016-12-19T10:29:11.000Z
tags:
  - alert
---

在移动端使用原生的alert/confirm总是会显示网址(url)，界面看起来很丑，搜索半天也找不到解决办法，在绝望的时候看到一篇文章写的很好，在此感谢http://ifindever.com/archives/260.html，本文只是在此基础上做些改进，还希望能帮助到大家。
<!--more-->
```js
/*remove url of alert/confirm*/  
var wAlert = window.alert;  
window.alert = function (message) {  
    try {  
        var iframe = document.createElement("IFRAME");  
        iframe.style.display = "none";  
        iframe.setAttribute("src", 'data:text/plain,');  
        document.documentElement.appendChild(iframe);  
        var alertFrame = window.frames[0];  
        var iwindow = alertFrame.window;  
        if (iwindow == undefined) {  
            iwindow = alertFrame.contentWindow;  
        }  
        iwindow.alert(message);  
        iframe.parentNode.removeChild(iframe);  
    }  
    catch (exc) {  
        return wAlert(message);  
    }  
}  
var wConfirm = window.confirm;  
window.confirm = function (message) {  
    try {  
        var iframe = document.createElement("IFRAME");  
        iframe.style.display = "none";  
        iframe.setAttribute("src", 'data:text/plain,');  
        document.documentElement.appendChild(iframe);  
        var alertFrame = window.frames[0];  
        var iwindow = alertFrame.window;  
        if (iwindow == undefined) {  
            iwindow = alertFrame.contentWindow;  
        }  
        iwindow.confirm(message);  
        iframe.parentNode.removeChild(iframe);  
    }  
    catch (exc) {  
        return wConfirm(message);  
    }  
}  
var wAlert = window.alert;  
window.alert = function (message) {  
    try {  
        var iframe = document.createElement("IFRAME");  
        iframe.style.display = "none";  
        iframe.setAttribute("src", 'data:text/plain,');  
        document.documentElement.appendChild(iframe);  
        var alertFrame = window.frames[0];  
        var iwindow = alertFrame.window;  
        if (iwindow == undefined) {  
            iwindow = alertFrame.contentWindow;  
        }  
        iwindow.alert(message);  
        iframe.parentNode.removeChild(iframe);  
    }  
    catch (exc) {  
        return wAlert(message);  
    }  
}  
var wConfirm = window.confirm;
window.confirm = function (message) {
    try {
        var iframe = document.createElement("IFRAME");
        iframe.style.display = "none";
        iframe.setAttribute("src", 'data:text/plain,');
        document.documentElement.appendChild(iframe);
        var alertFrame = window.frames[0];
        var iwindow = alertFrame.window;
        if (iwindow == undefined) {
            iwindow = alertFrame.contentWindow;
        }
        var result = window.frames[0].window.confirm(message);
        iframe.parentNode.removeChild(iframe);
        return result;
    }
    catch (exc) {
        return wConfirm(message);
    }
}
```
另外再记录一下重写alert，confirm提示框样式
```js
1.js

(function($) {
     
    $.alerts = {       
        alert: function(title, message, callback) {
            if( title == null ) title = 'Alert';
            $.alerts._show(title, message, null, 'alert', function(result) {
                if( callback ) callback(result);
            });
        },
         
        confirm: function(title, message, callback) {
            if( title == null ) title = 'Confirm';
            $.alerts._show(title, message, null, 'confirm', function(result) {
                if( callback ) callback(result);
            });
        },
             
        
        _show: function(title, msg, value, type, callback) {
          
                    var _html = "";
 
                    _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
                    _html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
                      if (type == "alert") {
                      _html += '<input id="mb_btn_ok" type="button" value="确定" />';
                    }
                    if (type == "confirm") {
                      _html += '<input id="mb_btn_ok" type="button" value="确定" />';
                      _html += '<input id="mb_btn_no" type="button" value="取消" />';
                    }
                    _html += '</div></div>';
                 
                    //必须先将_html添加到body，再设置Css样式
                    $("body").append(_html); GenerateCss();
         
            switch( type ) {
                case 'alert':
        
                    $("#mb_btn_ok").click( function() {
                        $.alerts._hide();
                        callback(true);
                    });
                    $("#mb_btn_ok").focus().keypress( function(e) {
                        if( e.keyCode == 13 || e.keyCode == 27 ) $("#mb_btn_ok").trigger('click');
                    });
                break;
                case 'confirm':
                   
                    $("#mb_btn_ok").click( function() {
                        $.alerts._hide();
                        if( callback ) callback(true);
                    });
                    $("#mb_btn_no").click( function() {
                        $.alerts._hide();
                        if( callback ) callback(false);
                    });
                    $("#mb_btn_no").focus();
                    $("#mb_btn_ok, #mb_btn_no").keypress( function(e) {
                        if( e.keyCode == 13 ) $("#mb_btn_ok").trigger('click');
                        if( e.keyCode == 27 ) $("#mb_btn_no").trigger('click');
                    });
                break;
              
               
            }
        },
        _hide: function() {
             $("#mb_box,#mb_con").remove();
        }
    }
    // Shortuct functions
    zdalert = function(title, message, callback) {
        $.alerts.alert(title, message, callback);
    }
     
    zdconfirm = function(title, message, callback) {
        $.alerts.confirm(title, message, callback);
    };
         
 
    
    
      //生成Css
  var GenerateCss = function () {
 
    $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
      filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6'
    });
 
    $("#mb_con").css({ zIndex: '999999', width: '50%', position: 'fixed',
      backgroundColor: 'White', borderRadius: '15px'
    });
 
    $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
      backgroundColor: '#DDD', borderRadius: '15px 15px 0 0',
      borderBottom: '3px solid #009BFE', fontWeight: 'bold'
    });
 
    $("#mb_msg").css({ padding: '20px', lineHeight: '20px',
      borderBottom: '1px dashed #DDD', fontSize: '13px'
    });
 
    $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
      border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
      lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
    });
 
    $("#mb_btnbox").css({ margin: '15px 0 10px 0', textAlign: 'center' });
    $("#mb_btn_ok,#mb_btn_no").css({ width: '85px', height: '30px', color: 'white', border: 'none' });
    $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
    $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });
 
 
    //右上角关闭按钮hover样式
    $("#mb_ico").hover(function () {
      $(this).css({ backgroundColor: 'Red', color: 'White' });
    }, function () {
      $(this).css({ backgroundColor: '#DDD', color: 'black' });
    });
 
    var _widht = document.documentElement.clientWidth; //屏幕宽
    var _height = document.documentElement.clientHeight; //屏幕高
 
    var boxWidth = $("#mb_con").width();
    var boxHeight = $("#mb_con").height();
 
    //让提示框居中
    $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
  }
 

})(jQuery);


 zdalert('系统提示','请输入正确数值',function(){ 
    //要回调的方法
    window.location.href="http://www.baidu.com"});
zdconfirm('系统确认框','你确认提交该条数据吗',function(r){
     if(r)
      {
         //...点确定之后执行的内容
         window.location.href="http://www.baidu.com"
      }});
```