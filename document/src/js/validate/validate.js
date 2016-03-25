/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-03-25 www.frontpay.cn
*  Licensed under Apache License
*/
!function(e,r){"function"==typeof define&&define.amd?define("ui/tab",["jquery","ui/validate"],r):"object"==typeof exports?module.exports=r(require("jquery")):r(e.jQuery)}(this,function(e){function r(r){var o=e.extend({},t.DEFAULTS,r);return e(this).each(function(){return e(this).validate(o)})}jQuery.validator.addMethod("telphone",function(e,r){return this.optional(r)||/^1[3-9]{10}$/g.test(e)});var t={};return t.DEFAULTS={errorPlacement:function(r,t){$errElem=e('<div class="form-notice"><i></i></div>').append(r),t.after($errElem.show()).parents(".form-group").addClass("has-error")},onfocusout:function(r){e(r).hasClass("error")&&e(r).parents(".form-group").addClass("has-error").find(".form-notice").show()},success:function(e){e.parent().hide().parents(".form-group").removeClass("has-error")},errorElement:"span"},e.fn.validation=r,e.fn.validation.prototype=e.fn.validate.prototype,e.fn.validation});