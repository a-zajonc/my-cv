import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "montserrat",
    body: "montserrat",
  },
  colors: {
    brand: {
      firstSectionHeading: "#FFE7D4",
      firstSectionText: "white",
      secondSection: "#494E5F",
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
