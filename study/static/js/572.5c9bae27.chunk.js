(this["webpackJsonpjia-study"]=this["webpackJsonpjia-study"]||[]).push([[572],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(4),o=a(6),c=a(5),s=a(0),l=a.n(s),i=a(93),m=a(794),u=a(804),p=window.$fn,d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){p.setTitle("\u5b57\u4f53\u6837\u5f0f"),p.hidePhone()}},{key:"render",value:function(){return l.a.createElement(i.a,{className:"page-content"},l.a.createElement(m.a,{order:1,keyword:"font-family",pro:"\u5b57\u4f53\u540d\u79f0",code:[{path:"css/style/font/font-family"}]},l.a.createElement(u.a,{styleName:"fontFamily",data:{radio:["SimSum","SimHei","Microsoft YaHei","Arial","Tahoma,Verdana,Arial,sans-serif"]}})),l.a.createElement(m.a,{order:2,keyword:"font-size",pro:"\u5b57\u4f53\u5927\u5c0f",code:[{path:"css/style/font/font-size"}]}),l.a.createElement(m.a,{order:3,keyword:"font-style",pro:"\u503e\u659c",code:[{path:"css/style/font/font-style"}]}),l.a.createElement(m.a,{order:4,keyword:"font-weight",pro:"\u52a0\u7c97",code:[{path:"css/style/font/font-weight"}]},l.a.createElement(u.a,{styleName:"fontWeight",data:{radio:["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"]}})),l.a.createElement(m.a,{order:5,keyword:"font-variant",pro:"\u5c06\u5c0f\u5199\u5b57\u6bcd\u8f6c\u4e3a\u5927\u5199",code:[{path:"css/style/font/font-variant"}]},l.a.createElement(u.a,{styleName:"fontVariant",data:{radio:["normal","small-caps"]}})),l.a.createElement(m.a,{order:6,keyword:"line-height",pro:"\u884c\u9ad8",code:[{path:"css/style/font/line-height"}]},l.a.createElement(u.a,{styleName:"lineHeight",data:{radio:["normal","30px","50px","1em","2em","100%","200%"]}})),l.a.createElement(m.a,{keyword:"font",pro:"[font-weight] [font-style] [font-variant] [font-size]/[line-height] [font-family]",code:[{path:"css/style/font/font"}]}))}}]),a}(l.a.Component)},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));a(792);var n=a(793),r=a(3),o=a(4),c=a(6),s=a(5),l=a(0),i=a.n(l),m=a(797),u=a(798),p=a(799),d=a(800),f=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,o=e.hasClick,c=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:c},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(u.a,{className:"f24"}):i.a.createElement(p.a,{className:"f24"})),o&&i.a.createElement("span",{className:"c0"},i.a.createElement(d.a,{className:"f24"})))},h=a(795),y=a(801),v=window.$fn,E=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,o=t.children;(v.hasArray(a)||r||o)&&e.setState({show:!e.state.show}),v.isString(n)&&e.props.history.push(n)},e.onShow=function(){v.showPhone(e.props.url)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,o=t.children,c=t.pro,s=t.keyword,l=t.code,m=t.deviceTitle,u=t.isGray,p=t.link,d=t.url,E=t.order,w=t.noOrder,b=t.isValue,k=t.hasShow,g=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(f,{show:g,hasArrow:v.hasArray(l)||k||o,hasClick:v.isString(p),order:w?null:E,onClick:this.onClick},s&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},s),a&&i.a.createElement("span",{className:"c0"},a),s&&!b?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&s&&[i.a.createElement(y.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},r)],c&&i.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==g&&(v.hasArray(l)||k||o)?i.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:v.hasArray(p)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(l)&&l.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(h.a,{type:"text",url:e.path}))})),o,d&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},795:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(4),o=a(6),c=a(5),s=a(0),l=a.n(s),i=window.$http,m=window.$fn,u=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:[]},e.getText=function(t){i.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){i.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this,n=function(t){var n=this;clearTimeout(e),e=setTimeout((function(){-1===n.className.indexOf("fix_lt")?(a.setState({full:"fix_lt wh i10"}),document.querySelector(".page-content").style.overflow="visible"):(a.setState({full:""}),document.querySelector(".page-content").style.removeProperty("overflow"))}),200)};window.addEventListener("keydown",(function(e){e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=n)})),window.addEventListener("keyup",(function(e){!e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=null)}))}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url,r=t.full;return m.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),l.a.createElement("section",{ref:"code",className:"oxys ".concat(r?"abs_full":""),style:{maxHeight:r?"none":"400px"}},e.length>0?l.a.createElement("div",{className:"code-list-container h ".concat(window.$fn.platform().isPc?"":"mobile")},l.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return l.a.createElement("dt",{key:t},t+1)}))),l.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return l.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):l.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(l.a.Component)},804:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(805);var n=a(807),r=a(806),o=a(3),c=a(4),s=a(6),l=a(5),i=a(0),m=a.n(i),u=window.$fn,p=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){var a=t.target.value;e.setState({value:a},(function(){e.props.getValue&&e.props.getValue(a)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,o=a.data,c=a.children,s=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,s,t),Object(r.a)(e,"color","#888"),e)},c||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(o.radio)&&o.radio.map((function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))}))))}}]),a}(m.a.Component)}}]);