import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as n,i as R}from"./Icon-CjffpOtC.js";import"./index-yBjzXJbu.js";const C={title:"Components/Icon",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"select",options:R.slice(0,50),description:"Icon name (1508 available)"},size:{control:"number",table:{defaultValue:{summary:"16"}}}}},s={args:{name:"circle",size:24}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{name:"circle",size:12}),e.jsx(n,{name:"circle",size:16}),e.jsx(n,{name:"circle",size:20}),e.jsx(n,{name:"circle",size:24}),e.jsx(n,{name:"circle",size:32}),e.jsx(n,{name:"circle",size:40})]})},i={render:()=>e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["circle","square","check","x","arrow-right","arrow-left","plus","minus","search","settings","user","home","mail","bell","calendar","clock","heart","star","trash","edit","eye","download","upload","share"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:8,border:"1px solid #e4e4e7",borderRadius:6,minWidth:60},children:[e.jsx(n,{name:r,size:20}),e.jsx("span",{style:{fontSize:10,color:"#71717a"},children:r})]},r))})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxs("button",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:4,background:"#5d42e6",color:"white",border:"none"},children:[e.jsx(n,{name:"plus",size:14})," Add"]}),e.jsxs("button",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:4,background:"transparent",color:"#27272a",border:"1px solid #d4d4d8"},children:[e.jsx(n,{name:"download",size:14})," Download"]}),e.jsxs("button",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:4,background:"transparent",color:"#991919",border:"none"},children:[e.jsx(n,{name:"trash",size:14})," Delete"]})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{color:"#5d42e6"},children:e.jsx(n,{name:"star",size:32})}),e.jsx("div",{style:{color:"#ef4444"},children:e.jsx(n,{name:"heart",size:32})}),e.jsx("div",{style:{color:"#22c55e"},children:e.jsx(n,{name:"check",size:32})}),e.jsx("div",{style:{color:"#eab308"},children:e.jsx(n,{name:"star",size:32})}),e.jsx("div",{style:{color:"#3b82f6"},children:e.jsx(n,{name:"info",size:32})})]})},d={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(80px, 1fr))",gap:8,padding:16,maxWidth:1200},children:R.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:8,border:"1px solid #f4f4f5",borderRadius:6},children:[e.jsx(n,{name:r,size:18}),e.jsx("span",{style:{fontSize:9,color:"#71717a",textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},children:r})]},r))}),parameters:{layout:"fullscreen"}};var t,c,p;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: "circle",
    size: 24
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,x,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Icon name="circle" size={12} />
      <Icon name="circle" size={16} />
      <Icon name="circle" size={20} />
      <Icon name="circle" size={24} />
      <Icon name="circle" size={32} />
      <Icon name="circle" size={40} />
    </div>
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    flexWrap: "wrap"
  }}>
      {["circle", "square", "check", "x", "arrow-right", "arrow-left", "plus", "minus", "search", "settings", "user", "home", "mail", "bell", "calendar", "clock", "heart", "star", "trash", "edit", "eye", "download", "upload", "share"].map(name => <div key={name} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      padding: 8,
      border: "1px solid #e4e4e7",
      borderRadius: 6,
      minWidth: 60
    }}>
          <Icon name={name} size={20} />
          <span style={{
        fontSize: 10,
        color: "#71717a"
      }}>{name}</span>
        </div>)}
    </div>
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,b,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      <button style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: 4,
      background: "#5d42e6",
      color: "white",
      border: "none"
    }}>
        <Icon name="plus" size={14} /> Add
      </button>
      <button style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: 4,
      background: "transparent",
      color: "#27272a",
      border: "1px solid #d4d4d8"
    }}>
        <Icon name="download" size={14} /> Download
      </button>
      <button style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: 4,
      background: "transparent",
      color: "#991919",
      border: "none"
    }}>
        <Icon name="trash" size={14} /> Delete
      </button>
    </div>
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var z,I,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>
      <div style={{
      color: "#5d42e6"
    }}><Icon name="star" size={32} /></div>
      <div style={{
      color: "#ef4444"
    }}><Icon name="heart" size={32} /></div>
      <div style={{
      color: "#22c55e"
    }}><Icon name="check" size={32} /></div>
      <div style={{
      color: "#eab308"
    }}><Icon name="star" size={32} /></div>
      <div style={{
      color: "#3b82f6"
    }}><Icon name="info" size={32} /></div>
    </div>
}`,...(j=(I=o.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var w,k,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
    gap: 8,
    padding: 16,
    maxWidth: 1200
  }}>
      {iconNames.map(name => <div key={name} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      padding: 8,
      border: "1px solid #f4f4f5",
      borderRadius: 6
    }}>
          <Icon name={name} size={18} />
          <span style={{
        fontSize: 9,
        color: "#71717a",
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        width: "100%"
      }}>{name}</span>
        </div>)}
    </div>,
  parameters: {
    layout: "fullscreen"
  }
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const O=["Default","AllSizes","Common","InButton","WithColor","AllIcons"];export{d as AllIcons,a as AllSizes,i as Common,s as Default,l as InButton,o as WithColor,O as __namedExportsOrder,C as default};
