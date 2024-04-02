import React, { useEffect } from "react";
import { fetchUVData } from "../uvDataFetcher.js";
import { displayUVData } from "../uvDataDisplay.js";
import SearchButton from "./SearchButton";
import "../css/UvDataFetch.css";
import "../css/styles.css";

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
        <h1>UV Замерване</h1>
        <input type="text" id="locationInput" placeholder="Град на латиница" />
        <SearchButton /> {/* Use the SearchButton component here */}
        <div id="uvData">
          Моля Въведете град на Английски с латински букви (Областни градове
          показват по-акуратна информация!)
        </div>
      </div>
    </>
  );
}

export default UVDataFetch;
