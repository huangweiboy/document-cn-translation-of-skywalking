(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{408:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"组件库设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件库设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件库设置")]),t._v(" "),s("p",[t._v("组件库设置文件是关于如何在要监控的应用中使用自有的或第三方库的介绍.")]),t._v(" "),s("p",[t._v("在代理或 SDK 中, 无论库名是以 ID 形式还是字符串(文本, 如 SpringMVC)形式进行收集的,\n收集器都会将数据格式化为 ID, 以提供更好的性能和更低的存储需求.")]),t._v(" "),s("p",[t._v("同时, 收集器还会根据组件库来推测远程服务类型, 比如: 如果组件库是 MySQL 驱动库, 那么\n收集器则会推测远程服务是一个 MySQL 服务器.")]),t._v(" "),s("p",[t._v("基于以上两方面原因, 收集器要求在组件库设置文件中必须要有以下两部分配置:")]),t._v(" "),s("ol",[s("li",[t._v("组件库 ID, 名称以及语言.")]),t._v(" "),s("li",[t._v("基于本地库的远程服务器映射.")])]),t._v(" "),s("p",[s("strong",[t._v("所有组件名称及 ID 都必须在组件库设置文件中定义.")])]),t._v(" "),s("h2",{attrs:{id:"组件库-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件库-id","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件库 ID")]),t._v(" "),s("p",[t._v("组件库 ID 定义了在要监控的应用程序中使用到的所有组件库的名称和 ID\n这是一种双向映射, 代理或 SDK 可以在上行数据中使用 ID 值来代表对应的组件.")]),t._v(" "),s("ul",[s("li",[t._v("名称: 在代理和用户界面中使用的组件名称")]),t._v(" "),s("li",[t._v("id: 唯一标识. 所有使用过的 ID 在发布后都将会被保留(不可再利用)")]),t._v(" "),s("li",[t._v("语言: 编程语言可能使用了这个组件, 如果有多种语言应该使用 "),s("code",[t._v(",")]),t._v(" 分隔")])]),t._v(" "),s("h3",{attrs:{id:"id-规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#id-规则","aria-hidden":"true"}},[t._v("#")]),t._v(" ID 规则")]),t._v(" "),s("ul",[s("li",[t._v("Java 和多种语言共享的: (0, 3000]")]),t._v(" "),s("li",[t._v(".NET 平台保留: (3000, 4000]")]),t._v(" "),s("li",[t._v("Node.js 平台保留: (4000, 5000]")]),t._v(" "),s("li",[t._v("Go 语言保留: (5000, 6000]")]),t._v(" "),s("li",[t._v("PHP 语言保留: (6000, 7000]")]),t._v(" "),s("li",[t._v("Python 语言保留: (7000, 8000]")])]),t._v(" "),s("p",[t._v("示例:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Tomcat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("languages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Java\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HttpClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("languages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#,Node.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Dubbo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("languages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Java\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("H2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("languages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Java\n")])])]),s("h2",{attrs:{id:"远程服务器映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程服务器映射","aria-hidden":"true"}},[t._v("#")]),t._v(" 远程服务器映射")]),t._v(" "),s("p",[t._v("远程服务类型会通过本地库进行推断. 此推断映射是基于组件库名称的.")]),t._v(" "),s("ul",[s("li",[t._v("键: 客户端组件库名称")]),t._v(" "),s("li",[t._v("值: 服务端组件名称")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Component-Server-Mappings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Jedis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Redis\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("StackExchange.Redis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Redis\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Redisson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Redis\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Lettuce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Redis\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Zookeeper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Zookeeper\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SqlClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SqlServer\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Npgsql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PostgreSQL\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MySqlConnector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mysql\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("EntityFrameworkCore.InMemory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" InMemoryDatabase\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);