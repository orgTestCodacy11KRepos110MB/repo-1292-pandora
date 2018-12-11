(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{222:function(t,e,s){"use strict";s.r(e);var n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("Process 在 procfile.js 中进行定义，依靠如下语法：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("第二个参数除了传递一个相对路境外，也可以直接传递一个实现类的引用。最终，该语句会返回一个对象 "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/servicerepresentationchainmodifier.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceRepresentationChainModifier"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("我们可以通过 "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/servicerepresentationchainmodifier.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceRepresentationChainModifier"),s("OutboundLink")],1),t._v(" 完善对这个 Service 的定义。")]),t._v(" "),s("p",[t._v("下面通过一个简单的例子介绍全部的定义能力：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),s("p",[t._v("每个 Service 都是一个 Class，这个 Class 需要实现 0 个必选接口，和 4 个可选接口。")]),t._v(" "),s("p",[s("strong",[t._v("new (context: "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/servicecontextaccessor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceContextAccessor"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),s("p",[t._v("这个上面有不少的属性和方法，具体参考 "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/servicecontextaccessor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceContextAccessor"),s("OutboundLink")],1),t._v(" API。下面介绍几个常用的：")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),s("p",[t._v("你可以直接 new 你的实现类编写单元测试。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"自定义-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义-service","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义 Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"什么是-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-service","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是 Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Service 也是像 "),e("code",[this._v("process('x).entry('./y.js')")]),this._v(" 一样，往进程里定义 Node.js 程序，不过更结构化，提供下面的基础能力：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("标准的 "),s("code",[t._v("async start()")]),t._v(" 接口，用户可以异步的启动 Node.js 程序。")]),t._v(" "),s("li",[t._v("标准的 "),s("code",[t._v("async stop()")]),t._v(" 接口，用户可以优雅的下线 Node.js 程序（比如优雅下线 RPC 服务，从而避免出现服务闪断）。")]),t._v(" "),s("li",[t._v("结构化的日志管理、配置能力。")]),t._v(" "),s("li",[t._v("进程内的启动顺序（依赖关系）管理。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何获取-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何获取-service","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何获取 Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("一般用户可以通过 "),e("code",[this._v("require('dorapan').getService(serviceName)")]),this._v(" 获得。")]),this._v(" "),e("li",[this._v("Service 构造器中传入的 ServiceContext 亦有此方法。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何定义-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何定义-service","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何定义 Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("procfile.js")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pandora\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./service.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的 "),e("code",[this._v("pandora. service('serviceName', './service.js')")]),this._v(" 表示定义一个名字叫 "),e("code",[this._v("serviceName")]),this._v(" 的 Service，并定义该 Service 的实现在 "),e("code",[this._v("./service.js")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("procfile.js")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个叫 serviceA 的 Service ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二个参数为具体实现，可以是一个地址，或者一个实现类的引用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果不传第二参数，则是对已经定义的进行修改")]),t._v("\n  pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./ServiceA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重命名 Service")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不传参数则获取")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'renameIt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定分配到的进程，默认是 worker。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以用 pandora.defaultServiceCategory('worker') 修改默认取值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不传参数则获取")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'worker'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向 Service 配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不传参数则获取")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5555")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义依赖，下面的意思是，serviceX 必须先与此 Service 启动")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不传参数则获取")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceX'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 IPC-Hub 中发布该 Service，具体参考 《进程间通信》 章节")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// . publish(false) 为取消发布")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Drop（删除）该 Service 定义")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"serive-process-processname-string-的取值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serive-process-processname-string-的取值","aria-hidden":"true"}},[this._v("#")]),this._v(" serive().process(processName: string) 的取值")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("service().process(processName: string)")]),this._v(" 里面的 "),e("code",[this._v("processName")]),this._v(" 可以有如下的取值：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("某个已经定义了的进程名。")]),this._v(" "),e("li",[this._v("'weak-all'，所以已经激活了的进程（通过 entry 或者其他 Service），但自己不会激活任何进程。")]),this._v(" "),e("li",[this._v("'all'，全部定义了的进程。（会激活全部定义的进程，包括内置的默认定义，不建议使用）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"修改默认分配到-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改默认分配到-process","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改默认分配到 Process")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用上文提到的 "),e("code",[this._v("pandora.defaultServiceCategory()")]),this._v(" 修改。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultServiceCategory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'processName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何实现一个-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何实现一个-service","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何实现一个 Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("可选，构造器第一个参数为 ServiceContextAccessor 对象，该 Service 上下文对象，下面有介绍到。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("start(): Promise<void> | void")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("可选，生命周期方法，启动服务。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("stop?(): Promise<void> | void")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("可选，生命周期方法，停止服务。Pandora.js 在停止应用时给予 5 秒的时间窗口进行优雅退出。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"静态属性、方法约束为："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态属性、方法约束为：","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态属性、方法约束为：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("dependencies: string[]")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("可选，在类系统中，亦称之为 static 属性。定义某个 Service 的依赖。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"servicecontextaccessor-提供的主要接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servicecontextaccessor-提供的主要接口","aria-hidden":"true"}},[this._v("#")]),this._v(" ServiceContextAccessor 提供的主要接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"主要的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要的属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 主要的属性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("serviceName: string")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Service 的名字。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("config: any")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("针对 Service 的配置，可以在 "),e("code",[this._v(".service().config({ key: 'value' })")]),this._v(" 中给定。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("dependencies: { [depName: string]: Service }")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("所有依赖的 Service 实例。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("logger: ServiceLogger")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Service 专有的日志对象，会记录日志文件至 "),e("code",[this._v("${logsDir}/${appName}/service.log")]),this._v(" 。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"如何单元测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何单元测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何单元测试")])}],!1,null,null,null);r.options.__file="service_std.md";e.default=r.exports}}]);