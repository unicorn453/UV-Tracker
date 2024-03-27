import React, { useEffect } from "react";
import { fetchUVData } from "../uvDataFetcher.js";
import { displayUVData } from "../uvDataDisplay.js";
import SearchButton from "./SearchButton";

function UVDataFetch() {
  useEffect(() => {
    const fetchAndDisplayUVData = () => {
      const locationInput = document.getElementById("locationInput").value;

      fetchUVData(locationInput)
        .then((data) => {
          displayUVData(data, "uvData");
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchAndDisplayUVData();
  }, []);

  return (
    <>
      <div className="container">
        <h1>UV Tracker</h1>
        <input type="text" id="locationInput" placeholder="Enter location" />
        <SearchButton /> {/* Use the SearchButton component here */}
        <div id="uvData">UV Data is being fetched...</div>
      </div>
    </>
  );
}

export default UVDataFetch;
