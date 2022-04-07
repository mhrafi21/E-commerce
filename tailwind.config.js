module.exports = {
  content: ["src/**/*.{html,js}" , "dist/index.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      width: {
        '128': '32rem',
      }
    },
    container: {
      center: true,
      padding:"1rem"
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        primary: "#FD3D57",
        secondary: "#4267B2",
      },
    }
  },
  plugins: [],

  variants: {
    extend: {
      display:["group-hover"]
    }
  }
}
