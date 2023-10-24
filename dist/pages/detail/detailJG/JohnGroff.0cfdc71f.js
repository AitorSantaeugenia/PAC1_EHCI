!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,n,o,t,r){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},f="function"==typeof i[t]&&i[t],u=f.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,o){if(!u[n]){if(!e[n]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var r="function"==typeof i[t]&&i[t];if(!o&&r)return r(n,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(f)return f(n,!0);// Try the node require function if it exists.
if(d&&"string"==typeof n)return d(n);var c=Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(o){var t=e[n][1][o];return null!=t?t:o},p.cache={};var a=u[n]=new l.Module(n);e[n][0].call(a.exports,p,a,a.exports,this)}return u[n].exports;function p(e){var n=p.resolve(e);return!1===n?{}:l(n)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=u,l.parent=f,l.register=function(n,o){e[n]=[function(e,n){n.exports=o},{}]},Object.defineProperty(l,"root",{get:function(){return i[t]}}),i[t]=l;for(var c=0;c<n.length;c++)l(n[c]);if(o){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var a=l(o);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd?define(function(){return a}):r&&(this[r]=a)}}({gYzqw:[function(e,n,o){},{}]},["gYzqw"],"gYzqw","parcelRequirea87c")//# sourceMappingURL=JohnGroff.0cfdc71f.js.map
;
//# sourceMappingURL=JohnGroff.0cfdc71f.js.map
