import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as d}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const I=d.createContext(null),P=()=>{const a=d.useContext(I);if(!a)throw new Error("Table subcomponents must be used within <Table />");return a},c=d.forwardRef(({size:a="md",variant:s="simple",interactive:l=!1,stickyHeader:n=!1,className:o="",caption:u,children:C,...S},A)=>{const z=d.useMemo(()=>({size:a,variant:s,interactive:l,stickyHeader:n}),[a,s,l,n]),B=["ds-table",`ds-table--${a}`,`ds-table--${s}`,l&&"ds-table--interactive",n&&"ds-table--sticky-header",o].filter(Boolean).join(" ");return e.jsx(I.Provider,{value:z,children:e.jsx("div",{className:"ds-table__container",children:e.jsxs("table",{ref:A,className:B,...S,children:[u&&e.jsx("caption",{className:"ds-table__caption",children:u}),C]})})})});c.displayName="Table";const m=d.forwardRef(({className:a="",children:s,...l},n)=>e.jsx("thead",{ref:n,className:["ds-table__thead",a].filter(Boolean).join(" "),...l,children:s}));m.displayName="Thead";const p=d.forwardRef(({className:a="",children:s,...l},n)=>e.jsx("tbody",{ref:n,className:["ds-table__tbody",a].filter(Boolean).join(" "),...l,children:s}));p.displayName="Tbody";const i=d.forwardRef(({className:a="",isSelected:s,children:l,...n},o)=>e.jsx("tr",{ref:o,className:["ds-table__tr",s&&"ds-table__tr--selected",a].filter(Boolean).join(" "),...n,children:l}));i.displayName="Tr";const r=d.forwardRef(({className:a="",isNumeric:s=!1,children:l,...n},o)=>{const{stickyHeader:u}=P();return e.jsx("th",{ref:o,scope:"col",className:["ds-table__th",s&&"ds-table__th--numeric",u&&"ds-table__th--sticky",a].filter(Boolean).join(" "),...n,children:l})});r.displayName="Th";const t=d.forwardRef(({className:a="",isNumeric:s=!1,children:l,...n},o)=>e.jsx("td",{ref:o,className:["ds-table__td",s&&"ds-table__td--numeric",a].filter(Boolean).join(" "),...n,children:l}));t.displayName="Td";const k=d.forwardRef(({className:a="",placement:s="top",children:l,...n},o)=>e.jsx("caption",{ref:o,className:["ds-table__caption",`ds-table__caption--${s}`,a].filter(Boolean).join(" "),...n,children:l}));k.displayName="TableCaption";c.__docgenInfo={description:"",methods:[],displayName:"Table",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"simple" | "striped" | "bordered"',elements:[{name:"literal",value:'"simple"'},{name:"literal",value:'"striped"'},{name:"literal",value:'"bordered"'}]},description:"",defaultValue:{value:'"simple"',computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"Thead",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"Tbody",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"Tr",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"Th",props:{isNumeric:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"Td",props:{isNumeric:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};k.__docgenInfo={description:"",methods:[],displayName:"TableCaption",props:{placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const O={title:"Components/Table",component:c,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["simple","striped","bordered"]},interactive:{control:"boolean"},stickyHeader:{control:"boolean"}}},y=[{id:1,name:"Liam James",email:"liam@saphyte.com",role:"Engineer",status:"Active"},{id:2,name:"Olivia Chen",email:"olivia@saphyte.com",role:"Designer",status:"Active"},{id:3,name:"Noah Patel",email:"noah@saphyte.com",role:"PM",status:"Inactive"},{id:4,name:"Ava Johnson",email:"ava@saphyte.com",role:"Engineer",status:"Active"},{id:5,name:"Ethan Lee",email:"ethan@saphyte.com",role:"QA",status:"Active"}],T={render:()=>e.jsxs(c,{children:[e.jsx(m,{children:e.jsxs(i,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Role"}),e.jsx(r,{children:"Status"})]})}),e.jsx(p,{children:y.map(a=>e.jsxs(i,{children:[e.jsx(t,{children:a.name}),e.jsx(t,{children:a.email}),e.jsx(t,{children:a.role}),e.jsx(t,{children:a.status})]},a.id))})]})},h={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["simple","striped","bordered"].map(a=>e.jsxs(c,{variant:a,children:[e.jsx("caption",{style:{textAlign:"left",padding:4,textTransform:"capitalize"},children:a}),e.jsx(m,{children:e.jsxs(i,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Role"})]})}),e.jsx(p,{children:y.slice(0,3).map(s=>e.jsxs(i,{children:[e.jsx(t,{children:s.name}),e.jsx(t,{children:s.email}),e.jsx(t,{children:s.role})]},s.id))})]},a))})},f={render:()=>e.jsxs(c,{interactive:!0,variant:"striped",children:[e.jsx(m,{children:e.jsxs(i,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Role"})]})}),e.jsx(p,{children:y.map(a=>e.jsxs(i,{children:[e.jsx(t,{children:a.name}),e.jsx(t,{children:a.email}),e.jsx(t,{children:a.role})]},a.id))})]})},x={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["sm","md","lg"].map(a=>e.jsxs(c,{size:a,children:[e.jsx(m,{children:e.jsxs(i,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Role"})]})}),e.jsx(p,{children:y.slice(0,2).map(s=>e.jsxs(i,{children:[e.jsx(t,{children:s.name}),e.jsx(t,{children:s.role})]},s.id))})]},a))})};var b,j,N;T.parameters={...T.parameters,docs:{...(b=T.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map(row => <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
            <Td>{row.status}</Td>
          </Tr>)}
      </Tbody>
    </Table>
}`,...(N=(j=T.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var v,R,_;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      {(["simple", "striped", "bordered"] as const).map(variant => <Table key={variant} variant={variant}>
          <caption style={{
        textAlign: "left",
        padding: 4,
        textTransform: "capitalize"
      }}>
            {variant}
          </caption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sampleData.slice(0, 3).map(row => <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.email}</Td>
                <Td>{row.role}</Td>
              </Tr>)}
          </Tbody>
        </Table>)}
    </div>
}`,...(_=(R=h.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var g,w,q;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Table interactive variant="striped">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map(row => <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>)}
      </Tbody>
    </Table>
}`,...(q=(w=f.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var V,D,E;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      {(["sm", "md", "lg"] as const).map(size => <Table key={size} size={size}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sampleData.slice(0, 2).map(row => <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.role}</Td>
              </Tr>)}
          </Tbody>
        </Table>)}
    </div>
}`,...(E=(D=x.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const H=["Default","Variants","Interactive","Sizes"];export{T as Default,f as Interactive,x as Sizes,h as Variants,H as __namedExportsOrder,O as default};
