import{f as o}from"./index-BxLnRenJ.js";import{T as p}from"./top-nav-Bx57XzOR.js";import"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";import"./avatar-BYSUeMhA.js";import"./button-BOzJErBH.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";const h={title:"Navigation/TopNav",component:p,parameters:{layout:"fullscreen",docs:{description:{component:"顶部导航栏组件，支持已登录和未登录两种状态。已登录状态显示帮助按钮和用户头像，未登录状态显示帮助按钮和登录按钮。"}}},argTypes:{isLoggedIn:{description:"是否为登录状态",control:"boolean"},avatarSrc:{description:"用户头像URL",control:"text"},avatarFallback:{description:"用户头像回退文字",control:"text"},userName:{description:"用户名",control:"text"},onHelpClick:{description:"帮助按钮点击回调"},onAvatarClick:{description:"头像点击回调（个人中心）"},onLoginClick:{description:"登录按钮点击回调"},onLogoClick:{description:"Logo点击回调"}},args:{onHelpClick:o(),onAvatarClick:o(),onLoginClick:o(),onLogoClick:o()}},a={args:{isLoggedIn:!0,userName:"张三",avatarSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",avatarFallback:"张"},parameters:{docs:{description:{story:"已登录状态：显示帮助按钮和用户头像。点击头像可进入个人中心。"}}}},r={args:{isLoggedIn:!1},parameters:{docs:{description:{story:"未登录状态：显示帮助按钮和登录按钮。"}}}};var e,t,n;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    isLoggedIn: true,
    userName: '张三',
    avatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    avatarFallback: '张'
  },
  parameters: {
    docs: {
      description: {
        story: '已登录状态：显示帮助按钮和用户头像。点击头像可进入个人中心。'
      }
    }
  }
}`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isLoggedIn: false
  },
  parameters: {
    docs: {
      description: {
        story: '未登录状态：显示帮助按钮和登录按钮。'
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["LoggedIn","NotLoggedIn"];export{a as LoggedIn,r as NotLoggedIn,y as __namedExportsOrder,h as default};
