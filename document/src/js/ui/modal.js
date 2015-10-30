+function(t){"use strict";function i(i,e){if(!t(this).length&&i&&/^#(\w*)/gi.test(t(this).selector)){var n,s;"string"==typeof i&&(s=i,i={title:"标题",content:""}),i.mid=t(this).selector.replace(/^#/g,"");var a=o.CreateModal(i);a.data("mid",i.mid);var d=t.extend({},o.DEFAULTS,"object"==typeof i&&i);return a.data("ui.modal",n=new o(a,d)),s&&"function"==typeof n[s]&&n[s](e),i.callback&&i.callback.call(a),n.show(e),t(this)}return t(this).each(function(){var n=t(this),s=n.data("ui.modal"),a=t.extend({},o.DEFAULTS,n.data(),"object"==typeof i&&i);s||n.data("ui.modal",s=new o(this,a)),"string"==typeof i?s[i](e):a.show&&(a.title&&s.setTitle(a.title),a.content&&s.setContent(a.content),s.show(e))})}var o=function(i,o){this.$el=t(i),this.options=o,this.$body=t(document.body),this.$dialog=this.$el.find(".modal-wrap"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.options.remote&&this.$el.find(".modal-body").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.ui.modal")},this))};o.VERSION="1.0.0",o.TRANSITION_DURATION=150,o.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},o.TEMPLATE=['<div class="modal-background fade" id="{{mid}}">','<div class="modal-layer">','<div class="modal-position">','<div class="modal-wrap">','<div class="modal-head">','<span class="modal-title">{{title}}</span>','<button class="modal-close">',"<i></i>","</button>","</div>",'<div class="modal-body">',"{{content}}","</div>","</div>","</div>","</div>","</div>"].join(""),o.CreateModal=function(i){var e,n=t(document.body);return i&&"object"==typeof i&&(e=o.TEMPLATE.replace(/{{(\w*)}}/gi,function(o,e){return i[e]&&"string"==typeof i[e]?/^(\.|#)\w*/gi.test(i[e])?t(i[e]).html():i[e]:i[e]&&i[e].length&&i.length>0?i[e].html():void 0}),e=t(e).hide().appendTo(n)),e},o.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},o.prototype.show=function(i){var e=this,n=t.Event("show.ui.modal",{relatedTarget:i});if(!this.isShown&&!n.isDefaultPrevented()){this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$el.on("click.dismiss.ui.modal",'[data-dismiss="modal"],.modal-close',t.proxy(this.hide,this));var s=t.support.transition&&e.$el.hasClass("fade");e.$el.show().scrollTop(0).attr("tabindex",-1),e.adjustDialog(),s&&e.$el[0].offsetWidth,e.enforceFocus(),s?(e.$el.addClass("in").attr("aria-hidden",!1),e.$dialog.one("uiTransitionEnd",function(){e.$el.trigger("focus").trigger(n)}).emulateTransitionEnd(o.TRANSITION_DURATION)):e.$el.hide().addClass("in").attr("aria-hidden",!1).fadeIn(o.TRANSITION_DURATION,function(){t(this).trigger("focus").trigger(n)}).attr("aria-hidden",!1)}},o.prototype.hide=function(i){i&&i.preventDefault();var e=this;(this.$el.is(":visible")||this.isShown)&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.ui.modal").off("keydown.ui.modal"),this.$el.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.ui.modal").off("mouseup.dismiss.ui.modal"),this.$dialog.off("mousedown.dismiss.ui.modal"),t.support.transition&&this.$el.hasClass("fade")?this.$el.one("uiTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(o.TRANSITION_DURATION):function(){e.$el.fadeOut(o.TRANSITION_DURATION,function(){e.hideModal()})}())},o.prototype.close=function(i){t(i).data("ui.modal").hide()},o.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$el.on("keydown.dismiss.ui.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$el.off("keydown.dismiss.ui.modal")},o.prototype.hideModal=function(){var i=this,o=t.Event("hide.ui.modal",{relatedTarget:i.$el});i.$el.hide(),i.$body.removeClass("modal-open"),i.resetAdjustments(),i.resetScrollbar(),i.$el.trigger(o)},o.prototype.resize=function(){},o.prototype.handleUpdate=function(){this.adjustDialog()},o.prototype.adjustDialog=function(){return},o.prototype.resetAdjustments=function(){this.$el.css({paddingLeft:"",paddingRight:""})},o.prototype.enforceFocus=function(){t(document).off("focusin.ui.modal").on("focusin.ui.modal",t.proxy(function(t){this.$el[0]===t.target||this.$el.has(t.target).length||this.$el.trigger("focus")},this))},o.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var i=document.documentElement.getBoundingClientRect();t=i.right-Math.abs(i.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},o.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},o.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},o.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var i=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),i},o.prototype.setContent=function(t){var i=this.$el.find(".modal-body");i.length&&i.html(t||"")},o.prototype.setTitle=function(t){var i=this.$el.find(".modal-title");i.length&&i.html(t||"")},t.fn.modal=i,t.fn.modal.Constructor=o,t.fn.showLoading=function(i,o){var i=i||"处理中...",o=o||"请不要关闭浏览器，系统正在处理";if(t(this).length)i&&t(this).find(".modal-body h3").html(i),o&&t(this).find(".loading-content").html(o),t(this).modal("show");else{var e=['<div class="notice-wrap waiting in-modal">','<div class="notice-box">','<span class="notice-img"></span>',"<h3>"+i+"</h3>",'<div class="loading-content">'+o+"</div>","</div>","</div>"].join("");t(this).modal({title:"提示",content:e,callback:function(){t(this).find(".modal-close").hide()}})}},t.fn.hideLoading=function(){t(this).length&&t(this).modal("hide")},t.fn.modalLayer=function(i){var o,e={icon:"success",title:"成功",content:"",buttons:[{text:"确定",href:!1,style:"btn primary",target:!1,ok:t.noop}]},n=t(this);o=t.extend({},e,i);for(var s=['<div class="notice-wrap '+o.icon+' in-modal" role="icon">','<div class="modalLayer notice-box">','<span class="notice-img"></span>','<h3 role="title" class="modalLayer-title '+(""==t.trim(o.content)?"fn-mt-20":"")+'">'+o.title+"</h3>",'<div class="modalLayer-content" role="content">'+o.content+"</div>","</div>","</div>",'<div class="in-modal-btns text-align-center">',"</div>"],a=[],d=o.buttons,l=0;l<d.length;l++)d[l].href?a.push('<a href="'+d[l].href+'" '+(d[l].target?'target="'+d[l].target+'"':"")+' class="'+(d[l].style||"btn primary")+'" data-index="'+l+'">'+d[l].text+"</a>"):a.push('<button type="button" class="'+(d[l].style||"btn primary")+'" data-index="'+l+'">'+d[l].text+"</button>");s.splice(-1,0,a.join("")),n=t(this).modal({title:"提示",content:s.join(""),callback:function(i){t(this).on("click",".in-modal-btns .btn",function(){var i=t(this).data("index"),e=!0;o.buttons.length&&o.buttons[i]&&o.buttons[i].ok&&o.buttons[i].ok&&"function"==typeof o.buttons[i].ok&&(e=o.buttons[i].ok.call(null,t(this),i)===!1?!1:!0),t(n.selector).data("options",o),e&&t(n.selector).modal("hide")}).on("hide.ui.modal",function(){t(this).remove()})}})};var e=function(){t(document).on("click.ui.modal",'[data-toggle="modal"]',function(o){var e=t(this),n=t(this).attr("href"),s=t(e.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("ui.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),e.data());i.call(s,a,this)})};t(document).ready(e)}(jQuery);