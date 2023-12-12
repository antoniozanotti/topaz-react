import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName, withThemeByDataAttribute } from "@storybook/addon-themes";
import topaz from "./topaz";
import "../src/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    theme: topaz,
    controls: { expanded: true },
    backgrounds: {
      disable: true,
      default: "green",
      values: [
        { name: "orange", value: "#f97316" },
        { name: "green", value: "#a3e635" },
      ],
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
      attributeName: 'data-mode',
    }),
  ],
};

export default preview;
