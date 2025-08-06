import{j as a}from"./jsx-runtime-CDt2p4po.js";import{f as e}from"./index-BxLnRenJ.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import{T as r}from"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const C={title:"Data Display/Tag",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","success","warning","destructive"]},removable:{control:{type:"boolean"}},onRemove:{action:"remove"}},args:{onRemove:e()}},s={args:{children:"默认标签",variant:"default"}},t={args:{children:"可删除标签",variant:"primary",removable:!0,onRemove:e()}},i={args:{children:"Tag"},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-sm font-medium",children:"所有颜色变体"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(r,{variant:"default",children:"默认"}),a.jsx(r,{variant:"primary",children:"主题"}),a.jsx(r,{variant:"success",children:"成功"}),a.jsx(r,{variant:"warning",children:"警告"}),a.jsx(r,{variant:"destructive",children:"错误"})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-sm font-medium",children:"可删除标签"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(r,{variant:"primary",onRemove:e(),children:"JavaScript"}),a.jsx(r,{variant:"success",onRemove:e(),children:"已完成"}),a.jsx(r,{variant:"warning",onRemove:e(),children:"待审核"}),a.jsx(r,{variant:"destructive",onRemove:e(),children:"已过期"})]})]})]})},n={args:{children:"这是一个很长的标签文本内容",variant:"primary"}};var o,c,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: '默认标签',
    variant: 'default'
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: '可删除标签',
    variant: 'primary',
    removable: true,
    onRemove: fn()
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var v,g,u;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  },
  render: () => <div className="space-y-4">\r
      <div className="space-y-2">\r
        <h3 className="text-sm font-medium">所有颜色变体</h3>\r
        <div className="flex gap-2">\r
          <Tag variant="default">默认</Tag>\r
          <Tag variant="primary">主题</Tag>\r
          <Tag variant="success">成功</Tag>\r
          <Tag variant="warning">警告</Tag>\r
          <Tag variant="destructive">错误</Tag>\r
        </div>\r
      </div>\r
      \r
      <div className="space-y-2">\r
        <h3 className="text-sm font-medium">可删除标签</h3>\r
        <div className="flex gap-2">\r
          <Tag variant="primary" onRemove={fn()}>JavaScript</Tag>\r
          <Tag variant="success" onRemove={fn()}>已完成</Tag>\r
          <Tag variant="warning" onRemove={fn()}>待审核</Tag>\r
          <Tag variant="destructive" onRemove={fn()}>已过期</Tag>\r
        </div>\r
      </div>\r
    </div>
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: '这是一个很长的标签文本内容',
    variant: 'primary'
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const F=["Default","Removable","AllVariants","WithLongText"];export{i as AllVariants,s as Default,t as Removable,n as WithLongText,F as __namedExportsOrder,C as default};
