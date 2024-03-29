const presetTopazReact = () => {
  return {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: ['class'],
    theme: {
      fontSize: {
        c1: '10px',
        c2: '12px',
        c3: '14px',
        c4: '16px',
        c5: '20px',
        c6: '24px',
        c7: '32px',
        c8: '36px',
        c9: '40px',
        c10: '48px',
        c11: '64px',
        c12: '96px',
      },
      colors: {
        accent: {
          DEFAULT: '#0891B2',
          1: '#06B6D4',
          2: '#22D3EE',
        },
        'dark-accent': {
          DEFAULT: '#22D3EE',
          1: '#06B6D4',
          2: '#0891B2',
        },
        primary: {
          DEFAULT: '#083344',
          1: '#164E63',
          2: '#155E75',
        },
        'dark-primary': {
          DEFAULT: '#E2E8F0',
          1: '#CBD5E1',
          2: '#94A3B8',
        },
        secondary: {
          DEFAULT: '#94A3B8',
          1: '#CBD5E1',
          2: '#E2E8F0',
        },
        'dark-secondary': {
          DEFAULT: '#155E75',
          1: '#164E63',
          2: '#083344',
        },
        negative: {
          DEFAULT: '#B91C1C',
          1: '#DC2626',
          2: '#EF4444',
        },
        'dark-negative': {
          DEFAULT: '#EF4444',
          1: '#DC2626',
          2: '#B91C1C',
        },
        dark: {
          DEFAULT: '#E5E7EB',
          1: '#F3F4F6',
          2: '#FFFFFF',
        },
        'dark-dark': {
          DEFAULT: '#000000',
          1: '#111827',
          2: '#1F2937',
        },
        light: {
          DEFAULT: '#000000',
          1: '#111827',
          2: '#1F2937',
        },
        'dark-light': {
          DEFAULT: '#FFFFFF',
          1: '#F3F4F6',
          2: '#E5E7EB',
        },
        'inverse-accent': '#000000',
        'inverse-dark-accent': '#000000',
        'inverse-primary': '#FFFFFF',
        'inverse-dark-primary': '#000000',
        'inverse-secondary': '#000000',
        'inverse-dark-secondary': '#FFFFFF',
        'inverse-negative': '#FFFFFF',
        'inverse-dark-negative': '#000000',
        'inverse-dark': '#000000',
        'inverse-dark-dark': '#FFFFFF',
        'inverse-light': '#FFFFFF',
        'inverse-dark-light': '#000000',
      },
    },
  };
};
export default presetTopazReact;
