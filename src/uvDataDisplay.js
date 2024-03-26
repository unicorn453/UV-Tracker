// uvDataDisplay.js
export function displayUVData(data) {
  const uvDataDiv = document.getElementById("uvData");
  uvDataDiv.innerHTML = ""; // Clear previous data
  console.log("from uv display:", data);
  const table = document.createElement("table");
  const headers = [
    "UV Index",
    "UV Index Time",
    "Max UV Index",
    "Max UV Index Time",
    "Ozone Level",
    "Ozone Time",
  ];
  const headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  const rowData = [
    data.result.uv,
    data.result.uv_time,
    data.result.uv_max,
    data.result.uv_max_time,
    data.result.ozone,
    data.result.ozone_time,
  ];

  const row = document.createElement("tr");

  rowData.forEach((cellData) => {
    const td = document.createElement("td");
    td.textContent = cellData;
    row.appendChild(td);
  });

  table.appendChild(row);
  uvDataDiv.appendChild(table);
}
