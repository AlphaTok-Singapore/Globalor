import{j as s}from"./jsx-runtime-CDt2p4po.js";import{B as e}from"./button-BOzJErBH.js";import{T as x,c as r}from"./toast-BISE-kuu.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const ds={title:"Feedback/Toast",component:x,parameters:{layout:"centered"},decorators:[T=>s.jsxs("div",{children:[s.jsx(T,{}),s.jsx(x,{})]})],tags:["autodocs"]},o={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>r("这是一个默认的 Toast 消息"),children:"显示默认 Toast"})})},a={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>r("任务完成",{description:"您的文件已成功上传到服务器"}),children:"带描述的 Toast"})})},t={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>r.success("操作成功",{description:"您的设置已保存"}),children:"成功 Toast"})})},c={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{variant:"destructive",onClick:()=>r.error("操作失败",{description:"无法连接到服务器，请稍后重试"}),children:"错误 Toast"})})},i={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>r.warning("注意",{description:"您的会话即将过期，请保存您的工作"}),children:"警告 Toast"})})},n={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>r.info("信息",{description:"新功能已上线，快来体验吧！"}),children:"信息 Toast"})})},d={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>r.loading("正在上传文件...",{duration:2e3}),children:"加载 Toast"})})},l={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>r("您有新消息",{description:"点击查看详情",action:{label:"查看",onClick:()=>{console.log("查看消息"),r.success("已查看消息")}}}),children:"带操作按钮的 Toast"})})},m={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>{const T=new Promise(($,ss)=>{setTimeout(()=>{Math.random()>.5?$("上传成功"):ss("上传失败")},2e3)});r.promise(T,{loading:"正在上传文件...",success:"文件上传成功！",error:"文件上传失败"})},children:"Promise Toast"})})},p={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>r("这个消息会在 10 秒后自动消失",{duration:1e4}),children:"自定义持续时间"})})},u={render:()=>s.jsx("div",{className:"space-y-4",children:s.jsx(e,{onClick:()=>{r.success("第一个成功消息"),setTimeout(()=>r.error("第二个错误消息"),500),setTimeout(()=>r.warning("第三个警告消息"),1e3)},children:"显示多个 Toast"})})},v={render:()=>s.jsxs("div",{className:"space-y-4 flex gap-4",children:[s.jsx(e,{onClick:()=>{r("消息 1"),r("消息 2"),r("消息 3")},children:"显示多个消息"}),s.jsx(e,{variant:"outline",onClick:()=>r.dismiss(),children:"关闭所有 Toast"})]})};var g,h,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast('这是一个默认的 Toast 消息')}>\r
        显示默认 Toast\r
      </Button>\r
    </div>
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var C,k,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast('任务完成', {
      description: '您的文件已成功上传到服务器'
    })}>\r
        带描述的 Toast\r
      </Button>\r
    </div>
}`,...(B=(k=a.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var y,N,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast.success('操作成功', {
      description: '您的设置已保存'
    })}>\r
        成功 Toast\r
      </Button>\r
    </div>
}`,...(f=(N=t.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var S,D,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button variant="destructive" onClick={() => toast.error('操作失败', {
      description: '无法连接到服务器，请稍后重试'
    })}>\r
        错误 Toast\r
      </Button>\r
    </div>
}`,...(w=(D=c.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var P,W,A;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast.warning('注意', {
      description: '您的会话即将过期，请保存您的工作'
    })}>\r
        警告 Toast\r
      </Button>\r
    </div>
}`,...(A=(W=i.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var E,M,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast.info('信息', {
      description: '新功能已上线，快来体验吧！'
    })}>\r
        信息 Toast\r
      </Button>\r
    </div>
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var I,L,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast.loading('正在上传文件...', {
      duration: 2000
    })}>\r
        加载 Toast\r
      </Button>\r
    </div>
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var F,O,R;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast('您有新消息', {
      description: '点击查看详情',
      action: {
        label: '查看',
        onClick: () => {
          console.log('查看消息');
          toast.success('已查看消息');
        }
      }
    })}>\r
        带操作按钮的 Toast\r
      </Button>\r
    </div>
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,z,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => {
      const promise = new Promise<string>((resolve: (value: string) => void, reject: (reason?: string) => void) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve('上传成功');
          } else {
            reject('上传失败');
          }
        }, 2000);
      });
      toast.promise(promise, {
        loading: '正在上传文件...',
        success: '文件上传成功！',
        error: '文件上传失败'
      });
    }}>\r
        Promise Toast\r
      </Button>\r
    </div>
}`,...(G=(z=m.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast('这个消息会在 10 秒后自动消失', {
      duration: 10000
    })}>\r
        自定义持续时间\r
      </Button>\r
    </div>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,V;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => {
      toast.success('第一个成功消息');
      setTimeout(() => toast.error('第二个错误消息'), 500);
      setTimeout(() => toast.warning('第三个警告消息'), 1000);
    }}>\r
        显示多个 Toast\r
      </Button>\r
    </div>
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 flex gap-4">\r
      <Button onClick={() => {
      toast('消息 1');
      toast('消息 2');
      toast('消息 3');
    }}>\r
        显示多个消息\r
      </Button>\r
      <Button variant="outline" onClick={() => toast.dismiss()}>\r
        关闭所有 Toast\r
      </Button>\r
    </div>
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ls=["Default","WithDescription","Success","Error","Warning","Info","Loading","WithActions","PromiseToast","CustomDuration","MultipleToasts","DismissAll"];export{p as CustomDuration,o as Default,v as DismissAll,c as Error,n as Info,d as Loading,u as MultipleToasts,m as PromiseToast,t as Success,i as Warning,l as WithActions,a as WithDescription,ls as __namedExportsOrder,ds as default};
