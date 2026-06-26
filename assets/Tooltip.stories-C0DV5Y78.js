import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as f}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const o=f.forwardRef(({label:l,position:g="top",variant:m="solid",open:v,defaultOpen:z=!1,disabled:M=!1,children:r,className:P="",...F},U)=>{const[W,b]=f.useState(z),x=v!==void 0,Y=(x?v:W)&&!M&&!!l,y=()=>{x||b(!0)},h=()=>{x||b(!1)},$=["ds-tooltip",`ds-tooltip--${g}`,`ds-tooltip--${m}`,P].filter(Boolean).join(" "),A=f.cloneElement(r,{onMouseEnter:i=>{y();const t=r.props.onMouseEnter;t==null||t(i)},onMouseLeave:i=>{h();const t=r.props.onMouseLeave;t==null||t(i)},onFocus:i=>{y();const t=r.props.onFocus;t==null||t(i)},onBlur:i=>{h();const t=r.props.onBlur;t==null||t(i)}});return e.jsxs("div",{ref:U,className:"ds-tooltip-wrapper",...F,children:[A,Y&&e.jsxs("div",{role:"tooltip",className:$,children:[e.jsx("span",{className:"ds-tooltip__arrow","aria-hidden":"true"}),e.jsx("span",{className:"ds-tooltip__label",children:l})]})]})});o.displayName="Tooltip";o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "subtle"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"subtle"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const Z={title:"Components/Tooltip",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},position:{control:"select",options:["top","right","bottom","left"],table:{defaultValue:{summary:"top"}}},variant:{control:"select",options:["solid","subtle"],table:{defaultValue:{summary:"solid"}}},open:{control:"boolean"},disabled:{control:"boolean"}}},n=({children:l})=>e.jsx("button",{type:"button",style:{padding:"8px 14px",border:"1px solid #d4d4d8",borderRadius:6,background:"white",cursor:"pointer",fontSize:13},children:l}),s={args:{label:"Hello! I'm a tooltip",position:"top",variant:"solid"},render:l=>e.jsx(o,{label:l.label,position:l.position,variant:l.variant,children:e.jsx(n,{children:"Hover me"})})},a={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:24,padding:64},children:[e.jsx("div",{}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(o,{label:"Top tooltip",position:"top",defaultOpen:!0,children:e.jsx(n,{children:"Top"})})}),e.jsx("div",{}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(o,{label:"Left tooltip",position:"left",defaultOpen:!0,children:e.jsx(n,{children:"Left"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(n,{children:"Center"})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsx(o,{label:"Right tooltip",position:"right",defaultOpen:!0,children:e.jsx(n,{children:"Right"})})}),e.jsx("div",{}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(o,{label:"Bottom tooltip",position:"bottom",defaultOpen:!0,children:e.jsx(n,{children:"Bottom"})})}),e.jsx("div",{})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(o,{label:"Solid tooltip",variant:"solid",defaultOpen:!0,children:e.jsx(n,{children:"Solid"})}),e.jsx(o,{label:"Subtle tooltip",variant:"subtle",defaultOpen:!0,children:e.jsx(n,{children:"Subtle"})})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(o,{label:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx("strong",{children:"Pro tip"}),e.jsx("span",{style:{fontSize:12},children:"Use keyboard shortcuts to work faster"})]}),defaultOpen:!0,children:e.jsx(n,{children:"Rich content"})}),e.jsx(o,{label:"⌘ + S to save",defaultOpen:!0,children:e.jsx(n,{children:"Save shortcut"})})]})},u={render:()=>e.jsx(o,{label:"You should not see this",disabled:!0,children:e.jsx(n,{children:"Disabled tooltip"})})},c={render:()=>{const[l,g]=f.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"center"},children:[e.jsx(o,{label:"Controlled tooltip",open:l,children:e.jsx(n,{children:"Hover or click toggle"})}),e.jsxs("button",{type:"button",onClick:()=>g(m=>!m),style:{padding:"4px 10px",border:"1px solid #d4d4d8",borderRadius:6,background:"white",cursor:"pointer",fontSize:12},children:[l?"Hide":"Show"," tooltip"]})]})}};var T,j,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Hello! I'm a tooltip",
    position: "top",
    variant: "solid"
  },
  render: args => <Tooltip label={args.label} position={args.position} variant={args.variant}>
      <TriggerButton>Hover me</TriggerButton>
    </Tooltip>
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,C,R;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: 24,
    padding: 64
  }}>
      <div />
      <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
        <Tooltip label="Top tooltip" position="top" defaultOpen>
          <TriggerButton>Top</TriggerButton>
        </Tooltip>
      </div>
      <div />
      <div style={{
      display: "flex",
      justifyContent: "flex-end"
    }}>
        <Tooltip label="Left tooltip" position="left" defaultOpen>
          <TriggerButton>Left</TriggerButton>
        </Tooltip>
      </div>
      <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
        <TriggerButton>Center</TriggerButton>
      </div>
      <div style={{
      display: "flex",
      justifyContent: "flex-start"
    }}>
        <Tooltip label="Right tooltip" position="right" defaultOpen>
          <TriggerButton>Right</TriggerButton>
        </Tooltip>
      </div>
      <div />
      <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
        <Tooltip label="Bottom tooltip" position="bottom" defaultOpen>
          <TriggerButton>Bottom</TriggerButton>
        </Tooltip>
      </div>
      <div />
    </div>
}`,...(R=(C=a.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var O,w,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Tooltip label="Solid tooltip" variant="solid" defaultOpen>
        <TriggerButton>Solid</TriggerButton>
      </Tooltip>
      <Tooltip label="Subtle tooltip" variant="subtle" defaultOpen>
        <TriggerButton>Subtle</TriggerButton>
      </Tooltip>
    </div>
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var D,I,H;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>
      <Tooltip label={<div style={{
      display: "flex",
      flexDirection: "column",
      gap: 2
    }}>
            <strong>Pro tip</strong>
            <span style={{
        fontSize: 12
      }}>Use keyboard shortcuts to work faster</span>
          </div>} defaultOpen>
        <TriggerButton>Rich content</TriggerButton>
      </Tooltip>
      <Tooltip label="⌘ + S to save" defaultOpen>
        <TriggerButton>Save shortcut</TriggerButton>
      </Tooltip>
    </div>
}`,...(H=(I=p.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var N,V,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Tooltip label="You should not see this" disabled>
      <TriggerButton>Disabled tooltip</TriggerButton>
    </Tooltip>
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var _,E,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center"
    }}>
        <Tooltip label="Controlled tooltip" open={open}>
          <TriggerButton>Hover or click toggle</TriggerButton>
        </Tooltip>
        <button type="button" onClick={() => setOpen(v => !v)} style={{
        padding: "4px 10px",
        border: "1px solid #d4d4d8",
        borderRadius: 6,
        background: "white",
        cursor: "pointer",
        fontSize: 12
      }}>
          {open ? "Hide" : "Show"} tooltip
        </button>
      </div>;
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const ee=["Default","Positions","Variants","WithRichContent","Disabled","Controlled"];export{c as Controlled,s as Default,u as Disabled,a as Positions,d as Variants,p as WithRichContent,ee as __namedExportsOrder,Z as default};
