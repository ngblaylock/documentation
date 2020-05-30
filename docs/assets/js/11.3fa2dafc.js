(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hosting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hosting"}},[t._v("#")]),t._v(" Hosting")]),t._v(" "),s("p",[t._v("Before anything else, you need to make sure that you go to the firebase console and start a new project.")]),t._v(" "),s("p",[t._v("Make sure that you have the firebase command line tools installed.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo npm install -g firebase-tools\n")])])]),s("h2",{attrs:{id:"log-in-to-firebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-firebase"}},[t._v("#")]),t._v(" Log in to Firebase.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("firebase login\n")])])]),s("p",[t._v("This will open up a webpage where you select your account and log in. Select "),s("code",[t._v("Allow")]),t._v(" to give Firebase the propper permissions. Once authenticated, you can go back to the code editor.")]),t._v(" "),s("h2",{attrs:{id:"initiate-your-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initiate-your-project"}},[t._v("#")]),t._v(" Initiate your Project")]),t._v(" "),s("p",[s("code",[t._v("cd")]),t._v(" into your root directory in the terminal, and type in the following command:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("firebase init\n")])])]),s("p",[t._v("This CLI will ask multiple questions. Follow the instructions there depending on what end result you are hoping for.")]),t._v(" "),s("h2",{attrs:{id:"run-in-development-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-in-development-mode"}},[t._v("#")]),t._v(" Run in Development Mode")]),t._v(" "),s("p",[t._v("This is necessary to run instead of the Live Server plugin because this will use the directory selected in your project as the root. Live server will use the workspace folder as the root, and mess up some links.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("firebase serve\n")])])]),s("h2",{attrs:{id:"deploy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[t._v("#")]),t._v(" Deploy")]),t._v(" "),s("p",[t._v("This is super easy. Just run the following command and away you go. The command line will give you a link")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("firebase deploy\n")])])]),s("h2",{attrs:{id:"connect-domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-domain"}},[t._v("#")]),t._v(" Connect Domain")]),t._v(" "),s("p",[t._v("If you want to deploy from soemthing other than "),s("code",[t._v("*.firebaseapp.com")]),t._v(" or "),s("code",[t._v("*.web.app")]),t._v(" you can connect to a specific domain. In the Hosting console in Firebase, click the button that says "),s("code",[t._v("Connect domain")]),t._v(".")]),t._v(" "),s("ol",[s("li",[t._v("Enter the domain")]),t._v(" "),s("li",[t._v("Verify ownership\n"),s("ol",[s("li",[t._v("Go to the Domain DNS page, and enter the resource record types provided")])])]),t._v(" "),s("li",[t._v("Go live. This might take up to a day, but typically takes 20 minutes, more or less.")])]),t._v(" "),s("h2",{attrs:{id:"redirects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirects"}},[t._v("#")]),t._v(" Redirects")]),t._v(" "),s("p",[s("code",[t._v('"type": 302')]),t._v(" is a temporary redirect, where "),s("code",[t._v('"type": 301')]),t._v(" is a permenant redirect. Probably default to "),s("code",[t._v("302")]),t._v(", but it may have some SEO issues.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redirects"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/about"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destination"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/contact"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destination"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);