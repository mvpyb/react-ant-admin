"use strict";(self.webpackChunkreact_ant_admin=self.webpackChunkreact_ant_admin||[]).push([[8884,6709,2150,2693,8880,3556,4954],{66709:function(n,e,t){t.r(e),t.d(e,{login:function(){return r}});t(77494);function r(n){return Promise.resolve({code:200,message:"success",data:{token:"admin-token"}})}},42150:function(n,e,t){t.r(e),t.d(e,{localStorageHandle:function(){return c},sessionStorageHandle:function(){return s}});var r=t(15671),a=t(43144),i=t(54562),o=function(){function n(e){(0,r.Z)(this,n),this.storage=e}return(0,a.Z)(n,[{key:"set",value:function(n,e){var t=this.storage;if(n){n="".concat(i.STORAGE_PREFIX,"_").concat(n);var r=JSON.stringify(e);t.setItem(n,r)}}},{key:"get",value:function(n){var e=this.storage;if(n){n="".concat(i.STORAGE_PREFIX,"_").concat(n);var t=e.getItem(n);if(""==t||null==t||"{}"==JSON.stringify(t))t="";else{var r=JSON.parse(t),a=r.expiration;a&&a<=(new Date).valueOf()?(this.remove(n),t=""):t=r}return t}return null}},{key:"remove",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=this.storage;n&&(e?this.clear():(n="".concat(i.STORAGE_PREFIX,"_").concat(n),t.removeItem(n)))}},{key:"clear",value:function(){this.storage.clear()}}]),n}(),s=new o(window.sessionStorage),c=new o(window.localStorage)},62693:function(n,e,t){t.r(e);var r,a,i,o,s,c,l,u,d,f,m,g,p=t(30168),h=t(81795),v={loginContainer:(0,h.iv)(r||(r=(0,p.Z)(["\n      width: 100%;\n      min-height: 100%;\n      padding: 160px 0 144px;\n      position: relative;\n      background-image: url('~@/assets/imgs/bgimg.svg');\n    "]))),body:(0,h.iv)(a||(a=(0,p.Z)(["\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);\n    border-radius: 4px;\n    border: 1px solid #e6ebf5;\n    background-color: #fff;\n    padding: 20px 30px;\n  "]))),fixWidth:(0,h.iv)(i||(i=(0,p.Z)(["\n    min-width: 260px;\n    width: 390px;\n    margin: 0 auto;\n  "]))),top:(0,h.iv)(o||(o=(0,p.Z)(["\n    .header{\n      position: relative;\n      padding-top: 20px;\n    }\n  "]))),logos:(0,h.iv)(s||(s=(0,p.Z)(["\n    text-align: center;\n    margin: 30px 0 15px;\n  "]))),desc:(0,h.iv)(c||(c=(0,p.Z)(["\n    text-align: center;\n    font-size: 14px;\n    color: rgba(0,0,0,.45);\n    margin-top: 12px;\n    margin-bottom: 40px;\n  "]))),main:(0,h.iv)(l||(l=(0,p.Z)(["\n    .title{\n      font-size : 20px;\n      text-align: center;\n      font-weight:bold;\n      color: #000;\n    }\n    .footLink{\n      text-align: center;\n      .linkItem{\n        margin: 0;\n        font-size: 12px;\n        color:#1890ff;\n      }\n    }\n  "]))),footer:(0,h.iv)(u||(u=(0,p.Z)(["\n  \n  "]))),loginForm:(0,h.iv)(d||(d=(0,p.Z)(["\n    max-width: 300px;\n  "]))),loginFormForgot:(0,h.iv)(f||(f=(0,p.Z)(["\n    float: right;\n  "]))),loginFormButton:(0,h.iv)(m||(m=(0,p.Z)(["\n    width: 100%;\n  "]))),imgCode:(0,h.iv)(g||(g=(0,p.Z)(["\n    display: inline-block;\n    width: 100%;\n    height: 36px;\n    cursor: pointer;\n    &:hover {\n      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n    }\n  "])))};e.default=v},78884:function(n,e,t){t.r(e);var r=t(74165),a=t(15861),i=t(29439),o=t(34706),s=t(81642),c=t(71570),l=t(14954),u=t(93098),d=t(97214),f=t(46938),m=t(62693),g=t(10161);e.default=(0,d.Zh)()((function(n){var e=n.t;(0,s.Z)(e("login.title"));var t=(0,o.useState)(!1),d=(0,i.Z)(t,2),p=d[0],h=d[1],v=(0,u.s0)(),x=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:v("/");case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,g.jsx)("div",{className:"".concat(m.default.loginContainer," un-select"),children:(0,g.jsxs)("div",{className:"".concat(m.default.body," ").concat(m.default.fixWidth),children:[(0,g.jsxs)("div",{className:m.default.top,children:[(0,g.jsx)(c.default,{className:m.default.logos}),(0,g.jsxs)("div",{className:m.default.desc,children:[" ",e("login.subTitle")]})]}),(0,g.jsx)("div",{className:m.default.main,children:(0,g.jsx)(f.Z,{spinning:p,tip:e("login.loading"),children:(0,g.jsx)(l.default,{loginFailed:function(){},loginSuccess:x,loginStart:function(){h(!0)}})})}),(0,g.jsx)("div",{className:m.default.footer,children:(0,g.jsx)("div",{className:m.default.desc})})]})})}))},13556:function(n,e,t){t.r(e);var r,a,i,o=t(30168),s=t(81795),c={logoContainer:(0,s.iv)(r||(r=(0,o.Z)(["\n    text-align: center;\n    "]))),img:(0,s.iv)(a||(a=(0,o.Z)(["\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    vertical-align: middle;\n    margin-right: 10px;\n  "]))),name:(0,s.iv)(i||(i=(0,o.Z)(["\n    vertical-align: middle;\n    font-weight: 400;\n    font-size: 26px;\n    color: rgba(156, 52, 41, 1);\n    font-style: normal;\n    letter-spacing: 0px;\n    line-height: 42px;\n    text-decoration: none;\n    &.name2 {\n      color: rgba(22, 23, 22, 1);\n    }\n  "])))};e.default=c},71570:function(n,e,t){t.r(e);t(34706);var r=t(13556),a=t(12512),i=t(10161);e.default=function(){return(0,i.jsxs)("div",{className:r.default.logoContainer,children:[(0,i.jsx)("img",{className:r.default.img,src:a.Z,alt:"logo"}),(0,i.jsx)("span",{className:"".concat(r.default.name),children:"A"}),(0,i.jsx)("span",{className:"".concat(r.default.name," name2"),children:"nt "}),(0,i.jsx)("span",{className:"".concat(r.default.name),children:"D"}),(0,i.jsx)("span",{className:"".concat(r.default.name," name2"),children:"esign"})]})}},14954:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r=t(1413),a=t(74165),i=t(15861),o=t(34706),s=t(48754),c=t(39201),l=t(2066),u=t(42150),d=t(66709),f=t(29429),m=t(59855),g=t(4223),p=t(27249),h=t(72936),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},x=t(70237),w=function(n,e){return o.createElement(x.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:e,icon:v}))};w.displayName="LockOutlined";var Z=o.forwardRef(w),b=t(62693),j=t(15548),k=t(10161),y=f.Z.Item,N=function(n){var e=(0,s.I0)(),t=function(n){return n?((0,l.validPhone)(n),{pass:!0}):{pass:!1,message:"\u8d26\u53f7\u683c\u5f0f\u9519\u8bef"}},v={username:[{validator:function(n,e){try{var r=t(e);return r&&r.pass?Promise.resolve():Promise.reject(r.message||"\u8d26\u53f7\u683c\u5f0f\u9519\u8bef")}catch(a){return Promise.reject(a)}}}],password:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{type:"string",min:8},{type:"string",max:16}]},x={remember:!0,username:"admin",password:"password"},w={colon:!1,hidden:!1},N=o.createRef(),F=function(){var n=u.localStorageHandle.get("login_info");if(n&&n.remember){var e=n.username,t=n.password;x={remember:!0,username:e,password:t}}else x={remember:!1,username:"",password:""}};(0,o.useEffect)((function(){return F}),[]);var S=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(r){var i,o,s,l,f,m,g,p,h,v;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.username,o=r.password,s=r.remember,l=n.loginStart,f=n.loginSuccess,m=n.loginFailed,g=n.loginComplete,l&&l(),s?u.localStorageHandle.set("login_info",{username:i,password:o,remember:!0,expiration:(new Date).valueOf()+6048e5}):u.localStorageHandle.remove("login_info"),t.prev=4,t.next=7,(0,d.login)({username:i,password:o});case 7:if(p=t.sent,h=p.code,v=p.data,200!=h){t.next=14;break}return t.next=12,e((0,c.SET_TOKEN)(v.token));case 12:(0,j.getCookie)("token"),f&&f();case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),m&&m(t.t0);case 19:return t.prev=19,g&&g(),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[4,16,19,22]])})));return function(n){return t.apply(this,arguments)}}();return(0,k.jsxs)(f.Z,{ref:N,name:"passwordLogin",className:b.default.loginForm,scrollToFirstError:!0,validateTrigger:["onChange","onBlur"],initialValues:x,onFinish:S,onFinishFailed:function(n){console.log("onFinishFailed",n)},onFieldsChange:function(n,e){},onValuesChange:function(n,e){},children:[(0,k.jsx)(y,(0,r.Z)((0,r.Z)({name:"username",rules:v.username},w),{},{children:(0,k.jsx)(m.Z,{allowClear:!0,maxLength:11,prefix:(0,k.jsx)(h.Z,{}),placeholder:"username"})})),(0,k.jsx)(y,(0,r.Z)((0,r.Z)({name:"password",rules:v.password},w),{},{children:(0,k.jsx)(m.Z,{maxLength:16,prefix:(0,k.jsx)(Z,{}),type:"password",placeholder:"Password",onPressEnter:function(){N.current.submit()}})})),(0,k.jsxs)(y,{children:[(0,k.jsx)(y,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,k.jsx)(g.Z,{children:"\u8bb0\u4f4f\u5bc6\u7801"})}),(0,k.jsx)("a",{className:b.default.loginFormForgot,href:"#!",children:"\u5fd8\u8bb0\u5bc6\u7801"})]}),(0,k.jsx)(y,{children:(0,k.jsx)(p.ZP,{type:"primary",htmlType:"submit",className:b.default.loginFormButton,children:"\u767b\u5f55"})}),(0,k.jsx)(y,{children:"\u8d26\u53f7 \uff1a admin | editor \uff0c \u5bc6\u7801 \uff1apassword"})]})}},81642:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(34706);var a=function(n){var e=(0,r.useRef)(n);return e.current=n,e},i=(t(65953),function(n){var e=a(n);(0,r.useEffect)((function(){return function(){e.current()}}),[])}),o=!("undefined"===typeof window||!window.document||!window.document.createElement),s={restoreOnUnmount:!1};var c=function(n,e){void 0===e&&(e=s);var t=(0,r.useRef)(o?document.title:"");(0,r.useEffect)((function(){document.title=n}),[n]),i((function(){e.restoreOnUnmount&&(document.title=t.current)}))}},65953:function(n,e,t){t.d(e,{mf:function(){return r}});var r=function(n){return"function"===typeof n}}}]);