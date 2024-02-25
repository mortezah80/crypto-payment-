import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      data: {
        active: "active~=true",
      },
      colors: {
        grayDark: "#C2C2C2",
        grayText: "#9F9F9F",
        grayLight: "#F5F5F5",
        background: "#FAFAFA",
        text: "#242424",
        primary: "#1093FF",
        card: "#FFF",
        card_shade: "#F5F5F5",
        icon: "#F6BF53",
        card_light: "#E0F1FF",
        black: "#242424",
        orange: "#FF9C27",
        orange_light: "#FFEFDC",
        gold: "#F6BF53",
        redText: "#F33131",
        disable: "#C2C2C2",
        borderGray: "#E1E1E1",
        primary_light: "#E0F1FF",
        greenAlertBack: "#D2F3DD",
        redAlterBack: "#F9DADA",
        greenAlert: "#17AD4A",
        redAlert: "#F33131",
        warningBack: "#FFEFDC",
        warning: "#FF9C27",
        greenCode: "#17AD4A",
        alterGray: "#E7E7E7",
        trashRed: "#FF5252",
      },
      fontFamily: {
        centery: "Century Gothic",
      },
      screens: {
        first: "1550px",
        income: "683px",
        "2md": "845px",
      },
      backgroundImage: {
        "auth-pattern": "url('/images/auth-pattern.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "business-hero": "url('/images/bg-business.svg')",
        "business-card-bg-1": "url('/images/business-card-bg1.svg')",
        "business-card-bg-2": "url('/images/business-card-bg2.svg')",
        dashboard: "url('/images/dashboardBackground.svg')",
        "dashboard-gradient":
          "linear-gradient(85deg, #0668B8 27.89%, #4BAEFF 79.03%)",
        marchent_card:
          "linear-gradient(45deg, rgba(25,151,255,1) 0%, rgba(71,170,252,1) 58%, rgba(16,147,255,1) 100%),url('G:/naji_tech/crypto-payment/src/assets/blueBack.png');",
      },
      boxShadow: {
        "3xl": "0px 15px 20px 0px rgba(0, 0, 0, 0.05)",
        "3xl-d": "0px 15px 20px 0px rgba(0, 0, 0, 0.15)",
        "4xl": "0px 30px 30px 0px rgba(0, 0, 0, 0.05)",
        "5xl": "0px 30px 40px -10px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
export default config;
