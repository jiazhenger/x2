(this["webpackJsonpjia-study"]=this["webpackJsonpjia-study"]||[]).push([[576],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(4),c=a(6),l=a(5),o=a(0),s=a.n(o),i=a(93),d=a(794),p=a(804),u=window.$fn,m=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){u.setTitle("\u5185\u8865\u4e01"),u.hidePhone()}},{key:"render",value:function(){var e=this;return s.a.createElement(i.a,{className:"page-content"},s.a.createElement(d.a,{order:1,keyword:"padding-top",pro:"\u4e0a\u8fb9\u8ddd",code:[{path:"css/style/padding/padding-top"}]},s.a.createElement(p.a,{getValue:function(t){return e.setState({paddingTop:t})},data:{radio:["0","10px","20px","30px"]}},s.a.createElement("div",{style:{background:"yellow",paddingTop:this.state.paddingTop}},"padding"))),s.a.createElement(d.a,{order:2,keyword:"padding-right",pro:"\u53f3\u8fb9\u8ddd",code:[{path:"css/style/padding/padding-right"}]},s.a.createElement(p.a,{getValue:function(t){return e.setState({paddingRight:t})},data:{radio:["0","50px","100px","50%"]}},s.a.createElement("div",{style:{display:"inline-block",background:"yellow",paddingRight:this.state.paddingRight}},"padding"))),s.a.createElement(d.a,{order:3,keyword:"padding-bottom",pro:"\u4e0b\u8fb9\u8ddd",code:[{path:"css/style/padding/padding-bottom"}]},s.a.createElement(p.a,{getValue:function(t){return e.setState({paddingBottom:t})},data:{radio:["0","10px","20px","30px"]}},s.a.createElement("div",{style:{background:"yellow",paddingBottom:this.state.paddingBottom}},"padding"))),s.a.createElement(d.a,{order:4,keyword:"padding-left",pro:"\u5de6\u8fb9\u8ddd",code:[{path:"css/style/padding/padding-left"}]},s.a.createElement(p.a,{getValue:function(t){return e.setState({paddingLeft:t})},data:{radio:["0","50px","100px","50%"]}},s.a.createElement("div",{style:{background:"yellow",paddingLeft:this.state.paddingLeft}},"padding"))),s.a.createElement(d.a,{keyword:"padding",pro:"[padding-top] [padding-right] [padding-bottom] [padding-left]",code:[{path:"css/style/padding/padding"}]},s.a.createElement(p.a,{getValue:function(t){return e.setState({padding:t})},data:{radio:["20px","50px","10%","10px 20px 30px 40px","20px 0","0 20px","10px 20px 30px"]}},s.a.createElement("div",{style:{display:"inline-block",background:"yellow",padding:this.state.padding}},"padding"))))}}]),a}(s.a.Component)},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));a(792);var n=a(793),r=a(3),c=a(4),l=a(6),o=a(5),s=a(0),i=a.n(s),d=a(797),p=a(798),u=a(799),m=a(800),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,l=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:l},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(d.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(p.a,{className:"f24"}):i.a.createElement(u.a,{className:"f24"})),c&&i.a.createElement("span",{className:"c0"},i.a.createElement(m.a,{className:"f24"})))},y=a(795),f=a(801),g=window.$fn,v=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,c=t.children;(g.hasArray(a)||r||c)&&e.setState({show:!e.state.show}),g.isString(n)&&e.props.history.push(n)},e.onShow=function(){g.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,l=t.pro,o=t.keyword,s=t.code,d=t.deviceTitle,p=t.isGray,u=t.link,m=t.url,v=t.order,E=t.noOrder,b=t.isValue,w=t.hasShow,k=this.state.show;return i.a.createElement(i.a.Fragment,null,d&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},d),i.a.createElement("section",{className:"box"},i.a.createElement(h,{show:k,hasArrow:g.hasArray(s)||w||c,hasClick:g.isString(u),order:E?null:v,onClick:this.onClick},o&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:g.stop},o),a&&i.a.createElement("span",{className:"c0"},a),o&&!b?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&o&&[i.a.createElement(f.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},r)],l&&i.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==k&&(g.hasArray(s)||w||c)?i.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:g.hasArray(u)?"10px 0 5px":"10px 0"},onClick:g.stop},g.hasArray(s)&&s.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(y.a,{type:"text",url:e.path}))})),c,m&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),g.hasArray(u)&&i.a.createElement("div",{className:"mt10"},u.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},795:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(3),r=a(4),c=a(6),l=a(5),o=a(0),s=a.n(o),i=window.$http,d=window.$fn,p=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){i.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){i.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this,n=function(t){var n=this;clearTimeout(e),e=setTimeout((function(){-1===n.className.indexOf("fix_lt")?(a.setState({full:"fix_lt wh i10"}),document.querySelector(".page-content").style.overflow="visible"):(a.setState({full:""}),document.querySelector(".page-content").style.removeProperty("overflow"))}),200)};window.addEventListener("keydown",(function(e){e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=n)})),window.addEventListener("keyup",(function(e){!e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=null)}))}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url,r=t.full;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),s.a.createElement("section",{ref:"code",className:"oxys ".concat(r?"abs_full":""),style:{maxHeight:r?"none":"400px"}},e.length>0?s.a.createElement("div",{className:"code-list-container h ".concat(window.$fn.platform().isPc?"":"mobile")},s.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return s.a.createElement("dt",{key:t},t+1)}))),s.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return s.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):s.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(s.a.Component)},804:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(805);var n=a(807),r=a(806),c=a(3),l=a(4),o=a(6),s=a(5),i=a(0),d=a.n(i),p=window.$fn,u=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){var a=t.target.value;e.setState({value:a},(function(){e.props.getValue&&e.props.getValue(a)}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,l=a.children,o=a.styleName;return d.a.createElement("section",{className:"bor1 r5px p10 mtb10"},d.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,o,t),Object(r.a)(e,"color","#888"),e)},l||"\u6d4b\u8bd5\u6837\u4f8b test case"),d.a.createElement(n.a.Group,{onChange:this.onChange,value:t},p.hasArray(c.radio)&&c.radio.map((function(e,t){return d.a.createElement(n.a,{key:t,value:e},d.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))}))))}}]),a}(d.a.Component)}}]);