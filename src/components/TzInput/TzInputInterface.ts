import { VariantEnum } from "./VariantEnum";

export interface TzInputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
  className?: string;
}