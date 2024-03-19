import type { Meta, StoryObj } from "@storybook/react";
import { TzLabel } from "./TzLabel";

/**
 * The TzLabel component.
 */
const meta: Meta<typeof TzLabel> = {
  component: TzLabel,
  tags: ["autodocs"],
  args: {
    label: "Label",
    variant: "accent",
    filled: true,
    disabled: false
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantAccent: Story = {
  name: "Variant: Accent",
  args: {
    label: "new",
    variant: "accent",
  },
};

export const VariantPrimary: Story = {
  name: "Variant: Primary",
  args: {
    label: "outlet",
    variant: "primary",
  },
};

export const VariantSecondary: Story = {
  name: "Variant: Secondary",
  args: {
    label: "20% discount",
    variant: "secondary",
  },
};

export const VariantNegative: Story = {
  name: "Variant: Negative",
  args: {
    label: "dangerous area",
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
    label: "credits: Antonio Zanotti",
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
    label: "credits: Antonio Zanotti",
    variant: "light",
  },
};

export const FilledTrue: Story = {
  name: "Filled: true",
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  args: {
    label: "free",
    variant: "primary",
  },
};

export const FilledFalse: Story = {
  name: "Filled: false",
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  args: {
    ...FilledTrue.args,
    filled: false,
  },
};

export const Disable: Story = {
  name: "Disable",
  args: {
    label: "out of stock",
    disabled: true,
  },
};
