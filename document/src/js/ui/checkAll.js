/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-06-15 www.frontpay.cn
*  Licensed under Apache License
*/
+function(e){"use strict";function t(t){return e(this).each(function(){var c=e(this),i=c.data("ui.checkAll");i||c.data("ui.checkAll",i=new r(this)),"string"==typeof t&&i[t]()})}var c='[data-toggle="checkAll"]',r=function(t){var c=this;c.$el=e(t),c.$target=e(c.$el.data("target")),c.isReverse=c.$el.data("reverse"),c.$el.on("click",e.proxy(c.isReverse?this.reverse:this.activate,this))};r.VERSION="1.0.0",r.prototype.activate=function(){var t=this.$el.is(":checked"),c=e.Event("checked.ui.checkAll",{relatedTarget:this.$el});this.$target.prop("checked",t),this.$el.trigger(c)},r.prototype.reverse=function(){var t=e.Event("reversed.ui.checkAll",{relatedTarget:this.$el});this.$target.map(function(){return e(this).prop("checked",!this.checked)}),this.$el.trigger(t)},e.fn.checkAll=t,e.fn.checkAll.Constructor=r,e(function(){e(c).checkAll()})}(jQuery);