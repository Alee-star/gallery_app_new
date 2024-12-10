module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        likeRed: "#f50707",
        buttonGreen: "#05a081",
        textGray: "#4a4a4a",
        pink: "#f3c1c1",
        lightGray: "#7f7f7f",
        textAsh: "#333",
        lightBlack: "#2c343e",
        border: "#dfdfe0",
      },
      borderRadius: {
        10: "10px",
        30: "30px",
        5: "5px",
        100: "100px",
      },
      fontSize: {
        16: ["16px", "26px"],
      },
      zIndex: {
        2: "2",
      },
      height: {
        65: "65vh",
        70: "70vh",
      },
    },
  },
  plugins: [],
};
