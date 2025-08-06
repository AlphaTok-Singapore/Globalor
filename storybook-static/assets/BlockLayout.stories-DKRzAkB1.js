import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import{a as l}from"./block-layout-D-p3nEi9.js";import{T as a}from"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const re={title:"Layout/BlockLayout",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{padding:{control:{type:"select"},options:["sm","default"],description:"内边距大小"},shadow:{control:{type:"select"},options:["none","sm"],description:"阴影强度"},rounded:{control:{type:"select"},options:["md","lg"],description:"圆角大小"},asChild:{control:{type:"boolean"},description:"是否作为子元素渲染"}}},r=({padding:R="default",height:P="h-24"})=>{const $=R==="sm"?"16px":"24px";return e.jsx("div",{className:`${P} w-full bg-purple-100 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center`,children:e.jsxs(a,{variant:"body",className:"text-purple-600 text-center",children:["内容区域",e.jsx("br",{}),"内边距: ",$,e.jsx("br",{}),"圆角、边框、阴影可配置"]})})},o={args:{children:e.jsx(r,{})}},s={args:{padding:"sm",children:e.jsx(r,{padding:"sm",height:"h-20"})}},d={args:{padding:"default",children:e.jsx(r,{padding:"default",height:"h-24"})}},t={args:{shadow:"none",children:e.jsx(r,{height:"h-20"})}},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"body",className:"mb-2 font-medium",children:"rounded-md"}),e.jsx(l,{rounded:"md",children:e.jsx(r,{height:"h-16"})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"body",className:"mb-2 font-medium",children:"rounded-lg (默认)"}),e.jsx(l,{rounded:"lg",children:e.jsx(r,{height:"h-16"})})]})]})},i={args:{padding:"default",shadow:"sm",rounded:"lg",children:e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Total Revenue"}),e.jsx("div",{className:"font-medium tracking-tight text-3xl",children:"$15,231.89"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"+20.1% from last month"})]})})},parameters:{docs:{description:{story:"参考样式的容器，使用 rounded-lg border border-block-layout-border bg-block-layout text-block-layout-foreground shadow-sm 样式组合"}}}},c={args:{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"h3",children:"主容器 (24px 内边距)"}),e.jsx(l,{padding:"sm",shadow:"none",rounded:"lg",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{variant:"body",children:"嵌套容器 (16px 内边距)"}),e.jsx(r,{padding:"sm",height:"h-16"})]})})]})}};var m,p,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <ContentAreaMarker />
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,g,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    padding: 'sm',
    children: <ContentAreaMarker padding="sm" height="h-20" />
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,v,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    padding: 'default',
    children: <ContentAreaMarker padding="default" height="h-24" />
  }
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,j,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    shadow: 'none',
    children: <ContentAreaMarker height="h-20" />
  }
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var N,T,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div>\r
        <Typography variant="body" className="mb-2 font-medium">rounded-md</Typography>\r
        <BlockLayout rounded="md">\r
          <ContentAreaMarker height="h-16" />\r
        </BlockLayout>\r
      </div>\r
      <div>\r
        <Typography variant="body" className="mb-2 font-medium">rounded-lg (默认)</Typography>\r
        <BlockLayout rounded="lg">\r
          <ContentAreaMarker height="h-16" />\r
        </BlockLayout>\r
      </div>\r
    </div>
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var w,C,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    padding: 'default',
    shadow: 'sm',
    rounded: 'lg',
    children: <div>\r
        <div className="flex flex-col space-y-1.5">\r
          <div className="text-sm text-muted-foreground">Total Revenue</div>\r
          <div className="font-medium tracking-tight text-3xl">$15,231.89</div>\r
          <div className="text-sm text-muted-foreground">+20.1% from last month</div>\r
        </div>\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '参考样式的容器，使用 rounded-lg border border-block-layout-border bg-block-layout text-block-layout-foreground shadow-sm 样式组合'
      }
    }
  }
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,B,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <div className="space-y-4">\r
        <Typography variant="h3">主容器 (24px 内边距)</Typography>\r
        <BlockLayout padding="sm" shadow="none" rounded="lg">\r
          <div className="space-y-2">\r
            <Typography variant="body">嵌套容器 (16px 内边距)</Typography>\r
            <ContentAreaMarker padding="sm" height="h-16" />\r
          </div>\r
        </BlockLayout>\r
      </div>
  }
}`,...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const ae=["Default","SmallPadding","LargePadding","NoShadow","RoundedVariants","ReferenceStyle","NestedContainers"];export{o as Default,d as LargePadding,c as NestedContainers,t as NoShadow,i as ReferenceStyle,n as RoundedVariants,s as SmallPadding,ae as __namedExportsOrder,re as default};
