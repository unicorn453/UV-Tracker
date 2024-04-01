import { useState, useEffect } from "react";
import { fetchUVData } from "./uvDataFetcher.js";
import { displayUVData } from "./uvDataDisplay.js"; // Corrected import statement

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import ContactPage from "./components/ContactPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
export default App;
