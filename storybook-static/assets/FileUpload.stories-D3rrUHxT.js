import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{c as L}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const $={title:"Data Entry/FileUpload",component:L,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{accept:{control:"text",description:"接受的文件类型"},maxSize:{control:"number",description:"最大文件大小（字节）"},disabled:{control:"boolean",description:"是否禁用"},helperText:{control:"text",description:"辅助说明文字"},placeholder:{control:"text",description:"按钮占位文字"},variant:{control:"radio",options:["button","dropzone"],description:"组件变体"}}},e={args:{helperText:"请选择要上传的文件",placeholder:"选择文件"}},r={args:{maxSize:2*1024*1024,helperText:"文件大小不能超过 2MB",placeholder:"选择文件"}},o={args:{accept:"image/*",maxSize:5*1024*1024,helperText:"仅支持图片格式，大小不超过 5MB",placeholder:"选择图片"}},a={args:{accept:".pdf,.doc,.docx,.txt",maxSize:10*1024*1024,helperText:"支持 PDF、Word 文档和文本文件，大小不超过 10MB",placeholder:"选择文档"}},t={args:{variant:"dropzone",placeholder:"点击上传或将文件拖拽到此处"}},n={args:{variant:"dropzone",accept:"image/*",maxSize:5*1024*1024,placeholder:"上传图片文件"}},p={args:{variant:"dropzone",accept:".pdf,.doc,.docx",maxSize:10*1024*1024,placeholder:"上传文档"}},c={args:{variant:"dropzone",disabled:!0,placeholder:"上传已禁用"}};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    helperText: '请选择要上传的文件',
    placeholder: '选择文件'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    maxSize: 2 * 1024 * 1024,
    // 2MB
    helperText: '文件大小不能超过 2MB',
    placeholder: '选择文件'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,z;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024,
    // 5MB
    helperText: '仅支持图片格式，大小不超过 5MB',
    placeholder: '选择图片'
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var h,D,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    accept: '.pdf,.doc,.docx,.txt',
    maxSize: 10 * 1024 * 1024,
    // 10MB
    helperText: '支持 PDF、Word 文档和文本文件，大小不超过 10MB',
    placeholder: '选择文档'
  }
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var B,M,f;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'dropzone',
    placeholder: '点击上传或将文件拖拽到此处'
  }
}`,...(f=(M=t.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var T,v,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'dropzone',
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024,
    // 5MB
    placeholder: '上传图片文件'
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,O,F;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'dropzone',
    accept: '.pdf,.doc,.docx',
    maxSize: 10 * 1024 * 1024,
    // 10MB
    placeholder: '上传文档'
  }
}`,...(F=(O=p.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var I,W,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'dropzone',
    disabled: true,
    placeholder: '上传已禁用'
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const ee=["Default","WithSizeLimit","ImageOnly","DocumentsOnly","DropzoneDefault","DropzoneImageOnly","DropzoneDocuments","DropzoneDisabled"];export{e as Default,a as DocumentsOnly,t as DropzoneDefault,c as DropzoneDisabled,p as DropzoneDocuments,n as DropzoneImageOnly,o as ImageOnly,r as WithSizeLimit,ee as __namedExportsOrder,$ as default};
