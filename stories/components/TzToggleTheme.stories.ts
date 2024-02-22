import type { Meta, StoryObj } from "@storybook/react";
import { TzToggleTheme } from "../../src/components/TzToggleTheme";

/**
 * The TzToggleTheme component based on [class strategy](https://tailwindcss.com/docs/dark-mode) of [tailwindcss](https://tailwindcss.com/).
 */
const meta: Meta<typeof TzToggleTheme> = {
  component: TzToggleTheme,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const toggle: Story = {
  name: "default"
};

export const SmallMobile: Story = {
  name: "Small Mobile",
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  }
};

export const LargeMobile: Story = {
  name: "Large Mobile",
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  }
};

export const Tablet: Story = {
  name: "Tablet",
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  }
};

export const Desktop: Story = {
  name: "Desktop"
};