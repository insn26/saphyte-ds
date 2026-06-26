import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as p}from"./index-Dx_1l3Sb.js";import{B as _}from"./Button-t5ptT03r.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=p.forwardRef(({className:t="",size:a="md",children:r,...s},y)=>e.jsx("div",{ref:y,className:["ds-empty-state",`ds-empty-state--${a}`,t].filter(Boolean).join(" "),...s,children:r}));n.displayName="EmptyState";const m=p.forwardRef(({className:t="",children:a,size:r,...s},y)=>e.jsx("div",{ref:y,className:["ds-empty-state__icon",t].filter(Boolean).join(" "),"aria-hidden":"true",...s,children:a}));m.displayName="EmptyStateIcon";const o=p.forwardRef(({className:t="",children:a,...r},s)=>e.jsx("h3",{ref:s,className:["ds-empty-state__title",t].filter(Boolean).join(" "),...r,children:a}));o.displayName="EmptyStateTitle";const i=p.forwardRef(({className:t="",children:a,...r},s)=>e.jsx("p",{ref:s,className:["ds-empty-state__description",t].filter(Boolean).join(" "),...r,children:a}));i.displayName="EmptyStateDescription";const u=p.forwardRef(({className:t="",children:a,...r},s)=>e.jsx("div",{ref:s,className:["ds-empty-state__action",t].filter(Boolean).join(" "),...r,children:a}));u.displayName="EmptyStateAction";const T=()=>e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"9",y1:"13",x2:"15",y2:"13"}),e.jsx("line",{x1:"9",y1:"17",x2:"13",y2:"17"})]});n.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"EmptyStateIcon",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"number"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"EmptyStateTitle",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"EmptyStateDescription",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"EmptyStateAction",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"DefaultEmptyIcon"};const q={title:"Components/EmptyState",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},c={render:()=>e.jsxs(n,{children:[e.jsx(m,{children:e.jsx(T,{})}),e.jsx(o,{children:"No projects yet"}),e.jsx(i,{children:"Get started by creating your first project."}),e.jsx(u,{children:e.jsx(_,{colorPalette:"saphyte",children:"Create project"})})]})},l={render:()=>e.jsxs(n,{children:[e.jsx(m,{children:e.jsx("span",{style:{fontSize:24},children:"📭"})}),e.jsx(o,{children:"No results found"}),e.jsx(i,{children:"Try adjusting your search or filters."})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs(n,{size:"sm",children:[e.jsx(o,{children:"Small"}),e.jsx(i,{children:"Compact empty state"})]}),e.jsxs(n,{size:"md",children:[e.jsx(o,{children:"Medium"}),e.jsx(i,{children:"Default empty state"})]}),e.jsxs(n,{size:"lg",children:[e.jsx(o,{children:"Large"}),e.jsx(i,{children:"Larger empty state with more breathing room"})]})]})};var f,S,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <EmptyState>
      <EmptyStateIcon>
        <DefaultEmptyIcon />
      </EmptyStateIcon>
      <EmptyStateTitle>No projects yet</EmptyStateTitle>
      <EmptyStateDescription>
        Get started by creating your first project.
      </EmptyStateDescription>
      <EmptyStateAction>
        <Button colorPalette="saphyte">Create project</Button>
      </EmptyStateAction>
    </EmptyState>
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var h,j,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <EmptyState>
      <EmptyStateIcon>
        <span style={{
        fontSize: 24
      }}>📭</span>
      </EmptyStateIcon>
      <EmptyStateTitle>No results found</EmptyStateTitle>
      <EmptyStateDescription>
        Try adjusting your search or filters.
      </EmptyStateDescription>
    </EmptyState>
}`,...(x=(j=l.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var N,g,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <EmptyState size="sm">
        <EmptyStateTitle>Small</EmptyStateTitle>
        <EmptyStateDescription>Compact empty state</EmptyStateDescription>
      </EmptyState>
      <EmptyState size="md">
        <EmptyStateTitle>Medium</EmptyStateTitle>
        <EmptyStateDescription>Default empty state</EmptyStateDescription>
      </EmptyState>
      <EmptyState size="lg">
        <EmptyStateTitle>Large</EmptyStateTitle>
        <EmptyStateDescription>Larger empty state with more breathing room</EmptyStateDescription>
      </EmptyState>
    </div>
}`,...(R=(g=d.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};const B=["Default","NoAction","Sizes"];export{c as Default,l as NoAction,d as Sizes,B as __namedExportsOrder,q as default};
