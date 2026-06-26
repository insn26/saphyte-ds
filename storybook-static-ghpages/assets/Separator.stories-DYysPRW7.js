import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as I}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=I.forwardRef(({orientation:o="horizontal",label:l,className:_="",role:d,...p},c)=>{const m=["ds-separator",`ds-separator--${o}`,l&&"ds-separator--with-label",_].filter(Boolean).join(" ");return l?e.jsxs("div",{ref:c,className:m,role:d??"separator","aria-orientation":o,...p,children:[e.jsx("span",{className:"ds-separator__line","aria-hidden":"true"}),e.jsx("span",{className:"ds-separator__label",children:l}),e.jsx("span",{className:"ds-separator__line","aria-hidden":"true"})]}):e.jsx("div",{ref:c,className:m,role:d??"separator","aria-orientation":o,...p})});n.displayName="Separator";n.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const A={title:"Components/Separator",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],table:{defaultValue:{summary:"horizontal"}}},label:{control:"text"}}},t={render:()=>e.jsxs("div",{style:{width:360},children:[e.jsx("p",{style:{margin:0,fontSize:14},children:"Content above the separator."}),e.jsx(n,{}),e.jsx("p",{style:{margin:0,fontSize:14},children:"Content below the separator."})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,height:32},children:[e.jsx("span",{style:{fontSize:14},children:"Home"}),e.jsx(n,{orientation:"vertical"}),e.jsx("span",{style:{fontSize:14},children:"Library"}),e.jsx(n,{orientation:"vertical"}),e.jsx("span",{style:{fontSize:14},children:"Settings"})]})},r={render:()=>e.jsxs("div",{style:{width:360},children:[e.jsx("p",{style:{margin:0,fontSize:14},children:"Section A"}),e.jsx(n,{label:"OR"}),e.jsx("p",{style:{margin:0,fontSize:14},children:"Section B"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"stretch",gap:16,height:200},children:[e.jsx("span",{style:{fontSize:14},children:"Left content"}),e.jsx(n,{orientation:"vertical",label:"AND"}),e.jsx("span",{style:{fontSize:14},children:"Right content"})]})},i={render:()=>e.jsxs("div",{style:{width:320,display:"flex",flexDirection:"column",border:"1px solid #e4e4e7",borderRadius:8,overflow:"hidden"},children:[e.jsx("div",{style:{padding:"12px 16px",fontSize:14},children:"Inbox"}),e.jsx(n,{}),e.jsx("div",{style:{padding:"12px 16px",fontSize:14},children:"Drafts"}),e.jsx(n,{}),e.jsx("div",{style:{padding:"12px 16px",fontSize:14},children:"Sent"}),e.jsx(n,{}),e.jsx("div",{style:{padding:"12px 16px",fontSize:14},children:"Trash"})]})};var x,h,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <p style={{
      margin: 0,
      fontSize: 14
    }}>Content above the separator.</p>
      <Separator />
      <p style={{
      margin: 0,
      fontSize: 14
    }}>Content below the separator.</p>
    </div>
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,S,u;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16,
    height: 32
  }}>
      <span style={{
      fontSize: 14
    }}>Home</span>
      <Separator orientation="vertical" />
      <span style={{
      fontSize: 14
    }}>Library</span>
      <Separator orientation="vertical" />
      <span style={{
      fontSize: 14
    }}>Settings</span>
    </div>
}`,...(u=(S=a.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var v,g,j;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <p style={{
      margin: 0,
      fontSize: 14
    }}>Section A</p>
      <Separator label="OR" />
      <p style={{
      margin: 0,
      fontSize: 14
    }}>Section B</p>
    </div>
}`,...(j=(g=r.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var z,b,w;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "stretch",
    gap: 16,
    height: 200
  }}>
      <span style={{
      fontSize: 14
    }}>Left content</span>
      <Separator orientation="vertical" label="AND" />
      <span style={{
      fontSize: 14
    }}>Right content</span>
    </div>
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var R,N,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "flex",
    flexDirection: "column",
    border: "1px solid #e4e4e7",
    borderRadius: 8,
    overflow: "hidden"
  }}>
      <div style={{
      padding: "12px 16px",
      fontSize: 14
    }}>Inbox</div>
      <Separator />
      <div style={{
      padding: "12px 16px",
      fontSize: 14
    }}>Drafts</div>
      <Separator />
      <div style={{
      padding: "12px 16px",
      fontSize: 14
    }}>Sent</div>
      <Separator />
      <div style={{
      padding: "12px 16px",
      fontSize: 14
    }}>Trash</div>
    </div>
}`,...(L=(N=i.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};const W=["Default","Vertical","WithLabel","WithLabelVertical","InList"];export{t as Default,i as InList,a as Vertical,r as WithLabel,s as WithLabelVertical,W as __namedExportsOrder,A as default};
