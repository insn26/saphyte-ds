import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as d}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const l=d.forwardRef(({size:s="md",indeterminate:a=!1,disabled:n=!1,checked:x,label:r,className:b="",id:t,...o},c)=>{const w=d.useId(),C=t??`ds-checkbox-${w}`,f=d.useRef(null);d.useEffect(()=>{f.current&&(f.current.indeterminate=a)},[a]);const V=g=>{f.current=g,typeof c=="function"?c(g):c&&(c.current=g)},k=x||!1,B=["ds-checkbox__box",`ds-checkbox__box--${s}`,k&&"ds-checkbox__box--checked",a&&"ds-checkbox__box--indeterminate",n&&"ds-checkbox__box--disabled"].filter(Boolean).join(" ");return e.jsxs("label",{className:["ds-checkbox",n&&"ds-checkbox--disabled",b].filter(Boolean).join(" "),htmlFor:C,children:[e.jsxs("span",{className:"ds-checkbox__control",children:[e.jsx("input",{ref:V,id:C,type:"checkbox",className:"ds-checkbox__input",checked:k,disabled:n,...o}),e.jsx("span",{className:B,"aria-hidden":"true",children:a?e.jsx("svg",{viewBox:"0 0 16 16",className:"ds-checkbox__icon",fill:"none",children:e.jsx("path",{d:"M3.5 8h9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):k?e.jsx("svg",{viewBox:"0 0 16 16",className:"ds-checkbox__icon",fill:"none",children:e.jsx("path",{d:"M3.5 8.5l3 3 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),r&&e.jsx("span",{className:"ds-checkbox__label",children:r})]})});l.displayName="Checkbox";l.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const P={title:"Components/Checkbox",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},i={args:{label:"Accept terms and conditions",size:"md"}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(l,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(l,{size:"lg",label:"Large",defaultChecked:!0})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{label:"Unchecked"}),e.jsx(l,{label:"Checked",defaultChecked:!0}),e.jsx(l,{label:"Indeterminate",indeterminate:!0}),e.jsx(l,{label:"Disabled",disabled:!0}),e.jsx(l,{label:"Disabled checked",disabled:!0,defaultChecked:!0}),e.jsx(l,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(l,{"aria-label":"Option 1"}),e.jsx(l,{"aria-label":"Option 2",defaultChecked:!0}),e.jsx(l,{"aria-label":"Option 3",indeterminate:!0})]})},h={render:()=>{const s=["Email","SMS","Push notifications"],[a,n]=d.useState(["Email"]),x=a.length===s.length,r=a.length>0&&a.length<s.length,b=t=>{n(o=>o.includes(t)?o.filter(c=>c!==t):[...o,t])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(l,{label:"Select all",checked:x,indeterminate:r,onChange:t=>n(t.target.checked?[...s]:[])}),e.jsx("div",{style:{borderLeft:"1px solid #e4e4e7",marginLeft:8,paddingLeft:16,display:"flex",flexDirection:"column",gap:8},children:s.map(t=>e.jsx(l,{label:t,checked:a.includes(t),onChange:()=>b(t)},t))})]})}};var j,y,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions",
    size: "md"
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,_,D;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var L,z,N;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </div>
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var R,I,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <Checkbox aria-label="Option 1" />
      <Checkbox aria-label="Option 2" defaultChecked />
      <Checkbox aria-label="Option 3" indeterminate />
    </div>
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var E,M,q;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const options = ["Email", "SMS", "Push notifications"];
    const [selected, setSelected] = React.useState<string[]>(["Email"]);
    const allSelected = selected.length === options.length;
    const indeterminate = selected.length > 0 && selected.length < options.length;
    const toggle = (option: string) => {
      setSelected(prev => prev.includes(option) ? prev.filter(x => x !== option) : [...prev, option]);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
        <Checkbox label="Select all" checked={allSelected} indeterminate={indeterminate} onChange={e => setSelected(e.target.checked ? [...options] : [])} />
        <div style={{
        borderLeft: "1px solid #e4e4e7",
        marginLeft: 8,
        paddingLeft: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>
          {options.map(opt => <Checkbox key={opt} label={opt} checked={selected.includes(opt)} onChange={() => toggle(opt)} />)}
        </div>
      </div>;
  }
}`,...(q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const U=["Default","Sizes","States","WithoutLabel","Group"];export{i as Default,h as Group,u as Sizes,m as States,p as WithoutLabel,U as __namedExportsOrder,P as default};
