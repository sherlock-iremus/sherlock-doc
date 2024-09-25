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
import Scores from "./queries/Scores";
import Contributors from "./queries/Contributors";
import Contributions from "./queries/Contributions";
import TonalitiesContributions from "./queries/TonalitiesContributions";
import NoteOccurences from "./queries/NoteOccurences";
import Fondamentales from "./queries/Fondamentales";
import HistoricalModelsOntologies from "./queries/HistoricalModelsOntologies";
import DocumentsByIndex from "./queries/DocumentsByIndex";
import ElasticSearch from "./queries/ElasticSearch";
import SherlockSearchEngine from "./queries/SherlockSearchEngine";
import TEIRenderer from "./queries/TEIRenderer";

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
          <Route path="scores" element={<Scores />} />
          <Route path="contributors" element={<Contributors />} />
          <Route path="contributions" element={<Contributions />} />
          <Route path="tonalities-contributions" element={<TonalitiesContributions />} />
          <Route path="note-occurences" element={<NoteOccurences />} />
          <Route path="fondamentales" element={<Fondamentales />} />
          <Route path="historical-models-ontologies" element={<HistoricalModelsOntologies />} />
          <Route path="documents-by-index" element={<DocumentsByIndex />} />
          <Route path="mg-livraisons" element={<MG_Livraisons />} />
          <Route path="elastic-search" element={<ElasticSearch />} />
          <Route path="sherlock-search-engine" element={<SherlockSearchEngine />} />
          <Route path="tei-renderer" element={<TEIRenderer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
