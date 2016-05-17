/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
"use strict";function Plugin(){return $(this).each(function(){var e=$(this),l=e.data("ui.placeholder");l||e.data("ui.placeholder",l=new Placeholder(this))})}var toggle="input[placeholder]",input=document.createElement("input"),isSupport="placeholder"in input,Placeholder=function(e){var l=this;l.$el=$(e),this.init()};Placeholder.VERSION="1.0.0",Placeholder.prototype.init=function(){if(!isSupport){var e=this;if(this.$placeholder=e.$el.data("placeholder"),!isSupport&&!this.$placeholder){var l=e.$el.attr("placeholder");e.$placeholder=$('<label class="form-placeholder" />').html(l),e.$el.data("placeholder",e.$placeholder).before(e.$placeholder)}e.$el.on("focus",$.proxy(this.focus,this)),e.$el.on("blur",$.proxy(this.blur,this)),e.$placeholder.on("click",$.proxy(this.focus,this)),this.blur()}},Placeholder.prototype.focus=function(){this.$placeholder.hide()},Placeholder.prototype.blur=function(){this.$placeholder[""===this.$el.val()?"show":"hide"]()},$.fn.placeholder=Plugin,$.fn.placeholder.Constructor=Placeholder,$(function(){$(toggle).placeholder()});