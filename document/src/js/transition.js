/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-05-10 www.frontpay.cn
*  Licensed under Apache License
*/
!function(n,t){"function"==typeof define&&define.amd?define("ui/transition",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(n.jQuery)}(this,function(n){"use strict";function t(){var n=document.createElement("ui"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==n.style[i])return{end:t[i]};return!1}return n.fn.emulateTransitionEnd=function(t){var i=!1,e=this;n(this).one("uiTransitionEnd",function(){i=!0});var r=function(){i||n(e).trigger(n.support.transition.end)};return setTimeout(r,t),this},n(function(){n.support.transition=t(),n.support.transition&&(n.event.special.uiTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){return n(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})}),n});