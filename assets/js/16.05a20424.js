(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{288:function(t,a,e){"use strict";e.r(a);var r=e(0),n=Object(r.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"现象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现象","aria-hidden":"true"}},[t._v("#")]),t._v(" 现象")]),t._v(" "),e("p",[t._v("maven编译加载protoc-plugins插件产生如下错误：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[ERROR] Failed to execute goal org.xolstice.maven.plugins:protobuf-maven-plugin:0.5.0:compile-custom (default) on project apm-network: Unable to copy the file to \\incubator-skywalking\\apm-network\\target\\protoc-plugins: \\incubator-skywalking\\apm-network\\target\\protoc-plugins\\protoc-3.3.0-linux-x86_64.exe (另一个程序正在使用此文件，进程无法访问。) -> [Help 1]\n")])])]),e("h3",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),e("p",[t._v("Protobuf编译器依赖于glibc环境，部分linux操作系统未安装或未升级该函数库会产生该问题。")]),t._v(" "),e("h3",{attrs:{id:"解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),e("p",[t._v("检查并升级最新版本glibc库，若使用容器镜像环境推荐含有最新版本glibc的alpine系统。请参考官方手册：http://www.gnu.org/software/libc/documentation.html")])])}],!1,null,null,null);a.default=n.exports}}]);