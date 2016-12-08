/**
 * Created by Administrator on 2016/11/14 0014.
 */
charset = "utf-8";
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10.0 + 'px';
$(function() {
	$('.retri dt a').click(function() {
		var $t = $(this);
		if($t.hasClass('up')) {
			$(".retri dt a").removeClass('up');
			$('.downlist').hide();
			$('.mask').hide();
		} else {
			$(".retri dt a").removeClass('up');
			$('.downlist').hide();
			$t.addClass('up');
			$('.downlist').eq($(".retri dt a").index($(this)[0])).show();
			$('.mask').show();
		}
	});
	$('.retrie dt a').click(function() {
		var $t = $(this);
		if($t.hasClass('up')) {
			$(".retrie dt a").removeClass('up');
			$('.downlis').hide();
			$('.mask').hide();
		} else {
			$(".retrie dt a").removeClass('up');
			$('.downlis').hide();
			$t.addClass('up');
			$('.downlis').eq($(".retrie dt a").index($(this)[0])).show();
			$('.mask').show();
		}
	});
	$(".area ul li a:contains('" + $('#area').text() + "')").addClass('selected');
	$(".wage ul li a:contains('" + $('#wage').text() + "')").addClass('selected');
});

function clic() {
	document.getElementById('any').style.display = "block";
	document.getElementById('an').style.display = "none";
}

function cli() {
	document.getElementById('an').style.display = "block";
	document.getElementById('any').style.display = "none";

}

//道具遍历方法
var lists = 0;
function tab(pid) {
	var tabs = ["tab1", "tab2"];
	for(var i = 0; i < 2; i++) {
		if(tabs[i] == pid) {
			lists+=1;
			$.ajax({
				url:"/wx/index.php/list/daoju",
				type:"post",
				dataType:"json",
				success:function(data){
					for (var i = 0; i < data.length; i++) {
						var content = data[i].content;
						if(data[i].type == '租赁'){
							var img = '<img id="pic_matter" src="/wx/public/Home/image/tb/zu.png">';
						}else if(data[i].type == '购买'){
							var img = '<img id="pic_matter" src="/wx/public/Home/image/tb/mai.png">';
						}else if(data[i].type == '婚车/车队'){
							var img = '<img id="pic_matter" src="/wx/public/Home/image/tb/che.png">';
						}
						
						var list = '<div class="main"><form id="form2" action="#" method="post"><div class="content"><div class="logo">'+img+'</div><div class="news"><table cellpadding="0" cellspacing="0" style="font-size: 0.37rem; color: #888888;" width="100%"><tr><td style="font-size: 0.43rem; color: #333333;" colspan="2"><span id="title_matter" class="left">'+data[i].title+'</span><span id="type_matter" class="right">'+data[i].type+'</span></td></tr><tr><td width="10%"><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td width="90%">活动日期：<span id="date_matter">'+data[i].time+'</span></td></tr><tr><td><div style="width:0.24rem; height:0.3rem;  margin: 0 auto;"><img src="/wx/public/Home/image/any.png"></div></td><td><div class="detail">其他要求：<span id="detail">'+content.substr(0,3)+'...</span></div></td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/placer.png"></div></td><td><span id="city_matter">'+data[i].address+'</span><span id="price_matter" class="right">'+data[i].price+'元/天</span></td></tr></table></div><div style="float: right; width: 18%;"><div id="more_matter" onclick="al_matter('+data[i].id+')" class="more">更多</div><div id="time_matter" class="time">1小时前</div></div></div></form></div>';
						if(lists == 1){
							$('#list').append(list);
						}	
					};
				},error:function(){
					alert('no');
				}
			});
			document.getElementById(tabs[i]).style.display = "block";
		} else {
			document.getElementById(tabs[i]).style.display = "none";
		}
	}
}

function img(img) {
	if(img == 'img1') {
		document.getElementById('img1').src = "/wx/public/Home/image/peopleb.png";
		document.getElementById('img2').src = "/wx/public/Home/image/goodsa.png";
		document.getElementById('people').style.color = "#ed4c59";
		document.getElementById('goods').style.color = "#999999";
	} else {
		document.getElementById('img2').src = "/wx/public/Home/image/goodsb.png";
		document.getElementById('img1').src = "/wx/public/Home/image/peoplea.png";
		document.getElementById('goods').style.color = "#ed4c59";
		document.getElementById('people').style.color = "#999999";
	}
}

function con() {
	$('.downlist').hide();
	$('.mask').hide();
	$('.downlis').hide();
	$(".retri dt a").removeClass('up');
	$(".retrie dt a").removeClass('up');
}

$(function() {
	$('.retrie dd ul li div').click(function() {
		$('.downlis').hide();
		$('.retrie dt a').removeClass('up');
	});
	$('.retri dd ul li div').click(function() {
		$('.downlist').hide();
		$('.retri dt a').removeClass('up');
	});
	$('.submit').click(function() {
		$('.downlis').hide();
		$('.retrie dt a').removeClass('up');
	});
});

/*alert*/
//四大金刚-》更多
function al(id) {
	// alert(id);
	$.ajax({
		url:"/wx/index.php/list/ajax/id/"+id,
		type:"get",
		dataType:"json",
		success:function(data){
			document.getElementById('titles').innerHTML = data[0].title;
			document.getElementById('types').innerHTML = data[0].type;
			document.getElementById('sexs').innerHTML = data[0].sex;
			document.getElementById('amounts').innerHTML = data[0].amount;
			document.getElementById('times').innerHTML = data[0].time;
			document.getElementById('address').innerHTML = data[0].address;
			document.getElementById('contents').innerHTML = data[0].content;
			document.getElementById('tyes_people').value = data[0].tel;
			document.getElementById('wechatV_people').value = data[0].weixin;
			var tels = document.getElementById('tels').href;
			if(document.getElementById('types').innerHTML == '摄像师'){
				document.getElementById('images').src = "/wx/public/Home/image/tb/sxs.png";
			}else if(document.getElementById('types').innerHTML == '摄影师'){
				document.getElementById('images').src = "/wx/public/Home/image/tb/sys.png";
			}else if(document.getElementById('types').innerHTML == '化妆师'){
				document.getElementById('images').src = "/wx/public/Home/image/tb/hzs.png";
			}else if(document.getElementById('types').innerHTML == '策划师'){
				document.getElementById('images').src = "/wx/public/Home/image/tb/chs.png";
			}else if(document.getElementById('types').innerHTML == '主持人'){
				document.getElementById('images').src = "/wx/public/Home/image/tb/zcr.png";
			}else if(document.getElementById('types').innerHTML == '其他'){
				document.getElementById('images').src = "/wx/public/Home/image/tb/qt.png";
			}else if(document.getElementById('types').innerHTML == '租赁'){
				document.getElementById('images').src = "/wx/public/Home/image/tb/zu.png";
			}else if(document.getElementById('types').innerHTML == '婚车/车队'){
				document.getElementById('images').src = "/wx/public/Home/image/tb/che.png";
			}
			var tell = tels.substr(4);
			tell = data[0].tel;
			// alert(tell);
		},error:function(){
			alert('no');
		}
	});
	var light = document.getElementById('light_people');
	var fade = document.getElementById('fade');
	light.style.display = "block";
	fade.style.display = "block";
	fade.style.zIndex = "1001";
	document.body.style.position = 'fixed';
}
//婚庆道具-》更多
function al_matter(id) {
	$.ajax({
		url:"/wx/index.php/list/dajax/id/"+id,
		type:"get",
		datatype:"json",
		success:function(data){
			document.getElementById('mytitle').innerHTML = data[0].title;
			document.getElementById('mytype').innerHTML = data[0].type;
			document.getElementById('myamount').innerHTML = data[0].price;
			document.getElementById('mytime').innerHTML = data[0].time;
			document.getElementById('myaddress').innerHTML = data[0].address;
			document.getElementById('mycontent').innerHTML = data[0].content;
			document.getElementById('wechatV_people').innerHTML = data[0].weixin;
			var tels = document.getElementById('mytel').href;
			if(document.getElementById('mytype').innerHTML == '租赁'){
				document.getElementById('myimages').src = "/wx/public/Home/image/tb/zu.png";
			}else if(document.getElementById('mytype').innerHTML == '购买'){
				document.getElementById('myimages').src = "/wx/public/Home/image/tb/mai.png";
			}else if(document.getElementById('mytype').innerHTML == '婚车/车队'){
				document.getElementById('myimages').src = "/wx/public/Home/image/tb/che.png";
			}
			var tell = tels.substr(4);
			tell = data[0].tel;
			// alert(tell);
		},error:function(){
			alert('no');
		}
	});
	var light = document.getElementById('light_matter');
	var fade = document.getElementById('fade');
	light.style.display = "block";
	fade.style.display = "block";
	fade.style.zIndex = "1001";
	document.body.style.position = 'fixed';
}
//完成后道具-》更多
function al_matterm(id){
	al_matter(id);
	var light = document.getElementById('light_matter');
	var fade = document.getElementById('fade');
	light.style.display = "block";
	fade.style.display = "block";
	fade.style.zIndex = "1001";
	document.body.style.position = 'fixed';
}
//完成后通告-》更多
function alp(id){
	al(id);
	var light = document.getElementById('light_people');
	var fade = document.getElementById('fade');
	light.style.display = "block";
	fade.style.display = "block";
	fade.style.zIndex = "1001";
	document.body.style.position = 'fixed';
}

function finish(id) {
	document.getElementById('finish_ok').style.display = "block";
	document.getElementById('fade').style.display = 'block';
	document.getElementById('fade').style.zIndex = '1001';
	document.body.style.position = 'fixed';
	mid = id;
	// finish_finish(mid);
}
// 点击完成
function finishs(id) {
	document.getElementById('finish_oks').style.display = "block";
	document.getElementById('fade').style.display = 'block';
	document.getElementById('fade').style.zIndex = '1001';
	document.body.style.position = 'fixed';
	pid = id;
	// alert(pid);
	// finish_finish(mid);
}

function upload_ok() {
	document.getElementById('upload_ok').style.display = "block";
	document.getElementById('fade').style.display = 'block';
	document.getElementById('fade').style.zIndex = '1001';
	document.body.style.position = 'fixed';
}

/*copy*/
function copyTel_people() {
	var Ur = document.getElementById('telV_people');
	Ur.select();
	document.execCommand("Copy");
	document.getElementById('tyes_people').style.display = 'block';
	setTimeout(function() {
		document.getElementById("tyes_people").style.display = "none";
	}, 1000);
}

function copyWe_people() {
	var Ur = document.getElementById('wechatV_people');
	Ur.select();
	document.execCommand("Copy");
	document.getElementById('wyes_people').style.display = 'block';
	setTimeout(function() {
		document.getElementById("wyes_people").style.display = "none";
	}, 1000);
}

function copyTel_matter() {
	var Ur = document.getElementById('telV_matter');
	Ur.select();
	document.execCommand("Copy");
	document.getElementById('tyes_matter').style.display = 'block';
	setTimeout(function() {
		document.getElementById("tyes_matter").style.display = "none";
	}, 1000);
}

function copyWe_matter() {
	var Ur = document.getElementById('wechatV_matter');
	Ur.select();
	document.execCommand("Copy");
	document.getElementById('wyes_matter').style.display = 'block';
	setTimeout(function() {
		document.getElementById("wyes_matter").style.display = "none";
	}, 1000);
}

function color(id) {
	if(id == 'nav-left') {
		document.getElementById('nav-left').style.backgroundColor = "#dd3d49";
		document.getElementById('nav-right').style.backgroundColor = "#ed4c59";
	} else {
		document.getElementById('nav-left').style.backgroundColor = "#ed4c59";
		document.getElementById('nav-right').style.backgroundColor = "#dd3d49";
	}
}
// 对简历和道具的总遍历
var pmnum = 0;
var mpnum = 0;
function tab1(pid) {
	pmnum += 1;
	mpnum += 1;
	var tabs = ["tab3", "tab4"];
	for(var i = 0; i < 2; i++) {
		if(tabs[i] == pid) {
			// alert(123);
			$.ajax({
				url:"/wx/index.php/issued/mpajax",
				type:"post",
				dataType:"json",
				success:function(data){
					//matter的拿值方法data[1][0].title people的拿值方法 data[0][0]
					//先循环people里面的值
					for (var i = 0; i < data[0].length; i++) {
						// alert(data[0][i].title);
						if(data[0][i].type == '主持人'){
							var ii = '<img id="pic_matter" src="/wx/public/Home/image/tb/zcr.png">';
							}else if(data[0][i].type == '摄影师'){
								var ii = '<img id="pic_matter" src="/wx/public/Home/image/tb/sys.png">';
							}else if(data[0][i].type == '化妆师'){
								var ii = '<img id="pic_matter" src="/wx/public/Home/image/tb/hzs.png">';
							}else if(data[0][i].type == '摄像师'){
								var ii = '<img id="pic_matter" src="/wx/public/Home/image/tb/sxs.png">';
							}else if(data[0][i].type == '策划师'){
								var ii = '<img id="pic_matter" src="/wx/public/Home/image/tb/chs.png">';
							}else if(data[0][i].type == '其它'){
								var ii = '<img id="pic_matter" src="/wx/public/Home/image/tb/qt.png">';
							}
							
							if(data[0][i].sex == '女'){
								var sexs = '<img src="/wx/public/Home/image/sexg.png"></div></td><td width="90%">'+data[0][i].sex+'</td></tr><tr><td><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td>活动日期：'+data[0][i].time+'</td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/placer.png">';
								}else{
								var sexs = '<img src="/wx/public/Home/image/sexb.png"></div></td><td width="90%">'+data[0][i].sex+'</td></tr><tr><td><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td>活动日期：'+data[0][i].time+'</td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/place.png">';
								}
						var matter = '<div class="main"><div class="content"><div class="logo">'+ii+'</div><div class="news"><table cellpadding="0" cellspacing="0" style="font-size: 0.37rem; color: #888888;" width="100%"><tr><td style="font-size: 0.43rem; color: #333333;" colspan="2"><span class="left">'+data[0][i].title+'</span> <span class="right">'+data[0][i].type+'</span></td></tr><tr><td width="10%"><div style="width:0.16rem; height:0.24rem; margin: 0 auto;">'+sexs+'</div></td><td><span>'+data[0][i].address+'</span><span class="right">'+data[0][i].amount+'元/天</span></td></tr></table></div><div style="float: right; width: 18%;"><div onclick="alp('+data[0][i].id+')" class="more">更多</div><div class="finish_text">已完成</div><div class="issued-time">1小时前</div></div></div></div>';
							if(mpnum == 1){
								$('#pcon').append(matter);
							}
						};
						for (var j = 0; j < data[1].length; j++) {
							// mid = data[1][i].id;
							if(data[1][j].type == '租赁'){
							var img = '<img id="pic_matter" src="/wx/public/Home/image/tb/zu.png">';
							}else if(data[1][j].type == '购买'){
								var img = '<img id="pic_matter" src="/wx/public/Home/image/tb/mai.png">';
							}else if(data[1][j].type == '婚车/车队'){
								var img = '<img id="pic_matter" src="/wx/public/Home/image/tb/che.png">';
							}
							var contents = data[1][j].content;
							var people = '<div class="main"><div class="content"><div class="logo">'+img+'</div><div class="news"><table cellpadding="0" cellspacing="0" style="font-size: 0.37rem; color: #888888;" width="100%"><tr><td style="font-size: 0.43rem; color: #333333;" colspan="2"><span id="title_matter" class="left">'+data[1][j].title+'</span><input type="hidden" value="隐藏域(传递id)"><span id="type_matter" class="right">'+data[1][j].type+'</span></td></tr><tr><td width="10%"><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td width="90%">活动日期：<span id="date">'+data[1][j].time+'</span></td></tr><tr><td><div style="width:0.24rem; height:0.3rem;  margin: 0 auto;"><img src="/wx/public/Home/image/any.png"></div></td><td><div class="detail">其他要求：<span id="detail_matter">'+contents.substr(0,3)+'...</span></div></td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/placer.png"></div></td><td><span id="city_matter">'+data[1][j].address+'</span><span id="price_matter" class="right">'+data[1][j].price+'元/天</span></td></tr></table></div><div style="float: right; width: 18%;"><div id="more" onclick="al_matterm('+data[1][j].id+')" class="more">更多</div><div id="finished" class="finish_text">已完成</div><div id="time" class="issued-time">1小时前</div></div></div></div>';
							if(pmnum == 1){
								$('#mcon').append(people);
							}
					};
				},error:function(){
					alert('no');
				}

			});
			document.getElementById(tabs[i]).style.display = "block";
		} else {
			document.getElementById(tabs[i]).style.display = "none";
		}
	}
}

function finish_finish() {
	//道具点击完成后的方法
		$.ajax({
			url:"/wx/index.php/issued/majax/id/"+mid,
			type:"get",
			dataType:"json",
			success:function(data){
			$.ajax({
					url:"/wx/index.php/issued/mpajax",
					type:"post",
					dataType:"json",
					success:function(data){
						//matter的拿值方法data[1][0].title people的拿值方法 data[0][0]
						//先循环people里面的值
						for (var i = 0; i < data[0].length; i++) {
							// alert(data[0][i].title);
							if(data[0][i].type == '主持人'){
								var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/zcr.png">';
							}else if(data[0][i].type == '摄影师'){
								var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/sys.png">';
							}else if(data[0][i].type == '化妆师'){
								var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/hzs.png">';
							}else if(data[0][i].type == '摄像师'){
								var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/sxs.png">';
							}else if(data[0][i].type == '策划师'){
								var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/chs.png">';
							}else if(data[0][i].type == '其它'){
								var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/qt.png">';
							}
							//判断为女的时候的图标
							if(data[0][i].sex == '女'){
								var sexs = '<img src="/wx/public/Home/image/sexg.png"></div></td><td width="90%">'+data[0][i].sex+'</td></tr><tr><td><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td>活动日期：'+data[0][i].time+'</td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/placer.png">';
								}else{
								var sexs = '<img src="/wx/public/Home/image/sexb.png"></div></td><td width="90%">'+data[0][i].sex+'</td></tr><tr><td><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td>活动日期：'+data[0][i].time+'</td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/place.png">';
								}
							var matter = '<div class="main"><div class="content"><div class="logo">'+iis+'</div><div class="news"><table cellpadding="0" cellspacing="0" style="font-size: 0.37rem; color: #888888;" width="100%"><tr><td style="font-size: 0.43rem; color: #333333;" colspan="2"><span class="left">'+data[0][i].title+'</span> <span class="right">'+data[0][i].type+'</span></td></tr><tr><td width="10%"><div style="width:0.16rem; height:0.24rem; margin: 0 auto;">'+sexs+'</div></td><td><span>'+data[0][i].address+'</span><span class="right">'+data[0][i].amount+'元/天</span></td></tr></table></div><div style="float: right; width: 18%;"><div onclick="alp('+data[0][i].id+')" class="more">更多</div><div class="finish_text">已完成</div><div class="issued-time">1小时前</div></div></div></div>';
								if(mpnum < 1){
									$('#pcon').append(matter);
								}
							};
							for (var j = 0; j < data[1].length; j++) {
								// mid = data[1][i].id;
								if(data[1][j].type == '租赁'){
									var imgg = '<img id="pic_matter" src="/wx/public/Home/image/tb/zu.png">';
								}else if(data[1][j].type == '购买'){
									var imgg = '<img id="pic_matter" src="/wx/public/Home/image/tb/mai.png">';
								}else if(data[1][j].type == '婚车/车队'){
									var imgg = '<img id="pic_matter" src="/wx/public/Home/image/tb/che.png">';
								}
								var contents = data[1][j].content;
								var people = '<div class="main"><div class="content"><div class="logo">'+imgg+'</div><div class="news"><table cellpadding="0" cellspacing="0" style="font-size: 0.37rem; color: #888888;" width="100%"><tr><td style="font-size: 0.43rem; color: #333333;" colspan="2"><span id="title_matter" class="left">'+data[1][j].title+'</span><input type="hidden" value="隐藏域(传递id)"><span id="type_matter" class="right">'+data[1][j].type+'</span></td></tr><tr><td width="10%"><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td width="90%">活动日期：<span id="date">'+data[1][j].time+'</span></td></tr><tr><td><div style="width:0.24rem; height:0.3rem;  margin: 0 auto;"><img src="/wx/public/Home/image/any.png"></div></td><td><div class="detail">其他要求：<span id="detail_matter">'+contents.substr(0,3)+'...</span></div></td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/placer.png"></div></td><td><span id="city_matter">'+data[1][j].address+'</span><span id="price_matter" class="right">'+data[1][j].price+'元/天</span></td></tr></table></div><div style="float: right; width: 18%;"><div id="more" onclick="al_matterm('+data[1][j].id+')" class="more">更多</div><div id="finished" class="finish_text">已完成</div><div id="time" class="issued-time">1小时前</div></div></div></div>';
								if(pmnum < 1){
									$('#mcon').append(people);
								}
								document.getElementById('nav-right').onclick = "#";
						};
					},error:function(){
						alert('no');
					}

				});
			},error:function(){
				alert('no');
			}
		});

    document.getElementById('finish_ok').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    document.body.style.position = 'relative';
    document.getElementById('tab4').style.display = "block";
    document.getElementById('tab3').style.display = "none";
    document.getElementById('nav-right').style.backgroundColor = "#dd3d49";
    document.getElementById('nav-left').style.backgroundColor = "#ed4c59";
}
//点击任务简历完成后的方法
function finish_finishs(){
	$.ajax({
			url:"/wx/index.php/issued/pajax/id/"+pid,
			type:"get",
			dataType:"json",
			success:function(data){
			$.ajax({
					url:"/wx/index.php/issued/mpajax",
					type:"post",
					dataType:"json",
					success:function(data){
						//matter的拿值方法data[1][0].title people的拿值方法 data[0][0]
						//先循环people里面的值
						for (var i = 0; i < data[0].length; i++) {
							// alert(data[0][i].title);
								if(data[0][i].type == '主持人'){
									var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/zcr.png">';
								}else if(data[0][i].type == '摄影师'){
									var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/sys.png">';
								}else if(data[0][i].type == '化妆师'){
									var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/hzs.png">';
								}else if(data[0][i].type == '摄像师'){
									var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/sxs.png">';
								}else if(data[0][i].type == '策划师'){
									var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/chs.png">';
								}else if(data[0][i].type == '其它'){
									var iis = '<img id="pic_matter" src="/wx/public/Home/image/tb/qt.png">';
								}
							var matter = '<div class="main"><div class="content"><div class="logo">'+iis+'</div><div class="news"><table cellpadding="0" cellspacing="0" style="font-size: 0.37rem; color: #888888;" width="100%"><tr><td style="font-size: 0.43rem; color: #333333;" colspan="2"><span class="left">'+data[0][i].title+'</span> <span class="right">'+data[0][i].type+'</span></td></tr><tr><td width="10%"><div style="width:0.16rem; height:0.24rem; margin: 0 auto;"><img src="/wx/public/Home/image/sexg.png"></div></td><td width="90%">'+data[0][i].sex+'</td></tr><tr><td><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td>活动日期：'+data[0][i].time+'</td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/placer.png"></div></td><td><span>'+data[0][i].address+'</span><span class="right">'+data[0][i].amount+'元/天</span></td></tr></table></div><div style="float: right; width: 18%;"><div onclick="alp('+data[0][i].id+')" class="more">更多</div><div class="finish_text">已完成</div><div class="issued-time">1小时前</div></div></div></div>';
								if(mpnum < 1){
									$('#pcon').append(matter);
								}
							};
							for (var j = 0; j < data[1].length; j++) {
								// mid = data[1][i].id;
								if(data[1][j].type == '租赁'){
									var imgg = '<img id="pic_matter" src="/wx/public/Home/image/tb/zu.png">';
								}else if(data[1][j].type == '购买'){
									var imgg = '<img id="pic_matter" src="/wx/public/Home/image/tb/mai.png">';
								}else if(data[1][j].type == '婚车/车队'){
									var imgg = '<img id="pic_matter" src="/wx/public/Home/image/tb/che.png">';
								}
								var people = '<div class="main"><div class="content"><div class="logo">'+imgg+'</div><div class="news"><table cellpadding="0" cellspacing="0" style="font-size: 0.37rem; color: #888888;" width="100%"><tr><td style="font-size: 0.43rem; color: #333333;" colspan="2"><span id="title_matter" class="left">'+data[1][j].title+'</span><input type="hidden" value="隐藏域(传递id)"><span id="type_matter" class="right">'+data[1][j].type+'</span></td></tr><tr><td width="10%"><div style="width:0.3rem; height:0.3rem; margin: 0 auto;"><img src="/wx/public/Home/image/time.png"></div></td><td width="90%">活动日期：<span id="date">'+data[1][j].time+'</span></td></tr><tr><td><div style="width:0.24rem; height:0.3rem;  margin: 0 auto;"><img src="/wx/public/Home/image/any.png"></div></td><td><div class="detail">其他要求：<span id="detail_matter">'+data[1][j].content+'</span></div></td></tr><tr><td><div style="width: 0.22rem; height: 0.32rem; margin: 0 auto;"><img src="/wx/public/Home/image/placer.png"></div></td><td><span id="city_matter">'+data[1][j].address+'</span><span id="price_matter" class="right">'+data[1][j].price+'元/天</span></td></tr></table></div><div style="float: right; width: 18%;"><div id="more" onclick="al_matterm('+data[1][j].id+')" class="more">更多</div><div id="finished" class="finish_text">已完成</div><div id="time" class="issued-time">1小时前</div></div></div></div>';
								if(pmnum < 1){
									$('#mcon').append(people);
								}
								document.getElementById('nav-right').onclick = "#";
						};
					},error:function(){
						alert('no');
					}

				});
			},error:function(){
				alert('no');
			}
		});
	document.getElementById('finish_oks').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    document.body.style.position = 'relative';
    document.getElementById('tab4').style.display = "block";
    document.getElementById('tab3').style.display = "none";
    document.getElementById('nav-right').style.backgroundColor = "#dd3d49";
    document.getElementById('nav-left').style.backgroundColor = "#ed4c59";
}

function upload_finish() {
	document.getElementById('finish_ok').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
	document.body.style.position = 'relative';
	document.getElementById('tab6').style.display = "block";
	document.getElementById('tab5').style.display = "none";
	document.getElementById('upload-right').style.backgroundColor = "#dd3d49";
	document.getElementById('upload-left').style.backgroundColor = "#ed4c59";
}

function upload_finis() {
	document.getElementById('upload_ok').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
	document.body.style.position = 'relative';
	document.getElementById('tab5').style.display = "block";
	document.getElementById('tab6').style.display = "none";
	document.getElementById('upload-left').style.backgroundColor = "#dd3d49";
	document.getElementById('upload-right').style.backgroundColor = "#ed4c59";
}

function finish_cancel() {
	document.getElementById('fade').style.display = 'none';
	document.getElementById('finish_ok').style.display = 'none';
	// document.getElementById('upload_ok').style.display = 'none';
	document.body.style.position = 'relative';
}
/*upload*/
function tab2(pid) {
	var tabs = ["tab5", "tab6"];
	for(var i = 0; i < 2; i++) {
		if(tabs[i] == pid) {
			document.getElementById(tabs[i]).style.display = "block";
		} else {
			document.getElementById(tabs[i]).style.display = "none";
		}
	}
}

function uploadC(id) {
	if(id == 'upload-left') {
		document.getElementById('upload-left').style.backgroundColor = "#dd3d49";
		document.getElementById('upload-right').style.backgroundColor = "#ed4c59";
	} else {
		document.getElementById('upload-left').style.backgroundColor = "#ed4c59";
		document.getElementById('upload-right').style.backgroundColor = "#dd3d49";
	}
}