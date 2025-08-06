import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import{I as r}from"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const C={title:"Data Entry/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url"]},inputSize:{control:{type:"select"},options:["sm","default","lg"]},placeholder:{control:"text"},disabled:{control:"boolean"}}},s={args:{placeholder:"请输入内容..."}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Small"}),e.jsx(r,{inputSize:"sm",placeholder:"小尺寸输入框"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Default"}),e.jsx(r,{inputSize:"default",placeholder:"默认尺寸输入框"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Large"}),e.jsx(r,{inputSize:"lg",placeholder:"大尺寸输入框"})]})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{type:"text",placeholder:"文本输入"}),e.jsx(r,{type:"email",placeholder:"邮箱地址"}),e.jsx(r,{type:"password",placeholder:"密码"}),e.jsx(r,{type:"number",placeholder:"数字"}),e.jsx(r,{type:"tel",placeholder:"电话号码"}),e.jsx(r,{type:"url",placeholder:"网址"})]})},l={args:{placeholder:"禁用状态",disabled:!0}};var p,o,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入内容...'
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,n,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <div className="space-y-2">\r
        <div className="text-sm font-medium">Small</div>\r
        <Input inputSize="sm" placeholder="小尺寸输入框" />\r
      </div>\r
      <div className="space-y-2">\r
        <div className="text-sm font-medium">Default</div>\r
        <Input inputSize="default" placeholder="默认尺寸输入框" />\r
      </div>\r
      <div className="space-y-2">\r
        <div className="text-sm font-medium">Large</div>\r
        <Input inputSize="lg" placeholder="大尺寸输入框" />\r
      </div>\r
    </div>
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Input type="text" placeholder="文本输入" />\r
      <Input type="email" placeholder="邮箱地址" />\r
      <Input type="password" placeholder="密码" />\r
      <Input type="number" placeholder="数字" />\r
      <Input type="tel" placeholder="电话号码" />\r
      <Input type="url" placeholder="网址" />\r
    </div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,y,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: '禁用状态',
    disabled: true
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const F=["Default","Sizes","Types","Disabled"];export{s as Default,l as Disabled,a as Sizes,t as Types,F as __namedExportsOrder,C as default};
