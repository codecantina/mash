// Compiled by ClojureScript 0.0-2725 {}
goog.provide('news');
goog.require('cljs.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
document.write("<h1>News Articles</h1>");
if(typeof news.app_state !== 'undefined'){
} else {
news.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lion","Zebra","Buffalo","Antelope"], null)], null));
}
om.core.root.call(null,(function (data,owner){
if(typeof news.t5421 !== 'undefined'){
} else {

/**
* @constructor
*/
news.t5421 = (function (owner,data,meta5422){
this.owner = owner;
this.data = data;
this.meta5422 = meta5422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
news.t5421.prototype.om$core$IRender$ = true;

news.t5421.prototype.om$core$IRender$render$arity$1 = (function (this__5413__auto__){
var self__ = this;
var this__5413__auto____$1 = this;
return cljs.core.apply.call(null,dom.ul,null,cljs.core.map.call(null,((function (this__5413__auto____$1){
return (function (text){
return dom.li.call(null,null,text);
});})(this__5413__auto____$1))
,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

news.t5421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5423){
var self__ = this;
var _5423__$1 = this;
return self__.meta5422;
});

news.t5421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5423,meta5422__$1){
var self__ = this;
var _5423__$1 = this;
return (new news.t5421(self__.owner,self__.data,meta5422__$1));
});

news.t5421.cljs$lang$type = true;

news.t5421.cljs$lang$ctorStr = "news/t5421";

news.t5421.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__,opt__4346__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"news/t5421");
});

news.__GT_t5421 = (function __GT_t5421(owner__$1,data__$1,meta5422){
return (new news.t5421(owner__$1,data__$1,meta5422));
});

}

return (new news.t5421(owner,data,null));
}),news.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=news.js.map