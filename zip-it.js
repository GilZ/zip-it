(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    CN: /^\d{6}$/
    , IN: /^\d{5}$/
    , US: /^\d{5}$/
    , ID: /^\d{5}$/
    , BR: /^\d{5}-\d{3}$/
    , PK: /^\d{5}$/
    , NG: /^\d{6}$/
    , BD: /^\d{4}$/
    , RU: /^\d{6}$/
    , MX: /^\d{5}$/
    , JP: /^\d{3}-\d{4}$/
    , PH: /^\d{4}$/
    , ET: /^\d{4}$/
    , VN: /^\d{6}$/
    , EG: /^\d{4,5}$/
    , DE: /^\d{5}$/
    , IR: /^\d{10}$/
    , TR: /^\d{5}$/
    , TH: /^\d{5}$/
    , GB: /^[A-Z]{1,2}\d[A-Z0-9]( \d[A-Z]{2})?$/
};
},{}],2:[function(require,module,exports){
var regExes = require('./countries');

function verifyCode(country, code) {
    var regex = getRegexForCountry(country);
    return regex && regex.test(code);
}

function getRegexForCountry(country) {
    return regExes[country];
}

module.exports = {
    verifyCode: verifyCode,
    getRegexForCountry: getRegexForCountry
};
},{"./countries":1}]},{},[2]);
