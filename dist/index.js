"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=v(function(A,o){
function m(e,r,i,s,a,I,j){var u,n,t;if(e<=0)return-1;for(u=s,n=j,t=0;t<e;t++){if(r[u]===a[n])return t;u+=i,n+=I}return-1}o.exports=m
});var c=v(function(B,d){
var x=require('@stdlib/strided-base-stride2offset/dist'),R=q();function _(e,r,i,s,a){return R(e,r,i,x(e,i),s,a,x(e,a))}d.exports=_
});var p=v(function(C,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=c(),b=q();O(l,"ndarray",b);y.exports=l
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=p(),f,E=h(g(__dirname,"./native.js"));k(E)?f=w:f=E;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
