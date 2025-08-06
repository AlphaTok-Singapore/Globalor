import{j as e}from"./jsx-runtime-CDt2p4po.js";import{f}from"./index-BxLnRenJ.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{f as s}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const B={title:"Data Entry/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","default"]},checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},args:{onCheckedChange:f()}},r={args:{checked:!1}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:!1}),e.jsx("span",{children:"未选中"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:!0}),e.jsx("span",{children:"已选中"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:!1,disabled:!0}),e.jsx("span",{children:"禁用未选中"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:!0,disabled:!0}),e.jsx("span",{children:"禁用已选中"})]})]}),parameters:{docs:{description:{story:"展示开关的所有可能状态：未选中、已选中、禁用状态。"}}}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{size:"sm",checked:!0}),e.jsx("span",{children:"小尺寸 (sm)"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{size:"default",checked:!0}),e.jsx("span",{children:"默认尺寸 (default)"})]})]}),parameters:{docs:{description:{story:"展示不同尺寸的开关组件：小、默认。"}}}};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var o,p,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center gap-4">\r
        <Switch checked={false} />\r
        <span>未选中</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Switch checked={true} />\r
        <span>已选中</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Switch checked={false} disabled />\r
        <span>禁用未选中</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Switch checked={true} disabled />\r
        <span>禁用已选中</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示开关的所有可能状态：未选中、已选中、禁用状态。'
      }
    }
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var n,m,x;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center gap-4">\r
        <Switch size="sm" checked={true} />\r
        <span>小尺寸 (sm)</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Switch size="default" checked={true} />\r
        <span>默认尺寸 (default)</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示不同尺寸的开关组件：小、默认。'
      }
    }
  }
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const F=["Default","States","Sizes"];export{r as Default,t as Sizes,a as States,F as __namedExportsOrder,B as default};
