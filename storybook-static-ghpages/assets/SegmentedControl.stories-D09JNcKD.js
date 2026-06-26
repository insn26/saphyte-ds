import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as o}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const G={sm:{size:28,fontSize:12},md:{size:36,fontSize:14},lg:{size:44,fontSize:16}};function l({options:n,value:t,defaultValue:f,onChange:r,size:i="md",colorPalette:b="saphyte",isDisabled:s=!1,fullWidth:M=!1,className:O="",name:h,...E}){var y;const S=t!==void 0,[L,P]=o.useState(f??((y=n[0])==null?void 0:y.value)),B=S?t:L,u=G[i],F=a=>{s||(S||P(a),r==null||r(a))};return e.jsx("div",{role:"radiogroup",className:["ds-segmented",`ds-segmented--${i}`,`ds-segmented--${b}`,s&&"ds-segmented--disabled",M&&"ds-segmented--full-width",O].filter(Boolean).join(" "),style:{height:u.size,fontSize:u.fontSize},...E,children:n.map(a=>{const d=a.value===B;return e.jsxs("button",{type:"button",role:"radio","aria-checked":d,"aria-disabled":a.isDisabled||s||void 0,disabled:a.isDisabled||s,tabIndex:d?0:-1,onClick:()=>F(a.value),className:["ds-segmented__button",d&&"ds-segmented__button--selected"].filter(Boolean).join(" "),style:{height:u.size,fontSize:u.fontSize},children:[a.icon&&e.jsx("span",{className:"ds-segmented__icon",children:a.icon}),e.jsx("span",{className:"ds-segmented__label",children:a.label}),h&&d&&e.jsx("input",{type:"hidden",name:h,value:a.value})]},a.value)})})}l.displayName="SegmentedControl";l.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentedControlOption",elements:[{name:"T"}],raw:"SegmentedControlOption<T>"}],raw:"SegmentedControlOption<T>[]"},description:""},value:{required:!1,tsType:{name:"T"},description:""},defaultValue:{required:!1,tsType:{name:"T"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},colorPalette:{required:!1,tsType:{name:"union",raw:'"gray" | "saphyte"',elements:[{name:"literal",value:'"gray"'},{name:"literal",value:'"saphyte"'}]},description:"",defaultValue:{value:'"saphyte"',computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const H={title:"Components/SegmentedControl",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},colorPalette:{control:"select",options:["gray","saphyte"]}}},m={render:()=>{const[n,t]=o.useState("month");return e.jsx(l,{value:n,onChange:t,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"},{value:"year",label:"Year"}]})}},c={render:()=>{const[n,t]=o.useState("sm"),[f,r]=o.useState("md"),[i,b]=o.useState("lg"),s=[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(l,{size:"sm",value:n,onChange:t,options:s}),e.jsx(l,{size:"md",value:f,onChange:r,options:s}),e.jsx(l,{size:"lg",value:i,onChange:b,options:s})]})}},p={render:()=>{const[n,t]=o.useState("list");return e.jsx(l,{value:n,onChange:t,options:[{value:"list",label:"List",icon:e.jsx("span",{children:"≡"})},{value:"grid",label:"Grid",icon:e.jsx("span",{children:"▦"})},{value:"table",label:"Table",icon:e.jsx("span",{children:"⊞"})}]})}},v={render:()=>{const[n,t]=o.useState("preview");return e.jsx("div",{style:{width:400},children:e.jsx(l,{fullWidth:!0,value:n,onChange:t,options:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"raw",label:"Raw"}]})})}},g={render:()=>e.jsx(l,{isDisabled:!0,defaultValue:"day",options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}]})};var V,C,x;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("month");
    return <SegmentedControl value={value} onChange={setValue} options={[{
      value: "day",
      label: "Day"
    }, {
      value: "week",
      label: "Week"
    }, {
      value: "month",
      label: "Month"
    }, {
      value: "year",
      label: "Year"
    }]} />;
  }
}`,...(x=(C=m.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var w,j,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = React.useState("sm");
    const [v2, setV2] = React.useState("md");
    const [v3, setV3] = React.useState("lg");
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
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start"
    }}>
        <SegmentedControl size="sm" value={v1} onChange={setV1} options={opts} />
        <SegmentedControl size="md" value={v2} onChange={setV2} options={opts} />
        <SegmentedControl size="lg" value={v3} onChange={setV3} options={opts} />
      </div>;
  }
}`,...(z=(j=c.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var T,D,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("list");
    return <SegmentedControl value={value} onChange={setValue} options={[{
      value: "list",
      label: "List",
      icon: <span>≡</span>
    }, {
      value: "grid",
      label: "Grid",
      icon: <span>▦</span>
    }, {
      value: "table",
      label: "Table",
      icon: <span>⊞</span>
    }]} />;
  }
}`,...(_=(D=p.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var R,W,k;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("preview");
    return <div style={{
      width: 400
    }}>
        <SegmentedControl fullWidth value={value} onChange={setValue} options={[{
        value: "preview",
        label: "Preview"
      }, {
        value: "code",
        label: "Code"
      }, {
        value: "raw",
        label: "Raw"
      }]} />
      </div>;
  }
}`,...(k=(W=v.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var q,I,N;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <SegmentedControl isDisabled defaultValue="day" options={[{
    value: "day",
    label: "Day"
  }, {
    value: "week",
    label: "Week"
  }, {
    value: "month",
    label: "Month"
  }]} />
}`,...(N=(I=g.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const J=["Default","Sizes","WithIcons","FullWidth","Disabled"];export{m as Default,g as Disabled,v as FullWidth,c as Sizes,p as WithIcons,J as __namedExportsOrder,H as default};
