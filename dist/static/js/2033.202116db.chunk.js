"use strict";(self.webpackChunkreact_ant_admin=self.webpackChunkreact_ant_admin||[]).push([[2033,1999],{40059:function(n,e,o){o.r(e),o(34706);var t=o(31276),c=o(49158),r=o(81642),a=o(10161),i=function(){return(0,a.jsxs)("p",{children:[" 此页面用到的富文本编辑器是 ",(0,a.jsx)("a",{href:"https://www.tiny.cloud/docs/quick-start/",children:"Tinymce"}),"。"]})};e.default=function(){return(0,r.Z)("Tynimce"),(0,a.jsxs)("div",{className:"app-container",children:[(0,a.jsx)(c.Z,{message:(0,a.jsx)(i,{})}),(0,a.jsx)("br",{}),(0,a.jsx)(t.default,{value:"<p> 此页面用到的富文本编辑器是 <a href='https://www.tiny.cloud/docs/quick-start/'>Tinymce</a>。</p>",editoInput:function(n){}})]})}},81642:function(n,e,o){o.d(e,{Z:function(){return i}});var t=o(34706),c=(o(65953),function(n){var e,o,c=(e=n,(o=(0,t.useRef)(e)).current=e,o);(0,t.useEffect)((function(){return function(){c.current()}}),[])}),r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={restoreOnUnmount:!1},i=function(n,e){void 0===e&&(e=a);var o=(0,t.useRef)(r?document.title:"");(0,t.useEffect)((function(){document.title=n}),[n]),c((function(){e.restoreOnUnmount&&(document.title=o.current)}))}},50398:function(n,e,o){function t(n){return Object.keys(n).reduce((function(e,o){return!o.startsWith("data-")&&!o.startsWith("aria-")&&"role"!==o||o.startsWith("data-__")||(e[o]=n[o]),e}),{})}o.d(e,{Z:function(){return t}})},49158:function(n,e,o){o.d(e,{Z:function(){return M}});var t=o(29439),c=o(4942),r=o(55909),a=o(78282),i=o(36827),s=o(81853),l=o(71503),u=o(23399),d=o.n(u),m=o(39296),p=o(34706),f=o(21571),g=o(50398),v=o(33222),h=o(15671),Z=o(43144),b=o(60136),y=o(29388),x=function(n){(0,b.Z)(o,n);var e=(0,y.Z)(o);function o(){var n;return(0,h.Z)(this,o),(n=e.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},n}return(0,Z.Z)(o,[{key:"componentDidCatch",value:function(n,e){this.setState({error:n,info:e})}},{key:"render",value:function(){var n=this.props,e=n.message,o=n.description,t=n.children,c=this.state,r=c.error,a=c.info,i=a&&a.componentStack?a.componentStack:null,s=void 0===e?(r||"").toString():e,l=void 0===o?i:o;return r?p.createElement(M,{type:"error",message:s,description:p.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},l)}):t}}]),o}(p.Component),C=x,w=o(12316),E=o(93537),S=o(53983),I=function(n,e,o,t,r){return(0,c.Z)({backgroundColor:n,border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(e)},"".concat(r,"-icon"),{color:o})},k=function(n){var e,o,t,r=n.componentCls,a=n.motionDurationSlow,i=n.marginXS,s=n.marginSM,l=n.fontSize,u=n.fontSizeLG,d=n.lineHeight,m=n.borderRadiusLG,p=n.motionEaseInOutCirc,f=n.alertIconSizeLG,g=n.colorText,v=n.paddingContentVerticalSM,h=n.alertPaddingHorizontal,Z=n.paddingMD,b=n.paddingContentHorizontalLG;return t={},(0,c.Z)(t,r,Object.assign(Object.assign({},(0,S.Wf)(n)),(e={position:"relative",display:"flex",alignItems:"center",padding:"".concat(v,"px ").concat(h,"px"),wordWrap:"break-word",borderRadius:m},(0,c.Z)(e,"&".concat(r,"-rtl"),{direction:"rtl"}),(0,c.Z)(e,"".concat(r,"-content"),{flex:1,minWidth:0}),(0,c.Z)(e,"".concat(r,"-icon"),{marginInlineEnd:i,lineHeight:0}),(0,c.Z)(e,"&-description",{display:"none",fontSize:l,lineHeight:d}),(0,c.Z)(e,"&-message",{color:g}),(0,c.Z)(e,"&".concat(r,"-motion-leave"),{overflow:"hidden",opacity:1,transition:"max-height ".concat(a," ").concat(p,", opacity ").concat(a," ").concat(p,",\n        padding-top ").concat(a," ").concat(p,", padding-bottom ").concat(a," ").concat(p,",\n        margin-bottom ").concat(a," ").concat(p)}),(0,c.Z)(e,"&".concat(r,"-motion-leave-active"),{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}),e))),(0,c.Z)(t,"".concat(r,"-with-description"),(o={alignItems:"flex-start",paddingInline:b,paddingBlock:Z},(0,c.Z)(o,"".concat(r,"-icon"),{marginInlineEnd:s,fontSize:f,lineHeight:0}),(0,c.Z)(o,"".concat(r,"-message"),{display:"block",marginBottom:i,color:g,fontSize:u}),(0,c.Z)(o,"".concat(r,"-description"),{display:"block"}),o)),(0,c.Z)(t,"".concat(r,"-banner"),{marginBottom:0,border:"0 !important",borderRadius:0}),t},O=function(n){var e=n.componentCls,o=n.colorSuccess,t=n.colorSuccessBorder,r=n.colorSuccessBg,a=n.colorWarning,i=n.colorWarningBorder,s=n.colorWarningBg,l=n.colorError,u=n.colorErrorBorder,d=n.colorErrorBg,m=n.colorInfo,p=n.colorInfoBorder,f=n.colorInfoBg;return(0,c.Z)({},e,{"&-success":I(r,t,o,n,e),"&-info":I(f,p,m,n,e),"&-warning":I(s,i,a,n,e),"&-error":Object.assign(Object.assign({},I(d,u,l,n,e)),(0,c.Z)({},"".concat(e,"-description > pre"),{margin:0,padding:0}))})},j=function(n){var e,o=n.componentCls,t=n.iconCls,r=n.motionDurationMid,a=n.marginXS,i=n.fontSizeIcon,s=n.colorIcon,l=n.colorIconHover;return(0,c.Z)({},o,(e={},(0,c.Z)(e,"&-action",{marginInlineStart:a}),(0,c.Z)(e,"".concat(o,"-close-icon"),(0,c.Z)({marginInlineStart:a,padding:0,overflow:"hidden",fontSize:i,lineHeight:"".concat(i,"px"),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer"},"".concat(t,"-close"),{color:s,transition:"color ".concat(r),"&:hover":{color:l}})),(0,c.Z)(e,"&-close-text",{color:s,transition:"color ".concat(r),"&:hover":{color:l}}),e))},N=function(n){return[k(n),O(n),j(n)]},z=(0,w.Z)("Alert",(function(n){var e=n.fontSizeHeading3,o=(0,E.TS)(n,{alertIconSizeLG:e,alertPaddingHorizontal:12});return[N(o)]})),B={success:r.Z,info:l.Z,error:a.Z,warning:s.Z},H=function(n){var e=n.icon,o=n.prefixCls,t=n.type,r=B[t]||null;return e?(0,v.wm)(e,p.createElement("span",{className:"".concat(o,"-icon")},e),(function(){return{className:d()("".concat(o,"-icon"),(0,c.Z)({},e.props.className,e.props.className))}})):p.createElement(r,{className:"".concat(o,"-icon")})},T=function(n){var e=n.isClosable,o=n.closeText,t=n.prefixCls,c=n.closeIcon,r=n.handleClose;return e?p.createElement("button",{type:"button",onClick:r,className:"".concat(t,"-close-icon"),tabIndex:0},o?p.createElement("span",{className:"".concat(t,"-close-text")},o):c):null},L=function(n){var e,o=n.description,r=n.prefixCls,a=n.message,s=n.banner,l=n.className,u=n.rootClassName,v=n.style,h=n.onMouseEnter,Z=n.onMouseLeave,b=n.onClick,y=n.afterClose,x=n.showIcon,C=n.closable,w=n.closeText,E=n.closeIcon,S=void 0===E?p.createElement(i.Z,null):E,I=n.action,k=function(n,e){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(o[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(t=Object.getOwnPropertySymbols(n);c<t.length;c++)e.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(n,t[c])&&(o[t[c]]=n[t[c]])}return o}(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),O=p.useState(!1),j=(0,t.Z)(O,2),N=j[0],B=j[1],L=p.useRef(),M=p.useContext(f.E_),W=M.getPrefixCls,P=M.direction,_=W("alert",r),R=z(_),G=(0,t.Z)(R,2),D=G[0],X=G[1],q=function(n){var e;B(!0),null===(e=k.onClose)||void 0===e||e.call(k,n)},A=!!w||C,U=function(){var n=k.type;return void 0!==n?n:s?"warning":"info"}(),V=!(!s||void 0!==x)||x,F=d()(_,"".concat(_,"-").concat(U),(e={},(0,c.Z)(e,"".concat(_,"-with-description"),!!o),(0,c.Z)(e,"".concat(_,"-no-icon"),!V),(0,c.Z)(e,"".concat(_,"-banner"),!!s),(0,c.Z)(e,"".concat(_,"-rtl"),"rtl"===P),e),l,u,X),J=(0,g.Z)(k);return D(p.createElement(m.ZP,{visible:!N,motionName:"".concat(_,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(n){return{maxHeight:n.offsetHeight}},onLeaveEnd:y},(function(n){var e=n.className,t=n.style;return p.createElement("div",Object.assign({ref:L,"data-show":!N,className:d()(F,e),style:Object.assign(Object.assign({},v),t),onMouseEnter:h,onMouseLeave:Z,onClick:b,role:"alert"},J),V?p.createElement(H,{description:o,icon:k.icon,prefixCls:_,type:U}):null,p.createElement("div",{className:"".concat(_,"-content")},a?p.createElement("div",{className:"".concat(_,"-message")},a):null,o?p.createElement("div",{className:"".concat(_,"-description")},o):null),I?p.createElement("div",{className:"".concat(_,"-action")},I):null,p.createElement(T,{isClosable:!!A,closeText:w,prefixCls:_,closeIcon:S,handleClose:q}))})))};L.ErrorBoundary=C;var M=L}}]);