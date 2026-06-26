import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const $=s.createContext(null),w=s.createContext(-1),R=()=>{const r=s.useContext($);if(!r)throw new Error("Tabs compound components must be used within <Tabs />");return r},k=()=>s.useContext(w),T=s.forwardRef(({defaultIndex:r=0,index:d,onChange:o,variant:c="line",size:i="md",isLazy:b=!1,className:p="",children:h,...u},l)=>{const t=d!==void 0,[f,j]=s.useState(r),P=t?d:f,v=s.useCallback(g=>{t||j(g),o==null||o(g)},[t,o]),W=s.useMemo(()=>({activeIndex:P,setActiveIndex:v,variant:c,size:i,isLazy:b}),[P,v,c,i,b]);return e.jsx($.Provider,{value:W,children:e.jsx("div",{ref:l,className:["ds-tabs",p].filter(Boolean).join(" "),...u,children:h})})});T.displayName="Tabs";const m=s.forwardRef(({className:r="",children:d,...o},c)=>{const{variant:i,size:b}=R(),p=s.Children.map(d,(u,l)=>s.isValidElement(u)?e.jsx(w.Provider,{value:l,children:u},u.key??l):u),h=["ds-tabs__list",`ds-tabs__list--${i}`,`ds-tabs__list--${b}`,r].filter(Boolean).join(" ");return e.jsx("div",{ref:c,role:"tablist",className:h,...o,children:p})});m.displayName="TabList";const a=s.forwardRef(({className:r="",isDisabled:d=!1,children:o,onClick:c,...i},b)=>{const{activeIndex:p,setActiveIndex:h,variant:u,size:l}=R(),t=k(),f=t>=0&&t===p,j=v=>{!d&&t>=0&&h(t),c==null||c(v)},P=["ds-tabs__tab",`ds-tabs__tab--${u}`,`ds-tabs__tab--${l}`,f&&"ds-tabs__tab--active",d&&"ds-tabs__tab--disabled",r].filter(Boolean).join(" ");return e.jsx("button",{ref:b,role:"tab",type:"button","aria-selected":f,"aria-disabled":d||void 0,tabIndex:f?0:-1,disabled:d,className:P,onClick:j,...i,children:o})});a.displayName="Tab";const x=s.forwardRef(({className:r="",children:d,...o},c)=>{const{activeIndex:i,isLazy:b}=R(),[p,h]=s.useState(()=>b?new Set([i]):new Set);s.useEffect(()=>{b&&h(l=>{if(l.has(i))return l;const t=new Set(l);return t.add(i),t})},[i,b]);const u=s.Children.map(d,(l,t)=>{if(!s.isValidElement(l))return l;const f=t===i,j=b?p.has(t):!0;return b&&!j?null:e.jsx(w.Provider,{value:t,children:e.jsx("div",{role:"tabpanel",hidden:!f,className:"ds-tabs__panel-wrapper",children:l})},l.key??t)});return e.jsx("div",{ref:c,className:["ds-tabs__panels",r].filter(Boolean).join(" "),...o,children:u})});x.displayName="TabPanels";const n=s.forwardRef(({className:r="",children:d,...o},c)=>{const i=["ds-tabs__panel",r].filter(Boolean).join(" ");return e.jsx("div",{ref:c,className:i,...o,children:d})});n.displayName="TabPanel";T.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},index:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"line" | "enclosed" | "soft-rounded"',elements:[{name:"literal",value:'"line"'},{name:"literal",value:'"enclosed"'},{name:"literal",value:'"soft-rounded"'}]},description:"",defaultValue:{value:'"line"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},isLazy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};m.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};x.__docgenInfo={description:"",methods:[],displayName:"TabPanels",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const K={title:"Components/Tabs",component:T,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["line","enclosed","soft-rounded"],table:{defaultValue:{summary:"line"}}},size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},defaultIndex:{control:"number"}}},y={render:r=>e.jsxs(T,{...r,children:[e.jsxs(m,{children:[e.jsx(a,{children:"Overview"}),e.jsx(a,{children:"Activity"}),e.jsx(a,{children:"Settings"})]}),e.jsxs(x,{children:[e.jsx(n,{children:"Overview content"}),e.jsx(n,{children:"Activity content"}),e.jsx(n,{children:"Settings content"})]})]})},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs(T,{variant:"line",children:[e.jsxs(m,{children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"})]}),e.jsxs(x,{children:[e.jsx(n,{children:"Content 1"}),e.jsx(n,{children:"Content 2"}),e.jsx(n,{children:"Content 3"})]})]}),e.jsxs(T,{variant:"enclosed",children:[e.jsxs(m,{children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"})]}),e.jsxs(x,{children:[e.jsx(n,{children:"Content 1"}),e.jsx(n,{children:"Content 2"}),e.jsx(n,{children:"Content 3"})]})]}),e.jsxs(T,{variant:"soft-rounded",children:[e.jsxs(m,{children:[e.jsx(a,{children:"Tab 1"}),e.jsx(a,{children:"Tab 2"}),e.jsx(a,{children:"Tab 3"})]}),e.jsxs(x,{children:[e.jsx(n,{children:"Content 1"}),e.jsx(n,{children:"Content 2"}),e.jsx(n,{children:"Content 3"})]})]})]})},N={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs(T,{size:"sm",children:[e.jsxs(m,{children:[e.jsx(a,{children:"Small"}),e.jsx(a,{children:"Tab Two"}),e.jsx(a,{children:"Tab Three"})]}),e.jsxs(x,{children:[e.jsx(n,{children:"Content"}),e.jsx(n,{children:"Content"}),e.jsx(n,{children:"Content"})]})]}),e.jsxs(T,{size:"md",children:[e.jsxs(m,{children:[e.jsx(a,{children:"Medium"}),e.jsx(a,{children:"Tab Two"}),e.jsx(a,{children:"Tab Three"})]}),e.jsxs(x,{children:[e.jsx(n,{children:"Content"}),e.jsx(n,{children:"Content"}),e.jsx(n,{children:"Content"})]})]}),e.jsxs(T,{size:"lg",children:[e.jsxs(m,{children:[e.jsx(a,{children:"Large"}),e.jsx(a,{children:"Tab Two"}),e.jsx(a,{children:"Tab Three"})]}),e.jsxs(x,{children:[e.jsx(n,{children:"Content"}),e.jsx(n,{children:"Content"}),e.jsx(n,{children:"Content"})]})]})]})},_={render:()=>e.jsxs(T,{children:[e.jsxs(m,{children:[e.jsx(a,{children:"Active"}),e.jsx(a,{isDisabled:!0,children:"Disabled"}),e.jsx(a,{children:"Other"})]}),e.jsxs(x,{children:[e.jsx(n,{children:"Active content"}),e.jsx(n,{children:"Disabled content"}),e.jsx(n,{children:"Other content"})]})]})};var L,I,q;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Activity</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Overview content</TabPanel>
        <TabPanel>Activity content</TabPanel>
        <TabPanel>Settings content</TabPanel>
      </TabPanels>
    </Tabs>
}`,...(q=(I=y.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var S,V,z;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      <Tabs variant="line">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs variant="soft-rounded">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
}`,...(z=(V=C.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var A,D,O;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <Tabs size="sm">
        <TabList>
          <Tab>Small</Tab>
          <Tab>Tab Two</Tab>
          <Tab>Tab Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs size="md">
        <TabList>
          <Tab>Medium</Tab>
          <Tab>Tab Two</Tab>
          <Tab>Tab Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs size="lg">
        <TabList>
          <Tab>Large</Tab>
          <Tab>Tab Two</Tab>
          <Tab>Tab Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
}`,...(O=(D=N.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var E,B,M;_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Tabs>
      <TabList>
        <Tab>Active</Tab>
        <Tab isDisabled>Disabled</Tab>
        <Tab>Other</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Active content</TabPanel>
        <TabPanel>Disabled content</TabPanel>
        <TabPanel>Other content</TabPanel>
      </TabPanels>
    </Tabs>
}`,...(M=(B=_.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const Q=["Default","Variants","Sizes","WithDisabledTab"];export{y as Default,N as Sizes,C as Variants,_ as WithDisabledTab,Q as __namedExportsOrder,K as default};
