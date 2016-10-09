/**
 * jquery.dialog.js 1.0
 * http://passer-by.com
 */
;(function($, window, document, undefined) {
	$.fn.dialog = function(parameter,getApi) {
		if(typeof parameter == 'function'){ //重载
			getApi = parameter;
			parameter = {};
		}else{
			parameter = parameter || {};
			getApi = getApi||function(){};
		}
		var defaults = {
			prefix:'widget',
			content:'',
			title:'',
			backgroundColor:'#000',       
			opacity: 0.5,
			autoOpen:false,
			isModel:true,
			buttons:{},
			beforeOpen:function(){}
		};
		var options = $.extend({}, defaults, parameter);
		var $window = $(window);
		var $body = $("body");
		var isIE6 = navigator.appVersion.indexOf("MSIE 6") > -1; //IE6
		return this.each(function() {
			//全局变量
			var $this = $(this);
			var $children = options.content?$(options.content):$this.html(); //内容区域
			var $container = $('<div class="'+options.prefix+'-container"></div>');
			var $overlay = $();
			var $close = $('<div class="'+options.prefix+'-close"><a href="javascript:;">x</a></div>');
			var $title = $('<div class="'+options.prefix+'-title">'+options.title+'</div>');
			var $content = $('<div class="'+options.prefix+'-content"></div>').append($children);
			var $buttons = $('<div class="'+options.prefix+'-buttons"></div>');
			var _api = {};  //对外接口
			var _position = isIE6?'absolute':'fixed';
			var _isOpen = false; //是否是打开状态
			//结构修改
			$body.css('height','100%');
			$this.appendTo($body).empty();
			if(options.isModel){
				$overlay = $('<div class="'+options.prefix+'-overlay"></div>').css({
					'position': _position,
					'z-index': '998',
					'top': '0px',
					'left': '0px',
					'height': '100%',
					'width': '100%',
					'background': options.backgroundColor,
					'display': 'none'
				}).appendTo($this);                
			}
			$container.css({
				'display':'none',
				'position':_position,
				'z-index': '999'
			}).appendTo($this).append($close).append($title).append($content).append($buttons);
			for(name in options.buttons){
				(function(name){
					$('<button type="button">'+name+'</button>').appendTo($buttons).click(function(){
						options.buttons[name](_api);
					});                            
				})(name);
			}
			//对话框开启
			_api.open = function(callback){
				if(options.beforeOpen()!=false){
					(callback || function(){})(); //如果open的时候传入了方法，则在执行时进行预处理
					$this.show();
					if(options.isModel){
						$overlay.css({
							'opacity': 0
						}).stop().fadeTo(200,options.opacity);                    
					}
					$container.css("opacity",0).fadeTo(200, 1);
					_api.resize();
					_isOpen = true;
				}
			};
			//对话框关闭
			_api.close = function(){
				$container.stop().fadeTo(200, 1);
				if(options.isModel){
					$overlay.stop().fadeOut(200,function(){
						$this.hide();
					});
				}else{
					$this.hide();
				}
				_isOpen = false;
			};
			//对话框形状自动调整
			_api.resize = function(){
				$container.css({
					"left": ($window.width()-$container.outerWidth())/2 + "px",
					"top": ($window.height()-$container.outerHeight())/2 + "px"
				});    
			};
			//设置对话框内容
			_api.setContent = function(html){
				$content.html(html);
			};
			//获取按键对象
			_api.getButtons = function(){
				return $buttons;
			};
			_api.isOpen = function(){
				return _isOpen;
			};
			//事件绑定
			if(options.autoOpen){
				_api.open();
			}
			$close.click(_api.close);
			$overlay.click(_api.close);
			$window.resize(_api.resize);
			getApi(_api);
		});
	}
})(jQuery, window, document);