"use strict";(self.webpackChunkvspacecode_github_io=self.webpackChunkvspacecode_github_io||[]).push([[479],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=u(a),d=i,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2054:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),o=["components"],r={id:"major-mode",title:"Major Mode"},s=void 0,u={unversionedId:"major-mode",id:"major-mode",title:"Major Mode",description:"Major mode offers dynamic menu and functions based on the active buffer.",source:"@site/docs/major-mode.md",sourceDirName:".",slug:"/major-mode",permalink:"/docs/major-mode",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/major-mode.md",tags:[],version:"current",frontMatter:{id:"major-mode",title:"Major Mode"},sidebar:"docs",previous:{title:"Menu Customization",permalink:"/docs/menu-customization"},next:{title:"Bonus",permalink:"/docs/bonus"}},m={},p=[{value:"Agda",id:"agda",level:2},{value:"Clojure",id:"clojure",level:2},{value:"Coq",id:"coq",level:2},{value:"C++",id:"c",level:2},{value:"CUDA-C++",id:"cuda-c",level:2},{value:"C#",id:"c-1",level:2},{value:"Dart/Flutter",id:"dartflutter",level:2},{value:"Go",id:"go",level:2},{value:"F#",id:"f",level:2},{value:"Java",id:"java",level:2},{value:"Julia",id:"julia",level:2},{value:"Markdown",id:"markdown",level:2},{value:"Pascal",id:"pascal",level:2},{value:"PHP",id:"php",level:2},{value:"Python",id:"python",level:2},{value:"Ruby",id:"ruby",level:2},{value:"Rust",id:"rust",level:2},{value:"LaTeX",id:"latex",level:2}],c={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Major mode offers dynamic menu and functions based on the active buffer.\nYou can access key bindings specific to the current major mode by pressing ",(0,l.kt)("inlineCode",{parentName:"p"},"<spc> m")," or ",(0,l.kt)("inlineCode",{parentName:"p"},",")," if you want to save one keystroke."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If ",(0,l.kt)("inlineCode",{parentName:"p"},",")," isn't bound, you might need to update your settings.\nYou can add the necessary keybindings to your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.json")," by pressing ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+p"),' and running the command "VSpaceCode: Configure Default Settings".\nMore information can be found in the ',(0,l.kt)("a",{parentName:"p",href:"./"},"Installation")," for instructions."))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The default configuration uses ",(0,l.kt)("inlineCode",{parentName:"p"},","),' as the shortcut to major mode, that will override the vim "find previous match" after a ',(0,l.kt)("inlineCode",{parentName:"p"},"f{character}"),".\nYou can follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"./troubleshooting#-cannot-find-previous-match"},"Troubleshooting")," to remove or modify this shortcut."))),(0,l.kt)("p",null,"For example, you can press ",(0,l.kt)("inlineCode",{parentName:"p"},"<spc> m x b")," to make the text bold in a markdown buffer."),(0,l.kt)("p",null,"To find the active language mode of your current buffer, you can look at the bottom right of the status bar."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"major mode position",src:a(237).Z,width:"875",height:"463"})),(0,l.kt)("p",null,"The major mode is using which-key's conditional bindings. If you want to modify the default bindings, check out the conditional bindings ",(0,l.kt)("a",{parentName:"p",href:"./whichkey/extra#conditional-bindings-experimental"},"docs"),"."),(0,l.kt)("p",null,"The vast majority of major mode specific key bindings will require the installation of additional extensions in order to work properly.\nThe section below lists all the extensions required by each major mode."),(0,l.kt)("p",null,"In the following you can see all the currently available major modes.\nIf your favorite one is missing, please ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/VSpaceCode/VSpaceCode/blob/master/CONTRIBUTING.md"},"contribute"),"!"),(0,l.kt)("h2",{id:"agda"},"Agda"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=banacorn.agda-mode"},"agda-mode"))),(0,l.kt)("h2",{id:"clojure"},"Clojure"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=betterthantomorrow.calva"},"Calva"))),(0,l.kt)("p",null,"Documentation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://practical.li/vspacecode/"},"Practicalli VSpaceCode")," install & user guide for VSpaceCode and Calva")),(0,l.kt)("h2",{id:"coq"},"Coq"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=maximedenes.vscoq"},"VSCoq"))),(0,l.kt)("h2",{id:"c"},"C++"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"},"C/C++ Extension"))),(0,l.kt)("h2",{id:"cuda-c"},"CUDA-C++"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"},"C/C++ Extension")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=NVIDIA.nsight-vscode-edition"},"Nsight Visual Studio Code Edition"))),(0,l.kt)("h2",{id:"c-1"},"C","#"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"},"C#"))),(0,l.kt)("h2",{id:"dartflutter"},"Dart/Flutter"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code"},"Dart")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter"},"Flutter"))),(0,l.kt)("h2",{id:"go"},"Go"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=golang.Go"},"Go"))),(0,l.kt)("h2",{id:"f"},"F","#"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp"},"Ionide F#"))),(0,l.kt)("h2",{id:"java"},"Java"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=redhat.java"},"Language support for Java \u2122 for Visual Studio Code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug"},"Debugger for Java")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test"},"Test Runner for Java"))),(0,l.kt)("p",null,"These extensions are all included in the ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack"},"Extension Pack for Java"),"."),(0,l.kt)("p",null,"Documentation: ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/java"},"Java in Visual Studio Code")),(0,l.kt)("h2",{id:"julia"},"Julia"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=julialang.language-julia"},"Julia"))),(0,l.kt)("h2",{id:"markdown"},"Markdown"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one"},"Markdown All in One"))),(0,l.kt)("h2",{id:"pascal"},"Pascal"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Wosi.omnipascal"},"OmniPascal"))),(0,l.kt)("h2",{id:"php"},"PHP"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client"},"PHP Intelephense"))),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-python.python"},"Python"))),(0,l.kt)("h2",{id:"ruby"},"Ruby"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby"},"Ruby")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=castwide.solargraph"},"Ruby Solargraph"))),(0,l.kt)("h2",{id:"rust"},"Rust"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer"},"rust-analyzer"))),(0,l.kt)("h2",{id:"latex"},"LaTeX"),(0,l.kt)("p",null,"Required extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop"},"LaTeX Workshop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=tecosaur.latex-utilities"},"LaTeX Utilities"))))}d.isMDXComponent=!0},237:function(e,t,a){t.Z=a.p+"assets/images/major_mode-ff1f42693eb570420271c9c5a05c75b9.png"}}]);