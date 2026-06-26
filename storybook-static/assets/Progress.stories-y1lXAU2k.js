import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as h}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const Y={xs:"4px",sm:"6px",md:"8px",lg:"12px"};function ee(a,t,o){return Number.isNaN(a)?0:Math.min(o,Math.max(t,a))}const s=h.forwardRef(({size:a="md",color:t="saphyte",value:o=0,min:r=0,max:f=100,showLabel:x=!1,label:n,striped:G=!1,animated:O=!1,indeterminate:l=!1,className:Z="",style:k,...F},J)=>{const K=f-r,b=l?null:Math.round((ee(o,r,f)-r)/K*100),Q=["ds-progress",`ds-progress--${a}`,l&&"ds-progress--indeterminate",Z].filter(Boolean).join(" "),X=["ds-progress__fill",`ds-progress__fill--${t}`,G&&"ds-progress__fill--striped",O&&"ds-progress__fill--animated"].filter(Boolean).join(" ");return e.jsxs("div",{className:"ds-progress-root",ref:J,...F,children:[(n||x)&&e.jsxs("div",{className:"ds-progress__header",children:[e.jsx("span",{className:"ds-progress__label",children:n}),x&&!l&&e.jsxs("span",{className:"ds-progress__value",children:[b,"%"]})]}),e.jsx("div",{className:Q,style:{height:Y[a],...k},role:"progressbar","aria-valuemin":l?void 0:r,"aria-valuemax":l?void 0:f,"aria-valuenow":l?void 0:o,"aria-label":typeof n=="string"?n:"Progress",children:e.jsx("div",{className:X,style:l?void 0:{width:`${b}%`}})})]})});s.displayName="Progress";s.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"saphyte" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"saphyte"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"saphyte"',computed:!1}},value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const oe={title:"Components/Progress",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],table:{defaultValue:{summary:"md"}}},color:{control:"select",options:["saphyte","success","warning","error"],table:{defaultValue:{summary:"saphyte"}}},value:{control:{type:"range",min:0,max:100,step:1}},min:{control:"number"},max:{control:"number"},showLabel:{control:"boolean"},label:{control:"text"},striped:{control:"boolean"},animated:{control:"boolean"},indeterminate:{control:"boolean"}}},i={args:{value:50,size:"md",color:"saphyte"}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:360},children:[e.jsx(s,{size:"xs",value:60}),e.jsx(s,{size:"sm",value:60}),e.jsx(s,{size:"md",value:60}),e.jsx(s,{size:"lg",value:60})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:[e.jsx(s,{value:70,color:"saphyte",showLabel:!0,label:"Default"}),e.jsx(s,{value:70,color:"success",showLabel:!0,label:"Success"}),e.jsx(s,{value:70,color:"warning",showLabel:!0,label:"Warning"}),e.jsx(s,{value:70,color:"error",showLabel:!0,label:"Error"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:[e.jsx(s,{value:10,showLabel:!0,label:"10%"}),e.jsx(s,{value:30,showLabel:!0,label:"30%"}),e.jsx(s,{value:50,showLabel:!0,label:"50%"}),e.jsx(s,{value:70,showLabel:!0,label:"70%"}),e.jsx(s,{value:90,showLabel:!0,label:"90%"}),e.jsx(s,{value:100,showLabel:!0,label:"100%"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:360},children:[e.jsx(s,{value:45,showLabel:!0}),e.jsx(s,{value:75,label:"Storage usage",showLabel:!0}),e.jsx(s,{value:30,label:"Download",showLabel:!0,color:"success"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:[e.jsx(s,{value:60,striped:!0}),e.jsx(s,{value:60,striped:!0,animated:!0,color:"success"}),e.jsx(s,{value:60,striped:!0,animated:!0,color:"warning"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:360},children:[e.jsx(s,{indeterminate:!0}),e.jsx(s,{indeterminate:!0,size:"lg",color:"saphyte"})]})},g={render:()=>{const[a,t]=h.useState(0);return h.useEffect(()=>{const o=setInterval(()=>{t(r=>r>=100?0:r+5)},200);return()=>clearInterval(o)},[]),e.jsx("div",{style:{width:360},children:e.jsx(s,{value:a,label:"Uploading...",showLabel:!0,striped:!0,animated:!0,color:"saphyte"})})}};var y,w,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: "md",
    color: "saphyte"
  }
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var L,P,S;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 360
  }}>
      <Progress size="xs" value={60} />
      <Progress size="sm" value={60} />
      <Progress size="md" value={60} />
      <Progress size="lg" value={60} />
    </div>
}`,...(S=(P=u.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var _,D,V;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Progress value={70} color="saphyte" showLabel label="Default" />
      <Progress value={70} color="success" showLabel label="Success" />
      <Progress value={70} color="warning" showLabel label="Warning" />
      <Progress value={70} color="error" showLabel label="Error" />
    </div>
}`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var z,N,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Progress value={10} showLabel label="10%" />
      <Progress value={30} showLabel label="30%" />
      <Progress value={50} showLabel label="50%" />
      <Progress value={70} showLabel label="70%" />
      <Progress value={90} showLabel label="90%" />
      <Progress value={100} showLabel label="100%" />
    </div>
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var q,R,I;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 360
  }}>
      <Progress value={45} showLabel />
      <Progress value={75} label="Storage usage" showLabel />
      <Progress value={30} label="Download" showLabel color="success" />
    </div>
}`,...(I=(R=p.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var E,C,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Progress value={60} striped />
      <Progress value={60} striped animated color="success" />
      <Progress value={60} striped animated color="warning" />
    </div>
}`,...(M=(C=m.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var W,$,A;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 360
  }}>
      <Progress indeterminate />
      <Progress indeterminate size="lg" color="saphyte" />
    </div>
}`,...(A=($=v.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var B,H,U;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => {
        setValue(v => v >= 100 ? 0 : v + 5);
      }, 200);
      return () => clearInterval(t);
    }, []);
    return <div style={{
      width: 360
    }}>
        <Progress value={value} label="Uploading..." showLabel striped animated color="saphyte" />
      </div>;
  }
}`,...(U=(H=g.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const te=["Default","Sizes","Colors","Values","WithLabel","Striped","Indeterminate","Animated"];export{g as Animated,d as Colors,i as Default,v as Indeterminate,u as Sizes,m as Striped,c as Values,p as WithLabel,te as __namedExportsOrder,oe as default};
