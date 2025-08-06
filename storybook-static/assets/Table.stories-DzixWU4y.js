import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as C}from"./index-GiUgBvb1.js";import{B as h}from"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{x as T,y as j,z as x,B as c,E as a,G as u,H as l,C as D,I as ue,J as pe,K as je,N as ge,O as xe,Q as fe}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import{T as g}from"./tags-3RK0HEEA.js";import{c as We}from"./createLucideIcon-Do1tV511.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=We("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]),_e={title:"Data Display/Table",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{className:{control:"text"}}},H={render:()=>e.jsx("div",{className:"p-6",children:e.jsx(j,{bordered:!0,children:e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{variant:"status",children:"Status"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsxs(u,{children:[e.jsxs(c,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{variant:"status",children:e.jsx(g,{variant:"success",children:"Active"})}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]}),e.jsxs(c,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{variant:"status",children:e.jsx(g,{variant:"destructive",children:"Inactive"})}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"User"})]}),e.jsxs(c,{children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{variant:"status",children:e.jsx(g,{variant:"warning",children:"Pending"})}),e.jsx(l,{children:"bob@example.com"}),e.jsx(l,{children:"Moderator"})]})]})]})})})},S={render:()=>e.jsx("div",{className:"p-6",children:e.jsx(j,{bordered:!0,pageStickyHeader:!0,children:e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{children:"产品名称"}),e.jsx(a,{variant:"numeric",children:"价格"}),e.jsx(a,{variant:"numeric",children:"库存"}),e.jsx(a,{children:"分类"}),e.jsx(a,{children:"上架日期"}),e.jsx(a,{variant:"status",children:"状态"})]})}),e.jsx(u,{children:Array.from({length:15}).map((d,r)=>e.jsxs(c,{children:[e.jsxs(l,{children:["产品 ",r+1]}),e.jsxs(l,{variant:"numeric",children:["¥",(Math.random()*1e3).toFixed(2)]}),e.jsx(l,{variant:"numeric",children:Math.floor(Math.random()*500)}),e.jsx(l,{children:"电子产品"}),e.jsxs(l,{children:["2024-",String(Math.floor(Math.random()*12)+1).padStart(2,"0"),"-",String(Math.floor(Math.random()*28)+1).padStart(2,"0")]}),e.jsx(l,{variant:"status",children:e.jsx(g,{variant:r%3===0?"success":r%3===1?"destructive":"warning",children:r%3===0?"在售":r%3===1?"缺货":"预售"})})]},r))})]})})}),parameters:{layout:"fullscreen"}},y={render:()=>{const[d,r]=C.useState([]),[i,m]=C.useState(!1),b=[{id:"1",name:"John Doe",email:"john@example.com",role:"Admin"},{id:"2",name:"Jane Smith",email:"jane@example.com",role:"User"},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"Moderator"},{id:"4",name:"Alice Brown",email:"alice@example.com",role:"User"}],f=s=>{m(s),r(s?b.map(t=>t.id):[])},W=(s,t)=>{t?r([...d,s]):(r(d.filter(p=>p!==s)),m(!1))};return e.jsx("div",{className:"p-6",children:e.jsx(j,{bordered:!0,children:e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{className:"w-16 p-0 relative",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(D,{checked:i,onCheckedChange:s=>f(!!s),"aria-label":"Select all"})})}),e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"}),e.jsx(a,{children:"Actions"})]})}),e.jsx(u,{children:b.map(s=>e.jsxs(c,{className:d.includes(s.id)?"bg-muted/50":"",children:[e.jsx(l,{className:"w-16 p-0 relative",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(D,{checked:d.includes(s.id),onCheckedChange:t=>W(s.id,!!t),"aria-label":`Select ${s.name}`})})}),e.jsx(l,{children:s.name}),e.jsx(l,{children:s.email}),e.jsx(l,{children:s.role}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",children:"Edit"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",children:"View"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-sm text-destructive",children:"Delete"})]})})]},s.id))})]})})})}},w={render:()=>e.jsx("div",{className:"p-6",children:e.jsx(j,{bordered:!0,children:e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Status"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsx(u,{children:e.jsx(c,{children:e.jsx(l,{colSpan:4,children:e.jsx(ue,{icon:e.jsx(Ce,{className:"h-10 w-10"}),title:"No users found",description:"There are no users in your workspace yet. Invite some users to get started.",action:e.jsx(h,{children:"Invite Users"})})})})})]})})})},N={render:()=>e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"多列数据表格 - 横向滚动"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"当列数很多时，表格会自动显示横向滚动条。尝试在较小的屏幕或容器中查看效果。"})]}),e.jsx(j,{bordered:!0,children:e.jsxs(T,{className:"min-w-max",children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{cellWidth:"fit",children:"ID"}),e.jsx(a,{cellWidth:"fit",children:"姓名"}),e.jsx(a,{cellWidth:"fit",children:"邮箱地址"}),e.jsx(a,{cellWidth:"fit",children:"年龄"}),e.jsx(a,{cellWidth:"fit",children:"部门"}),e.jsx(a,{cellWidth:"fit",children:"职位"}),e.jsx(a,{cellWidth:"fit",children:"联系电话"}),e.jsx(a,{cellWidth:"fit",children:"入职日期"}),e.jsx(a,{cellWidth:"fit",children:"薪资等级"}),e.jsx(a,{cellWidth:"fit",children:"工作地点"}),e.jsx(a,{cellWidth:"fit",variant:"status",children:"状态"}),e.jsx(a,{cellWidth:"fit",children:"上级主管"}),e.jsx(a,{cellWidth:"fit",children:"项目组"}),e.jsx(a,{cellWidth:"auto",children:"备注信息"}),e.jsx(a,{cellWidth:"fit",children:"操作"})]})}),e.jsx(u,{children:Array.from({length:8}).map((d,r)=>e.jsxs(c,{children:[e.jsx(l,{cellWidth:"fit",children:1001+r}),e.jsxs(l,{cellWidth:"fit",children:["员工",r+1]}),e.jsxs(l,{cellWidth:"fit",children:["employee",r+1,"@company.com"]}),e.jsx(l,{cellWidth:"fit",variant:"numeric",children:25+r}),e.jsx(l,{cellWidth:"fit",children:"技术部"}),e.jsx(l,{cellWidth:"fit",children:r%3===0?"高级工程师":r%3===1?"前端工程师":"后端工程师"}),e.jsxs(l,{cellWidth:"fit",children:["+86 138-",String(1e3+r*11).padStart(4,"0"),"-",String(5678+r).padStart(4,"0")]}),e.jsxs(l,{cellWidth:"fit",variant:"date",children:["2024-0",r%6+1,"-",String(10+r).padStart(2,"0")]}),e.jsxs(l,{cellWidth:"fit",children:["P",r%4+6]}),e.jsx(l,{cellWidth:"fit",children:r%2===0?"北京总部":"上海分部"}),e.jsx(l,{cellWidth:"fit",variant:"status",children:e.jsx(g,{variant:r%3===0?"success":r%3===1?"primary":"warning",children:r%3===0?"在职":r%3===1?"试用期":"请假中"})}),e.jsxs(l,{cellWidth:"fit",children:["主管",Math.floor(r/2)+1]}),e.jsxs(l,{cellWidth:"fit",children:["项目组 ",String.fromCharCode(65+r%3)]}),e.jsx(l,{cellWidth:"auto",children:r%2===0?"表现优秀，积极主动":"技术能力强，团队协作佳"}),e.jsx(l,{cellWidth:"fit",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"查看"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"编辑"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs text-destructive",children:"删除"})]})})]},r))})]})})]})},k={render:()=>e.jsx("div",{className:"p-6 space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"列宽选型指南"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-md font-medium mb-2",children:"场景一：表格宽度 ≤ 容器宽度"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"优先基于各个字段的宽度情况来选择一个合适的固定宽度，最后一个列使用auto，把容器宽度占满。"}),e.jsx(j,{bordered:!0,children:e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{cellWidth:"xs",children:"ID"}),e.jsx(a,{cellWidth:"sm",children:"姓名"}),e.jsx(a,{cellWidth:"md",children:"电话"}),e.jsx(a,{cellWidth:"sm",children:"状态"}),e.jsx(a,{cellWidth:"auto",children:"备注说明"})]})}),e.jsx(u,{children:e.jsxs(c,{children:[e.jsx(l,{cellWidth:"xs",children:"001"}),e.jsx(l,{cellWidth:"sm",children:"张三"}),e.jsx(l,{cellWidth:"md",children:"138-0000-0000"}),e.jsx(l,{cellWidth:"sm",children:"活跃"}),e.jsx(l,{cellWidth:"auto",children:"这是一段较长的备注说明，会占用剩余的所有可用空间"})]})})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium mb-2",children:"场景二：表格宽度 > 容器宽度"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"若是宽度比较确定的字段（ID、电话号码、邮箱、日期 等等）优先使用fit (whitespace-nowrap)，如果宽度不是很确定的，则基于这个字段的数据的最大多数的长度的情况，来指定一个合适的固定宽度。"}),e.jsx(j,{bordered:!0,children:e.jsxs(T,{className:"min-w-max",children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{cellWidth:"fit",children:"ID"}),e.jsx(a,{cellWidth:"fit",children:"姓名"}),e.jsx(a,{cellWidth:"fit",children:"邮箱"}),e.jsx(a,{cellWidth:"fit",children:"电话"}),e.jsx(a,{cellWidth:"fit",children:"职位描述"}),e.jsx(a,{cellWidth:"fit",children:"状态"}),e.jsx(a,{cellWidth:"xl",children:"详细备注"}),e.jsx(a,{cellWidth:"fit",children:"操作"})]})}),e.jsxs(u,{children:[e.jsxs(c,{children:[e.jsx(l,{cellWidth:"fit",children:"1001"}),e.jsx(l,{cellWidth:"fit",children:"李四"}),e.jsx(l,{cellWidth:"fit",children:"lisi@example.com"}),e.jsx(l,{cellWidth:"fit",children:"138-1111-1111"}),e.jsx(l,{cellWidth:"fit",children:"高级前端开发工程师"}),e.jsx(l,{cellWidth:"fit",children:"在职"}),e.jsx(l,{cellWidth:"xl",children:"负责核心业务模块开发，主导多个重要项目，技术能力强，团队协作良好，具备良好的沟通能力"}),e.jsx(l,{cellWidth:"fit",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"编辑"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs text-destructive",children:"删除"})]})})]}),e.jsxs(c,{children:[e.jsx(l,{cellWidth:"fit",children:"1002"}),e.jsx(l,{cellWidth:"fit",children:"王五"}),e.jsx(l,{cellWidth:"fit",children:"wangwu@example.com"}),e.jsx(l,{cellWidth:"fit",children:"139-2222-2222"}),e.jsx(l,{cellWidth:"fit",children:"UI设计师"}),e.jsx(l,{cellWidth:"fit",children:"试用期"}),e.jsx(l,{cellWidth:"xl",children:"新入职员工，设计能力优秀"}),e.jsx(l,{cellWidth:"fit",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"编辑"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs text-destructive",children:"删除"})]})})]}),e.jsxs(c,{children:[e.jsx(l,{cellWidth:"fit",children:"1003"}),e.jsx(l,{cellWidth:"fit",children:"赵六"}),e.jsx(l,{cellWidth:"fit",children:"zhaoliu@example.com"}),e.jsx(l,{cellWidth:"fit",children:"137-3333-3333"}),e.jsx(l,{cellWidth:"fit",children:"产品经理"}),e.jsx(l,{cellWidth:"fit",children:"在职"}),e.jsx(l,{cellWidth:"xl",children:"资深产品经理，负责多条产品线规划与设计，具备丰富的行业经验和敏锐的市场洞察力，擅长跨部门协调与项目推进，深受团队信任"}),e.jsx(l,{cellWidth:"fit",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"编辑"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-xs text-destructive",children:"删除"})]})})]})]})]})})]})]})})},R={render:()=>{const[d,r]=C.useState([]),[i,m]=C.useState(!1),b=[{id:"1001",name:"张三",email:"zhangsan@company.com",phone:"138-0000-0001",department:"技术部",position:"高级前端工程师",salary:"P7",location:"北京总部",manager:"李经理",project:"项目A",status:"active",notes:"技术能力强，具备良好的团队协作能力，负责核心业务模块开发"},{id:"1002",name:"李四",email:"lisi@company.com",phone:"138-0000-0002",department:"产品部",position:"产品经理",salary:"P6",location:"上海分部",manager:"王经理",project:"项目B",status:"active",notes:"产品思维敏锐，用户体验意识强，善于跨部门沟通协调"},{id:"1003",name:"王五",email:"wangwu@company.com",phone:"138-0000-0003",department:"设计部",position:"UI设计师",salary:"P5",location:"深圳分部",manager:"陈经理",project:"项目C",status:"trial",notes:"设计功底扎实，对新技术敏感，具备较强的学习能力"},{id:"1004",name:"赵六",email:"zhaoliu@company.com",phone:"138-0000-0004",department:"运营部",position:"运营专员",salary:"P4",location:"广州分部",manager:"刘经理",project:"项目D",status:"leave",notes:"数据分析能力强，运营策略制定经验丰富"},{id:"1005",name:"钱七",email:"qianqi@company.com",phone:"138-0000-0005",department:"销售部",position:"销售代表",salary:"P5",location:"北京总部",manager:"周经理",project:"项目E",status:"active",notes:"沟通能力优秀，客户维护经验丰富，业绩表现突出"}],f=t=>{m(t),r(t?b.map(p=>p.id):[])},W=(t,p)=>{p?r([...d,t]):(r(d.filter(v=>v!==t)),m(!1))},s=t=>{switch(t){case"active":return"在职";case"trial":return"试用期";case"leave":return"请假中";default:return t}};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"左侧列冻结"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"选择框和姓名列被冻结在左侧，水平滚动时保持固定位置。适用于需要在浏览大量数据时保持关键信息可见的场景。"})]}),e.jsx(j,{bordered:!0,children:e.jsxs(T,{className:"min-w-max",children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(pe,{stickyLeft:!0,checked:i,onCheckedChange:t=>f(!!t),"aria-label":"Select all"}),e.jsx(a,{stickyLeft:!0,cellWidth:"fit",children:"姓名"}),e.jsx(a,{cellWidth:"fit",children:"邮箱地址"}),e.jsx(a,{cellWidth:"fit",children:"联系电话"}),e.jsx(a,{cellWidth:"fit",children:"部门"}),e.jsx(a,{cellWidth:"fit",children:"职位"}),e.jsx(a,{cellWidth:"fit",children:"薪资等级"}),e.jsx(a,{cellWidth:"fit",children:"工作地点"}),e.jsx(a,{cellWidth:"fit",children:"上级主管"}),e.jsx(a,{cellWidth:"fit",children:"项目组"}),e.jsx(a,{cellWidth:"fit",variant:"status",children:"状态"}),e.jsx(a,{cellWidth:"auto",children:"备注信息"})]})}),e.jsx(u,{children:b.map(t=>e.jsxs(c,{children:[e.jsx(je,{stickyLeft:!0,checked:d.includes(t.id),onCheckedChange:p=>W(t.id,!!p),"aria-label":`Select ${t.name}`}),e.jsx(l,{stickyLeft:!0,cellWidth:"fit",children:t.name}),e.jsx(l,{cellWidth:"fit",children:t.email}),e.jsx(l,{cellWidth:"fit",children:t.phone}),e.jsx(l,{cellWidth:"fit",children:t.department}),e.jsx(l,{cellWidth:"fit",children:t.position}),e.jsx(l,{cellWidth:"fit",children:t.salary}),e.jsx(l,{cellWidth:"fit",children:t.location}),e.jsx(l,{cellWidth:"fit",children:t.manager}),e.jsx(l,{cellWidth:"fit",children:t.project}),e.jsx(l,{cellWidth:"fit",variant:"status",children:e.jsx(g,{variant:t.status==="active"?"success":t.status==="trial"?"primary":t.status==="leave"?"warning":"default",children:s(t.status)})}),e.jsx(l,{cellWidth:"auto",children:t.notes})]},t.id))})]})})]})}},P={render:()=>{const d=[{id:"1001",name:"张三",email:"zhangsan@company.com",phone:"138-0000-0001",department:"技术部",position:"高级前端工程师",salary:"P7",location:"北京总部",manager:"李经理",project:"项目A",status:"active",notes:"技术能力强，具备良好的团队协作能力"},{id:"1002",name:"李四",email:"lisi@company.com",phone:"138-0000-0002",department:"产品部",position:"产品经理",salary:"P6",location:"上海分部",manager:"王经理",project:"项目B",status:"active",notes:"产品思维敏锐，用户体验意识强"},{id:"1003",name:"王五",email:"wangwu@company.com",phone:"138-0000-0003",department:"设计部",position:"UI设计师",salary:"P5",location:"深圳分部",manager:"陈经理",project:"项目C",status:"trial",notes:"设计功底扎实，对新技术敏感"},{id:"1004",name:"赵六",email:"zhaoliu@company.com",phone:"138-0000-0004",department:"运营部",position:"运营专员",salary:"P4",location:"广州分部",manager:"刘经理",project:"项目D",status:"leave",notes:"数据分析能力强，运营策略制定经验丰富"},{id:"1005",name:"钱七",email:"qianqi@company.com",phone:"138-0000-0005",department:"销售部",position:"销售代表",salary:"P5",location:"北京总部",manager:"周经理",project:"项目E",status:"active",notes:"沟通能力优秀，客户维护经验丰富"}],r=i=>{switch(i){case"active":return"在职";case"trial":return"试用期";case"leave":return"请假中";default:return i}};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"右侧列冻结"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"状态和操作列被冻结在右侧，水平滚动时保持固定位置。适用于需要在浏览大量数据时保持操作按钮始终可见的场景。"})]}),e.jsx(j,{bordered:!0,children:e.jsxs(T,{className:"min-w-max",children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{cellWidth:"fit",children:"ID"}),e.jsx(a,{cellWidth:"fit",children:"姓名"}),e.jsx(a,{cellWidth:"fit",children:"邮箱地址"}),e.jsx(a,{cellWidth:"fit",children:"联系电话"}),e.jsx(a,{cellWidth:"fit",children:"部门"}),e.jsx(a,{cellWidth:"fit",children:"职位"}),e.jsx(a,{cellWidth:"fit",children:"薪资等级"}),e.jsx(a,{cellWidth:"fit",children:"工作地点"}),e.jsx(a,{cellWidth:"fit",children:"上级主管"}),e.jsx(a,{cellWidth:"fit",children:"项目组"}),e.jsx(a,{cellWidth:"auto",children:"备注信息"}),e.jsx(a,{cellWidth:"fit",variant:"status",children:"状态"}),e.jsx(a,{stickyRight:!0,cellWidth:"fit",style:{right:"0px"},children:"操作"})]})}),e.jsx(u,{children:d.map(i=>e.jsxs(c,{children:[e.jsx(l,{cellWidth:"fit",children:i.id}),e.jsx(l,{cellWidth:"fit",children:i.name}),e.jsx(l,{cellWidth:"fit",children:i.email}),e.jsx(l,{cellWidth:"fit",children:i.phone}),e.jsx(l,{cellWidth:"fit",children:i.department}),e.jsx(l,{cellWidth:"fit",children:i.position}),e.jsx(l,{cellWidth:"fit",children:i.salary}),e.jsx(l,{cellWidth:"fit",children:i.location}),e.jsx(l,{cellWidth:"fit",children:i.manager}),e.jsx(l,{cellWidth:"fit",children:i.project}),e.jsx(l,{cellWidth:"auto",children:i.notes}),e.jsx(l,{cellWidth:"fit",variant:"status",children:e.jsx(g,{variant:i.status==="active"?"success":i.status==="trial"?"primary":i.status==="leave"?"warning":"default",children:r(i.status)})}),e.jsx(ge,{stickyRight:!0,style:{right:"0px"},actions:[{label:"查看",onClick:()=>console.log("查看",i.name)},{label:"编辑",onClick:()=>console.log("编辑",i.name)},{label:"删除",onClick:()=>console.log("删除",i.name),variant:"destructive"}]})]},i.id))})]})})]})}},B={render:()=>{const[d,r]=C.useState(1),i=5,m=Array.from({length:50},(n,o)=>({id:o+1,name:`员工${o+1}`,email:`employee${o+1}@company.com`,role:["管理员","用户","编辑"][o%3],status:["active","inactive","pending"][o%3],createTime:`2024-${String(Math.floor(o/10)+1).padStart(2,"0")}-${String(o%10+1).padStart(2,"0")}`})),b=(d-1)*i,f=b+i,W=m.slice(b,f),s={current:d,pageSize:i,total:m.length},t=n=>{r(n)},p=n=>{switch(n){case"active":return"success";case"inactive":return"destructive";case"pending":return"warning";default:return"default"}},v=n=>{switch(n){case"active":return"活跃";case"inactive":return"非活跃";case"pending":return"待审核";default:return n}};return e.jsxs("div",{className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"带分页的表格"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"演示表格与分页组件的集成使用，支持自动分页逻辑和页码切换。"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(j,{bordered:!0,children:e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{cellWidth:"xs",children:"ID"}),e.jsx(a,{cellWidth:"sm",children:"姓名"}),e.jsx(a,{cellWidth:"md",children:"邮箱"}),e.jsx(a,{cellWidth:"sm",children:"角色"}),e.jsx(a,{cellWidth:"sm",children:"状态"}),e.jsx(a,{cellWidth:"sm",children:"创建时间"}),e.jsx(a,{cellWidth:"sm",children:"操作"})]})}),e.jsx(u,{children:W.map(n=>e.jsxs(c,{children:[e.jsx(l,{cellWidth:"xs",className:"font-mono text-muted-foreground",children:n.id}),e.jsx(l,{cellWidth:"sm",children:n.name}),e.jsx(l,{cellWidth:"md",children:n.email}),e.jsx(l,{cellWidth:"sm",children:n.role}),e.jsx(l,{cellWidth:"sm",children:e.jsx(g,{variant:p(n.status),children:v(n.status)})}),e.jsx(l,{cellWidth:"sm",children:n.createTime}),e.jsx(l,{cellWidth:"sm",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",children:"编辑"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-sm text-destructive",children:"删除"})]})})]},n.id))})]})}),e.jsx(xe,{pagination:s,onPageChange:t,showTotal:(n,o)=>`共 ${n} 条记录，显示第 ${o[0]}-${o[1]} 条`})]})]})}},z={render:()=>{const[d,r]=C.useState(1),i=8,m=Array.from({length:73},(n,o)=>({id:o+1,name:`用户${o+1}`,email:`user${o+1}@example.com`,role:["管理员","用户","编辑","访客"][o%4],status:["active","inactive","pending"][o%3],lastLogin:o%5===0?"从未登录":`2024-01-${String(o%28+1).padStart(2,"0")} ${String(o%12+10).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`})),b={current:d,pageSize:i,total:m.length},f=n=>{r(n)},W=n=>{switch(n){case"active":return"success";case"inactive":return"destructive";case"pending":return"warning";default:return"default"}},s=n=>{switch(n){case"active":return"活跃";case"inactive":return"非活跃";case"pending":return"待审核";default:return n}},t=(d-1)*i,p=t+i,v=m.slice(t,p);return e.jsxs("div",{className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"一体化分页表格"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"使用 TableWithPagination 组件，将表格和分页功能整合在一起，提供更简洁的 API。"})]}),e.jsxs(fe,{data:m,columns:[],pagination:b,onPageChange:f,wrapperProps:{bordered:!0},children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{cellWidth:"xs",children:"ID"}),e.jsx(a,{cellWidth:"sm",children:"用户名"}),e.jsx(a,{cellWidth:"md",children:"邮箱"}),e.jsx(a,{cellWidth:"sm",children:"角色"}),e.jsx(a,{cellWidth:"sm",children:"状态"}),e.jsx(a,{cellWidth:"md",children:"最后登录"}),e.jsx(a,{cellWidth:"sm",children:"操作"})]})}),e.jsx(u,{children:v.map(n=>e.jsxs(c,{children:[e.jsx(l,{cellWidth:"xs",className:"font-mono text-muted-foreground",children:n.id}),e.jsx(l,{cellWidth:"sm",children:n.name}),e.jsx(l,{cellWidth:"md",children:n.email}),e.jsx(l,{cellWidth:"sm",children:n.role}),e.jsx(l,{cellWidth:"sm",children:e.jsx(g,{variant:W(n.status),children:s(n.status)})}),e.jsx(l,{cellWidth:"md",children:n.lastLogin}),e.jsx(l,{cellWidth:"sm",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",children:"编辑"}),e.jsx(h,{variant:"link",size:"sm",className:"h-auto p-0 text-sm text-destructive",children:"删除"})]})})]},n.id))})]})]})}},I={render:()=>{const[d,r]=C.useState(1),i=6,m=Array.from({length:25},(s,t)=>({id:t+1,product:`产品 ${t+1}`,price:(Math.random()*1e3).toFixed(2),stock:Math.floor(Math.random()*500),category:["电子产品","服装","家居","书籍"][t%4],status:["在售","缺货","预售"][t%3]})),b={current:d,pageSize:i,total:m.length},f=s=>{r(s)},W=m.slice((d-1)*i,d*i);return e.jsxs("div",{className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"自定义分页信息"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"演示自定义分页信息显示格式，可以根据业务需求调整显示内容。"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(j,{bordered:!0,children:e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(c,{children:[e.jsx(a,{cellWidth:"xs",children:"ID"}),e.jsx(a,{cellWidth:"md",children:"产品名称"}),e.jsx(a,{cellWidth:"sm",variant:"numeric",children:"价格"}),e.jsx(a,{cellWidth:"sm",variant:"numeric",children:"库存"}),e.jsx(a,{cellWidth:"sm",children:"分类"}),e.jsx(a,{cellWidth:"sm",children:"状态"})]})}),e.jsx(u,{children:W.map(s=>e.jsxs(c,{children:[e.jsx(l,{cellWidth:"xs",className:"font-mono text-muted-foreground",children:s.id}),e.jsx(l,{cellWidth:"md",children:s.product}),e.jsxs(l,{cellWidth:"sm",variant:"numeric",children:["¥",s.price]}),e.jsx(l,{cellWidth:"sm",variant:"numeric",children:s.stock}),e.jsx(l,{cellWidth:"sm",children:s.category}),e.jsx(l,{cellWidth:"sm",children:e.jsx(g,{variant:s.status==="在售"?"success":s.status==="缺货"?"destructive":"warning",children:s.status})})]},s.id))})]})}),e.jsx(xe,{pagination:b,onPageChange:f,showTotal:(s,t)=>`显示第 ${t[0]}-${t[1]} 项，共 ${s} 项产品`})]})]})}};var A,$,M;H.parameters={...H.parameters,docs:{...(A=H.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <TableWrapper bordered>\r
        <Table>\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead>Name</TableHead>\r
              <TableHead variant="status">Status</TableHead>\r
              <TableHead>Email</TableHead>\r
              <TableHead>Role</TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            <TableRow>\r
              <TableCell>John Doe</TableCell>\r
              <TableCell variant="status">\r
                <Tag variant="success">Active</Tag>\r
              </TableCell>\r
              <TableCell>john@example.com</TableCell>\r
              <TableCell>Admin</TableCell>\r
            </TableRow>\r
            <TableRow>\r
              <TableCell>Jane Smith</TableCell>\r
              <TableCell variant="status">\r
                <Tag variant="destructive">Inactive</Tag>\r
              </TableCell>\r
              <TableCell>jane@example.com</TableCell>\r
              <TableCell>User</TableCell>\r
            </TableRow>\r
            <TableRow>\r
              <TableCell>Bob Johnson</TableCell>\r
              <TableCell variant="status">\r
                <Tag variant="warning">Pending</Tag>\r
              </TableCell>\r
              <TableCell>bob@example.com</TableCell>\r
              <TableCell>Moderator</TableCell>\r
            </TableRow>\r
          </TableBody>\r
        </Table>\r
      </TableWrapper>\r
    </div>
}`,...(M=($=H.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var E,L,U;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      {/* 为页面级粘性表头创建特殊的容器，保持圆角边框但不影响sticky定位 */}\r
      <TableWrapper bordered pageStickyHeader>\r
        <Table>\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead>\r
                产品名称\r
              </TableHead>\r
              <TableHead variant="numeric">\r
                价格\r
              </TableHead>\r
              <TableHead variant="numeric">\r
                库存\r
              </TableHead>\r
              <TableHead>\r
                分类\r
              </TableHead>\r
              <TableHead>\r
                上架日期\r
              </TableHead>\r
              <TableHead variant="status">\r
                状态\r
              </TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            {Array.from({
            length: 15
          }).map((_, i) => <TableRow key={i}>\r
                <TableCell>产品 {i + 1}</TableCell>\r
                <TableCell variant="numeric">¥{(Math.random() * 1000).toFixed(2)}</TableCell>\r
                <TableCell variant="numeric">{Math.floor(Math.random() * 500)}</TableCell>\r
                <TableCell>电子产品</TableCell>\r
                <TableCell>2024-{String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-{String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}</TableCell>\r
                <TableCell variant="status">\r
                  <Tag variant={i % 3 === 0 ? 'success' : i % 3 === 1 ? 'destructive' : 'warning'}>\r
                    {i % 3 === 0 ? '在售' : i % 3 === 1 ? '缺货' : '预售'}\r
                  </Tag>\r
                </TableCell>\r
              </TableRow>)}\r
          </TableBody>\r
        </Table>\r
      </TableWrapper>\r
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(U=(L=S.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var J,_,q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const data = [{
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin'
    }, {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User'
    }, {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Moderator'
    }, {
      id: '4',
      name: 'Alice Brown',
      email: 'alice@example.com',
      role: 'User'
    }];
    const handleSelectAll = (checked: boolean) => {
      setSelectAll(checked);
      setSelectedRows(checked ? data.map(item => item.id) : []);
    };
    const handleRowSelect = (id: string, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, id]);
      } else {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        setSelectAll(false);
      }
    };
    return <div className="p-6">\r
        <TableWrapper bordered>\r
          <Table>\r
            <TableHeader>\r
              <TableRow>\r
                <TableHead className="w-16 p-0 relative">\r
                  <div className="absolute inset-0 flex items-center justify-center">\r
                    <Checkbox checked={selectAll} onCheckedChange={checked => handleSelectAll(!!checked)} aria-label="Select all" />\r
                  </div>\r
                </TableHead>\r
                <TableHead>Name</TableHead>\r
                <TableHead>Email</TableHead>\r
                <TableHead>Role</TableHead>\r
                <TableHead>Actions</TableHead>\r
              </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
              {data.map(item => <TableRow key={item.id} className={selectedRows.includes(item.id) ? "bg-muted/50" : ""}>\r
                  <TableCell className="w-16 p-0 relative">\r
                    <div className="absolute inset-0 flex items-center justify-center">\r
                      <Checkbox checked={selectedRows.includes(item.id)} onCheckedChange={checked => handleRowSelect(item.id, !!checked)} aria-label={\`Select \${item.name}\`} />\r
                    </div>\r
                  </TableCell>\r
                  <TableCell>{item.name}</TableCell>\r
                  <TableCell>{item.email}</TableCell>\r
                  <TableCell>{item.role}</TableCell>\r
                  <TableCell>\r
                    <div className="flex items-center gap-2">\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm">\r
                        Edit\r
                      </Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm">\r
                        View\r
                      </Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">\r
                        Delete\r
                      </Button>\r
                    </div>\r
                  </TableCell>\r
                </TableRow>)}\r
            </TableBody>\r
          </Table>\r
        </TableWrapper>\r
      </div>;
  }
}`,...(q=(_=y.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var V,F,G;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <TableWrapper bordered>\r
        <Table>\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead>Name</TableHead>\r
              <TableHead>Status</TableHead>\r
              <TableHead>Email</TableHead>\r
              <TableHead>Role</TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            <TableRow>\r
              <TableCell colSpan={4}>\r
                <TableEmptyState icon={<FileX className="h-10 w-10" />} title="No users found" description="There are no users in your workspace yet. Invite some users to get started." action={<Button>\r
                      Invite Users\r
                    </Button>} />\r
              </TableCell>\r
            </TableRow>\r
          </TableBody>\r
        </Table>\r
      </TableWrapper>\r
    </div>
}`,...(G=(F=w.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var X,O,K;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <div className="mb-4">\r
        <h3 className="text-lg font-medium mb-2">多列数据表格 - 横向滚动</h3>\r
        <p className="text-sm text-muted-foreground">\r
          当列数很多时，表格会自动显示横向滚动条。尝试在较小的屏幕或容器中查看效果。\r
        </p>\r
      </div>\r
      \r
      <TableWrapper bordered>\r
        <Table className="min-w-max">\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead cellWidth="fit">ID</TableHead>\r
              <TableHead cellWidth="fit">姓名</TableHead>\r
              <TableHead cellWidth="fit">邮箱地址</TableHead>\r
              <TableHead cellWidth="fit">年龄</TableHead>\r
              <TableHead cellWidth="fit">部门</TableHead>\r
              <TableHead cellWidth="fit">职位</TableHead>\r
              <TableHead cellWidth="fit">联系电话</TableHead>\r
              <TableHead cellWidth="fit">入职日期</TableHead>\r
              <TableHead cellWidth="fit">薪资等级</TableHead>\r
              <TableHead cellWidth="fit">工作地点</TableHead>\r
              <TableHead cellWidth="fit" variant="status">状态</TableHead>\r
              <TableHead cellWidth="fit">上级主管</TableHead>\r
              <TableHead cellWidth="fit">项目组</TableHead>\r
              <TableHead cellWidth="auto">备注信息</TableHead>\r
              <TableHead cellWidth="fit">操作</TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            {Array.from({
            length: 8
          }).map((_, i) => <TableRow key={i}>\r
                <TableCell cellWidth="fit">{1001 + i}</TableCell>\r
                <TableCell cellWidth="fit">员工{i + 1}</TableCell>\r
                <TableCell cellWidth="fit">employee{i + 1}@company.com</TableCell>\r
                <TableCell cellWidth="fit" variant="numeric">{25 + i}</TableCell>\r
                <TableCell cellWidth="fit">技术部</TableCell>\r
                <TableCell cellWidth="fit">\r
                  {i % 3 === 0 ? '高级工程师' : i % 3 === 1 ? '前端工程师' : '后端工程师'}\r
                </TableCell>\r
                <TableCell cellWidth="fit">+86 138-{String(1000 + i * 11).padStart(4, '0')}-{String(5678 + i).padStart(4, '0')}</TableCell>\r
                <TableCell cellWidth="fit" variant="date">2024-0{i % 6 + 1}-{String(10 + i).padStart(2, '0')}</TableCell>\r
                <TableCell cellWidth="fit">P{i % 4 + 6}</TableCell>\r
                <TableCell cellWidth="fit">\r
                  {i % 2 === 0 ? '北京总部' : '上海分部'}\r
                </TableCell>\r
                <TableCell cellWidth="fit" variant="status">\r
                  <Tag variant={i % 3 === 0 ? 'success' : i % 3 === 1 ? 'primary' : 'warning'}>\r
                    {i % 3 === 0 ? '在职' : i % 3 === 1 ? '试用期' : '请假中'}\r
                  </Tag>\r
                </TableCell>\r
                <TableCell cellWidth="fit">主管{Math.floor(i / 2) + 1}</TableCell>\r
                <TableCell cellWidth="fit">项目组 {String.fromCharCode(65 + i % 3)}</TableCell>\r
                <TableCell cellWidth="auto">\r
                  {i % 2 === 0 ? '表现优秀，积极主动' : '技术能力强，团队协作佳'}\r
                </TableCell>\r
                <TableCell cellWidth="fit">\r
                  <div className="flex items-center gap-1">\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">\r
                      查看\r
                    </Button>\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">\r
                      编辑\r
                    </Button>\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">\r
                      删除\r
                    </Button>\r
                  </div>\r
                </TableCell>\r
              </TableRow>)}\r
          </TableBody>\r
        </Table>\r
      </TableWrapper>\r
    </div>
}`,...(K=(O=N.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var Q,Z,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="p-6 space-y-6">\r
      <div>\r
        <h3 className="text-lg font-medium mb-4">列宽选型指南</h3>\r
        \r
        {/* 场景一：表格不超过容器宽度 */}\r
        <div className="mb-6">\r
          <h4 className="text-md font-medium mb-2">场景一：表格宽度 ≤ 容器宽度</h4>\r
          <p className="text-sm text-muted-foreground mb-3">优先基于各个字段的宽度情况来选择一个合适的固定宽度，最后一个列使用auto，把容器宽度占满。</p>\r
          \r
          <TableWrapper bordered>\r
            <Table>\r
              <TableHeader>\r
                <TableRow>\r
                  <TableHead cellWidth="xs">ID</TableHead>\r
                  <TableHead cellWidth="sm">姓名</TableHead>\r
                  <TableHead cellWidth="md">电话</TableHead>\r
                  <TableHead cellWidth="sm">状态</TableHead>\r
                  <TableHead cellWidth="auto">备注说明</TableHead>\r
                </TableRow>\r
              </TableHeader>\r
              <TableBody>\r
                <TableRow>\r
                  <TableCell cellWidth="xs">001</TableCell>\r
                  <TableCell cellWidth="sm">张三</TableCell>\r
                  <TableCell cellWidth="md">138-0000-0000</TableCell>\r
                  <TableCell cellWidth="sm">活跃</TableCell>\r
                  <TableCell cellWidth="auto">这是一段较长的备注说明，会占用剩余的所有可用空间</TableCell>\r
                </TableRow>\r
              </TableBody>\r
            </Table>\r
          </TableWrapper>\r
        </div>\r
\r
        {/* 场景二：表格超过容器宽度 */}\r
        <div>\r
          <h4 className="text-md font-medium mb-2">场景二：表格宽度 &gt; 容器宽度</h4>\r
          <p className="text-sm text-muted-foreground mb-3">若是宽度比较确定的字段（ID、电话号码、邮箱、日期 等等）优先使用fit (whitespace-nowrap)，如果宽度不是很确定的，则基于这个字段的数据的最大多数的长度的情况，来指定一个合适的固定宽度。</p>\r
          \r
          <TableWrapper bordered>\r
            <Table className="min-w-max">\r
              <TableHeader>\r
                <TableRow>\r
                  <TableHead cellWidth="fit">ID</TableHead>\r
                  <TableHead cellWidth="fit">姓名</TableHead>\r
                  <TableHead cellWidth="fit">邮箱</TableHead>\r
                  <TableHead cellWidth="fit">电话</TableHead>\r
                  <TableHead cellWidth="fit">职位描述</TableHead>\r
                  <TableHead cellWidth="fit">状态</TableHead>\r
                  <TableHead cellWidth="xl">详细备注</TableHead>\r
                  <TableHead cellWidth="fit">操作</TableHead>\r
                </TableRow>\r
              </TableHeader>\r
              <TableBody>\r
                <TableRow>\r
                  <TableCell cellWidth="fit">1001</TableCell>\r
                  <TableCell cellWidth="fit">李四</TableCell>\r
                  <TableCell cellWidth="fit">lisi@example.com</TableCell>\r
                  <TableCell cellWidth="fit">138-1111-1111</TableCell>\r
                  <TableCell cellWidth="fit">高级前端开发工程师</TableCell>\r
                  <TableCell cellWidth="fit">在职</TableCell>\r
                  <TableCell cellWidth="xl">负责核心业务模块开发，主导多个重要项目，技术能力强，团队协作良好，具备良好的沟通能力</TableCell>\r
                  <TableCell cellWidth="fit">\r
                    <div className="flex items-center gap-1">\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">编辑</Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">删除</Button>\r
                    </div>\r
                  </TableCell>\r
                </TableRow>\r
                <TableRow>\r
                  <TableCell cellWidth="fit">1002</TableCell>\r
                  <TableCell cellWidth="fit">王五</TableCell>\r
                  <TableCell cellWidth="fit">wangwu@example.com</TableCell>\r
                  <TableCell cellWidth="fit">139-2222-2222</TableCell>\r
                  <TableCell cellWidth="fit">UI设计师</TableCell>\r
                  <TableCell cellWidth="fit">试用期</TableCell>\r
                  <TableCell cellWidth="xl">新入职员工，设计能力优秀</TableCell>\r
                  <TableCell cellWidth="fit">\r
                    <div className="flex items-center gap-1">\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">编辑</Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">删除</Button>\r
                    </div>\r
                  </TableCell>\r
                </TableRow>\r
                <TableRow>\r
                  <TableCell cellWidth="fit">1003</TableCell>\r
                  <TableCell cellWidth="fit">赵六</TableCell>\r
                  <TableCell cellWidth="fit">zhaoliu@example.com</TableCell>\r
                  <TableCell cellWidth="fit">137-3333-3333</TableCell>\r
                  <TableCell cellWidth="fit">产品经理</TableCell>\r
                  <TableCell cellWidth="fit">在职</TableCell>\r
                  <TableCell cellWidth="xl">资深产品经理，负责多条产品线规划与设计，具备丰富的行业经验和敏锐的市场洞察力，擅长跨部门协调与项目推进，深受团队信任</TableCell>\r
                  <TableCell cellWidth="fit">\r
                    <div className="flex items-center gap-1">\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">编辑</Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">删除</Button>\r
                    </div>\r
                  </TableCell>\r
                </TableRow>\r
              </TableBody>\r
            </Table>\r
          </TableWrapper>\r
        </div>\r
      </div>\r
    </div>
}`,...(Y=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var ee,le,ae;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const data = [{
      id: '1001',
      name: '张三',
      email: 'zhangsan@company.com',
      phone: '138-0000-0001',
      department: '技术部',
      position: '高级前端工程师',
      salary: 'P7',
      location: '北京总部',
      manager: '李经理',
      project: '项目A',
      status: 'active',
      notes: '技术能力强，具备良好的团队协作能力，负责核心业务模块开发'
    }, {
      id: '1002',
      name: '李四',
      email: 'lisi@company.com',
      phone: '138-0000-0002',
      department: '产品部',
      position: '产品经理',
      salary: 'P6',
      location: '上海分部',
      manager: '王经理',
      project: '项目B',
      status: 'active',
      notes: '产品思维敏锐，用户体验意识强，善于跨部门沟通协调'
    }, {
      id: '1003',
      name: '王五',
      email: 'wangwu@company.com',
      phone: '138-0000-0003',
      department: '设计部',
      position: 'UI设计师',
      salary: 'P5',
      location: '深圳分部',
      manager: '陈经理',
      project: '项目C',
      status: 'trial',
      notes: '设计功底扎实，对新技术敏感，具备较强的学习能力'
    }, {
      id: '1004',
      name: '赵六',
      email: 'zhaoliu@company.com',
      phone: '138-0000-0004',
      department: '运营部',
      position: '运营专员',
      salary: 'P4',
      location: '广州分部',
      manager: '刘经理',
      project: '项目D',
      status: 'leave',
      notes: '数据分析能力强，运营策略制定经验丰富'
    }, {
      id: '1005',
      name: '钱七',
      email: 'qianqi@company.com',
      phone: '138-0000-0005',
      department: '销售部',
      position: '销售代表',
      salary: 'P5',
      location: '北京总部',
      manager: '周经理',
      project: '项目E',
      status: 'active',
      notes: '沟通能力优秀，客户维护经验丰富，业绩表现突出'
    }];
    const handleSelectAll = (checked: boolean) => {
      setSelectAll(checked);
      setSelectedRows(checked ? data.map(item => item.id) : []);
    };
    const handleRowSelect = (id: string, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, id]);
      } else {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        setSelectAll(false);
      }
    };
    const getStatusText = (status: string) => {
      switch (status) {
        case 'active':
          return '在职';
        case 'trial':
          return '试用期';
        case 'leave':
          return '请假中';
        default:
          return status;
      }
    };
    return <div className="p-6">\r
        <div className="mb-4">\r
          <h3 className="text-lg font-medium mb-2">左侧列冻结</h3>\r
          <p className="text-sm text-muted-foreground">\r
            选择框和姓名列被冻结在左侧，水平滚动时保持固定位置。适用于需要在浏览大量数据时保持关键信息可见的场景。\r
          </p>\r
        </div>\r
        \r
        <TableWrapper bordered>\r
          <Table className="min-w-max">\r
            <TableHeader>\r
              <TableRow>\r
                <CheckboxHeaderCell stickyLeft checked={selectAll} onCheckedChange={checked => handleSelectAll(!!checked)} aria-label="Select all" />\r
                <TableHead stickyLeft cellWidth="fit">姓名</TableHead>\r
                <TableHead cellWidth="fit">邮箱地址</TableHead>\r
                <TableHead cellWidth="fit">联系电话</TableHead>\r
                <TableHead cellWidth="fit">部门</TableHead>\r
                <TableHead cellWidth="fit">职位</TableHead>\r
                <TableHead cellWidth="fit">薪资等级</TableHead>\r
                <TableHead cellWidth="fit">工作地点</TableHead>\r
                <TableHead cellWidth="fit">上级主管</TableHead>\r
                <TableHead cellWidth="fit">项目组</TableHead>\r
                <TableHead cellWidth="fit" variant="status">状态</TableHead>\r
                <TableHead cellWidth="auto">备注信息</TableHead>\r
              </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
              {data.map(item => <TableRow key={item.id}>\r
                  <CheckboxCell stickyLeft checked={selectedRows.includes(item.id)} onCheckedChange={checked => handleRowSelect(item.id, !!checked)} aria-label={\`Select \${item.name}\`} />\r
                  <TableCell stickyLeft cellWidth="fit">{item.name}</TableCell>\r
                  <TableCell cellWidth="fit">{item.email}</TableCell>\r
                  <TableCell cellWidth="fit">{item.phone}</TableCell>\r
                  <TableCell cellWidth="fit">{item.department}</TableCell>\r
                  <TableCell cellWidth="fit">{item.position}</TableCell>\r
                  <TableCell cellWidth="fit">{item.salary}</TableCell>\r
                  <TableCell cellWidth="fit">{item.location}</TableCell>\r
                  <TableCell cellWidth="fit">{item.manager}</TableCell>\r
                  <TableCell cellWidth="fit">{item.project}</TableCell>\r
                  <TableCell cellWidth="fit" variant="status">\r
                    <Tag variant={item.status === 'active' ? 'success' : item.status === 'trial' ? 'primary' : item.status === 'leave' ? 'warning' : 'default'}>\r
                      {getStatusText(item.status)}\r
                    </Tag>\r
                  </TableCell>\r
                  <TableCell cellWidth="auto">{item.notes}</TableCell>\r
                </TableRow>)}\r
            </TableBody>\r
          </Table>\r
        </TableWrapper>\r
      </div>;
  }
}`,...(ae=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var te,re,ie;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      id: '1001',
      name: '张三',
      email: 'zhangsan@company.com',
      phone: '138-0000-0001',
      department: '技术部',
      position: '高级前端工程师',
      salary: 'P7',
      location: '北京总部',
      manager: '李经理',
      project: '项目A',
      status: 'active',
      notes: '技术能力强，具备良好的团队协作能力'
    }, {
      id: '1002',
      name: '李四',
      email: 'lisi@company.com',
      phone: '138-0000-0002',
      department: '产品部',
      position: '产品经理',
      salary: 'P6',
      location: '上海分部',
      manager: '王经理',
      project: '项目B',
      status: 'active',
      notes: '产品思维敏锐，用户体验意识强'
    }, {
      id: '1003',
      name: '王五',
      email: 'wangwu@company.com',
      phone: '138-0000-0003',
      department: '设计部',
      position: 'UI设计师',
      salary: 'P5',
      location: '深圳分部',
      manager: '陈经理',
      project: '项目C',
      status: 'trial',
      notes: '设计功底扎实，对新技术敏感'
    }, {
      id: '1004',
      name: '赵六',
      email: 'zhaoliu@company.com',
      phone: '138-0000-0004',
      department: '运营部',
      position: '运营专员',
      salary: 'P4',
      location: '广州分部',
      manager: '刘经理',
      project: '项目D',
      status: 'leave',
      notes: '数据分析能力强，运营策略制定经验丰富'
    }, {
      id: '1005',
      name: '钱七',
      email: 'qianqi@company.com',
      phone: '138-0000-0005',
      department: '销售部',
      position: '销售代表',
      salary: 'P5',
      location: '北京总部',
      manager: '周经理',
      project: '项目E',
      status: 'active',
      notes: '沟通能力优秀，客户维护经验丰富'
    }];
    const getStatusText = (status: string) => {
      switch (status) {
        case 'active':
          return '在职';
        case 'trial':
          return '试用期';
        case 'leave':
          return '请假中';
        default:
          return status;
      }
    };
    return <div className="p-6">\r
        <div className="mb-4">\r
          <h3 className="text-lg font-medium mb-2">右侧列冻结</h3>\r
          <p className="text-sm text-muted-foreground">\r
            状态和操作列被冻结在右侧，水平滚动时保持固定位置。适用于需要在浏览大量数据时保持操作按钮始终可见的场景。\r
          </p>\r
        </div>\r
        \r
        <TableWrapper bordered>\r
          <Table className="min-w-max">\r
            <TableHeader>\r
              <TableRow>\r
                <TableHead cellWidth="fit">ID</TableHead>\r
                <TableHead cellWidth="fit">姓名</TableHead>\r
                <TableHead cellWidth="fit">邮箱地址</TableHead>\r
                <TableHead cellWidth="fit">联系电话</TableHead>\r
                <TableHead cellWidth="fit">部门</TableHead>\r
                <TableHead cellWidth="fit">职位</TableHead>\r
                <TableHead cellWidth="fit">薪资等级</TableHead>\r
                <TableHead cellWidth="fit">工作地点</TableHead>\r
                <TableHead cellWidth="fit">上级主管</TableHead>\r
                <TableHead cellWidth="fit">项目组</TableHead>\r
                <TableHead cellWidth="auto">备注信息</TableHead>\r
                <TableHead cellWidth="fit" variant="status">状态</TableHead>\r
                <TableHead stickyRight cellWidth="fit" style={{
                right: '0px'
              }}>操作</TableHead>\r
              </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
              {data.map(item => <TableRow key={item.id}>\r
                  <TableCell cellWidth="fit">{item.id}</TableCell>\r
                  <TableCell cellWidth="fit">{item.name}</TableCell>\r
                  <TableCell cellWidth="fit">{item.email}</TableCell>\r
                  <TableCell cellWidth="fit">{item.phone}</TableCell>\r
                  <TableCell cellWidth="fit">{item.department}</TableCell>\r
                  <TableCell cellWidth="fit">{item.position}</TableCell>\r
                  <TableCell cellWidth="fit">{item.salary}</TableCell>\r
                  <TableCell cellWidth="fit">{item.location}</TableCell>\r
                  <TableCell cellWidth="fit">{item.manager}</TableCell>\r
                  <TableCell cellWidth="fit">{item.project}</TableCell>\r
                  <TableCell cellWidth="auto">{item.notes}</TableCell>\r
                  <TableCell cellWidth="fit" variant="status">\r
                    <Tag variant={item.status === 'active' ? 'success' : item.status === 'trial' ? 'primary' : item.status === 'leave' ? 'warning' : 'default'}>\r
                      {getStatusText(item.status)}\r
                    </Tag>\r
                  </TableCell>\r
                  <ActionCell stickyRight style={{
                right: '0px'
              }} actions={[{
                label: '查看',
                onClick: () => console.log('查看', item.name)
              }, {
                label: '编辑',
                onClick: () => console.log('编辑', item.name)
              }, {
                label: '删除',
                onClick: () => console.log('删除', item.name),
                variant: 'destructive'
              }]} />\r
                </TableRow>)}\r
            </TableBody>\r
          </Table>\r
        </TableWrapper>\r
      </div>;
  }
}`,...(ie=(re=P.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,ne,ce;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    // 生成更多数据用于分页演示
    const allData = Array.from({
      length: 50
    }, (_, i) => ({
      id: i + 1,
      name: \`员工\${i + 1}\`,
      email: \`employee\${i + 1}@company.com\`,
      role: ['管理员', '用户', '编辑'][i % 3],
      status: ['active', 'inactive', 'pending'][i % 3],
      createTime: \`2024-\${String(Math.floor(i / 10) + 1).padStart(2, '0')}-\${String(i % 10 + 1).padStart(2, '0')}\`
    }));

    // 分页逻辑
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = allData.slice(startIndex, endIndex);
    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length
    };
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'active':
          return 'success';
        case 'inactive':
          return 'destructive';
        case 'pending':
          return 'warning';
        default:
          return 'default';
      }
    };
    const getStatusText = (status: string) => {
      switch (status) {
        case 'active':
          return '活跃';
        case 'inactive':
          return '非活跃';
        case 'pending':
          return '待审核';
        default:
          return status;
      }
    };
    return <div className="p-6 space-y-6">\r
        <div>\r
          <h3 className="text-lg font-medium mb-2">带分页的表格</h3>\r
          <p className="text-sm text-muted-foreground mb-4">\r
            演示表格与分页组件的集成使用，支持自动分页逻辑和页码切换。\r
          </p>\r
        </div>\r
\r
        {/* 使用 TablePagination 组件的方式 */}\r
        <div className="space-y-4">\r
          <TableWrapper bordered>\r
            <Table>\r
              <TableHeader>\r
                <TableRow>\r
                  <TableHead cellWidth="xs">ID</TableHead>\r
                  <TableHead cellWidth="sm">姓名</TableHead>\r
                  <TableHead cellWidth="md">邮箱</TableHead>\r
                  <TableHead cellWidth="sm">角色</TableHead>\r
                  <TableHead cellWidth="sm">状态</TableHead>\r
                  <TableHead cellWidth="sm">创建时间</TableHead>\r
                  <TableHead cellWidth="sm">操作</TableHead>\r
                </TableRow>\r
              </TableHeader>\r
              <TableBody>\r
                {currentData.map(item => <TableRow key={item.id}>\r
                    <TableCell cellWidth="xs" className="font-mono text-muted-foreground">\r
                      {item.id}\r
                    </TableCell>\r
                    <TableCell cellWidth="sm">{item.name}</TableCell>\r
                    <TableCell cellWidth="md">{item.email}</TableCell>\r
                    <TableCell cellWidth="sm">{item.role}</TableCell>\r
                    <TableCell cellWidth="sm">\r
                      <Tag variant={getStatusVariant(item.status)}>\r
                        {getStatusText(item.status)}\r
                      </Tag>\r
                    </TableCell>\r
                    <TableCell cellWidth="sm">{item.createTime}</TableCell>\r
                    <TableCell cellWidth="sm">\r
                      <div className="flex items-center gap-2">\r
                        <Button variant="link" size="sm" className="h-auto p-0 text-sm">\r
                          编辑\r
                        </Button>\r
                        <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">\r
                          删除\r
                        </Button>\r
                      </div>\r
                    </TableCell>\r
                  </TableRow>)}\r
              </TableBody>\r
            </Table>\r
          </TableWrapper>\r
\r
          <TablePagination pagination={pagination} onPageChange={handlePageChange} showTotal={(total, range) => \`共 \${total} 条记录，显示第 \${range[0]}-\${range[1]} 条\`} />\r
        </div>\r
      </div>;
  }
}`,...(ce=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var de,oe,he;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    // 生成数据
    const allData = Array.from({
      length: 73
    }, (_, i) => ({
      id: i + 1,
      name: \`用户\${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ['管理员', '用户', '编辑', '访客'][i % 4],
      status: ['active', 'inactive', 'pending'][i % 3],
      lastLogin: i % 5 === 0 ? '从未登录' : \`2024-01-\${String(i % 28 + 1).padStart(2, '0')} \${String(i % 12 + 10).padStart(2, '0')}:\${String(i % 60).padStart(2, '0')}\`
    }));
    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length
    };
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'active':
          return 'success';
        case 'inactive':
          return 'destructive';
        case 'pending':
          return 'warning';
        default:
          return 'default';
      }
    };
    const getStatusText = (status: string) => {
      switch (status) {
        case 'active':
          return '活跃';
        case 'inactive':
          return '非活跃';
        case 'pending':
          return '待审核';
        default:
          return status;
      }
    };

    // 当前页数据
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = allData.slice(startIndex, endIndex);
    return <div className="p-6 space-y-6">\r
        <div>\r
          <h3 className="text-lg font-medium mb-2">一体化分页表格</h3>\r
          <p className="text-sm text-muted-foreground mb-4">\r
            使用 TableWithPagination 组件，将表格和分页功能整合在一起，提供更简洁的 API。\r
          </p>\r
        </div>\r
\r
        <TableWithPagination data={allData} columns={[]} // 在实际使用中可以定义列配置
      pagination={pagination} onPageChange={handlePageChange} wrapperProps={{
        bordered: true
      }}>\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead cellWidth="xs">ID</TableHead>\r
              <TableHead cellWidth="sm">用户名</TableHead>\r
              <TableHead cellWidth="md">邮箱</TableHead>\r
              <TableHead cellWidth="sm">角色</TableHead>\r
              <TableHead cellWidth="sm">状态</TableHead>\r
              <TableHead cellWidth="md">最后登录</TableHead>\r
              <TableHead cellWidth="sm">操作</TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            {currentData.map(item => <TableRow key={item.id}>\r
                <TableCell cellWidth="xs" className="font-mono text-muted-foreground">\r
                  {item.id}\r
                </TableCell>\r
                <TableCell cellWidth="sm">{item.name}</TableCell>\r
                <TableCell cellWidth="md">{item.email}</TableCell>\r
                <TableCell cellWidth="sm">{item.role}</TableCell>\r
                <TableCell cellWidth="sm">\r
                  <Tag variant={getStatusVariant(item.status)}>\r
                    {getStatusText(item.status)}\r
                  </Tag>\r
                </TableCell>\r
                <TableCell cellWidth="md">{item.lastLogin}</TableCell>\r
                <TableCell cellWidth="sm">\r
                  <div className="flex items-center gap-1">\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-sm">\r
                      编辑\r
                    </Button>\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">\r
                      删除\r
                    </Button>\r
                  </div>\r
                </TableCell>\r
              </TableRow>)}\r
          </TableBody>\r
        </TableWithPagination>\r
      </div>;
  }
}`,...(he=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:he.source}}};var me,be,Te;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const allData = Array.from({
      length: 25
    }, (_, i) => ({
      id: i + 1,
      product: \`产品 \${i + 1}\`,
      price: (Math.random() * 1000).toFixed(2),
      stock: Math.floor(Math.random() * 500),
      category: ['电子产品', '服装', '家居', '书籍'][i % 4],
      status: ['在售', '缺货', '预售'][i % 3]
    }));
    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length
    };
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    const currentData = allData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return <div className="p-6 space-y-6">\r
        <div>\r
          <h3 className="text-lg font-medium mb-2">自定义分页信息</h3>\r
          <p className="text-sm text-muted-foreground mb-4">\r
            演示自定义分页信息显示格式，可以根据业务需求调整显示内容。\r
          </p>\r
        </div>\r
\r
        <div className="space-y-4">\r
          <TableWrapper bordered>\r
            <Table>\r
              <TableHeader>\r
                <TableRow>\r
                  <TableHead cellWidth="xs">ID</TableHead>\r
                  <TableHead cellWidth="md">产品名称</TableHead>\r
                  <TableHead cellWidth="sm" variant="numeric">价格</TableHead>\r
                  <TableHead cellWidth="sm" variant="numeric">库存</TableHead>\r
                  <TableHead cellWidth="sm">分类</TableHead>\r
                  <TableHead cellWidth="sm">状态</TableHead>\r
                </TableRow>\r
              </TableHeader>\r
              <TableBody>\r
                {currentData.map(item => <TableRow key={item.id}>\r
                    <TableCell cellWidth="xs" className="font-mono text-muted-foreground">\r
                      {item.id}\r
                    </TableCell>\r
                    <TableCell cellWidth="md">{item.product}</TableCell>\r
                    <TableCell cellWidth="sm" variant="numeric">¥{item.price}</TableCell>\r
                    <TableCell cellWidth="sm" variant="numeric">{item.stock}</TableCell>\r
                    <TableCell cellWidth="sm">{item.category}</TableCell>\r
                    <TableCell cellWidth="sm">\r
                      <Tag variant={item.status === '在售' ? 'success' : item.status === '缺货' ? 'destructive' : 'warning'}>\r
                        {item.status}\r
                      </Tag>\r
                    </TableCell>\r
                  </TableRow>)}\r
              </TableBody>\r
            </Table>\r
          </TableWrapper>\r
\r
          <TablePagination pagination={pagination} onPageChange={handlePageChange} showTotal={(total, range) => \`显示第 \${range[0]}-\${range[1]} 项，共 \${total} 项产品\`} />\r
        </div>\r
      </div>;
  }
}`,...(Te=(be=I.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};const qe=["Default","PageStickyHeader","WithSelectableRows","EmptyState","HorizontalScroll","ColumnWidthGuide","LeftStickyColumns","RightStickyColumns","WithPagination","IntegratedPagination","CustomPaginationInfo"];export{k as ColumnWidthGuide,I as CustomPaginationInfo,H as Default,w as EmptyState,N as HorizontalScroll,z as IntegratedPagination,R as LeftStickyColumns,S as PageStickyHeader,P as RightStickyColumns,B as WithPagination,y as WithSelectableRows,qe as __namedExportsOrder,_e as default};
