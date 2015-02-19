// Compiled by ClojureScript 0.0-2725 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj17914 = {};
return obj17914;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.display_name[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.display_name["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj17916 = {};
return obj17916;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.init_state[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.init_state["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj17918 = {};
return obj17918;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.should_update[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.should_update["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj17920 = {};
return obj17920;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.will_mount[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.will_mount["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj17922 = {};
return obj17922;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.did_mount[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.did_mount["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj17924 = {};
return obj17924;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.will_unmount[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.will_unmount["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj17926 = {};
return obj17926;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.will_update[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.will_update["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj17928 = {};
return obj17928;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.did_update[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.did_update["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj17930 = {};
return obj17930;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.will_receive_props[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj17932 = {};
return obj17932;
})();

om.core.render = (function render(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.render[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.render["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj17934 = {};
return obj17934;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.render_props[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.render_props["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj17936 = {};
return obj17936;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core.render_state[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core.render_state["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj17938 = {};
return obj17938;
})();


om.core.IOmSwap = (function (){var obj17940 = {};
return obj17940;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj17942 = {};
return obj17942;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._get_state[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._get_state["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._get_state[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._get_state["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj17944 = {};
return obj17944;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._get_render_state[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._get_render_state["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._get_render_state[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._get_render_state["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj17946 = {};
return obj17946;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj17948 = {};
return obj17948;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._get_queue[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._get_queue["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj17950 = {};
return obj17950;
})();

om.core._value = (function _value(x){
if((function (){var and__3745__auto__ = x;
if(and__3745__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3745__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4401__auto__ = (((x == null))?null:x);
return (function (){var or__3757__auto__ = (om.core._value[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._value["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj17952 = {};
return obj17952;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3745__auto__ = cursor;
if(and__3745__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3745__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4401__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3757__auto__ = (om.core._path[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._path["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3745__auto__ = cursor;
if(and__3745__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3745__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4401__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3757__auto__ = (om.core._state[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._state["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj17954 = {};
return obj17954;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3745__auto__ = value;
if(and__3745__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3745__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4401__auto__ = (((value == null))?null:value);
return (function (){var or__3757__auto__ = (om.core._to_cursor[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._to_cursor["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3745__auto__ = value;
if(and__3745__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3745__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4401__auto__ = (((value == null))?null:value);
return (function (){var or__3757__auto__ = (om.core._to_cursor[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._to_cursor["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj17956 = {};
return obj17956;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3745__auto__ = cursor;
if(and__3745__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3745__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4401__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3757__auto__ = (om.core._derive[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._derive["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj17958 = {};
return obj17958;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3745__auto__ = cursor;
if(and__3745__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3745__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4401__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3757__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj17960 = {};
return obj17960;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3745__auto__ = x;
if(and__3745__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3745__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4401__auto__ = (((x == null))?null:x);
return (function (){var or__3757__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3745__auto__ = x;
if(and__3745__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3745__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4401__auto__ = (((x == null))?null:x);
return (function (){var or__3757__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3745__auto__ = x;
if(and__3745__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3745__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4401__auto__ = (((x == null))?null:x);
return (function (){var or__3757__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj17962 = {};
return obj17962;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._get_property[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._get_property["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj17964 = {};
return obj17964;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3745__auto__ = cursor;
if(and__3745__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3745__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4401__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3757__auto__ = (om.core._root_key[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._root_key["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj17966 = {};
return obj17966;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._adapt[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._adapt["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj17968 = {};
return obj17968;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (om.core._get_deps[goog.typeOf(x__4401__auto__)]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (om.core._get_deps["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__17970 = state;
if(G__17970){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17970.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__17970.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__17970);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__17970);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__17972 = x;
if(G__17972){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17972.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__17972.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__17972);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__17972);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__17974 = (x.props["__om_cursor"]);
var G__17974__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__17974,korks__$1):G__17974);
return G__17974__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__17976 = state;
(G__17976["__om_prev_state"] = (state["__om_state"]));

(G__17976["__om_state"] = pending_state);

(G__17976["__om_pending_state"] = null);

return G__17976;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3757__auto__ = props;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3757__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__17978 = c;
if(G__17978){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17978.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__17978.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__17978);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__17978);
}
})()){
var state_17999 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3757__auto__ = (state_17999["__om_prev_state"]);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return (state_17999["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__17979 = c;
if(G__17979){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17979.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__17979.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__17979);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__17979);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__17980 = cljs.core.seq.call(null,refs);
var chunk__17981 = null;
var count__17982 = (0);
var i__17983 = (0);
while(true){
if((i__17983 < count__17982)){
var ref = cljs.core._nth.call(null,chunk__17981,i__17983);
om.core.unobserve.call(null,this$,ref);

var G__18000 = seq__17980;
var G__18001 = chunk__17981;
var G__18002 = count__17982;
var G__18003 = (i__17983 + (1));
seq__17980 = G__18000;
chunk__17981 = G__18001;
count__17982 = G__18002;
i__17983 = G__18003;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__17980);
if(temp__4126__auto____$1){
var seq__17980__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17980__$1)){
var c__4544__auto__ = cljs.core.chunk_first.call(null,seq__17980__$1);
var G__18004 = cljs.core.chunk_rest.call(null,seq__17980__$1);
var G__18005 = c__4544__auto__;
var G__18006 = cljs.core.count.call(null,c__4544__auto__);
var G__18007 = (0);
seq__17980 = G__18004;
chunk__17981 = G__18005;
count__17982 = G__18006;
i__17983 = G__18007;
continue;
} else {
var ref = cljs.core.first.call(null,seq__17980__$1);
om.core.unobserve.call(null,this$,ref);

var G__18008 = cljs.core.next.call(null,seq__17980__$1);
var G__18009 = null;
var G__18010 = (0);
var G__18011 = (0);
seq__17980 = G__18008;
chunk__17981 = G__18009;
count__17982 = G__18010;
i__17983 = G__18011;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__17984 = c;
if(G__17984){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17984.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__17984.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__17984);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__17984);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__17985 = c;
if(G__17985){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17985.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__17985.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__17985);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__17985);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__3745__auto__){
return cljs.core.some.call(null,((function (and__3745__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__17977_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__17977_SHARP_);
});})(and__3745__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3745__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_17986 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_17987 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_17988 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_17989 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_17990 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__17991 = c;
if(G__17991){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17991.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__17991.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__17991);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__17991);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__17992 = c;
if(G__17992){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17992.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__17992.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__17992);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__17992);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__17993 = c;
if(G__17993){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17993.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__17993.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__17993);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__17993);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_17990;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_17989;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_17988;

om.core._STAR_state_STAR_ = _STAR_state_STAR_17987;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_17986;
}}),(function (next_props,next_state){
var this$ = this;
var c_18012 = om.core.children.call(null,this$);
if((function (){var G__17994 = c_18012;
if(G__17994){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17994.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__17994.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__17994);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__17994);
}
})()){
var state_18013 = this$.state;
om.core.will_update.call(null,c_18012,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3757__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__17995 = c;
if(G__17995){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17995.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__17995.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__17995);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__17995);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__3757__auto__ = id;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__17996 = c;
if(G__17996){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17996.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__17996.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__17996);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__17996);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__17997 = c;
if(G__17997){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17997.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__17997.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__17997);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__17997);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_18014 = om.core.children.call(null,this$);
if((function (){var G__17998 = c_18014;
if(G__17998){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__17998.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__17998.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__17998);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__17998);
}
})()){
om.core.will_mount.call(null,c_18014);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x18016 = obj;
x18016.om$core$IGetState$ = true;

x18016.om$core$IGetState$_get_state$arity$1 = ((function (x18016){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3757__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return (state["__om_state"]);
}
});})(x18016))
;

x18016.om$core$IGetState$_get_state$arity$2 = ((function (x18016){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x18016))
;

x18016.om$core$IGetRenderState$ = true;

x18016.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x18016){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x18016))
;

x18016.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x18016){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x18016))
;

x18016.om$core$ISetState$ = true;

x18016.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x18016){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3745__auto__ = !((app_state == null));
if(and__3745__auto__){
return render;
} else {
return and__3745__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x18016))
;

x18016.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x18016){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__3745__auto__ = !((app_state == null));
if(and__3745__auto__){
return render;
} else {
return and__3745__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x18016))
;

return x18016;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3757__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3757__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__18017 = c;
if(G__18017){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18017.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__18017.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__18017);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__18017);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_18026 = om.core.children.call(null,this$);
if((function (){var G__18018 = c_18026;
if(G__18018){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18018.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__18018.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__18018);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__18018);
}
})()){
om.core.will_mount.call(null,c_18026);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__18019 = c;
if(G__18019){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18019.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__18019.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__18019);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__18019);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__18020 = cljs.core.seq.call(null,refs);
var chunk__18021 = null;
var count__18022 = (0);
var i__18023 = (0);
while(true){
if((i__18023 < count__18022)){
var ref = cljs.core._nth.call(null,chunk__18021,i__18023);
om.core.unobserve.call(null,this$,ref);

var G__18027 = seq__18020;
var G__18028 = chunk__18021;
var G__18029 = count__18022;
var G__18030 = (i__18023 + (1));
seq__18020 = G__18027;
chunk__18021 = G__18028;
count__18022 = G__18029;
i__18023 = G__18030;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__18020);
if(temp__4126__auto____$1){
var seq__18020__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18020__$1)){
var c__4544__auto__ = cljs.core.chunk_first.call(null,seq__18020__$1);
var G__18031 = cljs.core.chunk_rest.call(null,seq__18020__$1);
var G__18032 = c__4544__auto__;
var G__18033 = cljs.core.count.call(null,c__4544__auto__);
var G__18034 = (0);
seq__18020 = G__18031;
chunk__18021 = G__18032;
count__18022 = G__18033;
i__18023 = G__18034;
continue;
} else {
var ref = cljs.core.first.call(null,seq__18020__$1);
om.core.unobserve.call(null,this$,ref);

var G__18035 = cljs.core.next.call(null,seq__18020__$1);
var G__18036 = null;
var G__18037 = (0);
var G__18038 = (0);
seq__18020 = G__18035;
chunk__18021 = G__18036;
count__18022 = G__18037;
i__18023 = G__18038;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_18039 = this$.props;
var c_18040 = om.core.children.call(null,this$);
if((function (){var G__18024 = c_18040;
if(G__18024){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18024.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__18024.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__18024);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__18024);
}
})()){
var state_18041 = this$.state;
om.core.will_update.call(null,c_18040,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__18025 = c;
if(G__18025){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18025.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__18025.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__18025);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__18025);
}
})()){
var state_18042 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3757__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x18044 = cljs.core.clj__GT_js.call(null,methods$);
x18044.om$core$IGetState$ = true;

x18044.om$core$IGetState$_get_state$arity$1 = ((function (x18044){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__3757__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x18044))
;

x18044.om$core$IGetState$_get_state$arity$2 = ((function (x18044){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x18044))
;

x18044.om$core$IGetRenderState$ = true;

x18044.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x18044){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x18044))
;

x18044.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x18044){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x18044))
;

x18044.om$core$ISetState$ = true;

x18044.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x18044){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3745__auto__ = !((gstate == null));
if(and__3745__auto__){
return render;
} else {
return and__3745__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x18044))
;

x18044.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x18044){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x18044))
;

return x18044;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__18046 = x;
if(G__18046){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18046.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__18046.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__18046);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__18046);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__18048){
var vec__18049 = p__18048;
var k = cljs.core.nth.call(null,vec__18049,(0),null);
var v = cljs.core.nth.call(null,vec__18049,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__18050 = null;
var G__18050__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__18050__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__18050 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18050__2.call(this,self__,k);
case 3:
return G__18050__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18050.cljs$core$IFn$_invoke$arity$2 = G__18050__2;
G__18050.cljs$core$IFn$_invoke$arity$3 = G__18050__3;
return G__18050;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args18047){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18047)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__,opt__4346__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__18052 = null;
var G__18052__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__18052__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__18052 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18052__2.call(this,self__,k);
case 3:
return G__18052__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18052.cljs$core$IFn$_invoke$arity$2 = G__18052__2;
G__18052.cljs$core$IFn$_invoke$arity$3 = G__18052__3;
return G__18052;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args18051){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18051)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__,opt__4346__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x18054 = cljs.core.clone.call(null,val);
x18054.cljs$core$IEquiv$ = true;

x18054.cljs$core$IEquiv$_equiv$arity$2 = ((function (x18054){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x18054))
;

x18054.om$core$ITransact$ = true;

x18054.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18054){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x18054))
;

x18054.om$core$ICursor$ = true;

x18054.om$core$ICursor$_path$arity$1 = ((function (x18054){
return (function (_){
var ___$1 = this;
return path;
});})(x18054))
;

x18054.om$core$ICursor$_state$arity$1 = ((function (x18054){
return (function (_){
var ___$1 = this;
return state;
});})(x18054))
;

x18054.cljs$core$IDeref$ = true;

x18054.cljs$core$IDeref$_deref$arity$1 = ((function (x18054){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x18054))
;

return x18054;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__18057 = val;
if(G__18057){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18057.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__18057.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__18057);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__18057);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__18058 = val;
if(G__18058){
var bit__4438__auto__ = (G__18058.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4438__auto__) || (G__18058.cljs$core$ICloneable$)){
return true;
} else {
if((!G__18058.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__18058);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__18058);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__18060 = atom;
if(G__18060){
var bit__4438__auto__ = (G__18060.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4438__auto__) || (G__18060.cljs$core$IDeref$)){
return true;
} else {
if((!G__18060.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__18060);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__18060);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x18062 = cljs.core.clone.call(null,x);
x18062.om$core$ITransact$ = true;

x18062.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18062){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x18062))
;

x18062.om$core$ICursorDerive$ = true;

x18062.om$core$ICursorDerive$_derive$arity$4 = ((function (x18062){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x18062))
;

x18062.om$core$IAdapt$ = true;

x18062.om$core$IAdapt$_adapt$arity$2 = ((function (x18062){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x18062))
;

x18062.cljs$core$ICloneable$ = true;

x18062.cljs$core$ICloneable$_clone$arity$1 = ((function (x18062){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x18062))
;

return x18062;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__18069 = cursor;
if(G__18069){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18069.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__18069.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__18069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__18069);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x18070 = cljs.core.clone.call(null,cursor);
x18070.om$core$ITransact$ = true;

x18070.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18070,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x18070,path,storage))
;

x18070.om$core$IOmRef$ = true;

x18070.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x18070,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x18070,path,storage))
;

x18070.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x18070,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x18070,path,storage))
;

x18070.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x18070,path,storage){
return (function (_){
var ___$1 = this;
var seq__18071 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__18072 = null;
var count__18073 = (0);
var i__18074 = (0);
while(true){
if((i__18074 < count__18073)){
var c = cljs.core._nth.call(null,chunk__18072,i__18074);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__18075 = seq__18071;
var G__18076 = chunk__18072;
var G__18077 = count__18073;
var G__18078 = (i__18074 + (1));
seq__18071 = G__18075;
chunk__18072 = G__18076;
count__18073 = G__18077;
i__18074 = G__18078;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18071);
if(temp__4126__auto__){
var seq__18071__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18071__$1)){
var c__4544__auto__ = cljs.core.chunk_first.call(null,seq__18071__$1);
var G__18079 = cljs.core.chunk_rest.call(null,seq__18071__$1);
var G__18080 = c__4544__auto__;
var G__18081 = cljs.core.count.call(null,c__4544__auto__);
var G__18082 = (0);
seq__18071 = G__18079;
chunk__18072 = G__18080;
count__18073 = G__18081;
i__18074 = G__18082;
continue;
} else {
var c = cljs.core.first.call(null,seq__18071__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__18083 = cljs.core.next.call(null,seq__18071__$1);
var G__18084 = null;
var G__18085 = (0);
var G__18086 = (0);
seq__18071 = G__18083;
chunk__18072 = G__18084;
count__18073 = G__18085;
i__18074 = G__18086;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18070,path,storage))
;

x18070.om$core$IOmRef$_get_deps$arity$1 = ((function (x18070,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x18070,path,storage))
;

x18070.om$core$ICursorDerive$ = true;

x18070.om$core$ICursorDerive$_derive$arity$4 = ((function (x18070,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x18070,path,storage))
;

return x18070;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3757__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){
var or__3757__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.call(null,null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__18091_18095 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__18092_18096 = null;
var count__18093_18097 = (0);
var i__18094_18098 = (0);
while(true){
if((i__18094_18098 < count__18093_18097)){
var f_18099 = cljs.core._nth.call(null,chunk__18092_18096,i__18094_18098);
f_18099.call(null);

var G__18100 = seq__18091_18095;
var G__18101 = chunk__18092_18096;
var G__18102 = count__18093_18097;
var G__18103 = (i__18094_18098 + (1));
seq__18091_18095 = G__18100;
chunk__18092_18096 = G__18101;
count__18093_18097 = G__18102;
i__18094_18098 = G__18103;
continue;
} else {
var temp__4126__auto___18104 = cljs.core.seq.call(null,seq__18091_18095);
if(temp__4126__auto___18104){
var seq__18091_18105__$1 = temp__4126__auto___18104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18091_18105__$1)){
var c__4544__auto___18106 = cljs.core.chunk_first.call(null,seq__18091_18105__$1);
var G__18107 = cljs.core.chunk_rest.call(null,seq__18091_18105__$1);
var G__18108 = c__4544__auto___18106;
var G__18109 = cljs.core.count.call(null,c__4544__auto___18106);
var G__18110 = (0);
seq__18091_18095 = G__18107;
chunk__18092_18096 = G__18108;
count__18093_18097 = G__18109;
i__18094_18098 = G__18110;
continue;
} else {
var f_18111 = cljs.core.first.call(null,seq__18091_18105__$1);
f_18111.call(null);

var G__18112 = cljs.core.next.call(null,seq__18091_18105__$1);
var G__18113 = null;
var G__18114 = (0);
var G__18115 = (0);
seq__18091_18095 = G__18112;
chunk__18092_18096 = G__18113;
count__18093_18097 = G__18114;
i__18094_18098 = G__18115;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3757__auto__ = (function (){var G__18122 = x;
if(G__18122){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18122.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__18122.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__18122);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__18122);
}
})();
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (function (){var G__18124 = x;
if(G__18124){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto____$1 = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto____$1)){
return or__3757__auto____$1;
} else {
return G__18124.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__18124.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__18124);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__18124);
}
})();
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
var G__18125 = x;
if(G__18125){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto____$2 = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto____$2)){
return or__3757__auto____$2;
} else {
return G__18125.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__18125.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__18125);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__18125);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__3757__auto__ = descriptor;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3757__auto____$1)){
return or__3757__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__18127 = m;
var map__18127__$1 = ((cljs.core.seq_QMARK_.call(null,map__18127))?cljs.core.apply.call(null,cljs.core.hash_map,map__18127):map__18127);
var opts = cljs.core.get.call(null,map__18127__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__18127__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__18127__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__18127__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__18127__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__3757__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__18127,map__18127__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__18127,map__18127__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__18127,map__18127__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__18127,map__18127__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3757__auto__ = rkey;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__18136 = state;
if(G__18136){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18136.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__18136.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__18136);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__18136);
}
})()){
} else {
var properties_18144 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_18145 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_18146 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x18137_18147 = state;
x18137_18147.om$core$IRenderQueue$ = true;

x18137_18147.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_18146);
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_18146),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_18146,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_18146,cljs.core.empty);
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$INotify$ = true;

x18137_18147.om$core$INotify$_listen_BANG_$arity$3 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_18145,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_18145,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$INotify$_notify_BANG_$arity$3 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__18138_18148 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_18145));
var chunk__18139_18149 = null;
var count__18140_18150 = (0);
var i__18141_18151 = (0);
while(true){
if((i__18141_18151 < count__18140_18150)){
var vec__18142_18152 = cljs.core._nth.call(null,chunk__18139_18149,i__18141_18151);
var __18153 = cljs.core.nth.call(null,vec__18142_18152,(0),null);
var f_18154 = cljs.core.nth.call(null,vec__18142_18152,(1),null);
f_18154.call(null,tx_data,root_cursor);

var G__18155 = seq__18138_18148;
var G__18156 = chunk__18139_18149;
var G__18157 = count__18140_18150;
var G__18158 = (i__18141_18151 + (1));
seq__18138_18148 = G__18155;
chunk__18139_18149 = G__18156;
count__18140_18150 = G__18157;
i__18141_18151 = G__18158;
continue;
} else {
var temp__4126__auto___18159 = cljs.core.seq.call(null,seq__18138_18148);
if(temp__4126__auto___18159){
var seq__18138_18160__$1 = temp__4126__auto___18159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18138_18160__$1)){
var c__4544__auto___18161 = cljs.core.chunk_first.call(null,seq__18138_18160__$1);
var G__18162 = cljs.core.chunk_rest.call(null,seq__18138_18160__$1);
var G__18163 = c__4544__auto___18161;
var G__18164 = cljs.core.count.call(null,c__4544__auto___18161);
var G__18165 = (0);
seq__18138_18148 = G__18162;
chunk__18139_18149 = G__18163;
count__18140_18150 = G__18164;
i__18141_18151 = G__18165;
continue;
} else {
var vec__18143_18166 = cljs.core.first.call(null,seq__18138_18160__$1);
var __18167 = cljs.core.nth.call(null,vec__18143_18166,(0),null);
var f_18168 = cljs.core.nth.call(null,vec__18143_18166,(1),null);
f_18168.call(null,tx_data,root_cursor);

var G__18169 = cljs.core.next.call(null,seq__18138_18160__$1);
var G__18170 = null;
var G__18171 = (0);
var G__18172 = (0);
seq__18138_18148 = G__18169;
chunk__18139_18149 = G__18170;
count__18140_18150 = G__18171;
i__18141_18151 = G__18172;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$IRootProperties$ = true;

x18137_18147.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_18144,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_18144,cljs.core.dissoc,id,k);
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_18144,cljs.core.dissoc,id);
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

x18137_18147.om$core$IRootProperties$_get_property$arity$3 = ((function (x18137_18147,properties_18144,listeners_18145,render_queue_18146){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_18144),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x18137_18147,properties_18144,listeners_18145,render_queue_18146))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x18174 = cljs.core.clone.call(null,cursor);
x18174.om$core$IRootKey$ = true;

x18174.om$core$IRootKey$_root_key$arity$1 = ((function (x18174){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x18174))
;

x18174.om$core$IAdapt$ = true;

x18174.om$core$IAdapt$_adapt$arity$2 = ((function (x18174){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x18174))
;

x18174.cljs$core$ICloneable$ = true;

x18174.cljs$core$ICloneable$_clone$arity$1 = ((function (x18174){
return (function (this$){
var this$__$1 = this;
return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x18174))
;

return x18174;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__18175){
var map__18238 = p__18175;
var map__18238__$1 = ((cljs.core.seq_QMARK_.call(null,map__18238))?cljs.core.apply.call(null,cljs.core.hash_map,map__18238):map__18238);
var options = map__18238__$1;
var raf = cljs.core.get.call(null,map__18238__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__18238__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__18238__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__18238__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__18238__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__18238__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__18238__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__18300 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__18300,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__18300,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__18239 = value;
if(G__18239){
var bit__4438__auto__ = (G__18239.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4438__auto__) || (G__18239.cljs$core$IAtom$)){
return true;
} else {
if((!G__18239.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__18239);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__18239);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3757__auto__ = adapt;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_18301 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_18270 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_18271 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_18272 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_18273 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_18273;

om.core._STAR_state_STAR_ = _STAR_state_STAR_18272;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18271;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_18270;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_18301);
} else {
}
}

var queue_18302 = om.core._get_queue.call(null,state__$1);
if(cljs.core.empty_QMARK_.call(null,queue_18302)){
} else {
var seq__18274_18303 = cljs.core.seq.call(null,queue_18302);
var chunk__18275_18304 = null;
var count__18276_18305 = (0);
var i__18277_18306 = (0);
while(true){
if((i__18277_18306 < count__18276_18305)){
var c_18307 = cljs.core._nth.call(null,chunk__18275_18304,i__18277_18306);
if(cljs.core.truth_(c_18307.isMounted())){
var temp__4126__auto___18308 = (c_18307.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___18308)){
var next_props_18309 = temp__4126__auto___18308;
(c_18307.props["__om_cursor"] = next_props_18309);

(c_18307.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3757__auto__ = !((function (){var G__18279 = om.core.children.call(null,c_18307);
if(G__18279){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18279.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__18279.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18279);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18279);
}
})());
if(or__3757__auto__){
return or__3757__auto__;
} else {
return c_18307.shouldComponentUpdate(c_18307.props,c_18307.state);
}
})())){
c_18307.forceUpdate();
} else {
}
} else {
}

var G__18310 = seq__18274_18303;
var G__18311 = chunk__18275_18304;
var G__18312 = count__18276_18305;
var G__18313 = (i__18277_18306 + (1));
seq__18274_18303 = G__18310;
chunk__18275_18304 = G__18311;
count__18276_18305 = G__18312;
i__18277_18306 = G__18313;
continue;
} else {
var temp__4126__auto___18314 = cljs.core.seq.call(null,seq__18274_18303);
if(temp__4126__auto___18314){
var seq__18274_18315__$1 = temp__4126__auto___18314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18274_18315__$1)){
var c__4544__auto___18316 = cljs.core.chunk_first.call(null,seq__18274_18315__$1);
var G__18317 = cljs.core.chunk_rest.call(null,seq__18274_18315__$1);
var G__18318 = c__4544__auto___18316;
var G__18319 = cljs.core.count.call(null,c__4544__auto___18316);
var G__18320 = (0);
seq__18274_18303 = G__18317;
chunk__18275_18304 = G__18318;
count__18276_18305 = G__18319;
i__18277_18306 = G__18320;
continue;
} else {
var c_18321 = cljs.core.first.call(null,seq__18274_18315__$1);
if(cljs.core.truth_(c_18321.isMounted())){
var temp__4126__auto___18322__$1 = (c_18321.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___18322__$1)){
var next_props_18323 = temp__4126__auto___18322__$1;
(c_18321.props["__om_cursor"] = next_props_18323);

(c_18321.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3757__auto__ = !((function (){var G__18281 = om.core.children.call(null,c_18321);
if(G__18281){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18281.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__18281.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18281);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18281);
}
})());
if(or__3757__auto__){
return or__3757__auto__;
} else {
return c_18321.shouldComponentUpdate(c_18321.props,c_18321.state);
}
})())){
c_18321.forceUpdate();
} else {
}
} else {
}

var G__18324 = cljs.core.next.call(null,seq__18274_18315__$1);
var G__18325 = null;
var G__18326 = (0);
var G__18327 = (0);
seq__18274_18303 = G__18324;
chunk__18275_18304 = G__18325;
count__18276_18305 = G__18326;
i__18277_18306 = G__18327;
continue;
}
} else {
}
}
break;
}

om.core._empty_queue_BANG_.call(null,state__$1);
}

var _refs_18328 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_18328)){
} else {
var seq__18282_18329 = cljs.core.seq.call(null,_refs_18328);
var chunk__18283_18330 = null;
var count__18284_18331 = (0);
var i__18285_18332 = (0);
while(true){
if((i__18285_18332 < count__18284_18331)){
var vec__18286_18333 = cljs.core._nth.call(null,chunk__18283_18330,i__18285_18332);
var path_18334__$1 = cljs.core.nth.call(null,vec__18286_18333,(0),null);
var cs_18335 = cljs.core.nth.call(null,vec__18286_18333,(1),null);
var cs_18336__$1 = cljs.core.deref.call(null,cs_18335);
var seq__18287_18337 = cljs.core.seq.call(null,cs_18336__$1);
var chunk__18288_18338 = null;
var count__18289_18339 = (0);
var i__18290_18340 = (0);
while(true){
if((i__18290_18340 < count__18289_18339)){
var vec__18291_18341 = cljs.core._nth.call(null,chunk__18288_18338,i__18290_18340);
var id_18342 = cljs.core.nth.call(null,vec__18291_18341,(0),null);
var c_18343 = cljs.core.nth.call(null,vec__18291_18341,(1),null);
if(cljs.core.truth_(c_18343.shouldComponentUpdate(c_18343.props,c_18343.state))){
c_18343.forceUpdate();
} else {
}

var G__18344 = seq__18287_18337;
var G__18345 = chunk__18288_18338;
var G__18346 = count__18289_18339;
var G__18347 = (i__18290_18340 + (1));
seq__18287_18337 = G__18344;
chunk__18288_18338 = G__18345;
count__18289_18339 = G__18346;
i__18290_18340 = G__18347;
continue;
} else {
var temp__4126__auto___18348 = cljs.core.seq.call(null,seq__18287_18337);
if(temp__4126__auto___18348){
var seq__18287_18349__$1 = temp__4126__auto___18348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18287_18349__$1)){
var c__4544__auto___18350 = cljs.core.chunk_first.call(null,seq__18287_18349__$1);
var G__18351 = cljs.core.chunk_rest.call(null,seq__18287_18349__$1);
var G__18352 = c__4544__auto___18350;
var G__18353 = cljs.core.count.call(null,c__4544__auto___18350);
var G__18354 = (0);
seq__18287_18337 = G__18351;
chunk__18288_18338 = G__18352;
count__18289_18339 = G__18353;
i__18290_18340 = G__18354;
continue;
} else {
var vec__18292_18355 = cljs.core.first.call(null,seq__18287_18349__$1);
var id_18356 = cljs.core.nth.call(null,vec__18292_18355,(0),null);
var c_18357 = cljs.core.nth.call(null,vec__18292_18355,(1),null);
if(cljs.core.truth_(c_18357.shouldComponentUpdate(c_18357.props,c_18357.state))){
c_18357.forceUpdate();
} else {
}

var G__18358 = cljs.core.next.call(null,seq__18287_18349__$1);
var G__18359 = null;
var G__18360 = (0);
var G__18361 = (0);
seq__18287_18337 = G__18358;
chunk__18288_18338 = G__18359;
count__18289_18339 = G__18360;
i__18290_18340 = G__18361;
continue;
}
} else {
}
}
break;
}

var G__18362 = seq__18282_18329;
var G__18363 = chunk__18283_18330;
var G__18364 = count__18284_18331;
var G__18365 = (i__18285_18332 + (1));
seq__18282_18329 = G__18362;
chunk__18283_18330 = G__18363;
count__18284_18331 = G__18364;
i__18285_18332 = G__18365;
continue;
} else {
var temp__4126__auto___18366 = cljs.core.seq.call(null,seq__18282_18329);
if(temp__4126__auto___18366){
var seq__18282_18367__$1 = temp__4126__auto___18366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18282_18367__$1)){
var c__4544__auto___18368 = cljs.core.chunk_first.call(null,seq__18282_18367__$1);
var G__18369 = cljs.core.chunk_rest.call(null,seq__18282_18367__$1);
var G__18370 = c__4544__auto___18368;
var G__18371 = cljs.core.count.call(null,c__4544__auto___18368);
var G__18372 = (0);
seq__18282_18329 = G__18369;
chunk__18283_18330 = G__18370;
count__18284_18331 = G__18371;
i__18285_18332 = G__18372;
continue;
} else {
var vec__18293_18373 = cljs.core.first.call(null,seq__18282_18367__$1);
var path_18374__$1 = cljs.core.nth.call(null,vec__18293_18373,(0),null);
var cs_18375 = cljs.core.nth.call(null,vec__18293_18373,(1),null);
var cs_18376__$1 = cljs.core.deref.call(null,cs_18375);
var seq__18294_18377 = cljs.core.seq.call(null,cs_18376__$1);
var chunk__18295_18378 = null;
var count__18296_18379 = (0);
var i__18297_18380 = (0);
while(true){
if((i__18297_18380 < count__18296_18379)){
var vec__18298_18381 = cljs.core._nth.call(null,chunk__18295_18378,i__18297_18380);
var id_18382 = cljs.core.nth.call(null,vec__18298_18381,(0),null);
var c_18383 = cljs.core.nth.call(null,vec__18298_18381,(1),null);
if(cljs.core.truth_(c_18383.shouldComponentUpdate(c_18383.props,c_18383.state))){
c_18383.forceUpdate();
} else {
}

var G__18384 = seq__18294_18377;
var G__18385 = chunk__18295_18378;
var G__18386 = count__18296_18379;
var G__18387 = (i__18297_18380 + (1));
seq__18294_18377 = G__18384;
chunk__18295_18378 = G__18385;
count__18296_18379 = G__18386;
i__18297_18380 = G__18387;
continue;
} else {
var temp__4126__auto___18388__$1 = cljs.core.seq.call(null,seq__18294_18377);
if(temp__4126__auto___18388__$1){
var seq__18294_18389__$1 = temp__4126__auto___18388__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18294_18389__$1)){
var c__4544__auto___18390 = cljs.core.chunk_first.call(null,seq__18294_18389__$1);
var G__18391 = cljs.core.chunk_rest.call(null,seq__18294_18389__$1);
var G__18392 = c__4544__auto___18390;
var G__18393 = cljs.core.count.call(null,c__4544__auto___18390);
var G__18394 = (0);
seq__18294_18377 = G__18391;
chunk__18295_18378 = G__18392;
count__18296_18379 = G__18393;
i__18297_18380 = G__18394;
continue;
} else {
var vec__18299_18395 = cljs.core.first.call(null,seq__18294_18389__$1);
var id_18396 = cljs.core.nth.call(null,vec__18299_18395,(0),null);
var c_18397 = cljs.core.nth.call(null,vec__18299_18395,(1),null);
if(cljs.core.truth_(c_18397.shouldComponentUpdate(c_18397.props,c_18397.state))){
c_18397.forceUpdate();
} else {
}

var G__18398 = cljs.core.next.call(null,seq__18294_18389__$1);
var G__18399 = null;
var G__18400 = (0);
var G__18401 = (0);
seq__18294_18377 = G__18398;
chunk__18295_18378 = G__18399;
count__18296_18379 = G__18400;
i__18297_18380 = G__18401;
continue;
}
} else {
}
}
break;
}

var G__18402 = cljs.core.next.call(null,seq__18282_18367__$1);
var G__18403 = null;
var G__18404 = (0);
var G__18405 = (0);
seq__18282_18329 = G__18402;
chunk__18283_18330 = G__18403;
count__18284_18331 = G__18404;
i__18285_18332 = G__18405;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18238,map__18238__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__18407 = x;
if(G__18407){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18407.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__18407.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__18407);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__18407);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__18409 = cursor;
if(G__18409){
var bit__4438__auto__ = null;
if(cljs.core.truth_((function (){var or__3757__auto__ = bit__4438__auto__;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return G__18409.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__18409.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__18409);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__18409);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
