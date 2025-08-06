import{j as t}from"./jsx-runtime-CDt2p4po.js";import{B as r}from"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{P as e}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const F={title:"Feedback/Popconfirm",component:e,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>t.jsx(e,{title:"确认删除",description:"确定要删除这个项目吗？此操作不可撤销。",onConfirm:()=>alert("已删除"),children:t.jsx(r,{variant:"destructive",children:"删除项目"})})},i={render:()=>t.jsxs("div",{className:"grid grid-cols-2 gap-8 p-12 bg-gray-50 rounded-xl",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("h3",{className:"mb-4 text-sm font-medium",children:"顶部"}),t.jsx(e,{placement:"top",title:"顶部确认",description:"气泡在上方显示，箭头指向按钮",onConfirm:()=>alert("确认了"),children:t.jsx(r,{children:"顶部气泡"})})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("h3",{className:"mb-4 text-sm font-medium",children:"底部"}),t.jsx(e,{placement:"bottom",title:"底部确认",description:"气泡在下方显示，箭头自动调整",onConfirm:()=>alert("确认了"),children:t.jsx(r,{children:"底部气泡"})})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("h3",{className:"mb-4 text-sm font-medium",children:"左侧"}),t.jsx(e,{placement:"left",title:"左侧确认",description:"气泡在左侧显示",onConfirm:()=>alert("确认了"),children:t.jsx(r,{children:"左侧气泡"})})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("h3",{className:"mb-4 text-sm font-medium",children:"右侧"}),t.jsx(e,{placement:"right",title:"右侧确认",description:"气泡在右侧显示",onConfirm:()=>alert("确认了"),children:t.jsx(r,{children:"右侧气泡"})})]})]})};var m,n,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Popconfirm title="确认删除" description="确定要删除这个项目吗？此操作不可撤销。" onConfirm={() => alert('已删除')}>\r
      <Button variant="destructive">删除项目</Button>\r
    </Popconfirm>
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,a,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 p-12 bg-gray-50 rounded-xl">\r
      <div className="text-center">\r
        <h3 className="mb-4 text-sm font-medium">顶部</h3>\r
        <Popconfirm placement="top" title="顶部确认" description="气泡在上方显示，箭头指向按钮" onConfirm={() => alert('确认了')}>\r
          <Button>顶部气泡</Button>\r
        </Popconfirm>\r
      </div>\r
      \r
      <div className="text-center">\r
        <h3 className="mb-4 text-sm font-medium">底部</h3>\r
        <Popconfirm placement="bottom" title="底部确认" description="气泡在下方显示，箭头自动调整" onConfirm={() => alert('确认了')}>\r
          <Button>底部气泡</Button>\r
        </Popconfirm>\r
      </div>\r
      \r
      <div className="text-center">\r
        <h3 className="mb-4 text-sm font-medium">左侧</h3>\r
        <Popconfirm placement="left" title="左侧确认" description="气泡在左侧显示" onConfirm={() => alert('确认了')}>\r
          <Button>左侧气泡</Button>\r
        </Popconfirm>\r
      </div>\r
      \r
      <div className="text-center">\r
        <h3 className="mb-4 text-sm font-medium">右侧</h3>\r
        <Popconfirm placement="right" title="右侧确认" description="气泡在右侧显示" onConfirm={() => alert('确认了')}>\r
          <Button>右侧气泡</Button>\r
        </Popconfirm>\r
      </div>\r
    </div>
}`,...(l=(a=i.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const O=["Default","Placement"];export{o as Default,i as Placement,O as __namedExportsOrder,F as default};
