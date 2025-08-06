import{j as u}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{c as P}from"./utils-z-I-gj-J.js";import{c as I}from"./createLucideIcon-Do1tV511.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=I("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=I("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=I("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=I("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);let X={data:""},Y=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||X,Z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,J=/\/\*[^]*?\*\/|  +/g,_=/\n+/g,v=(t,e)=>{let r="",i="",o="";for(let a in t){let n=t[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":i+=a[1]=="f"?v(n,a):a+"{"+v(n,a[1]=="k"?"":e)+"}":typeof n=="object"?i+=v(n,e?e.replace(/([^,])+/g,s=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=v.p?v.p(a,n):a+":"+n+";")}return r+(e&&o?e+"{"+o+"}":o)+i},h={},q=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+q(t[r]);return e}return t},K=(t,e,r,i,o)=>{let a=q(t),n=h[a]||(h[a]=(l=>{let d=0,m=11;for(;d<l.length;)m=101*m+l.charCodeAt(d++)>>>0;return"go"+m})(a));if(!h[n]){let l=a!==t?t:(d=>{let m,g,p=[{}];for(;m=Z.exec(d.replace(J,""));)m[4]?p.shift():m[3]?(g=m[3].replace(_," ").trim(),p.unshift(p[0][g]=p[0][g]||{})):p[0][m[1]]=m[2].replace(_," ").trim();return p[0]})(t);h[n]=v(o?{["@keyframes "+n]:l}:l,r?"":"."+n)}let s=r&&h.g?h.g:null;return r&&(h.g=h[n]),((l,d,m,g)=>{g?d.data=d.data.replace(g,l):d.data.indexOf(l)===-1&&(d.data=m?l+d.data:d.data+l)})(h[n],e,i,s),n},W=(t,e,r)=>t.reduce((i,o,a)=>{let n=e[a];if(n&&n.call){let s=n(r),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;n=l?"."+l:s&&typeof s=="object"?s.props?"":v(s,""):s===!1?"":s}return i+o+(n??"")},"");function T(t){let e=this||{},r=t.call?t(e.p):t;return K(r.unshift?r.raw?W(r,[].slice.call(arguments,1),e.p):r.reduce((i,o)=>Object.assign(i,o&&o.call?o(e.p):o),{}):r,Y(e.target),e.g,e.o,e.k)}let F,S,M;T.bind({g:1});let x=T.bind({k:1});function G(t,e,r,i){v.p=e,F=t,S=r,M=i}function k(t,e){let r=this||{};return function(){let i=arguments;function o(a,n){let s=Object.assign({},a),l=s.className||o.className;r.p=Object.assign({theme:S&&S()},s),r.o=/ *go\d+/.test(l),s.className=T.apply(r,i)+(l?" "+l:"");let d=t;return t[0]&&(d=s.as||t,delete s.as),M&&d[0]&&M(s),F(d,s)}return e?e(o):o}}var Q=t=>typeof t=="function",O=(t,e)=>Q(t)?t(e):t,ee=(()=>{let t=0;return()=>(++t).toString()})(),L=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),te=20,H=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,te)};case 1:return{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:r}=e;return H(t,{type:t.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},D=[],j={toasts:[],pausedAt:void 0},N=t=>{j=H(j,t),D.forEach(e=>{e(j)})},re={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ae=(t={})=>{let[e,r]=c.useState(j),i=c.useRef(j);c.useEffect(()=>(i.current!==j&&r(j),D.push(r),()=>{let a=D.indexOf(r);a>-1&&D.splice(a,1)}),[]);let o=e.toasts.map(a=>{var n,s,l;return{...t,...t[a.type],...a,removeDelay:a.removeDelay||((n=t[a.type])==null?void 0:n.removeDelay)||(t==null?void 0:t.removeDelay),duration:a.duration||((s=t[a.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||re[a.type],style:{...t.style,...(l=t[a.type])==null?void 0:l.style,...a.style}}});return{...e,toasts:o}},se=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||ee()}),E=t=>(e,r)=>{let i=se(e,t,r);return N({type:2,toast:i}),i.id},f=(t,e)=>E("blank")(t,e);f.error=E("error");f.success=E("success");f.loading=E("loading");f.custom=E("custom");f.dismiss=t=>{N({type:3,toastId:t})};f.remove=t=>N({type:4,toastId:t});f.promise=(t,e,r)=>{let i=f.loading(e.loading,{...r,...r==null?void 0:r.loading});return typeof t=="function"&&(t=t()),t.then(o=>{let a=e.success?O(e.success,o):void 0;return a?f.success(a,{id:i,...r,...r==null?void 0:r.success}):f.dismiss(i),o}).catch(o=>{let a=e.error?O(e.error,o):void 0;a?f.error(a,{id:i,...r,...r==null?void 0:r.error}):f.dismiss(i)}),t};var ie=(t,e)=>{N({type:1,toast:{id:t,height:e}})},ne=()=>{N({type:5,time:Date.now()})},C=new Map,oe=1e3,le=(t,e=oe)=>{if(C.has(t))return;let r=setTimeout(()=>{C.delete(t),N({type:4,toastId:t})},e);C.set(t,r)},de=t=>{let{toasts:e,pausedAt:r}=ae(t);c.useEffect(()=>{if(r)return;let a=Date.now(),n=e.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(l<0){s.visible&&f.dismiss(s.id);return}return setTimeout(()=>f.dismiss(s.id),l)});return()=>{n.forEach(s=>s&&clearTimeout(s))}},[e,r]);let i=c.useCallback(()=>{r&&N({type:6,time:Date.now()})},[r]),o=c.useCallback((a,n)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:d}=n||{},m=e.filter(y=>(y.position||d)===(a.position||d)&&y.height),g=m.findIndex(y=>y.id===a.id),p=m.filter((y,A)=>A<g&&y.visible).length;return m.filter(y=>y.visible).slice(...s?[p+1]:[0,p]).reduce((y,A)=>y+(A.height||0)+l,0)},[e]);return c.useEffect(()=>{e.forEach(a=>{if(a.dismissed)le(a.id,a.removeDelay);else{let n=C.get(a.id);n&&(clearTimeout(n),C.delete(a.id))}})},[e]),{toasts:e,handlers:{updateHeight:ie,startPause:ne,endPause:i,calculateOffset:o}}},ce=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ue=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,me=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,fe=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ce} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ue} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${me} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ge=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,ye=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,he=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,xe=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ye} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,be=k("div")`
  position: absolute;
`,ve=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,we=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ke=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${we} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,je=({toast:t})=>{let{icon:e,type:r,iconTheme:i}=t;return e!==void 0?typeof e=="string"?c.createElement(ke,null,e):e:r==="blank"?null:c.createElement(ve,null,c.createElement(ge,{...i}),r!=="loading"&&c.createElement(be,null,r==="error"?c.createElement(fe,{...i}):c.createElement(xe,{...i})))},Ne=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ce=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ee="0%{opacity:0;} 100%{opacity:1;}",$e="0%{opacity:1;} 100%{opacity:0;}",De=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Oe=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ie=(t,e)=>{let r=t.includes("top")?1:-1,[i,o]=L()?[Ee,$e]:[Ne(r),Ce(r)];return{animation:e?`${x(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Te=c.memo(({toast:t,position:e,style:r,children:i})=>{let o=t.height?Ie(t.position||e||"top-center",t.visible):{opacity:0},a=c.createElement(je,{toast:t}),n=c.createElement(Oe,{...t.ariaProps},O(t.message,t));return c.createElement(De,{className:t.className,style:{...o,...r,...t.style}},typeof i=="function"?i({icon:a,message:n}):c.createElement(c.Fragment,null,a,n))});G(c.createElement);var ze=({id:t,className:e,style:r,onHeightUpdate:i,children:o})=>{let a=c.useCallback(n=>{if(n){let s=()=>{let l=n.getBoundingClientRect().height;i(t,l)};s(),new MutationObserver(s).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return c.createElement("div",{ref:a,className:e,style:r},o)},Ae=(t,e)=>{let r=t.includes("top"),i=r?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:L()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...i,...o}},Se=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Me=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:i,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:s,handlers:l}=de(r);return c.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...a},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(d=>{let m=d.position||e,g=l.calculateOffset(d,{reverseOrder:t,gutter:i,defaultPosition:e}),p=Ae(m,g);return c.createElement(ze,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Se:"",style:p},d.type==="custom"?O(d.message,d):o?o(d):c.createElement(Te,{toast:d,position:m}))}))},b=f;const z=({toast:t})=>{const e=()=>{switch(t.type){case"success":return u.jsx(B,{className:"h-4 w-4 text-green-600"});case"error":return u.jsx(U,{className:"h-4 w-4 text-red-600"});default:return u.jsx(V,{className:"h-4 w-4 text-blue-600"})}};return u.jsxs("div",{className:P("flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg","min-w-[300px] max-w-md mx-auto",t.visible?"animate-in slide-in-from-top-2 fade-in duration-200":"animate-out slide-out-to-top-2 fade-out duration-200"),children:[e(),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-sm font-medium text-foreground",children:String(t.message)}),t.description&&u.jsx("div",{className:"text-sm text-muted-foreground mt-1",children:String(t.description)})]}),t.action&&u.jsx("button",{onClick:t.action.onClick,className:"text-sm font-medium text-primary hover:text-primary/80 transition-colors",children:t.action.label}),u.jsx("button",{onClick:()=>b.dismiss(t.id),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]})},Pe=({className:t,...e})=>u.jsx(Me,{position:"top-center",containerClassName:P("toaster",t),toastOptions:{duration:4e3,removeDelay:200,style:{background:"transparent",border:"none",padding:0,boxShadow:"none"}},...e,children:r=>u.jsx(z,{toast:r})}),w=(t,e)=>b.custom(r=>u.jsx(z,{toast:{...r,message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});w.success=(t,e)=>b.custom(r=>u.jsx(z,{toast:{...r,type:"success",message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});w.error=(t,e)=>b.custom(r=>u.jsx(z,{toast:{...r,type:"error",message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});w.warning=(t,e)=>b.custom(r=>u.jsxs("div",{className:P("flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg","min-w-[300px] max-w-md mx-auto",r.visible?"animate-in slide-in-from-top-2 fade-in duration-200":"animate-out slide-out-to-top-2 fade-out duration-200"),children:[u.jsx(R,{className:"h-4 w-4 text-yellow-600"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-sm font-medium text-foreground",children:t}),(e==null?void 0:e.description)&&u.jsx("div",{className:"text-sm text-muted-foreground mt-1",children:e.description})]}),(e==null?void 0:e.action)&&u.jsx("button",{onClick:e.action.onClick,className:"text-sm font-medium text-primary hover:text-primary/80 transition-colors",children:e.action.label}),u.jsx("button",{onClick:()=>b.dismiss(r.id),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});w.info=(t,e)=>w(t,e);w.loading=(t,e)=>b.loading(t,{id:e==null?void 0:e.id,duration:e==null?void 0:e.duration});w.promise=(t,e)=>b.promise(t,{loading:e.loading,success:e.success,error:e.error});w.dismiss=t=>b.dismiss(t);Pe.__docgenInfo={description:"",methods:[],displayName:"Toaster",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["ToasterProps"]};export{B as C,V as I,Pe as T,R as a,w as c};
