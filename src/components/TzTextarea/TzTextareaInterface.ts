import { VariantEnum } from "./VariantEnum";

export type TzTextareaInterface = React.ComponentProps<'textarea'> & {
  rows?: number;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
}