import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as c}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const t=c.forwardRef(({disabled:s=!1,checked:n,label:a,className:p="",id:u,...f},I)=>{const O=c.useId(),b=u??`ds-switch-${O}`,E=["ds-switch__track",n&&"ds-switch__track--on",s&&"ds-switch__track--disabled"].filter(Boolean).join(" ");return e.jsxs("label",{className:["ds-switch",s&&"ds-switch--disabled",p].filter(Boolean).join(" "),htmlFor:b,children:[e.jsxs("span",{className:"ds-switch__control",children:[e.jsx("input",{ref:I,id:b,type:"checkbox",role:"switch",className:"ds-switch__input",checked:n,disabled:s,...f}),e.jsx("span",{className:E,"aria-hidden":"true",children:e.jsx("span",{className:"ds-switch__thumb"})})]}),a&&e.jsx("span",{className:"ds-switch__label",children:a})]})});t.displayName="Switch";t.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const W={title:"Components/Switch",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},l={args:{label:"Enable notifications"}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(t,{label:"Off"}),e.jsx(t,{label:"On",defaultChecked:!0}),e.jsx(t,{label:"Disabled off",disabled:!0}),e.jsx(t,{label:"Disabled on",disabled:!0,defaultChecked:!0})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(t,{"aria-label":"Off"}),e.jsx(t,{"aria-label":"On",defaultChecked:!0}),e.jsx(t,{"aria-label":"Disabled",disabled:!0})]})},i={render:()=>{const[s,n]=c.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[e.jsx(t,{label:`Notifications are ${s?"on":"off"}`,checked:s,onChange:a=>n(a.target.checked)}),e.jsx("button",{type:"button",onClick:()=>n(a=>!a),style:{padding:"6px 12px",border:"1px solid #d4d4d8",borderRadius:6,background:"white",cursor:"pointer",fontSize:13},children:"Toggle externally"})]})}},d={render:()=>{const[s,n]=c.useState({wifi:!0,bluetooth:!1,airplane:!1,hotspot:!0});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,width:320,padding:16,border:"1px solid #e4e4e7",borderRadius:8},children:[["wifi","Wi-Fi"],["bluetooth","Bluetooth"],["airplane","Airplane mode"],["hotspot","Personal hotspot"]].map(([a,p])=>e.jsxs("label",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f4f4f5"},children:[e.jsx("span",{style:{fontSize:14},children:p}),e.jsx(t,{checked:s[a],onChange:u=>n(f=>({...f,[a]:u.target.checked}))})]},a))})}};var h,m,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications"
  }
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,y,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Switch label="Off" />
      <Switch label="On" defaultChecked />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,j,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <Switch aria-label="Off" />
      <Switch aria-label="On" defaultChecked />
      <Switch aria-label="Disabled" disabled />
    </div>
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var C,_,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = React.useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }}>
        <Switch label={\`Notifications are \${enabled ? "on" : "off"}\`} checked={enabled} onChange={e => setEnabled(e.target.checked)} />
        <button type="button" onClick={() => setEnabled(v => !v)} style={{
        padding: "6px 12px",
        border: "1px solid #d4d4d8",
        borderRadius: 6,
        background: "white",
        cursor: "pointer",
        fontSize: 13
      }}>
          Toggle externally
        </button>
      </div>;
  }
}`,...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var D,R,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = React.useState({
      wifi: true,
      bluetooth: false,
      airplane: false,
      hotspot: true
    });
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: 320,
      padding: 16,
      border: "1px solid #e4e4e7",
      borderRadius: 8
    }}>
        {([["wifi", "Wi-Fi"], ["bluetooth", "Bluetooth"], ["airplane", "Airplane mode"], ["hotspot", "Personal hotspot"]] as const).map(([key, label]) => <label key={key} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #f4f4f5"
      }}>
            <span style={{
          fontSize: 14
        }}>{label}</span>
            <Switch checked={settings[key]} onChange={e => setSettings(s => ({
          ...s,
          [key]: e.target.checked
        }))} />
          </label>)}
      </div>;
  }
}`,...(N=(R=d.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const q=["Default","States","WithoutLabel","Controlled","SettingsList"];export{i as Controlled,l as Default,d as SettingsList,r as States,o as WithoutLabel,q as __namedExportsOrder,W as default};
