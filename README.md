# Welcome to Topaz for React Projects ;)

UI component library based on [tailwindcss](https://tailwindcss.com/), [heroicons](https://heroicons.com/). Topaz is a [MIT licensed](https://opensource.org/license/mit/) project that is developed and maintained by [Antônio Zanotti](https://www.linkedin.com/in/antoniozanotti/).

# Install Topaz React

```sh
npm i -D topaz-react
```

Install Tailwind CSS [(instructions here)](https://tailwindcss.com/docs/installation)

Update the tailwind.config.ts file:

```ts
import type { Config } from "tailwindcss";
import presetTopazReact from "topaz-react/src/preset/tailwind-preset-topaz-react";

const config: Config = {
  content: ["./node_modules/topaz-react/src/components/*.{js,ts,jsx,tsx,mdx}"],
  presets: [presetTopazReact],
};
export default config;
```

That's all! Topaz's components can be imported in your .tsx files.

```jsx
import { TzButton } from 'topaz-react';

export default function Home() {
  return <TzButton label="Button" />;
}
```

# Tailwind CSS Preset Topaz React

You can **customize colours**, just update the tailwind.config.ts file.

```ts
import type { Config } from "tailwindcss";
import presetTopazReact from "topaz-react/src/preset/tailwind-preset-topaz-react";

const config: Config = {
  content: ["./node_modules/topaz-react/src/components/*.{js,ts,jsx,tsx,mdx}"],
  presets: [presetTopazReact],
  theme: {
    colors: {
      'accent': {
          DEFAULT: '#0891B2',
          1: '#06B6D4',
          2: '#22D3EE'
        },
        'dark-accent': {
          DEFAULT: '#22D3EE',
          1: '#06B6D4',
          2: '#0891B2'
        },
        'primary': {
          DEFAULT: '#083344',
          1: '#164E63',
          2: '#155E75'
        },
        'dark-primary': {
          DEFAULT: '#E2E8F0',
          1: '#CBD5E1',
          2: '#94A3B8'
        },
        'secondary': {
          DEFAULT: '#94A3B8',
          1: '#CBD5E1',
          2: '#E2E8F0'
        },
        'dark-secondary': {
          DEFAULT: '#155E75',
          1: '#164E63',
          2: '#083344'
        },
        'negative': {
          DEFAULT: '#B91C1C',
          1: '#DC2626',
          2: '#EF4444'
        },
        'dark-negative': {
          DEFAULT: '#EF4444',
          1: '#DC2626',
          2: '#B91C1C'
        },
        'dark': {
          DEFAULT: '#E5E7EB',
          1: '#F3F4F6',
          2: '#FFFFFF'
        },
        'dark-dark': {
          DEFAULT: '#000000',
          1: '#111827',
          2: '#1F2937'
        },
        'light': {
          DEFAULT: '#000000',
          1: '#111827',
          2: '#1F2937'
        },
        'dark-light': {
          DEFAULT: '#FFFFFF',
          1: '#F3F4F6',
          2: '#E5E7EB'
        }
    },
  },
};
export default config;
```

### Design Point of View

The components was designed to work with these variants:

- **accent**: color for greatest emphasis.
- **primary**: color for medium emphasis.
- **secondary**: color for lowest emphasis.
- **negative**: color for emphasizing actions that can be destructive.
- **dark**: dark on light theme, light on dark theme.
- **light**: light on light theme, dark on dark theme.

This color palette is ordered by contrast between variants (accent, primary, secondary...) and also shades (default, 1, 2).

**_You can use a [color contrast checker](https://colorkit.co/contrast-checker/) to help calculate the contrast. The colours dark-2 and dark-dark-2 are used for background.__**

# Features

- **Components**: visit the [official documentation](https://topaz-react.netlify.app/) to see available components.
- **Dark and Light Theme**: it uses [class strategy](https://tailwindcss.com/docs/dark-mode) of [tailwindcss](https://tailwindcss.com/).
- **Responsive**: some components on screens larger than or equal to 1024px will be ~20% smaller than mobile version.

**_The colours swap with each other by 'dark-' prefix._**

# Inpired In

- [Spectrum](https://spectrum.adobe.com/), Adobe’s design system
- [Vitamin](https://github.com/Decathlon/vitamin-web), Decathlon's design system
- [Vuetify](https://github.com/vuetifyjs/vuetify), Vue Component Framework

# License

MIT © [antoniozanotti](https://github.com/antoniozanotti)
