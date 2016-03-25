/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-03-25 www.frontpay.cn
*  Licensed under Apache License
*/
!function(e,t){"function"==typeof define&&define.amd?define("ui/checkAll",["jquery"],t):"object"==typeof exports?module.exports=t("ui/checkAll",require("jquery")):t(e.jQuery)}(this,function(e){"use strict";function t(t){return e(this).each(function(){var r=e(this),i=r.data("ui.checkAll");i||r.data("ui.checkAll",i=new c(this)),"string"==typeof t&&i[t]()})}var r='[data-toggle="checkAll"]',c=function(t){var r=this;r.$el=e(t),r.$target=e(r.$el.data("target")),r.isReverse=r.$el.data("reverse"),r.$el.on("click",e.proxy(r.isReverse?this.reverse:this.activate,this))};return c.VERSION="1.0.0",c.prototype.activate=function(){var t=this.$el.is(":checked"),r=e.Event("checked.ui.checkAll",{relatedTarget:this.$el});this.$target.prop("checked",t),this.$el.trigger(r)},c.prototype.reverse=function(){var t=e.Event("reversed.ui.checkAll",{relatedTarget:this.$el});this.$target.map(function(){return e(this).prop("checked",!this.checked)}),this.$el.trigger(t)},e.fn.checkAll=t,e.fn.checkAll.Constructor=c,e(function(){e(r).checkAll()}),e});