# Welcome to Topaz for React Projects ;)

UI component library based on [tailwindcss](https://tailwindcss.com/), [heroicons](https://heroicons.com/). Topaz is a [MIT licensed](https://opensource.org/license/mit/) project that is developed and maintained by [Antônio Zanotti](https://www.linkedin.com/in/antoniozanotti/).

# Install Topaz React

```sh
npm install --save topaz-react
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
      accent: {
        DEFAULT: "#22d3ee",
        600: "#06b6d4",
        700: "#0891b2",
      },
      primary: {
        DEFAULT: "#155e75",
        600: "#164e63",
        700: "#083344",
      },
      secondary: {
        DEFAULT: "#e2e8f0",
        600: "#cbd5e1",
        700: "#94a3b8",
      },
      negative: {
        DEFAULT: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
      },
      dark: {
        DEFAULT: "#000",
        600: "#1f2937",
        700: "#111827",
      },
      light: {
        DEFAULT: "#fff",
        600: "#f3f4f6",
        700: "#e5e7eb",
      },
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
- **black**: black on light theme, white on dark theme.
- **white**: white on light theme, black on dark theme.

### Customization Tips

If you want to change colors, I recommend:

- **accent**: use a vibrant colour.
- **primary**: use a darker colour than accent variant.
- **secondary**: use a lighter colour than accent variant.
- **negative**, "black", "white": I don't recommend change them.

# Features

- **Components**: visit the [official documentation](https://topaz-react.netlify.app/) to see available components.
- **Dark and Light Theme**: it uses [class strategy](https://tailwindcss.com/docs/dark-mode) of [tailwindcss](https://tailwindcss.com/).
- **Responsive**: some components on screens larger than or equal to 1024px will be ~20% smaller than mobile version.

**_The primary and secondary variations swap with each other. The black and white variations swap with each other._**

# Inpired In

- [Spectrum](https://spectrum.adobe.com/), Adobe’s design system
- [Vitamin](https://github.com/Decathlon/vitamin-web), Decathlon's design system
- [Vuetify](https://github.com/vuetifyjs/vuetify), Vue Component Framework

# License

MIT © [antoniozanotti](https://github.com/antoniozanotti)
