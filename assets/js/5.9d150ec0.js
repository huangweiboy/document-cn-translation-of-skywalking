(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{255:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),a("ul",[a("li",[t._v("在"),a("code",[t._v("layout.ConversionPattern")]),t._v("中设置 "),a("code",[t._v("%T")]),t._v("来展示traceid ( 在 2.0-2016版本中, 你应该设置为 %x, "),a("a",{attrs:{href:"https://github.com/wu-sheng/sky-walking/issues/77",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么改变配置，请参考相关issue?"),a("OutboundLink")],1),t._v(" )")])]),t._v(" "),t._m(4),t._m(5)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用 maven 和 gradle 依赖相应的工具包")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.skywalking"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("apm-toolkit-log4j-1.x"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{project.release.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("配置layout")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[this._v("log4j.appender.CONSOLE.layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[this._v("TraceIdPatternLayout")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[this._v("log4j.appender.CONSOLE.layout.ConversionPattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[this._v("%d [%T] %-5p %c{1}:%L - %m%n")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("当你使用"),s("code",[this._v("-javaagent")]),this._v("参数激活sky-walking的探针, 如果当前上下文中存在traceid，log4j将在输出"),s("strong",[this._v("traceId")]),this._v("。如果探针没有被激活，将输出"),s("code",[this._v("TID: N/A")]),this._v(".")])])}],!1,null,null,null);s.default=n.exports}}]);