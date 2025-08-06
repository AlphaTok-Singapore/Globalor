import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{T as r}from"./tags-input-BAcvn557.js";import"./utils-z-I-gj-J.js";import"./tags-3RK0HEEA.js";import"./createLucideIcon-Do1tV511.js";const P={title:"Data Entry/TagsInput",component:r,parameters:{layout:"centered",docs:{description:{component:"标签输入组件，支持用户输入文本并按空格键转换为标签。支持删除标签、限制最大数量、重复检查等功能。"}}},tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"},description:"是否禁用"},maxTags:{control:{type:"number"},description:"最大标签数量"},duplicateCheck:{control:{type:"boolean"},description:"是否检查重复标签"},placeholder:{control:{type:"text"},description:"占位符文本"}}},d={render:s=>{const[a,c]=t.useState([]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{...s,value:a,onChange:c})})},args:{placeholder:"输入标签并按空格键添加..."}},l={render:s=>{const[a,c]=t.useState(["React","TypeScript"]);return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{...s,value:a,onChange:c}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"当前标签："}),e.jsx("pre",{className:"text-xs bg-gray-100 p-2 rounded mt-2",children:JSON.stringify(a,null,2)})]})]})},args:{placeholder:"添加更多标签..."}},i={render:()=>{const[s,a]=t.useState([]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{value:s,onChange:a,placeholder:"输入标签并按空格键添加..."})})}},g={render:()=>{const[s,a]=t.useState(["JavaScript","React"]);return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{value:s,onChange:a,maxTags:5,placeholder:"最多只能添加5个标签..."}),e.jsxs("p",{className:"text-sm text-muted-foreground mt-2",children:["已添加 ",s.length,"/5 个标签"]})]})}},p={render:()=>{const[s,a]=t.useState(["test"]);return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{value:s,onChange:a,duplicateCheck:!1,placeholder:"允许重复标签..."}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:'试试输入 "test" - 允许重复'})]})}},m={render:()=>{const[s,a]=t.useState(["React","TypeScript","Disabled"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{disabled:!0,value:s,onChange:a,placeholder:"此组件已禁用..."})})}},u={render:()=>{const[s,a]=t.useState(["初始标签"]),[c,_]=t.useState([]),x=n=>{_(o=>[...o.slice(-4),n])};return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{value:s,onChange:a,onTagAdd:n=>x(`添加标签: ${n}`),onTagRemove:(n,o)=>x(`删除标签: ${n} (索引 ${o})`),placeholder:"观察事件回调..."}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"最近事件："}),e.jsx("div",{className:"text-xs bg-gray-100 p-2 rounded space-y-1",children:c.length===0?e.jsx("p",{className:"text-muted-foreground",children:"暂无事件"}):c.map((n,o)=>e.jsx("div",{children:n},o))})]})]})}},v={args:{value:["Frontend","React","TypeScript","Tailwind CSS"],placeholder:"添加更多技术标签..."}};var h,T,S;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<string[]>([]);
    return <div className="w-80">\r
        <TagsInput {...args} value={tags} onChange={setTags} />\r
      </div>;
  },
  args: {
    placeholder: '输入标签并按空格键添加...'
  }
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var N,j,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);
    return <div className="w-80">\r
        <TagsInput {...args} value={tags} onChange={setTags} />\r
        <div className="mt-4">\r
          <p className="text-sm text-muted-foreground">当前标签：</p>\r
          <pre className="text-xs bg-gray-100 p-2 rounded mt-2">\r
            {JSON.stringify(tags, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  },
  args: {
    placeholder: '添加更多标签...'
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var y,f,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return <div className="w-80">\r
        <TagsInput value={tags} onChange={setTags} placeholder="输入标签并按空格键添加..." />\r
      </div>;
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,E,I;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['JavaScript', 'React']);
    return <div className="w-80">\r
        <TagsInput value={tags} onChange={setTags} maxTags={5} placeholder="最多只能添加5个标签..." />\r
        <p className="text-sm text-muted-foreground mt-2">\r
          已添加 {tags.length}/5 个标签\r
        </p>\r
      </div>;
  }
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var R,D,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['test']);
    return <div className="w-80">\r
        <TagsInput value={tags} onChange={setTags} duplicateCheck={false} placeholder="允许重复标签..." />\r
        <p className="text-sm text-muted-foreground mt-2">\r
          试试输入 "test" - 允许重复\r
        </p>\r
      </div>;
  }
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var $,A,J;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript', 'Disabled']);
    return <div className="w-80">\r
        <TagsInput disabled value={tags} onChange={setTags} placeholder="此组件已禁用..." />\r
      </div>;
  }
}`,...(J=(A=m.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var W,O,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['初始标签']);
    const [events, setEvents] = useState<string[]>([]);
    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), event]); // 只保留最近5个事件
    };
    return <div className="w-80">\r
        <TagsInput value={tags} onChange={setTags} onTagAdd={tag => addEvent(\`添加标签: \${tag}\`)} onTagRemove={(tag, index) => addEvent(\`删除标签: \${tag} (索引 \${index})\`)} placeholder="观察事件回调..." />\r
        <div className="mt-4">\r
          <p className="text-sm font-medium mb-2">最近事件：</p>\r
          <div className="text-xs bg-gray-100 p-2 rounded space-y-1">\r
            {events.length === 0 ? <p className="text-muted-foreground">暂无事件</p> : events.map((event, index) => <div key={index}>{event}</div>)}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var F,M,U;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: ['Frontend', 'React', 'TypeScript', 'Tailwind CSS'],
    placeholder: '添加更多技术标签...'
  }
}`,...(U=(M=v.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const Q=["Default","Controlled","BasicUsage","MaxTags","AllowDuplicates","Disabled","WithCallbacks","WithInitialTags"];export{p as AllowDuplicates,i as BasicUsage,l as Controlled,d as Default,m as Disabled,g as MaxTags,u as WithCallbacks,v as WithInitialTags,Q as __namedExportsOrder,P as default};
