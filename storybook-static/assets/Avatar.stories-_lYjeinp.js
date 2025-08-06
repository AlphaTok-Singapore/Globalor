import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import{A as x,a as u,b as ee}from"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const Se={title:"Base/Avatar",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","default","lg"]},src:{control:"text"},alt:{control:"text"},fallback:{control:"text"}}},r={args:{fallback:"CN"}},s={args:{src:"https://github.com/shadcn.png",alt:"shadcn",fallback:"CN"}},l={args:{fallback:"JD"}},n={args:{size:"sm",fallback:"SM"}},c={args:{size:"lg",fallback:"LG"}},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border",children:e.jsx("span",{className:"flex h-full w-full items-center justify-center rounded-full bg-muted",children:"S"})}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("p",{className:"text-sm leading-none font-medium",children:"Sofia Davis"}),e.jsx("p",{className:"text-muted-foreground text-xs",children:"m@example.com"})]})]})},o={render:()=>e.jsx(u,{fallback:"S",name:"Sofia Davis",email:"m@example.com"})},m={render:()=>e.jsx(u,{src:"https://github.com/shadcn.png",alt:"shadcn",fallback:"CN",name:"shadcn",email:"shadcn@example.com"})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{size:"sm",fallback:"S"}),e.jsx("span",{className:"text-xs",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{size:"default",fallback:"M"}),e.jsx("span",{className:"text-xs",children:"Default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{size:"lg",fallback:"L"}),e.jsx("span",{className:"text-xs",children:"Large"})]})]})},p={render:()=>{const Z=[{name:"Alice Johnson",email:"alice@example.com",fallback:"AJ"},{name:"Bob Smith",email:"bob@example.com",fallback:"BS"},{name:"Carol White",email:"carol@example.com",fallback:"CW",src:"https://github.com/shadcn.png"},{name:"David Brown",email:"david@example.com",fallback:"DB"}];return e.jsx("div",{className:"flex flex-col gap-3 w-64",children:Z.map((a,$)=>e.jsx(u,{src:a.src,fallback:a.fallback,name:a.name,email:a.email},$))})}},d={render:()=>e.jsx(u,{src:"https://invalid-url.jpg",fallback:"E",name:"Error User",email:"error@example.com"})},f={render:()=>e.jsx(ee,{name:"John Doe",email:"john.doe@example.com"})};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fallback: 'CN'
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,k,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'shadcn',
    fallback: 'CN'
  }
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var N,j,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    fallback: 'JD'
  }
}`,...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var I,D,W;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    fallback: 'SM'
  }
}`,...(W=(D=n.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var z,w,y;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    fallback: 'LG'
  }
}`,...(y=(w=c.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,L,U;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex items-center gap-4">\r
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border">\r
          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">\r
            S\r
          </span>\r
        </span>\r
        <div className="flex flex-col gap-0.5">\r
          <p className="text-sm leading-none font-medium">Sofia Davis</p>\r
          <p className="text-muted-foreground text-xs">m@example.com</p>\r
        </div>\r
      </div>;
  }
}`,...(U=(L=t.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var B,E,J;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <AvatarWithInfo fallback="S" name="Sofia Davis" email="m@example.com" />;
  }
}`,...(J=(E=o.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var M,O,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <AvatarWithInfo src="https://github.com/shadcn.png" alt="shadcn" fallback="CN" name="shadcn" email="shadcn@example.com" />;
  }
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var F,G,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex items-center gap-6">\r
        <div className="flex flex-col items-center gap-2">\r
          <Avatar size="sm" fallback="S" />\r
          <span className="text-xs">Small</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Avatar size="default" fallback="M" />\r
          <span className="text-xs">Default</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Avatar size="lg" fallback="L" />\r
          <span className="text-xs">Large</span>\r
        </div>\r
      </div>;
  }
}`,...(_=(G=i.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var T,q,H;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const users = [{
      name: 'Alice Johnson',
      email: 'alice@example.com',
      fallback: 'AJ'
    }, {
      name: 'Bob Smith',
      email: 'bob@example.com',
      fallback: 'BS'
    }, {
      name: 'Carol White',
      email: 'carol@example.com',
      fallback: 'CW',
      src: 'https://github.com/shadcn.png'
    }, {
      name: 'David Brown',
      email: 'david@example.com',
      fallback: 'DB'
    }];
    return <div className="flex flex-col gap-3 w-64">\r
        {users.map((user, index) => <AvatarWithInfo key={index} src={user.src} fallback={user.fallback} name={user.name} email={user.email} />)}\r
      </div>;
  }
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var K,P,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <AvatarWithInfo src="https://invalid-url.jpg" fallback="E" name="Error User" email="error@example.com" />;
  }
}`,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var V,X,Y;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    return <AvatarUserInfo name="John Doe" email="john.doe@example.com" />;
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ne=["Default","WithImage","Fallback","Small","Large","ReferenceStyle","WithUserInfo","WithImageAndInfo","AllSizes","UserList","ImageError","UserInfoOnly"];export{i as AllSizes,r as Default,l as Fallback,d as ImageError,c as Large,t as ReferenceStyle,n as Small,f as UserInfoOnly,p as UserList,s as WithImage,m as WithImageAndInfo,o as WithUserInfo,Ne as __namedExportsOrder,Se as default};
