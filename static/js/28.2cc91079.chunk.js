(this.webpackJsonpreact18=this.webpackJsonpreact18||[]).push([[28,37],{267:function(t,r,n){"use strict";n.d(r,"a",(function(){return a}));var e=n(268);function a(t,r){if(t){if("string"===typeof t)return Object(e.a)(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(e.a)(t,r):void 0}}},268:function(t,r,n){"use strict";function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}n.d(r,"a",(function(){return e}))},269:function(t,r,n){"use strict";n.d(r,"a",(function(){return a}));var e=n(267);function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done)&&(n.push(i.value),!r||n.length!==r);e=!0);}catch(u){a=!0,c=u}finally{try{e||null==o.return||o.return()}finally{if(a)throw c}}return n}}(t,r)||Object(e.a)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},288:function(t,r,n){"use strict";n.r(r);var e=n(269),a=n(9),c=n.n(a),i=n(1);r.default=function(t,r){var n=t.data,a=c.a.useState([]),o=Object(e.a)(a,2),u=o[0],s=o[1];return c.a.useEffect((function(){Array.isArray(n)?s(n):"string"===typeof n&&s(n.split("\n"))}),[n]),c.a.useImperativeHandle(r,(function(){return{setData:function(t){Array.isArray(t)?s(t):s(t.split("\n"))}}})),Array.isArray(u)&&Object(i.jsxs)("div",{className:"code-list",children:[Object(i.jsx)("dl",{className:"code-number",children:u.map((function(t,r){return Object(i.jsx)("dt",{children:r+1},r)}))}),Object(i.jsx)("dl",{className:"code-content",children:u.map((function(t,r){return Object(i.jsx)("dd",{dangerouslySetInnerHTML:{__html:t}},r)}))})]})}}}]);