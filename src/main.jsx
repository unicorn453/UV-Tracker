import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { fetchUVData } from "./uvDataFetcher.js";
import { displayUVData } from "./uvDataDisplay.js"; // Import the displayUVData function
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import Header from "./components/Header.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
