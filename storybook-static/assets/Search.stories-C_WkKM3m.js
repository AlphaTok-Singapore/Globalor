import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as m}from"./index-GiUgBvb1.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{S as o}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const P={title:"Data Entry/Search",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","full"]}}},a={args:{placeholder:"搜索..."}},t={args:{placeholder:"搜索...",variant:"full"},parameters:{layout:"padded"}},s={render:()=>e.jsxs("div",{className:"space-y-4 max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium",children:"默认宽度（256px）"}),e.jsx(o,{variant:"default",placeholder:"默认宽度搜索框"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium",children:"撑满宽度"}),e.jsx(o,{variant:"full",placeholder:"撑满宽度搜索框"})]})]}),parameters:{layout:"padded"}},l={render:()=>{const[d,c]=m.useState(""),[n,C]=m.useState([]),w=r=>{r.trim()&&!n.includes(r)&&C(i=>[r,...i.slice(0,4)])},H=()=>{c("")};return e.jsxs("div",{className:"w-96 space-y-4",children:[e.jsx(o,{placeholder:"输入并按回车搜索...",value:d,onChange:r=>c(r.target.value),onKeyDown:r=>{r.key==="Enter"&&w(d)},onClear:H}),n.length>0&&e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"搜索历史"}),e.jsx("div",{className:"space-y-1",children:n.map((r,i)=>e.jsx("button",{className:"block w-full text-left text-sm p-2 rounded hover:bg-muted",onClick:()=>c(r),children:r},i))})]})]})}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: '搜索...'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,x,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: '搜索...',
    variant: 'full'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,g,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-4xl">\r
      <div>\r
        <label className="text-sm font-medium">默认宽度（256px）</label>\r
        <SearchInput variant="default" placeholder="默认宽度搜索框" />\r
      </div>\r
      <div>\r
        <label className="text-sm font-medium">撑满宽度</label>\r
        <SearchInput variant="full" placeholder="撑满宽度搜索框" />\r
      </div>\r
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var b,j,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const handleSearch = (searchValue: string) => {
      if (searchValue.trim() && !searchHistory.includes(searchValue)) {
        setSearchHistory(prev => [searchValue, ...prev.slice(0, 4)]);
      }
    };
    const handleClear = () => {
      setValue('');
    };
    return <div className="w-96 space-y-4">\r
        <SearchInput placeholder="输入并按回车搜索..." value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => {
        if (e.key === 'Enter') {
          handleSearch(value);
        }
      }} onClear={handleClear} />\r
        \r
        {searchHistory.length > 0 && <div>\r
            <h4 className="text-sm font-medium mb-2">搜索历史</h4>\r
            <div className="space-y-1">\r
              {searchHistory.map((item, index) => <button key={index} className="block w-full text-left text-sm p-2 rounded hover:bg-muted" onClick={() => setValue(item)}>\r
                  {item}\r
                </button>)}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Q=["Default","FullWidth","WidthComparison","Interactive"];export{a as Default,t as FullWidth,l as Interactive,s as WidthComparison,Q as __namedExportsOrder,P as default};
