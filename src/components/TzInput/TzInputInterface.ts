import { VariantEnum } from "./VariantEnum";

export interface TzInputInterface extends React.ComponentProps<'input'> {
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
}