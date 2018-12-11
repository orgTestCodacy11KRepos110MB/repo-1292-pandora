(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{225:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("操作系统：支持 macOS，Linux\n运行环境：建议选择 LTS 版本，最低要求 8.x")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("具体请移步 "),a("a",{attrs:{href:"http://www.midwayjs.org/pandora/zh-cn/guide/other/dashboard.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("可视化管理面板"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Pandora.js 可以直接安装在应用程序中，也可以安装在全局。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("使用初始化命令自动生成：")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("Cluster 方式是 Node.js Web Server 最常用的，我们默认会启动 CPU 数量的 Worker（不过你也可以改变这一默认值）。")]),t._v(" "),a("p",[t._v("使用初始化命令自动生成：")]),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("这种情况下， pandora 会进入应用的整个开发流程，一般情况下，我们会将 pandora 命令写到 scripts 段落中。")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),a("p",[t._v("第一个命令会以 package.json 中的 name 或目录最后一截作为应用名，这样，应用会按照 procfile.js 的定义默默启动，并在后台运行。")]),t._v(" "),a("p",[t._v("如果希望在前台启动（仅本地调试），可以使用 dev 命令。")]),t._v(" "),t._m(26),a("p",[t._v("当应用启动之后，可以通过 list 命令查看。")]),t._v(" "),t._m(27),a("p",[t._v("也可以将它停止运行。")]),t._v(" "),t._m(28),t._m(29),t._v(" "),a("p",[t._v("一般情况下，使用过 start 命令启动应用之后，Daemon 进程依旧会常驻在内存中，这个时候就需要手动 exit，将 Daemon 进程正常退出，注意，使用 kill 指令不一定能够有效的杀死 Daemon 进程。")]),t._v(" "),t._m(30)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速上手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"环境依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境依赖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"本节目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节目标","aria-hidden":"true"}},[this._v("#")]),this._v(" 本节目标")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("Pandora.js 最基础的 procfile.js 文件编写。")])]),this._v(" "),s("li",[s("p",[this._v("了解 Pandora.js 最基础的 start, stop, dev, exit, list 命令")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关于可视化管理面板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于可视化管理面板","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于可视化管理面板")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm i pandora -g  // 安装在全局\nnpm i pandora --save   // 安装在应用\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"生成-procfile-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-procfile-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 生成 Procfile.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Pandora.js 通过项目根目录下 "),s("code",[this._v("procfile.js")]),this._v(" 定义应用进程结构，所以你需要在项目根目录下增加一个 "),s("code",[this._v("procfile.js")]),this._v(" 文件。\n我们这章介绍最简单的 Fork 和 Cluster 方式，下面介绍的两种模式你只需要任选其一。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"fork-方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork-方式","aria-hidden":"true"}},[this._v("#")]),this._v(" Fork 方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Fork 方式是最简单的方式，只是简单拉起应用，类似于直接  "),s("code",[this._v("node app.js")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ pandora init ./app.js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app.js 是你的 Node.js 程序路径")]),t._v("\n? Which "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" you like to generate ? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Use arrow keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n❯ fork \n  cluster \n** The procfile.js was auto generated to location /xx/xx/procfile.js **\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后你就会得到一个默认 "),s("code",[this._v("procfile.js")]),this._v(" 你可以打开看一下，内容大致如下（隐去注释）：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pandora\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"cluster-方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster-方式","aria-hidden":"true"}},[this._v("#")]),this._v(" Cluster 方式")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ pandora init ./app.js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app.js 是你的 Node.js 程序路径")]),t._v("\n? Which "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" you like to generate ? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Use arrow keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  fork \n❯ cluster \n** The procfile.js was auto generated to location /xx/xx/procfile.js **\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后你就会得到一个默认 "),s("code",[this._v("procfile.js")]),this._v(" 你可以打开看一下，内容大致如下（隐去注释）：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  pandora\n  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认启动到 worker 进程分组")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 自定义 Worker 数量\n  pandora\n    .process('worker')\n    \n    // 修改 worker 进程分组启动 2 个 worker \n    // ，默认是 pandora.dev ? 1 : 'auto'。\n    // 意思就是 pandora dev 启动的话就不 Cluster \n    // ，如果 pandora start 启动的话就 Cluster 到 CPU 数量。\n    .scale(2); \n  */")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"通过应用本身脚本启停"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过应用本身脚本启停","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过应用本身脚本启停")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("// package.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pandora dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pandora start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stop"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pandora stop"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这个时候，你可以通过 "),s("code",[this._v("scripts")]),this._v(" 本身的机制来运行，比如")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm run dev // 本地启动\nnpm run start // 线上启动\nnpm run stop // 线上停止\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"全局模式下启停应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局模式下启停应用","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局模式下启停应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("pandora start [--name xxx] [path]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比如当前在应用根目录，应用为 "),s("code",[this._v("helloApp")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("pandora start\npandora start --name helloApp\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("pandora dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("pandora list\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("pandora stop\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("因为 pandora 全局模式下一般在后台启动，所以最好是部署到服务器上才这么做。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("pandora exit\n")])])])}],!1,null,null,null);r.options.__file="quickstart.md";s.default=r.exports}}]);