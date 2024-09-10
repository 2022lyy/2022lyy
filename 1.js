$(function(){
	//isIE();
	function isIE() { //ie?
	 if (!!window.ActiveXObject || "ActiveXObject" in window){
	 	document.oncontextmenu=stop; 
	 }else{
	  <!--
		document.oncontextmenu=new Function('event.returnValue=false;');
		document.onselectstart=new Function('event.returnValue=false;');
		-->
	  }
	 function stop(){ 
		return false; 
		} 
	}
	//解决IE8之类不支持getElementsByClassName
	if (!document.getElementsByClassName) {
	    document.getElementsByClassName = function (className, element) {
	        var children = (element || document).getElementsByTagName('*');
	        var elements = new Array();
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];
	            var classNames = child.className.split(' ');
	            for (var j = 0; j < classNames.length; j++) {
	                if (classNames[j] == className) {
	                    elements.push(child);
	                    break;
	                }
	            }
	        }
	        return elements;
	    };
	}
	$("body").on('click','.pu_select ul li',function(){
		var d = $(this).text();
		$(this).parent().parent().find('input').val(d);
		var s = $(this).attr('name');
		if(s){
			$(this).parent().parent().find('input').attr('name',s);
		}
		$(this).parent().hide();
	});
	$("body").on('click','.pu_select .ipt',function(){
		$(".pu_select ul").each(function(){
			$(this).hide();
		});
		seltid=0;
		$(this).parent().find('ul').toggle();
	});
	 /* ToolTip.init({
        delay: 400,
        fadeDuration: 250,
        fontSize: '1.0em',
        theme: 'dark',
        textColor: '#ffffff',
        shadowColor: '#d7d7d7',
        fontFamily: "'Roboto-Medium', 'Roboto-Regular', Arial"
    }); */
    $("body").on('click','.btnmo img, .btnmo button',function(){
		$(this).parent().find('.btn-list').toggle();
	});
	$("body").on('click','.btnmo .btn-list li',function(){
		bolk=0;
		$(".btnmo .btn-list").hide();
	});
	$("body").on('blur','input',function(){
		var val_=$(this).val().replace(/[`]/g,'');
		$(this).val(val_);
	});
});
var bolk = 0,seltid=0;
var hosts='http://'+window.location.host+'/';
var dizhi={
	hosts:'',
	ads2:hosts,
	ads:hosts+'request_para.cgi?parameter=',
	adss:hosts+'send_order.cgi?parameter=',	
	v_disk:5,
	v_session:20,
	pwd:"",
	ssid:"",
	skiplink:"",//URL，
	oldlink:''
	
}
var publiname = {}
//window.alert = function(text){
//	var strbox = document.createElement("DIV");
//	var bombbox = document.createElement("DIV");
//	strbox.className += "fyx-lightbox";  
//	bombbox.className += "fyx-smollbox";  
//	strhtml = '<p class="fyx-box-title">系统消息</p>'
//			+'<div class="fyx-box-alert"><p>'+text+'</p></div>'
//			+'<button class="fyx-close" onclick="close1()">关闭</button>'
//	;
//	if(document.getElementsByClassName("lfyx-ightbox")){
//		var light = document.getElementsByClassName("fyx-lightbox");
//		for(var i=0;i<light.length;i++){
//			document.body.removeChild(light[i]);
//		}
//		var model = document.getElementsByClassName("fyx-smollbox");
//		for(var i=0;i<model.length;i++){
//			document.body.removeChild(model[i]);
//		}
//	}
//	document.body.appendChild(strbox);
//	bombbox.innerHTML = strhtml;
//	document.body.appendChild(bombbox);
//	
//	this.close1=function(){
//		var light = document.getElementsByClassName("fyx-lightbox");
//		for(var i=0;i<light.length;i++){
//			document.body.removeChild(light[i]);
//		}
//		var model = document.getElementsByClassName("fyx-smollbox");
//		for(var i=0;i<model.length;i++){
//			document.body.removeChild(model[i]);
//		}
//	}	
//}

function Alert(msg,callback,txt){
		var strbox = document.createElement("DIV");
	var bombbox = document.createElement("DIV");
	strbox.className += "fyx-lightbox";  
	bombbox.className += "delbox"; 
	if(!txt){
		txt = '关闭';
	}
	strhtml = '<p class="fyx-box-title">系统消息</p>'
			+'<div class="fyx-box-alert"><p>'+msg+'</p></div>'
			+'<button class="fyx-btn-a-ext fyx-close" onclick="close1()">'+txt+'</button>'
	;
	if(document.getElementsByClassName("fyx-lightbox")){
		var light = document.getElementsByClassName("fyx-lightbox");
		for(var i=0;i<light.length;i++){
			document.body.removeChild(light[i]);
		}
		var model = document.getElementsByClassName("delbox");
		for(var i=0;i<model.length;i++){
			document.body.removeChild(model[i]);
		}
	}
	document.body.appendChild(strbox);
	bombbox.innerHTML = strhtml;
	document.body.appendChild(bombbox);
	
	this.close1=function(){
		var light = document.getElementsByClassName("fyx-lightbox");
		for(var i=0;i<light.length;i++){
			document.body.removeChild(light[i]);
		}
		var model = document.getElementsByClassName("delbox");
		for(var i=0;i<model.length;i++){
			document.body.removeChild(model[i]);
		}
		if(callback) callback(true);
	}	
}

//confirm
function myConfirm(msg,callback) {
  	var strbox = document.createElement("DIV");
	var bombbox = document.createElement("DIV");
	strbox.className += "fyx-lightbox";  
	bombbox.className += "fyx-smollbox";  
	strhtml = '<p class="fyx-box-title">系统消息</p>'
			+'<div class="fyx-box-alert"><p>'+msg+'</p></div>'
			+'<button class="fyx-btn-a-ext fyx-close" style="right:320px;" onclick="close1(1)">确定</button><button class="fyx-btn-a-ext fyx-close" style="right:130px;"  onclick="close1(2)">返回</button>'
	;
	if(document.getElementsByClassName("lfyx-ightbox")){
		var light = document.getElementsByClassName("fyx-lightbox");
		for(var i=0;i<light.length;i++){
			document.body.removeChild(light[i]);
		}
		var model = document.getElementsByClassName("fyx-smollbox");
		for(var i=0;i<model.length;i++){
			document.body.removeChild(model[i]);
		}
	}
	document.body.appendChild(strbox);
	bombbox.innerHTML = strhtml;
	document.body.appendChild(bombbox);
	this.close1=function(num){
		var light = document.getElementsByClassName("fyx-lightbox");
		for(var i=0;i<light.length;i++){
			document.body.removeChild(light[i]);
		}
		var model = document.getElementsByClassName("fyx-smollbox");
		for(var i=0;i<model.length;i++){
			document.body.removeChild(model[i]);
		}
		if(num==1){
			if(callback) callback(true);
		}else if(num==2){
			 if(callback) callback(false);
		}
	}	
}

function delConfirm(msg,title,callback) {
  	var strbox = document.createElement("DIV");
	var bombbox = document.createElement("DIV");
	strbox.className += "fyx-lightbox";  
	bombbox.className += "delbox";  
	var t = '删除信息';
	if(typeof(title)!="function"){
		t=title;
	}
	strhtml = '<p class="fyx-box-title">'+t+'</p>'
			+'<div class="fyx-box-alert"><p>'+msg+'</p></div>'
			+'<button class="fyx-btn-a-ext fyx-close" onclick="close1(1)">确定</button><button class="fyx-btn-white fyx-close" onclick="close1(2)">返回</button>'
	;
	if(document.getElementsByClassName("lfyx-ightbox")){
		var light = document.getElementsByClassName("fyx-lightbox");
		for(var i=0;i<light.length;i++){
			document.body.removeChild(light[i]);
		}
		var model = document.getElementsByClassName("delbox");
		for(var i=0;i<model.length;i++){
			document.body.removeChild(model[i]);
		}
	}
	document.body.appendChild(strbox);
	bombbox.innerHTML = strhtml;
	document.body.appendChild(bombbox);
	this.close1=function(num){
		var light = document.getElementsByClassName("fyx-lightbox");
		for(var i=0;i<light.length;i++){
			document.body.removeChild(light[i]);
		}
		var model = document.getElementsByClassName("delbox");
		for(var i=0;i<model.length;i++){
			document.body.removeChild(model[i]);
		}
		if(num==1){
			if(callback) callback(true);
		}else if(num==2){
			 if(callback) callback(false);
		}
	}	
}

//返回上一页
function previous_page(msg){

	if(dizhi.skiplink!=''){
		$.ajax({
			type:"get",
			url:dizhi.skiplink,
			async:true,
			cache:false,
			dataType:"html",
			success:function(data){
			$("#box").html(data);
				autoHeight();
				if(msg!=undefined && msg.indexOf("purl")==-1){
					dizhi.skiplink = dizhi.oldlink;
				}
				if(msg!=undefined && msg.indexOf("slippage")!=-1){
					var slippage = msg.substring(msg.indexOf("=")+1,msg.length);
					//publiname['slippage']=slippage;
					var myfun='\$\("\.fyx-nav-nav li"\)\.eq('+(parseInt(slippage)-1)+').click()\;';
					setTimeout(myfun,100);
					//$(".fyx-nav-nav li").eq(parseInt(slippage)-1).click();
				}
			}
		});
	}
}
//跳转页面
function Skip_links(URL,msg){
	$.ajax({
		type:"get",
		url:URL,
		async:true,
		cache:false,
		dataType:"html",
		success:function(data){
			if(msg){
				dizhi.skiplink = msg;
			}
			if(URL.indexOf("?")!=-1){
				var arr = URL.split("?");
				var num = arr[1].substr(1).match(/=/g).length;
				var txtart = arr[1];
				for(var i=0;i<num;i++){
					var dafa = txtart.indexOf("=");
					if(dafa>txtart.indexOf("&")){
						txtart = txtart.substring(txtart.indexOf("&")+1,txtart.length);
						dafa = txtart.indexOf("=");
					}
					var name = txtart.substring(0,dafa);
					txtart = txtart.substring(dafa+1,txtart.length);
					publiname[name]= GetManualString(URL,name);
				}
			}
			$("#box").html(data);
			autoHeight();
		}
	});
	
}
function getCount(str1,str2){
  return str1.match(/\str2/gi).length;
}


//鼠标悬停显示浮动提示框
var tip={$:function(ele){
	if(typeof(ele)=="object")
		return ele;
	else if(typeof(ele)=="string"||typeof(ele)=="number")
		return document.getElementById(ele.toString());
	return null;
},
	mousePos:function(e){
		var x,y;
		var e = e||window.event;
		return{x:e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,
			y:e.clientY+document.body.scrollTop+document.documentElement.scrollTop};
	},
	start:function(obj,id){
		var self = this;
		var t;
		if(typeof(id)=="undefined"){
			t = self.$("mjs:tip");
		}else{
			t = self.$(id);
		}
		obj.onmousemove=function(e){
			var mouse = self.mousePos(e);
			t.style.left = mouse.x + 10 + 'px';
			t.style.top = mouse.y + 10 + 'px';
			t.innerHTML = obj.getAttribute("tips");
			t.style.display = '';
		};
		obj.onmouseout=function(){
			t.style.display = 'none';
		};
	}
}
//点击页面隐藏下拉框
$(document).on("click",function(e){
	$(".wap").each(function(){
		if(e.target==$(this)){
			return false;
		}else{
			$(this).hide();
		}
	});
	
	if($(e.target).attr('class')=='fyx-lightbox'&&$("#loading").length<1){
	$(".fyx-lightbox").each(function(){
		if($(e.target).attr('class')!='fyx-lightbox'){
			return false;
		}else{
			$(".fyx-smollbox").hide();
			$(".fyx-smollbox .from p").each(function(){
				$(this).remove();
			});
			$(".fyx-smollbox input").each(function(){
				$(this).val('');
			});
			$(this).remove();
			$('.delbox').remove();
		}
	});
	}
	if($('.btnmo .btn-list').css('display')=='block'){
		bolk++;
		$('.btnmo .btn-list li').each(function(){
			if(e.target==$(this)){
				return false;
			}else if(bolk==2){
				bolk=0;
				$(this).parent().parent().hide();
			}
		});
	}
	if($('.pu_select ul').css('display')=='block'){
	
	
	}
	$(".pu_select ul").each(function(){
		if(e.target==$(this)){
			return false;
		}else if($(this).css('display')=='block'){
			seltid++;
			if(seltid==2){
				seltid=0;
				$(this).hide();
			}
		} 
	});
});

//隐藏弹框
function hidebox(){
		$(".fyx-lightbox").remove();
		$("#formc p").each(function(){
			$(this).remove();
		})
		$(".fyx-smollbox").each(function(){
			$(this).hide();
		});
		$(".fyx-smollbox input").each(function(){
			$(this).val('');
		});
		del_linbox();
	}
//去空值
function verifi(txt){
	if(typeof(txt)!="undefined"&&txt!="NONE"){
		return txt;
	}else{
		return "";
	}
}
//去空值
function veriNO(txt){
	if(txt!="NONE"&&typeof(txt)!="undefined"){
		return txt;
	}else{
		return "　";
	}
}
function veriNONE(txt){
	if(txt!="NONE"&&typeof(txt)!="undefined"){
		return txt;
	}else{
		return "";
	}
}

function return_number(txt){
	if(txt=="show_check"){
		return "YES";
	}else{
		return "NO";
	}
}
function return_number1(txt){
	if(txt=="show_tog"){
		return "YES";
	}else{
		return "NO";
	}
}
function return_redioyn(txt){
	if(txt=="show_redio"){
		return "YES";
	}else{
		return "NO";
	}
}
function return_check(txt){
	if(txt=="YES"){
		return "show_check";
	}else{
		return "hide_check";
	}
}
function return_check1(txt){
	if(txt=="YES"){
		return "show_tog";
	}else{
		return "hide_tog";
	}
}
function return_pbr(txt){
	if(txt=="YES"){
		return "hide_check";
	}else{
		return "show_check";
	}
}

  /**
 *筛查重复数组**/
function compare(arr,txt){
	var nary=arr.sort();
	for(var i=0;i<arr.length;i++){
		if (nary[i]==nary[i+1]){
			//alert(txt+"重复内容："+nary[i]);
			return false;
		}
	}
	return true;
}

function weektime(time){
	var time1 = ["周一","周二","周三","周四","周五","周六","周日"];
	var time2 = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
	var tim = time;
	var times = tim.split(",");
	if(time==""){
		return "";
	}
	var wek="",id;
	for(var i=0;i<times.length;i++){
		id = time2.indexOf(times[i]);
		wek+=" "+time1[id];
	}
	return wek;
}
/**
 *1.5秒以后自动隐藏 **/
function setimealert(txt) {
	//console.log(document.getElementById("setimealt"));
	if(document.getElementById("setimealt")!=undefined){
		$("#setimealt").remove();
		//return;
	}
	var strbox = document.createElement("DIV");
	strbox.id = "setimealt";
	strbox.className = "setalt";
	var wid = document.body.clientWidth;
	
	var temp = '<span>'+txt+'</span>'
		//$("body").append(temp);
		strbox.innerHTML = temp;
	document.body.appendChild(strbox);
	var setwid = document.getElementById("setimealt").offsetWidth;
		strbox.style.left = (wid-setwid)/2+"px";
		setTimeout(function(){$("#setimealt").remove();},1500);
	}
function settimeptxt(id,msg){
	$("#"+id).text(msg);
	setTimeout(function(){$("#"+id).text('')},2000);
}

//重置form
function formReset(id){
  document.getElementById(id).reset();
  }

//设置cookie
function setCookie(c_name, value, expiredays){
 　　var exdate=new Date();
　　//exdate.setDate(exdate.getDate() + expiredays);
	exdate.setTime(exdate.getTime() + 10 * 60 * 1000);
	//console.log(exdate.setDate());
　　document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
}

//获取cookie
function getCookie(name){
　　if (document.cookie.length>0){　　
　　　　c_start=document.cookie.indexOf(name + "=")　　　
　　　　if (c_start!=-1){ 
　　　　　　c_start=c_start + name.length+1　　
　　　　　　c_end=document.cookie.indexOf(";",c_start)　　
　　　　　　if (c_end==-1) c_end=document.cookie.length　　
　　　　　　return unescape(document.cookie.substring(c_start,c_end))　　
　　　　}else{
			//top.location.href='login.html';
		} 
　　}else{
		//top.location.href='login.html';
	}
		　　　　
}
//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间 
function delCookie(name){
    var date = new Date(); 
    date.setTime(date.getTime() - 10000); 
    document.cookie = name + "=a; expires=" + date.toGMTString(); 
}

function logincookie(key,id){//{hash_key:key,session_id:id}
//var str = {cookie:keys,session_id:id};
//var data = JSON.stringify(str);
	$.ajax({
		type:"get",
		url:dizhi.ads2+"cookie.cgi",
		async:false,
		//data:data,
		dataType: "json",
		success:function(data){
			if(data.type!=1){
				top.location.href=dizhi.ads2+'home/login.html';
			}
		}
	});
}

//判断文本框输入的是否是数字
function Regular(obj){
	if(obj.value.length==1){obj.value=obj.value.replace(/[^0-9]/g,'')}else{obj.value=obj.value.replace(/\D/g,'')}
}
//判断文本框输入的是否是负数字
function Regularngt(obj){
	if(obj.value.length==1){obj.value=obj.value.replace(/^(\-[0-9])/g,'')}else{obj.value=obj.value.replace(/\-\D/g,'')}
}
$(function(){
	 //判断浏览器是否支持placeholder属性
  supportPlaceholder='placeholder'in document.createElement('input'),
 
  placeholder=function(input){
 
    var text = input.attr('placeholder'),
    defaultValue = input.defaultValue;
 
    if(!defaultValue){
 
      input.val(text).addClass("fyx-col-bglk");
    }
 
    input.focus(function(){
 
      if(input.val() == text){
   
        $(this).val("");
      }
    });
 
  
    input.blur(function(){
 
      if(input.val() == ""){
       
        $(this).val(text).addClass("fyx-col-bglk");
      }
    });
 
    //输入的字符不为灰色
    input.keydown(function(){
  
      $(this).removeClass("fyx-col-bglk");
    });
  };
 
  //当浏览器不支持placeholder属性时，调用placeholder函数
  if(!supportPlaceholder){
 
    $('input').each(function(){
 
      text = $(this).attr("placeholder");
 
      if($(this).attr("type") == "text"){
 
        placeholder($(this));
      }
    });
  }
  //关闭弹出小框
	$("body").on('click','.fyx-close',function(){
		var light = document.getElementsByClassName("fyx-lightbox");
			for(var i=0;i<light.length;i++){
				document.body.removeChild(light[i]);
			}
		var light = document.getElementsByClassName("fyx-lightbox_tra");
			for(var i=0;i<light.length;i++){
				document.body.removeChild(light[i]);
			}	
			$(".fyx-smollbox").hide();
			var model = document.getElementsByClassName("fyx-bigbox");
			for(var i=0;i<model.length;i++){
				document.body.removeChild(model[i]);
			}
			$(".delbox").remove();
	});
    
	  

});
	
	//点击获取文本框下拉内容
	$(".fyx-int-ul li").click(function(){
				$("#DHCD").val($(this).text());
				$(".fyx-int-ul").hide(500);
				$("#DHCD").focus();
		});
	function changecheckbox(id){
		
	}

//解析地址栏的参数
	function GetQueryString(name){
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return  unescape(r[2]); return null;
	}
//解析手动地址的参数
	function GetManualString(URL,name){
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var arr=URL.split("?"); 
	    var r = arr[1].substr(0).match(reg);
	    if(r!=null)return  unescape(r[2]); return null;
	}
//初始化页面翻页
	function netbook(net){
		var width = $("#content").width();
		var mo = $(net).children('.fyx-mobile').length;
			for(var i=0;i<mo;i++){
				$(net).children('.fyx-mobile').eq(0).css({left:0,"z-index":9}).show();
				if(i==mo-1){
					$(net).children('.fyx-mobile').eq(i).css({left:-width,"z-index":8}).show();
				}else{
					$(net).children('.fyx-mobile').eq(i).css({left:i*width,"z-index":8}).show();
				}
				
			}
	}
	//验证只能输入数字中文英文
	function screeningchar(id){
		$(id).bind("blur",function(){//propertychange input 
                for(var index=0;index<this.value.length;index++){
                    if(!/^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(this.value.charAt(index))){
                        this.value=this.value.substring(0,index);
                        setimealert("只能输入数字、中文、英文!");
                    }
                }
            });
	}
	//验证只能输入中文英文数字,
	function screeaaddcom(id){
		$(id).bind("blur",function(){//propertychange input 
                for(var index=0;index<this.value.length;index++){
                    if(!/^[\u4E00-\u9FA5A-Za-z0-9@*%#._]+$/.test(this.value.charAt(index))){
                    	if(!/[^\x00-\xff]/.test(this.value.charAt(index)) ){
							this.value=this.value.substring(0,index);
	                         setimealert("只能输入数字、中文、英文@*%#._!");
						}else{
                       	 this.value=this.value.substring(0,index);
                         setimealert("只能输入数字、中文、英文@*%#._!");
						}
                    }
                    
                }
            });
	}
	//验证只能输入中文英文数字@*%#._
	function screemiyao(id){
		$(id).bind("blur",function(){//propertychange input 
                for(var index=0;index<this.value.length;index++){
                    if(!/^[A-Za-z0-9@*%#._!]+$/.test(this.value.charAt(index))){
                        this.value=this.value.substring(0,index);
                         setimealert("只能输入数字、英文@*%#._!");
                    }
                }
            });
	}
	//验证密码只能输入英文数字_
	function screepwd(id){
		$(id).bind("blur",function(){//propertychange input 
                //for(var index=0;index<this.value.length;index++){
                //    if(!/^(\w)$/.test(this.value.charAt(index))){
                //        this.value=this.value.substring(0,index);
                //         if($("#txt").length==1){
                //        	settimeptxt('txt',"密码只能输入由数字、英文、_组成!");
                //        }else{
                //        	 setimealert("密码只能输入由数字、英文、_组成!");
                //        }
                //    }
                //}
				for(var index=0;index<this.value.length;index++){
					if(!/^[A-Za-z0-9@*%#._!]+$/.test(this.value.charAt(index))){
						this.value=this.value.substring(0,index);
						setimealert("只能输入数字、英文@*%#._!");
						return false;
					}
				}
            });
	}
	//验证密码只能输入英文数字_
	function inspectionpwd(id){
        for(var index=0;index<id.length;index++){
            if(!/^(\w)$/.test(id.charAt(index))){
                 return false;
            }
        }
         return true;
	}
	//验证只能输入数字.
	function numberpoint(id){
		$(id+" input").bind("blur",function(){//propertychange input 
                for(var index=0;index<this.value.length;index++){
                    if(!/^([0-9]|[0-9]+[.]{0,1}[0-9])+$/.test(this.value.charAt(index))){
                        this.value=this.value.substring(0,index);
                         setimealert("只能输入大于0数字!");
                    }
                }
            });
	}
	//检验IP
	function rtcheckIP(ip){ 
			 obj=ip;
			 //var exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/; 
			 var exp =  /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
			 var reg = obj.match(exp);
			 if(reg==null){ 
			  return false;//不合法
			 } 
			 else{ 
			  return true; //合法
			 } 
		}
	//检验子网掩码
	function rtcheckMask(mask){
			 obj=mask; 
			 var exp=/^((255\.255\.255\.(255|254|252|248|240|224|192|128|0)))$/; 
			 var reg = obj.match(exp); 
			 if(reg==null){ 
			   return false; //"非法"
			 }else{ 
			    return true; //"合法"
			 } 
		}
	function rtcheckMask_l(mask) 
	{ 
	  obj=mask; 
	  var exp=/^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/; 
	  var reg = obj.match(exp); 
	  if(reg==null) 
	  { 
	     return false; //"非法"
	  } 
	   else
	  { 
	     return true; //"合法"
	  } 
	}
		//检验MAC
		function rtcheckMAC(mac){
			obj=mac;
			if(obj==undefined)
				return false;
			var exp=/[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}/;
			//var exp = /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/;
			var tweexp=/^([0-9a-fA-F]{2})(([/\s:-][0-9a-fA-F]{2}){5})$/;
			var reg = obj.match(exp);
			var twetrg = obj.match(tweexp);
			if(reg==null||twetrg==null){
				return false; //"非法"
			}else{
				return true; //"合法"
			}
		}
		//检验email地址
	function rtcheckEmail(email){
		obj=email;
		var exp=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		//var exp = /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/;
		//var exp=^([0-9a-fA-F]{2})(([/\s:-][0-9a-fA-F]{2}){5})$;
		var reg = obj.match(exp);
		if(reg==null){
			return false; //"非法"
		}else{
			return true; //"合法"
		}
	}
	//检验HEX格式
	function rtcheckHEX(val){
			obj=val;
			if(obj==undefined)
				return false;
			var tweexp=/^([0-9a-fA-F]{2})(([/\s:-][0-9a-fA-F]{2})+)$/;
			var twetrg = obj.match(tweexp);
			if(twetrg==null){
				return false; //"非法"
			}else{
				return true; //"合法"
			}
		}
	function IsURL (str_url) { 
		var strRegex = '^((https|http|ftp|rtsp|mms)?://)' 
		+ '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
		+ '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
		+ '|' // 允许IP和DOMAIN（域名） 
		+ '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
		+ '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
		+ '[a-z]{2,6})' // first level domain- .com or .museum 
		+ '(:[0-9]{1,4})?' // 端口- :80 
		+ '((/?)|' // a slash isn't required if there is no file name 
		+ '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$'; 
		var re=new RegExp(strRegex); 
		//re.test() 
		if (re.test(str_url)) { 
			return (true); 
		} else { 
			return (false); 
		} 
	} 

	function show5G(){
		dete=dizhi.dat;
		var temp2="";
		for(var i=0;i<dete.length;i++){
	    	if(dete[i].channel>=36){
				temp2 +='<tr>'
				+'<td>'+dete[i].ssid+'</td>'
				+'<td>'+dete[i].mac+'</td>'
				+'<td>'+dete[i].channel+'</td>'
				+'<td>'+dete[i].mode+'</td>'
				+'<td>'+dete[i].singnal+'</td>'
				+'</tr>'
			}
		}
		$("#two_tab").html(temp2);
			new addScroll('two_list', 'two_tab', 'fyx-list-scrollDiv','fyx-scrolpera1');
			for(var i=0;i<$("#two_tab .fyx-scrolpera1").length-1;i++){
						$("#two_tab .fyx-scrolpera1:eq("+i+")").remove();
					}

		
	}

		//子菜单里的菜单翻页切换特效
		//问题:切换的过程中不够流畅
		/**
		 * n:indexof,net:最外层div的id,id:滑动菜单的id
		 **/
	function flip_switch(n,net,id){
		//.not("nav li:last-child")
			var widths = $("#content").width();
			var num = n,bn=num ,flgn=0;
			var a = $("#"+id+" li").length-2-num;
			var z = num-1;
			var spend=300,fx="linear";
			if(flgn==1){
				return false
			}else{
				flgn=1;
				for(var i=num;i<$("#"+id+" li").length-1;i++){
					//console.log($("."+net).children('.fyx-mobile').html());
					$("#"+net).children('.fyx-mobile').eq(i).stop().animate({left:(i-num)*widths,"z-index":8},spend,fx).hide();
				}
				for(var i=0;i<num;i++){
					bn--;
					if(num-1>1){
						$("#"+net).children('.fyx-mobile').eq(i).stop().animate({left:(num-bn)*widths,"z-index":8},spend,fx).hide();
					}else{
						$("#"+net).children('.fyx-mobile').eq(i).stop().animate({left:(num-i)*widths,"z-index":8},spend,fx).hide();
					}
				}
				$("#"+net).children('.fyx-mobile').eq(z).stop().animate({left:-widths,"z-index":8},spend,fx).hide();
				if(num==0){
					var ch=$("#"+id+" li").length-2;
					$("#"+net).children('.fyx-mobile').eq(ch).stop().animate({left:(-widths),"z-index":8},spend,fx).hide();
				}
				$("#"+net).children('.fyx-mobile').eq(num).stop().animate({left:0,"z-index":9},spend,fx).show();
				flgn=0;
			}
	}
		function flip_switch2(n,net){
		//.not("nav li:last-child")
		//5 $("#"+net).length
		//3$("#"+net).length-2
			var num = n,bn=0 ,flgn=0;
			var a = 5-num;
			var z = num-2;
			var spend=300,fx="linear";
			if(flgn==1){
				return false
			}else{
				flgn=1;
				for(var i=num;i<=5;i++){
					$("#"+net).children('.fyx-mobile').eq(i-1).stop().animate({left:(i-num)*796,"z-index":8},spend,fx).hide();
				}
				
				if(num-1>1){
				for(var i=num-3;i>=0;i--){
					$("#"+net).children('.fyx-mobile').eq(bn).stop().animate({left:(3-i)*796,"z-index":8},spend,fx).hide();
					bn++;
				}}
				if(num-1==0){
					$("#"+net).children('.fyx-mobile').eq(4).stop().animate({left:(-796),"z-index":8},spend,fx).hide();
				}else{
					$("#"+net).children('.fyx-mobile').eq(num-2).stop().animate({left:-796,"z-index":8},spend,fx).hide();
				}
				$("#"+net).children('.fyx-mobile').eq(num-1).stop().animate({left:0,"z-index":9},spend,fx).show();
				flgn=0;
				bn=0;
			}
	}

	//硬件状态路由器负荷图
	function HuLaQuan(pagerId,tcolor,per){
		$("#"+pagerId).html('');
		var r = Raphael(pagerId, 100, 100),
		R = 49.5,
		init = true,
		param = {stroke: "#fff", "stroke-width": 9};
		r.image("../img/bg_all.png", 0, 0, 100, 100);
		r.customAttributes.arc = function (value, total, R) {
		var alpha = 360 / total * value,
		a = (90 - alpha) * Math.PI / 180,
		x = 49.5 + R * Math.cos(a),
		y = 49.5 - R * Math.sin(a),
		// color = "hsb(".concat(Math.round(R) / 200, ",", value / total, ", .75)"),
		color = tcolor,
		path;
		if (total == value) {
		path = [["M", 49.5, 49.5 - R], ["A", R, R, 0, 1, 1, 99.99 , 49.5 - R]];
		} else {
		path = [["M", 49.5, 49.5 - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
		}
		return {path: path, stroke: color};
		};
		var sec = r.path().attr(param).attr({arc: [0, 45, R]});
		function updateVal(value, total, R, hand, id) {
		// 处理数值过大情况下产生的计算错误
		if(value >= 100){
		value=99.99;
		}
		if (init) {
		hand.animate({arc: [value, total, R]}, 900, ">");
		} else {
		if (!value || value == total) {
		value = total;
		hand.animate({arc: [value, total, R]}, 750, "bounce", function () {
		hand.attr({arc: [0, total, R]});
		});
		} else {
		hand.animate({arc: [value, total, R]}, 750, "elastic");
		}
		}
		}
		$("#"+pagerId).next('.hulaquan_fonts').children().eq(0).html(parseFloat(per).toFixed(0) + "%");
		updateVal(per, 100, 45, sec, 2);
}

var colors={
warning:"#fd5151",
require:"#ff7b00",
normal:"#009fe1"
};
var v_iops = 0.09333333333333334;
var v_cpu = 0.12;
var v_disk = 75;
var v_session = 6.666666666666667;

var findColor = function(v) {
if(v == 1) {
return colors.normal;
}
if(v == 2) {
return colors.require;
}
if(v == 3) {
return colors.warning;
}
return colors.normal;
};		
/*
 模拟滚动条
 调用方法new addScroll('mainBox', 'content', 'scrollDiv','scrolpera');
 * mainBox滚动的divd的id  样式必须设置position:relative;overflow: hidden;
 * content滚动的父div的id 样式必须设置position: absolute;
 * scrollDiv滚动div的class
 * scrolpera滚动的父div的class 必须设置的样式position：absolute;background
 * */
var doc = document;  
var _wheelData = -1;  
var mainBox;// = doc.getElementById('mainBox');  
function bind(obj, type, handler) {  
    var node = typeof obj == "string" ? $(obj) : obj;  
    if (node.addEventListener) {  
        node.addEventListener(type, handler, false);  
    } else if (node.attachEvent) {  
        node.attachEvent('on' + type, handler);  
    } else {  
        node['on' + type] = handler;  
    }  
}  
function mouseWheel(obj, handler) {  
    var node = typeof obj == "string" ? $(obj) : obj;  
    bind(node, 'mousewheel', function(event) {  
                var data = -getWheelData(event);  
                handler(data);  
                if (document.all) {  
                    window.event.returnValue = false;  
                } else {  
                    event.preventDefault();  
                }  
  
            });  
            //火狐  
    bind(node, 'DOMMouseScroll', function(event) {  
                var data = getWheelData(event);  
                handler(data);  
                event.preventDefault();  
            });  
            function getWheelData(event) {  
                var e = event || window.event;  
                return e.wheelDelta ? e.wheelDelta : e.detail * 40;  
            }  
        }  
  
        function addScroll() {  
            this.init.apply(this, arguments);  
        }  
        addScroll.prototype = {  
            init : function(mainBox, contentBox, className,className2) {  
                var mainBox = doc.getElementById(mainBox);  
                var contentBox = doc.getElementById(contentBox);  
                var scrollDiv = this._createScroll(mainBox, className);  
                this._resizeScorll(scrollDiv, mainBox, contentBox,className2);  
                this._tragScroll(scrollDiv, mainBox, contentBox);  
                this._wheelChange(scrollDiv, mainBox, contentBox);  
                this._clickScroll(scrollDiv, mainBox, contentBox);  
            },  
            //创建滚动条  
    _createScroll : function(mainBox, className) {  
        var _scrollBox = doc.createElement('div')  
        var _scroll = doc.createElement('div');  
        var span = doc.createElement('span');  
        _scrollBox.appendChild(_scroll);  
        _scroll.appendChild(span);  
        _scroll.className = className; 
        mainBox.appendChild(_scrollBox);  
        return _scroll;  
    },  
    //调整滚动条  
    _resizeScorll : function(element, mainBox, contentBox,className2) {  
        var p = element.parentNode; 
        var conHeight = contentBox.offsetHeight;  
        var _width = mainBox.clientWidth;  
        var _height = mainBox.clientHeight;  
        var _scrollWidth = element.offsetWidth;  
        var _left = _width - _scrollWidth;  
        p.className = className2; 
        p.style.width = 11/*_scrollWidth*/ + "px";  
        p.style.height = _height + "px";  
        p.style.left = _left-1 + "px";  
        contentBox.style.width = (mainBox.offsetWidth - _scrollWidth)+4  
                + "px";  
        var _scrollHeight = parseInt(_height * (_height / conHeight)); 
        if(!isFinite(_scrollHeight)){
        	_scrollHeight = 0;
        }
        if (_scrollHeight >= mainBox.clientHeight||conHeight==0) {  
            element.parentNode.style.display = "none";
            p.parentNode.removeChild(p);
        }  
        element.style.height = _scrollHeight + "px";  
    },  
    //拖动滚动条  
    _tragScroll : function(element, mainBox, contentBox) {  
        var mainHeight = mainBox.clientHeight;  
        element.onmousedown = function(event) {  
            var _this = this;  
            var _scrollTop = element.offsetTop;  
            var e = event || window.event;  
            var top = e.clientY;  
            //this.onmousemove=scrollGo;  
            document.onmousemove = scrollGo;  
            document.onmouseup = function(event) {  
                this.onmousemove = null;  
            }  
            function scrollGo(event) {  
                var e = event || window.event;  
                var _top = e.clientY;  
                var _t = _top - top + _scrollTop;  
                if (_t > (mainHeight - element.offsetHeight)) {  
                    _t = mainHeight - element.offsetHeight;  
                }  
                if (_t <= 0) {  
                    _t = 0;  
                }  
                element.style.top = _t + "px";  
                contentBox.style.top = -_t  
                        * (contentBox.offsetHeight / (mainBox.offsetHeight-4))  
                        + "px";  
                _wheelData = _t;  
            }  
        }  
        element.onmouseover = function() {  
            this.style.background = "#ffffff";  
        }  
        element.onmouseout = function() {  
            this.style.background = "#ffffff";  
        }  
    },  
    //鼠标滚轮滚动，滚动条滚动  
    _wheelChange : function(element, mainBox, contentBox) {  
        var node = typeof mainBox == "string" ? $(mainBox) : mainBox;  
        var flag = 0, rate = 0, wheelFlag = 0;  
        if (node) {  
            mouseWheel(  
                    node,  
                    function(data) {  
                        wheelFlag += data;  
                        if (_wheelData >= 0) {  
                            flag = _wheelData;  
                            element.style.top = flag + "px";  
                                    wheelFlag = _wheelData * 12;  
                                    _wheelData = -1;  
                                } else {  
                                    flag = wheelFlag / 12;  
                                }  
                                if (flag <= 0) {  
                                    flag = 0;  
                                    wheelFlag = 0;  
                                }  
                                if (flag >= (mainBox.offsetHeight - element.offsetHeight)) {  
                                    flag = (mainBox.clientHeight - element.offsetHeight);  
                                    wheelFlag = (mainBox.clientHeight - element.offsetHeight) * 12;  
  
                                }
                                if(contentBox.offsetHeight>=mainBox.clientHeight-4){
	                                element.style.top = flag + "px";  
	                        contentBox.style.top = -flag  
	                                * (contentBox.offsetHeight / (mainBox.offsetHeight-4))  
	                                + "px";  
                                }
                    });  
        }  
    },  
    _clickScroll : function(element, mainBox, contentBox) {  
        var p = element.parentNode;  
        p.onclick = function(event) {  
            var e = event || window.event;  
            var t = e.target || e.srcElement;  
            var sTop = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop  
                    : document.body.scrollTop;  
            var top = mainBox.offsetTop;  
            var _top = e.clientY + sTop - top - element.offsetHeight  
                    / 2;  
            if (_top <= 0) {  
                _top = 0;  
            }  
            if (_top >= (mainBox.clientHeight - element.offsetHeight)) {  
                _top = mainBox.clientHeight - element.offsetHeight;  
            }  
            if (t != element) {  
                element.style.top = _top + "px";  
                contentBox.style.top = -_top  
                        * (contentBox.offsetHeight / (mainBox.offsetHeight-4))  
                        + "px";  
                _wheelData = _top;  
            }  
        }  
    }  
}  

//多选操作
function addItem(ItemList,Target)
{
	for(var x = 0; x < ItemList.length; x++)
	{
		var opt = ItemList.options[x];
		if (opt.selected)
		{
			flag = true;
			if(Target!=null && Target.length>=1)
			{
				for (var y=0;y<Target.length;y++)
				{
					var myopt = Target.options[y];
					if (myopt.value == opt.value)
					{
						flag = false;
					}
				}
			}

			if(flag)
			{
				/*var temp='<option value="'+opt.value+'">'+opt.text+'</option>';
				 $("#IPAUTH_ADDR").append(temp);*/
				Target.options[Target.options.length] = new Option(opt.text, opt.value, 0, 0);
			}
		}
	}
}

function delItem(ItemList)
{
	for(var x=ItemList.length-1;x>=0;x--)
	{
		var opt = ItemList.options[x];
		if (opt.selected)
		{
			ItemList.options[x] = null;
		}
	}
}






/*************/
/**
 * 子页面的方法：调用
 * 子页面调用遮罩和进度条
 * Loading_progress 进度条动画
 * stoptime  调用wan子页面的方法，关闭当前页面的遮罩，并显示子页面内容
 * linbox   显示弹框遮罩1：进度条，2：路由升级
 * del_linbox  删除页面的遮罩和弹出框
 * wan_goback  wan子页面返回首页第一个菜单
 * **/
var num=1;
function Loading_progress(){
	if(num>20){
		stoptime();
	}
	$('.fyx-scroll_bar-txt').animate({'width':100+'%'},27000,"linear");
	num++;
	t = setTimeout('stoptime()',27000);
}

function stoptime(){
	clearTimeout(t);
	del_linbox();
	num=1;
	showwan();
}
function Loading_progress1(){
	if(num>20){
		stoptime1();
	}
	$('#more').animate({'width':100+'%'},2000,"linear");
	num++;
	t = setTimeout('stoptime1()',2000);
}

function stoptime1(){
	clearTimeout(t);
	del_linbox();
	num=1;
	//filename.window.Refresh();
}
function loading(){
	var tepm ='<div class="fyx-lightbox"></div>'
		+'<div class="fyx-transbox" id="loading" style="">'
		+'<div class="load-container load5">'
		+'<div class="loader">Loading...</div>'
		+'</div>';
	$('body').append(tepm);
}

function upgrademask(txt){
	$("#upgrade").hide();
	var tepm ='<div class="fyx-lightbox"></div>'
		+'<div class="fyx-smollbox" id="loading">'
		+'<img src="../img/gifa.gif" style="width:100%;margin:0 auto;" />'
		+'<p style="position:absolute;width:44px;height:40px;top:45%;left:48.5%;line-height:40px;font-size:14px;">'+txt+'</p>'
		+'</div>';
	$('body').append(tepm);
	//Loading_progress1();
}
function upgrademask2(txt,up){
	var s = -305+$("#box").offset().top+'px';
	var tepm ='<div class="fyx-lightbox"></div>'
		+'<div class="fyx-smollbox" id="loading" style="margin-top:'+s+'">'
		+'<p style="position:absolute;height:40px;top:29%;left:47%;line-height:40px;font-size:14px;">'+txt+'<span></span></p>'
		+'<div class="fyx-scroll_bar"style="position:absolute;top:40%;left:134px;">'
		+'<div class="fyx-scroll_bar-txt" style="width:0%;"></div>'
		+'</div>'
		+'</div>';
	$('body').append(tepm);
	if(up=='up'){
		Loading_progress2();
		asd=210;
		//setTimeout(function(){alert('升级完成，请刷新页面，重新登录。');window.location.reload();},210100);
	}else if(up=='reboot'){
		Loading_progress3();
		asd=120;
		//setTimeout(function(){alert('升级完成，请刷新页面，重新登录。');window.location.reload();},210100);
	}else{
		Loading_progress();
		asd=80;
	}
	addnum();
}
var t,as;
//var type = "";
function Loading_progress(){
	if(num>800){
		stoptime2();
	}
	$('.fyx-scroll_bar-txt').animate({'width':100+'%'},80000,"linear");
	num++;
	ts = setTimeout('stoptime2()',80000);
}
function Loading_progress2(){
	if(num>210){
		stoptime2();
	}
	$('.fyx-scroll_bar-txt').animate({'width':100+'%'},210000,"linear");
	num++;
	ts = setTimeout('stoptime2()',210000);
}
function Loading_progress3(){
	if(num>120){
		stoptime2();
	}
	$('.fyx-scroll_bar-txt').animate({'width':100+'%'},120000,"linear");
	num++;
	ts = setTimeout('stoptime2()',120000);
}
function addnum(){
	asd--;
	if(asd<=0){
		asd = 0;
		stoptime2();
	}
	//$("#loading span").text(asd);
	if(asd<=0){
		stoptime2();
	}
	as=setTimeout('addnum()',1000);
}
function stoptime2(){
	clearTimeout(ts);
	clearTimeout(as);
	del_linbox();
	//alert("成功！");
}
function lading_changetext(msg){
	$("#loading p").text(msg);
}
function show_mask(){
	var tepm ='<div class="fyx-lightbox"></div>'
	$('body').append(tepm);
}

function linbox(num){
	var tepm = '<div class="fyx-lightbox"></div>'
	switch(num){
		case 1:
			tepm +='<div class="fyx-smollbox" id="lading">'
				+'<p style="height: 100px;"></p>'
				+'<p class="fyx-center fyx-font-sz14">正在检测上网类型，请将网线插入网线口...</p>'
				+'<div class="fyx-scroll_bar">'
				+'<div class="fyx-scroll_bar-txt" style="width:0;"></div>'
				+'</div>'
			break;
		case 2:
			tepm +='<div class="fyx-smollbox" id="upgrade">'
				+'<p class="fyx-box-title">手动升级</p>'
				//+'<p class="fyx-btn-error fyx-close">×</p>'
				+'<p style="height: 30px;"></p>'
					//+'<iframe style="border:0;width:100%;height:180px;" src="updata.html">'
				+'<div class="fyx-wdmg9">'
				+'<p class=" fyx-font-sz14">路由器正常工作状态下建议使用系统升级检测升级，'
				+'在当系统无法升级或需要降级到前一版本时，使用手动上传rom包进行升级。</p>'
				+'<p style="height: 30px;"></p>'
				+'<p class="fyx-font-sz14">请选择固件</p>'
				+'<p><input type="file" name="filename" id="houseMaps" /></p>'
				+'</div>'
				+'<div style="display: table;margin: auto;">'
				+'<button class="fyx-btn-a-ext fyx-close" onclick="formSubmit()">上传并升级</button>'
				+'<button class="fyx-btn-white" onclick="hidebox()">取消</button>'
				+'</div>'
				
				+'</div>'
			break;
		case 3:
			tepm +='<div class="fyx-smollbox" id="bigbox">'
				+'<p class="fyx-btn-error fyx-close">×</p>'
				+'<p style="height: 30px;"></p>'
				+'<ul class="fyx-list-threetitle2">'
				+'<li>ISP</li>'
				+'<li>网络类型</li>'
				+'<li>设备型号</li>'
				+'</ul>'
				+'<div class="fyx-list-three2">'
				+'<table>'
				+'<tr><td>联通</td><td>WCDMA</td><td>华为E3131s</td></tr>'
				+'<tr><td>联通</td><td>WCDMA</td><td>华为E261</td></tr>'
				+'<tr><td>电信</td><td>CDMA2000</td><td>华为EC1261</td></tr>'
				+'<tr><td>移动</td><td>TD-LTE</td><td>华为EC3372-871</td></tr>'
				+'<tr><td>联通</td><td>WCDMA</td><td>华为E3370</td></tr>'
				+'<tr><td>电信</td><td>EVDO</td><td>瑞酷RS801-7</td></tr>'
				+'</table>'
				+'</div>'
				+'</div>'
			break;
		default:
			//语句
			break;

	}

	+'</div>';
	$('body').append(tepm);
}


function del_linbox(){
	var light = document.getElementsByClassName("fyx-lightbox");
	for(var i=0;i<light.length;i++){
		document.body.removeChild(light[i]);
	}
	var model = document.getElementsByClassName("fyx-transbox");
	for(var i=0;i<model.length;i++){
		document.body.removeChild(model[i]);
	}
	var model = document.getElementsByClassName("fyx-bigbox");
	for(var i=0;i<model.length;i++){
		document.body.removeChild(model[i]);
	}
	$("#lading").remove();
	$("#loading").remove();
	$("#upgrade").remove();
	$("#bigbox").remove();
}

//首页时钟
var timerID = null;
var timerRunning = false ;
//系统设置时钟
var systimetimerID = null
var	systimetimerRunning = false

//select标签定位
function setSelectPosition (ele,phtml,ulcss){ //ele被点jquery对象，phtml所在容器标签，ulcss对应的下拉ul的class名
	if($(ele).is('span')){
		//$(ele)=$(ele).prev();
		var eletop =$(ele).prev().offset().top;
		var eleleft=$(ele).prev().offset().left;
		var ulcsstop ="";
		var ulcssleft ="";
		ulcsstop=$(ele).prev().offset().top-$(ele).prev().parents(phtml).offset().top +$(ele).prev().parents(phtml).position().top + $(ele).prev().height();
		ulcssleft=$(ele).prev().offset().left-$(ele).prev().parents(phtml).offset().left +$(ele).prev().parents(phtml).position().left+parseInt($(ele).prev().parents(phtml).css("margin-left"));
		if(ulcss.indexOf("#")!=-1){
			$(ulcss).css("top",ulcsstop+2);
			$(ulcss).css("left",ulcssleft);
		}else{
			$("."+ulcss).css("top",ulcsstop+2);
			$("."+ulcss).css("left",ulcssleft);
		}
	}else{
		var eletop =$(ele).offset().top;
		var eleleft=$(ele).offset().left;
		var ulcsstop ="";
		var ulcssleft ="";
		ulcsstop=$(ele).offset().top-$(ele).parents(phtml).offset().top +$(ele).parents(phtml).position().top + $(ele).height();
		ulcssleft=$(ele).offset().left-$(ele).parents(phtml).offset().left +$(ele).parents(phtml).position().left+parseInt($(ele).parents(phtml).css("margin-left"));
		if(ulcss.indexOf("#")!=-1){
			$(ulcss).css("top",ulcsstop+2);
			$(ulcss).css("left",ulcssleft);
		}else{
			$("."+ulcss).css("top",ulcsstop+2);
			$("."+ulcss).css("left",ulcssleft);
		}
	}


}

function IsURL (str_url) {
	var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
		+ "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
		+ "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
		+ "|" // 允许IP和DOMAIN（域名）
		+ "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
		+ "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
		+ "[a-z]{2,6})" // first level domain- .com or .museum
		+ "(:[0-9]{1,4})?" // 端口- :80
		+ "((/?)|" // a slash isn't required if there is no file name
		+ "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	var re=new RegExp(strRegex);
	//re.test()
	if (re.test(str_url)){
		return (true);
	}else{
		return (false);
	}
}

function settitle(id,txt){
	var n = $('#'+id).parent().find('p').length;
	if(txt){
		if(n<1){
			$('#'+id).parent().append('<p style="color:red">'+txt+'</p>');
			return false;
		}else if(n>0){
			$('#'+id).parent().find('p').text(txt);
			return false;
		}
	}else{
		if(n<1){
			$('#'+id).parent().append('<p style="color:red">不能为空</p>');
			return false;
		}else if(n>0){
			$('#'+id).parent().find('p').text('不能为空');
			return false;
		}
	}
	
}
function batchAddstr(batchstr){
	var batchtmp=batchstr;
	if(batchstr.length<1 || batchtmp[batchtmp.length-1]!='\n'){
		batchtmp=batchtmp+'\n';
	}
	return batchtmp;
}

//ssid检验
//验证只能输入中文英文数字和特殊字符
	function ssidcheck(val,tolnum){
		var chinum=0;
		var num=0;
		var gnum=0;
		if(!val||val.length<1){
			setimealert("请输入"+tolnum+"位数字、中文、英文@*%_-.#!&");
            return false;
		}
        for(var index=0;index<val.length;index++){
            if(!/^[\u4E00-\u9FA5A-Za-z0-9@*%_\-.#!&]+$/.test(val.charAt(index))){
            	setimealert("只能输入数字、中文、英文@*%_-.#!&");
            	return false;
            }
            if(/^[\u4E00-\u9FA5]+$/.test(val.charAt(index))){
            	chinum++;
            }else{
            	num++;
            }   
        }
        if(chinum>8){
        	setimealert("只能输入8个中文");
        	return false;
        }
        gnum=chinum*4+num;
        if(gnum>tolnum){
        	setimealert("字符长度不能超过"+tolnum+"位,1个中文字符占4位长度");
        	return false;
        }
        return true;
	}
//验证字符长度
function checkstrlen(val,maxlen){
	var chinum=0;
	var num=0;
	var gnum=0;
	if(val.length>0){
		for(var index=0;index<val.length;index++){
	        if(/^[\u4E00-\u9FA5]+$/.test(val.charAt(index))){
	        	chinum++;
	        }else{
	        	num++;
	        }   
	    }
	}
	gnum=chinum*3+num;
	if(gnum>maxlen){
    	setimealert("字符长度不能超过"+maxlen+"位,1个中文字符算占3位长度");
    	return false;
    }
    return true;
}
function return_time(second_time){
	if(second_time==='')return '-';
	var time = parseInt(second_time) + "秒";
	if( parseInt(second_time )> 60){

	    var second = parseInt(second_time) % 60;
	    var min = parseInt(second_time / 60);
	    time = min + "分" + second + "秒";

	    if( min > 60 ){
	        min = parseInt(second_time / 60) % 60;
	        var hour = parseInt( parseInt(second_time / 60) /60 );
	        time = hour + "小时" + min + "分" + second + "秒";

	        if( hour > 24 ){
	            hour = parseInt( parseInt(second_time / 60) /60 ) % 24;
	            var day = parseInt( parseInt( parseInt(second_time / 60) /60 ) / 24 );
	            if(day>365) {
	            	var nian = parseInt(day/365);
	            	var days = day-(nian*365);
	            	time = nian + "年" +days + "天" + hour + "小时" + min + "分" + second + "秒";
	            }else{
	            time = day + "天" + hour + "小时" + min + "分" + second + "秒";
	        }
	        }
	    }


	}
    return time;
}
function flowUnit_s (a){
    a = parseFloat(a);
    if (a <= 1024) {
        a = a.toFixed(2) + 'KB/s';
        return a;
    } else if (a > 1024 && a < 1024 * 1024) {
        a = (a / 1024).toFixed(2) + 'MB/s';
        return a;
    } else {
        a = (a / 1024 / 1024).toFixed(2) + 'GB/s';
        return a;
    }
}

//检验IPV6
	function rtcheckIPV6(ip){ 
		 obj=ip;
		 var exp = /^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/;
		 if(!exp.test(obj)){
            return false;
         }else{
         	return true;
         }
	}
//检验IPV6前缀
	function rtcheckIPV6_prefix(ip){ 
		 obj=ip;
		 if(!/^[0-9]+?$/.test(obj)){
            return false;
         }else{
         	return true;
         }
	}
//验证字符长度
function checkstrlen_name(val,maxlen,name){
    var chinum=0;
    var num=0;
    var gnum=0;
    if(val.length>0){
        for(var index=0;index<val.length;index++){
            if(/^[\u4E00-\u9FA5]+$/.test(val.charAt(index))){
                chinum++;
            }else{
                num++;
            }
        }
    }
    gnum=chinum*3+num;
    if(gnum>maxlen){
        setimealert(name+"字符长度不能超过"+maxlen+"位,1个中文字符算占3位长度");
        return false;
    }
    return true;
}
//验证中文字符
function chinesecheck(val){
	if(!val||val.length<1){
		return false;
	}
	for(var index=0;index<val.length;index++){
		if(/^[\u4E00-\u9FA5]+$/.test(val.charAt(index))){
			return true;
		}   
	}
	return false;
}

