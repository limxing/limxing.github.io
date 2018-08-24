$(function(){
	var $anvlfteb=$('#anvlfteb'),
		$posbox=$anvlfteb.find('div.posbox'),
		$seledbox=$("#seledbox"),
		anvjson={
			keda:'<a href="http://taxq.sdust.edu.cn/" target="_blank"><img src="img/keda.png">校园首页</a>'+
				'<a href="http://218.56.144.61/%28weor3ybuhzowfcrjb4yoxizp%29/default2.aspx" target="_blank"><img src="img/ico17.gif">教务管理系统</a>'+
				'<a href="http://tajy.sdust.edu.cn/" target="_blank"><img src="img/ico34.gif">就业信息网</a>'+
				'<a href="http://taxq.sdust.edu.cn/index__E9B5DC3EA072AD8F8537898BBCB9B13A.htm" target="_blank"><img src="img/gonggao.png">校区公告</a>'+
				'<a href="http://taxq.sdust.edu.cn/index__F1479F22B516BE426D36FED823C621AE.htm" target="_blank"><img src="img/news.png">校区新闻</a>'+
				'<a href="http://tieba.baidu.com/f?kw=%CC%A9%C9%BD%BF%C6%BC%BC%D1%A7%D4%BA&fr=index "  target="_blank"><img src="img/tie.png">科大贴吧</a>'+
				'<a href="http://www.sdust.edu.cn/" target="_blank"><img src="img/keda.png">青岛校区</a>'+
				'<a href="http://yjsy.sdust.edu.cn/ "  target="_blank"><img src="img/yanjiusheng.jpg">研究生院</a>',
        	nongda:'<a href="http://www.sdau.edu.cn/" target="_blank"><img src="img/nongda.png">学校首页</a>'+
				'<a href="http://202.194.131.140:8090/Student/login.jsp" target="_blank"><img src="img/ico17.gif">教务管理系统</a>'+
				'<a href="http://jyzx.sdau.edu.cn/" target="_blank"><img src="img/ico34.gif">就业指导中心</a>'+
				'<a href="http://wju.sdau.edu.cn/article/tzgg/" target="_blank"><img src="img/gonggao.png">学校公告</a>'+
				'<a href="http://news.sdau.edu.cn/" target="_blank"><img src="img/news.png">学校新闻</a>'+
				'<a href="http://tieba.baidu.com/f?kw=%C9%BD%B6%AB%C5%A9%D2%B5%B4%F3%D1%A7&fr=index " target="_blank"><img src="img/tie.png">农大贴吧</a>'+
								'<a href="http://yjsc.sdau.edu.cn/ "  target="_blank"><img src="img/yanjiusheng.jpg">研究生院</a>',
        	taiyi:'<a href="http://www.tsmc.edu.cn/" target="_blank"><img src="img/taiyi.png">学校首页</a>'+
				'<a href="#" target="_blank"><img src="img/ico17.gif">教务管理系统</a>'+
				'<a href="http://202.194.232.16/jyzd/" target="_blank"><img src="img/ico34.gif">就业指导中心</a>'+
				'<a href="http://www.tsmc.edu.cn/news/tzgg/" target="_blank"><img src="img/gonggao.png">学校公告</a>'+
				'<a href="http://www.tsmc.edu.cn/newsindex.html" target="_blank"><img src="img/news.png">学校新闻</a>'+
				'<a href="http://tieba.baidu.com/f?kw=%E6%B3%B0%E5%B1%B1%E5%8C%BB%E5%AD%A6%E9%99%A2&fr=index&fp=0&ie=utf-8 "target="_blank"><img src="img/tie.png">泰医贴吧</a>',
          	taiyuan:'<a href="http://www.tsu.edu.cn/" target="_blank"><img src="img/taiyuan.png">学校首页</a>'+
				'<a href="http://jwxt.tsu.edu.cn/" target="_blank"><img src="img/ico17.gif">教务管理系统</a>'+
				'<a href="http://www2.tsu.edu.cn/www/jyc/" target="_blank"><img src="img/ico34.gif">就业指导中心</a>'+
				'<a href="http://www.tsu.edu.cn/notice/list3.html" target="_blank"><img src="img/gonggao.png">学校公告</a>'+
				'<a href="http://www.tsu.edu.cn/news/list2.html" target="_blank"><img src="img/news.png">学校新闻</a>'+
				'<a href="http://tieba.baidu.com/f?kw=%CC%A9%C9%BD%D1%A7%D4%BA&fr=index" target="_blank"><img src="img/tie.png">泰院贴吧</a>',
          	shanfu:'<a href="http://www.svict.com/" target="_blank"><img src="img/shanfu.png">学校首页</a>'+
				'<a href="http://192.168.100.250:8098/jwgl/" target="_blank"><img src="img/ico17.gif">教务管理系统</a>'+
				'<a href="http://bys.sdfzxy.com/" target="_blank"><img src="img/ico34.gif">就业指导中心</a>'+
				'<a href="http://www.sdfzxy.com/xwgg/tzgg/" target="_blank"><img src="img/gonggao.png">学校公告</a>'+
				'<a href="http://www.sdfzxy.com/xwgg/" target="_blank"><img src="img/news.png">学校新闻</a>'+
				'<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%B1%B1%E4%B8%9C%E6%9C%8D%E8%A3%85%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2" target="_blank"><img src="img/tie.png">山服贴吧</a>',
           	taizhi:'<a href="http://www.mtotc.com.cn/" target="_blank"><img src="img/taizhi.png">学校首页</a>'+
				'<a href="http://172.16.7.130/" target="_blank"><img src="img/ico17.gif">教务管理系统</a>'+
				'<a href="http://www.mtotc.com.cn/jiuyewang/" target="_blank"><img src="img/ico34.gif">就业指导中心</a>'+
				'<a href="http://www.mtotc.com.cn/aqgl/ShowClass.asp?ClassID=5" target="_blank"><img src="img/gonggao.png">学校公告</a>'+
				'<a href="http://www.mtotc.com.cn/aqgl/" target="_blank"><img src="img/news.png">学校新闻</a>'+
				'<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E6%B3%B0%E5%B1%B1%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2" target="_blank"><img src="img/tie.png">泰职贴吧</a>',
   
		   qita:'<a href="http://www.tsinghua.edu.cn/publish/newthu/index.html" target="_blank"><img src="img/qinghua.jpg">清华大学</a>'+
				'<a href="http://www.pku.edu.cn/" target="_blank"><img src="img/beida.png">北京大学</a>'+
				'<a href="http://www.sdu.edu.cn/" target="_blank"><img src="img/shanda.jpg">山东大学</a>',   
		};


		$posbox.mouseover(function(){
			var i=$(this).index();
			$(this).addClass("anvh").siblings().removeClass("anvh");
			var selec=$(this).attr("selec");
			if($seledbox.is(":hidden")){
				$seledbox.show().css("left",120*i+1).html("<div>"+anvjson[selec]+"</div>")
			}else{
				$seledbox.stop().animate({left:120*i+1},200,function(){
					$("#seledbox").html("<div>"+anvjson[selec]+"</div>")
				})
			}
		});
		$anvlfteb.mouseleave(function(){
			$seledbox.hide();
			$posbox.removeClass("anvh");
		})
})
