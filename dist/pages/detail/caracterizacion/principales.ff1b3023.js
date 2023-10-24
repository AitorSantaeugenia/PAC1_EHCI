!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,n,o,t,r){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},f="function"==typeof i[t]&&i[t],u=f.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(n,o){if(!u[n]){if(!e[n]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var r="function"==typeof i[t]&&i[t];if(!o&&r)return r(n,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(f)return f(n,!0);// Try the node require function if it exists.
if(d&&"string"==typeof n)return d(n);var l=Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}p.resolve=function(o){var t=e[n][1][o];return null!=t?t:o},p.cache={};var a=u[n]=new c.Module(n);e[n][0].call(a.exports,p,a,a.exports,this)}return u[n].exports;function p(e){var n=p.resolve(e);return!1===n?{}:c(n)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=u,c.parent=f,c.register=function(n,o){e[n]=[function(e,n){n.exports=o},{}]},Object.defineProperty(c,"root",{get:function(){return i[t]}}),i[t]=c;for(var l=0;l<n.length;l++)c(n[l]);if(o){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var a=c(o);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd?define(function(){return a}):r&&(this[r]=a)}}({cCoHK:[function(e,n,o){},{}]},["cCoHK"],"cCoHK","parcelRequirea87c")//# sourceMappingURL=principales.ff1b3023.js.map
;
//# sourceMappingURL=principales.ff1b3023.js.map
