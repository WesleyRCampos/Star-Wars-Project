import h,{useState as d,useEffect as N}from"react";import g from"react-dom";import{Link as u,BrowserRouter as v,Routes as y,Route as p}from"react-router-dom";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=l(a);fetch(a.href,r)}})();var x={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=h,C=Symbol.for("react.element"),_=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,E=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function j(t,s,l){var n,a={},r=null,i=null;l!==void 0&&(r=""+l),s.key!==void 0&&(r=""+s.key),s.ref!==void 0&&(i=s.ref);for(n in s)w.call(s,n)&&!S.hasOwnProperty(n)&&(a[n]=s[n]);if(t&&t.defaultProps)for(n in s=t.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:C,type:t,key:r,ref:i,props:a,_owner:E.current}}m.Fragment=_;m.jsx=j;m.jsxs=j;x.exports=m;var e=x.exports;const O="/vite-gh/assets/Sabre-45WN4KPf.gif",f=t=>e.jsx("div",{className:"container",children:e.jsx("div",{className:"container-login",children:e.jsx("div",{className:"Wrap-login",children:t.children})})}),L=()=>{const[t,s]=d(""),[l,n]=d("");return e.jsx(f,{children:e.jsxs("form",{className:"login-form",children:[e.jsx("span",{className:"login-form-title",children:"Bem vindo!"}),e.jsx("span",{className:"login-form-title",children:e.jsx("img",{src:O,alt:"Sabres de luz"})}),e.jsxs("div",{className:"Wrap-input",children:[e.jsx("input",{className:t!==""?"has-val input":"input",type:"email",value:t,onChange:a=>s(a.target.value)}),e.jsx("span",{className:"focus-input","data-placeholder":"Email"})]}),e.jsxs("div",{className:"Wrap-input",children:[e.jsx("input",{className:l!==""?"has-val input":"input",type:"password",value:l,onChange:a=>n(a.target.value)}),e.jsx("span",{className:"focus-input","data-placeholder":"Password"})]}),e.jsx(u,{className:"container-login-form-btn",to:"/characters",children:e.jsx("button",{className:"login-form-btn",children:"Login"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"txt1",children:"Não possui conta?"}),e.jsx(u,{className:"txt2",to:"/register",children:"Criar conta."})]})]})})},P="/vite-gh/assets/Sono-GpJ8maNY.gif",R=()=>{const[t,s]=d(""),[l,n]=d(""),[a,r]=d(""),[i,c]=d("");return e.jsx(f,{children:e.jsxs("form",{className:"login-form",children:[e.jsx("span",{className:"login-form-title",children:"Criar conta"}),e.jsx("span",{className:"login-form-title",children:e.jsx("img",{src:P,alt:"Sabres de luz"})}),e.jsxs("div",{className:"Wrap-input",children:[e.jsx("input",{className:t!==""?"has-val input":"input",type:"name",value:t,onChange:o=>s(o.target.value)}),e.jsx("span",{className:"focus-input","data-placeholder":"Nome"})]}),e.jsxs("div",{className:"Wrap-input",children:[e.jsx("input",{className:i!==""?"has-val input":"input",type:"tel",value:i,onChange:o=>c(o.target.value)}),e.jsx("span",{className:"focus-input","data-placeholder":"Celular"})]}),e.jsxs("div",{className:"Wrap-input",children:[e.jsx("input",{className:l!==""?"has-val input":"input",type:"email",value:l,onChange:o=>n(o.target.value)}),e.jsx("span",{className:"focus-input","data-placeholder":"Email"})]}),e.jsxs("div",{className:"Wrap-input",children:[e.jsx("input",{className:a!==""?"has-val input":"input",type:"password",value:a,onChange:o=>r(o.target.value)}),e.jsx("span",{className:"focus-input","data-placeholder":"Password"})]}),e.jsx("div",{className:"container-login-form-btn",children:e.jsx("button",{className:"login-form-btn",children:"Login"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"txt1",children:"Já possui conta?"}),e.jsx(u,{className:"txt2",to:"/login",children:"Acessar com Email e Senha."})]})]})})},W=()=>e.jsx("nav",{className:"navbar",children:e.jsx("div",{className:"container d-flex justify-content-center",children:e.jsx("h1",{children:"Star-Wars Project"})})}),A=({characters:t})=>e.jsx(e.Fragment,{children:t.map(s=>e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h5",{className:"card-title",children:[" ",s.name]}),e.jsx("img",{className:"card-img",src:`public/img/${s.name}.jpg`,alt:s.name}),e.jsxs("p",{className:"card-text",children:["Altura: ",s.height]}),e.jsxs("p",{className:"card-text",children:["Peso: ",s.mass]}),e.jsxs("p",{className:"card-text",children:["Cor: ",s.skin_color]}),e.jsxs("p",{className:"card-text",children:["Cabelos: ",s.hair_color]}),e.jsxs("p",{className:"card-text",children:["Olhos: ",s.eye_color]})]})},s.name))}),I=({endSearch:t,onChange:s})=>e.jsxs("div",{className:"Wrap-input",children:[e.jsx("input",{className:t!==""?"has-val input":"input",type:"text",value:t,onChange:s}),e.jsx("span",{className:"focus-input","data-placeholder":"Nome"})]}),$=()=>{const[t,s]=d([]),[l,n]=d("");N(()=>{a()},[]);const a=async()=>{try{const o=await(await fetch("https://swapi.dev/api/people/")).json();s(o.results)}catch(c){console.error("Error em obter os personagem:",c)}},r=c=>{n(c.target.value)},i=t.filter(c=>c.name.toLowerCase().includes(l.toLowerCase()));return i.sort((c,o)=>c.name.localeCompare(o.name)),e.jsxs("div",{className:"container-characters",children:[e.jsx("div",{className:"container-characters",children:e.jsx(I,{handleEndSearch:l,onChange:r})}),e.jsx("div",{className:"box",children:e.jsx(A,{characters:i})})]})},B=()=>e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsx("div",{className:"gallery",children:e.jsx("div",{className:"box",children:e.jsx($,{})})})]}),F=()=>e.jsx(v,{children:e.jsxs(y,{children:[e.jsx(p,{path:"/login",element:e.jsx(L,{})}),e.jsx(p,{path:"/register",element:e.jsx(R,{})}),e.jsx(p,{path:"/characters",element:e.jsx(B,{})})]})}),M=()=>e.jsx(F,{});g.render(e.jsx(h.StrictMode,{children:e.jsx(M,{})}),document.getElementById("root"));
