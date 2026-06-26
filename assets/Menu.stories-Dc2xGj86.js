import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as r}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const A=r.createContext(null),q=()=>{const o=r.useContext(A);if(!o)throw new Error("Menu subcomponents must be used within <Menu />");return o},R=r.forwardRef(({isOpen:o,defaultIsOpen:u=!1,onOpen:s,onClose:i,closeOnSelect:l=!0,closeOnBlur:n=!0,size:m="md",className:x="",children:c,...t},f)=>{const d=r.useRef(null),a=r.useRef(null),M=o!==void 0,[S,P]=r.useState(u),I=M?o:S,y=r.useCallback(w=>{M||P(w),w?s==null||s():i==null||i()},[M,s,i]),C=r.useMemo(()=>({isOpen:I,open:()=>y(!0),close:()=>y(!1),toggle:()=>y(!I),size:m,triggerRef:d,listRef:a,closeOnSelect:l,closeOnBlur:n}),[I,y,m,l,n]);return e.jsx(A.Provider,{value:C,children:e.jsx("div",{ref:f,className:["ds-menu",x].filter(Boolean).join(" "),...t,children:c})})});R.displayName="Menu";const h=r.forwardRef(({className:o="",asChild:u=!1,children:s,onClick:i,...l},n)=>{const m=q(),x=t=>{m.toggle(),i==null||i(t)};if(u&&r.isValidElement(s)){const t=s,f=d=>{m.triggerRef.current=d,typeof n=="function"?n(d):n&&(n.current=d);const a=t.ref;typeof a=="function"?a(d):a&&typeof a=="object"&&(a.current=d)};return r.cloneElement(t,{...t.props,ref:f,onClick:d=>{x(d);const a=t.props.onClick;a==null||a(d)},"aria-haspopup":"menu","aria-expanded":m.isOpen})}const c=t=>{m.triggerRef.current=t,typeof n=="function"?n(t):n&&(n.current=t)};return e.jsx("button",{ref:c,type:"button",className:["ds-menu__button",o].filter(Boolean).join(" "),"aria-haspopup":"menu","aria-expanded":m.isOpen,onClick:x,...l,children:s})});h.displayName="MenuButton";const g=r.forwardRef(({className:o="",children:u,placement:s="bottom-start",...i},l)=>{const n=q();r.useEffect(()=>{if(!n.isOpen)return;const c=f=>{var a,M;const d=f.target;(a=n.listRef.current)!=null&&a.contains(d)||(M=n.triggerRef.current)!=null&&M.contains(d)||n.close()},t=f=>{f.key==="Escape"&&n.close()};return document.addEventListener("mousedown",c),document.addEventListener("touchstart",c),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c),document.removeEventListener("keydown",t)}},[n]);const m=c=>{n.listRef.current=c,typeof l=="function"?l(c):l&&(l.current=c)};if(!n.isOpen)return null;const x=["ds-menu__list",`ds-menu__list--${n.size}`,`ds-menu__list--${s}`,o].filter(Boolean).join(" ");return e.jsx("div",{ref:m,role:"menu",className:x,...i,children:u})});g.displayName="MenuList";const p=r.forwardRef(({className:o="",isDisabled:u=!1,onClick:s,value:i,icon:l,command:n,children:m,...x},c)=>{const t=q(),f=a=>{if(u){a.preventDefault();return}s==null||s(a),t.closeOnSelect&&t.close()},d=["ds-menu__item",`ds-menu__item--${t.size}`,u&&"ds-menu__item--disabled",o].filter(Boolean).join(" ");return e.jsxs("button",{ref:c,type:"button",role:"menuitem",disabled:u,className:d,onClick:f,...x,children:[l&&e.jsx("span",{className:"ds-menu__item-icon",children:l}),e.jsx("span",{className:"ds-menu__item-label",children:m}),n&&e.jsx("span",{className:"ds-menu__item-command",children:n})]})});p.displayName="MenuItem";const v=r.forwardRef(({className:o="",children:u,...s},i)=>e.jsx("div",{ref:i,role:"separator","aria-orientation":"horizontal",className:["ds-menu__divider",o].filter(Boolean).join(" "),...s,children:u}));v.displayName="MenuDivider";const b=r.forwardRef(({className:o="",title:u,children:s,...i},l)=>e.jsxs("div",{ref:l,role:"group",className:["ds-menu__group",o].filter(Boolean).join(" "),...i,children:[u&&e.jsx("div",{className:"ds-menu__group-title",children:u}),e.jsx("div",{className:"ds-menu__group-content",children:s})]}));b.displayName="MenuGroup";R.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""},defaultIsOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnBlur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"MenuList",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:'"bottom-start" | "bottom-end" | "top-start" | "top-end"',elements:[{name:"literal",value:'"bottom-start"'},{name:"literal",value:'"bottom-end"'},{name:"literal",value:'"top-start"'},{name:"literal",value:'"top-end"'}]},description:"",defaultValue:{value:'"bottom-start"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},command:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};v.__docgenInfo={description:"",methods:[],displayName:"MenuDivider",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};b.__docgenInfo={description:"",methods:[],displayName:"MenuGroup",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const K={title:"Components/Menu",component:R,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},j={render:()=>e.jsxs(R,{children:[e.jsx(h,{style:{padding:"6px 12px",border:"1px solid #d4d4d8",borderRadius:6,background:"#fff",cursor:"pointer"},children:"Actions ▾"}),e.jsxs(g,{children:[e.jsx(p,{children:"Edit"}),e.jsx(p,{children:"Duplicate"}),e.jsx(v,{}),e.jsx(p,{children:"Archive"}),e.jsx(p,{children:"Delete"})]})]})},N={render:()=>e.jsxs(R,{children:[e.jsx(h,{style:{padding:"6px 12px",border:"1px solid #d4d4d8",borderRadius:6,background:"#fff",cursor:"pointer"},children:"Options ▾"}),e.jsxs(g,{children:[e.jsxs(b,{title:"Account",children:[e.jsx(p,{children:"Profile"}),e.jsx(p,{children:"Settings"})]}),e.jsx(v,{}),e.jsxs(b,{title:"Actions",children:[e.jsx(p,{children:"Help"}),e.jsx(p,{children:"Logout"})]})]})]})},_={render:()=>e.jsxs(R,{children:[e.jsx(h,{style:{padding:"6px 12px",border:"1px solid #d4d4d8",borderRadius:6,background:"#fff",cursor:"pointer"},children:"Open ▾"}),e.jsxs(g,{children:[e.jsx(p,{icon:e.jsx("span",{children:"✏️"}),children:"Edit"}),e.jsx(p,{icon:e.jsx("span",{children:"📋"}),command:"⌘C",children:"Copy"}),e.jsx(p,{icon:e.jsx("span",{children:"📄"}),command:"⌘P",children:"Print"}),e.jsx(v,{}),e.jsx(p,{icon:e.jsx("span",{children:"🗑️"}),children:"Delete"})]})]})};var T,E,L;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuButton style={{
      padding: "6px 12px",
      border: "1px solid #d4d4d8",
      borderRadius: 6,
      background: "#fff",
      cursor: "pointer"
    }}>
        Actions ▾
      </MenuButton>
      <MenuList>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuDivider />
        <MenuItem>Archive</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
}`,...(L=(E=j.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var B,D,O;N.parameters={...N.parameters,docs:{...(B=N.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuButton style={{
      padding: "6px 12px",
      border: "1px solid #d4d4d8",
      borderRadius: 6,
      background: "#fff",
      cursor: "pointer"
    }}>
        Options ▾
      </MenuButton>
      <MenuList>
        <MenuGroup title="Account">
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Actions">
          <MenuItem>Help</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
}`,...(O=(D=N.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var V,G,k;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuButton style={{
      padding: "6px 12px",
      border: "1px solid #d4d4d8",
      borderRadius: 6,
      background: "#fff",
      cursor: "pointer"
    }}>
        Open ▾
      </MenuButton>
      <MenuList>
        <MenuItem icon={<span>✏️</span>}>Edit</MenuItem>
        <MenuItem icon={<span>📋</span>} command="⌘C">
          Copy
        </MenuItem>
        <MenuItem icon={<span>📄</span>} command="⌘P">
          Print
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<span>🗑️</span>}>Delete</MenuItem>
      </MenuList>
    </Menu>
}`,...(k=(G=_.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};const F=["Default","WithGroups","WithIcons"];export{j as Default,N as WithGroups,_ as WithIcons,F as __namedExportsOrder,K as default};
