import{j as i}from"./jsx-runtime-CDt2p4po.js";import"./button-BOzJErBH.js";import"./form-DqnBwsHn.js";import"./avatar-BYSUeMhA.js";import"./block-layout-D-p3nEi9.js";import"./input-CSREpmAm.js";import"./button-group-BF4G9tiV.js";import"./color-palette-D4ovNoSo.js";import{k as a,l as e,m as n,n as t,o as r,p as d,q as o}from"./page-header-CCd0yR5Z.js";import"./city-select-BCBS-J65.js";import"./cascader-BW_rWrKa.js";import"./tags-input-BAcvn557.js";import"./top-nav-Bx57XzOR.js";import"./toast-BISE-kuu.js";import"./tags-3RK0HEEA.js";import"./index-GiUgBvb1.js";import"./index-DAEUSR7T.js";import"./index-CROobee-.js";import"./utils-z-I-gj-J.js";import"./createLucideIcon-Do1tV511.js";const Z={title:"Navigation/Pagination",component:a,parameters:{layout:"centered",docs:{description:{component:"分页器组件，用于在多页内容之间导航。支持页码显示、上一页/下一页按钮和省略号。"}}},tags:["autodocs"]},s={render:()=>i.jsx(a,{children:i.jsxs(e,{children:[i.jsx(n,{children:i.jsx(t,{href:"#"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"1"})}),i.jsx(n,{children:i.jsx(r,{href:"#",isActive:!0,children:"2"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"3"})}),i.jsx(n,{children:i.jsx(d,{})}),i.jsx(n,{children:i.jsx(o,{href:"#"})})]})}),parameters:{docs:{description:{story:"基础分页器，包含上一页、页码、省略号和下一页按钮。"}}}},P={render:()=>i.jsx(a,{children:i.jsxs(e,{children:[i.jsx(n,{children:i.jsx(t,{href:"#"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"1"})}),i.jsx(n,{children:i.jsx(r,{href:"#",isActive:!0,children:"2"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"3"})}),i.jsx(n,{children:i.jsx(o,{href:"#"})})]})}),parameters:{docs:{description:{story:"简单分页器，只显示少量页码，适用于页数较少的场景。"}}}},g={render:()=>i.jsx(a,{children:i.jsxs(e,{children:[i.jsx(n,{children:i.jsx(t,{href:"#"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"1"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"2"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"3"})}),i.jsx(n,{children:i.jsx(r,{href:"#",isActive:!0,children:"4"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"5"})}),i.jsx(n,{children:i.jsx(d,{})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"20"})}),i.jsx(n,{children:i.jsx(o,{href:"#"})})]})}),parameters:{docs:{description:{story:"多页分页器，展示更多页码和省略号的使用场景。"}}}},c={render:()=>i.jsx(a,{children:i.jsxs(e,{children:[i.jsx(n,{children:i.jsx(t,{href:"#",className:"pointer-events-none opacity-50"})}),i.jsx(n,{children:i.jsx(r,{href:"#",isActive:!0,children:"1"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"2"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"3"})}),i.jsx(n,{children:i.jsx(d,{})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"10"})}),i.jsx(n,{children:i.jsx(o,{href:"#"})})]})}),parameters:{docs:{description:{story:"第一页状态，上一页按钮被禁用。"}}}},m={render:()=>i.jsx(a,{children:i.jsxs(e,{children:[i.jsx(n,{children:i.jsx(t,{href:"#"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"1"})}),i.jsx(n,{children:i.jsx(d,{})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"8"})}),i.jsx(n,{children:i.jsx(r,{href:"#",children:"9"})}),i.jsx(n,{children:i.jsx(r,{href:"#",isActive:!0,children:"10"})}),i.jsx(n,{children:i.jsx(o,{href:"#",className:"pointer-events-none opacity-50"})})]})}),parameters:{docs:{description:{story:"最后一页状态，下一页按钮被禁用。"}}}},h={render:()=>i.jsx(a,{children:i.jsxs(e,{children:[i.jsx(n,{children:i.jsx(t,{href:"#"})}),i.jsx(n,{children:i.jsx(o,{href:"#"})})]})}),parameters:{docs:{description:{story:"极简分页器，只显示上一页和下一页按钮，适用于简单的翻页场景。"}}}};var l,x,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>\r
            2\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>,
  parameters: {
    docs: {
      description: {
        story: '基础分页器，包含上一页、页码、省略号和下一页按钮。'
      }
    }
  }
}`,...(p=(x=s.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var j,I,f;P.parameters={...P.parameters,docs:{...(j=P.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>\r
            2\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>,
  parameters: {
    docs: {
      description: {
        story: '简单分页器，只显示少量页码，适用于页数较少的场景。'
      }
    }
  }
}`,...(f=(I=P.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,k,u;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">2</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>\r
            4\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">5</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">20</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>,
  parameters: {
    docs: {
      description: {
        story: '多页分页器，展示更多页码和省略号的使用场景。'
      }
    }
  }
}`,...(u=(k=g.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var v,y,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" className="pointer-events-none opacity-50" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>\r
            1\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">2</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">10</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>,
  parameters: {
    docs: {
      description: {
        story: '第一页状态，上一页按钮被禁用。'
      }
    }
  }
}`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var C,A,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">8</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">9</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>\r
            10\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" className="pointer-events-none opacity-50" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>,
  parameters: {
    docs: {
      description: {
        story: '最后一页状态，下一页按钮被禁用。'
      }
    }
  }
}`,...(S=(A=m.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var E,O,D;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>,
  parameters: {
    docs: {
      description: {
        story: '极简分页器，只显示上一页和下一页按钮，适用于简单的翻页场景。'
      }
    }
  }
}`,...(D=(O=h.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const $=["Default","Simple","WithManyPages","FirstPage","LastPage","OnlyPrevNext"];export{s as Default,c as FirstPage,m as LastPage,h as OnlyPrevNext,P as Simple,g as WithManyPages,$ as __namedExportsOrder,Z as default};
