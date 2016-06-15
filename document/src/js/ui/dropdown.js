/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-06-15 www.frontpay.cn
*  Licensed under Apache License
*/
+function(t){"use strict";function r(t,r){var o=a(t);l=t.data("active")||l;var e=o.hasClass(l);void 0===r&&i(),e||(o.addClass(l),t.attr("aria-expanded",!0).trigger("show.ui.dropdown",this))}function i(r,i){t(h).each(function(){var o=t(this),n=a(o),d=n.find(h),s=o.attr("data-auto");l=o.data("active")||l,n.hasClass(l)&&(r&&r.isDefaultPrevented()||(i&&s&&e(o,d),n.removeClass(l).find(g).removeClass("hover").show(),o.attr("aria-expanded","false").trigger("hide.ui.dropdown",this).data("currentItem",-1),d.length&&d.trigger("blur")))})}function o(t){i(t,1)}function e(r,i){var o,e=d(r),n=0,a="",s=t.trim(i.val());o=e.filter(function(){return t(this).is(":visible")?(0===n&&(a=t.trim(t(this).text()),n=a==s?1:0),!0):!1}),n||(0===o.length?e.eq(0).trigger("click"):o.eq(0).trigger("click.ui.dropSelect"))}function n(){var r=t(this),i=r.attr("placeholder"),o=t.trim(r.val()),e=d(r);""!==o&&o!==i&&e.hide().filter(function(){var r=t.trim(t(this).text())||"";return r==o&&t(this).addClass("hover"),r.indexOf(o)>-1}).show()}function a(r){var i=t(r).data("target")||t(r).parent();return i}function d(t){var r=a(t);return r.find(g)}function s(t,r){var i=t.parent(),o=t.eq(r).position().top;i.scrollTop(o)}function c(r){var i=[].slice.call(arguments,1);return t(this).each(function(){var o=t(this),e=o.data("ui.dropdown");e||o.data("ui.dropdown",e=new w(this)),"string"==typeof r&&e[r].apply(this,i)})}var l="active",u=".form-control-dropdown",h='[data-toggle="dropdown"],.form-control-dropdown-value',f='.form-control-dropdown-btn, [data-toggle="dropdown-btn"]',p='.form-control-dropdown-btn > i, [data-toggle="dropdown-btn"] > i',v=".form-control-dropdown-menu",g='.form-control-dropdown-menu li, [role="list"] li',w=function(r){t(r).on("click.ui.dropdown",this.toggle),/input/i.test(r.tagName)&&t(r).on("keyup.ui.dropFilter",this.filter);var i=a(r);i.on("click.ui.dropSelect",g,this.selected(i))};w.VERSION="1.0.0",w.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled,:disabled"))return r(o),!1},w.prototype.keydown=function(r){if(27===r.which)return void i(r);if(/(38|40|27|32|13|46|8)/.test(r.which)){var o=t(this),e=void 0===o.data("currentItem")?-1:o.data("currentItem");if(r.stopPropagation(),!o.is(".disabled, :disabled")){var n=a(o);l=o.data("active")||l;var d=n.hasClass(l);if(!d&&27!=r.which||d&&27==r.which)return 27==r.which&&n.find(h).trigger("focus"),o.trigger("click");var c=n.find(g).filter(":visible");if(c.length){if(13==r.which&&c.filter(".hover").length)return void c.filter(".hover").trigger("click.ui.dropSelect");var u=c.index(r.target)>-1?c.index(r.target):e;38==r.which&&u>=0&&u--,40==r.which&&u<c.length&&u++,0>u&&(u=c.length-1),u>=c.length&&(u=0),s(c,u),o.data("currentItem",u),c.removeClass("hover").eq(u).addClass("hover").trigger("focus")}}}},w.prototype.selected=function(r){var o=r.find(h);return function(r){r.preventDefault(),r.stopPropagation();var e=/input/i.test(o[0].tagName),n=t.trim(t(this)[e?"text":"html"]());return o[e?"val":"html"](n).trigger("selected.ui.dropdown",this).trigger("blur"),i(),!1}},w.prototype.filter=function(r){if(/input/i.test(r.target.tagName)){var i=t(this),o=t.trim(i.val()),e=d(i);return""===o?void e.show():void(e.length&&e.map(function(){var r=t(this).text();return r.indexOf(o)>-1?t(this).show():t(this).hide()}))}},w.prototype.focusIn=function(i){var o=t(this);r(o,!0)},t.fn.dropdown=c,t.fn.dropdown.Constructor=w,t(function(){t(h).dropdown(),t(document).on("click.ui.dropdown",o).on("click.ui.dropdown-btn",function(i){var o=i.target;if(t(o).is(f)||t(o).is(p)){var e=t(o).closest(u),n=e.find(h);return r(n),!1}}).on("click.ui.dropdown",function(r){var i=r.target;return t(i).is(v)?(r.stopPropagation(),!1):void 0}).on("focus.ui.dropdown",function(r){var i=r.target;t(i).is(h)&&n(i,r)}).on("keydown.ui.dropdown",function(r){var i=r.target;t(i).is(h)&&w.prototype.keydown.call(i,r)})})}(jQuery);