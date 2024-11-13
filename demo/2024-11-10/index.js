(()=>{var n={662:(n,t,e)=>{"use strict";e.d(t,{A:()=>d});var r=e(898),o=e.n(r),i=e(75),a=e.n(i),c=e(786),s=e.n(c),p=new URL(e(350),e.b),l=a()(o()),u=s()(p);l.push([n.id,`* {\n    padding: 0;\n    margin: 0;\n}\nhtml {\n    background: rgb(0, 169, 234) url(${u}) 0 0 repeat;\n    background-size: 750px auto;\n}\nbody {\n    font-family: Helvetica;\n\n}\n.main {\n    padding: 106px 38px;\n}\n.main-hd {\n    color: rgb(255, 255, 255);\n    font-size: 56px;\n    font-weight: 700;\n    line-height: 58px;\n    letter-spacing: 0px;\n    text-align: center;\n}\n.main-bd {\n    margin-top: 32px;\n}\n.main-block {\n    padding-bottom: 60px;\n    margin: 0 auto;\n}\n.main-block-title {\n    width: 602px;\n    height: 180px;\n    margin: 0 auto;\n}\n.main-block-title-img {\n    width: 100%;\n}\n.main-block-content {\n    margin-top: 24px;\n    box-sizing: border-box;\n    border: 1px solid rgb(255, 255, 255);\n    border-radius: 32px;\n    background: rgb(255, 255, 255);\n    padding: 60px 40px;\n}\n.main-block-content-li {\n    display: flex;\n    align-items: flex-start;\n    color: rgb(0, 0, 0);\n    padding-bottom: 60px;\n}\n.main-block-content .main-block-content-li:last-child {\n    padding-bottom: 0;\n}\n.main-block-content-hd {\n    margin-right: 24px;\n    width: 80px;\n    height: 80px;\n}\n.main-block-title-img {\n    width: 100%;\n}\n.main-block-content-name {\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 30px;\n}\n.main-block-content-name-wrap {\n    display: inline-block;\n    position: relative;\n}\n.main-block-content-name-txt {\n    position: relative;\n    z-index: 1;\n}\n.main-block-content-name-bg {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 12px;\n    width: 100%;\n    background-color: rgb(255, 229, 0);\n    z-index: 0;\n}\n\n.main-block-content-intro{\n    font-size: 28px;\n    font-weight: 400;\n    line-height: 41px;\n    margin-top: 6px;\n}\n.main-block-content-btn {\n    margin-top: 32px;\n    display: block;\n    width: 394px;\n    height: 72px;\n    border-radius: 12px;\n    background: rgb(0, 169, 234);\n    color: rgb(255, 255, 255);\n    font-size: 28px;\n    font-weight: 500;\n    line-height: 72px;\n    text-align: center;\n    text-decoration: none;\n}\n.main-block-content-code {\n    margin-top: 32px;\n    margin-left: 37px;\n}\n.main-block-content-code-img {\n    width: 316px;\n    height: 316px;\n}\n`,""]);const d=l},75:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},786:n=>{"use strict";n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},898:n=>{"use strict";n.exports=function(n){return n[1]}},30:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>b});var r=e(857),o=e.n(r),i=e(846),a=e.n(i),c=e(974),s=e.n(c),p=e(281),l=e.n(p),u=e(613),d=e.n(u),f=e(674),m=e.n(f),g=e(662),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),o()(g.A,h);const b=g.A&&g.A.locals?g.A.locals:void 0},857:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var d=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=r(n,o),p=0;p<i.length;p++){var l=e(i[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},974:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},613:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},281:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},846:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},674:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},350:(n,t,e)=>{"use strict";n.exports=e.p+"f35cbb7a1d8ce0000f5a.png"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,e(30)})();