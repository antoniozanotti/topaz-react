import { VariantEnum } from "./VariantEnum";

export interface TzTagInterface extends React.ComponentProps<"span"> {
  label?: string;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
  disabled?: boolean;
}