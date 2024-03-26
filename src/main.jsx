import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { fetchUVData } from "./uvDataFetcher.js";
import { displayUVData } from "./uvDataDisplay.js"; // Import the displayUVData function
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Add an event listener to the search button
document.getElementById("searchButton").addEventListener("click", async () => {
  const locationInput = document.getElementById("locationInput").value;
  try {
    const uvData = await fetchUVData(locationInput);
    const display = await displayUVData(uvData);
    // Display the fetched UV data
    console.log(uvData); // You can replace this with any display logic you need
  } catch (error) {
    console.error("Error fetching UV data:", error);
    // Handle the error, such as displaying an error message to the user
  }
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
