import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import{T as a}from"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const G={title:"Base/Typography",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","body","muted"]},asChild:{control:{type:"boolean"}}}},r={args:{children:"这是默认的正文文本，使用标准的字体大小和行高。"}},s={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{variant:"h1",children:"H1 页面级别的主标题 - 一个页面只能有一个"}),e.jsx(a,{variant:"h2",children:"H2 次级标题 - 用于模块的标题"}),e.jsx(a,{variant:"h3",children:"H3 次次级标题 - 用于模块内部的标题"}),e.jsx(a,{variant:"body",children:"Body 这是正文文本。适合大部分内容展示，具有良好的可读性和适中的字体大小。"}),e.jsx(a,{variant:"muted",children:"Muted 这是弱化文本，通常用于补充说明或次要信息。"})]})},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"字体大小系统 (与Tailwind默认命名一致)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center",children:"xs"}),e.jsx("span",{className:"text-xs",children:"小字体 (12px) - 适用于辅助信息、标签"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center",children:"sm"}),e.jsx("span",{className:"text-sm",children:"中小字体 (14px) - 适用于正文内容"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-base bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center",children:"base"}),e.jsx("span",{className:"text-base",children:"基础字体 (16px) - 适用于重要内容"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-lg bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center",children:"lg"}),e.jsx("span",{className:"text-lg",children:"大字体 (18px) - 适用于强调内容"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xl bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center",children:"xl"}),e.jsx("span",{className:"text-xl",children:"特大字体 (20px) - 适用于标题内容"})]})]})]})},t={render:()=>e.jsxs("div",{className:"space-y-6 p-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 mb-2",children:"无行高 (leading-none) - 适用于标题、标签、紧凑布局"}),e.jsx("p",{className:"text-sm leading-none border-l-4 border-blue-200 pl-4",children:"这是一段使用无行高的文本示例。 适用于标题、标签等需要紧凑显示的场景。 行与行之间的间距最小，适合简短的文本内容。"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 mb-2",children:"1.5倍行高 (leading-normal) - 适用于正文内容、阅读文本"}),e.jsx("p",{className:"text-sm leading-normal border-l-4 border-green-200 pl-4",children:"这是一段使用1.5倍行高的文本示例。 适用于正文内容和需要良好阅读体验的文本。 行与行之间有适中的间距，提供良好的可读性。"})]})]})},p={render:()=>e.jsx("div",{className:"space-y-6 p-6",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"h1",className:"leading-none",children:"设计系统文档"}),e.jsx(a,{variant:"body",children:"这是一个完整的设计系统文档示例，展示了标题层次的语义化使用。H1作为页面的主标题，H2用于模块标题。"}),e.jsx(a,{variant:"body",className:"leading-normal",children:"在设计系统中，正确使用标题层次非常重要。H1应该是页面的唯一主标题，H2用于划分主要模块，H3用于模块内的子章节。"}),e.jsx(a,{variant:"h2",className:"leading-none",children:"字体系统模块"}),e.jsx(a,{variant:"body",className:"leading-normal",children:"我们的字体大小系统采用了5档设计，从最小的xs到最大的xl， 每一档都有其特定的使用场景和目的。这种渐进式的设计确保了 文本在不同设备和场景下都能保持良好的可读性。"}),e.jsx(a,{variant:"h3",className:"leading-none",children:"使用规范"}),e.jsx(a,{variant:"body",className:"leading-normal",children:"请遵循语义化的标题使用原则，确保页面结构清晰，便于用户理解和搜索引擎优化。"}),e.jsx(a,{variant:"muted",className:"leading-none",children:"这是一段辅助说明文本，通常用于提供额外的上下文信息。"})]})})};var o,l,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: '这是默认的正文文本，使用标准的字体大小和行高。'
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <Typography variant="h1">H1 页面级别的主标题 - 一个页面只能有一个</Typography>\r
      <Typography variant="h2">H2 次级标题 - 用于模块的标题</Typography>\r
      <Typography variant="h3">H3 次次级标题 - 用于模块内部的标题</Typography>\r
      <Typography variant="body">Body 这是正文文本。适合大部分内容展示，具有良好的可读性和适中的字体大小。</Typography>\r
      <Typography variant="muted">Muted 这是弱化文本，通常用于补充说明或次要信息。</Typography>\r
    </div>
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <h3 className="text-lg font-medium mb-4">字体大小系统 (与Tailwind默认命名一致)</h3>\r
      <div className="space-y-3">\r
        <div className="flex items-center gap-4">\r
          <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">xs</span>\r
          <span className="text-xs">小字体 (12px) - 适用于辅助信息、标签</span>\r
        </div>\r
        <div className="flex items-center gap-4">\r
          <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">sm</span>\r
          <span className="text-sm">中小字体 (14px) - 适用于正文内容</span>\r
        </div>\r
        <div className="flex items-center gap-4">\r
          <span className="text-base bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">base</span>\r
          <span className="text-base">基础字体 (16px) - 适用于重要内容</span>\r
        </div>\r
        <div className="flex items-center gap-4">\r
          <span className="text-lg bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">lg</span>\r
          <span className="text-lg">大字体 (18px) - 适用于强调内容</span>\r
        </div>\r
        <div className="flex items-center gap-4">\r
          <span className="text-xl bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">xl</span>\r
          <span className="text-xl">特大字体 (20px) - 适用于标题内容</span>\r
        </div>\r
      </div>\r
    </div>
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,v,N;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-6">\r
      <div>\r
        <h4 className="text-sm font-medium text-gray-600 mb-2">无行高 (leading-none) - 适用于标题、标签、紧凑布局</h4>\r
        <p className="text-sm leading-none border-l-4 border-blue-200 pl-4">\r
          这是一段使用无行高的文本示例。\r
          适用于标题、标签等需要紧凑显示的场景。\r
          行与行之间的间距最小，适合简短的文本内容。\r
        </p>\r
      </div>\r
      \r
      <div>\r
        <h4 className="text-sm font-medium text-gray-600 mb-2">1.5倍行高 (leading-normal) - 适用于正文内容、阅读文本</h4>\r
        <p className="text-sm leading-normal border-l-4 border-green-200 pl-4">\r
          这是一段使用1.5倍行高的文本示例。\r
          适用于正文内容和需要良好阅读体验的文本。\r
          行与行之间有适中的间距，提供良好的可读性。\r
        </p>\r
      </div>\r
    </div>
}`,...(N=(v=t.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var u,b,j;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-6">\r
      <div className="space-y-4">\r
        <Typography variant="h1" className="leading-none">设计系统文档</Typography>\r
        <Typography variant="body">这是一个完整的设计系统文档示例，展示了标题层次的语义化使用。H1作为页面的主标题，H2用于模块标题。</Typography>\r
        <Typography variant="body" className="leading-normal">\r
          在设计系统中，正确使用标题层次非常重要。H1应该是页面的唯一主标题，H2用于划分主要模块，H3用于模块内的子章节。\r
        </Typography>\r
        \r
        <Typography variant="h2" className="leading-none">字体系统模块</Typography>\r
        <Typography variant="body" className="leading-normal">\r
          我们的字体大小系统采用了5档设计，从最小的xs到最大的xl，\r
          每一档都有其特定的使用场景和目的。这种渐进式的设计确保了\r
          文本在不同设备和场景下都能保持良好的可读性。\r
        </Typography>\r
        \r
        <Typography variant="h3" className="leading-none">使用规范</Typography>\r
        <Typography variant="body" className="leading-normal">\r
          请遵循语义化的标题使用原则，确保页面结构清晰，便于用户理解和搜索引擎优化。\r
        </Typography>\r
        \r
        <Typography variant="muted" className="leading-none">\r
          这是一段辅助说明文本，通常用于提供额外的上下文信息。\r
        </Typography>\r
      </div>\r
    </div>
}`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const I=["Default","AllVariants","FontSizeSystem","LineHeightDemo","TypographyDemo"];export{s as AllVariants,r as Default,n as FontSizeSystem,t as LineHeightDemo,p as TypographyDemo,I as __namedExportsOrder,G as default};
