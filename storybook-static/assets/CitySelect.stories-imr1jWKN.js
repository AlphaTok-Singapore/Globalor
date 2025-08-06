import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as R}from"./index-GiUgBvb1.js";import{C as u}from"./city-select-BCBS-J65.js";import"./utils-z-I-gj-J.js";import"./index-CROobee-.js";import"./index-DAEUSR7T.js";import"./tags-3RK0HEEA.js";import"./createLucideIcon-Do1tV511.js";import"./cascader-BW_rWrKa.js";const Q={title:"Data Entry/CitySelect",component:u,parameters:{layout:"centered",docs:{description:{component:"基于现有 Select 和 Cascader 组件的城市选择器，支持不同精细度的地区选择（省份、省市、省市区）。使用中华人民共和国民政部最新数据。"}}},tags:["autodocs"],argTypes:{level:{control:{type:"radio"},options:["province","city","area"],description:"选择精细度：province（省份）、city（省市）、area（省市区）"},disabled:{control:{type:"boolean"},description:"是否禁用"},width:{control:{type:"radio"},options:["auto","full"],description:"宽度模式"},changeOnSelect:{control:{type:"boolean"},description:"是否在选择任何级别时都触发变化。启用后，选择直辖市时可以直接确认而无需选择到区县"}}},r=p=>{const[a,m]=R.useState({});return e.jsxs("div",{className:"w-96",children:[e.jsx(u,{...p,value:a,onValueChange:m}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded text-sm",children:[e.jsx("div",{className:"font-medium mb-2",children:"选择结果："}),e.jsx("pre",{className:"text-xs",children:JSON.stringify(a,null,2)})]})]})},t={render:r,args:{level:"area",placeholder:"请选择地区",width:"auto"}},s={render:r,args:{level:"province",placeholder:"请选择省份",width:"auto"},parameters:{docs:{description:{story:"只选择到省份级别，适用于粗粒度的地区选择场景。使用 Select 组件实现单选。"}}}},o={render:r,args:{level:"city",placeholder:"请选择省市",width:"auto"},parameters:{docs:{description:{story:"选择到市级，适用于中等粒度的地区选择场景。使用 Cascader 组件实现级联选择。"}}}},n={render:r,args:{level:"area",placeholder:"请选择省市区",width:"auto"},parameters:{docs:{description:{story:"选择到区县级，提供最细粒度的地区选择。使用 Cascader 组件实现三级级联选择。"}}}},c={render:r,args:{level:"area",width:"full"},parameters:{docs:{description:{story:"占满容器宽度的版本。"}}}},l={render:r,args:{level:"area",disabled:!0,width:"auto"},parameters:{docs:{description:{story:"禁用状态的城市选择器。"}}}},d={render:p=>{const[a,m]=R.useState({province:{code:"110000",name:"北京市"},city:{code:"110100",name:"北京市"},area:{code:"110101",name:"东城区"}});return e.jsxs("div",{className:"w-96",children:[e.jsx(u,{...p,value:a,onValueChange:m}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded text-sm",children:[e.jsx("div",{className:"font-medium mb-2",children:"选择结果："}),e.jsx("pre",{className:"text-xs",children:JSON.stringify(a,null,2)})]})]})},args:{level:"area",width:"auto"},parameters:{docs:{description:{story:"带有预设值的城市选择器，显示北京市东城区。"}}}},i={render:r,args:{level:"city",placeholder:"请选择所在城市",width:"auto",changeOnSelect:!0},parameters:{docs:{description:{story:'适用于"所在城市"选择的场景。启用 changeOnSelect 后，可以在任何级别完成选择。对于直辖市（如北京、上海），用户可以直接选择"北京市"而无需继续选择到区县级别。对于普通城市，用户可以选择"广东省 → 深圳市"即可完成选择。'}}}};var h,g,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'area',
    placeholder: '请选择地区',
    width: 'auto'
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,S,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'province',
    placeholder: '请选择省份',
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: '只选择到省份级别，适用于粗粒度的地区选择场景。使用 Select 组件实现单选。'
      }
    }
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var x,w,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'city',
    placeholder: '请选择省市',
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: '选择到市级，适用于中等粒度的地区选择场景。使用 Cascader 组件实现级联选择。'
      }
    }
  }
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var N,b,O;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'area',
    placeholder: '请选择省市区',
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: '选择到区县级，提供最细粒度的地区选择。使用 Cascader 组件实现三级级联选择。'
      }
    }
  }
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var j,V,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'area',
    width: 'full'
  },
  parameters: {
    docs: {
      description: {
        story: '占满容器宽度的版本。'
      }
    }
  }
}`,...(T=(V=c.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var D,W,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'area',
    disabled: true,
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: '禁用状态的城市选择器。'
      }
    }
  }
}`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var L,J,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => {
    const [value, setValue] = useState<CitySelectValue>({
      province: {
        code: '110000',
        name: '北京市'
      },
      city: {
        code: '110100',
        name: '北京市'
      },
      area: {
        code: '110101',
        name: '东城区'
      }
    });
    return <div className="w-96">\r
        <CitySelect {...args} value={value} onValueChange={setValue} />\r
        <div className="mt-4 p-3 bg-gray-50 rounded text-sm">\r
          <div className="font-medium mb-2">选择结果：</div>\r
          <pre className="text-xs">{JSON.stringify(value, null, 2)}</pre>\r
        </div>\r
      </div>;
  },
  args: {
    level: 'area',
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: '带有预设值的城市选择器，显示北京市东城区。'
      }
    }
  }
}`,...(A=(J=d.parameters)==null?void 0:J.docs)==null?void 0:A.source}}};var F,P,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'city',
    placeholder: '请选择所在城市',
    width: 'auto',
    changeOnSelect: true
  },
  parameters: {
    docs: {
      description: {
        story: '适用于"所在城市"选择的场景。启用 changeOnSelect 后，可以在任何级别完成选择。对于直辖市（如北京、上海），用户可以直接选择"北京市"而无需继续选择到区县级别。对于普通城市，用户可以选择"广东省 → 深圳市"即可完成选择。'
      }
    }
  }
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const U=["Default","ProvinceOnly","CityLevel","AreaLevel","FullWidth","Disabled","WithDefaultValue","CitySelectionWithChangeOnSelect"];export{n as AreaLevel,o as CityLevel,i as CitySelectionWithChangeOnSelect,t as Default,l as Disabled,c as FullWidth,s as ProvinceOnly,d as WithDefaultValue,U as __namedExportsOrder,Q as default};
