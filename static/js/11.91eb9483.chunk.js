(this.webpackJsonpreact18=this.webpackJsonpreact18||[]).push([[11],{137:function(e,n,t){"use strict";t.r(n);var c=t(271),a=t(269),l=t(9),s=t(1),r=window,i=r.$fn,o=r.$lazy,j=r.$http,d=r.$,u=o.load((function(){return t.e(1).then(t.bind(null,273))})),b=o.load((function(){return t.e(0).then(t.bind(null,272))})),h=o.load((function(){return t.e(3).then(t.bind(null,274))})),x=o.load((function(){return t.e(4).then(t.bind(null,276))})),O=[{label:"\u662f",value:"1"},{label:"\u5426",value:"0"}],m=[{label:"HTML4",value:"4"},{label:"HTML5",value:"5"}],f=[{label:"\u65e0",value:"0"},{label:"\u5757\u7ea7\u5143\u7d20",value:"1"},{label:"\u884c\u5185\u5143\u7d20",value:"2"}],v=[{title:"",value:""}],p=[{title:"",need:"0",common:"1",fixed:"0",support:"1",value:v,version:"4"}],y={title:"",intro:"",keyword:"",version:"4",common:"1",close:"1",block:"0",support:"1"},N={field:"",content:{title:"",list:[y]}},C=function(e,n,t,c){var a=[];if(e=i.isString(e)?JSON.parse(e):e,i.hasObject(e))for(var l in e){var s=e[l];c&&e[l].list.forEach((function(e){(null===e||void 0===e?void 0:e.keyword)===c&&(e.open=!0)})),a.push({field:l,content:s,open:Boolean(t)})}else a=e;return n.current=i.copy(a),a};n.default=function(){var e=Object(l.useRef)(),n=Object(l.useState)([]),t=Object(a.a)(n,2),r=t[0],o=t[1],g=Object(l.useRef)([]),k=Object(l.useState)(0),w=Object(a.a)(k,2),A=w[0],S=w[1],F=i.query(),T=F.name,$=F.keyword,E=$,I=Object(l.useCallback)((function(){var e=i.getFile();return j.local("".concat(e),{md:1}).then((function(e){e=C(e,g,T,$),i.hasArray(e)||e.push(i.copy(N)),o(e)}))}),[T,$]);Object(l.useEffect)((function(){I()}),[I]);var J=Object(l.useCallback)((function(){e.current.click()}),[]),M=Object(l.useCallback)((function(){o(i.copy(g.current))}),[]),R=Object(l.useCallback)((function(){var e={};r.forEach((function(n){e[n.field]=n.content,delete n.open}));var n=JSON.stringify(e),t=j.encode(n),c=i.getFile();j.post("file",{param:{name:c,content:n,encode:t}}).then((function(e){}))}),[r]),H=Object(l.useCallback)((function(e){e.open=!e.open,o(Object(c.a)(r))}),[r]),K=Object(l.useCallback)((function(e,n,t){var c=t||{},a=c.p,l=c.i;e.splice(n,1),i.hasArray(a)&&0===e.length&&a.splice(l,1),S((function(e){return e+1}))}),[]),L=function(e){var n=e.data,t=e.row,c=e.index;e.up?(n.splice(c,1),n.splice(c-1,0,t)):(n.splice(c,1),n.splice(c+1,0,t)),S((function(e){return e+1}))},_=Object(l.useCallback)((function(e,n,t){i.isObject(n)||(n={}),n[t]=e,i.local("json",r),o(r)}),[r]),q=function(e){var n=e.data,t=e.index,c=e.copy;e.after&&(t+=1),n.splice(t,0,c),S((function(e){return e+1}))},z=function(e){var n=e.data,t=e.index,c=e.copy,a=e.row,l=e.children,r=e.className,i=e.isKeyword;return Object(s.jsxs)("div",{className:"fx ".concat(d.css(r)),style:{paddingTop:2},children:[i&&E?null:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{label:"\u540e\u7f6e",onClick:q.bind(null,{data:n,index:t,copy:c,after:1})}),Object(s.jsx)(b,{label:"\u524d\u7f6e",onClick:q.bind(null,{data:n,index:t,copy:c})}),t>0&&Object(s.jsx)(b,{label:"\u4e0a\u79fb",onClick:L.bind(null,{data:n,row:a,index:t,up:1})}),t<n.length-1&&Object(s.jsx)(b,{label:"\u4e0b\u79fb",onClick:L.bind(null,{data:n,row:a,index:t})}),Object(s.jsx)(b,{label:"\u5220\u9664",onClick:K.bind(null,n,t)})]}),l]})},B=function(e){var n=e.data,t=(e.copy,e.i1);return i.hasArray(n)&&Object(s.jsxs)("div",{className:"fx",children:[Object(s.jsx)("h6",{className:"as lh28",children:"\u5c5e\u6027:"}),Object(s.jsx)("ul",{className:"ex",children:n.map((function(e,a){var l=e.title,r=e.name,j=e.value,d=e.need,u=e.common,f=e.fixed,y=e.html,N=e.style,C=e.annotation,g=e.support,k=e.version;return Object(s.jsxs)("li",{className:"fx ".concat(a>0?"tbor1 mt10 pt10":""),children:[Object(s.jsxs)("div",{className:"ex",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u540d\u79f0"}),": ",Object(s.jsx)(h,{value:r,onChange:function(n){return _(n,e,"name")},className:"ar f14 ex",style:{color:i.style.v.color}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u6807\u9898"}),": ",Object(s.jsx)(h,{value:l,onChange:function(n){return _(n,e,"title")},className:"ex"})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u5fc5\u9009:"}),Object(s.jsx)(x,{className:"ex",name:"need-"+t+a,value:d,data:O,onChange:function(n){return _(n,e,"need")}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u63a8\u8350:"}),Object(s.jsx)(x,{className:"ex",name:"common-"+t+a,value:u,data:O,onChange:function(n){return _(n,e,"common")}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u652f\u6301:"}),Object(s.jsx)(x,{className:"ex",name:"support-"+t+a,value:g,data:O,onChange:function(n){return _(n,e,"support")}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u7248\u672c:"}),Object(s.jsx)(x,{className:"ex",name:"version-"+t+a,value:k,data:m,onChange:function(n){return _(n,e,"version")}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u56fa\u5b9a\u503c:"}),Object(s.jsx)(x,{className:"ex",name:"fixed-"+t+a,value:f,data:O,onChange:function(n){return _(n,e,"fixed")}})]}),i.hasArray(j)&&Object(s.jsxs)("div",{className:"fx",children:[Object(s.jsx)("h6",{className:"as lh30",children:"\u503c:"}),Object(s.jsx)("div",{className:"ex",children:j.map((function(n,t){var c=n.value,a=n.title;return Object(s.jsxs)("div",{className:"fx",children:[Object(s.jsxs)("div",{className:"ex fx",children:[Object(s.jsxs)("div",{className:"header ex",children:[Object(s.jsxs)("h6",{children:["\u503c",t+1]}),": ",Object(s.jsx)(h,{value:c,onChange:function(e){return _(e,n,"value")},className:"ex"})]}),Object(s.jsxs)("div",{className:"header ex",children:[Object(s.jsx)("h6",{children:"\u6807\u9898"}),": ",Object(s.jsx)(h,{value:a,onChange:function(e){return _(e,n,"title")},className:"ex"})]})]}),Object(s.jsx)(z,{data:e.value,index:t,row:n,copy:i.copy(v)[0]})]},t)}))})]}),Object(s.jsxs)("div",{className:"fx mt10",children:[Object(s.jsx)("h6",{children:"html:"}),Object(s.jsx)(h,{rows:2,className:"ex",value:y,onChange:function(n){return _(n,e,"html")},type:"textarea"})]}),Object(s.jsxs)("div",{className:"fx mt10",children:[Object(s.jsx)("h6",{children:"style:"}),Object(s.jsx)(h,{rows:2,className:"ex",value:N,onChange:function(n){return _(n,e,"style")},type:"textarea"})]}),Object(s.jsxs)("div",{className:"fx mt10",children:[Object(s.jsx)("h6",{children:"\u8bf4\u660e:"}),Object(s.jsx)(h,{rows:3,className:"ex",value:C,onChange:function(n){return _(n,e,"annotation")},type:"textarea"})]})]}),Object(s.jsx)(z,{data:n,index:a,row:e,copy:i.copy(p)[0],children:!i.hasArray(j)&&Object(s.jsx)(b,{label:"\u6dfb\u52a0\u503c",onClick:function(){Array.isArray(e.value)||(e.value=[]),e.value=i.copy(v),o((function(e){return Object(c.a)(e)}))}})})]},a)}))})]})};return Object(s.jsx)(u,{header:Object(s.jsxs)("header",{className:"h50 bbor1 plr20 f13",children:[Object(s.jsx)(b,{label:"\u6253\u5f00",onClick:J}),Object(s.jsx)(b,{label:"\u91cd\u7f6e",onClick:M,className:"ml10"}),Object(s.jsx)(b,{className:"ml10 ".concat(i.hasArray(r)?"dn":""),label:"\u6dfb\u52a0",onClick:function(){r.push(i.copy(N)),o(Object(c.a)(r))}}),Object(s.jsx)(b,{label:"\u4fdd\u5b58",onClick:R,className:"ml10"}),Object(s.jsx)(b,{label:"\u8fd4\u56de",onClick:function(){i.back(),window.$data={}},className:"ml10"}),Object(s.jsx)("input",{ref:e,type:"file",onChange:function(e){j.uploader(e).then((function(n){e.target.value="",o(C(n,g))}))}})]}),children:Object(s.jsx)("ul",{className:"json-form",children:i.hasArray(r)&&r.map((function(e,n){var t,a=e=null!==(t=e)&&void 0!==t?t:{},l=a.field,j=a.content,d=(null!==j&&void 0!==j?j:{}).list;return(T&&l===T||!T)&&Object(s.jsxs)("li",{children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u7ec4\u540d"}),": ",Object(s.jsx)(h,{value:l,onChange:function(n){return _(n,e,"field")},className:"c0 ar f14"}),Object(s.jsx)("h6",{children:"\u6807\u9898"}),": ",Object(s.jsx)(h,{value:null===j||void 0===j?void 0:j.title,onChange:function(e){return _(e,j,"title")}}),i.hasArray(d)&&Object(s.jsx)(b,{toggle:e.open,label:e.open?"\u6536\u7f29":"\u5c55\u5f00",onClick:H.bind(null,e)}),(e.open&&!i.hasArray(d)||!i.hasArray(d))&&Object(s.jsx)(b,{label:"\u6dfb\u52a0",onClick:function(){Array.isArray(e.content.list)||(e.content.list=[]),e.content.list.push(i.copy(y)),e.open=!0,o((function(e){return Object(c.a)(e)}))}}),!T&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{label:"\u540e\u7f6e",onClick:q.bind(null,{data:r,index:n,copy:i.copy(N),after:1})}),Object(s.jsx)(b,{label:"\u524d\u7f6e",onClick:q.bind(null,{data:r,index:n,copy:i.copy(N)})}),!e.open&&Object(s.jsxs)(s.Fragment,{children:[n>0&&Object(s.jsx)(b,{label:"\u4e0a\u79fb",onClick:L.bind(null,{data:r,row:e,index:n,up:1})}),n<(null===d||void 0===d?void 0:d.length)-1&&Object(s.jsx)(b,{label:"\u4e0b\u79fb",onClick:L.bind(null,{data:r,row:e,index:n})})]}),Object(s.jsx)(b,{label:"\u5220\u9664",onClick:K.bind(null,r,n)})]})]}),i.hasArray(d)&&Object(s.jsx)("ul",{className:"mt10 ".concat(e.open?"":"dn"),children:d.map((function(e,t){var a=e||{},l=a.version,r=a.title,j=a.deviceTitle,u=a.attr,v=a.intro,N=a.common,C=a.attention,g=a.style,k=a.htmlCode,w=a.script,A=a.keyword,S=a.close,F=a.support,T=a.block;return(E&&A===E||!E)&&Object(s.jsxs)("li",{className:"fx",children:[Object(s.jsx)("div",{className:"ex",children:E?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"header ".concat(E?"sti_lt bcf":""),children:[Object(s.jsx)("h6",{children:"\u5173\u952e\u5b57:"}),Object(s.jsx)(h,{value:A,onChange:function(n){return _(n,e,"keyword")},className:"ar f14 ex",style:{color:i.style.b.color}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u6807\u9898:"}),Object(s.jsx)(h,{value:r,onChange:function(n){return _(n,e,"title")},className:"ex"})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u5206\u7ec4\u6807\u9898:"}),Object(s.jsx)(h,{value:j,onChange:function(n){return _(n,e,"deviceTitle")},className:"ex"})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u7528\u6cd5:"}),Object(s.jsx)(h,{value:v,onChange:function(n){return _(n,e,"intro")},type:"textarea",className:"ex"})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u95ed\u6807\u7b7e:"}),Object(s.jsx)(x,{className:"ex",name:"close-"+n+"-"+t,value:S,data:O,onChange:function(n){return _(n,e,"close")}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u5e38\u7528:"}),Object(s.jsx)(x,{className:"ex",name:"common-"+n+"-"+t,value:N,data:O,onChange:function(n){return _(n,e,"common")}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u652f\u6301:"}),Object(s.jsx)(x,{className:"ex",name:"support-"+n+"-"+t,value:F,data:O,onChange:function(n){return _(n,e,"support")}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u7248\u672c:"}),Object(s.jsx)(x,{className:"ex",name:"version-"+n+"-"+t,value:l,data:m,onChange:function(n){return _(n,e,"version")}})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u5143\u7d20\u7c7b\u578b:"}),Object(s.jsx)(x,{className:"ex",name:"block-"+n+"-"+t,value:T,data:f,onChange:function(n){return _(n,e,"block")}})]}),Object(s.jsx)(B,{data:u,i1:t}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u6ce8\u610f: "}),Object(s.jsx)(h,{value:C,onChange:function(n){return _(n,e,"attention")},className:"ex",type:"textarea"})]}),Object(s.jsxs)("div",{className:"fx mt10",children:[Object(s.jsx)("h6",{children:"html:"}),Object(s.jsx)(h,{rows:6,className:"ex",value:k,onChange:function(n){return _(n,e,"htmlCode")},type:"textarea"})]}),Object(s.jsxs)("div",{className:"fx mt10",children:[Object(s.jsx)("h6",{children:"style:"}),Object(s.jsx)(h,{rows:6,className:"ex",value:g,onChange:function(n){return _(n,e,"style")},type:"textarea"})]}),Object(s.jsxs)("div",{className:"fx mt10",children:[Object(s.jsx)("h6",{children:"script:"}),Object(s.jsx)(h,{rows:6,className:"ex",value:w,onChange:function(n){return _(n,e,"script")},type:"textarea"})]})]}):Object(s.jsxs)("div",{className:"fxm",children:[Object(s.jsxs)("div",{className:"header ex",children:[Object(s.jsx)("h6",{children:"\u5173\u952e\u5b57:"}),Object(s.jsx)(h,{value:A,onChange:function(n){return _(n,e,"keyword")},className:"ar f14 ex",style:{color:i.style.b.color}})]}),Object(s.jsxs)("div",{className:"header ex",children:[Object(s.jsx)("h6",{children:"\u6807\u9898:"}),Object(s.jsx)(h,{value:r,onChange:function(n){return _(n,e,"title")},className:"ex"})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h6",{children:"\u95ed\u6807\u7b7e:"}),Object(s.jsx)(x,{className:"ex",name:"close-"+n+"-"+t,value:S,data:O,onChange:function(n){return _(n,e,"close")}})]})]})}),Object(s.jsxs)(z,{isKeyword:!0,className:E?"sti_lt bcf h28":"",data:d,index:t,row:e,copy:i.copy(y),children:[!i.hasArray(u)&&Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(b,{label:"\u6dfb\u52a0\u5c5e\u6027",onClick:function(){e.attr=i.copy(p),console.log(e),o((function(e){return Object(c.a)(e)}))}})}),Object(s.jsx)(b,{label:"\u9884\u89c8",className:"ml10",onClick:function(){window.modalRef.open({data:e,way:"html",title:A})}})]})]},t)}))})]},n)}))},A)})}},267:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var c=t(268);function a(e,n){if(e){if("string"===typeof e)return Object(c.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(c.a)(e,n):void 0}}},268:function(e,n,t){"use strict";function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,c=new Array(n);t<n;t++)c[t]=e[t];return c}t.d(n,"a",(function(){return c}))},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var c=t(267);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],c=!0,a=!1,l=void 0;try{for(var s,r=e[Symbol.iterator]();!(c=(s=r.next()).done)&&(t.push(s.value),!n||t.length!==n);c=!0);}catch(i){a=!0,l=i}finally{try{c||null==r.return||r.return()}finally{if(a)throw l}}return t}}(e,n)||Object(c.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},271:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t(268);var a=t(267);function l(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);