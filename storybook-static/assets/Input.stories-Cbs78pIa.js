import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as I}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=I.forwardRef(({size:v="md",variant:y="outline",invalid:u=!1,disabled:j,leftIcon:m,rightIcon:h,label:w,helperText:x,errorText:f,fullWidth:g=!1,className:Q="",id:X,...Y},Z)=>{const ee=I.useId(),l=X??`ds-input-${ee}`,ae=f?`${l}-error`:x?`${l}-helper`:void 0,le=["ds-input-wrapper",`ds-input-wrapper--${v}`,`ds-input-wrapper--${y}`,u&&"ds-input-wrapper--invalid",j&&"ds-input-wrapper--disabled",g&&"ds-input-wrapper--full-width"].filter(Boolean).join(" "),re=["ds-input",`ds-input--${v}`,`ds-input--${y}`,u&&"ds-input--invalid",m&&"ds-input--has-left-icon",h&&"ds-input--has-right-icon",Q].filter(Boolean).join(" ");return e.jsxs("div",{className:g?"ds-input-root ds-input-root--full":"ds-input-root",children:[w&&e.jsx("label",{className:"ds-input__label",htmlFor:l,children:w}),e.jsxs("div",{className:le,children:[m&&e.jsx("span",{className:"ds-input__icon ds-input__icon--left","aria-hidden":"true",children:m}),e.jsx("input",{ref:Z,id:l,className:re,disabled:j,"aria-invalid":u||void 0,"aria-describedby":ae,...Y}),h&&e.jsx("span",{className:"ds-input__icon ds-input__icon--right","aria-hidden":"true",children:h})]}),f?e.jsx("p",{id:`${l}-error`,className:"ds-input__error-text",role:"alert",children:f}):x?e.jsx("p",{id:`${l}-helper`,className:"ds-input__helper-text",children:x}):null]})});a.displayName="Input";a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "filled" | "flushed"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"flushed"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},helperText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},errorText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const de={title:"Components/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["outline","filled","flushed"],table:{defaultValue:{summary:"outline"}}},invalid:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},placeholder:{control:"text"}}},r={args:{placeholder:"Enter text...",size:"md",variant:"outline"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(a,{size:"xs",placeholder:"Extra small"}),e.jsx(a,{size:"sm",placeholder:"Small"}),e.jsx(a,{size:"md",placeholder:"Medium"}),e.jsx(a,{size:"lg",placeholder:"Large"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(a,{variant:"outline",placeholder:"Outline variant"}),e.jsx(a,{variant:"filled",placeholder:"Filled variant"}),e.jsx(a,{variant:"flushed",placeholder:"Flushed variant"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(a,{label:"Email",placeholder:"you@example.com"}),e.jsx(a,{label:"Username",placeholder:"@handle"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(a,{label:"Password",type:"password",placeholder:"Enter password",helperText:"Must be at least 8 characters"}),e.jsx(a,{label:"Email",placeholder:"you@example.com",helperText:"We will never share your email"})]})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:e.jsx(a,{label:"Email",placeholder:"you@example.com",defaultValue:"not-an-email",invalid:!0,errorText:"Please enter a valid email address"})})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(a,{placeholder:"Search...",leftIcon:e.jsx("span",{children:"🔍"})}),e.jsx(a,{placeholder:"0.00",leftIcon:e.jsx("span",{children:"$"}),rightIcon:e.jsx("span",{children:"USD"})})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(a,{placeholder:"Default"}),e.jsx(a,{placeholder:"Disabled",disabled:!0}),e.jsx(a,{placeholder:"Invalid",invalid:!0,defaultValue:"invalid value"}),e.jsx(a,{placeholder:"Read only",readOnly:!0,defaultValue:"Read only value"})]})},c={render:()=>e.jsx("div",{style:{width:480},children:e.jsx(a,{fullWidth:!0,placeholder:"Full width input",size:"lg"})})};var b,R,D;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    variant: "outline"
  }
}`,...(D=(R=r.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var N,S,T;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Input size="xs" placeholder="Extra small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,E,z;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Input variant="outline" placeholder="Outline variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="flushed" placeholder="Flushed variant" />
    </div>
}`,...(z=(E=n.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var V,W,$;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Input label="Email" placeholder="you@example.com" />
      <Input label="Username" placeholder="@handle" />
    </div>
}`,...($=(W=t.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var q,F,O;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Input label="Password" type="password" placeholder="Enter password" helperText="Must be at least 8 characters" />
      <Input label="Email" placeholder="you@example.com" helperText="We will never share your email" />
    </div>
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var L,M,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Input label="Email" placeholder="you@example.com" defaultValue="not-an-email" invalid errorText="Please enter a valid email address" />
    </div>
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,B,C;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Input placeholder="Search..." leftIcon={<span>🔍</span>} />
      <Input placeholder="0.00" leftIcon={<span>$</span>} rightIcon={<span>USD</span>} />
    </div>
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var H,k,A;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Invalid" invalid defaultValue="invalid value" />
      <Input placeholder="Read only" readOnly defaultValue="Read only value" />
    </div>
}`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var G,J,K;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 480
  }}>
      <Input fullWidth placeholder="Full width input" size="lg" />
    </div>
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const oe=["Default","Sizes","Variants","WithLabel","WithHelperText","WithErrorText","WithIcons","States","FullWidth"];export{r as Default,c as FullWidth,s as Sizes,p as States,n as Variants,d as WithErrorText,i as WithHelperText,o as WithIcons,t as WithLabel,oe as __namedExportsOrder,de as default};
