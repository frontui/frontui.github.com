/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
"use strict";function Plugin(t){return $(this).each(function(){var e=$(this),i=e.data("ui.switcher");i||e.data("ui.switcher",i=new Switcher(this,t)),"string"==typeof t&&i[t]()})}var toggle='[data-toggle="switcher"]',Switcher=function(t,e){var i=this;this.$el=$(t),this.option=$.extend({},Switcher.DEFAULTS,e,this.$el.data()),this.$el.on("click.ui.switcher",this.option.item,function(t){t.stopPropagation(),t.preventDefault(),i.select($(this))})};Switcher.VERSION="1.0.0",Switcher.DEFAULTS={item:"li",active:"active",except:!1,keep:!1},Switcher.prototype.select=function(t){var e=this.option,i=$.Event("select.ui.switcher",{relatedTarget:t});e.keep&&t.hasClass(e.active)||(t.toggleClass(e.active).trigger(i),e.except||t.siblings(e.item).removeClass(e.active))},$.fn.switcher=Plugin,$.fn.switcher.Constructor=Switcher,$(function(){$(toggle).switcher()});