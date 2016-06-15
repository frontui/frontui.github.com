/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-06-15 www.frontpay.cn
*  Licensed under Apache License
*/
+function(t){"use strict";function e(e){return t(this).each(function(){var i=t(this),c=i.data("ui.switcher");c||i.data("ui.switcher",c=new s(this,e)),"string"==typeof e&&c[e]()})}var i='[data-toggle="switcher"]',s=function(e,i){var c=this;this.$el=t(e),this.option=t.extend({},s.DEFAULTS,i,this.$el.data()),this.$el.on("click.ui.switcher",this.option.item,function(e){e.stopPropagation(),e.preventDefault(),c.select(t(this))})};s.VERSION="1.0.0",s.DEFAULTS={item:"li",active:"active",except:!1,keep:!1},s.prototype.select=function(e){var i=this.option,s=t.Event("select.ui.switcher",{relatedTarget:e});i.keep&&e.hasClass(i.active)||(e.toggleClass(i.active).trigger(s),i.except||e.siblings(i.item).removeClass(i.active))},t.fn.switcher=e,t.fn.switcher.Constructor=s,t(function(){t(i).switcher()})}(jQuery);