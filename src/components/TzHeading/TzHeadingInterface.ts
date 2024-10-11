import { LevelEnum } from './LevelEnum';
import { SizeEnum } from './SizeEnum';
import { VariantEnum } from './VariantEnum';

export interface TzHeadingInterface extends React.ComponentProps<'h1'> {
  level?: LevelEnum;
  size?: SizeEnum;
  variant?: VariantEnum;
  children?: React.ReactNode;
}
