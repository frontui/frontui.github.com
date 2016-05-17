/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
!function(root,factory){"function"==typeof define&&define.amd?define("ui/datetimepicker",["jquery"],factory):"object"==typeof exports?module.exports=factory(require("jquery")):factory(root.jQuery)}(this,function($){function DateTimePicker(element,option){this.$element=$(element),this.option=$.extend({elem:this.$element,event:"focus"},option)}function Plugin(option){return $(this).each(function(){var $this=$(this),options=$.extend({},$this.data(),option&&"object"==typeof option),data=$(this).data("ui.datetimepicker");$this.is(":disabled")||(data||$(this).data("ui.datetimepicker",data=new DateTimePicker(this,options)),"string"==typeof option&&data[option]())})}var config={skin:"default",format:"YYYY-MM-DD",min:"1900-01-01 00:00:00",max:"2099-12-31 23:59:59",istime:!1},Dates={},$body=$(document.body),as=["laydate_box","laydate_void","laydate_click"],laydate=function(options){return options=$.extend({},config,options),Dates.run(options),laydate};laydate.v="1.1",Dates.trim=function(str){return str=str||"",str.replace(/^\s|\s$/g,"").replace(/\s+/g," ")},Dates.digit=function(num){return 10>num?"0"+(0|num):num},Dates.stopMosup=function(evt,elem){"mouseup"!==evt&&$(elem).on("mouseup",function(ev){ev.stopPropagation()})},Dates.run=function(options){var elem=options.elem?$(options.elem):null,e=$.Event("show.ui.datetimepicker",{relatedTarge:elem});elem&&(Dates.view(elem,options),Dates.reshow(),$(elem).trigger(e))},Dates.scroll=function(type){return type=type?"scrollLeft":"scrollTop",document.body[type]|document.documentElement[type]},Dates.winarea=function(type){return document.documentElement[type?"clientWidth":"clientHeight"]},Dates.isleap=function(year){return year%4===0&&year%100!==0||year%400===0},Dates.checkVoid=function(YY,MM,DD){var back=[];return YY=0|YY,MM=0|MM,DD=0|DD,YY<Dates.mins[0]?back=["y"]:YY>Dates.maxs[0]?back=["y",1]:YY>=Dates.mins[0]&&YY<=Dates.maxs[0]&&(YY==Dates.mins[0]&&(MM<Dates.mins[1]?back=["m"]:MM==Dates.mins[1]&&DD<Dates.mins[2]&&(back=["d"])),YY==Dates.maxs[0]&&(MM>Dates.maxs[1]?back=["m",1]:MM==Dates.maxs[1]&&DD>Dates.maxs[2]&&(back=["d",1]))),back},Dates.timeVoid=function(times,index){if(Dates.ymd[1]+1==Dates.mins[1]&&Dates.ymd[2]==Dates.mins[2]){if(0===index&&times<Dates.mins[3])return 1;if(1===index&&times<Dates.mins[4])return 1;if(2===index&&times<Dates.mins[5])return 1}else if(Dates.ymd[1]+1==Dates.maxs[1]&&Dates.ymd[2]==Dates.maxs[2]){if(0===index&&times>Dates.maxs[3])return 1;if(1===index&&times>Dates.maxs[4])return 1;if(2===index&&times>Dates.maxs[5])return 1}return times>(index?59:23)?1:void 0},Dates.check=function(){var isvoid,reg=Dates.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g,"\\d+\\").replace(/\\$/g,""),exp=new RegExp(reg),value=$(Dates.elem)[as.elemv](),arr=value.match(/\d+/g)||[];if(!Dates.options.format.match(/YYYY/g)){var _yyyy=(new Date).getFullYear();arr.unshift(_yyyy)}if(isvoid=Dates.checkVoid(arr[0],arr[1],arr[2]),""!==value.replace(/\s/g,"")){if(!exp.test(value))return $(Dates.elem)[as.elemv](""),Dates.msg("日期不符合格式，请重新选择。"),1;if(isvoid[0])return $(Dates.elem)[as.elemv](""),Dates.msg("日期不在有效期内，请重新选择。"),1;if(isvoid.value=Dates.elem[as.elemv]().match(exp).join(),arr=isvoid.value.match(/\d+/g),!Dates.options.format.match(/YYYY/g)){var _yyyy=(new Date).getFullYear();arr.unshift(_yyyy)}arr[1]<1?(arr[1]=1,isvoid.auto=1):arr[1]>12?(arr[1]=12,isvoid.auto=1):arr[1].length<2&&(isvoid.auto=1),arr.length>2&&(arr[2]<1?(arr[2]=1,isvoid.auto=1):arr[2]>Dates.months[(0|arr[1])-1]?(arr[2]=31,isvoid.auto=1):arr[2].length<2&&(isvoid.auto=1)),arr.length>3&&(Dates.timeVoid(arr[3],0)&&(isvoid.auto=1),Dates.timeVoid(arr[4],1)&&(isvoid.auto=1),Dates.timeVoid(arr[5],2)&&(isvoid.auto=1)),isvoid.auto?(console.log(arr),Dates.creation([arr[0],0|arr[1],0|arr[2]],1)):isvoid.value!==Dates.elem[as.elemv]()&&Dates.elem[as.elemv](isvoid.value)}},Dates.months=[31,null,31,30,31,30,31,31,30,31,30,31],Dates.viewDate=function(Y,M,D){var log={},De=new Date;Y<(0|Dates.mins[0])&&(Y=0|Dates.mins[0]),Y>(0|Dates.maxs[0])&&(Y=0|Dates.maxs[0]),De.setFullYear(Y,M,D),log.ymd=[De.getFullYear(),De.getMonth(),De.getDate()],Dates.months[1]=Dates.isleap(log.ymd[0])?29:28,De.setFullYear(log.ymd[0],log.ymd[1],1),log.FDay=De.getDay(),log.PDay=Dates.months[0===M?11:M-1]-log.FDay+1,log.NDay=1,$.each(as.tds,function(i,elem){var DD,YY=log.ymd[0],MM=log.ymd[1]+1;elem.className="",i<log.FDay?(elem.innerHTML=DD=i+log.PDay,$(elem).addClass("laydate_nothis"),1===MM&&(YY-=1),MM=1===MM?12:MM-1):i>=log.FDay&&i<log.FDay+Dates.months[log.ymd[1]]?(elem.innerHTML=DD=i-log.FDay+1,i-log.FDay+1===log.ymd[2]&&($(elem).addClass(as[2]),log.thisDay=elem)):(elem.innerHTML=DD=log.NDay++,$(elem).addClass("laydate_nothis"),12===MM&&(YY+=1),MM=12===MM?1:MM+1),Dates.checkVoid(YY,MM,DD)[0]&&$(elem).addClass(as[1]),Dates.options.festival&&Dates.festival(elem,MM+"."+DD),$(elem).attr({y:YY,m:MM,d:DD}),YY=MM=DD=null}),Dates.valid=!$(log.thisDay).hasClass(as[1]),Dates.ymd=log.ymd,as.year.val(Dates.ymd[0]+"年"),as.month.val(Dates.digit(Dates.ymd[1]+1)+"月"),$.each(as.mms,function(i,elem){var getCheck=Dates.checkVoid(Dates.ymd[0],(0|$(elem).attr("m"))+1);"y"===getCheck[0]||"m"===getCheck[0]?$(elem).addClass(as[1]):$(elem).removeClass(as[1]),$(elem).removeClass(as[2]),getCheck=null}),$(as.mms[Dates.ymd[1]]).addClass(as[2]),log.times=[0|Dates.inymd[3]||0,0|Dates.inymd[4]||0,0|Dates.inymd[5]||0],$.each([0,1,2],function(i){Dates.hmsin[i].value=Dates.digit(Dates.timeVoid(log.times[i],i)?0|Dates.mins[i+3]:0|log.times[i])}),$(as.ok)[Dates.valid?"removeClass":"addClass"](as[1])},Dates.festival=function(td,md){var str;switch(md){case"1.1":str="元旦";break;case"3.8":str="妇女";break;case"4.5":str="清明";break;case"5.1":str="劳动";break;case"6.1":str="儿童";break;case"9.10":str="教师";break;case"10.1":str="国庆"}str&&(td.innerHTML=str),str=null},Dates.viewYears=function(YY){var str="";$.each(new Array(14),function(i){str+=7===i?"<li "+(parseInt(as.year.value)===YY?'class="'+as[2]+'"':"")+' y="'+YY+'">'+YY+"年</li>":'<li y="'+(YY-7+i)+'">'+(YY-7+i)+"年</li>"}),$("#laydate_ys").html(str),$("#laydate_ys li").each(function(){"y"===Dates.checkVoid($(this).attr("y"))[0]?$(this).addClass(as[1]):$(this).on("click",function(ev){ev.stopPropagation(),Dates.reshow(),Dates.viewDate(0|$(this).attr("y"),Dates.ymd[1],Dates.ymd[2])})})},Dates.initDate=function(){var De=new Date,elemVal=$(Dates.elem).val(),ymd=elemVal.match(/\d+/g)||[],format=Dates.options?Dates.options.format:config.format;""==$.trim(elemVal)?ymd=[De.getFullYear(),De.getMonth()+1,De.getDate()]:ymd.length<3&&(format.match(/YYYY/g)?""==Dates.options.start?ymd.push("01"):(ymd=Dates.options.start.match(/\d+/g)||[],ymd.length<3&&(ymd=[De.getFullYear(),De.getMonth()+1,De.getDate()])):ymd.unshift(De.getFullYear())),Dates.inymd=ymd,Dates.viewDate(ymd[0],ymd[1]-1,ymd[2])},Dates.iswrite=function(){var log={time:$("#laydate_hms")};log.time[Dates.options.istime?"show":"hide"](),$(as.oclear)["isclear"in Dates.options&&Dates.options.isclear===!1?"hide":"show"](),$(as.otoday)["istoday"in Dates.options&&Dates.options.istoday===!1?"hide":"show"](),$(as.ok)["issure"in Dates.options&&Dates.options.issure===!1?"hide":"show"]()},Dates.orien=function(obj,pos){var tops,rect=$(Dates.elem)[0].getBoundingClientRect();obj.css("left",rect.left+(pos?0:Dates.scroll(1))+"px"),tops=rect.bottom+obj[0].offsetHeight/1.5<=Dates.winarea()?rect.bottom-1:rect.top>obj[0].offsetHeight/1.5?rect.top-obj[0].offsetHeight+1:Dates.winarea()-obj[0].offsetHeight,obj.css("top",Math.max(tops+(pos?0:Dates.scroll()),1)+"px")},Dates.follow=function(obj){Dates.options.fixed?($(obj).css("position","fixed"),Dates.orien(obj,1)):($(obj).css("position","absolute"),Dates.orien(obj))},Dates.viewtb=function(){var tr,view=[],weeks=["日","一","二","三","四","五","六"],log={},div=$("<div />"),table=$("<table />"),thead=$("<thead />");return log.creath=function(i){var th=$("<th>"+weeks[i]+"</th>");thead.append(th),th=null},$.each(new Array(6),function(i){view.push([]),tr=$("<tr />"),$.each(new Array(7),function(j){view[i][j]=0,0===i&&log.creath(j),tr.append("<td>"+j+"</td>")}),table.append(tr)}),table.attr({id:"laydate_table","class":"laydate_table"}).prepend(thead).appendTo(div),tr=view=null,div.html()}(),Dates.view=function(elem,options){var div,log={};options=options||elem,Dates.elem=$(elem),Dates.options=options,Dates.options.format||(Dates.options.format=config.format);var $$min=Dates.elem.data("min"),$$max=Dates.elem.data("max");Dates.options.start=Dates.options.start||"",Dates.mm=log.mm=[$$min||Dates.options.min||config.min,$$max||Dates.options.max||config.max],Dates.mins=log.mm[0].match(/\d+/g),Dates.maxs=log.mm[1].match(/\d+/g),as.elemv=/textarea|input/i.test(Dates.elem[0].tagName)?"val":"html",Dates.box||(div=$('<div id="'+as[0]+'" class="'+as[0]+'" />').css("position","absolute").hide(),log.html='<div class="laydate_top"><div class="laydate_ym laydate_y" id="laydate_YY"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_y" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms"><a class="laydate_tab laydate_chtop"><cite></cite></a><ul id="laydate_ys"></ul><a class="laydate_tab laydate_chdown"><cite></cite></a></div></div><div class="laydate_ym laydate_m" id="laydate_MM"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_m" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms" id="laydate_ms">'+function(){var str="";return $.each(new Array(12),function(i){str+='<span m="'+i+'">'+Dates.digit(i+1)+"月</span>"}),str}()+"</div></div></div>"+Dates.viewtb+'<div class="laydate_bottom"><ul id="laydate_hms"><li class="laydate_sj">时间</li><li><input readonly>:</li><li><input readonly>:</li><li><input readonly></li></ul><div class="laydate_time" id="laydate_time"></div><div class="laydate_btn"><a id="laydate_clear">清空</a><a id="laydate_today">今天</a><a id="laydate_ok">确认</a></div></div>',div.html(log.html),options.skin&&"string"==typeof options.skin&&"default"!==options.skin&&div.addClass(as[0]+"_"+options.skin),$body.append(div),Dates.box=div,Dates.events(),div=null),Dates.follow($(Dates.box).attr("class",function(){return as[0]+("default"===options.skin?"":" "+as[0]+"_"+options.skin)}).show()),options.zIndex?$(Dates.box).css("z-index",options.zIndex):$(Dates.box).css("z-index","auto"),Dates.stopMosup("click",Dates.box),Dates.initDate(),Dates.iswrite(),Dates.check()},Dates.reshow=function(){return $("#"+as[0]+" .laydate_show").removeClass("laydate_show"),this},Dates.close=function(){var e=$.Event("close.ui.datetimepicker",{relateTarget:Dates.elem});Dates.reshow(),$("#"+as[0]).hide(),$(Dates.elem).trigger(e),Dates.elem=null},Dates.parse=function(ymd,hms,format){return ymd=ymd.concat(hms),format=format||(Dates.options?Dates.options.format:config.format),format.match(/YYYY/g)||ymd.shift(),format.replace(/YYYY|MM|DD|hh|mm|ss/g,function(str,index){return ymd.index=0|++ymd.index,Dates.digit(ymd[ymd.index])})},Dates.creation=function(ymd,hide){var hms=Dates.hmsin,getDates=Dates.parse(ymd,[hms[0].value,hms[1].value,hms[2].value]),$this=Dates.elem;if(Dates.elem[as.elemv](getDates),!hide){Dates.close(),"function"==typeof Dates.options.choose&&Dates.options.choose(getDates);var e=$.Event("choose.ui.datetimepicker",{relatedTarget:$this});$this.trigger(e,getDates)}},Dates.events=function(){var log={box:"#"+as[0]};$body.addClass("laydate_body"),as.tds=$("#laydate_table td"),as.mms=$("#laydate_ms span"),as.year=$("#laydate_y"),as.month=$("#laydate_m"),$(log.box).on("click"," .laydate_ym",function(ev){ev.stopPropagation();var i=$(this).index();Dates.reshow(),$(this).find("div").eq(0).addClass("laydate_show"),i||(log.YY=parseInt(as.year.val()),Dates.viewYears(log.YY))}),$(log.box).on("click",$.proxy(Dates.reshow,Dates)),log.tabYear=function(type){0===type?Dates.ymd[0]--:1===type?Dates.ymd[0]++:2===type?log.YY-=14:log.YY+=14,2>type?(Dates.viewDate(Dates.ymd[0],Dates.ymd[1],Dates.ymd[2]),Dates.reshow()):Dates.viewYears(log.YY)},$("#laydate_YY .laydate_tab").each(function(i){$(this).on("click",function(e){e.stopPropagation(),log.tabYear(i)})}),log.tabMonth=function(type){type?(Dates.ymd[1]++,12===Dates.ymd[1]&&(Dates.ymd[0]++,Dates.ymd[1]=0)):(Dates.ymd[1]--,-1===Dates.ymd[1]&&(Dates.ymd[0]--,Dates.ymd[1]=11)),Dates.viewDate(Dates.ymd[0],Dates.ymd[1],Dates.ymd[2])},$("#laydate_MM").on("click",".laydate_tab",function(ev){ev.stopPropagation();var i=$(this).index();Dates.reshow(),log.tabMonth(i)}),$("#laydate_ms").on("click","span",function(ev){ev.stopPropagation(),$(this).hasClass(as[1])||(Dates.reshow(),Dates.viewDate(Dates.ymd[0],0|$(this).attr("m"),Dates.ymd[2]))}),$("#laydate_table").on("click","td",function(ev){$(this).hasClass(as[1])||(ev.stopPropagation(),Dates.creation([0|$(this).attr("y"),0|$(this).attr("m"),0|$(this).attr("d")]))}),as.oclear=$("#laydate_clear").on("click",function(){Dates.elem[as.elemv](""),Dates.close()}),as.otoday=$("#laydate_today").on("click",function(){var now=new Date;Dates.creation([now.getFullYear(),now.getMonth()+1,now.getDate()])}),as.ok=$("#laydate_ok").on("click",function(){Dates.valid&&Dates.creation([Dates.ymd[0],Dates.ymd[1]+1,Dates.ymd[2]])}),log.times=$("#laydate_time"),Dates.hmsin=log.hmsin=$("#laydate_hms input"),log.hmss=["小时","分钟","秒数"],log.hmsarr=[],Dates.msg=function(i,title){var str='<div class="laydte_hsmtex">'+(title||"提示")+"<span>×</span></div>";"string"==typeof i?(str+="<p>"+i+"</p>",$("#"+as[0]).show(),$(log.times).removeClass("laydate_time1").addClass("laydata_msg")):(log.hmsarr[i]?str=log.hmsarr[i]:(str+='<div id="laydate_hmsno" class="laydate_hmsno">',$.each(new Array(0===i?24:60),function(i){str+="<span>"+i+"</span>"}),str+="</div>",log.hmsarr[i]=str),$(log.times).removeClass("laydate_msg"),$(log.times)[0===i?"removeClass":"addClass"]("laydate_time1")),$(log.times).addClass("laydate_show").html(str)},log.hmson=function(input,index){var span=$("#laydate_hmsno span"),set=Dates.valid?null:1;span.each(function(i){(set||Dates.timeVoid(i,index))&&$(this).addClass(as[1])}).on("click",function(){$(this).hasClass(as[1])||(input.value=Dates.digit($(this).html()||0))}),$(span).eq(input.value||0).addClass("laydate_click")},$(log.hmsin).each(function(i){$(this).on("click",function(ev){ev.stopPropagation(),Dates.reshow(),Dates.msg(i,log.hmss[i]),log.hmson(this,i)})}),$(document).on("mouseup",function(ev){var box=$("#"+as[0]);box&&box.length>0&&box.is(":visible")&&(Dates.check()||Dates.close())}).on("mousedown",function(ev){13===ev.which&&Dates.elem&&Dates.elem.length>0&&Dates.creation([Dates.ymd[0],Dates.ymd[1]+1,Dates.ymd[2]])})},laydate.reset=function(){Dates.box&&Dates.box.length&&Dates.elem&&Dates.follow(Dates.box)},laydate.now=function(timestamp,format){var De=new Date(0|timestamp?function(tamp){return 864e5>tamp?+new Date+864e5*tamp:tamp}(parseInt(timestamp)):+new Date);return Dates.parse([De.getFullYear(),De.getMonth()+1,De.getDate()],[De.getHours(),De.getMinutes(),De.getSeconds()],format)},DateTimePicker.prototype.show=function(option){option=$.extend({elem:this.$element,event:"focus"},this.option,option),laydate(option)},DateTimePicker.VERSION="1.0.0",$.fn.datetimepicker=Plugin,$.fn.datetimepicker.constructor=DateTimePicker;var clickHandler=function(e){e.preventDefault(),$(this).one("close.ui.datetimepicker",function(){$(this).hasClass("active")&&$(this).removeClass("active"),$(this).parent(".form-control-date").hasClass("active")&&$(this).parent(".form-control-date").removeClass("active")}).one("show.ui.datetimepicker",function(){$(this).parent(".form-control-date").length&&$(this).parent(".form-control-date").addClass("active")}),Plugin.call($(this),"show")};return $(function(){var UA=window.navigator.userAgent;if(/msie/gi.test(UA)){var $el=$("<input />").hide().appendTo($(document.body));laydate({elem:$el[0]}),Dates.close(),$el.remove()}$(document).on("click.ui.datetimepicker",function(ev){var that=ev.target;$(that).is('[data-toggle="datetimepicker"]')&&clickHandler.call(that,ev)}),$(document).on("click.ui.datetimepicker",".form-control-date-btn",function(ev){var $input=$(this).next('[data-toggle="datetimepicker"]');$input.length&&$input.trigger("click")})}),DateTimePicker});