import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as Q}from"./index-Dx_1l3Sb.js";import{I as l}from"./Icon-CjffpOtC.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const U={"2xs":20,xs:24,sm:28,md:32,lg:40},n=Q.forwardRef(({size:a="md",variant:M="subtle",colorPalette:$="gray",className:G="",type:Z="button",style:F,...H},J)=>{const m=U[a],K=["ds-icon-button",`ds-icon-button--${a}`,`ds-icon-button--${M}`,`ds-icon-button--${$}`,G].filter(Boolean).join(" "),L={width:m,height:m,...F};return e.jsx("button",{ref:J,type:Z,className:K,style:L,...H})});n.displayName="IconButton";n.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{size:{required:!1,tsType:{name:"union",raw:'"2xs" | "xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "subtle" | "surface" | "outline" | "ghost"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"subtle"'},{name:"literal",value:'"surface"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"subtle"',computed:!1}},colorPalette:{required:!1,tsType:{name:"union",raw:`| "gray"
| "danger"
| "pink"
| "purple"
| "cyan"
| "saphyte"
| "info"
| "teal"
| "success"
| "yellow"
| "warning"`,elements:[{name:"literal",value:'"gray"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"saphyte"'},{name:"literal",value:'"info"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"success"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"warning"'}]},description:"",defaultValue:{value:'"gray"',computed:!1}},"aria-label":{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"",defaultValue:{value:'"button"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const le={title:"Components/IconButton",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["2xs","xs","sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["solid","subtle","surface","outline","ghost"],table:{defaultValue:{summary:"subtle"}}},colorPalette:{control:"select",options:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"],table:{defaultValue:{summary:"gray"}}},disabled:{control:"boolean"}}},t={args:{"aria-label":"Add",size:"md",variant:"subtle",colorPalette:"gray",children:e.jsx(l,{name:"plus"})}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(n,{"aria-label":"Add",size:"2xs",colorPalette:"saphyte",variant:"solid",children:e.jsx(l,{name:"plus"})}),e.jsx(n,{"aria-label":"Add",size:"xs",colorPalette:"saphyte",variant:"solid",children:e.jsx(l,{name:"plus"})}),e.jsx(n,{"aria-label":"Add",size:"sm",colorPalette:"saphyte",variant:"solid",children:e.jsx(l,{name:"plus"})}),e.jsx(n,{"aria-label":"Add",size:"md",colorPalette:"saphyte",variant:"solid",children:e.jsx(l,{name:"plus"})}),e.jsx(n,{"aria-label":"Add",size:"lg",colorPalette:"saphyte",variant:"solid",children:e.jsx(l,{name:"plus"})})]})},s={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(n,{"aria-label":a,colorPalette:a,variant:"solid",children:e.jsx(l,{name:"plus"})},a))})},o={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(n,{"aria-label":a,colorPalette:a,variant:"subtle",children:e.jsx(l,{name:"plus"})},a))})},i={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(n,{"aria-label":a,colorPalette:a,variant:"surface",children:e.jsx(l,{name:"plus"})},a))})},c={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(n,{"aria-label":a,colorPalette:a,variant:"outline",children:e.jsx(l,{name:"plus"})},a))})},d={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(n,{"aria-label":a,colorPalette:a,variant:"ghost",children:e.jsx(l,{name:"plus"})},a))})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(n,{"aria-label":"Add",colorPalette:"saphyte",variant:"solid",children:e.jsx(l,{name:"plus"})}),e.jsx(n,{"aria-label":"Add",colorPalette:"saphyte",variant:"solid",disabled:!0,children:e.jsx(l,{name:"plus"})})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(n,{"aria-label":"Add",colorPalette:"success",variant:"solid",children:e.jsx(l,{name:"plus"})}),e.jsx(n,{"aria-label":"Delete",colorPalette:"danger",variant:"solid",children:e.jsx(l,{name:"trash"})}),e.jsx(n,{"aria-label":"Edit",colorPalette:"saphyte",variant:"solid",children:e.jsx(l,{name:"settings"})}),e.jsx(n,{"aria-label":"Search",colorPalette:"gray",variant:"subtle",children:e.jsx(l,{name:"search"})}),e.jsx(n,{"aria-label":"Menu",colorPalette:"gray",variant:"subtle",children:e.jsx(l,{name:"menu"})}),e.jsx(n,{"aria-label":"Close",colorPalette:"gray",variant:"ghost",children:e.jsx(l,{name:"x"})})]})};var y,g,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    "aria-label": "Add",
    size: "md",
    variant: "subtle",
    colorPalette: "gray",
    children: <Icon name="plus" />
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,f,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <IconButton aria-label="Add" size="2xs" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" size="xs" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" size="sm" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" size="md" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" size="lg" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
    </div>
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,I,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <IconButton key={p} aria-label={p} colorPalette={p} variant="solid">
          <Icon name="plus" />
        </IconButton>)}
    </div>
}`,...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var w,B,P;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <IconButton key={p} aria-label={p} colorPalette={p} variant="subtle">
          <Icon name="plus" />
        </IconButton>)}
    </div>
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var S,k,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <IconButton key={p} aria-label={p} colorPalette={p} variant="surface">
          <Icon name="plus" />
        </IconButton>)}
    </div>
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var z,W,V;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <IconButton key={p} aria-label={p} colorPalette={p} variant="outline">
          <Icon name="plus" />
        </IconButton>)}
    </div>
}`,...(V=(W=c.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var D,N,q;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <IconButton key={p} aria-label={p} colorPalette={p} variant="ghost">
          <Icon name="plus" />
        </IconButton>)}
    </div>
}`,...(q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var E,T,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <IconButton aria-label="Add" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" colorPalette="saphyte" variant="solid" disabled>
        <Icon name="plus" />
      </IconButton>
    </div>
}`,...(O=(T=p.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var _,R,C;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <IconButton aria-label="Add" colorPalette="success" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Delete" colorPalette="danger" variant="solid">
        <Icon name="trash" />
      </IconButton>
      <IconButton aria-label="Edit" colorPalette="saphyte" variant="solid">
        <Icon name="settings" />
      </IconButton>
      <IconButton aria-label="Search" colorPalette="gray" variant="subtle">
        <Icon name="search" />
      </IconButton>
      <IconButton aria-label="Menu" colorPalette="gray" variant="subtle">
        <Icon name="menu" />
      </IconButton>
      <IconButton aria-label="Close" colorPalette="gray" variant="ghost">
        <Icon name="x" />
      </IconButton>
    </div>
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const te=["Default","Sizes","Solid","Subtle","Surface","Outline","Ghost","States","WithDifferentIcons"];export{t as Default,d as Ghost,c as Outline,r as Sizes,s as Solid,p as States,o as Subtle,i as Surface,u as WithDifferentIcons,te as __namedExportsOrder,le as default};
