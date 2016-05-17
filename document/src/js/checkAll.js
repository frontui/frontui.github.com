/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
"use strict";function Plugin(e){return $(this).each(function(){var t=$(this),c=t.data("ui.checkAll");c||t.data("ui.checkAll",c=new CheckAll(this)),"string"==typeof e&&c[e]()})}var toggle='[data-toggle="checkAll"]',CheckAll=function(e){var t=this;t.$el=$(e),t.$target=$(t.$el.data("target")),t.isReverse=t.$el.data("reverse"),t.$el.on("click",$.proxy(t.isReverse?this.reverse:this.activate,this))};CheckAll.VERSION="1.0.0",CheckAll.prototype.activate=function(){var e=this.$el.is(":checked"),t=$.Event("checked.ui.checkAll",{relatedTarget:this.$el});this.$target.prop("checked",e),this.$el.trigger(t)},CheckAll.prototype.reverse=function(){var e=$.Event("reversed.ui.checkAll",{relatedTarget:this.$el});this.$target.map(function(){return $(this).prop("checked",!this.checked)}),this.$el.trigger(e)},$.fn.checkAll=Plugin,$.fn.checkAll.Constructor=CheckAll,$(function(){$(toggle).checkAll()});