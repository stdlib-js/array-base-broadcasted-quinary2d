// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@v0.2.2-esm/index.mjs";function s(s,t,r){var d,e,i,o,f,n,m,b,c,j,l,p,v,h,u,x,y,g,k,q,w,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q;if(l=(I=t[5])[1],p=I[0],!(l<=0||p<=0))for(L=(K=a(s[0],t[0],I)).data,d=(J=K.strides)[1],e=J[0],M=(K=a(s[1],t[1],I)).data,i=(J=K.strides)[1],o=J[0],N=(K=a(s[2],t[2],I)).data,f=(J=K.strides)[1],n=J[0],O=(K=a(s[3],t[3],I)).data,m=(J=K.strides)[1],b=J[0],P=(K=a(s[4],t[4],I)).data,c=(J=K.strides)[1],j=J[0],Q=s[5],x=0,g=0,q=0,z=0,B=0,h=0;h<p;h++){for(u=0,y=0,k=0,w=0,A=0,C=L[x],D=M[g],E=N[q],F=O[z],G=P[B],H=Q[h],v=0;v<l;v++)H[v]=r(C[u],D[y],E[k],F[w],G[A]),u+=d,y+=i,k+=f,w+=m,A+=c;x+=e,g+=o,q+=n,z+=b,B+=j}}export{s as default};
//# sourceMappingURL=index.mjs.map
