__d("common.js.browser",[],function(k,l,f){function a(e){return(e=b.match(RegExp(e+"\\b[ \\/]?([\\w\\.]*)","i")))?e.slice(1):["",""]}var d=window,k=document,b=navigator.userAgent.toLowerCase(),c={"5.0":"Win2000","5.1":"WinXP","5.2":"Win2003","6.0":"WinVista","6.1":"Win7","6.2":"Win8","6.3":"Win8.1"},e=f=l=null,m=function(){var e=-1<b.indexOf("360chrome")?!0:!1,c;try{d.external&&d.external.twGetRunPath&&(c=d.external.twGetRunPath)&&-1<c.indexOf("360se")&&(e=!0)}catch(a){e=!1}return e}(),i=-1<b.indexOf("bidubrowser")?
!0:!1,p=-1<b.indexOf("biduplayer")?!0:!1,h=-1<b.indexOf("\u7231\u5e06")?!0:!1,g=-1<b.indexOf("lbbrowser")?!0:!1,j;a:{try{if(/(\d+\.\d)/.test(d.external.max_version)){j=parseFloat(RegExp.$1);break a}}catch(r){}j=void 0}var n=(d.ActiveXObject||"ActiveXObject"in d)&&b.match(/.net clr/gi)&&b.match(/rv:(\w+\.\w+)/gi)?["msie",b.match(/rv:(\w+\.\w+)/gi)[0].split(":")[1]]:a("(msie|safari|firefox|chrome|opera)"),o=a("(maxthon|360se|360chrome|theworld|se|theworld|greenbrowser|qqbrowser|lbbrowser|bidubrowser)"),
q=a("(windows nt|macintosh|solaris|linux)"),s=a("(webkit|gecko|like gecko)");"msie"===n[0]?m?o=["360se",""]:j?o=["maxthon",j]:","==o&&(o=a("(tencenttraveler)")):"safari"===n[0]&&(n[1]=a("version")+"."+n[1]);(l="chrome"==n[0]&&n[1])&&"track"in document.createElement("track")&&"scoped"in document.createElement("style")&&("v8Locale"in window?f=!0:e=!0);return f={cookieEnabled:navigator.cookieEnabled,isStrict:"CSS1Compat"==k.compatMode,isShell:!!o[0],shell:o,kernel:s,platform:q,types:n,chrome:l,system:function(){var e=
navigator.platform,a="Win32"==e||"Win64"==e||"Windows"==e,j="Mac68K"==e||"MacPPC"==e||"Macintosh"==e||"MacIntel"==e;return j?"Mac":"X11"==e&&!a&&!j?"Unix":-1<(""+e).indexOf("Linux")?"Linux":a?c[q[1]]||"other":"other"}(),firefox:"firefox"==n[0]&&n[1],ie:"msie"==n[0]&&n[1],opera:"opera"==n[0]&&n[1],safari:"safari"==n[0]&&n[1],maxthon:"maxthon"==o[0]&&o[1],isTT:"tencenttraveler"==o[0]&&o[1],is360:m,is360Chrome:f,is360se:e,isBaidu:i,isHao123:function(){return!(!window.external||!window.external.ExtGetAppPath||
!window.external.ExtGetAppPath())},isLiebao:g,isSougou:"se"==o[0],isQQ:"qqbrowser"==o[0],isIpad:function(){return-1<b.indexOf("ipad")||-1<b.indexOf("iphone")},version:"",noDl:i||h||p,canvasSupport:!!document.createElement("canvas").getContext}});
__d("widget.popup.mask",["common.js.browser"],function(k,l,f,a){function d(){var c=e.body;return Math.max(e.documentElement.scrollHeight,c.scrollHeight,("BackCompat"==e.compatMode?c:e.documentElement).clientHeight)+"px"}var b=a("common.js.browser"),c=null,e=k.document;return f={show:function(){c||(c=e.createElement("div"),c.className="popup-mask",e.body.appendChild(c));6==b.ie&&(c.style.height=d());c.style.display=""},hide:function(){c&&(c.style.display="none")},refresh:function(){c&&(c.style.height=
d())},remove:function(){c&&(c.parentNode.removeChild(c),c=null)}}});
__d("common.js.refer",["common.js.config","common.js.browser"],function(k,l,f,a){function d(e){try{return i||(i=document.createElement("div"),i.style.display="none",i.style.behavior="url(#default#homePage)",document.body.appendChild(i)),i.isHomePage(e)}catch(c){return!1}}function b(){var a;if(!m)if(e.ie){a=c.get("whitelist");for(var b in a)if(d(a[b].url))return m="iechannelhome";a:{var i,j;b=["http://",""];i=["www.hao123.com","3w.hao123.com","ww.hao123.com","hao123.com"];j=",/,/?from=hao123,/?f=hao123,/?f=g,/?f=sidebar1,/index.html".split(",");
a=[];for(var r=0;r<j.length;r++)for(var n=0;n<i.length;n++)for(var f=0;f<b.length;f++)a.push(b[f]+i[n]+j[r]);a.unshift(document.URL);b=-1;for(i=a.length;++b<i;)if(j=a[b],d(j)){a=!0;break a}a=!1}m=a?"iestandardhome":"ienothome"}else m="organic";return m}var c=a("common.js.config"),e=a("common.js.browser"),m=!1,i=!1;return f={isHomePage:d,isIEStandardHome:function(){return"iestandardhome"==b()},isIENotHome:function(){return"ienothome"==b()},isIEChannelHome:function(){return"iechannelhome"==b()},isOrganic:function(){return"organic"==
b()},refresh:function(){m=!1},isTN:function(){return window.location.search.match(/[?&](src|tn)=.+/)?!0:!1}}});
__d("common.js.homeLog",["common.js.log","common.js.config","common.js.refer","common.js.browser"],function(k,l,f,a){var d=a("common.js.log"),k=a("common.js.config"),b=a("common.js.refer"),l=a("common.js.browser"),a=window.location.search.match(/[?&](tn|src)=([^&<>'"]+)/)?1:0,l=l.ie?1:0;k.get("pageId");var c={pageId:k.get("pageId"),ie:l,tn:a,type:"ubclick"};return function(e){for(var a in c)c.hasOwnProperty(a)&&!(a in e)&&(e[a]=c[a]);e.ho=b.isIENotHome()?0:1;"set"in e&&(e.set=Number(e.set),e.set=
e.position+""+e.set,delete e.position);d(e)}});
__d("widget.popup.base",["widget.popup.mask","common.js.browser","common.js.pageEvents","common.js.widget"],function(k,l,f,a){function d(a){var a=a||m.getViewport(),b=a.width,d=(a.height-this.height)/2;6==e.ie&&(c.refresh(),d+=a.scrollTop);this.element&&this.element.css({left:(b-this.width)/2,top:d})}function b(){}var c=a("widget.popup.mask"),e=a("common.js.browser"),m=a("common.js.pageEvents");a("common.js.widget");b.prototype=new $.Widget;b.prototype=$.extend(b.prototype,{_baseCreate:function(){this.element.addClass(this.options.className);
this._appendToBody=!1},_baseShow:function(a){this._appendToBody||(this.element.appendTo("body"),this._appendToBody=!0);0<arguments.length&&"function"==typeof a?a(this.element):this.element.show();this.height=this.element.height();this.width=this.element.width();this.options.isModel&&c.show();m.on("viewport.deferchange",d,this);d.call(this)},_baseHide:function(a,e){this.options.isModel&&(e||c.hide());0<arguments.length&&"function"==typeof a?a(this.element):this.element.hide()},remove:function(a){this.options.isModel&&
c.remove();0<arguments.length&&"function"==typeof a?a(this.element):this.element.remove()}});return b});
__d("widget.popup.sethome",["widget.popup.base","common.js.log"],function(k,l,f,a){var k=a("widget.popup.base"),d=a("common.js.log");$.widget("hao123.sethome",k,{options:{className:"popup-sethome",isModel:!0},_create:function(){this._baseCreate();var a=this.element,c=this;$(".js_close",a).click(function(){c._baseHide();return!1});$(".js_ok",a).click(function(){c._baseHide()}).text(c.options.okText)},show:function(){this._baseShow();d({type:"sethomeshow"})}});return f});
__d("widget.popup.getTpl",["common.js.format"],function(k,l,f,a){var d=a("common.js.format"),b={head:'<div class="popup-head"><a class="js_close" href="javascript:void(0);"></a><span class="js_title"></span></div>',login:'<div class="login_left"><div id="login_holder"><div id="login_holder_1"></div></div></div><div class="login_right"><p class="reg_text">\u8fd8\u6ca1\u6709\u767e\u5ea6\u5e10\u53f7\uff1f</p><p class="reg_link"><a href="https://passport.baidu.com/v2/?reg&amp;tpl=hao123&amp;regType=1&amp;u=http%3A%2F%2F'+
window.location.host+'%2F" target="_blank" id="reg_btn"></a></p><p class="other_title">\u4f7f\u7528\u5408\u4f5c\u7f51\u7ad9\u5e10\u53f7\u767b\u5f55</p><ul class="other_list"><li><a class="other_icon other_icon_qq" href="http://passport.baidu.com/phoenix/account/startlogin?tpl=hao123&u=http%3A%2F%2Fwww.hao123.com%2F&act=implicit&type=15&xd=http%3a%2f%2fwww.hao123.com%2fcloudjump.htm%23display%3dpopup">QQ\u5e10\u53f7\u767b\u5f55</a></li><li><a class="other_icon other_icon_sina" href="http://passport.baidu.com/phoenix/account/startlogin?tpl=hao123&u=http%3A%2F%2Fwww.hao123.com%2F&act=implicit&type=2&xd=http%3a%2f%2fwww.hao123.com%2fcloudjump.htm%23display%3dpopup">\u65b0\u6d6a\u5fae\u535a\u5e10\u53f7\u767b\u5f55</a></li><li><a class="other_icon other_icon_renren" href="http://passport.baidu.com/phoenix/account/startlogin?tpl=hao123&u=http%3A%2F%2Fwww.hao123.com%2F&act=implicit&type=1&xd=http%3a%2f%2fwww.hao123.com%2fcloudjump.htm%23display%3dpopup">\u4eba\u4eba\u5e10\u53f7\u767b\u5f55</a></li></ul></div>',
confirm:"<div class='popup-body'><i></i><div><strong class='js_text'></strong> <p><button class='button js_ok'  ></button><button class='button js_cancel' >\u53d6\u6d88</button></p></div></div>",alert:"<div class='popup-alert-w'><p class='popup-alert-text js_text'></p><p class='popup-alert-control'><button class='button js_ok'>\u786e\u5b9a</button></p></div>",
upload:'<div class="popup-upload-w g_clr"><div class="g-ib popup-upload-ct"><p class="popup-upload-select"><button class="popup-upload-btns"></button><span class="btnselect js_select"></span><span class="tip js_text"></span></p><div class="popup-upload-desk js_cutter"></div><div class="popup-upload-state" style="display:none;"><span class="state-txt js_stattxt"></span></div><p class="popup-upload-caijian"><button class="popup-upload-btncj js_ok"></button></p></div></div>',sethomeNotie:"<div class='popup-sethome' monkey=sethomeNotie'><p class='popup-sethome-title-notie'></p><p class='popup-sethome-text' style='color:#F46417'>\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u4e00\u952e\u8bbe\u4e3a\u4e3b\u9875<br/>\u5efa\u8bae\u624b\u52a8\u8bbe\u7f6e\uff0c\u4e00\u822c\u60c5\u51b5\u5728\uff1a<br/>\u201c\u5de5\u5177-\u9009\u9879-\u4e3b\u9875\u201d \u6216 \u201c\u8bbe\u7f6e-\u4e3b\u9875\u201d\u91cc<br/>\u3000\u52a8\u624b\u8bd5\u8bd5\uff01</p><a class='popup-sethome-close js_close' href='###'></a></div>",
tpl:"<div class='popup'>#{head}#{content}</div>"};return function(a){return"sethome"==a||"sethomeNotie"==a?b[a]:d(b.tpl,{head:b.head,content:b[a]})}});
__d("common.js.home","widget.popup.mask,common.js.browser,widget.popup.getTpl,common.js.refer,common.js.format,common.js.homeLog,widget.popup.sethome".split(","),function(k,l,f,a){var d=a("widget.popup.mask"),b=a("common.js.browser"),c=a("widget.popup.getTpl"),e=a("common.js.refer"),m=a("common.js.format"),i=a("common.js.homeLog"),p=null,h=null;a("widget.popup.sethome");var g={_element:null,show:function(){this._element||(this._element=document.createElement("div"),this._element.className="sethomehint");
var a,e;a=document.documentElement.clientHeight;e=document.documentElement.clientWidth;this._element.style.top=parseInt(a/2)-80+document.documentElement.scrollTop+"px";this._element.style.left=parseInt(e/2)-480+"px";1E3<e&&6<b.ie&&document.body.appendChild(this._element)},hide:function(){this._element.parentNode.removeChild(this._element)}};return f={set:function(a,b,m){i({link:m});if("length"in a){if(0>=a.length)return!1;a=a[0]}var h;try{d.show(),g.show(),a.style.behavior="url(#default#homepage)",
a.setHomePage(b),d.hide(),g.hide(),h=a.isHomePage(b)}catch(f){h=!1}i({set:h,position:m});e.refresh();e.isIENotHome()&&(p||(p=$(c("sethome")).sethome()),p.sethome("show"));return!0},setNotie:function(a){h||(h=$(m(c("sethomeNotie"),a)).sethome());h.sethome("show")},is:function(a){try{return homePageDom||(homePageDom=document.createElement("div"),homePageDom.style.display="none",homePageDom.style.behavior="url(#default#homePage)",document.body.appendChild(homePageDom)),homePageDom.isHomePage(a)}catch(e){}}}});
__d("widget.baiduIcon.baiduIcon",["common.js.widget","common.js.browser","common.js.log"],function(k,l,f,a){a("common.js.widget");var d=a("common.js.browser"),b=a("common.js.log");$.widget("hao123.baiduIcon",{_create:function(){if(d.isBaidu){d=window.location.search.match(/[?&]browser=([^&<>'"]+)/);var a=this;d&&"baidu"==d[1]&&$(function(){var e=a.element;$(".hao123-header-right",e).css({position:"absolute",right:100});$(e).before(" <a id='baidubrowser' href='bdbrowser://tabpage/#source=hao123' target='_self' style='position:absolute; z-index:999;left:50%;margin-left:412px;top:6px;width:58px; font-size:12px;background:url(http://s0.hao123img.com/res/img/baidulink.png) no-repeat; padding-left:20px;line-height:18px'>\u6700\u5e38\u8bbf\u95ee</a>");
$("#baidubrowser").click(function(){b({level:1,page:window.pageId,type:"baidubrowser"})})})}}});return f});
__d("widget.hao123Startup.hao123Startup",["common.js.widget"],function(k,l,f,a){a("common.js.widget");$.widget("hao123.hao123Startup",{_create:function(){if(!(0>window.location.search.indexOf("browser=startup"))){var a=$('<div class="hao123startup-welcome"></div>').appendTo(this.element),b=$('<div class="hao123startup-hint"></div>');$("body div:first").before(b);window.setTimeout(function(){a.animate({height:0},1E3,function(){})},3E3);window.setTimeout(function(){b.fadeOut()},33E3)}}});return f});
__d("widget.ad2012.ad2012",["common.js.widget"],function(k,l,f,a){a("common.js.widget");$.widget("hao123.ad2012",{_create:function(){function a(){g-=p;-g>m*h&&(g=-m*h,h++,window.clearInterval(j),j=null,h>c&&(h=1,g=0));e.element.css({top:g})}function b(){null===j&&(j=window.setInterval(a,i))}var c=this.element.children().length-1,e=this;if(!(2>c)){var m=30,i=16,p=1,h=1,g=0,j=null,f=null;e.element.append($("<div></div>").append(e.element.get(0).children[0].innerHTML));f=window.setInterval(b,5E3);e.element.find("a").hover(function(){window.clearInterval(f);
f=null},function(){null===f&&(f=window.setInterval(b,5E3))})}}});return f});
__d("site.searchLog",["common.js.log","common.js.config"],function(k,l,f,a){var d=a("common.js.log"),b=a("common.js.config");return function(a){a.on("searchfloatsubmit",function(){d({type:"floatsubmit"})});a.on("searchspecialshow",function(){d({type:"suggestspecialshow"})});a.on("searchsecialsubmit",function(a,b){d({type:"special",hit:b.hit,from:b.from,toerji:b.toerji,index:b.index})});a.on("searchsubmit",function(a,c){var i={type:"submit",position:c.tab,title:c.query,pageId:b.get("pageId")};switch(c.action){case "button":i.btnclick=
1;break;case "select":i.sug=1}d(i)}).on("searchsubmit",function(a,c){var i={type:"clicksug",flag:1,pageId:b.get("pageId")};i.src={input:2,suggest:2,hotword:{web:1,image:3}}[c.from][c.tab]||2;i.sugposition=c.suggestIndex;i.title=c.query;d(i)}).on("searchhotwordshow",function(){d({sugposition:1,pageId:b.get("pageId")})})}});
__d("widget.credit.credit",["common.js.widget","common.js.log","common.js.events","common.js.refer"],function(k,l,f,a){a("common.js.widget");var d=a("common.js.log"),b=a("common.js.events"),c=a("common.js.refer");$.widget("hao123.credit",{options:{tipmsg:"",creditUrl:"http://zhuanla.hao123.com/jifen.html",homeUrl:"http://www.6164.com/?src=jifen",tipCls:"tipicon",delay:1E4},_create:function(){var a=this.element;this.$tipicon=$("i",a);this.$tipmsg=$(".js_tipmsg",a);this.$tipclose=$(".js_tipclose",
a);this.$sethome=$("#sethome");this.$sethomeText=$("#sethome .js_text");this.hover=!1;this._bindEvent()},_init:function(){var a=this,d=a.options;d.tipmsg=c.isIEChannelHome()?"\u4fdd\u6301hao123\u4e3a\u4e3b\u9875\uff0c\u5929\u5929\u90fd\u80fd\u9886\u53d6\u79ef\u5206\uff0c\u6362\u597d\u793c >>":"\u8bbehao123\u4e3a\u4e3b\u9875\uff0c\u5373\u53ef\u62bd\u5956 >>";b.on("setHome.before",function(){return!1});this.$tipmsg.text(d.tipmsg);this.$tipicon.addClass(d.tipCls);this.$sethomeText.text("\u8bbe\u9996\u6709\u793c");
this.element.fadeIn();this.timer=setTimeout(function(){a.element.fadeOut()},a.options.delay)},_bindEvent:function(){var a=this;a.$sethome.mouseover(function(){a.hover||(a.hover=!0,a.element.fadeIn(),clearTimeout(a.timer))});a.$sethome.click(function(){a._processAction();return!1});a.$tipmsg.click(function(){a._processAction();return!1});a.$tipclose.click(function(){a.element.fadeOut();a.hover=!1})},_processAction:function(){var a=this,b=a.options,i=a.element.get(0);c.isIEChannelHome()?(window.open(b.creditUrl),
a.element.fadeOut(),a.hover=!1):(i.style.behavior="url(#default#homepage)",i.setHomePage(b.homeUrl),c.isHomePage(b.homeUrl)?(b.tipmsg="\u606d\u559c\u60a8\u6210\u529f\u8bbe\u7f6ehao123\u4e3a\u4e3b\u9875\uff0c\u83b7\u5f97\u62bd\u5956\u673a\u4f1a >>",a.$tipmsg.text(b.tipmsg),d({type:"tempstatistics",pageId:"iehome"})):(a.element.fadeOut(),setTimeout(function(){a.hover=!1},1E3)))}});return f});
__d("site.swayLogo",["common.js.home","common.js.cookie","common.js.refer"],function(k,l,f,a){var d=a("common.js.home"),b=a("common.js.cookie"),c=a("common.js.refer"),e=null;return f={init:function(a,c){e=a;var d=c.height()-12,f=$('<span  style="background:url(http://s0.hao123img.com/res/images/swayLogo.gif);position:absolute;cursor:pointer; width:169px; height:90px; top:'+d+'px; left:-20px;"></span>');e.append(f);var g=$('<span style="background:url(http://s0.hao123img.com/res/images/swaylogo-close.png?r=1) no-repeat;cursor:pointer; width:16px; height:16px; position:absolute; top:'+
(d+19)+'px; right:30px;"></span>');e.append(g);g.click(function(){f.hide();g.hide();b.set("swaylogo",1);return!1});g.mousedown(function(){return!1})},onClick:function(){d.set(e,"http://www.6164.com/?f=amusing",4);return!1},check:function(){return b.has("swaylogo")||!c.isIENotHome()?!1:!0}}});
__d("common.js.dns",["common.js.log","common.js.jquery","common.js.cookie"],function(k,l,f,a){var d,b;function c(){var a="";1>=Math.ceil(100*Math.random())&&(a=h("html").html()||"",setTimeout(function(){h.ajax({url:"/api/postcontent",type:"POST",data:{c:g,content:a||""}})},1E4))}function e(){h.ajax({url:d,type:"GET",headers:{KTN:"ck"},success:function(a,b,c){a=c.getResponseHeader("KTN");c=b="";a?("string"==typeof a&&(b=a.match(/[?&]tn=([^&<>'"]+)/),c=a.match(/[?&]src=([^&<>'"]+)/),b=b&&b[1],c=c&&
c[1],b||(b=""),c||(c="")),a==d?p({type:"KTN",code:"0",tn:b,src:c}):p({type:"KTN",code:"1",b2:a,tn:b,src:c})):p({type:"KTN",code:"2"})},error:function(){p({type:"KTN",code:"2"})}})}function m(a){var c=a||document,a=c.getElementsByTagName("iframe"),c=c.getElementsByTagName("script"),e=[],d=[],g={type:"KFC"};h(a).each(function(){var a=h(this).attr("src")||"";if(a){var c;c=i(a);for(var d=b.iframes,g=d.length,f=!1,j=0;j<g;j++)if(-1<c.indexOf(d[j])){f=!0;break}f||(-1<a.indexOf("://")||-1<a.indexOf("htpp")||
-1<a.indexOf("htpps"))&&e.push(a)}});h(c).each(function(){var a=h(this).attr("src")||"";if(a){var c;c=i(a);for(var e=b.scripts,g=e.length,f=!1,j=0;j<g;j++)if(-1<c.indexOf(e[j])){f=!0;break}f||(-1<a.indexOf("://")||-1<a.indexOf("htpp")||-1<a.indexOf("htpps"))&&d.push(a)}});0>=e.length&&0>=d.length?g.code=0:(g.code=1,0<e.length&&(g.f=e.join("|")),0<d.length&&(g.s=d.join("|")));return g}function i(a){-1<a.indexOf("#")&&(a=a.substr(0,a.indexOf("#")));-1<a.indexOf("?")&&(a=a.substr(0,a.indexOf("?")));
return a}var p=a("common.js.log"),h=a("common.js.jquery"),k=a("common.js.cookie"),g=k.getFlashId()||k.getBaiduId();window.location.search.match(/[?&]tn=([^&<>'"]+)/);d="/";b={scripts:["hao123.com","hao123img.com","baidu.com"],iframes:"120.209.128.29,baidu.com,hao123.com,anjuke.com,58.com,daohang.114so.cn".split(",")};return function(){e();var a={},b={},a=m();top!=window&&(parent.document?(a.p_t=0,b=m(parent.document),a.p_code=b.code,b&&b.s&&(a.p_s=b.s),b&&b.f&&(a.p_f=b.f)):a.p_t=1);p(a);(1==a.code||
1==a.p_code)&&c()}});__d("widget.popup.sethomeNotie",["widget.popup.base","common.js.log"],function(k,l,f,a){var k=a("widget.popup.base"),d=a("common.js.log");$.widget("hao123.sethomeNotie",k,{options:{},_create:function(){this._baseCreate();var a=this.element,c=this;$(".js_close",a).click(function(){c._baseHide();return!1});$(".js_ok",a).click(function(){c._baseHide()})},show:function(){this._baseShow();d({type:"sethomeshowNotie"})}});return f});
__d("common.js.count","common.js.config,common.js.refer,common.js.browser,common.js.load,common.js.localcookie,common.js.log,common.js.format".split(","),function(k,l,f,a){function d(){var a=c.get("userinfo"),b="",b=a.iscuser?b+"1":b+"0",b=a.recommendData?b+"1":b+"0";return b=a.isauser?b+"1":b+"0"}function b(){var a={urls:1,skin:1,fms:1,navigate:1,moviealbum:1,tvalbum:1,uir:1,ua:1,ns:1,tf:1,mf:1,sitead:1,myremind:1},b=c.get("currentProfile"),e="",d;for(d in b)a&&!a[d]&&b[d]&&"string"==typeof b[d]&&
(e+=";gx_"+d+":"+(20>b[d].length?b[d]:""));return e}var c=a("common.js.config"),e=a("common.js.refer"),m=a("common.js.browser");return function(){var f=a("common.js.load"),k=a("common.js.localcookie"),h=a("common.js.log"),g=c.__config__,j=a("common.js.format"),l=d(),n="http://s0.hao123img.com/res/js/track.js?"+(+new Date/36E5|0),o=window.location.search.match(/[?&]tn=([^&<>'"]+)/)?1:0,q={pageId:g.pageId,pf_fms:g.currentProfile.fms,pf_nav:g.currentProfile.navigate,pf_bd:""+g.currentProfile.t0+g.currentProfile.t1+
g.currentProfile.t2+g.currentProfile.t3,pf_gw:""+g.currentProfile.t4,pf_mf:g.currentProfile.mf&&g.currentProfile.mf.substr(0,1),pf_tf:g.currentProfile.tf&&g.currentProfile.tf.substr(0,1),pf_relax:g.currentProfile.relax||0,menu:g.currentProfile.menu||"index",navmore:c.get("currentProfile").navmore,skin:g.currentProfile.skin,isSiteUser:l,ostype:g.userinfo.ostype,ie:0<m.ie?1:0,home:m.ie&&!e.isIENotHome()?1:0,rp:o,mw:g.staticuser,gxzq:g.currentProfile.uir};f.loadScript(n,function(){},{"data-log-config":j("level:1;page:index;pageId:#{pageId};pf_fms:#{pf_fms};pf_bd:#{pf_bd};pf_gw:#{pf_gw};pf_mf:#{pf_mf};pf_tf:#{pf_tf};pf_nav:#{pf_nav};rp:#{rp};navmore:#{navmore};skin:#{skin};isSiteUser:#{isSiteUser};ostype:#{ostype};menu:#{menu};mw:#{mw};gxzq:#{gxzq}",
q)+b()});k.wait(function(){q.type="flash";h(q)})}});
__d("widget.append.append",["common.js.format","common.js.profile"],function(k,l,f,a,d,b){a("common.js.format");a("common.js.profile");return function(){b(["common.js.jquery","common.js.adjust","common.js.lazy"],function(a,b,d){var f=a("#append");f.hide();b.adjustQuick();d.add(a("#append-location"),function(){f.hide();var d=a("#layout-side"),h=a("#layout-content"),g=document.getElementById("layout-guess")?a("#layout-guess"):a("#box-navigate"),j=a("#js_nlb");g.css({height:"auto"});j.css({height:"auto"});
d=d.height()-h.height();if(!(50>d)){a("#append-links");h=0;f.removeClass("append-simple");76>d?(f.addClass("append-simple"),h=3):102>d?(f.addClass("append-simple"),h=6):(h=Math.floor((d-14-12-12-12)/26),h*=3);d=h;h=$("#append-links");g=null;$("li",h).addClass("item");for(j=0;j<d;j++)g=$(".item"+j,h),g.removeClass("item");f.show()}b.adjust()})})}});
__d("widget.joke.joke",["common.js.widget"],function(k,l,f,a){a("common.js.widget");$.widget("hao123.joke",{options:{jokes:null,current:0},_create:function(){var a=this.element;this.$jokeChange=$(".joke-change",a);this.$joke=$(".joke-text",a);this._bindEvent()},_init:function(){this.current=this.options.current},_bindEvent:function(){var a=this;this.$jokeChange.click(function(){a._ranJoke();return!1});this.$joke.click(function(){setTimeout(function(){a._ranJoke()},0)})},_ranJoke:function(){var a=
this.options.jokes,b=this.current+1,c;b>=a.length&&(b=0);c=a[b];this.$joke.addClass(a[0].style);this.$joke.attr("href",c.url);this.$joke.text(c.title);this.current=b},destroy:function(){$.Widget.prototype.destroy.call(this)}});return f});window.js_untDBNhuvA&&window.js_untDBNhuvA(!0);
