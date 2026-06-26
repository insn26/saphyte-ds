import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as u}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=u.forwardRef(({size:n="md",disabled:s=!1,checked:l,label:t,className:m="",id:V,...D},M)=>{const q=u.useId(),p=V??`ds-radio-${q}`,E=["ds-radio__circle",`ds-radio__circle--${n}`,l&&"ds-radio__circle--checked",s&&"ds-radio__circle--disabled"].filter(Boolean).join(" ");return e.jsxs("label",{className:["ds-radio",s&&"ds-radio--disabled",m].filter(Boolean).join(" "),htmlFor:p,children:[e.jsxs("span",{className:"ds-radio__control",children:[e.jsx("input",{ref:M,id:p,type:"radio",className:"ds-radio__input",checked:l,disabled:s,...D}),e.jsx("span",{className:E,"aria-hidden":"true",children:e.jsx("span",{className:"ds-radio__dot"})})]}),t&&e.jsx("span",{className:"ds-radio__label",children:t})]})});a.displayName="Radio";a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const w={title:"Components/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},checked:{control:"boolean"},disabled:{control:"boolean"}}},d={args:{label:"Option 1",name:"default",defaultChecked:!0}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{size:"sm",name:"size-sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",name:"size-md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",name:"size-lg",label:"Large",defaultChecked:!0})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{name:"s1",label:"Unchecked"}),e.jsx(a,{name:"s1",label:"Checked",defaultChecked:!0}),e.jsx(a,{name:"s2",label:"Disabled",disabled:!0}),e.jsx(a,{name:"s2",label:"Disabled checked",disabled:!0,defaultChecked:!0})]})},c={render:()=>{const[n,s]=u.useState("email");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(a,{name:"contact",value:"email",label:"Email",checked:n==="email",onChange:l=>s(l.target.value)}),e.jsx(a,{name:"contact",value:"sms",label:"SMS",checked:n==="sms",onChange:l=>s(l.target.value)}),e.jsx(a,{name:"contact",value:"push",label:"Push notification",checked:n==="push",onChange:l=>s(l.target.value)}),e.jsx(a,{name:"contact",value:"none",label:"None",checked:n==="none",onChange:l=>s(l.target.value)})]})}},i={render:()=>{const[n,s]=u.useState("sm"),l=[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}];return e.jsx("div",{style:{display:"flex",gap:16},children:l.map(t=>e.jsx(a,{name:"size-h",value:t.value,label:t.label,checked:n===t.value,onChange:m=>s(m.target.value)},t.value))})}};var v,h,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    name: "default",
    defaultChecked: true
  }
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,b,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Radio size="sm" name="size-sm" label="Small" defaultChecked />
      <Radio size="md" name="size-md" label="Medium" defaultChecked />
      <Radio size="lg" name="size-lg" label="Large" defaultChecked />
    </div>
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,j,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Radio name="s1" label="Unchecked" />
      <Radio name="s1" label="Checked" defaultChecked />
      <Radio name="s2" label="Disabled" disabled />
      <Radio name="s2" label="Disabled checked" disabled defaultChecked />
    </div>
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var R,y,S;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("email");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
        <Radio name="contact" value="email" label="Email" checked={value === "email"} onChange={e => setValue(e.target.value)} />
        <Radio name="contact" value="sms" label="SMS" checked={value === "sms"} onChange={e => setValue(e.target.value)} />
        <Radio name="contact" value="push" label="Push notification" checked={value === "push"} onChange={e => setValue(e.target.value)} />
        <Radio name="contact" value="none" label="None" checked={value === "none"} onChange={e => setValue(e.target.value)} />
      </div>;
  }
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var z,_,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("sm");
    const opts = [{
      value: "sm",
      label: "Small"
    }, {
      value: "md",
      label: "Medium"
    }, {
      value: "lg",
      label: "Large"
    }];
    return <div style={{
      display: "flex",
      gap: 16
    }}>
        {opts.map(opt => <Radio key={opt.value} name="size-h" value={opt.value} label={opt.label} checked={value === opt.value} onChange={e => setValue(e.target.value)} />)}
      </div>;
  }
}`,...(N=(_=i.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const T=["Default","Sizes","States","Group","HorizontalGroup"];export{d as Default,c as Group,i as HorizontalGroup,r as Sizes,o as States,T as __namedExportsOrder,w as default};
