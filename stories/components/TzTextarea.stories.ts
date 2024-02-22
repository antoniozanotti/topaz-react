import type { Meta, StoryObj } from "@storybook/react";
import { TzTextarea } from "../../src/components/TzTextarea";

/**
 * The TzTextarea component has styles for hover and focus events, try it.
 */
const meta: Meta<typeof TzTextarea> = {
  component: TzTextarea,
  tags: ["autodocs"],
  args: {
    rows: 7,
    variant: "accent",
    filled: true
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantAccent: Story = {
  name: "Variant: Accent",
  args: {
    variant: "accent",
  },
};

export const VariantAccentOutline: Story = {
  name: "Variant: Accent, Filled: False",
  args: {
    variant: "accent",
    filled: false
  },
};

export const VariantPrimary: Story = {
  name: "Variant: Primary",
  args: {
    variant: "primary",
  },
};

export const VariantSecondary: Story = {
  name: "Variant: Secondary",
  args: {
    variant: "secondary",
  },
};

export const VariantNegative: Story = {
  name: "Variant: Negative",
  args: {
    variant: "negative",
  },
};

export const VariantDark: Story = {
  name: "Variant: Dark",
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  args: {
    variant: "dark",
  },
};

export const VariantLight: Story = {
  name: "Variant: Light",
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  args: {
    variant: "light",
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