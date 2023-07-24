/**
 * name: tui-vue-log
 * version: v0.0.4
 * description: vue log tool
 * author: babytutu
 * homepage: https://github.com/babytutu/tui-vue-log
 */
(function(e,l){typeof exports=="object"&&typeof module<"u"?module.exports=l():typeof define=="function"&&define.amd?define(l):(e=typeof globalThis<"u"?globalThis:e||self,e.log=l())})(this,function(){"use strict";return{install:function(r,F){var i=F||{},c=i.border,t=c===void 0?"4px":c,v=i.background,f=v===void 0?["#606060","#409EFF"]:v,N=i.style,a=i.display,P=a===void 0?!0:a,b=N||"padding: 4px 8px; color: #fff;",g=Number(r.version.split(".")[0]);function x(T){var y="";if(g>2){var o,n,u=(r==null||(o=r.config)===null||o===void 0||(o=o.globalProperties)===null||o===void 0||(o=o.$route)===null||o===void 0?void 0:o.matched)||[];y=u.length?(n=u[u.length-1])===null||n===void 0||(n=n.components)===null||n===void 0||(n=n.default)===null||n===void 0?void 0:n.__file:""}for(var s=arguments.length,k=new Array(s>1?s-1:0),d=1;d<s;d++)k[d-1]=arguments[d];P&&console.log("%c".concat(T,"%c").concat(JSON.stringify(k)),"border-radius: ".concat(t," 0 0 ").concat(t,"; background: ").concat(f[0],"; ").concat(b),"border-radius: 0 ".concat(t," ").concat(t," 0; background: ").concat(f[1],"; ").concat(b),y.replace(/.*\/src(.*$)/,"$1"))}g>2?r.provide("log",x):r.prototype.log=x}}});
