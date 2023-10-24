!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,n,o,r){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d="function"==typeof i[o]&&i[o],u=d.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,n){if(!u[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(d)return d(t,!0);// Try the node require function if it exists.
if(f&&"string"==typeof t)return f(t);var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}s.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},s.cache={};var c=u[t]=new a.Module(t);e[t][0].call(c.exports,s,c,c.exports,this)}return u[t].exports;function s(e){var t=s.resolve(e);return!1===t?{}:a(t)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=u,a.parent=d,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(a,"root",{get:function(){return i[o]}}),i[o]=a;for(var l=0;l<t.length;l++)a(t[l]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var c=a(n);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):r&&(this[r]=c)}}({h6zqa:[function(e,t,n){//DOM ELEMENTS TO INTERACT - test
let o=document.getElementById("trailerVideo"),r=document.getElementById("imageTrailerFigcaption");document.getElementById("overlayDiv");let i=document.getElementById("imagePoster");o.addEventListener("ended",function(){// show image here
i.classList.remove("hidden"),r.innerHTML=`P\xf3ster oficial de Mindhunter, temporada 2. | Imagen de <a href="https://www.rottentomatoes.com/tv/mindhunter/s02" target="_blank">Rotten Tomatoes</a>`,o.classList.add("hidden")},!1)},{}]},["h6zqa"],"h6zqa","parcelRequirea87c")//# sourceMappingURL=index.91f900b2.js.map
;
//# sourceMappingURL=index.91f900b2.js.map
