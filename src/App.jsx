import React, { useEffect } from "react";
import { fetchUVData } from "./uvDataFetcher.js";
import { displayUVData } from "./uvDataDisplay.js"; // Corrected import statement

function fetchAndDisplayUVData() {
  const locationInput = document.getElementById("locationInput").value;

  fetchUVData(locationInput)
    .then((data) => {
      displayUVData(data, "uvData");
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function App() {
  useEffect(() => {
    fetchAndDisplayUVData(); // Call fetchAndDisplayUVData() when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return <div>UV Data is being fetched...</div>; // Placeholder content while data is being fetched
}

export default App;
