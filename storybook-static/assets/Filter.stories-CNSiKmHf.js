import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r}from"./index-GiUgBvb1.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{F as a}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const X={title:"Data Display/Filter",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},size:{control:{type:"radio"},options:["sm","default","lg"]},allowMultiple:{control:{type:"boolean"}}}},o={render:s=>{const[l,t]=r.useState([]),u=[{value:"all",label:"全部"},{value:"pending",label:"待处理"},{value:"processing",label:"处理中"},{value:"completed",label:"已完成"},{value:"cancelled",label:"已取消"}];return e.jsxs("div",{className:"w-96",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"状态筛选"}),e.jsx(a,{...s,options:u,selectedValues:l,onSelectedValuesChange:t})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["已选择: ",l.length>0?l.join(", "):"无"]})]})},args:{orientation:"horizontal",size:"default",allowMultiple:!0}},d={render:()=>{const[s,l]=r.useState(["medium"]),t=[{value:"low",label:"低优先级"},{value:"medium",label:"中优先级"},{value:"high",label:"高优先级"},{value:"urgent",label:"紧急"}];return e.jsxs("div",{className:"w-96",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"优先级（单选）"}),e.jsx(a,{options:t,selectedValues:s,onSelectedValuesChange:l,allowMultiple:!1})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["已选择: ",s.length>0?s.join(", "):"无"]})]})}},i={render:()=>{const[s,l]=r.useState(["frontend"]),[t,u]=r.useState(["backend"]),[y,O]=r.useState(["mobile"]),m=[{value:"frontend",label:"前端"},{value:"backend",label:"后端"},{value:"mobile",label:"移动端"},{value:"devops",label:"DevOps"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"小尺寸"}),e.jsx(a,{options:m,selectedValues:s,onSelectedValuesChange:l,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"默认尺寸"}),e.jsx(a,{options:m,selectedValues:t,onSelectedValuesChange:u,size:"default"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"大尺寸"}),e.jsx(a,{options:m,selectedValues:y,onSelectedValuesChange:O,size:"lg"})]})]})}},n={render:()=>{const[s,l]=r.useState(["design","development"]),t=[{value:"design",label:"设计"},{value:"development",label:"开发"},{value:"testing",label:"测试"},{value:"deployment",label:"部署"},{value:"maintenance",label:"维护"}];return e.jsxs("div",{className:"w-48",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"项目阶段"}),e.jsx(a,{options:t,selectedValues:s,onSelectedValuesChange:l,orientation:"vertical"})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["已选择: ",s.length>0?s.join(", "):"无"]})]})}},c={render:()=>{const[s,l]=r.useState(["active"]),t=[{value:"active",label:"活跃"},{value:"inactive",label:"非活跃"},{value:"pending",label:"待审核",disabled:!0},{value:"suspended",label:"暂停",disabled:!0},{value:"archived",label:"已归档"}];return e.jsxs("div",{className:"w-96",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"用户状态"}),e.jsx(a,{options:t,selectedValues:s,onSelectedValuesChange:l})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["已选择: ",s.length>0?s.join(", "):"无"]})]})}};var p,v,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const options: FilterOption[] = [{
      value: 'all',
      label: '全部'
    }, {
      value: 'pending',
      label: '待处理'
    }, {
      value: 'processing',
      label: '处理中'
    }, {
      value: 'completed',
      label: '已完成'
    }, {
      value: 'cancelled',
      label: '已取消'
    }];
    return <div className="w-96">\r
        <div className="mb-4">\r
          <h3 className="text-sm font-medium mb-2">状态筛选</h3>\r
          <FilterGroup {...args} options={options} selectedValues={selectedValues} onSelectedValuesChange={setSelectedValues} />\r
        </div>\r
        <div className="text-xs text-muted-foreground">\r
          已选择: {selectedValues.length > 0 ? selectedValues.join(', ') : '无'}\r
        </div>\r
      </div>;
  },
  args: {
    orientation: 'horizontal',
    size: 'default',
    allowMultiple: true
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,V,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['medium']);
    const options: FilterOption[] = [{
      value: 'low',
      label: '低优先级'
    }, {
      value: 'medium',
      label: '中优先级'
    }, {
      value: 'high',
      label: '高优先级'
    }, {
      value: 'urgent',
      label: '紧急'
    }];
    return <div className="w-96">\r
        <div className="mb-4">\r
          <h3 className="text-sm font-medium mb-2">优先级（单选）</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues} onSelectedValuesChange={setSelectedValues} allowMultiple={false} />\r
        </div>\r
        <div className="text-xs text-muted-foreground">\r
          已选择: {selectedValues.length > 0 ? selectedValues.join(', ') : '无'}\r
        </div>\r
      </div>;
  }
}`,...(x=(V=d.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var g,S,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues1, setSelectedValues1] = useState<string[]>(['frontend']);
    const [selectedValues2, setSelectedValues2] = useState<string[]>(['backend']);
    const [selectedValues3, setSelectedValues3] = useState<string[]>(['mobile']);
    const options: FilterOption[] = [{
      value: 'frontend',
      label: '前端'
    }, {
      value: 'backend',
      label: '后端'
    }, {
      value: 'mobile',
      label: '移动端'
    }, {
      value: 'devops',
      label: 'DevOps'
    }];
    return <div className="space-y-6">\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">小尺寸</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues1} onSelectedValuesChange={setSelectedValues1} size="sm" />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-sm font-medium mb-2">默认尺寸</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues2} onSelectedValuesChange={setSelectedValues2} size="default" />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-sm font-medium mb-2">大尺寸</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues3} onSelectedValuesChange={setSelectedValues3} size="lg" />\r
        </div>\r
      </div>;
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var N,f,w;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['design', 'development']);
    const options: FilterOption[] = [{
      value: 'design',
      label: '设计'
    }, {
      value: 'development',
      label: '开发'
    }, {
      value: 'testing',
      label: '测试'
    }, {
      value: 'deployment',
      label: '部署'
    }, {
      value: 'maintenance',
      label: '维护'
    }];
    return <div className="w-48">\r
        <div className="mb-4">\r
          <h3 className="text-sm font-medium mb-2">项目阶段</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues} onSelectedValuesChange={setSelectedValues} orientation="vertical" />\r
        </div>\r
        <div className="text-xs text-muted-foreground">\r
          已选择: {selectedValues.length > 0 ? selectedValues.join(', ') : '无'}\r
        </div>\r
      </div>;
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var F,z,C;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['active']);
    const options: FilterOption[] = [{
      value: 'active',
      label: '活跃'
    }, {
      value: 'inactive',
      label: '非活跃'
    }, {
      value: 'pending',
      label: '待审核',
      disabled: true
    }, {
      value: 'suspended',
      label: '暂停',
      disabled: true
    }, {
      value: 'archived',
      label: '已归档'
    }];
    return <div className="w-96">\r
        <div className="mb-4">\r
          <h3 className="text-sm font-medium mb-2">用户状态</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues} onSelectedValuesChange={setSelectedValues} />\r
        </div>\r
        <div className="text-xs text-muted-foreground">\r
          已选择: {selectedValues.length > 0 ? selectedValues.join(', ') : '无'}\r
        </div>\r
      </div>;
  }
}`,...(C=(z=c.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const Y=["Default","SingleSelect","Sizes","VerticalLayout","WithDisabledOptions"];export{o as Default,d as SingleSelect,i as Sizes,n as VerticalLayout,c as WithDisabledOptions,Y as __namedExportsOrder,X as default};
