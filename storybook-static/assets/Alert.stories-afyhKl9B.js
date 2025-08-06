import{j as r}from"./jsx-runtime-CDt2p4po.js";import{r as b}from"./index-GiUgBvb1.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{A as e,g as s,h as t}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const U={title:"FEEDBACK/Alert",component:e,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","destructive","success","warning"]},showIcon:{control:{type:"boolean"}},closable:{control:{type:"boolean"}}}},i={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(s,{children:"信息提示"}),r.jsx(t,{children:"这是一个信息提示，现在是默认样式。"})]})}},o={render:()=>r.jsxs("div",{className:"space-y-4",children:[r.jsxs(e,{showIcon:!0,children:[r.jsx(s,{children:"信息提示（默认）"}),r.jsx(t,{children:"这是默认的信息提示样式，使用蓝色主题。"})]}),r.jsxs(e,{variant:"success",showIcon:!0,children:[r.jsx(s,{children:"成功提示"}),r.jsx(t,{children:"操作已成功完成！数据已保存到服务器。"})]}),r.jsxs(e,{variant:"warning",showIcon:!0,children:[r.jsx(s,{children:"警告提示"}),r.jsx(t,{children:"请注意：此操作可能会影响系统性能，建议在非工作时间执行。"})]}),r.jsxs(e,{variant:"destructive",showIcon:!0,children:[r.jsx(s,{children:"错误提示"}),r.jsx(t,{children:"操作失败：网络连接异常，请检查网络设置后重试。"})]})]})},c={render:()=>r.jsxs("div",{className:"space-y-4",children:[r.jsxs(e,{variant:"success",showIcon:!0,children:[r.jsx(s,{children:"带图标的成功提示"}),r.jsx(t,{children:"图标与标题文字保持水平居中对齐。"})]}),r.jsxs(e,{variant:"warning",showIcon:!0,children:[r.jsx(s,{children:"带图标的警告提示"}),r.jsx(t,{children:"图标能够帮助用户快速识别提示的重要程度。"})]})]})},l={render:()=>{const[d,N]=b.useState([{id:1,type:"info",title:"可关闭的信息提示",content:"点击右上角的 X 按钮可以关闭此提示。"},{id:2,type:"success",title:"可关闭的成功提示",content:"此提示支持关闭功能。"},{id:3,type:"warning",title:"可关闭的警告提示",content:"关闭后此提示将不再显示。"}]),C=n=>{N(d.filter(S=>S.id!==n))};return r.jsxs("div",{className:"space-y-4",children:[d.map(n=>r.jsxs(e,{variant:n.type,showIcon:!0,onClose:()=>C(n.id),children:[r.jsx(s,{children:n.title}),r.jsx(t,{children:n.content})]},n.id)),d.length===0&&r.jsx("p",{className:"text-muted-foreground text-center py-8",children:"所有提示已被关闭。刷新页面可重新显示。"})]})}},a={render:()=>r.jsxs("div",{className:"space-y-4",children:[r.jsx(e,{variant:"info",showIcon:!0,children:r.jsx(t,{children:"这是一个只有描述内容的信息提示。"})}),r.jsx(e,{variant:"success",showIcon:!0,children:r.jsx(t,{children:"操作成功完成！"})}),r.jsx(e,{variant:"warning",showIcon:!0,onClose:()=>console.log("关闭警告"),children:r.jsx(t,{children:"这是一个可关闭的警告提示，只有描述内容。"})})]})};var p,A,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <AlertTitle>信息提示</AlertTitle>\r
        <AlertDescription>这是一个信息提示，现在是默认样式。</AlertDescription>\r
      </>
  }
}`,...(m=(A=i.parameters)==null?void 0:A.docs)==null?void 0:m.source}}};var h,u,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Alert showIcon>\r
        <AlertTitle>信息提示（默认）</AlertTitle>\r
        <AlertDescription>这是默认的信息提示样式，使用蓝色主题。</AlertDescription>\r
      </Alert>\r
      \r
      <Alert variant="success" showIcon>\r
        <AlertTitle>成功提示</AlertTitle>\r
        <AlertDescription>操作已成功完成！数据已保存到服务器。</AlertDescription>\r
      </Alert>\r
      \r
      <Alert variant="warning" showIcon>\r
        <AlertTitle>警告提示</AlertTitle>\r
        <AlertDescription>请注意：此操作可能会影响系统性能，建议在非工作时间执行。</AlertDescription>\r
      </Alert>\r
      \r
      <Alert variant="destructive" showIcon>\r
        <AlertTitle>错误提示</AlertTitle>\r
        <AlertDescription>操作失败：网络连接异常，请检查网络设置后重试。</AlertDescription>\r
      </Alert>\r
    </div>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var j,v,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Alert variant="success" showIcon>\r
        <AlertTitle>带图标的成功提示</AlertTitle>\r
        <AlertDescription>图标与标题文字保持水平居中对齐。</AlertDescription>\r
      </Alert>\r
      \r
      <Alert variant="warning" showIcon>\r
        <AlertTitle>带图标的警告提示</AlertTitle>\r
        <AlertDescription>图标能够帮助用户快速识别提示的重要程度。</AlertDescription>\r
      </Alert>\r
    </div>
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var D,g,y;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [alerts, setAlerts] = useState([{
      id: 1,
      type: 'info' as const,
      title: '可关闭的信息提示',
      content: '点击右上角的 X 按钮可以关闭此提示。'
    }, {
      id: 2,
      type: 'success' as const,
      title: '可关闭的成功提示',
      content: '此提示支持关闭功能。'
    }, {
      id: 3,
      type: 'warning' as const,
      title: '可关闭的警告提示',
      content: '关闭后此提示将不再显示。'
    }]);
    const removeAlert = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };
    return <div className="space-y-4">\r
        {alerts.map(alert => <Alert key={alert.id} variant={alert.type} showIcon onClose={() => removeAlert(alert.id)}>\r
            <AlertTitle>{alert.title}</AlertTitle>\r
            <AlertDescription>{alert.content}</AlertDescription>\r
          </Alert>)}\r
        {alerts.length === 0 && <p className="text-muted-foreground text-center py-8">\r
            所有提示已被关闭。刷新页面可重新显示。\r
          </p>}\r
      </div>;
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var I,T,f;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Alert variant="info" showIcon>\r
        <AlertDescription>这是一个只有描述内容的信息提示。</AlertDescription>\r
      </Alert>\r
      \r
      <Alert variant="success" showIcon>\r
        <AlertDescription>操作成功完成！</AlertDescription>\r
      </Alert>\r
      \r
      <Alert variant="warning" showIcon onClose={() => console.log('关闭警告')}>\r
        <AlertDescription>这是一个可关闭的警告提示，只有描述内容。</AlertDescription>\r
      </Alert>\r
    </div>
}`,...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const Y=["Default","Variants","WithIcon","Closable","OnlyDescription"];export{l as Closable,i as Default,a as OnlyDescription,o as Variants,c as WithIcon,Y as __namedExportsOrder,U as default};
