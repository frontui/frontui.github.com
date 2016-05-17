/*! 
*  frontui v1.0.2
*  by frontpay FE Team
*  (c) 5/17/2016 www.frontpay.cn
*  Licensed under Apache License
*/
!function(){function e(e,n){var c=e.innerHTML;e.innerHTML="<span style=\"font-family: 'fonticon'\">"+n+"</span>"+c}var n,c,o,i={"icon-drawer2":"&#xe900;","icon-browser":"&#xe607;","icon-calendar":"&#xe608;","icon-chevron-thin-down":"&#xe600;","icon-chevron-thin-left":"&#xe601;","icon-chevron-thin-right":"&#xe602;","icon-chevron-thin-up":"&#xe603;","icon-error":"&#xe000;","icon-error_outline":"&#xe001;","icon-add":"&#xe069;","icon-add_box":"&#xe06a;","icon-add_circle":"&#xe06b;","icon-add_circle_outline":"&#xe06c;","icon-clear":"&#xe070;","icon-remove":"&#xe07f;","icon-remove_circle":"&#xe080;","icon-remove_circle_outline":"&#xe081;","icon-cancel":"&#xe205;","icon-check_circle":"&#xe281;","icon-done":"&#xe28a;","icon-highlight_remove":"&#xe29c;","icon-search":"&#xe2ca;","icon-help":"&#xe604;","icon-info":"&#xe605;","icon-info-outline":"&#xe606;",0:0},r=document.getElementsByTagName("*");for(n=0;o=r[n],o;n+=1)c=o.className,c=c.match(/icon-[^\s'"]+/),c&&i[c[0]]&&e(o,i[c[0]])}();