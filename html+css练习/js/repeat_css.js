$(function() {
	var html_head = '<div class="head-box">';
	html_head +='<div class="icon_font">';
	html_head += '<small>';
	html_head += '<i class="iconfont icon-wxbbiaowang" ></i>';
	html_head += '格力物业管理';
	html_head += '</small>';
	html_head += '</div>';
	html_head += '<div class="menu">';
	html_head += '<a href="">App管理</a>';
	html_head += '<a href="">会员管理</a>';
	html_head += '<a href="">物业管理</a>';
	html_head += '<a href="">服务管理</a>';
	html_head += '<a href="">商城管理</a>';
	html_head += '<a href="">系统管理</a>';
	html_head += '</div>';
	html_head += '<div class="header">';
	html_head += '<img src="../img/美女.png" width="30px" height="30px" />';
	html_head += '<span class="user-info">';
	html_head += '<small>';
	html_head += 'Welcome,';
	html_head += '</small>';
	html_head += '<br />';
	html_head += 'Rose';
	html_head += '</span>';
	html_head += '</div>';
	html_head +='</div>';
	$("#one").html(html_head);
	var html_menu = ['<div class="sidebar">',
		'<div class="navbar-header">',
		'<ul class="nav nav-list">',
		'<li id="li">',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span >账户管理</span>',
		'</a>',
		'</li>',
		'<li>',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span>角色管理</span>',
		'</a>',
		'</li>',
		'<li>',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span>权限管理</span>',
		'</a>',
		'</li>',
		'<li>',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span>业务管理</span>',
		'</a>',
		'</li>',
		'<li>',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span>小区管理</span>',
		'</a>',
		'</li>',
		'<li>',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span>数据字典</span>',
		'</a>',
		'</li>',
		'<li>',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span>系统设置</span>',
		'</a>',
		'</li>',
		'<li>',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span>系统日志</span>',
		'</a>',
		'</li>',
		'<li>',
		'<a href="">',
		'<i class="iconfont icon-navigation"></i>',
		'<span>商家管理</span>',
		'</a>',
		'</li>',
		'</ul>',
		'<div class="sidebar-end">',
		'<i class="iconfont icon-zuo"></i>',
		'</div>',
		'</div>',
		'</div>'
	].join("");
	$("#two").html(html_menu);
	var menu_bar = '<div class="menu-center">';
	menu_bar += '<ul class="ul-style">';
	menu_bar += '<li>'
	menu_bar += '<i class="iconfont icon-shouye"></i>';
	menu_bar += '<a href="">首页</a>';
	menu_bar += '</li>';
	menu_bar += '<li>';
	menu_bar += '<i class="iconfont icon-you"></i>';
	menu_bar += '</li>';
	menu_bar += '<li>';
	menu_bar += '<a href="">Other pages</a>';
	menu_bar += '</li>';
	menu_bar += '<li>';
	menu_bar += '<i class="iconfont icon-you"></i>';
	menu_bar += '</li>';
	menu_bar += '<li>';
	menu_bar += '<a href="" id="black">Black page</a>';
	menu_bar += '</li>';
	menu_bar += '</ul>';
	menu_bar += '</div>';
//	console.log(menu_bar);
	$("#three").html(menu_bar);
});