import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as N}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const s=N.forwardRef(({variant:o="default",size:l="sm",className:i="",children:c,...R},S)=>{const g=["ds-kbd",`ds-kbd--${o}`,`ds-kbd--${l}`,i].filter(Boolean).join(" ");return e.jsx("kbd",{ref:S,className:g,...R,children:c})});s.displayName="Kbd";const r=N.forwardRef(({className:o="",children:l,...i},c)=>e.jsx("span",{ref:c,className:["ds-kbd-group",o].filter(Boolean).join(" "),...i,children:l}));r.displayName="KbdGroup";s.__docgenInfo={description:"",methods:[],displayName:"Kbd",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "subtle" | "solid"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"subtle"'},{name:"literal",value:'"solid"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"KbdGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const w={title:"Components/Kbd",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md"]},variant:{control:"select",options:["default","subtle","solid"]}}},d={render:()=>e.jsx(s,{children:"Ctrl"})},a={render:()=>e.jsxs(r,{children:[e.jsx(s,{size:"xs",children:"⌘"}),e.jsx(s,{size:"sm",children:"⌘"}),e.jsx(s,{size:"md",children:"⌘"})]})},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{variant:"default",children:"Default"}),e.jsx(s,{variant:"subtle",children:"Subtle"}),e.jsx(s,{variant:"solid",children:"Solid"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:["Press ",e.jsxs(r,{children:[e.jsx(s,{children:"⌘"}),"+",e.jsx(s,{children:"K"})]})," to open the search."]}),e.jsxs("div",{children:["Press ",e.jsxs(r,{children:[e.jsx(s,{children:"Ctrl"}),"+",e.jsx(s,{children:"Shift"}),"+",e.jsx(s,{children:"P"})]})," for command palette."]}),e.jsxs("div",{children:["Press ",e.jsx(r,{children:e.jsx(s,{children:"Esc"})})," to close."]})]})};var u,m,p;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Kbd>Ctrl</Kbd>
}`,...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,K,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <KbdGroup>
      <Kbd size="xs">⌘</Kbd>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="md">⌘</Kbd>
    </KbdGroup>
}`,...(f=(K=a.parameters)==null?void 0:K.docs)==null?void 0:f.source}}};var x,h,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <KbdGroup>
      <Kbd variant="default">Default</Kbd>
      <Kbd variant="subtle">Subtle</Kbd>
      <Kbd variant="solid">Solid</Kbd>
    </KbdGroup>
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,y,G;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div>
        Press <KbdGroup><Kbd>⌘</Kbd>+<Kbd>K</Kbd></KbdGroup> to open the search.
      </div>
      <div>
        Press <KbdGroup><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>P</Kbd></KbdGroup> for command palette.
      </div>
      <div>
        Press <KbdGroup><Kbd>Esc</Kbd></KbdGroup> to close.
      </div>
    </div>
}`,...(G=(y=n.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};const D=["Default","Sizes","Variants","Combos"];export{n as Combos,d as Default,a as Sizes,t as Variants,D as __namedExportsOrder,w as default};
