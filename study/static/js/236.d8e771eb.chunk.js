(this["webpackJsonpjia-study"]=this["webpackJsonpjia-study"]||[]).push([[236],{267:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var r=a(3),n=a(4),l=a(6),c=a(5),o=a(0),s=a.n(o),i=a(796),p={title:"AppBar \u5934\u90e8",keyword:"AppBar( )",type:"AppBar",data:[{deviceTitle:"\u6807\u9898\u8bbe\u7f6e",keyword:"title",type:"Widget",pro:"\u6807\u9898"},{keyword:"centerTitle",type:"bool",pro:"\u6807\u9898\u5728\u662f\u5426\u5c45\u4e2d"},{keyword:"titleSpacing",type:"double",pro:"\u6807\u9898\u4e4b\u95f4\u5256\u95f4\u8ddd"},{keyword:"toolbarOpacity",type:"double",pro:"\u6807\u9898\u900f\u660e\u5ea6 0~1"},{deviceTitle:"\u5176\u5b83\u63a7\u4ef6",keyword:"leading",type:"Widget",pro:"\u6807\u9898\u4e4b\u524d\u7684\u63a7\u4ef6\uff0c\u5982\uff1a\u8fd4\u56de\u6309\u94ae"},{keyword:"actions",type:"List<Widget>",pro:"\u4e00\u7ec4\u52a8\u4f5c\u64cd\u4f5c\u63a7\u4ef6"},{keyword:"actionsIconTheme",type:"IconThemeData",pro:"\u52a8\u4f5c\u64cd\u4f5c\u63a7\u4ef6\u7684\u4e3b\u9898",link:"/flutter/style/IconThemeData"},{keyword:"bottom",type:"PreferredSizeWidget",pro:"\u6807\u9898\u5e95\u90e8\u7684\u6807\u9898 AppBar( )"},{keyword:"bottomOpacity",type:"double",pro:"\u5e95\u90e8\u7684\u6807\u9898\u900f\u660e\u5ea6 0~1"},{keyword:"flexibleSpace",type:"Widget",pro:"\u4f4d\u4e8e\u5de5\u5177\u680f\u548c\u9009\u9879\u5361\u680f\u540e\u9762\u7684\u63a7\u4ef6\uff0c\u5b83\u7684\u9ad8\u5ea6\u5c06\u4e0e\u5e94\u7528\u7a0b\u5e8f\u680f\u7684\u603b\u9ad8\u5ea6\u76f8\u540c"},{keyword:"automaticallyImplyLeading",type:"bool",pro:"\u662f\u5426\u663e\u793a\u5c0f\u63a7\u4ef6"},{deviceTitle:"\u6574\u4e2a\u8bbe\u7f6e",keyword:"backgroundColor",type:"Color",pro:"\u80cc\u666f\u989c\u8272"},{keyword:"elevation",type:"double",pro:"\u9634\u5f71"},{keyword:"brightness",type:"Brightness",pro:"\u4eae\u5ea6",code:[{path:"flutter/public/Brightness"}]},{keyword:"iconTheme",type:"IconThemeData",pro:"\u56fe\u6807\u4e3b\u9898",link:"/flutter/style/IconThemeData"},{keyword:"preferredSize",type:"Size",pro:"\u5927\u5c0f",link:"/flutter/style/Size"},{keyword:"shape",type:"ShapeBorder",pro:"\u5f62\u72b6",code:[{path:"flutter/public/shape"}],link:[{title:"BeveledRectangleBorder",url:"/flutter/style/shape/BeveledRectangleBorder"},{title:"CircleBorder",url:"/flutter/style/shape/CircleBorder"},{title:"RoundedRectangleBorder",url:"/flutter/style/shape/RoundedRectangleBorder"},{title:"StadiumBorder",url:"/flutter/style/shape/StadiumBorder"},{title:"UnderlineInputBorder",url:"/flutter/style/shape/UnderlineInputBorder"},{title:"Border",url:"/flutter/style/border/Border"}]},{keyword:"textTheme",type:"TextTheme",pro:"\u6587\u672c\u4e3b\u9898",link:"/flutter/style/TextTheme"},{keyword:"primary",type:"bool",pro:"appBar \u662f\u5426\u663e\u793a\u5728\u5c4f\u5e55\u9876\u90e8"}]},d=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(i.a,Object.assign({data:p},this.props))}}]),a}(s.a.Component)},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a(792);var r=a(793),n=a(3),l=a(4),c=a(6),o=a(5),s=a(0),i=a.n(s),p=a(797),d=a(798),u=a(799),m=a(800),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,c=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:c},i.a.createElement("div",{className:"fxm"},n?i.a.createElement("span",null,n,"\u3001"):i.a.createElement(p.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},r?i.a.createElement(d.a,{className:"f24"}):i.a.createElement(u.a,{className:"f24"})),l&&i.a.createElement("span",{className:"c0"},i.a.createElement(m.a,{className:"f24"})))},h=a(795),f=a(801),w=window.$fn,b=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,l=t.children;(w.hasArray(a)||n||l)&&e.setState({show:!e.state.show}),w.isString(r)&&e.props.history.push(r)},e.onShow=function(){w.showPhone(e.props.url)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,c=t.pro,o=t.keyword,s=t.code,p=t.deviceTitle,d=t.isGray,u=t.link,m=t.url,b=t.order,k=t.noOrder,g=t.isValue,v=t.hasShow,E=this.state.show;return i.a.createElement(i.a.Fragment,null,p&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},p),i.a.createElement("section",{className:"box"},i.a.createElement(y,{show:E,hasArrow:w.hasArray(s)||v||l,hasClick:w.isString(u),order:k?null:b,onClick:this.onClick},o&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(g?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},o),a&&i.a.createElement("span",{className:"c0"},a),o&&!g?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),n&&o&&[i.a.createElement(f.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},n)],c&&i.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==E&&(w.hasArray(s)||v||l)?i.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:w.hasArray(u)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(s)&&s.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(h.a,{type:"text",url:e.path}))})),l,m&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(u)&&i.a.createElement("div",{className:"mt10"},u.map((function(t,a){return i.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},795:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(3),n=a(4),l=a(6),c=a(5),o=a(0),s=a.n(o),i=window.$http,p=window.$fn,d=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={data:[]},e.getText=function(t){i.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){i.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this,r=function(t){var r=this;clearTimeout(e),e=setTimeout((function(){-1===r.className.indexOf("fix_lt")?(a.setState({full:"fix_lt wh i10"}),document.querySelector(".page-content").style.overflow="visible"):(a.setState({full:""}),document.querySelector(".page-content").style.removeProperty("overflow"))}),200)};window.addEventListener("keydown",(function(e){e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=r)})),window.addEventListener("keyup",(function(e){!e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=null)}))}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url,n=t.full;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),s.a.createElement("section",{ref:"code",className:"oxys ".concat(n?"abs_full":""),style:{maxHeight:n?"none":"400px"}},e.length>0?s.a.createElement("div",{className:"code-list-container h ".concat(window.$fn.platform().isPc?"":"mobile")},s.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return s.a.createElement("dt",{key:t},t+1)}))),s.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return s.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):s.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(s.a.Component)},796:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(792);var r=a(793),n=a(3),l=a(4),c=a(6),o=a(5),s=a(0),i=a.n(s),p=a(93),d=a(794),u=a(801),m=window.$fn,y=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return i.a.createElement("div",null,m.hasObject(a)&&a.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&i.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&i.a.createElement("span",{className:"mr5 g9"},a.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[i.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},a.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,m.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title," : "):null,t.deviceTitle?i.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle," : "):null,i.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return i.a.createElement(p.a,{className:"page-content"},this.props.preContent,a?t.data.map((function(e,t){return i.a.createElement(n,{key:t,data:e,index:t+1})})):i.a.createElement(n,{data:t}),this.props.lastContent)}}]),a}(i.a.Component)},797:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},l=a(29),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ShareAltOutlined";t.a=r.forwardRef(c)},798:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},l=a(29),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="UpCircleOutlined";t.a=r.forwardRef(c)},799:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},l=a(29),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="DownCircleOutlined";t.a=r.forwardRef(c)},800:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},l=a(29),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="RightCircleOutlined";t.a=r.forwardRef(c)},801:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},l=a(29),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ArrowRightOutlined";t.a=r.forwardRef(c)}}]);