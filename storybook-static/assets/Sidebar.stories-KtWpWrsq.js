import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{r as d}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const _={title:"Navigation/Sidebar",component:d,parameters:{layout:"fullscreen"},argTypes:{collapsed:{control:"boolean",description:"是否收起侧边栏"},className:{control:"text",description:"自定义 CSS 类名"}}},s={args:{collapsed:!1},render:o=>{const[r,m]=p.useState(o.collapsed||!1);return e.jsxs("div",{className:"flex h-screen w-full bg-background",children:[e.jsx("div",{children:e.jsx(d,{...o,collapsed:r,onCollapsedChange:m})}),e.jsxs("div",{className:"flex-1 p-6",children:[e.jsx("h1",{className:"text-2xl font-medium mb-4",children:"主内容区域"}),e.jsx("p",{className:"text-muted-foreground",children:"这里是应用程序的主要内容区域。左侧的 Sidebar 提供了导航功能。"}),e.jsxs("p",{className:"text-muted-foreground mt-2",children:["点击",r?"Logo 位置的展开按钮":"右上角的收起按钮","可以",r?"展开":"收起","侧边栏。"]}),e.jsxs("p",{className:"text-muted-foreground mt-2",children:["当前状态：",r?"已收起":"已展开"]})]})]})}};var a,t,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    collapsed: false
  },
  render: args => {
    const [collapsed, setCollapsed] = useState(args.collapsed || false);
    return <div className="flex h-screen w-full bg-background">\r
        <div>\r
          <Sidebar {...args} collapsed={collapsed} onCollapsedChange={setCollapsed} />\r
        </div>\r
        <div className="flex-1 p-6">\r
          <h1 className="text-2xl font-medium mb-4">主内容区域</h1>\r
          <p className="text-muted-foreground">\r
            这里是应用程序的主要内容区域。左侧的 Sidebar 提供了导航功能。\r
          </p>\r
          <p className="text-muted-foreground mt-2">\r
            点击{collapsed ? 'Logo 位置的展开按钮' : '右上角的收起按钮'}可以{collapsed ? '展开' : '收起'}侧边栏。\r
          </p>\r
          <p className="text-muted-foreground mt-2">\r
            当前状态：{collapsed ? '已收起' : '已展开'}\r
          </p>\r
        </div>\r
      </div>;
  }
}`,...(l=(t=s.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,_ as default};
