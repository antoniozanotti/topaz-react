const presetTopazReact = () => {
  return {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: ['class'],
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
          DEFAULT: '#94A3B8',
          1: '#E2E8F0',
          2: '#CBD5E1'
        },
        'dark-primary': {
          DEFAULT: '#155E75',
          1: '#164E63',
          2: '#083344'
        },
        'secondary': {
          DEFAULT: '#083344',
          1: '#155E75',
          2: '#164E63'
        },
        'dark-secondary': {
          DEFAULT: '#E2E8F0',
          1: '#CBD5E1',
          2: '#94A3B8'
        },
        'negative': {
          DEFAULT: '#B91C1C',
          1: '#EF4444',
          2: '#DC2626'
        },
        'dark-negative': {
          DEFAULT: '#EF4444',
          1: '#DC2626',
          2: '#B91C1C'
        },
        'dark': {
          DEFAULT: '#E5E7EB',
          1: '#FFFFFF',
          2: '#F3F4F6'
        },
        'dark-dark': {
          DEFAULT: '#1F2937',
          1: '#111827',
          2: '#000000'
        },
        'light': {
          DEFAULT: '#111827',
          1: '#1F2937',
          2: '#000000'
        },
        'dark-light': {
          DEFAULT: '#FFFFFF',
          1: '#F3F4F6',
          2: '#E5E7EB'
        }
      },
    },
  };
};
export default presetTopazReact;
