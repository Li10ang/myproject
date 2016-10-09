/**
 * jquery.suggestion.js 1.1
 * http://passer-by.com
 */
;(function($, window, document, undefined) {
    $.fn.suggestion = function(parameter) {
        parameter = parameter || {};
        var defaults = {
            url:'',                          //请求的接口地址
            suggestionCls:'suggestion',      //提示框的内容class
            activeCls:'active',              //列表项选中class
            FieldName:'word',                //当前input表单项在请求接口时的字段名
            dataFormat:'jsonp',              //请求的格式
            parameter:{},                    //其他与接口有关参数
            jsonpCallback:'',                //自定义回调函数
            autoSubmit:true,                 //点击确定是否自动提交表单
            beforeSend:function(){},         //发送前动作：传入准备提交的表单项目，返回false终止提交
            get:function(){},                //获得搜索建议：传入一个对象，target表示被建议列表对象,data表示请求到的数据
            select: function(item) {         //选中搜索建议列表项：传入一个对象，target表示当前选中列表项,input表示当前input表单项
                item.input.val(item.target.text());
            }
        }
        var options = $.extend({}, defaults, parameter);
        var $window = $(window);
        var $document = $(document);
        return this.each(function() {
            //对象定义
            var $this = $(this);
            var $form = $this.parents('form');
            var $box = $this.parent();
            var $suggestion = $form.find('.'+options.suggestionCls);
            if(!$suggestion.length){
                $suggestion = $("<div class='"+options.suggestionCls+"'><ul></ul></div>").appendTo($box);
            }
            var $list = $suggestion.find('ul');
            var $item = $list.find('li');
            var _height = $this.outerHeight(true);
            var _width = $this.outerWidth(true);
            var _text = '';
            var _hander = 0;
            var _index = -1;
            var isShow = false;
            var hasData = false;
            //节点样式
            $form.css({
                'position':'relative'
            });
            var _top = $this.position().top;
            var _left = $this.position().left;
            $this.prop({
                'autocomplete':'off',
                'disableautocomplete':true
            });
            $suggestion.css({
                'position':'absolute',
                'top':_top+_height+'px',
                'left':_left+'px',
                'display':'none',
                'width':_width+'px'
            });
            //方法定义
            //按键松开
            var up = function(e){
                e.isPropagationStopped();
                e.preventDefault();
                switch(e.keyCode){
                    case 13:
                    case 38:
                    case 40:
                    break;
                    default:
                        show();
                }
            };
            //按键按下
            var down = function(e){
                e.isPropagationStopped();
                switch(e.keyCode){
                    case 13:
                        hide();
                        if(!options.autoSubmit){
                            e.preventDefault();
                        }
                    break;
                    case 38:
                        if(isShow){
                            if(_index>0){
                                _index--;
                                $items.eq(_index).addClass(options.activeCls).siblings().removeClass(options.activeCls);
                                select();
                            }else{
                                _index = -1;
                                $items.removeClass(options.activeCls);
                                $this.val(_text);
                            }
                            e.preventDefault();                                    
                        }
                    break;
                    case 40:
                        if(isShow){
                            if(_index<$items.length-1){
                                _index++;
                                $items.eq(_index).addClass(options.activeCls).siblings().removeClass(options.activeCls);
                                select();
                            }
                            e.preventDefault();
                        }
                    break;
                    default:
                        hide();
                }
            };
            //鼠标经过
            var hover = function(e){
                e.isPropagationStopped();
                var $target = $(this);
                _index = $target.index();
                $target.addClass(options.activeCls).siblings().removeClass(options.activeCls);
            };
            //选中表单项
            var select = function(){
                var $target = $list.find('li.'+options.activeCls);
                var status = {
                    'target':$target,
                    'input':$this
                }
                options.select(status);
            };
            //成功后的回调函数
            var success = function(data){
                var status = {
                    'target':$list,
                    'data':data
                };
                options.get(status);
                $items = $suggestion.find('li');
                hasData = $items.length>0;        //根据列表长度判断有没有值
                if(hasData){
                    $suggestion.show();
                }
            }
            //显示表单项
            var show = function(){
                isShow = true;
                _hander = setTimeout(function(){
                    if(isShow){
                        var value = $.trim($this.val());
                        if(value==''){
                            hide();
                        }else{
                            if(value != _text){ //缓存上次输入
                                _index = -1;
                                options.parameter[options.FieldName] = _text = value;
                                if(options.beforeSend(options.parameter)!=false){
                                    $.ajax({
                                        type:'get',  
                                        async: false,  
                                        url :options.url,
                                        data:options.parameter,
                                        dataType:options.dataFormat,
                                        jsonp:options.jsonp,
                                        success:success
                                    });                                    
                                }
                            }else{
                                if(hasData){
                                    $suggestion.show();
                                }
                            }                            
                        }
                    }
                },'500');  
            }
            //隐藏表单项                 
            var hide = function(){
                isShow = false;
                _hander&&clearTimeout(_hander);
                $suggestion.hide(); 
            };
            //事件绑定
            $this.on({
                'keyup':up,
                'keydown':down
            });
            $list.on('click','li',function(){
                select();
                if(options.autoSubmit){
                    $form.submit();
                }
            }).on('mouseenter','li',hover);
            $document.on({
                'click':hide
            });
            $window.resize(function(){
                _height = $this.outerHeight(true);
                _width = $this.outerWidth(true); 
                _top = $this.position().top;
                _left = $this.position().left;
                $suggestion.css({
                    'top':_top+_height+'px',
                    'left':_left+'px',
                    'width':_width+'px'
                });
            });
        });
    };
})(jQuery, window, document);