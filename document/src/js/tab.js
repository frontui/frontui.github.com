/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
"use strict";function Plugin(t){return $(this).each(function(){var a=$(this),e=a.data("ui.tab");e||a.data("ui.tab",e=new Tab(this)),"string"==typeof t&&e[t]&&e[t]()})}var tab='[data-toggle="tab"],.tabs-btn',Tab=function(t){this.$el=$(t)};Tab.VERSION="1.0.0",Tab.TRANSITION_DURATION=150,Tab.prototype.show=function(){var t=this.$el,a=t.closest(".tabs"),e=t.data("target");if(e||(e=t.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,"")),!t.hasClass("active")){var i=a.find(".active a"),n=$.Event("hide.ui.tab",{relatedTarget:t[0]}),r=$.Event("show.ui.tab",{relatedTarget:i[0]});if(i.trigger(n),t.trigger(r),!r.isDefaultPrevented()&&!n.isDefaultPrevented()){var s=$(e);this.activate(t.closest("li"),a),this.activate(s,s.parent(),function(){i.trigger({type:"hidden.ui.tab",relatedTarget:t[0]}),t.trigger({type:"shown.ui.tab",relatedTarget:i[0]})})}}},Tab.prototype.activate=function(t,a,e){function i(){n.removeClass("active").find(tab).attr("aria-expanded",!1),t.addClass("active").find(tab).attr("aria-expanded",!0),r?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),e&&e()}var n=a.find("> .active"),r=e&&$.support.transition&&(n.length&&n.hasClass("fade")||!!a.find("> .fade").length);n.length&&r?n.one("uiTransitionEnd",i).emulateTransitionEnd(Tab.TRANSITION_DURATION):i(),n.removeClass("in")},$.fn.tab=Plugin,$.fn.tab.Constructor=Tab;var clickHandler=function(t){$(t.target).hasClass("tab-disabled")||(t.preventDefault(),Plugin.call($(this),"show"))};$(function(){$(document).on("click.ui.tab",function(t){var a=t.target;$(a).is(tab)&&clickHandler.call(a,t)})});