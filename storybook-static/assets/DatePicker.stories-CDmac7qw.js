import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r}from"./index-GiUgBvb1.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{D as n,b as v}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const J={title:"Data Entry/DatePicker",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"占位符文本"},disabled:{control:"boolean",description:"是否禁用"},formatStr:{control:"text",description:"日期格式字符串"},width:{control:"select",options:["auto","full"],description:"宽度模式"},showDropdowns:{control:"boolean",description:"是否显示月份和年份下拉选择器"}}},s={render:t=>{const[a,i]=r.useState(void 0);return e.jsx(n,{...t,value:a,onChange:i})},args:{placeholder:"请选择日期",width:"auto",showDropdowns:!0}},o={render:()=>{const[t,a]=r.useState(void 0);return e.jsx(v,{value:t,onChange:a,placeholder:"请选择日期范围",width:"auto",showDropdowns:!0})}},d={render:()=>{const[t,a]=r.useState(void 0),[i,w]=r.useState(new Date),[f,j]=r.useState(void 0);return e.jsxs("div",{className:"space-y-6 w-full max-w-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"基础单日期选择"}),e.jsx(n,{value:t,onChange:a,placeholder:"选择日期",width:"auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"已选择状态"}),e.jsx(n,{value:i,onChange:w,placeholder:"选择日期",width:"auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"禁用状态"}),e.jsx(n,{disabled:!0,placeholder:"禁用的日期选择器",width:"auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"全宽模式"}),e.jsx(n,{value:t,onChange:a,placeholder:"全宽显示",width:"full"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"日期范围选择"}),e.jsx(v,{value:f,onChange:j,placeholder:"选择日期范围",width:"auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"隐藏下拉选择器"}),e.jsx(n,{value:t,onChange:a,placeholder:"传统导航模式",showDropdowns:!1,width:"auto"})]})]})}};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker {...args} value={date} onChange={setDate} />;
  },
  args: {
    placeholder: '请选择日期',
    width: 'auto',
    showDropdowns: true
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,h,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
    return <DateRangePicker value={dateRange} onChange={setDateRange} placeholder="请选择日期范围" width="auto" showDropdowns={true} />;
  }
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var D,g,x;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>(undefined);
    const [date2, setDate2] = useState<Date | undefined>(new Date());
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
    return <div className="space-y-6 w-full max-w-lg">\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">基础单日期选择</h3>\r
          <DatePicker value={date1} onChange={setDate1} placeholder="选择日期" width="auto" />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-sm font-medium mb-2">已选择状态</h3>\r
          <DatePicker value={date2} onChange={setDate2} placeholder="选择日期" width="auto" />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-sm font-medium mb-2">禁用状态</h3>\r
          <DatePicker disabled placeholder="禁用的日期选择器" width="auto" />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-sm font-medium mb-2">全宽模式</h3>\r
          <DatePicker value={date1} onChange={setDate1} placeholder="全宽显示" width="full" />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-sm font-medium mb-2">日期范围选择</h3>\r
          <DateRangePicker value={dateRange} onChange={setDateRange} placeholder="选择日期范围" width="auto" />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-sm font-medium mb-2">隐藏下拉选择器</h3>\r
          <DatePicker value={date1} onChange={setDate1} placeholder="传统导航模式" showDropdowns={false} width="auto" />\r
        </div>\r
      </div>;
  }
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const K=["Default","RangePicker","Examples"];export{s as Default,d as Examples,o as RangePicker,K as __namedExportsOrder,J as default};
