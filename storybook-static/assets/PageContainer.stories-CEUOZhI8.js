import{j as r}from"./jsx-runtime-CDt2p4po.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import{P as b}from"./block-layout-D-p3nEi9.js";import{T as C}from"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const q={title:"Layout/PageContainer",component:b,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["full","centered"],description:"页面容器布局变体"},asChild:{control:{type:"boolean"},description:"是否作为子元素渲染"}}},o=({variant:s="full",height:h="h-96"})=>{const g=s==="full"?"最大宽度: 1440px, 左右内边距: 32px":"宽度: 768px, 左右内边距: 24px",f=s==="full"?"max-w-full":"max-w-[768px] mx-auto";return r.jsx("div",{className:`${h} w-full bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center ${f}`,children:r.jsxs(C,{variant:"body",className:"text-blue-600 text-center",children:["页面容器内容区域",r.jsx("br",{}),g,r.jsx("br",{}),"上下内边距: 40px",r.jsx("br",{}),"默认包含背景色(bg-sidebar)和外边距(p-2)",r.jsx("br",{}),"圆角、边框、阴影已配置"]})})},e={args:{children:r.jsx(o,{})}},t={args:{variant:"centered",children:r.jsx(o,{variant:"centered",height:"h-80"})},parameters:{docs:{description:{story:"居中布局变体，固定宽度768px，适合表单或文档类内容。所有PageContainer现在都自动包含背景色和边距。"}}}},a={args:{variant:"full",children:r.jsx(o,{variant:"full",height:"h-96"})},parameters:{docs:{description:{story:"全宽布局，现在所有PageContainer都自动包含背景色和边距。适合需要更多展示空间的页面内容。"}}}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <ContentAreaMarker />
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    children: <ContentAreaMarker variant="centered" height="h-80" />
  },
  parameters: {
    docs: {
      description: {
        story: '居中布局变体，固定宽度768px，适合表单或文档类内容。所有PageContainer现在都自动包含背景色和边距。'
      }
    }
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    children: <ContentAreaMarker variant="full" height="h-96" />
  },
  parameters: {
    docs: {
      description: {
        story: '全宽布局，现在所有PageContainer都自动包含背景色和边距。适合需要更多展示空间的页面内容。'
      }
    }
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const z=["Default","Centered","FullWidth"];export{t as Centered,e as Default,a as FullWidth,z as __namedExportsOrder,q as default};
