"use strict";var V=function(d,a){return function(){try{return a||d((a={exports:{}}).exports,a),a.exports}catch(n){throw (a=0, n)}};};var U=V(function(Z,T){
var i=require('@stdlib/array-base-broadcast-array/dist');function W(d,a,n){var S,y,A,g,l,B,C,D,E,F,o,x,u,e,c,f,s,w,z,m,q,b,j,k,G,H,I,J,K,L,t,r,v,M,N,O,P,Q,R;if(t=a[5],o=t[1],x=t[0],!(o<=0||x<=0))for(v=i(d[0],a[0],t),M=v.data,r=v.strides,S=r[1],y=r[0],v=i(d[1],a[1],t),N=v.data,r=v.strides,A=r[1],g=r[0],v=i(d[2],a[2],t),O=v.data,r=v.strides,l=r[1],B=r[0],v=i(d[3],a[3],t),P=v.data,r=v.strides,C=r[1],D=r[0],v=i(d[4],a[4],t),Q=v.data,r=v.strides,E=r[1],F=r[0],R=d[5],f=0,w=0,m=0,b=0,k=0,e=0;e<x;e++){for(c=0,s=0,z=0,q=0,j=0,G=M[f],H=N[w],I=O[m],J=P[b],K=Q[k],L=R[e],u=0;u<o;u++)L[u]=n(G[c],H[s],I[z],J[q],K[j]),c+=S,s+=A,z+=l,q+=C,j+=E;f+=y,w+=g,m+=B,b+=D,k+=F}}T.exports=W
});var X=U();module.exports=X;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
