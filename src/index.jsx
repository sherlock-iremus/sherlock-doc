import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import theme from "./theme";

import Identity from "./queries/Identity";
import P127 from "./queries/P127";
import MG_Livraisons from "./queries/MG_Livraisons";
import Selections from "./queries/Selections";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="sherlock-doc">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="identity" element={<Identity />} />
          <Route path="p127" element={<P127 />} />
          <Route path="selections" element={<Selections />} />
          <Route path="mg-livraisons" element={<MG_Livraisons />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
