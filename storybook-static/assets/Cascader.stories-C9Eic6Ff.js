import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as b}from"./index-GiUgBvb1.js";import{C as h}from"./cascader-BW_rWrKa.js";import"./utils-z-I-gj-J.js";import"./index-CROobee-.js";import"./createLucideIcon-Do1tV511.js";const o=[{value:"electronics",label:"电子产品",children:[{value:"phones",label:"手机",children:[{value:"iphone",label:"iPhone"},{value:"samsung",label:"Samsung"},{value:"huawei",label:"Huawei"}]},{value:"computers",label:"电脑",children:[{value:"laptop",label:"笔记本"},{value:"desktop",label:"台式机"},{value:"tablet",label:"平板电脑"}]},{value:"accessories",label:"配件",children:[{value:"charger",label:"充电器"},{value:"case",label:"保护壳"},{value:"headphones",label:"耳机"}]}]},{value:"clothing",label:"服装",children:[{value:"mens",label:"男装",children:[{value:"shirts",label:"衬衫"},{value:"pants",label:"裤子"},{value:"shoes",label:"鞋子"}]},{value:"womens",label:"女装",children:[{value:"dresses",label:"连衣裙"},{value:"tops",label:"上衣"},{value:"skirts",label:"裙子"}]}]},{value:"books",label:"图书",children:[{value:"fiction",label:"小说",children:[{value:"mystery",label:"悬疑"},{value:"romance",label:"言情"},{value:"scifi",label:"科幻"}]},{value:"nonfiction",label:"非小说",children:[{value:"history",label:"历史"},{value:"science",label:"科学"},{value:"biography",label:"传记"}]}]}],q=[{value:"frontend",label:"前端开发",children:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"}]},{value:"backend",label:"后端开发",children:[{value:"nodejs",label:"Node.js"},{value:"python",label:"Python"},{value:"java",label:"Java"}]},{value:"mobile",label:"移动开发",children:[{value:"ios",label:"iOS"},{value:"android",label:"Android"},{value:"flutter",label:"Flutter"}]}],Q={title:"Data Entry/Cascader",component:h,parameters:{layout:"centered",docs:{description:{component:"级联选择组件，支持多级数据选择。适用于有层级关系的数据选择场景，如分类选择、地区选择等。"}}},tags:["autodocs"],argTypes:{width:{control:{type:"radio"},options:["auto","fill"],description:"宽度模式：auto（自适应）、fill（填满容器）"},maxLevel:{control:{type:"radio"},options:[2,3],description:"最大级联层级"},disabled:{control:{type:"boolean"},description:"是否禁用"},allowClear:{control:{type:"boolean"},description:"是否允许清空"}}},n=l=>{const[e,r]=b.useState([]);return a.jsxs("div",{className:"w-96 space-y-4",children:[a.jsx(h,{...l,value:e,onChange:(s,H)=>{r(s),console.log("选择值:",s),console.log("选择选项:",H)}}),a.jsxs("div",{className:"p-3 bg-gray-50 rounded text-sm",children:[a.jsx("div",{className:"font-medium mb-2",children:"选择结果："}),a.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:JSON.stringify({value:e,path:e.join(" > ")},null,2)})]})]})},t={render:n,args:{options:o,placeholder:"请选择分类",width:"auto",maxLevel:3,allowClear:!0}},i={render:n,args:{options:q,placeholder:"请选择技术栈",width:"auto",maxLevel:2,allowClear:!0},parameters:{docs:{description:{story:"限制为两级级联选择，适用于相对简单的分类场景。"}}}},d={render:l=>{const[e,r]=b.useState([]);return a.jsxs("div",{className:"w-full max-w-md space-y-4",children:[a.jsx(h,{...l,value:e,onChange:r}),a.jsxs("div",{className:"p-3 bg-gray-50 rounded text-sm",children:[a.jsx("div",{className:"font-medium mb-2",children:"选择结果："}),a.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:JSON.stringify({value:e,path:e.join(" > ")},null,2)})]})]})},args:{options:o,placeholder:"填满容器宽度",width:"fill",maxLevel:3,allowClear:!0},parameters:{docs:{description:{story:"级联选择器占满容器的全部宽度。"}}}},c={render:n,args:{options:o,placeholder:"禁用状态",width:"auto",maxLevel:3,disabled:!0,allowClear:!0},parameters:{docs:{description:{story:"禁用状态的级联选择器。"}}}},u={render:n,args:{options:o,placeholder:"不可清空",width:"auto",maxLevel:3,allowClear:!1},parameters:{docs:{description:{story:"不显示清空按钮的版本。"}}}},p={render:l=>{const[e,r]=b.useState(["electronics","phones","iphone"]);return a.jsxs("div",{className:"w-96 space-y-4",children:[a.jsx(h,{...l,value:e,onChange:r}),a.jsxs("div",{className:"p-3 bg-gray-50 rounded text-sm",children:[a.jsx("div",{className:"font-medium mb-2",children:"选择结果："}),a.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:JSON.stringify({value:e,path:e.join(" > ")},null,2)})]})]})},args:{options:o,placeholder:"请选择分类",width:"auto",maxLevel:3,allowClear:!0},parameters:{docs:{description:{story:"带有默认选择值的级联选择器。"}}}},m={render:n,args:{options:[{value:"category1",label:"分类一",children:[{value:"item1",label:"选项1"},{value:"item2",label:"选项2（禁用）",disabled:!0},{value:"item3",label:"选项3"}]},{value:"category2",label:"分类二（禁用）",disabled:!0,children:[{value:"item4",label:"选项4"},{value:"item5",label:"选项5"}]},{value:"category3",label:"分类三",children:[{value:"item6",label:"选项6"},{value:"item7",label:"选项7"}]}],placeholder:"包含禁用选项",width:"auto",maxLevel:2,allowClear:!0},parameters:{docs:{description:{story:"演示包含禁用选项的级联选择器。"}}}},v={render:n,args:{options:[{value:"short",label:"短列表",children:[{value:"short1",label:"短选项1"},{value:"short2",label:"短选项2"}]},{value:"medium",label:"中等列表",children:Array.from({length:8},(l,e)=>({value:`medium${e+1}`,label:`中等选项${e+1}`}))},{value:"long",label:"长列表",children:Array.from({length:20},(l,e)=>({value:`long${e+1}`,label:`长选项${e+1}`,children:e<3?Array.from({length:15},(r,s)=>({value:`long${e+1}_sub${s+1}`,label:`长选项${e+1}-子选项${s+1}`})):void 0}))}],placeholder:"测试不同长度的列",width:"auto",maxLevel:3,allowClear:!0},parameters:{docs:{description:{story:'测试当不同级别的列有不同长度时的表现。第一列有3个选项，第二列中"长列表"有20个选项，第三列有15个选项。'}}}};var g,w,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: '请选择分类',
    width: 'auto',
    maxLevel: 3,
    allowClear: true
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var x,f,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: twoLevelOptions,
    placeholder: '请选择技术栈',
    width: 'auto',
    maxLevel: 2,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: '限制为两级级联选择，适用于相对简单的分类场景。'
      }
    }
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var N,j,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: any) => {
    const [value, setValue] = useState<CascaderValue>([]);
    return <div className="w-full max-w-md space-y-4">\r
        <Cascader {...args} value={value} onChange={setValue} />\r
        <div className="p-3 bg-gray-50 rounded text-sm">\r
          <div className="font-medium mb-2">选择结果：</div>\r
          <pre className="text-xs whitespace-pre-wrap">\r
            {JSON.stringify({
            value,
            path: value.join(' > ')
          }, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  },
  args: {
    options: mockOptions,
    placeholder: '填满容器宽度',
    width: 'fill',
    maxLevel: 3,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: '级联选择器占满容器的全部宽度。'
      }
    }
  }
}`,...(L=(j=d.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var S,O,$;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: '禁用状态',
    width: 'auto',
    maxLevel: 3,
    disabled: true,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: '禁用状态的级联选择器。'
      }
    }
  }
}`,...($=(O=c.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var D,V,k;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: '不可清空',
    width: 'auto',
    maxLevel: 3,
    allowClear: false
  },
  parameters: {
    docs: {
      description: {
        story: '不显示清空按钮的版本。'
      }
    }
  }
}`,...(k=(V=u.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var T,_,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: any) => {
    const [value, setValue] = useState<CascaderValue>(['electronics', 'phones', 'iphone']);
    return <div className="w-96 space-y-4">\r
        <Cascader {...args} value={value} onChange={setValue} />\r
        <div className="p-3 bg-gray-50 rounded text-sm">\r
          <div className="font-medium mb-2">选择结果：</div>\r
          <pre className="text-xs whitespace-pre-wrap">\r
            {JSON.stringify({
            value,
            path: value.join(' > ')
          }, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  },
  args: {
    options: mockOptions,
    placeholder: '请选择分类',
    width: 'auto',
    maxLevel: 3,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: '带有默认选择值的级联选择器。'
      }
    }
  }
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var J,W,E;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: [{
      value: 'category1',
      label: '分类一',
      children: [{
        value: 'item1',
        label: '选项1'
      }, {
        value: 'item2',
        label: '选项2（禁用）',
        disabled: true
      }, {
        value: 'item3',
        label: '选项3'
      }]
    }, {
      value: 'category2',
      label: '分类二（禁用）',
      disabled: true,
      children: [{
        value: 'item4',
        label: '选项4'
      }, {
        value: 'item5',
        label: '选项5'
      }]
    }, {
      value: 'category3',
      label: '分类三',
      children: [{
        value: 'item6',
        label: '选项6'
      }, {
        value: 'item7',
        label: '选项7'
      }]
    }],
    placeholder: '包含禁用选项',
    width: 'auto',
    maxLevel: 2,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: '演示包含禁用选项的级联选择器。'
      }
    }
  }
}`,...(E=(W=m.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var F,P,R;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: [{
      value: 'short',
      label: '短列表',
      children: [{
        value: 'short1',
        label: '短选项1'
      }, {
        value: 'short2',
        label: '短选项2'
      }]
    }, {
      value: 'medium',
      label: '中等列表',
      children: Array.from({
        length: 8
      }, (_, i) => ({
        value: \`medium\${i + 1}\`,
        label: \`中等选项\${i + 1}\`
      }))
    }, {
      value: 'long',
      label: '长列表',
      children: Array.from({
        length: 20
      }, (_, i) => ({
        value: \`long\${i + 1}\`,
        label: \`长选项\${i + 1}\`,
        children: i < 3 ? Array.from({
          length: 15
        }, (_, j) => ({
          value: \`long\${i + 1}_sub\${j + 1}\`,
          label: \`长选项\${i + 1}-子选项\${j + 1}\`
        })) : undefined
      }))
    }],
    placeholder: '测试不同长度的列',
    width: 'auto',
    maxLevel: 3,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: '测试当不同级别的列有不同长度时的表现。第一列有3个选项，第二列中"长列表"有20个选项，第三列有15个选项。'
      }
    }
  }
}`,...(R=(P=v.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const U=["Default","TwoLevel","FillWidth","Disabled","NoClear","WithDefaultValue","WithDisabledOptions","DifferentColumnLengths"];export{t as Default,v as DifferentColumnLengths,c as Disabled,d as FillWidth,u as NoClear,i as TwoLevel,p as WithDefaultValue,m as WithDisabledOptions,U as __namedExportsOrder,Q as default};
