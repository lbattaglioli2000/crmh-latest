module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
      extend: {
        colors: {
            'pink-50': '#FFE3EC',
            'pink-100': '#FFB8D2',
            'pink-200': '#FF8DB8',
            'pink-300': '#F364A2',
            'pink-400': '#E5388C',
            'pink-500': '#C81E7E',
            'pink-600': '#9F1A6A',
            'pink-700': '#A30664',
            'pink-800': '#870557',
            'pink-900': '#620042',

            'accent': '#9446ED'
        },
        fontFamily: {
            'drawn': ['Delicious Handrawn', 'sans-serif'],
            'headline': ['DynaPuff', 'sans-serif'],
            'body': ['Poppins', 'sans-serif'],
            'stencil': ['Saira Stencil One', 'monospace']
        },
        boxShadow: {
            'solid-brand': '#870557 8px 8px 0 0',
            'pressed-brand': '#870557 0 0 0 0',
        }
    },
      container: {
          center: true,
          padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
          },
          screens: {
              sm: '700px',
              md: '800px',
              lg: '984px',
              xl: '1100px',
              '2xl': '1200px',
          },
      },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
