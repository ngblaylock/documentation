(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{361:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"security-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-rules"}},[t._v("#")]),t._v(" Security Rules")]),t._v(" "),s("p",[t._v("Security Rules is what makes Firebase truly secure. Only the project owner can log in and change these. They are also tricky because they are not written in JavaScript, so this page will be more of a code snippet resource to use")]),t._v(" "),s("h2",{attrs:{id:"expire-on-date-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expire-on-date-default"}},[t._v("#")]),t._v(" Expire on Date (default)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("rules_version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nservice cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firestore "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("databases"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("documents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This rule allows anyone on the internet to view, edit, and delete")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// all data in your Firestore database. It is useful for getting")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// started, but it is configured to expire after 30 days because it")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// leaves your app open to attackers. At that time, all client")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// requests to your Firestore database will be denied.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Make sure to write security rules for your app before that time, or else")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your app will lose access to your Firestore database")]),t._v("\n    match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      allow read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" write"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"allow-read-write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allow-read-write"}},[t._v("#")]),t._v(" Allow Read Write")]),t._v(" "),s("p",[t._v("This is a dangerous one, but this will allow anyone to read or write regardless of whether they are logged in or not.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("rules_version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nservice cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firestore "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("databases"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("documents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      allow read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" write\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"allow-read-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allow-read-only"}},[t._v("#")]),t._v(" Allow Read Only")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("rules_version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nservice cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firestore "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("databases"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("documents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      allow read\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"authenticated-users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authenticated-users"}},[t._v("#")]),t._v(" Authenticated Users")]),t._v(" "),s("p",[t._v("You can use the "),s("code",[t._v("request.auth.uid")]),t._v(" to get the currently authenticated user. This example only cares that the user is anyone logged in, and gives them permission to read and write anything.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("rules_version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nservice cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firestore "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("databases"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("documents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      allow read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" write"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"helpful-explanations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helpful-explanations"}},[t._v("#")]),t._v(" Helpful Explanations")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://softauthor.com/firestore-security-rules",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raja Tamil"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.ericdecanini.com/2018/02/03/understanding-cloud-firestore-security-rules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eric Decanini"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://fireship.io/snippets/firestore-rules-recipes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jeff Delaney"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);