//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
;
/** @namespace wp */
window.wp = window.wp || {};

(function( exports, $ ){
	var api = {}, ctor, inherits,
		slice = Array.prototype.slice;

	// Shared empty constructor function to aid in prototype-chain creation.
	ctor = function() {};

	/**
	 * Helper function to correctly set up the prototype chain, for subclasses.
	 * Similar to `goog.inherits`, but uses a hash of prototype properties and
	 * class properties to be extended.
	 *
	 * @param  object parent      Parent class constructor to inherit from.
	 * @param  object protoProps  Properties to apply to the prototype for use as class instance properties.
	 * @param  object staticProps Properties to apply directly to the class constructor.
	 * @return child              The subclassed constructor.
	 */
	inherits = function( parent, protoProps, staticProps ) {
		var child;

		// The constructor function for the new subclass is either defined by you
		// (the "constructor" property in your `extend` definition), or defaulted
		// by us to simply call `super()`.
		if ( protoProps && protoProps.hasOwnProperty( 'constructor' ) ) {
			child = protoProps.constructor;
		} else {
			child = function() {
				// Storing the result `super()` before returning the value
				// prevents a bug in Opera where, if the constructor returns
				// a function, Opera will reject the return value in favor of
				// the original object. This causes all sorts of trouble.
				var result = parent.apply( this, arguments );
				return result;
			};
		}

		// Inherit class (static) properties from parent.
		$.extend( child, parent );

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent`'s constructor function.
		ctor.prototype  = parent.prototype;
		child.prototype = new ctor();

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if ( protoProps )
			$.extend( child.prototype, protoProps );

		// Add static properties to the constructor function, if supplied.
		if ( staticProps )
			$.extend( child, staticProps );

		// Correctly set child's `prototype.constructor`.
		child.prototype.constructor = child;

		// Set a convenience property in case the parent's prototype is needed later.
		child.__super__ = parent.prototype;

		return child;
	};

	/**
	 * Base class for object inheritance.
	 */
	api.Class = function( applicator, argsArray, options ) {
		var magic, args = arguments;

		if ( applicator && argsArray && api.Class.applicator === applicator ) {
			args = argsArray;
			$.extend( this, options || {} );
		}

		magic = this;

		/*
		 * If the class has a method called "instance",
		 * the return value from the class' constructor will be a function that
		 * calls the "instance" method.
		 *
		 * It is also an object that has properties and methods inside it.
		 */
		if ( this.instance ) {
			magic = function() {
				return magic.instance.apply( magic, arguments );
			};

			$.extend( magic, this );
		}

		magic.initialize.apply( magic, args );
		return magic;
	};

	/**
	 * Creates a subclass of the class.
	 *
	 * @param  object protoProps  Properties to apply to the prototype.
	 * @param  object staticProps Properties to apply directly to the class.
	 * @return child              The subclass.
	 */
	api.Class.extend = function( protoProps, classProps ) {
		var child = inherits( this, protoProps, classProps );
		child.extend = this.extend;
		return child;
	};

	api.Class.applicator = {};

	/**
	 * Initialize a class instance.
	 *
	 * Override this function in a subclass as needed.
	 */
	api.Class.prototype.initialize = function() {};

	/*
	 * Checks whether a given instance extended a constructor.
	 *
	 * The magic surrounding the instance parameter causes the instanceof
	 * keyword to return inaccurate results; it defaults to the function's
	 * prototype instead of the constructor chain. Hence this function.
	 */
	api.Class.prototype.extended = function( constructor ) {
		var proto = this;

		while ( typeof proto.constructor !== 'undefined' ) {
			if ( proto.constructor === constructor )
				return true;
			if ( typeof proto.constructor.__super__ === 'undefined' )
				return false;
			proto = proto.constructor.__super__;
		}
		return false;
	};

	/**
	 * An events manager object, offering the ability to bind to and trigger events.
	 *
	 * Used as a mixin.
	 */
	api.Events = {
		trigger: function( id ) {
			if ( this.topics && this.topics[ id ] )
				this.topics[ id ].fireWith( this, slice.call( arguments, 1 ) );
			return this;
		},

		bind: function( id ) {
			this.topics = this.topics || {};
			this.topics[ id ] = this.topics[ id ] || $.Callbacks();
			this.topics[ id ].add.apply( this.topics[ id ], slice.call( arguments, 1 ) );
			return this;
		},

		unbind: function( id ) {
			if ( this.topics && this.topics[ id ] )
				this.topics[ id ].remove.apply( this.topics[ id ], slice.call( arguments, 1 ) );
			return this;
		}
	};

	/**
	 * Observable values that support two-way binding.
	 *
	 * @memberOf wp.customize
	 * @alias wp.customize.Value
	 *
	 * @constructor
	 */
	api.Value = api.Class.extend(/** @lends wp.customize.Value.prototype */{
		/**
		 * @param {mixed}  initial The initial value.
		 * @param {object} options
		 */
		initialize: function( initial, options ) {
			this._value = initial; // @todo: potentially change this to a this.set() call.
			this.callbacks = $.Callbacks();
			this._dirty = false;

			$.extend( this, options || {} );

			this.set = $.proxy( this.set, this );
		},

		/*
		 * Magic. Returns a function that will become the instance.
		 * Set to null to prevent the instance from extending a function.
		 */
		instance: function() {
			return arguments.length ? this.set.apply( this, arguments ) : this.get();
		},

		/**
		 * Get the value.
		 *
		 * @return {mixed}
		 */
		get: function() {
			return this._value;
		},

		/**
		 * Set the value and trigger all bound callbacks.
		 *
		 * @param {object} to New value.
		 */
		set: function( to ) {
			var from = this._value;

			to = this._setter.apply( this, arguments );
			to = this.validate( to );

			// Bail if the sanitized value is null or unchanged.
			if ( null === to || _.isEqual( from, to ) ) {
				return this;
			}

			this._value = to;
			this._dirty = true;

			this.callbacks.fireWith( this, [ to, from ] );

			return this;
		},

		_setter: function( to ) {
			return to;
		},

		setter: function( callback ) {
			var from = this.get();
			this._setter = callback;
			// Temporarily clear value so setter can decide if it's valid.
			this._value = null;
			this.set( from );
			return this;
		},

		resetSetter: function() {
			this._setter = this.constructor.prototype._setter;
			this.set( this.get() );
			return this;
		},

		validate: function( value ) {
			return value;
		},

		/**
		 * Bind a function to be invoked whenever the value changes.
		 *
		 * @param {...Function} A function, or multiple functions, to add to the callback stack.
		 */
		bind: function() {
			this.callbacks.add.apply( this.callbacks, arguments );
			return this;
		},

		/**
		 * Unbind a previously bound function.
		 *
		 * @param {...Function} A function, or multiple functions, to remove from the callback stack.
		 */
		unbind: function() {
			this.callbacks.remove.apply( this.callbacks, arguments );
			return this;
		},

		link: function() { // values*
			var set = this.set;
			$.each( arguments, function() {
				this.bind( set );
			});
			return this;
		},

		unlink: function() { // values*
			var set = this.set;
			$.each( arguments, function() {
				this.unbind( set );
			});
			return this;
		},

		sync: function() { // values*
			var that = this;
			$.each( arguments, function() {
				that.link( this );
				this.link( that );
			});
			return this;
		},

		unsync: function() { // values*
			var that = this;
			$.each( arguments, function() {
				that.unlink( this );
				this.unlink( that );
			});
			return this;
		}
	});

	/**
	 * A collection of observable values.
	 *
	 * @memberOf wp.customize
	 * @alias wp.customize.Values
	 *
	 * @constructor
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Values = api.Class.extend(/** @lends wp.customize.Values.prototype */{

		/**
		 * The default constructor for items of the collection.
		 *
		 * @type {object}
		 */
		defaultConstructor: api.Value,

		initialize: function( options ) {
			$.extend( this, options || {} );

			this._value = {};
			this._deferreds = {};
		},

		/**
		 * Get the instance of an item from the collection if only ID is specified.
		 *
		 * If more than one argument is supplied, all are expected to be IDs and
		 * the last to be a function callback that will be invoked when the requested
		 * items are available.
		 *
		 * @see {api.Values.when}
		 *
		 * @param  {string}   id ID of the item.
		 * @param  {...}         Zero or more IDs of items to wait for and a callback
		 *                       function to invoke when they're available. Optional.
		 * @return {mixed}    The item instance if only one ID was supplied.
		 *                    A Deferred Promise object if a callback function is supplied.
		 */
		instance: function( id ) {
			if ( arguments.length === 1 )
				return this.value( id );

			return this.when.apply( this, arguments );
		},

		/**
		 * Get the instance of an item.
		 *
		 * @param  {string} id The ID of the item.
		 * @return {[type]}    [description]
		 */
		value: function( id ) {
			return this._value[ id ];
		},

		/**
		 * Whether the collection has an item with the given ID.
		 *
		 * @param  {string}  id The ID of the item to look for.
		 * @return {Boolean}
		 */
		has: function( id ) {
			return typeof this._value[ id ] !== 'undefined';
		},

		/**
		 * Add an item to the collection.
		 *
		 * @param {string|wp.customize.Class} item - The item instance to add, or the ID for the instance to add. When an ID string is supplied, then itemObject must be provided.
		 * @param {wp.customize.Class}        [itemObject] - The item instance when the first argument is a ID string.
		 * @return {wp.customize.Class} The new item's instance, or an existing instance if already added.
		 */
		add: function( item, itemObject ) {
			var collection = this, id, instance;
			if ( 'string' === typeof item ) {
				id = item;
				instance = itemObject;
			} else {
				if ( 'string' !== typeof item.id ) {
					throw new Error( 'Unknown key' );
				}
				id = item.id;
				instance = item;
			}

			if ( collection.has( id ) ) {
				return collection.value( id );
			}

			collection._value[ id ] = instance;
			instance.parent = collection;

			// Propagate a 'change' event on an item up to the collection.
			if ( instance.extended( api.Value ) ) {
				instance.bind( collection._change );
			}

			collection.trigger( 'add', instance );

			// If a deferred object exists for this item,
			// resolve it.
			if ( collection._deferreds[ id ] ) {
				collection._deferreds[ id ].resolve();
			}

			return collection._value[ id ];
		},

		/**
		 * Create a new item of the collection using the collection's default constructor
		 * and store it in the collection.
		 *
		 * @param  {string} id    The ID of the item.
		 * @param  {mixed}  value Any extra arguments are passed into the item's initialize method.
		 * @return {mixed}  The new item's instance.
		 */
		create: function( id ) {
			return this.add( id, new this.defaultConstructor( api.Class.applicator, slice.call( arguments, 1 ) ) );
		},

		/**
		 * Iterate over all items in the collection invoking the provided callback.
		 *
		 * @param  {Function} callback Function to invoke.
		 * @param  {object}   context  Object context to invoke the function with. Optional.
		 */
		each: function( callback, context ) {
			context = typeof context === 'undefined' ? this : context;

			$.each( this._value, function( key, obj ) {
				callback.call( context, obj, key );
			});
		},

		/**
		 * Remove an item from the collection.
		 *
		 * @param  {string} id The ID of the item to remove.
		 */
		remove: function( id ) {
			var value = this.value( id );

			if ( value ) {

				// Trigger event right before the element is removed from the collection.
				this.trigger( 'remove', value );

				if ( value.extended( api.Value ) ) {
					value.unbind( this._change );
				}
				delete value.parent;
			}

			delete this._value[ id ];
			delete this._deferreds[ id ];

			// Trigger removed event after the item has been eliminated from the collection.
			if ( value ) {
				this.trigger( 'removed', value );
			}
		},

		/**
		 * Runs a callback once all requested values exist.
		 *
		 * when( ids*, [callback] );
		 *
		 * For example:
		 *     when( id1, id2, id3, function( value1, value2, value3 ) {} );
		 *
		 * @returns $.Deferred.promise();
		 */
		when: function() {
			var self = this,
				ids  = slice.call( arguments ),
				dfd  = $.Deferred();

			// If the last argument is a callback, bind it to .done()
			if ( $.isFunction( ids[ ids.length - 1 ] ) )
				dfd.done( ids.pop() );

			/*
			 * Create a stack of deferred objects for each item that is not
			 * yet available, and invoke the supplied callback when they are.
			 */
			$.when.apply( $, $.map( ids, function( id ) {
				if ( self.has( id ) )
					return;

				/*
				 * The requested item is not available yet, create a deferred
				 * object to resolve when it becomes available.
				 */
				return self._deferreds[ id ] = self._deferreds[ id ] || $.Deferred();
			})).done( function() {
				var values = $.map( ids, function( id ) {
						return self( id );
					});

				// If a value is missing, we've used at least one expired deferred.
				// Call Values.when again to generate a new deferred.
				if ( values.length !== ids.length ) {
					// ids.push( callback );
					self.when.apply( self, ids ).done( function() {
						dfd.resolveWith( self, values );
					});
					return;
				}

				dfd.resolveWith( self, values );
			});

			return dfd.promise();
		},

		/**
		 * A helper function to propagate a 'change' event from an item
		 * to the collection itself.
		 */
		_change: function() {
			this.parent.trigger( 'change', this );
		}
	});

	// Create a global events bus on the Customizer.
	$.extend( api.Values.prototype, api.Events );


	/**
	 * Cast a string to a jQuery collection if it isn't already.
	 *
	 * @param {string|jQuery collection} element
	 */
	api.ensure = function( element ) {
		return typeof element == 'string' ? $( element ) : element;
	};

	/**
	 * An observable value that syncs with an element.
	 *
	 * Handles inputs, selects, and textareas by default.
	 *
	 * @memberOf wp.customize
	 * @alias wp.customize.Element
	 *
	 * @constructor
	 * @augments wp.customize.Value
	 * @augments wp.customize.Class
	 */
	api.Element = api.Value.extend(/** @lends wp.customize.Element */{
		initialize: function( element, options ) {
			var self = this,
				synchronizer = api.Element.synchronizer.html,
				type, update, refresh;

			this.element = api.ensure( element );
			this.events = '';

			if ( this.element.is( 'input, select, textarea' ) ) {
				type = this.element.prop( 'type' );
				this.events += ' change input';
				synchronizer = api.Element.synchronizer.val;

				if ( this.element.is( 'input' ) && api.Element.synchronizer[ type ] ) {
					synchronizer = api.Element.synchronizer[ type ];
				}
			}

			api.Value.prototype.initialize.call( this, null, $.extend( options || {}, synchronizer ) );
			this._value = this.get();

			update = this.update;
			refresh = this.refresh;

			this.update = function( to ) {
				if ( to !== refresh.call( self ) ) {
					update.apply( this, arguments );
				}
			};
			this.refresh = function() {
				self.set( refresh.call( self ) );
			};

			this.bind( this.update );
			this.element.bind( this.events, this.refresh );
		},

		find: function( selector ) {
			return $( selector, this.element );
		},

		refresh: function() {},

		update: function() {}
	});

	api.Element.synchronizer = {};

	$.each( [ 'html', 'val' ], function( index, method ) {
		api.Element.synchronizer[ method ] = {
			update: function( to ) {
				this.element[ method ]( to );
			},
			refresh: function() {
				return this.element[ method ]();
			}
		};
	});

	api.Element.synchronizer.checkbox = {
		update: function( to ) {
			this.element.prop( 'checked', to );
		},
		refresh: function() {
			return this.element.prop( 'checked' );
		}
	};

	api.Element.synchronizer.radio = {
		update: function( to ) {
			this.element.filter( function() {
				return this.value === to;
			}).prop( 'checked', true );
		},
		refresh: function() {
			return this.element.filter( ':checked' ).val();
		}
	};

	$.support.postMessage = !! window.postMessage;

	/**
	 * A communicator for sending data from one window to another over postMessage.
	 *
	 * @memberOf wp.customize
	 * @alias wp.customize.Messenger
	 *
	 * @constructor
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Messenger = api.Class.extend(/** @lends wp.customize.Messenger.prototype */{
		/**
		 * Create a new Value.
		 *
		 * @param  {string} key     Unique identifier.
		 * @param  {mixed}  initial Initial value.
		 * @param  {mixed}  options Options hash. Optional.
		 * @return {Value}          Class instance of the Value.
		 */
		add: function( key, initial, options ) {
			return this[ key ] = new api.Value( initial, options );
		},

		/**
		 * Initialize Messenger.
		 *
		 * @param  {object} params - Parameters to configure the messenger.
		 *         {string} params.url - The URL to communicate with.
		 *         {window} params.targetWindow - The window instance to communicate with. Default window.parent.
		 *         {string} params.channel - If provided, will send the channel with each message and only accept messages a matching channel.
		 * @param  {object} options - Extend any instance parameter or method with this object.
		 */
		initialize: function( params, options ) {
			// Target the parent frame by default, but only if a parent frame exists.
			var defaultTarget = window.parent === window ? null : window.parent;

			$.extend( this, options || {} );

			this.add( 'channel', params.channel );
			this.add( 'url', params.url || '' );
			this.add( 'origin', this.url() ).link( this.url ).setter( function( to ) {
				var urlParser = document.createElement( 'a' );
				urlParser.href = to;
				// Port stripping needed by IE since it adds to host but not to event.origin.
				return urlParser.protocol + '//' + urlParser.host.replace( /:(80|443)$/, '' );
			});

			// first add with no value
			this.add( 'targetWindow', null );
			// This avoids SecurityErrors when setting a window object in x-origin iframe'd scenarios.
			this.targetWindow.set = function( to ) {
				var from = this._value;

				to = this._setter.apply( this, arguments );
				to = this.validate( to );

				if ( null === to || from === to ) {
					return this;
				}

				this._value = to;
				this._dirty = true;

				this.callbacks.fireWith( this, [ to, from ] );

				return this;
			};
			// now set it
			this.targetWindow( params.targetWindow || defaultTarget );


			// Since we want jQuery to treat the receive function as unique
			// to this instance, we give the function a new guid.
			//
			// This will prevent every Messenger's receive function from being
			// unbound when calling $.off( 'message', this.receive );
			this.receive = $.proxy( this.receive, this );
			this.receive.guid = $.guid++;

			$( window ).on( 'message', this.receive );
		},

		destroy: function() {
			$( window ).off( 'message', this.receive );
		},

		/**
		 * Receive data from the other window.
		 *
		 * @param  {jQuery.Event} event Event with embedded data.
		 */
		receive: function( event ) {
			var message;

			event = event.originalEvent;

			if ( ! this.targetWindow || ! this.targetWindow() ) {
				return;
			}

			// Check to make sure the origin is valid.
			if ( this.origin() && event.origin !== this.origin() )
				return;

			// Ensure we have a string that's JSON.parse-able
			if ( typeof event.data !== 'string' || event.data[0] !== '{' ) {
				return;
			}

			message = JSON.parse( event.data );

			// Check required message properties.
			if ( ! message || ! message.id || typeof message.data === 'undefined' )
				return;

			// Check if channel names match.
			if ( ( message.channel || this.channel() ) && this.channel() !== message.channel )
				return;

			this.trigger( message.id, message.data );
		},

		/**
		 * Send data to the other window.
		 *
		 * @param  {string} id   The event name.
		 * @param  {object} data Data.
		 */
		send: function( id, data ) {
			var message;

			data = typeof data === 'undefined' ? null : data;

			if ( ! this.url() || ! this.targetWindow() )
				return;

			message = { id: id, data: data };
			if ( this.channel() )
				message.channel = this.channel();

			this.targetWindow().postMessage( JSON.stringify( message ), this.origin() );
		}
	});

	// Add the Events mixin to api.Messenger.
	$.extend( api.Messenger.prototype, api.Events );

	/**
	 * Notification.
	 *
	 * @class
	 * @augments wp.customize.Class
	 * @since 4.6.0
	 *
	 * @memberOf wp.customize
	 * @alias wp.customize.Notification
	 *
	 * @param {string}  code - The error code.
	 * @param {object}  params - Params.
	 * @param {string}  params.message=null - The error message.
	 * @param {string}  [params.type=error] - The notification type.
	 * @param {boolean} [params.fromServer=false] - Whether the notification was server-sent.
	 * @param {string}  [params.setting=null] - The setting ID that the notification is related to.
	 * @param {*}       [params.data=null] - Any additional data.
	 */
	api.Notification = api.Class.extend(/** @lends wp.customize.Notification.prototype */{

		/**
		 * Template function for rendering the notification.
		 *
		 * This will be populated with template option or else it will be populated with template from the ID.
		 *
		 * @since 4.9.0
		 * @var {Function}
		 */
		template: null,

		/**
		 * ID for the template to render the notification.
		 *
		 * @since 4.9.0
		 * @var {string}
		 */
		templateId: 'customize-notification',

		/**
		 * Additional class names to add to the notification container.
		 *
		 * @since 4.9.0
		 * @var {string}
		 */
		containerClasses: '',

		/**
		 * Initialize notification.
		 *
		 * @since 4.9.0
		 *
		 * @param {string}   code - Notification code.
		 * @param {object}   params - Notification parameters.
		 * @param {string}   params.message - Message.
		 * @param {string}   [params.type=error] - Type.
		 * @param {string}   [params.setting] - Related setting ID.
		 * @param {Function} [params.template] - Function for rendering template. If not provided, this will come from templateId.
		 * @param {string}   [params.templateId] - ID for template to render the notification.
		 * @param {string}   [params.containerClasses] - Additional class names to add to the notification container.
		 * @param {boolean}  [params.dismissible] - Whether the notification can be dismissed.
		 */
		initialize: function( code, params ) {
			var _params;
			this.code = code;
			_params = _.extend(
				{
					message: null,
					type: 'error',
					fromServer: false,
					data: null,
					setting: null,
					template: null,
					dismissible: false,
					containerClasses: ''
				},
				params
			);
			delete _params.code;
			_.extend( this, _params );
		},

		/**
		 * Render the notification.
		 *
		 * @since 4.9.0
		 *
		 * @returns {jQuery} Notification container element.
		 */
		render: function() {
			var notification = this, container, data;
			if ( ! notification.template ) {
				notification.template = wp.template( notification.templateId );
			}
			data = _.extend( {}, notification, {
				alt: notification.parent && notification.parent.alt
			} );
			container = $( notification.template( data ) );

			if ( notification.dismissible ) {
				container.find( '.notice-dismiss' ).on( 'click keydown', function( event ) {
					if ( 'keydown' === event.type && 13 !== event.which ) {
						return;
					}

					if ( notification.parent ) {
						notification.parent.remove( notification.code );
					} else {
						container.remove();
					}
				});
			}

			return container;
		}
	});

	// The main API object is also a collection of all customizer settings.
	api = $.extend( new api.Values(), api );

	/**
	 * Get all customize settings.
	 *
	 * @memberOf wp.customize
	 *
	 * @return {object}
	 */
	api.get = function() {
		var result = {};

		this.each( function( obj, key ) {
			result[ key ] = obj.get();
		});

		return result;
	};

	/**
	 * Utility function namespace
	 *
	 * @namespace wp.customize.utils
	 */
	api.utils = {};

	/**
	 * Parse query string.
	 *
	 * @since 4.7.0
	 * @access public
	 * @memberOf wp.customize.utils
	 *
	 * @param {string} queryString Query string.
	 * @returns {object} Parsed query string.
	 */
	api.utils.parseQueryString = function parseQueryString( queryString ) {
		var queryParams = {};
		_.each( queryString.split( '&' ), function( pair ) {
			var parts, key, value;
			parts = pair.split( '=', 2 );
			if ( ! parts[0] ) {
				return;
			}
			key = decodeURIComponent( parts[0].replace( /\+/g, ' ' ) );
			key = key.replace( / /g, '_' ); // What PHP does.
			if ( _.isUndefined( parts[1] ) ) {
				value = null;
			} else {
				value = decodeURIComponent( parts[1].replace( /\+/g, ' ' ) );
			}
			queryParams[ key ] = value;
		} );
		return queryParams;
	};

	/**
	 * Expose the API publicly on window.wp.customize
	 *
	 * @namespace wp.customize
	 */
	exports.customize = api;
})( wp, jQuery );
;
/*
 * Script run inside a Customizer preview frame.
 */
(function( exports, $ ){
	var api = wp.customize,
		debounce,
		currentHistoryState = {};

	/*
	 * Capture the state that is passed into history.replaceState() and history.pushState()
	 * and also which is returned in the popstate event so that when the changeset_uuid
	 * gets updated when transitioning to a new changeset there the current state will
	 * be supplied in the call to history.replaceState().
	 */
	( function( history ) {
		var injectUrlWithState;

		if ( ! history.replaceState ) {
			return;
		}

		/**
		 * Amend the supplied URL with the customized state.
		 *
		 * @since 4.7.0
		 * @access private
		 *
		 * @param {string} url URL.
		 * @returns {string} URL with customized state.
		 */
		injectUrlWithState = function( url ) {
			var urlParser, oldQueryParams, newQueryParams;
			urlParser = document.createElement( 'a' );
			urlParser.href = url;
			oldQueryParams = api.utils.parseQueryString( location.search.substr( 1 ) );
			newQueryParams = api.utils.parseQueryString( urlParser.search.substr( 1 ) );

			newQueryParams.customize_changeset_uuid = oldQueryParams.customize_changeset_uuid;
			if ( oldQueryParams.customize_autosaved ) {
				newQueryParams.customize_autosaved = 'on';
			}
			if ( oldQueryParams.customize_theme ) {
				newQueryParams.customize_theme = oldQueryParams.customize_theme;
			}
			if ( oldQueryParams.customize_messenger_channel ) {
				newQueryParams.customize_messenger_channel = oldQueryParams.customize_messenger_channel;
			}
			urlParser.search = $.param( newQueryParams );
			return urlParser.href;
		};

		history.replaceState = ( function( nativeReplaceState ) {
			return function historyReplaceState( data, title, url ) {
				currentHistoryState = data;
				return nativeReplaceState.call( history, data, title, 'string' === typeof url && url.length > 0 ? injectUrlWithState( url ) : url );
			};
		} )( history.replaceState );

		history.pushState = ( function( nativePushState ) {
			return function historyPushState( data, title, url ) {
				currentHistoryState = data;
				return nativePushState.call( history, data, title, 'string' === typeof url && url.length > 0 ? injectUrlWithState( url ) : url );
			};
		} )( history.pushState );

		window.addEventListener( 'popstate', function( event ) {
			currentHistoryState = event.state;
		} );

	}( history ) );

	/**
	 * Returns a debounced version of the function.
	 *
	 * @todo Require Underscore.js for this file and retire this.
	 */
	debounce = function( fn, delay, context ) {
		var timeout;
		return function() {
			var args = arguments;

			context = context || this;

			clearTimeout( timeout );
			timeout = setTimeout( function() {
				timeout = null;
				fn.apply( context, args );
			}, delay );
		};
	};

	/**
	 * @memberOf wp.customize
	 * @alias wp.customize.Preview
	 *
	 * @constructor
	 * @augments wp.customize.Messenger
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Preview = api.Messenger.extend(/** @lends wp.customize.Preview.prototype */{
		/**
		 * @param {object} params  - Parameters to configure the messenger.
		 * @param {object} options - Extend any instance parameter or method with this object.
		 */
		initialize: function( params, options ) {
			var preview = this, urlParser = document.createElement( 'a' );

			api.Messenger.prototype.initialize.call( preview, params, options );

			urlParser.href = preview.origin();
			preview.add( 'scheme', urlParser.protocol.replace( /:$/, '' ) );

			preview.body = $( document.body );
			preview.window = $( window );

			if ( api.settings.channel ) {

				// If in an iframe, then intercept the link clicks and form submissions.
				preview.body.on( 'click.preview', 'a', function( event ) {
					preview.handleLinkClick( event );
				} );
				preview.body.on( 'submit.preview', 'form', function( event ) {
					preview.handleFormSubmit( event );
				} );

				preview.window.on( 'scroll.preview', debounce( function() {
					preview.send( 'scroll', preview.window.scrollTop() );
				}, 200 ) );

				preview.bind( 'scroll', function( distance ) {
					preview.window.scrollTop( distance );
				});
			}
		},

		/**
		 * Handle link clicks in preview.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {jQuery.Event} event Event.
		 */
		handleLinkClick: function( event ) {
			var preview = this, link, isInternalJumpLink;
			link = $( event.target ).closest( 'a' );

			// No-op if the anchor is not a link.
			if ( _.isUndefined( link.attr( 'href' ) ) ) {
				return;
			}

			// Allow internal jump links and JS links to behave normally without preventing default.
			isInternalJumpLink = ( '#' === link.attr( 'href' ).substr( 0, 1 ) );
			if ( isInternalJumpLink || ! /^https?:$/.test( link.prop( 'protocol' ) ) ) {
				return;
			}

			// If the link is not previewable, prevent the browser from navigating to it.
			if ( ! api.isLinkPreviewable( link[0] ) ) {
				wp.a11y.speak( api.settings.l10n.linkUnpreviewable );
				event.preventDefault();
				return;
			}

			// Prevent initiating navigating from click and instead rely on sending url message to pane.
			event.preventDefault();

			/*
			 * Note the shift key is checked so shift+click on widgets or
			 * nav menu items can just result on focusing on the corresponding
			 * control instead of also navigating to the URL linked to.
			 */
			if ( event.shiftKey ) {
				return;
			}

			// Note: It's not relevant to send scroll because sending url message will have the same effect.
			preview.send( 'url', link.prop( 'href' ) );
		},

		/**
		 * Handle form submit.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {jQuery.Event} event Event.
		 */
		handleFormSubmit: function( event ) {
			var preview = this, urlParser, form;
			urlParser = document.createElement( 'a' );
			form = $( event.target );
			urlParser.href = form.prop( 'action' );

			// If the link is not previewable, prevent the browser from navigating to it.
			if ( 'GET' !== form.prop( 'method' ).toUpperCase() || ! api.isLinkPreviewable( urlParser ) ) {
				wp.a11y.speak( api.settings.l10n.formUnpreviewable );
				event.preventDefault();
				return;
			}

			/*
			 * If the default wasn't prevented already (in which case the form
			 * submission is already being handled by JS), and if it has a GET
			 * request method, then take the serialized form data and add it as
			 * a query string to the action URL and send this in a url message
			 * to the customizer pane so that it will be loaded. If the form's
			 * action points to a non-previewable URL, the customizer pane's
			 * previewUrl setter will reject it so that the form submission is
			 * a no-op, which is the same behavior as when clicking a link to an
			 * external site in the preview.
			 */
			if ( ! event.isDefaultPrevented() ) {
				if ( urlParser.search.length > 1 ) {
					urlParser.search += '&';
				}
				urlParser.search += form.serialize();
				preview.send( 'url', urlParser.href );
			}

			// Prevent default since navigation should be done via sending url message or via JS submit handler.
			event.preventDefault();
		}
	});

	/**
	 * Inject the changeset UUID into links in the document.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @access private
	 * @returns {void}
	 */
	api.addLinkPreviewing = function addLinkPreviewing() {
		var linkSelectors = 'a[href], area';

		// Inject links into initial document.
		$( document.body ).find( linkSelectors ).each( function() {
			api.prepareLinkPreview( this );
		} );

		// Inject links for new elements added to the page.
		if ( 'undefined' !== typeof MutationObserver ) {
			api.mutationObserver = new MutationObserver( function( mutations ) {
				_.each( mutations, function( mutation ) {
					$( mutation.target ).find( linkSelectors ).each( function() {
						api.prepareLinkPreview( this );
					} );
				} );
			} );
			api.mutationObserver.observe( document.documentElement, {
				childList: true,
				subtree: true
			} );
		} else {

			// If mutation observers aren't available, fallback to just-in-time injection.
			$( document.documentElement ).on( 'click focus mouseover', linkSelectors, function() {
				api.prepareLinkPreview( this );
			} );
		}
	};

	/**
	 * Should the supplied link is previewable.
	 *
	 * @since 4.7.0
	 * @access public
	 *
	 * @param {HTMLAnchorElement|HTMLAreaElement} element Link element.
	 * @param {string} element.search Query string.
	 * @param {string} element.pathname Path.
	 * @param {string} element.host Host.
	 * @param {object} [options]
	 * @param {object} [options.allowAdminAjax=false] Allow admin-ajax.php requests.
	 * @returns {boolean} Is appropriate for changeset link.
	 */
	api.isLinkPreviewable = function isLinkPreviewable( element, options ) {
		var matchesAllowedUrl, parsedAllowedUrl, args, elementHost;

		args = _.extend( {}, { allowAdminAjax: false }, options || {} );

		if ( 'javascript:' === element.protocol ) { // jshint ignore:line
			return true;
		}

		// Only web URLs can be previewed.
		if ( 'https:' !== element.protocol && 'http:' !== element.protocol ) {
			return false;
		}

		elementHost = element.host.replace( /:(80|443)$/, '' );
		parsedAllowedUrl = document.createElement( 'a' );
		matchesAllowedUrl = ! _.isUndefined( _.find( api.settings.url.allowed, function( allowedUrl ) {
			parsedAllowedUrl.href = allowedUrl;
			return parsedAllowedUrl.protocol === element.protocol && parsedAllowedUrl.host.replace( /:(80|443)$/, '' ) === elementHost && 0 === element.pathname.indexOf( parsedAllowedUrl.pathname.replace( /\/$/, '' ) );
		} ) );
		if ( ! matchesAllowedUrl ) {
			return false;
		}

		// Skip wp login and signup pages.
		if ( /\/wp-(login|signup)\.php$/.test( element.pathname ) ) {
			return false;
		}

		// Allow links to admin ajax as faux frontend URLs.
		if ( /\/wp-admin\/admin-ajax\.php$/.test( element.pathname ) ) {
			return args.allowAdminAjax;
		}

		// Disallow links to admin, includes, and content.
		if ( /\/wp-(admin|includes|content)(\/|$)/.test( element.pathname ) ) {
			return false;
		}

		return true;
	};

	/**
	 * Inject the customize_changeset_uuid query param into links on the frontend.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @param {HTMLAnchorElement|HTMLAreaElement} element Link element.
	 * @param {string} element.search Query string.
	 * @param {string} element.host Host.
	 * @param {string} element.protocol Protocol.
	 * @returns {void}
	 */
	api.prepareLinkPreview = function prepareLinkPreview( element ) {
		var queryParams, $element = $( element );

		// Skip links in admin bar.
		if ( $element.closest( '#wpadminbar' ).length ) {
			return;
		}

		// Ignore links with href="#", href="#id", or non-HTTP protocols (e.g. javascript: and mailto:).
		if ( '#' === $element.attr( 'href' ).substr( 0, 1 ) || ! /^https?:$/.test( element.protocol ) ) {
			return;
		}

		// Make sure links in preview use HTTPS if parent frame uses HTTPS.
		if ( api.settings.channel && 'https' === api.preview.scheme.get() && 'http:' === element.protocol && -1 !== api.settings.url.allowedHosts.indexOf( element.host ) ) {
			element.protocol = 'https:';
		}

		// Ignore links with class wp-playlist-caption
		if ( $element.hasClass( 'wp-playlist-caption' ) ) {
			return;
		}

		if ( ! api.isLinkPreviewable( element ) ) {

			// Style link as unpreviewable only if previewing in iframe; if previewing on frontend, links will be allowed to work normally.
			if ( api.settings.channel ) {
				$element.addClass( 'customize-unpreviewable' );
			}
			return;
		}
		$element.removeClass( 'customize-unpreviewable' );

		queryParams = api.utils.parseQueryString( element.search.substring( 1 ) );
		queryParams.customize_changeset_uuid = api.settings.changeset.uuid;
		if ( api.settings.changeset.autosaved ) {
			queryParams.customize_autosaved = 'on';
		}
		if ( ! api.settings.theme.active ) {
			queryParams.customize_theme = api.settings.theme.stylesheet;
		}
		if ( api.settings.channel ) {
			queryParams.customize_messenger_channel = api.settings.channel;
		}
		element.search = $.param( queryParams );

		// Prevent links from breaking out of preview iframe.
		if ( api.settings.channel ) {
			element.target = '_self';
		}
	};

	/**
	 * Inject the changeset UUID into Ajax requests.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @return {void}
	 */
	api.addRequestPreviewing = function addRequestPreviewing() {

		/**
		 * Rewrite Ajax requests to inject customizer state.
		 *
		 * @param {object} options Options.
		 * @param {string} options.type Type.
		 * @param {string} options.url URL.
		 * @param {object} originalOptions Original options.
		 * @param {XMLHttpRequest} xhr XHR.
		 * @returns {void}
		 */
		var prefilterAjax = function( options, originalOptions, xhr ) {
			var urlParser, queryParams, requestMethod, dirtyValues = {};
			urlParser = document.createElement( 'a' );
			urlParser.href = options.url;

			// Abort if the request is not for this site.
			if ( ! api.isLinkPreviewable( urlParser, { allowAdminAjax: true } ) ) {
				return;
			}
			queryParams = api.utils.parseQueryString( urlParser.search.substring( 1 ) );

			// Note that _dirty flag will be cleared with changeset updates.
			api.each( function( setting ) {
				if ( setting._dirty ) {
					dirtyValues[ setting.id ] = setting.get();
				}
			} );

			if ( ! _.isEmpty( dirtyValues ) ) {
				requestMethod = options.type.toUpperCase();

				// Override underlying request method to ensure unsaved changes to changeset can be included (force Backbone.emulateHTTP).
				if ( 'POST' !== requestMethod ) {
					xhr.setRequestHeader( 'X-HTTP-Method-Override', requestMethod );
					queryParams._method = requestMethod;
					options.type = 'POST';
				}

				// Amend the post data with the customized values.
				if ( options.data ) {
					options.data += '&';
				} else {
					options.data = '';
				}
				options.data += $.param( {
					customized: JSON.stringify( dirtyValues )
				} );
			}

			// Include customized state query params in URL.
			queryParams.customize_changeset_uuid = api.settings.changeset.uuid;
			if ( api.settings.changeset.autosaved ) {
				queryParams.customize_autosaved = 'on';
			}
			if ( ! api.settings.theme.active ) {
				queryParams.customize_theme = api.settings.theme.stylesheet;
			}

			// Ensure preview nonce is included with every customized request, to allow post data to be read.
			queryParams.customize_preview_nonce = api.settings.nonce.preview;

			urlParser.search = $.param( queryParams );
			options.url = urlParser.href;
		};

		$.ajaxPrefilter( prefilterAjax );
	};

	/**
	 * Inject changeset UUID into forms, allowing preview to persist through submissions.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @returns {void}
	 */
	api.addFormPreviewing = function addFormPreviewing() {

		// Inject inputs for forms in initial document.
		$( document.body ).find( 'form' ).each( function() {
			api.prepareFormPreview( this );
		} );

		// Inject inputs for new forms added to the page.
		if ( 'undefined' !== typeof MutationObserver ) {
			api.mutationObserver = new MutationObserver( function( mutations ) {
				_.each( mutations, function( mutation ) {
					$( mutation.target ).find( 'form' ).each( function() {
						api.prepareFormPreview( this );
					} );
				} );
			} );
			api.mutationObserver.observe( document.documentElement, {
				childList: true,
				subtree: true
			} );
		}
	};

	/**
	 * Inject changeset into form inputs.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @param {HTMLFormElement} form Form.
	 * @returns {void}
	 */
	api.prepareFormPreview = function prepareFormPreview( form ) {
		var urlParser, stateParams = {};

		if ( ! form.action ) {
			form.action = location.href;
		}

		urlParser = document.createElement( 'a' );
		urlParser.href = form.action;

		// Make sure forms in preview use HTTPS if parent frame uses HTTPS.
		if ( api.settings.channel && 'https' === api.preview.scheme.get() && 'http:' === urlParser.protocol && -1 !== api.settings.url.allowedHosts.indexOf( urlParser.host ) ) {
			urlParser.protocol = 'https:';
			form.action = urlParser.href;
		}

		if ( 'GET' !== form.method.toUpperCase() || ! api.isLinkPreviewable( urlParser ) ) {

			// Style form as unpreviewable only if previewing in iframe; if previewing on frontend, all forms will be allowed to work normally.
			if ( api.settings.channel ) {
				$( form ).addClass( 'customize-unpreviewable' );
			}
			return;
		}
		$( form ).removeClass( 'customize-unpreviewable' );

		stateParams.customize_changeset_uuid = api.settings.changeset.uuid;
		if ( api.settings.changeset.autosaved ) {
			stateParams.customize_autosaved = 'on';
		}
		if ( ! api.settings.theme.active ) {
			stateParams.customize_theme = api.settings.theme.stylesheet;
		}
		if ( api.settings.channel ) {
			stateParams.customize_messenger_channel = api.settings.channel;
		}

		_.each( stateParams, function( value, name ) {
			var input = $( form ).find( 'input[name="' + name + '"]' );
			if ( input.length ) {
				input.val( value );
			} else {
				$( form ).prepend( $( '<input>', {
					type: 'hidden',
					name: name,
					value: value
				} ) );
			}
		} );

		// Prevent links from breaking out of preview iframe.
		if ( api.settings.channel ) {
			form.target = '_self';
		}
	};

	/**
	 * Watch current URL and send keep-alive (heartbeat) messages to the parent.
	 *
	 * Keep the customizer pane notified that the preview is still alive
	 * and that the user hasn't navigated to a non-customized URL.
	 *
	 * @since 4.7.0
	 * @access protected
	 */
	api.keepAliveCurrentUrl = ( function() {
		var previousPathName = location.pathname,
			previousQueryString = location.search.substr( 1 ),
			previousQueryParams = null,
			stateQueryParams = [ 'customize_theme', 'customize_changeset_uuid', 'customize_messenger_channel', 'customize_autosaved' ];

		return function keepAliveCurrentUrl() {
			var urlParser, currentQueryParams;

			// Short-circuit with keep-alive if previous URL is identical (as is normal case).
			if ( previousQueryString === location.search.substr( 1 ) && previousPathName === location.pathname ) {
				api.preview.send( 'keep-alive' );
				return;
			}

			urlParser = document.createElement( 'a' );
			if ( null === previousQueryParams ) {
				urlParser.search = previousQueryString;
				previousQueryParams = api.utils.parseQueryString( previousQueryString );
				_.each( stateQueryParams, function( name ) {
					delete previousQueryParams[ name ];
				} );
			}

			// Determine if current URL minus customized state params and URL hash.
			urlParser.href = location.href;
			currentQueryParams = api.utils.parseQueryString( urlParser.search.substr( 1 ) );
			_.each( stateQueryParams, function( name ) {
				delete currentQueryParams[ name ];
			} );

			if ( previousPathName !== location.pathname || ! _.isEqual( previousQueryParams, currentQueryParams ) ) {
				urlParser.search = $.param( currentQueryParams );
				urlParser.hash = '';
				api.settings.url.self = urlParser.href;
				api.preview.send( 'ready', {
					currentUrl: api.settings.url.self,
					activePanels: api.settings.activePanels,
					activeSections: api.settings.activeSections,
					activeControls: api.settings.activeControls,
					settingValidities: api.settings.settingValidities
				} );
			} else {
				api.preview.send( 'keep-alive' );
			}
			previousQueryParams = currentQueryParams;
			previousQueryString = location.search.substr( 1 );
			previousPathName = location.pathname;
		};
	} )();

	api.settingPreviewHandlers = {

		/**
		 * Preview changes to custom logo.
		 *
		 * @param {number} attachmentId Attachment ID for custom logo.
		 * @returns {void}
		 */
		custom_logo: function( attachmentId ) {
			$( 'body' ).toggleClass( 'wp-custom-logo', !! attachmentId );
		},

		/**
		 * Preview changes to custom css.
		 *
		 * @param {string} value Custom CSS..
		 * @returns {void}
		 */
		custom_css: function( value ) {
			$( '#wp-custom-css' ).text( value );
		},

		/**
		 * Preview changes to any of the background settings.
		 *
		 * @returns {void}
		 */
		background: function() {
			var css = '', settings = {};

			_.each( ['color', 'image', 'preset', 'position_x', 'position_y', 'size', 'repeat', 'attachment'], function( prop ) {
				settings[ prop ] = api( 'background_' + prop );
			} );

			/*
			 * The body will support custom backgrounds if either the color or image are set.
			 *
			 * See get_body_class() in /wp-includes/post-template.php
			 */
			$( document.body ).toggleClass( 'custom-background', !! ( settings.color() || settings.image() ) );

			if ( settings.color() ) {
				css += 'background-color: ' + settings.color() + ';';
			}

			if ( settings.image() ) {
				css += 'background-image: url("' + settings.image() + '");';
				css += 'background-size: ' + settings.size() + ';';
				css += 'background-position: ' + settings.position_x() + ' ' + settings.position_y() + ';';
				css += 'background-repeat: ' + settings.repeat() + ';';
				css += 'background-attachment: ' + settings.attachment() + ';';
			}

			$( '#custom-background-css' ).text( 'body.custom-background { ' + css + ' }' );
		}
	};

	$( function() {
		var bg, setValue, handleUpdatedChangesetUuid;

		api.settings = window._wpCustomizeSettings;
		if ( ! api.settings ) {
			return;
		}

		api.preview = new api.Preview({
			url: window.location.href,
			channel: api.settings.channel
		});

		api.addLinkPreviewing();
		api.addRequestPreviewing();
		api.addFormPreviewing();

		/**
		 * Create/update a setting value.
		 *
		 * @param {string}  id            - Setting ID.
		 * @param {*}       value         - Setting value.
		 * @param {boolean} [createDirty] - Whether to create a setting as dirty. Defaults to false.
		 */
		setValue = function( id, value, createDirty ) {
			var setting = api( id );
			if ( setting ) {
				setting.set( value );
			} else {
				createDirty = createDirty || false;
				setting = api.create( id, value, {
					id: id
				} );

				// Mark dynamically-created settings as dirty so they will get posted.
				if ( createDirty ) {
					setting._dirty = true;
				}
			}
		};

		api.preview.bind( 'settings', function( values ) {
			$.each( values, setValue );
		});

		api.preview.trigger( 'settings', api.settings.values );

		$.each( api.settings._dirty, function( i, id ) {
			var setting = api( id );
			if ( setting ) {
				setting._dirty = true;
			}
		} );

		api.preview.bind( 'setting', function( args ) {
			var createDirty = true;
			setValue.apply( null, args.concat( createDirty ) );
		});

		api.preview.bind( 'sync', function( events ) {

			/*
			 * Delete any settings that already exist locally which haven't been
			 * modified in the controls while the preview was loading. This prevents
			 * situations where the JS value being synced from the pane may differ
			 * from the PHP-sanitized JS value in the preview which causes the
			 * non-sanitized JS value to clobber the PHP-sanitized value. This
			 * is particularly important for selective refresh partials that
			 * have a fallback refresh behavior since infinite refreshing would
			 * result.
			 */
			if ( events.settings && events['settings-modified-while-loading'] ) {
				_.each( _.keys( events.settings ), function( syncedSettingId ) {
					if ( api.has( syncedSettingId ) && ! events['settings-modified-while-loading'][ syncedSettingId ] ) {
						delete events.settings[ syncedSettingId ];
					}
				} );
			}

			$.each( events, function( event, args ) {
				api.preview.trigger( event, args );
			});
			api.preview.send( 'synced' );
		});

		api.preview.bind( 'active', function() {
			api.preview.send( 'nonce', api.settings.nonce );

			api.preview.send( 'documentTitle', document.title );

			// Send scroll in case of loading via non-refresh.
			api.preview.send( 'scroll', $( window ).scrollTop() );
		});

		/**
		 * Handle update to changeset UUID.
		 *
		 * @param {string} uuid - UUID.
		 * @returns {void}
		 */
		handleUpdatedChangesetUuid = function( uuid ) {
			api.settings.changeset.uuid = uuid;

			// Update UUIDs in links and forms.
			$( document.body ).find( 'a[href], area' ).each( function() {
				api.prepareLinkPreview( this );
			} );
			$( document.body ).find( 'form' ).each( function() {
				api.prepareFormPreview( this );
			} );

			/*
			 * Replace the UUID in the URL. Note that the wrapped history.replaceState()
			 * will handle injecting the current api.settings.changeset.uuid into the URL,
			 * so this is merely to trigger that logic.
			 */
			if ( history.replaceState ) {
				history.replaceState( currentHistoryState, '', location.href );
			}
		};

		api.preview.bind( 'changeset-uuid', handleUpdatedChangesetUuid );

		api.preview.bind( 'saved', function( response ) {
			if ( response.next_changeset_uuid ) {
				handleUpdatedChangesetUuid( response.next_changeset_uuid );
			}
			api.trigger( 'saved', response );
		} );

		// Update the URLs to reflect the fact we've started autosaving.
		api.preview.bind( 'autosaving', function() {
			if ( api.settings.changeset.autosaved ) {
				return;
			}

			api.settings.changeset.autosaved = true; // Start deferring to any autosave once changeset is updated.

			$( document.body ).find( 'a[href], area' ).each( function() {
				api.prepareLinkPreview( this );
			} );
			$( document.body ).find( 'form' ).each( function() {
				api.prepareFormPreview( this );
			} );
			if ( history.replaceState ) {
				history.replaceState( currentHistoryState, '', location.href );
			}
		} );

		/*
		 * Clear dirty flag for settings when saved to changeset so that they
		 * won't be needlessly included in selective refresh or ajax requests.
		 */
		api.preview.bind( 'changeset-saved', function( data ) {
			_.each( data.saved_changeset_values, function( value, settingId ) {
				var setting = api( settingId );
				if ( setting && _.isEqual( setting.get(), value ) ) {
					setting._dirty = false;
				}
			} );
		} );

		api.preview.bind( 'nonce-refresh', function( nonce ) {
			$.extend( api.settings.nonce, nonce );
		} );

		/*
		 * Send a message to the parent customize frame with a list of which
		 * containers and controls are active.
		 */
		api.preview.send( 'ready', {
			currentUrl: api.settings.url.self,
			activePanels: api.settings.activePanels,
			activeSections: api.settings.activeSections,
			activeControls: api.settings.activeControls,
			settingValidities: api.settings.settingValidities
		} );

		// Send ready when URL changes via JS.
		setInterval( api.keepAliveCurrentUrl, api.settings.timeouts.keepAliveSend );

		// Display a loading indicator when preview is reloading, and remove on failure.
		api.preview.bind( 'loading-initiated', function () {
			$( 'body' ).addClass( 'wp-customizer-unloading' );
		});
		api.preview.bind( 'loading-failed', function () {
			$( 'body' ).removeClass( 'wp-customizer-unloading' );
		});

		/* Custom Backgrounds */
		bg = $.map( ['color', 'image', 'preset', 'position_x', 'position_y', 'size', 'repeat', 'attachment'], function( prop ) {
			return 'background_' + prop;
		} );

		api.when.apply( api, bg ).done( function() {
			$.each( arguments, function() {
				this.bind( api.settingPreviewHandlers.background );
			});
		});

		/**
		 * Custom Logo
		 *
		 * Toggle the wp-custom-logo body class when a logo is added or removed.
		 *
		 * @since 4.5.0
		 */
		api( 'custom_logo', function ( setting ) {
			api.settingPreviewHandlers.custom_logo.call( setting, setting.get() );
			setting.bind( api.settingPreviewHandlers.custom_logo );
		} );

		api( 'custom_css[' + api.settings.theme.stylesheet + ']', function( setting ) {
			setting.bind( api.settingPreviewHandlers.custom_css );
		} );

		api.trigger( 'preview-ready' );
	});

})( wp, jQuery );
;
window.jQuery( document ).ready( function ( $ ) {
	$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.addClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.addClass( 'vc-woocommerce-add-to-cart-loading' )
			.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
	} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
		if ( 'undefined' === typeof($button) ) {
			$button = $( '.vc-gitem-add-to-cart-loading-btn' );
		}
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.removeClass( 'vc-woocommerce-add-to-cart-loading' )
			.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
	} );
} );
;
;
var mejsL10n = {"language":"en","strings":{"mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen-off":"Turn off Fullscreen","mejs.fullscreen-on":"Go Fullscreen","mejs.download-video":"Download Video","mejs.fullscreen":"Fullscreen","mejs.time-jump-forward":["Jump forward 1 second","Jump forward %1 seconds"],"mejs.loop":"Toggle Loop","mejs.play":"Play","mejs.pause":"Pause","mejs.close":"Close","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.","mejs.time-skip-back":["Skip back 1 second","Skip back %1 seconds"],"mejs.captions-subtitles":"Captions\/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.mute-toggle":"Mute Toggle","mejs.volume-help-text":"Use Up\/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.ad-skip":"Skip ad","mejs.ad-skip-info":["Skip in 1 second","Skip in %1 seconds"],"mejs.source-chooser":"Source Chooser","mejs.stop":"Stop","mejs.speed-rate":"Speed Rate","mejs.live-broadcast":"Live Broadcast","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};;
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

},{}],2:[function(_dereq_,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = _dereq_(1);

var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}

module.exports = doccy;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(_dereq_,module,exports){
(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

},{}],5:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _en = _dereq_(15);

var _general = _dereq_(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i18n = { lang: 'en', en: _en.EN };

i18n.language = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	if (args !== null && args !== undefined && args.length) {

		if (typeof args[0] !== 'string') {
			throw new TypeError('Language code must be a string value');
		}

		if (!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(args[0])) {
			throw new TypeError('Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters');
		}

		i18n.lang = args[0];

		if (i18n[args[0]] === undefined) {
			args[1] = args[1] !== null && args[1] !== undefined && _typeof(args[1]) === 'object' ? args[1] : {};
			i18n[args[0]] = !(0, _general.isObjectEmpty)(args[1]) ? args[1] : _en.EN;
		} else if (args[1] !== null && args[1] !== undefined && _typeof(args[1]) === 'object') {
			i18n[args[0]] = args[1];
		}
	}

	return i18n.lang;
};

i18n.t = function (message) {
	var pluralParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	if (typeof message === 'string' && message.length) {

		var str = void 0,
		    pluralForm = void 0;

		var language = i18n.language();

		var _plural = function _plural(input, number, form) {

			if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' || typeof number !== 'number' || typeof form !== 'number') {
				return input;
			}

			var _pluralForms = function () {
				return [function () {
					return arguments.length <= 1 ? undefined : arguments[1];
				}, function () {
					return (arguments.length <= 0 ? undefined : arguments[0]) === 1 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
				}, function () {
					return (arguments.length <= 0 ? undefined : arguments[0]) === 0 || (arguments.length <= 0 ? undefined : arguments[0]) === 1 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 !== 11) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) !== 0) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1 || (arguments.length <= 0 ? undefined : arguments[0]) === 11) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2 || (arguments.length <= 0 ? undefined : arguments[0]) === 12) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) > 2 && (arguments.length <= 0 ? undefined : arguments[0]) < 20) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else {
						return arguments.length <= 4 ? undefined : arguments[4];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 0 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 < 20) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 !== 11) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? undefined : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 20)) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return [3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 !== 11) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? undefined : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? undefined : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 20)) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) >= 2 && (arguments.length <= 0 ? undefined : arguments[0]) <= 4) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? undefined : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? undefined : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 20)) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 === 1) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 === 2) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 === 3 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 === 4) {
						return arguments.length <= 4 ? undefined : arguments[4];
					} else {
						return arguments.length <= 1 ? undefined : arguments[1];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) > 2 && (arguments.length <= 0 ? undefined : arguments[0]) < 7) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) > 6 && (arguments.length <= 0 ? undefined : arguments[0]) < 11) {
						return arguments.length <= 4 ? undefined : arguments[4];
					} else {
						return arguments.length <= 5 ? undefined : arguments[5];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 0) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 <= 10) {
						return arguments.length <= 4 ? undefined : arguments[4];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 11) {
						return arguments.length <= 5 ? undefined : arguments[5];
					} else {
						return arguments.length <= 6 ? undefined : arguments[6];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 0 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 < 11) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 < 20) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else {
						return arguments.length <= 4 ? undefined : arguments[4];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 2) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					return (arguments.length <= 0 ? undefined : arguments[0]) !== 11 && (arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? undefined : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? undefined : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 20)) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) !== 8 && (arguments.length <= 0 ? undefined : arguments[0]) !== 11) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else {
						return arguments.length <= 4 ? undefined : arguments[4];
					}
				}, function () {
					return (arguments.length <= 0 ? undefined : arguments[0]) === 0 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 3) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else {
						return arguments.length <= 4 ? undefined : arguments[4];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 0) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}];
			}();

			return _pluralForms[form].apply(null, [number].concat(input));
		};

		if (i18n[language] !== undefined) {
			str = i18n[language][message];
			if (pluralParam !== null && typeof pluralParam === 'number') {
				pluralForm = i18n[language]['mejs.plural-form'];
				str = _plural.apply(null, [str, pluralParam, pluralForm]);
			}
		}

		if (!str && i18n.en) {
			str = i18n.en[message];
			if (pluralParam !== null && typeof pluralParam === 'number') {
				pluralForm = i18n.en['mejs.plural-form'];
				str = _plural.apply(null, [str, pluralParam, pluralForm]);
			}
		}

		str = str || message;

		if (pluralParam !== null && typeof pluralParam === 'number') {
			str = str.replace('%1', pluralParam);
		}

		return (0, _general.escapeHTML)(str);
	}

	return message;
};

_mejs2.default.i18n = i18n;

if (typeof mejsL10n !== 'undefined') {
	_mejs2.default.i18n.language(mejsL10n.language, mejsL10n.strings);
}

exports.default = i18n;

},{"15":15,"27":27,"7":7}],6:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _general = _dereq_(27);

var _media2 = _dereq_(28);

var _renderer = _dereq_(8);

var _constants = _dereq_(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaElement = function MediaElement(idOrNode, options, sources) {
	var _this = this;

	_classCallCheck(this, MediaElement);

	var t = this;

	sources = Array.isArray(sources) ? sources : null;

	t.defaults = {
		renderers: [],

		fakeNodeName: 'mediaelementwrapper',

		pluginPath: 'build/',

		shimScriptAccess: 'sameDomain'
	};

	options = Object.assign(t.defaults, options);

	t.mediaElement = _document2.default.createElement(options.fakeNodeName);

	var id = idOrNode,
	    error = false;

	if (typeof idOrNode === 'string') {
		t.mediaElement.originalNode = _document2.default.getElementById(idOrNode);
	} else {
		t.mediaElement.originalNode = idOrNode;
		id = idOrNode.id;
	}

	if (t.mediaElement.originalNode === undefined || t.mediaElement.originalNode === null) {
		return null;
	}

	t.mediaElement.options = options;
	id = id || 'mejs_' + Math.random().toString().slice(2);

	t.mediaElement.originalNode.setAttribute('id', id + '_from_mejs');

	var tagName = t.mediaElement.originalNode.tagName.toLowerCase();
	if (['video', 'audio'].indexOf(tagName) > -1 && !t.mediaElement.originalNode.getAttribute('preload')) {
		t.mediaElement.originalNode.setAttribute('preload', 'none');
	}

	t.mediaElement.originalNode.parentNode.insertBefore(t.mediaElement, t.mediaElement.originalNode);

	t.mediaElement.appendChild(t.mediaElement.originalNode);

	var processURL = function processURL(url, type) {
		if (_window2.default.location.protocol === 'https:' && url.indexOf('http:') === 0 && _constants.IS_IOS && _mejs2.default.html5media.mediaTypes.indexOf(type) > -1) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (this.readyState === 4 && this.status === 200) {
					var _url = _window2.default.URL || _window2.default.webkitURL,
					    blobUrl = _url.createObjectURL(this.response);
					t.mediaElement.originalNode.setAttribute('src', blobUrl);
					return blobUrl;
				}
				return url;
			};
			xhr.open('GET', url);
			xhr.responseType = 'blob';
			xhr.send();
		}

		return url;
	};

	var mediaFiles = void 0;

	if (sources !== null) {
		mediaFiles = sources;
	} else if (t.mediaElement.originalNode !== null) {

		mediaFiles = [];

		switch (t.mediaElement.originalNode.nodeName.toLowerCase()) {
			case 'iframe':
				mediaFiles.push({
					type: '',
					src: t.mediaElement.originalNode.getAttribute('src')
				});
				break;
			case 'audio':
			case 'video':
				var _sources = t.mediaElement.originalNode.children.length,
				    nodeSource = t.mediaElement.originalNode.getAttribute('src');

				if (nodeSource) {
					var node = t.mediaElement.originalNode,
					    type = (0, _media2.formatType)(nodeSource, node.getAttribute('type'));
					mediaFiles.push({
						type: type,
						src: processURL(nodeSource, type)
					});
				}

				for (var i = 0; i < _sources; i++) {
					var n = t.mediaElement.originalNode.children[i];
					if (n.tagName.toLowerCase() === 'source') {
						var src = n.getAttribute('src'),
						    _type = (0, _media2.formatType)(src, n.getAttribute('type'));
						mediaFiles.push({ type: _type, src: processURL(src, _type) });
					}
				}
				break;
		}
	}

	t.mediaElement.id = id;
	t.mediaElement.renderers = {};
	t.mediaElement.events = {};
	t.mediaElement.promises = [];
	t.mediaElement.renderer = null;
	t.mediaElement.rendererName = null;

	t.mediaElement.changeRenderer = function (rendererName, mediaFiles) {

		var t = _this,
		    media = Object.keys(mediaFiles[0]).length > 2 ? mediaFiles[0] : mediaFiles[0].src;

		if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null && t.mediaElement.renderer.name === rendererName) {
			t.mediaElement.renderer.pause();
			if (t.mediaElement.renderer.stop) {
				t.mediaElement.renderer.stop();
			}
			t.mediaElement.renderer.show();
			t.mediaElement.renderer.setSrc(media);
			return true;
		}

		if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null) {
			t.mediaElement.renderer.pause();
			if (t.mediaElement.renderer.stop) {
				t.mediaElement.renderer.stop();
			}
			t.mediaElement.renderer.hide();
		}

		var newRenderer = t.mediaElement.renderers[rendererName],
		    newRendererType = null;

		if (newRenderer !== undefined && newRenderer !== null) {
			newRenderer.show();
			newRenderer.setSrc(media);
			t.mediaElement.renderer = newRenderer;
			t.mediaElement.rendererName = rendererName;
			return true;
		}

		var rendererArray = t.mediaElement.options.renderers.length ? t.mediaElement.options.renderers : _renderer.renderer.order;

		for (var _i = 0, total = rendererArray.length; _i < total; _i++) {
			var index = rendererArray[_i];

			if (index === rendererName) {
				var rendererList = _renderer.renderer.renderers;
				newRendererType = rendererList[index];

				var renderOptions = Object.assign(newRendererType.options, t.mediaElement.options);
				newRenderer = newRendererType.create(t.mediaElement, renderOptions, mediaFiles);
				newRenderer.name = rendererName;

				t.mediaElement.renderers[newRendererType.name] = newRenderer;
				t.mediaElement.renderer = newRenderer;
				t.mediaElement.rendererName = rendererName;
				newRenderer.show();
				return true;
			}
		}

		return false;
	};

	t.mediaElement.setSize = function (width, height) {
		if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null) {
			t.mediaElement.renderer.setSize(width, height);
		}
	};

	t.mediaElement.generateError = function (message, urlList) {
		message = message || '';
		urlList = Array.isArray(urlList) ? urlList : [];
		var event = (0, _general.createEvent)('error', t.mediaElement);
		event.message = message;
		event.urls = urlList;
		t.mediaElement.dispatchEvent(event);
		error = true;
	};

	var props = _mejs2.default.html5media.properties,
	    methods = _mejs2.default.html5media.methods,
	    addProperty = function addProperty(obj, name, onGet, onSet) {
		var oldValue = obj[name];
		var getFn = function getFn() {
			return onGet.apply(obj, [oldValue]);
		},
		    setFn = function setFn(newValue) {
			oldValue = onSet.apply(obj, [newValue]);
			return oldValue;
		};

		Object.defineProperty(obj, name, {
			get: getFn,
			set: setFn
		});
	},
	    assignGettersSetters = function assignGettersSetters(propName) {
		if (propName !== 'src') {

			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1),
			    getFn = function getFn() {
				return t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null && typeof t.mediaElement.renderer['get' + capName] === 'function' ? t.mediaElement.renderer['get' + capName]() : null;
			},
			    setFn = function setFn(value) {
				if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null && typeof t.mediaElement.renderer['set' + capName] === 'function') {
					t.mediaElement.renderer['set' + capName](value);
				}
			};

			addProperty(t.mediaElement, propName, getFn, setFn);
			t.mediaElement['get' + capName] = getFn;
			t.mediaElement['set' + capName] = setFn;
		}
	},
	    getSrc = function getSrc() {
		return t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null ? t.mediaElement.renderer.getSrc() : null;
	},
	    setSrc = function setSrc(value) {
		var mediaFiles = [];

		if (typeof value === 'string') {
			mediaFiles.push({
				src: value,
				type: value ? (0, _media2.getTypeFromFile)(value) : ''
			});
		} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.src !== undefined) {
			var _src = (0, _media2.absolutizeUrl)(value.src),
			    _type2 = value.type,
			    media = Object.assign(value, {
				src: _src,
				type: (_type2 === '' || _type2 === null || _type2 === undefined) && _src ? (0, _media2.getTypeFromFile)(_src) : _type2
			});
			mediaFiles.push(media);
		} else if (Array.isArray(value)) {
			for (var _i2 = 0, total = value.length; _i2 < total; _i2++) {

				var _src2 = (0, _media2.absolutizeUrl)(value[_i2].src),
				    _type3 = value[_i2].type,
				    _media = Object.assign(value[_i2], {
					src: _src2,
					type: (_type3 === '' || _type3 === null || _type3 === undefined) && _src2 ? (0, _media2.getTypeFromFile)(_src2) : _type3
				});

				mediaFiles.push(_media);
			}
		}

		var renderInfo = _renderer.renderer.select(mediaFiles, t.mediaElement.options.renderers.length ? t.mediaElement.options.renderers : []),
		    event = void 0;

		if (!t.mediaElement.paused) {
			t.mediaElement.pause();
			event = (0, _general.createEvent)('pause', t.mediaElement);
			t.mediaElement.dispatchEvent(event);
		}
		t.mediaElement.originalNode.src = mediaFiles[0].src || '';

		if (renderInfo === null && mediaFiles[0].src) {
			t.mediaElement.generateError('No renderer found', mediaFiles);
			return;
		}

		return mediaFiles[0].src ? t.mediaElement.changeRenderer(renderInfo.rendererName, mediaFiles) : null;
	},
	    triggerAction = function triggerAction(methodName, args) {
		try {
			if (methodName === 'play' && t.mediaElement.rendererName === 'native_dash') {
				var response = t.mediaElement.renderer[methodName](args);
				if (response && typeof response.then === 'function') {
					response.catch(function () {
						if (t.mediaElement.paused) {
							setTimeout(function () {
								var tmpResponse = t.mediaElement.renderer.play();
								if (tmpResponse !== undefined) {
									tmpResponse.catch(function () {
										if (!t.mediaElement.renderer.paused) {
											t.mediaElement.renderer.pause();
										}
									});
								}
							}, 150);
						}
					});
				}
			} else {
				t.mediaElement.renderer[methodName](args);
			}
		} catch (e) {
			t.mediaElement.generateError(e, mediaFiles);
		}
	},
	    assignMethods = function assignMethods(methodName) {
		t.mediaElement[methodName] = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null && typeof t.mediaElement.renderer[methodName] === 'function') {
				if (t.mediaElement.promises.length) {
					Promise.all(t.mediaElement.promises).then(function () {
						triggerAction(methodName, args);
					}).catch(function (e) {
						t.mediaElement.generateError(e, mediaFiles);
					});
				} else {
					triggerAction(methodName, args);
				}
			}
			return null;
		};
	};

	addProperty(t.mediaElement, 'src', getSrc, setSrc);
	t.mediaElement.getSrc = getSrc;
	t.mediaElement.setSrc = setSrc;

	for (var _i3 = 0, total = props.length; _i3 < total; _i3++) {
		assignGettersSetters(props[_i3]);
	}

	for (var _i4 = 0, _total = methods.length; _i4 < _total; _i4++) {
		assignMethods(methods[_i4]);
	}

	t.mediaElement.addEventListener = function (eventName, callback) {
		t.mediaElement.events[eventName] = t.mediaElement.events[eventName] || [];

		t.mediaElement.events[eventName].push(callback);
	};
	t.mediaElement.removeEventListener = function (eventName, callback) {
		if (!eventName) {
			t.mediaElement.events = {};
			return true;
		}

		var callbacks = t.mediaElement.events[eventName];

		if (!callbacks) {
			return true;
		}

		if (!callback) {
			t.mediaElement.events[eventName] = [];
			return true;
		}

		for (var _i5 = 0; _i5 < callbacks.length; _i5++) {
			if (callbacks[_i5] === callback) {
				t.mediaElement.events[eventName].splice(_i5, 1);
				return true;
			}
		}
		return false;
	};

	t.mediaElement.dispatchEvent = function (event) {
		var callbacks = t.mediaElement.events[event.type];
		if (callbacks) {
			for (var _i6 = 0; _i6 < callbacks.length; _i6++) {
				callbacks[_i6].apply(null, [event]);
			}
		}
	};

	if (mediaFiles.length) {
		t.mediaElement.src = mediaFiles;
	}

	if (t.mediaElement.promises.length) {
		Promise.all(t.mediaElement.promises).then(function () {
			if (t.mediaElement.options.success) {
				t.mediaElement.options.success(t.mediaElement, t.mediaElement.originalNode);
			}
		}).catch(function () {
			if (error && t.mediaElement.options.error) {
				t.mediaElement.options.error(t.mediaElement, t.mediaElement.originalNode);
			}
		});
	} else {
		if (t.mediaElement.options.success) {
			t.mediaElement.options.success(t.mediaElement, t.mediaElement.originalNode);
		}

		if (error && t.mediaElement.options.error) {
			t.mediaElement.options.error(t.mediaElement, t.mediaElement.originalNode);
		}
	}

	return t.mediaElement;
};

_window2.default.MediaElement = MediaElement;
_mejs2.default.MediaElement = MediaElement;

exports.default = MediaElement;

},{"2":2,"25":25,"27":27,"28":28,"3":3,"7":7,"8":8}],7:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mejs = {};

mejs.version = '4.2.6';

mejs.html5media = {
	properties: ['volume', 'src', 'currentTime', 'muted', 'duration', 'paused', 'ended', 'buffered', 'error', 'networkState', 'readyState', 'seeking', 'seekable', 'currentSrc', 'preload', 'bufferedBytes', 'bufferedTime', 'initialTime', 'startOffsetTime', 'defaultPlaybackRate', 'playbackRate', 'played', 'autoplay', 'loop', 'controls'],
	readOnlyProperties: ['duration', 'paused', 'ended', 'buffered', 'error', 'networkState', 'readyState', 'seeking', 'seekable'],

	methods: ['load', 'play', 'pause', 'canPlayType'],

	events: ['loadstart', 'durationchange', 'loadedmetadata', 'loadeddata', 'progress', 'canplay', 'canplaythrough', 'suspend', 'abort', 'error', 'emptied', 'stalled', 'play', 'playing', 'pause', 'waiting', 'seeking', 'seeked', 'timeupdate', 'ended', 'ratechange', 'volumechange'],

	mediaTypes: ['audio/mp3', 'audio/ogg', 'audio/oga', 'audio/wav', 'audio/x-wav', 'audio/wave', 'audio/x-pn-wav', 'audio/mpeg', 'audio/mp4', 'video/mp4', 'video/webm', 'video/ogg', 'video/ogv']
};

_window2.default.mejs = mejs;

exports.default = mejs;

},{"3":3}],8:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.renderer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
	function Renderer() {
		_classCallCheck(this, Renderer);

		this.renderers = {};
		this.order = [];
	}

	_createClass(Renderer, [{
		key: 'add',
		value: function add(renderer) {
			if (renderer.name === undefined) {
				throw new TypeError('renderer must contain at least `name` property');
			}

			this.renderers[renderer.name] = renderer;
			this.order.push(renderer.name);
		}
	}, {
		key: 'select',
		value: function select(mediaFiles) {
			var renderers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var renderersLength = renderers.length;

			renderers = renderers.length ? renderers : this.order;

			if (!renderersLength) {
				var rendererIndicator = [/^(html5|native)/i, /^flash/i, /iframe$/i],
				    rendererRanking = function rendererRanking(renderer) {
					for (var i = 0, total = rendererIndicator.length; i < total; i++) {
						if (rendererIndicator[i].test(renderer)) {
							return i;
						}
					}
					return rendererIndicator.length;
				};

				renderers.sort(function (a, b) {
					return rendererRanking(a) - rendererRanking(b);
				});
			}

			for (var i = 0, total = renderers.length; i < total; i++) {
				var key = renderers[i],
				    _renderer = this.renderers[key];

				if (_renderer !== null && _renderer !== undefined) {
					for (var j = 0, jl = mediaFiles.length; j < jl; j++) {
						if (typeof _renderer.canPlayType === 'function' && typeof mediaFiles[j].type === 'string' && _renderer.canPlayType(mediaFiles[j].type)) {
							return {
								rendererName: _renderer.name,
								src: mediaFiles[j].src
							};
						}
					}
				}
			}

			return null;
		}
	}, {
		key: 'order',
		set: function set(order) {
			if (!Array.isArray(order)) {
				throw new TypeError('order must be an array of strings.');
			}

			this._order = order;
		},
		get: function get() {
			return this._order;
		}
	}, {
		key: 'renderers',
		set: function set(renderers) {
			if (renderers !== null && (typeof renderers === 'undefined' ? 'undefined' : _typeof(renderers)) !== 'object') {
				throw new TypeError('renderers must be an array of objects.');
			}

			this._renderers = renderers;
		},
		get: function get() {
			return this._renderers;
		}
	}]);

	return Renderer;
}();

var renderer = exports.renderer = new Renderer();

_mejs2.default.Renderers = renderer;

},{"7":7}],9:[function(_dereq_,module,exports){
'use strict';

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _i18n = _dereq_(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _player = _dereq_(16);

var _player2 = _interopRequireDefault(_player);

var _constants = _dereq_(25);

var Features = _interopRequireWildcard(_constants);

var _general = _dereq_(27);

var _dom = _dereq_(26);

var _media = _dereq_(28);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_player.config, {
	usePluginFullScreen: true,

	fullscreenText: null,

	useFakeFullscreen: false
});

Object.assign(_player2.default.prototype, {
	isFullScreen: false,

	isNativeFullScreen: false,

	isInIframe: false,

	isPluginClickThroughCreated: false,

	fullscreenMode: '',

	containerSizeTimeout: null,

	buildfullscreen: function buildfullscreen(player) {
		if (!player.isVideo) {
			return;
		}

		player.isInIframe = _window2.default.location !== _window2.default.parent.location;

		player.detectFullscreenMode();

		var t = this,
		    fullscreenTitle = (0, _general.isString)(t.options.fullscreenText) ? t.options.fullscreenText : _i18n2.default.t('mejs.fullscreen'),
		    fullscreenBtn = _document2.default.createElement('div');

		fullscreenBtn.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'fullscreen-button';
		fullscreenBtn.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + fullscreenTitle + '" aria-label="' + fullscreenTitle + '" tabindex="0"></button>';
		t.addControlElement(fullscreenBtn, 'fullscreen');

		fullscreenBtn.addEventListener('click', function () {
			var isFullScreen = Features.HAS_TRUE_NATIVE_FULLSCREEN && Features.IS_FULLSCREEN || player.isFullScreen;

			if (isFullScreen) {
				player.exitFullScreen();
			} else {
				player.enterFullScreen();
			}
		});

		player.fullscreenBtn = fullscreenBtn;

		t.options.keyActions.push({
			keys: [70],
			action: function action(player, media, key, event) {
				if (!event.ctrlKey) {
					if (typeof player.enterFullScreen !== 'undefined') {
						if (player.isFullScreen) {
							player.exitFullScreen();
						} else {
							player.enterFullScreen();
						}
					}
				}
			}
		});

		t.exitFullscreenCallback = function (e) {
			var key = e.which || e.keyCode || 0;
			if (key === 27 && (Features.HAS_TRUE_NATIVE_FULLSCREEN && Features.IS_FULLSCREEN || t.isFullScreen)) {
				player.exitFullScreen();
			}
		};

		t.globalBind('keydown', t.exitFullscreenCallback);

		t.normalHeight = 0;
		t.normalWidth = 0;

		if (Features.HAS_TRUE_NATIVE_FULLSCREEN) {
			var fullscreenChanged = function fullscreenChanged() {
				if (player.isFullScreen) {
					if (Features.isFullScreen()) {
						player.isNativeFullScreen = true;

						player.setControlsSize();
					} else {
						player.isNativeFullScreen = false;

						player.exitFullScreen();
					}
				}
			};

			player.globalBind(Features.FULLSCREEN_EVENT_NAME, fullscreenChanged);
		}
	},
	cleanfullscreen: function cleanfullscreen(player) {
		player.exitFullScreen();
		player.globalUnbind('keydown', player.exitFullscreenCallback);
	},
	detectFullscreenMode: function detectFullscreenMode() {
		var t = this,
		    isNative = t.media.rendererName !== null && /(native|html5)/i.test(t.media.rendererName);

		var mode = '';

		if (Features.HAS_TRUE_NATIVE_FULLSCREEN && isNative) {
			mode = 'native-native';
		} else if (Features.HAS_TRUE_NATIVE_FULLSCREEN && !isNative) {
			mode = 'plugin-native';
		} else if (t.usePluginFullScreen && Features.SUPPORT_POINTER_EVENTS) {
			mode = 'plugin-click';
		}

		t.fullscreenMode = mode;
		return mode;
	},
	enterFullScreen: function enterFullScreen() {
		var t = this,
		    isNative = t.media.rendererName !== null && /(html5|native)/i.test(t.media.rendererName),
		    containerStyles = getComputedStyle(t.getElement(t.container));

		if (t.options.useFakeFullscreen === false && Features.IS_IOS && Features.HAS_IOS_FULLSCREEN && typeof t.media.originalNode.webkitEnterFullscreen === 'function' && t.media.originalNode.canPlayType((0, _media.getTypeFromFile)(t.media.getSrc()))) {
			t.media.originalNode.webkitEnterFullscreen();
			return;
		}

		(0, _dom.addClass)(_document2.default.documentElement, t.options.classPrefix + 'fullscreen');
		(0, _dom.addClass)(t.getElement(t.container), t.options.classPrefix + 'container-fullscreen');

		t.normalHeight = parseFloat(containerStyles.height);
		t.normalWidth = parseFloat(containerStyles.width);

		if (t.fullscreenMode === 'native-native' || t.fullscreenMode === 'plugin-native') {
			Features.requestFullScreen(t.getElement(t.container));

			if (t.isInIframe) {
				setTimeout(function checkFullscreen() {

					if (t.isNativeFullScreen) {
						var percentErrorMargin = 0.002,
						    windowWidth = _window2.default.innerWidth || _document2.default.documentElement.clientWidth || _document2.default.body.clientWidth,
						    screenWidth = screen.width,
						    absDiff = Math.abs(screenWidth - windowWidth),
						    marginError = screenWidth * percentErrorMargin;

						if (absDiff > marginError) {
							t.exitFullScreen();
						} else {
							setTimeout(checkFullscreen, 500);
						}
					}
				}, 1000);
			}
		}

		t.getElement(t.container).style.width = '100%';
		t.getElement(t.container).style.height = '100%';

		t.containerSizeTimeout = setTimeout(function () {
			t.getElement(t.container).style.width = '100%';
			t.getElement(t.container).style.height = '100%';
			t.setControlsSize();
		}, 500);

		if (isNative) {
			t.node.style.width = '100%';
			t.node.style.height = '100%';
		} else {
			var elements = t.getElement(t.container).querySelectorAll('embed, object, video'),
			    _total = elements.length;
			for (var i = 0; i < _total; i++) {
				elements[i].style.width = '100%';
				elements[i].style.height = '100%';
			}
		}

		if (t.options.setDimensions && typeof t.media.setSize === 'function') {
			t.media.setSize(screen.width, screen.height);
		}

		var layers = t.getElement(t.layers).children,
		    total = layers.length;
		for (var _i = 0; _i < total; _i++) {
			layers[_i].style.width = '100%';
			layers[_i].style.height = '100%';
		}

		if (t.fullscreenBtn) {
			(0, _dom.removeClass)(t.fullscreenBtn, t.options.classPrefix + 'fullscreen');
			(0, _dom.addClass)(t.fullscreenBtn, t.options.classPrefix + 'unfullscreen');
		}

		t.setControlsSize();
		t.isFullScreen = true;

		var zoomFactor = Math.min(screen.width / t.width, screen.height / t.height),
		    captionText = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'captions-text');
		if (captionText) {
			captionText.style.fontSize = zoomFactor * 100 + '%';
			captionText.style.lineHeight = 'normal';
			t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'captions-position').style.bottom = '45px';
		}
		var event = (0, _general.createEvent)('enteredfullscreen', t.getElement(t.container));
		t.getElement(t.container).dispatchEvent(event);
	},
	exitFullScreen: function exitFullScreen() {
		var t = this,
		    isNative = t.media.rendererName !== null && /(native|html5)/i.test(t.media.rendererName);

		clearTimeout(t.containerSizeTimeout);

		if (Features.HAS_TRUE_NATIVE_FULLSCREEN && (Features.IS_FULLSCREEN || t.isFullScreen)) {
			Features.cancelFullScreen();
		}

		(0, _dom.removeClass)(_document2.default.documentElement, t.options.classPrefix + 'fullscreen');
		(0, _dom.removeClass)(t.getElement(t.container), t.options.classPrefix + 'container-fullscreen');

		if (t.options.setDimensions) {
			t.getElement(t.container).style.width = t.normalWidth + 'px';
			t.getElement(t.container).style.height = t.normalHeight + 'px';

			if (isNative) {
				t.node.style.width = t.normalWidth + 'px';
				t.node.style.height = t.normalHeight + 'px';
			} else {
				var elements = t.getElement(t.container).querySelectorAll('embed, object, video'),
				    _total2 = elements.length;
				for (var i = 0; i < _total2; i++) {
					elements[i].style.width = t.normalWidth + 'px';
					elements[i].style.height = t.normalHeight + 'px';
				}
			}

			if (typeof t.media.setSize === 'function') {
				t.media.setSize(t.normalWidth, t.normalHeight);
			}

			var layers = t.getElement(t.layers).children,
			    total = layers.length;
			for (var _i2 = 0; _i2 < total; _i2++) {
				layers[_i2].style.width = t.normalWidth + 'px';
				layers[_i2].style.height = t.normalHeight + 'px';
			}
		}

		if (t.fullscreenBtn) {
			(0, _dom.removeClass)(t.fullscreenBtn, t.options.classPrefix + 'unfullscreen');
			(0, _dom.addClass)(t.fullscreenBtn, t.options.classPrefix + 'fullscreen');
		}

		t.setControlsSize();
		t.isFullScreen = false;

		var captionText = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'captions-text');
		if (captionText) {
			captionText.style.fontSize = '';
			captionText.style.lineHeight = '';
			t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'captions-position').style.bottom = '';
		}
		var event = (0, _general.createEvent)('exitedfullscreen', t.getElement(t.container));
		t.getElement(t.container).dispatchEvent(event);
	}
});

},{"16":16,"2":2,"25":25,"26":26,"27":27,"28":28,"3":3,"5":5}],10:[function(_dereq_,module,exports){
'use strict';

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _player = _dereq_(16);

var _player2 = _interopRequireDefault(_player);

var _i18n = _dereq_(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _general = _dereq_(27);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_player.config, {
	playText: null,

	pauseText: null
});

Object.assign(_player2.default.prototype, {
	buildplaypause: function buildplaypause(player, controls, layers, media) {
		var t = this,
		    op = t.options,
		    playTitle = (0, _general.isString)(op.playText) ? op.playText : _i18n2.default.t('mejs.play'),
		    pauseTitle = (0, _general.isString)(op.pauseText) ? op.pauseText : _i18n2.default.t('mejs.pause'),
		    play = _document2.default.createElement('div');

		play.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'playpause-button ' + t.options.classPrefix + 'play';
		play.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + playTitle + '" aria-label="' + pauseTitle + '" tabindex="0"></button>';
		play.addEventListener('click', function () {
			if (t.paused) {
				t.play();
			} else {
				t.pause();
			}
		});

		var playBtn = play.querySelector('button');
		t.addControlElement(play, 'playpause');

		function togglePlayPause(which) {
			if ('play' === which) {
				(0, _dom.removeClass)(play, t.options.classPrefix + 'play');
				(0, _dom.removeClass)(play, t.options.classPrefix + 'replay');
				(0, _dom.addClass)(play, t.options.classPrefix + 'pause');
				playBtn.setAttribute('title', pauseTitle);
				playBtn.setAttribute('aria-label', pauseTitle);
			} else {

				(0, _dom.removeClass)(play, t.options.classPrefix + 'pause');
				(0, _dom.removeClass)(play, t.options.classPrefix + 'replay');
				(0, _dom.addClass)(play, t.options.classPrefix + 'play');
				playBtn.setAttribute('title', playTitle);
				playBtn.setAttribute('aria-label', playTitle);
			}
		}

		togglePlayPause('pse');

		media.addEventListener('loadedmetadata', function () {
			if (media.rendererName.indexOf('flash') === -1) {
				togglePlayPause('pse');
			}
		});
		media.addEventListener('play', function () {
			togglePlayPause('play');
		});
		media.addEventListener('playing', function () {
			togglePlayPause('play');
		});
		media.addEventListener('pause', function () {
			togglePlayPause('pse');
		});
		media.addEventListener('ended', function () {
			if (!player.options.loop) {
				(0, _dom.removeClass)(play, t.options.classPrefix + 'pause');
				(0, _dom.removeClass)(play, t.options.classPrefix + 'play');
				(0, _dom.addClass)(play, t.options.classPrefix + 'replay');
				playBtn.setAttribute('title', playTitle);
				playBtn.setAttribute('aria-label', playTitle);
			}
		});
	}
});

},{"16":16,"2":2,"26":26,"27":27,"5":5}],11:[function(_dereq_,module,exports){
'use strict';

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _player = _dereq_(16);

var _player2 = _interopRequireDefault(_player);

var _i18n = _dereq_(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _constants = _dereq_(25);

var _time = _dereq_(30);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_player.config, {
	enableProgressTooltip: true,

	useSmoothHover: true,

	forceLive: false
});

Object.assign(_player2.default.prototype, {
	buildprogress: function buildprogress(player, controls, layers, media) {

		var lastKeyPressTime = 0,
		    mouseIsDown = false,
		    startedPaused = false;

		var t = this,
		    autoRewindInitial = player.options.autoRewind,
		    tooltip = player.options.enableProgressTooltip ? '<span class="' + t.options.classPrefix + 'time-float">' + ('<span class="' + t.options.classPrefix + 'time-float-current">00:00</span>') + ('<span class="' + t.options.classPrefix + 'time-float-corner"></span>') + '</span>' : '',
		    rail = _document2.default.createElement('div');

		rail.className = t.options.classPrefix + 'time-rail';
		rail.innerHTML = '<span class="' + t.options.classPrefix + 'time-total ' + t.options.classPrefix + 'time-slider">' + ('<span class="' + t.options.classPrefix + 'time-buffering"></span>') + ('<span class="' + t.options.classPrefix + 'time-loaded"></span>') + ('<span class="' + t.options.classPrefix + 'time-current"></span>') + ('<span class="' + t.options.classPrefix + 'time-hovered no-hover"></span>') + ('<span class="' + t.options.classPrefix + 'time-handle"><span class="' + t.options.classPrefix + 'time-handle-content"></span></span>') + ('' + tooltip) + '</span>';

		t.addControlElement(rail, 'progress');

		t.options.keyActions.push({
			keys: [37, 227],
			action: function action(player) {
				if (!isNaN(player.duration) && player.duration > 0) {
					if (player.isVideo) {
						player.showControls();
						player.startControlsTimer();
					}

					player.getElement(player.container).querySelector('.' + _player.config.classPrefix + 'time-total').focus();

					var newTime = Math.max(player.currentTime - player.options.defaultSeekBackwardInterval(player), 0);
					player.setCurrentTime(newTime);
				}
			}
		}, {
			keys: [39, 228],
			action: function action(player) {

				if (!isNaN(player.duration) && player.duration > 0) {
					if (player.isVideo) {
						player.showControls();
						player.startControlsTimer();
					}

					player.getElement(player.container).querySelector('.' + _player.config.classPrefix + 'time-total').focus();

					var newTime = Math.min(player.currentTime + player.options.defaultSeekForwardInterval(player), player.duration);
					player.setCurrentTime(newTime);
				}
			}
		});

		t.rail = controls.querySelector('.' + t.options.classPrefix + 'time-rail');
		t.total = controls.querySelector('.' + t.options.classPrefix + 'time-total');
		t.loaded = controls.querySelector('.' + t.options.classPrefix + 'time-loaded');
		t.current = controls.querySelector('.' + t.options.classPrefix + 'time-current');
		t.handle = controls.querySelector('.' + t.options.classPrefix + 'time-handle');
		t.timefloat = controls.querySelector('.' + t.options.classPrefix + 'time-float');
		t.timefloatcurrent = controls.querySelector('.' + t.options.classPrefix + 'time-float-current');
		t.slider = controls.querySelector('.' + t.options.classPrefix + 'time-slider');
		t.hovered = controls.querySelector('.' + t.options.classPrefix + 'time-hovered');
		t.buffer = controls.querySelector('.' + t.options.classPrefix + 'time-buffering');
		t.newTime = 0;
		t.forcedHandlePause = false;
		t.setTransformStyle = function (element, value) {
			element.style.transform = value;
			element.style.webkitTransform = value;
			element.style.MozTransform = value;
			element.style.msTransform = value;
			element.style.OTransform = value;
		};

		t.buffer.style.display = 'none';

		var handleMouseMove = function handleMouseMove(e) {
			var totalStyles = getComputedStyle(t.total),
			    offsetStyles = (0, _dom.offset)(t.total),
			    width = t.total.offsetWidth,
			    transform = function () {
				if (totalStyles.webkitTransform !== undefined) {
					return 'webkitTransform';
				} else if (totalStyles.mozTransform !== undefined) {
					return 'mozTransform ';
				} else if (totalStyles.oTransform !== undefined) {
					return 'oTransform';
				} else if (totalStyles.msTransform !== undefined) {
					return 'msTransform';
				} else {
					return 'transform';
				}
			}(),
			    cssMatrix = function () {
				if ('WebKitCSSMatrix' in window) {
					return 'WebKitCSSMatrix';
				} else if ('MSCSSMatrix' in window) {
					return 'MSCSSMatrix';
				} else if ('CSSMatrix' in window) {
					return 'CSSMatrix';
				}
			}();

			var percentage = 0,
			    leftPos = 0,
			    pos = 0,
			    x = void 0;

			if (e.originalEvent && e.originalEvent.changedTouches) {
				x = e.originalEvent.changedTouches[0].pageX;
			} else if (e.changedTouches) {
				x = e.changedTouches[0].pageX;
			} else {
				x = e.pageX;
			}

			if (t.getDuration()) {
				if (x < offsetStyles.left) {
					x = offsetStyles.left;
				} else if (x > width + offsetStyles.left) {
					x = width + offsetStyles.left;
				}

				pos = x - offsetStyles.left;
				percentage = pos / width;
				t.newTime = percentage <= 0.02 ? 0 : percentage * t.getDuration();

				if (mouseIsDown && t.getCurrentTime() !== null && t.newTime.toFixed(4) !== t.getCurrentTime().toFixed(4)) {
					t.setCurrentRailHandle(t.newTime);
					t.updateCurrent(t.newTime);
				}

				if (!_constants.IS_IOS && !_constants.IS_ANDROID) {
					if (pos < 0) {
						pos = 0;
					}
					if (t.options.useSmoothHover && cssMatrix !== null && typeof window[cssMatrix] !== 'undefined') {
						var matrix = new window[cssMatrix](getComputedStyle(t.handle)[transform]),
						    handleLocation = matrix.m41,
						    hoverScaleX = pos / parseFloat(getComputedStyle(t.total).width) - handleLocation / parseFloat(getComputedStyle(t.total).width);

						t.hovered.style.left = handleLocation + 'px';
						t.setTransformStyle(t.hovered, 'scaleX(' + hoverScaleX + ')');
						t.hovered.setAttribute('pos', pos);

						if (hoverScaleX >= 0) {
							(0, _dom.removeClass)(t.hovered, 'negative');
						} else {
							(0, _dom.addClass)(t.hovered, 'negative');
						}
					}

					if (t.timefloat) {
						var half = t.timefloat.offsetWidth / 2,
						    offsetContainer = mejs.Utils.offset(t.getElement(t.container)),
						    tooltipStyles = getComputedStyle(t.timefloat);

						if (x - offsetContainer.left < t.timefloat.offsetWidth) {
							leftPos = half;
						} else if (x - offsetContainer.left >= t.getElement(t.container).offsetWidth - half) {
							leftPos = t.total.offsetWidth - half;
						} else {
							leftPos = pos;
						}

						if ((0, _dom.hasClass)(t.getElement(t.container), t.options.classPrefix + 'long-video')) {
							leftPos += parseFloat(tooltipStyles.marginLeft) / 2 + t.timefloat.offsetWidth / 2;
						}

						t.timefloat.style.left = leftPos + 'px';
						t.timefloatcurrent.innerHTML = (0, _time.secondsToTimeCode)(t.newTime, player.options.alwaysShowHours, player.options.showTimecodeFrameCount, player.options.framesPerSecond, player.options.secondsDecimalLength, player.options.timeFormat);
						t.timefloat.style.display = 'block';
					}
				}
			} else if (!_constants.IS_IOS && !_constants.IS_ANDROID && t.timefloat) {
				leftPos = t.timefloat.offsetWidth + width >= t.getElement(t.container).offsetWidth ? t.timefloat.offsetWidth / 2 : 0;
				t.timefloat.style.left = leftPos + 'px';
				t.timefloat.style.left = leftPos + 'px';
				t.timefloat.style.display = 'block';
			}
		},
		    updateSlider = function updateSlider() {
			var seconds = t.getCurrentTime(),
			    timeSliderText = _i18n2.default.t('mejs.time-slider'),
			    time = (0, _time.secondsToTimeCode)(seconds, player.options.alwaysShowHours, player.options.showTimecodeFrameCount, player.options.framesPerSecond, player.options.secondsDecimalLength, player.options.timeFormat),
			    duration = t.getDuration();

			t.slider.setAttribute('role', 'slider');
			t.slider.tabIndex = 0;

			if (media.paused) {
				t.slider.setAttribute('aria-label', timeSliderText);
				t.slider.setAttribute('aria-valuemin', 0);
				t.slider.setAttribute('aria-valuemax', duration);
				t.slider.setAttribute('aria-valuenow', seconds);
				t.slider.setAttribute('aria-valuetext', time);
			} else {
				t.slider.removeAttribute('aria-label');
				t.slider.removeAttribute('aria-valuemin');
				t.slider.removeAttribute('aria-valuemax');
				t.slider.removeAttribute('aria-valuenow');
				t.slider.removeAttribute('aria-valuetext');
			}
		},
		    restartPlayer = function restartPlayer() {
			if (new Date() - lastKeyPressTime >= 1000) {
				t.play();
			}
		},
		    handleMouseup = function handleMouseup() {
			if (mouseIsDown && t.getCurrentTime() !== null && t.newTime.toFixed(4) !== t.getCurrentTime().toFixed(4)) {
				t.setCurrentTime(t.newTime);
				t.setCurrentRail();
				t.updateCurrent(t.newTime);
			}
			if (t.forcedHandlePause) {
				t.slider.focus();
				t.play();
			}
			t.forcedHandlePause = false;
		};

		t.slider.addEventListener('focus', function () {
			player.options.autoRewind = false;
		});
		t.slider.addEventListener('blur', function () {
			player.options.autoRewind = autoRewindInitial;
		});
		t.slider.addEventListener('keydown', function (e) {
			if (new Date() - lastKeyPressTime >= 1000) {
				startedPaused = t.paused;
			}

			if (t.options.keyActions.length) {

				var keyCode = e.which || e.keyCode || 0,
				    duration = t.getDuration(),
				    seekForward = player.options.defaultSeekForwardInterval(media),
				    seekBackward = player.options.defaultSeekBackwardInterval(media);

				var seekTime = t.getCurrentTime();
				var volume = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'volume-slider');

				if (keyCode === 38 || keyCode === 40) {
					if (volume) {
						volume.style.display = 'block';
					}
					if (t.isVideo) {
						t.showControls();
						t.startControlsTimer();
					}

					var newVolume = keyCode === 38 ? Math.min(t.volume + 0.1, 1) : Math.max(t.volume - 0.1, 0),
					    mutePlayer = newVolume <= 0;
					t.setVolume(newVolume);
					t.setMuted(mutePlayer);
					return;
				} else {
					if (volume) {
						volume.style.display = 'none';
					}
				}

				switch (keyCode) {
					case 37:
						if (t.getDuration() !== Infinity) {
							seekTime -= seekBackward;
						}
						break;
					case 39:
						if (t.getDuration() !== Infinity) {
							seekTime += seekForward;
						}
						break;
					case 36:
						seekTime = 0;
						break;
					case 35:
						seekTime = duration;
						break;
					case 13:
					case 32:
						if (_constants.IS_FIREFOX) {
							if (t.paused) {
								t.play();
							} else {
								t.pause();
							}
						}
						return;
					default:
						return;
				}

				seekTime = seekTime < 0 ? 0 : seekTime >= duration ? duration : Math.floor(seekTime);
				lastKeyPressTime = new Date();
				if (!startedPaused) {
					player.pause();
				}

				if (seekTime < t.getDuration() && !startedPaused) {
					setTimeout(restartPlayer, 1100);
				}

				t.setCurrentTime(seekTime);
				player.showControls();

				e.preventDefault();
				e.stopPropagation();
			}
		});

		var events = ['mousedown', 'touchstart'];

		t.slider.addEventListener('dragstart', function () {
			return false;
		});

		for (var i = 0, total = events.length; i < total; i++) {
			t.slider.addEventListener(events[i], function (e) {
				t.forcedHandlePause = false;
				if (t.getDuration() !== Infinity) {
					if (e.which === 1 || e.which === 0) {
						if (!t.paused) {
							t.pause();
							t.forcedHandlePause = true;
						}

						mouseIsDown = true;
						handleMouseMove(e);
						var endEvents = ['mouseup', 'touchend'];

						for (var j = 0, totalEvents = endEvents.length; j < totalEvents; j++) {
							t.getElement(t.container).addEventListener(endEvents[j], function (event) {
								var target = event.target;
								if (target === t.slider || target.closest('.' + t.options.classPrefix + 'time-slider')) {
									handleMouseMove(event);
								}
							});
						}
						t.globalBind('mouseup.dur touchend.dur', function () {
							handleMouseup();
							mouseIsDown = false;
							if (t.timefloat) {
								t.timefloat.style.display = 'none';
							}
						});
					}
				}
			}, _constants.SUPPORT_PASSIVE_EVENT && events[i] === 'touchstart' ? { passive: true } : false);
		}
		t.slider.addEventListener('mouseenter', function (e) {
			if (e.target === t.slider && t.getDuration() !== Infinity) {
				t.getElement(t.container).addEventListener('mousemove', function (event) {
					var target = event.target;
					if (target === t.slider || target.closest('.' + t.options.classPrefix + 'time-slider')) {
						handleMouseMove(event);
					}
				});
				if (t.timefloat && !_constants.IS_IOS && !_constants.IS_ANDROID) {
					t.timefloat.style.display = 'block';
				}
				if (t.hovered && !_constants.IS_IOS && !_constants.IS_ANDROID && t.options.useSmoothHover) {
					(0, _dom.removeClass)(t.hovered, 'no-hover');
				}
			}
		});
		t.slider.addEventListener('mouseleave', function () {
			if (t.getDuration() !== Infinity) {
				if (!mouseIsDown) {
					if (t.timefloat) {
						t.timefloat.style.display = 'none';
					}
					if (t.hovered && t.options.useSmoothHover) {
						(0, _dom.addClass)(t.hovered, 'no-hover');
					}
				}
			}
		});

		t.broadcastCallback = function (e) {
			var broadcast = controls.querySelector('.' + t.options.classPrefix + 'broadcast');
			if (!t.options.forceLive && t.getDuration() !== Infinity) {
				if (broadcast) {
					t.slider.style.display = '';
					broadcast.remove();
				}

				player.setProgressRail(e);
				if (!t.forcedHandlePause) {
					player.setCurrentRail(e);
				}
				updateSlider();
			} else if (!broadcast || t.options.forceLive) {
				var label = _document2.default.createElement('span');
				label.className = t.options.classPrefix + 'broadcast';
				label.innerText = _i18n2.default.t('mejs.live-broadcast');
				t.slider.style.display = 'none';
				t.rail.appendChild(label);
			}
		};

		media.addEventListener('progress', t.broadcastCallback);
		media.addEventListener('timeupdate', t.broadcastCallback);
		media.addEventListener('play', function () {
			t.buffer.style.display = 'none';
		});
		media.addEventListener('playing', function () {
			t.buffer.style.display = 'none';
		});
		media.addEventListener('seeking', function () {
			t.buffer.style.display = '';
		});
		media.addEventListener('seeked', function () {
			t.buffer.style.display = 'none';
		});
		media.addEventListener('pause', function () {
			t.buffer.style.display = 'none';
		});
		media.addEventListener('waiting', function () {
			t.buffer.style.display = '';
		});
		media.addEventListener('loadeddata', function () {
			t.buffer.style.display = '';
		});
		media.addEventListener('canplay', function () {
			t.buffer.style.display = 'none';
		});
		media.addEventListener('error', function () {
			t.buffer.style.display = 'none';
		});

		t.getElement(t.container).addEventListener('controlsresize', function (e) {
			if (t.getDuration() !== Infinity) {
				player.setProgressRail(e);
				if (!t.forcedHandlePause) {
					player.setCurrentRail(e);
				}
			}
		});
	},
	cleanprogress: function cleanprogress(player, controls, layers, media) {
		media.removeEventListener('progress', player.broadcastCallback);
		media.removeEventListener('timeupdate', player.broadcastCallback);
		if (player.rail) {
			player.rail.remove();
		}
	},
	setProgressRail: function setProgressRail(e) {
		var t = this,
		    target = e !== undefined ? e.detail.target || e.target : t.media;

		var percent = null;

		if (target && target.buffered && target.buffered.length > 0 && target.buffered.end && t.getDuration()) {
			percent = target.buffered.end(target.buffered.length - 1) / t.getDuration();
		} else if (target && target.bytesTotal !== undefined && target.bytesTotal > 0 && target.bufferedBytes !== undefined) {
				percent = target.bufferedBytes / target.bytesTotal;
			} else if (e && e.lengthComputable && e.total !== 0) {
					percent = e.loaded / e.total;
				}

		if (percent !== null) {
			percent = Math.min(1, Math.max(0, percent));

			if (t.loaded) {
				t.setTransformStyle(t.loaded, 'scaleX(' + percent + ')');
			}
		}
	},
	setCurrentRailHandle: function setCurrentRailHandle(fakeTime) {
		var t = this;
		t.setCurrentRailMain(t, fakeTime);
	},
	setCurrentRail: function setCurrentRail() {
		var t = this;
		t.setCurrentRailMain(t);
	},
	setCurrentRailMain: function setCurrentRailMain(t, fakeTime) {
		if (t.getCurrentTime() !== undefined && t.getDuration()) {
			var nTime = typeof fakeTime === 'undefined' ? t.getCurrentTime() : fakeTime;

			if (t.total && t.handle) {
				var tW = parseFloat(getComputedStyle(t.total).width);

				var newWidth = Math.round(tW * nTime / t.getDuration()),
				    handlePos = newWidth - Math.round(t.handle.offsetWidth / 2);

				handlePos = handlePos < 0 ? 0 : handlePos;
				t.setTransformStyle(t.current, 'scaleX(' + newWidth / tW + ')');
				t.setTransformStyle(t.handle, 'translateX(' + handlePos + 'px)');

				if (t.options.useSmoothHover && !(0, _dom.hasClass)(t.hovered, 'no-hover')) {
					var pos = parseInt(t.hovered.getAttribute('pos'), 10);
					pos = isNaN(pos) ? 0 : pos;

					var hoverScaleX = pos / tW - handlePos / tW;

					t.hovered.style.left = handlePos + 'px';
					t.setTransformStyle(t.hovered, 'scaleX(' + hoverScaleX + ')');

					if (hoverScaleX >= 0) {
						(0, _dom.removeClass)(t.hovered, 'negative');
					} else {
						(0, _dom.addClass)(t.hovered, 'negative');
					}
				}
			}
		}
	}
});

},{"16":16,"2":2,"25":25,"26":26,"30":30,"5":5}],12:[function(_dereq_,module,exports){
'use strict';

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _player = _dereq_(16);

var _player2 = _interopRequireDefault(_player);

var _time = _dereq_(30);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_player.config, {
	duration: 0,

	timeAndDurationSeparator: '<span> | </span>'
});

Object.assign(_player2.default.prototype, {
	buildcurrent: function buildcurrent(player, controls, layers, media) {
		var t = this,
		    time = _document2.default.createElement('div');

		time.className = t.options.classPrefix + 'time';
		time.setAttribute('role', 'timer');
		time.setAttribute('aria-live', 'off');
		time.innerHTML = '<span class="' + t.options.classPrefix + 'currenttime">' + (0, _time.secondsToTimeCode)(0, player.options.alwaysShowHours, player.options.showTimecodeFrameCount, player.options.framesPerSecond, player.options.secondsDecimalLength, player.options.timeFormat) + '</span>';

		t.addControlElement(time, 'current');
		player.updateCurrent();
		t.updateTimeCallback = function () {
			if (t.controlsAreVisible) {
				player.updateCurrent();
			}
		};
		media.addEventListener('timeupdate', t.updateTimeCallback);
	},
	cleancurrent: function cleancurrent(player, controls, layers, media) {
		media.removeEventListener('timeupdate', player.updateTimeCallback);
	},
	buildduration: function buildduration(player, controls, layers, media) {
		var t = this,
		    currTime = controls.lastChild.querySelector('.' + t.options.classPrefix + 'currenttime');

		if (currTime) {
			controls.querySelector('.' + t.options.classPrefix + 'time').innerHTML += t.options.timeAndDurationSeparator + '<span class="' + t.options.classPrefix + 'duration">' + ((0, _time.secondsToTimeCode)(t.options.duration, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond, t.options.secondsDecimalLength, t.options.timeFormat) + '</span>');
		} else {
			if (controls.querySelector('.' + t.options.classPrefix + 'currenttime')) {
				(0, _dom.addClass)(controls.querySelector('.' + t.options.classPrefix + 'currenttime').parentNode, t.options.classPrefix + 'currenttime-container');
			}

			var duration = _document2.default.createElement('div');
			duration.className = t.options.classPrefix + 'time ' + t.options.classPrefix + 'duration-container';
			duration.innerHTML = '<span class="' + t.options.classPrefix + 'duration">' + ((0, _time.secondsToTimeCode)(t.options.duration, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond, t.options.secondsDecimalLength, t.options.timeFormat) + '</span>');

			t.addControlElement(duration, 'duration');
		}

		t.updateDurationCallback = function () {
			if (t.controlsAreVisible) {
				player.updateDuration();
			}
		};

		media.addEventListener('timeupdate', t.updateDurationCallback);
	},
	cleanduration: function cleanduration(player, controls, layers, media) {
		media.removeEventListener('timeupdate', player.updateDurationCallback);
	},
	updateCurrent: function updateCurrent() {
		var t = this;

		var currentTime = t.getCurrentTime();

		if (isNaN(currentTime)) {
			currentTime = 0;
		}

		var timecode = (0, _time.secondsToTimeCode)(currentTime, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond, t.options.secondsDecimalLength, t.options.timeFormat);

		if (timecode.length > 5) {
			(0, _dom.addClass)(t.getElement(t.container), t.options.classPrefix + 'long-video');
		} else {
			(0, _dom.removeClass)(t.getElement(t.container), t.options.classPrefix + 'long-video');
		}

		if (t.getElement(t.controls).querySelector('.' + t.options.classPrefix + 'currenttime')) {
			t.getElement(t.controls).querySelector('.' + t.options.classPrefix + 'currenttime').innerText = timecode;
		}
	},
	updateDuration: function updateDuration() {
		var t = this;

		var duration = t.getDuration();

		if (isNaN(duration) || duration === Infinity || duration < 0) {
			t.media.duration = t.options.duration = duration = 0;
		}

		if (t.options.duration > 0) {
			duration = t.options.duration;
		}

		var timecode = (0, _time.secondsToTimeCode)(duration, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond, t.options.secondsDecimalLength, t.options.timeFormat);

		if (timecode.length > 5) {
			(0, _dom.addClass)(t.getElement(t.container), t.options.classPrefix + 'long-video');
		} else {
			(0, _dom.removeClass)(t.getElement(t.container), t.options.classPrefix + 'long-video');
		}

		if (t.getElement(t.controls).querySelector('.' + t.options.classPrefix + 'duration') && duration > 0) {
			t.getElement(t.controls).querySelector('.' + t.options.classPrefix + 'duration').innerHTML = timecode;
		}
	}
});

},{"16":16,"2":2,"26":26,"30":30}],13:[function(_dereq_,module,exports){
'use strict';

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _i18n = _dereq_(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _player = _dereq_(16);

var _player2 = _interopRequireDefault(_player);

var _time = _dereq_(30);

var _general = _dereq_(27);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_player.config, {
	startLanguage: '',

	tracksText: null,

	chaptersText: null,

	tracksAriaLive: false,

	hideCaptionsButtonWhenEmpty: true,

	toggleCaptionsButtonWhenOnlyOne: false,

	slidesSelector: ''
});

Object.assign(_player2.default.prototype, {
	hasChapters: false,

	buildtracks: function buildtracks(player, controls, layers, media) {

		this.findTracks();

		if (!player.tracks.length && (!player.trackFiles || !player.trackFiles.length === 0)) {
			return;
		}

		var t = this,
		    attr = t.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : '',
		    tracksTitle = (0, _general.isString)(t.options.tracksText) ? t.options.tracksText : _i18n2.default.t('mejs.captions-subtitles'),
		    chaptersTitle = (0, _general.isString)(t.options.chaptersText) ? t.options.chaptersText : _i18n2.default.t('mejs.captions-chapters'),
		    total = player.trackFiles === null ? player.tracks.length : player.trackFiles.length;

		if (t.domNode.textTracks) {
			for (var i = t.domNode.textTracks.length - 1; i >= 0; i--) {
				t.domNode.textTracks[i].mode = 'hidden';
			}
		}

		t.cleartracks(player);

		player.captions = _document2.default.createElement('div');
		player.captions.className = t.options.classPrefix + 'captions-layer ' + t.options.classPrefix + 'layer';
		player.captions.innerHTML = '<div class="' + t.options.classPrefix + 'captions-position ' + t.options.classPrefix + 'captions-position-hover"' + attr + '>' + ('<span class="' + t.options.classPrefix + 'captions-text"></span>') + '</div>';
		player.captions.style.display = 'none';
		layers.insertBefore(player.captions, layers.firstChild);

		player.captionsText = player.captions.querySelector('.' + t.options.classPrefix + 'captions-text');

		player.captionsButton = _document2.default.createElement('div');
		player.captionsButton.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'captions-button';
		player.captionsButton.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + tracksTitle + '" aria-label="' + tracksTitle + '" tabindex="0"></button>' + ('<div class="' + t.options.classPrefix + 'captions-selector ' + t.options.classPrefix + 'offscreen">') + ('<ul class="' + t.options.classPrefix + 'captions-selector-list">') + ('<li class="' + t.options.classPrefix + 'captions-selector-list-item">') + ('<input type="radio" class="' + t.options.classPrefix + 'captions-selector-input" ') + ('name="' + player.id + '_captions" id="' + player.id + '_captions_none" ') + 'value="none" checked disabled>' + ('<label class="' + t.options.classPrefix + 'captions-selector-label ') + (t.options.classPrefix + 'captions-selected" ') + ('for="' + player.id + '_captions_none">' + _i18n2.default.t('mejs.none') + '</label>') + '</li>' + '</ul>' + '</div>';

		t.addControlElement(player.captionsButton, 'tracks');

		player.captionsButton.querySelector('.' + t.options.classPrefix + 'captions-selector-input').disabled = false;

		player.chaptersButton = _document2.default.createElement('div');
		player.chaptersButton.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'chapters-button';
		player.chaptersButton.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + chaptersTitle + '" aria-label="' + chaptersTitle + '" tabindex="0"></button>' + ('<div class="' + t.options.classPrefix + 'chapters-selector ' + t.options.classPrefix + 'offscreen">') + ('<ul class="' + t.options.classPrefix + 'chapters-selector-list"></ul>') + '</div>';

		var subtitleCount = 0;

		for (var _i = 0; _i < total; _i++) {
			var kind = player.tracks[_i].kind,
			    src = player.tracks[_i].src;
			if (src.trim()) {
				if (kind === 'subtitles' || kind === 'captions') {
					subtitleCount++;
				} else if (kind === 'chapters' && !controls.querySelector('.' + t.options.classPrefix + 'chapter-selector')) {
					player.captionsButton.parentNode.insertBefore(player.chaptersButton, player.captionsButton);
				}
			}
		}

		player.trackToLoad = -1;
		player.selectedTrack = null;
		player.isLoadingTrack = false;

		for (var _i2 = 0; _i2 < total; _i2++) {
			var _kind = player.tracks[_i2].kind;
			if (player.tracks[_i2].src.trim() && (_kind === 'subtitles' || _kind === 'captions')) {
				player.addTrackButton(player.tracks[_i2].trackId, player.tracks[_i2].srclang, player.tracks[_i2].label);
			}
		}

		player.loadNextTrack();

		var inEvents = ['mouseenter', 'focusin'],
		    outEvents = ['mouseleave', 'focusout'];

		if (t.options.toggleCaptionsButtonWhenOnlyOne && subtitleCount === 1) {
			player.captionsButton.addEventListener('click', function (e) {
				var trackId = 'none';
				if (player.selectedTrack === null) {
					trackId = player.tracks[0].trackId;
				}
				var keyboard = e.keyCode || e.which;
				player.setTrack(trackId, typeof keyboard !== 'undefined');
			});
		} else {
			var labels = player.captionsButton.querySelectorAll('.' + t.options.classPrefix + 'captions-selector-label'),
			    captions = player.captionsButton.querySelectorAll('input[type=radio]');

			for (var _i3 = 0, _total = inEvents.length; _i3 < _total; _i3++) {
				player.captionsButton.addEventListener(inEvents[_i3], function () {
					(0, _dom.removeClass)(this.querySelector('.' + t.options.classPrefix + 'captions-selector'), t.options.classPrefix + 'offscreen');
				});
			}

			for (var _i4 = 0, _total2 = outEvents.length; _i4 < _total2; _i4++) {
				player.captionsButton.addEventListener(outEvents[_i4], function () {
					(0, _dom.addClass)(this.querySelector('.' + t.options.classPrefix + 'captions-selector'), t.options.classPrefix + 'offscreen');
				});
			}

			for (var _i5 = 0, _total3 = captions.length; _i5 < _total3; _i5++) {
				captions[_i5].addEventListener('click', function (e) {
					var keyboard = e.keyCode || e.which;
					player.setTrack(this.value, typeof keyboard !== 'undefined');
				});
			}

			for (var _i6 = 0, _total4 = labels.length; _i6 < _total4; _i6++) {
				labels[_i6].addEventListener('click', function (e) {
					var radio = (0, _dom.siblings)(this, function (el) {
						return el.tagName === 'INPUT';
					})[0],
					    event = (0, _general.createEvent)('click', radio);
					radio.dispatchEvent(event);
					e.preventDefault();
				});
			}

			player.captionsButton.addEventListener('keydown', function (e) {
				e.stopPropagation();
			});
		}

		for (var _i7 = 0, _total5 = inEvents.length; _i7 < _total5; _i7++) {
			player.chaptersButton.addEventListener(inEvents[_i7], function () {
				if (this.querySelector('.' + t.options.classPrefix + 'chapters-selector-list').children.length) {
					(0, _dom.removeClass)(this.querySelector('.' + t.options.classPrefix + 'chapters-selector'), t.options.classPrefix + 'offscreen');
				}
			});
		}

		for (var _i8 = 0, _total6 = outEvents.length; _i8 < _total6; _i8++) {
			player.chaptersButton.addEventListener(outEvents[_i8], function () {
				(0, _dom.addClass)(this.querySelector('.' + t.options.classPrefix + 'chapters-selector'), t.options.classPrefix + 'offscreen');
			});
		}

		player.chaptersButton.addEventListener('keydown', function (e) {
			e.stopPropagation();
		});

		if (!player.options.alwaysShowControls) {
			player.getElement(player.container).addEventListener('controlsshown', function () {
				(0, _dom.addClass)(player.getElement(player.container).querySelector('.' + t.options.classPrefix + 'captions-position'), t.options.classPrefix + 'captions-position-hover');
			});

			player.getElement(player.container).addEventListener('controlshidden', function () {
				if (!media.paused) {
					(0, _dom.removeClass)(player.getElement(player.container).querySelector('.' + t.options.classPrefix + 'captions-position'), t.options.classPrefix + 'captions-position-hover');
				}
			});
		} else {
			(0, _dom.addClass)(player.getElement(player.container).querySelector('.' + t.options.classPrefix + 'captions-position'), t.options.classPrefix + 'captions-position-hover');
		}

		media.addEventListener('timeupdate', function () {
			player.displayCaptions();
		});

		if (player.options.slidesSelector !== '') {
			player.slidesContainer = _document2.default.querySelectorAll(player.options.slidesSelector);

			media.addEventListener('timeupdate', function () {
				player.displaySlides();
			});
		}
	},
	cleartracks: function cleartracks(player) {
		if (player) {
			if (player.captions) {
				player.captions.remove();
			}
			if (player.chapters) {
				player.chapters.remove();
			}
			if (player.captionsText) {
				player.captionsText.remove();
			}
			if (player.captionsButton) {
				player.captionsButton.remove();
			}
			if (player.chaptersButton) {
				player.chaptersButton.remove();
			}
		}
	},
	rebuildtracks: function rebuildtracks() {
		var t = this;
		t.findTracks();
		t.buildtracks(t, t.getElement(t.controls), t.getElement(t.layers), t.media);
	},
	findTracks: function findTracks() {
		var t = this,
		    tracktags = t.trackFiles === null ? t.node.querySelectorAll('track') : t.trackFiles,
		    total = tracktags.length;

		t.tracks = [];
		for (var i = 0; i < total; i++) {
			var track = tracktags[i],
			    srclang = track.getAttribute('srclang').toLowerCase() || '',
			    trackId = t.id + '_track_' + i + '_' + track.getAttribute('kind') + '_' + srclang;
			t.tracks.push({
				trackId: trackId,
				srclang: srclang,
				src: track.getAttribute('src'),
				kind: track.getAttribute('kind'),
				label: track.getAttribute('label') || '',
				entries: [],
				isLoaded: false
			});
		}
	},
	setTrack: function setTrack(trackId, setByKeyboard) {

		var t = this,
		    radios = t.captionsButton.querySelectorAll('input[type="radio"]'),
		    captions = t.captionsButton.querySelectorAll('.' + t.options.classPrefix + 'captions-selected'),
		    track = t.captionsButton.querySelector('input[value="' + trackId + '"]');

		for (var i = 0, total = radios.length; i < total; i++) {
			radios[i].checked = false;
		}

		for (var _i9 = 0, _total7 = captions.length; _i9 < _total7; _i9++) {
			(0, _dom.removeClass)(captions[_i9], t.options.classPrefix + 'captions-selected');
		}

		track.checked = true;
		var labels = (0, _dom.siblings)(track, function (el) {
			return (0, _dom.hasClass)(el, t.options.classPrefix + 'captions-selector-label');
		});
		for (var _i10 = 0, _total8 = labels.length; _i10 < _total8; _i10++) {
			(0, _dom.addClass)(labels[_i10], t.options.classPrefix + 'captions-selected');
		}

		if (trackId === 'none') {
			t.selectedTrack = null;
			(0, _dom.removeClass)(t.captionsButton, t.options.classPrefix + 'captions-enabled');
		} else {
			for (var _i11 = 0, _total9 = t.tracks.length; _i11 < _total9; _i11++) {
				var _track = t.tracks[_i11];
				if (_track.trackId === trackId) {
					if (t.selectedTrack === null) {
						(0, _dom.addClass)(t.captionsButton, t.options.classPrefix + 'captions-enabled');
					}
					t.selectedTrack = _track;
					t.captions.setAttribute('lang', t.selectedTrack.srclang);
					t.displayCaptions();
					break;
				}
			}
		}

		var event = (0, _general.createEvent)('captionschange', t.media);
		event.detail.caption = t.selectedTrack;
		t.media.dispatchEvent(event);

		if (!setByKeyboard) {
			setTimeout(function () {
				t.getElement(t.container).focus();
			}, 500);
		}
	},
	loadNextTrack: function loadNextTrack() {
		var t = this;

		t.trackToLoad++;
		if (t.trackToLoad < t.tracks.length) {
			t.isLoadingTrack = true;
			t.loadTrack(t.trackToLoad);
		} else {
			t.isLoadingTrack = false;
			t.checkForTracks();
		}
	},
	loadTrack: function loadTrack(index) {
		var t = this,
		    track = t.tracks[index];

		if (track !== undefined && (track.src !== undefined || track.src !== "")) {
			(0, _dom.ajax)(track.src, 'text', function (d) {
				track.entries = typeof d === 'string' && /<tt\s+xml/ig.exec(d) ? _mejs2.default.TrackFormatParser.dfxp.parse(d) : _mejs2.default.TrackFormatParser.webvtt.parse(d);

				track.isLoaded = true;
				t.enableTrackButton(track);
				t.loadNextTrack();

				if (track.kind === 'slides') {
					t.setupSlides(track);
				} else if (track.kind === 'chapters' && !t.hasChapters) {
						t.drawChapters(track);
						t.hasChapters = true;
					}
			}, function () {
				t.removeTrackButton(track.trackId);
				t.loadNextTrack();
			});
		}
	},
	enableTrackButton: function enableTrackButton(track) {
		var t = this,
		    lang = track.srclang,
		    target = _document2.default.getElementById('' + track.trackId);

		if (!target) {
			return;
		}

		var label = track.label;

		if (label === '') {
			label = _i18n2.default.t(_mejs2.default.language.codes[lang]) || lang;
		}
		target.disabled = false;
		var targetSiblings = (0, _dom.siblings)(target, function (el) {
			return (0, _dom.hasClass)(el, t.options.classPrefix + 'captions-selector-label');
		});
		for (var i = 0, total = targetSiblings.length; i < total; i++) {
			targetSiblings[i].innerHTML = label;
		}

		if (t.options.startLanguage === lang) {
			target.checked = true;
			var event = (0, _general.createEvent)('click', target);
			target.dispatchEvent(event);
		}
	},
	removeTrackButton: function removeTrackButton(trackId) {
		var element = _document2.default.getElementById('' + trackId);
		if (element) {
			var button = element.closest('li');
			if (button) {
				button.remove();
			}
		}
	},
	addTrackButton: function addTrackButton(trackId, lang, label) {
		var t = this;
		if (label === '') {
			label = _i18n2.default.t(_mejs2.default.language.codes[lang]) || lang;
		}

		t.captionsButton.querySelector('ul').innerHTML += '<li class="' + t.options.classPrefix + 'captions-selector-list-item">' + ('<input type="radio" class="' + t.options.classPrefix + 'captions-selector-input" ') + ('name="' + t.id + '_captions" id="' + trackId + '" value="' + trackId + '" disabled>') + ('<label class="' + t.options.classPrefix + 'captions-selector-label"') + ('for="' + trackId + '">' + label + ' (loading)</label>') + '</li>';
	},
	checkForTracks: function checkForTracks() {
		var t = this;

		var hasSubtitles = false;

		if (t.options.hideCaptionsButtonWhenEmpty) {
			for (var i = 0, total = t.tracks.length; i < total; i++) {
				var kind = t.tracks[i].kind;
				if ((kind === 'subtitles' || kind === 'captions') && t.tracks[i].isLoaded) {
					hasSubtitles = true;
					break;
				}
			}

			t.captionsButton.style.display = hasSubtitles ? '' : 'none';
			t.setControlsSize();
		}
	},
	displayCaptions: function displayCaptions() {
		if (this.tracks === undefined) {
			return;
		}

		var t = this,
		    track = t.selectedTrack,
		    sanitize = function sanitize(html) {
			var div = _document2.default.createElement('div');
			div.innerHTML = html;

			var scripts = div.getElementsByTagName('script');
			var i = scripts.length;
			while (i--) {
				scripts[i].remove();
			}

			var allElements = div.getElementsByTagName('*');
			for (var _i12 = 0, n = allElements.length; _i12 < n; _i12++) {
				var attributesObj = allElements[_i12].attributes,
				    attributes = Array.prototype.slice.call(attributesObj);

				for (var j = 0, total = attributes.length; j < total; j++) {
					if (attributes[j].name.startsWith('on') || attributes[j].value.startsWith('javascript')) {
						allElements[_i12].remove();
					} else if (attributes[j].name === 'style') {
						allElements[_i12].removeAttribute(attributes[j].name);
					}
				}
			}
			return div.innerHTML;
		};

		if (track !== null && track.isLoaded) {
			var i = t.searchTrackPosition(track.entries, t.media.currentTime);
			if (i > -1) {
				t.captionsText.innerHTML = sanitize(track.entries[i].text);
				t.captionsText.className = t.options.classPrefix + 'captions-text ' + (track.entries[i].identifier || '');
				t.captions.style.display = '';
				t.captions.style.height = '0px';
				return;
			}
			t.captions.style.display = 'none';
		} else {
			t.captions.style.display = 'none';
		}
	},
	setupSlides: function setupSlides(track) {
		var t = this;
		t.slides = track;
		t.slides.entries.imgs = [t.slides.entries.length];
		t.showSlide(0);
	},
	showSlide: function showSlide(index) {
		var _this = this;

		var t = this;

		if (t.tracks === undefined || t.slidesContainer === undefined) {
			return;
		}

		var url = t.slides.entries[index].text;

		var img = t.slides.entries[index].imgs;

		if (img === undefined || img.fadeIn === undefined) {
			var image = _document2.default.createElement('img');
			image.src = url;
			image.addEventListener('load', function () {
				var self = _this,
				    visible = (0, _dom.siblings)(self, function (el) {
					return visible(el);
				});
				self.style.display = 'none';
				t.slidesContainer.innerHTML += self.innerHTML;
				(0, _dom.fadeIn)(t.slidesContainer.querySelector(image));
				for (var i = 0, total = visible.length; i < total; i++) {
					(0, _dom.fadeOut)(visible[i], 400);
				}
			});
			t.slides.entries[index].imgs = img = image;
		} else if (!(0, _dom.visible)(img)) {
			var _visible = (0, _dom.siblings)(self, function (el) {
				return _visible(el);
			});
			(0, _dom.fadeIn)(t.slidesContainer.querySelector(img));
			for (var i = 0, total = _visible.length; i < total; i++) {
				(0, _dom.fadeOut)(_visible[i]);
			}
		}
	},
	displaySlides: function displaySlides() {
		var t = this;

		if (this.slides === undefined) {
			return;
		}

		var slides = t.slides,
		    i = t.searchTrackPosition(slides.entries, t.media.currentTime);

		if (i > -1) {
			t.showSlide(i);
		}
	},
	drawChapters: function drawChapters(chapters) {
		var t = this,
		    total = chapters.entries.length;

		if (!total) {
			return;
		}

		t.chaptersButton.querySelector('ul').innerHTML = '';

		for (var i = 0; i < total; i++) {
			t.chaptersButton.querySelector('ul').innerHTML += '<li class="' + t.options.classPrefix + 'chapters-selector-list-item" ' + 'role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false">' + ('<input type="radio" class="' + t.options.classPrefix + 'captions-selector-input" ') + ('name="' + t.id + '_chapters" id="' + t.id + '_chapters_' + i + '" value="' + chapters.entries[i].start + '" disabled>') + ('<label class="' + t.options.classPrefix + 'chapters-selector-label"') + ('for="' + t.id + '_chapters_' + i + '">' + chapters.entries[i].text + '</label>') + '</li>';
		}

		var radios = t.chaptersButton.querySelectorAll('input[type="radio"]'),
		    labels = t.chaptersButton.querySelectorAll('.' + t.options.classPrefix + 'chapters-selector-label');

		for (var _i13 = 0, _total10 = radios.length; _i13 < _total10; _i13++) {
			radios[_i13].disabled = false;
			radios[_i13].checked = false;
			radios[_i13].addEventListener('click', function (e) {
				var self = this,
				    listItems = t.chaptersButton.querySelectorAll('li'),
				    label = (0, _dom.siblings)(self, function (el) {
					return (0, _dom.hasClass)(el, t.options.classPrefix + 'chapters-selector-label');
				})[0];

				self.checked = true;
				self.parentNode.setAttribute('aria-checked', true);
				(0, _dom.addClass)(label, t.options.classPrefix + 'chapters-selected');
				(0, _dom.removeClass)(t.chaptersButton.querySelector('.' + t.options.classPrefix + 'chapters-selected'), t.options.classPrefix + 'chapters-selected');

				for (var _i14 = 0, _total11 = listItems.length; _i14 < _total11; _i14++) {
					listItems[_i14].setAttribute('aria-checked', false);
				}

				var keyboard = e.keyCode || e.which;
				if (typeof keyboard === 'undefined') {
					setTimeout(function () {
						t.getElement(t.container).focus();
					}, 500);
				}

				t.media.setCurrentTime(parseFloat(self.value));
				if (t.media.paused) {
					t.media.play();
				}
			});
		}

		for (var _i15 = 0, _total12 = labels.length; _i15 < _total12; _i15++) {
			labels[_i15].addEventListener('click', function (e) {
				var radio = (0, _dom.siblings)(this, function (el) {
					return el.tagName === 'INPUT';
				})[0],
				    event = (0, _general.createEvent)('click', radio);
				radio.dispatchEvent(event);
				e.preventDefault();
			});
		}
	},
	searchTrackPosition: function searchTrackPosition(tracks, currentTime) {
		var lo = 0,
		    hi = tracks.length - 1,
		    mid = void 0,
		    start = void 0,
		    stop = void 0;

		while (lo <= hi) {
			mid = lo + hi >> 1;
			start = tracks[mid].start;
			stop = tracks[mid].stop;

			if (currentTime >= start && currentTime < stop) {
				return mid;
			} else if (start < currentTime) {
				lo = mid + 1;
			} else if (start > currentTime) {
				hi = mid - 1;
			}
		}

		return -1;
	}
});

_mejs2.default.language = {
	codes: {
		af: 'mejs.afrikaans',
		sq: 'mejs.albanian',
		ar: 'mejs.arabic',
		be: 'mejs.belarusian',
		bg: 'mejs.bulgarian',
		ca: 'mejs.catalan',
		zh: 'mejs.chinese',
		'zh-cn': 'mejs.chinese-simplified',
		'zh-tw': 'mejs.chines-traditional',
		hr: 'mejs.croatian',
		cs: 'mejs.czech',
		da: 'mejs.danish',
		nl: 'mejs.dutch',
		en: 'mejs.english',
		et: 'mejs.estonian',
		fl: 'mejs.filipino',
		fi: 'mejs.finnish',
		fr: 'mejs.french',
		gl: 'mejs.galician',
		de: 'mejs.german',
		el: 'mejs.greek',
		ht: 'mejs.haitian-creole',
		iw: 'mejs.hebrew',
		hi: 'mejs.hindi',
		hu: 'mejs.hungarian',
		is: 'mejs.icelandic',
		id: 'mejs.indonesian',
		ga: 'mejs.irish',
		it: 'mejs.italian',
		ja: 'mejs.japanese',
		ko: 'mejs.korean',
		lv: 'mejs.latvian',
		lt: 'mejs.lithuanian',
		mk: 'mejs.macedonian',
		ms: 'mejs.malay',
		mt: 'mejs.maltese',
		no: 'mejs.norwegian',
		fa: 'mejs.persian',
		pl: 'mejs.polish',
		pt: 'mejs.portuguese',
		ro: 'mejs.romanian',
		ru: 'mejs.russian',
		sr: 'mejs.serbian',
		sk: 'mejs.slovak',
		sl: 'mejs.slovenian',
		es: 'mejs.spanish',
		sw: 'mejs.swahili',
		sv: 'mejs.swedish',
		tl: 'mejs.tagalog',
		th: 'mejs.thai',
		tr: 'mejs.turkish',
		uk: 'mejs.ukrainian',
		vi: 'mejs.vietnamese',
		cy: 'mejs.welsh',
		yi: 'mejs.yiddish'
	}
};

_mejs2.default.TrackFormatParser = {
	webvtt: {
		pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,

		parse: function parse(trackText) {
			var lines = trackText.split(/\r?\n/),
			    entries = [];

			var timecode = void 0,
			    text = void 0,
			    identifier = void 0;

			for (var i = 0, total = lines.length; i < total; i++) {
				timecode = this.pattern.exec(lines[i]);

				if (timecode && i < lines.length) {
					if (i - 1 >= 0 && lines[i - 1] !== '') {
						identifier = lines[i - 1];
					}
					i++;

					text = lines[i];
					i++;
					while (lines[i] !== '' && i < lines.length) {
						text = text + '\n' + lines[i];
						i++;
					}
					text = text.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
					entries.push({
						identifier: identifier,
						start: (0, _time.convertSMPTEtoSeconds)(timecode[1]) === 0 ? 0.200 : (0, _time.convertSMPTEtoSeconds)(timecode[1]),
						stop: (0, _time.convertSMPTEtoSeconds)(timecode[3]),
						text: text,
						settings: timecode[5]
					});
				}
				identifier = '';
			}
			return entries;
		}
	},

	dfxp: {
		parse: function parse(trackText) {
			trackText = $(trackText).filter('tt');
			var container = trackText.firstChild,
			    lines = container.querySelectorAll('p'),
			    styleNode = trackText.getElementById('' + container.attr('style')),
			    entries = [];

			var styles = void 0;

			if (styleNode.length) {
				styleNode.removeAttribute('id');
				var attributes = styleNode.attributes;
				if (attributes.length) {
					styles = {};
					for (var i = 0, total = attributes.length; i < total; i++) {
						styles[attributes[i].name.split(":")[1]] = attributes[i].value;
					}
				}
			}

			for (var _i16 = 0, _total13 = lines.length; _i16 < _total13; _i16++) {
				var style = void 0,
				    _temp = {
					start: null,
					stop: null,
					style: null,
					text: null
				};

				if (lines.eq(_i16).attr('begin')) {
					_temp.start = (0, _time.convertSMPTEtoSeconds)(lines.eq(_i16).attr('begin'));
				}
				if (!_temp.start && lines.eq(_i16 - 1).attr('end')) {
					_temp.start = (0, _time.convertSMPTEtoSeconds)(lines.eq(_i16 - 1).attr('end'));
				}
				if (lines.eq(_i16).attr('end')) {
					_temp.stop = (0, _time.convertSMPTEtoSeconds)(lines.eq(_i16).attr('end'));
				}
				if (!_temp.stop && lines.eq(_i16 + 1).attr('begin')) {
					_temp.stop = (0, _time.convertSMPTEtoSeconds)(lines.eq(_i16 + 1).attr('begin'));
				}

				if (styles) {
					style = '';
					for (var _style in styles) {
						style += _style + ':' + styles[_style] + ';';
					}
				}
				if (style) {
					_temp.style = style;
				}
				if (_temp.start === 0) {
					_temp.start = 0.200;
				}
				_temp.text = lines.eq(_i16).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
				entries.push(_temp);
			}
			return entries;
		}
	}
};

},{"16":16,"2":2,"26":26,"27":27,"30":30,"5":5,"7":7}],14:[function(_dereq_,module,exports){
'use strict';

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _player = _dereq_(16);

var _player2 = _interopRequireDefault(_player);

var _i18n = _dereq_(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _constants = _dereq_(25);

var _general = _dereq_(27);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_player.config, {
	muteText: null,

	unmuteText: null,

	allyVolumeControlText: null,

	hideVolumeOnTouchDevices: true,

	audioVolume: 'horizontal',

	videoVolume: 'vertical',

	startVolume: 0.8
});

Object.assign(_player2.default.prototype, {
	buildvolume: function buildvolume(player, controls, layers, media) {
		if ((_constants.IS_ANDROID || _constants.IS_IOS) && this.options.hideVolumeOnTouchDevices) {
			return;
		}

		var t = this,
		    mode = t.isVideo ? t.options.videoVolume : t.options.audioVolume,
		    muteText = (0, _general.isString)(t.options.muteText) ? t.options.muteText : _i18n2.default.t('mejs.mute'),
		    unmuteText = (0, _general.isString)(t.options.unmuteText) ? t.options.unmuteText : _i18n2.default.t('mejs.unmute'),
		    volumeControlText = (0, _general.isString)(t.options.allyVolumeControlText) ? t.options.allyVolumeControlText : _i18n2.default.t('mejs.volume-help-text'),
		    mute = _document2.default.createElement('div');

		mute.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'volume-button ' + t.options.classPrefix + 'mute';
		mute.innerHTML = mode === 'horizontal' ? '<button type="button" aria-controls="' + t.id + '" title="' + muteText + '" aria-label="' + muteText + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + t.id + '" title="' + muteText + '" aria-label="' + muteText + '" tabindex="0"></button>' + ('<a href="javascript:void(0);" class="' + t.options.classPrefix + 'volume-slider" ') + ('aria-label="' + _i18n2.default.t('mejs.volume-slider') + '" aria-valuemin="0" aria-valuemax="100" role="slider" ') + 'aria-orientation="vertical">' + ('<span class="' + t.options.classPrefix + 'offscreen">' + volumeControlText + '</span>') + ('<div class="' + t.options.classPrefix + 'volume-total">') + ('<div class="' + t.options.classPrefix + 'volume-current"></div>') + ('<div class="' + t.options.classPrefix + 'volume-handle"></div>') + '</div>' + '</a>';

		t.addControlElement(mute, 'volume');

		t.options.keyActions.push({
			keys: [38],
			action: function action(player) {
				var volumeSlider = player.getElement(player.container).querySelector('.' + _player.config.classPrefix + 'volume-slider');
				if (volumeSlider || player.getElement(player.container).querySelector('.' + _player.config.classPrefix + 'volume-slider').matches(':focus')) {
					volumeSlider.style.display = 'block';
				}
				if (player.isVideo) {
					player.showControls();
					player.startControlsTimer();
				}

				var newVolume = Math.min(player.volume + 0.1, 1);
				player.setVolume(newVolume);
				if (newVolume > 0) {
					player.setMuted(false);
				}
			}
		}, {
			keys: [40],
			action: function action(player) {
				var volumeSlider = player.getElement(player.container).querySelector('.' + _player.config.classPrefix + 'volume-slider');
				if (volumeSlider) {
					volumeSlider.style.display = 'block';
				}

				if (player.isVideo) {
					player.showControls();
					player.startControlsTimer();
				}

				var newVolume = Math.max(player.volume - 0.1, 0);
				player.setVolume(newVolume);

				if (newVolume <= 0.1) {
					player.setMuted(true);
				}
			}
		}, {
			keys: [77],
			action: function action(player) {
				player.getElement(player.container).querySelector('.' + _player.config.classPrefix + 'volume-slider').style.display = 'block';
				if (player.isVideo) {
					player.showControls();
					player.startControlsTimer();
				}
				if (player.media.muted) {
					player.setMuted(false);
				} else {
					player.setMuted(true);
				}
			}
		});

		if (mode === 'horizontal') {
			var anchor = _document2.default.createElement('a');
			anchor.className = t.options.classPrefix + 'horizontal-volume-slider';
			anchor.href = 'javascript:void(0);';
			anchor.setAttribute('aria-label', _i18n2.default.t('mejs.volume-slider'));
			anchor.setAttribute('aria-valuemin', 0);
			anchor.setAttribute('aria-valuemax', 100);
			anchor.setAttribute('role', 'slider');
			anchor.innerHTML += '<span class="' + t.options.classPrefix + 'offscreen">' + volumeControlText + '</span>' + ('<div class="' + t.options.classPrefix + 'horizontal-volume-total">') + ('<div class="' + t.options.classPrefix + 'horizontal-volume-current"></div>') + ('<div class="' + t.options.classPrefix + 'horizontal-volume-handle"></div>') + '</div>';
			mute.parentNode.insertBefore(anchor, mute.nextSibling);
		}

		var mouseIsDown = false,
		    mouseIsOver = false,
		    modified = false,
		    updateVolumeSlider = function updateVolumeSlider() {
			var volume = Math.floor(media.volume * 100);
			volumeSlider.setAttribute('aria-valuenow', volume);
			volumeSlider.setAttribute('aria-valuetext', volume + '%');
		};

		var volumeSlider = mode === 'vertical' ? t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'volume-slider') : t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'horizontal-volume-slider'),
		    volumeTotal = mode === 'vertical' ? t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'volume-total') : t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'horizontal-volume-total'),
		    volumeCurrent = mode === 'vertical' ? t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'volume-current') : t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'horizontal-volume-current'),
		    volumeHandle = mode === 'vertical' ? t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'volume-handle') : t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'horizontal-volume-handle'),
		    positionVolumeHandle = function positionVolumeHandle(volume) {

			if (volume === null || isNaN(volume) || volume === undefined) {
				return;
			}

			volume = Math.max(0, volume);
			volume = Math.min(volume, 1);

			if (volume === 0) {
				(0, _dom.removeClass)(mute, t.options.classPrefix + 'mute');
				(0, _dom.addClass)(mute, t.options.classPrefix + 'unmute');
				var button = mute.firstElementChild;
				button.setAttribute('title', unmuteText);
				button.setAttribute('aria-label', unmuteText);
			} else {
				(0, _dom.removeClass)(mute, t.options.classPrefix + 'unmute');
				(0, _dom.addClass)(mute, t.options.classPrefix + 'mute');
				var _button = mute.firstElementChild;
				_button.setAttribute('title', muteText);
				_button.setAttribute('aria-label', muteText);
			}

			var volumePercentage = volume * 100 + '%',
			    volumeStyles = getComputedStyle(volumeHandle);

			if (mode === 'vertical') {
				volumeCurrent.style.bottom = 0;
				volumeCurrent.style.height = volumePercentage;
				volumeHandle.style.bottom = volumePercentage;
				volumeHandle.style.marginBottom = -parseFloat(volumeStyles.height) / 2 + 'px';
			} else {
				volumeCurrent.style.left = 0;
				volumeCurrent.style.width = volumePercentage;
				volumeHandle.style.left = volumePercentage;
				volumeHandle.style.marginLeft = -parseFloat(volumeStyles.width) / 2 + 'px';
			}
		},
		    handleVolumeMove = function handleVolumeMove(e) {
			var totalOffset = (0, _dom.offset)(volumeTotal),
			    volumeStyles = getComputedStyle(volumeTotal);

			modified = true;

			var volume = null;

			if (mode === 'vertical') {
				var railHeight = parseFloat(volumeStyles.height),
				    newY = e.pageY - totalOffset.top;

				volume = (railHeight - newY) / railHeight;

				if (totalOffset.top === 0 || totalOffset.left === 0) {
					return;
				}
			} else {
				var railWidth = parseFloat(volumeStyles.width),
				    newX = e.pageX - totalOffset.left;

				volume = newX / railWidth;
			}

			volume = Math.max(0, volume);
			volume = Math.min(volume, 1);

			positionVolumeHandle(volume);

			t.setMuted(volume === 0);
			t.setVolume(volume);

			e.preventDefault();
			e.stopPropagation();
		},
		    toggleMute = function toggleMute() {
			if (t.muted) {
				positionVolumeHandle(0);
				(0, _dom.removeClass)(mute, t.options.classPrefix + 'mute');
				(0, _dom.addClass)(mute, t.options.classPrefix + 'unmute');
			} else {
				positionVolumeHandle(media.volume);
				(0, _dom.removeClass)(mute, t.options.classPrefix + 'unmute');
				(0, _dom.addClass)(mute, t.options.classPrefix + 'mute');
			}
		};

		player.getElement(player.container).addEventListener('keydown', function (e) {
			var hasFocus = !!e.target.closest('.' + t.options.classPrefix + 'container');
			if (!hasFocus && mode === 'vertical') {
				volumeSlider.style.display = 'none';
			}
		});

		mute.addEventListener('mouseenter', function (e) {
			if (e.target === mute) {
				volumeSlider.style.display = 'block';
				mouseIsOver = true;
				e.preventDefault();
				e.stopPropagation();
			}
		});
		mute.addEventListener('focusin', function () {
			volumeSlider.style.display = 'block';
			mouseIsOver = true;
		});

		mute.addEventListener('focusout', function (e) {
			if ((!e.relatedTarget || e.relatedTarget && !e.relatedTarget.matches('.' + t.options.classPrefix + 'volume-slider')) && mode === 'vertical') {
				volumeSlider.style.display = 'none';
			}
		});
		mute.addEventListener('mouseleave', function () {
			mouseIsOver = false;
			if (!mouseIsDown && mode === 'vertical') {
				volumeSlider.style.display = 'none';
			}
		});
		mute.addEventListener('focusout', function () {
			mouseIsOver = false;
		});
		mute.addEventListener('keydown', function (e) {
			if (t.options.keyActions.length) {
				var keyCode = e.which || e.keyCode || 0,
				    volume = media.volume;

				switch (keyCode) {
					case 38:
						volume = Math.min(volume + 0.1, 1);
						break;
					case 40:
						volume = Math.max(0, volume - 0.1);
						break;
					default:
						return true;
				}

				mouseIsDown = false;
				positionVolumeHandle(volume);
				media.setVolume(volume);

				e.preventDefault();
				e.stopPropagation();
			}
		});
		mute.querySelector('button').addEventListener('click', function () {
			media.setMuted(!media.muted);
			var event = (0, _general.createEvent)('volumechange', media);
			media.dispatchEvent(event);
		});

		volumeSlider.addEventListener('dragstart', function () {
			return false;
		});

		volumeSlider.addEventListener('mouseover', function () {
			mouseIsOver = true;
		});
		volumeSlider.addEventListener('focusin', function () {
			volumeSlider.style.display = 'block';
			mouseIsOver = true;
		});
		volumeSlider.addEventListener('focusout', function () {
			mouseIsOver = false;
			if (!mouseIsDown && mode === 'vertical') {
				volumeSlider.style.display = 'none';
			}
		});
		volumeSlider.addEventListener('mousedown', function (e) {
			handleVolumeMove(e);
			t.globalBind('mousemove.vol', function (event) {
				var target = event.target;
				if (mouseIsDown && (target === volumeSlider || target.closest(mode === 'vertical' ? '.' + t.options.classPrefix + 'volume-slider' : '.' + t.options.classPrefix + 'horizontal-volume-slider'))) {
					handleVolumeMove(event);
				}
			});
			t.globalBind('mouseup.vol', function () {
				mouseIsDown = false;
				if (!mouseIsOver && mode === 'vertical') {
					volumeSlider.style.display = 'none';
				}
			});
			mouseIsDown = true;
			e.preventDefault();
			e.stopPropagation();
		});

		media.addEventListener('volumechange', function (e) {
			if (!mouseIsDown) {
				toggleMute();
			}
			updateVolumeSlider(e);
		});

		var rendered = false;
		media.addEventListener('rendererready', function () {
			if (!modified) {
				setTimeout(function () {
					rendered = true;
					if (player.options.startVolume === 0 || media.originalNode.muted) {
						media.setMuted(true);
						player.options.startVolume = 0;
					}
					media.setVolume(player.options.startVolume);
					t.setControlsSize();
				}, 250);
			}
		});

		media.addEventListener('loadedmetadata', function () {
			setTimeout(function () {
				if (!modified && !rendered) {
					if (player.options.startVolume === 0 || media.originalNode.muted) {
						media.setMuted(true);
						player.options.startVolume = 0;
					}
					media.setVolume(player.options.startVolume);
					t.setControlsSize();
				}
				rendered = false;
			}, 250);
		});

		if (player.options.startVolume === 0 || media.originalNode.muted) {
			media.setMuted(true);
			player.options.startVolume = 0;
			toggleMute();
		}

		t.getElement(t.container).addEventListener('controlsresize', function () {
			toggleMute();
		});
	}
});

},{"16":16,"2":2,"25":25,"26":26,"27":27,"5":5}],15:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var EN = exports.EN = {
	'mejs.plural-form': 1,

	'mejs.download-file': 'Download File',

	'mejs.install-flash': 'You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/',

	'mejs.fullscreen': 'Fullscreen',

	'mejs.play': 'Play',
	'mejs.pause': 'Pause',

	'mejs.time-slider': 'Time Slider',
	'mejs.time-help-text': 'Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.',
	'mejs.live-broadcast': 'Live Broadcast',

	'mejs.volume-help-text': 'Use Up/Down Arrow keys to increase or decrease volume.',
	'mejs.unmute': 'Unmute',
	'mejs.mute': 'Mute',
	'mejs.volume-slider': 'Volume Slider',

	'mejs.video-player': 'Video Player',
	'mejs.audio-player': 'Audio Player',

	'mejs.captions-subtitles': 'Captions/Subtitles',
	'mejs.captions-chapters': 'Chapters',
	'mejs.none': 'None',
	'mejs.afrikaans': 'Afrikaans',
	'mejs.albanian': 'Albanian',
	'mejs.arabic': 'Arabic',
	'mejs.belarusian': 'Belarusian',
	'mejs.bulgarian': 'Bulgarian',
	'mejs.catalan': 'Catalan',
	'mejs.chinese': 'Chinese',
	'mejs.chinese-simplified': 'Chinese (Simplified)',
	'mejs.chinese-traditional': 'Chinese (Traditional)',
	'mejs.croatian': 'Croatian',
	'mejs.czech': 'Czech',
	'mejs.danish': 'Danish',
	'mejs.dutch': 'Dutch',
	'mejs.english': 'English',
	'mejs.estonian': 'Estonian',
	'mejs.filipino': 'Filipino',
	'mejs.finnish': 'Finnish',
	'mejs.french': 'French',
	'mejs.galician': 'Galician',
	'mejs.german': 'German',
	'mejs.greek': 'Greek',
	'mejs.haitian-creole': 'Haitian Creole',
	'mejs.hebrew': 'Hebrew',
	'mejs.hindi': 'Hindi',
	'mejs.hungarian': 'Hungarian',
	'mejs.icelandic': 'Icelandic',
	'mejs.indonesian': 'Indonesian',
	'mejs.irish': 'Irish',
	'mejs.italian': 'Italian',
	'mejs.japanese': 'Japanese',
	'mejs.korean': 'Korean',
	'mejs.latvian': 'Latvian',
	'mejs.lithuanian': 'Lithuanian',
	'mejs.macedonian': 'Macedonian',
	'mejs.malay': 'Malay',
	'mejs.maltese': 'Maltese',
	'mejs.norwegian': 'Norwegian',
	'mejs.persian': 'Persian',
	'mejs.polish': 'Polish',
	'mejs.portuguese': 'Portuguese',
	'mejs.romanian': 'Romanian',
	'mejs.russian': 'Russian',
	'mejs.serbian': 'Serbian',
	'mejs.slovak': 'Slovak',
	'mejs.slovenian': 'Slovenian',
	'mejs.spanish': 'Spanish',
	'mejs.swahili': 'Swahili',
	'mejs.swedish': 'Swedish',
	'mejs.tagalog': 'Tagalog',
	'mejs.thai': 'Thai',
	'mejs.turkish': 'Turkish',
	'mejs.ukrainian': 'Ukrainian',
	'mejs.vietnamese': 'Vietnamese',
	'mejs.welsh': 'Welsh',
	'mejs.yiddish': 'Yiddish'
};

},{}],16:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.config = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _mediaelement = _dereq_(6);

var _mediaelement2 = _interopRequireDefault(_mediaelement);

var _default = _dereq_(17);

var _default2 = _interopRequireDefault(_default);

var _i18n = _dereq_(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _constants = _dereq_(25);

var _general = _dereq_(27);

var _time = _dereq_(30);

var _media = _dereq_(28);

var _dom = _dereq_(26);

var dom = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_mejs2.default.mepIndex = 0;

_mejs2.default.players = {};

var config = exports.config = {
	poster: '',

	showPosterWhenEnded: false,

	showPosterWhenPaused: false,

	defaultVideoWidth: 480,

	defaultVideoHeight: 270,

	videoWidth: -1,

	videoHeight: -1,

	defaultAudioWidth: 400,

	defaultAudioHeight: 40,

	defaultSeekBackwardInterval: function defaultSeekBackwardInterval(media) {
		return media.getDuration() * 0.05;
	},

	defaultSeekForwardInterval: function defaultSeekForwardInterval(media) {
		return media.getDuration() * 0.05;
	},

	setDimensions: true,

	audioWidth: -1,

	audioHeight: -1,

	loop: false,

	autoRewind: true,

	enableAutosize: true,

	timeFormat: '',

	alwaysShowHours: false,

	showTimecodeFrameCount: false,

	framesPerSecond: 25,

	alwaysShowControls: false,

	hideVideoControlsOnLoad: false,

	hideVideoControlsOnPause: false,

	clickToPlayPause: true,

	controlsTimeoutDefault: 1500,

	controlsTimeoutMouseEnter: 2500,

	controlsTimeoutMouseLeave: 1000,

	iPadUseNativeControls: false,

	iPhoneUseNativeControls: false,

	AndroidUseNativeControls: false,

	features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],

	useDefaultControls: false,

	isVideo: true,

	stretching: 'auto',

	classPrefix: 'mejs__',

	enableKeyboard: true,

	pauseOtherPlayers: true,

	secondsDecimalLength: 0,

	customError: null,

	keyActions: [{
		keys: [32, 179],
		action: function action(player) {

			if (!_constants.IS_FIREFOX) {
				if (player.paused || player.ended) {
					player.play();
				} else {
					player.pause();
				}
			}
		}
	}]
};

_mejs2.default.MepDefaults = config;

var MediaElementPlayer = function () {
	function MediaElementPlayer(node, o) {
		_classCallCheck(this, MediaElementPlayer);

		var t = this,
		    element = typeof node === 'string' ? _document2.default.getElementById(node) : node;

		if (!(t instanceof MediaElementPlayer)) {
			return new MediaElementPlayer(element, o);
		}

		t.node = t.media = element;

		if (!t.node) {
			return;
		}

		if (t.media.player) {
			return t.media.player;
		}

		t.hasFocus = false;

		t.controlsAreVisible = true;

		t.controlsEnabled = true;

		t.controlsTimer = null;

		t.currentMediaTime = 0;

		t.proxy = null;

		if (o === undefined) {
			var options = t.node.getAttribute('data-mejsoptions');
			o = options ? JSON.parse(options) : {};
		}

		t.options = Object.assign({}, config, o);

		if (t.options.loop && !t.media.getAttribute('loop')) {
			t.media.loop = true;
			t.node.loop = true;
		} else if (t.media.loop) {
			t.options.loop = true;
		}

		if (!t.options.timeFormat) {
			t.options.timeFormat = 'mm:ss';
			if (t.options.alwaysShowHours) {
				t.options.timeFormat = 'hh:mm:ss';
			}
			if (t.options.showTimecodeFrameCount) {
				t.options.timeFormat += ':ff';
			}
		}

		(0, _time.calculateTimeFormat)(0, t.options, t.options.framesPerSecond || 25);

		t.id = 'mep_' + _mejs2.default.mepIndex++;

		_mejs2.default.players[t.id] = t;

		t.init();

		return t;
	}

	_createClass(MediaElementPlayer, [{
		key: 'getElement',
		value: function getElement(element) {
			return element;
		}
	}, {
		key: 'init',
		value: function init() {
			var t = this,
			    playerOptions = Object.assign({}, t.options, {
				success: function success(media, domNode) {
					t._meReady(media, domNode);
				},
				error: function error(e) {
					t._handleError(e);
				}
			}),
			    tagName = t.node.tagName.toLowerCase();

			t.isDynamic = tagName !== 'audio' && tagName !== 'video' && tagName !== 'iframe';
			t.isVideo = t.isDynamic ? t.options.isVideo : tagName !== 'audio' && t.options.isVideo;
			t.mediaFiles = null;
			t.trackFiles = null;

			if (_constants.IS_IPAD && t.options.iPadUseNativeControls || _constants.IS_IPHONE && t.options.iPhoneUseNativeControls) {
				t.node.setAttribute('controls', true);

				if (_constants.IS_IPAD && t.node.getAttribute('autoplay')) {
					t.play();
				}
			} else if ((t.isVideo || !t.isVideo && (t.options.features.length || t.options.useDefaultControls)) && !(_constants.IS_ANDROID && t.options.AndroidUseNativeControls)) {
				t.node.removeAttribute('controls');
				var videoPlayerTitle = t.isVideo ? _i18n2.default.t('mejs.video-player') : _i18n2.default.t('mejs.audio-player');

				var offscreen = _document2.default.createElement('span');
				offscreen.className = t.options.classPrefix + 'offscreen';
				offscreen.innerText = videoPlayerTitle;
				t.media.parentNode.insertBefore(offscreen, t.media);

				t.container = _document2.default.createElement('div');
				t.getElement(t.container).id = t.id;
				t.getElement(t.container).className = t.options.classPrefix + 'container ' + t.options.classPrefix + 'container-keyboard-inactive ' + t.media.className;
				t.getElement(t.container).tabIndex = 0;
				t.getElement(t.container).setAttribute('role', 'application');
				t.getElement(t.container).setAttribute('aria-label', videoPlayerTitle);
				t.getElement(t.container).innerHTML = '<div class="' + t.options.classPrefix + 'inner">' + ('<div class="' + t.options.classPrefix + 'mediaelement"></div>') + ('<div class="' + t.options.classPrefix + 'layers"></div>') + ('<div class="' + t.options.classPrefix + 'controls"></div>') + '</div>';
				t.getElement(t.container).addEventListener('focus', function (e) {
					if (!t.controlsAreVisible && !t.hasFocus && t.controlsEnabled) {
						t.showControls(true);

						var btnSelector = (0, _general.isNodeAfter)(e.relatedTarget, t.getElement(t.container)) ? '.' + t.options.classPrefix + 'controls .' + t.options.classPrefix + 'button:last-child > button' : '.' + t.options.classPrefix + 'playpause-button > button',
						    button = t.getElement(t.container).querySelector(btnSelector);

						button.focus();
					}
				});
				t.node.parentNode.insertBefore(t.getElement(t.container), t.node);

				if (!t.options.features.length && !t.options.useDefaultControls) {
					t.getElement(t.container).style.background = 'transparent';
					t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'controls').style.display = 'none';
				}

				if (t.isVideo && t.options.stretching === 'fill' && !dom.hasClass(t.getElement(t.container).parentNode, t.options.classPrefix + 'fill-container')) {
					t.outerContainer = t.media.parentNode;

					var wrapper = _document2.default.createElement('div');
					wrapper.className = t.options.classPrefix + 'fill-container';
					t.getElement(t.container).parentNode.insertBefore(wrapper, t.getElement(t.container));
					wrapper.appendChild(t.getElement(t.container));
				}

				if (_constants.IS_ANDROID) {
					dom.addClass(t.getElement(t.container), t.options.classPrefix + 'android');
				}
				if (_constants.IS_IOS) {
					dom.addClass(t.getElement(t.container), t.options.classPrefix + 'ios');
				}
				if (_constants.IS_IPAD) {
					dom.addClass(t.getElement(t.container), t.options.classPrefix + 'ipad');
				}
				if (_constants.IS_IPHONE) {
					dom.addClass(t.getElement(t.container), t.options.classPrefix + 'iphone');
				}
				dom.addClass(t.getElement(t.container), t.isVideo ? t.options.classPrefix + 'video' : t.options.classPrefix + 'audio');

				if (_constants.IS_SAFARI && !_constants.IS_IOS) {

					dom.addClass(t.getElement(t.container), t.options.classPrefix + 'hide-cues');

					var cloneNode = t.node.cloneNode(),
					    children = t.node.children,
					    mediaFiles = [],
					    tracks = [];

					for (var i = 0, total = children.length; i < total; i++) {
						var childNode = children[i];

						(function () {
							switch (childNode.tagName.toLowerCase()) {
								case 'source':
									var elements = {};
									Array.prototype.slice.call(childNode.attributes).forEach(function (item) {
										elements[item.name] = item.value;
									});
									elements.type = (0, _media.formatType)(elements.src, elements.type);
									mediaFiles.push(elements);
									break;
								case 'track':
									childNode.mode = 'hidden';
									tracks.push(childNode);
									break;
								default:
									cloneNode.appendChild(childNode);
									break;
							}
						})();
					}

					t.node.remove();
					t.node = t.media = cloneNode;

					if (mediaFiles.length) {
						t.mediaFiles = mediaFiles;
					}
					if (tracks.length) {
						t.trackFiles = tracks;
					}
				}

				t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'mediaelement').appendChild(t.node);

				t.media.player = t;

				t.controls = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'controls');
				t.layers = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'layers');

				var tagType = t.isVideo ? 'video' : 'audio',
				    capsTagName = tagType.substring(0, 1).toUpperCase() + tagType.substring(1);

				if (t.options[tagType + 'Width'] > 0 || t.options[tagType + 'Width'].toString().indexOf('%') > -1) {
					t.width = t.options[tagType + 'Width'];
				} else if (t.node.style.width !== '' && t.node.style.width !== null) {
					t.width = t.node.style.width;
				} else if (t.node.getAttribute('width')) {
					t.width = t.node.getAttribute('width');
				} else {
					t.width = t.options['default' + capsTagName + 'Width'];
				}

				if (t.options[tagType + 'Height'] > 0 || t.options[tagType + 'Height'].toString().indexOf('%') > -1) {
					t.height = t.options[tagType + 'Height'];
				} else if (t.node.style.height !== '' && t.node.style.height !== null) {
					t.height = t.node.style.height;
				} else if (t.node.getAttribute('height')) {
					t.height = t.node.getAttribute('height');
				} else {
					t.height = t.options['default' + capsTagName + 'Height'];
				}

				t.initialAspectRatio = t.height >= t.width ? t.width / t.height : t.height / t.width;

				t.setPlayerSize(t.width, t.height);

				playerOptions.pluginWidth = t.width;
				playerOptions.pluginHeight = t.height;
			} else if (!t.isVideo && !t.options.features.length && !t.options.useDefaultControls) {
					t.node.style.display = 'none';
				}

			_mejs2.default.MepDefaults = playerOptions;

			new _mediaelement2.default(t.media, playerOptions, t.mediaFiles);

			if (t.getElement(t.container) !== undefined && t.options.features.length && t.controlsAreVisible && !t.options.hideVideoControlsOnLoad) {
				var event = (0, _general.createEvent)('controlsshown', t.getElement(t.container));
				t.getElement(t.container).dispatchEvent(event);
			}
		}
	}, {
		key: 'showControls',
		value: function showControls(doAnimation) {
			var t = this;

			doAnimation = doAnimation === undefined || doAnimation;

			if (t.controlsAreVisible || !t.isVideo) {
				return;
			}

			if (doAnimation) {
				(function () {
					dom.fadeIn(t.getElement(t.controls), 200, function () {
						dom.removeClass(t.getElement(t.controls), t.options.classPrefix + 'offscreen');
						var event = (0, _general.createEvent)('controlsshown', t.getElement(t.container));
						t.getElement(t.container).dispatchEvent(event);
					});

					var controls = t.getElement(t.container).querySelectorAll('.' + t.options.classPrefix + 'control');

					var _loop = function _loop(i, total) {
						dom.fadeIn(controls[i], 200, function () {
							dom.removeClass(controls[i], t.options.classPrefix + 'offscreen');
						});
					};

					for (var i = 0, total = controls.length; i < total; i++) {
						_loop(i, total);
					}
				})();
			} else {
				dom.removeClass(t.getElement(t.controls), t.options.classPrefix + 'offscreen');
				t.getElement(t.controls).style.display = '';
				t.getElement(t.controls).style.opacity = 1;

				var controls = t.getElement(t.container).querySelectorAll('.' + t.options.classPrefix + 'control');
				for (var i = 0, total = controls.length; i < total; i++) {
					dom.removeClass(controls[i], t.options.classPrefix + 'offscreen');
					controls[i].style.display = '';
				}

				var event = (0, _general.createEvent)('controlsshown', t.getElement(t.container));
				t.getElement(t.container).dispatchEvent(event);
			}

			t.controlsAreVisible = true;
			t.setControlsSize();
		}
	}, {
		key: 'hideControls',
		value: function hideControls(doAnimation, forceHide) {
			var t = this;

			doAnimation = doAnimation === undefined || doAnimation;

			if (forceHide !== true && (!t.controlsAreVisible || t.options.alwaysShowControls || t.paused && t.readyState === 4 && (!t.options.hideVideoControlsOnLoad && t.currentTime <= 0 || !t.options.hideVideoControlsOnPause && t.currentTime > 0) || t.isVideo && !t.options.hideVideoControlsOnLoad && !t.readyState || t.ended)) {
				return;
			}

			if (doAnimation) {
				(function () {
					dom.fadeOut(t.getElement(t.controls), 200, function () {
						dom.addClass(t.getElement(t.controls), t.options.classPrefix + 'offscreen');
						t.getElement(t.controls).style.display = '';
						var event = (0, _general.createEvent)('controlshidden', t.getElement(t.container));
						t.getElement(t.container).dispatchEvent(event);
					});

					var controls = t.getElement(t.container).querySelectorAll('.' + t.options.classPrefix + 'control');

					var _loop2 = function _loop2(i, total) {
						dom.fadeOut(controls[i], 200, function () {
							dom.addClass(controls[i], t.options.classPrefix + 'offscreen');
							controls[i].style.display = '';
						});
					};

					for (var i = 0, total = controls.length; i < total; i++) {
						_loop2(i, total);
					}
				})();
			} else {
				dom.addClass(t.getElement(t.controls), t.options.classPrefix + 'offscreen');
				t.getElement(t.controls).style.display = '';
				t.getElement(t.controls).style.opacity = 0;

				var controls = t.getElement(t.container).querySelectorAll('.' + t.options.classPrefix + 'control');
				for (var i = 0, total = controls.length; i < total; i++) {
					dom.addClass(controls[i], t.options.classPrefix + 'offscreen');
					controls[i].style.display = '';
				}

				var event = (0, _general.createEvent)('controlshidden', t.getElement(t.container));
				t.getElement(t.container).dispatchEvent(event);
			}

			t.controlsAreVisible = false;
		}
	}, {
		key: 'startControlsTimer',
		value: function startControlsTimer(timeout) {
			var t = this;

			timeout = typeof timeout !== 'undefined' ? timeout : t.options.controlsTimeoutDefault;

			t.killControlsTimer('start');

			t.controlsTimer = setTimeout(function () {
				t.hideControls();
				t.killControlsTimer('hide');
			}, timeout);
		}
	}, {
		key: 'killControlsTimer',
		value: function killControlsTimer() {
			var t = this;

			if (t.controlsTimer !== null) {
				clearTimeout(t.controlsTimer);
				delete t.controlsTimer;
				t.controlsTimer = null;
			}
		}
	}, {
		key: 'disableControls',
		value: function disableControls() {
			var t = this;

			t.killControlsTimer();
			t.controlsEnabled = false;
			t.hideControls(false, true);
		}
	}, {
		key: 'enableControls',
		value: function enableControls() {
			var t = this;

			t.controlsEnabled = true;
			t.showControls(false);
		}
	}, {
		key: '_setDefaultPlayer',
		value: function _setDefaultPlayer() {
			var t = this;
			if (t.proxy) {
				t.proxy.pause();
			}
			t.proxy = new _default2.default(t);
			t.media.addEventListener('loadedmetadata', function () {
				if (t.getCurrentTime() > 0 && t.currentMediaTime > 0) {
					t.setCurrentTime(t.currentMediaTime);
					if (!_constants.IS_IOS && !_constants.IS_ANDROID) {
						t.play();
					}
				}
			});
		}
	}, {
		key: '_meReady',
		value: function _meReady(media, domNode) {
			var t = this,
			    autoplayAttr = domNode.getAttribute('autoplay'),
			    autoplay = !(autoplayAttr === undefined || autoplayAttr === null || autoplayAttr === 'false'),
			    isNative = media.rendererName !== null && /(native|html5)/i.test(t.media.rendererName);

			if (t.getElement(t.controls)) {
				t.enableControls();
			}

			if (t.getElement(t.container) && t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'overlay-play')) {
				t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'overlay-play').style.display = '';
			}

			if (t.created) {
				return;
			}

			t.created = true;
			t.media = media;
			t.domNode = domNode;

			if (!(_constants.IS_ANDROID && t.options.AndroidUseNativeControls) && !(_constants.IS_IPAD && t.options.iPadUseNativeControls) && !(_constants.IS_IPHONE && t.options.iPhoneUseNativeControls)) {
				if (!t.isVideo && !t.options.features.length && !t.options.useDefaultControls) {
					if (autoplay && isNative) {
						t.play();
					}

					if (t.options.success) {

						if (typeof t.options.success === 'string') {
							_window2.default[t.options.success](t.media, t.domNode, t);
						} else {
							t.options.success(t.media, t.domNode, t);
						}
					}

					return;
				}

				t.featurePosition = {};

				t._setDefaultPlayer();

				t.buildposter(t, t.getElement(t.controls), t.getElement(t.layers), t.media);
				t.buildkeyboard(t, t.getElement(t.controls), t.getElement(t.layers), t.media);
				t.buildoverlays(t, t.getElement(t.controls), t.getElement(t.layers), t.media);

				if (t.options.useDefaultControls) {
					var defaultControls = ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'];
					t.options.features = defaultControls.concat(t.options.features.filter(function (item) {
						return defaultControls.indexOf(item) === -1;
					}));
				}

				t.buildfeatures(t, t.getElement(t.controls), t.getElement(t.layers), t.media);

				var event = (0, _general.createEvent)('controlsready', t.getElement(t.container));
				t.getElement(t.container).dispatchEvent(event);

				t.setPlayerSize(t.width, t.height);
				t.setControlsSize();

				if (t.isVideo) {
					t.clickToPlayPauseCallback = function () {

						if (t.options.clickToPlayPause) {
							var button = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'overlay-button'),
							    pressed = button.getAttribute('aria-pressed');

							if (t.paused && pressed) {
								t.pause();
							} else if (t.paused) {
								t.play();
							} else {
								t.pause();
							}

							button.setAttribute('aria-pressed', !pressed);
							t.getElement(t.container).focus();
						}
					};

					t.createIframeLayer();

					t.media.addEventListener('click', t.clickToPlayPauseCallback);

					if ((_constants.IS_ANDROID || _constants.IS_IOS) && !t.options.alwaysShowControls) {
						t.node.addEventListener('touchstart', function () {
							if (t.controlsAreVisible) {
								t.hideControls(false);
							} else {
								if (t.controlsEnabled) {
									t.showControls(false);
								}
							}
						}, _constants.SUPPORT_PASSIVE_EVENT ? { passive: true } : false);
					} else {
						t.getElement(t.container).addEventListener('mouseenter', function () {
							if (t.controlsEnabled) {
								if (!t.options.alwaysShowControls) {
									t.killControlsTimer('enter');
									t.showControls();
									t.startControlsTimer(t.options.controlsTimeoutMouseEnter);
								}
							}
						});
						t.getElement(t.container).addEventListener('mousemove', function () {
							if (t.controlsEnabled) {
								if (!t.controlsAreVisible) {
									t.showControls();
								}
								if (!t.options.alwaysShowControls) {
									t.startControlsTimer(t.options.controlsTimeoutMouseEnter);
								}
							}
						});
						t.getElement(t.container).addEventListener('mouseleave', function () {
							if (t.controlsEnabled) {
								if (!t.paused && !t.options.alwaysShowControls) {
									t.startControlsTimer(t.options.controlsTimeoutMouseLeave);
								}
							}
						});
					}

					if (t.options.hideVideoControlsOnLoad) {
						t.hideControls(false);
					}

					if (t.options.enableAutosize) {
						t.media.addEventListener('loadedmetadata', function (e) {
							var target = e !== undefined ? e.detail.target || e.target : t.media;
							if (t.options.videoHeight <= 0 && !t.domNode.getAttribute('height') && !t.domNode.style.height && target !== null && !isNaN(target.videoHeight)) {
								t.setPlayerSize(target.videoWidth, target.videoHeight);
								t.setControlsSize();
								t.media.setSize(target.videoWidth, target.videoHeight);
							}
						});
					}
				}

				t.media.addEventListener('play', function () {
					t.hasFocus = true;

					for (var playerIndex in _mejs2.default.players) {
						if (_mejs2.default.players.hasOwnProperty(playerIndex)) {
							var p = _mejs2.default.players[playerIndex];

							if (p.id !== t.id && t.options.pauseOtherPlayers && !p.paused && !p.ended) {
								p.pause();
								p.hasFocus = false;
							}
						}
					}

					if (!(_constants.IS_ANDROID || _constants.IS_IOS) && !t.options.alwaysShowControls && t.isVideo) {
						t.hideControls();
					}
				});

				t.media.addEventListener('ended', function () {
					if (t.options.autoRewind) {
						try {
							t.setCurrentTime(0);

							setTimeout(function () {
								var loadingElement = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'overlay-loading');
								if (loadingElement && loadingElement.parentNode) {
									loadingElement.parentNode.style.display = 'none';
								}
							}, 20);
						} catch (exp) {
							
						}
					}

					if (typeof t.media.renderer.stop === 'function') {
						t.media.renderer.stop();
					} else {
						t.pause();
					}

					if (t.setProgressRail) {
						t.setProgressRail();
					}
					if (t.setCurrentRail) {
						t.setCurrentRail();
					}

					if (t.options.loop) {
						t.play();
					} else if (!t.options.alwaysShowControls && t.controlsEnabled) {
						t.showControls();
					}
				});

				t.media.addEventListener('loadedmetadata', function () {

					(0, _time.calculateTimeFormat)(t.getDuration(), t.options, t.options.framesPerSecond || 25);

					if (t.updateDuration) {
						t.updateDuration();
					}
					if (t.updateCurrent) {
						t.updateCurrent();
					}

					if (!t.isFullScreen) {
						t.setPlayerSize(t.width, t.height);
						t.setControlsSize();
					}
				});

				var duration = null;
				t.media.addEventListener('timeupdate', function () {
					if (!isNaN(t.getDuration()) && duration !== t.getDuration()) {
						duration = t.getDuration();
						(0, _time.calculateTimeFormat)(duration, t.options, t.options.framesPerSecond || 25);

						if (t.updateDuration) {
							t.updateDuration();
						}
						if (t.updateCurrent) {
							t.updateCurrent();
						}

						t.setControlsSize();
					}
				});

				t.getElement(t.container).addEventListener('click', function (e) {
					dom.addClass(e.currentTarget, t.options.classPrefix + 'container-keyboard-inactive');
				});

				t.getElement(t.container).addEventListener('focusin', function (e) {
					dom.removeClass(e.currentTarget, t.options.classPrefix + 'container-keyboard-inactive');
					if (t.isVideo && !_constants.IS_ANDROID && !_constants.IS_IOS && t.controlsEnabled && !t.options.alwaysShowControls) {
						t.killControlsTimer('enter');
						t.showControls();
						t.startControlsTimer(t.options.controlsTimeoutMouseEnter);
					}
				});

				t.getElement(t.container).addEventListener('focusout', function (e) {
					setTimeout(function () {
						if (e.relatedTarget) {
							if (t.keyboardAction && !e.relatedTarget.closest('.' + t.options.classPrefix + 'container')) {
								t.keyboardAction = false;
								if (t.isVideo && !t.options.alwaysShowControls && !t.paused) {
									t.startControlsTimer(t.options.controlsTimeoutMouseLeave);
								}
							}
						}
					}, 0);
				});

				setTimeout(function () {
					t.setPlayerSize(t.width, t.height);
					t.setControlsSize();
				}, 0);

				t.globalResizeCallback = function () {
					if (!(t.isFullScreen || _constants.HAS_TRUE_NATIVE_FULLSCREEN && _document2.default.webkitIsFullScreen)) {
						t.setPlayerSize(t.width, t.height);
					}

					t.setControlsSize();
				};

				t.globalBind('resize', t.globalResizeCallback);
			}

			if (autoplay && isNative) {
				t.play();
			}

			if (t.options.success) {
				if (typeof t.options.success === 'string') {
					_window2.default[t.options.success](t.media, t.domNode, t);
				} else {
					t.options.success(t.media, t.domNode, t);
				}
			}
		}
	}, {
		key: '_handleError',
		value: function _handleError(e, media, node) {
			var t = this,
			    play = t.getElement(t.layers).querySelector('.' + t.options.classPrefix + 'overlay-play');

			if (play) {
				play.style.display = 'none';
			}

			if (t.options.error) {
				t.options.error(e, media, node);
			}

			if (t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'cannotplay')) {
				t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'cannotplay').remove();
			}

			var errorContainer = _document2.default.createElement('div');
			errorContainer.className = t.options.classPrefix + 'cannotplay';
			errorContainer.style.width = '100%';
			errorContainer.style.height = '100%';

			var errorContent = typeof t.options.customError === 'function' ? t.options.customError(t.media, t.media.originalNode) : t.options.customError,
			    imgError = '';

			if (!errorContent) {
				var poster = t.media.originalNode.getAttribute('poster');
				if (poster) {
					imgError = '<img src="' + poster + '" alt="' + _mejs2.default.i18n.t('mejs.download-file') + '">';
				}

				if (e.message) {
					errorContent = '<p>' + e.message + '</p>';
				}

				if (e.urls) {
					for (var i = 0, total = e.urls.length; i < total; i++) {
						var url = e.urls[i];
						errorContent += '<a href="' + url.src + '" data-type="' + url.type + '"><span>' + _mejs2.default.i18n.t('mejs.download-file') + ': ' + url.src + '</span></a>';
					}
				}
			}

			if (errorContent && t.getElement(t.layers).querySelector('.' + t.options.classPrefix + 'overlay-error')) {
				errorContainer.innerHTML = errorContent;
				t.getElement(t.layers).querySelector('.' + t.options.classPrefix + 'overlay-error').innerHTML = '' + imgError + errorContainer.outerHTML;
				t.getElement(t.layers).querySelector('.' + t.options.classPrefix + 'overlay-error').parentNode.style.display = 'block';
			}

			if (t.controlsEnabled) {
				t.disableControls();
			}
		}
	}, {
		key: 'setPlayerSize',
		value: function setPlayerSize(width, height) {
			var t = this;

			if (!t.options.setDimensions) {
				return false;
			}

			if (typeof width !== 'undefined') {
				t.width = width;
			}

			if (typeof height !== 'undefined') {
				t.height = height;
			}

			switch (t.options.stretching) {
				case 'fill':
					if (t.isVideo) {
						t.setFillMode();
					} else {
						t.setDimensions(t.width, t.height);
					}
					break;
				case 'responsive':
					t.setResponsiveMode();
					break;
				case 'none':
					t.setDimensions(t.width, t.height);
					break;

				default:
					if (t.hasFluidMode() === true) {
						t.setResponsiveMode();
					} else {
						t.setDimensions(t.width, t.height);
					}
					break;
			}
		}
	}, {
		key: 'hasFluidMode',
		value: function hasFluidMode() {
			var t = this;

			return t.height.toString().indexOf('%') !== -1 || t.node && t.node.style.maxWidth && t.node.style.maxWidth !== 'none' && t.node.style.maxWidth !== t.width || t.node && t.node.currentStyle && t.node.currentStyle.maxWidth === '100%';
		}
	}, {
		key: 'setResponsiveMode',
		value: function setResponsiveMode() {
			var t = this,
			    parent = function () {

				var parentEl = void 0,
				    el = t.getElement(t.container);

				while (el) {
					try {
						if (_constants.IS_FIREFOX && el.tagName.toLowerCase() === 'html' && _window2.default.self !== _window2.default.top && _window2.default.frameElement !== null) {
							return _window2.default.frameElement;
						} else {
							parentEl = el.parentElement;
						}
					} catch (e) {
						parentEl = el.parentElement;
					}

					if (parentEl && dom.visible(parentEl)) {
						return parentEl;
					}
					el = parentEl;
				}

				return null;
			}(),
			    parentStyles = parent ? getComputedStyle(parent, null) : getComputedStyle(_document2.default.body, null),
			    nativeWidth = function () {
				if (t.isVideo) {
					if (t.media.videoWidth && t.media.videoWidth > 0) {
						return t.media.videoWidth;
					} else if (t.node.getAttribute('width')) {
						return t.node.getAttribute('width');
					} else {
						return t.options.defaultVideoWidth;
					}
				} else {
					return t.options.defaultAudioWidth;
				}
			}(),
			    nativeHeight = function () {
				if (t.isVideo) {
					if (t.media.videoHeight && t.media.videoHeight > 0) {
						return t.media.videoHeight;
					} else if (t.node.getAttribute('height')) {
						return t.node.getAttribute('height');
					} else {
						return t.options.defaultVideoHeight;
					}
				} else {
					return t.options.defaultAudioHeight;
				}
			}(),
			    aspectRatio = function () {
				var ratio = 1;
				if (!t.isVideo) {
					return ratio;
				}

				if (t.media.videoWidth && t.media.videoWidth > 0 && t.media.videoHeight && t.media.videoHeight > 0) {
					ratio = t.height >= t.width ? t.media.videoWidth / t.media.videoHeight : t.media.videoHeight / t.media.videoWidth;
				} else {
					ratio = t.initialAspectRatio;
				}

				if (isNaN(ratio) || ratio < 0.01 || ratio > 100) {
					ratio = 1;
				}

				return ratio;
			}(),
			    parentHeight = parseFloat(parentStyles.height);

			var newHeight = void 0,
			    parentWidth = parseFloat(parentStyles.width);

			if (t.isVideo) {
				if (t.height === '100%') {
					newHeight = parseFloat(parentWidth * nativeHeight / nativeWidth, 10);
				} else {
					newHeight = t.height >= t.width ? parseFloat(parentWidth / aspectRatio, 10) : parseFloat(parentWidth * aspectRatio, 10);
				}
			} else {
				newHeight = nativeHeight;
			}

			if (isNaN(newHeight)) {
				newHeight = parentHeight;
			}

			if (t.getElement(t.container).parentNode.length > 0 && t.getElement(t.container).parentNode.tagName.toLowerCase() === 'body') {
				parentWidth = _window2.default.innerWidth || _document2.default.documentElement.clientWidth || _document2.default.body.clientWidth;
				newHeight = _window2.default.innerHeight || _document2.default.documentElement.clientHeight || _document2.default.body.clientHeight;
			}

			if (newHeight && parentWidth) {
				t.getElement(t.container).style.width = parentWidth + 'px';
				t.getElement(t.container).style.height = newHeight + 'px';

				t.node.style.width = '100%';
				t.node.style.height = '100%';

				if (t.isVideo && t.media.setSize) {
					t.media.setSize(parentWidth, newHeight);
				}

				var layerChildren = t.getElement(t.layers).children;
				for (var i = 0, total = layerChildren.length; i < total; i++) {
					layerChildren[i].style.width = '100%';
					layerChildren[i].style.height = '100%';
				}
			}
		}
	}, {
		key: 'setFillMode',
		value: function setFillMode() {
			var t = this;
			var isIframe = _window2.default.self !== _window2.default.top && _window2.default.frameElement !== null;
			var parent = function () {
				var parentEl = void 0,
				    el = t.getElement(t.container);

				while (el) {
					try {
						if (_constants.IS_FIREFOX && el.tagName.toLowerCase() === 'html' && _window2.default.self !== _window2.default.top && _window2.default.frameElement !== null) {
							return _window2.default.frameElement;
						} else {
							parentEl = el.parentElement;
						}
					} catch (e) {
						parentEl = el.parentElement;
					}

					if (parentEl && dom.visible(parentEl)) {
						return parentEl;
					}
					el = parentEl;
				}

				return null;
			}();
			var parentStyles = parent ? getComputedStyle(parent, null) : getComputedStyle(_document2.default.body, null);

			if (t.node.style.height !== 'none' && t.node.style.height !== t.height) {
				t.node.style.height = 'auto';
			}
			if (t.node.style.maxWidth !== 'none' && t.node.style.maxWidth !== t.width) {
				t.node.style.maxWidth = 'none';
			}

			if (t.node.style.maxHeight !== 'none' && t.node.style.maxHeight !== t.height) {
				t.node.style.maxHeight = 'none';
			}

			if (t.node.currentStyle) {
				if (t.node.currentStyle.height === '100%') {
					t.node.currentStyle.height = 'auto';
				}
				if (t.node.currentStyle.maxWidth === '100%') {
					t.node.currentStyle.maxWidth = 'none';
				}
				if (t.node.currentStyle.maxHeight === '100%') {
					t.node.currentStyle.maxHeight = 'none';
				}
			}

			if (!isIframe && !parseFloat(parentStyles.width)) {
				parent.style.width = t.media.offsetWidth + 'px';
			}

			if (!isIframe && !parseFloat(parentStyles.height)) {
				parent.style.height = t.media.offsetHeight + 'px';
			}

			parentStyles = getComputedStyle(parent);

			var parentWidth = parseFloat(parentStyles.width),
			    parentHeight = parseFloat(parentStyles.height);

			t.setDimensions('100%', '100%');

			var poster = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'poster>img');
			if (poster) {
				poster.style.display = '';
			}

			var targetElement = t.getElement(t.container).querySelectorAll('object, embed, iframe, video'),
			    initHeight = t.height,
			    initWidth = t.width,
			    scaleX1 = parentWidth,
			    scaleY1 = initHeight * parentWidth / initWidth,
			    scaleX2 = initWidth * parentHeight / initHeight,
			    scaleY2 = parentHeight,
			    bScaleOnWidth = scaleX2 > parentWidth === false,
			    finalWidth = bScaleOnWidth ? Math.floor(scaleX1) : Math.floor(scaleX2),
			    finalHeight = bScaleOnWidth ? Math.floor(scaleY1) : Math.floor(scaleY2),
			    width = bScaleOnWidth ? parentWidth + 'px' : finalWidth + 'px',
			    height = bScaleOnWidth ? finalHeight + 'px' : parentHeight + 'px';

			for (var i = 0, total = targetElement.length; i < total; i++) {
				targetElement[i].style.height = height;
				targetElement[i].style.width = width;
				if (t.media.setSize) {
					t.media.setSize(width, height);
				}

				targetElement[i].style.marginLeft = Math.floor((parentWidth - finalWidth) / 2) + 'px';
				targetElement[i].style.marginTop = 0;
			}
		}
	}, {
		key: 'setDimensions',
		value: function setDimensions(width, height) {
			var t = this;

			width = (0, _general.isString)(width) && width.indexOf('%') > -1 ? width : parseFloat(width) + 'px';
			height = (0, _general.isString)(height) && height.indexOf('%') > -1 ? height : parseFloat(height) + 'px';

			t.getElement(t.container).style.width = width;
			t.getElement(t.container).style.height = height;

			var layers = t.getElement(t.layers).children;
			for (var i = 0, total = layers.length; i < total; i++) {
				layers[i].style.width = width;
				layers[i].style.height = height;
			}
		}
	}, {
		key: 'setControlsSize',
		value: function setControlsSize() {
			var t = this;

			if (!dom.visible(t.getElement(t.container))) {
				return;
			}

			if (t.rail && dom.visible(t.rail)) {
				var totalStyles = t.total ? getComputedStyle(t.total, null) : null,
				    totalMargin = totalStyles ? parseFloat(totalStyles.marginLeft) + parseFloat(totalStyles.marginRight) : 0,
				    railStyles = getComputedStyle(t.rail),
				    railMargin = parseFloat(railStyles.marginLeft) + parseFloat(railStyles.marginRight);

				var siblingsWidth = 0;

				var siblings = dom.siblings(t.rail, function (el) {
					return el !== t.rail;
				}),
				    total = siblings.length;
				for (var i = 0; i < total; i++) {
					siblingsWidth += siblings[i].offsetWidth;
				}

				siblingsWidth += totalMargin + (totalMargin === 0 ? railMargin * 2 : railMargin) + 1;

				t.getElement(t.container).style.minWidth = siblingsWidth + 'px';

				var event = (0, _general.createEvent)('controlsresize', t.getElement(t.container));
				t.getElement(t.container).dispatchEvent(event);
			} else {
				var children = t.getElement(t.controls).children;
				var minWidth = 0;

				for (var _i = 0, _total = children.length; _i < _total; _i++) {
					minWidth += children[_i].offsetWidth;
				}

				t.getElement(t.container).style.minWidth = minWidth + 'px';
			}
		}
	}, {
		key: 'addControlElement',
		value: function addControlElement(element, key) {

			var t = this;

			if (t.featurePosition[key] !== undefined) {
				var child = t.getElement(t.controls).children[t.featurePosition[key] - 1];
				child.parentNode.insertBefore(element, child.nextSibling);
			} else {
				t.getElement(t.controls).appendChild(element);
				var children = t.getElement(t.controls).children;
				for (var i = 0, total = children.length; i < total; i++) {
					if (element === children[i]) {
						t.featurePosition[key] = i;
						break;
					}
				}
			}
		}
	}, {
		key: 'createIframeLayer',
		value: function createIframeLayer() {
			var t = this;

			if (t.isVideo && t.media.rendererName !== null && t.media.rendererName.indexOf('iframe') > -1 && !_document2.default.getElementById(t.media.id + '-iframe-overlay')) {

				var layer = _document2.default.createElement('div'),
				    target = _document2.default.getElementById(t.media.id + '_' + t.media.rendererName);

				layer.id = t.media.id + '-iframe-overlay';
				layer.className = t.options.classPrefix + 'iframe-overlay';
				layer.addEventListener('click', function (e) {
					if (t.options.clickToPlayPause) {
						if (t.paused) {
							t.play();
						} else {
							t.pause();
						}

						e.preventDefault();
						e.stopPropagation();
					}
				});

				target.parentNode.insertBefore(layer, target);
			}
		}
	}, {
		key: 'resetSize',
		value: function resetSize() {
			var t = this;

			setTimeout(function () {
				t.setPlayerSize(t.width, t.height);
				t.setControlsSize();
			}, 50);
		}
	}, {
		key: 'setPoster',
		value: function setPoster(url) {
			var t = this;

			if (t.getElement(t.container)) {
				var posterDiv = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'poster');

				if (!posterDiv) {
					posterDiv = _document2.default.createElement('div');
					posterDiv.className = t.options.classPrefix + 'poster ' + t.options.classPrefix + 'layer';
					t.getElement(t.layers).appendChild(posterDiv);
				}

				var posterImg = posterDiv.querySelector('img');

				if (!posterImg && url) {
					posterImg = _document2.default.createElement('img');
					posterImg.className = t.options.classPrefix + 'poster-img';
					posterImg.width = '100%';
					posterImg.height = '100%';
					posterDiv.style.display = '';
					posterDiv.appendChild(posterImg);
				}

				if (url) {
					posterImg.setAttribute('src', url);
					posterDiv.style.backgroundImage = 'url("' + url + '")';
					posterDiv.style.display = '';
				} else if (posterImg) {
					posterDiv.style.backgroundImage = 'none';
					posterDiv.style.display = 'none';
					posterImg.remove();
				} else {
					posterDiv.style.display = 'none';
				}
			} else if (_constants.IS_IPAD && t.options.iPadUseNativeControls || _constants.IS_IPHONE && t.options.iPhoneUseNativeControls || _constants.IS_ANDROID && t.options.AndroidUseNativeControls) {
				t.media.originalNode.poster = url;
			}
		}
	}, {
		key: 'changeSkin',
		value: function changeSkin(className) {
			var t = this;

			t.getElement(t.container).className = t.options.classPrefix + 'container ' + className;
			t.setPlayerSize(t.width, t.height);
			t.setControlsSize();
		}
	}, {
		key: 'globalBind',
		value: function globalBind(events, callback) {
			var t = this,
			    doc = t.node ? t.node.ownerDocument : _document2.default;

			events = (0, _general.splitEvents)(events, t.id);
			if (events.d) {
				var eventList = events.d.split(' ');
				for (var i = 0, total = eventList.length; i < total; i++) {
					eventList[i].split('.').reduce(function (part, e) {
						doc.addEventListener(e, callback, false);
						return e;
					}, '');
				}
			}
			if (events.w) {
				var _eventList = events.w.split(' ');
				for (var _i2 = 0, _total2 = _eventList.length; _i2 < _total2; _i2++) {
					_eventList[_i2].split('.').reduce(function (part, e) {
						_window2.default.addEventListener(e, callback, false);
						return e;
					}, '');
				}
			}
		}
	}, {
		key: 'globalUnbind',
		value: function globalUnbind(events, callback) {
			var t = this,
			    doc = t.node ? t.node.ownerDocument : _document2.default;

			events = (0, _general.splitEvents)(events, t.id);
			if (events.d) {
				var eventList = events.d.split(' ');
				for (var i = 0, total = eventList.length; i < total; i++) {
					eventList[i].split('.').reduce(function (part, e) {
						doc.removeEventListener(e, callback, false);
						return e;
					}, '');
				}
			}
			if (events.w) {
				var _eventList2 = events.w.split(' ');
				for (var _i3 = 0, _total3 = _eventList2.length; _i3 < _total3; _i3++) {
					_eventList2[_i3].split('.').reduce(function (part, e) {
						_window2.default.removeEventListener(e, callback, false);
						return e;
					}, '');
				}
			}
		}
	}, {
		key: 'buildfeatures',
		value: function buildfeatures(player, controls, layers, media) {
			var t = this;

			for (var i = 0, total = t.options.features.length; i < total; i++) {
				var feature = t.options.features[i];
				if (t['build' + feature]) {
					try {
						t['build' + feature](player, controls, layers, media);
					} catch (e) {
						console.error('error building ' + feature, e);
					}
				}
			}
		}
	}, {
		key: 'buildposter',
		value: function buildposter(player, controls, layers, media) {
			var t = this,
			    poster = _document2.default.createElement('div');

			poster.className = t.options.classPrefix + 'poster ' + t.options.classPrefix + 'layer';
			layers.appendChild(poster);

			var posterUrl = media.originalNode.getAttribute('poster');

			if (player.options.poster !== '') {
				if (posterUrl && _constants.IS_IOS) {
					media.originalNode.removeAttribute('poster');
				}
				posterUrl = player.options.poster;
			}

			if (posterUrl) {
				t.setPoster(posterUrl);
			} else if (t.media.renderer !== null && typeof t.media.renderer.getPosterUrl === 'function') {
				t.setPoster(t.media.renderer.getPosterUrl());
			} else {
				poster.style.display = 'none';
			}

			media.addEventListener('play', function () {
				poster.style.display = 'none';
			});

			media.addEventListener('playing', function () {
				poster.style.display = 'none';
			});

			if (player.options.showPosterWhenEnded && player.options.autoRewind) {
				media.addEventListener('ended', function () {
					poster.style.display = '';
				});
			}

			media.addEventListener('error', function () {
				poster.style.display = 'none';
			});

			if (player.options.showPosterWhenPaused) {
				media.addEventListener('pause', function () {
					if (!player.ended) {
						poster.style.display = '';
					}
				});
			}
		}
	}, {
		key: 'buildoverlays',
		value: function buildoverlays(player, controls, layers, media) {

			if (!player.isVideo) {
				return;
			}

			var t = this,
			    loading = _document2.default.createElement('div'),
			    error = _document2.default.createElement('div'),
			    bigPlay = _document2.default.createElement('div');

			loading.style.display = 'none';
			loading.className = t.options.classPrefix + 'overlay ' + t.options.classPrefix + 'layer';
			loading.innerHTML = '<div class="' + t.options.classPrefix + 'overlay-loading">' + ('<span class="' + t.options.classPrefix + 'overlay-loading-bg-img"></span>') + '</div>';
			layers.appendChild(loading);

			error.style.display = 'none';
			error.className = t.options.classPrefix + 'overlay ' + t.options.classPrefix + 'layer';
			error.innerHTML = '<div class="' + t.options.classPrefix + 'overlay-error"></div>';
			layers.appendChild(error);

			bigPlay.className = t.options.classPrefix + 'overlay ' + t.options.classPrefix + 'layer ' + t.options.classPrefix + 'overlay-play';
			bigPlay.innerHTML = '<div class="' + t.options.classPrefix + 'overlay-button" role="button" tabindex="0" ' + ('aria-label="' + _i18n2.default.t('mejs.play') + '" aria-pressed="false"></div>');
			bigPlay.addEventListener('click', function () {
				if (t.options.clickToPlayPause) {

					var button = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'overlay-button'),
					    pressed = button.getAttribute('aria-pressed');

					if (t.paused) {
						t.play();
					} else {
						t.pause();
					}

					button.setAttribute('aria-pressed', !!pressed);
					t.getElement(t.container).focus();
				}
			});

			bigPlay.addEventListener('keydown', function (e) {
				var keyPressed = e.keyCode || e.which || 0;

				if (keyPressed === 13 || _constants.IS_FIREFOX && keyPressed === 32) {
					var event = (0, _general.createEvent)('click', bigPlay);
					bigPlay.dispatchEvent(event);
					return false;
				}
			});

			layers.appendChild(bigPlay);

			if (t.media.rendererName !== null && (/(youtube|facebook)/i.test(t.media.rendererName) && !(t.media.originalNode.getAttribute('poster') || player.options.poster || typeof t.media.renderer.getPosterUrl === 'function' && t.media.renderer.getPosterUrl()) || _constants.IS_STOCK_ANDROID || t.media.originalNode.getAttribute('autoplay'))) {
				bigPlay.style.display = 'none';
			}

			var hasError = false;

			media.addEventListener('play', function () {
				bigPlay.style.display = 'none';
				loading.style.display = 'none';
				error.style.display = 'none';
				hasError = false;
			});
			media.addEventListener('playing', function () {
				bigPlay.style.display = 'none';
				loading.style.display = 'none';
				error.style.display = 'none';
				hasError = false;
			});
			media.addEventListener('seeking', function () {
				bigPlay.style.display = 'none';
				loading.style.display = '';
				hasError = false;
			});
			media.addEventListener('seeked', function () {
				bigPlay.style.display = t.paused && !_constants.IS_STOCK_ANDROID ? '' : 'none';
				loading.style.display = 'none';
				hasError = false;
			});
			media.addEventListener('pause', function () {
				loading.style.display = 'none';
				if (!_constants.IS_STOCK_ANDROID && !hasError) {
					bigPlay.style.display = '';
				}
				hasError = false;
			});
			media.addEventListener('waiting', function () {
				loading.style.display = '';
				hasError = false;
			});

			media.addEventListener('loadeddata', function () {
				loading.style.display = '';

				if (_constants.IS_ANDROID) {
					media.canplayTimeout = setTimeout(function () {
						if (_document2.default.createEvent) {
							var evt = _document2.default.createEvent('HTMLEvents');
							evt.initEvent('canplay', true, true);
							return media.dispatchEvent(evt);
						}
					}, 300);
				}
				hasError = false;
			});
			media.addEventListener('canplay', function () {
				loading.style.display = 'none';

				clearTimeout(media.canplayTimeout);
				hasError = false;
			});

			media.addEventListener('error', function (e) {
				t._handleError(e, t.media, t.node);
				loading.style.display = 'none';
				bigPlay.style.display = 'none';
				hasError = true;
			});

			media.addEventListener('loadedmetadata', function () {
				if (!t.controlsEnabled) {
					t.enableControls();
				}
			});

			media.addEventListener('keydown', function (e) {
				t.onkeydown(player, media, e);
				hasError = false;
			});
		}
	}, {
		key: 'buildkeyboard',
		value: function buildkeyboard(player, controls, layers, media) {

			var t = this;

			t.getElement(t.container).addEventListener('keydown', function () {
				t.keyboardAction = true;
			});

			t.globalKeydownCallback = function (event) {
				var container = _document2.default.activeElement.closest('.' + t.options.classPrefix + 'container'),
				    target = t.media.closest('.' + t.options.classPrefix + 'container');
				t.hasFocus = !!(container && target && container.id === target.id);
				return t.onkeydown(player, media, event);
			};

			t.globalClickCallback = function (event) {
				t.hasFocus = !!event.target.closest('.' + t.options.classPrefix + 'container');
			};

			t.globalBind('keydown', t.globalKeydownCallback);

			t.globalBind('click', t.globalClickCallback);
		}
	}, {
		key: 'onkeydown',
		value: function onkeydown(player, media, e) {

			if (player.hasFocus && player.options.enableKeyboard) {
				for (var i = 0, total = player.options.keyActions.length; i < total; i++) {
					var keyAction = player.options.keyActions[i];

					for (var j = 0, jl = keyAction.keys.length; j < jl; j++) {
						if (e.keyCode === keyAction.keys[j]) {
							keyAction.action(player, media, e.keyCode, e);
							e.preventDefault();
							e.stopPropagation();
							return;
						}
					}
				}
			}

			return true;
		}
	}, {
		key: 'play',
		value: function play() {
			this.proxy.play();
		}
	}, {
		key: 'pause',
		value: function pause() {
			this.proxy.pause();
		}
	}, {
		key: 'load',
		value: function load() {
			this.proxy.load();
		}
	}, {
		key: 'setCurrentTime',
		value: function setCurrentTime(time) {
			this.proxy.setCurrentTime(time);
		}
	}, {
		key: 'getCurrentTime',
		value: function getCurrentTime() {
			return this.proxy.currentTime;
		}
	}, {
		key: 'getDuration',
		value: function getDuration() {
			return this.proxy.duration;
		}
	}, {
		key: 'setVolume',
		value: function setVolume(volume) {
			this.proxy.volume = volume;
		}
	}, {
		key: 'getVolume',
		value: function getVolume() {
			return this.proxy.getVolume();
		}
	}, {
		key: 'setMuted',
		value: function setMuted(value) {
			this.proxy.setMuted(value);
		}
	}, {
		key: 'setSrc',
		value: function setSrc(src) {
			if (!this.controlsEnabled) {
				this.enableControls();
			}
			this.proxy.setSrc(src);
		}
	}, {
		key: 'getSrc',
		value: function getSrc() {
			return this.proxy.getSrc();
		}
	}, {
		key: 'canPlayType',
		value: function canPlayType(type) {
			return this.proxy.canPlayType(type);
		}
	}, {
		key: 'remove',
		value: function remove() {
			var t = this,
			    rendererName = t.media.rendererName,
			    src = t.media.originalNode.src;

			for (var featureIndex in t.options.features) {
				var feature = t.options.features[featureIndex];
				if (t['clean' + feature]) {
					try {
						t['clean' + feature](t, t.getElement(t.layers), t.getElement(t.controls), t.media);
					} catch (e) {
						console.error('error cleaning ' + feature, e);
					}
				}
			}

			var nativeWidth = t.node.getAttribute('width'),
			    nativeHeight = t.node.getAttribute('height');

			if (nativeWidth) {
				if (nativeWidth.indexOf('%') === -1) {
					nativeWidth = nativeWidth + 'px';
				}
			} else {
				nativeWidth = 'auto';
			}

			if (nativeHeight) {
				if (nativeHeight.indexOf('%') === -1) {
					nativeHeight = nativeHeight + 'px';
				}
			} else {
				nativeHeight = 'auto';
			}

			t.node.style.width = nativeWidth;
			t.node.style.height = nativeHeight;

			t.setPlayerSize(0, 0);

			if (!t.isDynamic) {
				(function () {
					t.node.setAttribute('controls', true);
					t.node.setAttribute('id', t.node.getAttribute('id').replace('_' + rendererName, '').replace('_from_mejs', ''));
					var poster = t.getElement(t.container).querySelector('.' + t.options.classPrefix + 'poster>img');
					if (poster) {
						t.node.setAttribute('poster', poster.src);
					}

					delete t.node.autoplay;

					if (t.media.canPlayType((0, _media.getTypeFromFile)(src)) !== '') {
						t.node.setAttribute('src', src);
					}

					if (~rendererName.indexOf('iframe')) {
						var layer = _document2.default.getElementById(t.media.id + '-iframe-overlay');
						layer.remove();
					}

					var node = t.node.cloneNode();
					node.style.display = '';
					t.getElement(t.container).parentNode.insertBefore(node, t.getElement(t.container));
					t.node.remove();

					if (t.mediaFiles) {
						for (var i = 0, total = t.mediaFiles.length; i < total; i++) {
							var source = _document2.default.createElement('source');
							source.setAttribute('src', t.mediaFiles[i].src);
							source.setAttribute('type', t.mediaFiles[i].type);
							node.appendChild(source);
						}
					}
					if (t.trackFiles) {
						var _loop3 = function _loop3(_i4, _total4) {
							var track = t.trackFiles[_i4];
							var newTrack = _document2.default.createElement('track');
							newTrack.kind = track.kind;
							newTrack.label = track.label;
							newTrack.srclang = track.srclang;
							newTrack.src = track.src;

							node.appendChild(newTrack);
							newTrack.addEventListener('load', function () {
								this.mode = 'showing';
								node.textTracks[_i4].mode = 'showing';
							});
						};

						for (var _i4 = 0, _total4 = t.trackFiles.length; _i4 < _total4; _i4++) {
							_loop3(_i4, _total4);
						}
					}

					delete t.node;
					delete t.mediaFiles;
					delete t.trackFiles;
				})();
			} else {
				t.getElement(t.container).parentNode.insertBefore(t.node, t.getElement(t.container));
			}

			if (typeof t.media.renderer.destroy === 'function') {
				t.media.renderer.destroy();
			}

			delete _mejs2.default.players[t.id];

			if (_typeof(t.getElement(t.container)) === 'object') {
				var offscreen = t.getElement(t.container).parentNode.querySelector('.' + t.options.classPrefix + 'offscreen');
				offscreen.remove();
				t.getElement(t.container).remove();
			}
			t.globalUnbind('resize', t.globalResizeCallback);
			t.globalUnbind('keydown', t.globalKeydownCallback);
			t.globalUnbind('click', t.globalClickCallback);

			delete t.media.player;
		}
	}, {
		key: 'paused',
		get: function get() {
			return this.proxy.paused;
		}
	}, {
		key: 'muted',
		get: function get() {
			return this.proxy.muted;
		},
		set: function set(muted) {
			this.setMuted(muted);
		}
	}, {
		key: 'ended',
		get: function get() {
			return this.proxy.ended;
		}
	}, {
		key: 'readyState',
		get: function get() {
			return this.proxy.readyState;
		}
	}, {
		key: 'currentTime',
		set: function set(time) {
			this.setCurrentTime(time);
		},
		get: function get() {
			return this.getCurrentTime();
		}
	}, {
		key: 'duration',
		get: function get() {
			return this.getDuration();
		}
	}, {
		key: 'volume',
		set: function set(volume) {
			this.setVolume(volume);
		},
		get: function get() {
			return this.getVolume();
		}
	}, {
		key: 'src',
		set: function set(src) {
			this.setSrc(src);
		},
		get: function get() {
			return this.getSrc();
		}
	}]);

	return MediaElementPlayer;
}();

_window2.default.MediaElementPlayer = MediaElementPlayer;
_mejs2.default.MediaElementPlayer = MediaElementPlayer;

exports.default = MediaElementPlayer;

},{"17":17,"2":2,"25":25,"26":26,"27":27,"28":28,"3":3,"30":30,"5":5,"6":6,"7":7}],17:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultPlayer = function () {
	function DefaultPlayer(player) {
		_classCallCheck(this, DefaultPlayer);

		this.media = player.media;
		this.isVideo = player.isVideo;
		this.classPrefix = player.options.classPrefix;
		this.createIframeLayer = function () {
			return player.createIframeLayer();
		};
		this.setPoster = function (url) {
			return player.setPoster(url);
		};
		return this;
	}

	_createClass(DefaultPlayer, [{
		key: 'play',
		value: function play() {
			this.media.play();
		}
	}, {
		key: 'pause',
		value: function pause() {
			this.media.pause();
		}
	}, {
		key: 'load',
		value: function load() {
			var t = this;

			if (!t.isLoaded) {
				t.media.load();
			}

			t.isLoaded = true;
		}
	}, {
		key: 'setCurrentTime',
		value: function setCurrentTime(time) {
			this.media.setCurrentTime(time);
		}
	}, {
		key: 'getCurrentTime',
		value: function getCurrentTime() {
			return this.media.currentTime;
		}
	}, {
		key: 'getDuration',
		value: function getDuration() {
			return this.media.getDuration();
		}
	}, {
		key: 'setVolume',
		value: function setVolume(volume) {
			this.media.setVolume(volume);
		}
	}, {
		key: 'getVolume',
		value: function getVolume() {
			return this.media.getVolume();
		}
	}, {
		key: 'setMuted',
		value: function setMuted(value) {
			this.media.setMuted(value);
		}
	}, {
		key: 'setSrc',
		value: function setSrc(src) {
			var t = this,
			    layer = document.getElementById(t.media.id + '-iframe-overlay');

			if (layer) {
				layer.remove();
			}

			t.media.setSrc(src);
			t.createIframeLayer();
			if (t.media.renderer !== null && typeof t.media.renderer.getPosterUrl === 'function') {
				t.setPoster(t.media.renderer.getPosterUrl());
			}
		}
	}, {
		key: 'getSrc',
		value: function getSrc() {
			return this.media.getSrc();
		}
	}, {
		key: 'canPlayType',
		value: function canPlayType(type) {
			return this.media.canPlayType(type);
		}
	}, {
		key: 'paused',
		get: function get() {
			return this.media.paused;
		}
	}, {
		key: 'muted',
		set: function set(muted) {
			this.setMuted(muted);
		},
		get: function get() {
			return this.media.muted;
		}
	}, {
		key: 'ended',
		get: function get() {
			return this.media.ended;
		}
	}, {
		key: 'readyState',
		get: function get() {
			return this.media.readyState;
		}
	}, {
		key: 'currentTime',
		set: function set(time) {
			this.setCurrentTime(time);
		},
		get: function get() {
			return this.getCurrentTime();
		}
	}, {
		key: 'duration',
		get: function get() {
			return this.getDuration();
		}
	}, {
		key: 'volume',
		set: function set(volume) {
			this.setVolume(volume);
		},
		get: function get() {
			return this.getVolume();
		}
	}, {
		key: 'src',
		set: function set(src) {
			this.setSrc(src);
		},
		get: function get() {
			return this.getSrc();
		}
	}]);

	return DefaultPlayer;
}();

exports.default = DefaultPlayer;


_window2.default.DefaultPlayer = DefaultPlayer;

},{"3":3}],18:[function(_dereq_,module,exports){
'use strict';

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _player = _dereq_(16);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof jQuery !== 'undefined') {
	_mejs2.default.$ = _window2.default.jQuery = _window2.default.$ = jQuery;
} else if (typeof Zepto !== 'undefined') {
	_mejs2.default.$ = _window2.default.Zepto = _window2.default.$ = Zepto;
} else if (typeof ender !== 'undefined') {
	_mejs2.default.$ = _window2.default.ender = _window2.default.$ = ender;
}

(function ($) {
	if (typeof $ !== 'undefined') {
		$.fn.mediaelementplayer = function (options) {
			if (options === false) {
				this.each(function () {
					var player = $(this).data('mediaelementplayer');
					if (player) {
						player.remove();
					}
					$(this).removeData('mediaelementplayer');
				});
			} else {
				this.each(function () {
					$(this).data('mediaelementplayer', new _player2.default(this, options));
				});
			}
			return this;
		};

		$(document).ready(function () {
			$('.' + _mejs2.default.MepDefaults.classPrefix + 'player').mediaelementplayer();
		});
	}
})(_mejs2.default.$);

},{"16":16,"3":3,"7":7}],19:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(8);

var _general = _dereq_(27);

var _media = _dereq_(28);

var _constants = _dereq_(25);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeDash = {

	promise: null,

	load: function load(settings) {
		if (typeof dashjs !== 'undefined') {
			NativeDash.promise = new Promise(function (resolve) {
				resolve();
			}).then(function () {
				NativeDash._createPlayer(settings);
			});
		} else {
			settings.options.path = typeof settings.options.path === 'string' ? settings.options.path : 'https://cdn.dashjs.org/latest/dash.all.min.js';

			NativeDash.promise = NativeDash.promise || (0, _dom.loadScript)(settings.options.path);
			NativeDash.promise.then(function () {
				NativeDash._createPlayer(settings);
			});
		}

		return NativeDash.promise;
	},

	_createPlayer: function _createPlayer(settings) {
		var player = dashjs.MediaPlayer().create();
		_window2.default['__ready__' + settings.id](player);
		return player;
	}
};

var DashNativeRenderer = {
	name: 'native_dash',
	options: {
		prefix: 'native_dash',
		dash: {
			path: 'https://cdn.dashjs.org/latest/dash.all.min.js',
			debug: false,
			drm: {},

			robustnessLevel: ''
		}
	},

	canPlayType: function canPlayType(type) {
		return _constants.HAS_MSE && ['application/dash+xml'].indexOf(type.toLowerCase()) > -1;
	},

	create: function create(mediaElement, options, mediaFiles) {

		var originalNode = mediaElement.originalNode,
		    id = mediaElement.id + '_' + options.prefix,
		    autoplay = originalNode.autoplay,
		    children = originalNode.children;

		var node = null,
		    dashPlayer = null;

		originalNode.removeAttribute('type');
		for (var i = 0, total = children.length; i < total; i++) {
			children[i].removeAttribute('type');
		}

		node = originalNode.cloneNode(true);
		options = Object.assign(options, mediaElement.options);

		var props = _mejs2.default.html5media.properties,
		    events = _mejs2.default.html5media.events.concat(['click', 'mouseover', 'mouseout']),
		    attachNativeEvents = function attachNativeEvents(e) {
			if (e.type !== 'error') {
				var _event = (0, _general.createEvent)(e.type, mediaElement);
				mediaElement.dispatchEvent(_event);
			}
		},
		    assignGettersSetters = function assignGettersSetters(propName) {
			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			node['get' + capName] = function () {
				return dashPlayer !== null ? node[propName] : null;
			};

			node['set' + capName] = function (value) {
				if (_mejs2.default.html5media.readOnlyProperties.indexOf(propName) === -1) {
					if (propName === 'src') {
						var source = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.src ? value.src : value;
						node[propName] = source;
						if (dashPlayer !== null) {
							dashPlayer.reset();
							for (var _i = 0, _total = events.length; _i < _total; _i++) {
								node.removeEventListener(events[_i], attachNativeEvents);
							}
							dashPlayer = NativeDash._createPlayer({
								options: options.dash,
								id: id
							});

							if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(value.drm) === 'object') {
								dashPlayer.setProtectionData(value.drm);
								if ((0, _general.isString)(options.dash.robustnessLevel) && options.dash.robustnessLevel) {
									dashPlayer.getProtectionController().setRobustnessLevel(options.dash.robustnessLevel);
								}
							}
							dashPlayer.attachSource(source);
							if (autoplay) {
								dashPlayer.play();
							}
						}
					} else {
						node[propName] = value;
					}
				}
			};
		};

		for (var _i2 = 0, _total2 = props.length; _i2 < _total2; _i2++) {
			assignGettersSetters(props[_i2]);
		}

		_window2.default['__ready__' + id] = function (_dashPlayer) {
			mediaElement.dashPlayer = dashPlayer = _dashPlayer;

			var dashEvents = dashjs.MediaPlayer.events,
			    assignEvents = function assignEvents(eventName) {
				if (eventName === 'loadedmetadata') {
					dashPlayer.getDebug().setLogToBrowserConsole(options.dash.debug);
					dashPlayer.initialize();
					dashPlayer.setScheduleWhilePaused(false);
					dashPlayer.setFastSwitchEnabled(true);
					dashPlayer.attachView(node);
					dashPlayer.setAutoPlay(false);

					if (_typeof(options.dash.drm) === 'object' && !_mejs2.default.Utils.isObjectEmpty(options.dash.drm)) {
						dashPlayer.setProtectionData(options.dash.drm);
						if ((0, _general.isString)(options.dash.robustnessLevel) && options.dash.robustnessLevel) {
							dashPlayer.getProtectionController().setRobustnessLevel(options.dash.robustnessLevel);
						}
					}
					dashPlayer.attachSource(node.getSrc());
				}

				node.addEventListener(eventName, attachNativeEvents);
			};

			for (var _i3 = 0, _total3 = events.length; _i3 < _total3; _i3++) {
				assignEvents(events[_i3]);
			}

			var assignMdashEvents = function assignMdashEvents(name, data) {
				if (name.toLowerCase() === 'error') {
					mediaElement.generateError(data.message, node.src);
					console.error(data);
				} else {
					var _event2 = (0, _general.createEvent)(name, mediaElement);
					_event2.data = data;
					mediaElement.dispatchEvent(_event2);
				}
			};

			for (var eventType in dashEvents) {
				if (dashEvents.hasOwnProperty(eventType)) {
					dashPlayer.on(dashEvents[eventType], function (e) {
						for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							args[_key - 1] = arguments[_key];
						}

						return assignMdashEvents(e.type, args);
					});
				}
			}
		};

		if (mediaFiles && mediaFiles.length > 0) {
			for (var _i4 = 0, _total4 = mediaFiles.length; _i4 < _total4; _i4++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[_i4].type)) {
					node.setAttribute('src', mediaFiles[_i4].src);
					if (typeof mediaFiles[_i4].drm !== 'undefined') {
						options.dash.drm = mediaFiles[_i4].drm;
					}
					break;
				}
			}
		}

		node.setAttribute('id', id);

		originalNode.parentNode.insertBefore(node, originalNode);
		originalNode.autoplay = false;
		originalNode.style.display = 'none';

		node.setSize = function (width, height) {
			node.style.width = width + 'px';
			node.style.height = height + 'px';
			return node;
		};

		node.hide = function () {
			node.pause();
			node.style.display = 'none';
			return node;
		};

		node.show = function () {
			node.style.display = '';
			return node;
		};

		node.destroy = function () {
			if (dashPlayer !== null) {
				dashPlayer.reset();
			}
		};

		var event = (0, _general.createEvent)('rendererready', node);
		mediaElement.dispatchEvent(event);

		mediaElement.promises.push(NativeDash.load({
			options: options.dash,
			id: id
		}));

		return node;
	}
};

_media.typeChecks.push(function (url) {
	return ~url.toLowerCase().indexOf('.mpd') ? 'application/dash+xml' : null;
});

_renderer.renderer.add(DashNativeRenderer);

},{"25":25,"26":26,"27":27,"28":28,"3":3,"7":7,"8":8}],20:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PluginDetector = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _i18n = _dereq_(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _renderer = _dereq_(8);

var _general = _dereq_(27);

var _constants = _dereq_(25);

var _media = _dereq_(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PluginDetector = exports.PluginDetector = {
	plugins: [],

	hasPluginVersion: function hasPluginVersion(plugin, v) {
		var pv = PluginDetector.plugins[plugin];
		v[1] = v[1] || 0;
		v[2] = v[2] || 0;
		return pv[0] > v[0] || pv[0] === v[0] && pv[1] > v[1] || pv[0] === v[0] && pv[1] === v[1] && pv[2] >= v[2];
	},

	addPlugin: function addPlugin(p, pluginName, mimeType, activeX, axDetect) {
		PluginDetector.plugins[p] = PluginDetector.detectPlugin(pluginName, mimeType, activeX, axDetect);
	},

	detectPlugin: function detectPlugin(pluginName, mimeType, activeX, axDetect) {

		var version = [0, 0, 0],
		    description = void 0,
		    ax = void 0;

		if (_constants.NAV.plugins !== null && _constants.NAV.plugins !== undefined && _typeof(_constants.NAV.plugins[pluginName]) === 'object') {
			description = _constants.NAV.plugins[pluginName].description;
			if (description && !(typeof _constants.NAV.mimeTypes !== 'undefined' && _constants.NAV.mimeTypes[mimeType] && !_constants.NAV.mimeTypes[mimeType].enabledPlugin)) {
				version = description.replace(pluginName, '').replace(/^\s+/, '').replace(/\sr/gi, '.').split('.');
				for (var i = 0, total = version.length; i < total; i++) {
					version[i] = parseInt(version[i].match(/\d+/), 10);
				}
			}
		} else if (_window2.default.ActiveXObject !== undefined) {
			try {
				ax = new ActiveXObject(activeX);
				if (ax) {
					version = axDetect(ax);
				}
			} catch (e) {
				
			}
		}
		return version;
	}
};

PluginDetector.addPlugin('flash', 'Shockwave Flash', 'application/x-shockwave-flash', 'ShockwaveFlash.ShockwaveFlash', function (ax) {
	var version = [],
	    d = ax.GetVariable("$version");

	if (d) {
		d = d.split(" ")[1].split(",");
		version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
	}
	return version;
});

var FlashMediaElementRenderer = {
	create: function create(mediaElement, options, mediaFiles) {

		var flash = {};
		var isActive = false;

		flash.options = options;
		flash.id = mediaElement.id + '_' + flash.options.prefix;
		flash.mediaElement = mediaElement;
		flash.flashState = {};
		flash.flashApi = null;
		flash.flashApiStack = [];

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {
			flash.flashState[propName] = null;

			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			flash['get' + capName] = function () {
				if (flash.flashApi !== null) {
					if (typeof flash.flashApi['get_' + propName] === 'function') {
						var value = flash.flashApi['get_' + propName]();

						if (propName === 'buffered') {
							return {
								start: function start() {
									return 0;
								},
								end: function end() {
									return value;
								},
								length: 1
							};
						}
						return value;
					} else {
						return null;
					}
				} else {
					return null;
				}
			};

			flash['set' + capName] = function (value) {
				if (propName === 'src') {
					value = (0, _media.absolutizeUrl)(value);
				}

				if (flash.flashApi !== null && flash.flashApi['set_' + propName] !== undefined) {
					try {
						flash.flashApi['set_' + propName](value);
					} catch (e) {
						
					}
				} else {
					flash.flashApiStack.push({
						type: 'set',
						propName: propName,
						value: value
					});
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		var methods = _mejs2.default.html5media.methods,
		    assignMethods = function assignMethods(methodName) {
			flash[methodName] = function () {
				if (isActive) {
					if (flash.flashApi !== null) {
						if (flash.flashApi['fire_' + methodName]) {
							try {
								flash.flashApi['fire_' + methodName]();
							} catch (e) {
								
							}
						} else {
							
						}
					} else {
						flash.flashApiStack.push({
							type: 'call',
							methodName: methodName
						});
					}
				}
			};
		};
		methods.push('stop');
		for (var _i = 0, _total = methods.length; _i < _total; _i++) {
			assignMethods(methods[_i]);
		}

		var initEvents = ['rendererready'];

		for (var _i2 = 0, _total2 = initEvents.length; _i2 < _total2; _i2++) {
			var event = (0, _general.createEvent)(initEvents[_i2], flash);
			mediaElement.dispatchEvent(event);
		}

		_window2.default['__ready__' + flash.id] = function () {

			flash.flashReady = true;
			flash.flashApi = _document2.default.getElementById('__' + flash.id);

			if (flash.flashApiStack.length) {
				for (var _i3 = 0, _total3 = flash.flashApiStack.length; _i3 < _total3; _i3++) {
					var stackItem = flash.flashApiStack[_i3];

					if (stackItem.type === 'set') {
						var propName = stackItem.propName,
						    capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

						flash['set' + capName](stackItem.value);
					} else if (stackItem.type === 'call') {
						flash[stackItem.methodName]();
					}
				}
			}
		};

		_window2.default['__event__' + flash.id] = function (eventName, message) {
			var event = (0, _general.createEvent)(eventName, flash);
			if (message) {
				try {
					event.data = JSON.parse(message);
					event.details.data = JSON.parse(message);
				} catch (e) {
					event.message = message;
				}
			}

			flash.mediaElement.dispatchEvent(event);
		};

		flash.flashWrapper = _document2.default.createElement('div');

		if (['always', 'sameDomain'].indexOf(flash.options.shimScriptAccess) === -1) {
			flash.options.shimScriptAccess = 'sameDomain';
		}

		var autoplay = mediaElement.originalNode.autoplay,
		    flashVars = ['uid=' + flash.id, 'autoplay=' + autoplay, 'allowScriptAccess=' + flash.options.shimScriptAccess, 'preload=' + (mediaElement.originalNode.getAttribute('preload') || '')],
		    isVideo = mediaElement.originalNode !== null && mediaElement.originalNode.tagName.toLowerCase() === 'video',
		    flashHeight = isVideo ? mediaElement.originalNode.height : 1,
		    flashWidth = isVideo ? mediaElement.originalNode.width : 1;

		if (mediaElement.originalNode.getAttribute('src')) {
			flashVars.push('src=' + mediaElement.originalNode.getAttribute('src'));
		}

		if (flash.options.enablePseudoStreaming === true) {
			flashVars.push('pseudostreamstart=' + flash.options.pseudoStreamingStartQueryParam);
			flashVars.push('pseudostreamtype=' + flash.options.pseudoStreamingType);
		}

		if (flash.options.streamDelimiter) {
			flashVars.push('streamdelimiter=' + encodeURIComponent(flash.options.streamDelimiter));
		}

		if (flash.options.proxyType) {
			flashVars.push('proxytype=' + flash.options.proxyType);
		}

		mediaElement.appendChild(flash.flashWrapper);
		mediaElement.originalNode.style.display = 'none';

		var settings = [];

		if (_constants.IS_IE || _constants.IS_EDGE) {
			var specialIEContainer = _document2.default.createElement('div');
			flash.flashWrapper.appendChild(specialIEContainer);

			if (_constants.IS_EDGE) {
				settings = ['type="application/x-shockwave-flash"', 'data="' + flash.options.pluginPath + flash.options.filename + '"', 'id="__' + flash.id + '"', 'width="' + flashWidth + '"', 'height="' + flashHeight + '\'"'];
			} else {
				settings = ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + flash.id + '"', 'width="' + flashWidth + '"', 'height="' + flashHeight + '"'];
			}

			if (!isVideo) {
				settings.push('style="clip: rect(0 0 0 0); position: absolute;"');
			}

			specialIEContainer.outerHTML = '<object ' + settings.join(' ') + '>' + ('<param name="movie" value="' + flash.options.pluginPath + flash.options.filename + '?x=' + new Date() + '" />') + ('<param name="flashvars" value="' + flashVars.join('&amp;') + '" />') + '<param name="quality" value="high" />' + '<param name="bgcolor" value="#000000" />' + '<param name="wmode" value="transparent" />' + ('<param name="allowScriptAccess" value="' + flash.options.shimScriptAccess + '" />') + '<param name="allowFullScreen" value="true" />' + ('<div>' + _i18n2.default.t('mejs.install-flash') + '</div>') + '</object>';
		} else {

			settings = ['id="__' + flash.id + '"', 'name="__' + flash.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + flash.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + flash.options.pluginPath + flash.options.filename + '"', 'flashvars="' + flashVars.join('&') + '"'];

			if (isVideo) {
				settings.push('width="' + flashWidth + '"');
				settings.push('height="' + flashHeight + '"');
			} else {
				settings.push('style="position: fixed; left: -9999em; top: -9999em;"');
			}

			flash.flashWrapper.innerHTML = '<embed ' + settings.join(' ') + '>';
		}

		flash.flashNode = flash.flashWrapper.lastChild;

		flash.hide = function () {
			isActive = false;
			if (isVideo) {
				flash.flashNode.style.display = 'none';
			}
		};
		flash.show = function () {
			isActive = true;
			if (isVideo) {
				flash.flashNode.style.display = '';
			}
		};
		flash.setSize = function (width, height) {
			flash.flashNode.style.width = width + 'px';
			flash.flashNode.style.height = height + 'px';

			if (flash.flashApi !== null && typeof flash.flashApi.fire_setSize === 'function') {
				flash.flashApi.fire_setSize(width, height);
			}
		};

		flash.destroy = function () {
			flash.flashNode.remove();
		};

		if (mediaFiles && mediaFiles.length > 0) {
			for (var _i4 = 0, _total4 = mediaFiles.length; _i4 < _total4; _i4++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[_i4].type)) {
					flash.setSrc(mediaFiles[_i4].src);
					break;
				}
			}
		}

		return flash;
	}
};

var hasFlash = PluginDetector.hasPluginVersion('flash', [10, 0, 0]);

if (hasFlash) {
	_media.typeChecks.push(function (url) {
		url = url.toLowerCase();

		if (url.startsWith('rtmp')) {
			if (~url.indexOf('.mp3')) {
				return 'audio/rtmp';
			} else {
				return 'video/rtmp';
			}
		} else if (/\.og(a|g)/i.test(url)) {
			return 'audio/ogg';
		} else if (~url.indexOf('.m3u8')) {
			return 'application/x-mpegURL';
		} else if (~url.indexOf('.mpd')) {
			return 'application/dash+xml';
		} else if (~url.indexOf('.flv')) {
			return 'video/flv';
		} else {
			return null;
		}
	});

	var FlashMediaElementVideoRenderer = {
		name: 'flash_video',
		options: {
			prefix: 'flash_video',
			filename: 'mediaelement-flash-video.swf',
			enablePseudoStreaming: false,

			pseudoStreamingStartQueryParam: 'start',

			pseudoStreamingType: 'byte',

			proxyType: '',

			streamDelimiter: ''
		},

		canPlayType: function canPlayType(type) {
			return ~['video/mp4', 'video/rtmp', 'audio/rtmp', 'rtmp/mp4', 'audio/mp4', 'video/flv', 'video/x-flv'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create

	};
	_renderer.renderer.add(FlashMediaElementVideoRenderer);

	var FlashMediaElementHlsVideoRenderer = {
		name: 'flash_hls',
		options: {
			prefix: 'flash_hls',
			filename: 'mediaelement-flash-video-hls.swf'
		},

		canPlayType: function canPlayType(type) {
			return ~['application/x-mpegurl', 'application/vnd.apple.mpegurl', 'audio/mpegurl', 'audio/hls', 'video/hls'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create
	};
	_renderer.renderer.add(FlashMediaElementHlsVideoRenderer);

	var FlashMediaElementMdashVideoRenderer = {
		name: 'flash_dash',
		options: {
			prefix: 'flash_dash',
			filename: 'mediaelement-flash-video-mdash.swf'
		},

		canPlayType: function canPlayType(type) {
			return ~['application/dash+xml'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create
	};
	_renderer.renderer.add(FlashMediaElementMdashVideoRenderer);

	var FlashMediaElementAudioRenderer = {
		name: 'flash_audio',
		options: {
			prefix: 'flash_audio',
			filename: 'mediaelement-flash-audio.swf'
		},

		canPlayType: function canPlayType(type) {
			return ~['audio/mp3'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create
	};
	_renderer.renderer.add(FlashMediaElementAudioRenderer);

	var FlashMediaElementAudioOggRenderer = {
		name: 'flash_audio_ogg',
		options: {
			prefix: 'flash_audio_ogg',
			filename: 'mediaelement-flash-audio-ogg.swf'
		},

		canPlayType: function canPlayType(type) {
			return ~['audio/ogg', 'audio/oga', 'audio/ogv'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create
	};
	_renderer.renderer.add(FlashMediaElementAudioOggRenderer);
}

},{"2":2,"25":25,"27":27,"28":28,"3":3,"5":5,"7":7,"8":8}],21:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(8);

var _general = _dereq_(27);

var _constants = _dereq_(25);

var _media = _dereq_(28);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeFlv = {

	promise: null,

	load: function load(settings) {
		if (typeof flvjs !== 'undefined') {
			NativeFlv.promise = new Promise(function (resolve) {
				resolve();
			}).then(function () {
				NativeFlv._createPlayer(settings);
			});
		} else {
			settings.options.path = typeof settings.options.path === 'string' ? settings.options.path : 'https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.3/flv.min.js';

			NativeFlv.promise = NativeFlv.promise || (0, _dom.loadScript)(settings.options.path);
			NativeFlv.promise.then(function () {
				NativeFlv._createPlayer(settings);
			});
		}

		return NativeFlv.promise;
	},

	_createPlayer: function _createPlayer(settings) {
		flvjs.LoggingControl.enableDebug = settings.options.debug;
		flvjs.LoggingControl.enableVerbose = settings.options.debug;
		var player = flvjs.createPlayer(settings.options, settings.configs);
		_window2.default['__ready__' + settings.id](player);
		return player;
	}
};

var FlvNativeRenderer = {
	name: 'native_flv',
	options: {
		prefix: 'native_flv',
		flv: {
			path: 'https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.3/flv.min.js',

			cors: true,
			debug: false
		}
	},

	canPlayType: function canPlayType(type) {
		return _constants.HAS_MSE && ['video/x-flv', 'video/flv'].indexOf(type.toLowerCase()) > -1;
	},

	create: function create(mediaElement, options, mediaFiles) {

		var originalNode = mediaElement.originalNode,
		    id = mediaElement.id + '_' + options.prefix;

		var node = null,
		    flvPlayer = null;

		node = originalNode.cloneNode(true);
		options = Object.assign(options, mediaElement.options);

		var props = _mejs2.default.html5media.properties,
		    events = _mejs2.default.html5media.events.concat(['click', 'mouseover', 'mouseout']),
		    attachNativeEvents = function attachNativeEvents(e) {
			if (e.type !== 'error') {
				var _event = (0, _general.createEvent)(e.type, mediaElement);
				mediaElement.dispatchEvent(_event);
			}
		},
		    assignGettersSetters = function assignGettersSetters(propName) {
			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			node['get' + capName] = function () {
				return flvPlayer !== null ? node[propName] : null;
			};

			node['set' + capName] = function (value) {
				if (_mejs2.default.html5media.readOnlyProperties.indexOf(propName) === -1) {
					if (propName === 'src') {
						node[propName] = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.src ? value.src : value;
						if (flvPlayer !== null) {
							var _flvOptions = {};
							_flvOptions.type = 'flv';
							_flvOptions.url = value;
							_flvOptions.cors = options.flv.cors;
							_flvOptions.debug = options.flv.debug;
							_flvOptions.path = options.flv.path;
							var _flvConfigs = options.flv.configs;

							flvPlayer.destroy();
							for (var i = 0, total = events.length; i < total; i++) {
								node.removeEventListener(events[i], attachNativeEvents);
							}
							flvPlayer = NativeFlv._createPlayer({
								options: _flvOptions,
								configs: _flvConfigs,
								id: id
							});
							flvPlayer.attachMediaElement(node);
							flvPlayer.load();
						}
					} else {
						node[propName] = value;
					}
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		_window2.default['__ready__' + id] = function (_flvPlayer) {
			mediaElement.flvPlayer = flvPlayer = _flvPlayer;

			var flvEvents = flvjs.Events,
			    assignEvents = function assignEvents(eventName) {
				if (eventName === 'loadedmetadata') {
					flvPlayer.unload();
					flvPlayer.detachMediaElement();
					flvPlayer.attachMediaElement(node);
					flvPlayer.load();
				}

				node.addEventListener(eventName, attachNativeEvents);
			};

			for (var _i = 0, _total = events.length; _i < _total; _i++) {
				assignEvents(events[_i]);
			}

			var assignFlvEvents = function assignFlvEvents(name, data) {
				if (name === 'error') {
					var message = data[0] + ': ' + data[1] + ' ' + data[2].msg;
					mediaElement.generateError(message, node.src);
				} else {
					var _event2 = (0, _general.createEvent)(name, mediaElement);
					_event2.data = data;
					mediaElement.dispatchEvent(_event2);
				}
			};

			var _loop = function _loop(eventType) {
				if (flvEvents.hasOwnProperty(eventType)) {
					flvPlayer.on(flvEvents[eventType], function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return assignFlvEvents(flvEvents[eventType], args);
					});
				}
			};

			for (var eventType in flvEvents) {
				_loop(eventType);
			}
		};

		if (mediaFiles && mediaFiles.length > 0) {
			for (var _i2 = 0, _total2 = mediaFiles.length; _i2 < _total2; _i2++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[_i2].type)) {
					node.setAttribute('src', mediaFiles[_i2].src);
					break;
				}
			}
		}

		node.setAttribute('id', id);

		originalNode.parentNode.insertBefore(node, originalNode);
		originalNode.autoplay = false;
		originalNode.style.display = 'none';

		var flvOptions = {};
		flvOptions.type = 'flv';
		flvOptions.url = node.src;
		flvOptions.cors = options.flv.cors;
		flvOptions.debug = options.flv.debug;
		flvOptions.path = options.flv.path;
		var flvConfigs = options.flv.configs;

		node.setSize = function (width, height) {
			node.style.width = width + 'px';
			node.style.height = height + 'px';
			return node;
		};

		node.hide = function () {
			if (flvPlayer !== null) {
				flvPlayer.pause();
			}
			node.style.display = 'none';
			return node;
		};

		node.show = function () {
			node.style.display = '';
			return node;
		};

		node.destroy = function () {
			if (flvPlayer !== null) {
				flvPlayer.destroy();
			}
		};

		var event = (0, _general.createEvent)('rendererready', node);
		mediaElement.dispatchEvent(event);

		mediaElement.promises.push(NativeFlv.load({
			options: flvOptions,
			configs: flvConfigs,
			id: id
		}));

		return node;
	}
};

_media.typeChecks.push(function (url) {
	return ~url.toLowerCase().indexOf('.flv') ? 'video/flv' : null;
});

_renderer.renderer.add(FlvNativeRenderer);

},{"25":25,"26":26,"27":27,"28":28,"3":3,"7":7,"8":8}],22:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(8);

var _general = _dereq_(27);

var _constants = _dereq_(25);

var _media = _dereq_(28);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeHls = {

	promise: null,

	load: function load(settings) {
		if (typeof Hls !== 'undefined') {
			NativeHls.promise = new Promise(function (resolve) {
				resolve();
			}).then(function () {
				NativeHls._createPlayer(settings);
			});
		} else {
			settings.options.path = typeof settings.options.path === 'string' ? settings.options.path : 'https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.4/hls.min.js';

			NativeHls.promise = NativeHls.promise || (0, _dom.loadScript)(settings.options.path);
			NativeHls.promise.then(function () {
				NativeHls._createPlayer(settings);
			});
		}

		return NativeHls.promise;
	},

	_createPlayer: function _createPlayer(settings) {
		var player = new Hls(settings.options);
		_window2.default['__ready__' + settings.id](player);
		return player;
	}
};

var HlsNativeRenderer = {
	name: 'native_hls',
	options: {
		prefix: 'native_hls',
		hls: {
			path: 'https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.4/hls.min.js',

			autoStartLoad: false,
			debug: false
		}
	},

	canPlayType: function canPlayType(type) {
		return _constants.HAS_MSE && ['application/x-mpegurl', 'application/vnd.apple.mpegurl', 'audio/mpegurl', 'audio/hls', 'video/hls'].indexOf(type.toLowerCase()) > -1;
	},

	create: function create(mediaElement, options, mediaFiles) {

		var originalNode = mediaElement.originalNode,
		    id = mediaElement.id + '_' + options.prefix,
		    preload = originalNode.getAttribute('preload'),
		    autoplay = originalNode.autoplay;

		var hlsPlayer = null,
		    node = null,
		    index = 0,
		    total = mediaFiles.length;

		node = originalNode.cloneNode(true);
		options = Object.assign(options, mediaElement.options);
		options.hls.autoStartLoad = preload && preload !== 'none' || autoplay;

		var props = _mejs2.default.html5media.properties,
		    events = _mejs2.default.html5media.events.concat(['click', 'mouseover', 'mouseout']),
		    attachNativeEvents = function attachNativeEvents(e) {
			if (e.type !== 'error') {
				var _event = (0, _general.createEvent)(e.type, mediaElement);
				mediaElement.dispatchEvent(_event);
			}
		},
		    assignGettersSetters = function assignGettersSetters(propName) {
			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			node['get' + capName] = function () {
				return hlsPlayer !== null ? node[propName] : null;
			};

			node['set' + capName] = function (value) {
				if (_mejs2.default.html5media.readOnlyProperties.indexOf(propName) === -1) {
					if (propName === 'src') {
						node[propName] = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.src ? value.src : value;
						if (hlsPlayer !== null) {
							hlsPlayer.destroy();
							for (var i = 0, _total = events.length; i < _total; i++) {
								node.removeEventListener(events[i], attachNativeEvents);
							}
							hlsPlayer = NativeHls._createPlayer({
								options: options.hls,
								id: id
							});
							hlsPlayer.loadSource(value);
							hlsPlayer.attachMedia(node);
						}
					} else {
						node[propName] = value;
					}
				}
			};
		};

		for (var i = 0, _total2 = props.length; i < _total2; i++) {
			assignGettersSetters(props[i]);
		}

		_window2.default['__ready__' + id] = function (_hlsPlayer) {
			mediaElement.hlsPlayer = hlsPlayer = _hlsPlayer;
			var hlsEvents = Hls.Events,
			    assignEvents = function assignEvents(eventName) {
				if (eventName === 'loadedmetadata') {
					var url = mediaElement.originalNode.src;
					hlsPlayer.detachMedia();
					hlsPlayer.loadSource(url);
					hlsPlayer.attachMedia(node);
				}

				node.addEventListener(eventName, attachNativeEvents);
			};

			for (var _i = 0, _total3 = events.length; _i < _total3; _i++) {
				assignEvents(events[_i]);
			}

			var recoverDecodingErrorDate = void 0,
			    recoverSwapAudioCodecDate = void 0;
			var assignHlsEvents = function assignHlsEvents(name, data) {
				if (name === 'hlsError') {
					console.warn(data);
					data = data[1];

					if (data.fatal) {
						switch (data.type) {
							case 'mediaError':
								var now = new Date().getTime();
								if (!recoverDecodingErrorDate || now - recoverDecodingErrorDate > 3000) {
									recoverDecodingErrorDate = new Date().getTime();
									hlsPlayer.recoverMediaError();
								} else if (!recoverSwapAudioCodecDate || now - recoverSwapAudioCodecDate > 3000) {
									recoverSwapAudioCodecDate = new Date().getTime();
									console.warn('Attempting to swap Audio Codec and recover from media error');
									hlsPlayer.swapAudioCodec();
									hlsPlayer.recoverMediaError();
								} else {
									var message = 'Cannot recover, last media error recovery failed';
									mediaElement.generateError(message, node.src);
									console.error(message);
								}
								break;
							case 'networkError':
								if (data.details === 'manifestLoadError') {
									if (index < total && mediaFiles[index + 1] !== undefined) {
										node.setSrc(mediaFiles[index++].src);
										node.load();
										node.play();
									} else {
										var _message = 'Network error';
										mediaElement.generateError(_message, mediaFiles);
										console.error(_message);
									}
								} else {
									var _message2 = 'Network error';
									mediaElement.generateError(_message2, mediaFiles);
									console.error(_message2);
								}
								break;
							default:
								hlsPlayer.destroy();
								break;
						}
					}
				} else {
					var _event2 = (0, _general.createEvent)(name, mediaElement);
					_event2.data = data;
					mediaElement.dispatchEvent(_event2);
				}
			};

			var _loop = function _loop(eventType) {
				if (hlsEvents.hasOwnProperty(eventType)) {
					hlsPlayer.on(hlsEvents[eventType], function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return assignHlsEvents(hlsEvents[eventType], args);
					});
				}
			};

			for (var eventType in hlsEvents) {
				_loop(eventType);
			}
		};

		if (total > 0) {
			for (; index < total; index++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[index].type)) {
					node.setAttribute('src', mediaFiles[index].src);
					break;
				}
			}
		}

		if (preload !== 'auto' && !autoplay) {
			node.addEventListener('play', function () {
				if (hlsPlayer !== null) {
					hlsPlayer.startLoad();
				}
			});

			node.addEventListener('pause', function () {
				if (hlsPlayer !== null) {
					hlsPlayer.stopLoad();
				}
			});
		}

		node.setAttribute('id', id);

		originalNode.parentNode.insertBefore(node, originalNode);
		originalNode.autoplay = false;
		originalNode.style.display = 'none';

		node.setSize = function (width, height) {
			node.style.width = width + 'px';
			node.style.height = height + 'px';
			return node;
		};

		node.hide = function () {
			node.pause();
			node.style.display = 'none';
			return node;
		};

		node.show = function () {
			node.style.display = '';
			return node;
		};

		node.destroy = function () {
			if (hlsPlayer !== null) {
				hlsPlayer.stopLoad();
				hlsPlayer.destroy();
			}
		};

		var event = (0, _general.createEvent)('rendererready', node);
		mediaElement.dispatchEvent(event);

		mediaElement.promises.push(NativeHls.load({
			options: options.hls,
			id: id
		}));

		return node;
	}
};

_media.typeChecks.push(function (url) {
	return ~url.toLowerCase().indexOf('.m3u8') ? 'application/x-mpegURL' : null;
});

_renderer.renderer.add(HlsNativeRenderer);

},{"25":25,"26":26,"27":27,"28":28,"3":3,"7":7,"8":8}],23:[function(_dereq_,module,exports){
'use strict';

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(8);

var _general = _dereq_(27);

var _constants = _dereq_(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HtmlMediaElement = {
	name: 'html5',
	options: {
		prefix: 'html5'
	},

	canPlayType: function canPlayType(type) {

		var mediaElement = _document2.default.createElement('video');

		if (_constants.IS_ANDROID && /\/mp(3|4)$/i.test(type) || ~['application/x-mpegurl', 'vnd.apple.mpegurl', 'audio/mpegurl', 'audio/hls', 'video/hls'].indexOf(type.toLowerCase()) && _constants.SUPPORTS_NATIVE_HLS) {
			return 'yes';
		} else if (mediaElement.canPlayType) {
			return mediaElement.canPlayType(type.toLowerCase()).replace(/no/, '');
		} else {
			return '';
		}
	},

	create: function create(mediaElement, options, mediaFiles) {

		var id = mediaElement.id + '_' + options.prefix;
		var isActive = false;

		var node = null;

		if (mediaElement.originalNode === undefined || mediaElement.originalNode === null) {
			node = _document2.default.createElement('audio');
			mediaElement.appendChild(node);
		} else {
			node = mediaElement.originalNode;
		}

		node.setAttribute('id', id);

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {
			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			node['get' + capName] = function () {
				return node[propName];
			};

			node['set' + capName] = function (value) {
				if (_mejs2.default.html5media.readOnlyProperties.indexOf(propName) === -1) {
					node[propName] = value;
				}
			};
		};

		for (var i = 0, _total = props.length; i < _total; i++) {
			assignGettersSetters(props[i]);
		}

		var events = _mejs2.default.html5media.events.concat(['click', 'mouseover', 'mouseout']),
		    assignEvents = function assignEvents(eventName) {
			node.addEventListener(eventName, function (e) {
				if (isActive) {
					var _event = (0, _general.createEvent)(e.type, e.target);
					mediaElement.dispatchEvent(_event);
				}
			});
		};

		for (var _i = 0, _total2 = events.length; _i < _total2; _i++) {
			assignEvents(events[_i]);
		}

		node.setSize = function (width, height) {
			node.style.width = width + 'px';
			node.style.height = height + 'px';
			return node;
		};

		node.hide = function () {
			isActive = false;
			node.style.display = 'none';

			return node;
		};

		node.show = function () {
			isActive = true;
			node.style.display = '';

			return node;
		};

		var index = 0,
		    total = mediaFiles.length;
		if (total > 0) {
			for (; index < total; index++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[index].type)) {
					node.setAttribute('src', mediaFiles[index].src);
					break;
				}
			}
		}

		node.addEventListener('error', function (e) {
			if (e.target.error.code === 4 && isActive) {
				if (index < total && mediaFiles[index + 1] !== undefined) {
					node.src = mediaFiles[index++].src;
					node.load();
					node.play();
				} else {
					mediaElement.generateError('Media error: Format(s) not supported or source(s) not found', mediaFiles);
				}
			}
		});

		var event = (0, _general.createEvent)('rendererready', node);
		mediaElement.dispatchEvent(event);

		return node;
	}
};

_window2.default.HtmlMediaElement = _mejs2.default.HtmlMediaElement = HtmlMediaElement;

_renderer.renderer.add(HtmlMediaElement);

},{"2":2,"25":25,"27":27,"3":3,"7":7,"8":8}],24:[function(_dereq_,module,exports){
'use strict';

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(8);

var _general = _dereq_(27);

var _media = _dereq_(28);

var _dom = _dereq_(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YouTubeApi = {
	isIframeStarted: false,

	isIframeLoaded: false,

	iframeQueue: [],

	enqueueIframe: function enqueueIframe(settings) {
		YouTubeApi.isLoaded = typeof YT !== 'undefined' && YT.loaded;

		if (YouTubeApi.isLoaded) {
			YouTubeApi.createIframe(settings);
		} else {
			YouTubeApi.loadIframeApi();
			YouTubeApi.iframeQueue.push(settings);
		}
	},

	loadIframeApi: function loadIframeApi() {
		if (!YouTubeApi.isIframeStarted) {
			(0, _dom.loadScript)('https://www.youtube.com/player_api');
			YouTubeApi.isIframeStarted = true;
		}
	},

	iFrameReady: function iFrameReady() {

		YouTubeApi.isLoaded = true;
		YouTubeApi.isIframeLoaded = true;

		while (YouTubeApi.iframeQueue.length > 0) {
			var settings = YouTubeApi.iframeQueue.pop();
			YouTubeApi.createIframe(settings);
		}
	},

	createIframe: function createIframe(settings) {
		return new YT.Player(settings.containerId, settings);
	},

	getYouTubeId: function getYouTubeId(url) {

		var youTubeId = '';

		if (url.indexOf('?') > 0) {
			youTubeId = YouTubeApi.getYouTubeIdFromParam(url);

			if (youTubeId === '') {
				youTubeId = YouTubeApi.getYouTubeIdFromUrl(url);
			}
		} else {
			youTubeId = YouTubeApi.getYouTubeIdFromUrl(url);
		}

		var id = youTubeId.substring(youTubeId.lastIndexOf('/') + 1);
		youTubeId = id.split('?');
		return youTubeId[0];
	},

	getYouTubeIdFromParam: function getYouTubeIdFromParam(url) {

		if (url === undefined || url === null || !url.trim().length) {
			return null;
		}

		var parts = url.split('?'),
		    parameters = parts[1].split('&');

		var youTubeId = '';

		for (var i = 0, total = parameters.length; i < total; i++) {
			var paramParts = parameters[i].split('=');
			if (paramParts[0] === 'v') {
				youTubeId = paramParts[1];
				break;
			}
		}

		return youTubeId;
	},

	getYouTubeIdFromUrl: function getYouTubeIdFromUrl(url) {

		if (url === undefined || url === null || !url.trim().length) {
			return null;
		}

		var parts = url.split('?');
		url = parts[0];
		return url.substring(url.lastIndexOf('/') + 1);
	},

	getYouTubeNoCookieUrl: function getYouTubeNoCookieUrl(url) {
		if (url === undefined || url === null || !url.trim().length || url.indexOf('//www.youtube') === -1) {
			return url;
		}

		var parts = url.split('/');
		parts[2] = parts[2].replace('.com', '-nocookie.com');
		return parts.join('/');
	}
};

var YouTubeIframeRenderer = {
	name: 'youtube_iframe',

	options: {
		prefix: 'youtube_iframe',

		youtube: {
			autoplay: 0,
			controls: 0,
			disablekb: 1,
			end: 0,
			loop: 0,
			modestbranding: 0,
			playsinline: 0,
			rel: 0,
			showinfo: 0,
			start: 0,
			iv_load_policy: 3,

			nocookie: false,

			imageQuality: null
		}
	},

	canPlayType: function canPlayType(type) {
		return ~['video/youtube', 'video/x-youtube'].indexOf(type.toLowerCase());
	},

	create: function create(mediaElement, options, mediaFiles) {

		var youtube = {},
		    apiStack = [],
		    readyState = 4;

		var youTubeApi = null,
		    paused = true,
		    ended = false,
		    youTubeIframe = null,
		    volume = 1;

		youtube.options = options;
		youtube.id = mediaElement.id + '_' + options.prefix;
		youtube.mediaElement = mediaElement;

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {

			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			youtube['get' + capName] = function () {
				if (youTubeApi !== null) {
					var value = null;

					switch (propName) {
						case 'currentTime':
							return youTubeApi.getCurrentTime();
						case 'duration':
							return youTubeApi.getDuration();
						case 'volume':
							volume = youTubeApi.getVolume() / 100;
							return volume;
						case 'paused':
							return paused;
						case 'ended':
							return ended;
						case 'muted':
							return youTubeApi.isMuted();
						case 'buffered':
							var percentLoaded = youTubeApi.getVideoLoadedFraction(),
							    duration = youTubeApi.getDuration();
							return {
								start: function start() {
									return 0;
								},
								end: function end() {
									return percentLoaded * duration;
								},
								length: 1
							};
						case 'src':
							return youTubeApi.getVideoUrl();
						case 'readyState':
							return readyState;
					}

					return value;
				} else {
					return null;
				}
			};

			youtube['set' + capName] = function (value) {
				if (youTubeApi !== null) {
					switch (propName) {
						case 'src':
							var url = typeof value === 'string' ? value : value[0].src,
							    _videoId = YouTubeApi.getYouTubeId(url);

							if (mediaElement.originalNode.autoplay) {
								youTubeApi.loadVideoById(_videoId);
							} else {
								youTubeApi.cueVideoById(_videoId);
							}
							break;
						case 'currentTime':
							youTubeApi.seekTo(value);
							break;
						case 'muted':
							if (value) {
								youTubeApi.mute();
							} else {
								youTubeApi.unMute();
							}
							setTimeout(function () {
								var event = (0, _general.createEvent)('volumechange', youtube);
								mediaElement.dispatchEvent(event);
							}, 50);
							break;
						case 'volume':
							volume = value;
							youTubeApi.setVolume(value * 100);
							setTimeout(function () {
								var event = (0, _general.createEvent)('volumechange', youtube);
								mediaElement.dispatchEvent(event);
							}, 50);
							break;
						case 'readyState':
							var event = (0, _general.createEvent)('canplay', youtube);
							mediaElement.dispatchEvent(event);
							break;
						default:
							
							break;
					}
				} else {
					apiStack.push({ type: 'set', propName: propName, value: value });
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		var methods = _mejs2.default.html5media.methods,
		    assignMethods = function assignMethods(methodName) {
			youtube[methodName] = function () {
				if (youTubeApi !== null) {
					switch (methodName) {
						case 'play':
							paused = false;
							return youTubeApi.playVideo();
						case 'pause':
							paused = true;
							return youTubeApi.pauseVideo();
						case 'load':
							return null;
					}
				} else {
					apiStack.push({ type: 'call', methodName: methodName });
				}
			};
		};

		for (var _i = 0, _total = methods.length; _i < _total; _i++) {
			assignMethods(methods[_i]);
		}

		var youtubeContainer = _document2.default.createElement('div');
		youtubeContainer.id = youtube.id;

		if (youtube.options.youtube.nocookie) {
			mediaElement.originalNode.src = YouTubeApi.getYouTubeNoCookieUrl(mediaFiles[0].src);
		}

		mediaElement.originalNode.parentNode.insertBefore(youtubeContainer, mediaElement.originalNode);
		mediaElement.originalNode.style.display = 'none';

		var isAudio = mediaElement.originalNode.tagName.toLowerCase() === 'audio',
		    height = isAudio ? '1' : mediaElement.originalNode.height,
		    width = isAudio ? '1' : mediaElement.originalNode.width,
		    videoId = YouTubeApi.getYouTubeId(mediaFiles[0].src),
		    youtubeSettings = {
			id: youtube.id,
			containerId: youtubeContainer.id,
			videoId: videoId,
			height: height,
			width: width,
			playerVars: Object.assign({
				controls: 0,
				rel: 0,
				disablekb: 1,
				showinfo: 0,
				modestbranding: 0,
				html5: 1,
				iv_load_policy: 3
			}, youtube.options.youtube),
			origin: _window2.default.location.host,
			events: {
				onReady: function onReady(e) {
					mediaElement.youTubeApi = youTubeApi = e.target;
					mediaElement.youTubeState = {
						paused: true,
						ended: false
					};

					if (apiStack.length) {
						for (var _i2 = 0, _total2 = apiStack.length; _i2 < _total2; _i2++) {

							var stackItem = apiStack[_i2];

							if (stackItem.type === 'set') {
								var propName = stackItem.propName,
								    capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

								youtube['set' + capName](stackItem.value);
							} else if (stackItem.type === 'call') {
								youtube[stackItem.methodName]();
							}
						}
					}

					youTubeIframe = youTubeApi.getIframe();

					if (mediaElement.originalNode.muted) {
						youTubeApi.mute();
					}

					var events = ['mouseover', 'mouseout'],
					    assignEvents = function assignEvents(e) {
						var newEvent = (0, _general.createEvent)(e.type, youtube);
						mediaElement.dispatchEvent(newEvent);
					};

					for (var _i3 = 0, _total3 = events.length; _i3 < _total3; _i3++) {
						youTubeIframe.addEventListener(events[_i3], assignEvents, false);
					}

					var initEvents = ['rendererready', 'loadedmetadata', 'loadeddata', 'canplay'];

					for (var _i4 = 0, _total4 = initEvents.length; _i4 < _total4; _i4++) {
						var event = (0, _general.createEvent)(initEvents[_i4], youtube);
						mediaElement.dispatchEvent(event);
					}
				},
				onStateChange: function onStateChange(e) {
					var events = [];

					switch (e.data) {
						case -1:
							events = ['loadedmetadata'];
							paused = true;
							ended = false;
							break;
						case 0:
							events = ['ended'];
							paused = false;
							ended = !youtube.options.youtube.loop;
							if (!youtube.options.youtube.loop) {
								youtube.stopInterval();
							}
							break;
						case 1:
							events = ['play', 'playing'];
							paused = false;
							ended = false;
							youtube.startInterval();
							break;
						case 2:
							events = ['pause'];
							paused = true;
							ended = false;
							youtube.stopInterval();
							break;
						case 3:
							events = ['progress'];
							ended = false;
							break;
						case 5:
							events = ['loadeddata', 'loadedmetadata', 'canplay'];
							paused = true;
							ended = false;
							break;
					}

					for (var _i5 = 0, _total5 = events.length; _i5 < _total5; _i5++) {
						var event = (0, _general.createEvent)(events[_i5], youtube);
						mediaElement.dispatchEvent(event);
					}
				},
				onError: function onError(e) {
					var event = (0, _general.createEvent)('error', youtube);
					event.data = e.data;
					mediaElement.dispatchEvent(event);
				}
			}
		};

		if (isAudio || mediaElement.originalNode.hasAttribute('playsinline')) {
			youtubeSettings.playerVars.playsinline = 1;
		}

		if (mediaElement.originalNode.controls) {
			youtubeSettings.playerVars.controls = 1;
		}
		if (mediaElement.originalNode.autoplay) {
			youtubeSettings.playerVars.autoplay = 1;
		}
		if (mediaElement.originalNode.loop) {
			youtubeSettings.playerVars.loop = 1;
		}

		YouTubeApi.enqueueIframe(youtubeSettings);

		youtube.onEvent = function (eventName, player, _youTubeState) {
			if (_youTubeState !== null && _youTubeState !== undefined) {
				mediaElement.youTubeState = _youTubeState;
			}
		};

		youtube.setSize = function (width, height) {
			if (youTubeApi !== null) {
				youTubeApi.setSize(width, height);
			}
		};
		youtube.hide = function () {
			youtube.stopInterval();
			youtube.pause();
			if (youTubeIframe) {
				youTubeIframe.style.display = 'none';
			}
		};
		youtube.show = function () {
			if (youTubeIframe) {
				youTubeIframe.style.display = '';
			}
		};
		youtube.destroy = function () {
			youTubeApi.destroy();
		};
		youtube.interval = null;

		youtube.startInterval = function () {
			youtube.interval = setInterval(function () {
				var event = (0, _general.createEvent)('timeupdate', youtube);
				mediaElement.dispatchEvent(event);
			}, 250);
		};
		youtube.stopInterval = function () {
			if (youtube.interval) {
				clearInterval(youtube.interval);
			}
		};
		youtube.getPosterUrl = function () {
			var quality = options.youtube.imageQuality,
			    resolutions = ['default', 'hqdefault', 'mqdefault', 'sddefault', 'maxresdefault'],
			    id = YouTubeApi.getYouTubeId(mediaElement.originalNode.src);
			return quality && resolutions.indexOf(quality) > -1 && id ? 'https://img.youtube.com/vi/' + id + '/' + quality + '.jpg' : '';
		};

		return youtube;
	}
};

_window2.default.onYouTubePlayerAPIReady = function () {
	YouTubeApi.iFrameReady();
};

_media.typeChecks.push(function (url) {
	return (/\/\/(www\.youtube|youtu\.?be)/i.test(url) ? 'video/x-youtube' : null
	);
});

_renderer.renderer.add(YouTubeIframeRenderer);

},{"2":2,"26":26,"27":27,"28":28,"3":3,"7":7,"8":8}],25:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.cancelFullScreen = exports.requestFullScreen = exports.isFullScreen = exports.FULLSCREEN_EVENT_NAME = exports.HAS_NATIVE_FULLSCREEN_ENABLED = exports.HAS_TRUE_NATIVE_FULLSCREEN = exports.HAS_IOS_FULLSCREEN = exports.HAS_MS_NATIVE_FULLSCREEN = exports.HAS_MOZ_NATIVE_FULLSCREEN = exports.HAS_WEBKIT_NATIVE_FULLSCREEN = exports.HAS_NATIVE_FULLSCREEN = exports.SUPPORTS_NATIVE_HLS = exports.SUPPORT_PASSIVE_EVENT = exports.SUPPORT_POINTER_EVENTS = exports.HAS_MSE = exports.IS_STOCK_ANDROID = exports.IS_SAFARI = exports.IS_FIREFOX = exports.IS_CHROME = exports.IS_EDGE = exports.IS_IE = exports.IS_ANDROID = exports.IS_IOS = exports.IS_IPOD = exports.IS_IPHONE = exports.IS_IPAD = exports.UA = exports.NAV = undefined;

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAV = exports.NAV = _window2.default.navigator;
var UA = exports.UA = NAV.userAgent.toLowerCase();
var IS_IPAD = exports.IS_IPAD = /ipad/i.test(UA) && !_window2.default.MSStream;
var IS_IPHONE = exports.IS_IPHONE = /iphone/i.test(UA) && !_window2.default.MSStream;
var IS_IPOD = exports.IS_IPOD = /ipod/i.test(UA) && !_window2.default.MSStream;
var IS_IOS = exports.IS_IOS = /ipad|iphone|ipod/i.test(UA) && !_window2.default.MSStream;
var IS_ANDROID = exports.IS_ANDROID = /android/i.test(UA);
var IS_IE = exports.IS_IE = /(trident|microsoft)/i.test(NAV.appName);
var IS_EDGE = exports.IS_EDGE = 'msLaunchUri' in NAV && !('documentMode' in _document2.default);
var IS_CHROME = exports.IS_CHROME = /chrome/i.test(UA);
var IS_FIREFOX = exports.IS_FIREFOX = /firefox/i.test(UA);
var IS_SAFARI = exports.IS_SAFARI = /safari/i.test(UA) && !IS_CHROME;
var IS_STOCK_ANDROID = exports.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(UA);
var HAS_MSE = exports.HAS_MSE = 'MediaSource' in _window2.default;
var SUPPORT_POINTER_EVENTS = exports.SUPPORT_POINTER_EVENTS = function () {
	var element = _document2.default.createElement('x'),
	    documentElement = _document2.default.documentElement,
	    getComputedStyle = _window2.default.getComputedStyle;

	if (!('pointerEvents' in element.style)) {
		return false;
	}

	element.style.pointerEvents = 'auto';
	element.style.pointerEvents = 'x';
	documentElement.appendChild(element);
	var supports = getComputedStyle && getComputedStyle(element, '').pointerEvents === 'auto';
	element.remove();
	return !!supports;
}();

var SUPPORT_PASSIVE_EVENT = exports.SUPPORT_PASSIVE_EVENT = function () {
	var supportsPassive = false;
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function get() {
				supportsPassive = true;
			}
		});
		_window2.default.addEventListener('test', null, opts);
	} catch (e) {}

	return supportsPassive;
}();

var html5Elements = ['source', 'track', 'audio', 'video'];
var video = void 0;

for (var i = 0, total = html5Elements.length; i < total; i++) {
	video = _document2.default.createElement(html5Elements[i]);
}

var SUPPORTS_NATIVE_HLS = exports.SUPPORTS_NATIVE_HLS = IS_SAFARI || IS_ANDROID && (IS_CHROME || IS_STOCK_ANDROID) || IS_IE && /edge/i.test(UA);

var hasiOSFullScreen = video.webkitEnterFullscreen !== undefined;

var hasNativeFullscreen = video.requestFullscreen !== undefined;

if (hasiOSFullScreen && /mac os x 10_5/i.test(UA)) {
	hasNativeFullscreen = false;
	hasiOSFullScreen = false;
}

var hasWebkitNativeFullScreen = video.webkitRequestFullScreen !== undefined;
var hasMozNativeFullScreen = video.mozRequestFullScreen !== undefined;
var hasMsNativeFullScreen = video.msRequestFullscreen !== undefined;
var hasTrueNativeFullScreen = hasWebkitNativeFullScreen || hasMozNativeFullScreen || hasMsNativeFullScreen;
var nativeFullScreenEnabled = hasTrueNativeFullScreen;
var fullScreenEventName = '';
var isFullScreen = void 0,
    requestFullScreen = void 0,
    cancelFullScreen = void 0;

if (hasMozNativeFullScreen) {
	nativeFullScreenEnabled = _document2.default.mozFullScreenEnabled;
} else if (hasMsNativeFullScreen) {
	nativeFullScreenEnabled = _document2.default.msFullscreenEnabled;
}

if (IS_CHROME) {
	hasiOSFullScreen = false;
}

if (hasTrueNativeFullScreen) {
	if (hasWebkitNativeFullScreen) {
		fullScreenEventName = 'webkitfullscreenchange';
	} else if (hasMozNativeFullScreen) {
		fullScreenEventName = 'mozfullscreenchange';
	} else if (hasMsNativeFullScreen) {
		fullScreenEventName = 'MSFullscreenChange';
	}

	exports.isFullScreen = isFullScreen = function isFullScreen() {
		if (hasMozNativeFullScreen) {
			return _document2.default.mozFullScreen;
		} else if (hasWebkitNativeFullScreen) {
			return _document2.default.webkitIsFullScreen;
		} else if (hasMsNativeFullScreen) {
			return _document2.default.msFullscreenElement !== null;
		}
	};

	exports.requestFullScreen = requestFullScreen = function requestFullScreen(el) {
		if (hasWebkitNativeFullScreen) {
			el.webkitRequestFullScreen();
		} else if (hasMozNativeFullScreen) {
			el.mozRequestFullScreen();
		} else if (hasMsNativeFullScreen) {
			el.msRequestFullscreen();
		}
	};

	exports.cancelFullScreen = cancelFullScreen = function cancelFullScreen() {
		if (hasWebkitNativeFullScreen) {
			_document2.default.webkitCancelFullScreen();
		} else if (hasMozNativeFullScreen) {
			_document2.default.mozCancelFullScreen();
		} else if (hasMsNativeFullScreen) {
			_document2.default.msExitFullscreen();
		}
	};
}

var HAS_NATIVE_FULLSCREEN = exports.HAS_NATIVE_FULLSCREEN = hasNativeFullscreen;
var HAS_WEBKIT_NATIVE_FULLSCREEN = exports.HAS_WEBKIT_NATIVE_FULLSCREEN = hasWebkitNativeFullScreen;
var HAS_MOZ_NATIVE_FULLSCREEN = exports.HAS_MOZ_NATIVE_FULLSCREEN = hasMozNativeFullScreen;
var HAS_MS_NATIVE_FULLSCREEN = exports.HAS_MS_NATIVE_FULLSCREEN = hasMsNativeFullScreen;
var HAS_IOS_FULLSCREEN = exports.HAS_IOS_FULLSCREEN = hasiOSFullScreen;
var HAS_TRUE_NATIVE_FULLSCREEN = exports.HAS_TRUE_NATIVE_FULLSCREEN = hasTrueNativeFullScreen;
var HAS_NATIVE_FULLSCREEN_ENABLED = exports.HAS_NATIVE_FULLSCREEN_ENABLED = nativeFullScreenEnabled;
var FULLSCREEN_EVENT_NAME = exports.FULLSCREEN_EVENT_NAME = fullScreenEventName;
exports.isFullScreen = isFullScreen;
exports.requestFullScreen = requestFullScreen;
exports.cancelFullScreen = cancelFullScreen;


_mejs2.default.Features = _mejs2.default.Features || {};
_mejs2.default.Features.isiPad = IS_IPAD;
_mejs2.default.Features.isiPod = IS_IPOD;
_mejs2.default.Features.isiPhone = IS_IPHONE;
_mejs2.default.Features.isiOS = _mejs2.default.Features.isiPhone || _mejs2.default.Features.isiPad;
_mejs2.default.Features.isAndroid = IS_ANDROID;
_mejs2.default.Features.isIE = IS_IE;
_mejs2.default.Features.isEdge = IS_EDGE;
_mejs2.default.Features.isChrome = IS_CHROME;
_mejs2.default.Features.isFirefox = IS_FIREFOX;
_mejs2.default.Features.isSafari = IS_SAFARI;
_mejs2.default.Features.isStockAndroid = IS_STOCK_ANDROID;
_mejs2.default.Features.hasMSE = HAS_MSE;
_mejs2.default.Features.supportsNativeHLS = SUPPORTS_NATIVE_HLS;
_mejs2.default.Features.supportsPointerEvents = SUPPORT_POINTER_EVENTS;
_mejs2.default.Features.supportsPassiveEvent = SUPPORT_PASSIVE_EVENT;
_mejs2.default.Features.hasiOSFullScreen = HAS_IOS_FULLSCREEN;
_mejs2.default.Features.hasNativeFullscreen = HAS_NATIVE_FULLSCREEN;
_mejs2.default.Features.hasWebkitNativeFullScreen = HAS_WEBKIT_NATIVE_FULLSCREEN;
_mejs2.default.Features.hasMozNativeFullScreen = HAS_MOZ_NATIVE_FULLSCREEN;
_mejs2.default.Features.hasMsNativeFullScreen = HAS_MS_NATIVE_FULLSCREEN;
_mejs2.default.Features.hasTrueNativeFullScreen = HAS_TRUE_NATIVE_FULLSCREEN;
_mejs2.default.Features.nativeFullScreenEnabled = HAS_NATIVE_FULLSCREEN_ENABLED;
_mejs2.default.Features.fullScreenEventName = FULLSCREEN_EVENT_NAME;
_mejs2.default.Features.isFullScreen = isFullScreen;
_mejs2.default.Features.requestFullScreen = requestFullScreen;
_mejs2.default.Features.cancelFullScreen = cancelFullScreen;

},{"2":2,"3":3,"7":7}],26:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeClass = exports.addClass = exports.hasClass = undefined;
exports.loadScript = loadScript;
exports.offset = offset;
exports.toggleClass = toggleClass;
exports.fadeOut = fadeOut;
exports.fadeIn = fadeIn;
exports.siblings = siblings;
exports.visible = visible;
exports.ajax = ajax;

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadScript(url) {
	return new Promise(function (resolve, reject) {
		var script = _document2.default.createElement('script');
		script.src = url;
		script.async = true;
		script.onload = function () {
			script.remove();
			resolve();
		};
		script.onerror = function () {
			script.remove();
			reject();
		};
		_document2.default.head.appendChild(script);
	});
}

function offset(el) {
	var rect = el.getBoundingClientRect(),
	    scrollLeft = _window2.default.pageXOffset || _document2.default.documentElement.scrollLeft,
	    scrollTop = _window2.default.pageYOffset || _document2.default.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

var hasClassMethod = void 0,
    addClassMethod = void 0,
    removeClassMethod = void 0;

if ('classList' in _document2.default.documentElement) {
	hasClassMethod = function hasClassMethod(el, className) {
		return el.classList !== undefined && el.classList.contains(className);
	};
	addClassMethod = function addClassMethod(el, className) {
		return el.classList.add(className);
	};
	removeClassMethod = function removeClassMethod(el, className) {
		return el.classList.remove(className);
	};
} else {
	hasClassMethod = function hasClassMethod(el, className) {
		return new RegExp('\\b' + className + '\\b').test(el.className);
	};
	addClassMethod = function addClassMethod(el, className) {
		if (!hasClass(el, className)) {
			el.className += ' ' + className;
		}
	};
	removeClassMethod = function removeClassMethod(el, className) {
		el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
	};
}

var hasClass = exports.hasClass = hasClassMethod;
var addClass = exports.addClass = addClassMethod;
var removeClass = exports.removeClass = removeClassMethod;

function toggleClass(el, className) {
	hasClass(el, className) ? removeClass(el, className) : addClass(el, className);
}

function fadeOut(el) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
	var callback = arguments[2];

	if (!el.style.opacity) {
		el.style.opacity = 1;
	}

	var start = null;
	_window2.default.requestAnimationFrame(function animate(timestamp) {
		start = start || timestamp;
		var progress = timestamp - start;
		var opacity = parseFloat(1 - progress / duration, 2);
		el.style.opacity = opacity < 0 ? 0 : opacity;
		if (progress > duration) {
			if (callback && typeof callback === 'function') {
				callback();
			}
		} else {
			_window2.default.requestAnimationFrame(animate);
		}
	});
}

function fadeIn(el) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
	var callback = arguments[2];

	if (!el.style.opacity) {
		el.style.opacity = 0;
	}

	var start = null;
	_window2.default.requestAnimationFrame(function animate(timestamp) {
		start = start || timestamp;
		var progress = timestamp - start;
		var opacity = parseFloat(progress / duration, 2);
		el.style.opacity = opacity > 1 ? 1 : opacity;
		if (progress > duration) {
			if (callback && typeof callback === 'function') {
				callback();
			}
		} else {
			_window2.default.requestAnimationFrame(animate);
		}
	});
}

function siblings(el, filter) {
	var siblings = [];
	el = el.parentNode.firstChild;
	do {
		if (!filter || filter(el)) {
			siblings.push(el);
		}
	} while (el = el.nextSibling);
	return siblings;
}

function visible(elem) {
	if (elem.getClientRects !== undefined && elem.getClientRects === 'function') {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	}
	return !!(elem.offsetWidth || elem.offsetHeight);
}

function ajax(url, dataType, success, error) {
	var xhr = _window2.default.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

	var type = 'application/x-www-form-urlencoded; charset=UTF-8',
	    completed = false,
	    accept = '*/'.concat('*');

	switch (dataType) {
		case 'text':
			type = 'text/plain';
			break;
		case 'json':
			type = 'application/json, text/javascript';
			break;
		case 'html':
			type = 'text/html';
			break;
		case 'xml':
			type = 'application/xml, text/xml';
			break;
	}

	if (type !== 'application/x-www-form-urlencoded') {
		accept = type + ', */*; q=0.01';
	}

	if (xhr) {
		xhr.open('GET', url, true);
		xhr.setRequestHeader('Accept', accept);
		xhr.onreadystatechange = function () {
			if (completed) {
				return;
			}

			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					completed = true;
					var data = void 0;
					switch (dataType) {
						case 'json':
							data = JSON.parse(xhr.responseText);
							break;
						case 'xml':
							data = xhr.responseXML;
							break;
						default:
							data = xhr.responseText;
							break;
					}
					success(data);
				} else if (typeof error === 'function') {
					error(xhr.status);
				}
			}
		};

		xhr.send();
	}
}

_mejs2.default.Utils = _mejs2.default.Utils || {};
_mejs2.default.Utils.offset = offset;
_mejs2.default.Utils.hasClass = hasClass;
_mejs2.default.Utils.addClass = addClass;
_mejs2.default.Utils.removeClass = removeClass;
_mejs2.default.Utils.toggleClass = toggleClass;
_mejs2.default.Utils.fadeIn = fadeIn;
_mejs2.default.Utils.fadeOut = fadeOut;
_mejs2.default.Utils.siblings = siblings;
_mejs2.default.Utils.visible = visible;
_mejs2.default.Utils.ajax = ajax;
_mejs2.default.Utils.loadScript = loadScript;

},{"2":2,"3":3,"7":7}],27:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.escapeHTML = escapeHTML;
exports.debounce = debounce;
exports.isObjectEmpty = isObjectEmpty;
exports.splitEvents = splitEvents;
exports.createEvent = createEvent;
exports.isNodeAfter = isNodeAfter;
exports.isString = isString;

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escapeHTML(input) {

	if (typeof input !== 'string') {
		throw new Error('Argument passed must be a string');
	}

	var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;'
	};

	return input.replace(/[&<>"]/g, function (c) {
		return map[c];
	});
}

function debounce(func, wait) {
	var _this = this,
	    _arguments = arguments;

	var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


	if (typeof func !== 'function') {
		throw new Error('First argument must be a function');
	}

	if (typeof wait !== 'number') {
		throw new Error('Second argument must be a numeric value');
	}

	var timeout = void 0;
	return function () {
		var context = _this,
		    args = _arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			func.apply(context, args);
		}
	};
}

function isObjectEmpty(instance) {
	return Object.getOwnPropertyNames(instance).length <= 0;
}

function splitEvents(events, id) {
	var rwindow = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;

	var ret = { d: [], w: [] };
	(events || '').split(' ').forEach(function (v) {
		var eventName = '' + v + (id ? '.' + id : '');

		if (eventName.startsWith('.')) {
			ret.d.push(eventName);
			ret.w.push(eventName);
		} else {
			ret[rwindow.test(v) ? 'w' : 'd'].push(eventName);
		}
	});

	ret.d = ret.d.join(' ');
	ret.w = ret.w.join(' ');
	return ret;
}

function createEvent(eventName, target) {

	if (typeof eventName !== 'string') {
		throw new Error('Event name must be a string');
	}

	var eventFrags = eventName.match(/([a-z]+\.([a-z]+))/i),
	    detail = {
		target: target
	};

	if (eventFrags !== null) {
		eventName = eventFrags[1];
		detail.namespace = eventFrags[2];
	}

	return new window.CustomEvent(eventName, {
		detail: detail
	});
}

function isNodeAfter(sourceNode, targetNode) {

	return !!(sourceNode && targetNode && sourceNode.compareDocumentPosition(targetNode) & 2);
}

function isString(value) {
	return typeof value === 'string';
}

_mejs2.default.Utils = _mejs2.default.Utils || {};
_mejs2.default.Utils.escapeHTML = escapeHTML;
_mejs2.default.Utils.debounce = debounce;
_mejs2.default.Utils.isObjectEmpty = isObjectEmpty;
_mejs2.default.Utils.splitEvents = splitEvents;
_mejs2.default.Utils.createEvent = createEvent;
_mejs2.default.Utils.isNodeAfter = isNodeAfter;
_mejs2.default.Utils.isString = isString;

},{"7":7}],28:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.typeChecks = undefined;
exports.absolutizeUrl = absolutizeUrl;
exports.formatType = formatType;
exports.getMimeFromType = getMimeFromType;
exports.getTypeFromFile = getTypeFromFile;
exports.getExtension = getExtension;
exports.normalizeExtension = normalizeExtension;

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

var _general = _dereq_(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeChecks = exports.typeChecks = [];

function absolutizeUrl(url) {

	if (typeof url !== 'string') {
		throw new Error('`url` argument must be a string');
	}

	var el = document.createElement('div');
	el.innerHTML = '<a href="' + (0, _general.escapeHTML)(url) + '">x</a>';
	return el.firstChild.href;
}

function formatType(url) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	return url && !type ? getTypeFromFile(url) : type;
}

function getMimeFromType(type) {

	if (typeof type !== 'string') {
		throw new Error('`type` argument must be a string');
	}

	return type && type.indexOf(';') > -1 ? type.substr(0, type.indexOf(';')) : type;
}

function getTypeFromFile(url) {

	if (typeof url !== 'string') {
		throw new Error('`url` argument must be a string');
	}

	for (var i = 0, total = typeChecks.length; i < total; i++) {
		var type = typeChecks[i](url);

		if (type) {
			return type;
		}
	}

	var ext = getExtension(url),
	    normalizedExt = normalizeExtension(ext);

	var mime = 'video/mp4';

	if (normalizedExt) {
		if (~['mp4', 'm4v', 'ogg', 'ogv', 'webm', 'flv', 'mpeg', 'mov'].indexOf(normalizedExt)) {
			mime = 'video/' + normalizedExt;
		} else if (~['mp3', 'oga', 'wav', 'mid', 'midi'].indexOf(normalizedExt)) {
			mime = 'audio/' + normalizedExt;
		}
	}

	return mime;
}

function getExtension(url) {

	if (typeof url !== 'string') {
		throw new Error('`url` argument must be a string');
	}

	var baseUrl = url.split('?')[0],
	    baseName = baseUrl.split('\\').pop().split('/').pop();
	return ~baseName.indexOf('.') ? baseName.substring(baseName.lastIndexOf('.') + 1) : '';
}

function normalizeExtension(extension) {

	if (typeof extension !== 'string') {
		throw new Error('`extension` argument must be a string');
	}

	switch (extension) {
		case 'mp4':
		case 'm4v':
			return 'mp4';
		case 'webm':
		case 'webma':
		case 'webmv':
			return 'webm';
		case 'ogg':
		case 'oga':
		case 'ogv':
			return 'ogg';
		default:
			return extension;
	}
}

_mejs2.default.Utils = _mejs2.default.Utils || {};
_mejs2.default.Utils.typeChecks = typeChecks;
_mejs2.default.Utils.absolutizeUrl = absolutizeUrl;
_mejs2.default.Utils.formatType = formatType;
_mejs2.default.Utils.getMimeFromType = getMimeFromType;
_mejs2.default.Utils.getTypeFromFile = getTypeFromFile;
_mejs2.default.Utils.getExtension = getExtension;
_mejs2.default.Utils.normalizeExtension = normalizeExtension;

},{"27":27,"7":7}],29:[function(_dereq_,module,exports){
'use strict';

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _promisePolyfill = _dereq_(4);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('remove')) {
			return;
		}
		Object.defineProperty(item, 'remove', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				this.parentNode.removeChild(this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

(function () {

	if (typeof window.CustomEvent === 'function') {
		return false;
	}

	function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = _document2.default.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
})();

if (typeof Object.assign !== 'function') {
	Object.assign = function (target) {

		if (target === null || target === undefined) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		var to = Object(target);

		for (var index = 1, total = arguments.length; index < total; index++) {
			var nextSource = arguments[index];

			if (nextSource !== null) {
				for (var nextKey in nextSource) {
					if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
						to[nextKey] = nextSource[nextKey];
					}
				}
			}
		}
		return to;
	};
}

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function (searchString, position) {
		position = position || 0;
		return this.substr(position, searchString.length) === searchString;
	};
}

if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
		    i = matches.length - 1;
		while (--i >= 0 && matches.item(i) !== this) {}
		return i > -1;
	};
}

if (window.Element && !Element.prototype.closest) {
	Element.prototype.closest = function (s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
		    i = void 0,
		    el = this;
		do {
			i = matches.length;
			while (--i >= 0 && matches.item(i) !== el) {}
		} while (i < 0 && (el = el.parentElement));
		return el;
	};
}

(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function () {
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};

	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
		clearTimeout(id);
	};
})();

if (/firefox/i.test(navigator.userAgent)) {
	var getComputedStyle = window.getComputedStyle;
	window.getComputedStyle = function (el, pseudoEl) {
		var t = getComputedStyle(el, pseudoEl);
		return t === null ? { getPropertyValue: function getPropertyValue() {} } : t;
	};
}

if (!window.Promise) {
	window.Promise = _promisePolyfill2.default;
}

(function (constructor) {
	if (constructor && constructor.prototype && constructor.prototype.children === null) {
		Object.defineProperty(constructor.prototype, 'children', {
			get: function get() {
				var i = 0,
				    node = void 0,
				    nodes = this.childNodes,
				    children = [];
				while (node = nodes[i++]) {
					if (node.nodeType === 1) {
						children.push(node);
					}
				}
				return children;
			}
		});
	}
})(window.Node || window.Element);

},{"2":2,"4":4}],30:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isDropFrame = isDropFrame;
exports.secondsToTimeCode = secondsToTimeCode;
exports.timeCodeToSeconds = timeCodeToSeconds;
exports.calculateTimeFormat = calculateTimeFormat;
exports.convertSMPTEtoSeconds = convertSMPTEtoSeconds;

var _mejs = _dereq_(7);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDropFrame() {
	var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;

	return !(fps % 1 === 0);
}
function secondsToTimeCode(time) {
	var forceHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	var showFrameCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	var fps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
	var secondsDecimalLength = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	var timeFormat = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'mm:ss';


	time = !time || typeof time !== 'number' || time < 0 ? 0 : time;

	var dropFrames = Math.round(fps * 0.066666),
	    timeBase = Math.round(fps),
	    framesPer24Hours = Math.round(fps * 3600) * 24,
	    framesPer10Minutes = Math.round(fps * 600),
	    frameSep = isDropFrame(fps) ? ';' : ':',
	    hours = void 0,
	    minutes = void 0,
	    seconds = void 0,
	    frames = void 0,
	    f = Math.round(time * fps);

	if (isDropFrame(fps)) {

		if (f < 0) {
			f = framesPer24Hours + f;
		}

		f = f % framesPer24Hours;

		var d = Math.floor(f / framesPer10Minutes);
		var m = f % framesPer10Minutes;
		f = f + dropFrames * 9 * d;
		if (m > dropFrames) {
			f = f + dropFrames * Math.floor((m - dropFrames) / Math.round(timeBase * 60 - dropFrames));
		}

		var timeBaseDivision = Math.floor(f / timeBase);

		hours = Math.floor(Math.floor(timeBaseDivision / 60) / 60);
		minutes = Math.floor(timeBaseDivision / 60) % 60;

		if (showFrameCount) {
			seconds = timeBaseDivision % 60;
		} else {
			seconds = (f / timeBase % 60).toFixed(secondsDecimalLength);
		}
	} else {
		hours = Math.floor(time / 3600) % 24;
		minutes = Math.floor(time / 60) % 60;
		if (showFrameCount) {
			seconds = Math.floor(time % 60);
		} else {
			seconds = (time % 60).toFixed(secondsDecimalLength);
		}
	}
	hours = hours <= 0 ? 0 : hours;
	minutes = minutes <= 0 ? 0 : minutes;
	seconds = seconds <= 0 ? 0 : seconds;

	var timeFormatFrags = timeFormat.split(':');
	var timeFormatSettings = {};
	for (var i = 0, total = timeFormatFrags.length; i < total; ++i) {
		var unique = '';
		for (var j = 0, t = timeFormatFrags[i].length; j < t; j++) {
			if (unique.indexOf(timeFormatFrags[i][j]) < 0) {
				unique += timeFormatFrags[i][j];
			}
		}
		if (~['f', 's', 'm', 'h'].indexOf(unique)) {
			timeFormatSettings[unique] = timeFormatFrags[i].length;
		}
	}

	var result = forceHours || hours > 0 ? (hours < 10 && timeFormatSettings.h > 1 ? '0' + hours : hours) + ':' : '';
	result += (minutes < 10 && timeFormatSettings.m > 1 ? '0' + minutes : minutes) + ':';
	result += '' + (seconds < 10 && timeFormatSettings.s > 1 ? '0' + seconds : seconds);

	if (showFrameCount) {
		frames = (f % timeBase).toFixed(0);
		frames = frames <= 0 ? 0 : frames;
		result += frames < 10 && timeFormatSettings.f ? frameSep + '0' + frames : '' + frameSep + frames;
	}

	return result;
}

function timeCodeToSeconds(time) {
	var fps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;


	if (typeof time !== 'string') {
		throw new TypeError('Time must be a string');
	}

	if (time.indexOf(';') > 0) {
		time = time.replace(';', ':');
	}

	if (!/\d{2}(\:\d{2}){0,3}/i.test(time)) {
		throw new TypeError('Time code must have the format `00:00:00`');
	}

	var parts = time.split(':');

	var output = void 0,
	    hours = 0,
	    minutes = 0,
	    seconds = 0,
	    frames = 0,
	    totalMinutes = 0,
	    dropFrames = Math.round(fps * 0.066666),
	    timeBase = Math.round(fps),
	    hFrames = timeBase * 3600,
	    mFrames = timeBase * 60;

	switch (parts.length) {
		default:
		case 1:
			seconds = parseInt(parts[0], 10);
			break;
		case 2:
			minutes = parseInt(parts[0], 10);
			seconds = parseInt(parts[1], 10);
			break;
		case 3:
			hours = parseInt(parts[0], 10);
			minutes = parseInt(parts[1], 10);
			seconds = parseInt(parts[2], 10);
			break;
		case 4:
			hours = parseInt(parts[0], 10);
			minutes = parseInt(parts[1], 10);
			seconds = parseInt(parts[2], 10);
			frames = parseInt(parts[3], 10);
			break;
	}

	if (isDropFrame(fps)) {
		totalMinutes = 60 * hours + minutes;
		output = hFrames * hours + mFrames * minutes + timeBase * seconds + frames - dropFrames * (totalMinutes - Math.floor(totalMinutes / 10));
	} else {
		output = (hFrames * hours + mFrames * minutes + fps * seconds + frames) / fps;
	}

	return parseFloat(output.toFixed(3));
}

function calculateTimeFormat(time, options) {
	var fps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;


	time = !time || typeof time !== 'number' || time < 0 ? 0 : time;

	var hours = Math.floor(time / 3600) % 24,
	    minutes = Math.floor(time / 60) % 60,
	    seconds = Math.floor(time % 60),
	    frames = Math.floor((time % 1 * fps).toFixed(3)),
	    lis = [[frames, 'f'], [seconds, 's'], [minutes, 'm'], [hours, 'h']];

	var format = options.timeFormat,
	    firstTwoPlaces = format[1] === format[0],
	    separatorIndex = firstTwoPlaces ? 2 : 1,
	    separator = format.length < separatorIndex ? format[separatorIndex] : ':',
	    firstChar = format[0],
	    required = false;

	for (var i = 0, len = lis.length; i < len; i++) {
		if (~format.indexOf(lis[i][1])) {
			required = true;
		} else if (required) {
			var hasNextValue = false;
			for (var j = i; j < len; j++) {
				if (lis[j][0] > 0) {
					hasNextValue = true;
					break;
				}
			}

			if (!hasNextValue) {
				break;
			}

			if (!firstTwoPlaces) {
				format = firstChar + format;
			}
			format = lis[i][1] + separator + format;
			if (firstTwoPlaces) {
				format = lis[i][1] + format;
			}
			firstChar = lis[i][1];
		}
	}

	options.timeFormat = format;
}

function convertSMPTEtoSeconds(SMPTE) {

	if (typeof SMPTE !== 'string') {
		throw new TypeError('Argument must be a string value');
	}

	SMPTE = SMPTE.replace(',', '.');

	var decimalLen = ~SMPTE.indexOf('.') ? SMPTE.split('.')[1].length : 0;

	var secs = 0,
	    multiplier = 1;

	SMPTE = SMPTE.split(':').reverse();

	for (var i = 0, total = SMPTE.length; i < total; i++) {
		multiplier = 1;
		if (i > 0) {
			multiplier = Math.pow(60, i);
		}
		secs += Number(SMPTE[i]) * multiplier;
	}
	return Number(secs.toFixed(decimalLen));
}

_mejs2.default.Utils = _mejs2.default.Utils || {};
_mejs2.default.Utils.secondsToTimeCode = secondsToTimeCode;
_mejs2.default.Utils.timeCodeToSeconds = timeCodeToSeconds;
_mejs2.default.Utils.calculateTimeFormat = calculateTimeFormat;
_mejs2.default.Utils.convertSMPTEtoSeconds = convertSMPTEtoSeconds;

},{"7":7}]},{},[29,6,5,15,23,20,19,21,22,24,16,18,17,9,10,11,12,13,14]);
;
/* global console, MediaElementPlayer, mejs */
(function ( window, $ ) {
	// Reintegrate `plugins` since they don't exist in MEJS anymore; it won't affect anything in the player
	if (mejs.plugins === undefined) {
		mejs.plugins = {};
		mejs.plugins.silverlight = [];
		mejs.plugins.silverlight.push({
			types: []
		});
	}

	// Inclusion of old `HtmlMediaElementShim` if it doesn't exist
	mejs.HtmlMediaElementShim = mejs.HtmlMediaElementShim || {
		getTypeFromFile: mejs.Utils.getTypeFromFile
	};

	// Add missing global variables for backward compatibility
	if (mejs.MediaFeatures === undefined) {
		mejs.MediaFeatures = mejs.Features;
	}
	if (mejs.Utility === undefined) {
		mejs.Utility = mejs.Utils;
	}

	/**
	 * Create missing variables and have default `classPrefix` overridden to avoid issues.
	 *
	 * `media` is now a fake wrapper needed to simplify manipulation of various media types,
	 * so in order to access the `video` or `audio` tag, use `media.originalNode` or `player.node`;
	 * `player.container` used to be jQuery but now is a HTML element, and many elements inside
	 * the player rely on it being a HTML now, so its conversion is difficult; however, a
	 * `player.$container` new variable has been added to be used as jQuery object
	 */
	var init = MediaElementPlayer.prototype.init;
	MediaElementPlayer.prototype.init = function () {
		this.options.classPrefix = 'mejs-';
		this.$media = this.$node = $( this.node );
		init.call( this );
	};

	var ready = MediaElementPlayer.prototype._meReady;
	MediaElementPlayer.prototype._meReady = function () {
		this.container = $( this.container) ;
		this.controls = $( this.controls );
		this.layers = $( this.layers );
		ready.apply( this, arguments );
	};

	// Override method so certain elements can be called with jQuery
	MediaElementPlayer.prototype.getElement = function ( el ) {
		return $ !== undefined && el instanceof $ ? el[0] : el;
	};

	// Add jQuery ONLY to most of custom features' arguments for backward compatibility; default features rely 100%
	// on the arguments being HTML elements to work properly
	MediaElementPlayer.prototype.buildfeatures = function ( player, controls, layers, media ) {
		var defaultFeatures = [
			'playpause',
			'current',
			'progress',
			'duration',
			'tracks',
			'volume',
			'fullscreen'
		];
		for (var i = 0, total = this.options.features.length; i < total; i++) {
			var feature = this.options.features[i];
			if (this['build' + feature]) {
				try {
					// Use jQuery for non-default features
					if (defaultFeatures.indexOf(feature) === -1) {
						this['build' + feature]( player, $(controls), $(layers), media );
					} else {
						this['build' + feature]( player, controls, layers, media );
					}

				} catch (e) {
					console.error( 'error building ' + feature, e );
				}
			}
		}
	};

})( window, jQuery );
;
/* global _wpmejsSettings, mejsL10n */
(function( window, $ ) {

	window.wp = window.wp || {};

	function wpMediaElement() {
		var settings = {};

		/**
		 * Initialize media elements.
		 *
		 * Ensures media elements that have already been initialized won't be
		 * processed again.
		 *
		 * @since 4.4.0
		 *
		 * @returns {void}
		 */
		function initialize() {
			if ( typeof _wpmejsSettings !== 'undefined' ) {
				settings = $.extend( true, {}, _wpmejsSettings );
			}
			settings.classPrefix = 'mejs-';
			settings.success = settings.success || function ( mejs ) {
				var autoplay, loop;

				if ( mejs.rendererName && -1 !== mejs.rendererName.indexOf( 'flash' ) ) {
					autoplay = mejs.attributes.autoplay && 'false' !== mejs.attributes.autoplay;
					loop = mejs.attributes.loop && 'false' !== mejs.attributes.loop;

					if ( autoplay ) {
						mejs.addEventListener( 'canplay', function() {
							mejs.play();
						}, false );
					}

					if ( loop ) {
						mejs.addEventListener( 'ended', function() {
							mejs.play();
						}, false );
					}
				}
			};

			/**
			 * Custom error handler.
			 *
			 * Sets up a custom error handler in case a video render fails, and provides a download
			 * link as the fallback.
			 *
			 * @since 4.9.3
			 *
			 * @param {object} media The wrapper that mimics all the native events/properties/methods for all renderers.
			 * @param {object} node  The original HTML video, audio, or iframe tag where the media was loaded.
			 * @returns {string}
			 */
			settings.customError = function ( media, node ) {
				// Make sure we only fall back to a download link for flash files.
				if ( -1 !== media.rendererName.indexOf( 'flash' ) || -1 !== media.rendererName.indexOf( 'flv' ) ) {
					return '<a href="' + node.src + '">' + mejsL10n.strings['mejs.download-video'] + '</a>';
				}
			};

			// Only initialize new media elements.
			$( '.wp-audio-shortcode, .wp-video-shortcode' )
				.not( '.mejs-container' )
				.filter(function () {
					return ! $( this ).parent().hasClass( 'mejs-mediaelement' );
				})
				.mediaelementplayer( settings );
		}

		return {
			initialize: initialize
		};
	}

	window.wp.mediaelement = new wpMediaElement();

	$( window.wp.mediaelement.initialize );

})( window, jQuery );
;
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

var VimeoApi = {

	promise: null,

	load: function load(settings) {

		if (typeof Vimeo !== 'undefined') {
			VimeoApi._createPlayer(settings);
		} else {
			VimeoApi.promise = VimeoApi.promise || mejs.Utils.loadScript('https://player.vimeo.com/api/player.js');
			VimeoApi.promise.then(function () {
				VimeoApi._createPlayer(settings);
			});
		}
	},

	_createPlayer: function _createPlayer(settings) {
		var player = new Vimeo.Player(settings.iframe);
		window['__ready__' + settings.id](player);
	},

	getVimeoId: function getVimeoId(url) {
		if (url === undefined || url === null) {
			return null;
		}

		var parts = url.split('?');
		url = parts[0];
		return parseInt(url.substring(url.lastIndexOf('/') + 1), 10);
	}
};

var vimeoIframeRenderer = {

	name: 'vimeo_iframe',
	options: {
		prefix: 'vimeo_iframe'
	},

	canPlayType: function canPlayType(type) {
		return ~['video/vimeo', 'video/x-vimeo'].indexOf(type.toLowerCase());
	},

	create: function create(mediaElement, options, mediaFiles) {
		var apiStack = [],
		    vimeo = {},
		    readyState = 4;

		var paused = true,
		    volume = 1,
		    oldVolume = volume,
		    currentTime = 0,
		    bufferedTime = 0,
		    ended = false,
		    duration = 0,
		    vimeoPlayer = null,
		    url = '';

		vimeo.options = options;
		vimeo.id = mediaElement.id + '_' + options.prefix;
		vimeo.mediaElement = mediaElement;

		var errorHandler = function errorHandler(error, target) {
			var event = mejs.Utils.createEvent('error', target);
			event.message = error.name + ': ' + error.message;
			mediaElement.dispatchEvent(event);
		};

		var props = mejs.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {

			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			vimeo['get' + capName] = function () {
				if (vimeoPlayer !== null) {
					var value = null;

					switch (propName) {
						case 'currentTime':
							return currentTime;

						case 'duration':
							return duration;

						case 'volume':
							return volume;
						case 'muted':
							return volume === 0;
						case 'paused':
							return paused;
						case 'ended':
							return ended;

						case 'src':
							vimeoPlayer.getVideoUrl().then(function (_url) {
								url = _url;
							});

							return url;
						case 'buffered':
							return {
								start: function start() {
									return 0;
								},
								end: function end() {
									return bufferedTime * duration;
								},
								length: 1
							};
						case 'readyState':
							return readyState;
					}
					return value;
				} else {
					return null;
				}
			};

			vimeo['set' + capName] = function (value) {
				if (vimeoPlayer !== null) {
					switch (propName) {
						case 'src':
							var _url2 = typeof value === 'string' ? value : value[0].src,
							    videoId = VimeoApi.getVimeoId(_url2);

							vimeoPlayer.loadVideo(videoId).then(function () {
								if (mediaElement.originalNode.autoplay) {
									vimeoPlayer.play();
								}
							}).catch(function (error) {
								errorHandler(error, vimeo);
							});
							break;
						case 'currentTime':
							vimeoPlayer.setCurrentTime(value).then(function () {
								currentTime = value;
								setTimeout(function () {
									var event = mejs.Utils.createEvent('timeupdate', vimeo);
									mediaElement.dispatchEvent(event);
								}, 50);
							}).catch(function (error) {
								errorHandler(error, vimeo);
							});
							break;
						case 'volume':
							vimeoPlayer.setVolume(value).then(function () {
								volume = value;
								oldVolume = volume;
								setTimeout(function () {
									var event = mejs.Utils.createEvent('volumechange', vimeo);
									mediaElement.dispatchEvent(event);
								}, 50);
							}).catch(function (error) {
								errorHandler(error, vimeo);
							});
							break;
						case 'loop':
							vimeoPlayer.setLoop(value).catch(function (error) {
								errorHandler(error, vimeo);
							});
							break;
						case 'muted':
							if (value) {
								vimeoPlayer.setVolume(0).then(function () {
									volume = 0;
									setTimeout(function () {
										var event = mejs.Utils.createEvent('volumechange', vimeo);
										mediaElement.dispatchEvent(event);
									}, 50);
								}).catch(function (error) {
									errorHandler(error, vimeo);
								});
							} else {
								vimeoPlayer.setVolume(oldVolume).then(function () {
									volume = oldVolume;
									setTimeout(function () {
										var event = mejs.Utils.createEvent('volumechange', vimeo);
										mediaElement.dispatchEvent(event);
									}, 50);
								}).catch(function (error) {
									errorHandler(error, vimeo);
								});
							}
							break;
						case 'readyState':
							var event = mejs.Utils.createEvent('canplay', vimeo);
							mediaElement.dispatchEvent(event);
							break;
						default:
							
							break;
					}
				} else {
					apiStack.push({ type: 'set', propName: propName, value: value });
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		var methods = mejs.html5media.methods,
		    assignMethods = function assignMethods(methodName) {
			vimeo[methodName] = function () {
				if (vimeoPlayer !== null) {
					switch (methodName) {
						case 'play':
							paused = false;
							return vimeoPlayer.play();
						case 'pause':
							paused = true;
							return vimeoPlayer.pause();
						case 'load':
							return null;
					}
				} else {
					apiStack.push({ type: 'call', methodName: methodName });
				}
			};
		};

		for (var _i = 0, _total = methods.length; _i < _total; _i++) {
			assignMethods(methods[_i]);
		}

		window['__ready__' + vimeo.id] = function (_vimeoPlayer) {

			mediaElement.vimeoPlayer = vimeoPlayer = _vimeoPlayer;

			if (apiStack.length) {
				for (var _i2 = 0, _total2 = apiStack.length; _i2 < _total2; _i2++) {
					var stackItem = apiStack[_i2];

					if (stackItem.type === 'set') {
						var propName = stackItem.propName,
						    capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

						vimeo['set' + capName](stackItem.value);
					} else if (stackItem.type === 'call') {
						vimeo[stackItem.methodName]();
					}
				}
			}

			if (mediaElement.originalNode.muted) {
				vimeoPlayer.setVolume(0);
				volume = 0;
			}

			var vimeoIframe = document.getElementById(vimeo.id);
			var events = void 0;

			events = ['mouseover', 'mouseout'];

			var assignEvents = function assignEvents(e) {
				var event = mejs.Utils.createEvent(e.type, vimeo);
				mediaElement.dispatchEvent(event);
			};

			for (var _i3 = 0, _total3 = events.length; _i3 < _total3; _i3++) {
				vimeoIframe.addEventListener(events[_i3], assignEvents, false);
			}

			vimeoPlayer.on('loaded', function () {
				vimeoPlayer.getDuration().then(function (loadProgress) {
					duration = loadProgress;
					if (duration > 0) {
						bufferedTime = duration * loadProgress;
						if (mediaElement.originalNode.autoplay) {
							paused = false;
							ended = false;
							var event = mejs.Utils.createEvent('play', vimeo);
							mediaElement.dispatchEvent(event);
						}
					}
				}).catch(function (error) {
					errorHandler(error, vimeo);
				});
			});
			vimeoPlayer.on('progress', function () {
				vimeoPlayer.getDuration().then(function (loadProgress) {
					duration = loadProgress;

					if (duration > 0) {
						bufferedTime = duration * loadProgress;
						if (mediaElement.originalNode.autoplay) {
							var initEvent = mejs.Utils.createEvent('play', vimeo);
							mediaElement.dispatchEvent(initEvent);

							var playingEvent = mejs.Utils.createEvent('playing', vimeo);
							mediaElement.dispatchEvent(playingEvent);
						}
					}

					var event = mejs.Utils.createEvent('progress', vimeo);
					mediaElement.dispatchEvent(event);
				}).catch(function (error) {
					errorHandler(error, vimeo);
				});
			});
			vimeoPlayer.on('timeupdate', function () {
				vimeoPlayer.getCurrentTime().then(function (seconds) {
					currentTime = seconds;

					var event = mejs.Utils.createEvent('timeupdate', vimeo);
					mediaElement.dispatchEvent(event);
				}).catch(function (error) {
					errorHandler(error, vimeo);
				});
			});
			vimeoPlayer.on('play', function () {
				paused = false;
				ended = false;
				var event = mejs.Utils.createEvent('play', vimeo);
				mediaElement.dispatchEvent(event);

				var playingEvent = mejs.Utils.createEvent('playing', vimeo);
				mediaElement.dispatchEvent(playingEvent);
			});
			vimeoPlayer.on('pause', function () {
				paused = true;
				ended = false;

				var event = mejs.Utils.createEvent('pause', vimeo);
				mediaElement.dispatchEvent(event);
			});
			vimeoPlayer.on('ended', function () {
				paused = false;
				ended = true;

				var event = mejs.Utils.createEvent('ended', vimeo);
				mediaElement.dispatchEvent(event);
			});

			events = ['rendererready', 'loadedmetadata', 'loadeddata', 'canplay'];

			for (var _i4 = 0, _total4 = events.length; _i4 < _total4; _i4++) {
				var event = mejs.Utils.createEvent(events[_i4], vimeo);
				mediaElement.dispatchEvent(event);
			}
		};

		var height = mediaElement.originalNode.height,
		    width = mediaElement.originalNode.width,
		    vimeoContainer = document.createElement('iframe'),
		    standardUrl = 'https://player.vimeo.com/video/' + VimeoApi.getVimeoId(mediaFiles[0].src);

		var queryArgs = ~mediaFiles[0].src.indexOf('?') ? '?' + mediaFiles[0].src.slice(mediaFiles[0].src.indexOf('?') + 1) : '';
		if (queryArgs && mediaElement.originalNode.autoplay && queryArgs.indexOf('autoplay') === -1) {
			queryArgs += '&autoplay=1';
		}
		if (queryArgs && mediaElement.originalNode.loop && queryArgs.indexOf('loop') === -1) {
			queryArgs += '&loop=1';
		}

		vimeoContainer.setAttribute('id', vimeo.id);
		vimeoContainer.setAttribute('width', width);
		vimeoContainer.setAttribute('height', height);
		vimeoContainer.setAttribute('frameBorder', '0');
		vimeoContainer.setAttribute('src', '' + standardUrl + queryArgs);
		vimeoContainer.setAttribute('webkitallowfullscreen', '');
		vimeoContainer.setAttribute('mozallowfullscreen', '');
		vimeoContainer.setAttribute('allowfullscreen', '');

		mediaElement.originalNode.parentNode.insertBefore(vimeoContainer, mediaElement.originalNode);
		mediaElement.originalNode.style.display = 'none';

		VimeoApi.load({
			iframe: vimeoContainer,
			id: vimeo.id
		});

		vimeo.hide = function () {
			vimeo.pause();
			if (vimeoPlayer) {
				vimeoContainer.style.display = 'none';
			}
		};
		vimeo.setSize = function (width, height) {
			vimeoContainer.setAttribute('width', width);
			vimeoContainer.setAttribute('height', height);
		};
		vimeo.show = function () {
			if (vimeoPlayer) {
				vimeoContainer.style.display = '';
			}
		};

		vimeo.destroy = function () {};

		return vimeo;
	}
};

mejs.Utils.typeChecks.push(function (url) {
	return (/(\/\/player\.vimeo|vimeo\.com)/i.test(url) ? 'video/x-vimeo' : null
	);
});

mejs.Renderers.add(vimeoIframeRenderer);

},{}]},{},[1]);
;
/* global _wpUtilSettings */

/** @namespace wp */
window.wp = window.wp || {};

(function ($) {
	// Check for the utility settings.
	var settings = typeof _wpUtilSettings === 'undefined' ? {} : _wpUtilSettings;

	/**
	 * wp.template( id )
	 *
	 * Fetch a JavaScript template for an id, and return a templating function for it.
	 *
	 * @param  {string} id   A string that corresponds to a DOM element with an id prefixed with "tmpl-".
	 *                       For example, "attachment" maps to "tmpl-attachment".
	 * @return {function}    A function that lazily-compiles the template requested.
	 */
	wp.template = _.memoize(function ( id ) {
		var compiled,
			/*
			 * Underscore's default ERB-style templates are incompatible with PHP
			 * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
			 *
			 * @see trac ticket #22344.
			 */
			options = {
				evaluate:    /<#([\s\S]+?)#>/g,
				interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
				escape:      /\{\{([^\}]+?)\}\}(?!\})/g,
				variable:    'data'
			};

		return function ( data ) {
			compiled = compiled || _.template( $( '#tmpl-' + id ).html(),  options );
			return compiled( data );
		};
	});

	// wp.ajax
	// ------
	//
	// Tools for sending ajax requests with JSON responses and built in error handling.
	// Mirrors and wraps jQuery's ajax APIs.
	wp.ajax = {
		settings: settings.ajax || {},

		/**
		 * wp.ajax.post( [action], [data] )
		 *
		 * Sends a POST request to WordPress.
		 *
		 * @param  {(string|object)} action  The slug of the action to fire in WordPress or options passed
		 *                                   to jQuery.ajax.
		 * @param  {object=}         data    Optional. The data to populate $_POST with.
		 * @return {$.promise}     A jQuery promise that represents the request,
		 *                         decorated with an abort() method.
		 */
		post: function( action, data ) {
			return wp.ajax.send({
				data: _.isObject( action ) ? action : _.extend( data || {}, { action: action })
			});
		},

		/**
		 * wp.ajax.send( [action], [options] )
		 *
		 * Sends a POST request to WordPress.
		 *
		 * @param  {(string|object)} action  The slug of the action to fire in WordPress or options passed
		 *                                   to jQuery.ajax.
		 * @param  {object=}         options Optional. The options passed to jQuery.ajax.
		 * @return {$.promise}      A jQuery promise that represents the request,
		 *                          decorated with an abort() method.
		 */
		send: function( action, options ) {
			var promise, deferred;
			if ( _.isObject( action ) ) {
				options = action;
			} else {
				options = options || {};
				options.data = _.extend( options.data || {}, { action: action });
			}

			options = _.defaults( options || {}, {
				type:    'POST',
				url:     wp.ajax.settings.url,
				context: this
			});

			deferred = $.Deferred( function( deferred ) {
				// Transfer success/error callbacks.
				if ( options.success )
					deferred.done( options.success );
				if ( options.error )
					deferred.fail( options.error );

				delete options.success;
				delete options.error;

				// Use with PHP's wp_send_json_success() and wp_send_json_error()
				deferred.jqXHR = $.ajax( options ).done( function( response ) {
					// Treat a response of 1 as successful for backward compatibility with existing handlers.
					if ( response === '1' || response === 1 )
						response = { success: true };

					if ( _.isObject( response ) && ! _.isUndefined( response.success ) )
						deferred[ response.success ? 'resolveWith' : 'rejectWith' ]( this, [response.data] );
					else
						deferred.rejectWith( this, [response] );
				}).fail( function() {
					deferred.rejectWith( this, arguments );
				});
			});

			promise = deferred.promise();
			promise.abort = function() {
				deferred.jqXHR.abort();
				return this;
			};

			return promise;
		}
	};

}(jQuery));
;
(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.3.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],o(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],o(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var h=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var o=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return l(t);if(i.isString(t))return function(e){return e.get(t)};return t};var l=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var u=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,h;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(h=i.keys(r);a<h.length;a++){e=f(t,e,h[a],r[h[a]],s)}}else if(r&&c.test(r)){for(h=r.split(c);a<h.length;a++){e=t(e,h[a],n,s)}}else{e=t(e,r,n,s)}return e};u.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};u.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var h=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:h,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,h=r.listening;if(h)h.count++;n.push({callback:i,context:s,ctx:s||a,listening:h})}return t};u.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};u.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var h=n[s[a]];if(!h)break;h.obj.off(e,r,this)}return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var h=n.context,o=n.listeners;if(!e&&!r&&!h){var l=i.keys(o);for(;s<l.length;s++){a=o[l[s]];delete o[a.id];delete a.listeningTo[a.objId]}return}var u=e?[e]:i.keys(t);for(;s<u.length;s++){e=u[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||h&&h!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete o[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}return t};u.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));if(typeof t==="string"&&r==null)e=void 0;return this.on(n,e,r)};u.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};u.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,h);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};u.bind=u.on;u.unbind=u.off;i.extend(e,u);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};var n=i.result(this,"defaults");r=i.defaults(i.extend({},n,r),n);this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,u,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var h=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=i.clone(this.attributes);this.changed={}}var l=this.attributes;var u=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(l[f],e))h.push(f);if(!i.isEqual(c[f],e)){u[f]=e}else{delete u[f]}s?delete l[f]:l[f]=e}if(this.idAttribute in n)this.id=this.get(this.idAttribute);if(!a){if(h.length)this._pending=r;for(var d=0;d<h.length;d++){this.trigger("change:"+h[d],this,l[h[d]],r)}}if(o)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};B(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else if(!this._validate(n,r)){return false}var a=this;var h=r.success;var o=this.attributes;r.success=function(t){a.attributes=o;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(h)h.call(r.context,a,t,r);a.trigger("sync",a,t,r)};B(this,r);if(n&&s)this.attributes=i.extend({},o,n);var l=this.isNew()?"create":r.patch?"patch":"update";if(l==="patch"&&!r.attrs)r.attrs=n;var u=this.sync(l,this,r);this.attributes=o;return u},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{B(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var I=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,u,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=this._removeModels(t,e);if(!e.silent&&n.length){e.changes={added:[],merged:[],removed:n};this.trigger("update",this,e)}return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n>this.length)n=this.length;if(n<0)n+=this.length+1;var s=[];var a=[];var h=[];var o=[];var l={};var u=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&n==null&&e.sort!==false;var g=i.isString(this.comparator)?this.comparator:null;var p,m;for(m=0;m<t.length;m++){p=t[m];var _=this.get(p);if(_){if(c&&p!==_){var y=this._isModel(p)?p.attributes:p;if(e.parse)y=_.parse(y,e);_.set(y,e);h.push(_);if(v&&!d)d=_.hasChanged(g)}if(!l[_.cid]){l[_.cid]=true;s.push(_)}t[m]=_}else if(u){p=t[m]=this._prepareModel(p,e);if(p){a.push(p);this._addReference(p,e);l[p.cid]=true;s.push(p)}}}if(f){for(m=0;m<this.length;m++){p=this.models[m];if(!l[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var b=false;var x=!v&&u&&f;if(s.length&&x){b=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;I(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;I(this.models,a,n==null?this.length:n);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(n!=null)e.index=n+m;p=a[m];p.trigger("add",p,this,e)}if(d||b)this.trigger("sort",this,e);if(a.length||o.length||h.length){e.changes={added:a,removed:o,merged:h};this.trigger("update",this,e)}}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};B(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};h(x,S,"models");var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var h=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(h)return h.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var o=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(o)o.call(n.context,t,e,i)};var l=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,l,n);return l};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(M,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);n.prototype=i.create(r.prototype,t);n.prototype.constructor=n;n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=k.extend=N.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var B=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
;
/* global _wpmejsSettings, MediaElementPlayer */

(function ($, _, Backbone) {
	'use strict';

	/** @namespace wp */
	window.wp = window.wp || {};

	var WPPlaylistView = Backbone.View.extend({
		initialize : function (options) {
			this.index = 0;
			this.settings = {};
			this.data = options.metadata || $.parseJSON( this.$('script.wp-playlist-script').html() );
			this.playerNode = this.$( this.data.type );

			this.tracks = new Backbone.Collection( this.data.tracks );
			this.current = this.tracks.first();

			if ( 'audio' === this.data.type ) {
				this.currentTemplate = wp.template( 'wp-playlist-current-item' );
				this.currentNode = this.$( '.wp-playlist-current-item' );
			}

			this.renderCurrent();

			if ( this.data.tracklist ) {
				this.itemTemplate = wp.template( 'wp-playlist-item' );
				this.playingClass = 'wp-playlist-playing';
				this.renderTracks();
			}

			this.playerNode.attr( 'src', this.current.get( 'src' ) );

			_.bindAll( this, 'bindPlayer', 'bindResetPlayer', 'setPlayer', 'ended', 'clickTrack' );

			if ( ! _.isUndefined( window._wpmejsSettings ) ) {
				this.settings = _.clone( _wpmejsSettings );
			}
			this.settings.success = this.bindPlayer;
			this.setPlayer();
		},

		bindPlayer : function (mejs) {
			this.mejs = mejs;
			this.mejs.addEventListener( 'ended', this.ended );
		},

		bindResetPlayer : function (mejs) {
			this.bindPlayer( mejs );
			this.playCurrentSrc();
		},

		setPlayer: function (force) {
			if ( this.player ) {
				this.player.pause();
				this.player.remove();
				this.playerNode = this.$( this.data.type );
			}

			if (force) {
				this.playerNode.attr( 'src', this.current.get( 'src' ) );
				this.settings.success = this.bindResetPlayer;
			}

			/**
			 * This is also our bridge to the outside world
			 */
			this.player = new MediaElementPlayer( this.playerNode.get(0), this.settings );
		},

		playCurrentSrc : function () {
			this.renderCurrent();
			this.mejs.setSrc( this.playerNode.attr( 'src' ) );
			this.mejs.load();
			this.mejs.play();
		},

		renderCurrent : function () {
			var dimensions, defaultImage = 'wp-includes/images/media/video.png';
			if ( 'video' === this.data.type ) {
				if ( this.data.images && this.current.get( 'image' ) && -1 === this.current.get( 'image' ).src.indexOf( defaultImage ) ) {
					this.playerNode.attr( 'poster', this.current.get( 'image' ).src );
				}
				dimensions = this.current.get( 'dimensions' ).resized;
				this.playerNode.attr( dimensions );
			} else {
				if ( ! this.data.images ) {
					this.current.set( 'image', false );
				}
				this.currentNode.html( this.currentTemplate( this.current.toJSON() ) );
			}
		},

		renderTracks : function () {
			var self = this, i = 1, tracklist = $( '<div class="wp-playlist-tracks"></div>' );
			this.tracks.each(function (model) {
				if ( ! self.data.images ) {
					model.set( 'image', false );
				}
				model.set( 'artists', self.data.artists );
				model.set( 'index', self.data.tracknumbers ? i : false );
				tracklist.append( self.itemTemplate( model.toJSON() ) );
				i += 1;
			});
			this.$el.append( tracklist );

			this.$( '.wp-playlist-item' ).eq(0).addClass( this.playingClass );
		},

		events : {
			'click .wp-playlist-item' : 'clickTrack',
			'click .wp-playlist-next' : 'next',
			'click .wp-playlist-prev' : 'prev'
		},

		clickTrack : function (e) {
			e.preventDefault();

			this.index = this.$( '.wp-playlist-item' ).index( e.currentTarget );
			this.setCurrent();
		},

		ended : function () {
			if ( this.index + 1 < this.tracks.length ) {
				this.next();
			} else {
				this.index = 0;
				this.setCurrent();
			}
		},

		next : function () {
			this.index = this.index + 1 >= this.tracks.length ? 0 : this.index + 1;
			this.setCurrent();
		},

		prev : function () {
			this.index = this.index - 1 < 0 ? this.tracks.length - 1 : this.index - 1;
			this.setCurrent();
		},

		loadCurrent : function () {
			var last = this.playerNode.attr( 'src' ) && this.playerNode.attr( 'src' ).split('.').pop(),
				current = this.current.get( 'src' ).split('.').pop();

			this.mejs && this.mejs.pause();

			if ( last !== current ) {
				this.setPlayer( true );
			} else {
				this.playerNode.attr( 'src', this.current.get( 'src' ) );
				this.playCurrentSrc();
			}
		},

		setCurrent : function () {
			this.current = this.tracks.at( this.index );

			if ( this.data.tracklist ) {
				this.$( '.wp-playlist-item' )
					.removeClass( this.playingClass )
					.eq( this.index )
						.addClass( this.playingClass );
			}

			this.loadCurrent();
		}
	});

	/**
	 * Initialize media playlists in the document.
	 *
	 * Only initializes new playlists not previously-initialized.
	 *
	 * @since 4.9.3
	 * @returns {void}
	 */
	function initialize() {
		$( '.wp-playlist:not(:has(.mejs-container))' ).each( function() {
			new WPPlaylistView( { el: this } );
		} );
	}

	/**
	 * Expose the API publicly on window.wp.playlist.
	 *
	 * @namespace wp.playlist
	 * @since 4.9.3
	 * @type {object}
	 */
	window.wp.playlist = {
		initialize: initialize
	};

	$( document ).ready( initialize );

	window.WPPlaylistView = WPPlaylistView;

}(jQuery, _, Backbone));
;
/* global jQuery, JSON, _customizePartialRefreshExports, console */

/** @namespace wp.customize.selectiveRefresh */
wp.customize.selectiveRefresh = ( function( $, api ) {
	'use strict';
	var self, Partial, Placement;

	self = {
		ready: $.Deferred(),
		editShortcutVisibility: new api.Value(),
		data: {
			partials: {},
			renderQueryVar: '',
			l10n: {
				shiftClickToEdit: ''
			}
		},
		currentRequest: null
	};

	_.extend( self, api.Events );

	/**
	 * A Customizer Partial.
	 *
	 * A partial provides a rendering of one or more settings according to a template.
	 *
	 * @memberOf wp.customize.selectiveRefresh
	 *
	 * @see PHP class WP_Customize_Partial.
	 *
	 * @class
	 * @augments wp.customize.Class
	 * @since 4.5.0
	 */
	Partial = self.Partial = api.Class.extend(/** @lends wp.customize.SelectiveRefresh.Partial.prototype */{

		id: null,

		/**
		 * Default params.
		 *
		 * @since 4.9.0
		 * @var {object}
		 */
		defaults: {
			selector: null,
			primarySetting: null,
			containerInclusive: false,
			fallbackRefresh: true // Note this needs to be false in a front-end editing context.
		},

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 *
		 * @param {string} id                      - Unique identifier for the partial instance.
		 * @param {object} options                 - Options hash for the partial instance.
		 * @param {string} options.type            - Type of partial (e.g. nav_menu, widget, etc)
		 * @param {string} options.selector        - jQuery selector to find the container element in the page.
		 * @param {array}  options.settings        - The IDs for the settings the partial relates to.
		 * @param {string} options.primarySetting  - The ID for the primary setting the partial renders.
		 * @param {bool}   options.fallbackRefresh - Whether to refresh the entire preview in case of a partial refresh failure.
		 * @param {object} [options.params]        - Deprecated wrapper for the above properties.
		 */
		initialize: function( id, options ) {
			var partial = this;
			options = options || {};
			partial.id = id;

			partial.params = _.extend(
				{
					settings: []
				},
				partial.defaults,
				options.params || options
			);

			partial.deferred = {};
			partial.deferred.ready = $.Deferred();

			partial.deferred.ready.done( function() {
				partial.ready();
			} );
		},

		/**
		 * Set up the partial.
		 *
		 * @since 4.5.0
		 */
		ready: function() {
			var partial = this;
			_.each( partial.placements(), function( placement ) {
				$( placement.container ).attr( 'title', self.data.l10n.shiftClickToEdit );
				partial.createEditShortcutForPlacement( placement );
			} );
			$( document ).on( 'click', partial.params.selector, function( e ) {
				if ( ! e.shiftKey ) {
					return;
				}
				e.preventDefault();
				_.each( partial.placements(), function( placement ) {
					if ( $( placement.container ).is( e.currentTarget ) ) {
						partial.showControl();
					}
				} );
			} );
		},

		/**
		 * Create and show the edit shortcut for a given partial placement container.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {Placement} placement The placement container element.
		 * @returns {void}
		 */
		createEditShortcutForPlacement: function( placement ) {
			var partial = this, $shortcut, $placementContainer, illegalAncestorSelector, illegalContainerSelector;
			if ( ! placement.container ) {
				return;
			}
			$placementContainer = $( placement.container );
			illegalAncestorSelector = 'head';
			illegalContainerSelector = 'area, audio, base, bdi, bdo, br, button, canvas, col, colgroup, command, datalist, embed, head, hr, html, iframe, img, input, keygen, label, link, map, math, menu, meta, noscript, object, optgroup, option, param, progress, rp, rt, ruby, script, select, source, style, svg, table, tbody, textarea, tfoot, thead, title, tr, track, video, wbr';
			if ( ! $placementContainer.length || $placementContainer.is( illegalContainerSelector ) || $placementContainer.closest( illegalAncestorSelector ).length ) {
				return;
			}
			$shortcut = partial.createEditShortcut();
			$shortcut.on( 'click', function( event ) {
				event.preventDefault();
				event.stopPropagation();
				partial.showControl();
			} );
			partial.addEditShortcutToPlacement( placement, $shortcut );
		},

		/**
		 * Add an edit shortcut to the placement container.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {Placement} placement The placement for the partial.
		 * @param {jQuery} $editShortcut The shortcut element as a jQuery object.
		 * @returns {void}
		 */
		addEditShortcutToPlacement: function( placement, $editShortcut ) {
			var $placementContainer = $( placement.container );
			$placementContainer.prepend( $editShortcut );
			if ( ! $placementContainer.is( ':visible' ) || 'none' === $placementContainer.css( 'display' ) ) {
				$editShortcut.addClass( 'customize-partial-edit-shortcut-hidden' );
			}
		},

		/**
		 * Return the unique class name for the edit shortcut button for this partial.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @return {string} Partial ID converted into a class name for use in shortcut.
		 */
		getEditShortcutClassName: function() {
			var partial = this, cleanId;
			cleanId = partial.id.replace( /]/g, '' ).replace( /\[/g, '-' );
			return 'customize-partial-edit-shortcut-' + cleanId;
		},

		/**
		 * Return the appropriate translated string for the edit shortcut button.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @return {string} Tooltip for edit shortcut.
		 */
		getEditShortcutTitle: function() {
			var partial = this, l10n = self.data.l10n;
			switch ( partial.getType() ) {
				case 'widget':
					return l10n.clickEditWidget;
				case 'blogname':
					return l10n.clickEditTitle;
				case 'blogdescription':
					return l10n.clickEditTitle;
				case 'nav_menu':
					return l10n.clickEditMenu;
				default:
					return l10n.clickEditMisc;
			}
		},

		/**
		 * Return the type of this partial
		 *
		 * Will use `params.type` if set, but otherwise will try to infer type from settingId.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @return {string} Type of partial derived from type param or the related setting ID.
		 */
		getType: function() {
			var partial = this, settingId;
			settingId = partial.params.primarySetting || _.first( partial.settings() ) || 'unknown';
			if ( partial.params.type ) {
				return partial.params.type;
			}
			if ( settingId.match( /^nav_menu_instance\[/ ) ) {
				return 'nav_menu';
			}
			if ( settingId.match( /^widget_.+\[\d+]$/ ) ) {
				return 'widget';
			}
			return settingId;
		},

		/**
		 * Create an edit shortcut button for this partial.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @return {jQuery} The edit shortcut button element.
		 */
		createEditShortcut: function() {
			var partial = this, shortcutTitle, $buttonContainer, $button, $image;
			shortcutTitle = partial.getEditShortcutTitle();
			$buttonContainer = $( '<span>', {
				'class': 'customize-partial-edit-shortcut ' + partial.getEditShortcutClassName()
			} );
			$button = $( '<button>', {
				'aria-label': shortcutTitle,
				'title': shortcutTitle,
				'class': 'customize-partial-edit-shortcut-button'
			} );
			$image = $( '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"/></svg>' );
			$button.append( $image );
			$buttonContainer.append( $button );
			return $buttonContainer;
		},

		/**
		 * Find all placements for this partial int he document.
		 *
		 * @since 4.5.0
		 *
		 * @return {Array.<Placement>}
		 */
		placements: function() {
			var partial = this, selector;

			selector = partial.params.selector || '';
			if ( selector ) {
				selector += ', ';
			}
			selector += '[data-customize-partial-id="' + partial.id + '"]'; // @todo Consider injecting customize-partial-id-${id} classnames instead.

			return $( selector ).map( function() {
				var container = $( this ), context;

				context = container.data( 'customize-partial-placement-context' );
				if ( _.isString( context ) && '{' === context.substr( 0, 1 ) ) {
					throw new Error( 'context JSON parse error' );
				}

				return new Placement( {
					partial: partial,
					container: container,
					context: context
				} );
			} ).get();
		},

		/**
		 * Get list of setting IDs related to this partial.
		 *
		 * @since 4.5.0
		 *
		 * @return {String[]}
		 */
		settings: function() {
			var partial = this;
			if ( partial.params.settings && 0 !== partial.params.settings.length ) {
				return partial.params.settings;
			} else if ( partial.params.primarySetting ) {
				return [ partial.params.primarySetting ];
			} else {
				return [ partial.id ];
			}
		},

		/**
		 * Return whether the setting is related to the partial.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value|string} setting  ID or object for setting.
		 * @return {boolean} Whether the setting is related to the partial.
		 */
		isRelatedSetting: function( setting /*... newValue, oldValue */ ) {
			var partial = this;
			if ( _.isString( setting ) ) {
				setting = api( setting );
			}
			if ( ! setting ) {
				return false;
			}
			return -1 !== _.indexOf( partial.settings(), setting.id );
		},

		/**
		 * Show the control to modify this partial's setting(s).
		 *
		 * This may be overridden for inline editing.
		 *
		 * @since 4.5.0
		 */
		showControl: function() {
			var partial = this, settingId = partial.params.primarySetting;
			if ( ! settingId ) {
				settingId = _.first( partial.settings() );
			}
			if ( partial.getType() === 'nav_menu' ) {
				if ( partial.params.navMenuArgs.theme_location ) {
					settingId = 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']';
				} else if ( partial.params.navMenuArgs.menu )   {
					settingId = 'nav_menu[' + String( partial.params.navMenuArgs.menu ) + ']';
				}
			}
			api.preview.send( 'focus-control-for-setting', settingId );
		},

		/**
		 * Prepare container for selective refresh.
		 *
		 * @since 4.5.0
		 *
		 * @param {Placement} placement
		 */
		preparePlacement: function( placement ) {
			$( placement.container ).addClass( 'customize-partial-refreshing' );
		},

		/**
		 * Reference to the pending promise returned from self.requestPartial().
		 *
		 * @since 4.5.0
		 * @private
		 */
		_pendingRefreshPromise: null,

		/**
		 * Request the new partial and render it into the placements.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.selectiveRefresh.Partial}
		 * @return {jQuery.Promise}
		 */
		refresh: function() {
			var partial = this, refreshPromise;

			refreshPromise = self.requestPartial( partial );

			if ( ! partial._pendingRefreshPromise ) {
				_.each( partial.placements(), function( placement ) {
					partial.preparePlacement( placement );
				} );

				refreshPromise.done( function( placements ) {
					_.each( placements, function( placement ) {
						partial.renderContent( placement );
					} );
				} );

				refreshPromise.fail( function( data, placements ) {
					partial.fallback( data, placements );
				} );

				// Allow new request when this one finishes.
				partial._pendingRefreshPromise = refreshPromise;
				refreshPromise.always( function() {
					partial._pendingRefreshPromise = null;
				} );
			}

			return refreshPromise;
		},

		/**
		 * Apply the addedContent in the placement to the document.
		 *
		 * Note the placement object will have its container and removedNodes
		 * properties updated.
		 *
		 * @since 4.5.0
		 *
		 * @param {Placement}             placement
		 * @param {Element|jQuery}        [placement.container]  - This param will be empty if there was no element matching the selector.
		 * @param {string|object|boolean} placement.addedContent - Rendered HTML content, a data object for JS templates to render, or false if no render.
		 * @param {object}                [placement.context]    - Optional context information about the container.
		 * @returns {boolean} Whether the rendering was successful and the fallback was not invoked.
		 */
		renderContent: function( placement ) {
			var partial = this, content, newContainerElement;
			if ( ! placement.container ) {
				partial.fallback( new Error( 'no_container' ), [ placement ] );
				return false;
			}
			placement.container = $( placement.container );
			if ( false === placement.addedContent ) {
				partial.fallback( new Error( 'missing_render' ), [ placement ] );
				return false;
			}

			// Currently a subclass needs to override renderContent to handle partials returning data object.
			if ( ! _.isString( placement.addedContent ) ) {
				partial.fallback( new Error( 'non_string_content' ), [ placement ] );
				return false;
			}

			/* jshint ignore:start */
			self.orginalDocumentWrite = document.write;
			document.write = function() {
				throw new Error( self.data.l10n.badDocumentWrite );
			};
			/* jshint ignore:end */
			try {
				content = placement.addedContent;
				if ( wp.emoji && wp.emoji.parse && ! $.contains( document.head, placement.container[0] ) ) {
					content = wp.emoji.parse( content );
				}

				if ( partial.params.containerInclusive ) {

					// Note that content may be an empty string, and in this case jQuery will just remove the oldContainer
					newContainerElement = $( content );

					// Merge the new context on top of the old context.
					placement.context = _.extend(
						placement.context,
						newContainerElement.data( 'customize-partial-placement-context' ) || {}
					);
					newContainerElement.data( 'customize-partial-placement-context', placement.context );

					placement.removedNodes = placement.container;
					placement.container = newContainerElement;
					placement.removedNodes.replaceWith( placement.container );
					placement.container.attr( 'title', self.data.l10n.shiftClickToEdit );
				} else {
					placement.removedNodes = document.createDocumentFragment();
					while ( placement.container[0].firstChild ) {
						placement.removedNodes.appendChild( placement.container[0].firstChild );
					}

					placement.container.html( content );
				}

				placement.container.removeClass( 'customize-render-content-error' );
			} catch ( error ) {
				if ( 'undefined' !== typeof console && console.error ) {
					console.error( partial.id, error );
				}
				partial.fallback( error, [ placement ] );
			}
			/* jshint ignore:start */
			document.write = self.orginalDocumentWrite;
			self.orginalDocumentWrite = null;
			/* jshint ignore:end */

			partial.createEditShortcutForPlacement( placement );
			placement.container.removeClass( 'customize-partial-refreshing' );

			// Prevent placement container from being re-triggered as being rendered among nested partials.
			placement.container.data( 'customize-partial-content-rendered', true );

			/*
			 * Note that the 'wp_audio_shortcode_library' and 'wp_video_shortcode_library' filters
			 * will determine whether or not wp.mediaelement is loaded and whether it will
			 * initialize audio and video respectively. See also https://core.trac.wordpress.org/ticket/40144
			 */
			if ( wp.mediaelement ) {
				wp.mediaelement.initialize();
			}

			if ( wp.playlist ) {
				wp.playlist.initialize();
			}

			/**
			 * Announce when a partial's placement has been rendered so that dynamic elements can be re-built.
			 */
			self.trigger( 'partial-content-rendered', placement );
			return true;
		},

		/**
		 * Handle fail to render partial.
		 *
		 * The first argument is either the failing jqXHR or an Error object, and the second argument is the array of containers.
		 *
		 * @since 4.5.0
		 */
		fallback: function() {
			var partial = this;
			if ( partial.params.fallbackRefresh ) {
				self.requestFullRefresh();
			}
		}
	} );

	/**
	 * A Placement for a Partial.
	 *
	 * A partial placement is the actual physical representation of a partial for a given context.
	 * It also may have information in relation to how a placement may have just changed.
	 * The placement is conceptually similar to a DOM Range or MutationRecord.
	 *
	 * @memberOf wp.customize.selectiveRefresh
	 *
	 * @class Placement
	 * @augments wp.customize.Class
	 * @since 4.5.0
	 */
	self.Placement = Placement = api.Class.extend(/** @lends wp.customize.selectiveRefresh.prototype */{

		/**
		 * The partial with which the container is associated.
		 *
		 * @param {wp.customize.selectiveRefresh.Partial}
		 */
		partial: null,

		/**
		 * DOM element which contains the placement's contents.
		 *
		 * This will be null if the startNode and endNode do not point to the same
		 * DOM element, such as in the case of a sidebar partial.
		 * This container element itself will be replaced for partials that
		 * have containerInclusive param defined as true.
		 */
		container: null,

		/**
		 * DOM node for the initial boundary of the placement.
		 *
		 * This will normally be the same as endNode since most placements appear as elements.
		 * This is primarily useful for widget sidebars which do not have intrinsic containers, but
		 * for which an HTML comment is output before to mark the starting position.
		 */
		startNode: null,

		/**
		 * DOM node for the terminal boundary of the placement.
		 *
		 * This will normally be the same as startNode since most placements appear as elements.
		 * This is primarily useful for widget sidebars which do not have intrinsic containers, but
		 * for which an HTML comment is output before to mark the ending position.
		 */
		endNode: null,

		/**
		 * Context data.
		 *
		 * This provides information about the placement which is included in the request
		 * in order to render the partial properly.
		 *
		 * @param {object}
		 */
		context: null,

		/**
		 * The content for the partial when refreshed.
		 *
		 * @param {string}
		 */
		addedContent: null,

		/**
		 * DOM node(s) removed when the partial is refreshed.
		 *
		 * If the partial is containerInclusive, then the removedNodes will be
		 * the single Element that was the partial's former placement. If the
		 * partial is not containerInclusive, then the removedNodes will be a
		 * documentFragment containing the nodes removed.
		 *
		 * @param {Element|DocumentFragment}
		 */
		removedNodes: null,

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 *
		 * @param {object}                   args
		 * @param {Partial}                  args.partial
		 * @param {jQuery|Element}           [args.container]
		 * @param {Node}                     [args.startNode]
		 * @param {Node}                     [args.endNode]
		 * @param {object}                   [args.context]
		 * @param {string}                   [args.addedContent]
		 * @param {jQuery|DocumentFragment}  [args.removedNodes]
		 */
		initialize: function( args ) {
			var placement = this;

			args = _.extend( {}, args || {} );
			if ( ! args.partial || ! args.partial.extended( Partial ) ) {
				throw new Error( 'Missing partial' );
			}
			args.context = args.context || {};
			if ( args.container ) {
				args.container = $( args.container );
			}

			_.extend( placement, args );
		}

	});

	/**
	 * Mapping of type names to Partial constructor subclasses.
	 *
	 * @since 4.5.0
	 *
	 * @type {Object.<string, wp.customize.selectiveRefresh.Partial>}
	 */
	self.partialConstructor = {};

	self.partial = new api.Values({ defaultConstructor: Partial });

	/**
	 * Get the POST vars for a Customizer preview request.
	 *
	 * @since 4.5.0
	 * @see wp.customize.previewer.query()
	 *
	 * @return {object}
	 */
	self.getCustomizeQuery = function() {
		var dirtyCustomized = {};
		api.each( function( value, key ) {
			if ( value._dirty ) {
				dirtyCustomized[ key ] = value();
			}
		} );

		return {
			wp_customize: 'on',
			nonce: api.settings.nonce.preview,
			customize_theme: api.settings.theme.stylesheet,
			customized: JSON.stringify( dirtyCustomized ),
			customize_changeset_uuid: api.settings.changeset.uuid
		};
	};

	/**
	 * Currently-requested partials and their associated deferreds.
	 *
	 * @since 4.5.0
	 * @type {Object<string, { deferred: jQuery.Promise, partial: wp.customize.selectiveRefresh.Partial }>}
	 */
	self._pendingPartialRequests = {};

	/**
	 * Timeout ID for the current requesr, or null if no request is current.
	 *
	 * @since 4.5.0
	 * @type {number|null}
	 * @private
	 */
	self._debouncedTimeoutId = null;

	/**
	 * Current jqXHR for the request to the partials.
	 *
	 * @since 4.5.0
	 * @type {jQuery.jqXHR|null}
	 * @private
	 */
	self._currentRequest = null;

	/**
	 * Request full page refresh.
	 *
	 * When selective refresh is embedded in the context of front-end editing, this request
	 * must fail or else changes will be lost, unless transactions are implemented.
	 *
	 * @since 4.5.0
	 */
	self.requestFullRefresh = function() {
		api.preview.send( 'refresh' );
	};

	/**
	 * Request a re-rendering of a partial.
	 *
	 * @since 4.5.0
	 *
	 * @param {wp.customize.selectiveRefresh.Partial} partial
	 * @return {jQuery.Promise}
	 */
	self.requestPartial = function( partial ) {
		var partialRequest;

		if ( self._debouncedTimeoutId ) {
			clearTimeout( self._debouncedTimeoutId );
			self._debouncedTimeoutId = null;
		}
		if ( self._currentRequest ) {
			self._currentRequest.abort();
			self._currentRequest = null;
		}

		partialRequest = self._pendingPartialRequests[ partial.id ];
		if ( ! partialRequest || 'pending' !== partialRequest.deferred.state() ) {
			partialRequest = {
				deferred: $.Deferred(),
				partial: partial
			};
			self._pendingPartialRequests[ partial.id ] = partialRequest;
		}

		// Prevent leaking partial into debounced timeout callback.
		partial = null;

		self._debouncedTimeoutId = setTimeout(
			function() {
				var data, partialPlacementContexts, partialsPlacements, request;

				self._debouncedTimeoutId = null;
				data = self.getCustomizeQuery();

				/*
				 * It is key that the containers be fetched exactly at the point of the request being
				 * made, because the containers need to be mapped to responses by array indices.
				 */
				partialsPlacements = {};

				partialPlacementContexts = {};

				_.each( self._pendingPartialRequests, function( pending, partialId ) {
					partialsPlacements[ partialId ] = pending.partial.placements();
					if ( ! self.partial.has( partialId ) ) {
						pending.deferred.rejectWith( pending.partial, [ new Error( 'partial_removed' ), partialsPlacements[ partialId ] ] );
					} else {
						/*
						 * Note that this may in fact be an empty array. In that case, it is the responsibility
						 * of the Partial subclass instance to know where to inject the response, or else to
						 * just issue a refresh (default behavior). The data being returned with each container
						 * is the context information that may be needed to render certain partials, such as
						 * the contained sidebar for rendering widgets or what the nav menu args are for a menu.
						 */
						partialPlacementContexts[ partialId ] = _.map( partialsPlacements[ partialId ], function( placement ) {
							return placement.context || {};
						} );
					}
				} );

				data.partials = JSON.stringify( partialPlacementContexts );
				data[ self.data.renderQueryVar ] = '1';

				request = self._currentRequest = wp.ajax.send( null, {
					data: data,
					url: api.settings.url.self
				} );

				request.done( function( data ) {

					/**
					 * Announce the data returned from a request to render partials.
					 *
					 * The data is filtered on the server via customize_render_partials_response
					 * so plugins can inject data from the server to be utilized
					 * on the client via this event. Plugins may use this filter
					 * to communicate script and style dependencies that need to get
					 * injected into the page to support the rendered partials.
					 * This is similar to the 'saved' event.
					 */
					self.trigger( 'render-partials-response', data );

					// Relay errors (warnings) captured during rendering and relay to console.
					if ( data.errors && 'undefined' !== typeof console && console.warn ) {
						_.each( data.errors, function( error ) {
							console.warn( error );
						} );
					}

					/*
					 * Note that data is an array of items that correspond to the array of
					 * containers that were submitted in the request. So we zip up the
					 * array of containers with the array of contents for those containers,
					 * and send them into .
					 */
					_.each( self._pendingPartialRequests, function( pending, partialId ) {
						var placementsContents;
						if ( ! _.isArray( data.contents[ partialId ] ) ) {
							pending.deferred.rejectWith( pending.partial, [ new Error( 'unrecognized_partial' ), partialsPlacements[ partialId ] ] );
						} else {
							placementsContents = _.map( data.contents[ partialId ], function( content, i ) {
								var partialPlacement = partialsPlacements[ partialId ][ i ];
								if ( partialPlacement ) {
									partialPlacement.addedContent = content;
								} else {
									partialPlacement = new Placement( {
										partial: pending.partial,
										addedContent: content
									} );
								}
								return partialPlacement;
							} );
							pending.deferred.resolveWith( pending.partial, [ placementsContents ] );
						}
					} );
					self._pendingPartialRequests = {};
				} );

				request.fail( function( data, statusText ) {

					/*
					 * Ignore failures caused by partial.currentRequest.abort()
					 * The pending deferreds will remain in self._pendingPartialRequests
					 * for re-use with the next request.
					 */
					if ( 'abort' === statusText ) {
						return;
					}

					_.each( self._pendingPartialRequests, function( pending, partialId ) {
						pending.deferred.rejectWith( pending.partial, [ data, partialsPlacements[ partialId ] ] );
					} );
					self._pendingPartialRequests = {};
				} );
			},
			api.settings.timeouts.selectiveRefresh
		);

		return partialRequest.deferred.promise();
	};

	/**
	 * Add partials for any nav menu container elements in the document.
	 *
	 * This method may be called multiple times. Containers that already have been
	 * seen will be skipped.
	 *
	 * @since 4.5.0
	 *
	 * @param {jQuery|HTMLElement} [rootElement]
	 * @param {object}             [options]
	 * @param {boolean=true}       [options.triggerRendered]
	 */
	self.addPartials = function( rootElement, options ) {
		var containerElements;
		if ( ! rootElement ) {
			rootElement = document.documentElement;
		}
		rootElement = $( rootElement );
		options = _.extend(
			{
				triggerRendered: true
			},
			options || {}
		);

		containerElements = rootElement.find( '[data-customize-partial-id]' );
		if ( rootElement.is( '[data-customize-partial-id]' ) ) {
			containerElements = containerElements.add( rootElement );
		}
		containerElements.each( function() {
			var containerElement = $( this ), partial, placement, id, Constructor, partialOptions, containerContext;
			id = containerElement.data( 'customize-partial-id' );
			if ( ! id ) {
				return;
			}
			containerContext = containerElement.data( 'customize-partial-placement-context' ) || {};

			partial = self.partial( id );
			if ( ! partial ) {
				partialOptions = containerElement.data( 'customize-partial-options' ) || {};
				partialOptions.constructingContainerContext = containerElement.data( 'customize-partial-placement-context' ) || {};
				Constructor = self.partialConstructor[ containerElement.data( 'customize-partial-type' ) ] || self.Partial;
				partial = new Constructor( id, partialOptions );
				self.partial.add( partial );
			}

			/*
			 * Only trigger renders on (nested) partials that have been not been
			 * handled yet. An example where this would apply is a nav menu
			 * embedded inside of a navigation menu widget. When the widget's title
			 * is updated, the entire widget will re-render and then the event
			 * will be triggered for the nested nav menu to do any initialization.
			 */
			if ( options.triggerRendered && ! containerElement.data( 'customize-partial-content-rendered' ) ) {

				placement = new Placement( {
					partial: partial,
					context: containerContext,
					container: containerElement
				} );

				$( placement.container ).attr( 'title', self.data.l10n.shiftClickToEdit );
				partial.createEditShortcutForPlacement( placement );

				/**
				 * Announce when a partial's nested placement has been re-rendered.
				 */
				self.trigger( 'partial-content-rendered', placement );
			}
			containerElement.data( 'customize-partial-content-rendered', true );
		} );
	};

	api.bind( 'preview-ready', function() {
		var handleSettingChange, watchSettingChange, unwatchSettingChange;

		_.extend( self.data, _customizePartialRefreshExports );

		// Create the partial JS models.
		_.each( self.data.partials, function( data, id ) {
			var Constructor, partial = self.partial( id );
			if ( ! partial ) {
				Constructor = self.partialConstructor[ data.type ] || self.Partial;
				partial = new Constructor(
					id,
					_.extend( { params: data }, data ) // Inclusion of params alias is for back-compat for custom partials that expect to augment this property.
				);
				self.partial.add( partial );
			} else {
				_.extend( partial.params, data );
			}
		} );

		/**
		 * Handle change to a setting.
		 *
		 * Note this is largely needed because adding a 'change' event handler to wp.customize
		 * will only include the changed setting object as an argument, not including the
		 * new value or the old value.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Setting}
		 *
		 * @param {*|null} newValue New value, or null if the setting was just removed.
		 * @param {*|null} oldValue Old value, or null if the setting was just added.
		 */
		handleSettingChange = function( newValue, oldValue ) {
			var setting = this;
			self.partial.each( function( partial ) {
				if ( partial.isRelatedSetting( setting, newValue, oldValue ) ) {
					partial.refresh();
				}
			} );
		};

		/**
		 * Trigger the initial change for the added setting, and watch for changes.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Values}
		 *
		 * @param {wp.customize.Setting} setting
		 */
		watchSettingChange = function( setting ) {
			handleSettingChange.call( setting, setting(), null );
			setting.bind( handleSettingChange );
		};

		/**
		 * Trigger the final change for the removed setting, and unwatch for changes.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Values}
		 *
		 * @param {wp.customize.Setting} setting
		 */
		unwatchSettingChange = function( setting ) {
			handleSettingChange.call( setting, null, setting() );
			setting.unbind( handleSettingChange );
		};

		api.bind( 'add', watchSettingChange );
		api.bind( 'remove', unwatchSettingChange );
		api.each( function( setting ) {
			setting.bind( handleSettingChange );
		} );

		// Add (dynamic) initial partials that are declared via data-* attributes.
		self.addPartials( document.documentElement, {
			triggerRendered: false
		} );

		// Add new dynamic partials when the document changes.
		if ( 'undefined' !== typeof MutationObserver ) {
			self.mutationObserver = new MutationObserver( function( mutations ) {
				_.each( mutations, function( mutation ) {
					self.addPartials( $( mutation.target ) );
				} );
			} );
			self.mutationObserver.observe( document.documentElement, {
				childList: true,
				subtree: true
			} );
		}

		/**
		 * Handle rendering of partials.
		 *
		 * @param {api.selectiveRefresh.Placement} placement
		 */
		api.selectiveRefresh.bind( 'partial-content-rendered', function( placement ) {
			if ( placement.container ) {
				self.addPartials( placement.container );
			}
		} );

		/**
		 * Handle setting validities in partial refresh response.
		 *
		 * @param {object} data Response data.
		 * @param {object} data.setting_validities Setting validities.
		 */
		api.selectiveRefresh.bind( 'render-partials-response', function handleSettingValiditiesResponse( data ) {
			if ( data.setting_validities ) {
				api.preview.send( 'selective-refresh-setting-validities', data.setting_validities );
			}
		} );

		api.preview.bind( 'edit-shortcut-visibility', function( visibility ) {
			api.selectiveRefresh.editShortcutVisibility.set( visibility );
		} );
		api.selectiveRefresh.editShortcutVisibility.bind( function( visibility ) {
			var body = $( document.body ), shouldAnimateHide;

			shouldAnimateHide = ( 'hidden' === visibility && body.hasClass( 'customize-partial-edit-shortcuts-shown' ) && ! body.hasClass( 'customize-partial-edit-shortcuts-hidden' ) );
			body.toggleClass( 'customize-partial-edit-shortcuts-hidden', shouldAnimateHide );
			body.toggleClass( 'customize-partial-edit-shortcuts-shown', 'visible' === visibility );
		} );

		api.preview.bind( 'active', function() {

			// Make all partials ready.
			self.partial.each( function( partial ) {
				partial.deferred.ready.resolve();
			} );

			// Make all partials added henceforth as ready upon add.
			self.partial.bind( 'add', function( partial ) {
				partial.deferred.ready.resolve();
			} );
		} );

	} );

	return self;
}( jQuery, wp.customize ) );
;
/* global _wpWidgetCustomizerPreviewSettings */

/** @namespace wp.customize.widgetsPreview */
wp.customize.widgetsPreview = wp.customize.WidgetCustomizerPreview = (function( $, _, wp, api ) {

	var self;

	self = {
		renderedSidebars: {},
		renderedWidgets: {},
		registeredSidebars: [],
		registeredWidgets: {},
		widgetSelectors: [],
		preview: null,
		l10n: {
			widgetTooltip: ''
		},
		selectiveRefreshableWidgets: {}
	};

	/**
	 * Init widgets preview.
	 *
	 * @since 4.5.0
	 */
	self.init = function() {
		var self = this;

		self.preview = api.preview;
		if ( ! _.isEmpty( self.selectiveRefreshableWidgets ) ) {
			self.addPartials();
		}

		self.buildWidgetSelectors();
		self.highlightControls();

		self.preview.bind( 'highlight-widget', self.highlightWidget );

		api.preview.bind( 'active', function() {
			self.highlightControls();
		} );

		/*
		 * Refresh a partial when the controls pane requests it. This is used currently just by the
		 * Gallery widget so that when an attachment's caption is updated in the media modal,
		 * the widget in the preview will then be refreshed to show the change. Normally doing this
		 * would not be necessary because all of the state should be contained inside the changeset,
		 * as everything done in the Customizer should not make a change to the site unless the
		 * changeset itself is published. Attachments are a current exception to this rule.
		 * For a proposal to include attachments in the customized state, see #37887.
		 */
		api.preview.bind( 'refresh-widget-partial', function( widgetId ) {
			var partialId = 'widget[' + widgetId + ']';
			if ( api.selectiveRefresh.partial.has( partialId ) ) {
				api.selectiveRefresh.partial( partialId ).refresh();
			} else if ( self.renderedWidgets[ widgetId ] ) {
				api.preview.send( 'refresh' ); // Fallback in case theme does not support 'customize-selective-refresh-widgets'.
			}
		} );
	};

	/**
	 * Partial representing a widget instance.
	 *
	 * @memberOf wp.customize.widgetsPreview
	 * @alias wp.customize.widgetsPreview.WidgetPartial
	 *
	 * @class
	 * @augments wp.customize.selectiveRefresh.Partial
	 * @since 4.5.0
	 */
	self.WidgetPartial = api.selectiveRefresh.Partial.extend(/** @lends wp.customize.widgetsPreview.WidgetPartial.prototype */{

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 * @param {string} id - Partial ID.
		 * @param {Object} options
		 * @param {Object} options.params
		 */
		initialize: function( id, options ) {
			var partial = this, matches;
			matches = id.match( /^widget\[(.+)]$/ );
			if ( ! matches ) {
				throw new Error( 'Illegal id for widget partial.' );
			}

			partial.widgetId = matches[1];
			partial.widgetIdParts = self.parseWidgetId( partial.widgetId );
			options = options || {};
			options.params = _.extend(
				{
					settings: [ self.getWidgetSettingId( partial.widgetId ) ],
					containerInclusive: true
				},
				options.params || {}
			);

			api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );
		},

		/**
		 * Refresh widget partial.
		 *
		 * @returns {Promise}
		 */
		refresh: function() {
			var partial = this, refreshDeferred;
			if ( ! self.selectiveRefreshableWidgets[ partial.widgetIdParts.idBase ] ) {
				refreshDeferred = $.Deferred();
				refreshDeferred.reject();
				partial.fallback();
				return refreshDeferred.promise();
			} else {
				return api.selectiveRefresh.Partial.prototype.refresh.call( partial );
			}
		},

		/**
		 * Send widget-updated message to parent so spinner will get removed from widget control.
		 *
		 * @inheritdoc
		 * @param {wp.customize.selectiveRefresh.Placement} placement
		 */
		renderContent: function( placement ) {
			var partial = this;
			if ( api.selectiveRefresh.Partial.prototype.renderContent.call( partial, placement ) ) {
				api.preview.send( 'widget-updated', partial.widgetId );
				api.selectiveRefresh.trigger( 'widget-updated', partial );
			}
		}
	});

	/**
	 * Partial representing a widget area.
	 *
	 * @memberOf wp.customize.widgetsPreview
	 * @alias wp.customize.widgetsPreview.SidebarPartial
	 *
	 * @class
	 * @augments wp.customize.selectiveRefresh.Partial
	 * @since 4.5.0
	 */
	self.SidebarPartial = api.selectiveRefresh.Partial.extend(/** @lends wp.customize.widgetsPreview.SidebarPartial.prototype */{

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 * @param {string} id - Partial ID.
		 * @param {Object} options
		 * @param {Object} options.params
		 */
		initialize: function( id, options ) {
			var partial = this, matches;
			matches = id.match( /^sidebar\[(.+)]$/ );
			if ( ! matches ) {
				throw new Error( 'Illegal id for sidebar partial.' );
			}
			partial.sidebarId = matches[1];

			options = options || {};
			options.params = _.extend(
				{
					settings: [ 'sidebars_widgets[' + partial.sidebarId + ']' ]
				},
				options.params || {}
			);

			api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );

			if ( ! partial.params.sidebarArgs ) {
				throw new Error( 'The sidebarArgs param was not provided.' );
			}
			if ( partial.params.settings.length > 1 ) {
				throw new Error( 'Expected SidebarPartial to only have one associated setting' );
			}
		},

		/**
		 * Set up the partial.
		 *
		 * @since 4.5.0
		 */
		ready: function() {
			var sidebarPartial = this;

			// Watch for changes to the sidebar_widgets setting.
			_.each( sidebarPartial.settings(), function( settingId ) {
				api( settingId ).bind( _.bind( sidebarPartial.handleSettingChange, sidebarPartial ) );
			} );

			// Trigger an event for this sidebar being updated whenever a widget inside is rendered.
			api.selectiveRefresh.bind( 'partial-content-rendered', function( placement ) {
				var isAssignedWidgetPartial = (
					placement.partial.extended( self.WidgetPartial ) &&
					( -1 !== _.indexOf( sidebarPartial.getWidgetIds(), placement.partial.widgetId ) )
				);
				if ( isAssignedWidgetPartial ) {
					api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
				}
			} );

			// Make sure that a widget partial has a container in the DOM prior to a refresh.
			api.bind( 'change', function( widgetSetting ) {
				var widgetId, parsedId;
				parsedId = self.parseWidgetSettingId( widgetSetting.id );
				if ( ! parsedId ) {
					return;
				}
				widgetId = parsedId.idBase;
				if ( parsedId.number ) {
					widgetId += '-' + String( parsedId.number );
				}
				if ( -1 !== _.indexOf( sidebarPartial.getWidgetIds(), widgetId ) ) {
					sidebarPartial.ensureWidgetPlacementContainers( widgetId );
				}
			} );
		},

		/**
		 * Get the before/after boundary nodes for all instances of this sidebar (usually one).
		 *
		 * Note that TreeWalker is not implemented in IE8.
		 *
		 * @since 4.5.0
		 * @returns {Array.<{before: Comment, after: Comment, instanceNumber: number}>}
		 */
		findDynamicSidebarBoundaryNodes: function() {
			var partial = this, regExp, boundaryNodes = {}, recursiveCommentTraversal;
			regExp = /^(dynamic_sidebar_before|dynamic_sidebar_after):(.+):(\d+)$/;
			recursiveCommentTraversal = function( childNodes ) {
				_.each( childNodes, function( node ) {
					var matches;
					if ( 8 === node.nodeType ) {
						matches = node.nodeValue.match( regExp );
						if ( ! matches || matches[2] !== partial.sidebarId ) {
							return;
						}
						if ( _.isUndefined( boundaryNodes[ matches[3] ] ) ) {
							boundaryNodes[ matches[3] ] = {
								before: null,
								after: null,
								instanceNumber: parseInt( matches[3], 10 )
							};
						}
						if ( 'dynamic_sidebar_before' === matches[1] ) {
							boundaryNodes[ matches[3] ].before = node;
						} else {
							boundaryNodes[ matches[3] ].after = node;
						}
					} else if ( 1 === node.nodeType ) {
						recursiveCommentTraversal( node.childNodes );
					}
				} );
			};

			recursiveCommentTraversal( document.body.childNodes );
			return _.values( boundaryNodes );
		},

		/**
		 * Get the placements for this partial.
		 *
		 * @since 4.5.0
		 * @returns {Array}
		 */
		placements: function() {
			var partial = this;
			return _.map( partial.findDynamicSidebarBoundaryNodes(), function( boundaryNodes ) {
				return new api.selectiveRefresh.Placement( {
					partial: partial,
					container: null,
					startNode: boundaryNodes.before,
					endNode: boundaryNodes.after,
					context: {
						instanceNumber: boundaryNodes.instanceNumber
					}
				} );
			} );
		},

		/**
		 * Get the list of widget IDs associated with this widget area.
		 *
		 * @since 4.5.0
		 *
		 * @returns {Array}
		 */
		getWidgetIds: function() {
			var sidebarPartial = this, settingId, widgetIds;
			settingId = sidebarPartial.settings()[0];
			if ( ! settingId ) {
				throw new Error( 'Missing associated setting.' );
			}
			if ( ! api.has( settingId ) ) {
				throw new Error( 'Setting does not exist.' );
			}
			widgetIds = api( settingId ).get();
			if ( ! _.isArray( widgetIds ) ) {
				throw new Error( 'Expected setting to be array of widget IDs' );
			}
			return widgetIds.slice( 0 );
		},

		/**
		 * Reflow widgets in the sidebar, ensuring they have the proper position in the DOM.
		 *
		 * @since 4.5.0
		 *
		 * @return {Array.<wp.customize.selectiveRefresh.Placement>} List of placements that were reflowed.
		 */
		reflowWidgets: function() {
			var sidebarPartial = this, sidebarPlacements, widgetIds, widgetPartials, sortedSidebarContainers = [];
			widgetIds = sidebarPartial.getWidgetIds();
			sidebarPlacements = sidebarPartial.placements();

			widgetPartials = {};
			_.each( widgetIds, function( widgetId ) {
				var widgetPartial = api.selectiveRefresh.partial( 'widget[' + widgetId + ']' );
				if ( widgetPartial ) {
					widgetPartials[ widgetId ] = widgetPartial;
				}
			} );

			_.each( sidebarPlacements, function( sidebarPlacement ) {
				var sidebarWidgets = [], needsSort = false, thisPosition, lastPosition = -1;

				// Gather list of widget partial containers in this sidebar, and determine if a sort is needed.
				_.each( widgetPartials, function( widgetPartial ) {
					_.each( widgetPartial.placements(), function( widgetPlacement ) {

						if ( sidebarPlacement.context.instanceNumber === widgetPlacement.context.sidebar_instance_number ) {
							thisPosition = widgetPlacement.container.index();
							sidebarWidgets.push( {
								partial: widgetPartial,
								placement: widgetPlacement,
								position: thisPosition
							} );
							if ( thisPosition < lastPosition ) {
								needsSort = true;
							}
							lastPosition = thisPosition;
						}
					} );
				} );

				if ( needsSort ) {
					_.each( sidebarWidgets, function( sidebarWidget ) {
						sidebarPlacement.endNode.parentNode.insertBefore(
							sidebarWidget.placement.container[0],
							sidebarPlacement.endNode
						);

						// @todo Rename partial-placement-moved?
						api.selectiveRefresh.trigger( 'partial-content-moved', sidebarWidget.placement );
					} );

					sortedSidebarContainers.push( sidebarPlacement );
				}
			} );

			if ( sortedSidebarContainers.length > 0 ) {
				api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
			}

			return sortedSidebarContainers;
		},

		/**
		 * Make sure there is a widget instance container in this sidebar for the given widget ID.
		 *
		 * @since 4.5.0
		 *
		 * @param {string} widgetId
		 * @returns {wp.customize.selectiveRefresh.Partial} Widget instance partial.
		 */
		ensureWidgetPlacementContainers: function( widgetId ) {
			var sidebarPartial = this, widgetPartial, wasInserted = false, partialId = 'widget[' + widgetId + ']';
			widgetPartial = api.selectiveRefresh.partial( partialId );
			if ( ! widgetPartial ) {
				widgetPartial = new self.WidgetPartial( partialId, {
					params: {}
				} );
			}

			// Make sure that there is a container element for the widget in the sidebar, if at least a placeholder.
			_.each( sidebarPartial.placements(), function( sidebarPlacement ) {
				var foundWidgetPlacement, widgetContainerElement;

				foundWidgetPlacement = _.find( widgetPartial.placements(), function( widgetPlacement ) {
					return ( widgetPlacement.context.sidebar_instance_number === sidebarPlacement.context.instanceNumber );
				} );
				if ( foundWidgetPlacement ) {
					return;
				}

				widgetContainerElement = $(
					sidebarPartial.params.sidebarArgs.before_widget.replace( /%1\$s/g, widgetId ).replace( /%2\$s/g, 'widget' ) +
					sidebarPartial.params.sidebarArgs.after_widget
				);

				// Handle rare case where before_widget and after_widget are empty.
				if ( ! widgetContainerElement[0] ) {
					return;
				}

				widgetContainerElement.attr( 'data-customize-partial-id', widgetPartial.id );
				widgetContainerElement.attr( 'data-customize-partial-type', 'widget' );
				widgetContainerElement.attr( 'data-customize-widget-id', widgetId );

				/*
				 * Make sure the widget container element has the customize-container context data.
				 * The sidebar_instance_number is used to disambiguate multiple instances of the
				 * same sidebar are rendered onto the template, and so the same widget is embedded
				 * multiple times.
				 */
				widgetContainerElement.data( 'customize-partial-placement-context', {
					'sidebar_id': sidebarPartial.sidebarId,
					'sidebar_instance_number': sidebarPlacement.context.instanceNumber
				} );

				sidebarPlacement.endNode.parentNode.insertBefore( widgetContainerElement[0], sidebarPlacement.endNode );
				wasInserted = true;
			} );

			api.selectiveRefresh.partial.add( widgetPartial );

			if ( wasInserted ) {
				sidebarPartial.reflowWidgets();
			}

			return widgetPartial;
		},

		/**
		 * Handle change to the sidebars_widgets[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {Array} newWidgetIds New widget ids.
		 * @param {Array} oldWidgetIds Old widget ids.
		 */
		handleSettingChange: function( newWidgetIds, oldWidgetIds ) {
			var sidebarPartial = this, needsRefresh, widgetsRemoved, widgetsAdded, addedWidgetPartials = [];

			needsRefresh = (
				( oldWidgetIds.length > 0 && 0 === newWidgetIds.length ) ||
				( newWidgetIds.length > 0 && 0 === oldWidgetIds.length )
			);
			if ( needsRefresh ) {
				sidebarPartial.fallback();
				return;
			}

			// Handle removal of widgets.
			widgetsRemoved = _.difference( oldWidgetIds, newWidgetIds );
			_.each( widgetsRemoved, function( removedWidgetId ) {
				var widgetPartial = api.selectiveRefresh.partial( 'widget[' + removedWidgetId + ']' );
				if ( widgetPartial ) {
					_.each( widgetPartial.placements(), function( placement ) {
						var isRemoved = (
							placement.context.sidebar_id === sidebarPartial.sidebarId ||
							( placement.context.sidebar_args && placement.context.sidebar_args.id === sidebarPartial.sidebarId )
						);
						if ( isRemoved ) {
							placement.container.remove();
						}
					} );
				}
				delete self.renderedWidgets[ removedWidgetId ];
			} );

			// Handle insertion of widgets.
			widgetsAdded = _.difference( newWidgetIds, oldWidgetIds );
			_.each( widgetsAdded, function( addedWidgetId ) {
				var widgetPartial = sidebarPartial.ensureWidgetPlacementContainers( addedWidgetId );
				addedWidgetPartials.push( widgetPartial );
				self.renderedWidgets[ addedWidgetId ] = true;
			} );

			_.each( addedWidgetPartials, function( widgetPartial ) {
				widgetPartial.refresh();
			} );

			api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
		},

		/**
		 * Note that the meat is handled in handleSettingChange because it has the context of which widgets were removed.
		 *
		 * @since 4.5.0
		 */
		refresh: function() {
			var partial = this, deferred = $.Deferred();

			deferred.fail( function() {
				partial.fallback();
			} );

			if ( 0 === partial.placements().length ) {
				deferred.reject();
			} else {
				_.each( partial.reflowWidgets(), function( sidebarPlacement ) {
					api.selectiveRefresh.trigger( 'partial-content-rendered', sidebarPlacement );
				} );
				deferred.resolve();
			}

			return deferred.promise();
		}
	});

	api.selectiveRefresh.partialConstructor.sidebar = self.SidebarPartial;
	api.selectiveRefresh.partialConstructor.widget = self.WidgetPartial;

	/**
	 * Add partials for the registered widget areas (sidebars).
	 *
	 * @since 4.5.0
	 */
	self.addPartials = function() {
		_.each( self.registeredSidebars, function( registeredSidebar ) {
			var partial, partialId = 'sidebar[' + registeredSidebar.id + ']';
			partial = api.selectiveRefresh.partial( partialId );
			if ( ! partial ) {
				partial = new self.SidebarPartial( partialId, {
					params: {
						sidebarArgs: registeredSidebar
					}
				} );
				api.selectiveRefresh.partial.add( partial );
			}
		} );
	};

	/**
	 * Calculate the selector for the sidebar's widgets based on the registered sidebar's info.
	 *
	 * @memberOf wp.customize.widgetsPreview
	 *
	 * @since 3.9.0
	 */
	self.buildWidgetSelectors = function() {
		var self = this;

		$.each( self.registeredSidebars, function( i, sidebar ) {
			var widgetTpl = [
					sidebar.before_widget,
					sidebar.before_title,
					sidebar.after_title,
					sidebar.after_widget
				].join( '' ),
				emptyWidget,
				widgetSelector,
				widgetClasses;

			emptyWidget = $( widgetTpl );
			widgetSelector = emptyWidget.prop( 'tagName' ) || '';
			widgetClasses = emptyWidget.prop( 'className' ) || '';

			// Prevent a rare case when before_widget, before_title, after_title and after_widget is empty.
			if ( ! widgetClasses ) {
				return;
			}

			// Remove class names that incorporate the string formatting placeholders %1$s and %2$s.
			widgetClasses = widgetClasses.replace( /\S*%[12]\$s\S*/g, '' );
			widgetClasses = widgetClasses.replace( /^\s+|\s+$/g, '' );
			if ( widgetClasses ) {
				widgetSelector += '.' + widgetClasses.split( /\s+/ ).join( '.' );
			}
			self.widgetSelectors.push( widgetSelector );
		});
	};

	/**
	 * Highlight the widget on widget updates or widget control mouse overs.
	 *
	 * @memberOf wp.customize.widgetsPreview
	 *
	 * @since 3.9.0
	 * @param  {string} widgetId ID of the widget.
	 */
	self.highlightWidget = function( widgetId ) {
		var $body = $( document.body ),
			$widget = $( '#' + widgetId );

		$body.find( '.widget-customizer-highlighted-widget' ).removeClass( 'widget-customizer-highlighted-widget' );

		$widget.addClass( 'widget-customizer-highlighted-widget' );
		setTimeout( function() {
			$widget.removeClass( 'widget-customizer-highlighted-widget' );
		}, 500 );
	};

	/**
	 * Show a title and highlight widgets on hover. On shift+clicking
	 * focus the widget control.
	 *
	 * @memberOf wp.customize.widgetsPreview
	 *
	 * @since 3.9.0
	 */
	self.highlightControls = function() {
		var self = this,
			selector = this.widgetSelectors.join( ',' );

		// Skip adding highlights if not in the customizer preview iframe.
		if ( ! api.settings.channel ) {
			return;
		}

		$( selector ).attr( 'title', this.l10n.widgetTooltip );

		$( document ).on( 'mouseenter', selector, function() {
			self.preview.send( 'highlight-widget-control', $( this ).prop( 'id' ) );
		});

		// Open expand the widget control when shift+clicking the widget element
		$( document ).on( 'click', selector, function( e ) {
			if ( ! e.shiftKey ) {
				return;
			}
			e.preventDefault();

			self.preview.send( 'focus-widget-control', $( this ).prop( 'id' ) );
		});
	};

	/**
	 * Parse a widget ID.
	 *
	 * @memberOf wp.customize.widgetsPreview
	 *
	 * @since 4.5.0
	 *
	 * @param {string} widgetId Widget ID.
	 * @returns {{idBase: string, number: number|null}}
	 */
	self.parseWidgetId = function( widgetId ) {
		var matches, parsed = {
			idBase: '',
			number: null
		};

		matches = widgetId.match( /^(.+)-(\d+)$/ );
		if ( matches ) {
			parsed.idBase = matches[1];
			parsed.number = parseInt( matches[2], 10 );
		} else {
			parsed.idBase = widgetId; // Likely an old single widget.
		}

		return parsed;
	};

	/**
	 * Parse a widget setting ID.
	 *
	 * @memberOf wp.customize.widgetsPreview
	 *
	 * @since 4.5.0
	 *
	 * @param {string} settingId Widget setting ID.
	 * @returns {{idBase: string, number: number|null}|null}
	 */
	self.parseWidgetSettingId = function( settingId ) {
		var matches, parsed = {
			idBase: '',
			number: null
		};

		matches = settingId.match( /^widget_([^\[]+?)(?:\[(\d+)])?$/ );
		if ( ! matches ) {
			return null;
		}
		parsed.idBase = matches[1];
		if ( matches[2] ) {
			parsed.number = parseInt( matches[2], 10 );
		}
		return parsed;
	};

	/**
	 * Convert a widget ID into a Customizer setting ID.
	 *
	 * @memberOf wp.customize.widgetsPreview
	 *
	 * @since 4.5.0
	 *
	 * @param {string} widgetId Widget ID.
	 * @returns {string} settingId Setting ID.
	 */
	self.getWidgetSettingId = function( widgetId ) {
		var parsed = this.parseWidgetId( widgetId ), settingId;

		settingId = 'widget_' + parsed.idBase;
		if ( parsed.number ) {
			settingId += '[' + String( parsed.number ) + ']';
		}

		return settingId;
	};

	api.bind( 'preview-ready', function() {
		$.extend( self, _wpWidgetCustomizerPreviewSettings );
		self.init();
	});

	return self;
})( jQuery, _, wp, wp.customize );
;
/* global _wpCustomizePreviewNavMenusExports */

/** @namespace wp.customize.navMenusPreview */
wp.customize.navMenusPreview = wp.customize.MenusCustomizerPreview = ( function( $, _, wp, api ) {
	'use strict';

	var self = {
		data: {
			navMenuInstanceArgs: {}
		}
	};
	if ( 'undefined' !== typeof _wpCustomizePreviewNavMenusExports ) {
		_.extend( self.data, _wpCustomizePreviewNavMenusExports );
	}

	/**
	 * Initialize nav menus preview.
	 */
	self.init = function() {
		var self = this, synced = false;

		/*
		 * Keep track of whether we synced to determine whether or not bindSettingListener
		 * should also initially fire the listener. This initial firing needs to wait until
		 * after all of the settings have been synced from the pane in order to prevent
		 * an infinite selective fallback-refresh. Note that this sync handler will be
		 * added after the sync handler in customize-preview.js, so it will be triggered
		 * after all of the settings are added.
		 */
		api.preview.bind( 'sync', function() {
			synced = true;
		} );

		if ( api.selectiveRefresh ) {
			// Listen for changes to settings related to nav menus.
			api.each( function( setting ) {
				self.bindSettingListener( setting );
			} );
			api.bind( 'add', function( setting ) {

				/*
				 * Handle case where an invalid nav menu item (one for which its associated object has been deleted)
				 * is synced from the controls into the preview. Since invalid nav menu items are filtered out from
				 * being exported to the frontend by the _is_valid_nav_menu_item filter in wp_get_nav_menu_items(),
				 * the customizer controls will have a nav_menu_item setting where the preview will have none, and
				 * this can trigger an infinite fallback refresh when the nav menu item lacks any valid items.
				 */
				if ( setting.get() && ! setting.get()._invalid ) {
					self.bindSettingListener( setting, { fire: synced } );
				}
			} );
			api.bind( 'remove', function( setting ) {
				self.unbindSettingListener( setting );
			} );

			/*
			 * Ensure that wp_nav_menu() instances nested inside of other partials
			 * will be recognized as being present on the page.
			 */
			api.selectiveRefresh.bind( 'render-partials-response', function( response ) {
				if ( response.nav_menu_instance_args ) {
					_.extend( self.data.navMenuInstanceArgs, response.nav_menu_instance_args );
				}
			} );
		}

		api.preview.bind( 'active', function() {
			self.highlightControls();
		} );
	};

	if ( api.selectiveRefresh ) {

		/**
		 * Partial representing an invocation of wp_nav_menu().
		 *
		 * @memberOf wp.customize.navMenusPreview
		 * @alias wp.customize.navMenusPreview.NavMenuInstancePartial
		 *
		 * @class
		 * @augments wp.customize.selectiveRefresh.Partial
		 * @since 4.5.0
		 */
		self.NavMenuInstancePartial = api.selectiveRefresh.Partial.extend(/** @lends wp.customize.navMenusPreview.NavMenuInstancePartial.prototype */{

			/**
			 * Constructor.
			 *
			 * @since 4.5.0
			 * @param {string} id - Partial ID.
			 * @param {Object} options
			 * @param {Object} options.params
			 * @param {Object} options.params.navMenuArgs
			 * @param {string} options.params.navMenuArgs.args_hmac
			 * @param {string} [options.params.navMenuArgs.theme_location]
			 * @param {number} [options.params.navMenuArgs.menu]
			 * @param {object} [options.constructingContainerContext]
			 */
			initialize: function( id, options ) {
				var partial = this, matches, argsHmac;
				matches = id.match( /^nav_menu_instance\[([0-9a-f]{32})]$/ );
				if ( ! matches ) {
					throw new Error( 'Illegal id for nav_menu_instance partial. The key corresponds with the args HMAC.' );
				}
				argsHmac = matches[1];

				options = options || {};
				options.params = _.extend(
					{
						selector: '[data-customize-partial-id="' + id + '"]',
						navMenuArgs: options.constructingContainerContext || {},
						containerInclusive: true
					},
					options.params || {}
				);
				api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );

				if ( ! _.isObject( partial.params.navMenuArgs ) ) {
					throw new Error( 'Missing navMenuArgs' );
				}
				if ( partial.params.navMenuArgs.args_hmac !== argsHmac ) {
					throw new Error( 'args_hmac mismatch with id' );
				}
			},

			/**
			 * Return whether the setting is related to this partial.
			 *
			 * @since 4.5.0
			 * @param {wp.customize.Value|string} setting  - Object or ID.
			 * @param {number|object|false|null}  newValue - New value, or null if the setting was just removed.
			 * @param {number|object|false|null}  oldValue - Old value, or null if the setting was just added.
			 * @returns {boolean}
			 */
			isRelatedSetting: function( setting, newValue, oldValue ) {
				var partial = this, navMenuLocationSetting, navMenuId, isNavMenuItemSetting, _newValue, _oldValue, urlParser;
				if ( _.isString( setting ) ) {
					setting = api( setting );
				}

				/*
				 * Prevent nav_menu_item changes only containing type_label differences triggering a refresh.
				 * These settings in the preview do not include type_label property, and so if one of these
				 * nav_menu_item settings is dirty, after a refresh the nav menu instance would do a selective
				 * refresh immediately because the setting from the pane would have the type_label whereas
				 * the setting in the preview would not, thus triggering a change event. The following
				 * condition short-circuits this unnecessary selective refresh and also prevents an infinite
				 * loop in the case where a nav_menu_instance partial had done a fallback refresh.
				 * @todo Nav menu item settings should not include a type_label property to begin with.
				 */
				isNavMenuItemSetting = /^nav_menu_item\[/.test( setting.id );
				if ( isNavMenuItemSetting && _.isObject( newValue ) && _.isObject( oldValue ) ) {
					_newValue = _.clone( newValue );
					_oldValue = _.clone( oldValue );
					delete _newValue.type_label;
					delete _oldValue.type_label;

					// Normalize URL scheme when parent frame is HTTPS to prevent selective refresh upon initial page load.
					if ( 'https' === api.preview.scheme.get() ) {
						urlParser = document.createElement( 'a' );
						urlParser.href = _newValue.url;
						urlParser.protocol = 'https:';
						_newValue.url = urlParser.href;
						urlParser.href = _oldValue.url;
						urlParser.protocol = 'https:';
						_oldValue.url = urlParser.href;
					}

					// Prevent original_title differences from causing refreshes if title is present.
					if ( newValue.title ) {
						delete _oldValue.original_title;
						delete _newValue.original_title;
					}

					if ( _.isEqual( _oldValue, _newValue ) ) {
						return false;
					}
				}

				if ( partial.params.navMenuArgs.theme_location ) {
					if ( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' === setting.id ) {
						return true;
					}
					navMenuLocationSetting = api( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' );
				}

				navMenuId = partial.params.navMenuArgs.menu;
				if ( ! navMenuId && navMenuLocationSetting ) {
					navMenuId = navMenuLocationSetting();
				}

				if ( ! navMenuId ) {
					return false;
				}
				return (
					( 'nav_menu[' + navMenuId + ']' === setting.id ) ||
					( isNavMenuItemSetting && (
						( newValue && newValue.nav_menu_term_id === navMenuId ) ||
						( oldValue && oldValue.nav_menu_term_id === navMenuId )
					) )
				);
			},

			/**
			 * Make sure that partial fallback behavior is invoked if there is no associated menu.
			 *
			 * @since 4.5.0
			 *
			 * @returns {Promise}
			 */
			refresh: function() {
				var partial = this, menuId, deferred = $.Deferred();

				// Make sure the fallback behavior is invoked when the partial is no longer associated with a menu.
				if ( _.isNumber( partial.params.navMenuArgs.menu ) ) {
					menuId = partial.params.navMenuArgs.menu;
				} else if ( partial.params.navMenuArgs.theme_location && api.has( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' ) ) {
					menuId = api( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' ).get();
				}
				if ( ! menuId ) {
					partial.fallback();
					deferred.reject();
					return deferred.promise();
				}

				return api.selectiveRefresh.Partial.prototype.refresh.call( partial );
			},

			/**
			 * Render content.
			 *
			 * @inheritdoc
			 * @param {wp.customize.selectiveRefresh.Placement} placement
			 */
			renderContent: function( placement ) {
				var partial = this, previousContainer = placement.container;

				// Do fallback behavior to refresh preview if menu is now empty.
				if ( '' === placement.addedContent ) {
					placement.partial.fallback();
				}

				if ( api.selectiveRefresh.Partial.prototype.renderContent.call( partial, placement ) ) {

					// Trigger deprecated event.
					$( document ).trigger( 'customize-preview-menu-refreshed', [ {
						instanceNumber: null, // @deprecated
						wpNavArgs: placement.context, // @deprecated
						wpNavMenuArgs: placement.context,
						oldContainer: previousContainer,
						newContainer: placement.container
					} ] );
				}
			}
		});

		api.selectiveRefresh.partialConstructor.nav_menu_instance = self.NavMenuInstancePartial;

		/**
		 * Request full refresh if there are nav menu instances that lack partials which also match the supplied args.
		 *
		 * @param {object} navMenuInstanceArgs
		 */
		self.handleUnplacedNavMenuInstances = function( navMenuInstanceArgs ) {
			var unplacedNavMenuInstances;
			unplacedNavMenuInstances = _.filter( _.values( self.data.navMenuInstanceArgs ), function( args ) {
				return ! api.selectiveRefresh.partial.has( 'nav_menu_instance[' + args.args_hmac + ']' );
			} );
			if ( _.findWhere( unplacedNavMenuInstances, navMenuInstanceArgs ) ) {
				api.selectiveRefresh.requestFullRefresh();
				return true;
			}
			return false;
		};

		/**
		 * Add change listener for a nav_menu[], nav_menu_item[], or nav_menu_locations[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value} setting
		 * @param {object}             [options]
		 * @param {boolean}            options.fire Whether to invoke the callback after binding.
		 *                                          This is used when a dynamic setting is added.
		 * @return {boolean} Whether the setting was bound.
		 */
		self.bindSettingListener = function( setting, options ) {
			var matches;
			options = options || {};

			matches = setting.id.match( /^nav_menu\[(-?\d+)]$/ );
			if ( matches ) {
				setting._navMenuId = parseInt( matches[1], 10 );
				setting.bind( this.onChangeNavMenuSetting );
				if ( options.fire ) {
					this.onChangeNavMenuSetting.call( setting, setting(), false );
				}
				return true;
			}

			matches = setting.id.match( /^nav_menu_item\[(-?\d+)]$/ );
			if ( matches ) {
				setting._navMenuItemId = parseInt( matches[1], 10 );
				setting.bind( this.onChangeNavMenuItemSetting );
				if ( options.fire ) {
					this.onChangeNavMenuItemSetting.call( setting, setting(), false );
				}
				return true;
			}

			matches = setting.id.match( /^nav_menu_locations\[(.+?)]/ );
			if ( matches ) {
				setting._navMenuThemeLocation = matches[1];
				setting.bind( this.onChangeNavMenuLocationsSetting );
				if ( options.fire ) {
					this.onChangeNavMenuLocationsSetting.call( setting, setting(), false );
				}
				return true;
			}

			return false;
		};

		/**
		 * Remove change listeners for nav_menu[], nav_menu_item[], or nav_menu_locations[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value} setting
		 */
		self.unbindSettingListener = function( setting ) {
			setting.unbind( this.onChangeNavMenuSetting );
			setting.unbind( this.onChangeNavMenuItemSetting );
			setting.unbind( this.onChangeNavMenuLocationsSetting );
		};

		/**
		 * Handle change for nav_menu[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuSetting = function() {
			var setting = this;

			self.handleUnplacedNavMenuInstances( {
				menu: setting._navMenuId
			} );

			// Ensure all nav menu instances with a theme_location assigned to this menu are handled.
			api.each( function( otherSetting ) {
				if ( ! otherSetting._navMenuThemeLocation ) {
					return;
				}
				if ( setting._navMenuId === otherSetting() ) {
					self.handleUnplacedNavMenuInstances( {
						theme_location: otherSetting._navMenuThemeLocation
					} );
				}
			} );
		};

		/**
		 * Handle change for nav_menu_item[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @param {object} newItem New value for nav_menu_item[] setting.
		 * @param {object} oldItem Old value for nav_menu_item[] setting.
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuItemSetting = function( newItem, oldItem ) {
			var item = newItem || oldItem, navMenuSetting;
			navMenuSetting = api( 'nav_menu[' + String( item.nav_menu_term_id ) + ']' );
			if ( navMenuSetting ) {
				self.onChangeNavMenuSetting.call( navMenuSetting );
			}
		};

		/**
		 * Handle change for nav_menu_locations[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuLocationsSetting = function() {
			var setting = this, hasNavMenuInstance;
			self.handleUnplacedNavMenuInstances( {
				theme_location: setting._navMenuThemeLocation
			} );

			// If there are no wp_nav_menu() instances that refer to the theme location, do full refresh.
			hasNavMenuInstance = !! _.findWhere( _.values( self.data.navMenuInstanceArgs ), {
				theme_location: setting._navMenuThemeLocation
			} );
			if ( ! hasNavMenuInstance ) {
				api.selectiveRefresh.requestFullRefresh();
			}
		};
	}

	/**
	 * Connect nav menu items with their corresponding controls in the pane.
	 *
	 * Setup shift-click on nav menu items which are more granular than the nav menu partial itself.
	 * Also this applies even if a nav menu is not partial-refreshable.
	 *
	 * @since 4.5.0
	 */
	self.highlightControls = function() {
		var selector = '.menu-item';

		// Skip adding highlights if not in the customizer preview iframe.
		if ( ! api.settings.channel ) {
			return;
		}

		// Focus on the menu item control when shift+clicking the menu item.
		$( document ).on( 'click', selector, function( e ) {
			var navMenuItemParts;
			if ( ! e.shiftKey ) {
				return;
			}

			navMenuItemParts = $( this ).attr( 'class' ).match( /(?:^|\s)menu-item-(-?\d+)(?:\s|$)/ );
			if ( navMenuItemParts ) {
				e.preventDefault();
				e.stopPropagation(); // Make sure a sub-nav menu item will get focused instead of parent items.
				api.preview.send( 'focus-nav-menu-item-control', parseInt( navMenuItemParts[1], 10 ) );
			}
		});
	};

	api.bind( 'preview-ready', function() {
		self.init();
	} );

	return self;

}( jQuery, _, wp, wp.customize ) );
;
