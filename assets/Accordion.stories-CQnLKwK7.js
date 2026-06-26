import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as o}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const F=o.createContext(null),N=o.createContext(-1),P=()=>{const n=o.useContext(F);if(!n)throw new Error("Accordion subcomponents must be used within <Accordion />");return n},C=n=>n===void 0?new Set:new Set(Array.isArray(n)?n:[n]),X=(n,a)=>{const i=Array.from(n).sort((l,u)=>l-u);return a?i:i[0]??-1},h=o.forwardRef(({defaultIndex:n,index:a,onChange:i,allowMultiple:l=!1,allowToggle:u=!1,variant:m="default",size:d="md",className:s="",children:f,..._},L)=>{const B=a!==void 0,[G,J]=o.useState(()=>C(n)),j=B?C(a):G,[b,K]=o.useState(new Set),x=l||u,S=o.useCallback((A,p)=>{K(U=>{const y=new Set(U);return p?y.add(A):y.delete(A),y})},[]),R=o.useCallback(A=>{if(b.has(A))return;const p=new Set(j);p.has(A)?p.delete(A):(x||p.clear(),p.add(A)),B||J(p),i==null||i(X(p,x))},[j,B,x,i,b]),Q=o.useMemo(()=>({expanded:j,toggle:R,variant:m,size:d,isMultiple:x,disabledMap:b,setDisabled:S}),[j,R,m,d,x,b,S]);return e.jsx(F.Provider,{value:Q,children:e.jsx("div",{ref:L,className:["ds-accordion",`ds-accordion--${m}`,s].filter(Boolean).join(" "),..._,children:f})})});h.displayName="Accordion";const t=o.forwardRef(({className:n="",isDisabled:a=!1,children:i,...l},u)=>{const{variant:m,setDisabled:d}=P(),[s]=o.useState(()=>Math.floor(Math.random()*1e6));return o.useEffect(()=>(d(s,a),()=>d(s,!1)),[s,a,d]),e.jsx(N.Provider,{value:s,children:e.jsx("div",{ref:u,className:["ds-accordion__item",`ds-accordion__item--${m}`,a&&"ds-accordion__item--disabled",n].filter(Boolean).join(" "),...l,children:i})})});t.displayName="AccordionItem";const r=o.forwardRef(({className:n="",children:a,...i},l)=>{const{expanded:u,toggle:m,size:d}=P(),s=o.useContext(N),f=u.has(s),_=["ds-accordion__button",`ds-accordion__button--${d}`,f&&"ds-accordion__button--open",n].filter(Boolean).join(" ");return e.jsxs("button",{ref:l,type:"button",className:_,"aria-expanded":f,onClick:()=>m(s),...i,children:[e.jsx("span",{className:"ds-accordion__button-label",children:a}),e.jsx("span",{className:["ds-accordion__icon",f&&"ds-accordion__icon--open"].filter(Boolean).join(" "),"aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})});r.displayName="AccordionButton";const c=o.forwardRef(({className:n="",children:a,...i},l)=>{const{expanded:u,size:m}=P(),d=o.useContext(N),s=u.has(d),f=["ds-accordion__panel",`ds-accordion__panel--${m}`,s&&"ds-accordion__panel--open",n].filter(Boolean).join(" ");return e.jsx("div",{ref:l,className:f,role:"region",hidden:!s,...i,children:e.jsx("div",{className:"ds-accordion__panel-content",children:a})})});c.displayName="AccordionPanel";h.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultIndex:{required:!1,tsType:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},description:""},index:{required:!1,tsType:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number | number[]) => void",signature:{arguments:[{type:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},name:"index"}],return:{name:"void"}}},description:""},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "bordered" | "flush"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"flush"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};t.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"AccordionButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const oe={title:"Components/Accordion",component:h,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{allowMultiple:{control:"boolean"},variant:{control:"select",options:["default","bordered","flush"]}}},I={render:()=>e.jsxs(h,{defaultIndex:0,children:[e.jsxs(t,{children:[e.jsx(r,{children:"Section 1"}),e.jsx(c,{children:"Content for section 1."})]}),e.jsxs(t,{children:[e.jsx(r,{children:"Section 2"}),e.jsx(c,{children:"Content for section 2."})]}),e.jsxs(t,{children:[e.jsx(r,{children:"Section 3"}),e.jsx(c,{children:"Content for section 3."})]})]})},w={render:()=>e.jsxs(h,{allowMultiple:!0,defaultIndex:[0,1],children:[e.jsxs(t,{children:[e.jsx(r,{children:"First section"}),e.jsx(c,{children:"Content of the first section."})]}),e.jsxs(t,{children:[e.jsx(r,{children:"Second section"}),e.jsx(c,{children:"Content of the second section."})]}),e.jsxs(t,{children:[e.jsx(r,{children:"Third section"}),e.jsx(c,{children:"Content of the third section."})]})]})},v={render:()=>e.jsxs(h,{variant:"bordered",children:[e.jsxs(t,{children:[e.jsx(r,{children:"How do I get started?"}),e.jsx(c,{children:"Sign up for an account and follow our getting started guide."})]}),e.jsxs(t,{children:[e.jsx(r,{children:"Where can I find pricing?"}),e.jsx(c,{children:"Visit our pricing page for the latest information."})]}),e.jsxs(t,{children:[e.jsx(r,{children:"How do I contact support?"}),e.jsx(c,{children:"Email support@saphyte.com or use the in-app chat."})]})]})},g={render:()=>e.jsxs(h,{children:[e.jsxs(t,{children:[e.jsx(r,{children:"Available"}),e.jsx(c,{children:"This section is available."})]}),e.jsxs(t,{isDisabled:!0,children:[e.jsx(r,{children:"Disabled"}),e.jsx(c,{children:"This section is disabled."})]}),e.jsxs(t,{children:[e.jsx(r,{children:"Available"}),e.jsx(c,{children:"This section is available."})]})]})};var T,q,M;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Accordion defaultIndex={0}>
      <AccordionItem>
        <AccordionButton>Section 1</AccordionButton>
        <AccordionPanel>Content for section 1.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Section 2</AccordionButton>
        <AccordionPanel>Content for section 2.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Section 3</AccordionButton>
        <AccordionPanel>Content for section 3.</AccordionPanel>
      </AccordionItem>
    </Accordion>
}`,...(M=(q=I.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var V,D,E;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Accordion allowMultiple defaultIndex={[0, 1]}>
      <AccordionItem>
        <AccordionButton>First section</AccordionButton>
        <AccordionPanel>Content of the first section.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Second section</AccordionButton>
        <AccordionPanel>Content of the second section.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Third section</AccordionButton>
        <AccordionPanel>Content of the third section.</AccordionPanel>
      </AccordionItem>
    </Accordion>
}`,...(E=(D=w.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var k,W,H;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Accordion variant="bordered">
      <AccordionItem>
        <AccordionButton>How do I get started?</AccordionButton>
        <AccordionPanel>
          Sign up for an account and follow our getting started guide.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Where can I find pricing?</AccordionButton>
        <AccordionPanel>
          Visit our pricing page for the latest information.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>How do I contact support?</AccordionButton>
        <AccordionPanel>
          Email support@saphyte.com or use the in-app chat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
}`,...(H=(W=v.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var O,$,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Accordion>
      <AccordionItem>
        <AccordionButton>Available</AccordionButton>
        <AccordionPanel>This section is available.</AccordionPanel>
      </AccordionItem>
      <AccordionItem isDisabled>
        <AccordionButton>Disabled</AccordionButton>
        <AccordionPanel>This section is disabled.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Available</AccordionButton>
        <AccordionPanel>This section is available.</AccordionPanel>
      </AccordionItem>
    </Accordion>
}`,...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const te=["Default","Multiple","Bordered","WithDisabled"];export{v as Bordered,I as Default,w as Multiple,g as WithDisabled,te as __namedExportsOrder,oe as default};
