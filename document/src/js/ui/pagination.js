+function(t){"use strict";function e(e){var i=arguments;return t(this).each(function(){var s=t(this),n=s.data("ui.pagination");n||s.data("ui.pagination",n=new a(s,t.extend({},s.data(),e))),"string"==typeof e&&n[e].apply(n,[].slice.call(i,1))})}var i="active",s='<p class="pull-left fs-12 lh-26">共{$pages}页，{$items}条记录，每页显示{$itemsOnPage}条。</p>',a=function(e,i){this.$el=t(e),this._init(i)};a.VERSION="1.0.0",a.DEFAULTS={items:1,itemsOnPage:1,pages:0,displayedPages:8,edges:1,currentPage:0,pageStr:{show:!1,template:""},lblPrev:"上一页",lblNext:"下一页",onSelectPage:function(){}},a.prototype._init=function(e,i){var s=this;this._setOption(e),s.itemsOnPage=this.options.itemsOnPage,s.items=this.options.items,s.current=this.options.currentPage,s.pages=s.options.pages?s.options.pages:Math.ceil(s.items/this.itemsOnPage)?Math.ceil(s.items/s.itemsOnPage):1,s.currentPage=s.options.currentPage-1,s.halfDisplayed=s.options.displayedPages/2,s._render(),!i&&s.$el.on("click","a[data-page]",function(e){e.preventDefault(),s.selectPage(t(this).data("page"))})},a.prototype.init=function(t){this._init(t,!0)},a.prototype._setOption=function(e){this.options=t.extend({},a.DEFAULTS,e)},a.prototype.selectPage=function(t,e){this.currentPage=t-1,this.current=t,this.render(e),this.options.onSelectPage(t,this),this.$el.trigger("select.ui.pagination",[t,this])},a.prototype._render=function(){var t,e=this.options,i=this._getInterval();if(this.$el.empty().prevAll().remove(),!(this.pages<=1)){if(e.lblPrev&&this.currentPage-1>=0&&this._append(this.currentPage-1,{text:e.lblPrev},!0),i.start>0&&e.edges>0){var s=Math.min(e.edges,i.start);for(t=0;s>t;t++)this._append(t);e.edges<i.start&&i.start-e.edges!=1?this.$el.append("<li><span>...</span></li>"):i.start-e.edges==1&&this._append(e.edges)}for(t=i.start;t<i.end;t++)this._append(t);if(i.end<this.pages&&e.edges>0){this.pages-e.edges>i.end&&this.pages-e.edges-i.end!=1?this.$el.append("<li><span>...</span></li>"):this.pages-e.edges-i.end==1&&this._append(i.end++);var a=Math.max(this.pages-e.edges,i.end);for(t=a;t<this.pages;t++)this._append(t)}e.lblNext&&this.currentPage<this.pages-1&&this._append(this.currentPage+1,{text:e.lblNext},!0),this.renderPageStr()}},a.prototype.renderPageStr=function(){if(this.options.pageStr&&this.options.pageStr.show){var e=this,i=e.$el.prevAll(),a=this.options.pageStr.template||s;a=a.replace(/{\$(\w*)}/gi,function(t,i,s){return e[i]?e[i]:0}),i.length&&i.remove(),e.$el.before(t(a))}},a.prototype.render=function(t){this.pages=t?t:this.pages,this._render()},a.prototype._getInterval=function(){return{start:Math.ceil(this.currentPage>this.halfDisplayed?Math.max(Math.min(this.currentPage-this.halfDisplayed,this.pages-this.options.displayedPages),0):0),end:Math.ceil(this.currentPage>this.halfDisplayed?Math.min(this.currentPage+this.halfDisplayed,this.pages):Math.min(this.options.displayedPages,this.pages))}},a.prototype._append=function(e,s,a){var n,p,r=this;e=0>e?0:e<this.pages?e:this.pages-1,p=t.extend({text:e+1},s),n=e==this.currentPage?"<li "+(a?"":'class="'+i+'"')+'><a href="javascript:void(0);">'+p.text+"</a></li>":'<li><a href="#page-'+(e+1)+'" data-page="'+(e+1)+'">'+p.text+"</a></li>",r.$el.append(n)},t.fn.pagination=e,t.fn.pagination.Constructor=a,t(document).ready(function(){t("[ui-pagination],.pagination").pagination()})}(jQuery);