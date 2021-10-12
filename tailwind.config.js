module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "0px 4px 4px rgba(0,0,0,0.25)"
      },
      colors: {
        "green": "#81B29A",
        "navy": "#3D405B",
        "red": "#E07A5F",
        "tan": "#F4F1DE",
        "yellow": "#F2CC8F"
      },
      fontSize: {
        base: ["18px", "24px"]
      }
    },
    fontFamily: {
      text: ["Poppins", "sans-serif"],
      links: ["Red Hat Text", "sans-serif"],
      serif: ["Lora", "serif"]
    },
  },
  variants: {
    extend: {
      borderWidth: ["focus"],
      ringWidth: ["hover"]
    },
  },
  plugins: [],
}
