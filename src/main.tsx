import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import "@fontsource/noto-sans";

import Preparation from "./components/Preparation/Preparation.tsx";

import "./index.css";
import createPalette from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: createPalette({
    mode: "dark",
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Preparation />
    </ThemeProvider>
  </React.StrictMode>
);
