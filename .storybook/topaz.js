import { create } from '@storybook/theming/create';
import topazBrand from './topaz-brand.svg?url'

export default create({
  base: 'light',
  brandTitle: 'Topaz React',
  brandUrl: '/',
  brandImage: topazBrand,
  brandTarget: '_self',
});