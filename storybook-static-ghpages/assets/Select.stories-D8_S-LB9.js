import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as j}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const l=j.forwardRef(({size:v="md",variant:H="outline",invalid:f=!1,disabled:x,label:b,helperText:m,errorText:h,fullWidth:y=!1,options:S,placeholder:g,className:J="",id:K,children:Y,...Q},X)=>{const Z=j.useId(),r=K??`ds-select-${Z}`,ee=h?`${r}-error`:m?`${r}-helper`:void 0,le=["ds-select-wrapper",`ds-select-wrapper--${v}`,`ds-select-wrapper--${H}`,f&&"ds-select-wrapper--invalid",x&&"ds-select-wrapper--disabled",y&&"ds-select-wrapper--full-width"].filter(Boolean).join(" "),ae=["ds-select",`ds-select--${v}`,J].filter(Boolean).join(" ");return e.jsxs("div",{className:y?"ds-select-root ds-select-root--full":"ds-select-root",children:[b&&e.jsx("label",{className:"ds-select__label",htmlFor:r,children:b}),e.jsxs("div",{className:le,children:[e.jsxs("select",{ref:X,id:r,className:ae,disabled:x,"aria-invalid":f||void 0,"aria-describedby":ee,...Q,children:[g&&e.jsx("option",{value:"",disabled:!0,hidden:!0,children:g}),S?S.map(s=>e.jsx("option",{value:s.value,disabled:s.disabled,children:s.label},s.value)):Y]}),e.jsx("span",{className:"ds-select__chevron","aria-hidden":"true",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),h?e.jsx("p",{id:`${r}-error`,className:"ds-select__error-text",role:"alert",children:h}):m?e.jsx("p",{id:`${r}-helper`,className:"ds-select__helper-text",children:m}):null]})});l.displayName="Select";l.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "filled" | "flushed"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"flushed"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},helperText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},errorText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const a=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"durian",label:"Durian"},{value:"elderberry",label:"Elderberry",disabled:!0}],oe={title:"Components/Select",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["outline","filled","flushed"],table:{defaultValue:{summary:"outline"}}},invalid:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},placeholder:{control:"text"}}},n={args:{placeholder:"Choose a fruit",options:a,size:"md",variant:"outline"}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(l,{size:"xs",placeholder:"Extra small",options:a}),e.jsx(l,{size:"sm",placeholder:"Small",options:a}),e.jsx(l,{size:"md",placeholder:"Medium",options:a}),e.jsx(l,{size:"lg",placeholder:"Large",options:a})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(l,{variant:"outline",placeholder:"Outline variant",options:a}),e.jsx(l,{variant:"filled",placeholder:"Filled variant",options:a}),e.jsx(l,{variant:"flushed",placeholder:"Flushed variant",options:a})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(l,{label:"Country",placeholder:"Select your country",options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"id",label:"Indonesia"},{value:"jp",label:"Japan"}]}),e.jsx(l,{label:"Timezone",placeholder:"Choose timezone",options:[{value:"utc",label:"UTC"},{value:"gmt",label:"GMT"},{value:"wib",label:"WIB (UTC+7)"}]})]})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:e.jsx(l,{label:"Plan",placeholder:"Choose a plan",helperText:"You can change this any time",options:[{value:"free",label:"Free"},{value:"pro",label:"Pro"},{value:"team",label:"Team"}]})})},c={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:e.jsx(l,{label:"Role",placeholder:"Choose a role",invalid:!0,defaultValue:"",errorText:"Please select a role",options:[{value:"admin",label:"Admin"},{value:"member",label:"Member"},{value:"viewer",label:"Viewer"}]})})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(l,{placeholder:"Default",options:a}),e.jsx(l,{placeholder:"Disabled",options:a,disabled:!0}),e.jsx(l,{placeholder:"Invalid",options:a,invalid:!0,defaultValue:""})]})},u={render:()=>e.jsx("div",{style:{width:480},children:e.jsx(l,{fullWidth:!0,placeholder:"Full width select",options:a,size:"lg"})})};var w,T,R;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: "Choose a fruit",
    options: FRUITS,
    size: "md",
    variant: "outline"
  }
}`,...(R=(T=n.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var F,I,U;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Select size="xs" placeholder="Extra small" options={FRUITS} />
      <Select size="sm" placeholder="Small" options={FRUITS} />
      <Select size="md" placeholder="Medium" options={FRUITS} />
      <Select size="lg" placeholder="Large" options={FRUITS} />
    </div>
}`,...(U=(I=t.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var z,C,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Select variant="outline" placeholder="Outline variant" options={FRUITS} />
      <Select variant="filled" placeholder="Filled variant" options={FRUITS} />
      <Select variant="flushed" placeholder="Flushed variant" options={FRUITS} />
    </div>
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var N,V,W;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Select label="Country" placeholder="Select your country" options={[{
      value: "us",
      label: "United States"
    }, {
      value: "uk",
      label: "United Kingdom"
    }, {
      value: "id",
      label: "Indonesia"
    }, {
      value: "jp",
      label: "Japan"
    }]} />
      <Select label="Timezone" placeholder="Choose timezone" options={[{
      value: "utc",
      label: "UTC"
    }, {
      value: "gmt",
      label: "GMT"
    }, {
      value: "wib",
      label: "WIB (UTC+7)"
    }]} />
    </div>
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,q,$;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Select label="Plan" placeholder="Choose a plan" helperText="You can change this any time" options={[{
      value: "free",
      label: "Free"
    }, {
      value: "pro",
      label: "Pro"
    }, {
      value: "team",
      label: "Team"
    }]} />
    </div>
}`,...($=(q=d.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var B,E,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Select label="Role" placeholder="Choose a role" invalid defaultValue="" errorText="Please select a role" options={[{
      value: "admin",
      label: "Admin"
    }, {
      value: "member",
      label: "Member"
    }, {
      value: "viewer",
      label: "Viewer"
    }]} />
    </div>
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var L,M,O;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Select placeholder="Default" options={FRUITS} />
      <Select placeholder="Disabled" options={FRUITS} disabled />
      <Select placeholder="Invalid" options={FRUITS} invalid defaultValue="" />
    </div>
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var P,A,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 480
  }}>
      <Select fullWidth placeholder="Full width select" options={FRUITS} size="lg" />
    </div>
}`,...(G=(A=u.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const ie=["Default","Sizes","Variants","WithLabel","WithHelperText","WithErrorText","States","FullWidth"];export{n as Default,u as FullWidth,t as Sizes,p as States,o as Variants,c as WithErrorText,d as WithHelperText,i as WithLabel,ie as __namedExportsOrder,oe as default};
