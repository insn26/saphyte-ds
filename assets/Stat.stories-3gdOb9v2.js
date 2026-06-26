import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as c}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=c.forwardRef(({className:t="",children:r,...a},s)=>e.jsx("div",{ref:s,role:"group",className:["ds-stat",t].filter(Boolean).join(" "),...a,children:r}));n.displayName="Stat";const o=c.forwardRef(({className:t="",children:r,...a},s)=>e.jsx("div",{ref:s,className:["ds-stat__label",t].filter(Boolean).join(" "),...a,children:r}));o.displayName="StatLabel";const l=c.forwardRef(({className:t="",children:r,...a},s)=>e.jsx("div",{ref:s,className:["ds-stat__number",t].filter(Boolean).join(" "),...a,children:r}));l.displayName="StatNumber";const d=c.forwardRef(({className:t="",children:r,...a},s)=>e.jsx("div",{ref:s,className:["ds-stat__help-text",t].filter(Boolean).join(" "),...a,children:r}));d.displayName="StatHelpText";const i=c.forwardRef(({type:t="up",className:r="",...a},s)=>{const S=["ds-stat__arrow",`ds-stat__arrow--${t}`,r].filter(Boolean).join(" ");return t==="up"?e.jsx("svg",{ref:s,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:S,"aria-label":"Increased",...a,children:e.jsx("polyline",{points:"6 15 12 9 18 15"})}):t==="down"?e.jsx("svg",{ref:s,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:S,"aria-label":"Decreased",...a,children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}):e.jsx("svg",{ref:s,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:S,"aria-label":"No change",...a,children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})});i.displayName="StatArrow";const h=c.forwardRef(({className:t="",children:r,...a},s)=>e.jsx("div",{ref:s,className:["ds-stat-group",t].filter(Boolean).join(" "),...a,children:r}));h.displayName="StatGroup";n.__docgenInfo={description:"",methods:[],displayName:"Stat",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"StatLabel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"StatNumber",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"StatHelpText",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"StatArrow",props:{type:{required:!1,tsType:{name:"union",raw:'"up" | "down" | "flat"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'},{name:"literal",value:'"flat"'}]},description:"",defaultValue:{value:'"up"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"StatGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const H={title:"Components/Stat",component:n,parameters:{layout:"padded"},tags:["autodocs"]},p={render:()=>e.jsxs(n,{children:[e.jsx(o,{children:"Active users"}),e.jsx(l,{children:"12,480"}),e.jsxs(d,{children:[e.jsx(i,{type:"up"}),"12% vs last month"]})]})},u={render:()=>e.jsxs(n,{children:[e.jsx(o,{children:"Bounce rate"}),e.jsx(l,{children:"42.3%"}),e.jsxs(d,{children:[e.jsx(i,{type:"down"}),"3.2% vs last month"]})]})},m={render:()=>e.jsxs(h,{children:[e.jsxs(n,{children:[e.jsx(o,{children:"Revenue"}),e.jsx(l,{children:"$24,580"}),e.jsxs(d,{children:[e.jsx(i,{type:"up"}),"8.1% this month"]})]}),e.jsxs(n,{children:[e.jsx(o,{children:"New customers"}),e.jsx(l,{children:"1,284"}),e.jsxs(d,{children:[e.jsx(i,{type:"up"}),"5.4% this month"]})]}),e.jsxs(n,{children:[e.jsx(o,{children:"Churn"}),e.jsx(l,{children:"2.1%"}),e.jsxs(d,{children:[e.jsx(i,{type:"down"}),"0.4% this month"]})]}),e.jsxs(n,{children:[e.jsx(o,{children:"Active sessions"}),e.jsx(l,{children:"847"}),e.jsxs(d,{children:[e.jsx(i,{type:"flat"}),"No change"]})]})]})};var x,f,N;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Stat>
      <StatLabel>Active users</StatLabel>
      <StatNumber>12,480</StatNumber>
      <StatHelpText>
        <StatArrow type="up" />
        12% vs last month
      </StatHelpText>
    </Stat>
}`,...(N=(f=p.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var j,w,b;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Stat>
      <StatLabel>Bounce rate</StatLabel>
      <StatNumber>42.3%</StatNumber>
      <StatHelpText>
        <StatArrow type="down" />
        3.2% vs last month
      </StatHelpText>
    </Stat>
}`,...(b=(w=u.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,v,R;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <StatGroup>
      <Stat>
        <StatLabel>Revenue</StatLabel>
        <StatNumber>$24,580</StatNumber>
        <StatHelpText>
          <StatArrow type="up" />
          8.1% this month
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>New customers</StatLabel>
        <StatNumber>1,284</StatNumber>
        <StatHelpText>
          <StatArrow type="up" />
          5.4% this month
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Churn</StatLabel>
        <StatNumber>2.1%</StatNumber>
        <StatHelpText>
          <StatArrow type="down" />
          0.4% this month
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Active sessions</StatLabel>
        <StatNumber>847</StatNumber>
        <StatHelpText>
          <StatArrow type="flat" />
          No change
        </StatHelpText>
      </Stat>
    </StatGroup>
}`,...(R=(v=m.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const A=["Default","WithDecrease","Group"];export{p as Default,m as Group,u as WithDecrease,A as __namedExportsOrder,H as default};
