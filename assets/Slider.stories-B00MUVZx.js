import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as l}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ae={sm:{track:4,thumb:14},md:{track:6,thumb:18},lg:{track:8,thumb:22}},t=l.forwardRef(({size:s="md",colorPalette:r="saphyte",min:a=0,max:n=100,step:o=1,value:i,defaultValue:A=0,onChange:h,isDisabled:S=!1,showValueLabel:x=!1,showMarks:_=!1,marks:c,label:g,className:F="",id:Z,...H},J)=>{const K=l.useId(),j=Z??`ds-slider-${K}`,N=i!==void 0,[Q,U]=l.useState(A),V=N?i:Q,k=ae[s],X=u=>{const d=Number(u.target.value);N||U(d),h==null||h(d)},Y=(V-a)/(n-a)*100,q=l.useMemo(()=>{if(c&&c.length>0)return c;if(_){const u=Math.floor((n-a)/o)+1,d=[],R=Math.min(u,20);for(let y=0;y<R;y++){const ee=Math.round((a+y*(n-a)/(R-1))*100)/100;d.push({value:ee})}return d}return[]},[c,_,a,n,o]);return e.jsxs("div",{className:["ds-slider",`ds-slider--${s}`,`ds-slider--${r}`,S&&"ds-slider--disabled",F].filter(Boolean).join(" "),children:[(g||x)&&e.jsxs("div",{className:"ds-slider__header",children:[g&&e.jsx("label",{htmlFor:j,className:"ds-slider__label",children:g}),x&&e.jsx("span",{className:"ds-slider__value-label",children:V})]}),e.jsxs("div",{className:"ds-slider__control",style:{"--ds-slider-track-height":`${k.track}px`,"--ds-slider-thumb-size":`${k.thumb}px`},children:[e.jsx("div",{className:"ds-slider__track"}),e.jsx("div",{className:"ds-slider__filled",style:{width:`${Math.min(100,Math.max(0,Y))}%`}}),q.length>0&&e.jsx("div",{className:"ds-slider__marks","aria-hidden":"true",children:q.map(u=>{const d=(u.value-a)/(n-a)*100;return e.jsx("span",{className:"ds-slider__mark",style:{left:`${d}%`},children:u.label!==void 0&&e.jsx("span",{className:"ds-slider__mark-label",children:u.label})},u.value)})}),e.jsx("input",{ref:J,id:j,type:"range",min:a,max:n,step:o,value:V,disabled:S,onChange:X,className:"ds-slider__input",...H})]})]})});t.displayName="Slider";t.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},colorPalette:{required:!1,tsType:{name:"union",raw:'"gray" | "saphyte"',elements:[{name:"literal",value:'"gray"'},{name:"literal",value:'"saphyte"'}]},description:"",defaultValue:{value:'"saphyte"',computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showMarks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},marks:{required:!1,tsType:{name:"Array",elements:[{name:"SliderMark"}],raw:"SliderMark[]"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const ne={title:"Components/Slider",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},colorPalette:{control:"select",options:["gray","saphyte"]},min:{control:"number"},max:{control:"number"},step:{control:"number"},showValueLabel:{control:"boolean"}}},m={render:()=>{const[s,r]=l.useState(40);return e.jsx(t,{label:"Volume",value:s,onChange:r,showValueLabel:!0})}},p={render:()=>{const[s,r]=l.useState(20),[a,n]=l.useState(40),[o,i]=l.useState(60);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{size:"sm",label:"Small",value:s,onChange:r}),e.jsx(t,{size:"md",label:"Medium",value:a,onChange:n}),e.jsx(t,{size:"lg",label:"Large",value:o,onChange:i})]})}},v={render:()=>{const[s,r]=l.useState(25);return e.jsx(t,{label:"Brightness",min:0,max:100,step:25,value:s,onChange:r,showValueLabel:!0,marks:[{value:0,label:"0"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}]})}},f={render:()=>e.jsx(t,{label:"Disabled",defaultValue:50,isDisabled:!0})},b={render:()=>{const[s,r]=l.useState(30);return e.jsx(t,{value:s,onChange:r,colorPalette:"gray"})}};var T,C,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(40);
    return <Slider label="Volume" value={value} onChange={setValue} showValueLabel />;
  }
}`,...(M=(C=m.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var w,D,z;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = React.useState(20);
    const [v2, setV2] = React.useState(40);
    const [v3, setV3] = React.useState(60);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
        <Slider size="sm" label="Small" value={v1} onChange={setV1} />
        <Slider size="md" label="Medium" value={v2} onChange={setV2} />
        <Slider size="lg" label="Large" value={v3} onChange={setV3} />
      </div>;
  }
}`,...(z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var I,L,$;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(25);
    return <Slider label="Brightness" min={0} max={100} step={25} value={value} onChange={setValue} showValueLabel marks={[{
      value: 0,
      label: "0"
    }, {
      value: 25,
      label: "25"
    }, {
      value: 50,
      label: "50"
    }, {
      value: 75,
      label: "75"
    }, {
      value: 100,
      label: "100"
    }]} />;
  }
}`,...($=(L=v.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var P,E,B;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Slider label="Disabled" defaultValue={50} isDisabled />
}`,...(B=(E=f.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var O,G,W;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(30);
    return <Slider value={value} onChange={setValue} colorPalette="gray" />;
  }
}`,...(W=(G=b.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const ue=["Default","Sizes","WithMarks","Disabled","Gray"];export{m as Default,f as Disabled,b as Gray,p as Sizes,v as WithMarks,ue as __namedExportsOrder,ne as default};
