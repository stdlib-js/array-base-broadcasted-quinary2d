"use strict";var V=function(d,a){return function(){return a||d((a={exports:{}}).exports,a),a.exports}};var T=V(function(Z,R){
var i=require('@stdlib/array-base-broadcast-array/dist');function W(d,a,U){var k,S,y,A,g,l,B,C,D,E,n,o,u,e,x,c,f,s,w,z,m,q,b,j,F,G,H,I,J,K,t,r,v,L,M,N,O,P,Q;if(t=a[5],n=t[1],o=t[0],!(n<=0||o<=0))for(v=i(d[0],a[0],t),L=v.data,r=v.strides,k=r[1],S=r[0],v=i(d[1],a[1],t),M=v.data,r=v.strides,y=r[1],A=r[0],v=i(d[2],a[2],t),N=v.data,r=v.strides,g=r[1],l=r[0],v=i(d[3],a[3],t),O=v.data,r=v.strides,B=r[1],C=r[0],v=i(d[4],a[4],t),P=v.data,r=v.strides,D=r[1],E=r[0],Q=d[5],c=0,s=0,z=0,q=0,j=0,e=0;e<o;e++){for(x=0,f=0,w=0,m=0,b=0,F=L[c],G=M[s],H=N[z],I=O[q],J=P[j],K=Q[e],u=0;u<n;u++)K[u]=U(F[x],G[f],H[w],I[m],J[b]),x+=k,f+=y,w+=g,m+=B,b+=D;c+=S,s+=A,z+=l,q+=C,j+=E}}R.exports=W
});var X=T();module.exports=X;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
