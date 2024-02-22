import type { Meta, StoryObj } from "@storybook/react";
import { TzHeading } from "../../src/components/TzHeading";

/**
 * The TzHeading component.
 */
const meta: Meta<typeof TzHeading> = {
  component: TzHeading,
  tags: ["autodocs"],
  args: {
    level: "h1",
    size: "x_large",
    variant: "accent",
    children: "Heading"
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  name: "h1, x_large, accent"
};

export const h2: Story = {
  name: "h2, large, accent-1",
  args: {
    level: "h2",
    size: "large",
    variant: "accent-1"
  },
};

export const h3: Story = {
  name: "h3, medium, accent-2",
  args: {
    level: "h3",
    size: "medium",
    variant: "accent-2"
  },
};

export const h4: Story = {
  name: "h4, small, secondary",
  args: {
    level: "h4",
    size: "small",
    variant: "secondary"
  },
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