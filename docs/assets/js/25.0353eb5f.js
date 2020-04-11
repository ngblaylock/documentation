(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{227:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nuxt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt"}},[t._v("#")]),t._v(" Nuxt")]),t._v(" "),a("h2",{attrs:{id:"setup-nuxt-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-nuxt-project"}},[t._v("#")]),t._v(" Setup Nuxt Project")]),t._v(" "),a("p",[t._v("Go to the command line and "),a("code",[t._v("cd")]),t._v(" into the folder where you want the project to be located. Enter the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx create-nuxt-app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("project-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Use Bootstrap-Vue")]),t._v(" "),a("li",[t._v("Use Prettier rather than ES Lint.")])]),t._v(" "),a("h2",{attrs:{id:"cloned-nuxt-project-from-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloned-nuxt-project-from-github"}},[t._v("#")]),t._v(" Cloned Nuxt Project from GitHub")]),t._v(" "),a("p",[t._v("When using a GitHub repository for your Nuxt project, it will ignore the dependencies in the "),a("code",[t._v(".gitattributes")]),t._v(" file by default. This is so you don't have to store all those files that are easily installed on GitHub. This means that when you clone the repository back down to another computer the dependencies required to run "),a("code",[t._v("npm run dev")]),t._v(" will be missing and will not work. In the Nuxt "),a("code",[t._v("README.md")]),t._v(" file it says to run "),a("code",[t._v("npm run install")]),t._v(", but this will not work and will give you an error. I believe this is an issue on Nuxt, because running the fillowing command will work much better. Note that there is no "),a("code",[t._v("run")]),t._v(" in the command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("h2",{attrs:{id:"customize-bootstrap-with-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-bootstrap-with-sass"}},[t._v("#")]),t._v(" Customize Bootstrap with Sass")]),t._v(" "),a("p",[t._v("In order to use Sass in your nuxt project, you need to install in the "),a("code",[t._v("node-sass")]),t._v(" and "),a("code",[t._v("sass-loader")]),t._v(" webpack loaders.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev node-sass sass-loader\n")])])]),a("p",[t._v("When changing default style with Nuxt:")]),t._v(" "),a("ol",[a("li",[t._v("Create a "),a("code",[t._v("style/custom.scss")]),t._v(" file in the "),a("code",[t._v("assets")]),t._v(" directory.")]),t._v(" "),a("li",[t._v("Create a "),a("code",[t._v("style/_custom-vars.scss")]),t._v(" file in the "),a("code",[t._v("assets")]),t._v(" directory. This should hold all variables you want to use in the "),a("code",[t._v("*.vue")]),t._v(" files in the "),a("code",[t._v("<style>")]),t._v(" tag.")]),t._v(" "),a("li",[t._v("Inside the "),a("code",[t._v("style/custom.scss")]),t._v(" file, enter the following:")])]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// THIS INCLUDES ALL THE CSS OVERRIDES")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom-vars"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// THIS WILL INCLUDE THE BOOTSTRAP CSS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../node_modules/bootstrap/scss/bootstrap.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WRITE ANY OTHER CSS HERE YOU WANT GLOBALLY IN THE PROJECT")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Inside the "),a("code",[t._v("nuxt.config.js")]),t._v(" file, include the following:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/assets/style/custom.scss'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// THIS LOADS THE CUSTOM & BOOTSTRAP CSS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nmodules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Doc: https://bootstrap-vue.js.org")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap-vue/nuxt'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// THIS INCLUDES THE JAVASCRIPT NECESSARY FOR THE MOBILE NAVBAR, MODAL, ETC.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nbootstrapVue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n bootstrapCSS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// THIS RESOLVES DUPLICATE BOOTSTRAP CSS, IF INCLUDED IN THE CUSTOM.SCSS")]),t._v("\n bootstrapVueCSS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// THIS RESOLVES DUPLICATE BOOTSTRAP CSS, IF INCLUDED IN THE CUSTOM.SCSS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("If you need to use variables inside a "),a("code",[t._v("*.vue")]),t._v(" file, you can import just the variables with the following:")])]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~assets/style/_custom-vars.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// or: @import "~assets/style/custom-vars";')]),t._v("\n")])])]),a("h2",{attrs:{id:"generate-nuxt-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-nuxt-project"}},[t._v("#")]),t._v(" Generate Nuxt project")]),t._v(" "),a("p",[t._v("By default, the Nuxt project will be output to the "),a("code",[t._v("dist")]),t._v(" folder. To change the output directory for your nuxt project, go to the "),a("code",[t._v("nuxt.config.js")]),t._v(" file, add the following line:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("generate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("This will build a page to the docs folder, which GitHub can host from the master component. More on this later. In the terminal, enter the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run generate\n")])])]),a("p",[t._v("This will build all of the files into the docs folder in the project. From here, simply push the GitHub repository to your account.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Using Dynamic links with the generate command will not give you the pages you expect. The only way to navigate to those links is by clicking through the application. You cannot simply copy and paste the URL and share it with someone. It will return a 404 page error. If you need dynamic data that works with the generate command, consider using URL Queries.")])]),t._v(" "),a("h2",{attrs:{id:"page-transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-transitions"}},[t._v("#")]),t._v(" Page Transitions")]),t._v(" "),a("p",[t._v("Use page transitions to keep things fresh. Simply add this code to the css file. This does not work if you are going to use page queries instead of dynamic links.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".page-enter-active, .page-leave-active")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.2s ease-in-out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".page-enter, .page-leave-active")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"domain-hookup-with-github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-hookup-with-github-pages"}},[t._v("#")]),t._v(" Domain Hookup with GitHub Pages")]),t._v(" "),a("h3",{attrs:{id:"github-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-setup"}},[t._v("#")]),t._v(" GitHub Setup")]),t._v(" "),a("p",[t._v("In GitHub, go to the repository settings, make sure that the repository is public, and host the gh-pages from the "),a("code",[t._v("Master/docs")]),t._v(" folder.")]),t._v(" "),a("h3",{attrs:{id:"host-as-subpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-as-subpage"}},[t._v("#")]),t._v(" Host as subpage")]),t._v(" "),a("p",[t._v("When working with subpages on Nuxt, the root folder for the router needs to be changed for page navigation to work correctly. Enter the following in nuxt.config.js:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/nuxt-sub/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ngenerate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);