// Compiled by ClojureScript 0.0-2725 {}
goog.provide('mash.news');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof mash.news.app_state !== 'undefined'){
} else {
mash.news.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"articles","articles",-454771639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"http://www.wired.com/wp-content/uploads/2015/02/editorsletter-ft1-660x352.jpg",new cljs.core.Keyword(null,"article-text","article-text",-229332138),"Spring evenings in New York City can be magic. Sometimes a lingering winter chill will settle in just after dark, but I remember one Tuesday in April1 2010 as particularly spectacular: The air was cool instead of cold, carrying the first hint of a thaw, and it was crystalline\u2014the better to watch the sun set..."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"http://www.wired.com/wp-content/uploads/2015/02/chair-assembly-ft-660x372.jpg",new cljs.core.Keyword(null,"article-text","article-text",-229332138),"It took this chair 7 hours to fully assemble itself. Not lightning fast, but an impressive starting point."], null)], null)], null));
}
mash.news.display = (function display(p__6202){
var map__6204 = p__6202;
var map__6204__$1 = ((cljs.core.seq_QMARK_.call(null,map__6204))?cljs.core.apply.call(null,cljs.core.hash_map,map__6204):map__6204);
var contact = map__6204__$1;
var article_text = cljs.core.get.call(null,map__6204__$1,new cljs.core.Keyword(null,"article-text","article-text",-229332138));
var image = cljs.core.get.call(null,map__6204__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return article_text;
});
mash.news.article_view = (function article_view(article,owner){
if(typeof mash.news.t6208 !== 'undefined'){
} else {

/**
* @constructor
*/
mash.news.t6208 = (function (owner,article,article_view,meta6209){
this.owner = owner;
this.article = article;
this.article_view = article_view;
this.meta6209 = meta6209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mash.news.t6208.prototype.om$core$IRender$ = true;

mash.news.t6208.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.li(null,mash.news.display.call(null,self__.article));
});

mash.news.t6208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6210){
var self__ = this;
var _6210__$1 = this;
return self__.meta6209;
});

mash.news.t6208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6210,meta6209__$1){
var self__ = this;
var _6210__$1 = this;
return (new mash.news.t6208(self__.owner,self__.article,self__.article_view,meta6209__$1));
});

mash.news.t6208.cljs$lang$type = true;

mash.news.t6208.cljs$lang$ctorStr = "mash.news/t6208";

mash.news.t6208.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__,opt__4346__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"mash.news/t6208");
});

mash.news.__GT_t6208 = (function __GT_t6208(owner__$1,article__$1,article_view__$1,meta6209){
return (new mash.news.t6208(owner__$1,article__$1,article_view__$1,meta6209));
});

}

return (new mash.news.t6208(owner,article,article_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),27,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"end-line","end-line",1837326455),31,new cljs.core.Keyword(null,"end-column","end-column",1425389514),15], null)));
});
mash.news.articles_view = (function articles_view(data,owner){
if(typeof mash.news.t6214 !== 'undefined'){
} else {

/**
* @constructor
*/
mash.news.t6214 = (function (owner,data,articles_view,meta6215){
this.owner = owner;
this.data = data;
this.articles_view = articles_view;
this.meta6215 = meta6215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mash.news.t6214.prototype.om$core$IRender$ = true;

mash.news.t6214.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h2(null,"News Articles"),React.DOM.p(null,"Trending and curated news."),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,mash.news.article_view,new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

mash.news.t6214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6216){
var self__ = this;
var _6216__$1 = this;
return self__.meta6215;
});

mash.news.t6214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6216,meta6215__$1){
var self__ = this;
var _6216__$1 = this;
return (new mash.news.t6214(self__.owner,self__.data,self__.articles_view,meta6215__$1));
});

mash.news.t6214.cljs$lang$type = true;

mash.news.t6214.cljs$lang$ctorStr = "mash.news/t6214";

mash.news.t6214.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__,opt__4346__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"mash.news/t6214");
});

mash.news.__GT_t6214 = (function __GT_t6214(owner__$1,data__$1,articles_view__$1,meta6215){
return (new mash.news.t6214(owner__$1,data__$1,articles_view__$1,meta6215));
});

}

return (new mash.news.t6214(owner,data,articles_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"end-line","end-line",1837326455),48,new cljs.core.Keyword(null,"end-column","end-column",1425389514),20], null)));
});
om.core.root.call(null,mash.news.articles_view,mash.news.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
