!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"#floorBtnView {\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n    width: 50px;\r\n    float: left;\r\n}\r\n#elevatorsView {\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n    float: left;\r\n}\r\n#elevatorsView > div {\r\n    margin-left: 10px;\r\n    float: left;\r\n    border: 1px solid #ffcccc;\r\n}\r\n.floor {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.floorBtn {\r\n    background: #9c89f6;\r\n    border: 1px solid #a1a1a1;\r\n    border-radius: 3px;\r\n    color: #FFF;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n.disable {\r\n    background: #a1a1a1;\r\n    border: 1px solid #a1a1a1;\r\n    border-radius: 3px;\r\n    color: #FFF;\r\n    cursor: not-allowed;\r\n    text-align: center;\r\n}\r\n.current {\r\n    border: 3px solid #a1a1a1;\r\n}\r\n.moving {\r\n    background: #f5a1c7;\r\n    opacity: 0.5;\r\n}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,u=[],f=n(4);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function v(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),v(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=m(e)),r=E.bind(null,n,a,!1),o=E.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),v(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function E(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";n.r(e),function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}();n(0);var r={stateMap:{stop:1,moving:2}};function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.className="elevator"+e,this.el=document.createElement("div"),this.el.classList.add(this.className),this.initialize(n)}var e,n,r;return e=t,(n=[{key:"initialize",value:function(t){for(var e=t;e>0;e--){var n=document.createElement("div");n.classList.add("floor"),n.setAttribute("value",e),this.el.appendChild(n),1===e&&n.classList.add("current")}document.getElementById("elevatorsView").appendChild(this.el)}},{key:"move",value:function(t){this.el.getElementsByClassName("current")[0].classList.remove("moving"),this.el.getElementsByClassName("current")[0].classList.remove("current"),this.el.querySelector("[value='"+t+"']").classList.add("current"),this.el.querySelector("[value='"+t+"']").classList.add("moving")}},{key:"initUi",value:function(){this.el.getElementsByClassName("current")[0].classList.remove("moving")}}])&&o(e.prototype,n),r&&o(e,r),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=r.stateMap,c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.index=e,this.state=s.stop,this.location=1,this.stayingTime=0,this.view=new i(this.index,n)}var e,n,r;return e=t,(n=[{key:"getEstimateTime",value:function(t){var e=Math.abs(this.location-t);return e+=this.stayingTime}},{key:"changeState",value:function(t){this.state=t}},{key:"startMove",value:function(t){console.error(this.index+"호 엘리베이터가 "+t+" 층으로 움직임");var e=this,n=setTimeout(function(){clearTimeout(n),e.move(t)},1e3*this.stayingTime);e.changeState(s.moving)}},{key:"move",value:function(t){var e=this,n=setInterval(function(){e.view.move(e.location<t?++e.location:--e.location),e.location===t&&(clearInterval(n),e.changeState(s.stop),e.waiting(t))},1e3)}},{key:"waiting",value:function(t){var e=this,n=new CustomEvent("done",{detail:e.index}),r=setInterval(function(){--e.stayingTime,e.stayingTime<=0&&clearInterval(r)},1e3);e.stayingTime=3,e.view.initUi(),updateFloorBtn(t,!0),document.body.dispatchEvent(n)}}])&&a(e.prototype,n),r&&a(e,r),t}();var l=[],u=[],f=r.stateMap,d=new function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t.instance||(t.instance=this),this,this.setElevatorModels=function(t,e){for(var n=0;n<t;n++)l.push(new c(n,e))},this.request=function(t){if(l.find(function(e){return e.location===t&&e.state===f.stop}))console.error("가용할 수 있는 엘리베이터가 있습니다");else{var e=l.filter(function(t){return t.state!==f.moving}),n=0,r=1e4;0!==e.length?(e.forEach(function(e,o){var i=e.getEstimateTime(t);i<r&&(r=i,n=o)}),updateFloorBtn(t,!1),e[n].startMove(t)):(console.error("현재 엘리베이터가 모두 이동중이니 잠시만 기다려주세요.."),u.push(t))}},this.handleTaskQueue=function(t){u.length&&l[t.detail].startMove(u.pop())},document.body.addEventListener("done",this.handleTaskQueue),t.instance};var p=document.getElementById("floorBtnView"),v=function(t){var e=t.currentTarget,n=+e.getAttribute("value");e.classList.contains("disable")||d.request(n)},h=new function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t.instance||(t.instance=this),this.initialize=function(t){for(var e=t;e>0;e--){var n=document.createElement("div"),r=document.createElement("div");n.classList.add("floor"),r.classList.add("floorBtn"),r.setAttribute("value",e),r.innerText=e+"층",n.appendChild(r),p.appendChild(n),r.addEventListener("click",v)}},t.instance};Object.freeze(h);var m=h;var y=function(){var t=+document.getElementById("elevatorInput").value,e=+document.getElementById("floorInput").value;document.getElementById("intro").style.display="none",document.getElementById("app").style.display="block",b(t,e)},b=function(t,e){d.setElevatorModels(t,e),m.initialize(e)};(new function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t.instance||(t.instance=this),this.init=function(){document.getElementById("simulation").addEventListener("click",y),window.isFloorBtnActive=function(t){return p.querySelector("[value='"+t+"']").classList.contains("disable")},window.updateFloorBtn=function(t,e){p.querySelector("[value='"+t+"']").classList[e?"remove":"add"]("disable")}},t.instance}).init()}]);