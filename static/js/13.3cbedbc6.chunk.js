(this.webpackJsonpreact18=this.webpackJsonpreact18||[]).push([[13],{140:function(n,e,t){"use strict";t.r(e);var a=t(271),r=t(269),c=t(9),l=t(1),i=window,o=i.$fn,u=i.$lazy,s=i.$http,b=i.$,j=u.load((function(){return t.e(1).then(t.bind(null,273))})),f=u.load((function(){return t.e(0).then(t.bind(null,272))})),d=u.load((function(){return t.e(3).then(t.bind(null,274))})),h=u.load((function(){return t.e(4).then(t.bind(null,276))})),O=[{label:"\u662f",value:"1"},{label:"\u5426",value:"0"}],p={title:"",path:"",component:"",all:"0"},m=function(n,e){return n=o.isString(n)?JSON.parse(n):n,e.current=o.copy(n),n};e.default=function(){var n=Object(c.useRef)(),e=Object(c.useState)([]),t=Object(r.a)(e,2),i=t[0],u=t[1],y=Object(c.useRef)([]),x=Object(c.useState)(0),v=Object(r.a)(x,2),C=v[0],k=v[1],A=o.query().name,g=Object(c.useCallback)((function(){return s.local("".concat(A,"/menu"),{md:1}).then((function(n){n=m(n,y),o.hasArray(n)||n.push(o.copy(p)),u(n)}))}),[A]);Object(c.useEffect)((function(){g()}),[g]);var w=Object(c.useCallback)((function(){n.current.click()}),[]),N=Object(c.useCallback)((function(){u(o.copy(y.current))}),[]),S=Object(c.useCallback)((function(){var n=function(n){return function n(e){e.forEach((function(e){delete e.open,o.hasArray(e.children)?n(e.children):delete e.children}))}(n),n}(i);if(o.hasArray(n)){var e=JSON.stringify(n),t=s.encode(e);s.post("file",{param:{name:"/".concat(A,"/menu"),content:e,encode:t}}).then((function(n){}))}}),[i,A]),$=Object(c.useCallback)((function(n){n.open=!n.open,u(Object(a.a)(i))}),[i]),I=Object(c.useCallback)((function(n,e,t){var a=t||{},r=a.p,c=a.i;n.splice(e,1),o.hasArray(r)&&0===n.length&&r.splice(c,1),k((function(n){return n+1}))}),[]),E=function(n){var e=n.data,t=n.row,a=n.index;n.up?(e.splice(a,1),e.splice(a-1,0,t)):(e.splice(a,1),e.splice(a+1,0,t)),k((function(n){return n+1}))},J=Object(c.useCallback)((function(n,e,t){e[t]=n,o.local("json",i),u(i)}),[i]),F=function(n){var e=n.data,t=n.index;n.after&&(t+=1),e.splice(t,0,o.copy(p)),k((function(n){return n+1}))},R=function n(e){var t=e.data,r=e.className,c=e.index,i=void 0===c?0:c,s=e.childClassName;return Object(l.jsx)("ul",{className:"".concat(b.css(r)," ").concat(b.css(s)),children:o.hasArray(t)&&t.map((function(e,r){var c=e.title,s=e.path,b=e.component,j=e.all,m=e.children,y=e.open;return Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h6",{children:"\u6807\u9898"}),": ",Object(l.jsx)(d,{value:c,onChange:function(n){return J(n,e,"title")}}),Object(l.jsx)("h6",{children:"\u8def\u7531\u540d"}),": ",Object(l.jsx)(d,{value:s,onChange:function(n){return J(n,e,"path")}}),Object(l.jsx)("h6",{children:"\u7ec4\u4ef6:"}),Object(l.jsx)(d,{value:b,onChange:function(n){return J(n,e,"component")}}),0===i&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h6",{children:"\u7279\u6b8a:"}),Object(l.jsx)(h,{name:"all-"+i+r,value:j,data:O,onChange:function(n){return J(n,e,"all")}})]}),Object(l.jsxs)("div",{className:"fx",children:[o.hasArray(m)&&Object(l.jsx)(f,{toggle:y,label:y?"\u6536\u7f29":"\u5c55\u5f00",onClick:$.bind(null,e)}),(y&&!o.hasArray(m)||!o.hasArray(m))&&Object(l.jsx)(f,{label:"\u6dfb\u52a0",onClick:function(){var n="children";Array.isArray(e[n])||(e[n]=[]),e[n].push(o.copy(p)),e.open=!0,u((function(n){return Object(a.a)(n)}))}}),Object(l.jsx)(f,{label:"\u540e\u7f6e",onClick:F.bind(null,{data:t,index:r,after:1})}),Object(l.jsx)(f,{label:"\u524d\u7f6e",onClick:F.bind(null,{data:t,index:r})}),!y&&Object(l.jsxs)(l.Fragment,{children:[r>0&&Object(l.jsx)(f,{label:"\u4e0a\u79fb",onClick:E.bind(null,{data:t,row:e,index:r,up:1})}),r<t.length-1&&Object(l.jsx)(f,{label:"\u4e0b\u79fb",onClick:E.bind(null,{data:t,row:e,index:r})})]}),Object(l.jsx)(f,{label:"\u5220\u9664",onClick:I.bind(null,t,r)})]})]}),o.hasArray(m)&&Object(l.jsx)(n,{data:m,index:i+1,childClassName:"mt10 ".concat(y?"":"dn")})]},r)}))})};return Object(l.jsx)(j,{header:Object(l.jsxs)("header",{className:"h50 bbor1 plr20 f13",children:[Object(l.jsx)(f,{label:"\u6253\u5f00",onClick:w}),Object(l.jsx)(f,{label:"\u91cd\u7f6e",onClick:N,className:"ml10"}),Object(l.jsx)(f,{className:"ml10 ".concat(o.hasArray(i)?"dn":""),label:"\u6dfb\u52a0",onClick:function(){i.push(o.copy(p)),u(Object(a.a)(i))}}),Object(l.jsx)(f,{label:"\u4fdd\u5b58",onClick:S,className:"ml10"}),Object(l.jsx)(f,{label:"\u8fd4\u56de",onClick:function(){o.back(),window.$data={}},className:"ml10"}),Object(l.jsx)("input",{ref:n,type:"file",onChange:function(n){s.uploader(n).then((function(e){n.target.value="",u(m(e,y))}))}})]}),children:Object(l.jsx)(R,{className:"json-form",data:i},C)})}},267:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(268);function r(n,e){if(n){if("string"===typeof n)return Object(a.a)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(a.a)(n,e):void 0}}},268:function(n,e,t){"use strict";function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}t.d(e,"a",(function(){return a}))},269:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(267);function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],a=!0,r=!1,c=void 0;try{for(var l,i=n[Symbol.iterator]();!(a=(l=i.next()).done)&&(t.push(l.value),!e||t.length!==e);a=!0);}catch(o){r=!0,c=o}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return t}}(n,e)||Object(a.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},271:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(268);var r=t(267);function c(n){return function(n){if(Array.isArray(n))return Object(a.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(r.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);