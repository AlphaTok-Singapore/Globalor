import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as r}from"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import{I as C}from"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{j as T}from"./page-header-CCd0yR5Z.js";import{S as i,a as n,b as c,c as m,d as t}from"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const J={title:"Layout/PageHeader",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["title-only","title-with-actions","title-with-toolbar"]},showBack:{control:"boolean"},title:{control:"text"}}},a={args:{variant:"title-only",title:"页面标题",containerClassName:"p-6"}},l={args:{variant:"title-only",title:"带返回按钮的页面",showBack:!0,onBackClick:()=>alert("返回按钮被点击"),containerClassName:"p-6"}},s={args:{variant:"title-with-actions",title:"用户管理",showBack:!0,actions:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",size:"sm",children:"导出数据"}),e.jsx(r,{size:"sm",children:"添加用户"})]}),containerClassName:"p-6"}},o={args:{variant:"title-with-toolbar",title:"订单管理",showBack:!0,filters:e.jsxs(e.Fragment,{children:[e.jsx(C,{placeholder:"搜索订单...",className:"w-64"}),e.jsxs(i,{children:[e.jsx(n,{children:e.jsx(c,{placeholder:"订单状态"})}),e.jsxs(m,{children:[e.jsx(t,{value:"all",children:"全部"}),e.jsx(t,{value:"pending",children:"待处理"}),e.jsx(t,{value:"processing",children:"处理中"}),e.jsx(t,{value:"completed",children:"已完成"}),e.jsx(t,{value:"cancelled",children:"已取消"})]})]}),e.jsxs(i,{children:[e.jsx(n,{children:e.jsx(c,{placeholder:"时间范围"})}),e.jsxs(m,{children:[e.jsx(t,{value:"today",children:"今天"}),e.jsx(t,{value:"week",children:"本周"}),e.jsx(t,{value:"month",children:"本月"}),e.jsx(t,{value:"quarter",children:"本季度"})]})]})]}),toolbarActions:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",size:"sm",children:"批量导出"}),e.jsx(r,{variant:"outline",size:"sm",children:"设置"}),e.jsx(r,{size:"sm",children:"批量操作"})]}),containerClassName:"p-6",headerClassName:"space-y-4"}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'title-only',
    title: '页面标题',
    containerClassName: 'p-6'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,S,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'title-only',
    title: '带返回按钮的页面',
    showBack: true,
    onBackClick: () => alert('返回按钮被点击'),
    containerClassName: 'p-6'
  }
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var v,x,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'title-with-actions',
    title: '用户管理',
    showBack: true,
    actions: <>\r
        <Button variant="outline" size="sm">导出数据</Button>\r
        <Button size="sm">添加用户</Button>\r
      </>,
    containerClassName: 'p-6'
  }
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var B,I,w;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'title-with-toolbar',
    title: '订单管理',
    showBack: true,
    filters: <>\r
        <Input placeholder="搜索订单..." className="w-64" />\r
        <Select>\r
          <SelectTrigger>\r
            <SelectValue placeholder="订单状态" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="all">全部</SelectItem>\r
            <SelectItem value="pending">待处理</SelectItem>\r
            <SelectItem value="processing">处理中</SelectItem>\r
            <SelectItem value="completed">已完成</SelectItem>\r
            <SelectItem value="cancelled">已取消</SelectItem>\r
          </SelectContent>\r
        </Select>\r
        <Select>\r
          <SelectTrigger>\r
            <SelectValue placeholder="时间范围" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="today">今天</SelectItem>\r
            <SelectItem value="week">本周</SelectItem>\r
            <SelectItem value="month">本月</SelectItem>\r
            <SelectItem value="quarter">本季度</SelectItem>\r
          </SelectContent>\r
        </Select>\r
      </>,
    toolbarActions: <>\r
        <Button variant="outline" size="sm">批量导出</Button>\r
        <Button variant="outline" size="sm">设置</Button>\r
        <Button size="sm">批量操作</Button>\r
      </>,
    containerClassName: 'p-6',
    headerClassName: 'space-y-4'
  }
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const K=["TitleOnly","TitleWithBack","TitleWithActions","TitleWithToolbar"];export{a as TitleOnly,s as TitleWithActions,l as TitleWithBack,o as TitleWithToolbar,K as __namedExportsOrder,J as default};
