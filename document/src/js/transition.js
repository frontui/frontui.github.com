/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
"use strict";function transitionEnd(){var n=document.createElement("ui"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==n.style[i])return{end:t[i]};return!1}$.fn.emulateTransitionEnd=function(n){var t=!1,i=this;$(this).one("uiTransitionEnd",function(){t=!0});var r=function(){t||$(i).trigger($.support.transition.end)};return setTimeout(r,n),this},$(function(){$.support.transition=transitionEnd(),$.support.transition&&($.event.special.uiTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(n){return $(n.target).is(this)?n.handleObj.handler.apply(this,arguments):void 0}})});