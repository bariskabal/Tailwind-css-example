module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'tailwindcss' : '#32445a',
        'twitter' : '#1da1f2'
      },
      spacing:{
        '15' : '3.75rem'
      },
      zIndex:{
        '-1' : '-1'
      }
    },
  },
  plugins: [],
}