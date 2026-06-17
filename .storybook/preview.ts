import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#131316" },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const bg = context.globals.backgrounds?.value;
      const isDark = bg === "#131316";

      return React.createElement(
        "div",
        {
          "data-theme": isDark ? "dark" : "light",
          style: {
            padding: "24px",
            minHeight: "100vh",
          },
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
