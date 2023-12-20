import type { Meta, StoryObj } from "@storybook/react";
import { TzToggleTheme } from "../../src/components/TzToggleTheme";

/**
 * The TzToggleTheme component.
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