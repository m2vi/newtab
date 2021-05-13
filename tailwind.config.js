module.exports = {
  darkMode: 'class',
  purge: ['./**/*.tsx', './components/**/**/.tsx'],
  theme: {
    zIndex: {
      n1: '-1',
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      discord: [
        'Whitney',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
    fontSize: {
      tiny: '0.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      normal: 'var(--text-normal-100)',
      muted: 'var(--color-primary-300)',
      focus: 'var(--icon-focus)',
      button: 'var(--color-button-text)',
      transparent: 'transparent',
      default: 'red',
      white: 'var(--icon-white)',
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        'washed-out': 'var(--color-secondary-washed-out)',
      },
      accent: {
        DEFAULT: 'var(--color-accent)',
        hover: 'var(--color-accent-hover)',
        disabled: 'var(--color-accent-disabled)',
        glow: 'var(--color-accent-glow)',
        2: {
          DEFAULT: 'var(--color-accent-2)',
        },
      },
    },
    spacing: {
      0: '0px',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '24px',
      6: '28px',
      7: '60px',
      8: '75px',
      9: '80px',
      14: '14rem',
      24: '24rem',
      100: '100px',
      250: '250px',
      300: '300px',
      400: '400px',
      800: '800px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
    },
    boxShadow: {
      none: 'none',
      accent: '0 0 0 3px var(--color-accent-glow)',
      1: 'var(--shadow-normal)',
    },
    extend: {
      borderRadius: {
        0: '0px',
        5: '4px',
        8: '8px',
        15: '15px',
      },
      outline: {
        'no-chrome': 'none',
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    textColor: ({ after }) => after(['disabled']),
    extend: {
      borderWidth: ['last'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
