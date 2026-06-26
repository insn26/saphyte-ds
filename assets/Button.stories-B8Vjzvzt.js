import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as t}from"./Button-t5ptT03r.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";const Z={title:"Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["2xs","xs","sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["solid","subtle","surface","outline","ghost","plain"],table:{defaultValue:{summary:"solid"}}},colorPalette:{control:"select",options:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"],table:{defaultValue:{summary:"gray"}}},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},n={args:{children:"Button",size:"md",variant:"solid",colorPalette:"saphyte"}},r={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(t,{colorPalette:a,variant:"solid",children:"Button"},a))})},s={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(t,{colorPalette:a,variant:"subtle",children:"Button"},a))})},l={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(t,{colorPalette:a,variant:"surface",children:"Button"},a))})},o={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(t,{colorPalette:a,variant:"outline",children:"Button"},a))})},p={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(t,{colorPalette:a,variant:"ghost",children:"Button"},a))})},c={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","pink","purple","cyan","saphyte","info","teal","success","yellow","warning"].map(a=>e.jsx(t,{colorPalette:a,variant:"plain",children:"Button"},a))})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(t,{size:"2xs",colorPalette:"saphyte",children:"2xs"}),e.jsx(t,{size:"xs",colorPalette:"saphyte",children:"xs"}),e.jsx(t,{size:"sm",colorPalette:"saphyte",children:"sm"}),e.jsx(t,{size:"md",colorPalette:"saphyte",children:"md"}),e.jsx(t,{size:"lg",colorPalette:"saphyte",children:"lg"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(t,{colorPalette:"saphyte",children:"Default"}),e.jsx(t,{colorPalette:"saphyte",disabled:!0,children:"Disabled"}),e.jsx(t,{colorPalette:"saphyte",loading:!0,children:"Loading"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(t,{leftIcon:e.jsx("span",{children:"←"}),colorPalette:"saphyte",children:"Back"}),e.jsx(t,{rightIcon:e.jsx("span",{children:"→"}),colorPalette:"saphyte",children:"Next"}),e.jsx(t,{leftIcon:e.jsx("span",{children:"+"}),colorPalette:"success",children:"Add item"}),e.jsx(t,{leftIcon:e.jsx("span",{children:"×"}),colorPalette:"danger",variant:"ghost",children:"Delete"})]})},y={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(t,{fullWidth:!0,colorPalette:"saphyte",size:"lg",children:"Full width button"})})};var g,m,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Button",
    size: "md",
    variant: "solid",
    colorPalette: "saphyte"
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,f,B;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <Button key={p} colorPalette={p} variant="solid">Button</Button>)}
    </div>
}`,...(B=(f=r.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,w,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <Button key={p} colorPalette={p} variant="subtle">Button</Button>)}
    </div>
}`,...(P=(w=s.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var j,k,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <Button key={p} colorPalette={p} variant="surface">Button</Button>)}
    </div>
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var W,b,z;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <Button key={p} colorPalette={p} variant="outline">Button</Button>)}
    </div>
}`,...(z=(b=o.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var I,D,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <Button key={p} colorPalette={p} variant="ghost">Button</Button>)}
    </div>
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var O,V,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map(p => <Button key={p} colorPalette={p} variant="plain">Button</Button>)}
    </div>
}`,...(A=(V=c.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var E,G,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <Button size="2xs" colorPalette="saphyte">2xs</Button>
      <Button size="xs" colorPalette="saphyte">xs</Button>
      <Button size="sm" colorPalette="saphyte">sm</Button>
      <Button size="md" colorPalette="saphyte">md</Button>
      <Button size="lg" colorPalette="saphyte">lg</Button>
    </div>
}`,...(L=(G=i.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var N,_,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <Button colorPalette="saphyte">Default</Button>
      <Button colorPalette="saphyte" disabled>Disabled</Button>
      <Button colorPalette="saphyte" loading>Loading</Button>
    </div>
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var R,T,q;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      <Button leftIcon={<span>←</span>} colorPalette="saphyte">Back</Button>
      <Button rightIcon={<span>→</span>} colorPalette="saphyte">Next</Button>
      <Button leftIcon={<span>+</span>} colorPalette="success">Add item</Button>
      <Button leftIcon={<span>×</span>} colorPalette="danger" variant="ghost">Delete</Button>
    </div>
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var H,J,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Button fullWidth colorPalette="saphyte" size="lg">Full width button</Button>
    </div>
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const $=["Default","Solid","Subtle","Surface","Outline","Ghost","Plain","Sizes","States","WithIcons","FullWidth"];export{n as Default,y as FullWidth,p as Ghost,o as Outline,c as Plain,i as Sizes,r as Solid,d as States,s as Subtle,l as Surface,u as WithIcons,$ as __namedExportsOrder,Z as default};
