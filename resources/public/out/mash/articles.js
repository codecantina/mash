// Compiled by ClojureScript 0.0-2725 {}
goog.provide('mash.articles');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof mash.articles.app_state !== 'undefined'){
} else {
mash.articles.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"articles","articles",-454771639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"http://www.wired.com/wp-content/uploads/2015/02/editorsletter-ft1-660x352.jpg",new cljs.core.Keyword(null,"article-text","article-text",-229332138),"Spring evenings in New York City can be magic. Sometimes a lingering winter chill will settle in just after dark, but I remember one Tuesday in April1 2010 as particularly spectacular: The air was cool instead of cold, carrying the first hint of a thaw, and it was crystalline\u2014the better to watch the sun set..."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"http://www.wired.com/wp-content/uploads/2015/02/chair-assembly-ft-660x372.jpg",new cljs.core.Keyword(null,"article-text","article-text",-229332138),"It took this chair 7 hours to fully assemble itself. Not lightning fast, but an impressive starting point."], null)], null)], null));
}
mash.articles.display = (function display(p__8275){
var map__8277 = p__8275;
var map__8277__$1 = ((cljs.core.seq_QMARK_.call(null,map__8277))?cljs.core.apply.call(null,cljs.core.hash_map,map__8277):map__8277);
var contact = map__8277__$1;
var article_text = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"article-text","article-text",-229332138));
var image = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return article_text;
});
mash.articles.article_view = (function article_view(article,owner){
if(typeof mash.articles.t8281 !== 'undefined'){
} else {

/**
* @constructor
*/
mash.articles.t8281 = (function (owner,article,article_view,meta8282){
this.owner = owner;
this.article = article;
this.article_view = article_view;
this.meta8282 = meta8282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mash.articles.t8281.prototype.om$core$IRender$ = true;

mash.articles.t8281.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.li(null,mash.articles.display.call(null,self__.article));
});

mash.articles.t8281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8283){
var self__ = this;
var _8283__$1 = this;
return self__.meta8282;
});

mash.articles.t8281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8283,meta8282__$1){
var self__ = this;
var _8283__$1 = this;
return (new mash.articles.t8281(self__.owner,self__.article,self__.article_view,meta8282__$1));
});

mash.articles.t8281.cljs$lang$type = true;

mash.articles.t8281.cljs$lang$ctorStr = "mash.articles/t8281";

mash.articles.t8281.cljs$lang$ctorPrWriter = (function (this__6417__auto__,writer__6418__auto__,opt__6419__auto__){
return cljs.core._write.call(null,writer__6418__auto__,"mash.articles/t8281");
});

mash.articles.__GT_t8281 = (function __GT_t8281(owner__$1,article__$1,article_view__$1,meta8282){
return (new mash.articles.t8281(owner__$1,article__$1,article_view__$1,meta8282));
});

}

return (new mash.articles.t8281(owner,article,article_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),27,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"end-line","end-line",1837326455),31,new cljs.core.Keyword(null,"end-column","end-column",1425389514),15], null)));
});
mash.articles.articles_view = (function articles_view(data,owner){
if(typeof mash.articles.t8287 !== 'undefined'){
} else {

/**
* @constructor
*/
mash.articles.t8287 = (function (owner,data,articles_view,meta8288){
this.owner = owner;
this.data = data;
this.articles_view = articles_view;
this.meta8288 = meta8288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mash.articles.t8287.prototype.om$core$IRender$ = true;

mash.articles.t8287.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h2(null,"News Articles"),React.DOM.p(null,"Trending and curated news."),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,mash.articles.article_view,new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

mash.articles.t8287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8289){
var self__ = this;
var _8289__$1 = this;
return self__.meta8288;
});

mash.articles.t8287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8289,meta8288__$1){
var self__ = this;
var _8289__$1 = this;
return (new mash.articles.t8287(self__.owner,self__.data,self__.articles_view,meta8288__$1));
});

mash.articles.t8287.cljs$lang$type = true;

mash.articles.t8287.cljs$lang$ctorStr = "mash.articles/t8287";

mash.articles.t8287.cljs$lang$ctorPrWriter = (function (this__6417__auto__,writer__6418__auto__,opt__6419__auto__){
return cljs.core._write.call(null,writer__6418__auto__,"mash.articles/t8287");
});

mash.articles.__GT_t8287 = (function __GT_t8287(owner__$1,data__$1,articles_view__$1,meta8288){
return (new mash.articles.t8287(owner__$1,data__$1,articles_view__$1,meta8288));
});

}

return (new mash.articles.t8287(owner,data,articles_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"end-line","end-line",1837326455),48,new cljs.core.Keyword(null,"end-column","end-column",1425389514),20], null)));
});
om.core.root.call(null,mash.articles.articles_view,mash.articles.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
