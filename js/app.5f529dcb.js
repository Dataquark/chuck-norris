(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/chuck-norris/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"483e":function(t,e,n){"use strict";n("50bf")},"50bf":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container"},c={key:0,class:"container"},a={class:"randomFact"};function i(t,e,n,i,u,s){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("h1",null,Object(r["g"])(u.title),1),Object(r["e"])("div",o,[Object(r["i"])(Object(r["e"])("input",{type:"text",id:"name",placeholder:"Biror ism kiriting","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.chosenName=t})},null,512),[[r["h"],u.chosenName]]),Object(r["e"])("button",{onClick:e[2]||(e[2]=function(){return s.displayFact&&s.displayFact.apply(s,arguments)}),type:"submit"},"Generate")]),u.show?(Object(r["f"])(),Object(r["c"])("div",c,[Object(r["e"])("p",a,Object(r["g"])(u.chosenName)+Object(r["g"])(u.randomFact),1)])):Object(r["d"])("",!0)],64)}n("d3b7");var u={name:"App",data:function(){return{title:"Haqoiq al-Absurdiya",facts:[],randomFact:"",show:"",chosenName:""}},mounted:function(){var t=this;fetch("https://api.npoint.io/93927a01a065ebea6fa9/facts").then((function(t){return t.json()})).then((function(e){return t.facts=e})).catch((function(t){return console.log(t.message)}))},methods:{displayFact:function(){this.randomFact=this.facts[Math.floor(Math.random()*this.facts.length)]["fact"],this.show=!0,console.log(this.facts.length)}}};n("483e");u.render=i;var s=u;Object(r["b"])(s).mount("#app")}});
//# sourceMappingURL=app.5f529dcb.js.map