(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{227:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[t._v("#")]),t._v(" Router")]),t._v(" "),a("p",[t._v("I use Nuxt, so I don't do a lot of configuration when it comes to Vue Router. But there are some functions that I use that might be helpful to copy and paste down the road. (Use "),a("code",[t._v("$router")]),t._v(" without "),a("code",[t._v("this")]),t._v(" when using in the template html)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("this.$router.go(-1)")]),t._v(" will take you back to the previous route page that you were on")]),t._v(" "),a("li",[a("code",[t._v("this.$router.push('/')")]),t._v(" will take you to the root route")]),t._v(" "),a("li",[a("code",[t._v("this.$router.params.name")]),t._v(" will give you the name of the page/route you are in")]),t._v(" "),a("li",[a("code",[t._v("this.$router.query.id")]),t._v(" will give you the query value in the URL. Ex. returns "),a("code",[t._v("foo")]),t._v(" for "),a("code",[t._v("domail.com/pages?id=foo")])])]),t._v(" "),a("h2",{attrs:{id:"watch-route-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-route-change"}},[t._v("#")]),t._v(" Watch Route Change")]),t._v(" "),a("p",[t._v("It is helpful sometimes to watch whenever a route changes. Route changes does not reload a webpage, so if you want an action to run, or something to update whenever a route is changes, use the following code:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something when you switch from one page to another")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Or you can watch a change in the route query by using the following:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$route.query.id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something when the ?id=* changes in the URL")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);