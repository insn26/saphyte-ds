import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as B}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const M={sm:{width:"120px",height:"12px"},md:{width:"200px",height:"16px"},lg:{width:"320px",height:"20px"},full:{width:"100%",height:"16px"}},t=B.forwardRef(({size:R="md",shape:h="text",width:T,height:C,className:q="",style:V,..._},E)=>{const d=M[R],o=h==="circle",L=["ds-skeleton",`ds-skeleton--${h}`,q].filter(Boolean).join(" "),O={width:T??(o?d.height:d.width),height:C??d.height,borderRadius:o?"50%":h==="text"?"4px":"6px",...V};return e.jsx("div",{ref:E,className:L,style:O,..._})});t.displayName="Skeleton";t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "full"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"text" | "circle" | "rect"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"circle"'},{name:"literal",value:'"rect"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const G={title:"Components/Skeleton",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","full"],table:{defaultValue:{summary:"md"}}},shape:{control:"select",options:["text","circle","rect"],table:{defaultValue:{summary:"text"}}},width:{control:"text"},height:{control:"text"}}},s={args:{size:"md",shape:"text"}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(t,{size:"sm"}),e.jsx(t,{size:"md"}),e.jsx(t,{size:"lg"}),e.jsx(t,{size:"full"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(t,{shape:"text",width:200,height:16}),e.jsx(t,{shape:"circle",width:48,height:48}),e.jsx(t,{shape:"rect",width:120,height:80})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(t,{shape:"circle",width:24,height:24}),e.jsx(t,{shape:"circle",width:32,height:32}),e.jsx(t,{shape:"circle",width:48,height:48}),e.jsx(t,{shape:"circle",width:64,height:64}),e.jsx(t,{shape:"circle",width:96,height:96})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:320},children:[e.jsx(t,{shape:"text",width:"100%",height:18}),e.jsx(t,{shape:"text",width:"92%",height:14}),e.jsx(t,{shape:"text",width:"80%",height:14}),e.jsx(t,{shape:"text",width:"60%",height:14})]})},r={render:()=>e.jsxs("div",{style:{width:320,padding:16,border:"1px solid #e4e4e7",borderRadius:8,display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(t,{shape:"circle",width:40,height:40}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{shape:"text",width:"60%",height:12}),e.jsx(t,{shape:"text",width:"40%",height:10})]})]}),e.jsx(t,{shape:"rect",width:"100%",height:120}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx(t,{shape:"text",width:"100%",height:12}),e.jsx(t,{shape:"text",width:"90%",height:12}),e.jsx(t,{shape:"text",width:"70%",height:12})]})]})};var c,p,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "md",
    shape: "text"
  }
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var m,g,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
      <Skeleton size="full" />
    </div>
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,w,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Skeleton shape="text" width={200} height={16} />
      <Skeleton shape="circle" width={48} height={48} />
      <Skeleton shape="rect" width={120} height={80} />
    </div>
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var y,j,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <Skeleton shape="circle" width={24} height={24} />
      <Skeleton shape="circle" width={32} height={32} />
      <Skeleton shape="circle" width={48} height={48} />
      <Skeleton shape="circle" width={64} height={64} />
      <Skeleton shape="circle" width={96} height={96} />
    </div>
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var k,z,D;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: 320
  }}>
      <Skeleton shape="text" width="100%" height={18} />
      <Skeleton shape="text" width="92%" height={14} />
      <Skeleton shape="text" width="80%" height={14} />
      <Skeleton shape="text" width="60%" height={14} />
    </div>
}`,...(D=(z=a.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var b,I,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    padding: 16,
    border: "1px solid #e4e4e7",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <div style={{
      display: "flex",
      gap: 12,
      alignItems: "center"
    }}>
        <Skeleton shape="circle" width={40} height={40} />
        <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>
          <Skeleton shape="text" width="60%" height={12} />
          <Skeleton shape="text" width="40%" height={10} />
        </div>
      </div>
      <Skeleton shape="rect" width="100%" height={120} />
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 6
    }}>
        <Skeleton shape="text" width="100%" height={12} />
        <Skeleton shape="text" width="90%" height={12} />
        <Skeleton shape="text" width="70%" height={12} />
      </div>
    </div>
}`,...(N=(I=r.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const H=["Default","Sizes","Shapes","CircleSizes","TextLines","CardSkeleton"];export{r as CardSkeleton,l as CircleSizes,s as Default,n as Shapes,i as Sizes,a as TextLines,H as __namedExportsOrder,G as default};
