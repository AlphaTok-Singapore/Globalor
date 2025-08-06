import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as G}from"./index-GiUgBvb1.js";import{B as t,a as n}from"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import{P as g,T as _}from"./trash-2-CYLGOJMZ.js";import{c as M}from"./createLucideIcon-Do1tV511.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=M("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]),ce={title:"Base/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive","outline","secondary","ghost","link"]},size:{control:{type:"select"},options:["default","sm","lg","withicon","sm-icon"]},disabled:{control:"boolean"},asChild:{control:"boolean"},tooltip:{control:"text",description:"图标按钮必需的 tooltip 文本"}}},a={args:{children:"Button"}},r={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"link",children:"Link"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(t,{children:[e.jsx(g,{className:"h-4 w-4"}),"创建任务"]}),e.jsxs(t,{variant:"outline",children:[e.jsx(g,{className:"h-4 w-4"}),"添加项目"]})]})},o={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{size:"sm-icon",variant:"ghost",tooltip:"归档",children:e.jsx(p,{className:"h-4 w-4"})}),e.jsx(t,{size:"sm-icon",variant:"ghost",tooltip:"删除",children:e.jsx(_,{className:"h-4 w-4"})}),e.jsx(t,{size:"withicon",variant:"ghost",tooltip:"大尺寸归档",children:e.jsx(p,{className:"h-4 w-4"})})]})},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{children:"Normal"}),e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(n,{loading:!0,children:"Loading"})]})},d={render:()=>{const[m,u]=G.useState(!1),V=()=>{u(!0),setTimeout(()=>{u(!1)},2e3)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(n,{loading:!0,loadingText:"保存中...",children:"保存"}),e.jsx(n,{loading:!1,children:"正常状态"}),e.jsx(n,{loading:!0,variant:"secondary",children:"次要按钮"}),e.jsx(n,{loading:!0,variant:"outline",loadingText:"处理中...",children:"轮廓按钮"})]}),e.jsxs("div",{className:"border-t pt-4",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(n,{loading:m,onClick:V,loadingText:"提交中...",children:"提交表单"}),e.jsx(t,{variant:"outline",onClick:()=>u(!1),disabled:!m,size:"sm",children:"取消"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"点击提交按钮测试加载状态 (2秒)"})]})]})}},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(n,{loading:!0,size:"sm",loadingText:"小",children:"Small"}),e.jsx(n,{loading:!0,size:"default",loadingText:"默认",children:"Default"}),e.jsx(n,{loading:!0,size:"lg",loadingText:"大",children:"Large"})]})};var h,x,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,B,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Button variant="default">Default</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="destructive">Destructive</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="link">Link</Button>\r
    </div>
}`,...(j=(B=r.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var L,N,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">\r
      <Button size="sm">Small</Button>\r
      <Button size="default">Default</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,...(w=(N=s.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var z,S,W;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Button>\r
        <Plus className="h-4 w-4" />\r
        创建任务\r
      </Button>\r
      <Button variant="outline">\r
        <Plus className="h-4 w-4" />\r
        添加项目\r
      </Button>\r
    </div>
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var T,y,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">\r
      <Button size="sm-icon" variant="ghost" tooltip="归档">\r
        <ArchiveX className="h-4 w-4" />\r
      </Button>\r
      <Button size="sm-icon" variant="ghost" tooltip="删除">\r
        <Trash2 className="h-4 w-4" />\r
      </Button>\r
      <Button size="withicon" variant="ghost" tooltip="大尺寸归档">\r
        <ArchiveX className="h-4 w-4" />\r
      </Button>\r
    </div>
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,D,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Button>Normal</Button>\r
      <Button disabled>Disabled</Button>\r
      <ButtonWithLoading loading>Loading</ButtonWithLoading>\r
    </div>
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,A,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
      setIsLoading(true);
      // 模拟异步操作
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    return <div className="flex flex-col gap-4">\r
        <div className="flex flex-wrap gap-2">\r
          <ButtonWithLoading loading loadingText="保存中...">保存</ButtonWithLoading>\r
          <ButtonWithLoading loading={false}>正常状态</ButtonWithLoading>\r
          <ButtonWithLoading loading variant="secondary">次要按钮</ButtonWithLoading>\r
          <ButtonWithLoading loading variant="outline" loadingText="处理中...">轮廓按钮</ButtonWithLoading>\r
        </div>\r
        \r
        <div className="border-t pt-4">\r
          <div className="flex gap-2 items-center">\r
            <ButtonWithLoading loading={isLoading} onClick={handleSubmit} loadingText="提交中...">\r
              提交表单\r
            </ButtonWithLoading>\r
            <Button variant="outline" onClick={() => setIsLoading(false)} disabled={!isLoading} size="sm">\r
              取消\r
            </Button>\r
          </div>\r
          <p className="text-xs text-muted-foreground mt-2">\r
            点击提交按钮测试加载状态 (2秒)\r
          </p>\r
        </div>\r
      </div>;
  }
}`,...(P=(A=d.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var X,E,O;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">\r
      <ButtonWithLoading loading size="sm" loadingText="小">Small</ButtonWithLoading>\r
      <ButtonWithLoading loading size="default" loadingText="默认">Default</ButtonWithLoading>\r
      <ButtonWithLoading loading size="lg" loadingText="大">Large</ButtonWithLoading>\r
    </div>
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const ue=["Default","Variants","Sizes","WithIcons","IconButtons","States","LoadingButton","LoadingSizes"];export{a as Default,o as IconButtons,d as LoadingButton,c as LoadingSizes,s as Sizes,l as States,r as Variants,i as WithIcons,ue as __namedExportsOrder,ce as default};
