import React from "react";
import { Button } from "./components/Button";
import "./styles/global.css";

function App() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "24px" }}>
        Sapyhte Design System
      </h1>
      <p style={{ fontSize: "16px", color: "var(--ds-color-text-secondary)", marginBottom: "32px" }}>
        React component library built from Figma design tokens.
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="default">Default</Button>
        <Button variant="dashed">Dashed</Button>
        <Button variant="text">Text</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
}

export default App;
