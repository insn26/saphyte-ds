import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as n}from"./index-Dx_1l3Sb.js";import{B as h}from"./Button-t5ptT03r.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const W=n.createContext(null),C=()=>{const o=n.useContext(W);if(!o)throw new Error("Popover subcomponents must be used within <Popover />");return o},f=n.forwardRef(({isOpen:o,defaultOpen:d=!1,onOpen:a,onClose:s,position:c="bottom",variant:i="default",closeOnBlur:t=!0,closeOnEsc:u=!0,className:x="",children:r,...m},l)=>{const p=n.useRef(null),w=n.useRef(null),v=o!==void 0,[M,G]=n.useState(d),B=v?o:M,j=n.useCallback(V=>{v||G(V),V?a==null||a():s==null||s()},[v,a,s]),J=n.useMemo(()=>({isOpen:B,open:()=>j(!0),close:()=>j(!1),toggle:()=>j(!B),position:c,triggerRef:p,listRef:w,variant:i,closeOnBlur:t,closeOnEsc:u}),[B,j,c,i,t,u]);return e.jsx(W.Provider,{value:J,children:e.jsx("div",{ref:l,className:["ds-popover",x].filter(Boolean).join(" "),...m,children:r})})});f.displayName="Popover";const g=n.forwardRef(({className:o="",asChild:d=!1,children:a,onClick:s,...c},i)=>{const t=C(),u=r=>{t.toggle(),s==null||s(r)};if(d&&n.isValidElement(a)){const r=a,m=l=>{t.triggerRef.current=l,typeof i=="function"?i(l):i&&(i.current=l);const p=r.ref;typeof p=="function"?p(l):p&&typeof p=="object"&&(p.current=l)};return n.cloneElement(r,{...r.props,ref:m,onClick:l=>{u(l);const p=r.props.onClick;p==null||p(l)},"aria-haspopup":"dialog","aria-expanded":t.isOpen})}const x=r=>{t.triggerRef.current=r,typeof i=="function"?i(r):i&&(i.current=r)};return e.jsx("button",{ref:x,type:"button",className:["ds-popover__trigger",o].filter(Boolean).join(" "),"aria-haspopup":"dialog","aria-expanded":t.isOpen,onClick:u,...c,children:a})});g.displayName="PopoverTrigger";const y=n.forwardRef(({className:o="",children:d,withArrow:a=!0,arrowSize:s=8,...c},i)=>{const t=C();n.useEffect(()=>{if(!t.isOpen)return;const r=l=>{var w,v;const p=l.target;(w=t.listRef.current)!=null&&w.contains(p)||(v=t.triggerRef.current)!=null&&v.contains(p)||t.close()},m=l=>{l.key==="Escape"&&t.close()};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),document.addEventListener("keydown",m),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r),document.removeEventListener("keydown",m)}},[t]);const u=r=>{t.listRef.current=r,typeof i=="function"?i(r):i&&(i.current=r)};if(!t.isOpen)return null;const x=["ds-popover__content",`ds-popover__content--${t.position}`,`ds-popover__content--${t.variant}`,o].filter(Boolean).join(" ");return e.jsxs("div",{ref:u,role:"dialog",className:x,...c,children:[a&&e.jsx("span",{className:["ds-popover__arrow",`ds-popover__arrow--${t.position}`].join(" "),style:{"--ds-popover-arrow-size":`${s}px`},"aria-hidden":"true"}),e.jsx("div",{className:"ds-popover__inner",children:d})]})});y.displayName="PopoverContent";const K=n.forwardRef(({className:o="",size:d=8,...a},s)=>{const{position:c}=C();return e.jsx("span",{ref:s,className:["ds-popover__arrow",`ds-popover__arrow--${c}`,o].filter(Boolean).join(" "),style:{"--ds-popover-arrow-size":`${d}px`},"aria-hidden":"true",...a})});K.displayName="PopoverArrow";const b=n.forwardRef(({className:o="",children:d,...a},s)=>e.jsx("div",{ref:s,className:["ds-popover__header",o].filter(Boolean).join(" "),...a,children:d}));b.displayName="PopoverHeader";const P=n.forwardRef(({className:o="",children:d,...a},s)=>e.jsx("div",{ref:s,className:["ds-popover__body",o].filter(Boolean).join(" "),...a,children:d}));P.displayName="PopoverBody";const q=n.forwardRef(({className:o="",children:d,...a},s)=>e.jsx("div",{ref:s,className:["ds-popover__footer",o].filter(Boolean).join(" "),...a,children:d}));q.displayName="PopoverFooter";f.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "subtle"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"subtle"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},closeOnBlur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};y.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},withArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},arrowSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};K.__docgenInfo={description:"",methods:[],displayName:"PopoverArrow",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};b.__docgenInfo={description:"",methods:[],displayName:"PopoverHeader",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};P.__docgenInfo={description:"",methods:[],displayName:"PopoverBody",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};q.__docgenInfo={description:"",methods:[],displayName:"PopoverFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const ee={title:"Components/Popover",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["top","right","bottom","left"]},variant:{control:"select",options:["default","subtle"]}}},N={render:()=>e.jsxs(f,{position:"bottom",children:[e.jsx(g,{asChild:!0,children:e.jsx(h,{colorPalette:"saphyte",children:"Open popover"})}),e.jsxs(y,{children:[e.jsx(b,{children:"About this feature"}),e.jsx(P,{children:"Popovers are perfect for floating content related to a trigger element."})]})]})},R={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,padding:100},children:["top","right","bottom","left"].map(o=>e.jsxs(f,{position:o,children:[e.jsx(g,{asChild:!0,children:e.jsx(h,{colorPalette:"saphyte",variant:"outline",children:o})}),e.jsx(y,{children:e.jsxs(P,{children:["This popover is on the ",o,"."]})})]},o))})},_={render:()=>e.jsxs(f,{position:"bottom",children:[e.jsx(g,{asChild:!0,children:e.jsx(h,{colorPalette:"saphyte",children:"Settings"})}),e.jsxs(y,{children:[e.jsx(b,{children:"Confirm action"}),e.jsx(P,{children:"Are you sure you want to continue?"}),e.jsxs(q,{children:[e.jsx(h,{size:"sm",variant:"ghost",children:"Cancel"}),e.jsx(h,{size:"sm",colorPalette:"saphyte",children:"Confirm"})]})]})]})},T={render:()=>e.jsxs(f,{position:"bottom",children:[e.jsx(g,{asChild:!0,children:e.jsx(h,{children:"No arrow"})}),e.jsx(y,{withArrow:!1,children:e.jsx(P,{children:"This popover has no arrow indicator."})})]})};var E,A,O;N.parameters={...N.parameters,docs:{...(E=N.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Popover position="bottom">
      <PopoverTrigger asChild>
        <Button colorPalette="saphyte">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>About this feature</PopoverHeader>
        <PopoverBody>
          Popovers are perfect for floating content related to a trigger
          element.
        </PopoverBody>
      </PopoverContent>
    </Popover>
}`,...(O=(A=N.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var S,z,I;R.parameters={...R.parameters,docs:{...(S=R.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    padding: 100
  }}>
      {(["top", "right", "bottom", "left"] as const).map(p => <Popover key={p} position={p}>
          <PopoverTrigger asChild>
            <Button colorPalette="saphyte" variant="outline">
              {p}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>This popover is on the {p}.</PopoverBody>
          </PopoverContent>
        </Popover>)}
    </div>
}`,...(I=(z=R.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var F,H,L;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Popover position="bottom">
      <PopoverTrigger asChild>
        <Button colorPalette="saphyte">Settings</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>Confirm action</PopoverHeader>
        <PopoverBody>Are you sure you want to continue?</PopoverBody>
        <PopoverFooter>
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
          <Button size="sm" colorPalette="saphyte">
            Confirm
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
}`,...(L=(H=_.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var $,k,D;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Popover position="bottom">
      <PopoverTrigger asChild>
        <Button>No arrow</Button>
      </PopoverTrigger>
      <PopoverContent withArrow={false}>
        <PopoverBody>This popover has no arrow indicator.</PopoverBody>
      </PopoverContent>
    </Popover>
}`,...(D=(k=T.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const oe=["Default","Positions","WithFooter","NoArrow"];export{N as Default,T as NoArrow,R as Positions,_ as WithFooter,oe as __namedExportsOrder,ee as default};
