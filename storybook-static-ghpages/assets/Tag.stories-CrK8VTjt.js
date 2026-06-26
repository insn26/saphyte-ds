import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as i}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const B=i.createContext(null),W=()=>{const a=i.useContext(B);if(!a)throw new Error("Tag subcomponents must be used within <Tag />");return a},l=i.forwardRef(({size:a="md",variant:s="subtle",colorPalette:n="gray",closable:t=!1,onClose:o,className:d="",children:x,...y},p)=>{const D=i.useMemo(()=>({size:a,variant:s,colorPalette:n,onClose:o,isClosable:t||!!o}),[a,s,n,o,t]),k=["ds-tag",`ds-tag--${a}`,`ds-tag--${s}`,`ds-tag--${n}`,d].filter(Boolean).join(" ");return e.jsx(B.Provider,{value:D,children:e.jsx("span",{ref:p,className:k,...y,children:x})})});l.displayName="Tag";const r=i.forwardRef(({className:a="",children:s,...n},t)=>{const{size:o}=W();return e.jsx("span",{ref:t,className:["ds-tag__label",`ds-tag__label--${o}`,a].filter(Boolean).join(" "),...n,children:s})});r.displayName="TagLabel";const h=i.forwardRef(({className:a="",children:s,onClick:n,...t},o)=>{const{onClose:d,size:x}=W(),y=p=>{p.stopPropagation(),n==null||n(p),d==null||d()};return e.jsx("button",{ref:o,type:"button","aria-label":"Remove tag",className:["ds-tag__close",`ds-tag__close--${x}`,a].filter(Boolean).join(" "),onClick:y,...t,children:s??e.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})});h.displayName="TagCloseButton";const c=i.forwardRef(({className:a="",children:s,...n},t)=>e.jsx("span",{ref:t,className:["ds-tag__icon","ds-tag__icon--left",a].filter(Boolean).join(" "),"aria-hidden":"true",...n,children:s}));c.displayName="TagLeftIcon";l.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "subtle" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"subtle"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"subtle"',computed:!1}},colorPalette:{required:!1,tsType:{name:"union",raw:`| "gray"
| "danger"
| "warning"
| "success"
| "info"
| "saphyte"`,elements:[{name:"literal",value:'"gray"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"saphyte"'}]},description:"",defaultValue:{value:'"gray"',computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"TagLabel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"TagCloseButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"TagLeftIcon",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const A={title:"Components/Tag",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["solid","subtle","outline"]},colorPalette:{control:"select",options:["gray","danger","warning","success","info","saphyte"]},closable:{control:"boolean"}}},u={render:a=>e.jsx(l,{...a,children:e.jsx(r,{children:"Tag label"})})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(l,{size:"sm",children:e.jsx(r,{children:"Small"})}),e.jsx(l,{size:"md",children:e.jsx(r,{children:"Medium"})}),e.jsx(l,{size:"lg",children:e.jsx(r,{children:"Large"})})]})},m={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:["subtle","solid","outline"].map(a=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["gray","danger","warning","success","info","saphyte"].map(s=>e.jsx(l,{variant:a,colorPalette:s,children:e.jsx(r,{children:s})},s))},a))})},f={render:()=>{const a=()=>{const[s,n]=i.useState(["React","TypeScript","Saphyte","Design System"]);return e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:s.map(t=>e.jsxs(l,{colorPalette:"saphyte",variant:"subtle",onClose:()=>n(s.filter(o=>o!==t)),children:[e.jsx(r,{children:t}),e.jsx(h,{})]},t))})};return e.jsx(a,{})}},T={render:()=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsxs(l,{colorPalette:"saphyte",variant:"subtle",children:[e.jsx(c,{children:e.jsx("span",{children:"●"})}),e.jsx(r,{children:"Active"})]}),e.jsxs(l,{colorPalette:"success",variant:"subtle",children:[e.jsx(c,{children:e.jsx("span",{children:"✓"})}),e.jsx(r,{children:"Verified"})]}),e.jsxs(l,{colorPalette:"danger",variant:"subtle",children:[e.jsx(c,{children:e.jsx("span",{children:"✕"})}),e.jsx(r,{children:"Failed"})]})]})};var v,b,j;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Tag {...args}>
      <TagLabel>Tag label</TagLabel>
    </Tag>
}`,...(j=(b=u.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var L,R,w;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <Tag size="sm">
        <TagLabel>Small</TagLabel>
      </Tag>
      <Tag size="md">
        <TagLabel>Medium</TagLabel>
      </Tag>
      <Tag size="lg">
        <TagLabel>Large</TagLabel>
      </Tag>
    </div>
}`,...(w=(R=g.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var N,_,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 8
  }}>
      {(["subtle", "solid", "outline"] as const).map(variant => <div key={variant} style={{
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }}>
          {(["gray", "danger", "warning", "success", "info", "saphyte"] as const).map(p => <Tag key={p} variant={variant} colorPalette={p}>
                <TagLabel>{p}</TagLabel>
              </Tag>)}
        </div>)}
    </div>
}`,...(I=(_=m.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var S,C,q;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const ClosableTags: React.FC = () => {
      const [tags, setTags] = React.useState(["React", "TypeScript", "Saphyte", "Design System"]);
      return <div style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }}>
          {tags.map(t => <Tag key={t} colorPalette="saphyte" variant="subtle" onClose={() => setTags(tags.filter(x => x !== t))}>
              <TagLabel>{t}</TagLabel>
              <TagCloseButton />
            </Tag>)}
        </div>;
    };
    return <ClosableTags />;
  }
}`,...(q=(C=f.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var P,V,z;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8
  }}>
      <Tag colorPalette="saphyte" variant="subtle">
        <TagLeftIcon>
          <span>●</span>
        </TagLeftIcon>
        <TagLabel>Active</TagLabel>
      </Tag>
      <Tag colorPalette="success" variant="subtle">
        <TagLeftIcon>
          <span>✓</span>
        </TagLeftIcon>
        <TagLabel>Verified</TagLabel>
      </Tag>
      <Tag colorPalette="danger" variant="subtle">
        <TagLeftIcon>
          <span>✕</span>
        </TagLeftIcon>
        <TagLabel>Failed</TagLabel>
      </Tag>
    </div>
}`,...(z=(V=T.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const O=["Default","Sizes","Variants","Closable","WithIcon"];export{f as Closable,u as Default,g as Sizes,m as Variants,T as WithIcon,O as __namedExportsOrder,A as default};
