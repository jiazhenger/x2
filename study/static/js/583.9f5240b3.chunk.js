(this["webpackJsonpjia-study"]=this["webpackJsonpjia-study"]||[]).push([[583],{566:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(795);e.default=function(){return c.a.createElement(r.a,{url:"new/js/for",type:"text",full:!0})}},795:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(3),c=n(4),r=n(6),o=n(5),s=n(0),i=n.n(s),l=window.$http,u=window.$fn,d=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={data:[]},t.getText=function(e){l.getText(e).then((function(e){t.setState({data:e.split("\n")})}))},t.getDart=function(e){l.getDart(e).then((function(e){t.setState({data:e.split("\n")})}))},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t,e=this,n=this,a=function(e){var a=this;clearTimeout(t),t=setTimeout((function(){-1===a.className.indexOf("fix_lt")?(n.setState({full:"fix_lt wh i10"}),document.querySelector(".page-content").style.overflow="visible"):(n.setState({full:""}),document.querySelector(".page-content").style.removeProperty("overflow"))}),200)};window.addEventListener("keydown",(function(t){t.ctrlKey&&e.refs.code&&(e.refs.code.onclick=a)})),window.addEventListener("keyup",(function(t){!t.ctrlKey&&e.refs.code&&(e.refs.code.onclick=null)}))}},{key:"render",value:function(){var t=this.state.data,e=this.props,n=e.type,a=e.url,c=e.full;return u.hasArray(this.state.data)||this.props.async||("text"===n?this.getText(a):"dart"===n&&this.getDart(a)),i.a.createElement("section",{ref:"code",className:"oxys ".concat(c?"abs_full":""),style:{maxHeight:c?"none":"400px"}},t.length>0?i.a.createElement("div",{className:"code-list-container h ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},t.map((function(t,e){return i.a.createElement("dt",{key:e},e+1)}))),i.a.createElement("dl",{className:"code-content"},t.map((function(t,e){return i.a.createElement("dd",{key:e,dangerouslySetInnerHTML:{__html:t}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),n}(i.a.Component)}}]);