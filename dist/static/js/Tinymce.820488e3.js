(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[23],{1383:function(e,t,n){},1506:function(e,t,n){"use strict";n.r(t);n(504);var a=n(505),c=n(0),r=n.n(c),o=(n(502),n(503)),i=n(31),l=n.n(i),s=n(55),u=n(34),d=n(124),m=[];var f=function(e,t){var n=document.getElementById(e),a=t||function(){};if(!n){var c=document.createElement("script");c.src=e,c.id=e,document.body.appendChild(c),m.push(a),("onload"in c?function(t){t.onload=function(){this.onerror=this.onload=null;var e,n=Object(d.a)(m);try{for(n.s();!(e=n.n()).done;){(0,e.value)(null,t)}}catch(a){n.e(a)}finally{n.f()}m=null},t.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+e),t)}}:function(e){e.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var t,n=Object(d.a)(m);try{for(n.s();!(t=n.n()).done;){(0,t.value)(null,e)}}catch(a){n.e(a)}finally{n.f()}m=null}}})(c)}n&&a&&(window.tinymce?a(null,n):m.push(a))},p=(n(1383),void 0),h="zh_CN",b=function(e){var t=e.tinymceId,n=void 0===t?"react-tinymce-".concat(+new Date).concat((1e3*Math.random()).toFixed(0)+""):t,a=e.value,i=e.toolbar,d=(e.menubar,e.height),m=void 0===d?600:d,b=e.width,g=void 0===b?"auto":b,y=(e.elStyle,e.editoInput),w=Object(c.useState)(!1),_=Object(u.a)(w,2),v=_[0],k=_[1],j=Object(c.useState)(!1),x=Object(u.a)(j,2),E=x[0],O=x[1],S=Object(c.useState)(!1),C=Object(u.a)(S,2),N=C[0],q=C[1],z=Object(c.useState)(g),F=Object(u.a)(z,2),I=F[0],T=F[1],D=Object(c.useRef)(null);Object(c.useEffect)(Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:return T(/^[\d]+(\.[\d]+)?$/.test(g)?"".concat(g,"px"):g),window.addEventListener("scroll",J,!0),e.abrupt("return",(function(){window.removeEventListener("scroll",J,!0),A()}));case 5:case"end":return e.stop()}}),e)}))),[]),Object(c.useEffect)(Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)}))),[v,E]);var J=function(e){},L=function(){f("https://resources.shadowcreator.com/project-sources/lib/tinymce5.7.1/tinymce.min.js",function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return p.$message.error(t.message),e.abrupt("return");case 3:return e.next=5,$();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},$=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tinymce.init({selector:"#".concat(n),language:h,height:m,body_class:"panel-body ",object_resizing:!0,toolbar:i&&i.length>0?i:"\n  undo redo removeformat fontsizeselect bold italic underline strikethrough forecolor backcolor\n alignleft aligncenter alignright alignjustify indent2em | outdent indent | lineheight letterspacing numlist bullist |\n ltr rtl image media blockquote table hr codesample checklist colorpicker\n",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,toolbar_mode:"sliding",content_css:"/static/custorm.css?rev="+(new Date).getTime(),content_style:".minganci { color: red; } em.minganci { font-style : normal; } p { margin : 0; padding : 0; }",lineheight_formats:"1 1.1 1.2 1.3 1.4 1.5 1.75 2",fontsize_formats:"12px 14px 16px 18px 24px 36px",file_picker_types:"file image media",file_picker_callback:function(e,t,n){},init_instance_callback:function(e){a&&e.setContent(a),O(!0),e.on("KeyUp SetContent SetAttrib Change",(function(){k(!0),y(e.getContent())}))},setup:function(e){e.on("FullscreenStateChanged",(function(e){q(e.state)}))}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=window.tinymce.get(n);N&&e.execCommand("mceFullScreen"),e&&e.destroy()};return r.a.createElement("div",{className:"editor-section ".concat(N?"fullscreen":""),style:{width:I}},r.a.createElement(o.a,{bordered:!1},r.a.createElement("div",{ref:D,className:"tinymce-container"},r.a.createElement("textarea",{id:n,className:"tinymce-textarea"}))))},g=function(){return r.a.createElement("p",null," \u6b64\u9875\u9762\u7528\u5230\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u662f ",r.a.createElement("a",{href:"https://www.tiny.cloud/docs/quick-start/"},"Tinymce"),"\u3002")};t.default=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(a.a,{message:r.a.createElement(g,null)}),r.a.createElement("br",null),r.a.createElement(b,{value:"<p> \u6b64\u9875\u9762\u7528\u5230\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u662f <a href='https://www.tiny.cloud/docs/quick-start/'>Tinymce</a>\u3002</p>",editoInput:function(e){}}))}}}]);