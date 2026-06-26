import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as x}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ee=({status:r})=>{const s={width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};switch(r){case"success":return e.jsx("svg",{...s,children:e.jsx("path",{d:"M20 6L9 17l-5-5"})});case"warning":return e.jsxs("svg",{...s,children:[e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]});case"error":return e.jsxs("svg",{...s,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]});case"info":default:return e.jsxs("svg",{...s,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]})}},t=x.forwardRef(({status:r="info",variant:s="subtle",icon:M,title:m,description:v,closable:P=!1,onClose:f,className:X="",children:$,...F},G)=>{const[K,Q]=x.useState(!1);if(K)return null;const U=["ds-alert",`ds-alert--${r}`,`ds-alert--${s}`,X].filter(Boolean).join(" "),Z=()=>{Q(!0),f==null||f()};return e.jsxs("div",{ref:G,role:"alert",className:U,...F,children:[e.jsx("div",{className:"ds-alert__icon","aria-hidden":"true",children:M??e.jsx(ee,{status:r})}),e.jsxs("div",{className:"ds-alert__content",children:[m&&e.jsx("div",{className:"ds-alert__title",children:m}),v&&e.jsx("div",{className:"ds-alert__description",children:v}),$]}),P&&e.jsx("button",{type:"button",className:"ds-alert__close","aria-label":"Close alert",onClick:Z,children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})});t.displayName="Alert";t.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{status:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"subtle" | "solid" | "outline" | "left-accent"',elements:[{name:"literal",value:'"subtle"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"left-accent"'}]},description:"",defaultValue:{value:'"subtle"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const ie={title:"Components/Alert",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{status:{control:"select",options:["info","success","warning","error"],table:{defaultValue:{summary:"info"}}},variant:{control:"select",options:["subtle","solid","outline","left-accent"],table:{defaultValue:{summary:"subtle"}}},closable:{control:"boolean"},title:{control:"text"},description:{control:"text"}}},n={args:{status:"info",variant:"subtle",title:"Heads up!",description:"This is an informational alert to draw attention."}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:[e.jsx(t,{status:"info",title:"Information",description:"New version available. Refresh to update."}),e.jsx(t,{status:"success",title:"Success",description:"Your changes have been saved successfully."}),e.jsx(t,{status:"warning",title:"Warning",description:"Your subscription will expire in 3 days."}),e.jsx(t,{status:"error",title:"Error",description:"Something went wrong. Please try again."})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:[e.jsx(t,{status:"info",variant:"subtle",title:"Info",description:"Subtle info alert"}),e.jsx(t,{status:"success",variant:"subtle",title:"Success",description:"Subtle success alert"}),e.jsx(t,{status:"warning",variant:"subtle",title:"Warning",description:"Subtle warning alert"}),e.jsx(t,{status:"error",variant:"subtle",title:"Error",description:"Subtle error alert"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:[e.jsx(t,{status:"info",variant:"solid",title:"Info",description:"Solid info alert"}),e.jsx(t,{status:"success",variant:"solid",title:"Success",description:"Solid success alert"}),e.jsx(t,{status:"warning",variant:"solid",title:"Warning",description:"Solid warning alert"}),e.jsx(t,{status:"error",variant:"solid",title:"Error",description:"Solid error alert"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:[e.jsx(t,{status:"info",variant:"outline",title:"Info",description:"Outline info alert"}),e.jsx(t,{status:"success",variant:"outline",title:"Success",description:"Outline success alert"}),e.jsx(t,{status:"warning",variant:"outline",title:"Warning",description:"Outline warning alert"}),e.jsx(t,{status:"error",variant:"outline",title:"Error",description:"Outline error alert"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:[e.jsx(t,{status:"info",variant:"left-accent",title:"Info",description:"Left-accent info alert"}),e.jsx(t,{status:"success",variant:"left-accent",title:"Success",description:"Left-accent success alert"}),e.jsx(t,{status:"warning",variant:"left-accent",title:"Warning",description:"Left-accent warning alert"}),e.jsx(t,{status:"error",variant:"left-accent",title:"Error",description:"Left-accent error alert"})]})},d={render:()=>{const[r,s]=x.useState(!0);return r?e.jsx("div",{style:{width:480},children:e.jsx(t,{status:"warning",variant:"subtle",title:"Closable alert",description:"Click the X to dismiss this alert.",closable:!0,onClose:()=>s(!1)})}):e.jsx("button",{type:"button",onClick:()=>s(!0),style:{padding:"6px 12px",border:"1px solid #d4d4d8",borderRadius:6,background:"white",cursor:"pointer"},children:"Reset alert"})}},u={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:e.jsx(t,{status:"info",variant:"subtle",icon:e.jsx("span",{style:{fontSize:18},children:"💡"}),title:"Tip",description:"You can use a custom icon in the alert."})})},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:e.jsx(t,{status:"info",description:"Just a description with no title."})})};var g,y,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: "info",
    variant: "subtle",
    title: "Heads up!",
    description: "This is an informational alert to draw attention."
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,w,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 480
  }}>
      <Alert status="info" title="Information" description="New version available. Refresh to update." />
      <Alert status="success" title="Success" description="Your changes have been saved successfully." />
      <Alert status="warning" title="Warning" description="Your subscription will expire in 3 days." />
      <Alert status="error" title="Error" description="Something went wrong. Please try again." />
    </div>
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var S,A,R;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 480
  }}>
      <Alert status="info" variant="subtle" title="Info" description="Subtle info alert" />
      <Alert status="success" variant="subtle" title="Success" description="Subtle success alert" />
      <Alert status="warning" variant="subtle" title="Warning" description="Subtle warning alert" />
      <Alert status="error" variant="subtle" title="Error" description="Subtle error alert" />
    </div>
}`,...(R=(A=a.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,N,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 480
  }}>
      <Alert status="info" variant="solid" title="Info" description="Solid info alert" />
      <Alert status="success" variant="solid" title="Success" description="Solid success alert" />
      <Alert status="warning" variant="solid" title="Warning" description="Solid warning alert" />
      <Alert status="error" variant="solid" title="Error" description="Solid error alert" />
    </div>
}`,...(L=(N=l.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var C,k,I;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 480
  }}>
      <Alert status="info" variant="outline" title="Info" description="Outline info alert" />
      <Alert status="success" variant="outline" title="Success" description="Outline success alert" />
      <Alert status="warning" variant="outline" title="Warning" description="Outline warning alert" />
      <Alert status="error" variant="outline" title="Error" description="Outline error alert" />
    </div>
}`,...(I=(k=o.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var O,W,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 480
  }}>
      <Alert status="info" variant="left-accent" title="Info" description="Left-accent info alert" />
      <Alert status="success" variant="left-accent" title="Success" description="Left-accent success alert" />
      <Alert status="warning" variant="left-accent" title="Warning" description="Left-accent warning alert" />
      <Alert status="error" variant="left-accent" title="Error" description="Left-accent error alert" />
    </div>
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var E,T,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = React.useState(true);
    if (!visible) {
      return <button type="button" onClick={() => setVisible(true)} style={{
        padding: "6px 12px",
        border: "1px solid #d4d4d8",
        borderRadius: 6,
        background: "white",
        cursor: "pointer"
      }}>
          Reset alert
        </button>;
    }
    return <div style={{
      width: 480
    }}>
        <Alert status="warning" variant="subtle" title="Closable alert" description="Click the X to dismiss this alert." closable onClose={() => setVisible(false)} />
      </div>;
  }
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,Y,z;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 480
  }}>
      <Alert status="info" variant="subtle" icon={<span style={{
      fontSize: 18
    }}>💡</span>} title="Tip" description="You can use a custom icon in the alert." />
    </div>
}`,...(z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var B,H,J;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 480
  }}>
      <Alert status="info" description="Just a description with no title." />
    </div>
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ae=["Default","Statuses","Subtle","Solid","Outline","LeftAccent","Closable","WithCustomIcon","DescriptionOnly"];export{d as Closable,n as Default,p as DescriptionOnly,c as LeftAccent,o as Outline,l as Solid,i as Statuses,a as Subtle,u as WithCustomIcon,ae as __namedExportsOrder,ie as default};
