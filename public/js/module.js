!function(t,e){"function"==typeof define&&define.amd?define("simple-module",["jquery"],(function(n){return t.Module=e(n)})):"object"==typeof exports?module.exports=e(require("jquery")):t.SimpleModule=e(jQuery)}(this,(function(t){var e,n=[].slice;return e=function(){function e(e){var n,o,i,r,l,c,s;if(this.opts=t.extend({},this.opts,e),(n=this.constructor)._connectedClasses||(n._connectedClasses=[]),l=function(){var t,e,n,i;for(i=[],t=0,e=(n=this.constructor._connectedClasses).length;t<e;t++)o=n[t],s=o.pluginName.charAt(0).toLowerCase()+o.pluginName.slice(1),o.prototype._connected&&(o.prototype._module=this),i.push(this[s]=new o);return i}.call(this),this._connected)this.opts=t.extend({},this.opts,this._module.opts);else for(this._init(),i=0,c=l.length;i<c;i++)"function"==typeof(r=l[i])._init&&r._init();this.trigger("initialized")}return e.extend=function(t){var e,n,o;if(null!=t&&"object"==typeof t){for(e in t)o=t[e],"included"!==e&&"extended"!==e&&(this[e]=o);return null!=(n=t.extended)?n.call(this):void 0}},e.include=function(t){var e,n,o;if(null!=t&&"object"==typeof t){for(e in t)o=t[e],"included"!==e&&"extended"!==e&&(this.prototype[e]=o);return null!=(n=t.included)?n.call(this):void 0}},e.connect=function(t){if("function"==typeof t){if(!t.pluginName)throw new Error("Module.connect: cannot connect plugin without pluginName");return t.prototype._connected=!0,this._connectedClasses||(this._connectedClasses=[]),this._connectedClasses.push(t),t.pluginName?this[t.pluginName]=t:void 0}},e.prototype.opts={},e.prototype._init=function(){},e.prototype.on=function(){var e,o;return e=1<=arguments.length?n.call(arguments,0):[],(o=t(this)).on.apply(o,e),this},e.prototype.one=function(){var e,o;return e=1<=arguments.length?n.call(arguments,0):[],(o=t(this)).one.apply(o,e),this},e.prototype.off=function(){var e,o;return e=1<=arguments.length?n.call(arguments,0):[],(o=t(this)).off.apply(o,e),this},e.prototype.trigger=function(){var e,o;return e=1<=arguments.length?n.call(arguments,0):[],(o=t(this)).trigger.apply(o,e),this},e.prototype.triggerHandler=function(){var e,o;return e=1<=arguments.length?n.call(arguments,0):[],(o=t(this)).triggerHandler.apply(o,e)},e.prototype._t=function(){var t,e;return t=1<=arguments.length?n.call(arguments,0):[],(e=this.constructor)._t.apply(e,t)},e._t=function(){var t,e,o,i;return e=arguments[0],t=2<=arguments.length?n.call(arguments,1):[],i=(null!=(o=this.i18n[this.locale])?o[e]:void 0)||"",t.length>0?(i=i.replace(/([^%]|^)%(?:(\d+)\$)?s/g,(function(e,n,o){return o?n+t[parseInt(o)-1]:n+t.shift()}))).replace(/%%s/g,"%s"):i},e.i18n={"zh-CN":{}},e.locale="zh-CN",e}(),e}));
