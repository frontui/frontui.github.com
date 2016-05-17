/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
+function(t){"use strict";t.fn.accordion=function(e){var i={item:"li",target:">div",active:"active",except:!1};return e=t.extend({},i,e),t(this).switcher(e),t(this).each(function(){var i=t(this).find(e.item);t(this).on("select.ui.switcher",function(n){var a=t(n.relatedTarget),r=a.hasClass(e.active),s=i.find(e.target),c=a.find(e.target);!e.except&&s.slideUp(),c.stop()[r?"slideDown":"slideUp"](),n.stopPropagation(),n.preventDefault()})})}}(jQuery);