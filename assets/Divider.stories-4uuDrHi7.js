import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as E}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=E.forwardRef(({orientation:i="horizontal",variant:d="solid",thickness:p=1,color:m,label:v,labelPosition:$="center",className:B="",style:b,role:f,children:u,...x},y)=>{const t=i==="horizontal",h=v!==void 0||u!==void 0,j=["ds-divider",`ds-divider--${i}`,`ds-divider--${d}`,h&&"ds-divider--with-label",h&&`ds-divider--label-${$}`,B].filter(Boolean).join(" "),O={[t?"borderTopWidth":"borderLeftWidth"]:`${p}px`,[t?"borderRightWidth":"borderBottomWidth"]:0,[t?"borderBottomWidth":"borderRightWidth"]:0,[t?"borderLeftWidth":"borderTopWidth"]:0,[t?"borderTopStyle":"borderLeftStyle"]:d,borderColor:m??"#e4e4e7"};if(!h){const a={...O,...b};return t?(a.width="100%",a.height=0):(a.width=0,a.height="100%",a.display="inline-block"),e.jsx("div",{ref:y,className:j,role:f??"separator","aria-orientation":i,style:a,...x})}return e.jsxs("div",{ref:y,className:j,role:f??"separator","aria-orientation":i,style:b,...x,children:[e.jsx("span",{className:"ds-divider__line",style:{[t?"borderTopWidth":"borderLeftWidth"]:`${p}px`,[t?"borderTopStyle":"borderLeftStyle"]:d,borderColor:m??"#e4e4e7"},"aria-hidden":"true"}),(v||u)&&e.jsx("span",{className:"ds-divider__label",children:v??u}),e.jsx("span",{className:"ds-divider__line",style:{[t?"borderTopWidth":"borderLeftWidth"]:`${p}px`,[t?"borderTopStyle":"borderLeftStyle"]:d,borderColor:m??"#e4e4e7"},"aria-hidden":"true"})]})});r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "dashed" | "dotted"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"dashed"'},{name:"literal",value:'"dotted"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const k={title:"Components/Divider",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["solid","dashed","dotted"]},labelPosition:{control:"select",options:["start","center","end"]}}},s={render:()=>e.jsxs("div",{style:{width:400},children:[e.jsx("p",{children:"Some content above the divider."}),e.jsx(r,{}),e.jsx("p",{children:"Some content below the divider."})]})},n={render:()=>e.jsxs("div",{style:{width:400},children:[e.jsx("p",{children:"Above"}),e.jsx(r,{label:"OR"}),e.jsx("p",{children:"Below"})]})},o={render:()=>e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:32},children:[e.jsx(r,{label:"Start",labelPosition:"start"}),e.jsx(r,{label:"Center",labelPosition:"center"}),e.jsx(r,{label:"End",labelPosition:"end"})]})},l={render:()=>e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{variant:"solid"}),e.jsx(r,{variant:"dashed"}),e.jsx(r,{variant:"dotted"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",height:80},children:[e.jsx("span",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Middle"}),e.jsx(r,{orientation:"vertical",label:"OR"}),e.jsx("span",{children:"Right"})]})};var g,w,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
      <p>Some content above the divider.</p>
      <Divider />
      <p>Some content below the divider.</p>
    </div>
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var R,S,T;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
      <p>Above</p>
      <Divider label="OR" />
      <p>Below</p>
    </div>
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var L,W,N;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400,
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      <Divider label="Start" labelPosition="start" />
      <Divider label="Center" labelPosition="center" />
      <Divider label="End" labelPosition="end" />
    </div>
}`,...(N=(W=o.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var P,_,V;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
}`,...(V=(_=l.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var q,z,C;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center",
    height: 80
  }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Middle</span>
      <Divider orientation="vertical" label="OR" />
      <span>Right</span>
    </div>
}`,...(C=(z=c.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const F=["Default","WithLabel","LabelPositions","Variants","Vertical"];export{s as Default,o as LabelPositions,l as Variants,c as Vertical,n as WithLabel,F as __namedExportsOrder,k as default};
