/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-06-15 www.frontpay.cn
*  Licensed under Apache License
*/
+function(t){"use strict";function o(o){return function(){var n=t.Event("done.ui.smoothscroll",{relatedTarget:o});o.trigger(n)}}function n(n,i,s){s=t.extend({},e.DEFAULTS,s);var r=i.offset().top-s.offset,l=t(document).height(),c=t(window).height();r+c>l&&(r=l-c),t("html,body").stop().animate({scrollTop:r},s.duration,s.transition).promise().done([s.complete,o(n)])}function i(o){return t(this).each(function(){var n=t(this),i=n.data("ui.smoothScroll");i?n.trigger("click.ui.smoothScroll"):n.data("ui.smoothScroll",new e(this,t.extend({},n.data(),o)))})}t.easing.easeOutExpo||(t.easing.easeOutExpo=function(t,o,n,i,e){return o==e?n+i:i*(-Math.pow(2,-10*o/e)+1)+n});var e=function(o,n){this.$el=t(o),this.options=n,this.init()};e.VERSION="1.0.0",e.DEFAULTS={duration:500,transition:"easeOutExpo",offset:0,complete:t.noop},e.prototype.init=function(){this.$el.on("click.ui.smoothScroll",this.scroll(this.$el,this.options))},e.prototype.scroll=function(o,i){return function(e){e.preventDefault(),n(o,t(t(this.hash).length?this.hash:"body"),i)}},t.fn.smoothScroll=i,t.fn.smoothScroll.Constructor=e,t(function(){t('[data-toggle="smooth-scroll"]').smoothScroll()})}(jQuery);