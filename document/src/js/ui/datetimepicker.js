/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 2016-03-25 www.frontpay.cn
*  Licensed under Apache License
*/
!function(e,t){"function"==typeof define&&define.amd?define("ui/datetimepicker",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){function t(t,a){this.$element=e(t),this.option=e.extend({elem:this.$element,event:"focus"},a)}function a(a){return e(this).each(function(){var i=e(this),n=e.extend({},i.data(),a&&"object"==typeof a),s=e(this).data("ui.datetimepicker");s||e(this).data("ui.datetimepicker",s=new t(this,n)),"string"==typeof a&&s[a]()})}var i={skin:"default",format:"YYYY-MM-DD",min:"1900-01-01 00:00:00",max:"2099-12-31 23:59:59",istime:!1},n={},s=e(document.body),o=["laydate_box","laydate_void","laydate_click"],l=function(t){return t=e.extend({},i,t),n.run(t),l};l.v="1.1",n.trim=function(e){return e=e||"",e.replace(/^\s|\s$/g,"").replace(/\s+/g," ")},n.digit=function(e){return 10>e?"0"+(0|e):e},n.stopMosup=function(t,a){"mouseup"!==t&&e(a).on("mouseup",function(e){e.stopPropagation()})},n.run=function(t){var a=t.elem?e(t.elem):null,i=e.Event("show.ui.datetimepicker",{relatedTarge:a});a&&(n.view(a,t),n.reshow(),e(a).trigger(i))},n.scroll=function(e){return e=e?"scrollLeft":"scrollTop",document.body[e]|document.documentElement[e]},n.winarea=function(e){return document.documentElement[e?"clientWidth":"clientHeight"]},n.isleap=function(e){return e%4===0&&e%100!==0||e%400===0},n.checkVoid=function(e,t,a){var i=[];return e=0|e,t=0|t,a=0|a,e<n.mins[0]?i=["y"]:e>n.maxs[0]?i=["y",1]:e>=n.mins[0]&&e<=n.maxs[0]&&(e==n.mins[0]&&(t<n.mins[1]?i=["m"]:t==n.mins[1]&&a<n.mins[2]&&(i=["d"])),e==n.maxs[0]&&(t>n.maxs[1]?i=["m",1]:t==n.maxs[1]&&a>n.maxs[2]&&(i=["d",1]))),i},n.timeVoid=function(e,t){if(n.ymd[1]+1==n.mins[1]&&n.ymd[2]==n.mins[2]){if(0===t&&e<n.mins[3])return 1;if(1===t&&e<n.mins[4])return 1;if(2===t&&e<n.mins[5])return 1}else if(n.ymd[1]+1==n.maxs[1]&&n.ymd[2]==n.maxs[2]){if(0===t&&e>n.maxs[3])return 1;if(1===t&&e>n.maxs[4])return 1;if(2===t&&e>n.maxs[5])return 1}return e>(t?59:23)?1:void 0},n.check=function(){var t,a=n.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g,"\\d+\\").replace(/\\$/g,""),i=new RegExp(a),s=e(n.elem)[o.elemv](),l=s.match(/\d+/g)||[];if(!n.options.format.match(/YYYY/g)){var d=(new Date).getFullYear();l.unshift(d)}if(t=n.checkVoid(l[0],l[1],l[2]),""!==s.replace(/\s/g,"")){if(!i.test(s))return e(n.elem)[o.elemv](""),n.msg("\u65e5\u671f\u4e0d\u7b26\u5408\u683c\u5f0f\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u3002"),1;if(t[0])return e(n.elem)[o.elemv](""),n.msg("\u65e5\u671f\u4e0d\u5728\u6709\u6548\u671f\u5185\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u3002"),1;if(t.value=n.elem[o.elemv]().match(i).join(),l=t.value.match(/\d+/g),!n.options.format.match(/YYYY/g)){var d=(new Date).getFullYear();l.unshift(d)}l[1]<1?(l[1]=1,t.auto=1):l[1]>12?(l[1]=12,t.auto=1):l[1].length<2&&(t.auto=1),l.length>2&&(l[2]<1?(l[2]=1,t.auto=1):l[2]>n.months[(0|l[1])-1]?(l[2]=31,t.auto=1):l[2].length<2&&(t.auto=1)),l.length>3&&(n.timeVoid(l[3],0)&&(t.auto=1),n.timeVoid(l[4],1)&&(t.auto=1),n.timeVoid(l[5],2)&&(t.auto=1)),t.auto?(console.log(l),n.creation([l[0],0|l[1],0|l[2]],1)):t.value!==n.elem[o.elemv]()&&n.elem[o.elemv](t.value)}},n.months=[31,null,31,30,31,30,31,31,30,31,30,31],n.viewDate=function(t,a,i){var s={},l=new Date;t<(0|n.mins[0])&&(t=0|n.mins[0]),t>(0|n.maxs[0])&&(t=0|n.maxs[0]),l.setFullYear(t,a,i),s.ymd=[l.getFullYear(),l.getMonth(),l.getDate()],n.months[1]=n.isleap(s.ymd[0])?29:28,l.setFullYear(s.ymd[0],s.ymd[1],1),s.FDay=l.getDay(),s.PDay=n.months[0===a?11:a-1]-s.FDay+1,s.NDay=1,e.each(o.tds,function(t,a){var i,l=s.ymd[0],d=s.ymd[1]+1;a.className="",t<s.FDay?(a.innerHTML=i=t+s.PDay,e(a).addClass("laydate_nothis"),1===d&&(l-=1),d=1===d?12:d-1):t>=s.FDay&&t<s.FDay+n.months[s.ymd[1]]?(a.innerHTML=i=t-s.FDay+1,t-s.FDay+1===s.ymd[2]&&(e(a).addClass(o[2]),s.thisDay=a)):(a.innerHTML=i=s.NDay++,e(a).addClass("laydate_nothis"),12===d&&(l+=1),d=12===d?1:d+1),n.checkVoid(l,d,i)[0]&&e(a).addClass(o[1]),n.options.festival&&n.festival(a,d+"."+i),e(a).attr({y:l,m:d,d:i}),l=d=i=null}),n.valid=!e(s.thisDay).hasClass(o[1]),n.ymd=s.ymd,o.year.val(n.ymd[0]+"\u5e74"),o.month.val(n.digit(n.ymd[1]+1)+"\u6708"),e.each(o.mms,function(t,a){var i=n.checkVoid(n.ymd[0],(0|e(a).attr("m"))+1);"y"===i[0]||"m"===i[0]?e(a).addClass(o[1]):e(a).removeClass(o[1]),e(a).removeClass(o[2]),i=null}),e(o.mms[n.ymd[1]]).addClass(o[2]),s.times=[0|n.inymd[3]||0,0|n.inymd[4]||0,0|n.inymd[5]||0],e.each([0,1,2],function(e){n.hmsin[e].value=n.digit(n.timeVoid(s.times[e],e)?0|n.mins[e+3]:0|s.times[e])}),e(o.ok)[n.valid?"removeClass":"addClass"](o[1])},n.festival=function(e,t){var a;switch(t){case"1.1":a="\u5143\u65e6";break;case"3.8":a="\u5987\u5973";break;case"4.5":a="\u6e05\u660e";break;case"5.1":a="\u52b3\u52a8";break;case"6.1":a="\u513f\u7ae5";break;case"9.10":a="\u6559\u5e08";break;case"10.1":a="\u56fd\u5e86"}a&&(e.innerHTML=a),a=null},n.viewYears=function(t){var a="";e.each(new Array(14),function(e){a+=7===e?"<li "+(parseInt(o.year.value)===t?'class="'+o[2]+'"':"")+' y="'+t+'">'+t+"\u5e74</li>":'<li y="'+(t-7+e)+'">'+(t-7+e)+"\u5e74</li>"}),e("#laydate_ys").html(a),e("#laydate_ys li").each(function(){"y"===n.checkVoid(e(this).attr("y"))[0]?e(this).addClass(o[1]):e(this).on("click",function(t){t.stopPropagation(),n.reshow(),n.viewDate(0|e(this).attr("y"),n.ymd[1],n.ymd[2])})})},n.initDate=function(){var t=new Date,a=e(n.elem).val(),s=a.match(/\d+/g)||[],o=n.options?n.options.format:i.format;""==e.trim(a)?s=[t.getFullYear(),t.getMonth()+1,t.getDate()]:s.length<3&&(o.match(/YYYY/g)?""==n.options.start?s.push("01"):(s=n.options.start.match(/\d+/g)||[],s.length<3&&(s=[t.getFullYear(),t.getMonth()+1,t.getDate()])):s.unshift(t.getFullYear())),n.inymd=s,n.viewDate(s[0],s[1]-1,s[2])},n.iswrite=function(){var t={time:e("#laydate_hms")};t.time[n.options.istime?"show":"hide"](),e(o.oclear)["isclear"in n.options&&n.options.isclear===!1?"hide":"show"](),e(o.otoday)["istoday"in n.options&&n.options.istoday===!1?"hide":"show"](),e(o.ok)["issure"in n.options&&n.options.issure===!1?"hide":"show"]()},n.orien=function(t,a){var i,s=e(n.elem)[0].getBoundingClientRect();t.css("left",s.left+(a?0:n.scroll(1))+"px"),i=s.bottom+t[0].offsetHeight/1.5<=n.winarea()?s.bottom-1:s.top>t[0].offsetHeight/1.5?s.top-t[0].offsetHeight+1:n.winarea()-t[0].offsetHeight,t.css("top",Math.max(i+(a?0:n.scroll()),1)+"px")},n.follow=function(t){n.options.fixed?(e(t).css("position","fixed"),n.orien(t,1)):(e(t).css("position","absolute"),n.orien(t))},n.viewtb=function(){var t,a=[],i=["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],n={},s=e("<div />"),o=e("<table />"),l=e("<thead />");return n.creath=function(t){var a=e("<th>"+i[t]+"</th>");l.append(a),a=null},e.each(new Array(6),function(i){a.push([]),t=e("<tr />"),e.each(new Array(7),function(e){a[i][e]=0,0===i&&n.creath(e),t.append("<td>"+e+"</td>")}),o.append(t)}),o.attr({id:"laydate_table","class":"laydate_table"}).prepend(l).appendTo(s),t=a=null,s.html()}(),n.view=function(t,a){var l,d={};a=a||t,n.elem=e(t),n.options=a,n.options.format||(n.options.format=i.format);var m=n.elem.data("min"),r=n.elem.data("max");n.options.start=n.options.start||"",n.mm=d.mm=[m||n.options.min||i.min,r||n.options.max||i.max],n.mins=d.mm[0].match(/\d+/g),n.maxs=d.mm[1].match(/\d+/g),o.elemv=/textarea|input/i.test(n.elem[0].tagName)?"val":"html",n.box||(l=e('<div id="'+o[0]+'" class="'+o[0]+'" />').css("position","absolute").hide(),d.html='<div class="laydate_top"><div class="laydate_ym laydate_y" id="laydate_YY"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_y" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms"><a class="laydate_tab laydate_chtop"><cite></cite></a><ul id="laydate_ys"></ul><a class="laydate_tab laydate_chdown"><cite></cite></a></div></div><div class="laydate_ym laydate_m" id="laydate_MM"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_m" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms" id="laydate_ms">'+function(){var t="";return e.each(new Array(12),function(e){t+='<span m="'+e+'">'+n.digit(e+1)+"\u6708</span>"}),t}()+"</div></div></div>"+n.viewtb+'<div class="laydate_bottom"><ul id="laydate_hms"><li class="laydate_sj">\u65f6\u95f4</li><li><input readonly>:</li><li><input readonly>:</li><li><input readonly></li></ul><div class="laydate_time" id="laydate_time"></div><div class="laydate_btn"><a id="laydate_clear">\u6e05\u7a7a</a><a id="laydate_today">\u4eca\u5929</a><a id="laydate_ok">\u786e\u8ba4</a></div></div>',l.html(d.html),a.skin&&"string"==typeof a.skin&&"default"!==a.skin&&l.addClass(o[0]+"_"+a.skin),s.append(l),n.box=l,n.events(),l=null),n.follow(e(n.box).attr("class",function(){return o[0]+("default"===a.skin?"":" "+o[0]+"_"+a.skin)}).show()),a.zIndex?e(n.box).css("z-index",a.zIndex):e(n.box).css("z-index","auto"),n.stopMosup("click",n.box),n.initDate(),n.iswrite(),n.check()},n.reshow=function(){return e("#"+o[0]+" .laydate_show").removeClass("laydate_show"),this},n.close=function(){var t=e.Event("close.ui.datetimepicker",{relateTarget:n.elem});n.reshow(),e("#"+o[0]).hide(),e(n.elem).trigger(t),n.elem=null},n.parse=function(e,t,a){return e=e.concat(t),a=a||(n.options?n.options.format:i.format),a.match(/YYYY/g)||e.shift(),a.replace(/YYYY|MM|DD|hh|mm|ss/g,function(t,a){return e.index=0|++e.index,n.digit(e[e.index])})},n.creation=function(t,a){var i=n.hmsin,s=n.parse(t,[i[0].value,i[1].value,i[2].value]),l=n.elem;if(n.elem[o.elemv](s),!a){n.close(),"function"==typeof n.options.choose&&n.options.choose(s);var d=e.Event("choose.ui.datetimepicker",{relatedTarget:l});l.trigger(d,s)}},n.events=function(){var t={box:"#"+o[0]};s.addClass("laydate_body"),o.tds=e("#laydate_table td"),o.mms=e("#laydate_ms span"),o.year=e("#laydate_y"),o.month=e("#laydate_m"),e(t.box).on("click"," .laydate_ym",function(a){a.stopPropagation();var i=e(this).index();n.reshow(),e(this).find("div").eq(0).addClass("laydate_show"),i||(t.YY=parseInt(o.year.val()),n.viewYears(t.YY))}),e(t.box).on("click",e.proxy(n.reshow,n)),t.tabYear=function(e){0===e?n.ymd[0]--:1===e?n.ymd[0]++:2===e?t.YY-=14:t.YY+=14,2>e?(n.viewDate(n.ymd[0],n.ymd[1],n.ymd[2]),n.reshow()):n.viewYears(t.YY)},e("#laydate_YY .laydate_tab").each(function(a){e(this).on("click",function(e){e.stopPropagation(),t.tabYear(a)})}),t.tabMonth=function(e){e?(n.ymd[1]++,12===n.ymd[1]&&(n.ymd[0]++,n.ymd[1]=0)):(n.ymd[1]--,-1===n.ymd[1]&&(n.ymd[0]--,n.ymd[1]=11)),n.viewDate(n.ymd[0],n.ymd[1],n.ymd[2])},e("#laydate_MM").on("click",".laydate_tab",function(a){a.stopPropagation();var i=e(this).index();n.reshow(),t.tabMonth(i)}),e("#laydate_ms").on("click","span",function(t){t.stopPropagation(),e(this).hasClass(o[1])||(n.reshow(),n.viewDate(n.ymd[0],0|e(this).attr("m"),n.ymd[2]))}),e("#laydate_table").on("click","td",function(t){e(this).hasClass(o[1])||(t.stopPropagation(),n.creation([0|e(this).attr("y"),0|e(this).attr("m"),0|e(this).attr("d")]))}),o.oclear=e("#laydate_clear").on("click",function(){n.elem[o.elemv](""),n.close()}),o.otoday=e("#laydate_today").on("click",function(){var e=new Date;n.creation([e.getFullYear(),e.getMonth()+1,e.getDate()])}),o.ok=e("#laydate_ok").on("click",function(){n.valid&&n.creation([n.ymd[0],n.ymd[1]+1,n.ymd[2]])}),t.times=e("#laydate_time"),n.hmsin=t.hmsin=e("#laydate_hms input"),t.hmss=["\u5c0f\u65f6","\u5206\u949f","\u79d2\u6570"],t.hmsarr=[],n.msg=function(a,i){var n='<div class="laydte_hsmtex">'+(i||"\u63d0\u793a")+"<span>\u00d7</span></div>";"string"==typeof a?(n+="<p>"+a+"</p>",e("#"+o[0]).show(),e(t.times).removeClass("laydate_time1").addClass("laydata_msg")):(t.hmsarr[a]?n=t.hmsarr[a]:(n+='<div id="laydate_hmsno" class="laydate_hmsno">',e.each(new Array(0===a?24:60),function(e){n+="<span>"+e+"</span>"}),n+="</div>",t.hmsarr[a]=n),e(t.times).removeClass("laydate_msg"),e(t.times)[0===a?"removeClass":"addClass"]("laydate_time1")),e(t.times).addClass("laydate_show").html(n)},t.hmson=function(t,a){var i=e("#laydate_hmsno span"),s=n.valid?null:1;i.each(function(t){(s||n.timeVoid(t,a))&&e(this).addClass(o[1])}).on("click",function(){e(this).hasClass(o[1])||(t.value=n.digit(e(this).html()||0))}),e(i).eq(t.value||0).addClass("laydate_click")},e(t.hmsin).each(function(a){e(this).on("click",function(e){e.stopPropagation(),n.reshow(),n.msg(a,t.hmss[a]),t.hmson(this,a)})}),e(document).on("mouseup",function(t){var a=e("#"+o[0]);a&&a.length>0&&a.is(":visible")&&(n.check()||n.close())}).on("mousedown",function(e){13===e.which&&n.elem&&n.elem.length>0&&n.creation([n.ymd[0],n.ymd[1]+1,n.ymd[2]])})},l.reset=function(){n.box&&n.box.length&&n.elem&&n.follow(n.box)},l.now=function(e,t){var a=new Date(0|e?function(e){return 864e5>e?+new Date+864e5*e:e}(parseInt(e)):+new Date);return n.parse([a.getFullYear(),a.getMonth()+1,a.getDate()],[a.getHours(),a.getMinutes(),a.getSeconds()],t)},t.prototype.show=function(t){t=e.extend({elem:this.$element,event:"focus"},this.option,t),l(t)},t.VERSION="1.0.0",e.fn.datetimepicker=a,e.fn.datetimepicker.constructor=t;var d=function(t){t.preventDefault(),e(this).one("close.ui.datetimepicker",function(){e(this).hasClass("active")&&e(this).removeClass("active"),e(this).parent(".form-control-date").hasClass("active")&&e(this).parent(".form-control-date").removeClass("active")}).one("show.ui.datetimepicker",function(){e(this).parent(".form-control-date").length&&e(this).parent(".form-control-date").addClass("active")}),a.call(e(this),"show")};return e(function(){var t=window.navigator.userAgent;if(/msie/gi.test(t)){var a=e("<input />").hide().appendTo(e(document.body));l({elem:a[0]}),n.close(),a.remove()}e(document).on("click.ui.datetimepicker",function(t){var a=t.target;e(a).is('[data-toggle="datetimepicker"]')&&d.call(a,t)})}),t});