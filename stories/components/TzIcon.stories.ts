import type { Meta, StoryObj } from "@storybook/react";
import { TzIcon } from "../../src/components/TzIcon";

/**
 * The TzIcon component.
 */
const meta: Meta<typeof TzIcon> = {
  component: TzIcon,
  tags: ["autodocs"],
  args: {
    iconName: "ArrowRightIcon",
    variant: "light",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const arrowRightIcon: Story = {
  name: "ArrowRightIcon, light"
};

export const moon: Story = {
  name: "MoonIcon, primary",
  args: {
    iconName: "MoonIcon",
    variant: "primary"
  },
};

export const sun: Story = {
  name: "SunIcon, secondary",
  args: {
    iconName: "SunIcon",
    variant: "secondary"
  },
};

export const heart: Story = {
  name: "HeartIcon, negative",
  args: {
    iconName: "HeartIcon",
    variant: "negative"
  },
};

