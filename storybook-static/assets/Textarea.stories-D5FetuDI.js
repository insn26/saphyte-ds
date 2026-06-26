import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as w}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=w.forwardRef(({variant:m="outline",invalid:p=!1,disabled:h,label:f,helperText:u,errorText:x,fullWidth:v=!1,className:L="",id:M,rows:G=4,...J},K)=>{const P=w.useId(),r=M??`ds-textarea-${P}`,Q=x?`${r}-error`:u?`${r}-helper`:void 0,U=["ds-textarea-wrapper",`ds-textarea-wrapper--${m}`,p&&"ds-textarea-wrapper--invalid",h&&"ds-textarea-wrapper--disabled",v&&"ds-textarea-wrapper--full-width"].filter(Boolean).join(" "),X=["ds-textarea",`ds-textarea--${m}`,p&&"ds-textarea--invalid",L].filter(Boolean).join(" ");return e.jsxs("div",{className:v?"ds-textarea-root ds-textarea-root--full":"ds-textarea-root",children:[f&&e.jsx("label",{className:"ds-textarea__label",htmlFor:r,children:f}),e.jsx("div",{className:U,children:e.jsx("textarea",{ref:K,id:r,className:X,rows:G,disabled:h,"aria-invalid":p||void 0,"aria-describedby":Q,...J})}),x?e.jsx("p",{id:`${r}-error`,className:"ds-textarea__error-text",role:"alert",children:x}):u?e.jsx("p",{id:`${r}-helper`,className:"ds-textarea__helper-text",children:u}):null]})});a.displayName="Textarea";a.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{variant:{required:!1,tsType:{name:"union",raw:'"outline" | "filled" | "flushed"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"flushed"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},helperText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},errorText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1},rows:{defaultValue:{value:"4",computed:!1},required:!1}}};const re={title:"Components/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled","flushed"],table:{defaultValue:{summary:"outline"}}},invalid:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},rows:{control:"number"},placeholder:{control:"text"}}},l={args:{placeholder:"Write a comment...",variant:"outline",rows:4}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:[e.jsx(a,{variant:"outline",placeholder:"Outline variant"}),e.jsx(a,{variant:"filled",placeholder:"Filled variant"}),e.jsx(a,{variant:"flushed",placeholder:"Flushed variant"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:[e.jsx(a,{label:"Description",placeholder:"Tell us a bit about yourself",rows:4}),e.jsx(a,{label:"Feedback",placeholder:"What do you think?",rows:3})]})},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:e.jsx(a,{label:"Bio",placeholder:"Write a short bio",rows:3,helperText:"Max 280 characters"})})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:e.jsx(a,{label:"Comment",placeholder:"Add a comment",rows:3,invalid:!0,errorText:"Comment cannot be empty"})})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:[e.jsx(a,{placeholder:"Default"}),e.jsx(a,{placeholder:"Disabled",disabled:!0}),e.jsx(a,{placeholder:"Read only",readOnly:!0,defaultValue:"Read only value"}),e.jsx(a,{placeholder:"Invalid",invalid:!0,defaultValue:"Invalid value"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:[e.jsx(a,{rows:2,placeholder:"2 rows"}),e.jsx(a,{rows:4,placeholder:"4 rows"}),e.jsx(a,{rows:6,placeholder:"6 rows"})]})},c={render:()=>e.jsx("div",{style:{width:480},children:e.jsx(a,{fullWidth:!0,label:"Full width",placeholder:"Full width textarea",rows:5})})};var y,b,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: "Write a comment...",
    variant: "outline",
    rows: 4
  }
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var j,g,R;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Textarea variant="outline" placeholder="Outline variant" />
      <Textarea variant="filled" placeholder="Filled variant" />
      <Textarea variant="flushed" placeholder="Flushed variant" />
    </div>
}`,...(R=(g=t.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var D,W,N;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Textarea label="Description" placeholder="Tell us a bit about yourself" rows={4} />
      <Textarea label="Feedback" placeholder="What do you think?" rows={3} />
    </div>
}`,...(N=(W=s.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var F,V,S;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Textarea label="Bio" placeholder="Write a short bio" rows={3} helperText="Max 280 characters" />
    </div>
}`,...(S=(V=o.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var _,I,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Textarea label="Comment" placeholder="Add a comment" rows={3} invalid errorText="Comment cannot be empty" />
    </div>
}`,...(q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var C,$,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Textarea placeholder="Default" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Read only" readOnly defaultValue="Read only value" />
      <Textarea placeholder="Invalid" invalid defaultValue="Invalid value" />
    </div>
}`,...(B=($=n.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var O,k,E;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Textarea rows={2} placeholder="2 rows" />
      <Textarea rows={4} placeholder="4 rows" />
      <Textarea rows={6} placeholder="6 rows" />
    </div>
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var z,A,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 480
  }}>
      <Textarea fullWidth label="Full width" placeholder="Full width textarea" rows={5} />
    </div>
}`,...(H=(A=c.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const le=["Default","Variants","WithLabel","WithHelperText","WithErrorText","States","ResizableRows","FullWidth"];export{l as Default,c as FullWidth,i as ResizableRows,n as States,t as Variants,d as WithErrorText,o as WithHelperText,s as WithLabel,le as __namedExportsOrder,re as default};
