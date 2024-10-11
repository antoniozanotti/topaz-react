import { VariantEnum } from "./VariantEnum";

export interface TzTextareaInterface extends React.ComponentProps<'textarea'> {
  rows?: number;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
}