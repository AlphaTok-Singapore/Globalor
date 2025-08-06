import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as N}from"./index-GiUgBvb1.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{s}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const ze={title:"Navigation/Steps",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["default","sm"]},orientation:{control:{type:"select"},options:["horizontal","vertical"]},clickable:{control:"boolean"},current:{control:{type:"number",min:0,max:4}}}},r=[{id:"step1",title:"个人信息",description:"填写您的基本信息"},{id:"step2",title:"联系方式",description:"提供联系电话和邮箱"},{id:"step3",title:"身份验证",description:"上传身份证明文件"},{id:"step4",title:"完成注册",description:"确认信息并提交"}],c={args:{steps:r,current:1},render:t=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...t})})},d={args:{steps:r,current:1,size:"sm"},render:t=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...t})})},o={args:{steps:r,current:1,clickable:!0},render:t=>{const[i,a]=N.useState(t.current||0);return e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...t,current:i,onStepClick:n=>a(n)})})}},p={args:{steps:[{id:"step1",title:"订单确认",description:"确认订单信息",status:"completed"},{id:"step2",title:"付款",description:"选择付款方式",status:"current"},{id:"step3",title:"配送",description:"商品配送中",status:"pending"},{id:"step4",title:"完成",description:"订单完成",status:"pending"}]},render:t=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...t})})},l={args:{steps:[{id:"step1",title:"文件上传",description:"上传所需文件",status:"completed"},{id:"step2",title:"文件验证",description:"验证文件格式",status:"error"},{id:"step3",title:"处理完成",description:"文件处理完成",status:"pending"}]}},u={args:{steps:[{id:"step1",title:"项目创建",description:"创建新项目"},{id:"step2",title:"需求分析",description:"分析项目需求"},{id:"step3",title:"设计阶段",description:"UI/UX设计"},{id:"step4",title:"开发阶段",description:"代码开发"},{id:"step5",title:"测试阶段",description:"功能测试"},{id:"step6",title:"部署上线",description:"项目上线"}],current:3,size:"sm"}},m={args:{steps:r},render:()=>{const[t,i]=N.useState(0),a=()=>{t<r.length-1&&i(t+1)},n=()=>{t>0&&i(t-1)},ne=ce=>{i(ce)};return e.jsxs("div",{className:"space-y-8",children:[e.jsx(s,{steps:r,current:t,clickable:!0,onStepClick:ne}),e.jsxs("div",{className:"flex gap-4 justify-center",children:[e.jsx("button",{onClick:n,disabled:t===0,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300",children:"上一步"}),e.jsx("button",{onClick:a,disabled:t===r.length-1,className:"px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600",children:"下一步"})]}),e.jsxs("div",{className:"text-center text-sm text-gray-600",children:["当前步骤: ",t+1," / ",r.length]})]})}},g={args:{steps:r},render:()=>e.jsxs("div",{className:"space-y-12 max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"默认尺寸"}),e.jsx(s,{steps:r,current:1})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"小尺寸"}),e.jsx(s,{steps:r,current:1,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"不同状态"}),e.jsx(s,{steps:[{id:"1",title:"已完成",description:"这一步已经完成",status:"completed"},{id:"2",title:"当前步骤",description:"正在进行中",status:"current"},{id:"3",title:"错误状态",description:"出现了错误",status:"error"},{id:"4",title:"待完成",description:"还未开始",status:"pending"}]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"无描述"}),e.jsx(s,{steps:[{id:"1",title:"步骤一"},{id:"2",title:"步骤二"},{id:"3",title:"步骤三"},{id:"4",title:"步骤四"}],current:2})]})]})},x={args:{steps:r,current:1,orientation:"vertical"},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(s,{...t})})},v={args:{steps:r,current:1,orientation:"vertical",size:"sm"},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(s,{...t})})},b={args:{steps:r,current:1,orientation:"vertical",clickable:!0},render:t=>{const[i,a]=N.useState(t.current||0);return e.jsx("div",{className:"max-w-md",children:e.jsx(s,{...t,current:i,onStepClick:n=>a(n)})})}},S={args:{steps:[{id:"step1",title:"需求分析",description:"收集和分析用户需求",status:"completed"},{id:"step2",title:"设计方案",description:"制定详细的设计方案",status:"completed"},{id:"step3",title:"开发实现",description:"按照设计方案进行开发",status:"current"},{id:"step4",title:"测试验收",description:"功能测试和用户验收",status:"pending"},{id:"step5",title:"部署上线",description:"正式部署到生产环境",status:"pending"}],orientation:"vertical"},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(s,{...t})})},h={args:{steps:[{id:"step1",title:"数据准备",description:"准备所需的数据文件",status:"completed"},{id:"step2",title:"数据处理",description:"处理和清洗数据",status:"error"},{id:"step3",title:"结果输出",description:"生成最终结果",status:"pending"}],orientation:"vertical"},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(s,{...t})})};var j,w,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1
  },
  render: args => <div className="w-full max-w-4xl">\r
      <Steps {...args} />\r
    </div>
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var f,y,k;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    size: 'sm'
  },
  render: args => <div className="w-full max-w-4xl">\r
      <Steps {...args} />\r
    </div>
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var V,z,W;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    clickable: true
  },
  render: args => {
    const [current, setCurrent] = useState(args.current || 0);
    return <div className="w-full max-w-4xl">\r
        <Steps {...args} current={current} onStepClick={step => setCurrent(step)} />\r
      </div>;
  }
}`,...(W=(z=o.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var E,P,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: '订单确认',
      description: '确认订单信息',
      status: 'completed'
    }, {
      id: 'step2',
      title: '付款',
      description: '选择付款方式',
      status: 'current'
    }, {
      id: 'step3',
      title: '配送',
      description: '商品配送中',
      status: 'pending'
    }, {
      id: 'step4',
      title: '完成',
      description: '订单完成',
      status: 'pending'
    }]
  },
  render: args => <div className="w-full max-w-4xl">\r
      <Steps {...args} />\r
    </div>
}`,...(I=(P=p.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var U,A,D;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: '文件上传',
      description: '上传所需文件',
      status: 'completed'
    }, {
      id: 'step2',
      title: '文件验证',
      description: '验证文件格式',
      status: 'error'
    }, {
      id: 'step3',
      title: '处理完成',
      description: '文件处理完成',
      status: 'pending'
    }]
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,X,_;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: '项目创建',
      description: '创建新项目'
    }, {
      id: 'step2',
      title: '需求分析',
      description: '分析项目需求'
    }, {
      id: 'step3',
      title: '设计阶段',
      description: 'UI/UX设计'
    }, {
      id: 'step4',
      title: '开发阶段',
      description: '代码开发'
    }, {
      id: 'step5',
      title: '测试阶段',
      description: '功能测试'
    }, {
      id: 'step6',
      title: '部署上线',
      description: '项目上线'
    }],
    current: 3,
    size: 'sm'
  }
}`,...(_=(X=u.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var O,R,T;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    steps: basicSteps
  },
  render: () => {
    const [current, setCurrent] = useState(0);
    const handleNext = () => {
      if (current < basicSteps.length - 1) {
        setCurrent(current + 1);
      }
    };
    const handlePrev = () => {
      if (current > 0) {
        setCurrent(current - 1);
      }
    };
    const handleStepClick = (step: number) => {
      setCurrent(step);
    };
    return <div className="space-y-8">\r
        <Steps steps={basicSteps} current={current} clickable onStepClick={handleStepClick} />\r
        <div className="flex gap-4 justify-center">\r
          <button onClick={handlePrev} disabled={current === 0} className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300">\r
            上一步\r
          </button>\r
          <button onClick={handleNext} disabled={current === basicSteps.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600">\r
            下一步\r
          </button>\r
        </div>\r
        <div className="text-center text-sm text-gray-600">\r
          当前步骤: {current + 1} / {basicSteps.length}\r
        </div>\r
      </div>;
  }
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,B,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps: basicSteps
  },
  render: () => {
    return <div className="space-y-12 max-w-4xl">\r
        <div>\r
          <h3 className="text-lg font-medium mb-4">默认尺寸</h3>\r
          <Steps steps={basicSteps} current={1} />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-lg font-medium mb-4">小尺寸</h3>\r
          <Steps steps={basicSteps} current={1} size="sm" />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-lg font-medium mb-4">不同状态</h3>\r
          <Steps steps={[{
          id: '1',
          title: '已完成',
          description: '这一步已经完成',
          status: 'completed'
        }, {
          id: '2',
          title: '当前步骤',
          description: '正在进行中',
          status: 'current'
        }, {
          id: '3',
          title: '错误状态',
          description: '出现了错误',
          status: 'error'
        }, {
          id: '4',
          title: '待完成',
          description: '还未开始',
          status: 'pending'
        }]} />\r
        </div>\r
        \r
        <div>\r
          <h3 className="text-lg font-medium mb-4">无描述</h3>\r
          <Steps steps={[{
          id: '1',
          title: '步骤一'
        }, {
          id: '2',
          title: '步骤二'
        }, {
          id: '3',
          title: '步骤三'
        }, {
          id: '4',
          title: '步骤四'
        }]} current={2} />\r
        </div>\r
      </div>;
  }
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical'
  },
  render: args => <div className="max-w-md">\r
      <Steps {...args} />\r
    </div>
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical',
    size: 'sm'
  },
  render: args => <div className="max-w-md">\r
      <Steps {...args} />\r
    </div>
}`,...(Q=(M=v.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical',
    clickable: true
  },
  render: args => {
    const [current, setCurrent] = useState(args.current || 0);
    return <div className="max-w-md">\r
        <Steps {...args} current={current} onStepClick={step => setCurrent(step)} />\r
      </div>;
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,se;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: '需求分析',
      description: '收集和分析用户需求',
      status: 'completed'
    }, {
      id: 'step2',
      title: '设计方案',
      description: '制定详细的设计方案',
      status: 'completed'
    }, {
      id: 'step3',
      title: '开发实现',
      description: '按照设计方案进行开发',
      status: 'current'
    }, {
      id: 'step4',
      title: '测试验收',
      description: '功能测试和用户验收',
      status: 'pending'
    }, {
      id: 'step5',
      title: '部署上线',
      description: '正式部署到生产环境',
      status: 'pending'
    }],
    orientation: 'vertical'
  },
  render: args => <div className="max-w-md">\r
      <Steps {...args} />\r
    </div>
}`,...(se=(te=S.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ie,ae;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: '数据准备',
      description: '准备所需的数据文件',
      status: 'completed'
    }, {
      id: 'step2',
      title: '数据处理',
      description: '处理和清洗数据',
      status: 'error'
    }, {
      id: 'step3',
      title: '结果输出',
      description: '生成最终结果',
      status: 'pending'
    }],
    orientation: 'vertical'
  },
  render: args => <div className="max-w-md">\r
      <Steps {...args} />\r
    </div>
}`,...(ae=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};const We=["Default","Small","Clickable","WithCustomStatus","WithError","LongProcess","Interactive","AllVariants","Vertical","VerticalSmall","VerticalClickable","VerticalWithCustomStatus","VerticalWithError"];export{g as AllVariants,o as Clickable,c as Default,m as Interactive,u as LongProcess,d as Small,x as Vertical,b as VerticalClickable,v as VerticalSmall,S as VerticalWithCustomStatus,h as VerticalWithError,p as WithCustomStatus,l as WithError,We as __namedExportsOrder,ze as default};
