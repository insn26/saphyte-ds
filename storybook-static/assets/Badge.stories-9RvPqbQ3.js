import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{R as D}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const s=D.forwardRef(({size:e="md",variant:r="subtle",colorPalette:R="gray",children:W,className:N="",...k},q)=>{const T=["ds-badge",`ds-badge--${e}`,`ds-badge--${r}`,`ds-badge--${R}`,N].filter(Boolean).join(" ");return a.jsx("span",{ref:q,className:T,...k,children:W})});s.displayName="Badge";s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "subtle" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"subtle"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"subtle"',computed:!1}},colorPalette:{required:!1,tsType:{name:"union",raw:`| "gray"
| "danger"
| "success"
| "warning"
| "info"
| "saphyte"`,elements:[{name:"literal",value:'"gray"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"saphyte"'}]},description:"",defaultValue:{value:'"gray"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const A={title:"Components/Badge",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["solid","subtle","outline"],table:{defaultValue:{summary:"subtle"}}},colorPalette:{control:"select",options:["gray","danger","success","warning","info","saphyte"],table:{defaultValue:{summary:"gray"}}}}},l={args:{children:"Badge",size:"md",variant:"subtle",colorPalette:"saphyte"}},n={render:()=>a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx(s,{size:"sm",colorPalette:"saphyte",children:"Small"}),a.jsx(s,{size:"md",colorPalette:"saphyte",children:"Medium"}),a.jsx(s,{size:"lg",colorPalette:"saphyte",children:"Large"})]})},t={render:()=>a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","success","warning","info","saphyte"].map(e=>a.jsx(s,{variant:"subtle",colorPalette:e,children:e},e))})},i={render:()=>a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","success","warning","info","saphyte"].map(e=>a.jsx(s,{variant:"solid",colorPalette:e,children:e},e))})},o={render:()=>a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","success","warning","info","saphyte"].map(e=>a.jsx(s,{variant:"outline",colorPalette:e,children:e},e))})},d={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:["subtle","solid","outline"].map(e=>a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","success","warning","info","saphyte"].map(r=>a.jsxs(s,{variant:e,colorPalette:r,children:[e," · ",r]},r))},e))})};var c,p,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    size: "md",
    variant: "subtle",
    colorPalette: "saphyte"
  }
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <Badge size="sm" colorPalette="saphyte">Small</Badge>
      <Badge size="md" colorPalette="saphyte">Medium</Badge>
      <Badge size="lg" colorPalette="saphyte">Large</Badge>
    </div>
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,v,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "success", "warning", "info", "saphyte"] as const).map(p => <Badge key={p} variant="subtle" colorPalette={p}>
          {p}
        </Badge>)}
    </div>
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,w,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "success", "warning", "info", "saphyte"] as const).map(p => <Badge key={p} variant="solid" colorPalette={p}>
          {p}
        </Badge>)}
    </div>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var B,P,j;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "success", "warning", "info", "saphyte"] as const).map(p => <Badge key={p} variant="outline" colorPalette={p}>
          {p}
        </Badge>)}
    </div>
}`,...(j=(P=o.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var S,z,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 8
  }}>
      {(["subtle", "solid", "outline"] as const).map(variant => <div key={variant} style={{
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }}>
          {(["gray", "danger", "success", "warning", "info", "saphyte"] as const).map(p => <Badge key={p} variant={variant} colorPalette={p}>
                {variant} · {p}
              </Badge>)}
        </div>)}
    </div>
}`,...(V=(z=d.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};const E=["Default","Sizes","Subtle","Solid","Outline","AllVariants"];export{d as AllVariants,l as Default,o as Outline,n as Sizes,i as Solid,t as Subtle,E as __namedExportsOrder,A as default};
