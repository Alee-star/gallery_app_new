module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "like-red": "#f50707",
        "button-green": "#05a081",
        "text-gray": "#4a4a4a",
        pink: "#f3c1c1",
        "light-gray": "#7f7f7f",
        "text-ash": "#333",
        "light-black": "#2c343e",
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
      backgroundImage: {
        banner: "url('/public/assets/happy-woman-with-smartphone.jpg')",
      },
    },
  },
  plugins: [],
};
