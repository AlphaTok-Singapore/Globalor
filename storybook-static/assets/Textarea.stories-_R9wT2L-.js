import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./button-BOzJErBH.js";import{L as i}from"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{T as a}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const U={title:"Data Entry/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},rows:{control:{type:"number",min:1,max:20}},cols:{control:{type:"number",min:10,max:100}}}},s={args:{placeholder:"请输入内容..."}},o={render:r=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{htmlFor:"description",children:"描述"}),e.jsx(a,{id:"description",placeholder:"请输入详细描述...",...r})]})},t={args:{placeholder:"禁用状态",disabled:!0}},l={render:r=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{htmlFor:"comment",children:"评论"}),e.jsx(a,{id:"comment",placeholder:"请输入您的评论...",rows:6,...r})]})},c={render:r=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{htmlFor:"feedback",required:!0,children:"反馈"}),e.jsx(a,{id:"feedback",placeholder:"请输入您的反馈（必填）...",required:!0,...r})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{htmlFor:"message-error",required:!0,children:"消息"}),e.jsx(a,{id:"message-error",placeholder:"请输入消息内容",className:"border-destructive",required:!0}),e.jsx("p",{className:"text-sm text-destructive",children:"消息内容不能为空"})]})};var m,n,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入内容...'
  }
}`,...(p=(n=s.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">\r
      <Label htmlFor="description">描述</Label>\r
      <Textarea id="description" placeholder="请输入详细描述..." {...args} />\r
    </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: '禁用状态',
    disabled: true
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,j,L;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">\r
      <Label htmlFor="comment">评论</Label>\r
      <Textarea id="comment" placeholder="请输入您的评论..." rows={6} {...args} />\r
    </div>
}`,...(L=(j=l.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var N,q,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">\r
      <Label htmlFor="feedback" required>反馈</Label>\r
      <Textarea id="feedback" placeholder="请输入您的反馈（必填）..." required {...args} />\r
    </div>
}`,...(F=(q=c.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var T,S,W;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Label htmlFor="message-error" required>消息</Label>\r
      <Textarea id="message-error" placeholder="请输入消息内容" className="border-destructive" required />\r
      <p className="text-sm text-destructive">消息内容不能为空</p>\r
    </div>
}`,...(W=(S=d.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};const V=["Default","WithLabel","Disabled","WithRows","Required","WithError"];export{s as Default,t as Disabled,c as Required,d as WithError,o as WithLabel,l as WithRows,V as __namedExportsOrder,U as default};
