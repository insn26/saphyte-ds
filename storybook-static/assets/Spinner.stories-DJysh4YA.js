import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as W}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const q={xs:12,sm:16,md:24,lg:32,xl:48},n=W.forwardRef(({size:l="md",label:o,thickness:I,className:R="",style:w,...N},_)=>{const d=q[l],L=I??(l==="xs"?1.5:2),T=["ds-spinner",`ds-spinner--${l}`,R].filter(Boolean).join(" "),D={width:d,height:d,borderWidth:L,...w};return e.jsxs("span",{ref:_,className:"ds-spinner-root",role:"status",...N,children:[e.jsx("span",{className:T,style:D,"aria-hidden":"true"}),o&&e.jsx("span",{className:"ds-spinner__label",children:o})]})});n.displayName="Spinner";n.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},thickness:{required:!1,tsType:{name:"number"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const F={title:"Components/Spinner",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],table:{defaultValue:{summary:"md"}}},label:{control:"text"},thickness:{control:"number"}}},s={args:{size:"md"}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"}),e.jsx(n,{size:"xl"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[e.jsx(n,{size:"sm",label:"Loading..."}),e.jsx(n,{size:"md",label:"Please wait"}),e.jsx(n,{size:"lg",label:"Fetching data"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{size:"lg",thickness:1}),e.jsx(n,{size:"lg",thickness:2}),e.jsx(n,{size:"lg",thickness:3}),e.jsx(n,{size:"lg",thickness:5})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 14px",border:"none",borderRadius:6,background:"#4f46e5",color:"white",cursor:"pointer",fontSize:14,fontWeight:500},disabled:!0,children:[e.jsx(n,{size:"sm"})," Loading..."]}),e.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 14px",border:"1px solid #d4d4d8",borderRadius:6,background:"white",cursor:"pointer",fontSize:14},children:[e.jsx(n,{size:"sm"})," Saving"]})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,b,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "center"
  }}>
      <Spinner size="sm" label="Loading..." />
      <Spinner size="md" label="Please wait" />
      <Spinner size="lg" label="Fetching data" />
    </div>
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,z,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Spinner size="lg" thickness={1} />
      <Spinner size="lg" thickness={2} />
      <Spinner size="lg" thickness={3} />
      <Spinner size="lg" thickness={5} />
    </div>
}`,...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var j,v,k;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <button type="button" style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      border: "none",
      borderRadius: 6,
      background: "#4f46e5",
      color: "white",
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 500
    }} disabled>
        <Spinner size="sm" /> Loading...
      </button>
      <button type="button" style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      border: "1px solid #d4d4d8",
      borderRadius: 6,
      background: "white",
      cursor: "pointer",
      fontSize: 14
    }}>
        <Spinner size="sm" /> Saving
      </button>
    </div>
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const O=["Default","Sizes","WithLabel","CustomThickness","InButton"];export{t as CustomThickness,s as Default,a as InButton,r as Sizes,i as WithLabel,O as __namedExportsOrder,F as default};
