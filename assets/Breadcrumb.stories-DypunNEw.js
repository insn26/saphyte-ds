import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as d}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const v=d.createContext(null),w=()=>{const n=d.useContext(v);if(!n)throw new Error("Breadcrumb subcomponents must be used within <Breadcrumb />");return n},c=d.forwardRef(({separator:n="/",size:s="md",className:t="",children:m,...i},u)=>{const o=d.useMemo(()=>({separator:n,size:s}),[n,s]),p=d.Children.toArray(m),H=p.length-1;return e.jsx(v.Provider,{value:o,children:e.jsx("nav",{ref:u,"aria-label":"Breadcrumb",className:["ds-breadcrumb",t].filter(Boolean).join(" "),...i,children:e.jsx("ol",{className:["ds-breadcrumb__list",`ds-breadcrumb__list--${s}`].filter(Boolean).join(" "),children:p.map((h,x)=>{const j=x===H;return e.jsxs(f.Provider,{value:{isLast:j},children:[e.jsx("li",{className:"ds-breadcrumb__item",children:h}),!j&&e.jsx("li",{className:"ds-breadcrumb__separator","aria-hidden":"true",children:n})]},d.isValidElement(h)&&h.key||x)})})})})});c.displayName="Breadcrumb";const f=d.createContext({isLast:!1}),r=d.forwardRef(({className:n="",isCurrentPage:s,children:t,...m},i)=>{const{isLast:u}=d.useContext(f),o=s??u;return e.jsx("li",{ref:i,className:["ds-breadcrumb__item",n].filter(Boolean).join(" "),"aria-current":o?"page":void 0,...m,children:t})});r.displayName="BreadcrumbItem";const a=d.forwardRef(({className:n="",isCurrentPage:s,href:t,children:m,...i},u)=>{const{isLast:o}=d.useContext(f);return s??o?e.jsx("span",{ref:u,"aria-current":"page",className:["ds-breadcrumb__current",n].filter(Boolean).join(" "),children:m}):e.jsx("a",{ref:u,href:t,className:["ds-breadcrumb__link",n].filter(Boolean).join(" "),...i,children:m})});a.displayName="BreadcrumbLink";const q=d.forwardRef(({className:n="",children:s,...t},m)=>{const{separator:i}=w();return e.jsx("li",{ref:m,className:["ds-breadcrumb__separator",n].filter(Boolean).join(" "),"aria-hidden":"true",...t,children:s??i})});q.displayName="BreadcrumbSeparator";c.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"/"',computed:!1}},spacing:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{isCurrentPage:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{href:{required:!1,tsType:{name:"string"},description:""},isCurrentPage:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};q.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const V={title:"Components/Breadcrumb",component:c,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{separator:{control:"text"},size:{control:"select",options:["sm","md","lg"]}}},l={render:()=>e.jsxs(c,{children:[e.jsx(r,{children:e.jsx(a,{href:"#",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{href:"#",children:"Products"})}),e.jsx(r,{children:e.jsx(a,{href:"#",children:"Electronics"})}),e.jsx(r,{children:e.jsx(a,{children:"Smartphones"})})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(c,{separator:"/",children:[e.jsx(r,{children:e.jsx(a,{href:"#",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{href:"#",children:"Library"})}),e.jsx(r,{children:e.jsx(a,{children:"Data"})})]}),e.jsxs(c,{separator:">",children:[e.jsx(r,{children:e.jsx(a,{href:"#",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{href:"#",children:"Library"})}),e.jsx(r,{children:e.jsx(a,{children:"Data"})})]}),e.jsxs(c,{separator:"→",children:[e.jsx(r,{children:e.jsx(a,{href:"#",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{href:"#",children:"Library"})}),e.jsx(r,{children:e.jsx(a,{children:"Data"})})]})]})},B={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(c,{size:"sm",children:[e.jsx(r,{children:e.jsx(a,{href:"#",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{children:"Current"})})]}),e.jsxs(c,{size:"md",children:[e.jsx(r,{children:e.jsx(a,{href:"#",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{children:"Current"})})]}),e.jsxs(c,{size:"lg",children:[e.jsx(r,{children:e.jsx(a,{href:"#",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{children:"Current"})})]})]})};var L,I,k;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Products</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>Smartphones</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var y,N,R;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Breadcrumb separator="/">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Library</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Data</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator=">">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Library</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Data</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator="→">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Library</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Data</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
}`,...(R=(N=b.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var g,_,C;B.parameters={...B.parameters,docs:{...(g=B.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Breadcrumb size="sm">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Current</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="md">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Current</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="lg">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Current</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
}`,...(C=(_=B.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const E=["Default","CustomSeparator","Sizes"];export{b as CustomSeparator,l as Default,B as Sizes,E as __namedExportsOrder,V as default};
