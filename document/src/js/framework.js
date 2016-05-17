/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
function noautoform(){for(var t=document.getElementsByTagName("form"),o=0;o<t.length;o++)t[o].setAttribute("autocomplete","off")}noautoform(),$(function(){$("#sh").click(function(){var t=$(this).attr("data-target");$("#arb").slideToggle(function(){$(this).is(":visible")&&$(t).slider("init")})})});