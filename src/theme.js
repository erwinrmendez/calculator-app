import { createGlobalStyle } from "styled-components";

// Global styles
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Spartan", sans-serif;
    transition: background-color 0.5s ease;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

// theme 1
export const darkTheme = {
  // main
  primary: "hsl(222, 26%, 31%)",
  secondary: "hsl(223, 31%, 20%)",
  screen: "hsl(224, 36%, 15%)",

  // keys
  keyBG1: "hsl(225, 21%, 49%)",
  keyShadow1: "hsl(224, 28%, 35%)",
  keyBG2: "hsl(6, 63%, 50%)",
  keyShadow2: "hsl(6, 70%, 34%)",
  keyDefaultBG: "hsl(30, 25%, 89%)",
  keyDefaultShadow: "hsl(28, 16%, 65%)",

  // text
  textColorDefault: "hsl(221, 14%, 31%)",
  textColor1: "#FFF",
};

// theme 2
export const lightTheme = {
  // main
  primary: "hsl(0, 0%, 90%)",
  secondary: "hsl(0, 5%, 81%)",
  screen: "hsl(0, 0%, 93%)",

  // keys
  keyBG1: "hsl(185, 42%, 37%)",
  keyShadow1: "hsl(185, 58%, 25%)",
  keyBG2: "hsl(25, 98%, 40%)",
  keyShadow2: "hsl(25, 99%, 27%)",
  keyDefaultBG: "hsl(45, 7%, 89%)",
  keyDefaultShadow: "hsl(35, 11%, 61%)",

  // text
  textColorDefault: "hsl(60, 10%, 19%)",
  textColor1: "hsl(60, 10%, 19%)",
};

// theme 3
export const darkerTheme = {
  // main
  primary: "hsl(268, 75%, 9%)",
  secondary: "hsl(268, 71%, 12%)",
  screen: "hsl(268, 71%, 12%)",

  // keys
  keyBG1: "hsl(281, 89%, 26%)",
  keyShadow1: "hsl(285, 91%, 52%)",
  keyBG2: "hsl(176, 100%, 44%)",
  keyShadow2: "hsl(177, 92%, 70%)",
  keyDefaultBG: "hsl(268, 47%, 21%)",
  keyDefaultShadow: "hsl(290, 70%, 36%)",

  // text
  textColorDefault: "hsl(52, 100%, 62%)",
  textColor1: "hsl(52, 100%, 62%)",
  textColor2: "hsl(198, 20%, 13%)",
};
