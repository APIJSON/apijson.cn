(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(e,t,s){"use strict";s.r(t);var a=s(41),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),s("h2",{attrs:{id:"mysql-时区引起的乱码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-时区引起的乱码"}},[e._v("#")]),e._v(" MYSQL 时区引起的乱码")]),e._v(" "),s("p",[e._v("操作系统：win10\n数据库：mysql8")]),e._v(" "),s("p",[e._v("程序运行后，有可能会出现以下报错：")]),e._v(" "),s("div",{staticClass:"language-doc extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more than one time zone.\n")])])]),s("p",[e._v("解决步骤为：\n进入 C 盘 -> \"查看\"，勾选“隐藏的项目”，也就是显示隐藏文件夹。-> 打开 C:\\ProgramData\\MySQL\\MySQL Server 8.0\\my.ini。->搜索字符“[mysqld]”，并且在这字符串下面添加“default-time-zone='+08:00'”。->保存，重启 mysql8。")])])}),[],!1,null,null,null);t.default=r.exports}}]);