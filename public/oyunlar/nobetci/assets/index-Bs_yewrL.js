(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="170",nh=0,zo=1,ih=2,mo=1,sh=2,vn=3,Fn=0,Ne=1,xn=2,In=0,Li=1,ko=2,Bo=3,Ho=4,rh=5,Zn=100,ah=101,oh=102,lh=103,ch=104,hh=200,uh=201,dh=202,fh=203,_a=204,va=205,ph=206,mh=207,gh=208,_h=209,vh=210,xh=211,Mh=212,Sh=213,yh=214,xa=0,Ma=1,Sa=2,Fi=3,ya=4,Ea=5,ba=6,Ta=7,go=0,Eh=1,bh=2,Un=0,Th=1,wh=2,Ah=3,Rh=4,Ch=5,Ph=6,Lh=7,nc=300,Oi=301,zi=302,wa=303,Aa=304,br=306,fr=1e3,ii=1001,Ra=1002,sn=1003,Dh=1004,bs=1005,on=1006,Pr=1007,si=1008,En=1009,ic=1010,sc=1011,ds=1012,_o=1013,oi=1014,Mn=1015,gs=1016,vo=1017,xo=1018,ki=1020,rc=35902,ac=1021,oc=1022,nn=1023,lc=1024,cc=1025,Di=1026,Bi=1027,hc=1028,Mo=1029,uc=1030,So=1031,yo=1033,rr=33776,ar=33777,or=33778,lr=33779,Ca=35840,Pa=35841,La=35842,Da=35843,Ia=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,za=37810,ka=37811,Ba=37812,Ha=37813,Va=37814,Ga=37815,Wa=37816,Xa=37817,Ya=37818,$a=37819,qa=37820,Ka=37821,cr=36492,ja=36494,Za=36495,dc=36283,Ja=36284,Qa=36285,to=36286,Ih=3200,Uh=3201,fc=0,Nh=1,Dn="",ke="srgb",Wi="srgb-linear",Tr="linear",te="srgb",di=7680,Vo=519,Fh=512,Oh=513,zh=514,pc=515,kh=516,Bh=517,Hh=518,Vh=519,Go=35044,Wo="300 es",Sn=2e3,pr=2001;class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,eo=180/Math.PI;function _s(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Gh(i,t){return(i%t+t)%t}function Lr(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],m=n[5],_=n[8],M=s[0],p=s[3],u=s[6],b=s[1],y=s[4],x=s[7],L=s[2],w=s[5],A=s[8];return r[0]=a*M+o*b+l*L,r[3]=a*p+o*y+l*w,r[6]=a*u+o*x+l*A,r[1]=c*M+d*b+h*L,r[4]=c*p+d*y+h*w,r[7]=c*u+d*x+h*A,r[2]=f*M+m*b+_*L,r[5]=f*p+m*y+_*w,r[8]=f*u+m*x+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,f=o*l-d*r,m=c*r-a*l,_=e*h+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=h*M,t[1]=(s*c-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=f*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Dr.makeScale(t,e)),this}rotate(t){return this.premultiply(Dr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new It;function mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){const i=mr("canvas");return i.style.display="block",i}const Xo={};function as(i){i in Xo||(Xo[i]=!0,console.warn(i))}function Xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $h(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Tr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Yo=[.64,.33,.3,.6,.15,.06],$o=[.2126,.7152,.0722],qo=[.3127,.329],Ko=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Wi]:{primaries:Yo,whitePoint:qo,transfer:Tr,toXYZ:Ko,fromXYZ:jo,luminanceCoefficients:$o,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:Yo,whitePoint:qo,transfer:te,toXYZ:Ko,fromXYZ:jo,luminanceCoefficients:$o,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let fi;class qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=mr("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kh=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ir(s[a].image)):r.push(Ir(s[a]))}else r=Ir(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;class Le extends Xi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=ii,s=ii,r=on,a=si,o=nn,l=En,c=Le.DEFAULT_ANISOTROPY,d=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=_s(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=nc;Le.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],M=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(m+1)/2,L=(u+1)/2,w=(d+f)/4,A=(h+M)/4,T=(_+p)/4;return y>x&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=A/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=T/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=T/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(h-M)*(h-M)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-M)/b,this.z=(f-d)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zh extends Xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Zh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _c extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const f=r[a+0],m=r[a+1],_=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=M;return}if(h!==M||l!==f||c!==m||d!==_){let p=1-o;const u=l*f+c*m+d*_+h*M,b=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const L=Math.sqrt(y),w=Math.atan2(L,u*b);p=Math.sin(p*w)/L,o=Math.sin(o*w)/L}const x=o*b;if(l=l*p+f*x,c=c*p+m*x,d=d*p+_*x,h=h*p+M*x,p===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+d*h+l*m-c*f,t[e+1]=l*_+d*f+c*h-o*m,t[e+2]=c*_+d*m+o*f-l*h,t[e+3]=d*_-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new C,Zo=new Yi;class vs{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),ws.subVectors(this.max,Ji),pi.subVectors(t.a,Ji),mi.subVectors(t.b,Ji),gi.subVectors(t.c,Ji),wn.subVectors(mi,pi),An.subVectors(gi,mi),Bn.subVectors(pi,gi);let e=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Bn.z,Bn.y,wn.z,0,-wn.x,An.z,0,-An.x,Bn.z,0,-Bn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Bn.y,Bn.x,0];return!Nr(e,pi,mi,gi,ws)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,pi,mi,gi,ws))?!1:(As.crossVectors(wn,An),e=[As.x,As.y,As.z],Nr(e,pi,mi,gi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new C,new C,new C,new C,new C,new C,new C,new C],je=new C,Ts=new vs,pi=new C,mi=new C,gi=new C,wn=new C,An=new C,Bn=new C,Ji=new C,ws=new C,As=new C,Hn=new C;function Nr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);const o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),d=n.dot(Hn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Qh=new vs,Qi=new C,Fr=new C;class wr{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Fr)),this.expandByPoint(Qi.copy(t.center).sub(Fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new C,Or=new C,Rs=new C,Rn=new C,zr=new C,Cs=new C,kr=new C;class vc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Or.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Or);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Rs),o=Rn.dot(this.direction),l=-Rn.dot(Rs),c=Rn.lengthSq(),d=Math.abs(1-a*a);let h,f,m,_;if(d>0)if(h=a*l-o,f=a*o-l,_=r*d,h>=0)if(f>=-_)if(f<=_){const M=1/d;h*=M,f*=M,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Or).addScaledVector(Rs,f),m}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){zr.subVectors(e,t),Cs.subVectors(n,t),kr.crossVectors(zr,Cs);let a=this.direction.dot(kr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const l=o*this.direction.dot(Cs.crossVectors(Rn,Cs));if(l<0)return null;const c=o*this.direction.dot(zr.cross(Rn));if(c<0||l+c>a)return null;const d=-o*Rn.dot(kr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,a,o,l,c,d,h,f,m,_,M,p){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,f,m,_,M,p)}set(t,e,n,s,r,a,o,l,c,d,h,f,m,_,M,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*d,m=a*h,_=o*d,M=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*d,m=l*h,_=c*d,M=c*h;e[0]=f+M*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=m*o-_,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*d,m=l*h,_=c*d,M=c*h;e[0]=f-M*o,e[4]=-a*h,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*d,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*d,m=a*h,_=o*d,M=o*h;e[0]=l*d,e[4]=_*c-m,e[8]=f*c+M,e[1]=l*h,e[5]=M*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,_=o*l,M=o*c;e[0]=l*d,e[4]=M-f*h,e[8]=_*h+m,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+_,e[10]=f-M*h}else if(t.order==="XZY"){const f=a*l,m=a*c,_=o*l,M=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+M,e[5]=a*d,e[9]=m*h-_,e[2]=_*h-m,e[6]=o*d,e[10]=M*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tu,t,eu)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Cn.crossVectors(n,Oe),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Cn.crossVectors(n,Oe)),Cn.normalize(),Ps.crossVectors(Oe,Cn),s[0]=Cn.x,s[4]=Ps.x,s[8]=Oe.x,s[1]=Cn.y,s[5]=Ps.y,s[9]=Oe.y,s[2]=Cn.z,s[6]=Ps.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],m=n[13],_=n[2],M=n[6],p=n[10],u=n[14],b=n[3],y=n[7],x=n[11],L=n[15],w=s[0],A=s[4],T=s[8],g=s[12],v=s[1],P=s[5],D=s[9],O=s[13],V=s[2],X=s[6],W=s[10],j=s[14],H=s[3],it=s[7],ht=s[11],St=s[15];return r[0]=a*w+o*v+l*V+c*H,r[4]=a*A+o*P+l*X+c*it,r[8]=a*T+o*D+l*W+c*ht,r[12]=a*g+o*O+l*j+c*St,r[1]=d*w+h*v+f*V+m*H,r[5]=d*A+h*P+f*X+m*it,r[9]=d*T+h*D+f*W+m*ht,r[13]=d*g+h*O+f*j+m*St,r[2]=_*w+M*v+p*V+u*H,r[6]=_*A+M*P+p*X+u*it,r[10]=_*T+M*D+p*W+u*ht,r[14]=_*g+M*O+p*j+u*St,r[3]=b*w+y*v+x*V+L*H,r[7]=b*A+y*P+x*X+L*it,r[11]=b*T+y*D+x*W+L*ht,r[15]=b*g+y*O+x*j+L*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],m=t[14],_=t[3],M=t[7],p=t[11],u=t[15];return _*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*m-n*l*m)+M*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*d-r*l*d)+p*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*f+s*a*h-n*a*f+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],m=t[11],_=t[12],M=t[13],p=t[14],u=t[15],b=h*p*c-M*f*c+M*l*m-o*p*m-h*l*u+o*f*u,y=_*f*c-d*p*c-_*l*m+a*p*m+d*l*u-a*f*u,x=d*M*c-_*h*c+_*o*m-a*M*m-d*o*u+a*h*u,L=_*h*l-d*M*l-_*o*f+a*M*f+d*o*p-a*h*p,w=e*b+n*y+s*x+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=b*A,t[1]=(M*f*r-h*p*r-M*s*m+n*p*m+h*s*u-n*f*u)*A,t[2]=(o*p*r-M*l*r+M*s*c-n*p*c-o*s*u+n*l*u)*A,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*m-n*l*m)*A,t[4]=y*A,t[5]=(d*p*r-_*f*r+_*s*m-e*p*m-d*s*u+e*f*u)*A,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*u-e*l*u)*A,t[7]=(a*f*r-d*l*r+d*s*c-e*f*c-a*s*m+e*l*m)*A,t[8]=x*A,t[9]=(_*h*r-d*M*r-_*n*m+e*M*m+d*n*u-e*h*u)*A,t[10]=(a*M*r-_*o*r+_*n*c-e*M*c-a*n*u+e*o*u)*A,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*m-e*o*m)*A,t[12]=L*A,t[13]=(d*M*s-_*h*s+_*n*f-e*M*f-d*n*p+e*h*p)*A,t[14]=(_*o*s-a*M*s-_*n*l+e*M*l+a*n*p-e*o*p)*A,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,f=r*c,m=r*d,_=r*h,M=a*d,p=a*h,u=o*h,b=l*c,y=l*d,x=l*h,L=n.x,w=n.y,A=n.z;return s[0]=(1-(M+u))*L,s[1]=(m+x)*L,s[2]=(_-y)*L,s[3]=0,s[4]=(m-x)*w,s[5]=(1-(f+u))*w,s[6]=(p+b)*w,s[7]=0,s[8]=(_+y)*A,s[9]=(p-b)*A,s[10]=(1-(f+M))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const c=1/r,d=1/a,h=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=d,Ze.elements[5]*=d,Ze.elements[6]*=d,Ze.elements[8]*=h,Ze.elements[9]*=h,Ze.elements[10]*=h,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Sn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let m,_;if(o===Sn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===pr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(a-r),f=(e+t)*c,m=(n+s)*d;let _,M;if(o===Sn)_=(a+r)*h,M=-2*h;else if(o===pr)_=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new C,Ze=new he,tu=new C(0,0,0),eu=new C(1,1,1),Cn=new C,Ps=new C,Oe=new C,Jo=new he,Qo=new Yi;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nu=0;const tl=new C,vi=new Yi,mn=new he,Ls=new C,ts=new C,iu=new C,su=new Yi,el=new C(1,0,0),nl=new C(0,1,0),il=new C(0,0,1),sl={type:"added"},ru={type:"removed"},xi={type:"childadded",child:null},Br={type:"childremoved",child:null};class ve extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new C,e=new hn,n=new Yi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new It}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ts,Ls,this.up):mn.lookAt(Ls,ts,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(mn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sl),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ru),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sl),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,iu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new C(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new C,gn=new C,Hr=new C,_n=new C,Mi=new C,Si=new C,rl=new C,Vr=new C,Gr=new C,Wr=new C,Xr=new pe,Yr=new pe,$r=new pe;class Ye{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),gn.subVectors(n,e),Hr.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(gn),l=Je.dot(Hr),c=gn.dot(gn),d=gn.dot(Hr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,_=(a*d-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Xr.setScalar(0),Yr.setScalar(0),$r.setScalar(0),Xr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,n),$r.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Xr,r.x),a.addScaledVector(Yr,r.y),a.addScaledVector($r,r.z),a}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),gn.subVectors(t,e),Je.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Mi.subVectors(s,n),Si.subVectors(r,n),Vr.subVectors(t,n);const l=Mi.dot(Vr),c=Si.dot(Vr);if(l<=0&&c<=0)return e.copy(n);Gr.subVectors(t,s);const d=Mi.dot(Gr),h=Si.dot(Gr);if(d>=0&&h<=d)return e.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Mi,a);Wr.subVectors(t,r);const m=Mi.dot(Wr),_=Si.dot(Wr);if(_>=0&&m<=_)return e.copy(r);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Si,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return rl.subVectors(r,s),o=(h-d)/(h-d+(m-_)),e.copy(s).addScaledVector(rl,o);const u=1/(p+M+f);return a=M*u,o=f*u,e.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Gh(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qr(a,r,t+1/3),this.g=qr(a,r,t),this.b=qr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Yt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ue(Ce.r*255,0,255))*65536+Math.round(Ue(Ce.g*255,0,255))*256+Math.round(Ue(Ce.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ke){Yt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Ds);const n=Lr(Pn.h,Ds.h,e),s=Lr(Pn.s,Ds.s,e),r=Lr(Pn.l,Ds.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Ft;Ft.NAMES=Mc;let au=0;class $i extends Xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=_s(),this.name="",this.blending=Li,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=va,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Be extends $i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new C,Is=new kt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Go&&(t.usage=this.usage),t}}class Sc extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ou=0;const Xe=new he,Kr=new ve,yi=new C,ze=new vs,es=new vs,Ee=new C;class Ve extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?yc:Sc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(ze.min,es.min),ze.expandByPoint(Ee),Ee.addVectors(ze.max,es.max),ze.expandByPoint(Ee)):(ze.expandByPoint(es.min),ze.expandByPoint(es.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ee.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(t,c),Ee.add(yi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new C,l[T]=new C;const c=new C,d=new C,h=new C,f=new kt,m=new kt,_=new kt,M=new C,p=new C;function u(T,g,v){c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,g),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,g),_.fromBufferAttribute(r,v),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(P),o[T].add(M),o[g].add(M),o[v].add(M),l[T].add(p),l[g].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let T=0,g=b.length;T<g;++T){const v=b[T],P=v.start,D=v.count;for(let O=P,V=P+D;O<V;O+=3)u(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new C,x=new C,L=new C,w=new C;function A(T){L.fromBufferAttribute(s,T),w.copy(L);const g=o[T];y.copy(g),y.sub(L.multiplyScalar(L.dot(g))).normalize(),x.crossVectors(w,g);const P=x.dot(l[T])<0?-1:1;a.setXYZW(T,y.x,y.y,y.z,P)}for(let T=0,g=b.length;T<g;++T){const v=b[T],P=v.start,D=v.count;for(let O=P,V=P+D;O<V;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,d=new C,h=new C;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),M=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new cn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new he,Vn=new vc,Us=new wr,ol=new C,Ns=new C,Fs=new C,Os=new C,jr=new C,zs=new C,ll=new C,ks=new C;class Gt extends ve{constructor(t=new Ve,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(jr.fromBufferAttribute(h,t),a?zs.addScaledVector(jr,d):zs.addScaledVector(jr.sub(e),d))}e.add(zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(Us.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Us,ol)===null||Vn.origin.distanceToSquared(ol)>(t.far-t.near)**2))&&(al.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(al),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const p=f[_],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,L=y;x<L;x+=3){const w=o.getX(x),A=o.getX(x+1),T=o.getX(x+2);s=Bs(this,u,t,n,c,d,h,w,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,u=M;p<u;p+=3){const b=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);s=Bs(this,a,t,n,c,d,h,b,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const p=f[_],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,L=y;x<L;x+=3){const w=x,A=x+1,T=x+2;s=Bs(this,u,t,n,c,d,h,w,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=_,u=M;p<u;p+=3){const b=p,y=p+1,x=p+2;s=Bs(this,a,t,n,c,d,h,b,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function lu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Fn,o),l===null)return null;ks.copy(o),ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:i}}function Bs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ns),i.getVertexPosition(l,Fs),i.getVertexPosition(c,Os);const d=lu(i,t,e,n,Ns,Fs,Os,ll);if(d){const h=new C;Ye.getBarycoord(ll,Ns,Fs,Os,h),s&&(d.uv=Ye.getInterpolatedAttribute(s,o,l,c,h,new kt)),r&&(d.uv1=Ye.getInterpolatedAttribute(r,o,l,c,h,new kt)),a&&(d.normal=Ye.getInterpolatedAttribute(a,o,l,c,h,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};Ye.getNormal(Ns,Fs,Os,f.normal),d.face=f,d.barycoord=h}return d}class en extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(h,2));function _(M,p,u,b,y,x,L,w,A,T,g){const v=x/A,P=L/T,D=x/2,O=L/2,V=w/2,X=A+1,W=T+1;let j=0,H=0;const it=new C;for(let ht=0;ht<W;ht++){const St=ht*P-O;for(let Ot=0;Ot<X;Ot++){const ee=Ot*v-D;it[M]=ee*b,it[p]=St*y,it[u]=V,c.push(it.x,it.y,it.z),it[M]=0,it[p]=0,it[u]=w>0?1:-1,d.push(it.x,it.y,it.z),h.push(Ot/A),h.push(1-ht/T),j+=1}}for(let ht=0;ht<T;ht++)for(let St=0;St<A;St++){const Ot=f+St+X*ht,ee=f+St+X*(ht+1),$=f+(St+1)+X*(ht+1),et=f+(St+1)+X*ht;l.push(Ot,ee,et),l.push(ee,$,et),H+=6}o.addGroup(m,H,g),m+=H,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const s in n)t[s]=n[s]}return t}function cu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ec(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const hu={clone:Hi,merge:Pe};var uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends $i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new C,cl=new kt,hl=new kt;class He extends bc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,cl,hl),e.subVectors(hl,cl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,bi=1;class fu extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(Ei,bi,t,e);s.layers=this.layers,this.add(s);const r=new He(Ei,bi,t,e);r.layers=this.layers,this.add(r);const a=new He(Ei,bi,t,e);a.layers=this.layers,this.add(a);const o=new He(Ei,bi,t,e);o.layers=this.layers,this.add(o);const l=new He(Ei,bi,t,e);l.layers=this.layers,this.add(l);const c=new He(Ei,bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Tc extends Le{constructor(t,e,n,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pu extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:In});r.uniforms.tEquirect.value=e;const a=new Gt(s,r),o=e.minFilter;return e.minFilter===si&&(e.minFilter=on),new fu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Zr=new C,mu=new C,gu=new It;class qn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Zr.subVectors(n,e).cross(mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gu.getNormalMatrix(t),s=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new wr,Hs=new C;class Eo{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],f=s[7],m=s[8],_=s[9],M=s[10],p=s[11],u=s[12],b=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,p-m,x-u).normalize(),n[1].setComponents(l+r,f+c,p+m,x+u).normalize(),n[2].setComponents(l+a,f+d,p+_,x+b).normalize(),n[3].setComponents(l-a,f-d,p-_,x-b).normalize(),n[4].setComponents(l-o,f-h,p-M,x-y).normalize(),e===Sn)n[5].setComponents(l+o,f+h,p+M,x+y).normalize();else if(e===pr)n[5].setComponents(o,h,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Hs.x=s.normal.x>0?t.max.x:t.min.x,Hs.y=s.normal.y>0?t.max.y:t.min.y,Hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _u(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],M=h[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,h[f]=M)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const M=h[m];i.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class xs extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,f=e/l,m=[],_=[],M=[],p=[];for(let u=0;u<d;u++){const b=u*f-a;for(let y=0;y<c;y++){const x=y*h-r;_.push(x,-b,0),M.push(0,0,1),p.push(y/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const y=b+c*u,x=b+c*(u+1),L=b+1+c*(u+1),w=b+1+c*u;m.push(y,x,w),m.push(x,L,w)}this.setIndex(m),this.setAttribute("position",new me(_,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}var vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xu=`#ifdef USE_ALPHAHASH
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
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
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
#endif`,Tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu=`#ifdef USE_BATCHING
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
#endif`,Au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lu=`#ifdef USE_IRIDESCENCE
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
#endif`,Du=`#ifdef USE_BUMPMAP
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hu=`#define PI 3.141592653589793
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
} // validated`,Vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gu=`vec3 transformedNormal = objectNormal;
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
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ju=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
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
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
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
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,md=`PhysicalMaterial material;
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
#endif`,gd=`struct PhysicalMaterial {
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
}`,_d=`
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ad=`#if defined( USE_POINTS_UV )
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
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
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
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nf=`float getShadowMask() {
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
}`,sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,df=`#ifdef USE_TRANSMISSION
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
#endif`,ff=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xf=`uniform sampler2D t2D;
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`#include <common>
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
}`,Tf=`#if DEPTH_PACKING == 3200
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
}`,wf=`#define DISTANCE
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
}`,Af=`#define DISTANCE
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`uniform float scale;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Df=`#include <common>
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
}`,If=`uniform vec3 diffuse;
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
}`,Uf=`#define LAMBERT
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
}`,Nf=`#define LAMBERT
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
}`,Ff=`#define MATCAP
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
}`,Of=`#define MATCAP
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
}`,zf=`#define NORMAL
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
}`,kf=`#define NORMAL
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
}`,Bf=`#define PHONG
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
}`,Hf=`#define PHONG
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
}`,Vf=`#define STANDARD
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
}`,Gf=`#define STANDARD
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
}`,Wf=`#define TOON
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
}`,Xf=`#define TOON
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
}`,Yf=`uniform float size;
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
}`,$f=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,Kf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:vu,alphahash_pars_fragment:xu,alphamap_fragment:Mu,alphamap_pars_fragment:Su,alphatest_fragment:yu,alphatest_pars_fragment:Eu,aomap_fragment:bu,aomap_pars_fragment:Tu,batching_pars_vertex:wu,batching_vertex:Au,begin_vertex:Ru,beginnormal_vertex:Cu,bsdfs:Pu,iridescence_fragment:Lu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Nu,clipping_planes_vertex:Fu,color_fragment:Ou,color_pars_fragment:zu,color_pars_vertex:ku,color_vertex:Bu,common:Hu,cube_uv_reflection_fragment:Vu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Wu,displacementmap_vertex:Xu,emissivemap_fragment:Yu,emissivemap_pars_fragment:$u,colorspace_fragment:qu,colorspace_pars_fragment:Ku,envmap_fragment:ju,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ju,envmap_pars_vertex:Qu,envmap_physical_pars_fragment:hd,envmap_vertex:td,fog_vertex:ed,fog_pars_vertex:nd,fog_fragment:id,fog_pars_fragment:sd,gradientmap_pars_fragment:rd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:ld,lights_pars_begin:cd,lights_toon_fragment:ud,lights_toon_pars_fragment:dd,lights_phong_fragment:fd,lights_phong_pars_fragment:pd,lights_physical_fragment:md,lights_physical_pars_fragment:gd,lights_fragment_begin:_d,lights_fragment_maps:vd,lights_fragment_end:xd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Ed,map_fragment:bd,map_pars_fragment:Td,map_particle_fragment:wd,map_particle_pars_fragment:Ad,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Pd,morphcolor_vertex:Ld,morphnormal_vertex:Dd,morphtarget_pars_vertex:Id,morphtarget_vertex:Ud,normal_fragment_begin:Nd,normal_fragment_maps:Fd,normal_pars_fragment:Od,normal_pars_vertex:zd,normal_vertex:kd,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Wd,opaque_fragment:Xd,packing:Yd,premultiplied_alpha_fragment:$d,project_vertex:qd,dithering_fragment:Kd,dithering_pars_fragment:jd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Jd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:tf,shadowmap_vertex:ef,shadowmask_pars_fragment:nf,skinbase_vertex:sf,skinning_pars_vertex:rf,skinning_vertex:af,skinnormal_vertex:of,specularmap_fragment:lf,specularmap_pars_fragment:cf,tonemapping_fragment:hf,tonemapping_pars_fragment:uf,transmission_fragment:df,transmission_pars_fragment:ff,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:gf,worldpos_vertex:_f,background_vert:vf,background_frag:xf,backgroundCube_vert:Mf,backgroundCube_frag:Sf,cube_vert:yf,cube_frag:Ef,depth_vert:bf,depth_frag:Tf,distanceRGBA_vert:wf,distanceRGBA_frag:Af,equirect_vert:Rf,equirect_frag:Cf,linedashed_vert:Pf,linedashed_frag:Lf,meshbasic_vert:Df,meshbasic_frag:If,meshlambert_vert:Uf,meshlambert_frag:Nf,meshmatcap_vert:Ff,meshmatcap_frag:Of,meshnormal_vert:zf,meshnormal_frag:kf,meshphong_vert:Bf,meshphong_frag:Hf,meshphysical_vert:Vf,meshphysical_frag:Gf,meshtoon_vert:Wf,meshtoon_frag:Xf,points_vert:Yf,points_frag:$f,shadow_vert:qf,shadow_frag:Kf,sprite_vert:jf,sprite_frag:Zf},nt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},an={basic:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Pe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Pe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Pe([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Pe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Pe([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Pe([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Pe([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Pe([nt.lights,nt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};an.physical={uniforms:Pe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Vs={r:0,b:0,g:0},Wn=new hn,Jf=new he;function Qf(i,t,e,n,s,r,a){const o=new Ft(0);let l=r===!0?0:1,c,d,h=null,f=0,m=null;function _(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function M(b){let y=!1;const x=_(b);x===null?u(o,l):x&&x.isColor&&(u(x,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,y){const x=_(y);x&&(x.isCubeTexture||x.mapping===br)?(d===void 0&&(d=new Gt(new en(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Hi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Wn.copy(y.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(Wn)),d.material.toneMapped=Yt.getTransfer(x.colorSpace)!==te,(h!==x||f!==x.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Gt(new xs(2,2),new On({name:"BackgroundMaterial",uniforms:Hi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,y){b.getRGB(Vs,Ec(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:M,addToRenderList:p}}function tp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,P,D,O,V){let X=!1;const W=h(O,D,P);r!==W&&(r=W,c(r.object)),X=m(v,O,D,V),X&&_(v,O,D,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(v,P,D,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function h(v,P,D){const O=D.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let W=X[O];return W===void 0&&(W=f(l()),X[O]=W),W}function f(v){const P=[],D=[],O=[];for(let V=0;V<e;V++)P[V]=0,D[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:O,object:v,attributes:{},index:null}}function m(v,P,D,O){const V=r.attributes,X=P.attributes;let W=0;const j=D.getAttributes();for(const H in j)if(j[H].location>=0){const ht=V[H];let St=X[H];if(St===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function _(v,P,D,O){const V={},X=P.attributes;let W=0;const j=D.getAttributes();for(const H in j)if(j[H].location>=0){let ht=X[H];ht===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor));const St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),V[H]=St,W++}r.attributes=V,r.attributesNum=W,r.index=O}function M(){const v=r.newAttributes;for(let P=0,D=v.length;P<D;P++)v[P]=0}function p(v){u(v,0)}function u(v,P){const D=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;D[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),V[v]!==P&&(i.vertexAttribDivisor(v,P),V[v]=P)}function b(){const v=r.newAttributes,P=r.enabledAttributes;for(let D=0,O=P.length;D<O;D++)P[D]!==v[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function y(v,P,D,O,V,X,W){W===!0?i.vertexAttribIPointer(v,P,D,V,X):i.vertexAttribPointer(v,P,D,O,V,X)}function x(v,P,D,O){M();const V=O.attributes,X=D.getAttributes(),W=P.defaultAttributeValues;for(const j in X){const H=X[j];if(H.location>=0){let it=V[j];if(it===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const ht=it.normalized,St=it.itemSize,Ot=t.get(it);if(Ot===void 0)continue;const ee=Ot.buffer,$=Ot.type,et=Ot.bytesPerElement,vt=$===i.INT||$===i.UNSIGNED_INT||it.gpuType===_o;if(it.isInterleavedBufferAttribute){const rt=it.data,At=rt.stride,Pt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)u(H.location+zt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let zt=0;zt<H.locationSize;zt++)p(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let zt=0;zt<H.locationSize;zt++)y(H.location+zt,St/H.locationSize,$,ht,At*et,(Pt+St/H.locationSize*zt)*et,vt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)u(H.location+rt,it.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let rt=0;rt<H.locationSize;rt++)y(H.location+rt,St/H.locationSize,$,ht,St*et,St/H.locationSize*rt*et,vt)}}else if(W!==void 0){const ht=W[j];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}b()}function L(){T();for(const v in n){const P=n[v];for(const D in P){const O=P[D];for(const V in O)d(O[V].object),delete O[V];delete P[D]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const D in P){const O=P[D];for(const V in O)d(O[V].object),delete O[V];delete P[D]}delete n[v.id]}function A(v){for(const P in n){const D=n[P];if(D[v.id]===void 0)continue;const O=D[v.id];for(const V in O)d(O[V].object),delete O[V];delete D[v.id]}}function T(){g(),a=!0,r!==s&&(r=s,c(r.object))}function g(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:g,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function ep(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];e.update(m,n,1)}function l(c,d,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let _=0;for(let M=0;M<h;M++)_+=d[M]*f[M];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function np(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const T=A===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==En&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!T)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:L,maxSamples:w}}function ip(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new qn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!s||_===null||_.length===0||r&&!p)r?d(null):c();else{const b=r?0:n,y=b*4;let x=u.clippingState||null;l.value=x,x=d(_,f,y,m);for(let L=0;L!==y;++L)x[L]=e[L];u.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,m,_){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const u=m+M*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,x=m;y!==M;++y,x+=4)a.copy(h[y]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function sp(i){let t=new WeakMap;function e(a,o){return o===wa?a.mapping=Oi:o===Aa&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wa||o===Aa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ac extends bc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,ul=[.125,.215,.35,.446,.526,.582],Jn=20,Jr=new Ac,dl=new Ft;let Qr=null,ta=0,ea=0,na=!1;const Kn=(1+Math.sqrt(5))/2,Ti=1/Kn,fl=[new C(-Kn,Ti,0),new C(Kn,Ti,0),new C(-Ti,0,Kn),new C(Ti,0,Kn),new C(0,Kn,-Ti),new C(0,Kn,Ti),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Qr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr,ta,ea),this._renderer.xr.enabled=na,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:gs,format:nn,colorSpace:Wi,depthBuffer:!1},s=ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rp(r)),this._blurMaterial=ap(r,t,e)}return s}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,s){const o=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(dl),d.toneMapping=Un,d.autoClear=!1;const m=new Be({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),_=new Gt(new en,m);let M=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,M=!0):(m.color.copy(dl),M=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;Gs(s,b*y,u>2?y:0,y,y),d.setRenderTarget(s),M&&d.render(_,o),d.render(t,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fl[(s-r-1)%fl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Gt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),M=r/_,p=isFinite(r)?1+Math.floor(d*M):Jn;p>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const u=[];let b=0;for(let A=0;A<Jn;++A){const T=A/M,g=Math.exp(-T*T/2);u.push(g),A===0?b+=g:A<p&&(b+=2*g)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const x=this._sizeLods[s],L=3*x*(s>y-Ci?s-y+Ci:0),w=4*(this._cubeSize-x);Gs(e,L,w,3*x,2*x),l.setRenderTarget(e),l.render(h,Jr)}}function rp(i){const t=[],e=[],n=[];let s=i;const r=i-Ci+1+ul.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ci?l=ul[a-i+Ci-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,M=3,p=2,u=1,b=new Float32Array(M*_*m),y=new Float32Array(p*_*m),x=new Float32Array(u*_*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,T=w>2?0:-1,g=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];b.set(g,M*_*w),y.set(f,p*_*w);const v=[w,w,w,w,w,w];x.set(v,u*_*w)}const L=new Ve;L.setAttribute("position",new cn(b,M)),L.setAttribute("uv",new cn(y,p)),L.setAttribute("faceIndex",new cn(x,u)),t.push(L),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ml(i,t,e){const n=new li(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ap(i,t,e){const n=new Float32Array(Jn),s=new C(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function gl(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function _l(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}function op(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wa||l===Aa,d=l===Oi||l===zi;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new pl(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new pl(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function lp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cp(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let p=0,u=M.length;p<u;p++)t.remove(M[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const M=m[_];for(let p=0,u=M.length;p<u;p++)t.update(M[p],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let y=0,x=b.length;y<x;y+=3){const L=b[y+0],w=b[y+1],A=b[y+2];f.push(L,w,w,A,A,L)}}else if(_!==void 0){const b=_.array;M=_.version;for(let y=0,x=b.length/3-1;y<x;y+=3){const L=y+0,w=y+1,A=y+2;f.push(L,w,w,A,A,L)}}else return;const p=new(mc(f)?yc:Sc)(f,1);p.version=M;const u=r.get(h);u&&t.remove(u),r.set(h,p)}function d(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function hp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*a,_),e.update(m,n,_))}function d(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];e.update(p,n,1)}function h(f,m,_,M){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,M,0,_);let u=0;for(let b=0;b<_;b++)u+=m[b]*M[b];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function up(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dp(i,t,e){const n=new WeakMap,s=new pe;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),M===!0&&(x=2),p===!0&&(x=3);let L=o.attributes.position.count*x,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*w*4*h),T=new _c(A,L,w,h);T.type=Mn,T.needsUpdate=!0;const g=x*4;for(let P=0;P<h;P++){const D=u[P],O=b[P],V=y[P],X=L*w*4*P;for(let W=0;W<D.count;W++){const j=W*g;_===!0&&(s.fromBufferAttribute(D,W),A[X+j+0]=s.x,A[X+j+1]=s.y,A[X+j+2]=s.z,A[X+j+3]=0),M===!0&&(s.fromBufferAttribute(O,W),A[X+j+4]=s.x,A[X+j+5]=s.y,A[X+j+6]=s.z,A[X+j+7]=0),p===!0&&(s.fromBufferAttribute(V,W),A[X+j+8]=s.x,A[X+j+9]=s.y,A[X+j+10]=s.z,A[X+j+11]=V.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new kt(L,w)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Rc extends Le{constructor(t,e,n,s,r,a,o,l,c,d=Di){if(d!==Di&&d!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Di&&(n=oi),n===void 0&&d===Bi&&(n=ki),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cc=new Le,vl=new Rc(1,1),Pc=new _c,Lc=new Jh,Dc=new Tc,xl=[],Ml=[],Sl=new Float32Array(16),yl=new Float32Array(9),El=new Float32Array(4);function qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=xl[s];if(r===void 0&&(r=new Float32Array(s),xl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ar(i,t){let e=Ml[t];e===void 0&&(e=new Int32Array(t),Ml[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),ye(e,n)}}function xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),ye(e,n)}}function Mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),ye(e,n)}}function Sp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vl.compareFunction=pc,r=vl):r=Cc,e.setTexture2D(t||r,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lc,s)}function Lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dc,s)}function Dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pc,s)}function Ip(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return yp;case 35668:case 35672:return Ep;case 35669:case 35673:return bp;case 5125:return Tp;case 36294:return wp;case 36295:return Ap;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}function Up(i,t){i.uniform1fv(this.addr,t)}function Np(i,t){const e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Fp(i,t){const e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Op(i,t){const e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function zp(i,t){const e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kp(i,t){const e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bp(i,t){const e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hp(i,t){i.uniform1iv(this.addr,t)}function Vp(i,t){i.uniform2iv(this.addr,t)}function Gp(i,t){i.uniform3iv(this.addr,t)}function Wp(i,t){i.uniform4iv(this.addr,t)}function Xp(i,t){i.uniform1uiv(this.addr,t)}function Yp(i,t){i.uniform2uiv(this.addr,t)}function $p(i,t){i.uniform3uiv(this.addr,t)}function qp(i,t){i.uniform4uiv(this.addr,t)}function Kp(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Cc,r[a])}function jp(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Lc,r[a])}function Zp(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Dc,r[a])}function Jp(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Pc,r[a])}function Qp(i){switch(i){case 5126:return Up;case 35664:return Np;case 35665:return Fp;case 35666:return Op;case 35674:return zp;case 35675:return kp;case 35676:return Bp;case 5124:case 35670:return Hp;case 35667:case 35671:return Vp;case 35668:case 35672:return Gp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return Yp;case 36295:return $p;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ip(e.type)}}class em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qp(e.type)}}class nm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function bl(i,t){i.seq.push(t),i.map[t.id]=t}function im(i,t,e){const n=i.name,s=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bl(e,c===void 0?new tm(o,i,t):new em(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new nm(o),bl(e,h)),e=h}}}class ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);im(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Tl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const sm=37297;let rm=0;function am(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wl=new It;function om(i){Yt._getMatrix(wl,Yt.workingColorSpace,i);const t=`mat3( ${wl.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Tr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Al(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+am(i.getShaderSource(t),a)}else return s}function lm(i,t){const e=om(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cm(i,t){let e;switch(t){case Th:e="Linear";break;case wh:e="Reinhard";break;case Ah:e="Cineon";break;case Rh:e="ACESFilmic";break;case Ph:e="AgX";break;case Lh:e="Neutral";break;case Ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ws=new C;function hm(){Yt.getLuminanceCoefficients(Ws);const i=Ws.x.toFixed(4),t=Ws.y.toFixed(4),e=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function dm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function os(i){return i!==""}function Rl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(i){return i.replace(pm,gm)}const mm=new Map;function gm(i,t){let e=Nt[t];if(e===void 0){const n=mm.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return no(e)}const _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(i){return i.replace(_m,vm)}function vm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ll(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function xm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case zi:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function ym(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case go:t="ENVMAP_BLENDING_MULTIPLY";break;case Eh:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function Em(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=xm(e),c=Mm(e),d=Sm(e),h=ym(e),f=Em(e),m=um(e),_=dm(r),M=s.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(os).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(os).join(`
`),u.length>0&&(u+=`
`)):(p=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),u=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Un?cm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,lm("linearToOutputTexel",e.outputColorSpace),hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),a=no(a),a=Rl(a,e),a=Cl(a,e),o=no(o),o=Rl(o,e),o=Cl(o,e),a=Pl(a),o=Pl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=b+p+a,x=b+u+o,L=Tl(s,s.VERTEX_SHADER,y),w=Tl(s,s.FRAGMENT_SHADER,x);s.attachShader(M,L),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(M).trim(),O=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(w).trim();let X=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,w);else{const j=Al(s,L,"vertex"),H=Al(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+j+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||V==="")&&(W=!1);W&&(P.diagnostics={runnable:X,programLog:D,vertexShader:{log:O,prefix:p},fragmentShader:{log:V,prefix:u}})}s.deleteShader(L),s.deleteShader(w),T=new ur(s,M),g=fm(s,M)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let g;this.getAttributes=function(){return g===void 0&&A(this),g};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,sm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=w,this}let Tm=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Am(t),e.set(t,n)),n}}class Am{constructor(t){this.id=Tm++,this.code=t,this.usedTimes=0}}function Rm(i,t,e,n,s,r,a){const o=new xc,l=new wm,c=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(g){return c.add(g),g===0?"uv":`uv${g}`}function p(g,v,P,D,O){const V=D.fog,X=O.geometry,W=g.isMeshStandardMaterial?D.environment:null,j=(g.isMeshStandardMaterial?e:t).get(g.envMap||W),H=j&&j.mapping===br?j.image.height:null,it=_[g.type];g.precision!==null&&(m=s.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=ht!==void 0?ht.length:0;let Ot=0;X.morphAttributes.position!==void 0&&(Ot=1),X.morphAttributes.normal!==void 0&&(Ot=2),X.morphAttributes.color!==void 0&&(Ot=3);let ee,$,et,vt;if(it){const Qt=an[it];ee=Qt.vertexShader,$=Qt.fragmentShader}else ee=g.vertexShader,$=g.fragmentShader,l.update(g),et=l.getVertexShaderID(g),vt=l.getFragmentShaderID(g);const rt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,zt=O.isBatchedMesh===!0,ce=!!g.map,Wt=!!g.matcap,ge=!!j,F=!!g.aoMap,Ge=!!g.lightMap,Bt=!!g.bumpMap,Ht=!!g.normalMap,Tt=!!g.displacementMap,se=!!g.emissiveMap,bt=!!g.metalnessMap,R=!!g.roughnessMap,S=g.anisotropy>0,z=g.clearcoat>0,q=g.dispersion>0,Z=g.iridescence>0,Y=g.sheen>0,xt=g.transmission>0,at=S&&!!g.anisotropyMap,ut=z&&!!g.clearcoatMap,Xt=z&&!!g.clearcoatNormalMap,Q=z&&!!g.clearcoatRoughnessMap,dt=Z&&!!g.iridescenceMap,wt=Z&&!!g.iridescenceThicknessMap,Rt=Y&&!!g.sheenColorMap,ft=Y&&!!g.sheenRoughnessMap,Vt=!!g.specularMap,Ut=!!g.specularColorMap,ne=!!g.specularIntensityMap,I=xt&&!!g.transmissionMap,st=xt&&!!g.thicknessMap,G=!!g.gradientMap,K=!!g.alphaMap,ct=g.alphaTest>0,ot=!!g.alphaHash,Lt=!!g.extensions;let ue=Un;g.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Ae={shaderID:it,shaderType:g.type,shaderName:g.name,vertexShader:ee,fragmentShader:$,defines:g.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:zt,batchingColor:zt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Wi,alphaToCoverage:!!g.alphaToCoverage,map:ce,matcap:Wt,envMap:ge,envMapMode:ge&&j.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Ge,bumpMap:Bt,normalMap:Ht,displacementMap:f&&Tt,emissiveMap:se,normalMapObjectSpace:Ht&&g.normalMapType===Nh,normalMapTangentSpace:Ht&&g.normalMapType===fc,metalnessMap:bt,roughnessMap:R,anisotropy:S,anisotropyMap:at,clearcoat:z,clearcoatMap:ut,clearcoatNormalMap:Xt,clearcoatRoughnessMap:Q,dispersion:q,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:wt,sheen:Y,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:Vt,specularColorMap:Ut,specularIntensityMap:ne,transmission:xt,transmissionMap:I,thicknessMap:st,gradientMap:G,opaque:g.transparent===!1&&g.blending===Li&&g.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:ot,combine:g.combine,mapUv:ce&&M(g.map.channel),aoMapUv:F&&M(g.aoMap.channel),lightMapUv:Ge&&M(g.lightMap.channel),bumpMapUv:Bt&&M(g.bumpMap.channel),normalMapUv:Ht&&M(g.normalMap.channel),displacementMapUv:Tt&&M(g.displacementMap.channel),emissiveMapUv:se&&M(g.emissiveMap.channel),metalnessMapUv:bt&&M(g.metalnessMap.channel),roughnessMapUv:R&&M(g.roughnessMap.channel),anisotropyMapUv:at&&M(g.anisotropyMap.channel),clearcoatMapUv:ut&&M(g.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&M(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&M(g.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&M(g.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&M(g.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&M(g.sheenColorMap.channel),sheenRoughnessMapUv:ft&&M(g.sheenRoughnessMap.channel),specularMapUv:Vt&&M(g.specularMap.channel),specularColorMapUv:Ut&&M(g.specularColorMap.channel),specularIntensityMapUv:ne&&M(g.specularIntensityMap.channel),transmissionMapUv:I&&M(g.transmissionMap.channel),thicknessMapUv:st&&M(g.thicknessMap.channel),alphaMapUv:K&&M(g.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ht||S),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ce||K),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:ce&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===te,decodeVideoTextureEmissive:se&&g.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(g.emissiveMap.colorSpace)===te,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xn,flipSided:g.side===Ne,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Lt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&g.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function u(g){const v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)v.push(P),v.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(b(v,g),y(v,g),v.push(i.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function b(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function y(g,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),g.push(o.mask)}function x(g){const v=_[g.type];let P;if(v){const D=an[v];P=hu.clone(D.uniforms)}else P=g.uniforms;return P}function L(g,v){let P;for(let D=0,O=d.length;D<O;D++){const V=d[D];if(V.cacheKey===v){P=V,++P.usedTimes;break}}return P===void 0&&(P=new bm(i,v,g,r),d.push(P)),P}function w(g){if(--g.usedTimes===0){const v=d.indexOf(g);d[v]=d[d.length-1],d.pop(),g.destroy()}}function A(g){l.remove(g)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:d,dispose:T}}function Cm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Il(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,m,_,M,p){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:M,group:p},i[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=M,u.group=p),t++,u}function o(h,f,m,_,M,p){const u=a(h,f,m,_,M,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(h,f,m,_,M,p){const u=a(h,f,m,_,M,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,f){e.length>1&&e.sort(h||Pm),n.length>1&&n.sort(f||Dl),s.length>1&&s.sort(f||Dl)}function d(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function Lm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Il,i.set(n,[a])):s>=r.length?(a=new Il,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ft};break;case"SpotLight":e={position:new C,direction:new C,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Im(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Um=0;function Nm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fm(i){const t=new Dm,e=Im(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new he,a=new he;function o(c){let d=0,h=0,f=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let m=0,_=0,M=0,p=0,u=0,b=0,y=0,x=0,L=0,w=0,A=0;c.sort(Nm);for(let g=0,v=c.length;g<v;g++){const P=c[g],D=P.color,O=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*O,h+=D.g*O,f+=D.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);A++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=W,m++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(O),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[M]=W;const j=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,j.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[M]=j.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=X,x++}M++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(D).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const j=P.shadow,H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=W,_++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==m||T.pointLength!==_||T.spotLength!==M||T.rectAreaLength!==p||T.hemiLength!==u||T.numDirectionalShadows!==b||T.numPointShadows!==y||T.numSpotShadows!==x||T.numSpotMaps!==L||T.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,T.directionalLength=m,T.pointLength=_,T.spotLength=M,T.rectAreaLength=p,T.hemiLength=u,T.numDirectionalShadows=b,T.numPointShadows=y,T.numSpotShadows=x,T.numSpotMaps=L,T.numLightProbes=A,n.version=Um++)}function l(c,d){let h=0,f=0,m=0,_=0,M=0;const p=d.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const y=c[u];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(y.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Ul(i){const t=new Fm(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Om(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ul(i),t.set(s,[o])):r>=a.length?(o=new Ul(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class zm extends $i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class km extends $i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hm=`uniform sampler2D shadow_pass;
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
}`;function Vm(i,t,e){let n=new Eo;const s=new kt,r=new kt,a=new pe,o=new zm({depthPacking:Uh}),l=new km,c={},d=e.maxTextureSize,h={[Fn]:Ne,[Ne]:Fn,[xn]:xn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Bm,fragmentShader:Hm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ve;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Gt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let u=this.type;this.render=function(w,A,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const g=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(In),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=u!==vn&&this.type===vn,V=u===vn&&this.type!==vn;for(let X=0,W=w.length;X<W;X++){const j=w[X],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||O===!0||V===!0){const St=this.type!==vn?{minFilter:sn,magFilter:sn}:{};H.map!==null&&H.map.dispose(),H.map=new li(s.x,s.y,St),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let St=0;St<ht;St++){const Ot=H.getViewport(St);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),D.viewport(a),H.updateMatrices(j,St),n=H.getFrustum(),x(A,T,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===vn&&b(H,T),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(g,v,P)};function b(w,A){const T=t.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new li(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,T,f,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,T,m,M,null)}function y(w,A,T,g){let v=null;const P=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)v=P;else if(v=T.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=v.uuid,O=A.uuid;let V=c[D];V===void 0&&(V={},c[D]=V);let X=V[O];X===void 0&&(X=v.clone(),V[O]=X,A.addEventListener("dispose",L)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,g===vn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=i.properties.get(v);D.light=T}return v}function x(w,A,T,g,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===vn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const O=t.update(w),V=w.material;if(Array.isArray(V)){const X=O.groups;for(let W=0,j=X.length;W<j;W++){const H=X[W],it=V[H.materialIndex];if(it&&it.visible){const ht=y(w,it,g,v);w.onBeforeShadow(i,w,A,T,O,ht,H),i.renderBufferDirect(T,null,O,ht,w,H),w.onAfterShadow(i,w,A,T,O,ht,H)}}}else if(V.visible){const X=y(w,V,g,v);w.onBeforeShadow(i,w,A,T,O,X,null),i.renderBufferDirect(T,null,O,X,w,null),w.onAfterShadow(i,w,A,T,O,X,null)}}const D=w.children;for(let O=0,V=D.length;O<V;O++)x(D[O],A,T,g,v)}function L(w){w.target.removeEventListener("dispose",L);for(const T in c){const g=c[T],v=w.target.uuid;v in g&&(g[v].dispose(),delete g[v])}}}const Gm={[xa]:Ma,[Sa]:ba,[ya]:Ta,[Fi]:Ea,[Ma]:xa,[ba]:Sa,[Ta]:ya,[Ea]:Fi};function Wm(i,t){function e(){let I=!1;const st=new pe;let G=null;const K=new pe(0,0,0,0);return{setMask:function(ct){G!==ct&&!I&&(i.colorMask(ct,ct,ct,ct),G=ct)},setLocked:function(ct){I=ct},setClear:function(ct,ot,Lt,ue,Ae){Ae===!0&&(ct*=ue,ot*=ue,Lt*=ue),st.set(ct,ot,Lt,ue),K.equals(st)===!1&&(i.clearColor(ct,ot,Lt,ue),K.copy(st))},reset:function(){I=!1,G=null,K.set(-1,0,0,0)}}}function n(){let I=!1,st=!1,G=null,K=null,ct=null;return{setReversed:function(ot){if(st!==ot){const Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ct;ct=null,this.setClear(ue)}st=ot},getReversed:function(){return st},setTest:function(ot){ot?rt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ot){G!==ot&&!I&&(i.depthMask(ot),G=ot)},setFunc:function(ot){if(st&&(ot=Gm[ot]),K!==ot){switch(ot){case xa:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case ba:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ot}},setLocked:function(ot){I=ot},setClear:function(ot){ct!==ot&&(st&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){I=!1,G=null,K=null,ct=null,st=!1}}}function s(){let I=!1,st=null,G=null,K=null,ct=null,ot=null,Lt=null,ue=null,Ae=null;return{setTest:function(Qt){I||(Qt?rt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!I&&(i.stencilMask(Qt),st=Qt)},setFunc:function(Qt,qe,un){(G!==Qt||K!==qe||ct!==un)&&(i.stencilFunc(Qt,qe,un),G=Qt,K=qe,ct=un)},setOp:function(Qt,qe,un){(ot!==Qt||Lt!==qe||ue!==un)&&(i.stencilOp(Qt,qe,un),ot=Qt,Lt=qe,ue=un)},setLocked:function(Qt){I=Qt},setClear:function(Qt){Ae!==Qt&&(i.clearStencil(Qt),Ae=Qt)},reset:function(){I=!1,st=null,G=null,K=null,ct=null,ot=null,Lt=null,ue=null,Ae=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,m=[],_=null,M=!1,p=null,u=null,b=null,y=null,x=null,L=null,w=null,A=new Ft(0,0,0),T=0,g=!1,v=null,P=null,D=null,O=null,V=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=j>=2);let it=null,ht={};const St=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),ee=new pe().fromArray(St),$=new pe().fromArray(Ot);function et(I,st,G,K){const ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(I,ot),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<G;Lt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(st+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}const vt={};vt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Fi),Bt(!1),Ht(zo),rt(i.CULL_FACE),F(In);function rt(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function At(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Pt(I,st){return h[I]!==st?(i.bindFramebuffer(I,st),h[I]=st,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function zt(I,st){let G=m,K=!1;if(I){G=f.get(st),G===void 0&&(G=[],f.set(st,G));const ct=I.textures;if(G.length!==ct.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Lt=ct.length;ot<Lt;ot++)G[ot]=i.COLOR_ATTACHMENT0+ot;G.length=ct.length,K=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,K=!0);K&&i.drawBuffers(G)}function ce(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const Wt={[Zn]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};Wt[lh]=i.MIN,Wt[ch]=i.MAX;const ge={[hh]:i.ZERO,[uh]:i.ONE,[dh]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[va]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(I,st,G,K,ct,ot,Lt,ue,Ae,Qt){if(I===In){M===!0&&(At(i.BLEND),M=!1);return}if(M===!1&&(rt(i.BLEND),M=!0),I!==rh){if(I!==p||Qt!==g){if((u!==Zn||x!==Zn)&&(i.blendEquation(i.FUNC_ADD),u=Zn,x=Zn),Qt)switch(I){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,y=null,L=null,w=null,A.set(0,0,0),T=0,p=I,g=Qt}return}ct=ct||st,ot=ot||G,Lt=Lt||K,(st!==u||ct!==x)&&(i.blendEquationSeparate(Wt[st],Wt[ct]),u=st,x=ct),(G!==b||K!==y||ot!==L||Lt!==w)&&(i.blendFuncSeparate(ge[G],ge[K],ge[ot],ge[Lt]),b=G,y=K,L=ot,w=Lt),(ue.equals(A)===!1||Ae!==T)&&(i.blendColor(ue.r,ue.g,ue.b,Ae),A.copy(ue),T=Ae),p=I,g=!1}function Ge(I,st){I.side===xn?At(i.CULL_FACE):rt(i.CULL_FACE);let G=I.side===Ne;st&&(G=!G),Bt(G),I.blending===Li&&I.transparent===!1?F(In):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function Ht(I){I!==nh?(rt(i.CULL_FACE),I!==P&&(I===zo?i.cullFace(i.BACK):I===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),P=I}function Tt(I){I!==D&&(W&&i.lineWidth(I),D=I)}function se(I,st,G){I?(rt(i.POLYGON_OFFSET_FILL),(O!==st||V!==G)&&(i.polygonOffset(st,G),O=st,V=G)):At(i.POLYGON_OFFSET_FILL)}function bt(I){I?rt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+X-1),it!==I&&(i.activeTexture(I),it=I)}function S(I,st,G){G===void 0&&(it===null?G=i.TEXTURE0+X-1:G=it);let K=ht[G];K===void 0&&(K={type:void 0,texture:void 0},ht[G]=K),(K.type!==I||K.texture!==st)&&(it!==G&&(i.activeTexture(G),it=G),i.bindTexture(I,st||vt[I]),K.type=I,K.texture=st)}function z(){const I=ht[it];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(I){ee.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function ft(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Vt(I,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let K=G.get(I);K===void 0&&(K=i.getUniformBlockIndex(st,I.name),G.set(I,K))}function Ut(I,st){const K=c.get(st).get(I);l.get(st)!==K&&(i.uniformBlockBinding(st,K,I.__bindingPointIndex),l.set(st,K))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,ht={},h={},f=new WeakMap,m=[],_=null,M=!1,p=null,u=null,b=null,y=null,x=null,L=null,w=null,A=new Ft(0,0,0),T=0,g=!1,v=null,P=null,D=null,O=null,V=null,ee.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:At,bindFramebuffer:Pt,drawBuffers:zt,useProgram:ce,setBlending:F,setMaterial:Ge,setFlipSided:Bt,setCullFace:Ht,setLineWidth:Tt,setPolygonOffset:se,setScissorTest:bt,activeTexture:R,bindTexture:S,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:dt,texImage3D:wt,updateUBOMapping:Vt,uniformBlockBinding:Ut,texStorage2D:Xt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Rt,viewport:ft,reset:ne}}function Nl(i,t,e,n){const s=Xm(n);switch(e){case ac:return i*t;case lc:return i*t;case cc:return i*t*2;case hc:return i*t/s.components*s.byteLength;case Mo:return i*t/s.components*s.byteLength;case uc:return i*t*2/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case oc:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case yo:return i*t*4/s.components*s.byteLength;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ca:case La:return Math.max(i,8)*Math.max(t,8)/2;case Ia:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cr:case ja:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dc:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xm(i){switch(i){case En:case ic:return{byteLength:1,components:1};case ds:case sc:case gs:return{byteLength:2,components:1};case vo:case xo:return{byteLength:2,components:4};case oi:case _o:case Mn:return{byteLength:4,components:1};case rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ym(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return m?new OffscreenCanvas(R,S):mr("canvas")}function M(R,S,z){let q=1;const Z=bt(R);if((Z.width>z||Z.height>z)&&(q=z/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*Z.width),xt=Math.floor(q*Z.height);h===void 0&&(h=_(Y,xt));const at=S?_(Y,xt):h;return at.width=Y,at.height=xt,at.getContext("2d").drawImage(R,0,0,Y,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+xt+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function u(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,z,q,Z=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=S;if(S===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),S===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const xt=Z?Tr:Yt.getTransfer(q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=xt===te?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(R,S){let z;return R?S===null||S===oi||S===ki?z=i.DEPTH24_STENCIL8:S===Mn?z=i.DEPTH32F_STENCIL8:S===ds&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===oi||S===ki?z=i.DEPTH_COMPONENT24:S===Mn?z=i.DEPTH_COMPONENT32F:S===ds&&(z=i.DEPTH_COMPONENT16),z}function L(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),T(S),S.isVideoTexture&&d.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),v(S)}function T(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,q=f.get(z);if(q){const Z=q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&g(R),Object.keys(q).length===0&&f.delete(z)}n.remove(R)}function g(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const z=R.source,q=f.get(z);delete q[S.__cacheKey],a.memory.textures--}function v(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Z=0;Z<S.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let q=0,Z=z.length;q<Z;q++){const Y=n.get(z[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(R)}let P=0;function D(){P=0}function O(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function X(R,S){const z=n.get(R);if(R.isVideoTexture&&Tt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,R,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function W(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function j(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function H(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){et(z,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const it={[fr]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},ht={[sn]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},St={[Fh]:i.NEVER,[Vh]:i.ALWAYS,[Oh]:i.LESS,[pc]:i.LEQUAL,[zh]:i.EQUAL,[Hh]:i.GEQUAL,[kh]:i.GREATER,[Bh]:i.NOTEQUAL};function Ot(R,S){if(S.type===Mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===Pr||S.magFilter===bs||S.magFilter===si||S.minFilter===on||S.minFilter===Pr||S.minFilter===bs||S.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,it[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,it[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,it[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,St[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==bs&&S.minFilter!==si||S.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ee(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const q=S.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const Y=V(S);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[Y].usedTimes++;const xt=Z[R.__cacheKey];xt!==void 0&&(Z[R.__cacheKey].usedTimes--,xt.usedTimes===0&&g(S)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return z}function $(R,S,z){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const Z=ee(R,S),Y=S.source;e.bindTexture(q,R.__webglTexture,i.TEXTURE0+z);const xt=n.get(Y);if(Y.version!==xt.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const at=Yt.getPrimaries(Yt.workingColorSpace),ut=S.colorSpace===Dn?null:Yt.getPrimaries(S.colorSpace),Xt=S.colorSpace===Dn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Q=M(S.image,!1,s.maxTextureSize);Q=se(S,Q);const dt=r.convert(S.format,S.colorSpace),wt=r.convert(S.type);let Rt=y(S.internalFormat,dt,wt,S.colorSpace,S.isVideoTexture);Ot(q,S);let ft;const Vt=S.mipmaps,Ut=S.isVideoTexture!==!0,ne=xt.__version===void 0||Z===!0,I=Y.dataReady,st=L(S,Q);if(S.isDepthTexture)Rt=x(S.format===Bi,S.type),ne&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,dt,wt,null));else if(S.isDataTexture)if(Vt.length>0){Ut&&ne&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Vt[0].width,Vt[0].height);for(let G=0,K=Vt.length;G<K;G++)ft=Vt[G],Ut?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,wt,ft.data):e.texImage2D(i.TEXTURE_2D,G,Rt,ft.width,ft.height,0,dt,wt,ft.data);S.generateMipmaps=!1}else Ut?(ne&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Q.width,Q.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,wt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,dt,wt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Vt[0].width,Vt[0].height,Q.depth);for(let G=0,K=Vt.length;G<K;G++)if(ft=Vt[G],S.format!==nn)if(dt!==null)if(Ut){if(I)if(S.layerUpdates.size>0){const ct=Nl(ft.width,ft.height,S.format,S.type);for(const ot of S.layerUpdates){const Lt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ot,ft.width,ft.height,1,dt,Lt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Rt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,Q.depth,dt,wt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Rt,ft.width,ft.height,Q.depth,0,dt,wt,ft.data)}else{Ut&&ne&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Vt[0].width,Vt[0].height);for(let G=0,K=Vt.length;G<K;G++)ft=Vt[G],S.format!==nn?dt!==null?Ut?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Rt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,wt,ft.data):e.texImage2D(i.TEXTURE_2D,G,Rt,ft.width,ft.height,0,dt,wt,ft.data)}else if(S.isDataArrayTexture)if(Ut){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Q.width,Q.height,Q.depth),I)if(S.layerUpdates.size>0){const G=Nl(Q.width,Q.height,S.format,S.type);for(const K of S.layerUpdates){const ct=Q.data.subarray(K*G/Q.data.BYTES_PER_ELEMENT,(K+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,dt,wt,ct)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,wt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,dt,wt,Q.data);else if(S.isData3DTexture)Ut?(ne&&e.texStorage3D(i.TEXTURE_3D,st,Rt,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,wt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,dt,wt,Q.data);else if(S.isFramebufferTexture){if(ne)if(Ut)e.texStorage2D(i.TEXTURE_2D,st,Rt,Q.width,Q.height);else{let G=Q.width,K=Q.height;for(let ct=0;ct<st;ct++)e.texImage2D(i.TEXTURE_2D,ct,Rt,G,K,0,dt,wt,null),G>>=1,K>>=1}}else if(Vt.length>0){if(Ut&&ne){const G=bt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,G.width,G.height)}for(let G=0,K=Vt.length;G<K;G++)ft=Vt[G],Ut?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt,wt,ft):e.texImage2D(i.TEXTURE_2D,G,Rt,dt,wt,ft);S.generateMipmaps=!1}else if(Ut){if(ne){const G=bt(Q);e.texStorage2D(i.TEXTURE_2D,st,Rt,G.width,G.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,wt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Rt,dt,wt,Q);p(S)&&u(q),xt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function et(R,S,z){if(S.image.length!==6)return;const q=ee(R,S),Z=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const Y=n.get(Z);if(Z.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+z);const xt=Yt.getPrimaries(Yt.workingColorSpace),at=S.colorSpace===Dn?null:Yt.getPrimaries(S.colorSpace),ut=S.colorSpace===Dn||xt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Xt=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Xt&&!Q?dt[K]=M(S.image[K],!0,s.maxCubemapSize):dt[K]=Q?S.image[K].image:S.image[K],dt[K]=se(S,dt[K]);const wt=dt[0],Rt=r.convert(S.format,S.colorSpace),ft=r.convert(S.type),Vt=y(S.internalFormat,Rt,ft,S.colorSpace),Ut=S.isVideoTexture!==!0,ne=Y.__version===void 0||q===!0,I=Z.dataReady;let st=L(S,wt);Ot(i.TEXTURE_CUBE_MAP,S);let G;if(Xt){Ut&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Vt,wt.width,wt.height);for(let K=0;K<6;K++){G=dt[K].mipmaps;for(let ct=0;ct<G.length;ct++){const ot=G[ct];S.format!==nn?Rt!==null?Ut?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,ot.width,ot.height,Rt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Vt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,ot.width,ot.height,Rt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Vt,ot.width,ot.height,0,Rt,ft,ot.data)}}}else{if(G=S.mipmaps,Ut&&ne){G.length>0&&st++;const K=bt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Vt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,Rt,ft,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,dt[K].width,dt[K].height,0,Rt,ft,dt[K].data);for(let ct=0;ct<G.length;ct++){const Lt=G[ct].image[K].image;Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Lt.width,Lt.height,Rt,ft,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Vt,Lt.width,Lt.height,0,Rt,ft,Lt.data)}}else{Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,ft,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,Rt,ft,dt[K]);for(let ct=0;ct<G.length;ct++){const ot=G[ct];Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Rt,ft,ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Vt,Rt,ft,ot.image[K])}}}p(S)&&u(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function vt(R,S,z,q,Z,Y){const xt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),ut=y(z.internalFormat,xt,at,z.colorSpace),Xt=n.get(S),Q=n.get(z);if(Q.__renderTarget=S,!Xt.__hasExternalTextures){const dt=Math.max(1,S.width>>Y),wt=Math.max(1,S.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,ut,dt,wt,S.depth,0,xt,at,null):e.texImage2D(Z,Y,ut,dt,wt,0,xt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,Q.__webglTexture,0,Bt(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,Q.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const q=S.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=x(S.stencilBuffer,Z),xt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Bt(S);Ht(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,R)}else{const q=S.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],xt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),ut=y(Y.internalFormat,xt,at,Y.colorSpace),Xt=Bt(S);z&&Ht(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,ut,S.width,S.height):Ht(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,ut,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ut,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Z=q.__webglTexture,Y=Bt(S);if(S.depthTexture.format===Di)Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Bi)Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Pt(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");At(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),rt(S.__webglDepthbuffer[q],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),rt(S.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(R,S,z){const q=n.get(R);S!==void 0&&vt(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Pt(R)}function ce(R){const S=R.texture,z=n.get(R),q=n.get(S);R.addEventListener("dispose",A);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let ut=0;ut<S.mipmaps.length;ut++)z.__webglFramebuffer[at][ut]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(xt)for(let at=0,ut=Z.length;at<ut;at++){const Xt=n.get(Z[at]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ht(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ut=Z[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Xt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),dt=y(ut.internalFormat,Xt,Q,ut.colorSpace,R.isXRRenderTarget===!0),wt=Bt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)vt(z.__webglFramebuffer[at][ut],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else vt(z.__webglFramebuffer[at],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(S)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,ut=Z.length;at<ut;at++){const Xt=Z[at],Q=n.get(Xt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ot(i.TEXTURE_2D,Xt),vt(z.__webglFramebuffer,R,Xt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Xt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,q.__webglTexture),Ot(at,S),S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)vt(z.__webglFramebuffer[ut],R,S,i.COLOR_ATTACHMENT0,at,ut);else vt(z.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,at,0);p(S)&&u(at),e.unbindTexture()}R.depthBuffer&&Pt(R)}function Wt(R){const S=R.textures;for(let z=0,q=S.length;z<q;z++){const Z=S[z];if(p(Z)){const Y=b(R),xt=n.get(Z).__webglTexture;e.bindTexture(Y,xt),u(Y),e.unbindTexture()}}}const ge=[],F=[];function Ge(R){if(R.samples>0){if(Ht(R)===!1){const S=R.textures,z=R.width,q=R.height;let Z=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),at=S.length>1;if(at)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Xt=n.get(S[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,Z,i.NEAREST),l===!0&&(ge.length=0,F.length=0,ge.push(i.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Xt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Bt(R){return Math.min(s.maxSamples,R.samples)}function Ht(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function se(R,S){const z=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Wi&&z!==Dn&&(Yt.getTransfer(z)===te?(q!==nn||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ht}function $m(i,t){function e(n,s=Dn){let r;const a=Yt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.BYTE;if(n===sc)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===oc)return i.RGB;if(n===nn)return i.RGBA;if(n===lc)return i.LUMINANCE;if(n===cc)return i.LUMINANCE_ALPHA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===uc)return i.RG;if(n===So)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===lr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Pa||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Ua)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===za||n===ka||n===Ba||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===$a||n===qa||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cr||n===ja||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cr)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===Ja||n===Qa||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class qm extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Km={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),u=this._getHandJoint(c,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zm=`
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

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:jm,fragmentShader:Zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qm extends Xi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const M=new Jm,p=e.getContextAttributes();let u=null,b=null;const y=[],x=[],L=new kt;let w=null;const A=new He;A.viewport=new pe;const T=new He;T.viewport=new pe;const g=[A,T],v=new qm;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=y[$];return et===void 0&&(et=new sa,y[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=y[$];return et===void 0&&(et=new sa,y[$]=et),et.getGripSpace()},this.getHand=function($){let et=y[$];return et===void 0&&(et=new sa,y[$]=et),et.getHandSpace()};function O($){const et=x.indexOf($.inputSource);if(et===-1)return;const vt=y[et];vt!==void 0&&(vt.update($.inputSource,$.frame,c||a),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let $=0;$<y.length;$++){const et=x[$];et!==null&&(x[$]=null,y[$].disconnect(et))}P=null,D=null,M.reset(),t.setRenderTarget(u),m=null,f=null,h=null,s=null,b=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new li(m.framebufferWidth,m.framebufferHeight,{format:nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,vt=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Bi:Di,vt=p.stencil?ki:oi);const At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new li(f.textureWidth,f.textureHeight,{format:nn,type:En,depthTexture:new Rc(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function X($){for(let et=0;et<$.removed.length;et++){const vt=$.removed[et],rt=x.indexOf(vt);rt>=0&&(x[rt]=null,y[rt].disconnect(vt))}for(let et=0;et<$.added.length;et++){const vt=$.added[et];let rt=x.indexOf(vt);if(rt===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=x.length){x.push(vt),rt=Pt;break}else if(x[Pt]===null){x[Pt]=vt,rt=Pt;break}if(rt===-1)break}const At=y[rt];At&&At.connect(vt)}}const W=new C,j=new C;function H($,et,vt){W.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const rt=W.distanceTo(j),At=et.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,zt=At[14]/(At[10]-1),ce=At[14]/(At[10]+1),Wt=(At[9]+1)/At[5],ge=(At[9]-1)/At[5],F=(At[8]-1)/At[0],Ge=(Pt[8]+1)/Pt[0],Bt=zt*F,Ht=zt*Ge,Tt=rt/(-F+Ge),se=Tt*-F;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=zt+Tt,R=ce+Tt,S=Bt-se,z=Ht+(rt-se),q=Wt*ce/R*bt,Z=ge*ce/R*bt;$.projectionMatrix.makePerspective(S,z,q,Z,bt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,vt=$.far;M.texture!==null&&(M.depthNear>0&&(et=M.depthNear),M.depthFar>0&&(vt=M.depthFar)),v.near=T.near=A.near=et,v.far=T.far=A.far=vt,(P!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,D=v.far),A.layers.mask=$.layers.mask|2,T.layers.mask=$.layers.mask|4,v.layers.mask=A.layers.mask|T.layers.mask;const rt=$.parent,At=v.cameras;it(v,rt);for(let Pt=0;Pt<At.length;Pt++)it(At[Pt],rt);At.length===2?H(v,A,T):v.projectionMatrix.copy(A.projectionMatrix),ht($,v,rt)};function ht($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=eo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let St=null;function Ot($,et){if(d=et.getViewerPose(c||a),_=et,d!==null){const vt=d.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let rt=!1;vt.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Pt=0;Pt<vt.length;Pt++){const zt=vt[Pt];let ce=null;if(m!==null)ce=m.getViewport(zt);else{const ge=h.getViewSubImage(f,zt);ce=ge.viewport,Pt===0&&(t.setRenderTargetTextures(b,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(b))}let Wt=g[Pt];Wt===void 0&&(Wt=new He,Wt.layers.enable(Pt),Wt.viewport=new pe,g[Pt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ce.x,ce.y,ce.width,ce.height),Pt===0&&(v.matrix.copy(Wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Wt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=h.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&M.init(t,Pt,s.renderState)}}for(let vt=0;vt<y.length;vt++){const rt=x[vt],At=y[vt];rt!==null&&At!==void 0&&At.update(rt,et,c||a)}St&&St($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const ee=new wc;ee.setAnimationLoop(Ot),this.setAnimationLoop=function($){St=$},this.dispose=function(){}}}const Xn=new hn,t0=new he;function e0(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Ec(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,y,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),h(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),M(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,y):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ne&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ne&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),y=b.envMap,x=b.envMapRotation;y&&(p.envMap.value=y,Xn.copy(x),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),p.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(Xn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=y*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ne&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const x=y.program;n.uniformBlockBinding(b,x)}function c(b,y){let x=s[b.id];x===void 0&&(_(b),x=d(b),s[b.id]=x,b.addEventListener("dispose",p));const L=y.program;n.updateUBOMapping(b,L);const w=t.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function d(b){const y=h();b.__bindingPointIndex=y;const x=i.createBuffer(),L=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=s[b.id],x=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,A=x.length;w<A;w++){const T=Array.isArray(x[w])?x[w]:[x[w]];for(let g=0,v=T.length;g<v;g++){const P=T[g];if(m(P,w,g,L)===!0){const D=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let X=0;X<O.length;X++){const W=O[X],j=M(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,D+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,y,x,L){const w=b.value,A=y+"_"+x;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{const T=L[A];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return L[A]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function _(b){const y=b.uniforms;let x=0;const L=16;for(let A=0,T=y.length;A<T;A++){const g=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,P=g.length;v<P;v++){const D=g[v],O=Array.isArray(D.value)?D.value:[D.value];for(let V=0,X=O.length;V<X;V++){const W=O[V],j=M(W),H=x%L,it=H%j.boundary,ht=H+it;x+=it,ht!==0&&L-ht<j.storage&&(x+=L-ht),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=j.storage}}}const w=x%L;return w>0&&(x+=L-w),b.__size=x,b.__cache={},this}function M(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class i0{constructor(t={}){const{canvas:e=Wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),M=new Int32Array(4);let p=null,u=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Un,this.toneMappingExposure=1;const x=this;let L=!1,w=0,A=0,T=null,g=-1,v=null;const P=new pe,D=new pe;let O=null;const V=new Ft(0);let X=0,W=e.width,j=e.height,H=1,it=null,ht=null;const St=new pe(0,0,W,j),Ot=new pe(0,0,W,j);let ee=!1;const $=new Eo;let et=!1,vt=!1;const rt=new he,At=new he,Pt=new C,zt=new pe,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ge(){return T===null?H:1}let F=n;function Ge(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${po}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),F===null){const U="webgl2";if(F=Ge(U,E),F===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Bt,Ht,Tt,se,bt,R,S,z,q,Z,Y,xt,at,ut,Xt,Q,dt,wt,Rt,ft,Vt,Ut,ne,I;function st(){Bt=new lp(F),Bt.init(),Ut=new $m(F,Bt),Ht=new np(F,Bt,t,Ut),Tt=new Wm(F,Bt),Ht.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),se=new up(F),bt=new Cm,R=new Ym(F,Bt,Tt,bt,Ht,Ut,se),S=new sp(x),z=new op(x),q=new _u(F),ne=new tp(F,q),Z=new cp(F,q,se,ne),Y=new fp(F,Z,q,se),Rt=new dp(F,Ht,R),Q=new ip(bt),xt=new Rm(x,S,z,Bt,Ht,ne,Q),at=new e0(x,bt),ut=new Lm,Xt=new Om(Bt),wt=new Qf(x,S,z,Tt,Y,m,l),dt=new Vm(x,Y,Ht),I=new n0(F,se,Ht,Tt),ft=new ep(F,Bt,se),Vt=new hp(F,Bt,se),se.programs=xt.programs,x.capabilities=Ht,x.extensions=Bt,x.properties=bt,x.renderLists=ut,x.shadowMap=dt,x.state=Tt,x.info=se}st();const G=new Qm(x,F);this.xr=G,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(W,j,!1))},this.getSize=function(E){return E.set(W,j)},this.setSize=function(E,U,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,j=U,e.width=Math.floor(E*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*H,j*H).floor()},this.setDrawingBufferSize=function(E,U,k){W=E,j=U,H=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,U,k,B){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,U,k,B),Tt.viewport(P.copy(St).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ot)},this.setScissor=function(E,U,k,B){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,U,k,B),Tt.scissor(D.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){Tt.setScissorTest(ee=E)},this.setOpaqueSort=function(E){it=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(E=!0,U=!0,k=!0){let B=0;if(E){let N=!1;if(T!==null){const tt=T.texture.format;N=tt===yo||tt===So||tt===Mo}if(N){const tt=T.texture.type,lt=tt===En||tt===oi||tt===ds||tt===ki||tt===vo||tt===xo,pt=wt.getClearColor(),mt=wt.getClearAlpha(),Ct=pt.r,Dt=pt.g,gt=pt.b;lt?(_[0]=Ct,_[1]=Dt,_[2]=gt,_[3]=mt,F.clearBufferuiv(F.COLOR,0,_)):(M[0]=Ct,M[1]=Dt,M[2]=gt,M[3]=mt,F.clearBufferiv(F.COLOR,0,M))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT),k&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Xt.dispose(),bt.dispose(),S.dispose(),z.dispose(),Y.dispose(),ne.dispose(),I.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Po),G.removeEventListener("sessionend",Lo),kn.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=se.autoReset,U=dt.enabled,k=dt.autoUpdate,B=dt.needsUpdate,N=dt.type;st(),se.autoReset=E,dt.enabled=U,dt.autoUpdate=k,dt.needsUpdate=B,dt.type=N}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){const U=E.target;U.removeEventListener("dispose",Lt),ue(U)}function ue(E){Ae(E),bt.remove(E)}function Ae(E){const U=bt.get(E).programs;U!==void 0&&(U.forEach(function(k){xt.releaseProgram(k)}),E.isShaderMaterial&&xt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,B,N,tt){U===null&&(U=ce);const lt=N.isMesh&&N.matrixWorld.determinant()<0,pt=Qc(E,U,k,B,N);Tt.setMaterial(B,lt);let mt=k.index,Ct=1;if(B.wireframe===!0){if(mt=Z.getWireframeAttribute(k),mt===void 0)return;Ct=2}const Dt=k.drawRange,gt=k.attributes.position;let $t=Dt.start*Ct,ie=(Dt.start+Dt.count)*Ct;tt!==null&&($t=Math.max($t,tt.start*Ct),ie=Math.min(ie,(tt.start+tt.count)*Ct)),mt!==null?($t=Math.max($t,0),ie=Math.min(ie,mt.count)):gt!=null&&($t=Math.max($t,0),ie=Math.min(ie,gt.count));const re=ie-$t;if(re<0||re===1/0)return;ne.setup(N,B,pt,k,mt);let De,Kt=ft;if(mt!==null&&(De=q.get(mt),Kt=Vt,Kt.setIndex(De)),N.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*ge()),Kt.setMode(F.LINES)):Kt.setMode(F.TRIANGLES);else if(N.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),Tt.setLineWidth(Mt*ge()),N.isLineSegments?Kt.setMode(F.LINES):N.isLineLoop?Kt.setMode(F.LINE_LOOP):Kt.setMode(F.LINE_STRIP)}else N.isPoints?Kt.setMode(F.POINTS):N.isSprite&&Kt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Mt=N._multiDrawStarts,dn=N._multiDrawCounts,jt=N._multiDrawCount,Ke=mt?q.get(mt).bytesPerElement:1,ui=bt.get(B).currentProgram.getUniforms();for(let Fe=0;Fe<jt;Fe++)ui.setValue(F,"_gl_DrawID",Fe),Kt.render(Mt[Fe]/Ke,dn[Fe])}else if(N.isInstancedMesh)Kt.renderInstances($t,re,N.count);else if(k.isInstancedBufferGeometry){const Mt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,dn=Math.min(k.instanceCount,Mt);Kt.renderInstances($t,re,dn)}else Kt.render($t,re)};function Qt(E,U,k){E.transparent===!0&&E.side===xn&&E.forceSinglePass===!1?(E.side=Ne,E.needsUpdate=!0,Es(E,U,k),E.side=Fn,E.needsUpdate=!0,Es(E,U,k),E.side=xn):Es(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),u=Xt.get(k),u.init(U),y.push(u),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const B=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const pt=tt[lt];Qt(pt,k,N),B.add(pt)}else Qt(tt,k,N),B.add(tt)}),y.pop(),u=null,B},this.compileAsync=function(E,U,k=null){const B=this.compile(E,U,k);return new Promise(N=>{function tt(){if(B.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){N(E);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let qe=null;function un(E){qe&&qe(E)}function Po(){kn.stop()}function Lo(){kn.start()}const kn=new wc;kn.setAnimationLoop(un),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){qe=E,G.setAnimationLoop(E),E===null?kn.stop():kn.start()},G.addEventListener("sessionstart",Po),G.addEventListener("sessionend",Lo),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,T),u=Xt.get(E,y.length),u.init(U),y.push(u),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(At),vt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,vt),p=ut.get(E,b.length),p.init(),b.push(p),G.enabled===!0&&G.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&Cr(tt,U,-1/0,x.sortObjects)}Cr(E,U,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(it,ht),Wt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Wt&&wt.addToRenderList(p,E),this.info.render.frame++,et===!0&&Q.beginShadows();const k=u.state.shadowsArray;dt.render(k,E,U),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,N=p.transmissive;if(u.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let lt=0,pt=tt.length;lt<pt;lt++){const mt=tt[lt];Io(B,N,E,mt)}Wt&&wt.render(E);for(let lt=0,pt=tt.length;lt<pt;lt++){const mt=tt[lt];Do(p,E,mt,mt.viewport)}}else N.length>0&&Io(B,N,E,U),Wt&&wt.render(E),Do(p,E,U);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,U),ne.resetDefaultState(),g=-1,v=null,y.pop(),y.length>0?(u=y[y.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Cr(E,U,k,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){B&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);const lt=Y.update(E),pt=E.material;pt.visible&&p.push(E,lt,pt,k,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const lt=Y.update(E),pt=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),zt.copy(lt.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(pt)){const mt=lt.groups;for(let Ct=0,Dt=mt.length;Ct<Dt;Ct++){const gt=mt[Ct],$t=pt[gt.materialIndex];$t&&$t.visible&&p.push(E,lt,$t,k,zt.z,gt)}}else pt.visible&&p.push(E,lt,pt,k,zt.z,null)}}const tt=E.children;for(let lt=0,pt=tt.length;lt<pt;lt++)Cr(tt[lt],U,k,B)}function Do(E,U,k,B){const N=E.opaque,tt=E.transmissive,lt=E.transparent;u.setupLightsView(k),et===!0&&Q.setGlobalState(x.clippingPlanes,k),B&&Tt.viewport(P.copy(B)),N.length>0&&ys(N,U,k),tt.length>0&&ys(tt,U,k),lt.length>0&&ys(lt,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Io(E,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new li(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?gs:En,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const tt=u.state.transmissionRenderTarget[B.id],lt=B.viewport||P;tt.setSize(lt.z,lt.w);const pt=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(V),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&wt.render(k);const mt=x.toneMapping;x.toneMapping=Un;const Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),et===!0&&Q.setGlobalState(x.clippingPlanes,B),ys(E,k,B),R.updateMultisampleRenderTarget(tt),R.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let gt=0,$t=U.length;gt<$t;gt++){const ie=U[gt],re=ie.object,De=ie.geometry,Kt=ie.material,Mt=ie.group;if(Kt.side===xn&&re.layers.test(B.layers)){const dn=Kt.side;Kt.side=Ne,Kt.needsUpdate=!0,Uo(re,k,B,De,Kt,Mt),Kt.side=dn,Kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(R.updateMultisampleRenderTarget(tt),R.updateRenderTargetMipmap(tt))}x.setRenderTarget(pt),x.setClearColor(V,X),Ct!==void 0&&(B.viewport=Ct),x.toneMapping=mt}function ys(E,U,k){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=E.length;N<tt;N++){const lt=E[N],pt=lt.object,mt=lt.geometry,Ct=B===null?lt.material:B,Dt=lt.group;pt.layers.test(k.layers)&&Uo(pt,U,k,mt,Ct,Dt)}}function Uo(E,U,k,B,N,tt){E.onBeforeRender(x,U,k,B,N,tt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,k,B,E,tt),N.transparent===!0&&N.side===xn&&N.forceSinglePass===!1?(N.side=Ne,N.needsUpdate=!0,x.renderBufferDirect(k,U,B,N,E,tt),N.side=Fn,N.needsUpdate=!0,x.renderBufferDirect(k,U,B,N,E,tt),N.side=xn):x.renderBufferDirect(k,U,B,N,E,tt),E.onAfterRender(x,U,k,B,N,tt)}function Es(E,U,k){U.isScene!==!0&&(U=ce);const B=bt.get(E),N=u.state.lights,tt=u.state.shadowsArray,lt=N.state.version,pt=xt.getParameters(E,N.state,tt,U,k),mt=xt.getProgramCacheKey(pt);let Ct=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ct===void 0&&(E.addEventListener("dispose",Lt),Ct=new Map,B.programs=Ct);let Dt=Ct.get(mt);if(Dt!==void 0){if(B.currentProgram===Dt&&B.lightsStateVersion===lt)return Fo(E,pt),Dt}else pt.uniforms=xt.getUniforms(E),E.onBeforeCompile(pt,x),Dt=xt.acquireProgram(pt,mt),Ct.set(mt,Dt),B.uniforms=pt.uniforms;const gt=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(gt.clippingPlanes=Q.uniform),Fo(E,pt),B.needsLights=eh(E),B.lightsStateVersion=lt,B.needsLights&&(gt.ambientLightColor.value=N.state.ambient,gt.lightProbe.value=N.state.probe,gt.directionalLights.value=N.state.directional,gt.directionalLightShadows.value=N.state.directionalShadow,gt.spotLights.value=N.state.spot,gt.spotLightShadows.value=N.state.spotShadow,gt.rectAreaLights.value=N.state.rectArea,gt.ltc_1.value=N.state.rectAreaLTC1,gt.ltc_2.value=N.state.rectAreaLTC2,gt.pointLights.value=N.state.point,gt.pointLightShadows.value=N.state.pointShadow,gt.hemisphereLights.value=N.state.hemi,gt.directionalShadowMap.value=N.state.directionalShadowMap,gt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,gt.spotShadowMap.value=N.state.spotShadowMap,gt.spotLightMatrix.value=N.state.spotLightMatrix,gt.spotLightMap.value=N.state.spotLightMap,gt.pointShadowMap.value=N.state.pointShadowMap,gt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Dt,B.uniformsList=null,Dt}function No(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=ur.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Fo(E,U){const k=bt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Qc(E,U,k,B,N){U.isScene!==!0&&(U=ce),R.resetTextureUnits();const tt=U.fog,lt=B.isMeshStandardMaterial?U.environment:null,pt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Wi,mt=(B.isMeshStandardMaterial?z:S).get(B.envMap||lt),Ct=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Dt=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),gt=!!k.morphAttributes.position,$t=!!k.morphAttributes.normal,ie=!!k.morphAttributes.color;let re=Un;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(re=x.toneMapping);const De=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=De!==void 0?De.length:0,Mt=bt.get(B),dn=u.state.lights;if(et===!0&&(vt===!0||E!==v)){const We=E===v&&B.id===g;Q.setState(B,E,We)}let jt=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==dn.state.version||Mt.outputColorSpace!==pt||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==mt||B.fog===!0&&Mt.fog!==tt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Ct||Mt.vertexTangents!==Dt||Mt.morphTargets!==gt||Mt.morphNormals!==$t||Mt.morphColors!==ie||Mt.toneMapping!==re||Mt.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,Mt.__version=B.version);let Ke=Mt.currentProgram;jt===!0&&(Ke=Es(B,U,N));let ui=!1,Fe=!1,Ki=!1;const ae=Ke.getUniforms(),rn=Mt.uniforms;if(Tt.useProgram(Ke.program)&&(ui=!0,Fe=!0,Ki=!0),B.id!==g&&(g=B.id,Fe=!0),ui||v!==E){Tt.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),Yh(rt),$h(rt),ae.setValue(F,"projectionMatrix",rt)):ae.setValue(F,"projectionMatrix",E.projectionMatrix),ae.setValue(F,"viewMatrix",E.matrixWorldInverse);const bn=ae.map.cameraPosition;bn!==void 0&&bn.setValue(F,Pt.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&ae.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Fe=!0,Ki=!0)}if(N.isSkinnedMesh){ae.setOptional(F,N,"bindMatrix"),ae.setOptional(F,N,"bindMatrixInverse");const We=N.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),ae.setValue(F,"boneTexture",We.boneTexture,R))}N.isBatchedMesh&&(ae.setOptional(F,N,"batchingTexture"),ae.setValue(F,"batchingTexture",N._matricesTexture,R),ae.setOptional(F,N,"batchingIdTexture"),ae.setValue(F,"batchingIdTexture",N._indirectTexture,R),ae.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(F,"batchingColorTexture",N._colorsTexture,R));const ji=k.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Rt.update(N,k,Ke),(Fe||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,ae.setValue(F,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(rn.envMap.value=mt,rn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Fe&&(ae.setValue(F,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&th(rn,Ki),tt&&B.fog===!0&&at.refreshFogUniforms(rn,tt),at.refreshMaterialUniforms(rn,B,H,j,u.state.transmissionRenderTarget[E.id]),ur.upload(F,No(Mt),rn,R)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ur.upload(F,No(Mt),rn,R),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(F,"center",N.center),ae.setValue(F,"modelViewMatrix",N.modelViewMatrix),ae.setValue(F,"normalMatrix",N.normalMatrix),ae.setValue(F,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const We=B.uniformsGroups;for(let bn=0,Tn=We.length;bn<Tn;bn++){const Oo=We[bn];I.update(Oo,Ke),I.bind(Oo,Ke)}}return Ke}function th(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function eh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,k){bt.get(E.texture).__webglTexture=U,bt.get(E.depthTexture).__webglTexture=k;const B=bt.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=bt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){T=E,w=U,A=k;let B=!0,N=null,tt=!1,lt=!1;if(E){const mt=bt.get(E);if(mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(mt.__hasExternalTextures)R.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const gt=E.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&bt.has(gt)&&(E.width!==gt.image.width||E.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);const Dt=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?N=Dt[U][k]:N=Dt[U],tt=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?N=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[k]:N=Dt,P.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else P.copy(St).multiplyScalar(H).floor(),D.copy(Ot).multiplyScalar(H).floor(),O=ee;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&B&&Tt.drawBuffers(E,N),Tt.viewport(P),Tt.scissor(D),Tt.setScissorTest(O),tt){const mt=bt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,k)}else if(lt){const mt=bt.get(E.texture),Ct=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,mt.__webglTexture,k||0,Ct)}g=-1},this.readRenderTargetPixels=function(E,U,k,B,N,tt,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){Tt.bindFramebuffer(F.FRAMEBUFFER,pt);try{const mt=E.texture,Ct=mt.format,Dt=mt.type;if(!Ht.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&k>=0&&k<=E.height-N&&F.readPixels(U,k,B,N,Ut.convert(Ct),Ut.convert(Dt),tt)}finally{const mt=T!==null?bt.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,B,N,tt,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const mt=E.texture,Ct=mt.format,Dt=mt.type;if(!Ht.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-B&&k>=0&&k<=E.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,pt);const gt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,gt),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(U,k,B,N,Ut.convert(Ct),Ut.convert(Dt),0);const $t=T!==null?bt.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,$t);const ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Xh(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,gt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(gt),F.deleteSync(ie),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(E.image.width*B),tt=Math.floor(E.image.height*B),lt=U!==null?U.x:0,pt=U!==null?U.y:0;R.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,lt,pt,N,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,B=null,N=0){E.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let tt,lt,pt,mt,Ct,Dt,gt,$t,ie;const re=E.isCompressedTexture?E.mipmaps[N]:E.image;k!==null?(tt=k.max.x-k.min.x,lt=k.max.y-k.min.y,pt=k.isBox3?k.max.z-k.min.z:1,mt=k.min.x,Ct=k.min.y,Dt=k.isBox3?k.min.z:0):(tt=re.width,lt=re.height,pt=re.depth||1,mt=0,Ct=0,Dt=0),B!==null?(gt=B.x,$t=B.y,ie=B.z):(gt=0,$t=0,ie=0);const De=Ut.convert(U.format),Kt=Ut.convert(U.type);let Mt;U.isData3DTexture?(R.setTexture3D(U,0),Mt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Mt=F.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Mt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const dn=F.getParameter(F.UNPACK_ROW_LENGTH),jt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=F.getParameter(F.UNPACK_SKIP_PIXELS),ui=F.getParameter(F.UNPACK_SKIP_ROWS),Fe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Dt);const Ki=E.isDataArrayTexture||E.isData3DTexture,ae=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const rn=bt.get(E),ji=bt.get(U),We=bt.get(rn.__renderTarget),bn=bt.get(ji.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,We.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Tn=0;Tn<pt;Tn++)Ki&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(E).__webglTexture,N,Dt+Tn),E.isDepthTexture?(ae&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,N,ie+Tn),F.blitFramebuffer(mt,Ct,tt,lt,gt,$t,tt,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ae?F.copyTexSubImage3D(Mt,N,gt,$t,ie+Tn,mt,Ct,tt,lt):F.copyTexSubImage2D(Mt,N,gt,$t,ie+Tn,mt,Ct,tt,lt);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ae?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Mt,N,gt,$t,ie,tt,lt,pt,De,Kt,re.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,N,gt,$t,ie,tt,lt,pt,De,re.data):F.texSubImage3D(Mt,N,gt,$t,ie,tt,lt,pt,De,Kt,re):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,gt,$t,tt,lt,De,Kt,re.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,gt,$t,re.width,re.height,De,re.data):F.texSubImage2D(F.TEXTURE_2D,N,gt,$t,tt,lt,De,Kt,re);F.pixelStorei(F.UNPACK_ROW_LENGTH,dn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,ui),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),N===0&&U.generateMipmaps&&F.generateMipmap(Mt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,B=null,N=0){return E.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,k,B,N)},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){w=0,A=0,T=null,Tt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class To{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new To(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fl extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fs extends $i{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new C,_r=new C,Ol=new he,ns=new vc,Xs=new wr,ra=new C,zl=new C;class s0 extends ve{constructor(t=new Ve,e=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;Ol.copy(s).invert(),ns.copy(t.ray).applyMatrix4(Ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let M=m,p=_-1;M<p;M+=c){const u=d.getX(M),b=d.getX(M+1),y=Ys(this,t,ns,l,u,b);y&&e.push(y)}if(this.isLineLoop){const M=d.getX(_-1),p=d.getX(m),u=Ys(this,t,ns,l,M,p);u&&e.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let M=m,p=_-1;M<p;M+=c){const u=Ys(this,t,ns,l,M,M+1);u&&e.push(u)}if(this.isLineLoop){const M=Ys(this,t,ns,l,_-1,m);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ys(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(gr.fromBufferAttribute(a,s),_r.fromBufferAttribute(a,r),e.distanceSqToSegment(gr,_r,ra,zl)>n)return;ra.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ra);if(!(l<t.near||l>t.far))return{distance:l,point:zl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const kl=new C,Bl=new C;class io extends s0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)kl.fromBufferAttribute(e,s),Bl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kl.distanceTo(Bl);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class r0 extends Le{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ri extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,d=new kt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=n+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/t+1)/2,d.y=(a[f+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ps extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],f=[],m=[];let _=0;const M=[],p=n/2;let u=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(m,2));function b(){const x=new C,L=new C;let w=0;const A=(e-t)/n;for(let T=0;T<=r;T++){const g=[],v=T/r,P=v*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,V=O*l+o,X=Math.sin(V),W=Math.cos(V);L.x=P*X,L.y=-v*n+p,L.z=P*W,h.push(L.x,L.y,L.z),x.set(X,A,W).normalize(),f.push(x.x,x.y,x.z),m.push(O,1-v),g.push(_++)}M.push(g)}for(let T=0;T<s;T++)for(let g=0;g<r;g++){const v=M[g][T],P=M[g+1][T],D=M[g+1][T+1],O=M[g][T+1];(t>0||g!==0)&&(d.push(v,P,O),w+=3),(e>0||g!==r-1)&&(d.push(P,D,O),w+=3)}c.addGroup(u,w,0),u+=w}function y(x){const L=_,w=new kt,A=new C;let T=0;const g=x===!0?t:e,v=x===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,p*v,0),f.push(0,v,0),m.push(.5,.5),_++;const P=_;for(let D=0;D<=s;D++){const V=D/s*l+o,X=Math.cos(V),W=Math.sin(V);A.x=g*W,A.y=p*v,A.z=g*X,h.push(A.x,A.y,A.z),f.push(0,v,0),w.x=X*.5+.5,w.y=W*.5*v+.5,m.push(w.x,w.y),_++}for(let D=0;D<s;D++){const O=L+D,V=P+D;x===!0?d.push(V,V+1,O):d.push(V+1,V,O),T+=3}c.addGroup(u,T,x===!0?1:2),u+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ms extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new C,x=new C,L=new C;for(let w=0;w<e.length;w+=3)m(e[w+0],y),m(e[w+1],x),m(e[w+2],L),l(y,x,L,b)}function l(b,y,x,L){const w=L+1,A=[];for(let T=0;T<=w;T++){A[T]=[];const g=b.clone().lerp(x,T/w),v=y.clone().lerp(x,T/w),P=w-T;for(let D=0;D<=P;D++)D===0&&T===w?A[T][D]=g:A[T][D]=g.clone().lerp(v,D/P)}for(let T=0;T<w;T++)for(let g=0;g<2*(w-T)-1;g++){const v=Math.floor(g/2);g%2===0?(f(A[T][v+1]),f(A[T+1][v]),f(A[T][v])):(f(A[T][v+1]),f(A[T+1][v+1]),f(A[T+1][v]))}}function c(b){const y=new C;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(b),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function d(){const b=new C;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];const x=p(b)/2/Math.PI+.5,L=u(b)/Math.PI+.5;a.push(x,1-L)}_(),h()}function h(){for(let b=0;b<a.length;b+=6){const y=a[b+0],x=a[b+2],L=a[b+4],w=Math.max(y,x,L),A=Math.min(y,x,L);w>.9&&A<.1&&(y<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),L<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function m(b,y){const x=b*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function _(){const b=new C,y=new C,x=new C,L=new C,w=new kt,A=new kt,T=new kt;for(let g=0,v=0;g<r.length;g+=9,v+=6){b.set(r[g+0],r[g+1],r[g+2]),y.set(r[g+3],r[g+4],r[g+5]),x.set(r[g+6],r[g+7],r[g+8]),w.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),T.set(a[v+4],a[v+5]),L.copy(b).add(y).add(x).divideScalar(3);const P=p(L);M(w,v+0,b,P),M(A,v+2,y,P),M(T,v+4,x,P)}}function M(b,y,x,L){L<0&&b.x===1&&(a[y]=b.x-1),x.x===0&&x.z===0&&(a[y]=L/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.vertices,t.indices,t.radius,t.details)}}const $s=new C,qs=new C,aa=new C,Ks=new Ye;class so extends Ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(hr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:M,b:p,c:u}=Ks;if(M.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Ks.getNormal(aa),h[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const y=(b+1)%3,x=h[b],L=h[y],w=Ks[d[b]],A=Ks[d[y]],T=`${x}_${L}`,g=`${L}_${x}`;g in f&&f[g]?(aa.dot(f[g].normal)<=r&&(m.push(w.x,w.y,w.z),m.push(A.x,A.y,A.z)),f[g]=null):T in f||(f[T]={index0:c[b],index1:c[y],normal:aa.clone()})}}for(const _ in f)if(f[_]){const{index0:M,index1:p}=f[_];$s.fromBufferAttribute(o,M),qs.fromBufferAttribute(o,p),m.push($s.x,$s.y,$s.z),m.push(qs.x,qs.y,qs.z)}this.setAttribute("position",new me(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class wo extends Ms{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wo(t.radius,t.detail)}}class vr extends Ms{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vr(t.radius,t.detail)}}class Qn extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new C,f=new C,m=[],_=[],M=[],p=[];for(let u=0;u<=n;u++){const b=[],y=u/n;let x=0;u===0&&a===0?x=.5/e:u===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const w=L/e;h.x=-t*Math.cos(s+w*r)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(s+w*r)*Math.sin(a+y*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),p.push(w+x,1-y),b.push(c++)}d.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const y=d[u][b+1],x=d[u][b],L=d[u+1][b],w=d[u+1][b+1];(u!==0||a>0)&&m.push(y,x,w),(u!==n-1||l<Math.PI)&&m.push(x,L,w)}this.setIndex(m),this.setAttribute("position",new me(_,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ao extends Ms{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ao(t.radius,t.detail)}}class ls extends $i{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ic extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hl extends Ic{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oa=new he,Vl=new C,Gl=new C;class a0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class o0 extends a0{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wl extends Ic{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new o0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);const le={paper:15986920,paperShade:15130832,ink:1447183,red:9047819,redHot:13639706},Vi={half:22},_t={radius:.34,standHeight:1.75,crouchHeight:1.1,slideHeight:.95,walk:6.4,sprint:9.2,crouch:3.4,ads:4.4,groundAccel:85,airAccel:20,friction:11,overspeedDecel:9,maxSpeed:16,jumpVel:7,gravity:21,stepHeight:.42,slideSpeed:12.4,slideBonus:.9,slideTime:1.05,slideFriction:2.4,slideCooldown:.3,coyote:.1,dashSpeed:15,dashTime:.16,dashCooldown:2.2,wallrunTime:1.4,wallrunGravity:4,wallrunMinSpeed:9,wallJumpOut:7,wallJumpUp:7.2,maxHp:100},Nn={rifle:{id:"rifle",auto:!0,fireInterval:.095,mag:28,reload:1.85,headDmg:46,bodyDmg:23,pellets:1,falloffStart:30,falloffEnd:60,minDmgMul:.75,hipSpread:2,adsSpread:.14,moveSpread:1.4,airSpread:4,slideSpread:2.6,recoil:.62,recoilYaw:.22,adsZoom:.68,adsTime:.17,range:90,tr:"Tüfek",en:"Rifle"},shotgun:{id:"shotgun",auto:!1,fireInterval:.72,mag:6,reload:2.1,headDmg:22,bodyDmg:15,pellets:9,falloffStart:6,falloffEnd:20,minDmgMul:.2,hipSpread:5.2,adsSpread:3.6,moveSpread:.6,airSpread:1.2,slideSpread:.4,recoil:4.2,recoilYaw:.5,adsZoom:.85,adsTime:.14,range:45,tr:"Pompalı",en:"Shotgun"},sniper:{id:"sniper",auto:!1,fireInterval:1.25,mag:5,reload:2.6,headDmg:150,bodyDmg:60,pellets:1,falloffStart:200,falloffEnd:300,minDmgMul:1,hipSpread:7,adsSpread:.02,moveSpread:3.2,airSpread:9,slideSpread:6,recoil:3.5,recoilYaw:.4,adsZoom:.28,adsTime:.3,range:140,swapTime:.5,scope:!0,tr:"Keskin nişancı",en:"Sniper"},pistol:{id:"pistol",auto:!1,fireInterval:.15,mag:12,reload:1.3,headDmg:50,bodyDmg:25,pellets:1,falloffStart:20,falloffEnd:45,minDmgMul:.7,hipSpread:1.1,adsSpread:.25,moveSpread:.8,airSpread:2.5,slideSpread:1.5,recoil:1.3,recoilYaw:.3,adsZoom:.85,adsTime:.12,range:70,swapTime:.18,tr:"Tabanca",en:"Pistol"},smg:{id:"smg",auto:!0,fireInterval:.065,mag:32,reload:1.7,headDmg:30,bodyDmg:15,pellets:1,falloffStart:12,falloffEnd:32,minDmgMul:.6,hipSpread:1.6,adsSpread:.45,moveSpread:.5,airSpread:2,slideSpread:1,recoil:.45,recoilYaw:.3,adsZoom:.8,adsTime:.13,range:60,swapTime:.25,tr:"SMG",en:"SMG"},burst:{id:"burst",auto:!1,fireInterval:.34,mag:24,reload:2,headDmg:54,bodyDmg:27,pellets:1,falloffStart:40,falloffEnd:80,minDmgMul:.8,hipSpread:1.8,adsSpread:.1,moveSpread:1.4,airSpread:4,slideSpread:2.6,recoil:.7,recoilYaw:.15,adsZoom:.62,adsTime:.18,range:100,burst:3,burstGap:.065,tr:"Burst tüfek",en:"Burst rifle"}},xr=["rifle","burst","smg","shotgun","sniper","pistol"],ro=[{id:"classic",tr:"Klasik",en:"Classic",dtr:"5 raundu ilk alan kazanır.",den:"First to 5 rounds.",endless:!1},{id:"streak",tr:"Sonsuz: Seri",en:"Endless: Streak",dtr:"Kaybedene kadar devam. Her galibiyette Nöbetçi bir kademe zorlaşır.",den:"Go until you lose a round. The Sentinel gets harder with every win.",endless:!0},{id:"lives",tr:"Sonsuz: 3 can",en:"Endless: 3 lives",dtr:"3 hakkın var; kaybedilen raunt bir can götürür. Skor: kazanılan raunt.",den:"3 lives; each lost round costs one. Score: rounds won.",endless:!0},{id:"oneshot",tr:"Tek mermi",en:"One shot",dtr:"Tek isabet öldürür, ikiniz için de. 5 raundu ilk alan kazanır.",den:"One hit kills, for both of you. First to 5.",endless:!1},{id:"rotation",tr:"Silah rotasyonu",en:"Weapon rotation",dtr:"Her raunt rastgele bir silah, ikiniz de aynısıyla. 5 raundu ilk alan kazanır.",den:"A random weapon each round, the same for both. First to 5.",endless:!1}],Te={radius:.38,height:1.9,eye:1.66,headR:.25,run:7.8,walk:5,fov:115,hearSprint:15,perceptionLag:.2},jn={winRounds:5,roundTime:90,countdown:3,roundEnd:4.2},ai=1/120,zn=[];function we(i,t,e,n,s,r="paper",a=0){zn.push({min:new C(i-e/2,a,t-n/2),max:new C(i+e/2,a+s,t+n/2),style:r})}function qt(i,t,e,n,s,r="paper"){we(i,t,e,n,s,r),we(i,-t,e,n,s,r)}const fe=Vi.half,la={avlu:{tr:"Avlu",en:"Courtyard",descTr:"Üç koridor, alçak siperler. Klasik.",descEn:"Three lanes, low cover. Classic."},kanal:{tr:"Kanal",en:"Canal",descTr:"Uzun, yüksek duvarlar: duvar koşusu için.",descEn:"Long, tall walls: built for wall-running."}};let Mr=9.5;function Uc(i){we(0,-fe-.5,2*fe+2,1,i,"wall"),we(0,fe+.5,2*fe+2,1,i,"wall"),we(-fe-.5,0,1,2*fe+2,i,"wall"),we(fe+.5,0,1,2*fe+2,i,"wall")}function l0(){Uc(5),qt(-6.25,12.5,6.5,1,3),qt(6.25,12.5,6.5,1,3),qt(-9.5,8,1,8,3),qt(9.5,8,1,8,3),we(0,0,2.6,2.6,3.6,"ink"),qt(0,6,4,.8,1,"low"),we(-4.5,0,1.5,1.5,1,"low"),we(4.5,0,1.5,1.5,1,"low"),we(-16,0,2,4,2.6,"ink"),qt(-19,7,2,2,1,"low"),qt(-13,9,1.5,1.5,2.2),we(17,0,.8,6,1,"low"),qt(14,6,2.5,2,2.6),qt(20,10,2,2,1,"low"),qt(-15,17,2,2,1,"low"),qt(15,17,2,2,1,"low"),qt(-5.5,16.5,3,1,1,"low"),qt(-18.6,16,1.6,1.6,2),qt(-17,16,1.6,1.6,1,"low"),qt(18.6,19.5,1.6,1.6,2),Mr=9.5,Rr.push(be(-14.2,-3.2,-16,10,"W"),be(-12,-10.6,-18,6,"W"),be(-19.5,-9.2,-18,8,"W"),be(2.2,-2.2,0,11,"C"),be(-2.2,-2.2,0,11,"C"),be(1.5,-7.2,0,12,"C"),be(14,-7.6,16,8,"E"),be(18.6,-4.2,18,10,"E"),be(20.5,-12,17,6,"E"))}function c0(){Uc(6.5),qt(-8.5,9.5,.8,13,4.6,"ink"),qt(8.5,9.5,.8,13,4.6,"ink"),qt(-3.6,8,1.4,1.4,4.2),qt(3.6,8,1.4,1.4,4.2),qt(0,12.5,4.5,.8,1,"low"),we(0,0,3.2,1,1.1,"low"),we(-4.5,0,1.4,2.4,2.4),we(4.5,0,1.4,2.4,2.4),qt(0,4.5,1.2,1.2,1,"low"),we(-15.5,0,.8,12,4.2),qt(-19.5,10.5,2,2,1,"low"),qt(-12,10,1.6,1.6,2.4),we(-12,0,1.4,1.4,1,"low"),qt(13.5,3.5,3.4,.8,4.2),qt(18.5,9.5,3.4,.8,4.2),we(19,0,1,3.2,1,"low"),qt(12.5,12.5,1.6,1.6,1,"low"),qt(0,17,6,.8,2.6),qt(-13,18.5,2,2,1,"low"),qt(13,18.5,2,2,1,"low"),qt(-19,18,1.6,1.6,2),qt(-17.4,18,1.6,1.6,1,"low"),Mr=8.5,Rr.push(be(-13.5,-6.8,-12,10,"W"),be(-17.5,-7.5,-18,9,"W"),be(-11,-11.8,-14,6,"W"),be(-2.2,-9.3,0,12,"C"),be(2.2,-9.3,0,12,"C"),be(0,-1.4,0,12,"C"),be(13.5,-5,15,8,"E"),be(19.5,-11,18,6,"E"),be(16,-2.2,12,9,"E"))}const Nc=zn,h0=new C(0,0,20),u0=new C(0,0,-20);function Fc(i){zn.length=0,Rr.length=0,i==="kanal"?c0():l0(),d0()}function Xl(i,t,e,n,s=2){const r=n+.14;let a=null,o=1/0;for(const l of zn){if(l.max.y-t<s||l.min.y>t+1)continue;const c=e>l.min.z-.05&&e<l.max.z+.05,d=i>l.min.x-.05&&i<l.max.x+.05;if(c){const h=l.min.x-i,f=i-l.max.x;h>=0&&h<r&&h<o&&(o=h,a=new C(-1,0,0)),f>=0&&f<r&&f<o&&(o=f,a=new C(1,0,0))}if(d){const h=l.min.z-e,f=e-l.max.z;h>=0&&h<r&&h<o&&(o=h,a=new C(0,0,-1)),f>=0&&f<r&&f<o&&(o=f,a=new C(0,0,1))}}return a}function Sr(i,t,e,n){let s=0,r=n,a=-1,o=0;for(let l=0;l<3;l++){const c=l===0?i.x:l===1?i.y:i.z,d=l===0?t.x:l===1?t.y:t.z,h=l===0?e.min.x:l===1?e.min.y:e.min.z,f=l===0?e.max.x:l===1?e.max.y:e.max.z;if(Math.abs(d)<1e-9){if(c<h||c>f)return null}else{const m=1/d;let _=(h-c)*m,M=(f-c)*m,p=-1;if(_>M){const u=_;_=M,M=u,p=1}if(_>s&&(s=_,a=l,o=p),M<r&&(r=M),s>r)return null}}return a<0?null:{t:s,axis:a,sign:o}}function ao(i,t,e){let n=null,s=e;for(const r of zn){const a=Sr(i,t,r,s);if(a&&a.t<s){s=a.t;const o=new C;a.axis===0?o.x=a.sign:a.axis===1?o.y=a.sign:o.z=a.sign,n={t:a.t,normal:o,box:r}}}if(t.y<-1e-6){const r=-i.y/t.y;r>0&&r<s&&(n={t:r,normal:new C(0,1,0),box:null})}return n}const js=new C;function ti(i,t){js.subVectors(t,i);const e=js.length();if(e<1e-4)return!0;js.divideScalar(e);for(const n of zn)if(Sr(i,js,n,e))return!1;return!0}function Yl(i,t,e,n,s){const r=i.x-e.x,a=i.y-e.y,o=i.z-e.z,l=r*t.x+a*t.y+o*t.z,c=r*r+a*a+o*o-n*n,d=l*l-c;if(d<0)return null;const h=-l-Math.sqrt(d);return h<0||h>s?null:h}function cs(i,t,e,n,s){for(const r of zn)if(i+n>r.min.x+1e-4&&i-n<r.max.x-1e-4&&e+n>r.min.z+1e-4&&e-n<r.max.z-1e-4&&t+s>r.min.y+1e-4&&t<r.max.y-1e-4)return r;return null}function oo(i,t,e,n,s,r,a){let o=!1;for(const d of[0,2]){const h=(d===0?t.x:t.z)*e;if(h===0)continue;d===0?i.x+=h:i.z+=h;const f=cs(i.x,i.y,i.z,n,s);if(f){const m=f.max.y-i.y;if(r&&m>0&&m<=a&&!cs(i.x,f.max.y+.001,i.z,n,s)){i.y=f.max.y+.001;continue}d===0?(i.x=h>0?f.min.x-n-.001:f.max.x+n+.001,t.x=0):(i.z=h>0?f.min.z-n-.001:f.max.z+n+.001,t.z=0),o=!0}}let l=!1;i.y+=t.y*e;const c=cs(i.x,i.y,i.z,n,s);return c&&(t.y<=0?(i.y=c.max.y,l=!0):i.y=c.min.y-s-.001,t.y=0),i.y<=0&&(i.y=0,t.y<0&&(t.y=0),l=!0),!l&&t.y<=0&&(i.y<.002||cs(i.x,i.y-.02,i.z,n,s))&&(l=!0),{grounded:l,hitWall:o}}const ci=.5,oe=Math.round(2*fe/ci),Oc=new Uint8Array(oe*oe);function d0(){for(let t=0;t<oe;t++)for(let e=0;e<oe;e++){const n=-fe+(t+.5)*ci,s=-fe+(e+.5)*ci;let r=0;if(Math.abs(n)>fe-.5||Math.abs(s)>fe-.5)r=1;else for(const a of zn)if(!(a.max.y<.4)&&n>a.min.x-.5&&n<a.max.x+.5&&s>a.min.z-.5&&s<a.max.z+.5){r=1;break}Oc[e*oe+t]=r}}function lo(i,t){const e=Math.max(0,Math.min(oe-1,Math.floor((i+fe)/ci))),n=Math.max(0,Math.min(oe-1,Math.floor((t+fe)/ci)));return[e,n]}function f0(i,t){return new C(-fe+(i+.5)*ci,0,-fe+(t+.5)*ci)}function Ui(i,t){return i<0||t<0||i>=oe||t>=oe?!0:Oc[t*oe+i]===1}function co(i,t){const[e,n]=lo(i,t);return!Ui(e,n)}function $l(i,t){if(!Ui(i,t))return[i,t];for(let e=1;e<12;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++)if(Math.max(Math.abs(n),Math.abs(s))===e&&!Ui(i+n,t+s))return[i+n,t+s];return[i,t]}function p0(i,t){const e=t.x-i.x,n=t.z-i.z,s=Math.hypot(e,n),r=Math.ceil(s/.2);for(let a=1;a<=r;a++){const o=a/r;if(!co(i.x+e*o,i.z+n*o))return!1}return!0}const is=new Float32Array(oe*oe),ca=new Int32Array(oe*oe),Zs=new Uint8Array(oe*oe);function zc(i,t){const[e,n]=$l(...lo(i.x,i.z)),[s,r]=$l(...lo(t.x,t.z)),a=n*oe+e,o=r*oe+s;is.fill(1/0),ca.fill(-1),Zs.fill(0);const l=[],c=(u,b)=>{l.push([u,b]);let y=l.length-1;for(;y>0;){const x=y-1>>1;if(l[x][0]<=l[y][0])break;[l[x],l[y]]=[l[y],l[x]],y=x}},d=()=>{const u=l[0],b=l.pop();if(l.length){l[0]=b;let y=0;for(;;){const x=2*y+1,L=x+1;let w=y;if(x<l.length&&l[x][0]<l[w][0]&&(w=x),L<l.length&&l[L][0]<l[w][0]&&(w=L),w===y)break;[l[w],l[y]]=[l[y],l[w]],y=w}}return u},h=u=>{const b=u%oe,y=u/oe|0,x=Math.abs(b-s),L=Math.abs(y-r);return Math.max(x,L)+.414*Math.min(x,L)};is[a]=0,c(h(a),a);let f=!1;for(;l.length;){const[,u]=d();if(Zs[u])continue;if(Zs[u]=1,u===o){f=!0;break}const b=u%oe,y=u/oe|0;for(let x=-1;x<=1;x++)for(let L=-1;L<=1;L++){if(!x&&!L)continue;const w=b+x,A=y+L;if(Ui(w,A)||x&&L&&(Ui(b+x,y)||Ui(b,y+L)))continue;const T=A*oe+w;if(Zs[T])continue;const g=is[u]+(x&&L?1.414:1);g<is[T]&&(is[T]=g,ca[T]=u,c(g+h(T),T))}}if(!f)return[t.clone()];const m=[];for(let u=o;u!==-1;u=ca[u])m.push(f0(u%oe,u/oe|0));m.reverse();const _=[];let M=i.clone(),p=0;for(;p<m.length;){let u=p;for(let b=m.length-1;b>p;b--)if(p0(M,m[b])){u=b;break}_.push(m[u]),M=m[u],p=u+1}return _}function Ro(i){return i<-Mr?"W":i>Mr?"E":"C"}function m0(i,t){if(t>13)return{tr:"kendi avlun",en:"your yard"};if(t<-13)return{tr:"Nöbetçi'nin avlusu",en:"the Sentinel's yard"};const e=Ro(i),n=e==="W"?"batı koridoru":e==="E"?"doğu koridoru":"orta koridor",s=e==="W"?"west lane":e==="E"?"east lane":"middle lane",r=t>4?["güney ucu","south end"]:t<-4?["kuzey ucu","north end"]:["ortası","middle"];return{tr:`${n} ${r[0]}`,en:`${s}, ${r[1]}`}}const ei={W:{tr:"batı koridoru",en:"west lane"},C:{tr:"orta koridor",en:"middle lane"},E:{tr:"doğu koridoru",en:"east lane"}};function be(i,t,e,n,s){return{p:new C(i,0,t),look:new C(e,1.4,n),lane:s}}const Rr=[],tn=2,_e=Math.round(2*fe/tn);function ql(i,t){const e=Math.max(0,Math.min(_e-1,Math.floor((i+fe)/tn)));return Math.max(0,Math.min(_e-1,Math.floor((t+fe)/tn)))*_e+e}function ss(i){const t=i%_e,e=i/_e|0;return new C(-fe+(t+.5)*tn,0,-fe+(e+.5)*tn)}Fc("avlu");const ni=["L","R","S","J","C"],dr=["HOLD","FLANK","RUSH"],ha="gozcu.defter.v1",g0=3;function kc(){return{heat:new Array(g0*_e*_e).fill(0),lanes:{W:0,C:0,E:0},contacts:new Array(_e*_e).fill(0)}}function Js(){return{v:2,rounds:0,matches:0,pWins:0,bWins:0,lossStreak:0,maps:{avlu:kc()},weapon:{rifleShots:0,shotShots:0,shotDist:0,rifleDist:0},ngram:{},fireDelay:{sum:0,n:0},predAcc:.5,retreat:{yes:0,n:0},repeek:{yes:0,n:0},lean:{yes:0,n:0},tactics:{HOLD:{a:1,b:1},FLANK:{a:1,b:1},RUSH:{a:1,b:1}},shown:{}}}const Pi={HOLD:{tr:"Pusu",en:"Ambush"},FLANK:{tr:"Kuşatma",en:"Flank"},RUSH:{tr:"Baskın",en:"Rush"}},us={L:"←",R:"→",S:"■",J:"⤒",C:"⤓"};function Kl(i){const t=i-.3333333333333333,e=1/Math.sqrt(9*t);for(;;){let n,s;do{const a=Math.random(),o=Math.random();n=Math.sqrt(-2*Math.log(a+1e-12))*Math.cos(2*Math.PI*o),s=1+e*n}while(s<=0);s=s*s*s;const r=Math.random();if(r<1-.0331*n*n*n*n||Math.log(r)<.5*n*n+t*(1-s+Math.log(s)))return t*s}}function _0(i,t){const e=Kl(i),n=Kl(t);return e/(e+n)}class v0{constructor(){this.d=Js(),this.hist=[],this.persist=!0,this.skillOverride=null,this.learnOff=!1,this.learnSpeed="normal",this.mapId="avlu",this.diffOffset=0,this.modeBonus=0,this.wk="",this.load()}get f(){return this.learnSpeed==="slow"?1:this.learnSpeed==="fast"?.3:.55}minT(){return Math.max(2,Math.round(4*this.f))}minN(){return Math.max(2,Math.round(3*this.f))}skillRounds(){return this.learnSpeed==="slow"?30:this.learnSpeed==="fast"?6:14}decay(){return this.learnSpeed==="slow"?.95:this.learnSpeed==="fast"?.87:.92}setWeapon(t){const e=t==="rifle"?"":t+":";e!==this.wk&&(this.wk=e,this.hist=[])}get m(){var t,e;return(t=this.d.maps)[e=this.mapId]||(t[e]=kc())}setMap(t){this.mapId=t}recordWeaponUse(t,e){const n=this.d.weapon;t==="shotgun"?(n.shotShots+=1,n.shotDist+=Math.min(e,40)):(n.rifleShots+=1,n.rifleDist+=Math.min(e,60))}weaponHabit(){const t=this.d.weapon,e=t.rifleShots+t.shotShots*4;return{shotShare:e?t.shotShots*4/e:0,shotAvg:t.shotShots?t.shotDist/t.shotShots:0,rifleAvg:t.rifleShots?t.rifleDist/t.rifleShots:0,n:e}}load(){try{const t=localStorage.getItem(ha);if(!t)return;const e=JSON.parse(t);if(e&&e.v===2&&(this.d={...Js(),...e}),this.d.lean||(this.d.lean={yes:0,n:0}),typeof this.d.predAcc!="number")this.d.predAcc=.5;else if(e&&e.v===1){const{heat:n,lanes:s,contacts:r,...a}=e;this.d={...Js(),...a,v:2,maps:{avlu:{heat:n,lanes:s,contacts:r}}}}}catch{}}save(){if(this.persist)try{const t=n=>n.map(s=>Math.round(s*100)/100),e={};for(const n in this.d.maps)e[n]={...this.d.maps[n],heat:t(this.d.maps[n].heat),contacts:t(this.d.maps[n].contacts)};localStorage.setItem(ha,JSON.stringify({...this.d,maps:e}))}catch{}}reset(){this.d=Js(),this.hist=[];try{localStorage.removeItem(ha)}catch{}}recordPosition(t,e,n,s){this.m.heat[n*_e*_e+ql(t,e)]+=s}recordLane(t){this.m.lanes[t]+=1}recordContact(t,e){this.m.contacts[ql(t,e)]+=1}recordFireDelay(t){this.d.fireDelay.sum+=Math.min(t,2.5),this.d.fireDelay.n+=1}recordRetreat(t){this.d.retreat.n+=1,t&&(this.d.retreat.yes+=1)}recordLean(t){this.d.lean.n+=1,t&&(this.d.lean.yes+=1)}leanRate(){const t=this.d.lean;return t.n>=this.minN()?t.yes/t.n:null}recordRepeek(t){this.d.repeek.n+=1,t&&(this.d.repeek.yes+=1)}resetHistory(){this.hist=[]}pushSym(t){if(t==="L"||t==="R"||t==="S"){const s=this.rawLateral();if(s.conf>.05){const r=s.v<-.3?"L":s.v>.3?"R":"S";this.d.predAcc=this.d.predAcc*.93+(r===t?.07:0)}}const e=this.hist,n=s=>{var a,o;const r=(a=this.d.ngram)[o=this.wk+s]||(a[o]={});r[t]=(r[t]||0)+1};n(""),e.length>=1&&n(e[e.length-1]),e.length>=2&&n(e[e.length-2]+e[e.length-1]),e.push(t),e.length>8&&e.shift()}dist(t){const e=this.d.ngram[this.wk+t]||{};let n=0;for(const r of ni)n+=e[r]||0;const s={};for(const r of ni)s[r]=n>0?(e[r]||0)/n:.2;return{p:s,total:n}}predictNext(){const t=this.hist;if(t.length>=2){const n=this.dist(t[t.length-2]+t[t.length-1]);if(n.total>=this.minT())return{p:n.p,conf:Math.min(1,n.total/(14*this.f)),order:3}}if(t.length>=1){const n=this.dist(t[t.length-1]);if(n.total>=this.minT())return{p:n.p,conf:Math.min(1,n.total/(18*this.f))*.85,order:2}}const e=this.dist("");return{p:e.p,conf:Math.min(1,e.total/(30*this.f))*.6,order:1}}distFor(t){if(t.length>=2){const n=this.dist(t[t.length-2]+t[t.length-1]);if(n.total>=this.minT())return{p:n.p,conf:Math.min(1,n.total/(14*this.f))}}if(t.length>=1){const n=this.dist(t[t.length-1]);if(n.total>=this.minT())return{p:n.p,conf:Math.min(1,n.total/(18*this.f))*.85}}const e=this.dist("");return{p:e.p,conf:Math.min(1,e.total/(30*this.f))*.6}}predTrust(){return Math.max(.1,Math.min(1,(this.d.predAcc-.35)/.4))}expectedLateral(){if(this.learnOff)return{v:0,conf:0};const t=this.rawLateral();return{v:t.v,conf:t.conf*this.predTrust()}}rawLateral(){const t=this.hist,e=this.distFor(t),n=e.p.R-e.p.L;let s=0;for(const a of ni){if(e.p[a]<.02)continue;const o=this.distFor([...t,a]);s+=e.p[a]*(o.p.R-o.p.L)}const r=.5*(n+s);return{v:r,conf:e.conf*(.4+.6*Math.abs(r))}}lanePred(){const t=this.m.lanes,e=t.W+t.C+t.E+1.5;return{W:(t.W+.5)/e,C:(t.C+.5)/e,E:(t.E+.5)/e}}laneTotal(){const t=this.m.lanes;return t.W+t.C+t.E}heatGuess(t,e){const n=t*_e*_e;let s=0;const r=[];for(let o=0;o<_e*_e;o++){const l=this.m.heat[n+o];if(l>.05){const c=ss(o);if(c.z>13.5||e&&e(c))continue;r.push([o,l*l]),s+=l*l}}if(!r.length)return null;let a=Math.random()*s;for(const[o,l]of r)if(a-=l,a<=0)return ss(o);return ss(r[r.length-1][0])}bestContactFrom(t,e){let n=null;for(let s=0;s<this.m.contacts.length;s++){const r=this.m.contacts[s];if(r<.8)continue;const a=ss(s),o=a.distanceTo(t);if(o>34||o<3)continue;const l=r/(1+o*.03);n&&l<=n.w||(a.y=1.4,e(a)&&(n={p:a,w:l}))}return n}retreatRate(){const t=this.d.retreat;return t.n>=this.minN()?t.yes/t.n:null}repeekRate(){const t=this.d.repeek;return t.n>=this.minN()?t.yes/t.n:null}avgFireDelay(){const t=this.d.fireDelay;return t.n>=this.minN()?t.sum/t.n:null}symShare(t){const{p:e,total:n}=this.dist("");return{share:n?e[t]:0,total:n}}skill(){if(this.skillOverride!==null)return this.skillOverride;let t=Math.min(1,this.d.rounds/this.skillRounds());return t=.15+.85*t+this.diffOffset+this.modeBonus,this.modeBonus===0&&this.d.lossStreak>=3&&(t-=.12*Math.min(3,this.d.lossStreak-2)),Math.max(.08,Math.min(1,t))}knowledge(){const t=Math.min(1,this.laneTotal()/(6*this.f)),e=Math.min(1,this.dist("").total/(60*this.f)),n=Math.min(1,this.m.contacts.reduce((r,a)=>r+a,0)/(8*this.f)),s=Math.min(1,(this.d.retreat.n+this.d.repeek.n+this.d.fireDelay.n+this.d.lean.n)/(12*this.f));return(t+e+n+s)/4}chooseTactic(){let t="HOLD",e=-1;const n=this.avgFireDelay();for(const s of dr){const{a:r,b:a}=this.d.tactics[s];let o=_0(r,a);s==="RUSH"&&n!==null&&n>.7&&(o+=.08),s==="HOLD"&&this.laneTotal()>=3&&(o+=.05),o>e&&(e=o,t=s)}return t}tacticMean(t){const{a:e,b:n}=this.d.tactics[t];return e/(e+n)}rewardTactic(t,e){for(const n of dr){const s=this.d.tactics[n];s.a=1+(s.a-1)*this.decay(),s.b=1+(s.b-1)*this.decay()}this.d.tactics[t].a+=e,this.d.tactics[t].b+=1-e}endRound(t){this.d.rounds+=1,t===!0?(this.d.pWins++,this.d.lossStreak=0):t===!1&&(this.d.bWins++,this.d.lossStreak++);const e=this.decay();for(let s=0;s<this.m.heat.length;s++)this.m.heat[s]*=e;for(let s=0;s<this.m.contacts.length;s++)this.m.contacts[s]*=e;for(const s of["W","C","E"])this.m.lanes[s]*=e;const n=this.d.weapon;n.rifleShots*=.95,n.rifleDist*=.95,n.shotShots*=.95,n.shotDist*=.95;for(const s in this.d.ngram){const r=this.d.ngram[s];for(const a of ni)r[a]&&(r[a]=r[a]*.95)}this.save()}endMatch(){this.d.matches+=1,this.save()}insights(){const t=[],e=w=>`%${Math.round(w*100)}`,n=w=>`${Math.round(w*100)}%`,s=this.laneTotal();if(s>=Math.max(1.2,2.5*this.f)){const w=this.lanePred(),A=Object.keys(w).sort((T,g)=>w[g]-w[T])[0];w[A]>=.5&&t.push({id:"lane-"+A,strength:w[A]*Math.min(1,s/5),tr:`Çoğunlukla ${ei[A].tr} üzerinden geliyorsun (${e(w[A])}).`,en:`You usually come through the ${ei[A].en} (${n(w[A])}).`,rtr:"O koridora pusu kuruyorum.",ren:"I'm setting an ambush there."})}const r=this.symShare("L"),a=this.symShare("R"),o=r.share+a.share;if(r.total>=12*this.f&&o>.25){const w=r.share/o,A=w>=.5?"L":"R",T=Math.max(w,1-w);T>=.6&&t.push({id:"strafe-"+A,strength:(T-.4)*1.4*Math.min(1,r.total/(30*this.f)),tr:`Çatışmada ${e(T)} ${A==="L"?"sola":"sağa"} kaçıyorsun.`,en:`In a fight you dodge ${A==="L"?"left":"right"} ${n(T)} of the time.`,rtr:"Nişanımı o yöne kaydırıyorum.",ren:"I'm leading my aim that way."})}let l="",c=0,d="S",h=0;for(const w in this.d.ngram){if(!w.startsWith(this.wk))continue;const A=w.slice(this.wk.length);if(A.length!==2||A.includes(":"))continue;const{p:T,total:g}=this.dist(A);if(!(g<Math.max(3,5*this.f)))for(const v of ni)(v==="L"||v==="R")&&T[v]>c&&!(A[0]===v&&A[1]===v)&&(c=T[v],l=A,d=v,h=g)}if(c>=.65&&l){const w=l.split("").map(A=>us[A]).join(" ");t.push({id:"rhythm-"+l+d,strength:(c-.4)*1.5*Math.min(1,h/(10*this.f)),tr:`${w} hareketinden sonra ${e(c)} ${us[d]} yapıyorsun.`,en:`After ${w} you go ${us[d]} ${n(c)} of the time.`,rtr:"Ritmini okuyup bir adım önüne nişan alıyorum.",ren:"I read your rhythm and aim one step ahead."})}let f=-1,m=0,_=0;for(let w=0;w<this.m.contacts.length;w++)_+=this.m.contacts[w],this.m.contacts[w]>m&&(m=this.m.contacts[w],f=w);if(f>=0&&m>=1.8){const w=ss(f),A=m0(w.x,w.z);t.push({id:"contact-"+f,strength:Math.min(1,m/Math.max(3,_*.6)),tr:`Karşıma genelde ${A.tr} tarafından çıkıyorsun.`,en:`You usually show up from the ${A.en}.`,rtr:"O açıyı önceden tutuyorum.",ren:"I pre-aim that angle now."})}const M=this.avgFireDelay();M!==null&&(M<.4?t.push({id:"fire-fast",strength:.55,tr:`Beni görür görmez ateş ediyorsun (ort. ${M.toFixed(2)} sn).`,en:`You shoot the moment you see me (avg ${M.toFixed(2)} s).`,rtr:"Açıkta daha kısa kalıp siper değiştiriyorum.",ren:"I stay exposed for less time and swap cover."}):M>.7&&t.push({id:"fire-slow",strength:.55,tr:`Ateş etmeden önce bekliyorsun (ort. ${M.toFixed(2)} sn).`,en:`You wait before shooting (avg ${M.toFixed(2)} s).`,rtr:"Daha sık üstüne yürüyorum.",ren:"I push you more often."}));const p=this.retreatRate();p!==null&&(p>=.6?t.push({id:"retreat-yes",strength:p*Math.min(1,this.d.retreat.n/5),tr:`Yaralanınca geri çekiliyorsun (${e(p)}).`,en:`You fall back when hurt (${n(p)}).`,rtr:"Kaçtığında peşine düşüyorum.",ren:"When you run, I chase."}):p<=.3&&t.push({id:"retreat-no",strength:(1-p)*.8*Math.min(1,this.d.retreat.n/5),tr:"Yaralı olsan da geri adım atmıyorsun.",en:"You don't back off even when hurt.",rtr:"Yaralıyken seninle kafa kafaya girmiyorum.",ren:"I won't trade with you while I'm hurt."}));const u=this.repeekRate();u!==null&&u>=.55&&t.push({id:"repeek",strength:u*Math.min(1,this.d.repeek.n/5),tr:`Siperden hep aynı yerden tekrar çıkıyorsun (${e(u)}).`,en:`You re-peek from the same spot (${n(u)}).`,rtr:"O köşeye nişan alıp bekliyorum.",ren:"I hold that corner and wait."});const b=this.symShare("C"),y=this.symShare("J");b.total>=15*this.f&&b.share>=.22&&t.push({id:"crouch",strength:b.share*1.5,tr:`Çatışmada sık sık eğilip kayıyorsun (${e(b.share)}).`,en:`You crouch and slide a lot in fights (${n(b.share)}).`,rtr:"Nişanımı aşağıda tutuyorum.",ren:"I keep my aim low."}),y.total>=15*this.f&&y.share>=.18&&t.push({id:"jump",strength:y.share*1.6,tr:`Çatışmada çok zıplıyorsun (${e(y.share)}).`,en:`You jump a lot in fights (${n(y.share)}).`,rtr:"Düştüğün yere nişan alıyorum.",ren:"I aim where you'll land."});const x=this.leanRate();x!==null&&x>=.35&&t.push({id:"lean",strength:Math.min(1,x*1.2),tr:`Köşelerden yatarak bakıyorsun (${e(x)}).`,en:`You peek corners by leaning (${n(x)}).`,rtr:"Köşeleri kafa hizasında tutuyorum.",ren:"I hold corners at head height."});const L=this.weaponHabit();if(L.n>=30*this.f&&(L.shotShare>=.35&&L.shotAvg<12?t.push({id:"weapon-shotgun",strength:Math.min(1,L.shotShare*1.2),tr:`Yakına gelince pompalıya geçiyorsun (ort. ${L.shotAvg.toFixed(0)} m).`,en:`You switch to the shotgun up close (avg ${L.shotAvg.toFixed(0)} m).`,rtr:"Mesafemi koruyorum.",ren:"I keep my distance."}):L.shotShare<.15&&L.rifleAvg>18&&t.push({id:"weapon-longrange",strength:.5,tr:`Tüfekle uzaktan oynuyorsun (ort. ${L.rifleAvg.toFixed(0)} m).`,en:`You play long range with the rifle (avg ${L.rifleAvg.toFixed(0)} m).`,rtr:"Siperden siper üstüne yürüyorum.",ren:"I close in cover to cover."})),this.d.rounds>=Math.max(2,4*this.f)){const w=[...dr].sort((T,g)=>this.tacticMean(g)-this.tacticMean(T))[0],A=this.tacticMean(w);A>=.55&&t.push({id:"tactic-"+w,strength:(A-.4)*1.2,tr:`Sana karşı en iyi işleyen taktiğim: ${Pi[w].tr} (${e(A)}).`,en:`My best tactic against you: ${Pi[w].en} (${n(A)}).`,rtr:"Onu daha sık deneyeceğim.",ren:"I'll use it more often."})}return t.sort((w,A)=>A.strength-w.strength)}freshInsights(t=2){const s=this.insights().filter(r=>r.strength>=.3).filter(r=>this.d.shown[r.id]===void 0||r.strength-this.d.shown[r.id]>=.15).slice(0,t);for(const r of s)this.d.shown[r.id]=r.strength;return s}}const Qs=.6,x0=i=>i<=0?0:i>=1?1:i*i*(3-2*i),tr=(i,t,e)=>i<t||i>e?0:Math.sin((i-t)/(e-t)*Math.PI),jl=(i,t,e)=>x0((i-t)/(e-t));class M0{constructor(){this.group=new Jt,this.kick=0,this.flashT=0,this.pumpT=0,this.swayX=0,this.swayY=0,this.cur="rifle",this.mInk=new ls({color:le.ink}),this.mDark=new ls({color:2894370}),this.mPaper=new ls({color:le.paper}),this.mShade=new ls({color:13617074}),this.mRed=new Be({color:le.redHot}),this.eLight=new fs({color:9406842}),this.eInk=new fs({color:le.ink}),this.scoped=!1,this.rigs={rifle:this.buildRifle(),shotgun:this.buildShotgun(),sniper:this.buildSniper(),smg:this.buildSmg(),burst:this.buildBurst(),pistol:this.buildPistol()};for(const t in this.rigs){const e=this.rigs[t];this.group.add(e.root),e.root.visible=t==="rifle"}}finish(t,e,n,s){const r=new ve;r.position.set(0,s.muzzleY??.012,s.muzzleZ),n.add(r);const a=this.hand(e,0,-.1,.1,1);a.rotation.x=-.3;let o=s.handL;o||(o=this.hand(e,-.02,-.04,-.28,-1),o.rotation.set(.1,.2,-.5));const l=this.flashMesh(n,s.muzzleZ-.03,s.flash??.05);return e.scale.setScalar(Qs),{magY:s.mag?.position.y,magZ:s.mag?.position.z,boltZ:s.bolt?.position.z,id:t,root:e,mag:s.mag,pump:null,handL:o,handLHome:o.position.clone(),bolt:s.bolt,muzzle:r,flash:l,sightY:s.sightY,sightZ:0,hip:s.hip,kickZ:s.kickZ,kickRot:s.kickRot}}buildSniper(){const t=new Jt,e=new Jt;t.add(e),this.box(e,.06,.08,.42,0,0,0,this.mInk),this.box(e,.058,.07,.3,0,-.005,-.34,this.mShade),this.cyl(e,.012,.52,0,.015,-.68,this.mInk),this.box(e,.03,.03,.08,0,.015,-.95,this.mInk),this.cyl(e,.028,.3,0,.088,-.03,this.mInk,10),this.cyl(e,.034,.05,0,.088,-.19,this.mInk,10),this.cyl(e,.032,.04,0,.088,.13,this.mInk,10),this.box(e,.02,.03,.03,0,.055,-.08,this.mDark,!1),this.box(e,.02,.03,.03,0,.055,.05,this.mDark,!1);const n=new Gt(new ri(.026,14),new Be({color:8330520}));n.position.set(0,.088,-.216),n.rotation.y=Math.PI,e.add(n);const s=this.box(e,.05,.014,.014,.045,.02,.08,this.mShade);this.box(e,.022,.022,.022,.07,.02,.08,this.mInk,!1);const r=new Jt;return r.position.set(0,-.06,-.04),this.box(r,.04,.07,.08,0,-.03,0,this.mDark),e.add(r),this.box(e,.04,.11,.05,0,-.08,.12,this.mInk,!0,-.32),this.box(e,.05,.09,.3,0,-.03,.34,this.mShade,!0,.05),this.box(e,.054,.12,.03,0,-.04,.49,this.mInk),this.finish("sniper",t,e,{mag:r,bolt:s,muzzleZ:-1,muzzleY:.015,sightY:.088,hip:new C(.14,-.14,-.4),kickZ:.08,kickRot:.14,flash:.07})}buildSmg(){const t=new Jt,e=new Jt;t.add(e),this.box(e,.055,.085,.26,0,0,0,this.mInk),this.box(e,.05,.05,.14,0,-.005,-.2,this.mDark),this.cyl(e,.011,.1,0,.01,-.31,this.mInk);for(let a=0;a<3;a++)this.box(e,.052,.008,.02,0,0,-.15-a*.035,this.mShade,!1);const n=new Jt;n.position.set(0,-.06,-.05),this.box(n,.03,.2,.05,0,-.09,0,this.mDark),this.box(n,.032,.012,.052,0,-.19,0,this.mShade,!1),e.add(n),this.box(e,.038,.1,.045,0,-.08,.08,this.mInk,!0,-.3),this.box(e,.012,.012,.22,.02,0,.22,this.mInk,!1),this.box(e,.012,.012,.22,-.02,0,.22,this.mInk,!1),this.box(e,.05,.07,.02,0,-.02,.33,this.mInk),this.box(e,.02,.03,.012,0,.055,.08,this.mInk,!1),this.box(e,.008,.03,.01,0,.055,-.24,this.mInk,!1);const s=new Gt(new Qn(.004,6,5),this.mRed);s.position.set(0,.07,-.24),e.add(s);const r=this.box(e,.012,.018,.03,.033,.02,0,this.mShade);return this.finish("smg",t,e,{mag:n,bolt:r,muzzleZ:-.37,sightY:.07,hip:new C(.13,-.13,-.36),kickZ:.015,kickRot:.03})}buildBurst(){const t=new Jt,e=new Jt;t.add(e),this.box(e,.06,.085,.36,0,0,0,this.mInk),this.box(e,.062,.075,.3,0,-.005,-.32,this.mShade);for(let a=0;a<5;a++)this.box(e,.064,.006,.012,0,.02,-.21-a*.05,this.mInk,!1);this.cyl(e,.011,.18,0,.012,-.56,this.mInk),this.box(e,.026,.026,.05,0,.012,-.66,this.mInk),this.box(e,.012,.05,.18,.022,.07,-.02,this.mInk),this.box(e,.012,.05,.18,-.022,.07,-.02,this.mInk),this.box(e,.056,.012,.18,0,.1,-.02,this.mInk);const n=new Gt(new Qn(.0035,6,5),this.mRed);n.position.set(0,.075,-.1),e.add(n);const s=new Jt;s.position.set(0,-.06,-.05),this.box(s,.036,.13,.065,0,-.06,0,this.mDark,!0,.18),e.add(s),this.box(e,.04,.11,.05,0,-.08,.1,this.mInk,!0,-.32),this.box(e,.045,.075,.22,0,-.015,.28,this.mInk);const r=this.box(e,.012,.018,.04,.035,.02,.06,this.mShade);return this.finish("burst",t,e,{mag:s,bolt:r,muzzleZ:-.7,sightY:.075,hip:new C(.135,-.13,-.4),kickZ:.02,kickRot:.04})}buildPistol(){const t=new Jt,e=new Jt;t.add(e);const n=this.box(e,.036,.042,.2,0,.03,-.06,this.mInk);this.box(e,.034,.03,.15,0,-.005,-.04,this.mDark);for(let o=0;o<4;o++)this.box(e,.038,.03,.006,0,.032,0+o*.012,this.mShade,!1);this.box(e,.014,.012,.01,0,.056,.03,this.mInk,!1);const s=new Gt(new Qn(.004,6,5),this.mRed);s.position.set(0,.058,-.15),e.add(s);const r=new Jt;r.position.set(0,-.04,.03),this.box(r,.032,.11,.05,0,-.04,0,this.mInk,!0,-.25),e.add(r);const a=this.hand(t,-.025,-.11,.06,-1);return a.rotation.set(-.3,.3,-.2),this.finish("pistol",t,e,{mag:r,bolt:n,muzzleZ:-.17,muzzleY:.03,sightY:.058,hip:new C(.11,-.12,-.32),kickZ:.03,kickRot:.12,flash:.04,handL:a})}box(t,e,n,s,r,a,o,l,c=!0,d=0){const h=new en(e,n,s),f=new Gt(h,l);if(f.position.set(r,a,o),f.rotation.x=d,t.add(f),c){const m=new io(new so(h,25),l===this.mPaper||l===this.mShade?this.eInk:this.eLight);f.add(m)}return f}cyl(t,e,n,s,r,a,o,l=8){const c=new ps(e,e,n,l);c.rotateX(Math.PI/2);const d=new Gt(c,o);d.position.set(s,r,a),t.add(d);const h=new io(new so(c,30),this.eLight);return d.add(h),d}hand(t,e,n,s,r){const a=new Jt;a.position.set(e,n,s),this.box(a,.055,.05,.075,0,0,0,this.mPaper),this.box(a,.05,.016,.05,-.022*r,.03,-.005,this.mPaper);const o=this.box(a,.065,.065,.32,.02*r,-.05,.19,this.mShade,!0,.35);return o.rotation.y=-.18*r,this.box(a,.068,.02,.02,0,0,.05,this.mInk,!1),t.add(a),a}flashMesh(t,e,n){const s=new Gt(new vr(n,0),new Be({color:le.paper}));s.position.set(0,.012,e),s.scale.set(1,1,1.8),s.visible=!1,t.add(s);const r=new Gt(new vr(n*.5,0),new Be({color:le.redHot}));return s.add(r),s}buildRifle(){const t=new Jt,e=new Jt;t.add(e),this.box(e,.058,.08,.34,0,0,0,this.mInk),this.box(e,.05,.03,.3,0,-.045,-.02,this.mDark),this.box(e,.034,.012,.36,0,.047,-.03,this.mDark);for(let f=0;f<7;f++)this.box(e,.038,.006,.012,0,.056,-.18+f*.045,this.mInk,!1);this.box(e,.056,.066,.27,0,0,-.305,this.mDark);for(let f=0;f<4;f++)this.box(e,.058,.012,.03,0,0,-.22-f*.055,this.mShade,!1);this.cyl(e,.011,.2,0,.012,-.53,this.mInk),this.box(e,.028,.028,.065,0,.012,-.645,this.mInk);for(let f=0;f<2;f++)this.box(e,.03,.006,.01,0,.022,-.63-f*.025,this.mShade,!1);const n=new ve;n.position.set(0,.012,-.69),e.add(n);const s=new Jt;s.position.set(0,-.06,-.06),this.box(s,.036,.09,.07,0,-.04,0,this.mDark,!0,.12),this.box(s,.036,.08,.066,0,-.115,-.018,this.mDark,!0,.32),this.box(s,.038,.012,.072,0,-.158,-.032,this.mShade,!1,.32),e.add(s),this.box(e,.04,.11,.05,0,-.08,.1,this.mInk,!0,-.32),this.box(e,.04,.06,.2,0,-.012,.27,this.mDark),this.box(e,.046,.1,.03,0,-.03,.38,this.mInk),this.box(e,.03,.025,.12,0,.03,.25,this.mInk);const r=this.box(e,.012,.018,.04,.035,.02,.06,this.mShade),a=.098,o=new Jt;o.position.set(0,a,-.02),this.box(o,.05,.008,.07,0,.028,0,this.mInk),this.box(o,.05,.008,.07,0,-.028,0,this.mInk),this.box(o,.008,.06,.07,.024,0,0,this.mInk),this.box(o,.008,.06,.07,-.024,0,0,this.mInk),this.box(o,.03,.02,.05,0,-.045,0,this.mDark);const l=new Gt(new Qn(.0032,8,6),this.mRed);l.position.set(0,0,-.03),o.add(l),e.add(o);const c=this.hand(t,0,-.1,.1,1);c.rotation.x=-.3;const d=this.hand(t,-.02,-.04,-.3,-1);d.rotation.set(.1,.2,-.5);const h=this.flashMesh(e,-.72,.05);return t.scale.setScalar(Qs),{id:"rifle",root:t,mag:s,pump:null,handL:d,handLHome:d.position.clone(),bolt:r,muzzle:n,flash:h,sightY:a,sightZ:-.05,hip:new C(.135,-.13,-.4),kickZ:.025,kickRot:.05}}buildShotgun(){const t=new Jt,e=new Jt;t.add(e),this.box(e,.064,.085,.3,0,0,0,this.mInk),this.box(e,.066,.02,.06,0,0,-.05,this.mShade,!1),this.cyl(e,.015,.58,0,.022,-.44,this.mInk),this.cyl(e,.013,.46,0,-.016,-.38,this.mDark),this.box(e,.03,.03,.02,0,-.016,-.62,this.mInk);const n=new ve;n.position.set(0,.022,-.74),e.add(n);const s=new Jt;s.position.set(0,-.012,-.31),this.box(s,.06,.055,.17,0,0,0,this.mShade);for(let c=0;c<5;c++)this.box(s,.062,.006,.008,0,-.012,-.06+c*.03,this.mInk,!1);e.add(s);const r=new Gt(new Qn(.0055,8,6),this.mRed);r.position.set(0,.043,-.715),e.add(r),this.box(e,.03,.014,.012,0,.05,.02,this.mInk,!1),this.box(e,.042,.1,.05,0,-.08,.1,this.mInk,!0,-.35),this.box(e,.05,.075,.24,0,-.03,.28,this.mShade,!0,.08),this.box(e,.054,.1,.025,0,-.05,.4,this.mInk);const a=this.hand(t,0,-.1,.1,1);a.rotation.x=-.32;const o=this.hand(s,-.005,-.045,0,-1);o.rotation.set(.1,.15,-.45);const l=this.flashMesh(e,-.78,.075);return t.scale.setScalar(Qs),{id:"shotgun",root:t,mag:null,pump:s,handL:o,handLHome:o.position.clone(),bolt:null,muzzle:n,flash:l,sightY:.045,sightZ:-.3,hip:new C(.135,-.13,-.42),kickZ:.07,kickRot:.16}}fired(t){this.kick=1,this.flashT=t==="shotgun"?.06:.035,t==="shotgun"&&(this.pumpT=1e-4)}muzzleCamSpace(){const t=this.rigs[this.cur];return this.group.updateMatrixWorld(!0),t.muzzle.getWorldPosition(new C)}update(t,e){const n=t.gun.def.id;n!==this.cur&&(this.rigs[this.cur].root.visible=!1,this.cur=n);const s=this.rigs[n];this.scoped=!!t.gun.def.scope&&t.ads>.85,s.root.visible=t.alive&&!this.scoped;const r=t.ads;this.kick=Math.max(0,this.kick-e*(n==="shotgun"?5:11)),this.flashT-=e,s.flash.visible=this.flashT>0,s.flash.rotation.z+=1.7;const a=1-r*.85;this.swayX+=(-t.lookDX*6e-4*a-this.swayX)*Math.min(1,e*10),this.swayY+=(t.lookDY*5e-4*a-this.swayY)*Math.min(1,e*10);const o=t.sprinting?1:0,l=t.horizSpeed(),c=Math.min(1,l/7)*(1-r*.85)*(t.grounded||t.wallrun?1:.3),d=Math.cos(t.bob*.5)*.014*c,h=Math.abs(Math.sin(t.bob*.5))*.012*c,f=t.gun.reloading?1-t.gun.reloadT/t.gun.reloadTime:-1,m=t.switchT>0?Math.sin(t.switchT/(t.gun.def.swapTime??.32)*Math.PI):0,_=new C(0,-s.sightY*Qs,-.3),M=s.hip.clone().lerp(_,r);M.x+=d+this.swayX-o*.05,M.y+=h+this.swayY-o*.04-t.landKick*.035-m*.3,M.z+=this.kick*s.kickZ*(1-r*.5);let p=this.kick*s.kickRot*(1-r*.6)-o*.3+this.swayY*2,u=o*.55+this.swayX*3,b=o*.2+(t.sliding?.3:0)+t.roll*1.6;if(f>=0)if(s.mag){const y=tr(f,0,1);b+=y*.55,p+=y*.25,M.y-=y*.05;const x=jl(f,.12,.35)*(1-jl(f,.55,.75));s.mag.position.y=(s.magY??-.06)-x*.32,s.mag.position.z=(s.magZ??-.06)+x*.06,s.handL.position.set(s.handLHome.x+x*.02,s.handLHome.y-x*.2,s.handLHome.z+x*.22),s.bolt&&(s.bolt.position.z=(s.boltZ??.06)+tr(f,.8,.95)*.06)}else{const y=tr(f,0,1);b-=y*.45,p+=y*.15;const x=f<.8?Math.abs(Math.sin(f*Math.PI*5)):0;s.handL.position.set(s.handLHome.x,s.handLHome.y-x*.06,s.handLHome.z+x*.05),this.pumpT=f>.82?Math.min(.999,(f-.82)/.18):0}else s.mag&&s.mag.position.set(0,s.magY??-.06,s.magZ??-.06),s.bolt&&(s.bolt.position.z=s.boltZ??.06),s.handL.position.copy(s.handLHome);if(s.pump){this.pumpT>0&&f<0&&(this.pumpT=Math.min(1,this.pumpT+e/.5));const y=this.pumpT>0?tr(this.pumpT,.15,.85):0;s.pump.position.z=-.31+y*.09,this.pumpT>=1&&(this.pumpT=0)}s.root.position.copy(M),s.root.rotation.set(p,u,b)}}const er=new Ft(le.ink),S0=new Ft(le.paper);function wi(i,t,e,n=.93){const s=new ls({color:i});return s.onBeforeCompile=r=>{r.uniforms.uInk={value:t},r.uniforms.uAmt={value:e},r.uniforms.uScale={value:Math.min(window.devicePixelRatio||1,1.5)},r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
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
        }`)},s}function y0(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#ebe6d8",t.fillRect(0,0,512,512),t.strokeStyle="rgba(22,21,15,0.16)",t.lineWidth=2;for(let n=0;n<=4;n++)t.beginPath(),t.moveTo(n*128,0),t.lineTo(n*128,512),t.stroke(),t.beginPath(),t.moveTo(0,n*128),t.lineTo(512,n*128),t.stroke();t.fillStyle="rgba(22,21,15,0.07)";for(let n=0;n<70;n++)t.beginPath(),t.arc(Math.random()*512,Math.random()*512,Math.random()*3+.5,0,Math.PI*2),t.fill();const e=new r0(i);return e.wrapS=e.wrapT=fr,e.repeat.set(Vi.half*2/8,Vi.half*2/8),e.colorSpace=ke,e.anisotropy=4,e}class E0{constructor(t){this.scene=new Fl,this.gunScene=new Fl,this.baseFov=80,this.vm=new M0,this.mapGroup=new Jt,this.lineInk=new fs({color:le.ink}),this.linePaper=new fs({color:9209462}),this.basePR=Math.min(window.devicePixelRatio||1,1.5),this.botRoot=new Jt,this.botHips=new Jt,this.botTorso=new Jt,this.botHead=new Jt,this.botFlash=0,this.parts=[],this.shattered=!1,this.tracers=[],this.particles=[],this.decals=[],this.decalIdx=0,this.shake=0,this.fovNow=80,this.heatOverlay=null,this.stripMat=new Be({color:le.ink}),this.renderer=new i0({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=mo,this.renderer.autoClear=!1,this.scene.background=S0.clone(),this.scene.fog=new To(le.paper,34,80),this.camera=new He(80,1,.05,200),this.camera.rotation.order="YXZ",this.gunCam=new He(58,1,.01,10);const e=new Hl(16777215,16777215,.62*Math.PI);e.groundColor.setScalar(.62),this.scene.add(e);const n=new Wl(16777215,.75*Math.PI);n.position.set(-14,30,9),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=s.bottom=-30,s.right=s.top=30,s.near=1,s.far=80,n.shadow.bias=-6e-4,n.shadow.normalBias=.03,this.scene.add(n),this.sun=n;const r=wi(16777215,er,.55);r.map=y0();const a=new Gt(new xs(Vi.half*2,Vi.half*2),r);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,this.scene.add(a),this.mats={wall:wi(le.paperShade,er,.5),paper:wi(le.paper,er,.6),low:wi(le.paper,er,.6),ink:wi(le.ink,new Ft(7169882),.55,.85)},this.scene.add(this.mapGroup),this.buildMap(),this.botMat=wi(le.ink,new Ft(8024934),.5,.8),this.botMat.emissive=new Ft(0),this.buildBot(),this.scene.add(this.botRoot);const o=new Hl(16777215,10066329,2.2);this.gunScene.add(o);const l=new Wl(16777215,1.6);l.position.set(-1,2,1),this.gunScene.add(l),this.gunScene.add(this.vm.group);const c=new ri(.085,7);for(let d=0;d<160;d++){const h=new Gt(c,new Be({color:le.ink,polygonOffset:!0,polygonOffsetFactor:-2,transparent:!0,opacity:.85}));h.visible=!1,this.scene.add(h),this.decals.push(h)}}buildBot(){const t=this.botMat,e=this.botRoot;this.botHips.position.y=.92,e.add(this.botHips);const n=new en(.19,.9,.22);n.translate(0,-.45,0),this.legL=new Gt(n,t),this.legL.position.x=-.15,this.legR=new Gt(n,t),this.legR.position.x=.15,this.botHips.add(this.legL,this.legR);const s=new Gt(new ps(.27,.36,.72,6),t);s.position.y=.36,this.botTorso.position.y=0,this.botTorso.add(s),this.botHips.add(this.botTorso);const r=new Gt(new en(.12,.12,.5),t);r.position.set(.24,.5,-.25);const a=new Gt(new en(.08,.12,.62),t);a.position.set(.18,.55,-.55),this.botTorso.add(r,a),this.botHead.position.y=Te.eye-.92;const o=new Gt(new wo(Te.headR,0),t);this.botHead.add(o);const l=new Gt(new ri(.155,18),new Be({color:le.paper}));l.position.z=-.25*.83,l.rotation.y=Math.PI;const c=new Gt(new ri(.085,16),new Be({color:le.red}));c.position.z=-.25*.83-.004,c.rotation.y=Math.PI;const d=new Gt(new ri(.03,12),new Be({color:le.ink}));d.position.z=-.006,c.add(d),this.iris=c,this.botHead.add(l,c),this.botHips.add(this.botHead),e.traverse(h=>{h.isMesh&&(h.castShadow=!0)});for(const h of[this.legL,this.legR,s,r,a,this.botHead])this.parts.push({obj:h,vel:new C,spin:new C,hp:h.position.clone(),hq:h.quaternion.clone(),parent:h.parent})}buildMap(){for(const t of[...this.mapGroup.children])this.mapGroup.remove(t),t.geometry?.dispose();for(const t of Nc){const e=new C().subVectors(t.max,t.min),n=new en(e.x,e.y,e.z),s=new Gt(n,this.mats[t.style]);s.position.addVectors(t.min,t.max).multiplyScalar(.5),s.castShadow=t.style!=="wall",s.receiveShadow=!0,this.mapGroup.add(s);const r=new io(new so(n),t.style==="ink"?this.linePaper:this.lineInk);if(r.position.copy(s.position),this.mapGroup.add(r),t.style==="low"){const a=new Gt(new en(e.x+.02,.06,e.z+.02),this.stripMat);a.position.set(s.position.x,t.max.y-.03,s.position.z),this.mapGroup.add(a)}}this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.needsUpdate=!0)}setQuality(t,e){const n=t!=="low";this.renderer.shadowMap.enabled!==n&&(this.renderer.shadowMap.enabled=n,this.sun.castShadow=n,this.scene.traverse(a=>{const o=a.material;o&&(o.needsUpdate=!0)}));const s=t==="high"?2048:1024;this.sun.shadow.mapSize.x!==s&&(this.sun.shadow.mapSize.set(s,s),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null);const r=(t==="low"?Math.min(1,this.basePR):t==="med"?Math.min(1.25,this.basePR):this.basePR)*e;this.renderer.setPixelRatio(Math.max(.4,r)),this.resize(window.innerWidth,window.innerHeight)}resize(t,e){this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.gunCam.aspect=t/e,this.gunCam.updateProjectionMatrix()}resetRound(){this.shattered=!1;for(const t of this.parts)t.parent.add(t.obj),t.obj.position.copy(t.hp),t.obj.quaternion.copy(t.hq);for(const t of this.decals)t.visible=!1;for(const t of this.tracers)this.scene.remove(t.mesh);this.tracers=[];for(const t of this.particles)this.scene.remove(t.mesh);this.particles=[]}addShake(t){this.shake=Math.min(1,this.shake+t)}muzzleFlash(t){this.vm.fired(t)}muzzleWorld(t){const e=this.vm.muzzleCamSpace(),n=Math.tan(this.camera.fov*Math.PI/360)/Math.tan(this.gunCam.fov*Math.PI/360);return new C(e.x*n,e.y*n,e.z).applyQuaternion(this.camera.quaternion).add(this.camera.position)}syncCamera(t,e,n){const s=t.grounded&&!t.sliding?Math.sin(t.bob)*.035*Math.min(1,t.horizSpeed()/6)*(1-t.ads*.8):0,r=t.eye;this.camera.position.set(r.x,r.y+s-t.landKick*.08,r.z),this.shake=Math.max(0,this.shake-e*3);const a=this.shake*this.shake*.02;this.camera.rotation.set(t.pitch+t.recoil*Math.PI/180+(Math.random()-.5)*a,t.yaw+(Math.random()-.5)*a,t.roll);let o=2*Math.atan(Math.tan(this.baseFov*Math.PI/360)/Math.max(.5,this.camera.aspect))*180/Math.PI;t.sprinting&&(o+=6),t.sliding&&(o+=9),o=o+(o*t.gun.def.adsZoom-o)*t.ads,t.wallrun&&(o+=6),t.dashT>0&&(o+=10),this.fovNow+=(o-this.fovNow)*Math.min(1,e*12),this.camera.fov=this.fovNow,this.camera.updateProjectionMatrix()}updateGun(t,e){this.vm.update(t,e)}updateBot(t,e){if(!t.alive){this.shattered||this.shatter(t);for(const a of this.parts)a.vel.y-=14*e,a.obj.position.addScaledVector(a.vel,e),a.obj.position.y<.08&&(a.obj.position.y=.08,a.vel.multiplyScalar(.5),a.vel.y=Math.abs(a.vel.y)*.3,a.spin.multiplyScalar(.6)),a.obj.rotation.x+=a.spin.x*e,a.obj.rotation.y+=a.spin.y*e,a.obj.rotation.z+=a.spin.z*e;return}this.botRoot.position.copy(t.pos),this.botRoot.rotation.y=t.yaw;const n=Math.sin(t.walkPhase)*Math.min(.6,Math.hypot(t.vel.x,t.vel.z)*.12);this.legL.rotation.x=n,this.legR.rotation.x=-n;const s=t.aimYaw-t.yaw;this.botTorso.rotation.y=Math.atan2(Math.sin(s),Math.cos(s))*.6,this.botHead.rotation.set(t.aimPitch,Math.atan2(Math.sin(s),Math.cos(s)),0,"YXZ");const r=.65+t.alert*.6;this.iris.scale.setScalar(r),this.botFlash=Math.max(0,this.botFlash-e*6),this.botMat.emissive.setRGB(this.botFlash*.55,0,0)}botHit(){this.botFlash=1}shatter(t){this.shattered=!0,this.botRoot.updateMatrixWorld(!0);for(const e of this.parts){const n=new C,s=new Yi;e.obj.getWorldPosition(n),e.obj.getWorldQuaternion(s),this.scene.add(e.obj),e.obj.position.copy(n),e.obj.quaternion.copy(s),e.vel.set((Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4),e.spin.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10)}for(let e=0;e<26;e++)this.particle(new C(t.pos.x,1.2,t.pos.z),!0,5)}tracer(t,e,n){const s=t.distanceTo(e);if(s<.3)return;const r=new ps(n?.012:.008,n?.012:.008,s,4,1,!0);r.rotateX(Math.PI/2);const a=new Be({color:n?le.redHot:le.ink,transparent:!0,opacity:.9,fog:!1}),o=new Gt(r,a);o.position.addVectors(t,e).multiplyScalar(.5),o.lookAt(e),this.scene.add(o),this.tracers.push({mesh:o,life:n?.14:.08,max:n?.14:.08})}impact(t,e,n){const s=n?7:4;for(let r=0;r<s;r++)this.particle(t,n,2.5,e);if(!n&&e){const r=this.decals[this.decalIdx++%this.decals.length];r.visible=!0,r.position.copy(t).addScaledVector(e,.012),r.lookAt(t.clone().add(e)),r.rotation.z=Math.random()*6,r.scale.setScalar(.7+Math.random()*.7)}}particle(t,e,n,s){const r=new Gt(new Ao(.035+Math.random()*.04,0),new Be({color:e?le.red:le.ink}));r.position.copy(t);const a=new C((Math.random()-.5)*n,Math.random()*n,(Math.random()-.5)*n);s&&a.addScaledVector(s,n*.6),this.scene.add(r),this.particles.push({mesh:r,vel:a,spin:new C(Math.random()*9,Math.random()*9,0),life:.6+Math.random()*.4})}render(t){for(let e=this.tracers.length-1;e>=0;e--){const n=this.tracers[e];n.life-=t,n.mesh.material.opacity=Math.max(0,n.life/n.max)*.9,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.tracers.splice(e,1))}for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life-=t,n.vel.y-=12*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.position.y<.02&&(n.mesh.position.y=.02,n.vel.set(0,0,0)),n.mesh.rotation.x+=n.spin.x*t,n.mesh.rotation.y+=n.spin.y*t,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1))}this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.clearDepth(),this.renderer.render(this.gunScene,this.gunCam)}}class b0{constructor(){this.ctx=null,this.master=null,this.noise=null,this.volume=.7}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noise.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}catch{this.ctx=null}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}listener(t,e){const n=this.ctx;if(!n)return;const s=n.listener,r=-Math.sin(e),a=-Math.cos(e);s.positionX?(s.positionX.value=t.x,s.positionY.value=t.y,s.positionZ.value=t.z,s.forwardX.value=r,s.forwardY.value=0,s.forwardZ.value=a,s.upX.value=0,s.upY.value=1,s.upZ.value=0):(s.setPosition(t.x,t.y,t.z),s.setOrientation(r,0,a,0,1,0))}out(t){const e=this.ctx;if(!e||!this.master)return null;if(!t)return this.master;const n=e.createPanner();return n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=3,n.rolloffFactor=.9,n.positionX.value=t.x,n.positionY.value=t.y,n.positionZ.value=t.z,n.connect(this.master),n}burst(t,e,n,s,r,a="bandpass"){const o=this.ctx,l=o.createBufferSource();l.buffer=this.noise;const c=o.createBiquadFilter();c.type=a,c.frequency.value=n,c.Q.value=s;const d=o.createGain(),h=o.currentTime;d.gain.setValueAtTime(r,h),d.gain.exponentialRampToValueAtTime(.001,h+e),l.connect(c).connect(d).connect(t),l.start(h,Math.random()*.5),l.stop(h+e+.02)}tone(t,e,n,s,r,a="sine",o=0){const l=this.ctx,c=l.createOscillator();c.type=a;const d=l.createGain(),h=l.currentTime+o;c.frequency.setValueAtTime(e,h),c.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+s),d.gain.setValueAtTime(1e-4,h),d.gain.linearRampToValueAtTime(r,h+.005),d.gain.exponentialRampToValueAtTime(1e-4,h+s),c.connect(d).connect(t),c.start(h),c.stop(h+s+.02)}shot(t,e="rifle"){const n=this.out(t);if(!n)return;if(e==="sniper"||e==="bot-sniper"){this.burst(n,.45,900,.5,1.4),this.burst(n,.1,5e3,1,.6,"highpass"),this.tone(n,80,30,.45,1.1,"triangle"),this.tone(n,500,380,.04,.15,"square",.55),this.tone(n,420,330,.04,.15,"square",.8);return}if(e==="pistol"){this.burst(n,.08,1700,.9,.55),this.tone(n,170,60,.08,.5,"triangle");return}if(e==="smg"){this.burst(n,.07,1900,.9,.45),this.tone(n,150,60,.06,.4,"triangle");return}if(e==="shotgun"){this.burst(n,.32,700,.6,1.3),this.burst(n,.08,3500,1,.5,"highpass"),this.tone(n,95,35,.3,1,"triangle"),this.tone(n,300,200,.05,.2,"square",.42),this.burst(n,.06,1800,2,.25,"bandpass");return}const s=e==="bot",r=.9+Math.random()*.2;this.burst(n,.11,(s?1500:1250)*r,.8,s?1.1:.6),this.burst(n,.04,4500,1.2,.3,"highpass"),this.tone(n,(s?160:130)*r,45,.1,s?.8:.55,"triangle")}dash(){const t=this.out();t&&(this.burst(t,.22,1200,.5,.45,"bandpass"),this.tone(t,220,520,.12,.12,"sine"))}jump(){const t=this.out();t&&this.burst(t,.06,500,1,.25,"lowpass")}land(){const t=this.out();t&&(this.burst(t,.08,300,1,.5,"lowpass"),this.tone(t,70,40,.1,.3,"sine"))}swap(){const t=this.out();t&&(this.tone(t,700,600,.03,.15,"square"),this.tone(t,500,450,.04,.15,"square",.12))}hit(t=!1,e=!1){const n=this.out();n&&(e?(this.tone(n,2900,2600,.07,.28,"square"),this.tone(n,1900,1900,.09,.15,"sine",.02)):this.tone(n,1500+Math.random()*300,1300,.05,.22,"square"),t&&(this.tone(n,660,660,.18,.25,"triangle",.06),this.tone(n,990,990,.3,.25,"triangle",.14)))}hurt(t=!1){const e=this.out();e&&(this.tone(e,t?120:90,40,.25,.8,"sine"),this.burst(e,.12,t?900:400,1,.5,"lowpass"))}whiz(t){const e=this.out(t);e&&this.burst(e,.09,3e3,3,.4)}step(t){const e=this.out(t);e&&this.burst(e,.05,700,1.5,.45,"lowpass")}impact(t){const e=this.out(t);e&&this.burst(e,.04,2500,2,.15)}reload(t="rifle"){const e=this.out();if(e){if(t==="shotgun"){for(let n=0;n<4;n++)this.tone(e,800,700,.03,.15,"square",.25+n*.35);this.tone(e,300,200,.06,.2,"square",1.8);return}this.tone(e,600,500,.03,.2,"square",.2),this.tone(e,900,800,.03,.2,"square",1.1),this.tone(e,400,300,.04,.2,"square",1.55)}}dry(){const t=this.out();t&&this.tone(t,1200,1100,.02,.15,"square")}beep(t=!1){const e=this.out();e&&this.tone(e,t?1320:660,t?1320:660,t?.3:.12,.25,"sine")}sting(t){const e=this.out();if(!e)return;(t?[523,659,784]:[392,330,262]).forEach((s,r)=>this.tone(e,s,s,.35,.22,"triangle",r*.12))}slide(){const t=this.out();t&&this.burst(t,.35,900,.6,.25,"lowpass")}}class Ni{constructor(t){this.def=t,this.cooldown=0,this.reloadT=0,this.burstLeft=0,this.ammo=t.mag}get mag(){return this.def.mag}get reloadTime(){return this.def.reload}get reloading(){return this.reloadT>0}refill(){this.ammo=this.def.mag,this.reloadT=0,this.cooldown=0}cancelReload(){this.reloadT=0,this.burstLeft=0}update(t){return this.cooldown=Math.max(0,this.cooldown-t),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0)?(this.reloadT=0,this.ammo=this.def.mag,!0):!1}canFire(){return this.cooldown<=0&&this.reloadT<=0&&this.ammo>0}fire(t=this.def.fireInterval){this.ammo--,this.cooldown=t}startReload(){return this.reloadT>0||this.ammo>=this.def.mag?!1:(this.reloadT=this.def.reload,!0)}}const Ai=Math.PI/180,Zl={W:-16,C:0,E:16};function Yn(){return Math.sqrt(-2*Math.log(Math.random()+1e-9))*Math.cos(2*Math.PI*Math.random())}function rs(i,t){let e=i-t;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e}class T0{constructor(t){this.brain=t,this.pos=new C,this.vel=new C,this.yaw=Math.PI,this.aimYaw=Math.PI,this.aimPitch=0,this.hp=100,this.alive=!0,this.gun=new Ni(Nn.rifle),this.state="travel",this.tactic="HOLD",this.lane="C",this.spot=null,this.path=[],this.repathT=0,this.sees=!1,this.seeT=0,this.unseenT=99,this.reactT=0,this.lastSeen=new C,this.lastSeenTime=-99,this.lostSightPos=null,this.lostSightTime=-99,this.heardPos=null,this.heardTime=-99,this.holdPoint=null,this.holdUntil=0,this.stateT=0,this.strafeDir=1,this.strafeT=0,this.errYaw=0,this.errPitch=0,this.errT=0,this.aimHead=!1,this.shotsThisPeek=0,this.walkPhase=0,this.alert=0,this.deathT=0,this.dmgDealt=0,this.dmgTaken=0,this.intent="",this.predV=0,this.predConf=0,this.preaimed=!1,this.hist=[],this.thinkT=0}get eye(){return new C(this.pos.x,this.pos.y+Te.eye,this.pos.z)}headCenter(){return new C(this.pos.x,this.pos.y+Te.eye,this.pos.z)}reset(t){this.pos.copy(u0),this.vel.set(0,0,0),this.yaw=this.aimYaw=Math.PI,this.aimPitch=0,this.hp=100,this.alive=!0,this.gun.refill(),this.sees=!1,this.seeT=0,this.unseenT=99,this.lostSightPos=null,this.heardPos=null,this.holdPoint=null,this.hist=[],this.deathT=0,this.dmgDealt=this.dmgTaken=0,this.shotsThisPeek=0,this.lastSeenTime=-99,this.alert=0,this.startTactic(t)}startTactic(t){const e=this.brain;this.tactic=e.chooseTactic();const n=e.lanePred(),s=["W","C","E"];if(this.tactic==="HOLD"){let r;if(Math.random()<.75)r=s.sort((o,l)=>n[l]-n[o])[0];else{let o=Math.random();r="C";for(const l of["W","C","E"])if(o-=n[l],o<=0){r=l;break}}this.lane=r;const a=Rr.filter(o=>o.lane===r);this.spot=a[Math.floor(Math.random()*a.length)],this.goTo(this.spot.p),this.setState("travel",t)}else if(this.tactic==="FLANK")this.lane=["W","E","C"].sort((r,a)=>n[r]-n[a])[0],this.spot=null,this.goTo(new C(Zl[this.lane],0,6)),this.setState("travel",t);else{this.spot=null;const r=this.guessPlayer(t);this.lane=Ro(r.x),this.goTo(r),this.setState("travel",t)}}setState(t,e){this.state=t,this.stateT=e}goTo(t){this.path=zc(this.pos,t),this.repathT=0}guessPlayer(t){if(this.heardPos&&t-this.heardTime<5)return this.heardPos.clone();const e=t<10?0:t<25?1:2,n=this.brain.heatGuess(e);if(n)return n;const s=this.brain.lanePred();let r=Math.random(),a="C";for(const o of["W","C","E"])if(r-=s[o],r<=0){a=o;break}return new C(Zl[a],0,Math.max(-4,Math.min(15,14-t*1.2)))}hear(t,e,n){this.alive&&(this.heardPos=new C(t.x+Yn()*e,0,t.z+Yn()*e),this.heardTime=n,!this.sees&&(this.state==="travel"||this.state==="hold")&&(this.holdPoint=new C(this.heardPos.x,1.4,this.heardPos.z),this.holdUntil=n+1.2))}update(t,e,n,s){if(!this.alive)return this.deathT+=t,null;this.gun.update(t);const r=this.brain.skill();for(this.hist.push({t:e,p:n.pos.clone(),v:n.vel.clone(),h:n.height,lx:n.leanX,lz:n.leanZ,lean:n.lean});this.hist.length>2&&this.hist[0].t<e-.6;)this.hist.shift();const a=this.eye,o=n.headPos(),l=new C(n.pos.x,n.pos.y+n.height*.6,n.pos.z),c=new C().subVectors(l,a),d=c.length(),h=Math.atan2(-c.x,-c.z),f=Math.abs(rs(h,this.aimYaw))<Te.fov/2*Ai||d<2.5,m=n.alive&&(ti(a,o)||ti(a,l)),_=!s&&n.alive&&m&&f;if(_&&!this.sees){const X=new C(-Math.sin(this.aimYaw),0,-Math.cos(this.aimYaw)),W=new C(c.x,0,c.z).normalize();this.preaimed=X.dot(W)>Math.cos(12*Ai);let j=.62-.36*r+Math.random()*.12;this.preaimed&&(j*=.55),this.reactT=Math.max(.19,j),this.seeT=0,this.shotsThisPeek=0;const H=this.brain.leanRate();this.aimHead=Math.random()<.12+.33*r+(H!==null&&H>.3?.3:0),this.unseenT>2&&(this.brain.recordContact(n.pos.x,n.pos.z),this.brain.recordLean(Math.abs(n.lean)>.3)),this.lostSightPos&&e-this.lostSightTime<6&&e-this.lostSightTime>.6&&(this.brain.recordRepeek(this.lostSightPos.distanceTo(n.pos)<3.5),this.lostSightPos=null),this.brain.resetHistory(),this.setState("combat",e)}if(!_&&this.sees&&(this.lostSightPos=n.pos.clone(),this.lostSightTime=e,this.onLostSight(e,n)),this.sees=_,_?(this.seeT+=t,this.unseenT=0,this.lastSeen.copy(n.pos),this.lastSeenTime=e,this.reactT-=t):this.unseenT+=t,this.alert+=((_?1:this.unseenT<3?.5:.15)-this.alert)*Math.min(1,t*5),s)return this.vel.set(0,0,0),null;this.thinkT-=t,this.thinkT<=0&&(this.thinkT=.2,this.think(e,n,r));const M=this.movement(t,e,n,c,d),p=this.state==="combat"?Te.walk:this.state==="hold"?0:Te.run,u=30*t,b=M.x*p,y=M.z*p,x=b-this.vel.x,L=y-this.vel.z,w=Math.hypot(x,L);w<=u?(this.vel.x=b,this.vel.z=y):(this.vel.x+=x/w*u,this.vel.z+=L/w*u),this.vel.y-=_t.gravity*t,oo(this.pos,this.vel,t,Te.radius,Te.height,!0,.3);const A=Math.hypot(this.vel.x,this.vel.z);this.walkPhase+=A*t*1.7,A>.5&&!_&&(this.yaw=Math.atan2(-this.vel.x,-this.vel.z));const T=this.aimTarget(e,n,_,r),g=new C().subVectors(T,a),v=Math.atan2(-g.x,-g.z)+this.errYaw,P=Math.atan2(g.y,Math.hypot(g.x,g.z))+this.errPitch,D=(_?240+360*r:230)*Ai*t,O=rs(v,this.aimYaw);this.aimYaw+=Math.max(-D,Math.min(D,O*Math.min(1,t*(_?9+6*r:6))));const V=P-this.aimPitch;if(this.aimPitch+=Math.max(-D,Math.min(D,V*Math.min(1,t*10))),_?this.yaw+=rs(this.aimYaw,this.yaw)*Math.min(1,t*8):A<.5&&(this.yaw+=rs(this.aimYaw,this.yaw)*Math.min(1,t*4)),this.errT-=t,this.errT<=0){this.errT=.25+Math.random()*.2;const X=(.35+1.7*(1-r))*Ai*(d>20?1.15:1);this.errYaw=Yn()*X,this.errPitch=Yn()*X*.6}if(!this.gun.reloading&&this.gun.ammo===0&&this.gun.startReload(),!_&&this.unseenT>2&&this.gun.ammo<this.gun.mag*.5&&this.gun.startReload(),_&&this.reactT<=0&&this.gun.canFire()){const X=Math.abs(rs(v,this.aimYaw))+Math.abs(P-this.aimPitch),W=Math.max(1.2*Ai,Math.atan2(.45,d));if(X<W){const j=Math.max(this.gun.def.burst?.1:this.gun.def.fireInterval,.1+(.03+Math.random()*.1)*(1.3-r));this.gun.fire(j),this.shotsThisPeek++;const H=(.5+1.6*(1-r)+(A>1?.5:0))*Ai,it=new C(-Math.sin(this.aimYaw+Yn()*H*.5)*Math.cos(this.aimPitch),Math.sin(this.aimPitch+Yn()*H*.5),-Math.cos(this.aimYaw+Yn()*H*.5)*Math.cos(this.aimPitch)).normalize();return{origin:a,dir:it}}}return null}onLostSight(t,e){const n=this.brain,s=n.retreatRate(),r=n.repeekRate();if(this.hp<=40&&e.hp>=this.hp){this.startRetreat(t,e);return}if(s!==null&&s>=.55&&e.hp<=65&&this.hp>=45){this.intent="chase",this.goTo(this.lastSeen),this.setState("chase",t);return}this.holdPoint=new C(this.lastSeen.x,this.holdY(),this.lastSeen.z);const a=r!==null&&r>=.55?3.2:1;this.holdUntil=t+a,this.intent=r!==null&&r>=.55?"holdAngle":"brief",this.setState("hold",t)}startRetreat(t,e){const n=new C(e.pos.x,e.pos.y+1.5,e.pos.z);let s=null,r=-1/0;for(let a=0;a<50;a++){const o=Math.random()*Math.PI*2,l=3+Math.random()*8,c=new C(this.pos.x+Math.cos(o)*l,0,this.pos.z+Math.sin(o)*l);if(!co(c.x,c.z))continue;const d=new C(c.x,1.5,c.z);if(ti(n,d))continue;const h=c.distanceTo(e.pos)*.5-c.distanceTo(this.pos);h>r&&(r=h,s=c)}s&&(this.goTo(s),this.intent="retreat",this.setState("retreat",t))}think(t,e,n){const s=this.brain;if(this.state==="combat"&&this.sees){const r=s.avgFireDelay(),a=s.retreatRate(),o=a!==null&&a<=.3?55:35;if(this.hp<=o&&e.hp>this.hp+15){this.startRetreat(t,e);return}if(r!==null&&r<.4&&this.shotsThisPeek>=3&&this.seeT>1.2){this.startRetreat(t,e);return}return}if(this.state==="hold"&&this.holdPoint&&t>this.holdUntil&&this.intent!=="ambush"){this.holdPoint=null,this.intent="search",this.goTo(this.lastSeenTime>-50?this.lastSeen:this.guessPlayer(t)),this.setState("search",t);return}if(this.state==="retreat"&&this.path.length===0){this.holdPoint=this.lastSeenTime>-50?new C(this.lastSeen.x,this.holdY(),this.lastSeen.z):null,this.holdUntil=t+2.5,this.intent="holdAngle",this.setState("hold",t);return}if(this.state==="travel"&&this.path.length===0){if(this.tactic==="HOLD"&&this.spot){this.intent="ambush",this.holdPoint=null,this.setState("hold",t);return}this.intent="hunt",this.goTo(this.guessPlayer(t));return}if(this.state==="hold"&&this.intent==="ambush"&&t-this.stateT>20){this.intent="hunt",this.goTo(this.guessPlayer(t)),this.setState("travel",t);return}if(this.state==="search"||this.state==="chase"){this.path.length===0&&(this.intent="hunt",this.goTo(this.guessPlayer(t)),this.setState("travel",t));return}this.state==="travel"&&this.tactic!=="HOLD"&&(this.repathT+=.2,this.repathT>3&&this.intent==="hunt"&&this.goTo(this.guessPlayer(t))),(this.state==="travel"||this.state==="hold"&&this.intent==="ambush"&&t-this.stateT>6)&&this.heardPos&&t-this.heardTime<.3&&(this.intent="hunt",this.goTo(this.heardPos),this.setState("travel",t))}followPath(){for(;this.path.length;){const t=this.path[0],e=t.x-this.pos.x,n=t.z-this.pos.z,s=Math.hypot(e,n);if(s<.45){this.path.shift();continue}return new C(e/s,0,n/s)}return new C}movement(t,e,n,s,r){if(this.state==="combat"){this.strafeT-=t,this.strafeT<=0&&(this.strafeT=.35+Math.random()*.6,this.strafeDir=Math.random()<.5?-1:1);const a=new C(s.x,0,s.z).normalize(),o=new C(-a.z,0,a.x).multiplyScalar(this.strafeDir);let l=0;this.tactic==="RUSH"||n.hp<=50?l=r>7?.7:0:r>26?l=.6:r<4&&(l=-.5);const c=this.brain.weaponHabit();n.gun.def.id==="shotgun"||c.n>=30&&c.shotShare>=.35?r<13&&(l=-.9):c.n>=30&&c.rifleAvg>18&&r>10&&this.hp>50&&(l=Math.max(l,.5));const d=this.gun.def.id;d==="shotgun"?l=r>5?.9:0:d==="smg"?l=r>10?.7:l:d==="sniper"&&(l=r<16?-.8:0);const h=o.addScaledVector(a,l),f=this.pos.clone().addScaledVector(h.clone().normalize(),.8);return co(f.x,f.z)||(this.strafeDir*=-1,this.strafeT=.4),this.unseenT>.8&&(this.setState("search",e),this.goTo(this.lastSeen)),h.lengthSq()>0?h.normalize():h}return this.state==="hold"?new C:this.followPath()}aimTarget(t,e,n,s){if(this.predV=0,this.predConf=0,n){const o=Te.perceptionLag;let l=this.hist[0];for(const A of this.hist)if(A.t<=t-o)l=A;else break;const c=l.p.clone(),d=this.eye,h=new C(c.x-d.x,0,c.z-d.z).normalize(),f=new C(h.z,0,-h.x),m=l.v.dot(f),{v:_,conf:M}=this.brain.expectedLateral(),p=M*(.45+.55*s);this.predV=_,this.predConf=p;const u=o+.1,b=.1+.25*s,y=(1-p)*m*b+p*_*_t.walk*.85;c.addScaledVector(f,y*u);const x=l.v.dot(h);c.addScaledVector(h,x*u*b);const L=this.brain.symShare("C"),w=L.total>15&&L.share>.22?.08:0;return Math.abs(l.lean)>.3?(c.x+=l.lx,c.z+=l.lz,c.y+=l.h-.15-Math.abs(l.lean)*.06):c.y+=this.aimHead?l.h-.15:l.h*(.62-w),c}if(this.holdPoint&&(this.state==="hold"||t<this.holdUntil))return this.holdPoint;if(this.state==="hold"&&this.intent==="ambush"&&this.spot){const o=this.eye,l=this.brain.bestContactFrom(this.pos,c=>ti(o,c));return l?l.p:this.spot.look}const r=this.eye;if(this.state!=="chase"){const o=this.brain.bestContactFrom(this.pos,l=>l.distanceTo(r)<22&&ti(r,l));if(o&&o.w>1.2)return o.p}return Math.hypot(this.vel.x,this.vel.z)>.5?new C(this.pos.x+this.vel.x*3,1.5,this.pos.z+this.vel.z*3):new C(this.pos.x-Math.sin(this.aimYaw)*5,1.5,this.pos.z-Math.cos(this.aimYaw)*5)}holdY(){const t=this.brain.leanRate();return t!==null&&t>.3?1.55:1.3}intentLabel(t){const e={ambush:["pusuda bekliyor","waiting in ambush"],hunt:["seni arıyor","hunting you"],chase:["peşinde","chasing you"],holdAngle:["köşeyi tutuyor","holding the corner"],brief:["köşeyi tutuyor","holding the corner"],retreat:["siper değiştiriyor","repositioning"],search:["son gördüğü yere gidiyor","checking last sighting"],travel:["yerleşiyor","moving into position"]};let n=this.intent;if(this.state==="combat")return t==="tr"?"çatışmada":"engaging";this.state==="travel"&&(n===""||n==="ambush")&&(n="travel");const s=e[n]||e.travel;return t==="tr"?s[0]:s[1]}}class w0{constructor(){this.pos=new C,this.vel=new C,this.yaw=0,this.pitch=0,this.height=_t.standHeight,this.grounded=!0,this.crouching=!1,this.sliding=!1,this.slideT=0,this.slideCd=0,this.sprinting=!1,this.coyote=0,this.ads=0,this.hp=_t.maxHp,this.alive=!0,this.recoil=0,this.recoilYaw=0,this.guns=[new Ni(Nn.rifle),new Ni(Nn.shotgun)],this.cur=0,this.switchT=0,this.bob=0,this.landKick=0,this.sens=.0022,this.airTime=0,this.dashT=0,this.dashCd=0,this.airDashUsed=!1,this.wallrun=!1,this.wallT=0,this.wallN=new C,this.wallCd=0,this.lastWallN=new C,this.roll=0,this.lookDX=0,this.lookDY=0,this.event=null,this.mech={wallrun:!0,dash:!0,slide:!0,slideHop:!0,lean:!0},this.adsSensMul=.6,this.lean=0,this.leanX=0,this.leanZ=0,this.justLanded=0}get gun(){return this.guns[this.cur]}reset(){this.pos.copy(h0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.height=_t.standHeight,this.crouching=this.sliding=this.sprinting=this.wallrun=!1,this.hp=_t.maxHp,this.alive=!0,this.recoil=this.recoilYaw=0,this.ads=0,this.dashT=this.dashCd=0,this.switchT=0,this.lean=this.leanX=this.leanZ=0,this.cur=0;for(const t of this.guns)t.refill()}get eye(){return new C(this.pos.x+this.leanX,this.pos.y+this.height-.12-Math.abs(this.lean)*.06,this.pos.z+this.leanZ)}headPos(){return new C(this.pos.x+this.leanX,this.pos.y+this.height-.15-Math.abs(this.lean)*.06,this.pos.z+this.leanZ)}forward(t=new C){const e=this.pitch+this.recoil*Math.PI/180,n=this.yaw+this.recoilYaw*Math.PI/180,s=Math.cos(e);return t.set(-Math.sin(n)*s,Math.sin(e),-Math.cos(n)*s)}horizSpeed(){return Math.hypot(this.vel.x,this.vel.z)}spread(){const t=this.gun.def,e=this.horizSpeed();let n=t.hipSpread+(t.adsSpread-t.hipSpread)*this.ads;return n+=t.moveSpread*Math.min(1,e/_t.sprint)*(1-.6*this.ads),!this.grounded&&!this.wallrun&&(n+=t.airSpread),(this.sliding||this.wallrun)&&(n+=t.slideSpread*(1-.5*this.ads)),this.crouching&&!this.sliding&&(n*=.8),n}setLoadout(t){this.guns=t.map(e=>new Ni(Nn[e])),this.cur=0}switchTo(t){return t>=this.guns.length||t===this.cur||this.switchT>0?!1:(this.gun.cancelReload(),this.cur=t,this.switchT=this.gun.def.swapTime??.32,!0)}update(t,e,n){this.event=null;const s=this.sens*(1-(1-this.adsSensMul)*this.ads);if(this.yaw-=e.lookX*s,this.pitch-=e.lookY*s,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch)),this.lookDX+=(e.lookX-this.lookDX)*Math.min(1,t*20),this.lookDY+=(e.lookY-this.lookDY)*Math.min(1,t*20),this.recoil=Math.max(0,this.recoil-t*(5+this.recoil*7)),this.recoilYaw*=Math.max(0,1-t*8),this.landKick=Math.max(0,this.landKick-t*4),this.switchT=Math.max(0,this.switchT-t),!this.alive){this.vel.x*=.9,this.vel.z*=.9,this.vel.y-=_t.gravity*t;const g=oo(this.pos,this.vel,t,_t.radius,.5,this.grounded,0);this.grounded=g.grounded,this.height=Math.max(.35,this.height-t*3),this.roll+=(.35-this.roll)*Math.min(1,t*3);return}let r=n?0:e.fwd,a=n?0:e.right;const o=Math.hypot(r,a);o>1&&(r/=o,a/=o);const l=Math.sin(this.yaw),c=Math.cos(this.yaw),d=-l*r+c*a,h=-c*r-l*a,f=this.gun.def,m=e.ads&&!this.gun.reloading&&!n&&this.switchT<=0;if(this.ads+=((m?1:0)-this.ads)*Math.min(1,t/(f.adsTime*.45)),this.sprinting=!n&&e.sprint&&r>.3&&!m&&!this.crouching&&this.grounded&&!this.sliding,this.slideCd=Math.max(0,this.slideCd-t),this.dashCd=Math.max(0,this.dashCd-t),this.wallCd=Math.max(0,this.wallCd-t),this.grounded&&(this.airDashUsed=!1,this.lastWallN.set(0,0,0)),!n&&this.mech.dash&&e.dashPressed&&this.dashCd<=0&&!(this.airDashUsed&&!this.grounded)){let g=d,v=h;o<.1&&(g=-l,v=-c);const P=Math.hypot(g,v)||1,D=Math.max(_t.dashSpeed,this.horizSpeed());this.vel.x=g/P*D,this.vel.z=v/P*D,this.grounded||(this.vel.y=Math.max(this.vel.y,.5),this.airDashUsed=!0),this.dashT=_t.dashTime,this.dashCd=_t.dashCooldown,this.wallrun=!1,this.event="dash"}this.dashT>0&&(this.dashT-=t);const _=this.horizSpeed();this.justLanded=Math.max(0,this.justLanded-t);const M=this.grounded&&!this.sliding&&this.slideCd<=0&&_>_t.walk*.9;if(!n&&this.mech.slide&&M&&(e.crouchPressed||e.crouch&&this.justLanded>0&&_>_t.walk+1)){this.sliding=!0,this.slideT=_t.slideTime;const g=Math.min(_t.maxSpeed,_>=_t.slideSpeed-.5?this.mech.slideHop?_+_t.slideBonus:_t.slideSpeed:Math.max(_,_t.slideSpeed)),v=_||1;this.vel.x=this.vel.x/v*g,this.vel.z=this.vel.z/v*g,this.sprinting=!1,this.event="slide"}const p=!n&&e.crouch;let u=_t.standHeight;if(this.sliding?u=_t.slideHeight:p&&(u=_t.crouchHeight),u>this.height&&cs(this.pos.x,this.pos.y,this.pos.z,_t.radius,u)&&(u=this.height),this.crouching=!this.sliding&&u<_t.standHeight-.1,this.height+=(u-this.height)*Math.min(1,t*14),this.mech.wallrun&&!this.grounded&&!this.wallrun&&!n&&this.airTime>.06&&r>.2&&this.wallCd<=0&&this.horizSpeed()>5){const g=Xl(this.pos.x,this.pos.y,this.pos.z,_t.radius);if(g&&!g.equals(this.lastWallN)){const v=this.vel.x*g.x+this.vel.z*g.z,P=this.vel.x-v*g.x,D=this.vel.z-v*g.z,O=Math.hypot(P,D);if(O>2.5){const V=Math.min(_t.maxSpeed,Math.max(O,_t.wallrunMinSpeed));this.vel.x=P/O*V,this.vel.z=D/O*V,this.vel.y=Math.min(2.4,Math.max(this.vel.y,1.2)),this.wallrun=!0,this.wallT=_t.wallrunTime,this.wallN.copy(g),this.lastWallN.copy(g),this.sliding=!1,this.airDashUsed=!1,this.event="wallrun"}}}if(this.grounded?this.coyote=_t.coyote:this.coyote-=t,!n&&e.jumpPressed){if(this.wallrun){const g=this.horizSpeed();this.vel.x=this.vel.x/(g||1)*g*.95+this.wallN.x*_t.wallJumpOut,this.vel.z=this.vel.z/(g||1)*g*.95+this.wallN.z*_t.wallJumpOut,this.vel.y=_t.wallJumpUp,this.wallrun=!1,this.wallCd=.25,this.event="walljump"}else if(this.coyote>0){if(this.vel.y=_t.jumpVel,this.coyote=0,this.grounded=!1,this.sliding&&(this.sliding=!1,this.slideCd=.12,!this.mech.slideHop)){const g=this.horizSpeed();g>_t.sprint&&(this.vel.x*=_t.sprint/g,this.vel.z*=_t.sprint/g)}this.event="jump"}}if(this.wallrun){this.wallT-=t;const g=Xl(this.pos.x,this.pos.y,this.pos.z,_t.radius+.1,1);this.wallT<=0||!g||!g.equals(this.wallN)||r<=0||this.grounded?(this.wallrun=!1,this.wallCd=.35):(this.vel.y-=_t.wallrunGravity*t,this.vel.x-=this.wallN.x*2*t,this.vel.z-=this.wallN.z*2*t)}else if(this.sliding){this.slideT-=t;const g=this.horizSpeed(),v=Math.max(0,g-_t.slideFriction*t*(1+g*.12));g>0&&(this.vel.x*=v/g,this.vel.z*=v/g),this.vel.x+=d*t*7,this.vel.z+=h*t*7,(this.slideT<=0||v<_t.crouch)&&(this.sliding=!1,this.slideCd=_t.slideCooldown)}else if(!(this.dashT>0)){let g=_t.walk;this.sprinting&&(g=_t.sprint),this.crouching&&(g=_t.crouch),this.ads>.5&&(g=Math.min(g,_t.ads)),this.gun.reloading&&!this.sprinting&&(g*=.92),Math.abs(this.lean)>.3&&(g=Math.min(g,_t.walk*.75));const v=this.horizSpeed();if(this.grounded)if(v>g+.3){const P=Math.max(g,v-_t.overspeedDecel*t*(o>0?1:2.5));let D=this.vel.x/v,O=this.vel.z/v;if(o>0){D+=d*t*6,O+=h*t*6;const V=Math.hypot(D,O)||1;D/=V,O/=V}this.vel.x=D*P,this.vel.z=O*P}else{const P=d*g,D=h*g,O=(o>0?_t.groundAccel:_t.friction*6)*t,V=P-this.vel.x,X=D-this.vel.z,W=Math.hypot(V,X);W<=O?(this.vel.x=P,this.vel.z=D):(this.vel.x+=V/W*O,this.vel.z+=X/W*O)}else if(o>0){this.vel.x+=d*_t.airAccel*t,this.vel.z+=h*_t.airAccel*t;const P=this.horizSpeed(),D=Math.max(v,g);P>D&&(this.vel.x*=D/P,this.vel.z*=D/P)}}this.wallrun||(this.vel.y-=_t.gravity*t);const b=this.horizSpeed();b>_t.maxSpeed&&(this.vel.x*=_t.maxSpeed/b,this.vel.z*=_t.maxSpeed/b);const y=!this.grounded,x=this.vel.y,L=oo(this.pos,this.vel,t,_t.radius,this.height,this.grounded,_t.stepHeight);this.grounded=L.grounded,this.grounded&&(this.wallrun=!1),this.grounded&&y&&this.airTime>.2&&(this.justLanded=.15),this.grounded&&y&&x<-4&&(this.landKick=Math.min(1,-x/14),this.event||(this.event="land")),this.grounded?this.airTime=0:this.airTime+=t;const w=this.mech.lean&&!n&&this.grounded&&!this.sliding&&!this.sprinting?e.lean:0;this.lean+=(w-this.lean)*Math.min(1,t*11),Math.abs(this.lean)<.002&&(this.lean=0);{const g=Math.cos(this.yaw),v=-Math.sin(this.yaw);let P=.42*this.lean;if(P!==0){const D=new C(this.pos.x,this.pos.y+this.height-.15,this.pos.z),O=new C(g*Math.sign(P),0,v*Math.sign(P)),V=ao(D,O,Math.abs(P)+.15);V&&(P=Math.sign(P)*Math.max(0,V.t-.15))}this.leanX=g*P,this.leanZ=v*P}let A=-this.lean*.2;if(this.sliding&&(A=-.07),this.wallrun){const g=Math.cos(this.yaw),v=-Math.sin(this.yaw);A=(this.wallN.x*g+this.wallN.z*v)*.16}this.roll+=(A-this.roll)*Math.min(1,t*9);const T=this.horizSpeed();this.grounded&&!this.sliding&&T>.5&&(this.bob+=t*T*1.35),this.wallrun&&(this.bob+=t*T*1.5)}}const Bc="gozcu.rekor.v1";function Hc(){try{return JSON.parse(localStorage.getItem(Bc)||"{}")}catch{return{}}}const Ri={min:new C,max:new C};function A0(){return Math.sqrt(-2*Math.log(Math.random()+1e-9))*Math.cos(2*Math.PI*Math.random())}function Jl(i,t){if(t<=i.falloffStart)return 1;if(t>=i.falloffEnd)return i.minDmgMul;const e=(t-i.falloffStart)/(i.falloffEnd-i.falloffStart);return 1+(i.minDmgMul-1)*e}class R0{constructor(t,e,n,s){this.brain=t,this.view=e,this.sfx=n,this.ev=s,this.player=new w0,this.phase="menu",this.phaseT=0,this.roundT=0,this.round=0,this.pScore=0,this.bScore=0,this.timeScale=1,this.slowT=0,this.map="avlu",this.mode="classic",this.loadout=["rifle","shotgun"],this.lives=3,this.roundWeapon="rifle",this.stats=this.freshStats(),this.death=null,this.roundBShots=0,this.roundBHits=0,this.symT=0,this.laneDone=!1,this.pSees=!1,this.pUnseenT=99,this.fireDelayStart=null,this.retreatCheck=null,this.stepT=0,this.hearT=0,this.lastCount=-1,this.lastInsights=!1,this.bot=new T0(t)}freshStats(){return{pShots:0,pHits:0,pHeads:0,bShots:0,bHits:0,roundsBotHitRate:[]}}setMap(t){this.map=t,Fc(t),this.brain.setMap(t),this.view.buildMap()}get endless(){return ro.find(t=>t.id===this.mode).endless}startMatch(t=this.map,e=this.mode,n=this.loadout){t!==this.map&&this.setMap(t),this.mode=e,this.loadout=n,this.lives=3,this.round=0,this.pScore=this.bScore=0,this.stats=this.freshStats(),this.nextRound()}nextRound(){this.round++,this.mode==="rotation"?(this.roundWeapon=xr[Math.floor(Math.random()*xr.length)],this.player.setLoadout([this.roundWeapon]),this.bot.gun=new Ni(Nn[this.roundWeapon])):(this.player.setLoadout(this.loadout),this.bot.gun=new Ni(Nn.rifle)),this.brain.modeBonus=this.mode==="streak"?this.pScore*.07:this.mode==="lives"?this.pScore*.04:0,this.player.reset(),this.bot.reset(0),this.mode==="oneshot"&&(this.player.hp=1,this.bot.hp=1),this.view.resetRound(),this.roundT=0,this.laneDone=!1,this.symT=0,this.pSees=!1,this.pUnseenT=99,this.fireDelayStart=null,this.retreatCheck=null,this.death=null,this.roundBShots=this.roundBHits=0,this.timeScale=1,this.setPhase("countdown"),this.lastCount=-1,this.ev.roundStart(this.round)}setPhase(t){this.phase=t,this.phaseT=0}get frozen(){return this.phase!=="live"}step(t,e){if(this.phase==="menu"||this.phase==="matchEnd")return;this.phaseT+=t,this.slowT>0&&(this.slowT-=t,this.slowT<=0&&(this.timeScale=1));const n=t*this.timeScale;if(this.phase==="countdown"){const a=Math.ceil(jn.countdown-this.phaseT);a!==this.lastCount&&(this.lastCount=a,a>0&&(this.ev.countdown(a),this.sfx.beep(!1))),this.phaseT>=jn.countdown&&(this.setPhase("live"),this.ev.countdown(0),this.sfx.beep(!0))}const s=this.player;switch(s.update(n,e,this.frozen),s.event){case"slide":this.sfx.slide();break;case"dash":this.sfx.dash();break;case"wallrun":this.sfx.slide();break;case"walljump":case"jump":this.sfx.jump();break;case"land":this.sfx.land();break}for(let a=0;a<s.guns.length;a++)a===s.cur?s.guns[a].update(n):s.guns[a].cooldown=Math.max(0,s.guns[a].cooldown-n);if(this.phase==="live"&&s.alive){if(e.weaponSlot>=0){const l=e.weaponSlot===2?1-s.cur:e.weaponSlot;s.switchTo(l)&&this.sfx.swap()}e.reloadPressed&&s.switchT<=0&&s.gun.startReload()&&this.sfx.reload(s.gun.def.id);const a=s.gun.def,o=s.gun;a.burst?(e.firePressed&&o.burstLeft===0&&s.switchT<=0&&(o.canFire()?o.burstLeft=a.burst:this.playerFire()),o.burstLeft>0&&o.cooldown<=0&&(o.ammo<=0||o.reloading?o.burstLeft=0:(o.burstLeft--,this.playerFire(o.burstLeft>0?a.burstGap:a.fireInterval)))):(a.auto&&e.fireHeld||e.firePressed)&&s.switchT<=0&&this.playerFire(),this.roundT+=n}const r=this.bot.update(n,this.roundT,s,this.frozen||!s.alive);if(r&&this.phase==="live"&&this.botFire(r.origin,r.dir),this.phase==="live"){this.observe(n);const a=Math.hypot(this.bot.vel.x,this.bot.vel.z);if(this.stepT-=n,this.bot.alive&&a>2.5&&this.stepT<=0&&(this.stepT=a>6?.3:.42,this.bot.pos.distanceTo(s.pos)<24&&this.sfx.step(this.bot.pos.clone().setY(.2))),this.roundT>=jn.roundTime){const o=s.hp>this.bot.hp?!0:s.hp<this.bot.hp?!1:null;this.endRound(o,"time")}}if(this.phase==="roundEnd"&&this.phaseT>=jn.roundEnd+(this.lastInsights?1.2:0)+(this.death?.8:0))if(this.matchOver()){this.setPhase("matchEnd"),this.brain.endMatch(),this.brain.modeBonus=0;const a=this.endless,o=Hc(),l=o[this.mode]||0,c=a&&this.pScore>l;if(c){o[this.mode]=this.pScore;try{localStorage.setItem(Bc,JSON.stringify(o))}catch{}}this.ev.matchEnd(a?this.pScore>0:this.pScore>this.bScore,this.stats,{mode:this.mode,endless:a,score:this.pScore,best:Math.max(l,this.pScore),newRecord:c})}else this.nextRound()}matchOver(){return this.mode==="streak"?this.bScore>0:this.mode==="lives"?this.lives<=0:this.pScore>=jn.winRounds||this.bScore>=jn.winRounds}endRound(t,e){if(this.phase!=="live")return;this.setPhase("roundEnd"),t===!0?this.pScore++:t===!1&&(this.bScore++,this.lives--);const n=this.bot,s=t===!1?1:t===null?.5:n.dmgDealt/Math.max(1,n.dmgDealt+n.dmgTaken)*.6;this.brain.rewardTactic(n.tactic,s),this.brain.endRound(t),this.stats.roundsBotHitRate.push(this.roundBShots?this.roundBHits/this.roundBShots:0);const r=this.brain.freshInsights(2);this.lastInsights=r.length>0,this.slowT=e==="time"?0:1.1,this.timeScale=e==="time"?1:.25,this.sfx.sting(t!==!1),this.ev.roundEnd({round:this.round,playerWon:t,reason:e,tactic:n.tactic,lane:n.lane,insights:r,pScore:this.pScore,bScore:this.bScore,death:e==="death"?this.death:null})}playerFire(t){const e=this.player,n=e.gun,s=n.def;if(!n.canFire()){n.ammo===0&&!n.reloading&&n.cooldown<=0&&(this.sfx.dry(),n.startReload()&&this.sfx.reload(s.id));return}n.fire(t),this.stats.pShots++;const r=e.eye,a=e.forward(),o=e.spread()*Math.PI/180,l=this.bot;this.brain.recordWeaponUse(s.id,r.distanceTo(l.pos)),e.recoil+=s.recoil*(1-.4*e.ads)*(.85+Math.random()*.3),e.recoilYaw+=A0()*s.recoilYaw*(1-.4*e.ads),this.view.muzzleFlash(s.id),this.view.addShake(s.id==="shotgun"?.35:.05),this.sfx.shot(void 0,s.id),this.brain.setWeapon(s.id),this.bot.hear(e.pos,1.5,this.roundT),this.fireDelayStart!==null&&(this.brain.recordFireDelay(this.roundT-this.fireDelayStart),this.fireDelayStart=null);const c=new C(0,1,0),d=new C().crossVectors(a,c).normalize(),h=new C().crossVectors(d,a).normalize();let f=0,m=!1,_=null;const M=this.view.muzzleWorld(e.ads);for(let p=0;p<s.pellets;p++){const u=a.clone(),b=Math.random()*Math.PI*2,y=Math.sqrt(Math.random())*Math.tan(o/2);u.addScaledVector(d,Math.cos(b)*y).addScaledVector(h,Math.sin(b)*y).normalize();const x=ao(r,u,s.range);let L=x?x.t:s.range,w=null;if(l.alive){const T=Yl(r,u,l.headCenter(),Te.headR,L);T!==null&&(w="head",L=T),Ri.min.set(l.pos.x-Te.radius,l.pos.y,l.pos.z-Te.radius),Ri.max.set(l.pos.x+Te.radius,l.pos.y+Te.eye-Te.headR,l.pos.z+Te.radius);const g=Sr(r,u,Ri,L);g&&g.t<L&&(w="body",L=g.t)}const A=r.clone().addScaledVector(u,L);if((p<3||s.pellets===1)&&this.view.tracer(M,A,!1),w){const T=(w==="head"?s.headDmg:s.bodyDmg)*Jl(s,L);f+=T,w==="head"&&(m=!0),_=A,this.view.impact(A,null,!0)}else x&&(this.view.impact(A,x.normal,!1),p===0&&A.distanceTo(l.pos)<6&&this.sfx.impact(A))}if(f>0&&_){const p=this.mode==="oneshot"?Math.max(1,Math.round(f)):Math.round(f);l.hp-=p,l.dmgTaken+=p,this.stats.pHits++,m&&this.stats.pHeads++,this.view.botHit();const u=l.hp<=0;this.sfx.hit(u,m),this.ev.hitMarker(u,m),this.ev.damageNumber(_,p,m,u),l.hear(e.pos,.6,this.roundT),u&&(l.alive=!1,this.endRound(!0,"kill"))}n.ammo===0&&n.startReload()&&this.sfx.reload(s.id)}botFire(t,e){const n=this.player,s=this.bot,r=s.gun.def;this.stats.bShots++,this.roundBShots++,this.sfx.shot(t,r.id==="sniper"?"bot-sniper":"bot");const a=ao(t,e,r.range);let o=a?a.t:r.range,l=null;const c=n.headPos(),d=Yl(t,e,c,.2,o);d!==null&&(l="head",o=d),Ri.min.set(n.pos.x-.32,n.pos.y,n.pos.z-.32),Ri.max.set(n.pos.x+.32,n.pos.y+n.height-.33,n.pos.z+.32);const h=Sr(t,e,Ri,o);h&&h.t<o&&(l="body",o=h.t);const f=t.clone().addScaledVector(e,o),m=t.clone().add(new C(-Math.sin(s.aimYaw-.35)*.5,-.12,-Math.cos(s.aimYaw-.35)*.5));if(this.view.tracer(m,f,!0),l&&n.alive){let _=Math.round((l==="head"?r.headDmg:r.bodyDmg)*Jl(r,o));r.pellets>1&&(_=Math.round(_*r.pellets*Math.max(.15,Math.min(.85,1.1-o/14)))),n.hp=Math.max(0,n.hp-_),s.dmgDealt+=_,this.stats.bHits++,this.roundBHits++,this.sfx.hurt(l==="head"),this.view.addShake(l==="head"?.7:.45);const M=Math.atan2(-(s.pos.x-n.pos.x),-(s.pos.z-n.pos.z));this.ev.damaged(M-n.yaw,n.hp),n.hp<=65&&n.hp>0&&!this.retreatCheck&&(this.retreatCheck={t:this.roundT,d:n.pos.distanceTo(s.pos)}),n.hp<=0&&(n.alive=!1,this.death={dist:t.distanceTo(n.pos),head:l==="head",predV:s.predV,predConf:s.predConf,botHp:Math.max(0,s.hp)},this.endRound(!1,"death"))}else{a&&this.view.impact(f,a.normal,!1);const M=new C().subVectors(n.eye,t).dot(e);if(M>0&&M<o+1){const p=t.clone().addScaledVector(e,M);p.distanceTo(n.eye)<1.6&&this.sfx.whiz(p)}}}observe(t){const e=this.player,n=this.bot,s=this.brain;if(!e.alive||!n.alive)return;s.setWeapon(e.gun.def.id);const r=this.roundT<10?0:this.roundT<25?1:2;if(s.recordPosition(e.pos.x,e.pos.z,r,t),!this.laneDone&&e.pos.z<9&&(this.laneDone=!0,s.recordLane(Ro(e.pos.x))),n.sees){if(this.symT+=t,this.symT>=.15){this.symT=0;let m;if(!e.grounded&&!e.wallrun)m="J";else if(e.sliding||e.crouching)m="C";else{const _=e.pos.x-n.pos.x,M=e.pos.z-n.pos.z,p=Math.hypot(_,M)||1,u=e.vel.x*(M/p)+e.vel.z*(-_/p);m=u<-1.8?"L":u>1.8?"R":"S"}s.pushSym(m)}}else this.symT=.1;const a=e.eye,o=n.headCenter(),l=new C().subVectors(o,a),c=l.length(),f=e.forward().dot(l.clone().divideScalar(c))>Math.cos(40*Math.PI/180)&&ti(a,o);if(f&&!this.pSees&&this.pUnseenT>1.5&&(this.fireDelayStart=this.roundT),f?this.pUnseenT=0:this.pUnseenT+=t,this.pSees=f,this.fireDelayStart!==null&&this.roundT-this.fireDelayStart>2.5&&(this.fireDelayStart=null),this.retreatCheck&&this.roundT-this.retreatCheck.t>1.4){const m=e.pos.distanceTo(n.pos),_=m-this.retreatCheck.d>1.8||!n.sees&&m>this.retreatCheck.d+.3;s.recordRetreat(_),this.retreatCheck=null}this.hearT-=t,this.hearT<=0&&(e.sprinting||e.sliding||e.wallrun||e.dashT>0)&&e.pos.distanceTo(n.pos)<Te.hearSprint&&(this.hearT=.5,n.hear(e.pos,2,this.roundT))}}const yr=[{id:"forward",tr:"İleri",en:"Forward",def:"KeyW"},{id:"back",tr:"Geri",en:"Back",def:"KeyS"},{id:"left",tr:"Sol",en:"Left",def:"KeyA"},{id:"right",tr:"Sağ",en:"Right",def:"KeyD"},{id:"jump",tr:"Zıpla / duvardan sıçra",en:"Jump / wall-jump",def:"Space"},{id:"crouch",tr:"Eğil / kay",en:"Crouch / slide",def:"KeyC"},{id:"sprint",tr:"Koş",en:"Sprint",def:"ShiftLeft"},{id:"dash",tr:"Atılma (dash)",en:"Dash",def:"KeyF"},{id:"leanL",tr:"Sola yat",en:"Lean left",def:"KeyQ"},{id:"leanR",tr:"Sağa yat",en:"Lean right",def:"KeyE"},{id:"fire",tr:"Ateş",en:"Fire",def:"Mouse0"},{id:"ads",tr:"Nişan al",en:"Aim",def:"Mouse2"},{id:"reload",tr:"Doldur",en:"Reload",def:"KeyR"},{id:"weapon1",tr:"Tüfek",en:"Rifle",def:"Digit1"},{id:"weapon2",tr:"Pompalı",en:"Shotgun",def:"Digit2"},{id:"panel",tr:"Nöbetçi göstergesi",en:"Sentinel panel",def:"KeyG"}],Vc="gozcu.tuslar.v1";function Gc(){const i={};for(const t of yr)i[t.id]=t.def;return i}function C0(){const i=Gc();try{const t=JSON.parse(localStorage.getItem(Vc)||"{}");for(const e of yr)typeof t[e.id]=="string"&&(i[e.id]=t[e.id])}catch{}return i}function Ql(i){try{localStorage.setItem(Vc,JSON.stringify(i))}catch{}}function ua(i,t){const e={Mouse0:["Sol tık","LMB"],Mouse1:["Orta tık","MMB"],Mouse2:["Sağ tık","RMB"],Mouse3:["Fare 4","Mouse 4"],Mouse4:["Fare 5","Mouse 5"]};return e[i]?t==="tr"?e[i][0]:e[i][1]:i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"Num "+i.slice(6):{Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Tab:"Tab",CapsLock:"Caps",Backquote:"`",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",Enter:"Enter"}[i]||i}const ho=[{id:"raw",name:"Nöbetçi",yaw:0},{id:"cs2",name:"CS2 / CS:GO",yaw:.022},{id:"apex",name:"Apex Legends",yaw:.022},{id:"valorant",name:"Valorant",yaw:.07},{id:"ow2",name:"Overwatch 2",yaw:.0066},{id:"cod",name:"Call of Duty (MW / Warzone)",yaw:.0066}];function P0(){return{fwd:0,right:0,sprint:!1,crouch:!1,crouchPressed:!1,jumpPressed:!1,firePressed:!1,fireHeld:!1,ads:!1,reloadPressed:!1,dashPressed:!1,weaponSlot:-1,lean:0,lookX:0,lookY:0}}class L0{constructor(t){this.el=t,this.down=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.locked=!1,this.wheel=0,this.binds=C0(),this.modes={crouchToggle:!1,adsToggle:!1,leanToggle:!1,autoSprint:!1},this.crouchOn=!1,this.adsOn=!1,this.leanOn=0,this.capture=null,this.onKey=null,window.addEventListener("keydown",n=>{if(this.capture){n.preventDefault();const s=this.capture;this.capture=null,s(n.code);return}this.locked&&!["F11","F12"].includes(n.code)&&n.preventDefault(),n.repeat||this.press(n.code),this.down.add(n.code)}),window.addEventListener("keyup",n=>this.down.delete(n.code)),window.addEventListener("blur",()=>this.down.clear());const e=n=>{const s="Mouse"+n.button;if(this.capture){n.preventDefault();const r=this.capture;this.capture=null,r(s);return}this.locked&&(n.preventDefault(),this.press(s),this.down.add(s))};window.addEventListener("mousedown",e),window.addEventListener("mouseup",n=>this.down.delete("Mouse"+n.button)),t.addEventListener("contextmenu",n=>n.preventDefault()),window.addEventListener("wheel",n=>{this.locked&&Math.abs(n.deltaY)>5&&(this.wheel=1)}),window.addEventListener("mousemove",n=>{this.locked&&(Math.abs(n.movementX)>600||Math.abs(n.movementY)>600||(this.mouseDX+=n.movementX,this.mouseDY+=n.movementY))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||this.down.clear()})}press(t){this.pressed.add(t),this.onKey?.(t)}held(t){return this.down.has(this.binds[t])}hit(t){return this.pressed.has(this.binds[t])}resetToggles(){this.crouchOn=this.adsOn=!1,this.leanOn=0}requestLock(){try{const t=this.el.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>this.el.requestPointerLock())}catch{this.el.requestPointerLock()}}sample(){const t=this.modes;t.crouchToggle&&this.hit("crouch")&&(this.crouchOn=!this.crouchOn),t.adsToggle&&this.hit("ads")&&(this.adsOn=!this.adsOn),t.leanToggle&&(this.hit("leanL")&&(this.leanOn=this.leanOn===-1?0:-1),this.hit("leanR")&&(this.leanOn=this.leanOn===1?0:1));const e=(this.held("forward")?1:0)-(this.held("back")?1:0),n={fwd:e,right:(this.held("right")?1:0)-(this.held("left")?1:0),sprint:t.autoSprint?e>0:this.held("sprint"),crouch:t.crouchToggle?this.crouchOn:this.held("crouch"),crouchPressed:this.hit("crouch"),jumpPressed:this.hit("jump"),firePressed:this.hit("fire"),fireHeld:this.held("fire"),ads:t.adsToggle?this.adsOn:this.held("ads"),reloadPressed:this.hit("reload"),dashPressed:this.hit("dash"),weaponSlot:this.hit("weapon1")?0:this.hit("weapon2")?1:this.wheel?2:-1,lean:t.leanToggle?this.leanOn:(this.held("leanR")?1:0)-(this.held("leanL")?1:0),lookX:this.mouseDX,lookY:this.mouseDY};return this.pressed.clear(),this.wheel=0,this.mouseDX=this.mouseDY=0,n}}function D0(){try{const t=new URLSearchParams(location.search).get("lang");if(t==="en"||t==="tr")return t;const e=localStorage.getItem("gozcu.lang");if(e==="en"||e==="tr")return e}catch{}return(document.referrer||"").includes("/en/")?"en":(navigator.language||"tr").toLowerCase().startsWith("tr")?"tr":"en"}let Zt=D0();function Wc(i){Zt=i,document.documentElement.lang=i;try{localStorage.setItem("gozcu.lang",i)}catch{}}const yt=(i,t)=>Zt==="tr"?i:t,J=i=>document.getElementById(i),Xc={all:{wallrun:!0,dash:!0,slide:!0,slideHop:!0,lean:!0},tactical:{wallrun:!1,dash:!1,slide:!1,slideHop:!1,lean:!0},cod:{wallrun:!1,dash:!1,slide:!0,slideHop:!1,lean:!1},movement:{wallrun:!0,dash:!0,slide:!0,slideHop:!0,lean:!1}};function Yc(i){const t=ho.find(e=>e.id===i.sensGame)||ho[0];return t.yaw===0?.0022*i.sensNum:t.yaw*i.sensNum*Math.PI/180}function I0(){const i={sensGame:"raw",sensNum:1,dpi:800,adsMul:.6,mech:{...Xc.all},modes:{crouchToggle:!1,adsToggle:!1,leanToggle:!1,autoSprint:!1},learn:"normal",mode:"classic",w1:"rifle",w2:"shotgun",ch:{color:"#16150f",size:9,gap:6,thick:2,dot:!1,dynamic:!0,outline:!0},fov:103,volume:.7,live:!0,quality:"high",scale:1,fps:!1,map:"avlu",difficulty:"normal"};try{const t=JSON.parse(localStorage.getItem("gozcu.ayar")||"{}");return typeof t.sens=="number"&&t.sensNum===void 0&&(t.sensNum=t.sens),t.fov!==void 0&&t.fov<90&&t.mech===void 0&&(t.fov=103),delete t.sens,{...i,...t,mech:{...i.mech,...t.mech||{}},modes:{...i.modes,...t.modes||{}},ch:{...i.ch,...t.ch||{}}}}catch{return i}}function Qe(i){try{localStorage.setItem("gozcu.ayar",JSON.stringify(i))}catch{}}class U0{constructor(t,e){this.brain=t,this.settings=e,this.hitT=0,this.dmgT=0,this.msgT=0,this.liveT=0,this.onPlay=()=>{},this.onResume=()=>{},this.onSettings=()=>{},this.onReset=()=>{},this.onMenu=()=>{},this.fillSelects=()=>{},this.input=null,this.applyTexts(),J("btn-play").onclick=()=>this.onPlay(),J("btn-again").onclick=()=>this.onPlay(),J("btn-notebook").onclick=()=>this.openNotebook(),J("btn-notebook2").onclick=()=>this.openNotebook(),J("btn-settings").onclick=()=>this.show("settings",!0),J("btn-lang").onclick=()=>{Wc(Zt==="tr"?"en":"tr"),this.applyTexts(),J("set-sensgame").options[0].textContent=yt("Nöbetçi (kendi)","Nöbetçi (native)")},J("nb-close").onclick=()=>this.show("notebook",!1),J("set-close").onclick=()=>this.show("settings",!1),J("btn-menu").onclick=()=>this.onMenu(),J("pause").onclick=()=>this.onResume(),J("nb-reset").onclick=()=>{confirm(yt("Nöbetçi seni unutacak. Emin misin?","The Sentinel will forget you. Are you sure?"))&&(this.onReset(),this.renderNotebook())};const n=(T,g,v)=>{const P=J(T);P.value=String(this.settings[g]);const D=J(T+"-v");D.textContent=v(Number(P.value)),P.oninput=()=>{this.settings[g]=Number(P.value),D.textContent=v(Number(P.value)),Qe(this.settings),this.onSettings(this.settings)}};n("set-fov","fov",T=>`${T}°`),n("set-adsmul","adsMul",T=>`×${T.toFixed(2)}`);const s=J("set-sensgame");s.innerHTML=ho.map(T=>`<option value="${T.id}">${T.id==="raw"?yt("Nöbetçi (kendi)","Nöbetçi (native)"):T.name}</option>`).join(""),s.value=this.settings.sensGame;const r=J("set-sensnum"),a=J("set-dpi");r.value=String(this.settings.sensNum),a.value=String(this.settings.dpi);const o=()=>{const T=Yc(this.settings),g=2*Math.PI/T/Math.max(1,this.settings.dpi)*2.54;J("set-cm").textContent=`${g.toFixed(1)} cm/360°`,J("set-sens-info").textContent=`${(T*180/Math.PI).toFixed(4)}°/${yt("sayım","count")}`},l=()=>{this.settings.sensGame=s.value;const T=Number(r.value);T>0&&(this.settings.sensNum=T);const g=Number(a.value);g>=100&&(this.settings.dpi=g),o(),Qe(this.settings),this.onSettings(this.settings)};s.onchange=l,r.oninput=l,a.oninput=l,o();const c=["wallrun","dash","slide","slideHop","lean"],d=["crouchToggle","adsToggle","leanToggle","autoSprint"],h=()=>{for(const T of c)J("mech-"+T).checked=this.settings.mech[T];for(const T of d)J("mode-"+T).checked=this.settings.modes[T]};for(const T of c)J("mech-"+T).onchange=g=>{this.settings.mech[T]=g.target.checked,Qe(this.settings),this.onSettings(this.settings),this.renderControlsList()};for(const T of d)J("mode-"+T).onchange=g=>{this.settings.modes[T]=g.target.checked,Qe(this.settings),this.onSettings(this.settings)};document.querySelectorAll("[data-preset]").forEach(T=>{T.onclick=()=>{this.settings.mech={...Xc[T.dataset.preset]},h(),Qe(this.settings),this.onSettings(this.settings),this.renderControlsList()}}),h();const f=J("set-learn");f.value=this.settings.learn,f.onchange=()=>{this.settings.learn=f.value,Qe(this.settings),this.onSettings(this.settings)};const m=()=>{Qe(this.settings),this.applyCrosshair()},_=J("ch-color");_.value=this.settings.ch.color,_.onchange=()=>{this.settings.ch.color=_.value,m()};for(const T of["size","gap","thick"]){const g=J("ch-"+T);g.value=String(this.settings.ch[T]),J("ch-"+T+"-v").textContent=`${g.value}px`,g.oninput=()=>{this.settings.ch[T]=Number(g.value),J("ch-"+T+"-v").textContent=`${g.value}px`,m()}}for(const T of["dot","dynamic","outline"]){const g=J("ch-"+T);g.checked=this.settings.ch[T],g.onchange=()=>{this.settings.ch[T]=g.checked,m()}}this.applyCrosshair();const M=()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen?.({navigationUI:"hide"}).catch(()=>{})};for(const T of["btn-fs","btn-fs2"])J(T).onclick=g=>{g.stopPropagation(),M()};document.addEventListener("fullscreenchange",()=>this.applyTexts()),J("btn-set2").onclick=T=>{T.stopPropagation(),this.show("settings",!0)},J("btn-keys").onclick=()=>this.openKeys(),J("btn-keys2").onclick=T=>{T.stopPropagation(),this.openKeys()},J("keys-close").onclick=()=>{this.input&&(this.input.capture=null),this.show("keys",!1),this.renderControlsList()},n("set-vol","volume",T=>`${Math.round(T*100)}%`),n("set-scale","scale",T=>`${Math.round(T*100)}%`);const p=(T,g)=>{const v=J(T);v.checked=this.settings[g],v.onchange=()=>{this.settings[g]=v.checked,Qe(this.settings),this.onSettings(this.settings)}};p("set-live","live"),p("set-fps","fps");const u=J("set-quality");u.value=this.settings.quality,u.onchange=()=>{this.settings.quality=u.value,Qe(this.settings),this.onSettings(this.settings)};const b=(T,g)=>{const v=J(T),P=()=>v.querySelectorAll("button").forEach(D=>D.classList.toggle("on",D.dataset.v===this.settings[g]));v.querySelectorAll("button").forEach(D=>{D.onclick=()=>{this.settings[g]=D.dataset.v,Qe(this.settings),P(),this.applyTexts(),this.onSettings(this.settings)}}),P()};b("seg-map","map");const y=J("sel-mode"),x=J("sel-w1"),L=J("sel-w2"),w=()=>{const T=Hc();y.innerHTML=ro.map(D=>`<option value="${D.id}">${Zt==="tr"?D.tr:D.en}${D.endless&&T[D.id]?` · ${yt("rekor","best")} ${T[D.id]}`:""}</option>`).join("");const g=xr.map(D=>`<option value="${D}">${Zt==="tr"?Nn[D].tr:Nn[D].en}</option>`).join("");x.innerHTML=g,L.innerHTML=g,y.value=this.settings.mode,x.value=this.settings.w1,L.value=this.settings.w2;const v=ro.find(D=>D.id===this.settings.mode);J("mode-desc").textContent=Zt==="tr"?v.dtr:v.den;const P=this.settings.mode==="rotation";x.disabled=L.disabled=P};this.fillSelects=w;const A=()=>{this.settings.mode=y.value,this.settings.w1=x.value,this.settings.w2=L.value,this.settings.w2===this.settings.w1&&(this.settings.w2=xr.find(T=>T!==this.settings.w1)),Qe(this.settings),w()};y.onchange=x.onchange=L.onchange=A,w(),b("seg-diff","difficulty")}applyCrosshair(){const t=this.settings.ch,e=J("crosshair");e.style.setProperty("--len",`${t.size}px`),e.style.setProperty("--th",`${t.thick}px`),e.style.setProperty("--col",t.color),e.style.setProperty("--ol",t.outline?t.color==="#ffffff"?"0 0 0 1px rgba(22,21,15,0.8)":"0 0 0 1px rgba(243,240,232,0.8)":"none"),e.classList.toggle("dot",t.dot)}setInput(t){this.input=t,J("keys-reset").onclick=()=>{t.binds=Gc(),Ql(t.binds),this.renderKeys()},this.renderControlsList()}openKeys(){this.renderKeys(),this.show("keys",!0)}renderKeys(){const t=this.input;if(!t)return;const e={};for(const s of yr)e[t.binds[s.id]]=(e[t.binds[s.id]]||0)+1;const n=J("keys-list");n.innerHTML=yr.map(s=>`<div class="keyrow"><span>${Zt==="tr"?s.tr:s.en}</span><button class="keybtn ${e[t.binds[s.id]]>1?"dup":""}" data-act="${s.id}">${ua(t.binds[s.id],Zt)}</button></div>`).join(""),n.querySelectorAll(".keybtn").forEach(s=>{s.onclick=r=>{r.stopPropagation(),s.classList.add("wait"),s.textContent=yt("tuşa bas…","press a key…"),setTimeout(()=>{t.capture=a=>{a!=="Escape"&&(t.binds[s.dataset.act]=a,Ql(t.binds)),this.renderKeys(),this.renderControlsList()}},0)}})}renderControlsList(){const t=this.input;if(!t)return;const e=t.binds,n=a=>ua(e[a],Zt),s=this.settings.mech,r=[[`${n("forward")}${n("left")}${n("back")}${n("right")}`,"hareket","move"],[n("sprint"),"koş","sprint"],[n("crouch"),s.slide?"eğil / koşarken kay":"eğil",s.slide?"crouch / slide":"crouch"],[n("jump"),s.wallrun?"zıpla · duvardan sıçra":"zıpla",s.wallrun?"jump · wall-jump":"jump"],[`${n("fire")} / ${n("ads")}`,"ateş / nişan","fire / aim"],[`${n("weapon1")} / ${n("weapon2")}`,"tüfek / pompalı","rifle / shotgun"],[n("reload"),"doldur","reload"],[n("panel"),"Nöbetçi göstergesi","Sentinel panel"]];s.dash&&r.splice(4,0,[n("dash"),"atılma (dash)","dash"]),s.lean&&r.splice(4,0,[`${n("leanL")} / ${n("leanR")}`,"sola / sağa yat","lean left / right"]),J("controls-list").innerHTML=r.map(a=>`<div><kbd>${a[0]}</kbd> <span>${Zt==="tr"?a[1]:a[2]}</span></div>`).join("")}damageNumber(t,e,n,s,r){const a=t.clone().project(e);if(a.z>1)return;const o=document.createElement("div");o.className="dn"+(r?" kill":s?" head":""),o.textContent=String(n),o.style.left=`${(a.x+1)/2*100+(Math.random()-.5)*3}%`,o.style.top=`${(1-a.y)/2*100}%`,J("dmgnums").appendChild(o),setTimeout(()=>o.remove(),850)}applyTexts(){document.querySelectorAll("[data-tr]").forEach(s=>{s.textContent=Zt==="tr"?s.dataset.tr:s.dataset.en}),J("btn-lang").textContent=Zt==="tr"?"EN":"TR",this.fillSelects();const t=!!document.fullscreenElement;document.querySelectorAll(".fs-btn").forEach(s=>s.textContent=t?yt("Tam ekrandan çık","Exit fullscreen"):yt("Tam ekran","Fullscreen")),this.renderControlsList(),document.title=yt("Nöbetçi — Kheshig Studio","Nöbetçi (Sentinel) — Kheshig Studio");const e=la[this.settings.map];J("map-desc").textContent=Zt==="tr"?e.descTr:e.descEn;const n=this.brain.d.rounds;J("menu-memory").textContent=n>0?yt(`Nöbetçi seni ${n} rauntluk deneyimle hatırlıyor.`,`The Sentinel remembers ${n} rounds against you.`):yt("Nöbetçi seni henüz tanımıyor.","The Sentinel doesn't know you yet.")}show(t,e){J(t).classList.toggle("hidden",!e)}screen(t){this.show("menu",t==="menu"),this.show("hud",t==="hud"),this.show("end",t==="end"),this.show("card",!1),this.show("pause",!1),t==="menu"&&this.applyTexts()}pause(t){this.show("pause",t)}countdown(t){const e=J("center-msg");t>0?(e.textContent=String(t),e.className="center-msg big",this.msgT=1.1):(e.textContent=yt("BAŞLA","GO"),e.className="center-msg big",this.msgT=.6)}roundStart(t){this.show("card",!1);const e=J("center-sub");e.textContent=yt(`RAUNT ${t}`,`ROUND ${t}`),e.classList.remove("hidden"),setTimeout(()=>e.classList.add("hidden"),2600)}hitMarker(t,e){const n=J("hitmarker");n.className="hitmarker on"+(t?" kill":e?" head":""),this.hitT=t?.45:.16}damaged(t){const e=J("dmg");e.style.transform=`translate(-50%,-50%) rotate(${-t*180/Math.PI}deg)`,e.classList.add("on"),this.dmgT=.9,J("vignette").classList.add("on"),setTimeout(()=>J("vignette").classList.remove("on"),140)}roundEnd(t){const e=J("card"),n=t.playerWon===!0?yt("RAUNDU ALDIN","ROUND WON"):t.playerWon===!1?yt("NÖBETÇİ ALDI","THE SENTINEL TAKES IT"):yt("BERABERE","DRAW"),s=t.reason==="time"?yt("Süre doldu","Time's up"):"",r=Pi[t.tactic],a=ei[t.lane];let o="";t.insights.length?o=`<div class="card-ins-h">${yt("Nöbetçi şunu fark etti","The Sentinel noticed")}</div>`+t.insights.map(l=>`<div class="ins"><div class="ins-o">${Zt==="tr"?l.tr:l.en}</div><div class="ins-r">→ ${Zt==="tr"?l.rtr:l.ren}</div></div>`).join(""):o=`<div class="card-ins-h muted">${yt("Nöbetçi izlemeye devam ediyor…","The Sentinel keeps watching…")}</div>`,e.innerHTML=`
      <div class="card-title ${t.playerWon===!1?"red":""}">${n}</div>
      <div class="card-score"><span>${yt("Sen","You")} ${t.pScore}</span><span class="dash">—</span><span>${t.bScore} ${yt("Nöbetçi","Sentinel")}</span></div>
      ${s?`<div class="card-reason">${s}</div>`:""}
      ${t.death?`<div class="death">${yt("Seni","It hit you from")} <b>${t.death.dist.toFixed(0)} m</b>${yt("'den","")} ${t.death.head?yt("<b>kafandan</b> vurdu","<b>in the head</b>"):yt("vurdu","")}${t.death.predConf>.25?` · ${yt("hareketini tahmin ediyordu","it was predicting your move")}: <b>${t.death.predV<-.15?"←":t.death.predV>.15?"→":"■"} %${Math.round(t.death.predConf*100)}</b>`:""}${t.death.botHp>0?` · ${yt("Nöbetçi'nin canı","its health")}: ${Math.ceil(t.death.botHp)}`:""}</div>`:""}
      <div class="card-tac">${yt("Bu raunt denediği taktik","Tactic it tried")}: <b>${Zt==="tr"?r.tr:r.en}</b> · ${Zt==="tr"?a.tr:a.en}</div>
      ${o}`,setTimeout(()=>this.show("card",!0),650)}matchEnd(t,e,n,s,r){this.screen("end"),J("end-title").textContent=r&&r.endless?r.newRecord?yt("Yeni rekor!","New record!"):yt("Seri bitti","Run over"):t?yt("Nöbetçi'yi yendin","You beat the Sentinel"):yt("Nöbetçi kazandı","The Sentinel wins"),J("end-title").className="end-title"+(t?"":" red");const a=e.pShots?Math.round(e.pHits/e.pShots*100):0,o=e.bShots?Math.round(e.bHits/e.bShots*100):0,c=e.roundsBotHitRate.map(d=>Math.round(d*100)).map((d,h)=>`<div class="rb"><div class="rb-bar" style="height:${Math.max(2,d)}%"></div><div class="rb-l">${h+1}</div></div>`).join("");J("end-body").innerHTML=`
      ${r&&r.endless?`<div class="end-score">${r.score} ${yt("raunt","rounds")}</div>${r.newRecord?`<div class="record">${yt("YENİ REKOR","NEW RECORD")}</div>`:`<div class="record muted">${yt("rekor","best")}: ${r.best}</div>`}`:`<div class="end-score">${n} — ${s}</div>`}
      <div class="end-grid">
        <div><b>%${a}</b><span>${yt("senin isabetin","your accuracy")}</span></div>
        <div><b>${e.pHeads}</b><span>${yt("göze isabet","eye shots")}</span></div>
        <div><b>%${o}</b><span>${yt("Nöbetçi'nin isabeti","Sentinel accuracy")}</span></div>
      </div>
      <div class="end-sub">${yt("Nöbetçi'nin raunt raunt isabeti","Sentinel accuracy per round")}</div>
      <div class="rbars">${c}</div>`}modeBadge(t){const e=J("mode-badge");e.textContent=t,e.classList.toggle("hidden",!t)}frame(t,e,n,s,r,a,o){J("hp-fill").style.width=`${Math.max(0,e.hp)}%`,J("hp-num").textContent=String(Math.max(0,Math.ceil(e.hp))),J("ammo").textContent=e.gun.reloading?yt("DOLDURUYOR","RELOADING"):`${e.gun.ammo} / ${e.gun.mag}`,J("slot-0").classList.toggle("on",e.cur===0),J("slot-1").classList.toggle("on",e.cur===1);const l=_=>e.guns[_]?Zt==="tr"?e.guns[_].def.tr.toLocaleUpperCase("tr"):e.guns[_].def.en.toUpperCase():"";J("slot-0-n").textContent=l(0),J("slot-1-n").textContent=l(1),J("slot-1").classList.toggle("hidden",e.guns.length<2),this.show("scope",!!e.gun.def.scope&&e.ads>.85&&e.alive);const c=1-e.dashCd/2.2;J("dash-fill").style.width=`${Math.round(Math.max(0,Math.min(1,c))*100)}%`,J("dash-fill").parentElement.classList.toggle("ready",c>=1),J("ammo").classList.toggle("low",!e.gun.reloading&&e.gun.ammo<=3),J("score-p").textContent=String(r),J("score-b").textContent=String(a);const d=Math.max(0,jn.roundTime-s);J("timer").textContent=`${Math.floor(d/60)}:${String(Math.floor(d%60)).padStart(2,"0")}`;const h=this.settings.ch,f=h.gap+(h.dynamic?e.spread()*6:0),m=J("crosshair");if(m.style.setProperty("--gap",`${f}px`),m.style.opacity=String(Math.max(0,1-e.ads*1.6)*(e.sprinting?.25:1)),this.hitT-=t,this.hitT<=0&&(J("hitmarker").className="hitmarker"),this.dmgT-=t,this.dmgT<=0&&J("dmg").classList.remove("on"),this.msgT-=t,this.msgT<=0&&(J("center-msg").className="center-msg"),J("lowhp").style.opacity=String(e.alive?Math.max(0,(45-e.hp)/45)*.8:.9),this.show("live",o),this.liveT-=t,o&&this.liveT<=0){this.liveT=.12;const _=this.brain.predictNext(),M=this.brain.knowledge(),p=this.brain.skill(),u=ni.map(y=>`<div class="lp-sym"><div class="lp-g">${us[y]}</div><div class="lp-b"><i style="height:${Math.round(_.p[y]*100)}%"></i></div></div>`).join(""),b=Pi[n.tactic];J("live").innerHTML=`
        <div class="lv-h"><span class="eye-dot ${n.sees?"on":""}"></span>${yt("NÖBETÇİ","SENTINEL")}</div>
        <div class="lv-row"><span>${yt("Taktik","Tactic")}</span><b>${Zt==="tr"?b.tr:b.en} · ${Zt==="tr"?ei[n.lane].tr:ei[n.lane].en}</b></div>
        <div class="lv-row"><span>${yt("Şu an","Now")}</span><b>${n.intentLabel(Zt)}</b></div>
        <div class="lv-row"><span>${yt("Sonraki hareketin","Your next move")}</span><b>${yt("güven","conf.")} %${Math.round(_.conf*100)}</b></div>
        <div class="lp">${u}</div>
        <div class="lv-row"><span>${yt("Öğrendiği","Learned")}</span><div class="meter"><i style="width:${Math.round(M*100)}%"></i></div></div>
        <div class="lv-row"><span>${yt("Ustalık","Skill")}</span><div class="meter red"><i style="width:${Math.round(p*100)}%"></i></div></div>
        <div class="lv-k">${this.input?ua(this.input.binds.panel,Zt):"G"}: ${yt("göstergeyi gizle","hide panel")}</div>`}}openNotebook(){this.renderNotebook(),this.show("notebook",!0)}renderNotebook(){const t=this.brain,e=t.insights();J("nb-list").innerHTML=e.length?e.map(a=>`<li><div>${Zt==="tr"?a.tr:a.en}</div><div class="ins-r">→ ${Zt==="tr"?a.rtr:a.ren}</div></li>`).join(""):`<li class="muted">${yt("Henüz bir şey yazmadı. Biraz oyna; seni izliyor.","Nothing written yet. Play a little — it's watching.")}</li>`;const n=t.lanePred(),s=t.laneTotal();J("nb-lanes").innerHTML=["W","C","E"].map(a=>`<div class="nb-bar"><span>${Zt==="tr"?ei[a].tr:ei[a].en}</span><div class="meter"><i style="width:${s?Math.round(n[a]*100):0}%"></i></div></div>`).join("");const r=ni.map(a=>{const o=t.symShare(a);return`<div class="nb-sym"><b>${us[a]}</b><div class="meter"><i style="width:${Math.round(o.share*100)}%"></i></div></div>`}).join("");J("nb-syms").innerHTML=r,J("nb-tac").innerHTML=dr.map(a=>{const o=t.tacticMean(a);return`<div class="nb-bar"><span>${Zt==="tr"?Pi[a].tr:Pi[a].en}</span><div class="meter red"><i style="width:${Math.round(o*100)}%"></i></div></div>`}).join(""),J("nb-meta").textContent=yt(`${la[t.mapId].tr} haritası · ${t.d.rounds} raunt · ${t.d.matches} maç · Sen ${t.d.pWins} – ${t.d.bWins} Nöbetçi · ustalık %${Math.round(t.skill()*100)}`,`${la[t.mapId].en} map · ${t.d.rounds} rounds · ${t.d.matches} matches · You ${t.d.pWins} – ${t.d.bWins} Sentinel · skill ${Math.round(t.skill()*100)}%`),this.drawMap(J("nb-map"))}drawMap(t){const e=t.getContext("2d"),n=t.width,s=Vi.half,r=n/(2*s);e.fillStyle="#f3f0e8",e.fillRect(0,0,n,n);const a=this.brain.m.heat,o=_e*_e,l=new Float32Array(o);let c=0;for(let h=0;h<o;h++)l[h]=a[h]+a[o+h]+a[2*o+h],c=Math.max(c,l[h]);for(let h=0;h<o;h++){if(l[h]<=0||c<=0)continue;const f=Math.pow(l[h]/c,.6)*.75;e.fillStyle=`rgba(138,15,11,${f.toFixed(3)})`;const m=h%_e*tn*r,_=Math.floor(h/_e)*tn*r;e.fillRect(m,_,tn*r+.5,tn*r+.5)}for(const h of Nc)h.style!=="wall"&&(e.fillStyle=h.style==="low"?"rgba(22,21,15,0.35)":"#16150f",e.fillRect((h.min.x+s)*r,(h.min.z+s)*r,(h.max.x-h.min.x)*r,(h.max.z-h.min.z)*r));const d=this.brain.m.contacts;for(let h=0;h<d.length;h++){if(d[h]<.6)continue;const f=(h%_e+.5)*tn*r,m=(Math.floor(h/_e)+.5)*tn*r;e.strokeStyle="#16150f",e.lineWidth=1.5,e.beginPath(),e.arc(f,m,3+Math.min(9,d[h]*2),0,Math.PI*2),e.stroke()}e.strokeStyle="#16150f",e.lineWidth=2,e.strokeRect(1,1,n-2,n-2),e.fillStyle="#16150f",e.font="11px ui-monospace, monospace",e.fillText(yt("Nöbetçi","Sentinel"),n/2-18,14),e.fillText(yt("Sen","You"),n/2-10,n-6)}}Wc(Zt);const Co=document.getElementById("c"),ms=new URLSearchParams(location.search),$c=ms.has("debug"),hi=new v0;ms.has("fresh")&&hi.reset();const ln=new E0(Co),Ss=new b0,$e=new L0(Co),de=I0(),Me=new U0(hi,de);Me.setInput($e);let Er=de.live;const Et=new R0(hi,ln,Ss,{hitMarker:(i,t)=>Me.hitMarker(i,t),damageNumber:(i,t,e,n)=>Me.damageNumber(i,ln.camera,t,e,n),damaged:i=>Me.damaged(i),roundStart:i=>Me.roundStart(i),countdown:i=>Me.countdown(i),roundEnd:i=>Me.roundEnd(i),matchEnd:(i,t,e)=>{Me.matchEnd(i,t,Et.pScore,Et.bScore,e),Me.fillSelects(),document.pointerLockElement&&document.exitPointerLock()}}),N0={easy:-.22,normal:0,hard:.2};function qc(){Et.player.sens=Yc(de),Et.player.adsSensMul=de.adsMul,Et.player.mech={...de.mech},$e.modes={...de.modes},hi.learnSpeed=de.learn,ln.baseFov=de.fov,Ss.setVolume(de.volume),Er=de.live,hi.diffOffset=N0[de.difficulty]??0,ln.setQuality(de.quality,de.scale),document.getElementById("fps").classList.toggle("hidden",!de.fps),Et.phase==="menu"&&Et.map!==de.map&&(Et.setMap(de.map),Jc())}Me.onSettings=qc;function Kc(){ln.resize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",Kc);Kc();let Gi=$c&&ms.get("auto")?ms.get("auto"):"";Me.onPlay=()=>{Ss.unlock(),Me.screen("hud"),$e.resetToggles(),Et.startMatch(de.map,de.mode,[de.w1,de.w2]),Gi||$e.requestLock()};Me.onResume=()=>{Ss.unlock(),$e.requestLock()};Me.onReset=()=>hi.reset();Me.onMenu=()=>{Et.phase="menu",Me.screen("menu")};$e.onKey=i=>{i===$e.binds.panel&&(Et.phase==="live"||Et.phase==="countdown"||Et.phase==="roundEnd")&&(Er=!Er)};const hs=()=>Et.phase==="countdown"||Et.phase==="live"||Et.phase==="roundEnd";Co.addEventListener("click",()=>{hs()&&!$e.locked&&!Gi&&$e.requestLock()});let tc=0,da=0,fa=0,pa=0,$n=[],ma=0,uo=ms.get("lane")||"W";function jc(i){const t=P0(),e=Et.player,n=Et.bot;if(Et.phase!=="live"||!e.alive)return t;const s=e.eye,r=n.headCenter(),a=n.alive&&ti(s,r);if(da=a?da+i:0,a&&da>.32){const o=new C().subVectors(r,s);o.y-=.35,fa+=((Math.random()-.5)*.09-fa)*Math.min(1,i*3);const l=Math.atan2(-o.x,-o.z)+fa,c=Math.atan2(o.y,Math.hypot(o.x,o.z));let d=l-e.yaw;for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;e.yaw+=d*Math.min(1,i*7),e.pitch+=(c-e.pitch)*Math.min(1,i*7),tc+=i;const h=Gi;h==="LR"?t.right=Math.floor(tc/.45)%2===0?-1:1:h==="L"?t.right=-1:h==="R"&&(t.right=1),pa-=i,Math.abs(d)<.05&&(t.fireHeld=!0,pa<=0&&(t.firePressed=!0,pa=.28)),t.ads=!0}else{if(ma-=i,ma<=0){ma=1;const o=uo==="W"?-16:uo==="E"?16:0,l=e.pos.z>10.5?new C(o,0,10):e.pos.z>2?new C(o,0,-2):n.pos.clone();$n=zc(e.pos,l)}for(;$n.length&&Math.hypot($n[0].x-e.pos.x,$n[0].z-e.pos.z)<.6;)$n.shift();if($n.length){const o=$n[0];let c=Math.atan2(-(o.x-e.pos.x),-(o.z-e.pos.z))-e.yaw;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;e.yaw+=c*Math.min(1,i*8),e.pitch*=.9,t.fwd=1}}return t}let nr=0,ga=0,ec=performance.now(),ir=0,sr=0,fo=0;function Zc(i){requestAnimationFrame(Zc);let t=(i-ec)/1e3;ec=i,t>.1&&(t=.1),ir+=t,sr++,ir>.5&&(fo=sr/ir,ir=0,sr=0);const e=hs()&&!$e.locked&&!Gi;ga=e?ga+t:0,Me.pause(ga>.3);const n=$e.sample();if(e)nr=0;else{nr+=t;let r=!0;for(;nr>=ai;){const a=Gi?jc(ai):r?n:{...n,lookX:0,lookY:0,firePressed:!1,jumpPressed:!1,crouchPressed:!1,reloadPressed:!1};Et.step(ai,a),nr-=ai,r=!1}}const s=Et.player;if(hs()&&!s.alive&&Et.bot.alive){const r=Et.bot.headCenter(),a=s.eye,o=Math.atan2(-(r.x-a.x),-(r.z-a.z)),l=Math.atan2(r.y-a.y,Math.hypot(r.x-a.x,r.z-a.z));let c=o-s.yaw;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;s.yaw+=c*Math.min(1,t*4),s.pitch+=(l-s.pitch)*Math.min(1,t*4)}if(de.fps&&sr===0&&(document.getElementById("fps").textContent=`${Math.round(fo)} FPS`),ln.syncCamera(s,t,i/1e3),ln.updateGun(s,t),ln.updateBot(Et.bot,t*Et.timeScale),Ss.listener(s.eye,s.yaw),hs()){Me.frame(t,s,Et.bot,Et.roundT,Et.pScore,Et.bScore,Er);const r=Et.mode;Me.modeBadge(r==="streak"?Zt==="tr"?`SERİ ${Et.pScore}`:`STREAK ${Et.pScore}`:r==="lives"?`${"♥".repeat(Math.max(0,Et.lives))}${"♡".repeat(Math.max(0,3-Et.lives))} · ${Et.pScore}`:r==="oneshot"?Zt==="tr"?"TEK MERMİ":"ONE SHOT":r==="rotation"?Zt==="tr"?Et.player.gun.def.tr.toLocaleUpperCase("tr"):Et.player.gun.def.en.toUpperCase():"")}ln.render(t*(hs()?Et.timeScale:1))}requestAnimationFrame(Zc);function Jc(){Et.player.reset(),Et.bot.reset(0),Et.player.pos.set(0,0,21),Et.player.pitch=-.05}Et.setMap(de.map);Jc();qc();$c&&(window.__gozcu={game:Et,brain:hi,view:ln,ui:Me,input:$e,get fps(){return fo},setAuto(i,t){Gi=i,t&&(uo=t)},ff(i){const t=Math.round(i/ai);for(let e=0;e<t&&!(Et.phase==="matchEnd"||Et.phase==="menu");e++)Et.step(ai,jc(ai));return{phase:Et.phase,round:Et.round,p:Et.pScore,b:Et.bScore}}});
