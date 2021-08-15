(this["webpackJsonpjia-study"]=this["webpackJsonpjia-study"]||[]).push([[323],{355:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(4),c=a(6),s=a(5),o=a(0),i=a.n(o),l=a(796),u={title:"Duration",isGroup:!0,data:[{title:"\u65f6\u957f",grayText:"const",keyword:"Duration( )",type:"Duration",data:[{keyword:"days",type:"int",pro:"\u5929\u6570"},{keyword:"hours",type:"int",pro:"\u5c0f\u65f6\u6570"},{keyword:"minutes",type:"int",pro:"\u5206\u949f\u6570 "},{keyword:"seconds",type:"int",pro:"\u79d2\u6570 "},{keyword:"milliseconds",type:"int",pro:"\u6beb\u79d2\u6570 "},{keyword:"microseconds",type:"int",pro:"\u5fae\u79d2\u6570 "},{noOrder:!0,pro:"\u7528\u6cd5",code:[{path:"dart/time/Duration/Duration"}]}]},{title:"\u96f6",grayText:"const",keyword:"Duration.zero",type:"Duration"},{title:"\u6bcf\u5929\u591a\u5c11\u5c0f\u65f6 => 24",grayText:"const",keyword:"Duration.hoursPerDay",type:"int"},{title:"\u6bcf\u5929\u591a\u5c11\u5206\u949f => 1440",grayText:"const",keyword:"Duration.minutesPerDay",type:"int"},{title:"\u6bcf\u5929\u591a\u5c11\u79d2 => 86400",grayText:"const",keyword:"Duration.secondsPerDay",type:"int"},{title:"\u6bcf\u5929\u591a\u5c11\u6beb\u79d2 => 86400000",grayText:"const",keyword:"Duration.millisecondsPerDay",type:"int"},{title:"\u6bcf\u5929\u591a\u5c11\u5fae\u79d2 => 86400000000",grayText:"const",keyword:"Duration.millisecondsPerDay",type:"int"},{title:"\u6bcf\u5c0f\u65f6\u591a\u5c11\u5206\u949f => 60",grayText:"const",keyword:"Duration.minutesPerHour",type:"int"},{title:"\u6bcf\u5c0f\u65f6\u591a\u5c11\u79d2 => 3600",grayText:"const",keyword:"Duration.secondsPerHour",type:"int"},{title:"\u6bcf\u5c0f\u65f6\u591a\u5c11\u6beb\u79d2 => 3600000",grayText:"const",keyword:"Duration.millisecondsPerHour",type:"int"},{title:"\u6bcf\u5c0f\u65f6\u591a\u5c11\u5fae\u79d2 => 3600000000",grayText:"const",keyword:"Duration.microsecondsPerHour",type:"int"},{title:"\u6bcf\u5206\u949f\u591a\u5c11\u5206\u79d2 => 60",grayText:"const",keyword:"Duration.secondsPerMinute",type:"int"},{title:"\u6bcf\u5206\u949f\u591a\u5c11\u6beb\u79d2 => 60000",grayText:"const",keyword:"Duration.millisecondsPerMinute",type:"int"},{title:"\u6bcf\u5206\u949f\u591a\u5c11\u5fae\u79d2 => 60000000",grayText:"const",keyword:"Duration.microsecondsPerMinute",type:"int"},{title:"\u6bcf\u79d2\u591a\u5c11\u6beb\u79d2 => 1000",grayText:"const",keyword:"Duration.millisecondsPerSecond",type:"int"},{title:"\u6bcf\u79d2\u591a\u5c11\u5fae\u79d2 => 1000000",grayText:"const",keyword:"Duration.microsecondsPerSecond",type:"int"},{title:"\u6bcf\u6beb\u79d2\u591a\u5c11\u5fae\u79d2 => 1000",grayText:"const",keyword:"Duration.microsecondsPerMillisecond",type:"int"}]},d=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(l.a,Object.assign({data:u},this.props))}}]),a}(i.a.Component)},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));a(792);var n=a(793),r=a(3),c=a(4),s=a(6),o=a(5),i=a(0),l=a.n(i),u=a(797),d=a(798),m=a(799),p=a(800),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return l.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},l.a.createElement("div",{className:"fxm"},r?l.a.createElement("span",null,r,"\u3001"):l.a.createElement(u.a,{className:"f14"}),l.a.createElement("div",{className:"ml10"},t)),a&&l.a.createElement("span",{className:"c0"},n?l.a.createElement(d.a,{className:"f24"}):l.a.createElement(m.a,{className:"f24"})),c&&l.a.createElement("span",{className:"c0"},l.a.createElement(p.a,{className:"f24"})))},f=a(795),h=a(801),w=window.$fn,g=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,c=t.children;(w.hasArray(a)||r||c)&&e.setState({show:!e.state.show}),w.isString(n)&&e.props.history.push(n)},e.onShow=function(){w.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,o=t.keyword,i=t.code,u=t.deviceTitle,d=t.isGray,m=t.link,p=t.url,g=t.order,k=t.noOrder,v=t.isValue,b=t.hasShow,E=this.state.show;return l.a.createElement(l.a.Fragment,null,u&&l.a.createElement("h2",{className:"ptb10 c1 bbor1"},u),l.a.createElement("section",{className:"box"},l.a.createElement(y,{show:E,hasArrow:w.hasArray(i)||b||c,hasClick:w.isString(m),order:k?null:g,onClick:this.onClick},o&&l.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},o),a&&l.a.createElement("span",{className:"c0"},a),o&&!v?l.a.createElement("i",{className:"mlr10"},":"):l.a.createElement("i",{className:"ml10"}),r&&o&&[l.a.createElement(h.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),l.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},r)],s&&l.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==E&&(w.hasArray(i)||b||c)?l.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:w.hasArray(m)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(i)&&i.map((function(e,t){return l.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&l.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),l.a.createElement(f.a,{type:"text",url:e.path}))})),c,p&&l.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},l.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(m)&&l.a.createElement("div",{className:"mt10"},m.map((function(t,a){return l.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},l.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(l.a.Component)},795:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(3),r=a(4),c=a(6),s=a(5),o=a(0),i=a.n(o),l=window.$http,u=window.$fn,d=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){l.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){l.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this,n=function(t){var n=this;clearTimeout(e),e=setTimeout((function(){-1===n.className.indexOf("fix_lt")?(a.setState({full:"fix_lt wh i10"}),document.querySelector(".page-content").style.overflow="visible"):(a.setState({full:""}),document.querySelector(".page-content").style.removeProperty("overflow"))}),200)};window.addEventListener("keydown",(function(e){e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=n)})),window.addEventListener("keyup",(function(e){!e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=null)}))}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url,r=t.full;return u.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",{ref:"code",className:"oxys ".concat(r?"abs_full":""),style:{maxHeight:r?"none":"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container h ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component)},796:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(792);var n=a(793),r=a(3),c=a(4),s=a(6),o=a(5),i=a(0),l=a.n(i),u=a(93),d=a(794),m=a(801),p=window.$fn,y=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return l.a.createElement("div",null,p.hasObject(a)&&a.keyword&&l.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&l.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&l.a.createElement("span",{className:"mr5 g9"},a.grayText),l.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[l.a.createElement(m.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),l.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},a.type)],l.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&l.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return p.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),l.a.createElement("div",null,p.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?l.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title," : "):null,t.deviceTitle?l.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle," : "):null,l.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return l.a.createElement(u.a,{className:"page-content"},this.props.preContent,a?t.data.map((function(e,t){return l.a.createElement(r,{key:t,data:e,index:t+1})})):l.a.createElement(r,{data:t}),this.props.lastContent)}}]),a}(l.a.Component)},797:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},c=a(29),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="ShareAltOutlined";t.a=n.forwardRef(s)},798:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},c=a(29),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="UpCircleOutlined";t.a=n.forwardRef(s)},799:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},c=a(29),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="DownCircleOutlined";t.a=n.forwardRef(s)},800:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},c=a(29),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="RightCircleOutlined";t.a=n.forwardRef(s)},801:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},c=a(29),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="ArrowRightOutlined";t.a=n.forwardRef(s)}}]);