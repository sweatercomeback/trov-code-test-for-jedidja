// Knockout Mapping plugin v2.0.1
// (c) 2011 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

ko.exportSymbol=function(g,s){for(var l=g.split("."),h=window,f=0;f<l.length-1;f++)h=h[l[f]];h[l[l.length-1]]=s};ko.exportProperty=function(g,s,l){g[s]=l};
(function(){function g(a,c){for(var b in c)c.hasOwnProperty(b)&&c[b]&&(!a[b]||a[b]instanceof Array?a[b]=c[b]:g(a[b],c[b]))}function s(a,c){var b={};g(b,a);g(b,c);return b}function l(a){return a&&"object"===typeof a&&a.constructor==(new Date).constructor?"date":typeof a}function h(a,c){a=a||{};if(a.create instanceof Function||a.update instanceof Function||a.key instanceof Function||a.arrayChanged instanceof Function)a={"":a};c&&(a.ignore=f(c.ignore,a.ignore),a.include=f(c.include,a.include),a.copy=
f(c.copy,a.copy));a.ignore=f(a.ignore,e.ignore);a.include=f(a.include,e.include);a.copy=f(a.copy,e.copy);a.mappedProperties=a.mappedProperties||{};return a}function f(a,c){a instanceof Array||(a="undefined"===l(a)?[]:[a]);c instanceof Array||(c="undefined"===l(c)?[]:[c]);return a.concat(c)}function N(a,c){var b=ko.dependentObservable;ko.dependentObservable=function(b,c,d){d=d||{};var l=d.deferEvaluation;b&&"object"==typeof b&&(d=b);var v=!1,m=function(b){var c=w({read:function(){v||(ko.utils.arrayRemoveItem(a,
b),v=!0);return b.apply(b,arguments)},write:function(a){return b(a)},deferEvaluation:!0});c.__ko_proto__=w;return c};d.deferEvaluation=!0;b=new w(b,c,d);b.__ko_proto__=w;l||(a.push(b),b=m(b));return b};var d=c();ko.dependentObservable=b;return d}function C(a,c,b,d,y,f){var B=ko.utils.unwrapObservable(c)instanceof Array;f=f||"";if(ko.mapping.isMapped(a)){var t=ko.utils.unwrapObservable(a)[p];b=s(t,b)}var v=function(){return b[d]&&b[d].create instanceof Function},m=function(a){return N(G,function(){return b[d].create({data:a||
c,parent:y})})},e=function(){return b[d]&&b[d].update instanceof Function},q=function(a,O){var e={data:O||c,parent:y,target:ko.utils.unwrapObservable(a)};ko.isWriteableObservable(a)&&(e.observable=a);return b[d].update(e)};if(D.get(c))return a;d=d||"";if(B){var B=[],t=!1,k=function(a){return a};b[d]&&b[d].key&&(k=b[d].key,t=!0);ko.isObservable(a)||(a=ko.observableArray([]),a.mappedRemove=function(b){var c="function"==typeof b?b:function(a){return a===k(b)};return a.remove(function(a){return c(k(a))})},
a.mappedRemoveAll=function(b){var c=z(b,k);return a.remove(function(a){return-1!=ko.utils.arrayIndexOf(c,k(a))})},a.mappedDestroy=function(b){var c="function"==typeof b?b:function(a){return a===k(b)};return a.destroy(function(a){return c(k(a))})},a.mappedDestroyAll=function(b){var c=z(b,k);return a.destroy(function(a){return-1!=ko.utils.arrayIndexOf(c,k(a))})},a.mappedIndexOf=function(b){var c=z(a(),k);b=k(b);return ko.utils.arrayIndexOf(c,b)},a.mappedCreate=function(b){if(-1!==a.mappedIndexOf(b))throw Error("There already is an object with the key that you specified.");
var c=v()?m(b):b;e()&&(b=q(c,b),ko.isWriteableObservable(c)?c(b):c=b);a.push(c);return c});var n=z(ko.utils.unwrapObservable(a),k).sort(),g=z(c,k);t&&g.sort();for(var t=ko.utils.compareArrays(n,g),n={},g=[],h=0,w=t.length;h<w;h++){var x=t[h],u,r=f+"["+h+"]";switch(x.status){case "added":var A=E(ko.utils.unwrapObservable(c),x.value,k);u=ko.utils.unwrapObservable(C(void 0,A,b,d,a,r));r=J(ko.utils.unwrapObservable(c),A,n);g[r]=u;n[r]=!0;break;case "retained":A=E(ko.utils.unwrapObservable(c),x.value,
k);u=E(a,x.value,k);C(u,A,b,d,a,r);r=J(ko.utils.unwrapObservable(c),A,n);g[r]=u;n[r]=!0;break;case "deleted":u=E(a,x.value,k)}B.push({event:x.status,item:u})}a(g);b[d]&&b[d].arrayChanged&&ko.utils.arrayForEach(B,function(a){b[d].arrayChanged(a.event,a.item)})}else if(H(c)){a=ko.utils.unwrapObservable(a);if(!a){if(v())return n=m(),e()&&(n=q(n)),n;if(e())return q(n);a={}}e()&&(a=q(a));D.save(c,a);K(c,function(d){var e=f.length?f+"."+d:d;if(-1==ko.utils.arrayIndexOf(b.ignore,e))if(-1!=ko.utils.arrayIndexOf(b.copy,
e))a[d]=c[d];else{var y=D.get(c[d])||C(a[d],c[d],b,d,a,e);if(ko.isWriteableObservable(a[d]))a[d](ko.utils.unwrapObservable(y));else a[d]=y;b.mappedProperties[e]=!0}})}else switch(l(c)){case "function":e()?ko.isWriteableObservable(c)?(c(q(c)),a=c):a=q(c):a=c;break;default:ko.isWriteableObservable(a)?e()?a(q(a)):a(ko.utils.unwrapObservable(c)):(a=v()?m():ko.observable(ko.utils.unwrapObservable(c)),e()&&a(q(a)))}return a}function J(a,c,b){for(var d=0,e=a.length;d<e;d++)if(!0!==b[d]&&a[d]===c)return d;
return null}function L(a,c){var b;c&&(b=c(a));"undefined"===l(b)&&(b=a);return ko.utils.unwrapObservable(b)}function E(a,c,b){a=ko.utils.arrayFilter(ko.utils.unwrapObservable(a),function(a){return L(a,b)===c});if(0==a.length)throw Error("When calling ko.update*, the key '"+c+"' was not found!");if(1<a.length&&H(a[0]))throw Error("When calling ko.update*, the key '"+c+"' was not unique!");return a[0]}function z(a,c){return ko.utils.arrayMap(ko.utils.unwrapObservable(a),function(a){return c?L(a,c):
a})}function K(a,c){if(a instanceof Array)for(var b=0;b<a.length;b++)c(b);else for(b in a)c(b)}function H(a){var c=l(a);return"object"===c&&null!==a&&"undefined"!==c}function M(){var a=[],c=[];this.save=function(b,d){var e=ko.utils.arrayIndexOf(a,b);0<=e?c[e]=d:(a.push(b),c.push(d))};this.get=function(b){b=ko.utils.arrayIndexOf(a,b);return 0<=b?c[b]:void 0}}ko.mapping={};var p="__ko_mapping__",w=ko.dependentObservable,I=0,G,D,F={include:["_destroy"],ignore:[],copy:[]},e=F;ko.mapping.isMapped=function(a){return(a=
ko.utils.unwrapObservable(a))&&a[p]};ko.mapping.fromJS=function(a){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");window.setTimeout(function(){I=0},0);I++||(G=[],D=new M);var c,b;2==arguments.length&&(arguments[1][p]?b=arguments[1]:c=arguments[1]);3==arguments.length&&(c=arguments[1],b=arguments[2]);b&&(c=s(c,b[p]));c=h(c);var d=C(b,a,c);b&&(d=b);--I||window.setTimeout(function(){ko.utils.arrayForEach(G,function(a){a&&a()})},0);d[p]=s(d[p],c);return d};
ko.mapping.fromJSON=function(a){var c=ko.utils.parseJson(a);arguments[0]=c;return ko.mapping.fromJS.apply(this,arguments)};ko.mapping.updateFromJS=function(a){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");};ko.mapping.updateFromJSON=function(a){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");};ko.mapping.toJS=function(a,c){e||ko.mapping.resetDefaultOptions();
if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");if(!(e.ignore instanceof Array))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if(!(e.include instanceof Array))throw Error("ko.mapping.defaultOptions().include should be an array.");if(!(e.copy instanceof Array))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=h(c,a[p]);return ko.mapping.visitModel(a,function(a){return ko.utils.unwrapObservable(a)},
c)};ko.mapping.toJSON=function(a,c){var b=ko.mapping.toJS(a,c);return ko.utils.stringifyJson(b)};ko.mapping.defaultOptions=function(){if(0<arguments.length)e=arguments[0];else return e};ko.mapping.resetDefaultOptions=function(){e={include:F.include.slice(0),ignore:F.ignore.slice(0),copy:F.copy.slice(0)}};ko.mapping.visitModel=function(a,c,b){b=b||{};b.visitedObjects=b.visitedObjects||new M;b.parentName||(b=h(b));var d,e=ko.utils.unwrapObservable(a);if(H(e))c(a,b.parentName),d=e instanceof Array?[]:
{};else return c(a,b.parentName);b.visitedObjects.save(a,d);var f=b.parentName;K(e,function(a){if(!b.ignore||-1==ko.utils.arrayIndexOf(b.ignore,a)){var g=e[a],h=b,m=f||"";e instanceof Array?f&&(m+="["+a+"]"):(f&&(m+="."),m+=a);h.parentName=m;if(-1!==ko.utils.arrayIndexOf(b.copy,a)||-1!==ko.utils.arrayIndexOf(b.include,a)||!e[p]||!e[p].mappedProperties||e[p].mappedProperties[a]||e instanceof Array)switch(l(ko.utils.unwrapObservable(g))){case "object":case "undefined":h=b.visitedObjects.get(g);d[a]=
"undefined"!==l(h)?h:ko.mapping.visitModel(g,c,b);break;default:d[a]=c(g,b.parentName)}}});return d};ko.exportSymbol("ko.mapping",ko.mapping);ko.exportSymbol("ko.mapping.fromJS",ko.mapping.fromJS);ko.exportSymbol("ko.mapping.fromJSON",ko.mapping.fromJSON);ko.exportSymbol("ko.mapping.isMapped",ko.mapping.isMapped);ko.exportSymbol("ko.mapping.defaultOptions",ko.mapping.defaultOptions);ko.exportSymbol("ko.mapping.toJS",ko.mapping.toJS);ko.exportSymbol("ko.mapping.toJSON",ko.mapping.toJSON);ko.exportSymbol("ko.mapping.updateFromJS",
ko.mapping.updateFromJS);ko.exportSymbol("ko.mapping.updateFromJSON",ko.mapping.updateFromJSON);ko.exportSymbol("ko.mapping.visitModel",ko.mapping.visitModel)})();
