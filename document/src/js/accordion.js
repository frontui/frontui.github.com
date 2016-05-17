/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
"use strict";$.fn.accordion=function(t){var e={item:"li",target:">div",active:"active",except:!1};return t=$.extend({},e,t),$(this).switcher(t),$(this).each(function(){var e=$(this).find(t.item);$(this).on("select.ui.switcher",function(i){var a=$(i.relatedTarget),n=a.hasClass(t.active),s=e.find(t.target),r=a.find(t.target);!t.except&&s.slideUp(),r.stop()[n?"slideDown":"slideUp"](),i.stopPropagation(),i.preventDefault()})})};