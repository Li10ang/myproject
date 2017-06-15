	function setCookie(name,value) {
	  var Days = 10; //此 cookie 将被保存 30 天
	  var exp  = new Date();    //new Date("December 31, 9998");
	  exp.setTime(exp.getTime() + Days*24*60*60*1000);
	  if((typeof value == "string")&&(value.length > 0)){
	      document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString();
	  }else{
	      var exp = new Date();
	      exp.setTime(exp.getTime() - 1);
	      var cval=getCookie(name);
	      if(cval!=null)
	          document.cookie=name +"="+cval+";expires="+exp.toGMTString();
	  }
	}
	function getCookie(cname)
	{
	  var name = cname + "=";
	  var ca = document.cookie.split(';');
	  for(var i=0; i<ca.length; i++) 
	  {
	    var c = ca[i].trim();
	    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	  }
	  return "";
	}