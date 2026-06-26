import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as o}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const B=o.createContext(null),M=()=>o.useContext(B)??{name:"",value:void 0,onChange:()=>{},isDisabled:!1,isInvalid:!1,size:"md"};function l({name:n,options:a,value:r,defaultValue:u,onChange:i,orientation:p="vertical",size:c="md",isDisabled:m=!1,isInvalid:s=!1,spacing:v="8px",className:f="",children:b,...h}){const T=r!==void 0,[P,A]=o.useState(u),V=T?r:P,j=o.useCallback(t=>{T||A(t),i==null||i(t)},[T,i]),F=o.useMemo(()=>({name:n,value:V,onChange:j,isDisabled:m,isInvalid:s,size:c}),[n,V,j,m,s,c]);return e.jsx(B.Provider,{value:F,children:e.jsx("div",{role:"radiogroup",className:["ds-radio-group",`ds-radio-group--${p}`,`ds-radio-group--${c}`,f].filter(Boolean).join(" "),style:p==="horizontal"?{gap:v,display:"flex",flexWrap:"wrap",alignItems:"center"}:{gap:v,display:"flex",flexDirection:"column"},...h,children:a?a.map(t=>e.jsx(d,{value:t.value,label:t.label,description:t.description,isDisabled:t.isDisabled},t.value)):b})})}l.displayName="RadioGroup";const d=o.forwardRef(({className:n="",value:a,label:r,description:u,isDisabled:i,id:p,...c},m)=>{const s=M(),v=o.useId(),f=p??`ds-radio-${v}`,b=s.value===a,h=i??s.isDisabled;return e.jsxs("label",{className:["ds-radio",`ds-radio--${s.size}`,h&&"ds-radio--disabled",n].filter(Boolean).join(" "),htmlFor:f,children:[e.jsx("input",{ref:m,id:f,type:"radio",name:s.name,value:a,checked:b,disabled:h,onChange:()=>s.onChange(a),className:"ds-radio__input","aria-invalid":s.isInvalid||void 0,...c}),e.jsx("span",{className:["ds-radio__control",b&&"ds-radio__control--checked"].filter(Boolean).join(" "),"aria-hidden":"true",children:e.jsx("span",{className:"ds-radio__dot"})}),(r||u)&&e.jsxs("span",{className:"ds-radio__label",children:[r&&e.jsx("span",{className:"ds-radio__label-text",children:r}),u&&e.jsx("span",{className:"ds-radio__description",children:u})]})]})});d.displayName="RadioGroupItem";l.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"RadioOption",elements:[{name:"T"}],raw:"RadioOption<T>"}],raw:"RadioOption<T>[]"},description:""},value:{required:!1,tsType:{name:"T"},description:""},defaultValue:{required:!1,tsType:{name:"T"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},spacing:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};d.__docgenInfo={description:"",methods:[],displayName:"RadioGroupItem",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const L={title:"Components/RadioGroup",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["sm","md","lg"]}}},R={render:()=>{const[n,a]=o.useState("email");return e.jsx(l,{name:"contact",value:n,onChange:a,options:[{value:"email",label:"Email"},{value:"sms",label:"SMS"},{value:"push",label:"Push notification"}]})}},g={render:()=>{const[n,a]=o.useState("sm");return e.jsx(l,{name:"size",orientation:"horizontal",value:n,onChange:a,options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]})}},x={render:()=>{const[n,a]=o.useState("basic");return e.jsx(l,{name:"plan",value:n,onChange:a,options:[{value:"basic",label:"Basic",description:"Free for personal use"},{value:"pro",label:"Pro",description:"$9/month, advanced features"},{value:"team",label:"Team",description:"$29/month, collaboration tools"}]})}},y={render:()=>{const[n,a]=o.useState("a");return e.jsxs(l,{name:"opts",value:n,onChange:a,children:[e.jsx(d,{value:"a",label:"Option A",description:"First option"}),e.jsx(d,{value:"b",label:"Option B",description:"Second option"}),e.jsx(d,{value:"c",label:"Option C",description:"Third option"})]})}};var S,C,N;R.parameters={...R.parameters,docs:{...(S=R.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("email");
    return <RadioGroup name="contact" value={value} onChange={setValue} options={[{
      value: "email",
      label: "Email"
    }, {
      value: "sms",
      label: "SMS"
    }, {
      value: "push",
      label: "Push notification"
    }]} />;
  }
}`,...(N=(C=R.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var _,q,G;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("sm");
    return <RadioGroup name="size" orientation="horizontal" value={value} onChange={setValue} options={[{
      value: "sm",
      label: "Small"
    }, {
      value: "md",
      label: "Medium"
    }, {
      value: "lg",
      label: "Large"
    }]} />;
  }
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var I,z,O;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("basic");
    return <RadioGroup name="plan" value={value} onChange={setValue} options={[{
      value: "basic",
      label: "Basic",
      description: "Free for personal use"
    }, {
      value: "pro",
      label: "Pro",
      description: "$9/month, advanced features"
    }, {
      value: "team",
      label: "Team",
      description: "$29/month, collaboration tools"
    }]} />;
  }
}`,...(O=(z=x.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var D,w,$;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("a");
    return <RadioGroup name="opts" value={value} onChange={setValue}>
        <RadioGroupItem value="a" label="Option A" description="First option" />
        <RadioGroupItem value="b" label="Option B" description="Second option" />
        <RadioGroupItem value="c" label="Option C" description="Third option" />
      </RadioGroup>;
  }
}`,...($=(w=y.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};const J=["Default","Horizontal","WithDescriptions","ChildrenAPI"];export{y as ChildrenAPI,R as Default,g as Horizontal,x as WithDescriptions,J as __namedExportsOrder,L as default};
