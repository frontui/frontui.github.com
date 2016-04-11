/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 4/11/2016 www.frontpay.cn
*  Licensed under Apache License
*/
!function(t,i){"function"==typeof define&&define.amd?define("ui/modal",["jquery","ui/transition"],i):"object"==typeof exports?module.exports=i(require("jquery")):i(t.jQuery)}(this,function(t){"use strict";function i(i,e){if(!t(this).length&&i&&/^#(\w*)/gi.test(t(this).selector)){var n,a;"string"==typeof i&&(a=i,i={title:"\u6807\u9898",content:""}),i.mid=t(this).selector.replace(/^#/g,"");var s=o.CreateModal(i);s.data("mid",i.mid);var l=t.extend({},o.DEFAULTS,"object"==typeof i&&i);return s.data("ui.modal",n=new o(s,l)),a&&"function"==typeof n[a]&&n[a](e),i.callback&&i.callback.call(s),n.show(e),t(this)}return t(this).each(function(){var n=t(this),a=n.data("ui.modal"),s=t.extend({},o.DEFAULTS,n.data(),"object"==typeof i&&i);a||n.data("ui.modal",a=new o(this,s)),"string"==typeof i?a[i](e):s.show&&(s.title&&a.setTitle(s.title),s.content&&a.setContent(s.content),a.show(e))})}var o=function(i,o){this.$el=t(i),this.options=o,this.$body=t(document.body),this.$dialog=this.$el.find(".modal-wrap"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.options.remote&&this.$el.find(".modal-body").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.ui.modal")},this))};o.VERSION="1.0.0",o.TRANSITION_DURATION=150,o.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},o.TEMPLATE=['<div class="modal-background fade" id="{{mid}}">','<div class="modal-layer">','<div class="modal-position">','<div class="modal-wrap">','<div class="modal-head">','<span class="modal-title">{{title}}</span>','<button class="modal-close">',"<i></i>","</button>","</div>",'<div class="modal-body">',"{{content}}","</div>","</div>","</div>","</div>","</div>"].join(""),o.CreateModal=function(i){var e,n=t(document.body);return i&&"object"==typeof i&&(e=o.TEMPLATE.replace(/{{(\w*)}}/gi,function(o,e){return i[e]&&"string"==typeof i[e]?/^(\.|#)\w*/gi.test(i[e])?t(i[e]).html():i[e]:i[e]&&i[e].length&&i.length>0?i[e].html():void 0}),e=t(e).hide().appendTo(n)),e},o.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},o.prototype.show=function(i){var e=this,n=t.Event("show.ui.modal",{relatedTarget:i});if(!this.isShown&&!n.isDefaultPrevented()){this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$el.on("click.dismiss.ui.modal",'[data-dismiss="modal"],.modal-close',t.proxy(this.hide,this));var a=t.support.transition&&e.$el.hasClass("fade");e.$el.show().scrollTop(0).attr("tabindex",-1),e.adjustDialog(),a&&e.$el[0].offsetWidth,e.enforceFocus(),a?(e.$el.addClass("in").attr("aria-hidden",!1),e.$dialog.one("uiTransitionEnd",function(){e.$el.trigger("focus").trigger(n)}).emulateTransitionEnd(o.TRANSITION_DURATION)):e.$el.hide().addClass("in").attr("aria-hidden",!1).fadeIn(o.TRANSITION_DURATION,function(){t(this).trigger("focus").trigger(n)}).attr("aria-hidden",!1)}},o.prototype.hide=function(i){i&&i.preventDefault();var e=this;(this.$el.is(":visible")||this.isShown)&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.ui.modal").off("keydown.ui.modal"),this.$el.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.ui.modal").off("mouseup.dismiss.ui.modal"),this.$dialog.off("mousedown.dismiss.ui.modal"),t.support.transition&&this.$el.hasClass("fade")?this.$el.one("uiTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(o.TRANSITION_DURATION):function(){e.$el.fadeOut(o.TRANSITION_DURATION,function(){e.hideModal()})}())},o.prototype.close=function(i){t(i).data("ui.modal").hide()},o.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$el.on("keydown.dismiss.ui.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$el.off("keydown.dismiss.ui.modal")},o.prototype.hideModal=function(){var i=this,o=t.Event("hide.ui.modal",{relatedTarget:i.$el});i.$el.hide(),i.$body.removeClass("modal-open"),i.resetAdjustments(),i.resetScrollbar(),i.$el.trigger(o)},o.prototype.resize=function(){},o.prototype.handleUpdate=function(){this.adjustDialog()},o.prototype.adjustDialog=function(){return},o.prototype.resetAdjustments=function(){this.$el.css({paddingLeft:"",paddingRight:""})},o.prototype.enforceFocus=function(){t(document).off("focusin.ui.modal").on("focusin.ui.modal",t.proxy(function(t){this.$el[0]===t.target||this.$el.has(t.target).length||this.$el.trigger("focus")},this))},o.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var i=document.documentElement.getBoundingClientRect();t=i.right-Math.abs(i.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},o.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},o.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},o.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var i=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),i},o.prototype.setContent=function(t){var i=this.$el.find(".modal-body");i.length&&i.html(t||"")},o.prototype.setTitle=function(t){var i=this.$el.find(".modal-title");i.length&&i.html(t||"")},t.fn.modal=i,t.fn.modal.Constructor=o,t.fn.showLoading=function(i,o){var i=i||"\u5904\u7406\u4e2d...",o=o||"\u8bf7\u4e0d\u8981\u5173\u95ed\u6d4f\u89c8\u5668\uff0c\u7cfb\u7edf\u6b63\u5728\u5904\u7406";if(t(this).length)return i&&t(this).find(".modal-body h3").html(i),o&&t(this).find(".loading-content").html(o),t(this).modal("show");var e=['<div class="notice-wrap waiting in-modal">','<div class="notice-box">','<span class="notice-img"></span>',"<h3>"+i+"</h3>",'<div class="loading-content">'+o+"</div>","</div>","</div>"].join("");return t(this).modal({title:"\u63d0\u793a",content:e,callback:function(){t(this).find(".modal-close").hide()}})},t.fn.hideLoading=function(){return t(this).length&&t(this).modal("hide")},t.showLoading=function(i,o){var e="#ui-loading";return t(e).showLoading(i,o)},t.hideLoading=function(){var i="#ui-loading";return t(i).hideLoading()},t.fn.modalLayer=function(i){var o,e={icon:"success",title:"\u6210\u529f",content:"",buttons:[{text:"\u786e\u5b9a",href:!1,style:"btn primary",target:!1,ok:t.noop}]},n=t(this);o=t.extend({},e,i);for(var a=['<div class="notice-wrap '+o.icon+' in-modal" role="icon">','<div class="modalLayer notice-box">','<span class="notice-img"></span>','<h3 role="title" class="modalLayer-title '+(""==t.trim(o.content)?"fn-mt-20":"")+'">'+o.title+"</h3>",'<div class="modalLayer-content" role="content">'+o.content+"</div>","</div>","</div>",'<div class="in-modal-btns text-align-center">',"</div>"],s=[],l=o.buttons,r=0;r<l.length;r++)l[r].href?s.push('<a href="'+l[r].href+'" '+(l[r].target?'target="'+l[r].target+'"':"")+' class="'+(l[r].style||"btn primary")+'" data-index="'+r+'">'+l[r].text+"</a>"):s.push('<button type="button" class="'+(l[r].style||"btn primary")+'" data-index="'+r+'">'+l[r].text+"</button>");a.splice(-1,0,s.join("")),n=t(this).modal({title:"\u63d0\u793a",content:a.join(""),callback:function(i){t(this).on("click",".in-modal-btns .btn",function(){var i=t(this).data("index"),e=!0;o.buttons.length&&o.buttons[i]&&o.buttons[i].ok&&o.buttons[i].ok&&"function"==typeof o.buttons[i].ok&&(e=o.buttons[i].ok.call(null,t(this),i)===!1?!1:!0),t(n.selector).data("options",o),e&&t(n.selector).modal("hide")}).on("hide.ui.modal",function(){t(this).remove()})}})};var e=function(){var o=t(this),e=t(this).attr("href"),n=t(o.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("ui.modal")?"toggle":t.extend({remote:!/#/.test(e)&&e},n.data(),o.data());i.call(n,a,this)},n=function(){t(document).on("click.ui.modal",'[data-toggle="modal"]',function(i){var o=i.target;t(o).is('[data-toggle="modal"]')&&e.call(o,i)})};t(n);var a=function(t){return function(i){var o=i.id?i.id:"#j-modal-status";t(o).modalLayer({icon:"success",title:i.title||"",content:i.content||"",buttons:[{text:"\u786e\u8ba4",ok:function(){i&&"string"==typeof i.link&&(location.href=i.link),i&&"function"==typeof i.callback&&i.callback()}}]})}}(jQuery),s=function(t){return function(i){var o=i.id?i.id:"#confirmModalLayer";t(o).modalLayer({icon:"info",title:i.title||"",content:i.content||"",buttons:[{text:"\u786e\u5b9a",ok:i.callback},{text:"\u53d6\u6d88",href:"javascript:void(0);",style:"btn links fn-ml-10"}]})}}(jQuery),l=function(t){return function(i){var o=i.id?i.id:"#alertModalLayer";t(o).modalLayer({icon:i.icon||"info",title:i.title||"",content:i.content||""})}}(jQuery),r=function(t){return function(i,o){t(i).modal("hide").on("hide.ui.modal",function(){t(this).remove(),"function"==typeof o&&o()})}}(jQuery);return t.successModalLayer=a,t.confirmModalLayer=s,t.alertModalLayer=l,t.closeModalLayer=r,~function(t){function i(t,i,o){this.selector=t,this.next=o,this.opt=i,this.dialog=this.get(t),this.showModal(i)}i.prototype.showModal=function(i){var o=this;i.show=!1,i.content="",i.callback=function(){o.dialog=t(o.selector),o.$dom=t(this),i&&i.url&&(o.originalUrl=i.url,o.init(),"function"==typeof o.next&&o.next.call(o,o.$dom))},o.dialog.modal(i)},i.prototype.init=function(i){var o=this.$dom.find(".modal-body");this.$title=this.$dom.find(".modal-title"),this.$iframe=t("<iframe />"),this.$iframe.attr({src:i||this.originalUrl,width:this.opt.width||"100%",height:this.opt.height||"100%",allowtransparency:"yes",frameborder:"no",scrolling:"no"}).on("load",t.proxy(this.adjustHeight,this)),o.empty().append(this.$iframe)},i.prototype.setProp=function(t){t.title&&this.$title.html(t.title),t.url&&(this.$iframe[0].src=t.url)},i.prototype.setUrl=function(t){return this.init(t),!0},i.prototype.adjustHeight=function(){var t,i;try{t=this.$iframe[0].contentWindow.frameElement}catch(o){}t&&(i=this.$iframe.contents().height(),this.$iframe.css({height:i+"px"}))},i.prototype.show=function(){this.dialog.modal("show")},i.prototype.hide=function(){this.dialog.modal("hide")},i.get=i.prototype.get=function(i){if(i&&i.frameElement){var o,e=i.frameElement,n=t(".modal-background",i.parent.document);return n.each(function(i,n){var a=t(n).find("iframe");a[0]===e&&(o=t(n))}),o}return t(i)},i.close=function(o){var e=i.get(o);t(e).find(".modal-close").trigger("click"),t(e).remove()},i.adjustHeight=function(o){var e,n,a=i.get(o),s=t(a).find("iframe");try{e=s[0].contentWindow.frameElement}catch(l){}e&&(n=s.contents().height(),s.css({height:n+"px"}))},t.fn.iframeModal=function(o,e){var n=t(this),a=t(this).selector;if((this[0]===window||this[0]===parent)&&"hide"==o)return void i.close(window);if(this[0]===window&&"adjustHeight"==o)return void i.adjustHeight(window);var s=n.data("ui.iframeModal");s?o&&o.url&&o.reset?s&&s.setUrl(o.url)&&s.show():(t.isPlainObject(o)&&s.setProp(o),s&&s.show()):s=new i(a,o,function(i){t(i).data("ui.iframeModal",this)}),"string"==typeof o&&s[o]&&s[o](e)},t(function(){t(document).on("click",'[data-toggle="iframeModal"]',function(i){i.preventDefault();var o=t(this).attr("data-title")||"\u63d0\u793a",e=t(this).attr("data-url");e&&o&&t("#iframe-modal").iframeModal({title:o,url:e})})})}(jQuery),o});