import{j as e}from"./jsx-runtime-CDt2p4po.js";import{R as g}from"./index-GiUgBvb1.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{C as r,a as t}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const A={title:"Data Entry/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},c={render:s=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"default",...s}),e.jsx(t,{htmlFor:"default",children:"复选框标签"})]})},l={render:()=>{const[s,p]=g.useState({newsletter:!0,marketing:!1,analytics:!0,essential:!0}),i=(a,f)=>{p(k=>({...k,[a]:f}))};return e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-md",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"隐私设置"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"newsletter",checked:s.newsletter,onCheckedChange:a=>i("newsletter",a)}),e.jsx(t,{htmlFor:"newsletter",children:"接收新闻通讯"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"marketing",checked:s.marketing,onCheckedChange:a=>i("marketing",a)}),e.jsx(t,{htmlFor:"marketing",children:"接收营销信息"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"analytics",checked:s.analytics,onCheckedChange:a=>i("analytics",a)}),e.jsx(t,{htmlFor:"analytics",children:"分析和性能"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{id:"essential",checked:s.essential,disabled:!0}),e.jsx(t,{htmlFor:"essential",children:"必要功能（必选）"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"表单示例"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(r,{id:"terms",className:"mt-0.5"}),e.jsxs(t,{htmlFor:"terms",children:["我已阅读并同意",e.jsx("a",{href:"#",className:"text-primary underline",children:"服务条款"}),"和",e.jsx("a",{href:"#",className:"text-primary underline",children:"隐私政策"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(r,{id:"updates",className:"mt-0.5"}),e.jsx(t,{htmlFor:"updates",children:"我希望接收产品更新和相关信息"})]})]})]}),e.jsxs("div",{className:"p-4 bg-muted rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"当前设置："}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsxs("li",{children:["新闻通讯: ",s.newsletter?"已启用":"已禁用"]}),e.jsxs("li",{children:["营销信息: ",s.marketing?"已启用":"已禁用"]}),e.jsxs("li",{children:["分析和性能: ",s.analytics?"已启用":"已禁用"]}),e.jsxs("li",{children:["必要功能: ",s.essential?"已启用":"已禁用"]})]})]})]})},parameters:{docs:{description:{story:"实际使用场景示例，包含隐私设置和表单场景。"}}}};var n,d,m;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-2">\r
      <Checkbox id="default" {...args} />\r
      <CheckboxLabel htmlFor="default">\r
        复选框标签\r
      </CheckboxLabel>\r
    </div>
}`,...(m=(d=c.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var o,h,x;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [preferences, setPreferences] = React.useState({
      newsletter: true,
      marketing: false,
      analytics: true,
      essential: true
    });
    const handlePreferenceChange = (key: string, checked: boolean) => {
      setPreferences(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div className="flex flex-col gap-6 w-full max-w-md">\r
        <div className="space-y-4">\r
          <h3 className="text-lg font-medium">隐私设置</h3>\r
          <div className="space-y-3">\r
            <div className="flex items-center gap-2">\r
              <Checkbox id="newsletter" checked={preferences.newsletter} onCheckedChange={checked => handlePreferenceChange('newsletter', checked as boolean)} />\r
              <CheckboxLabel htmlFor="newsletter">\r
                接收新闻通讯\r
              </CheckboxLabel>\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <Checkbox id="marketing" checked={preferences.marketing} onCheckedChange={checked => handlePreferenceChange('marketing', checked as boolean)} />\r
              <CheckboxLabel htmlFor="marketing">\r
                接收营销信息\r
              </CheckboxLabel>\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <Checkbox id="analytics" checked={preferences.analytics} onCheckedChange={checked => handlePreferenceChange('analytics', checked as boolean)} />\r
              <CheckboxLabel htmlFor="analytics">\r
                分析和性能\r
              </CheckboxLabel>\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <Checkbox id="essential" checked={preferences.essential} disabled />\r
              <CheckboxLabel htmlFor="essential">\r
                必要功能（必选）\r
              </CheckboxLabel>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="space-y-4">\r
          <h3 className="text-lg font-medium">表单示例</h3>\r
          <div className="space-y-3">\r
            <div className="flex items-start gap-2">\r
              <Checkbox id="terms" className="mt-0.5" />\r
              <CheckboxLabel htmlFor="terms">\r
                我已阅读并同意<a href="#" className="text-primary underline">服务条款</a>和<a href="#" className="text-primary underline">隐私政策</a>\r
              </CheckboxLabel>\r
            </div>\r
            <div className="flex items-start gap-2">\r
              <Checkbox id="updates" className="mt-0.5" />\r
              <CheckboxLabel htmlFor="updates">\r
                我希望接收产品更新和相关信息\r
              </CheckboxLabel>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="p-4 bg-muted rounded-lg">\r
          <h4 className="font-medium mb-2">当前设置：</h4>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>新闻通讯: {preferences.newsletter ? '已启用' : '已禁用'}</li>\r
            <li>营销信息: {preferences.marketing ? '已启用' : '已禁用'}</li>\r
            <li>分析和性能: {preferences.analytics ? '已启用' : '已禁用'}</li>\r
            <li>必要功能: {preferences.essential ? '已启用' : '已禁用'}</li>\r
          </ul>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '实际使用场景示例，包含隐私设置和表单场景。'
      }
    }
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const B=["Default","Examples"];export{c as Default,l as Examples,B as __namedExportsOrder,A as default};
