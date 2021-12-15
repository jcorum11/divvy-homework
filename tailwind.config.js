module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamiy: {
        'rubix': ['Rubix']
      }
    },
    colors:{
      primary: {
        900: '#004b45',
        700: '#027151',
        500: '#049E53',
        300: '#5DE187',
      },
      secondary: {
        100: '#FEF7D0',
        500: '#F5BD17',
        700: '#B07E0B',
        900: '#754D04'
      },
      ui: {
        0: "#FFFFFF",
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5Db',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      shadow: '#C4C4C4',

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
