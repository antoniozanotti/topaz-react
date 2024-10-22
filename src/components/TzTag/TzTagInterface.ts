import { VariantEnum } from "./VariantEnum";

export type TzTagInterface = React.ComponentProps<"span"> & {
  label?: string;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
  disabled?: boolean;
}