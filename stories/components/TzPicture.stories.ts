import type { Meta, StoryObj } from "@storybook/react";
import { TzPicture } from "../../src/components/TzPicture";

/**
 * The TzPicture component.
 */
const meta: Meta<typeof TzPicture> = {
  component: TzPicture,
  tags: ["autodocs"],
  args: {
    level: "h1",
    size: "large",
    variant: "accent",
    children: "Picture"
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  name: "h1, large, accent"
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
  name: "h4, small, primary",
  args: {
    level: "h4",
    size: "small",
    variant: "primary"
  },
};