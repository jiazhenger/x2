(this.webpackJsonpreact18=this.webpackJsonpreact18||[]).push([[8],{135:function(e,n,t){"use strict";t.r(n);var c=t(271),a=t(269),l=t(9),r=t(1),s=window,i=s.$fn,o=s.$lazy,j=s.$http,u=s.$,d=o.load((function(){return t.e(1).then(t.bind(null,273))})),b=o.load((function(){return t.e(0).then(t.bind(null,272))})),h=o.load((function(){return t.e(3).then(t.bind(null,274))})),x=o.load((function(){return t.e(4).then(t.bind(null,276))})),O=[{label:"\u662f",value:"1"},{label:"\u5426",value:"0"}],f=[{label:"CSS1",value:"1"},{label:"CSS2",value:"2"},{label:"CSS3",value:"3"}],m=[{title:"",value:"",html:"",fixed:"1",def:"0"}],v=[{keyword:"",value:""}],p={title:"",intro:"",keyword:"",extend:"1",version:"1",common:"1"},y={field:"",content:{title:"",list:[p]}},C=function(e,n,t,c){var a=[];if(e=i.isString(e)?JSON.parse(e):e,i.hasObject(e))for(var l in e){var r=e[l];c&&e[l].list.forEach((function(e){e.keyword===c&&(e.open=!0)})),a.push({field:l,content:r,open:Boolean(t)})}else a=e;return n.current=i.copy(a),a};n.default=function(){var e=Object(l.useRef)(),n=Object(l.useState)([]),t=Object(a.a)(n,2),s=t[0],o=t[1],g=Object(l.useRef)([]),N=Object(l.useState)(0),k=Object(a.a)(N,2),w=k[0],A=k[1],S=i.query(),F=S.name,E=S.keyword,I=E?decodeURIComponent(E):null,$=Object(l.useCallback)((function(){var e=i.getFile();return j.local("".concat(e),{md:1}).then((function(e){e=C(e,g,F,I),i.hasArray(e)||e.push(i.copy(y)),o(e)}))}),[F,I]);Object(l.useEffect)((function(){$()}),[$]);var T=Object(l.useCallback)((function(){e.current.click()}),[]),J=Object(l.useCallback)((function(){o(i.copy(g.current))}),[]),R=Object(l.useCallback)((function(){var e={};s.forEach((function(n){e[n.field]=n.content,n.content.list.forEach((function(e){delete e.open}))}));var n=JSON.stringify(e),t=j.encode(n),c=i.getFile();j.post("file",{param:{name:c,content:n,encode:t}}).then((function(e){}))}),[s]),K=Object(l.useCallback)((function(e){e.open=!e.open,o(Object(c.a)(s))}),[s]),U=Object(l.useCallback)((function(e,n,t){var c=t||{},a=c.p,l=c.i;e.splice(n,1),i.hasArray(a)&&0===e.length&&a.splice(l,1),A((function(e){return e+1}))}),[]),_=function(e){var n=e.data,t=e.row,c=e.index;e.up?(n.splice(c,1),n.splice(c-1,0,t)):(n.splice(c,1),n.splice(c+1,0,t)),A((function(e){return e+1}))},q=Object(l.useCallback)((function(e,n,t){n[t]=e,i.local("json",s),o(s)}),[s]),z=function(e){var n=e.data,t=e.index,c=e.copy;e.after&&(t+=1),n.splice(t,0,c),A((function(e){return e+1}))},B=function(e){var n=e.data,t=e.index,c=e.copy,a=e.row,l=e.children,s=e.className,i=e.isKeyword;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"fx ".concat(u.css(s)),style:{paddingTop:2},children:[i&&I?null:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{label:"\u540e\u7f6e",onClick:z.bind(null,{data:n,index:t,copy:c,after:1})}),Object(r.jsx)(b,{label:"\u524d\u7f6e",onClick:z.bind(null,{data:n,index:t,copy:c})}),t>0&&Object(r.jsx)(b,{label:"\u4e0a\u79fb",onClick:_.bind(null,{data:n,row:a,index:t,up:1})}),t<n.length-1&&Object(r.jsx)(b,{label:"\u4e0b\u79fb",onClick:_.bind(null,{data:n,row:a,index:t})}),Object(r.jsx)(b,{label:"\u5220\u9664",onClick:U.bind(null,n,t)})]}),l]})})};return Object(r.jsx)(d,{header:Object(r.jsxs)("header",{className:"h50 bbor1 plr20 f13",children:[Object(r.jsx)(b,{label:"\u6253\u5f00",onClick:T}),Object(r.jsx)(b,{label:"\u91cd\u7f6e",onClick:J,className:"ml10"}),Object(r.jsx)(b,{className:"ml10 ".concat(i.hasArray(s)?"dn":""),label:"\u6dfb\u52a0",onClick:function(){s.push(i.copy(y)),o(Object(c.a)(s))}}),Object(r.jsx)(b,{label:"\u4fdd\u5b58",onClick:R,className:"ml10"}),Object(r.jsx)(b,{label:"\u8fd4\u56de",onClick:function(){i.back(),window.$data={}},className:"ml10"}),Object(r.jsx)("input",{ref:e,type:"file",onChange:function(e){j.uploader(e).then((function(n){e.target.value="",o(C(n,g))}))}})]}),children:Object(r.jsx)("ul",{className:"json-form",children:i.hasArray(s)&&s.map((function(e,n){var t=e.field,a=e.content,l=(null!==a&&void 0!==a?a:[]).list;return(F&&t===F||!F)&&Object(r.jsxs)("li",{children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u7ec4\u540d"}),": ",Object(r.jsx)(h,{value:t,onChange:function(n){return q(n,e,"field")},className:"c0 ar f14"}),Object(r.jsx)("h6",{children:"\u6807\u9898"}),": ",Object(r.jsx)(h,{value:null===a||void 0===a?void 0:a.title,onChange:function(e){return q(e,a,"title")}}),i.hasArray(l)&&Object(r.jsx)(b,{toggle:e.open,label:e.open?"\u6536\u7f29":"\u5c55\u5f00",onClick:K.bind(null,e)}),(e.open&&!i.hasArray(l)||!i.hasArray(l))&&Object(r.jsx)(b,{label:"\u6dfb\u52a0",onClick:function(){Array.isArray(e.content.list)||(e.content.list=[]),e.content.list.push(i.copy(p)),e.open=!0,o((function(e){return Object(c.a)(e)}))}}),!F&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{label:"\u540e\u7f6e",onClick:z.bind(null,{data:s,index:n,copy:i.copy(y),after:1})}),Object(r.jsx)(b,{label:"\u524d\u7f6e",onClick:z.bind(null,{data:s,index:n,copy:i.copy(y)})}),!e.open&&Object(r.jsxs)(r.Fragment,{children:[n>0&&Object(r.jsx)(b,{label:"\u4e0a\u79fb",onClick:_.bind(null,{data:s,row:e,index:n,up:1})}),n<(null===l||void 0===l?void 0:l.length)-1&&Object(r.jsx)(b,{label:"\u4e0b\u79fb",onClick:_.bind(null,{data:s,row:e,index:n})})]}),Object(r.jsx)(b,{label:"\u5220\u9664",onClick:U.bind(null,s,n)})]})]}),i.hasArray(l)&&Object(r.jsx)("ul",{className:"mt10 ".concat(e.open?"":"dn"),children:l.map((function(e,t){var a=e.version,s=e.title,j=e.deviceTitle,u=e.extend,d=e.children,y=e.group,C=e.intro,g=e.common,N=e.style,k=e.htmlCode,w=e.script,A=e.keyword,S=e.property,F=e.syntax,E=e.cls;return(I&&A===I||!I)&&Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"fx",children:[Object(r.jsx)("div",{className:"ex",children:I?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"header ".concat(I?"sti_lt bcf":""),children:[Object(r.jsx)("h6",{children:"\u5173\u952e\u5b57:"}),Object(r.jsx)(h,{value:A,onChange:function(n){return q(n,e,"keyword")},className:"ar f14 ex",style:{color:i.style.b.color}})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u5c5e\u6027:"}),Object(r.jsx)(h,{value:S,onChange:function(n){return q(n,e,"property")},className:"ex"})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u6807\u9898:"}),Object(r.jsx)(h,{value:s,onChange:function(n){return q(n,e,"title")},className:"ex"})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u63cf\u8ff0:"}),Object(r.jsx)(h,{value:C,row:3,onChange:function(n){return q(n,e,"intro")},type:"textarea",className:"ex"})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u5206\u7ec4:"}),Object(r.jsx)(h,{value:j,onChange:function(n){return q(n,e,"deviceTitle")},className:"ex"})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"class:"}),Object(r.jsx)(h,{value:E,onChange:function(n){return q(n,e,"cls")},className:"ex"})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u8bed\u6cd5:"}),Object(r.jsx)(h,{value:F,onChange:function(n){return q(n,e,"syntax")},type:"textarea",className:"ex"})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u7ee7\u627f:"}),Object(r.jsx)(x,{className:"ex",name:"extend-"+n+"-"+t,value:u,data:O,onChange:function(n){return q(n,e,"extend")}})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u5e38\u7528:"}),Object(r.jsx)(x,{className:"ex",name:"common-"+n+"-"+t,value:g,data:O,onChange:function(n){return q(n,e,"common")}})]}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u7248\u672c:"}),Object(r.jsx)(x,{className:"ex",name:"version-"+n+"-"+t,value:a,data:f,onChange:function(n){return q(n,e,"version")}})]}),i.hasArray(d)&&d.map((function(n,c){return Object(r.jsx)("div",{className:"mt10 ".concat(e.open?"":"dn"),children:i.hasArray(n)&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:["\u7ec4\u503c ",c+1]}),Object(r.jsx)("ul",{children:n.map((function(e,a){var l=e.title,s=e.value,o=e.html,j=e.fixed,u=e.def;return Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u503c"}),": ",Object(r.jsx)(h,{value:s,onChange:function(n){return q(n,e,"value")},className:"ar f14",style:{color:i.style.v.color}}),Object(r.jsx)("h6",{children:"\u6807\u9898"}),": ",Object(r.jsx)(h,{value:l,onChange:function(n){return q(n,e,"title")}}),Object(r.jsx)("h6",{children:"html"}),": ",Object(r.jsx)(h,{value:o,onChange:function(n){return q(n,e,"html")}}),Object(r.jsx)("h6",{children:"\u56fa\u5b9a:"}),Object(r.jsx)(x,{className:"ex",name:"fixed-"+t+c+a,value:j,data:O,onChange:function(n){return q(n,e,"fixed")}}),Object(r.jsx)("h6",{children:"\u9ed8\u8ba4:"}),Object(r.jsx)(x,{className:"ex",name:"def-"+t+c+a,value:u,data:O,onChange:function(n){return q(n,e,"def")}}),Object(r.jsx)(B,{data:n,index:a,row:e,copy:i.copy(m)[0]})]})},a)}))})]})},c)})),i.hasArray(y)&&Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"\u642d\u914d"}),Object(r.jsx)("ul",{children:y.map((function(e,n){var t=e.keyword,c=e.value,a=e.title;return Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h6",{children:"\u5173\u952e\u5b57"}),": ",Object(r.jsx)(h,{value:t,onChange:function(n){return q(n,e,"keyword")}}),Object(r.jsx)("h6",{children:"\u503c"}),": ",Object(r.jsx)(h,{value:c,onChange:function(n){return q(n,e,"value")}}),Object(r.jsx)("h6",{children:"\u6807\u9898"}),": ",Object(r.jsx)(h,{value:a,onChange:function(n){return q(n,e,"title")}}),Object(r.jsx)(B,{data:y,index:n,row:e,copy:i.copy(v)[0]})]})},n)}))})]}),Object(r.jsxs)("div",{className:"fx mt10",children:[Object(r.jsx)("h6",{children:"html:"}),Object(r.jsx)(h,{rows:10,className:"ex",value:k,onChange:function(n){return q(n,e,"htmlCode")},type:"textarea"})]}),Object(r.jsxs)("div",{className:"fx mt10",children:[Object(r.jsx)("h6",{children:"style:"}),Object(r.jsx)(h,{rows:10,className:"ex",value:N,onChange:function(n){return q(n,e,"style")},type:"textarea"})]}),Object(r.jsxs)("div",{className:"fx mt10",children:[Object(r.jsx)("h6",{children:"script:"}),Object(r.jsx)(h,{rows:10,className:"ex",value:w,onChange:function(n){return q(n,e,"script")},type:"textarea"})]})]}):Object(r.jsxs)("div",{className:"fx",children:[Object(r.jsxs)("div",{className:"header ex",children:[Object(r.jsx)("h6",{children:"\u5173\u952e\u5b57:"}),Object(r.jsx)(h,{value:A,onChange:function(n){return q(n,e,"keyword")},className:"ar f14 ex",style:{color:i.style.b.color}})]}),Object(r.jsxs)("div",{className:"header ex",children:[Object(r.jsx)("h6",{children:"\u6807\u9898:"}),Object(r.jsx)(h,{value:s,onChange:function(n){return q(n,e,"title")},className:"ex"})]}),Object(r.jsxs)("div",{className:"header ",children:[Object(r.jsx)("h6",{children:"\u5e38\u7528:"}),Object(r.jsx)(x,{className:"ex",name:"common-"+n+"-"+t,value:g,data:O,onChange:function(n){return q(n,e,"common")}})]})]})}),Object(r.jsx)("div",{className:I?"sti_lt bcf":"",style:I?{height:65}:null,children:Object(r.jsx)(B,{isKeyword:!0,data:l,index:t,row:e,copy:i.copy(p),children:I&&Object(r.jsxs)("div",{children:[Object(r.jsx)(b,{label:"\u6dfb\u52a0\u503c",onClick:function(){var n;e.children=null!==(n=e.children)&&void 0!==n?n:[],e.children.push(i.copy(m)),o((function(e){return Object(c.a)(e)}))}}),Object(r.jsx)(b,{label:"\u642d\u914d",onClick:function(){var n;e.group=null!==(n=e.group)&&void 0!==n?n:[],e.group.push(i.copy(v)[0]),o((function(e){return Object(c.a)(e)}))}}),Object(r.jsx)(b,{label:"\u9884\u89c8",onClick:function(){window.modalRef.open({data:i.copy(e),title:s,way:"css"})}})]})})})]})},t)}))})]},n)}))},w)})}},267:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var c=t(268);function a(e,n){if(e){if("string"===typeof e)return Object(c.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(c.a)(e,n):void 0}}},268:function(e,n,t){"use strict";function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,c=new Array(n);t<n;t++)c[t]=e[t];return c}t.d(n,"a",(function(){return c}))},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var c=t(267);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],c=!0,a=!1,l=void 0;try{for(var r,s=e[Symbol.iterator]();!(c=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);c=!0);}catch(i){a=!0,l=i}finally{try{c||null==s.return||s.return()}finally{if(a)throw l}}return t}}(e,n)||Object(c.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},271:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t(268);var a=t(267);function l(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);