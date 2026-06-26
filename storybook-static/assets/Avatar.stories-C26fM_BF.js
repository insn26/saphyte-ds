import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as B}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const G={"2xs":{size:16,fontSize:8},xs:{size:24,fontSize:10},sm:{size:32,fontSize:12},md:{size:40,fontSize:14},lg:{size:48,fontSize:16},xl:{size:64,fontSize:20},"2xl":{size:96,fontSize:28}};function O(r){if(!r)return"";const s=r.trim().split(/\s+/).filter(Boolean);if(s.length===0)return"";if(s.length===1){const l=s[0];return l?l.substring(0,2).toUpperCase():""}const t=s[0],n=s[s.length-1],i=t?t[0]:"",g=n?n[0]:"";return`${i??""}${g??""}`.toUpperCase()}const a=B.forwardRef(({size:r="md",variant:s,name:t,src:n,alt:i,children:g,className:l="",style:V,...u},z)=>{const x=G[r],h=s??(n?"image":"solid"),M=g??O(t),f=["ds-avatar",`ds-avatar--${r}`,`ds-avatar--${h}`,l].filter(Boolean).join(" "),y={width:x.size,height:x.size,fontSize:x.fontSize,...V};return h==="image"&&n?e.jsx("span",{ref:z,className:f,style:y,...u,children:e.jsx("img",{className:"ds-avatar__img",src:n,alt:i??t??"",style:{width:"100%",height:"100%",objectFit:"cover"}})}):e.jsx("span",{ref:z,className:f,style:y,role:"img","aria-label":i??t,...u,children:e.jsx("span",{className:"ds-avatar__initials",children:M})})});a.displayName="Avatar";a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:'"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "image"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"image"'}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const H={title:"Components/Avatar",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["2xs","xs","sm","md","lg","xl","2xl"],table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["solid","image"]},name:{control:"text"},src:{control:"text"},alt:{control:"text"}}},o={args:{name:"Jane Cooper",size:"md"}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(a,{size:"2xs",name:"Jane Cooper"}),e.jsx(a,{size:"xs",name:"Jane Cooper"}),e.jsx(a,{size:"sm",name:"Jane Cooper"}),e.jsx(a,{size:"md",name:"Jane Cooper"}),e.jsx(a,{size:"lg",name:"Jane Cooper"}),e.jsx(a,{size:"xl",name:"Jane Cooper"}),e.jsx(a,{size:"2xl",name:"Jane Cooper"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{name:"Jane Cooper"}),e.jsx(a,{name:"John Doe"}),e.jsx(a,{name:"Alice"}),e.jsx(a,{name:"Michael"}),e.jsx(a,{name:"Robert Johnson"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"sm",src:"https://i.pravatar.cc/64?img=1",name:"User 1"}),e.jsx(a,{size:"md",src:"https://i.pravatar.cc/96?img=2",name:"User 2"}),e.jsx(a,{size:"lg",src:"https://i.pravatar.cc/128?img=3",name:"User 3"}),e.jsx(a,{size:"xl",src:"https://i.pravatar.cc/200?img=4",name:"User 4"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{children:"JD"}),e.jsx(a,{size:"lg",children:"SA"}),e.jsx(a,{size:"lg",children:"DS"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex"},children:[["https://i.pravatar.cc/64?img=11","https://i.pravatar.cc/64?img=12","https://i.pravatar.cc/64?img=13","https://i.pravatar.cc/64?img=14"].map((r,s)=>e.jsx(a,{size:"md",src:r,name:`User ${s+1}`,style:{border:"2px solid white",marginLeft:s===0?0:-10,zIndex:10-s}},r)),e.jsx(a,{size:"md",name:"+5",style:{border:"2px solid white",marginLeft:-10},children:"+5"})]})};var A,j,C;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: "Jane Cooper",
    size: "md"
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,J,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <Avatar size="2xs" name="Jane Cooper" />
      <Avatar size="xs" name="Jane Cooper" />
      <Avatar size="sm" name="Jane Cooper" />
      <Avatar size="md" name="Jane Cooper" />
      <Avatar size="lg" name="Jane Cooper" />
      <Avatar size="xl" name="Jane Cooper" />
      <Avatar size="2xl" name="Jane Cooper" />
    </div>
}`,...(I=(J=m.parameters)==null?void 0:J.docs)==null?void 0:I.source}}};var U,b,N;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <Avatar name="Jane Cooper" />
      <Avatar name="John Doe" />
      <Avatar name="Alice" />
      <Avatar name="Michael" />
      <Avatar name="Robert Johnson" />
    </div>
}`,...(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var w,D,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <Avatar size="sm" src="https://i.pravatar.cc/64?img=1" name="User 1" />
      <Avatar size="md" src="https://i.pravatar.cc/96?img=2" name="User 2" />
      <Avatar size="lg" src="https://i.pravatar.cc/128?img=3" name="User 3" />
      <Avatar size="xl" src="https://i.pravatar.cc/200?img=4" name="User 4" />
    </div>
}`,...(_=(D=p.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var q,R,T;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <Avatar>JD</Avatar>
      <Avatar size="lg">SA</Avatar>
      <Avatar size="lg">DS</Avatar>
    </div>
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var $,E,L;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex"
  }}>
      {["https://i.pravatar.cc/64?img=11", "https://i.pravatar.cc/64?img=12", "https://i.pravatar.cc/64?img=13", "https://i.pravatar.cc/64?img=14"].map((src, i) => <Avatar key={src} size="md" src={src} name={\`User \${i + 1}\`} style={{
      border: "2px solid white",
      marginLeft: i === 0 ? 0 : -10,
      zIndex: 10 - i
    }} />)}
      <Avatar size="md" name="+5" style={{
      border: "2px solid white",
      marginLeft: -10
    }}>
        +5
      </Avatar>
    </div>
}`,...(L=(E=v.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const K=["Default","Sizes","Initials","WithImage","CustomInitials","AvatarGroup"];export{v as AvatarGroup,d as CustomInitials,o as Default,c as Initials,m as Sizes,p as WithImage,K as __namedExportsOrder,H as default};
