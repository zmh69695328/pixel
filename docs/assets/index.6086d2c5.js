var H=Object.defineProperty,K=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var I=(r,t,a)=>t in r?H(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,k=(r,t)=>{for(var a in t||(t={}))$.call(t,a)&&I(r,a,t[a]);if(N)for(var a of N(t))B.call(t,a)&&I(r,a,t[a]);return r},D=(r,t)=>K(r,W(t));var S=(r,t)=>{var a={};for(var l in r)$.call(r,l)&&t.indexOf(l)<0&&(a[l]=r[l]);if(r!=null&&N)for(var l of N(r))t.indexOf(l)<0&&B.call(r,l)&&(a[l]=r[l]);return a};import{R as e,r as c,a as z}from"./vendor.db5e15db.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}};J();var Q="/pixel/assets/img.8bb84cac.svg";const V=e.forwardRef((o,n)=>{var d=o,{width:r=0,height:t=0,ratio:a=1}=d,l=S(d,["width","height","ratio"]);const m=c.exports.useRef(null),w=c.exports.useCallback(i=>{m.current=i,typeof n=="function"?n(i):n&&(n.current=i)},[n]);return c.exports.useEffect(()=>{const i=m.current,h=i==null?void 0:i.getContext("2d");!i||!h||(r!==0&&t!==0&&(i.style.width=`${r}px`,i.style.height=`${t}px`),i.width=r*a,i.height=t*a,h.scale(a,a))},[m,r,t,a]),e.createElement("canvas",D(k({},l),{ref:w}))}),f=1;function X(r){return new Promise(t=>{setTimeout(t,r)})}const O=n=>{var o=n,{className:r="",children:t,type:a}=o,l=S(o,["className","children","type"]);return e.createElement("div",k({className:`cursor-default flex justify-center items-center border border-dotted bg-gray-50 rounded-lg text-gray-600 ${r}`},l),t)},Y=()=>{const r=c.exports.useRef(null),[t,a]=c.exports.useState(20),l=c.exports.useRef(null),[n,o]=c.exports.useState(""),d=c.exports.useRef(null),[m,w]=c.exports.useState(""),[i,h]=c.exports.useState("rgba(0,0,0,0)"),[A,C]=c.exports.useState(!0),[R,q]=c.exports.useState(null),F=c.exports.useRef(null),[g,M]=c.exports.useState("square"),b=c.exports.useCallback(()=>{d.current&&clearTimeout(d.current),d.current=window.setTimeout(async()=>{var P;const s=F.current;if(!s)return;const u=s==null?void 0:s.getContext("2d");if(!r.current||!u||!s)return;const{naturalWidth:x,naturalHeight:L}=r.current;u==null||u.clearRect(0,0,s.width,s.height),s.width=x*f,s.height=L*f,C(!0);const y=t;for(let E=0;E<L;E+=y)for(let v=0;v<x;v+=y){if(!r.current)return;u.save();const p=[v*f,E*f,y*f,y*f];g==="circle"&&(u.moveTo(p[0]+t/2,p[1]+t/2),u.arc(p[0]+t/2,p[1]+t/2,t/2,0,Math.PI*2),u.clip()),u.drawImage(r.current,v,E,1,1,...p),u.strokeStyle=i,u.strokeRect(...p),u.restore()}const G=((P=F.current)==null?void 0:P.toDataURL())||"";o(G),await X(100),C(!1)},100)},[t,i,g]),T=c.exports.useCallback(s=>{a(Number(s.target.value))},[]),j=c.exports.useCallback(s=>{M(s.target.value)},[]),U=c.exports.useCallback(async s=>{var x;const u=(x=s.target.files)==null?void 0:x[0];!u||(q(u),C(!0),w(URL.createObjectURL(u)))},[]);return c.exports.useEffect(()=>{!m||b()},[g,t,b,m]),e.createElement("div",{className:`h-screen  flex flex-col ${m?"bg-gray-50":"bg-white"}`},e.createElement("header",{className:`flex items-center shadow bg-white sticky top-0 py-2 px-4 ${m?"":"invisible"}`},e.createElement("img",{src:"site.png",className:"w-10",alt:""})),e.createElement("div",{className:"flex-grow mt-10 flex items-center justify-center"},e.createElement("div",{className:`${m?"":"invisible"}`},e.createElement("div",{className:"flex justify-center items-end"},e.createElement("img",{src:m,alt:"",className:"object-contain object-bottom",onClick:()=>{var s;(s=l.current)==null||s.click()},style:{width:300,height:300},ref:r,onLoad:b}),e.createElement("div",{className:"relative ml-20"},e.createElement("span",{style:{fontFamily:"'Press Start 2P'"},className:`absolute left-1/2 -translate-x-1/2 top-2 shadow-sm backdrop-filter backdrop-blur bg-gray-700 bg-opacity-40 text-xs text-white rounded font-medium py-1 px-2 ${A?"":"invisible"}`},"loading..."),e.createElement("img",{className:"object-contain object-bottom",src:n||m,alt:"",style:{width:500,height:500}}))),e.createElement("div",{className:"mt-10 pt-10 border-t border-solid justify-center flex items-center"},e.createElement("div",{className:"mx-6"},e.createElement("p",{className:"text-xs text-gray-400 mb-1"},"\u683C\u5B50\u5C3A\u5BF8"),e.createElement("input",{type:"range",min:1,max:100,step:1,value:t,onChange:T})),e.createElement("div",{className:"mx-6"},e.createElement("p",{className:"text-xs text-gray-400 mb-1"},"\u50CF\u7D20\u5F62\u72B6"),e.createElement("label",null,e.createElement("input",{type:"radio",name:"shape",value:"square",onChange:j,checked:g==="square"}),e.createElement("span",{className:"ml-1"},"\u6B63\u65B9\u5F62")),e.createElement("label",{className:"ml-4"},e.createElement("input",{type:"radio",name:"shape",value:"circle",onChange:j,checked:g==="circle"}),e.createElement("span",{className:"ml-1"},"\u5706\u5F62"))),e.createElement("div",{className:"mx-6 hidden"},e.createElement("p",{className:"text-xs text-gray-400 mb-1"},"\u8FB9\u6846\u989C\u8272"),e.createElement("input",{type:"color",value:i,onChange:s=>{h(s.target.value),b()}}))))),e.createElement("div",{className:`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${m?"invisible":""}`},e.createElement("h1",{style:{fontFamily:"chn-pixel"},className:"text-5xl mb-10 text-[#f19300] text-center"},"\u50CF\u7D20\u5316\u4F60\u7684\u56FE\u7247"),e.createElement("img",{src:"pic.png",alt:""}),e.createElement(O,{className:"mt-10 mx-auto w-60 h-12 px-6 bg-gray-700 !text-white !border-none",onClick:()=>{var s;(s=l.current)==null||s.click()},style:{fontFamily:"chn-pixel"}},"\u9009\u62E9\u4E00\u5F20\u56FE\u7247")),e.createElement("footer",{className:`flex justify-center items-center p-5 bg-white shadow ${m?"":"invisible"}`,style:{fontFamily:"chn-pixel"}},e.createElement("label",null,e.createElement(O,{className:"w-36 h-12"},e.createElement("img",{src:Q,className:"w-6 mr-2",alt:""}),"\u66F4\u6362\u56FE\u7247"),e.createElement("input",{type:"file",onChange:U,hidden:!0,ref:l,accept:"image/*"})),e.createElement("a",{href:n,download:(R==null?void 0:R.name)||"file.png",className:"ml-6 h-12 inline-flex items-center justify-center px-6 rounded-lg text-white bg-gray-700 font-medium"},"\u4FDD\u5B58\u5230\u672C\u5730")),e.createElement(V,{ref:F,hidden:!0}))};function Z(){return e.createElement(Y,null)}z.render(e.createElement(e.StrictMode,null,e.createElement(Z,null)),document.getElementById("root"));
