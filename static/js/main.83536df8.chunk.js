(this.webpackJsonpreact18=this.webpackJsonpreact18||[]).push([[20],{146:function(n,t,e){},152:function(n,t){},154:function(n,t){},164:function(n,t){},166:function(n,t){},191:function(n,t){},192:function(n,t){},197:function(n,t){},199:function(n,t){},206:function(n,t){},225:function(n,t){},265:function(n,t,e){var o={"./":[72,2,5],"./404":[130,16],"./404.js":[130,16],"./_public/create":[131,14],"./_public/create.js":[131,14],"./_public/frame":[132,17],"./_public/frame.js":[132,17],"./_public/iframe":[133,18],"./_public/iframe.js":[133,18],"./_public/list":[134,2,7],"./_public/list.js":[134,2,7],"./index":[72,2,5],"./index.js":[72,2,5],"./json/css/style":[135,8],"./json/css/style.js":[135,8],"./json/entry":[136,9],"./json/entry.js":[136,9],"./json/html":[138,10],"./json/html.js":[138,10],"./json/html/tags":[137,11],"./json/html/tags.js":[137,11],"./json/js/object":[139,12],"./json/js/object.js":[139,12],"./json/menu":[140,13],"./json/menu.js":[140,13]};function r(n){if(!e.o(o,n))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[n],r=t[0];return Promise.all(t.slice(1).map(e.e)).then((function(){return e(r)}))}r.keys=function(){return Object.keys(o)},r.id=265,n.exports=r},266:function(n,t,e){"use strict";e.r(t);var o=e(9),r=e.n(o),c=e(39),i=e.n(c),a=(e(146),window.location.origin+"/data-html/");a="https://"+(a="jiazhenger.gitee.io")+"/x2/data-html/";var u={api:function(){return a},env:false,contentType:0,pageSize:10},s=e(7),l=function(n,t,e){return n?null===t||void 0===t||t():null===e||void 0===e||e(),n},f={hasArray:function(n,t,e){return l(f.isArray(n)&&n.length>0,t,e)},hasObject:function(n,t,e){return l(f.isObject(n)&&Object.keys(n).length>0,t,e)},isEmpty:function(n,t,e){return l(null===n||void 0===n||""===n,t,e)},isValid:function(n,t,e){return l(!f.isEmpty(n)||0===n||!1===n,t,e)},getArray:function(n){return f.isArray(n)?n:[]},getObject:function(n){return f.isObject(n)?n:{}}};["String","Number","Array","Object","Boolean","Function","Undefined"].forEach((function(n){return f["is"+n]=function(t,e,o){return l({}.toString.call(t)==="[object "+n+"]",e,o)}}));var d=f,p=e(4),h=e.n(p),j=e(8),v=function(n){return{set:function(t,e){(function(n){var t={}.toString.call(n);return"[object Object]"===t||"[object Array]"===t})(e)&&(e=JSON.stringify(e)),n.setItem(t,e)},get:function(t){var e=n.getItem(t);if(null===e||void 0===e||""===e)return!1;try{return JSON.parse(e)}catch(o){return e}},remove:function(t){"string"===typeof t&&(t.indexOf(",")>-1?t.split(",").forEach((function(t){n.removeItem(t)})):n.removeItem(t))},clear:function(){n.clear()}}},w="db",b=function(){var n=window.indexedDB.open(w,1);return new Promise((function(t,e){n.onsuccess=function(e){var o=e.target.result.transaction(w,"readwrite").objectStore(w);t(o),n=null},n.onerror=function(n){console.log("db\u6570\u636e\u5e93\u4f7f\u7528\u5931\u8d25\uff1a"+n.srcElement.error.message),e(n.message)},n.onupgradeneeded=function(n){var t=n.target.result;t.objectStoreNames.contains(w)||t.createObjectStore(w),console.log("db \u8868\u521b\u5efa\u6210\u529f")}}))},m={set:function(n,t){return b().then((function(e){try{var o=e.get(n);return o.onsuccess=function(o){e.put(t,n)},o.onerror=function(n){console.log("\u5b58\u50a8\u6570\u636e\u5230 indexdb \u5931\u8d25")},!0}catch(r){return!1}}))},get:function(n){return new Promise((function(t,e){b().then((function(e){try{var o=e.get(n);o.onsuccess=function(n){t(n.target.result)},o.onerror=function(n){console.log("\u83b7\u53d6 indexdb \u6570\u636e\u5931\u8d25")}}catch(r){t(null)}}))}))},remove:function(n){b().then((function(t){var e=t.delete(n);e.onsuccess=function(n){console.log("\u5220\u9664 indexdb \u6570\u636e\u6210\u529f")},e.onerror=function(n){console.log("\u5220\u9664 indexdb \u6570\u636e\u5931\u8d25")}}))},clear:function(){return Object(j.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.indexedDB.databases();case 2:n.sent.length>0&&window.indexedDB.deleteDatabase(w);case 4:case"end":return n.stop()}}),n)})))()}},g=v(window.localStorage),y=v(window.sessionStorage),O={local:function(n,t){return n=n||"user",arguments.length<=1?y.get(n):y.set(n,t)},remove:function(n){y.remove(n)},localClear:function(){y.clear()},getUser:function(){var n=this.local();return this.hasObject(n)?n:{}},longSave:function(n,t){return arguments.length<=1?g.get(n):g.set(n,t)},longRemove:function(n){g.remove(n)},longClear:function(){g.clear()},dataSave:function(n,t){var e=arguments;return Object(j.a)(h.a.mark((function o(){return h.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(e.length<=1)){o.next=6;break}return o.next=3,m.get(n);case 3:o.t0=o.sent,o.next=7;break;case 6:o.t0=m.set(n,t);case 7:return o.abrupt("return",o.t0);case 8:case"end":return o.stop()}}),o)})))()},dataRemove:function(n){m.remove(n)},dataClear:function(n){m.clear()}},x={query:function(n){var t=window.location.search||window.location.hash,e={};if(-1!==t.indexOf("?")){var o=t.split("?");(o=o[1].split("&")).forEach((function(n,t){var o=n.split("=");"undefined"!==o[1]&&"null"!==o[1]&&""!==o[1]&&(e[o[0]]=o[1])}))}if(n){if("function"!==typeof n)return e[n];Object.keys(e).length>0&&n(e)}return e},getToken:function(n){return this.getUser().token},getSubmit:function(n){for(var t in n){var e=n[t];n[t]=window.$fn.isValid(e)?e:""}return n},getBody:function(n){for(var t in n){var e=n[t];window.$fn.isValid(e)||(n[t]="")}return n}},k={setTitle:function(n){window.document.title=n},copy:function(n){return JSON.parse(JSON.stringify(n))},deepCopy:function(n){return function n(t){var e=Array.isArray(t)?[]:{};if(t&&"object"===typeof t)for(var o in t)t.hasOwnProperty(o)&&(t[o]&&"object"===typeof t[o]?e[o]=n(t[o]):e[o]=t[o]);return e}(n)},lazy:function(n){return Object(j.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n().then((function(n){return n.default})));case 1:case"end":return t.stop()}}),t)})))()},getValue:function(n){return window.$fn.isFunction(n)?n(n):n}},C={loading:function(n,t){var e=document.querySelector("#jzer-loading");e&&(n?(e.querySelector(".jzer-loading-msg").innerHTML=t||"\u6570\u636e\u52a0\u8f7d\u4e2d",e.style.display="block"):e.style.display="none")},toast:function(n,t){return Object(j.a)(h.a.mark((function e(){var o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=t||1500,(o=document.querySelector("#jzer-toast"))&&(o.style.display="block",o.querySelector(".jzer-toast-msg").innerHTML=n,-1!==t&&(clearTimeout(window.toastClear),window.toastClear=setTimeout((function(){o.style.display="none"}),t)));case 3:case"end":return e.stop()}}),e)})))()}},S={recordSkip:function(n){window.$fn.local("m-skip",encodeURIComponent(window.location.hash))},getSkipRecord:function(){var n=window.$fn.local("m-skip"),t=decodeURIComponent(n).replace("#","");return"/login"===t&&(t="/"),setTimeout((function(){return window.$fn.remove("m-skip")}),200),window.$fn.local("m-skip")?t:null},go:function(n){var t=n||"/login",e=window.location,o=e.port,r=e.protocol,c=e.hostname,i=e.pathname,a=80===o?"":":"+o;window.location.replace(r+"//"+c+a+i+"#"+t)},back:function(){window.history.back()}},R=Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},d),O),x),k),C),S),{},{c0:"#4da1ff",hash:function(){return window.location.hash.replace("#","")},path:function(){var n=window.$fn.hash();return n=n.split("?"),n[0]},pathFirst:function(){var n=window.$fn.hash();return(n=(n=n.replace("/","")).split("/"))[0]},pathLast:function(n){return n=(n=(n=n||window.$fn.path()).split("/"))[n.length-1]},getFileName:function(){var n=window.$fn.query().json;return n||(n=(n=window.$fn.path()).replace("/json","")),n+"/"+window.$fn.pathLast(n)},getFile:function(){var n=window.$fn.query().json;return n||(n=(n=window.$fn.path()).replace("/json","")),n},isCss:function(){return window.location.hash.includes("/css/")},getJsName:function(){var n=window.$fn.path().split("/"),t=n.length;return{name:n[t-2],page:n[t-1]}},getHump:function(n){return n.replace(/-(\w)/g,(function(n,t){return t.toUpperCase()}))},getCssStr:function(n){return n.replace(/([A-Z])/g,"-$1").toLowerCase()},style:{k:{color:"#333",fontWeight:"bold"},b:{color:"#ff0080",fontWeight:"bold"},g:{color:"#999"},p:{color:"#30b030"},op:{color:"#0099CC"},v:{color:"#8000ff"},v1:{color:"brown"},a:{color:"#049EF4",textDecoration:"underline"},t:{color:"pink"},h5:{color:"#f63"},bg:{background:"#fdf7f2"}},copyText:function(n){var t=document.querySelector("#copy");t||((t=document.createElement("textarea")).id="copy",t.style.cssText="position:absolute;left:0;bottom:-10000px;z-index:-1;opacity:0",document.body.appendChild(t)),t.value=n,t.select(),document.execCommand("copy"),window.$fn.toast("\u590d\u5236\u6210\u529f",200)},platform:function(n,t,e){var o=navigator.userAgent,r=o.indexOf("Android")>-1||o.indexOf("Linux")>-1,c=!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);return n&&n(),t&&t(),e&&e(),{isAndroid:r,isIos:c,isPc:!i}}}),$=e(20),A=e.n($),T={encode:function(n,t){return A.a.AES.encrypt(t,A.a.enc.Utf8.parse(n),{mode:A.a.mode.ECB,padding:A.a.pad.Pkcs7}).toString()},decode:function(n,t){return A.a.AES.decrypt(t,A.a.enc.Utf8.parse(n),{mode:A.a.mode.ECB,padding:A.a.pad.Pkcs7}).toString(A.a.enc.Utf8)}},D="afsdfwrwttt_&try/#gf=fas_*423487",E=function(n,t,e,o,r){if(u.env){var c=["red","green","orange"];console.log("%c ==================================\u3010 ".concat(n," \u3011\u3010 ").concat(t," \u3011=================================="),"color:"+c[r]),console.log(" \u53c2\u6570\uff1a",e||{}),console.log(" \u6570\u636e\uff1a",o),console.log("%c \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 end ","color:"+c[r])}},U=function(n,t,e){var o="http://192.168.0.102:3308/api/"+n;return new Promise((function(n,r){"get"===e&&(o+=function(n){if(!R.hasObject(n))return"";var t=n,e="";for(var o in t)R.isValid(t[o])&&(e+=o+"="+t[o]+"&");return"&"===e.charAt(e.length-1)&&(e=e.slice(0,e.length-1)),e?"?"+e:encodeURI(e)}(t)),fetch(o,{method:e,body:"post"===e?JSON.stringify(t):null,headers:{"Content-Type":"application/json;charset=utf-8"},mode:"cors"}).then((function(n){var t=n.status,e=n.ok;return 200===t&&!0===e?n.json():{}})).then((function(c){var i=c.code,a=c.data,u=c.msg;200===i?(n(a),E(e,o,t,a,1)):(R.toast(u),r(a)),R.loading(!1)}),(function(n){R.toast("".concat(o," \u8bf7\u6c42\u51fa\u9519"),-1),R.loading(!1)}))}))},N={local:function(n,t){var e=t||{},o=e.loading,r=e.md,c=e.type,i=void 0===c?"text":c;return!1!==o&&window.$fn.loading(!0),new Promise((function(t,e){var c="text"===i?".html":".json";fetch(window.$config.api()+n+c).then((function(e){if(!1!==o&&window.$fn.loading(!1),200===e.status&&n)return e[i]().then((function(e){if("text"===i){r&&(e=function(n){return T.decode(D,n)}(e));try{e=JSON.parse(e)}catch(o){e=[]}}E("local",n,{},e,1),t(e)}),(function(t){return!1!==o&&window.$fn.toast(n+" \u4e0d\u5b58\u5728\uff0c\u6216\u6570\u636e\u683c\u5f0f\u9519\u8bef",-1),null}));window.$fn.toast("\u6570\u636e\u8bf7\u6c42\u51fa\u9519")}))}))},post:function(n,t){var e=Object(s.a)({param:{},loadingText:"\u6570\u636e\u52a0\u8f7d\u4e2d..."},t);return R.loading(!0,e.loadingText+"..."),U(n,e.param,"post").then((function(n){return R.toast("\u64cd\u4f5c\u6210\u529f",200),n}))},uploader:function(n){var t=n.target.files[0],e=new FileReader;return e.readAsText(t),new Promise((function(n){e.onload=function(t){n(this.result)}}))},encode:function(n){return T.encode(D,n)}},P={css:function(n){return n||""}},J=e(16),_=e(17),B=e(19),z=e(18),I=e(1),L=function(n){return function(t){Object(B.a)(o,t);var e=Object(z.a)(o);function o(){var n;Object(J.a)(this,o);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={Component:null},n}return Object(_.a)(o,[{key:"componentDidMount",value:function(){var t=Object(j.a)(h.a.mark((function t(){var e,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e=t.sent,o=e.default,this.setState({Component:o});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.Component;return n?Object(I.jsx)(n,Object(s.a)({},this.props)):null}}]),o}(o.Component)},F=e(73),M=function(){var n=Object(j.a)(h.a.mark((function n(t){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t().then((function(n){return n.default})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),q=function(n,t){return function(e){Object(B.a)(r,e);var o=Object(z.a)(r);function r(){var n;Object(J.a)(this,r);for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];return(n=o.call.apply(o,[this].concat(e))).state={Component:null},n}return Object(_.a)(r,[{key:"componentDidMount",value:function(){var e=Object(j.a)(h.a.mark((function e(){var o,r,c=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:o=e.sent,r=o.default,t?(clearTimeout(this.clear),this.clear=setTimeout((function(){c.setState({Component:r},(function(){var n,t;return null===(n=(t=c.props).onRef)||void 0===n?void 0:n.call(t,c.refs.ref)}))}),500)):this.setState({Component:r},(function(){var n,t;return null===(n=(t=c.props).onRef)||void 0===n?void 0:n.call(t,c.refs.ref)}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout(this.clear)}},{key:"render",value:function(){var n=this.state.Component;return n?Object(I.jsx)(n,Object(s.a)({ref:"ref"},this.props)):null}}]),r}(o.Component)},H=function(n,t){return function(e){Object(B.a)(c,e);var o=Object(z.a)(c);function c(){var n;Object(J.a)(this,c);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return(n=o.call.apply(o,[this].concat(e))).state={Component:null},n}return Object(_.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(h.a.mark((function e(){var o,c,i=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:o=e.sent,c=o.default,t?(clearTimeout(this.clear),this.clear=setTimeout((function(){i.setState({Component:r.a.forwardRef(c)},(function(){var n,t;return null===(n=(t=i.props).onRef)||void 0===n?void 0:n.call(t,i.refs.ref)}))}),500)):this.setState({Component:r.a.forwardRef(c)},(function(){var n,t;return null===(n=(t=i.props).onRef)||void 0===n?void 0:n.call(t,i.refs.ref)}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.Component;return n?Object(I.jsx)(n,Object(s.a)({ref:"ref"},this.props)):null}}]),c}(o.Component)},V={load:L,router:F.a,file:M,state:q,hook:H};window.$config=u,window.$fn=R,window.$http=N,window.$=P,window.$lazy=V;var W=window.$lazy,X=W.load((function(){return Promise.all([e.e(2),e.e(19),e.e(30)]).then(e.bind(null,302))})),Z=W.load((function(){return e.e(35).then(e.bind(null,303))})),G=W.load((function(){return e.e(33).then(e.bind(null,304))})),K=W.hook((function(){return e.e(24).then(e.bind(null,287))})),Q=W.hook((function(){return e.e(28).then(e.bind(null,288))})),Y=W.hook((function(){return e.e(25).then(e.bind(null,305))})),nn=W.hook((function(){return e.e(27).then(e.bind(null,289))})),tn=W.hook((function(){return e.e(26).then(e.bind(null,306))})),en=W.hook((function(){return e.e(29).then(e.bind(null,307))})),on=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X,{}),Object(I.jsx)(Z,{}),Object(I.jsx)(G,{}),Object(I.jsxs)(K,{width:"99.5%",className:"p5",onRef:function(n){return window.modalRef=n},setData:function(n){var t=n.data,e=n.way;setTimeout((function(){var n,o,r,c,i,a,u,s,l,f,d,p;switch(e){case"html":null===(n=window)||void 0===n||null===(o=n.codeHtmlRef)||void 0===o||null===(r=o.setData)||void 0===r||r.call(o,t);break;case"css":null===(c=window)||void 0===c||null===(i=c.codeCssRef)||void 0===i||null===(a=i.setData)||void 0===a||a.call(i,t);break;case"js":null===(u=window)||void 0===u||null===(s=u.codeJsRef)||void 0===s||null===(l=s.setData)||void 0===l||l.call(s,t);break;default:null===(f=window)||void 0===f||null===(d=f.codeRef)||void 0===d||null===(p=d.setData)||void 0===p||p.call(d,t)}}),200)},children:[Object(I.jsx)(Q,{onRef:function(n){return window.codeRef=n}}),Object(I.jsx)(Y,{onRef:function(n){return window.codeCssRef=n}}),Object(I.jsx)(nn,{onRef:function(n){return window.codeJsRef=n}}),Object(I.jsx)(tn,{onRef:function(n){return window.codeHtmlRef=n}})]}),Object(I.jsx)(en,{onRef:function(n){return window.modalRunJsRef=n}})]})},rn=document.getElementById("app-root");i.a.createRoot(rn).render(Object(I.jsx)(on,{})),rn.setAttribute("version",i.a.version),document.body.removeChild(document.getElementById("app-loading")),window.$data={}},71:function(n,t,e){"use strict";var o=e(16),r=e(17),c=e(19),i=e(18),a=e(9),u=e.n(a),s=e(39),l=e.n(s),f=function(n){Object(c.a)(e,n);var t=Object(i.a)(e);function e(){return Object(o.a)(this,e),t.apply(this,arguments)}return Object(r.a)(e,[{key:"componentDidMount",value:function(){this.pop=document.createElement("div"),document.body.appendChild(this.pop),this.renderLayer()}},{key:"componentDidUpdate",value:function(){this.renderLayer()}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.pop)}},{key:"renderLayer",value:function(){l.a.createRoot(this.pop).render(this.props.children)}},{key:"render",value:function(){return null}}]),e}(u.a.Component);t.a=f},73:function(n,t,e){"use strict";var o=e(7),r=e(4),c=e.n(r),i=e(8),a=e(16),u=e(17),s=e(19),l=e(18),f=e(9),d=e(71),p=e(1),h=function(){return Object(p.jsx)(d.a,{children:Object(p.jsx)("div",{className:"loading-wraper",children:Object(p.jsx)("div",{children:Object(p.jsxs)("dl",{className:"loading-circle",children:[Object(p.jsxs)("dd",{children:[Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{})]}),Object(p.jsxs)("dd",{children:[Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{})]}),Object(p.jsxs)("dd",{children:[Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{})]})]})})})})};t.a=function(n){return t=function(){return e(265)("./"+n)},function(n){Object(s.a)(r,n);var e=Object(l.a)(r);function r(){var n;Object(a.a)(this,r);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return(n=e.call.apply(e,[this].concat(o))).state={Component:function(){return Object(p.jsx)(h,{})}},n}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var n=Object(i.a)(c.a.mark((function n(){var e,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e=n.sent,o=e.default,this.setState({Component:o});case 5:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.Component;return n?Object(p.jsx)(n,Object(o.a)({},this.props)):null}}]),r}(f.Component);var t}}},[[266,21,22]]]);