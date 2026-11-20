(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="170",lh=0,Wo=1,ch=2,xo=1,hh=2,xn=3,kn=0,Ne=1,Mn=2,Nn=0,Ii=1,Xo=2,Yo=3,$o=4,uh=5,Qn=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,vh=202,xh=203,Sa=204,ya=205,Mh=206,Sh=207,yh=208,Eh=209,bh=210,Th=211,wh=212,Ah=213,Rh=214,Ea=0,ba=1,Ta=2,ki=3,wa=4,Aa=5,Ra=6,Ca=7,Mo=0,Ch=1,Ph=2,Fn=0,Lh=1,Dh=2,Ih=3,Uh=4,Nh=5,Fh=6,Oh=7,cc=300,zi=301,Bi=302,Pa=303,La=304,Cr=306,_r=1e3,si=1001,Da=1002,nn=1003,kh=1004,Rs=1005,on=1006,Ur=1007,ri=1008,bn=1009,hc=1010,uc=1011,ps=1012,So=1013,li=1014,Sn=1015,xs=1016,yo=1017,Eo=1018,Hi=1020,dc=35902,fc=1021,pc=1022,en=1023,mc=1024,gc=1025,Ui=1026,Vi=1027,_c=1028,bo=1029,vc=1030,To=1031,wo=1033,lr=33776,cr=33777,hr=33778,ur=33779,Ia=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,ka=37492,za=37496,Ba=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,Ya=37814,$a=37815,qa=37816,Ka=37817,ja=37818,Za=37819,Ja=37820,Qa=37821,dr=36492,to=36494,eo=36495,xc=36283,no=36284,io=36285,so=36286,zh=3200,Bh=3201,Mc=0,Hh=1,Un="",ze="srgb",Yi="srgb-linear",Pr="linear",ee="srgb",fi=7680,qo=519,Vh=512,Gh=513,Wh=514,Sc=515,Xh=516,Yh=517,$h=518,qh=519,Ko=35044,jo="300 es",yn=2e3,vr=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,ro=180/Math.PI;function Ms(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Kh(i,t){return(i%t+t)%t}function Nr(i,t,e){return(1-e)*i+e*t}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],m=n[5],v=n[8],M=s[0],p=s[3],u=s[6],b=s[1],y=s[4],x=s[7],L=s[2],T=s[5],w=s[8];return r[0]=a*M+o*b+l*L,r[3]=a*p+o*y+l*T,r[6]=a*u+o*x+l*w,r[1]=c*M+d*b+h*L,r[4]=c*p+d*y+h*T,r[7]=c*u+d*x+h*w,r[2]=f*M+m*b+v*L,r[5]=f*p+m*y+v*T,r[8]=f*u+m*x+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,f=o*l-d*r,m=c*r-a*l,v=e*h+n*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=h*M,t[1]=(s*c-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=f*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Ut;function yc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){const i=xr("canvas");return i.style.display="block",i}const Zo={};function ls(i){i in Zo||(Zo[i]=!0,console.warn(i))}function Zh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?Pr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jo=[.64,.33,.3,.6,.15,.06],Qo=[.2126,.7152,.0722],tl=[.3127,.329],el=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Yi]:{primaries:Jo,whitePoint:tl,transfer:Pr,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qo,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:Jo,whitePoint:tl,transfer:ee,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qo,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});let pi;class tu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=xr("canvas")),pi.width=t.width,pi.height=t.height;const n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eu=0;class Ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Or(s[a].image)):r.push(Or(s[a]))}else r=Or(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nu=0;class Le extends $i{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=si,s=si,r=on,a=ri,o=en,l=bn,c=Le.DEFAULT_ANISOTROPY,d=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Ms(),this.name="",this.source=new Ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=cc;Le.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],v=l[9],M=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(m+1)/2,L=(u+1)/2,T=(d+f)/4,w=(h+M)/4,P=(v+p)/4;return y>x&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=w/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-v)*(p-v)+(h-M)*(h-M)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(h-M)/b,this.z=(f-d)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iu extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ec(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends iu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bc extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class su extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const f=r[a+0],m=r[a+1],v=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(h!==M||l!==f||c!==m||d!==v){let p=1-o;const u=l*f+c*m+d*v+h*M,b=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const L=Math.sqrt(y),T=Math.atan2(L,u*b);p=Math.sin(p*T)/L,o=Math.sin(o*T)/L}const x=o*b;if(l=l*p+f*x,c=c*p+m*x,d=d*p+v*x,h=h*p+M*x,p===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],f=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+d*h+l*m-c*f,t[e+1]=l*v+d*f+c*h-o*m,t[e+2]=c*v+d*m+o*f-l*h,t[e+3]=d*v-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),f=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"YXZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"ZXY":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"ZYX":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"YZX":this._x=f*d*h+c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h-f*m*v;break;case"XZY":this._x=f*d*h-c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new R,il=new qi;class Ss{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Ps.subVectors(this.max,ts),mi.subVectors(t.a,ts),gi.subVectors(t.b,ts),_i.subVectors(t.c,ts),Rn.subVectors(gi,mi),Cn.subVectors(_i,gi),Hn.subVectors(mi,_i);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Hn.z,Hn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Hn.z,0,-Hn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Hn.y,Hn.x,0];return!zr(e,mi,gi,_i,Ps)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,mi,gi,_i,Ps))?!1:(Ls.crossVectors(Rn,Cn),e=[Ls.x,Ls.y,Ls.z],zr(e,mi,gi,_i,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new R,new R,new R,new R,new R,new R,new R,new R],je=new R,Cs=new Ss,mi=new R,gi=new R,_i=new R,Rn=new R,Cn=new R,Hn=new R,ts=new R,Ps=new R,Ls=new R,Vn=new R;function zr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),d=n.dot(Vn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ru=new Ss,es=new R,Br=new R;class Lr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ru.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);const e=es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(Br)),this.expandByPoint(es.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new R,Hr=new R,Ds=new R,Pn=new R,Vr=new R,Is=new R,Gr=new R;class Tc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hr.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Hr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ds),o=Pn.dot(this.direction),l=-Pn.dot(Ds),c=Pn.lengthSq(),d=Math.abs(1-a*a);let h,f,m,v;if(d>0)if(h=a*l-o,f=a*o-l,v=r*d,h>=0)if(f>=-v)if(f<=v){const M=1/d;h*=M,f*=M,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Hr).addScaledVector(Ds,f),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Vr.subVectors(e,t),Is.subVectors(n,t),Gr.crossVectors(Vr,Is);let a=this.direction.dot(Gr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(Is.crossVectors(Pn,Is));if(l<0)return null;const c=o*this.direction.dot(Vr.cross(Pn));if(c<0||l+c>a)return null;const d=-o*Pn.dot(Gr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,a,o,l,c,d,h,f,m,v,M,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,f,m,v,M,p)}set(t,e,n,s,r,a,o,l,c,d,h,f,m,v,M,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=v,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*d,m=a*h,v=o*d,M=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+v*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*d,m=l*h,v=c*d,M=c*h;e[0]=f+M*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=m*o-v,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*d,m=l*h,v=c*d,M=c*h;e[0]=f-M*o,e[4]=-a*h,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*d,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*d,m=a*h,v=o*d,M=o*h;e[0]=l*d,e[4]=v*c-m,e[8]=f*c+M,e[1]=l*h,e[5]=M*c+f,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,v=o*l,M=o*c;e[0]=l*d,e[4]=M-f*h,e[8]=v*h+m,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+v,e[10]=f-M*h}else if(t.order==="XZY"){const f=a*l,m=a*c,v=o*l,M=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+M,e[5]=a*d,e[9]=m*h-v,e[2]=v*h-m,e[6]=o*d,e[10]=M*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(au,t,ou)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Ln.crossVectors(n,Oe),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Ln.crossVectors(n,Oe)),Ln.normalize(),Us.crossVectors(Oe,Ln),s[0]=Ln.x,s[4]=Us.x,s[8]=Oe.x,s[1]=Ln.y,s[5]=Us.y,s[9]=Oe.y,s[2]=Ln.z,s[6]=Us.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],m=n[13],v=n[2],M=n[6],p=n[10],u=n[14],b=n[3],y=n[7],x=n[11],L=n[15],T=s[0],w=s[4],P=s[8],g=s[12],_=s[1],C=s[5],O=s[9],I=s[13],V=s[2],q=s[6],W=s[10],X=s[14],H=s[3],nt=s[7],rt=s[11],yt=s[15];return r[0]=a*T+o*_+l*V+c*H,r[4]=a*w+o*C+l*q+c*nt,r[8]=a*P+o*O+l*W+c*rt,r[12]=a*g+o*I+l*X+c*yt,r[1]=d*T+h*_+f*V+m*H,r[5]=d*w+h*C+f*q+m*nt,r[9]=d*P+h*O+f*W+m*rt,r[13]=d*g+h*I+f*X+m*yt,r[2]=v*T+M*_+p*V+u*H,r[6]=v*w+M*C+p*q+u*nt,r[10]=v*P+M*O+p*W+u*rt,r[14]=v*g+M*I+p*X+u*yt,r[3]=b*T+y*_+x*V+L*H,r[7]=b*w+y*C+x*q+L*nt,r[11]=b*P+y*O+x*W+L*rt,r[15]=b*g+y*I+x*X+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],m=t[14],v=t[3],M=t[7],p=t[11],u=t[15];return v*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*m-n*l*m)+M*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*d-r*l*d)+p*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*f+s*a*h-n*a*f+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],m=t[11],v=t[12],M=t[13],p=t[14],u=t[15],b=h*p*c-M*f*c+M*l*m-o*p*m-h*l*u+o*f*u,y=v*f*c-d*p*c-v*l*m+a*p*m+d*l*u-a*f*u,x=d*M*c-v*h*c+v*o*m-a*M*m-d*o*u+a*h*u,L=v*h*l-d*M*l-v*o*f+a*M*f+d*o*p-a*h*p,T=e*b+n*y+s*x+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=b*w,t[1]=(M*f*r-h*p*r-M*s*m+n*p*m+h*s*u-n*f*u)*w,t[2]=(o*p*r-M*l*r+M*s*c-n*p*c-o*s*u+n*l*u)*w,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*m-n*l*m)*w,t[4]=y*w,t[5]=(d*p*r-v*f*r+v*s*m-e*p*m-d*s*u+e*f*u)*w,t[6]=(v*l*r-a*p*r-v*s*c+e*p*c+a*s*u-e*l*u)*w,t[7]=(a*f*r-d*l*r+d*s*c-e*f*c-a*s*m+e*l*m)*w,t[8]=x*w,t[9]=(v*h*r-d*M*r-v*n*m+e*M*m+d*n*u-e*h*u)*w,t[10]=(a*M*r-v*o*r+v*n*c-e*M*c-a*n*u+e*o*u)*w,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*m-e*o*m)*w,t[12]=L*w,t[13]=(d*M*s-v*h*s+v*n*f-e*M*f-d*n*p+e*h*p)*w,t[14]=(v*o*s-a*M*s-v*n*l+e*M*l+a*n*p-e*o*p)*w,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,f=r*c,m=r*d,v=r*h,M=a*d,p=a*h,u=o*h,b=l*c,y=l*d,x=l*h,L=n.x,T=n.y,w=n.z;return s[0]=(1-(M+u))*L,s[1]=(m+x)*L,s[2]=(v-y)*L,s[3]=0,s[4]=(m-x)*T,s[5]=(1-(f+u))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(v+y)*w,s[9]=(p-b)*w,s[10]=(1-(f+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const c=1/r,d=1/a,h=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=d,Ze.elements[5]*=d,Ze.elements[6]*=d,Ze.elements[8]*=h,Ze.elements[9]*=h,Ze.elements[10]*=h,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let m,v;if(o===yn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===vr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(a-r),f=(e+t)*c,m=(n+s)*d;let v,M;if(o===yn)v=(a+r)*h,M=-2*h;else if(o===vr)v=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new R,Ze=new ue,au=new R(0,0,0),ou=new R(1,1,1),Ln=new R,Us=new R,Oe=new R,sl=new ue,rl=new qi;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lu=0;const al=new R,xi=new qi,gn=new ue,Ns=new R,ns=new R,cu=new R,hu=new qi,ol=new R(1,0,0),ll=new R(0,1,0),cl=new R(0,0,1),hl={type:"added"},uu={type:"removed"},Mi={type:"childadded",child:null},Wr={type:"childremoved",child:null};class Me extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new R,e=new un,n=new qi,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ut}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ns,Ns,this.up):gn.lookAt(Ns,ns,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(gn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new R,_n=new R,Xr=new R,vn=new R,Si=new R,yi=new R,ul=new R,Yr=new R,$r=new R,qr=new R,Kr=new pe,jr=new pe,Zr=new pe;class Ye{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),_n.subVectors(n,e),Xr.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(_n),l=Je.dot(Xr),c=_n.dot(_n),d=_n.dot(Xr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,v=(a*d-o*l)*f;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Kr.setScalar(0),jr.setScalar(0),Zr.setScalar(0),Kr.fromBufferAttribute(t,e),jr.fromBufferAttribute(t,n),Zr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Kr,r.x),a.addScaledVector(jr,r.y),a.addScaledVector(Zr,r.z),a}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),_n.subVectors(t,e),Je.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Je.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),yi.subVectors(r,n),Yr.subVectors(t,n);const l=Si.dot(Yr),c=yi.dot(Yr);if(l<=0&&c<=0)return e.copy(n);$r.subVectors(t,s);const d=Si.dot($r),h=yi.dot($r);if(d>=0&&h<=d)return e.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Si,a);qr.subVectors(t,r);const m=Si.dot(qr),v=yi.dot(qr);if(v>=0&&m<=v)return e.copy(r);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(yi,o);const p=d*v-m*h;if(p<=0&&h-d>=0&&m-v>=0)return ul.subVectors(r,s),o=(h-d)/(h-d+(m-v)),e.copy(s).addScaledVector(ul,o);const u=1/(p+M+f);return a=M*u,o=f*u,e.copy(n).addScaledVector(Si,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Kh(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jr(a,r,t+1/3),this.g=Jr(a,r,t),this.b=Jr(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Ac[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return $t.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ue(Ce.r*255,0,255))*65536+Math.round(Ue(Ce.g*255,0,255))*256+Math.round(Ue(Ce.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ze){$t.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Fs);const n=Nr(Dn.h,Fs.h,e),s=Nr(Dn.s,Fs.s,e),r=Nr(Dn.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Ot;Ot.NAMES=Ac;let du=0;class Ki extends $i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Ms(),this.name="",this.blending=Ii,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=ya,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Be extends Ki{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new R,Os=new Bt;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),t}}class Rc extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cc extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fu=0;const Xe=new ue,Qr=new Me,Ei=new R,ke=new Ss,is=new Ss,Te=new R;class Ve extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yc(t)?Cc:Rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(ke.min,is.min),ke.expandByPoint(Te),Te.addVectors(ke.max,is.max),ke.expandByPoint(Te)):(ke.expandByPoint(is.min),ke.expandByPoint(is.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Te.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),Te.add(Ei)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;const c=new R,d=new R,h=new R,f=new Bt,m=new Bt,v=new Bt,M=new R,p=new R;function u(P,g,_){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,g),v.fromBufferAttribute(r,_),d.sub(c),h.sub(c),m.sub(f),v.sub(f);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(C),o[P].add(M),o[g].add(M),o[_].add(M),l[P].add(p),l[g].add(p),l[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,g=b.length;P<g;++P){const _=b[P],C=_.start,O=_.count;for(let I=C,V=C+O;I<V;I+=3)u(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new R,x=new R,L=new R,T=new R;function w(P){L.fromBufferAttribute(s,P),T.copy(L);const g=o[P];y.copy(g),y.sub(L.multiplyScalar(L.dot(g))).normalize(),x.crossVectors(T,g);const C=x.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,g=b.length;P<g;++P){const _=b[P],C=_.start,O=_.count;for(let I=C,V=C+O;I<V;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,d=new R,h=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),M=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*d;for(let u=0;u<d;u++)f[v++]=c[m++]}return new hn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new ue,Gn=new Tc,ks=new Lr,fl=new R,zs=new R,Bs=new R,Hs=new R,ta=new R,Vs=new R,pl=new R,Gs=new R;class Yt extends Me{constructor(t=new Ve,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(ta.fromBufferAttribute(h,t),a?Vs.addScaledVector(ta,d):Vs.addScaledVector(ta.sub(e),d))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(ks.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ks,fl)===null||Gn.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(dl.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const p=f[v],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,L=y;x<L;x+=3){const T=o.getX(x),w=o.getX(x+1),P=o.getX(x+2);s=Ws(this,u,t,n,c,d,h,T,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=v,u=M;p<u;p+=3){const b=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);s=Ws(this,a,t,n,c,d,h,b,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const p=f[v],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,L=y;x<L;x+=3){const T=x,w=x+1,P=x+2;s=Ws(this,u,t,n,c,d,h,T,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,u=M;p<u;p+=3){const b=p,y=p+1,x=p+2;s=Ws(this,a,t,n,c,d,h,b,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function pu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===kn,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Gs);return c<e.near||c>e.far?null:{distance:c,point:Gs.clone(),object:i}}function Ws(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,zs),i.getVertexPosition(l,Bs),i.getVertexPosition(c,Hs);const d=pu(i,t,e,n,zs,Bs,Hs,pl);if(d){const h=new R;Ye.getBarycoord(pl,zs,Bs,Hs,h),s&&(d.uv=Ye.getInterpolatedAttribute(s,o,l,c,h,new Bt)),r&&(d.uv1=Ye.getInterpolatedAttribute(r,o,l,c,h,new Bt)),a&&(d.normal=Ye.getInterpolatedAttribute(a,o,l,c,h,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new R,materialIndex:0};Ye.getNormal(zs,Bs,Hs,f.normal),d.face=f,d.barycoord=h}return d}class ln extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(h,2));function v(M,p,u,b,y,x,L,T,w,P,g){const _=x/w,C=L/P,O=x/2,I=L/2,V=T/2,q=w+1,W=P+1;let X=0,H=0;const nt=new R;for(let rt=0;rt<W;rt++){const yt=rt*C-I;for(let kt=0;kt<q;kt++){const ne=kt*_-O;nt[M]=ne*b,nt[p]=yt*y,nt[u]=V,c.push(nt.x,nt.y,nt.z),nt[M]=0,nt[p]=0,nt[u]=T>0?1:-1,d.push(nt.x,nt.y,nt.z),h.push(kt/w),h.push(1-rt/P),X+=1}}for(let rt=0;rt<P;rt++)for(let yt=0;yt<w;yt++){const kt=f+yt+q*rt,ne=f+yt+q*(rt+1),$=f+(yt+1)+q*(rt+1),et=f+(yt+1)+q*rt;l.push(kt,ne,et),l.push(ne,$,et),H+=6}o.addGroup(m,H,g),m+=H,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const s in n)t[s]=n[s]}return t}function mu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const gu={clone:Gi,merge:Pe};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Ki{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new R,ml=new Bt,gl=new Bt;class He extends Lc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90,Ti=1;class xu extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(bi,Ti,t,e);s.layers=this.layers,this.add(s);const r=new He(bi,Ti,t,e);r.layers=this.layers,this.add(r);const a=new He(bi,Ti,t,e);a.layers=this.layers,this.add(a);const o=new He(bi,Ti,t,e);o.layers=this.layers,this.add(o);const l=new He(bi,Ti,t,e);l.layers=this.layers,this.add(l);const c=new He(bi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Dc extends Le{constructor(t,e,n,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mu extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ln(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Nn});r.uniforms.tEquirect.value=e;const a=new Yt(s,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=on),new xu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ea=new R,Su=new R,yu=new Ut;class jn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ea.subVectors(n,e).cross(Su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yu.getNormalMatrix(t),s=this.coplanarPoint(ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Lr,Xs=new R;class Ao{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],f=s[7],m=s[8],v=s[9],M=s[10],p=s[11],u=s[12],b=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,p-m,x-u).normalize(),n[1].setComponents(l+r,f+c,p+m,x+u).normalize(),n[2].setComponents(l+a,f+d,p+v,x+b).normalize(),n[3].setComponents(l-a,f-d,p-v,x-b).normalize(),n[4].setComponents(l-o,f-h,p-M,x-y).normalize(),e===yn)n[5].setComponents(l+o,f+h,p+M,x+y).normalize();else if(e===vr)n[5].setComponents(o,h,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xs.x=s.normal.x>0?t.max.x:t.min.x,Xs.y=s.normal.y>0?t.max.y:t.min.y,Xs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Eu(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],M=h[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,h[f]=M)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const M=h[m];i.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ys extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,f=e/l,m=[],v=[],M=[],p=[];for(let u=0;u<d;u++){const b=u*f-a;for(let y=0;y<c;y++){const x=y*h-r;v.push(x,-b,0),M.push(0,0,1),p.push(y/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const y=b+c*u,x=b+c*(u+1),L=b+1+c*(u+1),T=b+1+c*u;m.push(y,x,T),m.push(x,L,T)}this.setIndex(m),this.setAttribute("position",new me(v,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.widthSegments,t.heightSegments)}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ku=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$u=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ku=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_f=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,If=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:bu,alphahash_pars_fragment:Tu,alphamap_fragment:wu,alphamap_pars_fragment:Au,alphatest_fragment:Ru,alphatest_pars_fragment:Cu,aomap_fragment:Pu,aomap_pars_fragment:Lu,batching_pars_vertex:Du,batching_vertex:Iu,begin_vertex:Uu,beginnormal_vertex:Nu,bsdfs:Fu,iridescence_fragment:Ou,bumpmap_pars_fragment:ku,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Vu,color_fragment:Gu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:Yu,common:$u,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Ku,displacementmap_pars_vertex:ju,displacementmap_vertex:Zu,emissivemap_fragment:Ju,emissivemap_pars_fragment:Qu,colorspace_fragment:td,colorspace_pars_fragment:ed,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:sd,envmap_pars_vertex:rd,envmap_physical_pars_fragment:gd,envmap_vertex:ad,fog_vertex:od,fog_pars_vertex:ld,fog_fragment:cd,fog_pars_fragment:hd,gradientmap_pars_fragment:ud,lightmap_pars_fragment:dd,lights_lambert_fragment:fd,lights_lambert_pars_fragment:pd,lights_pars_begin:md,lights_toon_fragment:_d,lights_toon_pars_fragment:vd,lights_phong_fragment:xd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:yd,lights_fragment_begin:Ed,lights_fragment_maps:bd,lights_fragment_end:Td,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Cd,map_fragment:Pd,map_pars_fragment:Ld,map_particle_fragment:Dd,map_particle_pars_fragment:Id,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Nd,morphinstance_vertex:Fd,morphcolor_vertex:Od,morphnormal_vertex:kd,morphtarget_pars_vertex:zd,morphtarget_vertex:Bd,normal_fragment_begin:Hd,normal_fragment_maps:Vd,normal_pars_fragment:Gd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:jd,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:Qd,project_vertex:tf,dithering_fragment:ef,dithering_pars_fragment:nf,roughnessmap_fragment:sf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:af,shadowmap_pars_vertex:of,shadowmap_vertex:lf,shadowmask_pars_fragment:cf,skinbase_vertex:hf,skinning_pars_vertex:uf,skinning_vertex:df,skinnormal_vertex:ff,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:_f,transmission_fragment:vf,transmission_pars_fragment:xf,uv_pars_fragment:Mf,uv_pars_vertex:Sf,uv_vertex:yf,worldpos_vertex:Ef,background_vert:bf,background_frag:Tf,backgroundCube_vert:wf,backgroundCube_frag:Af,cube_vert:Rf,cube_frag:Cf,depth_vert:Pf,depth_frag:Lf,distanceRGBA_vert:Df,distanceRGBA_frag:If,equirect_vert:Uf,equirect_frag:Nf,linedashed_vert:Ff,linedashed_frag:Of,meshbasic_vert:kf,meshbasic_frag:zf,meshlambert_vert:Bf,meshlambert_frag:Hf,meshmatcap_vert:Vf,meshmatcap_frag:Gf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:Yf,meshphong_frag:$f,meshphysical_vert:qf,meshphysical_frag:Kf,meshtoon_vert:jf,meshtoon_frag:Zf,points_vert:Jf,points_frag:Qf,shadow_vert:tp,shadow_frag:ep,sprite_vert:np,sprite_frag:ip},it={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},an={basic:{uniforms:Pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Pe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Pe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Pe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Pe([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Pe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Pe([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Pe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Pe([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Pe([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Pe([it.lights,it.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};an.physical={uniforms:Pe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ys={r:0,b:0,g:0},Xn=new un,sp=new ue;function rp(i,t,e,n,s,r,a){const o=new Ot(0);let l=r===!0?0:1,c,d,h=null,f=0,m=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function M(b){let y=!1;const x=v(b);x===null?u(o,l):x&&x.isColor&&(u(x,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,y){const x=v(y);x&&(x.isCubeTexture||x.mapping===Cr)?(d===void 0&&(d=new Yt(new ln(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Gi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Xn.copy(y.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(Xn)),d.material.toneMapped=$t.getTransfer(x.colorSpace)!==ee,(h!==x||f!==x.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Yt(new ys(2,2),new zn({name:"BackgroundMaterial",uniforms:Gi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$t.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,y){b.getRGB(Ys,Pc(i)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:M,addToRenderList:p}}function ap(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,C,O,I,V){let q=!1;const W=h(I,O,C);r!==W&&(r=W,c(r.object)),q=m(_,I,O,V),q&&v(_,I,O,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(_,C,O,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function d(_){return i.deleteVertexArray(_)}function h(_,C,O){const I=O.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let q=V[C.id];q===void 0&&(q={},V[C.id]=q);let W=q[I];return W===void 0&&(W=f(l()),q[I]=W),W}function f(_){const C=[],O=[],I=[];for(let V=0;V<e;V++)C[V]=0,O[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:I,object:_,attributes:{},index:null}}function m(_,C,O,I){const V=r.attributes,q=C.attributes;let W=0;const X=O.getAttributes();for(const H in X)if(X[H].location>=0){const rt=V[H];let yt=q[H];if(yt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),rt===void 0||rt.attribute!==yt||yt&&rt.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function v(_,C,O,I){const V={},q=C.attributes;let W=0;const X=O.getAttributes();for(const H in X)if(X[H].location>=0){let rt=q[H];rt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor));const yt={};yt.attribute=rt,rt&&rt.data&&(yt.data=rt.data),V[H]=yt,W++}r.attributes=V,r.attributesNum=W,r.index=I}function M(){const _=r.newAttributes;for(let C=0,O=_.length;C<O;C++)_[C]=0}function p(_){u(_,0)}function u(_,C){const O=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;O[_]=1,I[_]===0&&(i.enableVertexAttribArray(_),I[_]=1),V[_]!==C&&(i.vertexAttribDivisor(_,C),V[_]=C)}function b(){const _=r.newAttributes,C=r.enabledAttributes;for(let O=0,I=C.length;O<I;O++)C[O]!==_[O]&&(i.disableVertexAttribArray(O),C[O]=0)}function y(_,C,O,I,V,q,W){W===!0?i.vertexAttribIPointer(_,C,O,V,q):i.vertexAttribPointer(_,C,O,I,V,q)}function x(_,C,O,I){M();const V=I.attributes,q=O.getAttributes(),W=C.defaultAttributeValues;for(const X in q){const H=q[X];if(H.location>=0){let nt=V[X];if(nt===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor)),nt!==void 0){const rt=nt.normalized,yt=nt.itemSize,kt=t.get(nt);if(kt===void 0)continue;const ne=kt.buffer,$=kt.type,et=kt.bytesPerElement,xt=$===i.INT||$===i.UNSIGNED_INT||nt.gpuType===So;if(nt.isInterleavedBufferAttribute){const at=nt.data,At=at.stride,Lt=nt.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)u(H.location+zt,at.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<H.locationSize;zt++)p(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let zt=0;zt<H.locationSize;zt++)y(H.location+zt,yt/H.locationSize,$,rt,At*et,(Lt+yt/H.locationSize*zt)*et,xt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)u(H.location+at,nt.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<H.locationSize;at++)p(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let at=0;at<H.locationSize;at++)y(H.location+at,yt/H.locationSize,$,rt,yt*et,yt/H.locationSize*at*et,xt)}}else if(W!==void 0){const rt=W[X];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(H.location,rt);break;case 3:i.vertexAttrib3fv(H.location,rt);break;case 4:i.vertexAttrib4fv(H.location,rt);break;default:i.vertexAttrib1fv(H.location,rt)}}}}b()}function L(){P();for(const _ in n){const C=n[_];for(const O in C){const I=C[O];for(const V in I)d(I[V].object),delete I[V];delete C[O]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const O in C){const I=C[O];for(const V in I)d(I[V].object),delete I[V];delete C[O]}delete n[_.id]}function w(_){for(const C in n){const O=n[C];if(O[_.id]===void 0)continue;const I=O[_.id];for(const V in I)d(I[V].object),delete I[V];delete O[_.id]}}function P(){g(),a=!0,r!==s&&(r=s,c(r.object))}function g(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:g,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function op(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v];e.update(m,n,1)}function l(c,d,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],d[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let v=0;for(let M=0;M<h;M++)v+=d[M]*f[M];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==en&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sn&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:L,maxSamples:T}}function cp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new jn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!s||v===null||v.length===0||r&&!p)r?d(null):c();else{const b=r?0:n,y=b*4;let x=u.clippingState||null;l.value=x,x=d(v,f,y,m);for(let L=0;L!==y;++L)x[L]=e[L];u.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,m,v){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const u=m+M*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,x=m;y!==M;++y,x+=4)a.copy(h[y]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function hp(i){let t=new WeakMap;function e(a,o){return o===Pa?a.mapping=zi:o===La&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pa||o===La)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uc extends Lc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,_l=[.125,.215,.35,.446,.526,.582],ti=20,na=new Uc,vl=new Ot;let ia=null,sa=0,ra=0,aa=!1;const Zn=(1+Math.sqrt(5))/2,wi=1/Zn,xl=[new R(-Zn,wi,0),new R(Zn,wi,0),new R(-wi,0,Zn),new R(wi,0,Zn),new R(0,Zn,-wi),new R(0,Zn,wi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=aa,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:xs,format:en,colorSpace:Yi,depthBuffer:!1},s=Sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=up(r)),this._blurMaterial=dp(r,t,e)}return s}_compileMaterial(t){const e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,s){const o=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(vl),d.toneMapping=Fn,d.autoClear=!1;const m=new Be({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),v=new Yt(new ln,m);let M=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,M=!0):(m.color.copy(vl),M=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;$s(s,b*y,u>2?y:0,y,y),d.setRenderTarget(s),M&&d.render(v,o),d.render(t,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xl[(s-r-1)%xl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Yt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ti-1),M=r/v,p=isFinite(r)?1+Math.floor(d*M):ti;p>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ti}`);const u=[];let b=0;for(let w=0;w<ti;++w){const P=w/M,g=Math.exp(-P*P/2);u.push(g),w===0?b+=g:w<p&&(b+=2*g)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const x=this._sizeLods[s],L=3*x*(s>y-Li?s-y+Li:0),T=4*(this._cubeSize-x);$s(e,L,T,3*x,2*x),l.setRenderTarget(e),l.render(h,na)}}function up(i){const t=[],e=[],n=[];let s=i;const r=i-Li+1+_l.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Li?l=_l[a-i+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,v=6,M=3,p=2,u=1,b=new Float32Array(M*v*m),y=new Float32Array(p*v*m),x=new Float32Array(u*v*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,P=T>2?0:-1,g=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];b.set(g,M*v*T),y.set(f,p*v*T);const _=[T,T,T,T,T,T];x.set(_,u*v*T)}const L=new Ve;L.setAttribute("position",new hn(b,M)),L.setAttribute("uv",new hn(y,p)),L.setAttribute("faceIndex",new hn(x,u)),t.push(L),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sl(i,t,e){const n=new ci(i,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dp(i,t,e){const n=new Float32Array(ti),s=new R(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function yl(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function El(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pa||l===La,d=l===zi||l===Bi;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ml(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new Ml(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function pp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mp(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let p=0,u=M.length;p<u;p++)t.remove(M[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const M=m[v];for(let p=0,u=M.length;p<u;p++)t.update(M[p],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,v=h.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let y=0,x=b.length;y<x;y+=3){const L=b[y+0],T=b[y+1],w=b[y+2];f.push(L,T,T,w,w,L)}}else if(v!==void 0){const b=v.array;M=v.version;for(let y=0,x=b.length/3-1;y<x;y+=3){const L=y+0,T=y+1,w=y+2;f.push(L,T,T,w,w,L)}}else return;const p=new(yc(f)?Cc:Rc)(f,1);p.version=M;const u=r.get(h);u&&t.remove(u),r.set(h,p)}function d(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function gp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,f*a,v),e.update(m,n,v))}function d(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];e.update(p,n,1)}function h(f,m,v,M){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,M,0,v);let u=0;for(let b=0;b<v;b++)u+=m[b]*M[b];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _p(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,t,e){const n=new WeakMap,s=new pe;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),p===!0&&(x=3);let L=o.attributes.position.count*x,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*T*4*h),P=new bc(w,L,T,h);P.type=Sn,P.needsUpdate=!0;const g=x*4;for(let C=0;C<h;C++){const O=u[C],I=b[C],V=y[C],q=L*T*4*C;for(let W=0;W<O.count;W++){const X=W*g;v===!0&&(s.fromBufferAttribute(O,W),w[q+X+0]=s.x,w[q+X+1]=s.y,w[q+X+2]=s.z,w[q+X+3]=0),M===!0&&(s.fromBufferAttribute(I,W),w[q+X+4]=s.x,w[q+X+5]=s.y,w[q+X+6]=s.z,w[q+X+7]=0),p===!0&&(s.fromBufferAttribute(V,W),w[q+X+8]=s.x,w[q+X+9]=s.y,w[q+X+10]=s.z,w[q+X+11]=V.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new Bt(L,T)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function xp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Nc extends Le{constructor(t,e,n,s,r,a,o,l,c,d=Ui){if(d!==Ui&&d!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ui&&(n=li),n===void 0&&d===Vi&&(n=Hi),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fc=new Le,bl=new Nc(1,1),Oc=new bc,kc=new su,zc=new Dc,Tl=[],wl=[],Al=new Float32Array(16),Rl=new Float32Array(9),Cl=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Tl[s];if(r===void 0&&(r=new Float32Array(s),Tl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Cl.set(n),i.uniformMatrix2fv(this.addr,!1,Cl),be(e,n)}}function Tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Rl.set(n),i.uniformMatrix3fv(this.addr,!1,Rl),be(e,n)}}function wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),be(e,n)}}function Ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bl.compareFunction=Sc,r=bl):r=Fc,e.setTexture2D(t||r,s)}function Fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kc,s)}function Op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zc,s)}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oc,s)}function zp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return yp;case 35666:return Ep;case 35674:return bp;case 35675:return Tp;case 35676:return wp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Ip;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return kp}}function Bp(i,t){i.uniform1fv(this.addr,t)}function Hp(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Vp(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Gp(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Wp(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xp(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yp(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $p(i,t){i.uniform1iv(this.addr,t)}function qp(i,t){i.uniform2iv(this.addr,t)}function Kp(i,t){i.uniform3iv(this.addr,t)}function jp(i,t){i.uniform4iv(this.addr,t)}function Zp(i,t){i.uniform1uiv(this.addr,t)}function Jp(i,t){i.uniform2uiv(this.addr,t)}function Qp(i,t){i.uniform3uiv(this.addr,t)}function tm(i,t){i.uniform4uiv(this.addr,t)}function em(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Fc,r[a])}function nm(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kc,r[a])}function im(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zc,r[a])}function sm(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Oc,r[a])}function rm(i){switch(i){case 5126:return Bp;case 35664:return Hp;case 35665:return Vp;case 35666:return Gp;case 35674:return Wp;case 35675:return Xp;case 35676:return Yp;case 5124:case 35670:return $p;case 35667:case 35671:return qp;case 35668:case 35672:return Kp;case 35669:case 35673:return jp;case 5125:return Zp;case 36294:return Jp;case 36295:return Qp;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}class am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zp(e.type)}}class om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rm(e.type)}}class lm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Pl(i,t){i.seq.push(t),i.map[t.id]=t}function cm(i,t,e){const n=i.name,s=n.length;for(oa.lastIndex=0;;){const r=oa.exec(n),a=oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pl(e,c===void 0?new am(o,i,t):new om(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new lm(o),Pl(e,h)),e=h}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);cm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ll(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hm=37297;let um=0;function dm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Dl=new Ut;function fm(i){$t._getMatrix(Dl,$t.workingColorSpace,i);const t=`mat3( ${Dl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Il(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dm(i.getShaderSource(t),a)}else return s}function pm(i,t){const e=fm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mm(i,t){let e;switch(t){case Lh:e="Linear";break;case Dh:e="Reinhard";break;case Ih:e="Cineon";break;case Uh:e="ACESFilmic";break;case Fh:e="AgX";break;case Oh:e="Neutral";break;case Nh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qs=new R;function gm(){$t.getLuminanceCoefficients(qs);const i=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function vm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cs(i){return i!==""}function Ul(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(i){return i.replace(Mm,ym)}const Sm=new Map;function ym(i,t){let e=Ft[t];if(e===void 0){const n=Sm.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ao(e)}const Em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(i){return i.replace(Em,bm)}function bm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ol(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function wm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Rm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mo:t="ENVMAP_BLENDING_MULTIPLY";break;case Ch:t="ENVMAP_BLENDING_MIX";break;case Ph:t="ENVMAP_BLENDING_ADD";break}return t}function Cm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Tm(e),c=wm(e),d=Am(e),h=Rm(e),f=Cm(e),m=_m(e),v=vm(r),M=s.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(cs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(cs).join(`
`),u.length>0&&(u+=`
`)):(p=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),u=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Fn?mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,pm("linearToOutputTexel",e.outputColorSpace),gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),a=ao(a),a=Ul(a,e),a=Nl(a,e),o=ao(o),o=Ul(o,e),o=Nl(o,e),a=Fl(a),o=Fl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=b+p+a,x=b+u+o,L=Ll(s,s.VERTEX_SHADER,y),T=Ll(s,s.FRAGMENT_SHADER,x);s.attachShader(M,L),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(C){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(M).trim(),I=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(T).trim();let q=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,T);else{const X=Il(s,L,"vertex"),H=Il(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+X+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(I===""||V==="")&&(W=!1);W&&(C.diagnostics={runnable:q,programLog:O,vertexShader:{log:I,prefix:p},fragmentShader:{log:V,prefix:u}})}s.deleteShader(L),s.deleteShader(T),P=new pr(s,M),g=xm(s,M)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(M,hm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=um++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=T,this}let Lm=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Im(t),e.set(t,n)),n}}class Im{constructor(t){this.id=Lm++,this.code=t,this.usedTimes=0}}function Um(i,t,e,n,s,r,a){const o=new wc,l=new Dm,c=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(g){return c.add(g),g===0?"uv":`uv${g}`}function p(g,_,C,O,I){const V=O.fog,q=I.geometry,W=g.isMeshStandardMaterial?O.environment:null,X=(g.isMeshStandardMaterial?e:t).get(g.envMap||W),H=X&&X.mapping===Cr?X.image.height:null,nt=v[g.type];g.precision!==null&&(m=s.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=rt!==void 0?rt.length:0;let kt=0;q.morphAttributes.position!==void 0&&(kt=1),q.morphAttributes.normal!==void 0&&(kt=2),q.morphAttributes.color!==void 0&&(kt=3);let ne,$,et,xt;if(nt){const te=an[nt];ne=te.vertexShader,$=te.fragmentShader}else ne=g.vertexShader,$=g.fragmentShader,l.update(g),et=l.getVertexShaderID(g),xt=l.getFragmentShaderID(g);const at=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Lt=I.isInstancedMesh===!0,zt=I.isBatchedMesh===!0,ce=!!g.map,Wt=!!g.matcap,ge=!!X,F=!!g.aoMap,Ge=!!g.lightMap,Ht=!!g.bumpMap,Vt=!!g.normalMap,Tt=!!g.displacementMap,re=!!g.emissiveMap,bt=!!g.metalnessMap,A=!!g.roughnessMap,S=g.anisotropy>0,k=g.clearcoat>0,K=g.dispersion>0,J=g.iridescence>0,Y=g.sheen>0,Mt=g.transmission>0,ot=S&&!!g.anisotropyMap,ut=k&&!!g.clearcoatMap,Xt=k&&!!g.clearcoatNormalMap,Q=k&&!!g.clearcoatRoughnessMap,dt=J&&!!g.iridescenceMap,wt=J&&!!g.iridescenceThicknessMap,Rt=Y&&!!g.sheenColorMap,ft=Y&&!!g.sheenRoughnessMap,Gt=!!g.specularMap,Nt=!!g.specularColorMap,ie=!!g.specularIntensityMap,D=Mt&&!!g.transmissionMap,st=Mt&&!!g.thicknessMap,G=!!g.gradientMap,j=!!g.alphaMap,ht=g.alphaTest>0,lt=!!g.alphaHash,Dt=!!g.extensions;let de=Fn;g.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(de=i.toneMapping);const Ae={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:ne,fragmentShader:$,defines:g.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:zt,batchingColor:zt&&I._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&I.instanceColor!==null,instancingMorph:Lt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Yi,alphaToCoverage:!!g.alphaToCoverage,map:ce,matcap:Wt,envMap:ge,envMapMode:ge&&X.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Ge,bumpMap:Ht,normalMap:Vt,displacementMap:f&&Tt,emissiveMap:re,normalMapObjectSpace:Vt&&g.normalMapType===Hh,normalMapTangentSpace:Vt&&g.normalMapType===Mc,metalnessMap:bt,roughnessMap:A,anisotropy:S,anisotropyMap:ot,clearcoat:k,clearcoatMap:ut,clearcoatNormalMap:Xt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:dt,iridescenceThicknessMap:wt,sheen:Y,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ie,transmission:Mt,transmissionMap:D,thicknessMap:st,gradientMap:G,opaque:g.transparent===!1&&g.blending===Ii&&g.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:lt,combine:g.combine,mapUv:ce&&M(g.map.channel),aoMapUv:F&&M(g.aoMap.channel),lightMapUv:Ge&&M(g.lightMap.channel),bumpMapUv:Ht&&M(g.bumpMap.channel),normalMapUv:Vt&&M(g.normalMap.channel),displacementMapUv:Tt&&M(g.displacementMap.channel),emissiveMapUv:re&&M(g.emissiveMap.channel),metalnessMapUv:bt&&M(g.metalnessMap.channel),roughnessMapUv:A&&M(g.roughnessMap.channel),anisotropyMapUv:ot&&M(g.anisotropyMap.channel),clearcoatMapUv:ut&&M(g.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&M(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&M(g.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&M(g.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&M(g.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&M(g.sheenColorMap.channel),sheenRoughnessMapUv:ft&&M(g.sheenRoughnessMap.channel),specularMapUv:Gt&&M(g.specularMap.channel),specularColorMapUv:Nt&&M(g.specularColorMap.channel),specularIntensityMapUv:ie&&M(g.specularIntensityMap.channel),transmissionMapUv:D&&M(g.transmissionMap.channel),thicknessMapUv:st&&M(g.thicknessMap.channel),alphaMapUv:j&&M(g.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Vt||S),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(ce||j),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:kt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:ce&&g.map.isVideoTexture===!0&&$t.getTransfer(g.map.colorSpace)===ee,decodeVideoTextureEmissive:re&&g.emissiveMap.isVideoTexture===!0&&$t.getTransfer(g.emissiveMap.colorSpace)===ee,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Mn,flipSided:g.side===Ne,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Dt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&g.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function u(g){const _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(const C in g.defines)_.push(C),_.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(b(_,g),y(_,g),_.push(i.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function b(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function y(g,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),g.push(o.mask)}function x(g){const _=v[g.type];let C;if(_){const O=an[_];C=gu.clone(O.uniforms)}else C=g.uniforms;return C}function L(g,_){let C;for(let O=0,I=d.length;O<I;O++){const V=d[O];if(V.cacheKey===_){C=V,++C.usedTimes;break}}return C===void 0&&(C=new Pm(i,_,g,r),d.push(C)),C}function T(g){if(--g.usedTimes===0){const _=d.indexOf(g);d[_]=d[d.length-1],d.pop(),g.destroy()}}function w(g){l.remove(g)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:L,releaseProgram:T,releaseShaderCache:w,programs:d,dispose:P}}function Nm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,m,v,M,p){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:M,group:p},i[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=M,u.group=p),t++,u}function o(h,f,m,v,M,p){const u=a(h,f,m,v,M,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(h,f,m,v,M,p){const u=a(h,f,m,v,M,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,f){e.length>1&&e.sort(h||Fm),n.length>1&&n.sort(f||kl),s.length>1&&s.sort(f||kl)}function d(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function Om(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new zl,i.set(n,[a])):s>=r.length?(a=new zl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function km(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ot};break;case"SpotLight":e={position:new R,direction:new R,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function zm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Bm=0;function Hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vm(i){const t=new km,e=zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new ue,a=new ue;function o(c){let d=0,h=0,f=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let m=0,v=0,M=0,p=0,u=0,b=0,y=0,x=0,L=0,T=0,w=0;c.sort(Hm);for(let g=0,_=c.length;g<_;g++){const C=c[g],O=C.color,I=C.intensity,V=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=O.r*I,h+=O.g*I,f+=O.b*I;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],I);w++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=W,m++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(O).multiplyScalar(I),W.distance=V,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[M]=W;const X=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,X.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[M]=X.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=q,x++}M++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(O).multiplyScalar(I),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=W,p++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const X=C.shadow,H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=C.shadow.matrix,y++}n.point[v]=W,v++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(I),W.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==M||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==b||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,P.directionalLength=m,P.pointLength=v,P.spotLength=M,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=b,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=w,n.version=Bm++)}function l(c,d){let h=0,f=0,m=0,v=0,M=0;const p=d.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const y=c[u];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(y.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Bl(i){const t=new Vm(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Bl(i),t.set(s,[o])):r>=a.length?(o=new Bl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Wm extends Ki{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xm extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qm(i,t,e){let n=new Ao;const s=new Bt,r=new Bt,a=new pe,o=new Wm({depthPacking:Bh}),l=new Xm,c={},d=e.maxTextureSize,h={[kn]:Ne,[Ne]:kn,[Mn]:Mn},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Ym,fragmentShader:$m}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ve;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Yt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let u=this.type;this.render=function(T,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const g=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Nn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const I=u!==xn&&this.type===xn,V=u===xn&&this.type!==xn;for(let q=0,W=T.length;q<W;q++){const X=T[q],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const nt=H.getFrameExtents();if(s.multiply(nt),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/nt.x),s.x=r.x*nt.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/nt.y),s.y=r.y*nt.y,H.mapSize.y=r.y)),H.map===null||I===!0||V===!0){const yt=this.type!==xn?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new ci(s.x,s.y,yt),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const rt=H.getViewportCount();for(let yt=0;yt<rt;yt++){const kt=H.getViewport(yt);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),O.viewport(a),H.updateMatrices(X,yt),n=H.getFrustum(),x(w,P,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===xn&&b(H,P),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(g,_,C)};function b(T,w){const P=t.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,P,f,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,P,m,M,null)}function y(T,w,P,g){let _=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)_=C;else if(_=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=_.uuid,I=w.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let q=V[I];q===void 0&&(q=_.clone(),V[I]=q,w.addEventListener("dispose",L)),_=q}if(_.visible=w.visible,_.wireframe=w.wireframe,g===xn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=i.properties.get(_);O.light=P}return _}function x(T,w,P,g,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const I=t.update(T),V=T.material;if(Array.isArray(V)){const q=I.groups;for(let W=0,X=q.length;W<X;W++){const H=q[W],nt=V[H.materialIndex];if(nt&&nt.visible){const rt=y(T,nt,g,_);T.onBeforeShadow(i,T,w,P,I,rt,H),i.renderBufferDirect(P,null,I,rt,T,H),T.onAfterShadow(i,T,w,P,I,rt,H)}}}else if(V.visible){const q=y(T,V,g,_);T.onBeforeShadow(i,T,w,P,I,q,null),i.renderBufferDirect(P,null,I,q,T,null),T.onAfterShadow(i,T,w,P,I,q,null)}}const O=T.children;for(let I=0,V=O.length;I<V;I++)x(O[I],w,P,g,_)}function L(T){T.target.removeEventListener("dispose",L);for(const P in c){const g=c[P],_=T.target.uuid;_ in g&&(g[_].dispose(),delete g[_])}}}const Km={[Ea]:ba,[Ta]:Ra,[wa]:Ca,[ki]:Aa,[ba]:Ea,[Ra]:Ta,[Ca]:wa,[Aa]:ki};function jm(i,t){function e(){let D=!1;const st=new pe;let G=null;const j=new pe(0,0,0,0);return{setMask:function(ht){G!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),G=ht)},setLocked:function(ht){D=ht},setClear:function(ht,lt,Dt,de,Ae){Ae===!0&&(ht*=de,lt*=de,Dt*=de),st.set(ht,lt,Dt,de),j.equals(st)===!1&&(i.clearColor(ht,lt,Dt,de),j.copy(st))},reset:function(){D=!1,G=null,j.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,G=null,j=null,ht=null;return{setReversed:function(lt){if(st!==lt){const Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const de=ht;ht=null,this.setClear(de)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?at(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(lt){G!==lt&&!D&&(i.depthMask(lt),G=lt)},setFunc:function(lt){if(st&&(lt=Km[lt]),j!==lt){switch(lt){case Ea:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=lt}},setLocked:function(lt){D=lt},setClear:function(lt){ht!==lt&&(st&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){D=!1,G=null,j=null,ht=null,st=!1}}}function s(){let D=!1,st=null,G=null,j=null,ht=null,lt=null,Dt=null,de=null,Ae=null;return{setTest:function(te){D||(te?at(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(te){st!==te&&!D&&(i.stencilMask(te),st=te)},setFunc:function(te,qe,dn){(G!==te||j!==qe||ht!==dn)&&(i.stencilFunc(te,qe,dn),G=te,j=qe,ht=dn)},setOp:function(te,qe,dn){(lt!==te||Dt!==qe||de!==dn)&&(i.stencilOp(te,qe,dn),lt=te,Dt=qe,de=dn)},setLocked:function(te){D=te},setClear:function(te){Ae!==te&&(i.clearStencil(te),Ae=te)},reset:function(){D=!1,st=null,G=null,j=null,ht=null,lt=null,Dt=null,de=null,Ae=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,m=[],v=null,M=!1,p=null,u=null,b=null,y=null,x=null,L=null,T=null,w=new Ot(0,0,0),P=0,g=!1,_=null,C=null,O=null,I=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=X>=2);let nt=null,rt={};const yt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),ne=new pe().fromArray(yt),$=new pe().fromArray(kt);function et(D,st,G,j){const ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(D,lt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<G;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}const xt={};xt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(ki),Ht(!1),Vt(Wo),at(i.CULL_FACE),F(Nn);function at(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function At(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Lt(D,st){return h[D]!==st?(i.bindFramebuffer(D,st),h[D]=st,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function zt(D,st){let G=m,j=!1;if(D){G=f.get(st),G===void 0&&(G=[],f.set(st,G));const ht=D.textures;if(G.length!==ht.length||G[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=ht.length;lt<Dt;lt++)G[lt]=i.COLOR_ATTACHMENT0+lt;G.length=ht.length,j=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,j=!0);j&&i.drawBuffers(G)}function ce(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const Wt={[Qn]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};Wt[ph]=i.MIN,Wt[mh]=i.MAX;const ge={[gh]:i.ZERO,[_h]:i.ONE,[vh]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[bh]:i.SRC_ALPHA_SATURATE,[yh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[xh]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[Sh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[wh]:i.ONE_MINUS_CONSTANT_COLOR,[Ah]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,st,G,j,ht,lt,Dt,de,Ae,te){if(D===Nn){M===!0&&(At(i.BLEND),M=!1);return}if(M===!1&&(at(i.BLEND),M=!0),D!==uh){if(D!==p||te!==g){if((u!==Qn||x!==Qn)&&(i.blendEquation(i.FUNC_ADD),u=Qn,x=Qn),te)switch(D){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,y=null,L=null,T=null,w.set(0,0,0),P=0,p=D,g=te}return}ht=ht||st,lt=lt||G,Dt=Dt||j,(st!==u||ht!==x)&&(i.blendEquationSeparate(Wt[st],Wt[ht]),u=st,x=ht),(G!==b||j!==y||lt!==L||Dt!==T)&&(i.blendFuncSeparate(ge[G],ge[j],ge[lt],ge[Dt]),b=G,y=j,L=lt,T=Dt),(de.equals(w)===!1||Ae!==P)&&(i.blendColor(de.r,de.g,de.b,Ae),w.copy(de),P=Ae),p=D,g=!1}function Ge(D,st){D.side===Mn?At(i.CULL_FACE):at(i.CULL_FACE);let G=D.side===Ne;st&&(G=!G),Ht(G),D.blending===Ii&&D.transparent===!1?F(Nn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){_!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),_=D)}function Vt(D){D!==lh?(at(i.CULL_FACE),D!==C&&(D===Wo?i.cullFace(i.BACK):D===ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),C=D}function Tt(D){D!==O&&(W&&i.lineWidth(D),O=D)}function re(D,st,G){D?(at(i.POLYGON_OFFSET_FILL),(I!==st||V!==G)&&(i.polygonOffset(st,G),I=st,V=G)):At(i.POLYGON_OFFSET_FILL)}function bt(D){D?at(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+q-1),nt!==D&&(i.activeTexture(D),nt=D)}function S(D,st,G){G===void 0&&(nt===null?G=i.TEXTURE0+q-1:G=nt);let j=rt[G];j===void 0&&(j={type:void 0,texture:void 0},rt[G]=j),(j.type!==D||j.texture!==st)&&(nt!==G&&(i.activeTexture(G),nt=G),i.bindTexture(D,st||xt[D]),j.type=D,j.texture=st)}function k(){const D=rt[nt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function ft(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Gt(D,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let j=G.get(D);j===void 0&&(j=i.getUniformBlockIndex(st,D.name),G.set(D,j))}function Nt(D,st){const j=c.get(st).get(D);l.get(st)!==j&&(i.uniformBlockBinding(st,j,D.__bindingPointIndex),l.set(st,j))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},nt=null,rt={},h={},f=new WeakMap,m=[],v=null,M=!1,p=null,u=null,b=null,y=null,x=null,L=null,T=null,w=new Ot(0,0,0),P=0,g=!1,_=null,C=null,O=null,I=null,V=null,ne.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:At,bindFramebuffer:Lt,drawBuffers:zt,useProgram:ce,setBlending:F,setMaterial:Ge,setFlipSided:Ht,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:re,setScissorTest:bt,activeTexture:A,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:dt,texImage3D:wt,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Rt,viewport:ft,reset:ie}}function Hl(i,t,e,n){const s=Zm(n);switch(e){case fc:return i*t;case mc:return i*t;case gc:return i*t*2;case _c:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case vc:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case wo:return i*t*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dr:case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xc:case no:return Math.ceil(i/4)*Math.ceil(t/4)*8;case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zm(i){switch(i){case bn:case hc:return{byteLength:1,components:1};case ps:case uc:case xs:return{byteLength:2,components:1};case yo:case Eo:return{byteLength:2,components:4};case li:case So:case Sn:return{byteLength:4,components:1};case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return m?new OffscreenCanvas(A,S):xr("canvas")}function M(A,S,k){let K=1;const J=bt(A);if((J.width>k||J.height>k)&&(K=k/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(K*J.width),Mt=Math.floor(K*J.height);h===void 0&&(h=v(Y,Mt));const ot=S?v(Y,Mt):h;return ot.width=Y,ot.height=Mt,ot.getContext("2d").drawImage(A,0,0,Y,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Mt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps}function u(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,S,k,K,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),S===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const Mt=J?Pr:$t.getTransfer(K);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Mt===ee?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(A,S){let k;return A?S===null||S===li||S===Hi?k=i.DEPTH24_STENCIL8:S===Sn?k=i.DEPTH32F_STENCIL8:S===ps&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===li||S===Hi?k=i.DEPTH_COMPONENT24:S===Sn?k=i.DEPTH_COMPONENT32F:S===ps&&(k=i.DEPTH_COMPONENT16),k}function L(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&d.delete(S)}function w(A){const S=A.target;S.removeEventListener("dispose",w),_(S)}function P(A){const S=n.get(A);if(S.__webglInit===void 0)return;const k=A.source,K=f.get(k);if(K){const J=K[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&g(A),Object.keys(K).length===0&&f.delete(k)}n.remove(A)}function g(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const k=A.source,K=f.get(k);delete K[S.__cacheKey],a.memory.textures--}function _(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let J=0;J<S.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[K][J]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let K=0,J=k.length;K<J;K++){const Y=n.get(k[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(A)}let C=0;function O(){C=0}function I(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const k=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,A,S);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function W(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){$(k,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function X(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){$(k,A,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function H(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){et(k,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const nt={[_r]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},rt={[nn]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},yt={[Vh]:i.NEVER,[qh]:i.ALWAYS,[Gh]:i.LESS,[Sc]:i.LEQUAL,[Wh]:i.EQUAL,[$h]:i.GEQUAL,[Xh]:i.GREATER,[Yh]:i.NOTEQUAL};function kt(A,S){if(S.type===Sn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===Ur||S.magFilter===Rs||S.magFilter===ri||S.minFilter===on||S.minFilter===Ur||S.minFilter===Rs||S.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,rt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Rs&&S.minFilter!==ri||S.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const K=S.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const Y=V(S);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[Y].usedTimes++;const Mt=J[A.__cacheKey];Mt!==void 0&&(J[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&g(S)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return k}function $(A,S,k){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const J=ne(A,S),Y=S.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+k);const Mt=n.get(Y);if(Y.version!==Mt.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const ot=$t.getPrimaries($t.workingColorSpace),ut=S.colorSpace===Un?null:$t.getPrimaries(S.colorSpace),Xt=S.colorSpace===Un||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Q=M(S.image,!1,s.maxTextureSize);Q=re(S,Q);const dt=r.convert(S.format,S.colorSpace),wt=r.convert(S.type);let Rt=y(S.internalFormat,dt,wt,S.colorSpace,S.isVideoTexture);kt(K,S);let ft;const Gt=S.mipmaps,Nt=S.isVideoTexture!==!0,ie=Mt.__version===void 0||J===!0,D=Y.dataReady,st=L(S,Q);if(S.isDepthTexture)Rt=x(S.format===Vi,S.type),ie&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,dt,wt,null));else if(S.isDataTexture)if(Gt.length>0){Nt&&ie&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Gt[0].width,Gt[0].height);for(let G=0,j=Gt.length;G<j;G++)ft=Gt[G],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,wt,ft.data):e.texImage2D(i.TEXTURE_2D,G,Rt,ft.width,ft.height,0,dt,wt,ft.data);S.generateMipmaps=!1}else Nt?(ie&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Q.width,Q.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,wt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,dt,wt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Gt[0].width,Gt[0].height,Q.depth);for(let G=0,j=Gt.length;G<j;G++)if(ft=Gt[G],S.format!==en)if(dt!==null)if(Nt){if(D)if(S.layerUpdates.size>0){const ht=Hl(ft.width,ft.height,S.format,S.type);for(const lt of S.layerUpdates){const Dt=ft.data.subarray(lt*ht/ft.data.BYTES_PER_ELEMENT,(lt+1)*ht/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,lt,ft.width,ft.height,1,dt,Dt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Rt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,Q.depth,dt,wt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Rt,ft.width,ft.height,Q.depth,0,dt,wt,ft.data)}else{Nt&&ie&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Gt[0].width,Gt[0].height);for(let G=0,j=Gt.length;G<j;G++)ft=Gt[G],S.format!==en?dt!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Rt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,wt,ft.data):e.texImage2D(i.TEXTURE_2D,G,Rt,ft.width,ft.height,0,dt,wt,ft.data)}else if(S.isDataArrayTexture)if(Nt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Q.width,Q.height,Q.depth),D)if(S.layerUpdates.size>0){const G=Hl(Q.width,Q.height,S.format,S.type);for(const j of S.layerUpdates){const ht=Q.data.subarray(j*G/Q.data.BYTES_PER_ELEMENT,(j+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,dt,wt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,wt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,dt,wt,Q.data);else if(S.isData3DTexture)Nt?(ie&&e.texStorage3D(i.TEXTURE_3D,st,Rt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,wt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,dt,wt,Q.data);else if(S.isFramebufferTexture){if(ie)if(Nt)e.texStorage2D(i.TEXTURE_2D,st,Rt,Q.width,Q.height);else{let G=Q.width,j=Q.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Rt,G,j,0,dt,wt,null),G>>=1,j>>=1}}else if(Gt.length>0){if(Nt&&ie){const G=bt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,G.width,G.height)}for(let G=0,j=Gt.length;G<j;G++)ft=Gt[G],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt,wt,ft):e.texImage2D(i.TEXTURE_2D,G,Rt,dt,wt,ft);S.generateMipmaps=!1}else if(Nt){if(ie){const G=bt(Q);e.texStorage2D(i.TEXTURE_2D,st,Rt,G.width,G.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,wt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Rt,dt,wt,Q);p(S)&&u(K),Mt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function et(A,S,k){if(S.image.length!==6)return;const K=ne(A,S),J=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const Y=n.get(J);if(J.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+k);const Mt=$t.getPrimaries($t.workingColorSpace),ot=S.colorSpace===Un?null:$t.getPrimaries(S.colorSpace),ut=S.colorSpace===Un||Mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Xt=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!Xt&&!Q?dt[j]=M(S.image[j],!0,s.maxCubemapSize):dt[j]=Q?S.image[j].image:S.image[j],dt[j]=re(S,dt[j]);const wt=dt[0],Rt=r.convert(S.format,S.colorSpace),ft=r.convert(S.type),Gt=y(S.internalFormat,Rt,ft,S.colorSpace),Nt=S.isVideoTexture!==!0,ie=Y.__version===void 0||K===!0,D=J.dataReady;let st=L(S,wt);kt(i.TEXTURE_CUBE_MAP,S);let G;if(Xt){Nt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,wt.width,wt.height);for(let j=0;j<6;j++){G=dt[j].mipmaps;for(let ht=0;ht<G.length;ht++){const lt=G[ht];S.format!==en?Rt!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,Rt,ft,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Gt,lt.width,lt.height,0,Rt,ft,lt.data)}}}else{if(G=S.mipmaps,Nt&&ie){G.length>0&&st++;const j=bt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,Rt,ft,dt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,dt[j].width,dt[j].height,0,Rt,ft,dt[j].data);for(let ht=0;ht<G.length;ht++){const Dt=G[ht].image[j].image;Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Dt.width,Dt.height,Rt,ft,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Gt,Dt.width,Dt.height,0,Rt,ft,Dt.data)}}else{Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,ft,dt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,Rt,ft,dt[j]);for(let ht=0;ht<G.length;ht++){const lt=G[ht];Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Rt,ft,lt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Gt,Rt,ft,lt.image[j])}}}p(S)&&u(i.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,k,K,J,Y){const Mt=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),ut=y(k.internalFormat,Mt,ot,k.colorSpace),Xt=n.get(S),Q=n.get(k);if(Q.__renderTarget=S,!Xt.__hasExternalTextures){const dt=Math.max(1,S.width>>Y),wt=Math.max(1,S.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,ut,dt,wt,S.depth,0,Mt,ot,null):e.texImage2D(J,Y,ut,dt,wt,0,Mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Vt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,Q.__webglTexture,0,Ht(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,Q.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const K=S.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=x(S.stencilBuffer,J),Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Ht(S);Vt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Y,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{const K=S.textures;for(let J=0;J<K.length;J++){const Y=K[J],Mt=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),ut=y(Y.internalFormat,Mt,ot,Y.colorSpace),Xt=Ht(S);k&&Vt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,ut,S.width,S.height):Vt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,ut,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ut,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const J=K.__webglTexture,Y=Ht(S);if(S.depthTexture.format===Ui)Vt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===Vi)Vt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),at(S.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),at(S.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,S,k){const K=n.get(A);S!==void 0&&xt(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Lt(A)}function ce(A){const S=A.texture,k=n.get(A),K=n.get(S);A.addEventListener("dispose",w);const J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let ut=0;ut<S.mipmaps.length;ut++)k.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else k.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)k.__webglFramebuffer[ot]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ot=0,ut=J.length;ot<ut;ot++){const Xt=n.get(J[ot]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Vt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ut=J[ot];k.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ot]);const Xt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),dt=y(ut.internalFormat,Xt,Q,ut.colorSpace,A.isXRRenderTarget===!0),wt=Ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,k.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),at(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),kt(i.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)xt(k.__webglFramebuffer[ot][ut],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else xt(k.__webglFramebuffer[ot],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,ut=J.length;ot<ut;ot++){const Xt=J[ot],Q=n.get(Xt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),kt(i.TEXTURE_2D,Xt),xt(k.__webglFramebuffer,A,Xt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(Xt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),kt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)xt(k.__webglFramebuffer[ut],A,S,i.COLOR_ATTACHMENT0,ot,ut);else xt(k.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ot,0);p(S)&&u(ot),e.unbindTexture()}A.depthBuffer&&Lt(A)}function Wt(A){const S=A.textures;for(let k=0,K=S.length;k<K;k++){const J=S[k];if(p(J)){const Y=b(A),Mt=n.get(J).__webglTexture;e.bindTexture(Y,Mt),u(Y),e.unbindTexture()}}}const ge=[],F=[];function Ge(A){if(A.samples>0){if(Vt(A)===!1){const S=A.textures,k=A.width,K=A.height;let J=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),ot=S.length>1;if(ot)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ut]);const Xt=n.get(S[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,J,i.NEAREST),l===!0&&(ge.length=0,F.length=0,ge.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ge.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ut]);const Xt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ht(A){return Math.min(s.maxSamples,A.samples)}function Vt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(A){const S=a.render.frame;d.get(A)!==S&&(d.set(A,S),A.update())}function re(A,S){const k=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Yi&&k!==Un&&($t.getTransfer(k)===ee?(K!==en||J!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Vt}function Qm(i,t){function e(n,s=Un){let r;const a=$t.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===So)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===xs)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===en)return i.RGBA;if(n===mc)return i.LUMINANCE;if(n===gc)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===vc)return i.RG;if(n===To)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===ka||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===ka)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===$a||n===qa||n===Ka||n===ja||n===Za||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===to||n===eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dr)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class t0 extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e0={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),u=this._getHandJoint(c,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const n0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class s0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:n0,fragmentShader:i0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r0 extends $i{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,v=null;const M=new s0,p=e.getContextAttributes();let u=null,b=null;const y=[],x=[],L=new Bt;let T=null;const w=new He;w.viewport=new pe;const P=new He;P.viewport=new pe;const g=[w,P],_=new t0;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=y[$];return et===void 0&&(et=new la,y[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=y[$];return et===void 0&&(et=new la,y[$]=et),et.getGripSpace()},this.getHand=function($){let et=y[$];return et===void 0&&(et=new la,y[$]=et),et.getHandSpace()};function I($){const et=x.indexOf($.inputSource);if(et===-1)return;const xt=y[et];xt!==void 0&&(xt.update($.inputSource,$.frame,c||a),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let $=0;$<y.length;$++){const et=x[$];et!==null&&(x[$]=null,y[$].disconnect(et))}C=null,O=null,M.reset(),t.setRenderTarget(u),m=null,f=null,h=null,s=null,b=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ci(m.framebufferWidth,m.framebufferHeight,{format:en,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,xt=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Vi:Ui,xt=p.stencil?Hi:li);const At={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ci(f.textureWidth,f.textureHeight,{format:en,type:bn,depthTexture:new Nc(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q($){for(let et=0;et<$.removed.length;et++){const xt=$.removed[et],at=x.indexOf(xt);at>=0&&(x[at]=null,y[at].disconnect(xt))}for(let et=0;et<$.added.length;et++){const xt=$.added[et];let at=x.indexOf(xt);if(at===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=x.length){x.push(xt),at=Lt;break}else if(x[Lt]===null){x[Lt]=xt,at=Lt;break}if(at===-1)break}const At=y[at];At&&At.connect(xt)}}const W=new R,X=new R;function H($,et,xt){W.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(xt.matrixWorld);const at=W.distanceTo(X),At=et.projectionMatrix.elements,Lt=xt.projectionMatrix.elements,zt=At[14]/(At[10]-1),ce=At[14]/(At[10]+1),Wt=(At[9]+1)/At[5],ge=(At[9]-1)/At[5],F=(At[8]-1)/At[0],Ge=(Lt[8]+1)/Lt[0],Ht=zt*F,Vt=zt*Ge,Tt=at/(-F+Ge),re=Tt*-F;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(re),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=zt+Tt,A=ce+Tt,S=Ht-re,k=Vt+(at-re),K=Wt*ce/A*bt,J=ge*ce/A*bt;$.projectionMatrix.makePerspective(S,k,K,J,bt,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,xt=$.far;M.texture!==null&&(M.depthNear>0&&(et=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),_.near=P.near=w.near=et,_.far=P.far=w.far=xt,(C!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,O=_.far),w.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,_.layers.mask=w.layers.mask|P.layers.mask;const at=$.parent,At=_.cameras;nt(_,at);for(let Lt=0;Lt<At.length;Lt++)nt(At[Lt],at);At.length===2?H(_,w,P):_.projectionMatrix.copy(w.projectionMatrix),rt($,_,at)};function rt($,et,xt){xt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ro*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let yt=null;function kt($,et){if(d=et.getViewerPose(c||a),v=et,d!==null){const xt=d.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let at=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,at=!0);for(let Lt=0;Lt<xt.length;Lt++){const zt=xt[Lt];let ce=null;if(m!==null)ce=m.getViewport(zt);else{const ge=h.getViewSubImage(f,zt);ce=ge.viewport,Lt===0&&(t.setRenderTargetTextures(b,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(b))}let Wt=g[Lt];Wt===void 0&&(Wt=new He,Wt.layers.enable(Lt),Wt.viewport=new pe,g[Lt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ce.x,ce.y,ce.width,ce.height),Lt===0&&(_.matrix.copy(Wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),at===!0&&_.cameras.push(Wt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Lt=h.getDepthInformation(xt[0]);Lt&&Lt.isValid&&Lt.texture&&M.init(t,Lt,s.renderState)}}for(let xt=0;xt<y.length;xt++){const at=x[xt],At=y[xt];at!==null&&At!==void 0&&At.update(at,et,c||a)}yt&&yt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),v=null}const ne=new Ic;ne.setAnimationLoop(kt),this.setAnimationLoop=function($){yt=$},this.dispose=function(){}}}const Yn=new un,a0=new ue;function o0(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Pc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,y,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),h(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(r(p,u),v(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),M(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,y):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ne&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ne&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),y=b.envMap,x=b.envMapRotation;y&&(p.envMap.value=y,Yn.copy(x),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),p.envMapRotation.value.setFromMatrix4(a0.makeRotationFromEuler(Yn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=y*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ne&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const x=y.program;n.uniformBlockBinding(b,x)}function c(b,y){let x=s[b.id];x===void 0&&(v(b),x=d(b),s[b.id]=x,b.addEventListener("dispose",p));const L=y.program;n.updateUBOMapping(b,L);const T=t.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function d(b){const y=h();b.__bindingPointIndex=y;const x=i.createBuffer(),L=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=s[b.id],x=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,w=x.length;T<w;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let g=0,_=P.length;g<_;g++){const C=P[g];if(m(C,T,g,L)===!0){const O=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let q=0;q<I.length;q++){const W=I[q],X=M(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+V,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,y,x,L){const T=b.value,w=y+"_"+x;if(L[w]===void 0)return typeof T=="number"||typeof T=="boolean"?L[w]=T:L[w]=T.clone(),!0;{const P=L[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function v(b){const y=b.uniforms;let x=0;const L=16;for(let w=0,P=y.length;w<P;w++){const g=Array.isArray(y[w])?y[w]:[y[w]];for(let _=0,C=g.length;_<C;_++){const O=g[_],I=Array.isArray(O.value)?O.value:[O.value];for(let V=0,q=I.length;V<q;V++){const W=I[V],X=M(W),H=x%L,nt=H%X.boundary,rt=H+nt;x+=nt,rt!==0&&L-rt<X.storage&&(x+=L-rt),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=X.storage}}}const T=x%L;return T>0&&(x+=L-T),b.__size=x,b.__cache={},this}function M(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class c0{constructor(t={}){const{canvas:e=jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),M=new Int32Array(4);let p=null,u=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let L=!1,T=0,w=0,P=null,g=-1,_=null;const C=new pe,O=new pe;let I=null;const V=new Ot(0);let q=0,W=e.width,X=e.height,H=1,nt=null,rt=null;const yt=new pe(0,0,W,X),kt=new pe(0,0,W,X);let ne=!1;const $=new Ao;let et=!1,xt=!1;const at=new ue,At=new ue,Lt=new R,zt=new pe,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ge(){return P===null?H:1}let F=n;function Ge(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),F===null){const U="webgl2";if(F=Ge(U,E),F===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ht,Vt,Tt,re,bt,A,S,k,K,J,Y,Mt,ot,ut,Xt,Q,dt,wt,Rt,ft,Gt,Nt,ie,D;function st(){Ht=new pp(F),Ht.init(),Nt=new Qm(F,Ht),Vt=new lp(F,Ht,t,Nt),Tt=new jm(F,Ht),Vt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),re=new _p(F),bt=new Nm,A=new Jm(F,Ht,Tt,bt,Vt,Nt,re),S=new hp(x),k=new fp(x),K=new Eu(F),ie=new ap(F,K),J=new mp(F,K,re,ie),Y=new xp(F,J,K,re),Rt=new vp(F,Vt,A),Q=new cp(bt),Mt=new Um(x,S,k,Ht,Vt,ie,Q),ot=new o0(x,bt),ut=new Om,Xt=new Gm(Ht),wt=new rp(x,S,k,Tt,Y,m,l),dt=new qm(x,Y,Vt),D=new l0(F,re,Vt,Tt),ft=new op(F,Ht,re),Gt=new gp(F,Ht,re),re.programs=Mt.programs,x.capabilities=Vt,x.extensions=Ht,x.properties=bt,x.renderLists=ut,x.shadowMap=dt,x.state=Tt,x.info=re}st();const G=new r0(x,F);this.xr=G,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(W,X,!1))},this.getSize=function(E){return E.set(W,X)},this.setSize=function(E,U,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,X=U,e.width=Math.floor(E*H),e.height=Math.floor(U*H),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*H,X*H).floor()},this.setDrawingBufferSize=function(E,U,z){W=E,X=U,H=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(yt)},this.setViewport=function(E,U,z,B){E.isVector4?yt.set(E.x,E.y,E.z,E.w):yt.set(E,U,z,B),Tt.viewport(C.copy(yt).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(kt)},this.setScissor=function(E,U,z,B){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,U,z,B),Tt.scissor(O.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){Tt.setScissorTest(ne=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(E=!0,U=!0,z=!0){let B=0;if(E){let N=!1;if(P!==null){const tt=P.texture.format;N=tt===wo||tt===To||tt===bo}if(N){const tt=P.texture.type,ct=tt===bn||tt===li||tt===ps||tt===Hi||tt===yo||tt===Eo,mt=wt.getClearColor(),gt=wt.getClearAlpha(),Ct=mt.r,It=mt.g,_t=mt.b;ct?(v[0]=Ct,v[1]=It,v[2]=_t,v[3]=gt,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=Ct,M[1]=It,M[2]=_t,M[3]=gt,F.clearBufferiv(F.COLOR,0,M))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT),z&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),Xt.dispose(),bt.dispose(),S.dispose(),k.dispose(),Y.dispose(),ie.dispose(),D.dispose(),Mt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Fo),G.removeEventListener("sessionend",Oo),Bn.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=re.autoReset,U=dt.enabled,z=dt.autoUpdate,B=dt.needsUpdate,N=dt.type;st(),re.autoReset=E,dt.enabled=U,dt.autoUpdate=z,dt.needsUpdate=B,dt.type=N}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const U=E.target;U.removeEventListener("dispose",Dt),de(U)}function de(E){Ae(E),bt.remove(E)}function Ae(E){const U=bt.get(E).programs;U!==void 0&&(U.forEach(function(z){Mt.releaseProgram(z)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,B,N,tt){U===null&&(U=ce);const ct=N.isMesh&&N.matrixWorld.determinant()<0,mt=rh(E,U,z,B,N);Tt.setMaterial(B,ct);let gt=z.index,Ct=1;if(B.wireframe===!0){if(gt=J.getWireframeAttribute(z),gt===void 0)return;Ct=2}const It=z.drawRange,_t=z.attributes.position;let qt=It.start*Ct,se=(It.start+It.count)*Ct;tt!==null&&(qt=Math.max(qt,tt.start*Ct),se=Math.min(se,(tt.start+tt.count)*Ct)),gt!==null?(qt=Math.max(qt,0),se=Math.min(se,gt.count)):_t!=null&&(qt=Math.max(qt,0),se=Math.min(se,_t.count));const ae=se-qt;if(ae<0||ae===1/0)return;ie.setup(N,B,mt,z,gt);let De,Zt=ft;if(gt!==null&&(De=K.get(gt),Zt=Gt,Zt.setIndex(De)),N.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*ge()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(N.isLine){let St=B.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*ge()),N.isLineSegments?Zt.setMode(F.LINES):N.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else N.isPoints?Zt.setMode(F.POINTS):N.isSprite&&Zt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const St=N._multiDrawStarts,fn=N._multiDrawCounts,Jt=N._multiDrawCount,Ke=gt?K.get(gt).bytesPerElement:1,di=bt.get(B).currentProgram.getUniforms();for(let Fe=0;Fe<Jt;Fe++)di.setValue(F,"_gl_DrawID",Fe),Zt.render(St[Fe]/Ke,fn[Fe])}else if(N.isInstancedMesh)Zt.renderInstances(qt,ae,N.count);else if(z.isInstancedBufferGeometry){const St=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,fn=Math.min(z.instanceCount,St);Zt.renderInstances(qt,ae,fn)}else Zt.render(qt,ae)};function te(E,U,z){E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=Ne,E.needsUpdate=!0,As(E,U,z),E.side=kn,E.needsUpdate=!0,As(E,U,z),E.side=Mn):As(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),u=Xt.get(z),u.init(U),y.push(u),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const B=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const mt=tt[ct];te(mt,z,N),B.add(mt)}else te(tt,z,N),B.add(tt)}),y.pop(),u=null,B},this.compileAsync=function(E,U,z=null){const B=this.compile(E,U,z);return new Promise(N=>{function tt(){if(B.forEach(function(ct){bt.get(ct).currentProgram.isReady()&&B.delete(ct)}),B.size===0){N(E);return}setTimeout(tt,10)}Ht.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let qe=null;function dn(E){qe&&qe(E)}function Fo(){Bn.stop()}function Oo(){Bn.start()}const Bn=new Ic;Bn.setAnimationLoop(dn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(E){qe=E,G.setAnimationLoop(E),E===null?Bn.stop():Bn.start()},G.addEventListener("sessionstart",Fo),G.addEventListener("sessionend",Oo),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,P),u=Xt.get(E,y.length),u.init(U),y.push(u),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(At),xt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,xt),p=ut.get(E,b.length),p.init(),b.push(p),G.enabled===!0&&G.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&Ir(tt,U,-1/0,x.sortObjects)}Ir(E,U,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(nt,rt),Wt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Wt&&wt.addToRenderList(p,E),this.info.render.frame++,et===!0&&Q.beginShadows();const z=u.state.shadowsArray;dt.render(z,E,U),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,N=p.transmissive;if(u.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){const gt=tt[ct];zo(B,N,E,gt)}Wt&&wt.render(E);for(let ct=0,mt=tt.length;ct<mt;ct++){const gt=tt[ct];ko(p,E,gt,gt.viewport)}}else N.length>0&&zo(B,N,E,U),Wt&&wt.render(E),ko(p,E,U);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,U),ie.resetDefaultState(),g=-1,_=null,y.pop(),y.length>0?(u=y[y.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Ir(E,U,z,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){B&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);const ct=Y.update(E),mt=E.material;mt.visible&&p.push(E,ct,mt,z,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const ct=Y.update(E),mt=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),zt.copy(ct.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(mt)){const gt=ct.groups;for(let Ct=0,It=gt.length;Ct<It;Ct++){const _t=gt[Ct],qt=mt[_t.materialIndex];qt&&qt.visible&&p.push(E,ct,qt,z,zt.z,_t)}}else mt.visible&&p.push(E,ct,mt,z,zt.z,null)}}const tt=E.children;for(let ct=0,mt=tt.length;ct<mt;ct++)Ir(tt[ct],U,z,B)}function ko(E,U,z,B){const N=E.opaque,tt=E.transmissive,ct=E.transparent;u.setupLightsView(z),et===!0&&Q.setGlobalState(x.clippingPlanes,z),B&&Tt.viewport(C.copy(B)),N.length>0&&ws(N,U,z),tt.length>0&&ws(tt,U,z),ct.length>0&&ws(ct,U,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function zo(E,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new ci(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?xs:bn,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const tt=u.state.transmissionRenderTarget[B.id],ct=B.viewport||C;tt.setSize(ct.z,ct.w);const mt=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(V),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&wt.render(z);const gt=x.toneMapping;x.toneMapping=Fn;const Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),et===!0&&Q.setGlobalState(x.clippingPlanes,B),ws(E,z,B),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let _t=0,qt=U.length;_t<qt;_t++){const se=U[_t],ae=se.object,De=se.geometry,Zt=se.material,St=se.group;if(Zt.side===Mn&&ae.layers.test(B.layers)){const fn=Zt.side;Zt.side=Ne,Zt.needsUpdate=!0,Bo(ae,z,B,De,Zt,St),Zt.side=fn,Zt.needsUpdate=!0,It=!0}}It===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}x.setRenderTarget(mt),x.setClearColor(V,q),Ct!==void 0&&(B.viewport=Ct),x.toneMapping=gt}function ws(E,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=E.length;N<tt;N++){const ct=E[N],mt=ct.object,gt=ct.geometry,Ct=B===null?ct.material:B,It=ct.group;mt.layers.test(z.layers)&&Bo(mt,U,z,gt,Ct,It)}}function Bo(E,U,z,B,N,tt){E.onBeforeRender(x,U,z,B,N,tt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,z,B,E,tt),N.transparent===!0&&N.side===Mn&&N.forceSinglePass===!1?(N.side=Ne,N.needsUpdate=!0,x.renderBufferDirect(z,U,B,N,E,tt),N.side=kn,N.needsUpdate=!0,x.renderBufferDirect(z,U,B,N,E,tt),N.side=Mn):x.renderBufferDirect(z,U,B,N,E,tt),E.onAfterRender(x,U,z,B,N,tt)}function As(E,U,z){U.isScene!==!0&&(U=ce);const B=bt.get(E),N=u.state.lights,tt=u.state.shadowsArray,ct=N.state.version,mt=Mt.getParameters(E,N.state,tt,U,z),gt=Mt.getProgramCacheKey(mt);let Ct=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?k:S).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ct===void 0&&(E.addEventListener("dispose",Dt),Ct=new Map,B.programs=Ct);let It=Ct.get(gt);if(It!==void 0){if(B.currentProgram===It&&B.lightsStateVersion===ct)return Vo(E,mt),It}else mt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(mt,x),It=Mt.acquireProgram(mt,gt),Ct.set(gt,It),B.uniforms=mt.uniforms;const _t=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(_t.clippingPlanes=Q.uniform),Vo(E,mt),B.needsLights=oh(E),B.lightsStateVersion=ct,B.needsLights&&(_t.ambientLightColor.value=N.state.ambient,_t.lightProbe.value=N.state.probe,_t.directionalLights.value=N.state.directional,_t.directionalLightShadows.value=N.state.directionalShadow,_t.spotLights.value=N.state.spot,_t.spotLightShadows.value=N.state.spotShadow,_t.rectAreaLights.value=N.state.rectArea,_t.ltc_1.value=N.state.rectAreaLTC1,_t.ltc_2.value=N.state.rectAreaLTC2,_t.pointLights.value=N.state.point,_t.pointLightShadows.value=N.state.pointShadow,_t.hemisphereLights.value=N.state.hemi,_t.directionalShadowMap.value=N.state.directionalShadowMap,_t.directionalShadowMatrix.value=N.state.directionalShadowMatrix,_t.spotShadowMap.value=N.state.spotShadowMap,_t.spotLightMatrix.value=N.state.spotLightMatrix,_t.spotLightMap.value=N.state.spotLightMap,_t.pointShadowMap.value=N.state.pointShadowMap,_t.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=It,B.uniformsList=null,It}function Ho(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=pr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Vo(E,U){const z=bt.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function rh(E,U,z,B,N){U.isScene!==!0&&(U=ce),A.resetTextureUnits();const tt=U.fog,ct=B.isMeshStandardMaterial?U.environment:null,mt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Yi,gt=(B.isMeshStandardMaterial?k:S).get(B.envMap||ct),Ct=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_t=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,se=!!z.morphAttributes.color;let ae=Fn;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=x.toneMapping);const De=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=De!==void 0?De.length:0,St=bt.get(B),fn=u.state.lights;if(et===!0&&(xt===!0||E!==_)){const We=E===_&&B.id===g;Q.setState(B,E,We)}let Jt=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==fn.state.version||St.outputColorSpace!==mt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==gt||B.fog===!0&&St.fog!==tt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Q.numPlanes||St.numIntersection!==Q.numIntersection)||St.vertexAlphas!==Ct||St.vertexTangents!==It||St.morphTargets!==_t||St.morphNormals!==qt||St.morphColors!==se||St.toneMapping!==ae||St.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,St.__version=B.version);let Ke=St.currentProgram;Jt===!0&&(Ke=As(B,U,N));let di=!1,Fe=!1,Zi=!1;const oe=Ke.getUniforms(),sn=St.uniforms;if(Tt.useProgram(Ke.program)&&(di=!0,Fe=!0,Zi=!0),B.id!==g&&(g=B.id,Fe=!0),di||_!==E){Tt.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),Jh(at),Qh(at),oe.setValue(F,"projectionMatrix",at)):oe.setValue(F,"projectionMatrix",E.projectionMatrix),oe.setValue(F,"viewMatrix",E.matrixWorldInverse);const wn=oe.map.cameraPosition;wn!==void 0&&wn.setValue(F,Lt.setFromMatrixPosition(E.matrixWorld)),Vt.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Fe=!0,Zi=!0)}if(N.isSkinnedMesh){oe.setOptional(F,N,"bindMatrix"),oe.setOptional(F,N,"bindMatrixInverse");const We=N.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),oe.setValue(F,"boneTexture",We.boneTexture,A))}N.isBatchedMesh&&(oe.setOptional(F,N,"batchingTexture"),oe.setValue(F,"batchingTexture",N._matricesTexture,A),oe.setOptional(F,N,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",N._indirectTexture,A),oe.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",N._colorsTexture,A));const Ji=z.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Rt.update(N,z,Ke),(Fe||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,oe.setValue(F,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(sn.envMap.value=gt,sn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(sn.envMapIntensity.value=U.environmentIntensity),Fe&&(oe.setValue(F,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&ah(sn,Zi),tt&&B.fog===!0&&ot.refreshFogUniforms(sn,tt),ot.refreshMaterialUniforms(sn,B,H,X,u.state.transmissionRenderTarget[E.id]),pr.upload(F,Ho(St),sn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(pr.upload(F,Ho(St),sn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(F,"center",N.center),oe.setValue(F,"modelViewMatrix",N.modelViewMatrix),oe.setValue(F,"normalMatrix",N.normalMatrix),oe.setValue(F,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const We=B.uniformsGroups;for(let wn=0,An=We.length;wn<An;wn++){const Go=We[wn];D.update(Go,Ke),D.bind(Go,Ke)}}return Ke}function ah(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function oh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,z){bt.get(E.texture).__webglTexture=U,bt.get(E.depthTexture).__webglTexture=z;const B=bt.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=bt.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){P=E,T=U,w=z;let B=!0,N=null,tt=!1,ct=!1;if(E){const gt=bt.get(E);if(gt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),B=!1;else if(gt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(gt.__hasExternalTextures)A.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const _t=E.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&bt.has(_t)&&(E.width!==_t.image.width||E.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ct=!0);const It=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?N=It[U][z]:N=It[U],tt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?N=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[z]:N=It,C.copy(E.viewport),O.copy(E.scissor),I=E.scissorTest}else C.copy(yt).multiplyScalar(H).floor(),O.copy(kt).multiplyScalar(H).floor(),I=ne;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&B&&Tt.drawBuffers(E,N),Tt.viewport(C),Tt.scissor(O),Tt.setScissorTest(I),tt){const gt=bt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,z)}else if(ct){const gt=bt.get(E.texture),Ct=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,Ct)}g=-1},this.readRenderTargetPixels=function(E,U,z,B,N,tt,ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){Tt.bindFramebuffer(F.FRAMEBUFFER,mt);try{const gt=E.texture,Ct=gt.format,It=gt.type;if(!Vt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&z>=0&&z<=E.height-N&&F.readPixels(U,z,B,N,Nt.convert(Ct),Nt.convert(It),tt)}finally{const gt=P!==null?bt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,B,N,tt,ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){const gt=E.texture,Ct=gt.format,It=gt.type;if(!Vt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-B&&z>=0&&z<=E.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,mt);const _t=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(U,z,B,N,Nt.convert(Ct),Nt.convert(It),0);const qt=P!==null?bt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,qt);const se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zh(F,se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(_t),F.deleteSync(se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-z),N=Math.floor(E.image.width*B),tt=Math.floor(E.image.height*B),ct=U!==null?U.x:0,mt=U!==null?U.y:0;A.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,ct,mt,N,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(E,U,z=null,B=null,N=0){E.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let tt,ct,mt,gt,Ct,It,_t,qt,se;const ae=E.isCompressedTexture?E.mipmaps[N]:E.image;z!==null?(tt=z.max.x-z.min.x,ct=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,gt=z.min.x,Ct=z.min.y,It=z.isBox3?z.min.z:0):(tt=ae.width,ct=ae.height,mt=ae.depth||1,gt=0,Ct=0,It=0),B!==null?(_t=B.x,qt=B.y,se=B.z):(_t=0,qt=0,se=0);const De=Nt.convert(U.format),Zt=Nt.convert(U.type);let St;U.isData3DTexture?(A.setTexture3D(U,0),St=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),St=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),St=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const fn=F.getParameter(F.UNPACK_ROW_LENGTH),Jt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=F.getParameter(F.UNPACK_SKIP_PIXELS),di=F.getParameter(F.UNPACK_SKIP_ROWS),Fe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,It);const Zi=E.isDataArrayTexture||E.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const sn=bt.get(E),Ji=bt.get(U),We=bt.get(sn.__renderTarget),wn=bt.get(Ji.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,We.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let An=0;An<mt;An++)Zi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(E).__webglTexture,N,It+An),E.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,N,se+An),F.blitFramebuffer(gt,Ct,tt,ct,_t,qt,tt,ct,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(St,N,_t,qt,se+An,gt,Ct,tt,ct):F.copyTexSubImage2D(St,N,_t,qt,se+An,gt,Ct,tt,ct);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(St,N,_t,qt,se,tt,ct,mt,De,Zt,ae.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(St,N,_t,qt,se,tt,ct,mt,De,ae.data):F.texSubImage3D(St,N,_t,qt,se,tt,ct,mt,De,Zt,ae):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,_t,qt,tt,ct,De,Zt,ae.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,_t,qt,ae.width,ae.height,De,ae.data):F.texSubImage2D(F.TEXTURE_2D,N,_t,qt,tt,ct,De,Zt,ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,fn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,di),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),N===0&&U.generateMipmaps&&F.generateMipmap(St),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,B=null,N=0){return E.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,B,N)},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){T=0,w=0,P=null,Tt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Co{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vl extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ms extends Ki{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mr=new R,Sr=new R,Gl=new ue,ss=new Tc,Ks=new Lr,ca=new R,Wl=new R;class h0 extends Me{constructor(t=new Ve,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mr.fromBufferAttribute(e,s-1),Sr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mr.distanceTo(Sr);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;Gl.copy(s).invert(),ss.copy(t.ray).applyMatrix4(Gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let M=m,p=v-1;M<p;M+=c){const u=d.getX(M),b=d.getX(M+1),y=js(this,t,ss,l,u,b);y&&e.push(y)}if(this.isLineLoop){const M=d.getX(v-1),p=d.getX(m),u=js(this,t,ss,l,M,p);u&&e.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let M=m,p=v-1;M<p;M+=c){const u=js(this,t,ss,l,M,M+1);u&&e.push(u)}if(this.isLineLoop){const M=js(this,t,ss,l,v-1,m);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function js(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Mr.fromBufferAttribute(a,s),Sr.fromBufferAttribute(a,r),e.distanceSqToSegment(Mr,Sr,ca,Wl)>n)return;ca.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ca);if(!(l<t.near||l>t.far))return{distance:l,point:Wl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xl=new R,Yl=new R;class oo extends h0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xl.fromBufferAttribute(e,s),Yl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xl.distanceTo(Yl);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u0 extends Le{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new R,d=new Bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=n+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/t+1)/2,d.y=(a[f+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gs extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],f=[],m=[];let v=0;const M=[],p=n/2;let u=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(m,2));function b(){const x=new R,L=new R;let T=0;const w=(e-t)/n;for(let P=0;P<=r;P++){const g=[],_=P/r,C=_*(e-t)+t;for(let O=0;O<=s;O++){const I=O/s,V=I*l+o,q=Math.sin(V),W=Math.cos(V);L.x=C*q,L.y=-_*n+p,L.z=C*W,h.push(L.x,L.y,L.z),x.set(q,w,W).normalize(),f.push(x.x,x.y,x.z),m.push(I,1-_),g.push(v++)}M.push(g)}for(let P=0;P<s;P++)for(let g=0;g<r;g++){const _=M[g][P],C=M[g+1][P],O=M[g+1][P+1],I=M[g][P+1];(t>0||g!==0)&&(d.push(_,C,I),T+=3),(e>0||g!==r-1)&&(d.push(C,O,I),T+=3)}c.addGroup(u,T,0),u+=T}function y(x){const L=v,T=new Bt,w=new R;let P=0;const g=x===!0?t:e,_=x===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,p*_,0),f.push(0,_,0),m.push(.5,.5),v++;const C=v;for(let O=0;O<=s;O++){const V=O/s*l+o,q=Math.cos(V),W=Math.sin(V);w.x=g*W,w.y=p*_,w.z=g*q,h.push(w.x,w.y,w.z),f.push(0,_,0),T.x=q*.5+.5,T.y=W*.5*_+.5,m.push(T.x,T.y),v++}for(let O=0;O<s;O++){const I=L+O,V=C+O;x===!0?d.push(V,V+1,I):d.push(V+1,V,I),P+=3}c.addGroup(u,P,x===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new R,x=new R,L=new R;for(let T=0;T<e.length;T+=3)m(e[T+0],y),m(e[T+1],x),m(e[T+2],L),l(y,x,L,b)}function l(b,y,x,L){const T=L+1,w=[];for(let P=0;P<=T;P++){w[P]=[];const g=b.clone().lerp(x,P/T),_=y.clone().lerp(x,P/T),C=T-P;for(let O=0;O<=C;O++)O===0&&P===T?w[P][O]=g:w[P][O]=g.clone().lerp(_,O/C)}for(let P=0;P<T;P++)for(let g=0;g<2*(T-P)-1;g++){const _=Math.floor(g/2);g%2===0?(f(w[P][_+1]),f(w[P+1][_]),f(w[P][_])):(f(w[P][_+1]),f(w[P+1][_+1]),f(w[P+1][_]))}}function c(b){const y=new R;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(b),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function d(){const b=new R;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];const x=p(b)/2/Math.PI+.5,L=u(b)/Math.PI+.5;a.push(x,1-L)}v(),h()}function h(){for(let b=0;b<a.length;b+=6){const y=a[b+0],x=a[b+2],L=a[b+4],T=Math.max(y,x,L),w=Math.min(y,x,L);T>.9&&w<.1&&(y<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),L<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function m(b,y){const x=b*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function v(){const b=new R,y=new R,x=new R,L=new R,T=new Bt,w=new Bt,P=new Bt;for(let g=0,_=0;g<r.length;g+=9,_+=6){b.set(r[g+0],r[g+1],r[g+2]),y.set(r[g+3],r[g+4],r[g+5]),x.set(r[g+6],r[g+7],r[g+8]),T.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),L.copy(b).add(y).add(x).divideScalar(3);const C=p(L);M(T,_+0,b,C),M(w,_+2,y,C),M(P,_+4,x,C)}}function M(b,y,x,L){L<0&&b.x===1&&(a[y]=b.x-1),x.x===0&&x.z===0&&(a[y]=L/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.vertices,t.indices,t.radius,t.details)}}const Zs=new R,Js=new R,ha=new R,Qs=new Ye;class lo extends Ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(fr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),f={},m=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:M,b:p,c:u}=Qs;if(M.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Qs.getNormal(ha),h[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const y=(b+1)%3,x=h[b],L=h[y],T=Qs[d[b]],w=Qs[d[y]],P=`${x}_${L}`,g=`${L}_${x}`;g in f&&f[g]?(ha.dot(f[g].normal)<=r&&(m.push(T.x,T.y,T.z),m.push(w.x,w.y,w.z)),f[g]=null):P in f||(f[P]={index0:c[b],index1:c[y],normal:ha.clone()})}}for(const v in f)if(f[v]){const{index0:M,index1:p}=f[v];Zs.fromBufferAttribute(o,M),Js.fromBufferAttribute(o,p),m.push(Zs.x,Zs.y,Zs.z),m.push(Js.x,Js.y,Js.z)}this.setAttribute("position",new me(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Po extends Es{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Po(t.radius,t.detail)}}class yr extends Es{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yr(t.radius,t.detail)}}class ei extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new R,f=new R,m=[],v=[],M=[],p=[];for(let u=0;u<=n;u++){const b=[],y=u/n;let x=0;u===0&&a===0?x=.5/e:u===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const T=L/e;h.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),p.push(T+x,1-y),b.push(c++)}d.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const y=d[u][b+1],x=d[u][b],L=d[u+1][b],T=d[u+1][b+1];(u!==0||a>0)&&m.push(y,x,T),(u!==n-1||l<Math.PI)&&m.push(x,L,T)}this.setIndex(m),this.setAttribute("position",new me(v,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lo extends Es{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lo(t.radius,t.detail)}}class hs extends Ki{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bc extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $l extends Bc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ua=new ue,ql=new R,Kl=new R;class d0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(ql),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class f0 extends d0{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jl extends Bc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new f0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);const _e={paper:15986920,paperShade:15130832,ink:1447183,red:9047819,redHot:13639706},Wi={half:22},vt={radius:.34,standHeight:1.75,crouchHeight:1.1,slideHeight:.95,walk:6.4,sprint:9.2,crouch:3.4,ads:4.4,groundAccel:85,airAccel:20,friction:11,overspeedDecel:9,maxSpeed:16,jumpVel:7,gravity:21,stepHeight:.42,slideSpeed:12.4,slideBonus:.9,slideTime:1.05,slideFriction:2.4,slideCooldown:.3,coyote:.1,dashSpeed:15,dashTime:.16,dashCooldown:2.2,wallrunTime:1.4,wallrunGravity:4,wallrunMinSpeed:9,wallJumpOut:7,wallJumpUp:7.2,maxHp:100},On={rifle:{id:"rifle",auto:!0,fireInterval:.095,mag:28,reload:1.85,headDmg:46,bodyDmg:23,pellets:1,falloffStart:30,falloffEnd:60,minDmgMul:.75,hipSpread:2,adsSpread:.14,moveSpread:1.4,airSpread:4,slideSpread:2.6,recoil:.62,recoilYaw:.22,adsZoom:.68,adsTime:.17,range:90,tr:"Tüfek",en:"Rifle"},shotgun:{id:"shotgun",auto:!1,fireInterval:.72,mag:6,reload:2.1,headDmg:22,bodyDmg:15,pellets:9,falloffStart:6,falloffEnd:20,minDmgMul:.2,hipSpread:5.2,adsSpread:3.6,moveSpread:.6,airSpread:1.2,slideSpread:.4,recoil:4.2,recoilYaw:.5,adsZoom:.85,adsTime:.14,range:45,tr:"Pompalı",en:"Shotgun"},sniper:{id:"sniper",auto:!1,fireInterval:1.25,mag:5,reload:2.6,headDmg:150,bodyDmg:60,pellets:1,falloffStart:200,falloffEnd:300,minDmgMul:1,hipSpread:7,adsSpread:.02,moveSpread:3.2,airSpread:9,slideSpread:6,recoil:3.5,recoilYaw:.4,adsZoom:.28,adsTime:.3,range:140,swapTime:.5,scope:!0,tr:"Keskin nişancı",en:"Sniper"},pistol:{id:"pistol",auto:!1,fireInterval:.15,mag:12,reload:1.3,headDmg:50,bodyDmg:25,pellets:1,falloffStart:20,falloffEnd:45,minDmgMul:.7,hipSpread:1.1,adsSpread:.25,moveSpread:.8,airSpread:2.5,slideSpread:1.5,recoil:1.3,recoilYaw:.3,adsZoom:.85,adsTime:.12,range:70,swapTime:.18,tr:"Tabanca",en:"Pistol"},smg:{id:"smg",auto:!0,fireInterval:.065,mag:32,reload:1.7,headDmg:30,bodyDmg:15,pellets:1,falloffStart:12,falloffEnd:32,minDmgMul:.6,hipSpread:1.6,adsSpread:.45,moveSpread:.5,airSpread:2,slideSpread:1,recoil:.45,recoilYaw:.3,adsZoom:.8,adsTime:.13,range:60,swapTime:.25,tr:"SMG",en:"SMG"},burst:{id:"burst",auto:!1,fireInterval:.34,mag:24,reload:2,headDmg:54,bodyDmg:27,pellets:1,falloffStart:40,falloffEnd:80,minDmgMul:.8,hipSpread:1.8,adsSpread:.1,moveSpread:1.4,airSpread:4,slideSpread:2.6,recoil:.7,recoilYaw:.15,adsZoom:.62,adsTime:.18,range:100,burst:3,burstGap:.065,tr:"Burst tüfek",en:"Burst rifle"}},Er=["rifle","burst","smg","shotgun","sniper","pistol"],co=[{id:"classic",tr:"Klasik",en:"Classic",dtr:"5 raundu ilk alan kazanır.",den:"First to 5 rounds.",endless:!1},{id:"streak",tr:"Sonsuz: Seri",en:"Endless: Streak",dtr:"Kaybedene kadar devam. Her galibiyette Nöbetçi bir kademe zorlaşır.",den:"Go until you lose a round. The Sentinel gets harder with every win.",endless:!0},{id:"lives",tr:"Sonsuz: 3 can",en:"Endless: 3 lives",dtr:"3 hakkın var; kaybedilen raunt bir can götürür. Skor: kazanılan raunt.",den:"3 lives; each lost round costs one. Score: rounds won.",endless:!0},{id:"oneshot",tr:"Tek mermi",en:"One shot",dtr:"Tek isabet öldürür, ikiniz için de. 5 raundu ilk alan kazanır.",den:"One hit kills, for both of you. First to 5.",endless:!1},{id:"rotation",tr:"Silah rotasyonu",en:"Weapon rotation",dtr:"Her raunt rastgele bir silah, ikiniz de aynısıyla. 5 raundu ilk alan kazanır.",den:"A random weapon each round, the same for both. First to 5.",endless:!1}],ye={radius:.38,height:1.9,eye:1.66,headR:.25,run:7.8,walk:5,fov:115,hearSprint:15,perceptionLag:.2},Jn={winRounds:5,roundTime:90,countdown:3,roundEnd:4.2},oi=1/120,Tn=[];function he(i,t,e,n,s,r="paper",a=0){Tn.push({min:new R(i-e/2,a,t-n/2),max:new R(i+e/2,a+s,t+n/2),style:r})}function Pt(i,t,e,n,s,r="paper"){he(i,t,e,n,s,r),he(i,-t,e,n,s,r)}const fe=Wi.half,Ai={avlu:{tr:"Avlu",en:"Courtyard",descTr:"Üç koridor, alçak siperler. Klasik.",descEn:"Three lanes, low cover. Classic."},kanal:{tr:"Kanal",en:"Canal",descTr:"Uzun, yüksek duvarlar: duvar koşusu için.",descEn:"Long, tall walls: built for wall-running."},kule:{tr:"Kule",en:"Tower",descTr:"Ortada merdivenle çıkılan kule, yanlarda balkonlar. Yüksek zemin kimde?",descEn:"A central tower reached by stairs, balconies on the sides. Who holds high ground?"}};let _s=9.5;function Do(i){he(0,-fe-.5,2*fe+2,1,i,"wall"),he(0,fe+.5,2*fe+2,1,i,"wall"),he(-fe-.5,0,1,2*fe+2,i,"wall"),he(fe+.5,0,1,2*fe+2,i,"wall")}function p0(){Do(5),Pt(-6.25,12.5,6.5,1,3),Pt(6.25,12.5,6.5,1,3),Pt(-9.5,8,1,8,3),Pt(9.5,8,1,8,3),he(0,0,2.6,2.6,3.6,"ink"),Pt(0,6,4,.8,1,"low"),he(-4.5,0,1.5,1.5,1,"low"),he(4.5,0,1.5,1.5,1,"low"),he(-16,0,2,4,2.6,"ink"),Pt(-19,7,2,2,1,"low"),Pt(-13,9,1.5,1.5,2.2),he(17,0,.8,6,1,"low"),Pt(14,6,2.5,2,2.6),Pt(20,10,2,2,1,"low"),Pt(-15,17,2,2,1,"low"),Pt(15,17,2,2,1,"low"),Pt(-5.5,16.5,3,1,1,"low"),Pt(-18.6,16,1.6,1.6,2),Pt(-17,16,1.6,1.6,1,"low"),Pt(18.6,19.5,1.6,1.6,2),_s=9.5,bs.push(we(-14.2,-3.2,-16,10,"W"),we(-12,-10.6,-18,6,"W"),we(-19.5,-9.2,-18,8,"W"),we(2.2,-2.2,0,11,"C"),we(-2.2,-2.2,0,11,"C"),we(1.5,-7.2,0,12,"C"),we(14,-7.6,16,8,"E"),we(18.6,-4.2,18,10,"E"),we(20.5,-12,17,6,"E"))}function m0(){Do(6.5),Pt(-8.5,9.5,.8,13,4.6,"ink"),Pt(8.5,9.5,.8,13,4.6,"ink"),Pt(-3.6,8,1.4,1.4,4.2),Pt(3.6,8,1.4,1.4,4.2),Pt(0,12.5,4.5,.8,1,"low"),he(0,0,3.2,1,1.1,"low"),he(-4.5,0,1.4,2.4,2.4),he(4.5,0,1.4,2.4,2.4),Pt(0,4.5,1.2,1.2,1,"low"),he(-15.5,0,.8,12,4.2),Pt(-19.5,10.5,2,2,1,"low"),Pt(-12,10,1.6,1.6,2.4),he(-12,0,1.4,1.4,1,"low"),Pt(13.5,3.5,3.4,.8,4.2),Pt(18.5,9.5,3.4,.8,4.2),he(19,0,1,3.2,1,"low"),Pt(12.5,12.5,1.6,1.6,1,"low"),Pt(0,17,6,.8,2.6),Pt(-13,18.5,2,2,1,"low"),Pt(13,18.5,2,2,1,"low"),Pt(-19,18,1.6,1.6,2),Pt(-17.4,18,1.6,1.6,1,"low"),_s=8.5,bs.push(we(-13.5,-6.8,-12,10,"W"),we(-17.5,-7.5,-18,9,"W"),we(-11,-11.8,-14,6,"W"),we(-2.2,-9.3,0,12,"C"),we(2.2,-9.3,0,12,"C"),we(0,-1.4,0,12,"C"),we(13.5,-5,15,8,"E"),we(19.5,-11,18,6,"E"),we(16,-2.2,12,9,"E"))}function da(i,t,e,n,s,r=.4,a=.6,o=!0){const l=Math.round(s/r);for(let c=1;c<l;c++){const d=s-c*r,h=t+e*(c-.5)*a;o?Pt(i,h,n,a,d,"plat"):he(i,h,n,a,d,"plat")}}function g0(){Do(7),he(0,0,8,8,2.8,"plat"),da(2.6,4,1,2.2,2.8),Pt(-.8,2.6,3.2,.6,1,"low"),he(-2.6,0,1,1,2,"paper",2.8),he(2.4,0,1.6,.6,1,"low",2.8),he(-19.5,0,5,14,2.2,"plat"),he(19.5,0,5,14,2.2,"plat"),da(-19.5,7,1,2.2,2.2),da(19.5,7,1,2.2,2.2),Pt(-18,2.5,.5,2.4,.9,"low"),Pt(18,2.5,.5,2.4,.9,"low"),Pt(-9.5,9,1,6,3),Pt(9.5,9,1,6,3),Pt(-13,3.5,1.6,1.6,1,"low"),Pt(13,3.5,1.6,1.6,1,"low"),Pt(-5.5,11,2,1.2,1,"low"),Pt(6,12.5,1.4,1.4,2.4,"ink"),Pt(0,16.2,6,.8,2.4),Pt(-12,18,2,2,1,"low"),Pt(12,18,2,2,1,"low"),_s=9;const i=(t,e,n,s,r,a)=>({p:new R(t,0,e),look:new R(n,s,r),lane:a});bs.push(i(-.8,-3.4,0,1.4,12,"C"),i(1.8,-3.2,-6,1.4,12,"C"),i(-3,-6.5,0,4.2,6,"C"),i(-19.5,-5.5,-14,1.4,10,"W"),i(-13.5,-6,-19,3.6,8,"W"),i(-12.5,-12,-16,1.4,6,"W"),i(19.5,-5.5,14,1.4,10,"E"),i(13.5,-6,19,3.6,8,"E"),i(12.5,-12,16,1.4,6,"E"))}const ho=Tn,_0=new R(0,0,20),v0=new R(0,0,-20);function Hc(i){Tn.length=0,bs.length=0,i==="kanal"?m0():i==="kule"?g0():p0(),x0()}function uo(i,t,e,n,s=2){const r=n+.14;let a=null,o=1/0;for(const l of Tn){if(l.style==="plat"||l.max.y-t<s||l.min.y>t+1)continue;const c=e>l.min.z-.05&&e<l.max.z+.05,d=i>l.min.x-.05&&i<l.max.x+.05;if(c){const h=l.min.x-i,f=i-l.max.x;h>=0&&h<r&&h<o&&(o=h,a=new R(-1,0,0)),f>=0&&f<r&&f<o&&(o=f,a=new R(1,0,0))}if(d){const h=l.min.z-e,f=e-l.max.z;h>=0&&h<r&&h<o&&(o=h,a=new R(0,0,-1)),f>=0&&f<r&&f<o&&(o=f,a=new R(0,0,1))}}return a}function br(i,t,e,n){let s=0,r=n,a=-1,o=0;for(let l=0;l<3;l++){const c=l===0?i.x:l===1?i.y:i.z,d=l===0?t.x:l===1?t.y:t.z,h=l===0?e.min.x:l===1?e.min.y:e.min.z,f=l===0?e.max.x:l===1?e.max.y:e.max.z;if(Math.abs(d)<1e-9){if(c<h||c>f)return null}else{const m=1/d;let v=(h-c)*m,M=(f-c)*m,p=-1;if(v>M){const u=v;v=M,M=u,p=1}if(v>s&&(s=v,a=l,o=p),M<r&&(r=M),s>r)return null}}return a<0?null:{t:s,axis:a,sign:o}}function fo(i,t,e){let n=null,s=e;for(const r of Tn){const a=br(i,t,r,s);if(a&&a.t<s){s=a.t;const o=new R;a.axis===0?o.x=a.sign:a.axis===1?o.y=a.sign:o.z=a.sign,n={t:a.t,normal:o,box:r}}}if(t.y<-1e-6){const r=-i.y/t.y;r>0&&r<s&&(n={t:r,normal:new R(0,1,0),box:null})}return n}const tr=new R;function rn(i,t){tr.subVectors(t,i);const e=tr.length();if(e<1e-4)return!0;tr.divideScalar(e);for(const n of Tn)if(br(i,tr,n,e))return!1;return!0}function Zl(i,t,e,n,s){const r=i.x-e.x,a=i.y-e.y,o=i.z-e.z,l=r*t.x+a*t.y+o*t.z,c=r*r+a*a+o*o-n*n,d=l*l-c;if(d<0)return null;const h=-l-Math.sqrt(d);return h<0||h>s?null:h}function us(i,t,e,n,s){for(const r of Tn)if(i+n>r.min.x+1e-4&&i-n<r.max.x-1e-4&&e+n>r.min.z+1e-4&&e-n<r.max.z-1e-4&&t+s>r.min.y+1e-4&&t<r.max.y-1e-4)return r;return null}function po(i,t,e,n,s,r,a){let o=!1;for(const d of[0,2]){const h=(d===0?t.x:t.z)*e;if(h===0)continue;d===0?i.x+=h:i.z+=h;const f=us(i.x,i.y,i.z,n,s);if(f){const m=f.max.y-i.y;if(r&&m>0&&m<=a&&!us(i.x,f.max.y+.001,i.z,n,s)){i.y=f.max.y+.001;continue}d===0?(i.x=h>0?f.min.x-n-.001:f.max.x+n+.001,t.x=0):(i.z=h>0?f.min.z-n-.001:f.max.z+n+.001,t.z=0),o=!0}}let l=!1;i.y+=t.y*e;const c=us(i.x,i.y,i.z,n,s);return c&&(t.y<=0?(i.y=c.max.y,l=!0):i.y=c.min.y-s-.001,t.y=0),i.y<=0&&(i.y=0,t.y<0&&(t.y=0),l=!0),!l&&t.y<=0&&(i.y<.002||us(i.x,i.y-.02,i.z,n,s))&&(l=!0),{grounded:l,hitWall:o}}const hi=.5,jt=Math.round(2*fe/hi),Vc=new Uint8Array(jt*jt),Tr=new Float32Array(jt*jt),Io=.45;function x0(){for(let t=0;t<jt;t++)for(let e=0;e<jt;e++){const n=-fe+(t+.5)*hi,s=-fe+(e+.5)*hi;let r=0;for(const o of Tn)o.style==="plat"&&n>o.min.x&&n<o.max.x&&s>o.min.z&&s<o.max.z&&(r=Math.max(r,o.max.y));Tr[e*jt+t]=r;let a=0;if(Math.abs(n)>fe-.5||Math.abs(s)>fe-.5)a=1;else for(const o of Tn)if(!(o.max.y<=r+.4||o.min.y>=r+1.8)&&!(o.style==="plat"&&o.max.y<=r+Io)&&n>o.min.x-.5&&n<o.max.x+.5&&s>o.min.z-.5&&s<o.max.z+.5){a=1;break}Vc[e*jt+t]=a}}function Jl(i,t){const[e,n]=wr(i,t);return Tr[n*jt+e]}function wr(i,t){const e=Math.max(0,Math.min(jt-1,Math.floor((i+fe)/hi))),n=Math.max(0,Math.min(jt-1,Math.floor((t+fe)/hi)));return[e,n]}function M0(i,t){return new R(-fe+(i+.5)*hi,0,-fe+(t+.5)*hi)}function Fi(i,t){return i<0||t<0||i>=jt||t>=jt?!0:Vc[t*jt+i]===1}function mr(i,t){const[e,n]=wr(i,t);return!Fi(e,n)}function Ql(i,t){if(!Fi(i,t))return[i,t];for(let e=1;e<12;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++)if(Math.max(Math.abs(n),Math.abs(s))===e&&!Fi(i+n,t+s))return[i+n,t+s];return[i,t]}function S0(i,t){const e=t.x-i.x,n=t.z-i.z,s=Math.hypot(e,n),r=Math.ceil(s/.2);let a=Jl(i.x,i.z);for(let o=1;o<=r;o++){const l=o/r,c=i.x+e*l,d=i.z+n*l;if(!mr(c,d))return!1;const h=Jl(c,d);if(h-a>Io)return!1;a=h}return!0}const rs=new Float32Array(jt*jt),fa=new Int32Array(jt*jt),er=new Uint8Array(jt*jt);function Gc(i,t){const[e,n]=Ql(...wr(i.x,i.z)),[s,r]=Ql(...wr(t.x,t.z)),a=n*jt+e,o=r*jt+s;rs.fill(1/0),fa.fill(-1),er.fill(0);const l=[],c=(u,b)=>{l.push([u,b]);let y=l.length-1;for(;y>0;){const x=y-1>>1;if(l[x][0]<=l[y][0])break;[l[x],l[y]]=[l[y],l[x]],y=x}},d=()=>{const u=l[0],b=l.pop();if(l.length){l[0]=b;let y=0;for(;;){const x=2*y+1,L=x+1;let T=y;if(x<l.length&&l[x][0]<l[T][0]&&(T=x),L<l.length&&l[L][0]<l[T][0]&&(T=L),T===y)break;[l[T],l[y]]=[l[y],l[T]],y=T}}return u},h=u=>{const b=u%jt,y=u/jt|0,x=Math.abs(b-s),L=Math.abs(y-r);return Math.max(x,L)+.414*Math.min(x,L)};rs[a]=0,c(h(a),a);let f=!1;for(;l.length;){const[,u]=d();if(er[u])continue;if(er[u]=1,u===o){f=!0;break}const b=u%jt,y=u/jt|0;for(let x=-1;x<=1;x++)for(let L=-1;L<=1;L++){if(!x&&!L)continue;const T=b+x,w=y+L;if(Fi(T,w))continue;const P=Tr[w*jt+T]-Tr[y*jt+b];if(P>Io||x&&L&&(Fi(b+x,y)||Fi(b,y+L)))continue;const g=w*jt+T;if(er[g])continue;const _=rs[u]+(x&&L?1.414:1)+(P<-.6?2:0);_<rs[g]&&(rs[g]=_,fa[g]=u,c(_+h(g),g))}}if(!f)return[t.clone()];const m=[];for(let u=o;u!==-1;u=fa[u])m.push(M0(u%jt,u/jt|0));m.reverse();const v=[];let M=i.clone(),p=0;for(;p<m.length;){let u=p;for(let b=m.length-1;b>p;b--)if(S0(M,m[b])){u=b;break}v.push(m[u]),M=m[u],p=u+1}return v}function Uo(i){return i<-_s?"W":i>_s?"E":"C"}function y0(i,t){if(t>13)return{tr:"kendi avlun",en:"your yard"};if(t<-13)return{tr:"Nöbetçi'nin avlusu",en:"the Sentinel's yard"};const e=Uo(i),n=e==="W"?"batı koridoru":e==="E"?"doğu koridoru":"orta koridor",s=e==="W"?"west lane":e==="E"?"east lane":"middle lane",r=t>4?["güney ucu","south end"]:t<-4?["kuzey ucu","north end"]:["ortası","middle"];return{tr:`${n} ${r[0]}`,en:`${s}, ${r[1]}`}}const ni={W:{tr:"batı koridoru",en:"west lane"},C:{tr:"orta koridor",en:"middle lane"},E:{tr:"doğu koridoru",en:"east lane"}};function we(i,t,e,n,s){return{p:new R(i,0,t),look:new R(e,1.4,n),lane:s}}const bs=[],tn=2,xe=Math.round(2*fe/tn);function tc(i,t){const e=Math.max(0,Math.min(xe-1,Math.floor((i+fe)/tn)));return Math.max(0,Math.min(xe-1,Math.floor((t+fe)/tn)))*xe+e}function as(i){const t=i%xe,e=i/xe|0;return new R(-fe+(t+.5)*tn,0,-fe+(e+.5)*tn)}Hc("avlu");const ii=["L","R","S","J","C"],gr=["HOLD","FLANK","RUSH"],pa="gozcu.defter.v1",E0=3;function Wc(){return{heat:new Array(E0*xe*xe).fill(0),lanes:{W:0,C:0,E:0},contacts:new Array(xe*xe).fill(0)}}function nr(){return{v:2,rounds:0,matches:0,pWins:0,bWins:0,lossStreak:0,maps:{avlu:Wc()},weapon:{rifleShots:0,shotShots:0,shotDist:0,rifleDist:0},ngram:{},fireDelay:{sum:0,n:0},predAcc:.5,retreat:{yes:0,n:0},repeek:{yes:0,n:0},lean:{yes:0,n:0},tactics:{HOLD:{a:1,b:1},FLANK:{a:1,b:1},RUSH:{a:1,b:1}},shown:{}}}const Di={HOLD:{tr:"Pusu",en:"Ambush"},FLANK:{tr:"Kuşatma",en:"Flank"},RUSH:{tr:"Baskın",en:"Rush"}},fs={L:"←",R:"→",S:"■",J:"⤒",C:"⤓"};function ec(i){const t=i-.3333333333333333,e=1/Math.sqrt(9*t);for(;;){let n,s;do{const a=Math.random(),o=Math.random();n=Math.sqrt(-2*Math.log(a+1e-12))*Math.cos(2*Math.PI*o),s=1+e*n}while(s<=0);s=s*s*s;const r=Math.random();if(r<1-.0331*n*n*n*n||Math.log(r)<.5*n*n+t*(1-s+Math.log(s)))return t*s}}function b0(i,t){const e=ec(i),n=ec(t);return e/(e+n)}class T0{constructor(){this.d=nr(),this.hist=[],this.persist=!0,this.skillOverride=null,this.learnOff=!1,this.learnSpeed="normal",this.mapId="avlu",this.diffOffset=0,this.modeBonus=0,this.wk="",this.load()}get f(){return this.learnSpeed==="slow"?.8:this.learnSpeed==="fast"?.22:.4}minT(){return Math.max(2,Math.round(4*this.f))}minN(){return Math.max(2,Math.round(3*this.f))}skillRounds(){return this.learnSpeed==="slow"?20:this.learnSpeed==="fast"?4:9}decay(){return this.learnSpeed==="slow"?.94:this.learnSpeed==="fast"?.85:.9}setWeapon(t){const e=t==="rifle"?"":t+":";e!==this.wk&&(this.wk=e,this.hist=[])}get m(){var t,e;return(t=this.d.maps)[e=this.mapId]||(t[e]=Wc())}setMap(t){this.mapId=t}recordWeaponUse(t,e){const n=this.d.weapon;t==="shotgun"?(n.shotShots+=1,n.shotDist+=Math.min(e,40)):(n.rifleShots+=1,n.rifleDist+=Math.min(e,60))}weaponHabit(){const t=this.d.weapon,e=t.rifleShots+t.shotShots*4;return{shotShare:e?t.shotShots*4/e:0,shotAvg:t.shotShots?t.shotDist/t.shotShots:0,rifleAvg:t.rifleShots?t.rifleDist/t.rifleShots:0,n:e}}load(){try{const t=localStorage.getItem(pa);if(!t)return;const e=JSON.parse(t);if(e&&e.v===2&&(this.d={...nr(),...e}),this.d.lean||(this.d.lean={yes:0,n:0}),typeof this.d.predAcc!="number")this.d.predAcc=.5;else if(e&&e.v===1){const{heat:n,lanes:s,contacts:r,...a}=e;this.d={...nr(),...a,v:2,maps:{avlu:{heat:n,lanes:s,contacts:r}}}}}catch{}}save(){if(this.persist)try{const t=n=>n.map(s=>Math.round(s*100)/100),e={};for(const n in this.d.maps)e[n]={...this.d.maps[n],heat:t(this.d.maps[n].heat),contacts:t(this.d.maps[n].contacts)};localStorage.setItem(pa,JSON.stringify({...this.d,maps:e}))}catch{}}reset(){this.d=nr(),this.hist=[];try{localStorage.removeItem(pa)}catch{}}recordPosition(t,e,n,s){this.m.heat[n*xe*xe+tc(t,e)]+=s}recordLane(t){this.m.lanes[t]+=1}recordContact(t,e){this.m.contacts[tc(t,e)]+=1}recordFireDelay(t){this.d.fireDelay.sum+=Math.min(t,2.5),this.d.fireDelay.n+=1}recordRetreat(t){this.d.retreat.n+=1,t&&(this.d.retreat.yes+=1)}recordLean(t){this.d.lean.n+=1,t&&(this.d.lean.yes+=1)}leanRate(){const t=this.d.lean;return t.n>=this.minN()?t.yes/t.n:null}recordRepeek(t){this.d.repeek.n+=1,t&&(this.d.repeek.yes+=1)}resetHistory(){this.hist=[]}pushSym(t){if(t==="L"||t==="R"||t==="S"){const s=this.rawLateral();if(s.conf>.05){const r=s.v<-.3?"L":s.v>.3?"R":"S";this.d.predAcc=this.d.predAcc*.93+(r===t?.07:0)}}const e=this.hist,n=s=>{var a,o;const r=(a=this.d.ngram)[o=this.wk+s]||(a[o]={});r[t]=(r[t]||0)+1};n(""),e.length>=1&&n(e[e.length-1]),e.length>=2&&n(e[e.length-2]+e[e.length-1]),e.push(t),e.length>8&&e.shift()}dist(t){const e=this.d.ngram[this.wk+t]||{};let n=0;for(const r of ii)n+=e[r]||0;const s={};for(const r of ii)s[r]=n>0?(e[r]||0)/n:.2;return{p:s,total:n}}predictNext(){const t=this.hist;if(t.length>=2){const n=this.dist(t[t.length-2]+t[t.length-1]);if(n.total>=this.minT())return{p:n.p,conf:Math.min(1,n.total/(14*this.f)),order:3}}if(t.length>=1){const n=this.dist(t[t.length-1]);if(n.total>=this.minT())return{p:n.p,conf:Math.min(1,n.total/(18*this.f))*.85,order:2}}const e=this.dist("");return{p:e.p,conf:Math.min(1,e.total/(30*this.f))*.6,order:1}}distFor(t){if(t.length>=2){const n=this.dist(t[t.length-2]+t[t.length-1]);if(n.total>=this.minT())return{p:n.p,conf:Math.min(1,n.total/(14*this.f))}}if(t.length>=1){const n=this.dist(t[t.length-1]);if(n.total>=this.minT())return{p:n.p,conf:Math.min(1,n.total/(18*this.f))*.85}}const e=this.dist("");return{p:e.p,conf:Math.min(1,e.total/(30*this.f))*.6}}predTrust(){return Math.max(.1,Math.min(1,(this.d.predAcc-.35)/.4))}expectedLateral(){if(this.learnOff)return{v:0,conf:0};const t=this.rawLateral();return{v:t.v,conf:t.conf*this.predTrust()}}rawLateral(){const t=this.hist,e=this.distFor(t),n=e.p.R-e.p.L;let s=0;for(const a of ii){if(e.p[a]<.02)continue;const o=this.distFor([...t,a]);s+=e.p[a]*(o.p.R-o.p.L)}const r=.5*(n+s);return{v:r,conf:e.conf*(.4+.6*Math.abs(r))}}lanePred(){const t=this.m.lanes,e=t.W+t.C+t.E+1.5;return{W:(t.W+.5)/e,C:(t.C+.5)/e,E:(t.E+.5)/e}}laneTotal(){const t=this.m.lanes;return t.W+t.C+t.E}heatGuess(t,e){const n=t*xe*xe;let s=0;const r=[];for(let o=0;o<xe*xe;o++){const l=this.m.heat[n+o];if(l>.05){const c=as(o);if(c.z>13.5||e&&e(c))continue;r.push([o,l*l]),s+=l*l}}if(!r.length)return null;let a=Math.random()*s;for(const[o,l]of r)if(a-=l,a<=0)return as(o);return as(r[r.length-1][0])}bestContactFrom(t,e){let n=null;for(let s=0;s<this.m.contacts.length;s++){const r=this.m.contacts[s];if(r<.8)continue;const a=as(s),o=a.distanceTo(t);if(o>34||o<3)continue;const l=r/(1+o*.03);n&&l<=n.w||(a.y=1.4,e(a)&&(n={p:a,w:l}))}return n}retreatRate(){const t=this.d.retreat;return t.n>=this.minN()?t.yes/t.n:null}repeekRate(){const t=this.d.repeek;return t.n>=this.minN()?t.yes/t.n:null}avgFireDelay(){const t=this.d.fireDelay;return t.n>=this.minN()?t.sum/t.n:null}symShare(t){const{p:e,total:n}=this.dist("");return{share:n?e[t]:0,total:n}}skill(){if(this.skillOverride!==null)return this.skillOverride;let t=Math.min(1,this.d.rounds/this.skillRounds());return t=.15+.85*t+this.diffOffset+this.modeBonus,this.modeBonus===0&&this.d.lossStreak>=3&&(t-=.12*Math.min(3,this.d.lossStreak-2)),Math.max(.08,Math.min(1,t))}knowledge(){const t=Math.min(1,this.laneTotal()/(6*this.f)),e=Math.min(1,this.dist("").total/(60*this.f)),n=Math.min(1,this.m.contacts.reduce((r,a)=>r+a,0)/(8*this.f)),s=Math.min(1,(this.d.retreat.n+this.d.repeek.n+this.d.fireDelay.n+this.d.lean.n)/(12*this.f));return(t+e+n+s)/4}chooseTactic(){let t="HOLD",e=-1;const n=this.avgFireDelay();for(const s of gr){const{a:r,b:a}=this.d.tactics[s];let o=b0(r,a);s==="RUSH"&&n!==null&&n>.7&&(o+=.08),s==="HOLD"&&this.laneTotal()>=3&&(o+=.05),o>e&&(e=o,t=s)}return t}tacticMean(t){const{a:e,b:n}=this.d.tactics[t];return e/(e+n)}rewardTactic(t,e){for(const n of gr){const s=this.d.tactics[n];s.a=1+(s.a-1)*this.decay(),s.b=1+(s.b-1)*this.decay()}this.d.tactics[t].a+=e,this.d.tactics[t].b+=1-e}endRound(t){this.d.rounds+=1,t===!0?(this.d.pWins++,this.d.lossStreak=0):t===!1&&(this.d.bWins++,this.d.lossStreak++);const e=this.decay();for(let s=0;s<this.m.heat.length;s++)this.m.heat[s]*=e;for(let s=0;s<this.m.contacts.length;s++)this.m.contacts[s]*=e;for(const s of["W","C","E"])this.m.lanes[s]*=e;const n=this.d.weapon;n.rifleShots*=.95,n.rifleDist*=.95,n.shotShots*=.95,n.shotDist*=.95;for(const s in this.d.ngram){const r=this.d.ngram[s];for(const a of ii)r[a]&&(r[a]=r[a]*.95)}this.save()}endMatch(){this.d.matches+=1,this.save()}insights(){const t=[],e=T=>`%${Math.round(T*100)}`,n=T=>`${Math.round(T*100)}%`,s=this.laneTotal();if(s>=Math.max(1.2,2.5*this.f)){const T=this.lanePred(),w=Object.keys(T).sort((P,g)=>T[g]-T[P])[0];T[w]>=.5&&t.push({id:"lane-"+w,strength:T[w]*Math.min(1,s/5),tr:`Çoğunlukla ${ni[w].tr} üzerinden geliyorsun (${e(T[w])}).`,en:`You usually come through the ${ni[w].en} (${n(T[w])}).`,rtr:"O koridora pusu kuruyorum.",ren:"I'm setting an ambush there."})}const r=this.symShare("L"),a=this.symShare("R"),o=r.share+a.share;if(r.total>=12*this.f&&o>.25){const T=r.share/o,w=T>=.5?"L":"R",P=Math.max(T,1-T);P>=.6&&t.push({id:"strafe-"+w,strength:(P-.4)*1.4*Math.min(1,r.total/(30*this.f)),tr:`Çatışmada ${e(P)} ${w==="L"?"sola":"sağa"} kaçıyorsun.`,en:`In a fight you dodge ${w==="L"?"left":"right"} ${n(P)} of the time.`,rtr:"Nişanımı o yöne kaydırıyorum.",ren:"I'm leading my aim that way."})}let l="",c=0,d="S",h=0;for(const T in this.d.ngram){if(!T.startsWith(this.wk))continue;const w=T.slice(this.wk.length);if(w.length!==2||w.includes(":"))continue;const{p:P,total:g}=this.dist(w);if(!(g<Math.max(3,5*this.f)))for(const _ of ii)(_==="L"||_==="R")&&P[_]>c&&!(w[0]===_&&w[1]===_)&&(c=P[_],l=w,d=_,h=g)}if(c>=.65&&l){const T=l.split("").map(w=>fs[w]).join(" ");t.push({id:"rhythm-"+l+d,strength:(c-.4)*1.5*Math.min(1,h/(10*this.f)),tr:`${T} hareketinden sonra ${e(c)} ${fs[d]} yapıyorsun.`,en:`After ${T} you go ${fs[d]} ${n(c)} of the time.`,rtr:"Ritmini okuyup bir adım önüne nişan alıyorum.",ren:"I read your rhythm and aim one step ahead."})}let f=-1,m=0,v=0;for(let T=0;T<this.m.contacts.length;T++)v+=this.m.contacts[T],this.m.contacts[T]>m&&(m=this.m.contacts[T],f=T);if(f>=0&&m>=1.8){const T=as(f),w=y0(T.x,T.z);t.push({id:"contact-"+f,strength:Math.min(1,m/Math.max(3,v*.6)),tr:`Karşıma genelde ${w.tr} tarafından çıkıyorsun.`,en:`You usually show up from the ${w.en}.`,rtr:"O açıyı önceden tutuyorum.",ren:"I pre-aim that angle now."})}const M=this.avgFireDelay();M!==null&&(M<.4?t.push({id:"fire-fast",strength:.55,tr:`Beni görür görmez ateş ediyorsun (ort. ${M.toFixed(2)} sn).`,en:`You shoot the moment you see me (avg ${M.toFixed(2)} s).`,rtr:"Açıkta daha kısa kalıp siper değiştiriyorum.",ren:"I stay exposed for less time and swap cover."}):M>.7&&t.push({id:"fire-slow",strength:.55,tr:`Ateş etmeden önce bekliyorsun (ort. ${M.toFixed(2)} sn).`,en:`You wait before shooting (avg ${M.toFixed(2)} s).`,rtr:"Daha sık üstüne yürüyorum.",ren:"I push you more often."}));const p=this.retreatRate();p!==null&&(p>=.6?t.push({id:"retreat-yes",strength:p*Math.min(1,this.d.retreat.n/5),tr:`Yaralanınca geri çekiliyorsun (${e(p)}).`,en:`You fall back when hurt (${n(p)}).`,rtr:"Kaçtığında peşine düşüyorum.",ren:"When you run, I chase."}):p<=.3&&t.push({id:"retreat-no",strength:(1-p)*.8*Math.min(1,this.d.retreat.n/5),tr:"Yaralı olsan da geri adım atmıyorsun.",en:"You don't back off even when hurt.",rtr:"Yaralıyken seninle kafa kafaya girmiyorum.",ren:"I won't trade with you while I'm hurt."}));const u=this.repeekRate();u!==null&&u>=.55&&t.push({id:"repeek",strength:u*Math.min(1,this.d.repeek.n/5),tr:`Siperden hep aynı yerden tekrar çıkıyorsun (${e(u)}).`,en:`You re-peek from the same spot (${n(u)}).`,rtr:"O köşeye nişan alıp bekliyorum.",ren:"I hold that corner and wait."});const b=this.symShare("C"),y=this.symShare("J");b.total>=15*this.f&&b.share>=.22&&t.push({id:"crouch",strength:b.share*1.5,tr:`Çatışmada sık sık eğilip kayıyorsun (${e(b.share)}).`,en:`You crouch and slide a lot in fights (${n(b.share)}).`,rtr:"Nişanımı aşağıda tutuyorum.",ren:"I keep my aim low."}),y.total>=15*this.f&&y.share>=.18&&t.push({id:"jump",strength:y.share*1.6,tr:`Çatışmada çok zıplıyorsun (${e(y.share)}).`,en:`You jump a lot in fights (${n(y.share)}).`,rtr:"Düştüğün yere nişan alıyorum.",ren:"I aim where you'll land."});const x=this.leanRate();x!==null&&x>=.35&&t.push({id:"lean",strength:Math.min(1,x*1.2),tr:`Köşelerden yatarak bakıyorsun (${e(x)}).`,en:`You peek corners by leaning (${n(x)}).`,rtr:"Köşeleri kafa hizasında tutuyorum.",ren:"I hold corners at head height."});const L=this.weaponHabit();if(L.n>=30*this.f&&(L.shotShare>=.35&&L.shotAvg<12?t.push({id:"weapon-shotgun",strength:Math.min(1,L.shotShare*1.2),tr:`Yakına gelince pompalıya geçiyorsun (ort. ${L.shotAvg.toFixed(0)} m).`,en:`You switch to the shotgun up close (avg ${L.shotAvg.toFixed(0)} m).`,rtr:"Mesafemi koruyorum.",ren:"I keep my distance."}):L.shotShare<.15&&L.rifleAvg>18&&t.push({id:"weapon-longrange",strength:.5,tr:`Tüfekle uzaktan oynuyorsun (ort. ${L.rifleAvg.toFixed(0)} m).`,en:`You play long range with the rifle (avg ${L.rifleAvg.toFixed(0)} m).`,rtr:"Siperden siper üstüne yürüyorum.",ren:"I close in cover to cover."})),this.d.rounds>=Math.max(2,4*this.f)){const T=[...gr].sort((P,g)=>this.tacticMean(g)-this.tacticMean(P))[0],w=this.tacticMean(T);w>=.55&&t.push({id:"tactic-"+T,strength:(w-.4)*1.2,tr:`Sana karşı en iyi işleyen taktiğim: ${Di[T].tr} (${e(w)}).`,en:`My best tactic against you: ${Di[T].en} (${n(w)}).`,rtr:"Onu daha sık deneyeceğim.",ren:"I'll use it more often."})}return t.sort((T,w)=>w.strength-T.strength)}freshInsights(t=2){const s=this.insights().filter(r=>r.strength>=.3).filter(r=>this.d.shown[r.id]===void 0||r.strength-this.d.shown[r.id]>=.15).slice(0,t);for(const r of s)this.d.shown[r.id]=r.strength;return s}}const ir=.6,w0=i=>i<=0?0:i>=1?1:i*i*(3-2*i),sr=(i,t,e)=>i<t||i>e?0:Math.sin((i-t)/(e-t)*Math.PI),nc=(i,t,e)=>w0((i-t)/(e-t));class A0{constructor(){this.group=new Qt,this.kick=0,this.flashT=0,this.pumpT=0,this.swayX=0,this.swayY=0,this.cur="rifle",this.mInk=new hs({color:_e.ink}),this.mDark=new hs({color:2894370}),this.mPaper=new hs({color:_e.paper}),this.mShade=new hs({color:13617074}),this.mRed=new Be({color:_e.redHot}),this.eLight=new ms({color:9406842}),this.eInk=new ms({color:_e.ink}),this.scoped=!1,this.rigs={rifle:this.buildRifle(),shotgun:this.buildShotgun(),sniper:this.buildSniper(),smg:this.buildSmg(),burst:this.buildBurst(),pistol:this.buildPistol()};for(const t in this.rigs){const e=this.rigs[t];this.group.add(e.root),e.root.visible=t==="rifle"}}finish(t,e,n,s){const r=new Me;r.position.set(0,s.muzzleY??.012,s.muzzleZ),n.add(r);const a=this.hand(e,0,-.1,.1,1);a.rotation.x=-.3;let o=s.handL;o||(o=this.hand(e,-.02,-.04,-.28,-1),o.rotation.set(.1,.2,-.5));const l=this.flashMesh(n,s.muzzleZ-.03,s.flash??.05);return e.scale.setScalar(ir),{magY:s.mag?.position.y,magZ:s.mag?.position.z,boltZ:s.bolt?.position.z,id:t,root:e,mag:s.mag,pump:null,handL:o,handLHome:o.position.clone(),bolt:s.bolt,muzzle:r,flash:l,sightY:s.sightY,sightZ:0,hip:s.hip,kickZ:s.kickZ,kickRot:s.kickRot}}buildSniper(){const t=new Qt,e=new Qt;t.add(e),this.box(e,.06,.08,.42,0,0,0,this.mInk),this.box(e,.058,.07,.3,0,-.005,-.34,this.mShade),this.cyl(e,.012,.52,0,.015,-.68,this.mInk),this.box(e,.03,.03,.08,0,.015,-.95,this.mInk),this.cyl(e,.028,.3,0,.088,-.03,this.mInk,10),this.cyl(e,.034,.05,0,.088,-.19,this.mInk,10),this.cyl(e,.032,.04,0,.088,.13,this.mInk,10),this.box(e,.02,.03,.03,0,.055,-.08,this.mDark,!1),this.box(e,.02,.03,.03,0,.055,.05,this.mDark,!1);const n=new Yt(new ai(.026,14),new Be({color:8330520}));n.position.set(0,.088,-.216),n.rotation.y=Math.PI,e.add(n);const s=this.box(e,.05,.014,.014,.045,.02,.08,this.mShade);this.box(e,.022,.022,.022,.07,.02,.08,this.mInk,!1);const r=new Qt;return r.position.set(0,-.06,-.04),this.box(r,.04,.07,.08,0,-.03,0,this.mDark),e.add(r),this.box(e,.04,.11,.05,0,-.08,.12,this.mInk,!0,-.32),this.box(e,.05,.09,.3,0,-.03,.34,this.mShade,!0,.05),this.box(e,.054,.12,.03,0,-.04,.49,this.mInk),this.finish("sniper",t,e,{mag:r,bolt:s,muzzleZ:-1,muzzleY:.015,sightY:.088,hip:new R(.14,-.14,-.4),kickZ:.08,kickRot:.14,flash:.07})}buildSmg(){const t=new Qt,e=new Qt;t.add(e),this.box(e,.055,.085,.26,0,0,0,this.mInk),this.box(e,.05,.05,.14,0,-.005,-.2,this.mDark),this.cyl(e,.011,.1,0,.01,-.31,this.mInk);for(let a=0;a<3;a++)this.box(e,.052,.008,.02,0,0,-.15-a*.035,this.mShade,!1);const n=new Qt;n.position.set(0,-.06,-.05),this.box(n,.03,.2,.05,0,-.09,0,this.mDark),this.box(n,.032,.012,.052,0,-.19,0,this.mShade,!1),e.add(n),this.box(e,.038,.1,.045,0,-.08,.08,this.mInk,!0,-.3),this.box(e,.012,.012,.22,.02,0,.22,this.mInk,!1),this.box(e,.012,.012,.22,-.02,0,.22,this.mInk,!1),this.box(e,.05,.07,.02,0,-.02,.33,this.mInk),this.box(e,.02,.03,.012,0,.055,.08,this.mInk,!1),this.box(e,.008,.03,.01,0,.055,-.24,this.mInk,!1);const s=new Yt(new ei(.004,6,5),this.mRed);s.position.set(0,.07,-.24),e.add(s);const r=this.box(e,.012,.018,.03,.033,.02,0,this.mShade);return this.finish("smg",t,e,{mag:n,bolt:r,muzzleZ:-.37,sightY:.07,hip:new R(.13,-.13,-.36),kickZ:.015,kickRot:.03})}buildBurst(){const t=new Qt,e=new Qt;t.add(e),this.box(e,.06,.085,.36,0,0,0,this.mInk),this.box(e,.062,.075,.3,0,-.005,-.32,this.mShade);for(let a=0;a<5;a++)this.box(e,.064,.006,.012,0,.02,-.21-a*.05,this.mInk,!1);this.cyl(e,.011,.18,0,.012,-.56,this.mInk),this.box(e,.026,.026,.05,0,.012,-.66,this.mInk),this.box(e,.012,.05,.18,.022,.07,-.02,this.mInk),this.box(e,.012,.05,.18,-.022,.07,-.02,this.mInk),this.box(e,.056,.012,.18,0,.1,-.02,this.mInk);const n=new Yt(new ei(.0035,6,5),this.mRed);n.position.set(0,.075,-.1),e.add(n);const s=new Qt;s.position.set(0,-.06,-.05),this.box(s,.036,.13,.065,0,-.06,0,this.mDark,!0,.18),e.add(s),this.box(e,.04,.11,.05,0,-.08,.1,this.mInk,!0,-.32),this.box(e,.045,.075,.22,0,-.015,.28,this.mInk);const r=this.box(e,.012,.018,.04,.035,.02,.06,this.mShade);return this.finish("burst",t,e,{mag:s,bolt:r,muzzleZ:-.7,sightY:.075,hip:new R(.135,-.13,-.4),kickZ:.02,kickRot:.04})}buildPistol(){const t=new Qt,e=new Qt;t.add(e);const n=this.box(e,.036,.042,.2,0,.03,-.06,this.mInk);this.box(e,.034,.03,.15,0,-.005,-.04,this.mDark);for(let o=0;o<4;o++)this.box(e,.038,.03,.006,0,.032,0+o*.012,this.mShade,!1);this.box(e,.014,.012,.01,0,.056,.03,this.mInk,!1);const s=new Yt(new ei(.004,6,5),this.mRed);s.position.set(0,.058,-.15),e.add(s);const r=new Qt;r.position.set(0,-.04,.03),this.box(r,.032,.11,.05,0,-.04,0,this.mInk,!0,-.25),e.add(r);const a=this.hand(t,-.025,-.11,.06,-1);return a.rotation.set(-.3,.3,-.2),this.finish("pistol",t,e,{mag:r,bolt:n,muzzleZ:-.17,muzzleY:.03,sightY:.058,hip:new R(.11,-.12,-.32),kickZ:.03,kickRot:.12,flash:.04,handL:a})}box(t,e,n,s,r,a,o,l,c=!0,d=0){const h=new ln(e,n,s),f=new Yt(h,l);if(f.position.set(r,a,o),f.rotation.x=d,t.add(f),c){const m=new oo(new lo(h,25),l===this.mPaper||l===this.mShade?this.eInk:this.eLight);f.add(m)}return f}cyl(t,e,n,s,r,a,o,l=8){const c=new gs(e,e,n,l);c.rotateX(Math.PI/2);const d=new Yt(c,o);d.position.set(s,r,a),t.add(d);const h=new oo(new lo(c,30),this.eLight);return d.add(h),d}hand(t,e,n,s,r){const a=new Qt;a.position.set(e,n,s),this.box(a,.055,.05,.075,0,0,0,this.mPaper),this.box(a,.05,.016,.05,-.022*r,.03,-.005,this.mPaper);const o=this.box(a,.065,.065,.32,.02*r,-.05,.19,this.mShade,!0,.35);return o.rotation.y=-.18*r,this.box(a,.068,.02,.02,0,0,.05,this.mInk,!1),t.add(a),a}flashMesh(t,e,n){const s=new Yt(new yr(n,0),new Be({color:_e.paper}));s.position.set(0,.012,e),s.scale.set(1,1,1.8),s.visible=!1,t.add(s);const r=new Yt(new yr(n*.5,0),new Be({color:_e.redHot}));return s.add(r),s}buildRifle(){const t=new Qt,e=new Qt;t.add(e),this.box(e,.058,.08,.34,0,0,0,this.mInk),this.box(e,.05,.03,.3,0,-.045,-.02,this.mDark),this.box(e,.034,.012,.36,0,.047,-.03,this.mDark);for(let f=0;f<7;f++)this.box(e,.038,.006,.012,0,.056,-.18+f*.045,this.mInk,!1);this.box(e,.056,.066,.27,0,0,-.305,this.mDark);for(let f=0;f<4;f++)this.box(e,.058,.012,.03,0,0,-.22-f*.055,this.mShade,!1);this.cyl(e,.011,.2,0,.012,-.53,this.mInk),this.box(e,.028,.028,.065,0,.012,-.645,this.mInk);for(let f=0;f<2;f++)this.box(e,.03,.006,.01,0,.022,-.63-f*.025,this.mShade,!1);const n=new Me;n.position.set(0,.012,-.69),e.add(n);const s=new Qt;s.position.set(0,-.06,-.06),this.box(s,.036,.09,.07,0,-.04,0,this.mDark,!0,.12),this.box(s,.036,.08,.066,0,-.115,-.018,this.mDark,!0,.32),this.box(s,.038,.012,.072,0,-.158,-.032,this.mShade,!1,.32),e.add(s),this.box(e,.04,.11,.05,0,-.08,.1,this.mInk,!0,-.32),this.box(e,.04,.06,.2,0,-.012,.27,this.mDark),this.box(e,.046,.1,.03,0,-.03,.38,this.mInk),this.box(e,.03,.025,.12,0,.03,.25,this.mInk);const r=this.box(e,.012,.018,.04,.035,.02,.06,this.mShade),a=.098,o=new Qt;o.position.set(0,a,-.02),this.box(o,.05,.008,.07,0,.028,0,this.mInk),this.box(o,.05,.008,.07,0,-.028,0,this.mInk),this.box(o,.008,.06,.07,.024,0,0,this.mInk),this.box(o,.008,.06,.07,-.024,0,0,this.mInk),this.box(o,.03,.02,.05,0,-.045,0,this.mDark);const l=new Yt(new ei(.0032,8,6),this.mRed);l.position.set(0,0,-.03),o.add(l),e.add(o);const c=this.hand(t,0,-.1,.1,1);c.rotation.x=-.3;const d=this.hand(t,-.02,-.04,-.3,-1);d.rotation.set(.1,.2,-.5);const h=this.flashMesh(e,-.72,.05);return t.scale.setScalar(ir),{id:"rifle",root:t,mag:s,pump:null,handL:d,handLHome:d.position.clone(),bolt:r,muzzle:n,flash:h,sightY:a,sightZ:-.05,hip:new R(.135,-.13,-.4),kickZ:.025,kickRot:.05}}buildShotgun(){const t=new Qt,e=new Qt;t.add(e),this.box(e,.064,.085,.3,0,0,0,this.mInk),this.box(e,.066,.02,.06,0,0,-.05,this.mShade,!1),this.cyl(e,.015,.58,0,.022,-.44,this.mInk),this.cyl(e,.013,.46,0,-.016,-.38,this.mDark),this.box(e,.03,.03,.02,0,-.016,-.62,this.mInk);const n=new Me;n.position.set(0,.022,-.74),e.add(n);const s=new Qt;s.position.set(0,-.012,-.31),this.box(s,.06,.055,.17,0,0,0,this.mShade);for(let c=0;c<5;c++)this.box(s,.062,.006,.008,0,-.012,-.06+c*.03,this.mInk,!1);e.add(s);const r=new Yt(new ei(.0055,8,6),this.mRed);r.position.set(0,.043,-.715),e.add(r),this.box(e,.03,.014,.012,0,.05,.02,this.mInk,!1),this.box(e,.042,.1,.05,0,-.08,.1,this.mInk,!0,-.35),this.box(e,.05,.075,.24,0,-.03,.28,this.mShade,!0,.08),this.box(e,.054,.1,.025,0,-.05,.4,this.mInk);const a=this.hand(t,0,-.1,.1,1);a.rotation.x=-.32;const o=this.hand(s,-.005,-.045,0,-1);o.rotation.set(.1,.15,-.45);const l=this.flashMesh(e,-.78,.075);return t.scale.setScalar(ir),{id:"shotgun",root:t,mag:null,pump:s,handL:o,handLHome:o.position.clone(),bolt:null,muzzle:n,flash:l,sightY:.045,sightZ:-.3,hip:new R(.135,-.13,-.42),kickZ:.07,kickRot:.16}}fired(t){this.kick=1,this.flashT=t==="shotgun"?.06:.035,t==="shotgun"&&(this.pumpT=1e-4)}muzzleCamSpace(){const t=this.rigs[this.cur];return this.group.updateMatrixWorld(!0),t.muzzle.getWorldPosition(new R)}update(t,e){const n=t.gun.def.id;n!==this.cur&&(this.rigs[this.cur].root.visible=!1,this.cur=n);const s=this.rigs[n];this.scoped=!!t.gun.def.scope&&t.ads>.85,s.root.visible=t.alive&&!this.scoped;const r=t.ads;this.kick=Math.max(0,this.kick-e*(n==="shotgun"?5:11)),this.flashT-=e,s.flash.visible=this.flashT>0,s.flash.rotation.z+=1.7;const a=1-r*.85;this.swayX+=(-t.lookDX*6e-4*a-this.swayX)*Math.min(1,e*10),this.swayY+=(t.lookDY*5e-4*a-this.swayY)*Math.min(1,e*10);const o=t.sprinting?1:0,l=t.horizSpeed(),c=Math.min(1,l/7)*(1-r*.85)*(t.grounded||t.wallrun?1:.3),d=Math.cos(t.bob*.5)*.014*c,h=Math.abs(Math.sin(t.bob*.5))*.012*c,f=t.gun.reloading?1-t.gun.reloadT/t.gun.reloadTime:-1,m=t.switchT>0?Math.sin(t.switchT/(t.gun.def.swapTime??.32)*Math.PI):0,v=new R(0,-s.sightY*ir,-.3),M=s.hip.clone().lerp(v,r);M.x+=d+this.swayX-o*.05,M.y+=h+this.swayY-o*.04-t.landKick*.035-m*.3,M.z+=this.kick*s.kickZ*(1-r*.5);let p=this.kick*s.kickRot*(1-r*.6)-o*.3+this.swayY*2,u=o*.55+this.swayX*3,b=o*.2+(t.sliding?.3:0)+t.roll*1.6;if(f>=0)if(s.mag){const y=sr(f,0,1);b+=y*.55,p+=y*.25,M.y-=y*.05;const x=nc(f,.12,.35)*(1-nc(f,.55,.75));s.mag.position.y=(s.magY??-.06)-x*.32,s.mag.position.z=(s.magZ??-.06)+x*.06,s.handL.position.set(s.handLHome.x+x*.02,s.handLHome.y-x*.2,s.handLHome.z+x*.22),s.bolt&&(s.bolt.position.z=(s.boltZ??.06)+sr(f,.8,.95)*.06)}else{const y=sr(f,0,1);b-=y*.45,p+=y*.15;const x=f<.8?Math.abs(Math.sin(f*Math.PI*5)):0;s.handL.position.set(s.handLHome.x,s.handLHome.y-x*.06,s.handLHome.z+x*.05),this.pumpT=f>.82?Math.min(.999,(f-.82)/.18):0}else s.mag&&s.mag.position.set(0,s.magY??-.06,s.magZ??-.06),s.bolt&&(s.bolt.position.z=s.boltZ??.06),s.handL.position.copy(s.handLHome);if(s.pump){this.pumpT>0&&f<0&&(this.pumpT=Math.min(1,this.pumpT+e/.5));const y=this.pumpT>0?sr(this.pumpT,.15,.85):0;s.pump.position.z=-.31+y*.09,this.pumpT>=1&&(this.pumpT=0)}s.root.position.copy(M),s.root.rotation.set(p,u,b)}}const Ri=new Ot(_e.ink),R0=new Ot(_e.paper);function $n(i,t,e,n=.93){const s=new hs({color:i});return s.onBeforeCompile=r=>{r.uniforms.uInk={value:t},r.uniforms.uAmt={value:e},r.uniforms.uScale={value:Math.min(window.devicePixelRatio||1,1.5)},r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uInk; uniform float uAmt; uniform float uScale;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
        {
          float lumO = dot(gl_FragColor.rgb, vec3(0.299,0.587,0.114));
          float lumB = max(dot(diffuseColor.rgb, vec3(0.299,0.587,0.114)), 0.0001);
          float shade = lumO / lumB;
          vec2 fc = gl_FragCoord.xy / uScale;
          float l1 = 1.0 - smoothstep(0.09, 0.2, abs(fract((fc.x + fc.y) / 6.0) - 0.5));
          float l2 = 1.0 - smoothstep(0.09, 0.2, abs(fract((fc.x - fc.y) / 6.0) - 0.5));
          float h = 0.0;
          if (shade < 0.72) h = l1;
          if (shade < 0.5) h = max(h, l2);
          vec3 base = diffuseColor.rgb * (shade < 0.72 ? ${n.toFixed(3)} : 1.0);
          gl_FragColor.rgb = mix(base, uInk, h * uAmt);
        }`)},s}function C0(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#ebe6d8",t.fillRect(0,0,512,512),t.strokeStyle="rgba(22,21,15,0.16)",t.lineWidth=2;for(let n=0;n<=4;n++)t.beginPath(),t.moveTo(n*128,0),t.lineTo(n*128,512),t.stroke(),t.beginPath(),t.moveTo(0,n*128),t.lineTo(512,n*128),t.stroke();t.fillStyle="rgba(22,21,15,0.07)";for(let n=0;n<70;n++)t.beginPath(),t.arc(Math.random()*512,Math.random()*512,Math.random()*3+.5,0,Math.PI*2),t.fill();const e=new u0(i);return e.wrapS=e.wrapT=_r,e.repeat.set(Wi.half*2/8,Wi.half*2/8),e.colorSpace=ze,e.anisotropy=4,e}class P0{constructor(t){this.scene=new Vl,this.gunScene=new Vl,this.baseFov=80,this.vm=new A0,this.mapGroup=new Qt,this.lineInk=new ms({color:_e.ink}),this.linePaper=new ms({color:9209462}),this.basePR=Math.min(window.devicePixelRatio||1,1.5),this.botRoot=new Qt,this.botHips=new Qt,this.botTorso=new Qt,this.botHead=new Qt,this.botFlash=0,this.parts=[],this.shattered=!1,this.tracers=[],this.particles=[],this.decals=[],this.decalIdx=0,this.shake=0,this.fovNow=80,this.heatOverlay=null,this.stripMat=new Be({color:_e.ink}),this.renderer=new c0({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xo,this.renderer.autoClear=!1,this.scene.background=R0.clone(),this.scene.fog=new Co(_e.paper,34,80),this.camera=new He(80,1,.05,200),this.camera.rotation.order="YXZ",this.gunCam=new He(58,1,.01,10);const e=new $l(16777215,16777215,.62*Math.PI);e.groundColor.setScalar(.62),this.scene.add(e);const n=new jl(16777215,.75*Math.PI);n.position.set(-14,30,9),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=s.bottom=-30,s.right=s.top=30,s.near=1,s.far=80,n.shadow.bias=-6e-4,n.shadow.normalBias=.03,this.scene.add(n),this.sun=n;const r=$n(16777215,Ri,.22,.9);r.map=C0();const a=new Yt(new ys(Wi.half*2,Wi.half*2),r);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,this.scene.add(a),this.mats={wall:$n(_e.paperShade,Ri,0,.84),paper:$n(_e.paper,Ri,0,.84),low:$n(15328211,Ri,0,.84),ink:$n(2762786,Ri,0,.8),plat:$n(14472642,Ri,0,.84)},this.scene.add(this.mapGroup),this.buildMap(),this.botMat=$n(2839748,new Ot(1716078),0,.72),this.botMat.emissive=new Ot(0),this.buildBot(),this.scene.add(this.botRoot);const o=new $l(16777215,10066329,2.2);this.gunScene.add(o);const l=new jl(16777215,1.6);l.position.set(-1,2,1),this.gunScene.add(l),this.gunScene.add(this.vm.group);const c=new ai(.085,7);for(let d=0;d<160;d++){const h=new Yt(c,new Be({color:_e.ink,polygonOffset:!0,polygonOffsetFactor:-2,transparent:!0,opacity:.85}));h.visible=!1,this.scene.add(h),this.decals.push(h)}}buildBot(){const t=this.botMat,e=this.botRoot;this.botHips.position.y=.92,e.add(this.botHips);const n=new ln(.19,.9,.22);n.translate(0,-.45,0),this.legL=new Yt(n,t),this.legL.position.x=-.15,this.legR=new Yt(n,t),this.legR.position.x=.15,this.botHips.add(this.legL,this.legR);const s=new Yt(new gs(.27,.36,.72,6),t);s.position.y=.36,this.botTorso.position.y=0,this.botTorso.add(s),this.botHips.add(this.botTorso);const r=new Yt(new ln(.12,.12,.5),t);r.position.set(.24,.5,-.25);const a=new Yt(new ln(.08,.12,.62),t);a.position.set(.18,.55,-.55),this.botTorso.add(r,a),this.botHead.position.y=ye.eye-.92;const o=new Yt(new Po(ye.headR,0),t);this.botHead.add(o);const l=new Yt(new ai(.155,18),new Be({color:_e.paper}));l.position.z=-.25*.83,l.rotation.y=Math.PI;const c=new Yt(new ai(.085,16),new Be({color:_e.red}));c.position.z=-.25*.83-.004,c.rotation.y=Math.PI;const d=new Yt(new ai(.03,12),new Be({color:_e.ink}));d.position.z=-.006,c.add(d),this.iris=c,this.botHead.add(l,c),this.botHips.add(this.botHead),e.traverse(h=>{h.isMesh&&(h.castShadow=!0)});for(const h of[this.legL,this.legR,s,r,a,this.botHead])this.parts.push({obj:h,vel:new R,spin:new R,hp:h.position.clone(),hq:h.quaternion.clone(),parent:h.parent})}buildMap(){for(const t of[...this.mapGroup.children])this.mapGroup.remove(t),t.geometry?.dispose();for(const t of ho){const e=new R().subVectors(t.max,t.min),n=.004+.004*(ho.indexOf(t)%3),s=new ln(e.x-n,e.y-n*.5,e.z-n),r=new Yt(s,this.mats[t.style]);r.position.addVectors(t.min,t.max).multiplyScalar(.5),r.castShadow=t.style!=="wall",r.receiveShadow=!0,this.mapGroup.add(r);const a=new oo(new lo(s),t.style==="ink"?this.linePaper:this.lineInk);a.position.copy(r.position),this.mapGroup.add(a)}this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.needsUpdate=!0)}setQuality(t,e){const n=t!=="low";this.renderer.shadowMap.enabled!==n&&(this.renderer.shadowMap.enabled=n,this.sun.castShadow=n,this.scene.traverse(a=>{const o=a.material;o&&(o.needsUpdate=!0)}));const s=t==="high"?2048:1024;this.sun.shadow.mapSize.x!==s&&(this.sun.shadow.mapSize.set(s,s),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null);const r=(t==="low"?Math.min(1,this.basePR):t==="med"?Math.min(1.25,this.basePR):this.basePR)*e;this.renderer.setPixelRatio(Math.max(.4,r)),this.resize(window.innerWidth,window.innerHeight)}resize(t,e){this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.gunCam.aspect=t/e,this.gunCam.updateProjectionMatrix()}resetRound(){this.shattered=!1;for(const t of this.parts)t.parent.add(t.obj),t.obj.position.copy(t.hp),t.obj.quaternion.copy(t.hq);for(const t of this.decals)t.visible=!1;for(const t of this.tracers)this.scene.remove(t.mesh);this.tracers=[];for(const t of this.particles)this.scene.remove(t.mesh);this.particles=[]}addShake(t){this.shake=Math.min(1,this.shake+t)}muzzleFlash(t){this.vm.fired(t)}muzzleWorld(t){const e=this.vm.muzzleCamSpace(),n=Math.tan(this.camera.fov*Math.PI/360)/Math.tan(this.gunCam.fov*Math.PI/360);return new R(e.x*n,e.y*n,e.z).applyQuaternion(this.camera.quaternion).add(this.camera.position)}syncCamera(t,e,n){const s=t.grounded&&!t.sliding?Math.sin(t.bob)*.035*Math.min(1,t.horizSpeed()/6)*(1-t.ads*.8):0,r=t.eye;this.camera.position.set(r.x,r.y+s-t.landKick*.08,r.z),this.shake=Math.max(0,this.shake-e*3);const a=this.shake*this.shake*.02;this.camera.rotation.set(t.pitch+t.recoil*Math.PI/180+(Math.random()-.5)*a,t.yaw+(Math.random()-.5)*a,t.roll);let o=2*Math.atan(Math.tan(this.baseFov*Math.PI/360)/Math.max(.5,this.camera.aspect))*180/Math.PI;t.sprinting&&(o+=6),t.sliding&&(o+=9),o=o+(o*t.gun.def.adsZoom-o)*t.ads,t.wallrun&&(o+=6),t.dashT>0&&(o+=10),this.fovNow+=(o-this.fovNow)*Math.min(1,e*12),this.camera.fov=this.fovNow,this.camera.updateProjectionMatrix()}updateGun(t,e){this.vm.update(t,e)}updateBot(t,e){if(!t.alive){this.shattered||this.shatter(t);for(const a of this.parts)a.vel.y-=14*e,a.obj.position.addScaledVector(a.vel,e),a.obj.position.y<.08&&(a.obj.position.y=.08,a.vel.multiplyScalar(.5),a.vel.y=Math.abs(a.vel.y)*.3,a.spin.multiplyScalar(.6)),a.obj.rotation.x+=a.spin.x*e,a.obj.rotation.y+=a.spin.y*e,a.obj.rotation.z+=a.spin.z*e;return}this.botRoot.position.copy(t.pos),this.botRoot.rotation.set(0,t.yaw,0,"YXZ"),this.botHips.position.y=.92-.55*t.low,this.botHips.rotation.x=.55*t.low,this.botRoot.rotation.z=-t.lean*.32+(t.wallT>0?t.wallSide*.35:0);const n=Math.sin(t.walkPhase)*Math.min(.6,Math.hypot(t.vel.x,t.vel.z)*.12);this.legL.rotation.x=n,this.legR.rotation.x=-n;const s=t.aimYaw-t.yaw;this.botTorso.rotation.y=Math.atan2(Math.sin(s),Math.cos(s))*.6,this.botHead.rotation.set(t.aimPitch,Math.atan2(Math.sin(s),Math.cos(s)),0,"YXZ");const r=.65+t.alert*.6;this.iris.scale.setScalar(r),this.botFlash=Math.max(0,this.botFlash-e*6),this.botMat.emissive.setRGB(this.botFlash*.75,this.botFlash*.1,0)}botHit(){this.botFlash=1}shatter(t){this.shattered=!0,this.botRoot.updateMatrixWorld(!0);for(const e of this.parts){const n=new R,s=new qi;e.obj.getWorldPosition(n),e.obj.getWorldQuaternion(s),this.scene.add(e.obj),e.obj.position.copy(n),e.obj.quaternion.copy(s),e.vel.set((Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4),e.spin.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10)}for(let e=0;e<26;e++)this.particle(new R(t.pos.x,1.2,t.pos.z),!0,5)}tracer(t,e,n){const s=t.distanceTo(e);if(s<.3)return;const r=new gs(n?.012:.008,n?.012:.008,s,4,1,!0);r.rotateX(Math.PI/2);const a=new Be({color:n?_e.redHot:_e.ink,transparent:!0,opacity:.9,fog:!1}),o=new Yt(r,a);o.position.addVectors(t,e).multiplyScalar(.5),o.lookAt(e),this.scene.add(o),this.tracers.push({mesh:o,life:n?.14:.08,max:n?.14:.08})}impact(t,e,n){const s=n?7:4;for(let r=0;r<s;r++)this.particle(t,n,2.5,e);if(!n&&e){const r=this.decals[this.decalIdx++%this.decals.length];r.visible=!0,r.position.copy(t).addScaledVector(e,.012),r.lookAt(t.clone().add(e)),r.rotation.z=Math.random()*6,r.scale.setScalar(.7+Math.random()*.7)}}particle(t,e,n,s){const r=new Yt(new Lo(.035+Math.random()*.04,0),new Be({color:e?_e.red:_e.ink}));r.position.copy(t);const a=new R((Math.random()-.5)*n,Math.random()*n,(Math.random()-.5)*n);s&&a.addScaledVector(s,n*.6),this.scene.add(r),this.particles.push({mesh:r,vel:a,spin:new R(Math.random()*9,Math.random()*9,0),life:.6+Math.random()*.4})}render(t){for(let e=this.tracers.length-1;e>=0;e--){const n=this.tracers[e];n.life-=t,n.mesh.material.opacity=Math.max(0,n.life/n.max)*.9,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.tracers.splice(e,1))}for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life-=t,n.vel.y-=12*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.position.y<.02&&(n.mesh.position.y=.02,n.vel.set(0,0,0)),n.mesh.rotation.x+=n.spin.x*t,n.mesh.rotation.y+=n.spin.y*t,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1))}this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.clearDepth(),this.renderer.render(this.gunScene,this.gunCam)}}class L0{constructor(){this.ctx=null,this.master=null,this.noise=null,this.volume=.7}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noise.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}catch{this.ctx=null}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}listener(t,e){const n=this.ctx;if(!n)return;const s=n.listener,r=-Math.sin(e),a=-Math.cos(e);s.positionX?(s.positionX.value=t.x,s.positionY.value=t.y,s.positionZ.value=t.z,s.forwardX.value=r,s.forwardY.value=0,s.forwardZ.value=a,s.upX.value=0,s.upY.value=1,s.upZ.value=0):(s.setPosition(t.x,t.y,t.z),s.setOrientation(r,0,a,0,1,0))}out(t){const e=this.ctx;if(!e||!this.master)return null;if(!t)return this.master;const n=e.createPanner();return n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=3,n.rolloffFactor=.9,n.positionX.value=t.x,n.positionY.value=t.y,n.positionZ.value=t.z,n.connect(this.master),n}burst(t,e,n,s,r,a="bandpass"){const o=this.ctx,l=o.createBufferSource();l.buffer=this.noise;const c=o.createBiquadFilter();c.type=a,c.frequency.value=n,c.Q.value=s;const d=o.createGain(),h=o.currentTime;d.gain.setValueAtTime(r,h),d.gain.exponentialRampToValueAtTime(.001,h+e),l.connect(c).connect(d).connect(t),l.start(h,Math.random()*.5),l.stop(h+e+.02)}tone(t,e,n,s,r,a="sine",o=0){const l=this.ctx,c=l.createOscillator();c.type=a;const d=l.createGain(),h=l.currentTime+o;c.frequency.setValueAtTime(e,h),c.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+s),d.gain.setValueAtTime(1e-4,h),d.gain.linearRampToValueAtTime(r,h+.005),d.gain.exponentialRampToValueAtTime(1e-4,h+s),c.connect(d).connect(t),c.start(h),c.stop(h+s+.02)}shot(t,e="rifle"){const n=this.out(t);if(!n)return;if(e==="sniper"||e==="bot-sniper"){this.burst(n,.45,900,.5,1.4),this.burst(n,.1,5e3,1,.6,"highpass"),this.tone(n,80,30,.45,1.1,"triangle"),this.tone(n,500,380,.04,.15,"square",.55),this.tone(n,420,330,.04,.15,"square",.8);return}if(e==="pistol"){this.burst(n,.08,1700,.9,.55),this.tone(n,170,60,.08,.5,"triangle");return}if(e==="smg"){this.burst(n,.07,1900,.9,.45),this.tone(n,150,60,.06,.4,"triangle");return}if(e==="shotgun"){this.burst(n,.32,700,.6,1.3),this.burst(n,.08,3500,1,.5,"highpass"),this.tone(n,95,35,.3,1,"triangle"),this.tone(n,300,200,.05,.2,"square",.42),this.burst(n,.06,1800,2,.25,"bandpass");return}const s=e==="bot",r=.9+Math.random()*.2;this.burst(n,.11,(s?1500:1250)*r,.8,s?1.1:.6),this.burst(n,.04,4500,1.2,.3,"highpass"),this.tone(n,(s?160:130)*r,45,.1,s?.8:.55,"triangle")}dashAt(t){const e=this.out(t);e&&this.burst(e,.2,1200,.5,.6,"bandpass")}slideAt(t){const e=this.out(t);e&&this.burst(e,.35,900,.6,.5,"lowpass")}dash(){const t=this.out();t&&(this.burst(t,.22,1200,.5,.45,"bandpass"),this.tone(t,220,520,.12,.12,"sine"))}jump(){const t=this.out();t&&this.burst(t,.06,500,1,.25,"lowpass")}land(){const t=this.out();t&&(this.burst(t,.08,300,1,.5,"lowpass"),this.tone(t,70,40,.1,.3,"sine"))}swap(){const t=this.out();t&&(this.tone(t,700,600,.03,.15,"square"),this.tone(t,500,450,.04,.15,"square",.12))}hit(t=!1,e=!1){const n=this.out();n&&(e?(this.tone(n,2900,2600,.07,.28,"square"),this.tone(n,1900,1900,.09,.15,"sine",.02)):this.tone(n,1500+Math.random()*300,1300,.05,.22,"square"),t&&(this.tone(n,660,660,.18,.25,"triangle",.06),this.tone(n,990,990,.3,.25,"triangle",.14)))}hurt(t=!1){const e=this.out();e&&(this.tone(e,t?120:90,40,.25,.8,"sine"),this.burst(e,.12,t?900:400,1,.5,"lowpass"))}whiz(t){const e=this.out(t);e&&this.burst(e,.09,3e3,3,.4)}step(t){const e=this.out(t);e&&this.burst(e,.05,700,1.5,.45,"lowpass")}impact(t){const e=this.out(t);e&&this.burst(e,.04,2500,2,.15)}reload(t="rifle"){const e=this.out();if(e){if(t==="shotgun"){for(let n=0;n<4;n++)this.tone(e,800,700,.03,.15,"square",.25+n*.35);this.tone(e,300,200,.06,.2,"square",1.8);return}this.tone(e,600,500,.03,.2,"square",.2),this.tone(e,900,800,.03,.2,"square",1.1),this.tone(e,400,300,.04,.2,"square",1.55)}}dry(){const t=this.out();t&&this.tone(t,1200,1100,.02,.15,"square")}beep(t=!1){const e=this.out();e&&this.tone(e,t?1320:660,t?1320:660,t?.3:.12,.25,"sine")}sting(t){const e=this.out();if(!e)return;(t?[523,659,784]:[392,330,262]).forEach((s,r)=>this.tone(e,s,s,.35,.22,"triangle",r*.12))}slide(){const t=this.out();t&&this.burst(t,.35,900,.6,.25,"lowpass")}}class Oi{constructor(t){this.def=t,this.cooldown=0,this.reloadT=0,this.burstLeft=0,this.ammo=t.mag}get mag(){return this.def.mag}get reloadTime(){return this.def.reload}get reloading(){return this.reloadT>0}refill(){this.ammo=this.def.mag,this.reloadT=0,this.cooldown=0}cancelReload(){this.reloadT=0,this.burstLeft=0}update(t){return this.cooldown=Math.max(0,this.cooldown-t),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0)?(this.reloadT=0,this.ammo=this.def.mag,!0):!1}canFire(){return this.cooldown<=0&&this.reloadT<=0&&this.ammo>0}fire(t=this.def.fireInterval){this.ammo--,this.cooldown=t}startReload(){return this.reloadT>0||this.ammo>=this.def.mag?!1:(this.reloadT=this.def.reload,!0)}}const Ci=Math.PI/180,ic={W:-16,C:0,E:16};function qn(){return Math.sqrt(-2*Math.log(Math.random()+1e-9))*Math.cos(2*Math.PI*Math.random())}function os(i,t){let e=i-t;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e}class D0{constructor(t){this.brain=t,this.pos=new R,this.vel=new R,this.yaw=Math.PI,this.aimYaw=Math.PI,this.aimPitch=0,this.hp=100,this.alive=!0,this.gun=new Oi(On.rifle),this.state="travel",this.tactic="HOLD",this.lane="C",this.spot=null,this.path=[],this.repathT=0,this.sees=!1,this.seeT=0,this.unseenT=99,this.reactT=0,this.lastSeen=new R,this.lastSeenTime=-99,this.lostSightPos=null,this.lostSightTime=-99,this.heardPos=null,this.heardTime=-99,this.holdPoint=null,this.holdUntil=0,this.stateT=0,this.strafeDir=1,this.strafeT=0,this.errYaw=0,this.errPitch=0,this.errT=0,this.aimHead=!1,this.shotsThisPeek=0,this.walkPhase=0,this.alert=0,this.deathT=0,this.dmgDealt=0,this.dmgTaken=0,this.intent="",this.predV=0,this.predConf=0,this.preaimed=!1,this.hist=[],this.thinkT=0,this.mech={wallrun:!0,dash:!0,slide:!0,slideHop:!0,lean:!0},this.low=0,this.lean=0,this.leanWant=0,this.slideT=0,this.slideCd=0,this.dashT=0,this.dashCd=0,this.dashDir=new R,this.wallT=0,this.wallCd=0,this.wallSide=0,this.wallN=new R,this.moveEvent=null}rightVec(){return new R(Math.cos(this.aimYaw),0,-Math.sin(this.aimYaw))}eyeAt(t){const e=this.rightVec().multiplyScalar(.48*t);return new R(this.pos.x+e.x,this.pos.y+ye.eye-.7*this.low-Math.abs(t)*.06,this.pos.z+e.z)}get eye(){return this.eyeAt(this.lean)}headCenter(){return this.eyeAt(this.lean)}bodyTop(){return this.pos.y+ye.eye-ye.headR-.7*this.low}onHit(t){if(this.alive)if(this.mech.dash&&this.dashCd<=0&&this.state==="combat"&&Math.random()<.6){const e=this.rightVec().multiplyScalar(Math.random()<.5?-1:1),n=this.pos.clone().addScaledVector(e,2);mr(n.x,n.z)||e.multiplyScalar(-1),this.dashDir.copy(e),this.dashT=.16,this.dashCd=3.2,this.moveEvent="dash"}else this.mech.slide&&this.slideCd<=0&&this.hp<70&&Math.random()<.5&&this.startSlide()}startSlide(){if(Math.hypot(this.vel.x,this.vel.z)<2){const e=this.rightVec().multiplyScalar(this.strafeDir);this.vel.x=e.x*6,this.vel.z=e.z*6}this.slideT=.75,this.slideCd=2.5,this.moveEvent="slide"}reset(t){this.pos.copy(v0),this.vel.set(0,0,0),this.yaw=this.aimYaw=Math.PI,this.aimPitch=0,this.hp=100,this.alive=!0,this.gun.refill(),this.sees=!1,this.seeT=0,this.unseenT=99,this.lostSightPos=null,this.heardPos=null,this.holdPoint=null,this.hist=[],this.deathT=0,this.dmgDealt=this.dmgTaken=0,this.shotsThisPeek=0,this.lastSeenTime=-99,this.alert=0,this.low=this.lean=this.leanWant=0,this.slideT=this.dashT=this.wallT=0,this.slideCd=this.dashCd=this.wallCd=0,this.startTactic(t)}startTactic(t){const e=this.brain;this.tactic=e.chooseTactic();const n=e.lanePred(),s=["W","C","E"];if(this.tactic==="HOLD"){let r;if(Math.random()<.75)r=s.sort((o,l)=>n[l]-n[o])[0];else{let o=Math.random();r="C";for(const l of["W","C","E"])if(o-=n[l],o<=0){r=l;break}}this.lane=r;const a=bs.filter(o=>o.lane===r);this.spot=a[Math.floor(Math.random()*a.length)],this.goTo(this.spot.p),this.setState("travel",t)}else if(this.tactic==="FLANK")this.lane=["W","E","C"].sort((r,a)=>n[r]-n[a])[0],this.spot=null,this.goTo(new R(ic[this.lane],0,6)),this.setState("travel",t);else{this.spot=null;const r=this.guessPlayer(t);this.lane=Uo(r.x),this.goTo(r),this.setState("travel",t)}}setState(t,e){this.state=t,this.stateT=e}goTo(t){this.path=Gc(this.pos,t),this.repathT=0}guessPlayer(t){if(this.heardPos&&t-this.heardTime<5)return this.heardPos.clone();const e=t<10?0:t<25?1:2,n=this.brain.heatGuess(e);if(n)return n;const s=this.brain.lanePred();let r=Math.random(),a="C";for(const o of["W","C","E"])if(r-=s[o],r<=0){a=o;break}return new R(ic[a],0,Math.max(-4,Math.min(15,14-t*1.2)))}hear(t,e,n){this.alive&&(this.heardPos=new R(t.x+qn()*e,0,t.z+qn()*e),this.heardTime=n,!this.sees&&(this.state==="travel"||this.state==="hold")&&(this.holdPoint=new R(this.heardPos.x,1.4,this.heardPos.z),this.holdUntil=n+1.2))}update(t,e,n,s){if(!this.alive)return this.deathT+=t,null;this.gun.update(t);const r=this.brain.skill();for(this.hist.push({t:e,p:n.pos.clone(),v:n.vel.clone(),h:n.height,lx:n.leanX,lz:n.leanZ,lean:n.lean});this.hist.length>2&&this.hist[0].t<e-.6;)this.hist.shift();const a=this.eye,o=n.headPos(),l=new R(n.pos.x,n.pos.y+n.height*.6,n.pos.z),c=new R().subVectors(l,a),d=c.length(),h=Math.atan2(-c.x,-c.z),f=Math.abs(os(h,this.aimYaw))<ye.fov/2*Ci||d<2.5,m=n.alive&&(rn(a,o)||rn(a,l)),v=!s&&n.alive&&m&&f;if(v&&!this.sees){const X=new R(-Math.sin(this.aimYaw),0,-Math.cos(this.aimYaw)),H=new R(c.x,0,c.z).normalize();this.preaimed=X.dot(H)>Math.cos(12*Ci);let nt=.62-.36*r+Math.random()*.12;this.preaimed&&(nt*=.55),this.reactT=Math.max(.19,nt),this.seeT=0,this.shotsThisPeek=0;const rt=this.brain.leanRate();this.aimHead=Math.random()<.12+.33*r+(rt!==null&&rt>.3?.3:0),this.unseenT>2&&(this.brain.recordContact(n.pos.x,n.pos.z),this.brain.recordLean(Math.abs(n.lean)>.3)),this.lostSightPos&&e-this.lostSightTime<6&&e-this.lostSightTime>.6&&(this.brain.recordRepeek(this.lostSightPos.distanceTo(n.pos)<3.5),this.lostSightPos=null),this.brain.resetHistory(),this.setState("combat",e)}if(!v&&this.sees&&(this.lostSightPos=n.pos.clone(),this.lostSightTime=e,this.onLostSight(e,n)),this.sees=v,v?(this.seeT+=t,this.unseenT=0,this.lastSeen.copy(n.pos),this.lastSeenTime=e,this.reactT-=t):this.unseenT+=t,this.alert+=((v?1:this.unseenT<3?.5:.15)-this.alert)*Math.min(1,t*5),s)return this.vel.set(0,0,0),null;this.thinkT-=t,this.thinkT<=0&&(this.thinkT=.2,this.think(e,n,r));const M=this.movement(t,e,n,c,d),p=this.state==="combat"?ye.walk:this.state==="hold"?0:ye.run,u=30*t,b=M.x*p,y=M.z*p,x=b-this.vel.x,L=y-this.vel.z,T=Math.hypot(x,L);T<=u?(this.vel.x=b,this.vel.z=y):(this.vel.x+=x/T*u,this.vel.z+=L/T*u),this.slideCd=Math.max(0,this.slideCd-t),this.dashCd=Math.max(0,this.dashCd-t),this.wallCd=Math.max(0,this.wallCd-t);const w=Math.hypot(this.vel.x,this.vel.z)>ye.run*.8;if(this.mech.slide&&this.slideT<=0&&this.slideCd<=0&&w&&(this.state==="chase"||this.state==="travel"&&this.intent==="hunt")){const X=this.pos.distanceTo(this.lastSeenTime>-50?this.lastSeen:n.pos);X>5&&X<16&&Math.random()<t*1.5&&this.startSlide()}if(this.slideT>0){this.slideT-=t;const X=Math.hypot(this.vel.x,this.vel.z)||1,H=Math.max(4,10.5*Math.min(1,this.slideT/.75+.35));this.vel.x=this.vel.x/X*H,this.vel.z=this.vel.z/X*H}if(this.dashT>0&&(this.dashT-=t,this.vel.x=this.dashDir.x*14,this.vel.z=this.dashDir.z*14),this.mech.wallrun&&this.wallT<=0&&this.wallCd<=0&&w&&this.state==="travel"&&this.pos.y<.05){const X=uo(this.pos.x,this.pos.y,this.pos.z,ye.radius+.75);if(X&&Math.random()<t*2.5){this.wallT=.9,this.wallCd=4;const H=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw));this.wallSide=X.x*H.x+X.z*H.z>0?-1:1,this.wallN.copy(X),this.moveEvent="wallrun"}}if(this.wallT>0){this.wallT-=t;const X=1-this.wallT/.9,H=Math.sin(X*Math.PI)*1.3;this.vel.y=(H-this.pos.y)/Math.max(t,.001),this.vel.x=this.vel.x*1.004-this.wallN.x*1.6,this.vel.z=this.vel.z*1.004-this.wallN.z*1.6,this.wallT<=0&&(this.vel.y=0)}else this.vel.y-=vt.gravity*t;this.low+=((this.slideT>0?1:0)-this.low)*Math.min(1,t*12);const P=this.mech.lean&&Math.hypot(this.vel.x,this.vel.z)<2.5&&this.slideT<=0?this.leanWant:0;this.lean+=(P-this.lean)*Math.min(1,t*9),po(this.pos,this.vel,t,ye.radius,ye.height-.7*this.low,this.wallT<=0,.45);const g=Math.hypot(this.vel.x,this.vel.z);this.walkPhase+=g*t*1.7,g>.5&&!v&&(this.yaw=Math.atan2(-this.vel.x,-this.vel.z));const _=this.aimTarget(e,n,v,r),C=new R().subVectors(_,a),O=Math.atan2(-C.x,-C.z)+this.errYaw,I=Math.atan2(C.y,Math.hypot(C.x,C.z))+this.errPitch,V=(v?240+360*r:230)*Ci*t,q=os(O,this.aimYaw);this.aimYaw+=Math.max(-V,Math.min(V,q*Math.min(1,t*(v?9+6*r:6))));const W=I-this.aimPitch;if(this.aimPitch+=Math.max(-V,Math.min(V,W*Math.min(1,t*10))),v?this.yaw+=os(this.aimYaw,this.yaw)*Math.min(1,t*8):g<.5&&(this.yaw+=os(this.aimYaw,this.yaw)*Math.min(1,t*4)),this.errT-=t,this.errT<=0){this.errT=.25+Math.random()*.2;const X=(.35+1.7*(1-r))*Ci*(d>20?1.15:1);this.errYaw=qn()*X,this.errPitch=qn()*X*.6}if(!this.gun.reloading&&this.gun.ammo===0&&this.gun.startReload(),!v&&this.unseenT>2&&this.gun.ammo<this.gun.mag*.5&&this.gun.startReload(),v&&this.reactT<=0&&this.gun.canFire()){const X=Math.abs(os(O,this.aimYaw))+Math.abs(I-this.aimPitch),H=Math.max(1.2*Ci,Math.atan2(.45,d));if(X<H){const nt=Math.max(this.gun.def.burst?.1:this.gun.def.fireInterval,.1+(.03+Math.random()*.1)*(1.3-r));this.gun.fire(nt),this.shotsThisPeek++;const rt=(.5+1.6*(1-r)+(g>1?.5:0))*Ci,yt=new R(-Math.sin(this.aimYaw+qn()*rt*.5)*Math.cos(this.aimPitch),Math.sin(this.aimPitch+qn()*rt*.5),-Math.cos(this.aimYaw+qn()*rt*.5)*Math.cos(this.aimPitch)).normalize();return{origin:a,dir:yt}}}return null}onLostSight(t,e){const n=this.brain,s=n.retreatRate(),r=n.repeekRate();if(this.hp<=40&&e.hp>=this.hp){this.startRetreat(t,e);return}if(s!==null&&s>=.55&&e.hp<=65&&this.hp>=45){this.intent="chase",this.goTo(this.lastSeen),this.setState("chase",t);return}this.holdPoint=new R(this.lastSeen.x,this.lastSeen.y+this.holdY(),this.lastSeen.z);const a=r!==null&&r>=.55?3.2:1;this.holdUntil=t+a,this.intent=r!==null&&r>=.55?"holdAngle":"brief",this.setState("hold",t)}startRetreat(t,e){const n=new R(e.pos.x,e.pos.y+1.5,e.pos.z);let s=null,r=-1/0;for(let a=0;a<50;a++){const o=Math.random()*Math.PI*2,l=3+Math.random()*8,c=new R(this.pos.x+Math.cos(o)*l,0,this.pos.z+Math.sin(o)*l);if(!mr(c.x,c.z))continue;const d=new R(c.x,1.5,c.z);if(rn(n,d))continue;const h=c.distanceTo(e.pos)*.5-c.distanceTo(this.pos);h>r&&(r=h,s=c)}s&&(this.goTo(s),this.intent="retreat",this.setState("retreat",t))}decideLean(t){if(!this.mech.lean||!t){this.leanWant=0;return}if(rn(this.eyeAt(0),t)){this.leanWant=this.state==="combat"&&this.hp<60?this.strafeDir>0?.6:-.6:0;return}rn(this.eyeAt(1),t)?this.leanWant=1:rn(this.eyeAt(-1),t)?this.leanWant=-1:this.leanWant=0}think(t,e,n){const s=this.brain,r=e.headPos();if(this.state==="combat"||this.state==="hold"){const a=this.state==="combat"||this.unseenT<1?r:this.holdPoint||(this.spot?this.spot.look:null);this.decideLean(a)}else this.leanWant=0;if(this.state==="combat"&&this.sees){const a=s.avgFireDelay(),o=s.retreatRate(),l=o!==null&&o<=.3?55:35;if(this.hp<=l&&e.hp>this.hp+15){this.startRetreat(t,e);return}if(a!==null&&a<.4&&this.shotsThisPeek>=3&&this.seeT>1.2){this.startRetreat(t,e);return}return}if(this.state==="hold"&&this.holdPoint&&t>this.holdUntil&&this.intent!=="ambush"){this.holdPoint=null,this.intent="search",this.goTo(this.lastSeenTime>-50?this.lastSeen:this.guessPlayer(t)),this.setState("search",t);return}if(this.state==="retreat"&&this.path.length===0){this.holdPoint=this.lastSeenTime>-50?new R(this.lastSeen.x,this.lastSeen.y+this.holdY(),this.lastSeen.z):null,this.holdUntil=t+2.5,this.intent="holdAngle",this.setState("hold",t);return}if(this.state==="travel"&&this.path.length===0){if(this.tactic==="HOLD"&&this.spot){this.intent="ambush",this.holdPoint=null,this.setState("hold",t);return}this.intent="hunt",this.goTo(this.guessPlayer(t));return}if(this.state==="hold"&&this.intent==="ambush"&&t-this.stateT>20){this.intent="hunt",this.goTo(this.guessPlayer(t)),this.setState("travel",t);return}if(this.state==="search"||this.state==="chase"){this.path.length===0&&(this.intent="hunt",this.goTo(this.guessPlayer(t)),this.setState("travel",t));return}this.state==="travel"&&this.tactic!=="HOLD"&&(this.repathT+=.2,this.repathT>3&&this.intent==="hunt"&&this.goTo(this.guessPlayer(t))),(this.state==="travel"||this.state==="hold"&&this.intent==="ambush"&&t-this.stateT>6)&&this.heardPos&&t-this.heardTime<.3&&(this.intent="hunt",this.goTo(this.heardPos),this.setState("travel",t))}followPath(){for(;this.path.length;){const t=this.path[0],e=t.x-this.pos.x,n=t.z-this.pos.z,s=Math.hypot(e,n);if(s<.45){this.path.shift();continue}return new R(e/s,0,n/s)}return new R}movement(t,e,n,s,r){if(this.state==="combat"){this.strafeT-=t,this.strafeT<=0&&(this.strafeT=.35+Math.random()*.6,this.strafeDir=Math.random()<.5?-1:1);const a=new R(s.x,0,s.z).normalize(),o=new R(-a.z,0,a.x).multiplyScalar(this.strafeDir);let l=0;this.tactic==="RUSH"||n.hp<=50?l=r>7?.7:0:r>26?l=.6:r<4&&(l=-.5);const c=this.brain.weaponHabit();n.gun.def.id==="shotgun"||c.n>=30&&c.shotShare>=.35?r<13&&(l=-.9):c.n>=30&&c.rifleAvg>18&&r>10&&this.hp>50&&(l=Math.max(l,.5));const d=this.gun.def.id;d==="shotgun"?l=r>5?.9:0:d==="smg"?l=r>10?.7:l:d==="sniper"&&(l=r<16?-.8:0);const h=o.addScaledVector(a,l),f=this.pos.clone().addScaledVector(h.clone().normalize(),.8);return mr(f.x,f.z)||(this.strafeDir*=-1,this.strafeT=.4),this.unseenT>.8&&(this.setState("search",e),this.goTo(this.lastSeen)),h.lengthSq()>0?h.normalize():h}return this.state==="hold"?new R:this.followPath()}aimTarget(t,e,n,s){if(this.predV=0,this.predConf=0,n){const o=ye.perceptionLag;let l=this.hist[0];for(const w of this.hist)if(w.t<=t-o)l=w;else break;const c=l.p.clone(),d=this.eye,h=new R(c.x-d.x,0,c.z-d.z).normalize(),f=new R(h.z,0,-h.x),m=l.v.dot(f),{v,conf:M}=this.brain.expectedLateral(),p=M*(.45+.55*s);this.predV=v,this.predConf=p;const u=o+.1,b=.1+.25*s,y=(1-p)*m*b+p*v*vt.walk*.85;c.addScaledVector(f,y*u);const x=l.v.dot(h);c.addScaledVector(h,x*u*b);const L=this.brain.symShare("C"),T=L.total>15&&L.share>.22?.08:0;return Math.abs(l.lean)>.3?(c.x+=l.lx,c.z+=l.lz,c.y+=l.h-.15-Math.abs(l.lean)*.06):c.y+=this.aimHead?l.h-.15:l.h*(.62-T),c}if(this.holdPoint&&(this.state==="hold"||t<this.holdUntil))return this.holdPoint;if(this.state==="hold"&&this.intent==="ambush"&&this.spot){const o=this.eye,l=this.brain.bestContactFrom(this.pos,c=>rn(o,c));return l?l.p:this.spot.look}const r=this.eye;if(this.state!=="chase"){const o=this.brain.bestContactFrom(this.pos,l=>l.distanceTo(r)<22&&rn(r,l));if(o&&o.w>1.2)return o.p}return Math.hypot(this.vel.x,this.vel.z)>.5?new R(this.pos.x+this.vel.x*3,1.5,this.pos.z+this.vel.z*3):new R(this.pos.x-Math.sin(this.aimYaw)*5,1.5,this.pos.z-Math.cos(this.aimYaw)*5)}holdY(){const t=this.brain.leanRate();return t!==null&&t>.3?1.55:1.3}intentLabel(t){const e={ambush:["pusuda bekliyor","waiting in ambush"],hunt:["seni arıyor","hunting you"],chase:["peşinde","chasing you"],holdAngle:["köşeyi tutuyor","holding the corner"],brief:["köşeyi tutuyor","holding the corner"],retreat:["siper değiştiriyor","repositioning"],search:["son gördüğü yere gidiyor","checking last sighting"],travel:["yerleşiyor","moving into position"]};let n=this.intent;if(this.state==="combat")return t==="tr"?"çatışmada":"engaging";this.state==="travel"&&(n===""||n==="ambush")&&(n="travel");const s=e[n]||e.travel;return t==="tr"?s[0]:s[1]}}class I0{constructor(){this.pos=new R,this.vel=new R,this.yaw=0,this.pitch=0,this.height=vt.standHeight,this.grounded=!0,this.crouching=!1,this.sliding=!1,this.slideT=0,this.slideCd=0,this.sprinting=!1,this.coyote=0,this.ads=0,this.hp=vt.maxHp,this.alive=!0,this.recoil=0,this.recoilYaw=0,this.guns=[new Oi(On.rifle),new Oi(On.shotgun)],this.cur=0,this.switchT=0,this.bob=0,this.landKick=0,this.sens=.0022,this.airTime=0,this.dashT=0,this.dashCd=0,this.airDashUsed=!1,this.wallrun=!1,this.wallT=0,this.wallN=new R,this.wallCd=0,this.lastWallN=new R,this.roll=0,this.lookDX=0,this.lookDY=0,this.event=null,this.mech={wallrun:!0,dash:!0,slide:!0,slideHop:!0,lean:!0},this.adsSensMul=.6,this.lean=0,this.leanX=0,this.leanZ=0,this.justLanded=0}get gun(){return this.guns[this.cur]}reset(){this.pos.copy(_0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.height=vt.standHeight,this.crouching=this.sliding=this.sprinting=this.wallrun=!1,this.hp=vt.maxHp,this.alive=!0,this.recoil=this.recoilYaw=0,this.ads=0,this.dashT=this.dashCd=0,this.switchT=0,this.lean=this.leanX=this.leanZ=0,this.cur=0;for(const t of this.guns)t.refill()}get eye(){return new R(this.pos.x+this.leanX,this.pos.y+this.height-.12-Math.abs(this.lean)*.06,this.pos.z+this.leanZ)}headPos(){return new R(this.pos.x+this.leanX,this.pos.y+this.height-.15-Math.abs(this.lean)*.06,this.pos.z+this.leanZ)}forward(t=new R){const e=this.pitch+this.recoil*Math.PI/180,n=this.yaw+this.recoilYaw*Math.PI/180,s=Math.cos(e);return t.set(-Math.sin(n)*s,Math.sin(e),-Math.cos(n)*s)}horizSpeed(){return Math.hypot(this.vel.x,this.vel.z)}spread(){const t=this.gun.def,e=this.horizSpeed();let n=t.hipSpread+(t.adsSpread-t.hipSpread)*this.ads;return n+=t.moveSpread*Math.min(1,e/vt.sprint)*(1-.6*this.ads),!this.grounded&&!this.wallrun&&(n+=t.airSpread),(this.sliding||this.wallrun)&&(n+=t.slideSpread*(1-.5*this.ads)),this.crouching&&!this.sliding&&(n*=.8),n}setLoadout(t){this.guns=t.map(e=>new Oi(On[e])),this.cur=0}switchTo(t){return t>=this.guns.length||t===this.cur||this.switchT>0?!1:(this.gun.cancelReload(),this.cur=t,this.switchT=this.gun.def.swapTime??.32,!0)}update(t,e,n){this.event=null;const s=this.sens*(1-(1-this.adsSensMul)*this.ads);if(this.yaw-=e.lookX*s,this.pitch-=e.lookY*s,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch)),this.lookDX+=(e.lookX-this.lookDX)*Math.min(1,t*20),this.lookDY+=(e.lookY-this.lookDY)*Math.min(1,t*20),this.recoil=Math.max(0,this.recoil-t*(5+this.recoil*7)),this.recoilYaw*=Math.max(0,1-t*8),this.landKick=Math.max(0,this.landKick-t*4),this.switchT=Math.max(0,this.switchT-t),!this.alive){this.vel.x*=.9,this.vel.z*=.9,this.vel.y-=vt.gravity*t;const g=po(this.pos,this.vel,t,vt.radius,.5,this.grounded,0);this.grounded=g.grounded,this.height=Math.max(.35,this.height-t*3),this.roll+=(.35-this.roll)*Math.min(1,t*3);return}let r=n?0:e.fwd,a=n?0:e.right;const o=Math.hypot(r,a);o>1&&(r/=o,a/=o);const l=Math.sin(this.yaw),c=Math.cos(this.yaw),d=-l*r+c*a,h=-c*r-l*a,f=this.gun.def,m=e.ads&&!this.gun.reloading&&!n&&this.switchT<=0;if(this.ads+=((m?1:0)-this.ads)*Math.min(1,t/(f.adsTime*.45)),this.sprinting=!n&&e.sprint&&r>.3&&!m&&!this.crouching&&this.grounded&&!this.sliding,this.slideCd=Math.max(0,this.slideCd-t),this.dashCd=Math.max(0,this.dashCd-t),this.wallCd=Math.max(0,this.wallCd-t),this.grounded&&(this.airDashUsed=!1,this.lastWallN.set(0,0,0)),!n&&this.mech.dash&&e.dashPressed&&this.dashCd<=0&&!(this.airDashUsed&&!this.grounded)){let g=d,_=h;o<.1&&(g=-l,_=-c);const C=Math.hypot(g,_)||1,O=Math.max(vt.dashSpeed,this.horizSpeed());this.vel.x=g/C*O,this.vel.z=_/C*O,this.grounded||(this.vel.y=Math.max(this.vel.y,.5),this.airDashUsed=!0),this.dashT=vt.dashTime,this.dashCd=vt.dashCooldown,this.wallrun=!1,this.event="dash"}this.dashT>0&&(this.dashT-=t);const v=this.horizSpeed();this.justLanded=Math.max(0,this.justLanded-t);const M=this.grounded&&!this.sliding&&this.slideCd<=0&&v>vt.walk*.9;if(!n&&this.mech.slide&&M&&(e.crouchPressed||e.crouch&&this.justLanded>0&&v>vt.walk+1)){this.sliding=!0,this.slideT=vt.slideTime;const g=Math.min(vt.maxSpeed,v>=vt.slideSpeed-.5?this.mech.slideHop?v+vt.slideBonus:vt.slideSpeed:Math.max(v,vt.slideSpeed)),_=v||1;this.vel.x=this.vel.x/_*g,this.vel.z=this.vel.z/_*g,this.sprinting=!1,this.event="slide"}const p=!n&&e.crouch;let u=vt.standHeight;if(this.sliding?u=vt.slideHeight:p&&(u=vt.crouchHeight),u>this.height&&us(this.pos.x,this.pos.y,this.pos.z,vt.radius,u)&&(u=this.height),this.crouching=!this.sliding&&u<vt.standHeight-.1,this.height+=(u-this.height)*Math.min(1,t*14),this.mech.wallrun&&!this.grounded&&!this.wallrun&&!n&&this.airTime>.06&&r>.2&&this.wallCd<=0&&this.horizSpeed()>5){const g=uo(this.pos.x,this.pos.y,this.pos.z,vt.radius);if(g&&!g.equals(this.lastWallN)){const _=this.vel.x*g.x+this.vel.z*g.z,C=this.vel.x-_*g.x,O=this.vel.z-_*g.z,I=Math.hypot(C,O);if(I>2.5){const V=Math.min(vt.maxSpeed,Math.max(I,vt.wallrunMinSpeed));this.vel.x=C/I*V,this.vel.z=O/I*V,this.vel.y=Math.min(2.4,Math.max(this.vel.y,1.2)),this.wallrun=!0,this.wallT=vt.wallrunTime,this.wallN.copy(g),this.lastWallN.copy(g),this.sliding=!1,this.airDashUsed=!1,this.event="wallrun"}}}if(this.grounded?this.coyote=vt.coyote:this.coyote-=t,!n&&e.jumpPressed){if(this.wallrun){const g=this.horizSpeed();this.vel.x=this.vel.x/(g||1)*g*.95+this.wallN.x*vt.wallJumpOut,this.vel.z=this.vel.z/(g||1)*g*.95+this.wallN.z*vt.wallJumpOut,this.vel.y=vt.wallJumpUp,this.wallrun=!1,this.wallCd=.25,this.event="walljump"}else if(this.coyote>0){if(this.vel.y=vt.jumpVel,this.coyote=0,this.grounded=!1,this.sliding&&(this.sliding=!1,this.slideCd=.12,!this.mech.slideHop)){const g=this.horizSpeed();g>vt.sprint&&(this.vel.x*=vt.sprint/g,this.vel.z*=vt.sprint/g)}this.event="jump"}}if(this.wallrun){this.wallT-=t;const g=uo(this.pos.x,this.pos.y,this.pos.z,vt.radius+.1,1);this.wallT<=0||!g||!g.equals(this.wallN)||r<=0||this.grounded?(this.wallrun=!1,this.wallCd=.35):(this.vel.y-=vt.wallrunGravity*t,this.vel.x-=this.wallN.x*2*t,this.vel.z-=this.wallN.z*2*t)}else if(this.sliding){this.slideT-=t;const g=this.horizSpeed(),_=Math.max(0,g-vt.slideFriction*t*(1+g*.12));g>0&&(this.vel.x*=_/g,this.vel.z*=_/g),this.vel.x+=d*t*7,this.vel.z+=h*t*7,(this.slideT<=0||_<vt.crouch)&&(this.sliding=!1,this.slideCd=vt.slideCooldown)}else if(!(this.dashT>0)){let g=vt.walk;this.sprinting&&(g=vt.sprint),this.crouching&&(g=vt.crouch),this.ads>.5&&(g=Math.min(g,vt.ads)),this.gun.reloading&&!this.sprinting&&(g*=.92),Math.abs(this.lean)>.3&&(g=Math.min(g,vt.walk*.75));const _=this.horizSpeed();if(this.grounded)if(_>g+.3){const C=Math.max(g,_-vt.overspeedDecel*t*(o>0?1:2.5));let O=this.vel.x/_,I=this.vel.z/_;if(o>0){O+=d*t*6,I+=h*t*6;const V=Math.hypot(O,I)||1;O/=V,I/=V}this.vel.x=O*C,this.vel.z=I*C}else{const C=d*g,O=h*g,I=(o>0?vt.groundAccel:vt.friction*6)*t,V=C-this.vel.x,q=O-this.vel.z,W=Math.hypot(V,q);W<=I?(this.vel.x=C,this.vel.z=O):(this.vel.x+=V/W*I,this.vel.z+=q/W*I)}else if(o>0){this.vel.x+=d*vt.airAccel*t,this.vel.z+=h*vt.airAccel*t;const C=this.horizSpeed(),O=Math.max(_,g);C>O&&(this.vel.x*=O/C,this.vel.z*=O/C)}}this.wallrun||(this.vel.y-=vt.gravity*t);const b=this.horizSpeed();b>vt.maxSpeed&&(this.vel.x*=vt.maxSpeed/b,this.vel.z*=vt.maxSpeed/b);const y=!this.grounded,x=this.vel.y,L=po(this.pos,this.vel,t,vt.radius,this.height,this.grounded,vt.stepHeight);this.grounded=L.grounded,this.grounded&&(this.wallrun=!1),this.grounded&&y&&this.airTime>.2&&(this.justLanded=.15),this.grounded&&y&&x<-4&&(this.landKick=Math.min(1,-x/14),this.event||(this.event="land")),this.grounded?this.airTime=0:this.airTime+=t;const T=this.mech.lean&&!n&&this.grounded&&!this.sliding&&!this.sprinting?e.lean:0;this.lean+=(T-this.lean)*Math.min(1,t*11),Math.abs(this.lean)<.002&&(this.lean=0);{const g=Math.cos(this.yaw),_=-Math.sin(this.yaw);let C=.42*this.lean;if(C!==0){const O=new R(this.pos.x,this.pos.y+this.height-.15,this.pos.z),I=new R(g*Math.sign(C),0,_*Math.sign(C)),V=fo(O,I,Math.abs(C)+.15);V&&(C=Math.sign(C)*Math.max(0,V.t-.15))}this.leanX=g*C,this.leanZ=_*C}let w=-this.lean*.2;if(this.sliding&&(w=-.07),this.wallrun){const g=Math.cos(this.yaw),_=-Math.sin(this.yaw);w=(this.wallN.x*g+this.wallN.z*_)*.16}this.roll+=(w-this.roll)*Math.min(1,t*9);const P=this.horizSpeed();this.grounded&&!this.sliding&&P>.5&&(this.bob+=t*P*1.35),this.wallrun&&(this.bob+=t*P*1.5)}}const Xc="gozcu.rekor.v1";function Yc(){try{return JSON.parse(localStorage.getItem(Xc)||"{}")}catch{return{}}}const Pi={min:new R,max:new R};function U0(){return Math.sqrt(-2*Math.log(Math.random()+1e-9))*Math.cos(2*Math.PI*Math.random())}function sc(i,t){if(t<=i.falloffStart)return 1;if(t>=i.falloffEnd)return i.minDmgMul;const e=(t-i.falloffStart)/(i.falloffEnd-i.falloffStart);return 1+(i.minDmgMul-1)*e}class N0{constructor(t,e,n,s){this.brain=t,this.view=e,this.sfx=n,this.ev=s,this.player=new I0,this.phase="menu",this.phaseT=0,this.roundT=0,this.round=0,this.pScore=0,this.bScore=0,this.timeScale=1,this.slowT=0,this.map="avlu",this.mode="classic",this.loadout=["rifle","shotgun"],this.lives=3,this.roundWeapon="rifle",this.stats=this.freshStats(),this.death=null,this.roundBShots=0,this.roundBHits=0,this.symT=0,this.laneDone=!1,this.pSees=!1,this.pUnseenT=99,this.fireDelayStart=null,this.retreatCheck=null,this.stepT=0,this.hearT=0,this.lastCount=-1,this.lastInsights=!1,this.bot=new D0(t)}freshStats(){return{pShots:0,pHits:0,pHeads:0,bShots:0,bHits:0,roundsBotHitRate:[]}}setMap(t){this.map=t,Hc(t),this.brain.setMap(t),this.view.buildMap()}get endless(){return co.find(t=>t.id===this.mode).endless}startMatch(t=this.map,e=this.mode,n=this.loadout){t!==this.map&&this.setMap(t),this.mode=e,this.loadout=n,this.lives=3,this.round=0,this.pScore=this.bScore=0,this.stats=this.freshStats(),this.nextRound()}nextRound(){this.round++,this.mode==="rotation"?(this.roundWeapon=Er[Math.floor(Math.random()*Er.length)],this.player.setLoadout([this.roundWeapon]),this.bot.gun=new Oi(On[this.roundWeapon])):(this.player.setLoadout(this.loadout),this.bot.gun=new Oi(On.rifle)),this.brain.modeBonus=this.mode==="streak"?this.pScore*.07:this.mode==="lives"?this.pScore*.04:0,this.player.reset(),this.bot.reset(0),this.mode==="oneshot"&&(this.player.hp=1,this.bot.hp=1),this.view.resetRound(),this.roundT=0,this.laneDone=!1,this.symT=0,this.pSees=!1,this.pUnseenT=99,this.fireDelayStart=null,this.retreatCheck=null,this.death=null,this.roundBShots=this.roundBHits=0,this.timeScale=1,this.setPhase("countdown"),this.lastCount=-1,this.ev.roundStart(this.round)}setPhase(t){this.phase=t,this.phaseT=0}get frozen(){return this.phase!=="live"}step(t,e){if(this.phase==="menu"||this.phase==="matchEnd")return;this.phaseT+=t,this.slowT>0&&(this.slowT-=t,this.slowT<=0&&(this.timeScale=1));const n=t*this.timeScale;if(this.phase==="countdown"){const a=Math.ceil(Jn.countdown-this.phaseT);a!==this.lastCount&&(this.lastCount=a,a>0&&(this.ev.countdown(a),this.sfx.beep(!1))),this.phaseT>=Jn.countdown&&(this.setPhase("live"),this.ev.countdown(0),this.sfx.beep(!0))}const s=this.player;switch(s.update(n,e,this.frozen),s.event){case"slide":this.sfx.slide();break;case"dash":this.sfx.dash();break;case"wallrun":this.sfx.slide();break;case"walljump":case"jump":this.sfx.jump();break;case"land":this.sfx.land();break}for(let a=0;a<s.guns.length;a++)a===s.cur?s.guns[a].update(n):s.guns[a].cooldown=Math.max(0,s.guns[a].cooldown-n);if(this.phase==="live"&&s.alive){if(e.weaponSlot>=0){const l=e.weaponSlot===2?1-s.cur:e.weaponSlot;s.switchTo(l)&&this.sfx.swap()}e.reloadPressed&&s.switchT<=0&&s.gun.startReload()&&this.sfx.reload(s.gun.def.id);const a=s.gun.def,o=s.gun;a.burst?(e.firePressed&&o.burstLeft===0&&s.switchT<=0&&(o.canFire()?o.burstLeft=a.burst:this.playerFire()),o.burstLeft>0&&o.cooldown<=0&&(o.ammo<=0||o.reloading?o.burstLeft=0:(o.burstLeft--,this.playerFire(o.burstLeft>0?a.burstGap:a.fireInterval)))):(a.auto&&e.fireHeld||e.firePressed)&&s.switchT<=0&&this.playerFire(),this.roundT+=n}const r=this.bot.update(n,this.roundT,s,this.frozen||!s.alive);if(this.bot.moveEvent&&this.bot.pos.distanceTo(s.pos)<25){const a=this.bot.pos.clone().setY(.3);this.bot.moveEvent==="dash"?this.sfx.dashAt(a):this.sfx.slideAt(a)}if(this.bot.moveEvent=null,r&&this.phase==="live"&&this.botFire(r.origin,r.dir),this.phase==="live"){this.observe(n);const a=Math.hypot(this.bot.vel.x,this.bot.vel.z);if(this.stepT-=n,this.bot.alive&&a>2.5&&this.stepT<=0&&(this.stepT=a>6?.3:.42,this.bot.pos.distanceTo(s.pos)<24&&this.sfx.step(this.bot.pos.clone().setY(.2))),this.roundT>=Jn.roundTime){const o=s.hp>this.bot.hp?!0:s.hp<this.bot.hp?!1:null;this.endRound(o,"time")}}if(this.phase==="roundEnd"&&this.phaseT>=Jn.roundEnd+(this.lastInsights?1.2:0)+(this.death?.8:0))if(this.matchOver()){this.setPhase("matchEnd"),this.brain.endMatch(),this.brain.modeBonus=0;const a=this.endless,o=Yc(),l=o[this.mode]||0,c=a&&this.pScore>l;if(c){o[this.mode]=this.pScore;try{localStorage.setItem(Xc,JSON.stringify(o))}catch{}}this.ev.matchEnd(a?this.pScore>0:this.pScore>this.bScore,this.stats,{mode:this.mode,endless:a,score:this.pScore,best:Math.max(l,this.pScore),newRecord:c})}else this.nextRound()}matchOver(){return this.mode==="streak"?this.bScore>0:this.mode==="lives"?this.lives<=0:this.pScore>=Jn.winRounds||this.bScore>=Jn.winRounds}endRound(t,e){if(this.phase!=="live")return;this.setPhase("roundEnd"),t===!0?this.pScore++:t===!1&&(this.bScore++,this.lives--);const n=this.bot,s=t===!1?1:t===null?.5:n.dmgDealt/Math.max(1,n.dmgDealt+n.dmgTaken)*.6;this.brain.rewardTactic(n.tactic,s),this.brain.endRound(t),this.stats.roundsBotHitRate.push(this.roundBShots?this.roundBHits/this.roundBShots:0);const r=this.brain.freshInsights(2);this.lastInsights=r.length>0,this.slowT=e==="time"?0:1.1,this.timeScale=e==="time"?1:.25,this.sfx.sting(t!==!1),this.ev.roundEnd({round:this.round,playerWon:t,reason:e,tactic:n.tactic,lane:n.lane,insights:r,pScore:this.pScore,bScore:this.bScore,death:e==="death"?this.death:null})}playerFire(t){const e=this.player,n=e.gun,s=n.def;if(!n.canFire()){n.ammo===0&&!n.reloading&&n.cooldown<=0&&(this.sfx.dry(),n.startReload()&&this.sfx.reload(s.id));return}n.fire(t),this.stats.pShots++;const r=e.eye,a=e.forward(),o=e.spread()*Math.PI/180,l=this.bot;this.brain.recordWeaponUse(s.id,r.distanceTo(l.pos)),e.recoil+=s.recoil*(1-.4*e.ads)*(.85+Math.random()*.3),e.recoilYaw+=U0()*s.recoilYaw*(1-.4*e.ads),this.view.muzzleFlash(s.id),this.view.addShake(s.id==="shotgun"?.35:.05),this.sfx.shot(void 0,s.id),this.brain.setWeapon(s.id),this.bot.hear(e.pos,1.5,this.roundT),this.fireDelayStart!==null&&(this.brain.recordFireDelay(this.roundT-this.fireDelayStart),this.fireDelayStart=null);const c=new R(0,1,0),d=new R().crossVectors(a,c).normalize(),h=new R().crossVectors(d,a).normalize();let f=0,m=!1,v=null;const M=this.view.muzzleWorld(e.ads);for(let p=0;p<s.pellets;p++){const u=a.clone(),b=Math.random()*Math.PI*2,y=Math.sqrt(Math.random())*Math.tan(o/2);u.addScaledVector(d,Math.cos(b)*y).addScaledVector(h,Math.sin(b)*y).normalize();const x=fo(r,u,s.range);let L=x?x.t:s.range,T=null;if(l.alive){const P=Zl(r,u,l.headCenter(),ye.headR,L);P!==null&&(T="head",L=P),Pi.min.set(l.pos.x-ye.radius,l.pos.y,l.pos.z-ye.radius),Pi.max.set(l.pos.x+ye.radius,l.bodyTop(),l.pos.z+ye.radius);const g=br(r,u,Pi,L);g&&g.t<L&&(T="body",L=g.t)}const w=r.clone().addScaledVector(u,L);if((p<3||s.pellets===1)&&this.view.tracer(M,w,!1),T){const P=(T==="head"?s.headDmg:s.bodyDmg)*sc(s,L);f+=P,T==="head"&&(m=!0),v=w,this.view.impact(w,null,!0)}else x&&(this.view.impact(w,x.normal,!1),p===0&&w.distanceTo(l.pos)<6&&this.sfx.impact(w))}if(f>0&&v){const p=this.mode==="oneshot"?Math.max(1,Math.round(f)):Math.round(f);l.hp-=p,l.dmgTaken+=p,this.stats.pHits++,m&&this.stats.pHeads++,this.view.botHit();const u=l.hp<=0;this.sfx.hit(u,m),this.ev.hitMarker(u,m),this.ev.damageNumber(v,p,m,u),l.hear(e.pos,.6,this.roundT),l.onHit(this.roundT),u&&(l.alive=!1,this.endRound(!0,"kill"))}n.ammo===0&&n.startReload()&&this.sfx.reload(s.id)}botFire(t,e){const n=this.player,s=this.bot,r=s.gun.def;this.stats.bShots++,this.roundBShots++,this.sfx.shot(t,r.id==="sniper"?"bot-sniper":"bot");const a=fo(t,e,r.range);let o=a?a.t:r.range,l=null;const c=n.headPos(),d=Zl(t,e,c,.2,o);d!==null&&(l="head",o=d),Pi.min.set(n.pos.x-.32,n.pos.y,n.pos.z-.32),Pi.max.set(n.pos.x+.32,n.pos.y+n.height-.33,n.pos.z+.32);const h=br(t,e,Pi,o);h&&h.t<o&&(l="body",o=h.t);const f=t.clone().addScaledVector(e,o),m=t.clone().add(new R(-Math.sin(s.aimYaw-.35)*.5,-.12,-Math.cos(s.aimYaw-.35)*.5));if(this.view.tracer(m,f,!0),l&&n.alive){let v=Math.round((l==="head"?r.headDmg:r.bodyDmg)*sc(r,o));r.pellets>1&&(v=Math.round(v*r.pellets*Math.max(.15,Math.min(.85,1.1-o/14)))),n.hp=Math.max(0,n.hp-v),s.dmgDealt+=v,this.stats.bHits++,this.roundBHits++,this.sfx.hurt(l==="head"),this.view.addShake(l==="head"?.7:.45);const M=Math.atan2(-(s.pos.x-n.pos.x),-(s.pos.z-n.pos.z));this.ev.damaged(M-n.yaw,n.hp),n.hp<=65&&n.hp>0&&!this.retreatCheck&&(this.retreatCheck={t:this.roundT,d:n.pos.distanceTo(s.pos)}),n.hp<=0&&(n.alive=!1,this.death={dist:t.distanceTo(n.pos),head:l==="head",predV:s.predV,predConf:s.predConf,botHp:Math.max(0,s.hp)},this.endRound(!1,"death"))}else{a&&this.view.impact(f,a.normal,!1);const M=new R().subVectors(n.eye,t).dot(e);if(M>0&&M<o+1){const p=t.clone().addScaledVector(e,M);p.distanceTo(n.eye)<1.6&&this.sfx.whiz(p)}}}observe(t){const e=this.player,n=this.bot,s=this.brain;if(!e.alive||!n.alive)return;s.setWeapon(e.gun.def.id);const r=this.roundT<10?0:this.roundT<25?1:2;if(s.recordPosition(e.pos.x,e.pos.z,r,t),!this.laneDone&&e.pos.z<9&&(this.laneDone=!0,s.recordLane(Uo(e.pos.x))),n.sees){if(this.symT+=t,this.symT>=.15){this.symT=0;let m;if(!e.grounded&&!e.wallrun)m="J";else if(e.sliding||e.crouching)m="C";else{const v=e.pos.x-n.pos.x,M=e.pos.z-n.pos.z,p=Math.hypot(v,M)||1,u=e.vel.x*(M/p)+e.vel.z*(-v/p);m=u<-1.8?"L":u>1.8?"R":"S"}s.pushSym(m)}}else this.symT=.1;const a=e.eye,o=n.headCenter(),l=new R().subVectors(o,a),c=l.length(),f=e.forward().dot(l.clone().divideScalar(c))>Math.cos(40*Math.PI/180)&&rn(a,o);if(f&&!this.pSees&&this.pUnseenT>1.5&&(this.fireDelayStart=this.roundT),f?this.pUnseenT=0:this.pUnseenT+=t,this.pSees=f,this.fireDelayStart!==null&&this.roundT-this.fireDelayStart>2.5&&(this.fireDelayStart=null),this.retreatCheck&&this.roundT-this.retreatCheck.t>1.4){const m=e.pos.distanceTo(n.pos),v=m-this.retreatCheck.d>1.8||!n.sees&&m>this.retreatCheck.d+.3;s.recordRetreat(v),this.retreatCheck=null}this.hearT-=t,this.hearT<=0&&(e.sprinting||e.sliding||e.wallrun||e.dashT>0)&&e.pos.distanceTo(n.pos)<ye.hearSprint&&(this.hearT=.5,n.hear(e.pos,2,this.roundT))}}const Ar=[{id:"forward",tr:"İleri",en:"Forward",def:"KeyW"},{id:"back",tr:"Geri",en:"Back",def:"KeyS"},{id:"left",tr:"Sol",en:"Left",def:"KeyA"},{id:"right",tr:"Sağ",en:"Right",def:"KeyD"},{id:"jump",tr:"Zıpla / duvardan sıçra",en:"Jump / wall-jump",def:"Space"},{id:"crouch",tr:"Eğil / kay",en:"Crouch / slide",def:"KeyC"},{id:"sprint",tr:"Koş",en:"Sprint",def:"ShiftLeft"},{id:"dash",tr:"Atılma (dash)",en:"Dash",def:"KeyF"},{id:"leanL",tr:"Sola yat",en:"Lean left",def:"KeyQ"},{id:"leanR",tr:"Sağa yat",en:"Lean right",def:"KeyE"},{id:"fire",tr:"Ateş",en:"Fire",def:"Mouse0"},{id:"ads",tr:"Nişan al",en:"Aim",def:"Mouse2"},{id:"reload",tr:"Doldur",en:"Reload",def:"KeyR"},{id:"weapon1",tr:"Tüfek",en:"Rifle",def:"Digit1"},{id:"weapon2",tr:"Pompalı",en:"Shotgun",def:"Digit2"},{id:"panel",tr:"Nöbetçi göstergesi",en:"Sentinel panel",def:"KeyG"}],$c="gozcu.tuslar.v1";function qc(){const i={};for(const t of Ar)i[t.id]=t.def;return i}function F0(){const i=qc();try{const t=JSON.parse(localStorage.getItem($c)||"{}");for(const e of Ar)typeof t[e.id]=="string"&&(i[e.id]=t[e.id])}catch{}return i}function rc(i){try{localStorage.setItem($c,JSON.stringify(i))}catch{}}function ma(i,t){const e={Mouse0:["Sol tık","LMB"],Mouse1:["Orta tık","MMB"],Mouse2:["Sağ tık","RMB"],Mouse3:["Fare 4","Mouse 4"],Mouse4:["Fare 5","Mouse 5"]};return e[i]?t==="tr"?e[i][0]:e[i][1]:i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"Num "+i.slice(6):{Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Tab:"Tab",CapsLock:"Caps",Backquote:"`",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",Enter:"Enter"}[i]||i}const mo=[{id:"raw",name:"Nöbetçi",yaw:0},{id:"cs2",name:"CS2 / CS:GO",yaw:.022},{id:"apex",name:"Apex Legends",yaw:.022},{id:"valorant",name:"Valorant",yaw:.07},{id:"ow2",name:"Overwatch 2",yaw:.0066},{id:"cod",name:"Call of Duty (MW / Warzone)",yaw:.0066}];function O0(){return{fwd:0,right:0,sprint:!1,crouch:!1,crouchPressed:!1,jumpPressed:!1,firePressed:!1,fireHeld:!1,ads:!1,reloadPressed:!1,dashPressed:!1,weaponSlot:-1,lean:0,lookX:0,lookY:0}}class k0{constructor(t){this.el=t,this.down=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.locked=!1,this.wheel=0,this.binds=F0(),this.modes={crouchToggle:!1,adsToggle:!1,leanToggle:!1,autoSprint:!1},this.crouchOn=!1,this.adsOn=!1,this.leanOn=0,this.capture=null,this.onKey=null,window.addEventListener("keydown",n=>{if(this.capture){n.preventDefault();const s=this.capture;this.capture=null,s(n.code);return}this.locked&&!["F11","F12"].includes(n.code)&&n.preventDefault(),n.repeat||this.press(n.code),this.down.add(n.code)}),window.addEventListener("keyup",n=>this.down.delete(n.code)),window.addEventListener("blur",()=>this.down.clear());const e=n=>{const s="Mouse"+n.button;if(this.capture){n.preventDefault();const r=this.capture;this.capture=null,r(s);return}this.locked&&(n.preventDefault(),this.press(s),this.down.add(s))};window.addEventListener("mousedown",e),window.addEventListener("mouseup",n=>this.down.delete("Mouse"+n.button)),t.addEventListener("contextmenu",n=>n.preventDefault()),window.addEventListener("wheel",n=>{this.locked&&Math.abs(n.deltaY)>5&&(this.wheel=1)}),window.addEventListener("mousemove",n=>{this.locked&&(Math.abs(n.movementX)>600||Math.abs(n.movementY)>600||(this.mouseDX+=n.movementX,this.mouseDY+=n.movementY))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||this.down.clear()})}press(t){this.pressed.add(t),this.onKey?.(t)}held(t){return this.down.has(this.binds[t])}hit(t){return this.pressed.has(this.binds[t])}resetToggles(){this.crouchOn=this.adsOn=!1,this.leanOn=0}requestLock(){try{const t=this.el.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>this.el.requestPointerLock())}catch{this.el.requestPointerLock()}}sample(){const t=this.modes;t.crouchToggle&&this.hit("crouch")&&(this.crouchOn=!this.crouchOn),t.adsToggle&&this.hit("ads")&&(this.adsOn=!this.adsOn),t.leanToggle&&(this.hit("leanL")&&(this.leanOn=this.leanOn===-1?0:-1),this.hit("leanR")&&(this.leanOn=this.leanOn===1?0:1));const e=(this.held("forward")?1:0)-(this.held("back")?1:0),n={fwd:e,right:(this.held("right")?1:0)-(this.held("left")?1:0),sprint:t.autoSprint?e>0:this.held("sprint"),crouch:t.crouchToggle?this.crouchOn:this.held("crouch"),crouchPressed:this.hit("crouch"),jumpPressed:this.hit("jump"),firePressed:this.hit("fire"),fireHeld:this.held("fire"),ads:t.adsToggle?this.adsOn:this.held("ads"),reloadPressed:this.hit("reload"),dashPressed:this.hit("dash"),weaponSlot:this.hit("weapon1")?0:this.hit("weapon2")?1:this.wheel?2:-1,lean:t.leanToggle?this.leanOn:(this.held("leanR")?1:0)-(this.held("leanL")?1:0),lookX:this.mouseDX,lookY:this.mouseDY};return this.pressed.clear(),this.wheel=0,this.mouseDX=this.mouseDY=0,n}}function z0(){try{const t=new URLSearchParams(location.search).get("lang");if(t==="en"||t==="tr")return t;const e=localStorage.getItem("gozcu.lang");if(e==="en"||e==="tr")return e}catch{}return(document.referrer||"").includes("/en/")?"en":(navigator.language||"tr").toLowerCase().startsWith("tr")?"tr":"en"}let Kt=z0();function Kc(i){Kt=i,document.documentElement.lang=i;try{localStorage.setItem("gozcu.lang",i)}catch{}}const pt=(i,t)=>Kt==="tr"?i:t,jc=(()=>{try{const i=new URLSearchParams(location.search).get("api");if(i&&/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(i))return i}catch{}return"https://api.kheshig.studio"})();async function B0(i){const t=await fetch(`${jc}/v1/scores?game=nobetci&mode=${encodeURIComponent(i)}`),e=await t.json();if(!t.ok||!e.ok)throw new Error(e.message||"hata");return e.scores}async function H0(i){const t=await fetch(`${jc}/v1/scores`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({game:"nobetci",...i})}),e=await t.json().catch(()=>({}));if(!t.ok||!e.ok)throw new Error(e.message||"Gönderilemedi.");return e.rank}function ac(){try{return localStorage.getItem("gozcu.isim")||""}catch{return""}}function V0(i){try{localStorage.setItem("gozcu.isim",i)}catch{}}const Z=i=>document.getElementById(i),Zc={all:{wallrun:!0,dash:!0,slide:!0,slideHop:!0,lean:!0},tactical:{wallrun:!1,dash:!1,slide:!1,slideHop:!1,lean:!0},cod:{wallrun:!1,dash:!1,slide:!0,slideHop:!1,lean:!1},movement:{wallrun:!0,dash:!0,slide:!0,slideHop:!0,lean:!1}};function Jc(i){const t=mo.find(e=>e.id===i.sensGame)||mo[0];return t.yaw===0?.0022*i.sensNum:t.yaw*i.sensNum*Math.PI/180}function G0(){const i={sensGame:"raw",sensNum:1,dpi:800,adsMul:.6,mech:{...Zc.all},modes:{crouchToggle:!1,adsToggle:!1,leanToggle:!1,autoSprint:!1},learn:"normal",mode:"classic",w1:"rifle",w2:"shotgun",ch:{color:"#16150f",size:9,gap:6,thick:2,dot:!1,dynamic:!0,outline:!0},fov:103,volume:.7,live:!0,quality:"high",scale:1,fps:!1,map:"avlu",difficulty:"normal"};try{const t=JSON.parse(localStorage.getItem("gozcu.ayar")||"{}");return typeof t.sens=="number"&&t.sensNum===void 0&&(t.sensNum=t.sens),t.fov!==void 0&&t.fov<90&&t.mech===void 0&&(t.fov=103),delete t.sens,{...i,...t,mech:{...i.mech,...t.mech||{}},modes:{...i.modes,...t.modes||{}},ch:{...i.ch,...t.ch||{}}}}catch{return i}}function Qe(i){try{localStorage.setItem("gozcu.ayar",JSON.stringify(i))}catch{}}class W0{constructor(t,e){this.brain=t,this.settings=e,this.hitT=0,this.dmgT=0,this.msgT=0,this.liveT=0,this.onPlay=()=>{},this.onResume=()=>{},this.onSettings=()=>{},this.onReset=()=>{},this.onMenu=()=>{},this.fillSelects=()=>{},this.pending=null,this.lastSent="",this.input=null,this.applyTexts(),Z("btn-play").onclick=()=>this.onPlay(),Z("btn-again").onclick=()=>this.onPlay(),Z("btn-notebook").onclick=()=>this.openNotebook(),Z("btn-notebook2").onclick=()=>this.openNotebook(),Z("btn-settings").onclick=()=>this.show("settings",!0),Z("btn-lang").onclick=()=>{Kc(Kt==="tr"?"en":"tr"),this.applyTexts(),Z("set-sensgame").options[0].textContent=pt("Nöbetçi (kendi)","Nöbetçi (native)")},Z("nb-close").onclick=()=>this.show("notebook",!1),Z("set-close").onclick=()=>this.show("settings",!1),Z("btn-menu").onclick=()=>this.onMenu(),Z("pause").onclick=()=>this.onResume(),Z("nb-reset").onclick=()=>{confirm(pt("Nöbetçi seni unutacak. Emin misin?","The Sentinel will forget you. Are you sure?"))&&(this.onReset(),this.renderNotebook())};const n=(g,_,C)=>{const O=Z(g);O.value=String(this.settings[_]);const I=Z(g+"-v");I.textContent=C(Number(O.value)),O.oninput=()=>{this.settings[_]=Number(O.value),I.textContent=C(Number(O.value)),Qe(this.settings),this.onSettings(this.settings)}};n("set-fov","fov",g=>`${g}°`),n("set-adsmul","adsMul",g=>`×${g.toFixed(2)}`);const s=Z("set-sensgame");s.innerHTML=mo.map(g=>`<option value="${g.id}">${g.id==="raw"?pt("Nöbetçi (kendi)","Nöbetçi (native)"):g.name}</option>`).join(""),s.value=this.settings.sensGame;const r=Z("set-sensnum"),a=Z("set-dpi");r.value=String(this.settings.sensNum),a.value=String(this.settings.dpi);const o=()=>{const g=Jc(this.settings),_=2*Math.PI/g/Math.max(1,this.settings.dpi)*2.54;Z("set-cm").textContent=`${_.toFixed(1)} cm/360°`,Z("set-sens-info").textContent=`${(g*180/Math.PI).toFixed(4)}°/${pt("sayım","count")}`},l=()=>{this.settings.sensGame=s.value;const g=Number(r.value);g>0&&(this.settings.sensNum=g);const _=Number(a.value);_>=100&&(this.settings.dpi=_),o(),Qe(this.settings),this.onSettings(this.settings)};s.onchange=l,r.oninput=l,a.oninput=l,o();const c=["wallrun","dash","slide","slideHop","lean"],d=["crouchToggle","adsToggle","leanToggle","autoSprint"],h=()=>{for(const g of c)Z("mech-"+g).checked=this.settings.mech[g];for(const g of d)Z("mode-"+g).checked=this.settings.modes[g]};for(const g of c)Z("mech-"+g).onchange=_=>{this.settings.mech[g]=_.target.checked,Qe(this.settings),this.onSettings(this.settings),this.renderControlsList()};for(const g of d)Z("mode-"+g).onchange=_=>{this.settings.modes[g]=_.target.checked,Qe(this.settings),this.onSettings(this.settings)};document.querySelectorAll("[data-preset]").forEach(g=>{g.onclick=()=>{this.settings.mech={...Zc[g.dataset.preset]},h(),Qe(this.settings),this.onSettings(this.settings),this.renderControlsList()}}),h();const f=Z("set-learn");f.value=this.settings.learn,f.onchange=()=>{this.settings.learn=f.value,Qe(this.settings),this.onSettings(this.settings)};const m=()=>{Qe(this.settings),this.applyCrosshair()},v=Z("ch-color");v.value=this.settings.ch.color,v.onchange=()=>{this.settings.ch.color=v.value,m()};for(const g of["size","gap","thick"]){const _=Z("ch-"+g);_.value=String(this.settings.ch[g]),Z("ch-"+g+"-v").textContent=`${_.value}px`,_.oninput=()=>{this.settings.ch[g]=Number(_.value),Z("ch-"+g+"-v").textContent=`${_.value}px`,m()}}for(const g of["dot","dynamic","outline"]){const _=Z("ch-"+g);_.checked=this.settings.ch[g],_.onchange=()=>{this.settings.ch[g]=_.checked,m()}}this.applyCrosshair();const M=()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen?.({navigationUI:"hide"}).catch(()=>{})};for(const g of["btn-fs","btn-fs2"])Z(g).onclick=_=>{_.stopPropagation(),M()};document.addEventListener("fullscreenchange",()=>this.applyTexts()),Z("btn-set2").onclick=g=>{g.stopPropagation(),this.show("settings",!0)},Z("btn-keys").onclick=()=>this.openKeys(),Z("btn-keys2").onclick=g=>{g.stopPropagation(),this.openKeys()},Z("keys-close").onclick=()=>{this.input&&(this.input.capture=null),this.show("keys",!1),this.renderControlsList()},n("set-vol","volume",g=>`${Math.round(g*100)}%`),n("set-scale","scale",g=>`${Math.round(g*100)}%`);const p=(g,_)=>{const C=Z(g);C.checked=this.settings[_],C.onchange=()=>{this.settings[_]=C.checked,Qe(this.settings),this.onSettings(this.settings)}};p("set-live","live"),p("set-fps","fps");const u=Z("set-quality");u.value=this.settings.quality,u.onchange=()=>{this.settings.quality=u.value,Qe(this.settings),this.onSettings(this.settings)};const b=(g,_)=>{const C=Z(g),O=()=>C.querySelectorAll("button").forEach(I=>I.classList.toggle("on",I.dataset.v===this.settings[_]));C.querySelectorAll("button").forEach(I=>{I.onclick=()=>{this.settings[_]=I.dataset.v,Qe(this.settings),O(),this.applyTexts(),this.onSettings(this.settings)}}),O()};b("seg-map","map"),Z("btn-board").onclick=()=>this.openBoard("streak"),Z("board-close").onclick=()=>this.show("board",!1),document.querySelectorAll("#board-tabs button").forEach(g=>g.onclick=()=>this.openBoard(g.dataset.mode)),Z("end-send").onclick=()=>this.sendScore(),Z("end-name").addEventListener("keydown",g=>{g.stopPropagation(),g.code==="Enter"&&this.sendScore()}),this.tabify();const y=()=>{for(const g of["board","keys","settings","notebook"])if(!Z(g).classList.contains("hidden"))return g==="keys"&&this.input&&(this.input.capture=null),this.show(g,!1),g==="keys"&&this.renderControlsList(),!0;return!1};for(const g of["board","keys","settings","notebook"])Z(g).addEventListener("mousedown",_=>{_.target===Z(g)&&y()});window.addEventListener("keydown",g=>{this.input?.capture||(g.code==="Escape"&&y(),(g.code==="Enter"||g.code==="NumpadEnter")&&!Z("menu").classList.contains("hidden")&&!this.anyModal()&&!(document.activeElement instanceof HTMLButtonElement||document.activeElement instanceof HTMLSelectElement)&&this.onPlay())});const x=Z("sel-mode"),L=Z("sel-w1"),T=Z("sel-w2"),w=()=>{const g=Yc();x.innerHTML=co.map(I=>`<option value="${I.id}">${Kt==="tr"?I.tr:I.en}${I.endless&&g[I.id]?` · ${pt("rekor","best")} ${g[I.id]}`:""}</option>`).join("");const _=Er.map(I=>`<option value="${I}">${Kt==="tr"?On[I].tr:On[I].en}</option>`).join("");L.innerHTML=_,T.innerHTML=_,x.value=this.settings.mode,L.value=this.settings.w1,T.value=this.settings.w2;const C=co.find(I=>I.id===this.settings.mode);Z("mode-desc").textContent=Kt==="tr"?C.dtr:C.den;const O=this.settings.mode==="rotation";L.disabled=T.disabled=O};this.fillSelects=w;const P=()=>{this.settings.mode=x.value,this.settings.w1=L.value,this.settings.w2=T.value,this.settings.w2===this.settings.w1&&(this.settings.w2=Er.find(g=>g!==this.settings.w1)),Qe(this.settings),w()};x.onchange=L.onchange=T.onchange=P,w(),b("seg-diff","difficulty")}applyCrosshair(){const t=this.settings.ch,e=Z("crosshair");e.style.setProperty("--len",`${t.size}px`),e.style.setProperty("--th",`${t.thick}px`),e.style.setProperty("--col",t.color),e.style.setProperty("--ol",t.outline?t.color==="#ffffff"?"0 0 0 1px rgba(22,21,15,0.8)":"0 0 0 1px rgba(243,240,232,0.8)":"none"),e.classList.toggle("dot",t.dot)}async openBoard(t){this.show("board",!0),document.querySelectorAll("#board-tabs button").forEach(n=>n.classList.toggle("on",n.dataset.mode===t));const e=Z("board-list");e.innerHTML=`<li class="muted">${pt("Yükleniyor…","Loading…")}</li>`;try{const n=await B0(t),s=ac(),r=l=>Ai[l]?Kt==="tr"?Ai[l].tr:Ai[l].en:l,a=l=>l==="easy"?pt("kolay","easy"):l==="hard"?pt("zor","hard"):l==="normal"?pt("normal","normal"):l,o=l=>l.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);e.innerHTML=n.length?n.map((l,c)=>`<li class="${l.name===s?"me":""}"><span class="rk">${c+1}.</span><span>${o(l.name)}</span><span class="meta">${o(r(l.map))} · ${o(a(l.diff))}</span><span class="sc">${l.score}</span></li>`).join(""):`<li class="muted">${pt("Henüz skor yok. İlk sen ol.","No scores yet. Be the first.")}</li>`}catch{e.innerHTML=`<li class="muted">${pt("Skor tablosuna bağlanılamadı.","Couldn't reach the leaderboard.")}</li>`}}async sendScore(){const t=this.pending;if(!t)return;const e=Z("end-name").value.trim(),n=Z("end-msg");if(e.length<2){n.className="end-msg",n.textContent=pt("En az 2 karakterlik bir isim yaz.","Enter a name of at least 2 characters.");return}const s=`${t.mode}:${t.score}:${e}`;if(s!==this.lastSent){V0(e),Z("end-send").disabled=!0,n.className="end-msg",n.textContent=pt("Gönderiliyor…","Sending…");try{const r=await H0({...t,name:e});this.lastSent=s,n.className="end-msg ok",n.textContent=pt(`Gönderildi: ${r}. sıradasın.`,`Submitted: you're #${r}.`)}catch(r){n.className="end-msg",n.textContent=r.message||pt("Gönderilemedi.","Couldn't submit."),Z("end-send").disabled=!1}}}prepareSubmit(t,e,n){const s=!!t&&t.endless&&t.score>0;if(this.show("end-submit",s),!s){this.pending=null;return}this.pending={mode:t.mode,score:t.score,map:e,diff:n};const r=Z("end-name");r.value=ac(),r.placeholder=pt("isim","name"),Z("end-send").disabled=!1,Z("end-msg").className="end-msg",Z("end-msg").textContent=""}anyModal(){return["board","keys","settings","notebook"].some(t=>!Z(t).classList.contains("hidden"))}tabify(){const t=document.querySelector("#settings .modal-box");if(!t||t.querySelector(".tabs"))return;const e=t.querySelector(".nb-head"),n=[];let s=null;for(const a of Array.from(t.children))a!==e&&(a.tagName==="H3"&&(s=document.createElement("div"),s.className="tab-pane",n.push(s)),s&&s.appendChild(a));const r=document.createElement("div");r.className="tabs",e.after(r),n.forEach((a,o)=>{t.appendChild(a);const l=a.querySelector("h3"),c=document.createElement("button");c.dataset.tr=l.dataset.tr,c.dataset.en=l.dataset.en,c.textContent=l.textContent,c.onclick=()=>{n.forEach((d,h)=>d.classList.toggle("hidden",h!==o)),r.querySelectorAll("button").forEach((d,h)=>d.classList.toggle("on",h===o))},r.appendChild(c),o>0?a.classList.add("hidden"):c.classList.add("on")})}setInput(t){this.input=t,Z("keys-reset").onclick=()=>{t.binds=qc(),rc(t.binds),this.renderKeys()},this.renderControlsList()}openKeys(){this.renderKeys(),this.show("keys",!0)}renderKeys(){const t=this.input;if(!t)return;const e={};for(const s of Ar)e[t.binds[s.id]]=(e[t.binds[s.id]]||0)+1;const n=Z("keys-list");n.innerHTML=Ar.map(s=>`<div class="keyrow"><span>${Kt==="tr"?s.tr:s.en}</span><button class="keybtn ${e[t.binds[s.id]]>1?"dup":""}" data-act="${s.id}">${ma(t.binds[s.id],Kt)}</button></div>`).join(""),n.querySelectorAll(".keybtn").forEach(s=>{s.onclick=r=>{r.stopPropagation(),s.classList.add("wait"),s.textContent=pt("tuşa bas…","press a key…"),setTimeout(()=>{t.capture=a=>{a!=="Escape"&&(t.binds[s.dataset.act]=a,rc(t.binds)),this.renderKeys(),this.renderControlsList()}},0)}})}renderControlsList(){const t=this.input;if(!t)return;const e=t.binds,n=a=>ma(e[a],Kt),s=this.settings.mech,r=[[`${n("forward")}${n("left")}${n("back")}${n("right")}`,"hareket","move"],[n("sprint"),"koş","sprint"],[n("crouch"),s.slide?"eğil / koşarken kay":"eğil",s.slide?"crouch / slide":"crouch"],[n("jump"),s.wallrun?"zıpla · duvardan sıçra":"zıpla",s.wallrun?"jump · wall-jump":"jump"],[`${n("fire")} / ${n("ads")}`,"ateş / nişan","fire / aim"],[`${n("weapon1")} / ${n("weapon2")}`,"tüfek / pompalı","rifle / shotgun"],[n("reload"),"doldur","reload"],[n("panel"),"Nöbetçi göstergesi","Sentinel panel"]];s.dash&&r.splice(4,0,[n("dash"),"atılma (dash)","dash"]),s.lean&&r.splice(4,0,[`${n("leanL")} / ${n("leanR")}`,"sola / sağa yat","lean left / right"]),Z("controls-list").innerHTML=r.map(a=>`<div><kbd>${a[0]}</kbd> <span>${Kt==="tr"?a[1]:a[2]}</span></div>`).join("")}damageNumber(t,e,n,s,r){const a=t.clone().project(e);if(a.z>1)return;const o=document.createElement("div");o.className="dn"+(r?" kill":s?" head":""),o.textContent=String(n),o.style.left=`${(a.x+1)/2*100+(Math.random()-.5)*3}%`,o.style.top=`${(1-a.y)/2*100}%`,Z("dmgnums").appendChild(o),setTimeout(()=>o.remove(),850)}applyTexts(){document.querySelectorAll("[data-tr]").forEach(s=>{s.textContent=Kt==="tr"?s.dataset.tr:s.dataset.en}),Z("btn-lang").textContent=Kt==="tr"?"EN":"TR",this.fillSelects();const t=!!document.fullscreenElement;document.querySelectorAll(".fs-btn").forEach(s=>s.textContent=t?pt("Tam ekrandan çık","Exit fullscreen"):pt("Tam ekran","Fullscreen")),this.renderControlsList(),document.title=pt("Nöbetçi — Kheshig Studio","Nöbetçi (Sentinel) — Kheshig Studio");const e=Ai[this.settings.map];Z("map-desc").textContent=Kt==="tr"?e.descTr:e.descEn;const n=this.brain.d.rounds;Z("menu-memory").textContent=n>0?pt(`Nöbetçi seni ${n} rauntluk deneyimle hatırlıyor.`,`The Sentinel remembers ${n} rounds against you.`):pt("Nöbetçi seni henüz tanımıyor.","The Sentinel doesn't know you yet.")}show(t,e){Z(t).classList.toggle("hidden",!e)}screen(t){this.show("menu",t==="menu"),this.show("hud",t==="hud"),this.show("end",t==="end"),this.show("card",!1),this.show("pause",!1),t==="menu"&&this.applyTexts()}pause(t){this.show("pause",t)}countdown(t){const e=Z("center-msg");t>0?(e.textContent=String(t),e.className="center-msg big",this.msgT=1.1):(e.textContent=pt("BAŞLA","GO"),e.className="center-msg big",this.msgT=.6)}roundStart(t){this.show("card",!1);const e=Z("center-sub");e.textContent=pt(`RAUNT ${t}`,`ROUND ${t}`),e.classList.remove("hidden"),setTimeout(()=>e.classList.add("hidden"),2600)}hitMarker(t,e){const n=Z("hitmarker");n.className="hitmarker on"+(t?" kill":e?" head":""),this.hitT=t?.45:.16}damaged(t){const e=Z("dmg");e.style.transform=`translate(-50%,-50%) rotate(${-t*180/Math.PI}deg)`,e.classList.add("on"),this.dmgT=.9,Z("vignette").classList.add("on"),setTimeout(()=>Z("vignette").classList.remove("on"),140)}roundEnd(t){const e=Z("card"),n=t.playerWon===!0?pt("RAUNDU ALDIN","ROUND WON"):t.playerWon===!1?pt("NÖBETÇİ ALDI","THE SENTINEL TAKES IT"):pt("BERABERE","DRAW"),s=t.reason==="time"?pt("Süre doldu","Time's up"):"",r=Di[t.tactic],a=ni[t.lane];let o="";t.insights.length?o=`<div class="card-ins-h">${pt("Nöbetçi şunu fark etti","The Sentinel noticed")}</div>`+t.insights.map(l=>`<div class="ins"><div class="ins-o">${Kt==="tr"?l.tr:l.en}</div><div class="ins-r">→ ${Kt==="tr"?l.rtr:l.ren}</div></div>`).join(""):o=`<div class="card-ins-h muted">${pt("Nöbetçi izlemeye devam ediyor…","The Sentinel keeps watching…")}</div>`,e.innerHTML=`
      <div class="card-title ${t.playerWon===!1?"red":""}">${n}</div>
      <div class="card-score"><span>${pt("Sen","You")} ${t.pScore}</span><span class="dash">—</span><span>${t.bScore} ${pt("Nöbetçi","Sentinel")}</span></div>
      ${s?`<div class="card-reason">${s}</div>`:""}
      ${t.death?`<div class="death">${pt("Seni","It hit you from")} <b>${t.death.dist.toFixed(0)} m</b>${pt("'den","")} ${t.death.head?pt("<b>kafandan</b> vurdu","<b>in the head</b>"):pt("vurdu","")}${t.death.predConf>.25?` · ${pt("hareketini tahmin ediyordu","it was predicting your move")}: <b>${t.death.predV<-.15?"←":t.death.predV>.15?"→":"■"} %${Math.round(t.death.predConf*100)}</b>`:""}${t.death.botHp>0?` · ${pt("Nöbetçi'nin canı","its health")}: ${Math.ceil(t.death.botHp)}`:""}</div>`:""}
      <div class="card-tac">${pt("Bu raunt denediği taktik","Tactic it tried")}: <b>${Kt==="tr"?r.tr:r.en}</b> · ${Kt==="tr"?a.tr:a.en}</div>
      ${o}`,setTimeout(()=>this.show("card",!0),650)}matchEnd(t,e,n,s,r){this.screen("end"),Z("end-title").textContent=r&&r.endless?r.newRecord?pt("Yeni rekor!","New record!"):pt("Seri bitti","Run over"):t?pt("Nöbetçi'yi yendin","You beat the Sentinel"):pt("Nöbetçi kazandı","The Sentinel wins"),Z("end-title").className="end-title"+(t?"":" red");const a=e.pShots?Math.round(e.pHits/e.pShots*100):0,o=e.bShots?Math.round(e.bHits/e.bShots*100):0,c=e.roundsBotHitRate.map(d=>Math.round(d*100)).map((d,h)=>`<div class="rb"><div class="rb-bar" style="height:${Math.max(2,d)}%"></div><div class="rb-l">${h+1}</div></div>`).join("");Z("end-body").innerHTML=`
      ${r&&r.endless?`<div class="end-score">${r.score} ${pt("raunt","rounds")}</div>${r.newRecord?`<div class="record">${pt("YENİ REKOR","NEW RECORD")}</div>`:`<div class="record muted">${pt("rekor","best")}: ${r.best}</div>`}`:`<div class="end-score">${n} — ${s}</div>`}
      <div class="end-grid">
        <div><b>%${a}</b><span>${pt("senin isabetin","your accuracy")}</span></div>
        <div><b>${e.pHeads}</b><span>${pt("göze isabet","eye shots")}</span></div>
        <div><b>%${o}</b><span>${pt("Nöbetçi'nin isabeti","Sentinel accuracy")}</span></div>
      </div>
      <div class="end-sub">${pt("Nöbetçi'nin raunt raunt isabeti","Sentinel accuracy per round")}</div>
      <div class="rbars">${c}</div>`}modeBadge(t){const e=Z("mode-badge");e.textContent=t,e.classList.toggle("hidden",!t)}frame(t,e,n,s,r,a,o){Z("hp-fill").style.width=`${Math.max(0,e.hp)}%`,Z("hp-num").textContent=String(Math.max(0,Math.ceil(e.hp))),Z("ammo").textContent=e.gun.reloading?pt("DOLDURUYOR","RELOADING"):`${e.gun.ammo} / ${e.gun.mag}`,Z("slot-0").classList.toggle("on",e.cur===0),Z("slot-1").classList.toggle("on",e.cur===1);const l=v=>e.guns[v]?Kt==="tr"?e.guns[v].def.tr.toLocaleUpperCase("tr"):e.guns[v].def.en.toUpperCase():"";Z("slot-0-n").textContent=l(0),Z("slot-1-n").textContent=l(1),Z("slot-1").classList.toggle("hidden",e.guns.length<2),this.show("scope",!!e.gun.def.scope&&e.ads>.85&&e.alive);const c=1-e.dashCd/2.2;Z("dash-fill").style.width=`${Math.round(Math.max(0,Math.min(1,c))*100)}%`,Z("dash-fill").parentElement.classList.toggle("ready",c>=1),Z("ammo").classList.toggle("low",!e.gun.reloading&&e.gun.ammo<=3),Z("score-p").textContent=String(r),Z("score-b").textContent=String(a);const d=Math.max(0,Jn.roundTime-s);Z("timer").textContent=`${Math.floor(d/60)}:${String(Math.floor(d%60)).padStart(2,"0")}`;const h=this.settings.ch,f=h.gap+(h.dynamic?e.spread()*6:0),m=Z("crosshair");if(m.style.setProperty("--gap",`${f}px`),m.style.opacity=String(Math.max(0,1-e.ads*1.6)*(e.sprinting?.25:1)),this.hitT-=t,this.hitT<=0&&(Z("hitmarker").className="hitmarker"),this.dmgT-=t,this.dmgT<=0&&Z("dmg").classList.remove("on"),this.msgT-=t,this.msgT<=0&&(Z("center-msg").className="center-msg"),Z("lowhp").style.opacity=String(e.alive?Math.max(0,(45-e.hp)/45)*.8:.9),this.show("live",o),this.liveT-=t,o&&this.liveT<=0){this.liveT=.12;const v=this.brain.predictNext(),M=this.brain.knowledge(),p=this.brain.skill(),u=ii.map(y=>`<div class="lp-sym"><div class="lp-g">${fs[y]}</div><div class="lp-b"><i style="height:${Math.round(v.p[y]*100)}%"></i></div></div>`).join(""),b=Di[n.tactic];Z("live").innerHTML=`
        <div class="lv-h"><span class="eye-dot ${n.sees?"on":""}"></span>${pt("NÖBETÇİ","SENTINEL")}</div>
        <div class="lv-row"><span>${pt("Taktik","Tactic")}</span><b>${Kt==="tr"?b.tr:b.en} · ${Kt==="tr"?ni[n.lane].tr:ni[n.lane].en}</b></div>
        <div class="lv-row"><span>${pt("Şu an","Now")}</span><b>${n.intentLabel(Kt)}</b></div>
        <div class="lv-row"><span>${pt("Sonraki hareketin","Your next move")}</span><b>${pt("güven","conf.")} %${Math.round(v.conf*100)}</b></div>
        <div class="lp">${u}</div>
        <div class="lv-row"><span>${pt("Öğrendiği","Learned")}</span><div class="meter"><i style="width:${Math.round(M*100)}%"></i></div></div>
        <div class="lv-row"><span>${pt("Ustalık","Skill")}</span><div class="meter red"><i style="width:${Math.round(p*100)}%"></i></div></div>
        <div class="lv-k">${this.input?ma(this.input.binds.panel,Kt):"G"}: ${pt("göstergeyi gizle","hide panel")}</div>`}}openNotebook(){this.renderNotebook(),this.show("notebook",!0)}renderNotebook(){const t=this.brain,e=t.insights();Z("nb-list").innerHTML=e.length?e.map(a=>`<li><div>${Kt==="tr"?a.tr:a.en}</div><div class="ins-r">→ ${Kt==="tr"?a.rtr:a.ren}</div></li>`).join(""):`<li class="muted">${pt("Henüz bir şey yazmadı. Biraz oyna; seni izliyor.","Nothing written yet. Play a little — it's watching.")}</li>`;const n=t.lanePred(),s=t.laneTotal();Z("nb-lanes").innerHTML=["W","C","E"].map(a=>`<div class="nb-bar"><span>${Kt==="tr"?ni[a].tr:ni[a].en}</span><div class="meter"><i style="width:${s?Math.round(n[a]*100):0}%"></i></div></div>`).join("");const r=ii.map(a=>{const o=t.symShare(a);return`<div class="nb-sym"><b>${fs[a]}</b><div class="meter"><i style="width:${Math.round(o.share*100)}%"></i></div></div>`}).join("");Z("nb-syms").innerHTML=r,Z("nb-tac").innerHTML=gr.map(a=>{const o=t.tacticMean(a);return`<div class="nb-bar"><span>${Kt==="tr"?Di[a].tr:Di[a].en}</span><div class="meter red"><i style="width:${Math.round(o*100)}%"></i></div></div>`}).join(""),Z("nb-meta").textContent=pt(`${Ai[t.mapId].tr} haritası · ${t.d.rounds} raunt · ${t.d.matches} maç · Sen ${t.d.pWins} – ${t.d.bWins} Nöbetçi · ustalık %${Math.round(t.skill()*100)}`,`${Ai[t.mapId].en} map · ${t.d.rounds} rounds · ${t.d.matches} matches · You ${t.d.pWins} – ${t.d.bWins} Sentinel · skill ${Math.round(t.skill()*100)}%`),this.drawMap(Z("nb-map"))}drawMap(t){const e=t.getContext("2d"),n=t.width,s=Wi.half,r=n/(2*s);e.fillStyle="#f3f0e8",e.fillRect(0,0,n,n);const a=this.brain.m.heat,o=xe*xe,l=new Float32Array(o);let c=0;for(let h=0;h<o;h++)l[h]=a[h]+a[o+h]+a[2*o+h],c=Math.max(c,l[h]);for(let h=0;h<o;h++){if(l[h]<=0||c<=0)continue;const f=Math.pow(l[h]/c,.6)*.75;e.fillStyle=`rgba(138,15,11,${f.toFixed(3)})`;const m=h%xe*tn*r,v=Math.floor(h/xe)*tn*r;e.fillRect(m,v,tn*r+.5,tn*r+.5)}for(const h of ho)h.style!=="wall"&&(e.fillStyle=h.style==="low"?"rgba(22,21,15,0.35)":h.style==="plat"?"rgba(22,21,15,0.16)":"#16150f",e.fillRect((h.min.x+s)*r,(h.min.z+s)*r,(h.max.x-h.min.x)*r,(h.max.z-h.min.z)*r));const d=this.brain.m.contacts;for(let h=0;h<d.length;h++){if(d[h]<.6)continue;const f=(h%xe+.5)*tn*r,m=(Math.floor(h/xe)+.5)*tn*r;e.strokeStyle="#16150f",e.lineWidth=1.5,e.beginPath(),e.arc(f,m,3+Math.min(9,d[h]*2),0,Math.PI*2),e.stroke()}e.strokeStyle="#16150f",e.lineWidth=2,e.strokeRect(1,1,n-2,n-2),e.fillStyle="#16150f",e.font="11px ui-monospace, monospace",e.fillText(pt("Nöbetçi","Sentinel"),n/2-18,14),e.fillText(pt("Sen","You"),n/2-10,n-6)}}Kc(Kt);const No=document.getElementById("c"),vs=new URLSearchParams(location.search),Qc=vs.has("debug"),ui=new T0;vs.has("fresh")&&ui.reset();const cn=new P0(No),Ts=new L0,$e=new k0(No),le=G0(),ve=new W0(ui,le);ve.setInput($e);let Rr=le.live;const Et=new N0(ui,cn,Ts,{hitMarker:(i,t)=>ve.hitMarker(i,t),damageNumber:(i,t,e,n)=>ve.damageNumber(i,cn.camera,t,e,n),damaged:i=>ve.damaged(i),roundStart:i=>ve.roundStart(i),countdown:i=>ve.countdown(i),roundEnd:i=>ve.roundEnd(i),matchEnd:(i,t,e)=>{ve.matchEnd(i,t,Et.pScore,Et.bScore,e),ve.prepareSubmit(e,Et.map,le.difficulty),ve.fillSelects(),document.pointerLockElement&&document.exitPointerLock()}}),X0={easy:-.22,normal:0,hard:.2};function th(){Et.player.sens=Jc(le),Et.player.adsSensMul=le.adsMul,Et.player.mech={...le.mech},Et.bot.mech={...le.mech},$e.modes={...le.modes},ui.learnSpeed=le.learn,cn.baseFov=le.fov,Ts.setVolume(le.volume),Rr=le.live,ui.diffOffset=X0[le.difficulty]??0,cn.setQuality(le.quality,le.scale),document.getElementById("fps").classList.toggle("hidden",!le.fps),Et.phase==="menu"&&Et.map!==le.map&&(Et.setMap(le.map),sh())}ve.onSettings=th;function eh(){cn.resize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",eh);eh();let Xi=Qc&&vs.get("auto")?vs.get("auto"):"";ve.onPlay=()=>{Ts.unlock(),ve.screen("hud"),$e.resetToggles(),Et.startMatch(le.map,le.mode,[le.w1,le.w2]),Xi||$e.requestLock()};ve.onResume=()=>{Ts.unlock(),$e.requestLock()};ve.onReset=()=>ui.reset();ve.onMenu=()=>{Et.phase="menu",ve.screen("menu")};$e.onKey=i=>{i===$e.binds.panel&&(Et.phase==="live"||Et.phase==="countdown"||Et.phase==="roundEnd")&&(Rr=!Rr)};const ds=()=>Et.phase==="countdown"||Et.phase==="live"||Et.phase==="roundEnd";No.addEventListener("click",()=>{ds()&&!$e.locked&&!Xi&&$e.requestLock()});let oc=0,ga=0,_a=0,va=0,Kn=[],xa=0,go=vs.get("lane")||"W";function nh(i){const t=O0(),e=Et.player,n=Et.bot;if(Et.phase!=="live"||!e.alive)return t;const s=e.eye,r=n.headCenter(),a=n.alive&&rn(s,r);if(ga=a?ga+i:0,a&&ga>.32){const o=new R().subVectors(r,s);o.y-=.35,_a+=((Math.random()-.5)*.09-_a)*Math.min(1,i*3);const l=Math.atan2(-o.x,-o.z)+_a,c=Math.atan2(o.y,Math.hypot(o.x,o.z));let d=l-e.yaw;for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;e.yaw+=d*Math.min(1,i*7),e.pitch+=(c-e.pitch)*Math.min(1,i*7),oc+=i;const h=Xi;h==="LR"?t.right=Math.floor(oc/.45)%2===0?-1:1:h==="L"?t.right=-1:h==="R"&&(t.right=1),va-=i,Math.abs(d)<.05&&(t.fireHeld=!0,va<=0&&(t.firePressed=!0,va=.28)),t.ads=!0}else{if(xa-=i,xa<=0){xa=1;const o=go==="W"?-16:go==="E"?16:0,l=e.pos.z>10.5?new R(o,0,10):e.pos.z>2?new R(o,0,-2):n.pos.clone();Kn=Gc(e.pos,l)}for(;Kn.length&&Math.hypot(Kn[0].x-e.pos.x,Kn[0].z-e.pos.z)<.6;)Kn.shift();if(Kn.length){const o=Kn[0];let c=Math.atan2(-(o.x-e.pos.x),-(o.z-e.pos.z))-e.yaw;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;e.yaw+=c*Math.min(1,i*8),e.pitch*=.9,t.fwd=1}}return t}let rr=0,Ma=0,lc=performance.now(),ar=0,or=0,_o=0;function ih(i){requestAnimationFrame(ih);let t=(i-lc)/1e3;lc=i,t>.1&&(t=.1),ar+=t,or++,ar>.5&&(_o=or/ar,ar=0,or=0);const e=ds()&&!$e.locked&&!Xi;Ma=e?Ma+t:0,ve.pause(Ma>.3);const n=$e.sample();if(e)rr=0;else{rr+=t;let r=!0;for(;rr>=oi;){const a=Xi?nh(oi):r?n:{...n,lookX:0,lookY:0,firePressed:!1,jumpPressed:!1,crouchPressed:!1,reloadPressed:!1};Et.step(oi,a),rr-=oi,r=!1}}const s=Et.player;if(ds()&&!s.alive&&Et.bot.alive){const r=Et.bot.headCenter(),a=s.eye,o=Math.atan2(-(r.x-a.x),-(r.z-a.z)),l=Math.atan2(r.y-a.y,Math.hypot(r.x-a.x,r.z-a.z));let c=o-s.yaw;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;s.yaw+=c*Math.min(1,t*4),s.pitch+=(l-s.pitch)*Math.min(1,t*4)}if(le.fps&&or===0&&(document.getElementById("fps").textContent=`${Math.round(_o)} FPS`),cn.syncCamera(s,t,i/1e3),cn.updateGun(s,t),cn.updateBot(Et.bot,t*Et.timeScale),Ts.listener(s.eye,s.yaw),ds()){ve.frame(t,s,Et.bot,Et.roundT,Et.pScore,Et.bScore,Rr);const r=Et.mode;ve.modeBadge(r==="streak"?Kt==="tr"?`SERİ ${Et.pScore}`:`STREAK ${Et.pScore}`:r==="lives"?`${"♥".repeat(Math.max(0,Et.lives))}${"♡".repeat(Math.max(0,3-Et.lives))} · ${Et.pScore}`:r==="oneshot"?Kt==="tr"?"TEK MERMİ":"ONE SHOT":r==="rotation"?Kt==="tr"?Et.player.gun.def.tr.toLocaleUpperCase("tr"):Et.player.gun.def.en.toUpperCase():"")}cn.render(t*(ds()?Et.timeScale:1))}requestAnimationFrame(ih);function sh(){Et.player.reset(),Et.bot.reset(0),Et.player.pos.set(0,0,21),Et.player.pitch=-.05}Et.setMap(le.map);sh();th();Qc&&(window.__gozcu={game:Et,brain:ui,view:cn,ui:ve,input:$e,get fps(){return _o},setAuto(i,t){Xi=i,t&&(go=t)},ff(i){const t=Math.round(i/oi);for(let e=0;e<t&&!(Et.phase==="matchEnd"||Et.phase==="menu");e++)Et.step(oi,nh(oi));return{phase:Et.phase,round:Et.round,p:Et.pScore,b:Et.bScore}}});
