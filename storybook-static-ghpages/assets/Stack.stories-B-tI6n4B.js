import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as m}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const E=4,A=a=>a===void 0?"0px":typeof a=="number"?`${a*E}px`:a,r=m.forwardRef(({direction:a="column",spacing:t=0,align:l,justify:i,wrap:b="nowrap",inline:V=!1,as:I,className:N="",style:T,children:q,..._},H)=>{const C=I??"div",D={display:V?"inline-flex":"flex",flexDirection:a,flexWrap:b,gap:A(t),alignItems:l,justifyContent:i,...T};return e.jsx(C,{ref:H,className:["ds-stack",N].filter(Boolean).join(" "),style:D,..._,children:q})});r.displayName="Stack";const s=m.forwardRef(({spacing:a=0,children:t,...l},i)=>e.jsx(r,{ref:i,direction:"column",spacing:a,...l,children:t}));s.displayName="VStack";const u=m.forwardRef(({spacing:a=0,children:t,...l},i)=>e.jsx(r,{ref:i,direction:"row",spacing:a,...l,children:t}));u.displayName="HStack";r.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{direction:{required:!1,tsType:{name:"union",raw:'"row" | "column" | "row-reverse" | "column-reverse"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'},{name:"literal",value:'"row-reverse"'},{name:"literal",value:'"column-reverse"'}]},description:"",defaultValue:{value:'"column"',computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"0",computed:!1}},align:{required:!1,tsType:{name:"union",raw:`| "start"
| "center"
| "end"
| "stretch"
| "baseline"`,elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"stretch"'},{name:"literal",value:'"baseline"'}]},description:""},justify:{required:!1,tsType:{name:"union",raw:`| "start"
| "center"
| "end"
| "space-between"
| "space-around"
| "space-evenly"`,elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-around"'},{name:"literal",value:'"space-evenly"'}]},description:""},wrap:{required:!1,tsType:{name:"union",raw:'"nowrap" | "wrap" | "wrap-reverse"',elements:[{name:"literal",value:'"nowrap"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"wrap-reverse"'}]},description:"",defaultValue:{value:'"nowrap"',computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"VStack",props:{spacing:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};u.__docgenInfo={description:"",methods:[],displayName:"HStack",props:{spacing:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const n=({children:a})=>e.jsx("div",{style:{padding:"8px 12px",background:"#ebe7ff",color:"#4c34c8",borderRadius:4,fontSize:13,fontWeight:500},children:a});n.__docgenInfo={description:"",methods:[],displayName:"Box",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const L={title:"Components/Stack",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","column","row-reverse","column-reverse"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","space-between","space-around","space-evenly"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},spacing:{control:"number"}}},o={render:()=>e.jsxs(s,{spacing:4,children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]})},c={render:()=>e.jsxs(u,{spacing:4,children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:32},children:[e.jsxs(s,{spacing:2,children:[e.jsx(n,{children:"1 (8px)"}),e.jsx(n,{children:"2"}),e.jsx(n,{children:"3"})]}),e.jsxs(s,{spacing:4,children:[e.jsx(n,{children:"2 (16px)"}),e.jsx(n,{children:"2"}),e.jsx(n,{children:"2"})]}),e.jsxs(s,{spacing:6,children:[e.jsx(n,{children:"3 (24px)"}),e.jsx(n,{children:"3"}),e.jsx(n,{children:"3"})]})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:32},children:[e.jsxs(r,{spacing:2,align:"start",style:{border:"1px dashed #d4d4d8",padding:8},children:[e.jsx(n,{children:"align start"}),e.jsx(n,{children:"align start"})]}),e.jsxs(r,{spacing:2,align:"center",style:{border:"1px dashed #d4d4d8",padding:8},children:[e.jsx(n,{children:"align center"}),e.jsx(n,{children:"align center"})]}),e.jsxs(r,{spacing:2,align:"end",style:{border:"1px dashed #d4d4d8",padding:8},children:[e.jsx(n,{children:"align end"}),e.jsx(n,{children:"align end"})]})]})};var x,g,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <VStack spacing={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </VStack>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,B;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <HStack spacing={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </HStack>
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,j,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 32
  }}>
      <VStack spacing={2}>
        <Box>1 (8px)</Box>
        <Box>2</Box>
        <Box>3</Box>
      </VStack>
      <VStack spacing={4}>
        <Box>2 (16px)</Box>
        <Box>2</Box>
        <Box>2</Box>
      </VStack>
      <VStack spacing={6}>
        <Box>3 (24px)</Box>
        <Box>3</Box>
        <Box>3</Box>
      </VStack>
    </div>
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,k,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 32
  }}>
      <Stack spacing={2} align="start" style={{
      border: "1px dashed #d4d4d8",
      padding: 8
    }}>
        <Box>align start</Box>
        <Box>align start</Box>
      </Stack>
      <Stack spacing={2} align="center" style={{
      border: "1px dashed #d4d4d8",
      padding: 8
    }}>
        <Box>align center</Box>
        <Box>align center</Box>
      </Stack>
      <Stack spacing={2} align="end" style={{
      border: "1px dashed #d4d4d8",
      padding: 8
    }}>
        <Box>align end</Box>
        <Box>align end</Box>
      </Stack>
    </div>
}`,...(R=(k=p.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const P=["VStackDefault","HStackDefault","Spacing","Alignment"];export{p as Alignment,c as HStackDefault,d as Spacing,o as VStackDefault,P as __namedExportsOrder,L as default};
