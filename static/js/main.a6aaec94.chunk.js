(this.webpackJsonpreact18=this.webpackJsonpreact18||[]).push([[20],{146:function(n,t,e){},152:function(n,t){},154:function(n,t){},164:function(n,t){},166:function(n,t){},191:function(n,t){},192:function(n,t){},197:function(n,t){},199:function(n,t){},206:function(n,t){},225:function(n,t){},265:function(n,t,e){var o={"./":[72,2,5],"./404":[130,16],"./404.js":[130,16],"./_public/create":[131,14],"./_public/create.js":[131,14],"./_public/frame":[132,17],"./_public/frame.js":[132,17],"./_public/iframe":[133,18],"./_public/iframe.js":[133,18],"./_public/list":[134,2,7],"./_public/list.js":[134,2,7],"./index":[72,2,5],"./index.js":[72,2,5],"./json/css/style":[135,8],"./json/css/style.js":[135,8],"./json/entry":[136,9],"./json/entry.js":[136,9],"./json/html":[138,10],"./json/html.js":[138,10],"./json/html/tags":[137,11],"./json/html/tags.js":[137,11],"./json/js/object":[139,12],"./json/js/object.js":[139,12],"./json/menu":[140,13],"./json/menu.js":[140,13]};function r(n){if(!e.o(o,n))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[n],r=t[0];return Promise.all(t.slice(1).map(e.e)).then((function(){return e(r)}))}r.keys=function(){return Object.keys(o)},r.id=265,n.exports=r},266:function(n,t,e){"use strict";e.r(t);var o=e(9),r=e.n(o),i=e(39),c=e.n(i),a=(e(146),window.location.origin+"/data-html/");console.log(window.location.origin),a="jiazhenger.gitee.io";var u,s="jiazhenger.github.io";u=s,window.location.host.indexOf(u)>=0&&(a=s),a="https://"+a+"/x2/data-html/";var l={api:function(){return a},env:false,contentType:0,pageSize:10},f=e(7),d=function(n,t,e){return n?null===t||void 0===t||t():null===e||void 0===e||e(),n},p={hasArray:function(n,t,e){return d(p.isArray(n)&&n.length>0,t,e)},hasObject:function(n,t,e){return d(p.isObject(n)&&Object.keys(n).length>0,t,e)},isEmpty:function(n,t,e){return d(null===n||void 0===n||""===n,t,e)},isValid:function(n,t,e){return d(!p.isEmpty(n)||0===n||!1===n,t,e)},getArray:function(n){return p.isArray(n)?n:[]},getObject:function(n){return p.isObject(n)?n:{}}};["String","Number","Array","Object","Boolean","Function","Undefined"].forEach((function(n){return p["is"+n]=function(t,e,o){return d({}.toString.call(t)==="[object "+n+"]",e,o)}}));var h=p,j=e(4),w=e.n(j),v=e(8),b=function(n){return{set:function(t,e){(function(n){var t={}.toString.call(n);return"[object Object]"===t||"[object Array]"===t})(e)&&(e=JSON.stringify(e)),n.setItem(t,e)},get:function(t){var e=n.getItem(t);if(null===e||void 0===e||""===e)return!1;try{return JSON.parse(e)}catch(o){return e}},remove:function(t){"string"===typeof t&&(t.indexOf(",")>-1?t.split(",").forEach((function(t){n.removeItem(t)})):n.removeItem(t))},clear:function(){n.clear()}}},m="db",g=function(){var n=window.indexedDB.open(m,1);return new Promise((function(t,e){n.onsuccess=function(e){var o=e.target.result.transaction(m,"readwrite").objectStore(m);t(o),n=null},n.onerror=function(n){console.log("db\u6570\u636e\u5e93\u4f7f\u7528\u5931\u8d25\uff1a"+n.srcElement.error.message),e(n.message)},n.onupgradeneeded=function(n){var t=n.target.result;t.objectStoreNames.contains(m)||t.createObjectStore(m),console.log("db \u8868\u521b\u5efa\u6210\u529f")}}))},y={set:function(n,t){return g().then((function(e){try{var o=e.get(n);return o.onsuccess=function(o){e.put(t,n)},o.onerror=function(n){console.log("\u5b58\u50a8\u6570\u636e\u5230 indexdb \u5931\u8d25")},!0}catch(r){return!1}}))},get:function(n){return new Promise((function(t,e){g().then((function(e){try{var o=e.get(n);o.onsuccess=function(n){t(n.target.result)},o.onerror=function(n){console.log("\u83b7\u53d6 indexdb \u6570\u636e\u5931\u8d25")}}catch(r){t(null)}}))}))},remove:function(n){g().then((function(t){var e=t.delete(n);e.onsuccess=function(n){console.log("\u5220\u9664 indexdb \u6570\u636e\u6210\u529f")},e.onerror=function(n){console.log("\u5220\u9664 indexdb \u6570\u636e\u5931\u8d25")}}))},clear:function(){return Object(v.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.indexedDB.databases();case 2:n.sent.length>0&&window.indexedDB.deleteDatabase(m);case 4:case"end":return n.stop()}}),n)})))()}},O=b(window.localStorage),x=b(window.sessionStorage),k={local:function(n,t){return n=n||"user",arguments.length<=1?x.get(n):x.set(n,t)},remove:function(n){x.remove(n)},localClear:function(){x.clear()},getUser:function(){var n=this.local();return this.hasObject(n)?n:{}},longSave:function(n,t){return arguments.length<=1?O.get(n):O.set(n,t)},longRemove:function(n){O.remove(n)},longClear:function(){O.clear()},dataSave:function(n,t){var e=arguments;return Object(v.a)(w.a.mark((function o(){return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(e.length<=1)){o.next=6;break}return o.next=3,y.get(n);case 3:o.t0=o.sent,o.next=7;break;case 6:o.t0=y.set(n,t);case 7:return o.abrupt("return",o.t0);case 8:case"end":return o.stop()}}),o)})))()},dataRemove:function(n){y.remove(n)},dataClear:function(n){y.clear()}},C={query:function(n){var t=window.location.search||window.location.hash,e={};if(-1!==t.indexOf("?")){var o=t.split("?");(o=o[1].split("&")).forEach((function(n,t){var o=n.split("=");"undefined"!==o[1]&&"null"!==o[1]&&""!==o[1]&&(e[o[0]]=o[1])}))}if(n){if("function"!==typeof n)return e[n];Object.keys(e).length>0&&n(e)}return e},getToken:function(n){return this.getUser().token},getSubmit:function(n){for(var t in n){var e=n[t];n[t]=window.$fn.isValid(e)?e:""}return n},getBody:function(n){for(var t in n){var e=n[t];window.$fn.isValid(e)||(n[t]="")}return n}},S={setTitle:function(n){window.document.title=n},copy:function(n){return JSON.parse(JSON.stringify(n))},deepCopy:function(n){return function n(t){var e=Array.isArray(t)?[]:{};if(t&&"object"===typeof t)for(var o in t)t.hasOwnProperty(o)&&(t[o]&&"object"===typeof t[o]?e[o]=n(t[o]):e[o]=t[o]);return e}(n)},lazy:function(n){return Object(v.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n().then((function(n){return n.default})));case 1:case"end":return t.stop()}}),t)})))()},getValue:function(n){return window.$fn.isFunction(n)?n(n):n}},R={loading:function(n,t){var e=document.querySelector("#jzer-loading");e&&(n?(e.querySelector(".jzer-loading-msg").innerHTML=t||"\u6570\u636e\u52a0\u8f7d\u4e2d",e.style.display="block"):e.style.display="none")},toast:function(n,t){return Object(v.a)(w.a.mark((function e(){var o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=t||1500,(o=document.querySelector("#jzer-toast"))&&(o.style.display="block",o.querySelector(".jzer-toast-msg").innerHTML=n,-1!==t&&(clearTimeout(window.toastClear),window.toastClear=setTimeout((function(){o.style.display="none"}),t)));case 3:case"end":return e.stop()}}),e)})))()}},$={recordSkip:function(n){window.$fn.local("m-skip",encodeURIComponent(window.location.hash))},getSkipRecord:function(){var n=window.$fn.local("m-skip"),t=decodeURIComponent(n).replace("#","");return"/login"===t&&(t="/"),setTimeout((function(){return window.$fn.remove("m-skip")}),200),window.$fn.local("m-skip")?t:null},go:function(n){var t=n||"/login",e=window.location,o=e.port,r=e.protocol,i=e.hostname,c=e.pathname,a=80===o?"":":"+o;window.location.replace(r+"//"+i+a+c+"#"+t)},back:function(){window.history.back()}},A=Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},h),k),C),S),R),$),{},{c0:"#4da1ff",hash:function(){return window.location.hash.replace("#","")},path:function(){var n=window.$fn.hash();return n=n.split("?"),n[0]},pathFirst:function(){var n=window.$fn.hash();return(n=(n=n.replace("/","")).split("/"))[0]},pathLast:function(n){return n=(n=(n=n||window.$fn.path()).split("/"))[n.length-1]},getFileName:function(){var n=window.$fn.query().json;return n||(n=(n=window.$fn.path()).replace("/json","")),n+"/"+window.$fn.pathLast(n)},getFile:function(){var n=window.$fn.query().json;return n||(n=(n=window.$fn.path()).replace("/json","")),n},isCss:function(){return window.location.hash.includes("/css/")},getJsName:function(){var n=window.$fn.path().split("/"),t=n.length;return{name:n[t-2],page:n[t-1]}},getHump:function(n){return n.replace(/-(\w)/g,(function(n,t){return t.toUpperCase()}))},getCssStr:function(n){return n.replace(/([A-Z])/g,"-$1").toLowerCase()},style:{k:{color:"#333",fontWeight:"bold"},b:{color:"#ff0080",fontWeight:"bold"},g:{color:"#999"},p:{color:"#30b030"},op:{color:"#0099CC"},v:{color:"#8000ff"},v1:{color:"brown"},a:{color:"#049EF4",textDecoration:"underline"},t:{color:"pink"},h5:{color:"#f63"},bg:{background:"#fdf7f2"}},copyText:function(n){var t=document.querySelector("#copy");t||((t=document.createElement("textarea")).id="copy",t.style.cssText="position:absolute;left:0;bottom:-10000px;z-index:-1;opacity:0",document.body.appendChild(t)),t.value=n,t.select(),document.execCommand("copy"),window.$fn.toast("\u590d\u5236\u6210\u529f",200)},platform:function(n,t,e){var o=navigator.userAgent,r=o.indexOf("Android")>-1||o.indexOf("Linux")>-1,i=!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),c=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);return n&&n(),t&&t(),e&&e(),{isAndroid:r,isIos:i,isPc:!c}}}),T=e(20),D=e.n(T),E={encode:function(n,t){return D.a.AES.encrypt(t,D.a.enc.Utf8.parse(n),{mode:D.a.mode.ECB,padding:D.a.pad.Pkcs7}).toString()},decode:function(n,t){return D.a.AES.decrypt(t,D.a.enc.Utf8.parse(n),{mode:D.a.mode.ECB,padding:D.a.pad.Pkcs7}).toString(D.a.enc.Utf8)}},U="afsdfwrwttt_&try/#gf=fas_*423487",N=function(n,t,e,o,r){if(l.env){var i=["red","green","orange"];console.log("%c ==================================\u3010 ".concat(n," \u3011\u3010 ").concat(t," \u3011=================================="),"color:"+i[r]),console.log(" \u53c2\u6570\uff1a",e||{}),console.log(" \u6570\u636e\uff1a",o),console.log("%c \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 end ","color:"+i[r])}},P=function(n,t,e){var o="http://192.168.0.102:3308/api/"+n;return new Promise((function(n,r){"get"===e&&(o+=function(n){if(!A.hasObject(n))return"";var t=n,e="";for(var o in t)A.isValid(t[o])&&(e+=o+"="+t[o]+"&");return"&"===e.charAt(e.length-1)&&(e=e.slice(0,e.length-1)),e?"?"+e:encodeURI(e)}(t)),fetch(o,{method:e,body:"post"===e?JSON.stringify(t):null,headers:{"Content-Type":"application/json;charset=utf-8"},mode:"cors"}).then((function(n){var t=n.status,e=n.ok;return 200===t&&!0===e?n.json():{}})).then((function(i){var c=i.code,a=i.data,u=i.msg;200===c?(n(a),N(e,o,t,a,1)):(A.toast(u),r(a)),A.loading(!1)}),(function(n){A.toast("".concat(o," \u8bf7\u6c42\u51fa\u9519"),-1),A.loading(!1)}))}))},J={local:function(n,t){var e=t||{},o=e.loading,r=e.md,i=e.type,c=void 0===i?"text":i;return!1!==o&&window.$fn.loading(!0),new Promise((function(t,e){var i="text"===c?".html":".json";fetch(window.$config.api()+n+i).then((function(e){if(!1!==o&&window.$fn.loading(!1),200===e.status&&n)return e[c]().then((function(e){if("text"===c){r&&(e=function(n){return E.decode(U,n)}(e));try{e=JSON.parse(e)}catch(o){e=[]}}N("local",n,{},e,1),t(e)}),(function(t){return!1!==o&&window.$fn.toast(n+" \u4e0d\u5b58\u5728\uff0c\u6216\u6570\u636e\u683c\u5f0f\u9519\u8bef",-1),null}));window.$fn.toast("\u6570\u636e\u8bf7\u6c42\u51fa\u9519")}))}))},post:function(n,t){var e=Object(f.a)({param:{},loadingText:"\u6570\u636e\u52a0\u8f7d\u4e2d..."},t);return A.loading(!0,e.loadingText+"..."),P(n,e.param,"post").then((function(n){return A.toast("\u64cd\u4f5c\u6210\u529f",200),n}))},uploader:function(n){var t=n.target.files[0],e=new FileReader;return e.readAsText(t),new Promise((function(n){e.onload=function(t){n(this.result)}}))},encode:function(n){return E.encode(U,n)}},_={css:function(n){return n||""}},z=e(16),B=e(17),I=e(19),L=e(18),F=e(1),M=function(n){return function(t){Object(I.a)(o,t);var e=Object(L.a)(o);function o(){var n;Object(z.a)(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={Component:null},n}return Object(B.a)(o,[{key:"componentDidMount",value:function(){var t=Object(v.a)(w.a.mark((function t(){var e,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e=t.sent,o=e.default,this.setState({Component:o});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.Component;return n?Object(F.jsx)(n,Object(f.a)({},this.props)):null}}]),o}(o.Component)},q=e(73),H=function(){var n=Object(v.a)(w.a.mark((function n(t){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t().then((function(n){return n.default})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),V=function(n,t){return function(e){Object(I.a)(r,e);var o=Object(L.a)(r);function r(){var n;Object(z.a)(this,r);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return(n=o.call.apply(o,[this].concat(e))).state={Component:null},n}return Object(B.a)(r,[{key:"componentDidMount",value:function(){var e=Object(v.a)(w.a.mark((function e(){var o,r,i=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:o=e.sent,r=o.default,t?(clearTimeout(this.clear),this.clear=setTimeout((function(){i.setState({Component:r},(function(){var n,t;return null===(n=(t=i.props).onRef)||void 0===n?void 0:n.call(t,i.refs.ref)}))}),500)):this.setState({Component:r},(function(){var n,t;return null===(n=(t=i.props).onRef)||void 0===n?void 0:n.call(t,i.refs.ref)}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout(this.clear)}},{key:"render",value:function(){var n=this.state.Component;return n?Object(F.jsx)(n,Object(f.a)({ref:"ref"},this.props)):null}}]),r}(o.Component)},W=function(n,t){return function(e){Object(I.a)(i,e);var o=Object(L.a)(i);function i(){var n;Object(z.a)(this,i);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return(n=o.call.apply(o,[this].concat(e))).state={Component:null},n}return Object(B.a)(i,[{key:"componentDidMount",value:function(){var e=Object(v.a)(w.a.mark((function e(){var o,i,c=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:o=e.sent,i=o.default,t?(clearTimeout(this.clear),this.clear=setTimeout((function(){c.setState({Component:r.a.forwardRef(i)},(function(){var n,t;return null===(n=(t=c.props).onRef)||void 0===n?void 0:n.call(t,c.refs.ref)}))}),500)):this.setState({Component:r.a.forwardRef(i)},(function(){var n,t;return null===(n=(t=c.props).onRef)||void 0===n?void 0:n.call(t,c.refs.ref)}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.Component;return n?Object(F.jsx)(n,Object(f.a)({ref:"ref"},this.props)):null}}]),i}(o.Component)},X={load:M,router:q.a,file:H,state:V,hook:W};window.$config=l,window.$fn=A,window.$http=J,window.$=_,window.$lazy=X;var Z=window.$lazy,G=Z.load((function(){return Promise.all([e.e(2),e.e(19),e.e(30)]).then(e.bind(null,302))})),K=Z.load((function(){return e.e(35).then(e.bind(null,303))})),Q=Z.load((function(){return e.e(33).then(e.bind(null,304))})),Y=Z.hook((function(){return e.e(24).then(e.bind(null,287))})),nn=Z.hook((function(){return e.e(28).then(e.bind(null,288))})),tn=Z.hook((function(){return e.e(25).then(e.bind(null,305))})),en=Z.hook((function(){return e.e(27).then(e.bind(null,289))})),on=Z.hook((function(){return e.e(26).then(e.bind(null,306))})),rn=Z.hook((function(){return e.e(29).then(e.bind(null,307))})),cn=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(G,{}),Object(F.jsx)(K,{}),Object(F.jsx)(Q,{}),Object(F.jsxs)(Y,{width:"99.5%",className:"p5",onRef:function(n){return window.modalRef=n},setData:function(n){var t=n.data,e=n.way;setTimeout((function(){var n,o,r,i,c,a,u,s,l,f,d,p;switch(e){case"html":null===(n=window)||void 0===n||null===(o=n.codeHtmlRef)||void 0===o||null===(r=o.setData)||void 0===r||r.call(o,t);break;case"css":null===(i=window)||void 0===i||null===(c=i.codeCssRef)||void 0===c||null===(a=c.setData)||void 0===a||a.call(c,t);break;case"js":null===(u=window)||void 0===u||null===(s=u.codeJsRef)||void 0===s||null===(l=s.setData)||void 0===l||l.call(s,t);break;default:null===(f=window)||void 0===f||null===(d=f.codeRef)||void 0===d||null===(p=d.setData)||void 0===p||p.call(d,t)}}),200)},children:[Object(F.jsx)(nn,{onRef:function(n){return window.codeRef=n}}),Object(F.jsx)(tn,{onRef:function(n){return window.codeCssRef=n}}),Object(F.jsx)(en,{onRef:function(n){return window.codeJsRef=n}}),Object(F.jsx)(on,{onRef:function(n){return window.codeHtmlRef=n}})]}),Object(F.jsx)(rn,{onRef:function(n){return window.modalRunJsRef=n}})]})},an=document.getElementById("app-root");c.a.createRoot(an).render(Object(F.jsx)(cn,{})),an.setAttribute("version",c.a.version),document.body.removeChild(document.getElementById("app-loading")),window.$data={}},71:function(n,t,e){"use strict";var o=e(16),r=e(17),i=e(19),c=e(18),a=e(9),u=e.n(a),s=e(39),l=e.n(s),f=function(n){Object(i.a)(e,n);var t=Object(c.a)(e);function e(){return Object(o.a)(this,e),t.apply(this,arguments)}return Object(r.a)(e,[{key:"componentDidMount",value:function(){this.pop=document.createElement("div"),document.body.appendChild(this.pop),this.renderLayer()}},{key:"componentDidUpdate",value:function(){this.renderLayer()}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.pop)}},{key:"renderLayer",value:function(){l.a.createRoot(this.pop).render(this.props.children)}},{key:"render",value:function(){return null}}]),e}(u.a.Component);t.a=f},73:function(n,t,e){"use strict";var o=e(7),r=e(4),i=e.n(r),c=e(8),a=e(16),u=e(17),s=e(19),l=e(18),f=e(9),d=e(71),p=e(1),h=function(){return Object(p.jsx)(d.a,{children:Object(p.jsx)("div",{className:"loading-wraper",children:Object(p.jsx)("div",{children:Object(p.jsxs)("dl",{className:"loading-circle",children:[Object(p.jsxs)("dd",{children:[Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{})]}),Object(p.jsxs)("dd",{children:[Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{})]}),Object(p.jsxs)("dd",{children:[Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{}),Object(p.jsx)("i",{})]})]})})})})};t.a=function(n){return t=function(){return e(265)("./"+n)},function(n){Object(s.a)(r,n);var e=Object(l.a)(r);function r(){var n;Object(a.a)(this,r);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=e.call.apply(e,[this].concat(o))).state={Component:function(){return Object(p.jsx)(h,{})}},n}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var n=Object(c.a)(i.a.mark((function n(){var e,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e=n.sent,o=e.default,this.setState({Component:o});case 5:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.Component;return n?Object(p.jsx)(n,Object(o.a)({},this.props)):null}}]),r}(f.Component);var t}}},[[266,21,22]]]);