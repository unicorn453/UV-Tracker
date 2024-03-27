// Create a new file named SearchButton.jsx

import React from "react";
import { fetchUVData } from "../uvDataFetcher.js";
import { displayUVData } from "../uvDataDisplay.js";

function SearchButton() {
  const handleClick = async () => {
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
  };

  return (
    <button id="searchButton" onClick={handleClick}>
      Search
    </button>
  );
}

export default SearchButton;
