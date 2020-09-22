(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{375:function(t,e,o){"use strict";o.r(e);var a=o(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"github"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),o("h2",{attrs:{id:"github-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#github-setup"}},[t._v("#")]),t._v(" GitHub Setup")]),t._v(" "),o("p",[t._v("In GitHub, go to the repository settings, make sure that the repository is public. If you are using Nuxt or Vue, and host the gh-pages from the "),o("code",[t._v("Master/docs")]),t._v(" folder.")]),t._v(" "),o("h2",{attrs:{id:"cname-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cname-file"}},[t._v("#")]),t._v(" CNAME file")]),t._v(" "),o("p",[t._v("Any custom domain needs a "),o("code",[t._v("CNAME")]),t._v(" file in the root directory. For Nuxt, put it in the "),o("code",[t._v("static")]),t._v(" folder. When it is in the static folder, it will automatically be pushed to the root directory when the website is generated. The domain informaiton should be the only text inside the "),o("code",[t._v("CNAME")]),t._v(" file as follows:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("<domain>.com\n")])])]),o("p",[t._v("or")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("<subdomain>.<domain>.com\n")])])]),o("h2",{attrs:{id:"domain-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#domain-setup"}},[t._v("#")]),t._v(" Domain Setup")]),t._v(" "),o("p",[t._v("Go to "),o("a",{attrs:{href:"https://domains.google.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("domains.google.com"),o("OutboundLink")],1),t._v(" add sign in. In the DNS tab, go to the Custom Resource Records section.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("TTL")]),t._v(" "),o("th",[t._v("Data")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("@")]),t._v(" "),o("td",[t._v("A")]),t._v(" "),o("td",[t._v("1h")]),t._v(" "),o("td",[t._v("185.199.108.153"),o("br"),t._v("185.199.109.153"),o("br"),t._v("185.199.110.153"),o("br"),t._v("185.199.111.153")])]),t._v(" "),o("tr",[o("td",[t._v("www")]),t._v(" "),o("td",[t._v("CNAME")]),t._v(" "),o("td",[t._v("1h")]),t._v(" "),o("td",[t._v("user.github.io.")])]),t._v(" "),o("tr",[o("td",[t._v("foo")]),t._v(" "),o("td",[t._v("CNAME")]),t._v(" "),o("td",[t._v("1h")]),t._v(" "),o("td",[t._v("user.github.io.")])])])]),t._v(" "),o("p",[t._v("In this example, the "),o("code",[t._v("@")]),t._v(" would be for "),o("code",[t._v("bar.com")]),t._v(", the "),o("code",[t._v("www")]),t._v(" would be for "),o("code",[t._v("www.bar.com")]),t._v(", and "),o("code",[t._v("foo")]),t._v(" would be for "),o("code",[t._v("foo.bar.com")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"gitignore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[t._v("#")]),t._v(" .gitignore")]),t._v(" "),o("p",[t._v("Here a some specific helpful gitignore items that I should include in my little projects.")]),t._v(" "),o("div",{staticClass:"language-gitignore extra-class"},[o("pre",{pre:!0,attrs:{class:"language-gitignore"}},[o("code",[o("span",{pre:!0,attrs:{class:"token entry string"}},[t._v("node_modules")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token entry string"}},[t._v(".DS_Store")]),t._v("\n")])])]),o("h2",{attrs:{id:"clone-private-repo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clone-private-repo"}},[t._v("#")]),t._v(" Clone Private Repo")]),t._v(" "),o("p",[t._v("It would be nice to know how SSH keys work, because then that would probably be easier, but until then, I found this hack online on how to clone a private repo using HTTPS:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://username:mygithubpassword@github.com/username/repository.git\n")])])]),o("p",[t._v("In this example, "),o("code",[t._v("username")]),t._v(" will be your github username, "),o("code",[t._v("mygithubpassword")]),t._v(" is your github password, and "),o("code",[t._v("repository")]),t._v(" is the repository that you are cloning. If you are using GitHub Desktop, then you don't have to worry about this, but on Linux, you can't use GitHub Desktop, so this is the workaround. Another way of doing it is to just make your repository public, clone it, then reset it to private, but that is kinda dumb.")])])}),[],!1,null,null,null);e.default=s.exports}}]);