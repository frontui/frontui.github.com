+function(t){"use strict";function i(i){return t(this).on("click",function(){i="string"==typeof i?{message:i}:i;var t=new u(i);t.show()})}var o={},s={},n=function(i){return"string"==typeof i&&(i={message:i}),arguments[1]&&(i=t.extend(i,"string"==typeof arguments[1]?{status:arguments[1]}:arguments[1])),new u(i).show()},e=function(t,i){var o;if(t)for(o in s)t===s[o].group&&s[o].close(i);else for(o in s)s[o].close(i)},u=function(i){this.timeout=!1,this.currentStatus="",this.group=!1,this.options=t.extend({},u.DEFAULTS,i),this.uuid="Notify_"+Math.random().toString(36).substr(2),this.$el=t(['<div class="notify-message">','<a class="notify-close">&times;</a>',"<div></div>","</div>"].join("")).data("ui.notify",this),this.content(this.options.message),this.options.status&&(this.$el.addClass("notify-message-"+this.options.status),this.currentStatus=this.options.status),this.group=this.options.group,s[this.uuid]=this,o[this.options.pos]||(o[this.options.pos]=t('<div class="notify notify-'+this.options.pos+'"></div>').appendTo(t("body")).on("click",".notify-message",function(){var i=t(this).data("ui.notify");i.$el.trigger("manualclose.ui.notify",[i]),i.close()}))};u.VERSION="1.0.0",u.DEFAULTS={message:"",status:"",opacity:.85,timeout:5e3,group:null,pos:"top-center",onClose:function(){}},u.prototype.show=function(){if(!this.$el.is(":visible")){var t=this;o[this.options.pos].show().prepend(this.$el);var i=parseInt(this.$el.css("margin-bottom"),10);return this.$el.css({opacity:0,"margin-top":-1*this.$el.outerHeight(),"margin-bottom":0}).animate({opacity:this.options.opacity,"margin-top":0,"margin-bottom":i},function(){if(t.options.timeout){var i=function(){t.close()};t.timeout=setTimeout(i,t.options.timeout),t.$el.hover(function(){clearTimeout(t.timeout)},function(){t.timeout=setTimeout(i,t.options.timeout)})}}),this}},u.prototype.close=function(t){var i=this,n=function(){i.$el.remove(),o[i.options.pos].children().length||o[i.options.pos].hide(),i.options.onClose.apply(i,[]),i.$el.trigger("close.ui.notify",[i]),delete s[i.uuid]};this.timeout&&clearTimeout(this.timeout),t?n():this.$el.animate({opacity:0,"margin-top":-1*this.$el.outerHeight(),"margin-bottom":0},function(){n()})},u.prototype.content=function(t){var i=this.$el.find(">div");return t?(i.html(t),this):i.html()},u.prototype.status=function(t){return t?(this.$el.removeClass("nofity-message-"+this.currentStatus).addClass("notify-message-"+t),this.currentStatus=t,this):this.currentStatus},t.notify=n,t.notify.closeAll=e,t.fn.notify=i,t.fn.notify.Constructor=u}(jQuery);