import * as heroIcons from '@heroicons/react/24/outline';
import { VariantEnum } from './VariantEnum';

export interface TzIconInterface {
  iconName: keyof typeof heroIcons;
  variant?: VariantEnum;
  className?: string;
}