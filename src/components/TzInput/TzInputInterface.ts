import { VariantEnum } from "./VariantEnum";

export interface TzInputInterface extends React.ComponentProps<'input'> {
  variant?: VariantEnum;
  filled?: boolean;
}