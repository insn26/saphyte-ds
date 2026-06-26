import React from "react";

export const Box: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      padding: "8px 12px",
      background: "#ebe7ff",
      color: "#4c34c8",
      borderRadius: 4,
      fontSize: 13,
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);
