/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-03-25 www.frontpay.cn
*  Licensed under Apache License
*/
!function(e,t){"function"==typeof define&&define.amd?define("ui/according",["jquery","ui/switcher"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){"use strict";return e.fn.accordion=function(t){var i={item:"li",target:">div",active:"active",except:!1};return t=e.extend({},i,t),e(this).switcher(t),e(this).each(function(){var i=e(this).find(t.item);e(this).on("select.ui.switcher",function(n){var r=e(n.relatedTarget),c=r.hasClass(t.active),o=i.find(t.target),s=r.find(t.target);!t.except&&o.slideUp(),s.stop()[c?"slideDown":"slideUp"](),n.stopPropagation(),n.preventDefault()})})},e});