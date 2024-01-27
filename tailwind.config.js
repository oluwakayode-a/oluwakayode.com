/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/*.{html,js,ts,vue}',
    './layouts/*.{html,js,ts,vue}',
    './pages/*.{html,js,ts,vue}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#FEFFF0',
        bgBlue: '#BAE6FF'
      },
      boxShadow: {
        'custom': '4.003px 4.003px 0px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

