import * as heroIcons from '@heroicons/react/20/solid';
import { VariantEnum } from './VariantEnum';

export type TzButtonInterface = React.ComponentProps<'button'> & {
  label?: string;
  iconName?: keyof typeof heroIcons;
  isIconAfterLabel?: boolean;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}