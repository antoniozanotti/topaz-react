import type { Meta, StoryObj } from "@storybook/react";
import { TzIcon } from "./TzIcon";

/**
 * The TzIcon component based on [heroicons](https://heroicons.com/).
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

