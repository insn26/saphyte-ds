import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as f}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=f.forwardRef(({variant:n="outline",size:a="md",fullWidth:d=!1,className:s="",children:I,...P},$)=>{const D=["ds-card",`ds-card--${n}`,`ds-card--${a}`,d&&"ds-card--full-width",s].filter(Boolean).join(" ");return e.jsx("div",{ref:$,className:D,...P,children:I})});r.displayName="Card";const o=f.forwardRef(({className:n="",children:a,...d},s)=>e.jsx("div",{ref:s,className:["ds-card__header",n].filter(Boolean).join(" "),...d,children:a}));o.displayName="CardHeader";const t=f.forwardRef(({className:n="",children:a,...d},s)=>e.jsx("div",{ref:s,className:["ds-card__body",n].filter(Boolean).join(" "),...d,children:a}));t.displayName="CardBody";const y=f.forwardRef(({className:n="",children:a,...d},s)=>e.jsx("div",{ref:s,className:["ds-card__footer",n].filter(Boolean).join(" "),...d,children:a}));y.displayName="CardFooter";r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"elevated" | "outline" | "subtle" | "solid"',elements:[{name:"literal",value:'"elevated"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"subtle"'},{name:"literal",value:'"solid"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};y.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const J={title:"Components/Card",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","outline","subtle","solid"],table:{defaultValue:{summary:"outline"}}},size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},fullWidth:{control:"boolean"}}},i={render:()=>e.jsxs(r,{style:{width:360},children:[e.jsx(o,{children:e.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:"Card title"})}),e.jsx(t,{children:e.jsx("p",{style:{margin:0,fontSize:14,color:"#52525b"},children:"Cards contain content and actions about a single subject."})}),e.jsx(y,{children:e.jsx("button",{type:"button",style:{padding:"6px 12px",border:"1px solid #d4d4d8",borderRadius:6,background:"white",cursor:"pointer",fontSize:13},children:"Action"})})]})},l={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:["elevated","outline","subtle","solid"].map(n=>e.jsxs(r,{variant:n,style:{width:240},children:[e.jsx(o,{children:e.jsx("h3",{style:{margin:0,fontSize:15,fontWeight:600,textTransform:"capitalize"},children:n})}),e.jsx(t,{children:e.jsxs("p",{style:{margin:0,fontSize:13,color:"#52525b"},children:["A ",n," card example."]})})]},n))})},c={render:()=>e.jsx("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:["sm","md","lg"].map(n=>e.jsxs(r,{size:n,style:{width:220},children:[e.jsx(o,{children:e.jsxs("h3",{style:{margin:0,fontSize:14,fontWeight:600,textTransform:"capitalize"},children:[n," size"]})}),e.jsx(t,{children:e.jsxs("p",{style:{margin:0,fontSize:13,color:"#52525b"},children:["Card content with ",n," padding."]})})]},n))})},p={render:()=>e.jsx(r,{style:{width:320},children:e.jsx("p",{style:{margin:0,fontSize:14},children:"A simple card with body content only."})})},m={render:()=>e.jsxs(r,{style:{width:360},children:[e.jsx(o,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:"Project name"}),e.jsx("span",{style:{fontSize:12,color:"#71717a"},children:"2 hrs ago"})]})}),e.jsx(t,{children:e.jsx("p",{style:{margin:0,fontSize:14,color:"#52525b"},children:"A short description of the project and its current status."})})]})},u={render:()=>e.jsx("div",{style:{width:600},children:e.jsxs(r,{fullWidth:!0,variant:"elevated",children:[e.jsx(o,{children:e.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:"Full width card"})}),e.jsx(t,{children:e.jsx("p",{style:{margin:0,fontSize:14,color:"#52525b"},children:"This card stretches to fill the available width of its parent container."})})]})})},h={render:()=>e.jsxs(r,{variant:"elevated",style:{width:300},children:[e.jsx("div",{style:{width:"100%",height:160,background:"linear-gradient(135deg, #818cf8, #c084fc)",borderTopLeftRadius:6,borderTopRightRadius:6}}),e.jsxs(t,{children:[e.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:"Product name"}),e.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"#71717a"},children:"A short description about this product."})]}),e.jsxs(y,{children:[e.jsx("span",{style:{fontSize:16,fontWeight:700},children:"$49.99"}),e.jsx("button",{type:"button",style:{padding:"6px 14px",border:"none",borderRadius:6,background:"#4f46e5",color:"white",cursor:"pointer",fontSize:13,fontWeight:500},children:"Add to cart"})]})]})};var g,x,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 360
  }}>
      <CardHeader>
        <h3 style={{
        margin: 0,
        fontSize: 16,
        fontWeight: 600
      }}>Card title</h3>
      </CardHeader>
      <CardBody>
        <p style={{
        margin: 0,
        fontSize: 14,
        color: "#52525b"
      }}>
          Cards contain content and actions about a single subject.
        </p>
      </CardBody>
      <CardFooter>
        <button type="button" style={{
        padding: "6px 12px",
        border: "1px solid #d4d4d8",
        borderRadius: 6,
        background: "white",
        cursor: "pointer",
        fontSize: 13
      }}>
          Action
        </button>
      </CardFooter>
    </Card>
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var b,j,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16
  }}>
      {(["elevated", "outline", "subtle", "solid"] as const).map(variant => <Card key={variant} variant={variant} style={{
      width: 240
    }}>
          <CardHeader>
            <h3 style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 600,
          textTransform: "capitalize"
        }}>
              {variant}
            </h3>
          </CardHeader>
          <CardBody>
            <p style={{
          margin: 0,
          fontSize: 13,
          color: "#52525b"
        }}>
              A {variant} card example.
            </p>
          </CardBody>
        </Card>)}
    </div>
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var z,S,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "flex-start"
  }}>
      {(["sm", "md", "lg"] as const).map(size => <Card key={size} size={size} style={{
      width: 220
    }}>
          <CardHeader>
            <h3 style={{
          margin: 0,
          fontSize: 14,
          fontWeight: 600,
          textTransform: "capitalize"
        }}>
              {size} size
            </h3>
          </CardHeader>
          <CardBody>
            <p style={{
          margin: 0,
          fontSize: 13,
          color: "#52525b"
        }}>
              Card content with {size} padding.
            </p>
          </CardBody>
        </Card>)}
    </div>
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var R,N,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 320
  }}>
      <p style={{
      margin: 0,
      fontSize: 14
    }}>A simple card with body content only.</p>
    </Card>
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var B,T,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 360
  }}>
      <CardHeader>
        <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
          <h3 style={{
          margin: 0,
          fontSize: 16,
          fontWeight: 600
        }}>Project name</h3>
          <span style={{
          fontSize: 12,
          color: "#71717a"
        }}>2 hrs ago</span>
        </div>
      </CardHeader>
      <CardBody>
        <p style={{
        margin: 0,
        fontSize: 14,
        color: "#52525b"
      }}>
          A short description of the project and its current status.
        </p>
      </CardBody>
    </Card>
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var H,A,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 600
  }}>
      <Card fullWidth variant="elevated">
        <CardHeader>
          <h3 style={{
          margin: 0,
          fontSize: 16,
          fontWeight: 600
        }}>Full width card</h3>
        </CardHeader>
        <CardBody>
          <p style={{
          margin: 0,
          fontSize: 14,
          color: "#52525b"
        }}>
            This card stretches to fill the available width of its parent container.
          </p>
        </CardBody>
      </Card>
    </div>
}`,...(q=(A=u.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var F,V,k;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Card variant="elevated" style={{
    width: 300
  }}>
      <div style={{
      width: "100%",
      height: 160,
      background: "linear-gradient(135deg, #818cf8, #c084fc)",
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6
    }} />
      <CardBody>
        <h3 style={{
        margin: 0,
        fontSize: 16,
        fontWeight: 600
      }}>Product name</h3>
        <p style={{
        margin: "4px 0 0",
        fontSize: 13,
        color: "#71717a"
      }}>
          A short description about this product.
        </p>
      </CardBody>
      <CardFooter>
        <span style={{
        fontSize: 16,
        fontWeight: 700
      }}>$49.99</span>
        <button type="button" style={{
        padding: "6px 14px",
        border: "none",
        borderRadius: 6,
        background: "#4f46e5",
        color: "white",
        cursor: "pointer",
        fontSize: 13,
        fontWeight: 500
      }}>
          Add to cart
        </button>
      </CardFooter>
    </Card>
}`,...(k=(V=h.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const K=["Default","Variants","Sizes","SimpleBody","WithHeader","FullWidth","ProductCard"];export{i as Default,u as FullWidth,h as ProductCard,p as SimpleBody,c as Sizes,l as Variants,m as WithHeader,K as __namedExportsOrder,J as default};
