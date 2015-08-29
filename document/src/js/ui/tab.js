+function(t){"use strict";function a(a){return t(this).each(function(){var e=t(this),n=e.data("ui.tab");n||e.data("ui.tab",n=new i(this)),"string"==typeof a&&n[a]&&n[a]()})}var e='[data-toggle="tab"],.tabs-btn',i=function(a){this.$el=t(a)};i.VERSION="1.0.0",i.TRANSITION_DURATION=150,i.prototype.show=function(){var a=this.$el,e=a.closest(".tabs"),i=a.data("target");if(i||(i=a.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!a.hasClass("active")){var n=e.find(".active a"),r=t.Event("hide.ui.tab",{relatedTarget:a[0]}),s=t.Event("show.ui.tab",{relatedTarget:n[0]});if(n.trigger(r),a.trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){var d=t(i);this.activate(a.closest("li"),e),this.activate(d,d.parent(),function(){n.trigger({type:"hidden.ui.tab",relatedTarget:a[0]}),a.trigger({type:"shown.ui.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(a,n,r){function s(){d.removeClass("active").find(e).attr("aria-expanded",!1),a.addClass("active").find(e).attr("aria-expanded",!0),o?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),r&&r()}var d=n.find("> .active"),o=r&&t.support.transition&&(d.length&&d.hasClass("fade")||!!n.find("> .fade").length);d.length&&o?d.one("uiTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),d.removeClass("in")},t.fn.tab=a,t.fn.tab.Constructor=i;var n=function(e){t(e.target).hasClass("tab-disabled")||e.preventDefault(),a.call(t(this),"show")};t(function(){t(document).on("click.ui.tab",e,n)})}(jQuery);