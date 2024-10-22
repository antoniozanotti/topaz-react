import { VariantEnum } from './VariantEnum';

export type TzInputInterface = React.ComponentProps<'input'> & {
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
};
