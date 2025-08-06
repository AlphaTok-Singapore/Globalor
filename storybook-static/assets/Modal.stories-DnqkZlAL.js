import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as t}from"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import{T as b}from"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{M as o}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import{r as s}from"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const U={title:"Feedback/Modal",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"弹窗标题"},size:{control:{type:"select"},options:["sm","md","lg"],description:"弹窗尺寸"},children:{control:"text",description:"弹窗内容"},footer:{control:!1,description:"弹窗页脚内容 (通常是操作按钮)"},open:{control:"boolean",description:"控制弹窗的打开/关闭状态"},onOpenChange:{action:"opened/closed",description:"弹窗打开/关闭时的回调函数"}}},a=({height:r="h-24"})=>e.jsx("div",{className:`${r} w-full bg-purple-100 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center`,children:e.jsx(b,{variant:"body",className:"text-purple-600",children:"内容区域"})}),i={args:{title:"默认弹窗标题",children:e.jsx(a,{})},render:r=>{const[n,u]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>u(!0),children:"打开默认弹窗"}),e.jsx(o,{...r,open:n,onOpenChange:u,children:r.children})]})}},p={render:()=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"打开小尺寸弹窗"}),e.jsx(o,{open:r,onOpenChange:n,title:"小尺寸弹窗",size:"sm",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",children:"取消"}),e.jsx(t,{children:"确认"})]}),children:e.jsx(a,{height:"h-16"})})]})}},l={render:()=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"打开中尺寸弹窗"}),e.jsx(o,{open:r,onOpenChange:n,title:"中尺寸弹窗",size:"md",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",children:"取消"}),e.jsx(t,{children:"确认"})]}),children:e.jsx(a,{height:"h-20"})})]})}},c={render:()=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"打开大尺寸弹窗"}),e.jsx(o,{open:r,onOpenChange:n,title:"大尺寸弹窗",size:"lg",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",children:"取消"}),e.jsx(t,{children:"确认"})]}),children:e.jsx(a,{height:"h-32"})})]})}},d={render:()=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"打开无页脚弹窗"}),e.jsx(o,{open:r,onOpenChange:n,title:"无页脚弹窗",size:"md",children:e.jsx(a,{height:"h-24"})})]})}};var m,h,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: '默认弹窗标题',
    children: <ContentAreaMarker />
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>打开默认弹窗</Button>\r
        <Modal {...args} open={open} onOpenChange={setOpen}>\r
          {args.children}\r
        </Modal>\r
      </>;
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,j,O;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>打开小尺寸弹窗</Button>\r
        <Modal open={open} onOpenChange={setOpen} title="小尺寸弹窗" size="sm" footer={<>\r
              <Button variant="outline">取消</Button>\r
              <Button>确认</Button>\r
            </>}>\r
          <ContentAreaMarker height="h-16" />\r
        </Modal>\r
      </>;
  }
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var f,C,B;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>打开中尺寸弹窗</Button>\r
        <Modal open={open} onOpenChange={setOpen} title="中尺寸弹窗" size="md" footer={<>\r
              <Button variant="outline">取消</Button>\r
              <Button>确认</Button>\r
            </>}>\r
          <ContentAreaMarker height="h-20" />\r
        </Modal>\r
      </>;
  }
}`,...(B=(C=l.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var M,k,S;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>打开大尺寸弹窗</Button>\r
        <Modal open={open} onOpenChange={setOpen} title="大尺寸弹窗" size="lg" footer={<>\r
              <Button variant="outline">取消</Button>\r
              <Button>确认</Button>\r
            </>}>\r
          <ContentAreaMarker height="h-32" />\r
        </Modal>\r
      </>;
  }
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var F,z,v;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>打开无页脚弹窗</Button>\r
        <Modal open={open} onOpenChange={setOpen} title="无页脚弹窗" size="md">\r
          <ContentAreaMarker height="h-24" />\r
        </Modal>\r
      </>;
  }
}`,...(v=(z=d.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const V=["Default","Small","Medium","Large","WithoutFooter"];export{i as Default,c as Large,l as Medium,p as Small,d as WithoutFooter,V as __namedExportsOrder,U as default};
