import{r as i}from"./chunks/index.6f4b9552.js";import{i as y,c as x}from"./chunks/counterStore.9db07c7a.js";function m(e,t,o){let n=new Set([...t,void 0]);return e.listen((r,u)=>{n.has(u)&&o(r,u)})}var p={exports:{}},d={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i.exports;function v(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _=typeof Object.is=="function"?Object.is:v,E=s.useState,h=s.useEffect,k=s.useLayoutEffect,w=s.useDebugValue;function O(e,t){var o=t(),n=E({inst:{value:o,getSnapshot:t}}),r=n[0].inst,u=n[1];return k(function(){r.value=o,r.getSnapshot=t,f(r)&&u({inst:r})},[e,o,t]),h(function(){return f(r)&&u({inst:r}),e(function(){f(r)&&u({inst:r})})},[e]),w(o),o}function f(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!_(e,o)}catch{return!0}}function R(e,t){return t()}var j=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?R:O;d.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:j;(function(e){e.exports=d})(p);function C(e,t={}){let o=i.exports.useCallback(r=>t.keys?m(e,t.keys,r):e.listen(r),[t.keys,e]),n=e.get.bind(e);return p.exports.useSyncExternalStore(o,n,n)}var a={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=i.exports,b=Symbol.for("react.element"),g=Symbol.for("react.fragment"),L=Object.prototype.hasOwnProperty,P=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var n,r={},u=null,l=null;o!==void 0&&(u=""+o),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)L.call(t,n)&&!D.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:b,type:e,key:u,ref:l,props:r,_owner:P.current}}c.Fragment=g;c.jsx=S;c.jsxs=S;(function(e){e.exports=c})(a);const T=()=>{const[e,t]=i.exports.useState(0),o=C(x);return a.exports.jsx("div",{children:a.exports.jsxs("button",{title:"A React Component",onClick:()=>{t(e+1),y()},children:["React State: ",e," Shared State: ",o]})})};export{T as default};
