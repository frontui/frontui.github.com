/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-06-15 www.frontpay.cn
*  Licensed under Apache License
*/
+function(e){"use strict";function l(){return e(this).each(function(){var l=e(this),t=l.data("ui.placeholder");t||l.data("ui.placeholder",t=new h(this))})}var t="input[placeholder]",o=document.createElement("input"),r="placeholder"in o,h=function(l){var t=this;t.$el=e(l),this.init()};h.VERSION="1.0.0",h.prototype.init=function(){if(!r){var l=this;if(this.$placeholder=l.$el.data("placeholder"),!r&&!this.$placeholder){var t=l.$el.attr("placeholder");l.$placeholder=e('<label class="form-placeholder" />').html(t),l.$el.data("placeholder",l.$placeholder).before(l.$placeholder)}l.$el.on("focus",e.proxy(this.focus,this)),l.$el.on("blur",e.proxy(this.blur,this)),l.$placeholder.on("click",e.proxy(this.focus,this)),this.blur()}},h.prototype.focus=function(){this.$placeholder.hide()},h.prototype.blur=function(){this.$placeholder[""===this.$el.val()?"show":"hide"]()},e.fn.placeholder=l,e.fn.placeholder.Constructor=h,e(function(){e(t).placeholder()})}(jQuery);