import { ReactNode } from "react";
import { VariantEnum } from "./VariantEnum";

export interface TzTextareaInterface extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
  className?: string;
  children?: ReactNode;
}