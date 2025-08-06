import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as O}from"./index-GiUgBvb1.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import"./page-header-CCd0yR5Z.js";import{S as s,e as c,a as d,b as u,c as o,d as l,M as G,f as ce,g as f,h as V,i as w}from"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import{S as oe}from"./settings-DZtCoAM_.js";import{c as ie}from"./createLucideIcon-Do1tV511.js";import{G as de}from"./globe-CLs2KnT1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=ie("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=ie("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Re={title:"Data Entry/Select",component:s,parameters:{layout:"centered"},tags:["autodocs"]},h={render:()=>e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(d,{display:"text-only",children:e.jsx(u,{placeholder:"请选择选项"})}),e.jsxs(o,{children:[e.jsx(l,{value:"option1",children:"选项 1"}),e.jsx(l,{value:"option2",children:"选项 2"}),e.jsx(l,{value:"option3",children:"选项 3"})]})]})})},v={render:()=>e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(d,{display:"with-icon",icon:e.jsx(oe,{className:"h-4 w-4"}),children:e.jsx(u,{placeholder:"选择设置"})}),e.jsxs(o,{children:[e.jsx(l,{value:"basic",children:"基础设置"}),e.jsx(l,{value:"advanced",children:"高级设置"}),e.jsx(l,{value:"system",children:"系统设置"})]})]})})},g={render:()=>{const[p,n]=O.useState([]),[T,L]=O.useState(!1),m=[{value:"frontend",label:"Frontend 开发"},{value:"backend",label:"Backend 开发"},{value:"fullstack",label:"Full Stack 开发"},{value:"mobile",label:"移动端开发"},{value:"devops",label:"DevOps 运维"},{value:"design",label:"UI/UX 设计"}],N=m.reduce((r,t)=>(r[t.value]=t.label,r),{}),k=(r,t)=>{n(t?a=>[...a,r]:a=>a.filter(i=>i!==r))},M=r=>{n(t=>t.filter(a=>a!==r))};return e.jsx(c,{children:e.jsxs(s,{open:T,onOpenChange:L,children:[e.jsx(G,{display:"text-only",selectedValues:p,selectedLabels:N,onRemoveValue:M,placeholder:"选择技能领域",maxDisplay:2}),e.jsx(o,{children:m.map(r=>e.jsx(ce,{value:r.value,selected:p.includes(r.value),onToggle:k,children:r.label},r.value))})]})})}},x={render:()=>e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(d,{display:"with-icon",icon:e.jsx(ue,{className:"h-4 w-4"}),children:e.jsx(u,{placeholder:"选择技术栈"})}),e.jsxs(o,{children:[e.jsxs(f,{children:[e.jsx(V,{children:"前端框架"}),e.jsx(l,{value:"react",children:"React"}),e.jsx(l,{value:"vue",children:"Vue"}),e.jsx(l,{value:"angular",children:"Angular"})]}),e.jsx(w,{}),e.jsxs(f,{children:[e.jsx(V,{children:"后端技术"}),e.jsx(l,{value:"nodejs",children:"Node.js"}),e.jsx(l,{value:"python",children:"Python"}),e.jsx(l,{value:"go",children:"Go"}),e.jsx(l,{value:"java",children:"Java"})]}),e.jsx(w,{}),e.jsxs(f,{children:[e.jsx(V,{children:"数据库"}),e.jsx(l,{value:"mysql",children:"MySQL"}),e.jsx(l,{value:"postgresql",children:"PostgreSQL"}),e.jsx(l,{value:"mongodb",children:"MongoDB"})]})]})]})})},j={render:()=>{const[p,n]=O.useState(["email","push"]),[T,L]=O.useState(!1),m={通知方式:[{value:"email",label:"邮件通知"},{value:"sms",label:"短信通知"},{value:"push",label:"推送通知"}],通知频率:[{value:"realtime",label:"实时通知"},{value:"daily",label:"每日汇总"},{value:"weekly",label:"每周汇总"}],通知类型:[{value:"system",label:"系统通知"},{value:"security",label:"安全提醒"},{value:"marketing",label:"营销信息"}]},k=Object.values(m).flat().reduce((t,a)=>(t[a.value]=a.label,t),{}),M=(t,a)=>{n(a?i=>[...i,t]:i=>i.filter(S=>S!==t))},r=t=>{n(a=>a.filter(i=>i!==t))};return e.jsx(c,{children:e.jsxs(s,{open:T,onOpenChange:L,children:[e.jsx(G,{display:"with-icon",icon:e.jsx(pe,{className:"h-4 w-4"}),selectedValues:p,selectedLabels:k,onRemoveValue:r,placeholder:"通知设置",maxDisplay:2}),e.jsx(o,{children:Object.entries(m).map(([t,a],i)=>e.jsxs("div",{children:[i>0&&e.jsx(w,{}),e.jsxs(f,{children:[e.jsx(V,{children:t}),a.map(S=>e.jsx(ce,{value:S.value,selected:p.includes(S.value),onToggle:M,children:S.label},S.value))]})]},t))})]})})}},b={render:()=>e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(d,{display:"with-icon",icon:e.jsx(de,{className:"h-4 w-4"}),children:e.jsx(u,{placeholder:"选择国家"})}),e.jsx(o,{children:Array.from({length:20},(p,n)=>e.jsxs(l,{value:`country-${n}`,children:["国家 ",n+1," - 这是一个很长的选项名称"]},n))})]})})},I={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{children:e.jsxs(s,{disabled:!0,children:[e.jsx(d,{display:"text-only",children:e.jsx(u,{placeholder:"禁用的单选"})}),e.jsxs(o,{children:[e.jsx(l,{value:"option1",children:"选项 1"}),e.jsx(l,{value:"option2",children:"选项 2"})]})]})}),e.jsx(c,{children:e.jsxs(s,{disabled:!0,children:[e.jsx(G,{display:"with-icon",icon:e.jsx(oe,{className:"h-4 w-4"}),selectedValues:["option1","option2"],selectedLabels:{option1:"选项 1",option2:"选项 2"},placeholder:"禁用的多选"}),e.jsxs(o,{children:[e.jsx(l,{value:"option1",children:"选项 1"}),e.jsx(l,{value:"option2",children:"选项 2"})]})]})})]})},y={render:()=>e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(d,{display:"text-only",children:e.jsx(u,{placeholder:"部分选项禁用"})}),e.jsxs(o,{children:[e.jsx(l,{value:"option1",children:"可用选项"}),e.jsx(l,{value:"option2",disabled:!0,children:"禁用选项"}),e.jsx(l,{value:"option3",children:"另一个可用选项"}),e.jsx(l,{value:"option4",disabled:!0,children:"另一个禁用选项"})]})]})})},C={parameters:{layout:"padded"},render:()=>e.jsx(c,{width:"full",children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(u,{placeholder:"请选择性别"})}),e.jsxs(o,{children:[e.jsx(l,{value:"男",children:"男"}),e.jsx(l,{value:"女",children:"女"}),e.jsx(l,{value:"其他",children:"其他"}),e.jsx(l,{value:"不愿透露",children:"不愿透露"})]})]})})};var D,R,W;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="text-only">\r
          <SelectValue placeholder="请选择选项" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="option1">选项 1</SelectItem>\r
          <SelectItem value="option2">选项 2</SelectItem>\r
          <SelectItem value="option3">选项 3</SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var B,q,F;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="with-icon" icon={<Settings className="h-4 w-4" />}>\r
          <SelectValue placeholder="选择设置" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="basic">基础设置</SelectItem>\r
          <SelectItem value="advanced">高级设置</SelectItem>\r
          <SelectItem value="system">系统设置</SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(F=(q=v.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var A,E,P;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const options = [{
      value: 'frontend',
      label: 'Frontend 开发'
    }, {
      value: 'backend',
      label: 'Backend 开发'
    }, {
      value: 'fullstack',
      label: 'Full Stack 开发'
    }, {
      value: 'mobile',
      label: '移动端开发'
    }, {
      value: 'devops',
      label: 'DevOps 运维'
    }, {
      value: 'design',
      label: 'UI/UX 设计'
    }];
    const selectedLabels = options.reduce((acc, option) => {
      acc[option.value] = option.label;
      return acc;
    }, {} as Record<string, string>);
    const handleToggle = (value: string, selected: boolean) => {
      if (selected) {
        setSelectedValues(prev => [...prev, value]);
      } else {
        setSelectedValues(prev => prev.filter(v => v !== value));
      }
    };
    const handleRemove = (value: string) => {
      setSelectedValues(prev => prev.filter(v => v !== value));
    };
    return <SelectContainer>\r
        <Select open={isOpen} onOpenChange={setIsOpen}>\r
          <MultiSelectTrigger display="text-only" selectedValues={selectedValues} selectedLabels={selectedLabels} onRemoveValue={handleRemove} placeholder="选择技能领域" maxDisplay={2} />\r
          <SelectContent>\r
            {options.map(option => <MultiSelectItem key={option.value} value={option.value} selected={selectedValues.includes(option.value)} onToggle={handleToggle}>\r
                {option.label}\r
              </MultiSelectItem>)}\r
          </SelectContent>\r
        </Select>\r
      </SelectContainer>;
  }
}`,...(P=(E=g.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var Q,U,_;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="with-icon" icon={<Building2 className="h-4 w-4" />}>\r
          <SelectValue placeholder="选择技术栈" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectGroup>\r
            <SelectLabel>前端框架</SelectLabel>\r
            <SelectItem value="react">React</SelectItem>\r
            <SelectItem value="vue">Vue</SelectItem>\r
            <SelectItem value="angular">Angular</SelectItem>\r
          </SelectGroup>\r
          <SelectSeparator />\r
          <SelectGroup>\r
            <SelectLabel>后端技术</SelectLabel>\r
            <SelectItem value="nodejs">Node.js</SelectItem>\r
            <SelectItem value="python">Python</SelectItem>\r
            <SelectItem value="go">Go</SelectItem>\r
            <SelectItem value="java">Java</SelectItem>\r
          </SelectGroup>\r
          <SelectSeparator />\r
          <SelectGroup>\r
            <SelectLabel>数据库</SelectLabel>\r
            <SelectItem value="mysql">MySQL</SelectItem>\r
            <SelectItem value="postgresql">PostgreSQL</SelectItem>\r
            <SelectItem value="mongodb">MongoDB</SelectItem>\r
          </SelectGroup>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var J,X,$;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['email', 'push']);
    const [isOpen, setIsOpen] = useState(false);
    const options = {
      '通知方式': [{
        value: 'email',
        label: '邮件通知'
      }, {
        value: 'sms',
        label: '短信通知'
      }, {
        value: 'push',
        label: '推送通知'
      }],
      '通知频率': [{
        value: 'realtime',
        label: '实时通知'
      }, {
        value: 'daily',
        label: '每日汇总'
      }, {
        value: 'weekly',
        label: '每周汇总'
      }],
      '通知类型': [{
        value: 'system',
        label: '系统通知'
      }, {
        value: 'security',
        label: '安全提醒'
      }, {
        value: 'marketing',
        label: '营销信息'
      }]
    };
    const allOptions = Object.values(options).flat();
    const selectedLabels = allOptions.reduce((acc, option) => {
      acc[option.value] = option.label;
      return acc;
    }, {} as Record<string, string>);
    const handleToggle = (value: string, selected: boolean) => {
      if (selected) {
        setSelectedValues(prev => [...prev, value]);
      } else {
        setSelectedValues(prev => prev.filter(v => v !== value));
      }
    };
    const handleRemove = (value: string) => {
      setSelectedValues(prev => prev.filter(v => v !== value));
    };
    return <SelectContainer>\r
        <Select open={isOpen} onOpenChange={setIsOpen}>\r
          <MultiSelectTrigger display="with-icon" icon={<Mail className="h-4 w-4" />} selectedValues={selectedValues} selectedLabels={selectedLabels} onRemoveValue={handleRemove} placeholder="通知设置" maxDisplay={2} />\r
          <SelectContent>\r
            {Object.entries(options).map(([groupName, groupOptions], groupIndex) => <div key={groupName}>\r
                {groupIndex > 0 && <SelectSeparator />}\r
                <SelectGroup>\r
                  <SelectLabel>{groupName}</SelectLabel>\r
                  {groupOptions.map(option => <MultiSelectItem key={option.value} value={option.value} selected={selectedValues.includes(option.value)} onToggle={handleToggle}>\r
                      {option.label}\r
                    </MultiSelectItem>)}\r
                </SelectGroup>\r
              </div>)}\r
          </SelectContent>\r
        </Select>\r
      </SelectContainer>;
  }
}`,...($=(X=j.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var z,H,Z;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="with-icon" icon={<Globe className="h-4 w-4" />}>\r
          <SelectValue placeholder="选择国家" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          {Array.from({
          length: 20
        }, (_, i) => <SelectItem key={i} value={\`country-\${i}\`}>\r
              国家 {i + 1} - 这是一个很长的选项名称\r
            </SelectItem>)}\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(Z=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var K,Y,ee;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <SelectContainer>\r
        <Select disabled>\r
          <SelectTrigger display="text-only">\r
            <SelectValue placeholder="禁用的单选" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="option1">选项 1</SelectItem>\r
            <SelectItem value="option2">选项 2</SelectItem>\r
          </SelectContent>\r
        </Select>\r
      </SelectContainer>\r
      \r
      <SelectContainer>\r
        <Select disabled>\r
          <MultiSelectTrigger display="with-icon" icon={<Settings className="h-4 w-4" />} selectedValues={['option1', 'option2']} selectedLabels={{
          option1: '选项 1',
          option2: '选项 2'
        }} placeholder="禁用的多选" />\r
          <SelectContent>\r
            <SelectItem value="option1">选项 1</SelectItem>\r
            <SelectItem value="option2">选项 2</SelectItem>\r
          </SelectContent>\r
        </Select>\r
      </SelectContainer>\r
    </div>
}`,...(ee=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var le,te,re;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="text-only">\r
          <SelectValue placeholder="部分选项禁用" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="option1">可用选项</SelectItem>\r
          <SelectItem value="option2" disabled>\r
            禁用选项\r
          </SelectItem>\r
          <SelectItem value="option3">另一个可用选项</SelectItem>\r
          <SelectItem value="option4" disabled>\r
            另一个禁用选项\r
          </SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ne,se;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <SelectContainer width="full">\r
      <Select>\r
        <SelectTrigger>\r
          <SelectValue placeholder="请选择性别" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="男">男</SelectItem>\r
          <SelectItem value="女">女</SelectItem>\r
          <SelectItem value="其他">其他</SelectItem>\r
          <SelectItem value="不愿透露">不愿透露</SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(se=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const We=["Default","SingleWithIcon","MultipleTextOnly","WithGroups","MultipleWithGroups","LongList","Disabled","DisabledItems","FullWidth"];export{h as Default,I as Disabled,y as DisabledItems,C as FullWidth,b as LongList,g as MultipleTextOnly,j as MultipleWithGroups,v as SingleWithIcon,x as WithGroups,We as __namedExportsOrder,Re as default};
