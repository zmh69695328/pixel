var T=Object.defineProperty;var y=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var R=(t,r,n)=>r in t?T(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,k=(t,r)=>{for(var n in r||(r={}))C.call(r,n)&&R(t,n,r[n]);if(y)for(var n of y(r))F.call(r,n)&&R(t,n,r[n]);return t};var S=(t,r)=>{var n={};for(var l in t)C.call(t,l)&&r.indexOf(l)<0&&(n[l]=t[l]);if(t!=null&&y)for(var l of y(t))r.indexOf(l)<0&&F.call(t,l)&&(n[l]=t[l]);return n};import{r as o,R as e,a as U}from"./vendor.db5e15db.js";const M=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}};M();var q="/assets/img.8bb84cac.svg";const f=window.devicePixelRatio;function G(t){return new Promise(r=>{setTimeout(r,t)})}const j=s=>{var c=s,{className:t="",children:r,type:n}=c,l=S(c,["className","children","type"]);return e.createElement("div",k({className:`cursor-default flex justify-center items-center border border-dotted bg-gray-50 rounded-lg text-gray-600 ${t}`},l),r)},H=()=>{const t=o.exports.useRef(null),[r,n]=o.exports.useState(20),l=o.exports.useRef(null),[s,c]=o.exports.useState(""),u=o.exports.useRef(null),[i,L]=o.exports.useState(null),[m,P]=o.exports.useState(""),[E,I]=o.exports.useState("rgba(0,0,0,0)"),[O,v]=o.exports.useState(!0),[w,$]=o.exports.useState(null),g=o.exports.useCallback(()=>{u.current&&clearTimeout(u.current),u.current=window.setTimeout(async()=>{const a=i==null?void 0:i.getContext("2d");if(!t.current||!a||!i)return;const{naturalWidth:d,naturalHeight:p}=t.current;a==null||a.clearRect(0,0,i.width,i.height),i.width=d*f,i.height=p*f,v(!0);const x=r;for(let h=0;h<p;h+=x)for(let b=0;b<d;b+=x){if(!t.current)return;const N=[b*f,h*f,x*f,x*f];a.drawImage(t.current,b,h,1,1,...N),a.strokeStyle=E,a.strokeRect(...N)}const D=URL.createObjectURL(await(i==null?void 0:i.convertToBlob()));c(D),await G(100),v(!1)},100)},[r,i,E]),B=o.exports.useCallback(a=>{n(Number(a.target.value)),g()},[g]),A=o.exports.useCallback(async a=>{var p;const d=(p=a.target.files)==null?void 0:p[0];!d||($(d),P(URL.createObjectURL(d)))},[]);return o.exports.useEffect(()=>{L(new OffscreenCanvas(0,0))},[]),e.createElement("div",{className:`h-screen  flex flex-col ${m?"bg-gray-50":"bg-white"}`},e.createElement("header",{className:`flex items-center shadow bg-white sticky top-0 py-2 px-4 ${m?"":"invisible"}`},e.createElement("img",{src:"/site.png",className:"w-10",alt:""})),e.createElement("div",{className:"flex-grow mt-10 flex items-center justify-center"},e.createElement("div",{className:`${m?"":"invisible"}`},e.createElement("div",{className:"flex justify-center items-end"},e.createElement("img",{src:m,alt:"",className:"object-contain object-bottom",onClick:()=>{var a;(a=l.current)==null||a.click()},style:{width:300,height:300},ref:t,onLoad:g}),e.createElement("div",{className:"relative ml-20"},e.createElement("span",{style:{fontFamily:"'Press Start 2P'"},className:`absolute left-1/2 -translate-x-1/2 top-2 shadow-sm backdrop-filter backdrop-blur bg-gray-700 bg-opacity-40 text-xs text-white rounded font-medium py-1 px-2 ${O?"":"invisible"}`},"loading..."),e.createElement("img",{className:"object-contain object-bottom",src:s||m,alt:"",style:{width:500,height:500}}))),e.createElement("div",{className:"mt-10 pt-10 border-t border-solid justify-center flex items-center"},e.createElement("div",{className:"mx-6"},e.createElement("p",{className:"text-xs text-gray-400 mb-1"},"\u683C\u5B50\u5C3A\u5BF8"),e.createElement("input",{type:"range",min:1,max:100,step:1,value:r,onChange:B})),e.createElement("div",{className:"mx-6 hidden"},e.createElement("p",{className:"text-xs text-gray-400 mb-1"},"\u8FB9\u6846\u989C\u8272"),e.createElement("input",{type:"color",value:E,onChange:a=>{I(a.target.value),g()}}))))),e.createElement("div",{className:`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${m?"invisible":""}`},e.createElement("h1",{style:{fontFamily:"chn-pixel"},className:"text-5xl mb-10 text-[#f19300] text-center"},"\u50CF\u7D20\u5316\u4F60\u7684\u56FE\u7247"),e.createElement("img",{src:"/pic.png",alt:""}),e.createElement(j,{className:"mt-10 mx-auto w-60 h-12 px-6 bg-gray-700 !text-white !border-none",onClick:()=>{var a;(a=l.current)==null||a.click()},style:{fontFamily:"chn-pixel"}},"\u9009\u62E9\u4E00\u5F20\u56FE\u7247")),e.createElement("footer",{className:`flex justify-center items-center p-5 bg-white shadow ${m?"":"invisible"}`,style:{fontFamily:"chn-pixel"}},e.createElement("label",null,e.createElement(j,{className:"w-36 h-12"},e.createElement("img",{src:q,className:"w-6 mr-2",alt:""}),"\u66F4\u6362\u56FE\u7247"),e.createElement("input",{type:"file",onChange:A,hidden:!0,ref:l,accept:"image/*"})),e.createElement("a",{href:s,download:(w==null?void 0:w.name)||"file.png",className:"ml-6 h-12 inline-flex items-center justify-center px-6 rounded-lg text-white bg-gray-700 font-medium"},"\u4FDD\u5B58\u5230\u672C\u5730")))};function K(){return e.createElement(H,null)}U.render(e.createElement(e.StrictMode,null,e.createElement(K,null)),document.getElementById("root"));
