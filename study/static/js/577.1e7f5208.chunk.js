(this["webpackJsonpjia-study"]=this["webpackJsonpjia-study"]||[]).push([[577],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(4),c=a(6),s=a(5),o=a(0),l=a.n(o),i=a(93),u=a(794),m=a(804),p=window.$fn,d=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={width:"50px",height:"50px"},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){p.setTitle("\u900f\u660e"),p.hidePhone()}},{key:"render",value:function(){var e=this;return l.a.createElement(i.a,{className:"page-content"},l.a.createElement(u.a,{order:1,keyword:"position",pro:"\u5b9a\u4f4d",code:[{path:"css/style/position/position"}]}),l.a.createElement(u.a,{order:2,keyword:"left",pro:"\u5de6\u79fb",code:[{path:"css/style/position/left"}]}),l.a.createElement(u.a,{order:3,keyword:"top",pro:"\u4e0a\u79fb",code:[{path:"css/style/position/top"}]}),l.a.createElement(u.a,{order:4,keyword:"right",pro:"\u53f3\u79fb",code:[{path:"css/style/position/right"}]}),l.a.createElement(u.a,{order:5,keyword:"bottom",pro:"\u4e0b\u79fb",code:[{path:"css/style/position/bottom"}]}),l.a.createElement(u.a,{order:6,keyword:"z-index",pro:"\u5c42\u53e0\u987a\u5e8f",code:[{path:"css/style/position/z-index"}]}),l.a.createElement(u.a,{pro:"\u793a\u4f8b",hasShow:!0},l.a.createElement("div",{className:"rel",style:{height:"100px",background:"red",border:"1px solid #666",boxSizing:"border-box"}},l.a.createElement("div",{style:{width:"50px",height:"50px",background:"green"}}),l.a.createElement("div",{style:{width:this.state.width,height:this.state.height,background:"yellow",position:this.state.position,left:this.state.left,top:this.state.top,right:this.state.right,bottom:this.state.bottom,zIndex:this.state.zIndex}})),l.a.createElement(m.a,{getValue:function(t){return e.setState({width:t})},data:{radio:["auto","50px","100%"]}},l.a.createElement("b",{className:"c1"},"width:")),l.a.createElement(m.a,{getValue:function(t){return e.setState({height:t})},data:{radio:["auto","50px","100%"]}},l.a.createElement("b",{className:"c1"},"height:")),l.a.createElement(m.a,{getValue:function(t){return e.setState({position:t})},data:{radio:["static","relative","absolute","fixed","sticky"]}},l.a.createElement("b",{className:"c1"},"position:")),l.a.createElement(m.a,{getValue:function(t){return e.setState({left:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},l.a.createElement("b",{className:"c1"},"left:")),l.a.createElement(m.a,{getValue:function(t){return e.setState({top:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},l.a.createElement("b",{className:"c1"},"top:")),l.a.createElement(m.a,{getValue:function(t){return e.setState({right:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},l.a.createElement("b",{className:"c1"},"right:")),l.a.createElement(m.a,{getValue:function(t){return e.setState({bottom:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},l.a.createElement("b",{className:"c1"},"bottom:")),l.a.createElement(m.a,{getValue:function(t){return e.setState({zIndex:t})},data:{radio:["0","1","-1","null"]}},l.a.createElement("b",{className:"c1"},"z-index:")),l.a.createElement("div",{style:{height:"500px"}})))}}]),a}(l.a.Component)},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a(792);var n=a(793),r=a(3),c=a(4),s=a(6),o=a(5),l=a(0),i=a.n(l),u=a(797),m=a(798),p=a(799),d=a(800),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(u.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(m.a,{className:"f24"}):i.a.createElement(p.a,{className:"f24"})),c&&i.a.createElement("span",{className:"c0"},i.a.createElement(d.a,{className:"f24"})))},f=a(795),y=a(801),E=window.$fn,b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,c=t.children;(E.hasArray(a)||r||c)&&e.setState({show:!e.state.show}),E.isString(n)&&e.props.history.push(n)},e.onShow=function(){E.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,o=t.keyword,l=t.code,u=t.deviceTitle,m=t.isGray,p=t.link,d=t.url,b=t.order,v=t.noOrder,g=t.isValue,w=t.hasShow,k=this.state.show;return i.a.createElement(i.a.Fragment,null,u&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},u),i.a.createElement("section",{className:"box"},i.a.createElement(h,{show:k,hasArrow:E.hasArray(l)||w||c,hasClick:E.isString(p),order:v?null:b,onClick:this.onClick},o&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(g?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},o),a&&i.a.createElement("span",{className:"c0"},a),o&&!g?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&o&&[i.a.createElement(y.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 i ar",style:{color:"pink"}},r)],s&&i.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==k&&(E.hasArray(l)||w||c)?i.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:E.hasArray(p)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(l)&&l.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(f.a,{type:"text",url:e.path}))})),c,d&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},795:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(3),r=a(4),c=a(6),s=a(5),o=a(0),l=a.n(o),i=window.$http,u=window.$fn,m=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){i.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){i.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this,n=function(t){var n=this;clearTimeout(e),e=setTimeout((function(){-1===n.className.indexOf("fix_lt")?(a.setState({full:"fix_lt wh i10"}),document.querySelector(".page-content").style.overflow="visible"):(a.setState({full:""}),document.querySelector(".page-content").style.removeProperty("overflow"))}),200)};window.addEventListener("keydown",(function(e){e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=n)})),window.addEventListener("keyup",(function(e){!e.ctrlKey&&t.refs.code&&(t.refs.code.onclick=null)}))}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url,r=t.full;return u.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),l.a.createElement("section",{ref:"code",className:"oxys ".concat(r?"abs_full":""),style:{maxHeight:r?"none":"400px"}},e.length>0?l.a.createElement("div",{className:"code-list-container h ".concat(window.$fn.platform().isPc?"":"mobile")},l.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return l.a.createElement("dt",{key:t},t+1)}))),l.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return l.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):l.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(l.a.Component)},804:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(805);var n=a(807),r=a(806),c=a(3),s=a(4),o=a(6),l=a(5),i=a(0),u=a.n(i),m=window.$fn,p=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){var a=t.target.value;e.setState({value:a},(function(){e.props.getValue&&e.props.getValue(a)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,s=a.children,o=a.styleName;return u.a.createElement("section",{className:"bor1 r5px p10 mtb10"},u.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,o,t),Object(r.a)(e,"color","#888"),e)},s||"\u6d4b\u8bd5\u6837\u4f8b test case"),u.a.createElement(n.a.Group,{onChange:this.onChange,value:t},m.hasArray(c.radio)&&c.radio.map((function(e,t){return u.a.createElement(n.a,{key:t,value:e},u.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))}))))}}]),a}(u.a.Component)}}]);