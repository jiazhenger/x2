(this["webpackJsonpjia-study"]=this["webpackJsonpjia-study"]||[]).push([[239],{270:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(3),n=a(4),o=a(6),l=a(5),c=a(0),i=a.n(c),s=a(796),p={title:"\u4e00\u4e2a\u65b9\u4fbf\u7684\u7c7b\uff0c\u5b83\u5c01\u88c5\u4e86\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u9700\u8981\u7684\u4e00\u4e9bwidget",keyword:"WidgetsApp( )",type:"WidgetsApp",data:[{keyword:"color",type:"Color",pro:"\u64cd\u4f5c\u7cfb\u7edf\u754c\u9762\u4e2d\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7684\u4e3b\u8272",link:"/flutter/style/Colors"},{keyword:"builder",type:"Widget Function( BuildContext, Widget )",pro:"\u521b\u5efa\u4e00\u4e2awidget",code:[{path:"flutter/app/MaterialApp/builder"}]},{keyword:"textStyle",type:"TextStyle",pro:"\u6587\u672c\u6837\u5f0f",link:"/flutter/style/TextStyle"},{keyword:"home",type:"Widget",pro:"\u4e3b\u9875\u9762"},{deviceTitle:"\u6807\u9898",keyword:"title",type:"String",pro:"andorid:\u4efb\u52a1\u7ba1\u7406\u5668\u7684\u7a0b\u5e8f\u5feb\u7167\u4e4b\u4e0a; ios:\u7a0b\u5e8f\u5207\u6362\u7ba1\u7406\u5668\u4e2d; web: \u6d4f\u89c8\u5668\u4e2d title"},{keyword:"onGenerateTitle",type:"String Function( BuildContext )",pro:"\u751f\u6210\u6807\u9898\uff0c\u6d4f\u89c8\u5668\u4e2d\u76f8\u5f53\u4e8e title",code:[{path:"flutter/app/MaterialApp/onGenerateTitle"}]},{deviceTitle:"\u8def\u7531",keyword:"initialRoute",type:"String",pro:"\u521d\u59cb\u8def\u7531\uff0c\u9ed8\u8ba4\u503c\u4e3a Window.defaultRouteName",link:"/flutter/app/router/base-router"},{keyword:"routes",type:"Map<String, WidgetBuilder>",pro:"\u8def\u7531\u6302\u8f7d\u5904",link:"/flutter/app/router/base-router"},{keyword:"navigatorObservers",type:"List<NavigatorObserver>",pro:"\u8def\u7531\u76d1\u542c\u5668",code:[{path:"flutter/app/MaterialApp/navigatorObservers"}],link:[{title:"settings",url:"/flutter/app/router/router-info"},{title:"Route",url:"/flutter/app/router/Route"}]},{keyword:"navigatorKey",type:"GlobalKey<NavigatorState>",pro:"\u5bfc\u822a\u952e",code:[{path:"flutter/app/MaterialApp/navigatorKey"}]},{keyword:"onGenerateRoute",type:"Route<dynamic> Function( RouteSettings )",pro:"\u8def\u7531\u62e6\u622a\uff0c\u5f53\u5e94\u7528\u7a0b\u5e8f\u88ab\u5bfc\u822a\u5230\u6307\u5b9a\u8def\u7531\u65f6\u6267\u884c",code:[{path:"flutter/app/MaterialApp/onGenerateRoute"}],link:[{title:"settings",url:"/flutter/app/router/settings"}]},{keyword:"onUnknownRoute",type:"Route<dynamic> Function( RouteSettings )",pro:"\u8def\u7531\u672a\u627e\u5230\u65f6\u6267\u884c",code:[{path:"flutter/app/MaterialApp/onUnknownRoute"}],link:[{title:"settings",url:"/flutter/app/router/router-info"}]},{keyword:"pageRouteBuilder:",type:"PageRoute<T> Function<T>(RouteSettings, Widget Function(BuildContext))",pro:"\u5f53\u5e94\u7528\u7a0b\u5e8f\u5bfc\u822a\u5230\u6307\u5b9a\u8def\u7531\u65f6\u4f7f\u7528\u7684PageRoute\u751f\u6210\u5668\u56de\u8c03"},{deviceTitle:"\u8c03\u8bd5",keyword:"debugShowWidgetInspector:",type:"bool",pro:"\u6253\u5f00\u4e00\u4e2a\u5141\u8bb8\u68c0\u67e5\u5c0f\u90e8\u4ef6\u6811\u7684\u8986\u76d6"},{keyword:"debugShowCheckedModeBanner:",type:"bool",pro:"\u663e\u793a debug \u56fe\u6807, \u9ed8\u8ba4 true"},{keyword:"checkerboardRasterCacheImages:",type:"bool",pro:"\u6253\u5f00\u68cb\u76d8\u683c\u5c42\u6e32\u67d3\u5230\u5c4f\u5e55\u5916\u7684\u4f4d\u56fe, \u9ed8\u8ba4 false"},{keyword:"checkerboardOffscreenLayers:",type:"bool",pro:"\u68cb\u76d8\u683c\u5c42, \u9ed8\u8ba4 false"},{keyword:"showPerformanceOverlay:",type:"bool",pro:"\u663e\u793a\u6027\u80fd\u6807\u7b7e, \u9ed8\u8ba4 false"},{keyword:"showSemanticsDebugger:",type:"bool",pro:"\u663e\u793a\u8bed\u4e49\u8c03\u8bd5\u5668\uff0c\u6253\u5f00\u663e\u793a\u6846\u67b6\u62a5\u544a\u7684\u53ef\u8bbf\u95ee\u6027\u4fe1\u606f\u7684\u8986\u76d6\uff0c\u6807\u6ce8\u51fa\u6240\u6709\u7684\u76d2\u5b50\uff0c \u9ed8\u8ba4 false"},{deviceTitle:"\u8bed\u8a00",keyword:"locale:",type:"Locale",pro:"\u533a\u57df\u503c",link:"/flutter/style/locale/Locale"},{keyword:"localizationsDelegates:",type:"Iterable<LocalizationsDelegate<dynamic>>",pro:"\u672c\u5730\u5316\u59d4\u6258\uff0c\u8fd9\u4e2a\u56de\u8c03\u8d1f\u8d23\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u4ee5\u53ca\u7528\u6237\u66f4\u6539\u8bbe\u5907\u7684\u533a\u57df\u8bbe\u7f6e\u65f6\u9009\u62e9\u5e94\u7528\u7a0b\u5e8f\u7684\u533a\u57df\u8bbe\u7f6e",code:[{path:"flutter/app/MaterialApp/localizationsDelegates"}]},{keyword:"localeResolutionCallback:",type:"Locale Function( Locale, Iterable<Locale> )",pro:"\u66f4\u6539\u7cfb\u7edf\u8bed\u8a00\u8bbe\u7f6e\u65f6\u6267\u884c",code:[{path:"flutter/app/MaterialApp/localeResolutionCallback"}]},{keyword:"localeListResolutionCallback:",type:"Locale Function( List<Locale>, Iterable<Locale> )",pro:"\u66f4\u6539\u7cfb\u7edf\u8bed\u8a00\u8bbe\u7f6e\u65f6\u6267\u884c",code:[{path:"flutter/app/MaterialApp/localeListResolutionCallback"}]},{keyword:"supportedLocales:",type:"Iterable<Locale>",pro:"\u652f\u6301\u533a\u57df\uff0c\u6b64\u5e94\u7528\u7a0b\u5e8f\u5df2\u672c\u5730\u5316\u7684\u5730\u533a\u5217\u8868",code:[{path:"flutter/app/MaterialApp/supportedLocales"}],link:[{title:"Locale",url:"/flutter/style/locale/Locale"}]},{deviceTitle:"\u5176\u5b83",keyword:"inspectorSelectButtonBuilder:",type:"Widget Function(BuildContext, void Function())",pro:"\u6784\u5efaWidgetInspector\u7528\u4e8e\u5728\u89c6\u56fe\u548c\u68c0\u67e5\u6a21\u5f0f\u4e4b\u95f4\u5207\u6362\u7684\u5c0f\u90e8\u4ef6"}]},u=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(s.a,Object.assign({data:p},this.props))}}]),a}(i.a.Component)},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));a(792);var r=a(793),n=a(3),o=a(4),l=a(6),c=a(5),i=a(0),s=a.n(i),p=a(797),u=a(798),d=a(799),m=a(800),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,o=e.hasClick,l=e.onClick;e.hasGo;return s.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:l},s.a.createElement("div",{className:"fxm"},n?s.a.createElement("span",null,n,"\u3001"):s.a.createElement(p.a,{className:"f14"}),s.a.createElement("div",{className:"ml10"},t)),a&&s.a.createElement("span",{className:"c0"},r?s.a.createElement(u.a,{className:"f24"}):s.a.createElement(d.a,{className:"f24"})),o&&s.a.createElement("span",{className:"c0"},s.a.createElement(m.a,{className:"f24"})))},f=a(795),h=a(801),w=window.$fn,g=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,o=t.children;(w.hasArray(a)||n||o)&&e.setState({show:!e.state.show}),w.isString(r)&&e.props.history.push(r)},e.onShow=function(){w.showPhone(e.props.url)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,o=t.children,l=t.pro,c=t.keyword,i=t.code,p=t.deviceTitle,u=t.isGray,d=t.link,m=t.url,g=t.order,k=t.noOrder,b=t.isValue,v=t.hasShow,E=this.state.show;return s.a.createElement(s.a.Fragment,null,p&&s.a.createElement("h2",{className:"ptb10 c1 bbor1"},p),s.a.createElement("section",{className:"box"},s.a.createElement(y,{show:E,hasArrow:w.hasArray(i)||v||o,hasClick:w.isString(d),order:k?null:g,onClick:this.onClick},c&&s.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},c),a&&s.a.createElement("span",{className:"c0"},a),c&&!b?s.a.createElement("i",{className:"mlr10"},":"):s.a.createElement("i",{className:"ml10"}),n&&c&&[s.a.createElement(h.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),s.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},n)],l&&s.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==E&&(w.hasArray(i)||v||o)?s.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:w.hasArray(d)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(i)&&i.map((function(e,t){return s.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&s.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),s.a.createElement(f.a,{type:"text",url:e.path}))})),o,m&&s.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},s.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(d)&&s.a.createElement("div",{className:"mt10"},d.map((function(t,a){return s.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},s.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(s.a.Component)},795:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(3),n=a(4),o=a(6),l=a(5),c=a(0),i=a.n(c),s=window.$http,p=window.$fn,u=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={data:[]},e.getText=function(t){s.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){s.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this,r=function(t){var r=this;clearTimeout(e),e=setTimeout((function(){-1===r.className.indexOf("fix_lt")?(a.setState({full:"fix_lt wh i10"}),document.querySelector(".page-content").style.overflow="visible"):(a.setState({full:""}),document.querySelector(".page-content").style.removeProperty("overflow"))}),200)};window.addEventListener("keydown",(function(e){e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=r)})),window.addEventListener("keyup",(function(e){!e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=null)}))}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url,n=t.full;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),i.a.createElement("section",{ref:"code",className:"oxys ".concat(n?"abs_full":""),style:{maxHeight:n?"none":"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container h ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component)},796:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(792);var r=a(793),n=a(3),o=a(4),l=a(6),c=a(5),i=a(0),s=a.n(i),p=a(93),u=a(794),d=a(801),m=window.$fn,y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return s.a.createElement("div",null,m.hasObject(a)&&a.keyword&&s.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&s.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&s.a.createElement("span",{className:"mr5 g9"},a.grayText),s.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[s.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),s.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},a.type)],s.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&s.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),s.a.createElement("div",null,m.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?s.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title," : "):null,t.deviceTitle?s.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle," : "):null,s.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return s.a.createElement(p.a,{className:"page-content"},this.props.preContent,a?t.data.map((function(e,t){return s.a.createElement(n,{key:t,data:e,index:t+1})})):s.a.createElement(n,{data:t}),this.props.lastContent)}}]),a}(s.a.Component)},797:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},o=a(29),l=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="ShareAltOutlined";t.a=r.forwardRef(l)},798:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},o=a(29),l=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="UpCircleOutlined";t.a=r.forwardRef(l)},799:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},o=a(29),l=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="DownCircleOutlined";t.a=r.forwardRef(l)},800:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},o=a(29),l=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="RightCircleOutlined";t.a=r.forwardRef(l)},801:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},o=a(29),l=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="ArrowRightOutlined";t.a=r.forwardRef(l)}}]);