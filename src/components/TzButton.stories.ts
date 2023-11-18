import type { Meta, StoryObj } from "@storybook/react";
import { TzButton } from "./TzButton";

/**
 * The TzButton component has styles for hover, active and focus events, try it.
 */
const meta = {
  component: TzButton,
  tags: ["autodocs"],
  args: {
    label: "Button",
    iconName: undefined,
    isIconAfterLabel: false,
    size: "medium",
    variant: "accent",
    style: "fill",
    isDisabled: false,
    isLoading: false,
  },
} satisfies Meta<typeof TzButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyLabel: Story = {
  name: "Only Label",
  args: {
    label: "Home",
  },
};

export const OnlyIcon: Story = {
  name: "Only Icon",
  args: {
    label: "",
    iconName: "HomeIcon",
  },
};

export const LabelIconOnLeft: Story = {
  name: "Label and Icon on the left",
  args: {
    label: "Home",
    iconName: "HomeIcon",
  },
};

export const LabelIconOnRight: Story = {
  name: "Label and Icon on the right",
  args: {
    ...LabelIconOnLeft.args,
    isIconAfterLabel: true,
  },
};

export const SizeSmall: Story = {
  name: "Size: Small",
  args: {
    ...LabelIconOnLeft.args,
    size: "small",
  },
};

export const SizeMedium: Story = {
  name: "Size: Medium",
  args: {
    ...LabelIconOnLeft.args,
    size: "medium",
  },
};

export const SizeLarge: Story = {
  name: "Size: Large",
  args: {
    ...LabelIconOnLeft.args,
    size: "large",
  },
};

export const VariantAccent: Story = {
  name: "Variant: Accent",
  args: {
    label: "Shop Now",
    iconName: "ShoppingBagIcon",
    variant: "accent",
  },
};

export const VariantPrimary: Story = {
  name: "Variant: Primary",
  args: {
    label: "Sign up",
    variant: "primary",
  },
};

export const VariantSecondary: Story = {
  name: "Variant: Secondary",
  args: {
    label: "Log in",
    variant: "secondary",
  },
};

export const VariantNegative: Story = {
  name: "Variant: Negative",
  args: {
    label: "Delete Account",
    iconName: "XMarkIcon",
    variant: "negative",
  },
};

export const VariantBlack: Story = {
  name: "Variant: Black",
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  args: {
    label: "Share",
    iconName: "ShareIcon",
    variant: "black",
  },
};

export const VariantWhite: Story = {
  name: "Variant: White",
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  args: {
    label: "Share",
    iconName: "ShareIcon",
    variant: "white",
  },
};

export const StyleFill: Story = {
  name: "Style: Fill",
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  args: {
    iconName: "Bars4Icon",
    label: "Menu",
    variant: "primary",
  },
};

export const StyleOutline: Story = {
  name: "Style: Outline",
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  args: {
    ...StyleFill.args,
    style: "outline",
  },
};

export const Disable: Story = {
  name: "Disable",
  args: {
    iconName: "LockClosedIcon",
    label: "Locked",
    isDisabled: true,
  },
};

export const Loading: Story = {
  name: "Loading",
  args: {
    iconName: "ArrowPathIcon",
    label: "loading",
    isLoading: true,
  },
};

export const SmallMobile: Story = {
  name: "Small Mobile",
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    label: "Home",
    iconName: "HomeIcon",
  },
};

export const LargeMobile: Story = {
  name: "Large Mobile",
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  args: {
    label: "Home",
    iconName: "HomeIcon",
  },
};

export const Tablet: Story = {
  name: "Tablet",
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  args: {
    label: "Home",
    iconName: "HomeIcon",
  },
};

export const Desktop: Story = {
  name: "Desktop",
  args: {
    label: "Home",
    iconName: "HomeIcon",
  },
};
