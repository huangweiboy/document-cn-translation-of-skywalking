(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{228:function(t,i,a){"use strict";a.r(i);var s=a(0),e=Object(s.a)({},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("观测分析平台(Observability Analysis Platform, OAP)是一个从 SkyWalking 6.x 开始出现的新概念.\nOAP 取代了整个旧的 SkyWalking 后端. OAP 的能力如下所述.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("使用集成方案的同时, SkyWalking 还提供了可视化集成来对追踪和日志进行绑定, 这是通过使用 trace id 和 span id 实现的.")]),t._v(" "),a("p",[t._v("所有的服务都是通过 gRPC 和 HTTP 协议实现, 使得未来集成那些尚未支持的生态系统更加容易.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("OAP 中的链路追踪有两种处理.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("同样的, SkyWalking 接收来自其他系统的追踪数据格式, 如 Zipkin, Jeager, OpenCensus.\n这些格式也可以由以上两种方式进行处理.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("OAP 中的度量指标是 6.x 版本中全新的功能. 通过连接的节点之间的度量, 构建分布式系统的观测数据, 且不需要追踪数据.")]),t._v(" "),a("p",[t._v("度量数据在 OAP 集群中以流的模式进行聚合. 参考"),a("router-link",{attrs:{to:"./oal.html"}},[t._v("观测分析语言")]),t._v(", 该文介绍了如何使用简单的脚本形式进行数据聚合和分析.")],1)])},[function(){var t=this.$createElement,i=this._self._c||t;return i("h1",{attrs:{id:"观测分析平台-observability-analysis-platform-oap"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#观测分析平台-observability-analysis-platform-oap","aria-hidden":"true"}},[this._v("#")]),this._v(" 观测分析平台(Observability Analysis Platform, OAP)")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h2",{attrs:{id:"oap-的能力"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#oap-的能力","aria-hidden":"true"}},[this._v("#")]),this._v(" OAP 的能力")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("OAP 从多种数据源接收数据, 这些数据分为两大类, "),i("strong",[this._v("链路追踪")]),this._v("和"),i("strong",[this._v("度量指标")]),this._v(".")])},function(){var t=this.$createElement,i=this._self._c||t;return i("ul",[i("li",[i("strong",[this._v("链路追踪")]),this._v(". 包括 SkyWalking 原生数据格式, Zipkin V1 和 V2 数据格式, 以及 Jaeger 数据格式.")]),this._v(" "),i("li",[i("strong",[this._v("度量指标")]),this._v(". SkyWalking 集成了服务网格平台, 如 Istio, Envoy 和 Linkerd, 并在数据面板和控制面板进行观测.\n此外, SkyWalking 原生代理还可以运行在度量模式, 这极大提升了性能.")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h2",{attrs:{id:"oap-中的链路追踪"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#oap-中的链路追踪","aria-hidden":"true"}},[this._v("#")]),this._v(" OAP 中的链路追踪")])},function(){var t=this.$createElement,i=this._self._c||t;return i("ol",[i("li",[this._v("在 SkyWalking 5.x 中传统的方式. 格式化追踪数据. OAP 通过分析数据段获得度量指标, 并将度量数据推送到聚合流.")]),this._v(" "),i("li",[this._v("仅仅将追踪视为某种日志, 只提供存储和可视化能力.")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h2",{attrs:{id:"oap-中的度量指标"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#oap-中的度量指标","aria-hidden":"true"}},[this._v("#")]),this._v(" OAP 中的度量指标")])}],!1,null,null,null);i.default=e.exports}}]);