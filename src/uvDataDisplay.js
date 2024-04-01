export function displayUVData(data) {
  const uvDataDiv = document.getElementById("uvData");
  uvDataDiv.innerHTML = ""; // Clear previous data
  console.log("from uv display:", data);

  // Create the table
  const table = document.createElement("table");
  const headers = [
    "UV Индекс",
    "UV Индекс Час UTC",
    "Макс UV Index",
    "Макс UV Index Време UTC",
    "Ниво на Озона",
    "Час на Озонов Тест UTC",
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

  // Append the row to the table
  table.appendChild(row);
  uvDataDiv.appendChild(table);

  // Create a div for the action message and append it to uvDataDiv
  const actionMessageDiv = document.createElement("div");
  const { message, className } = getUVIndexAction(rowData);
  actionMessageDiv.textContent = message;
  actionMessageDiv.classList.add(className); // Add the appropriate class based on the UV index level
  uvDataDiv.appendChild(actionMessageDiv);
}

function getUVIndexAction(rowData) {
  const uvIndex = rowData[0]; // UV index value
  const ozone = rowData[4]; // Ozone value

  if (uvIndex >= 0 && uvIndex <= 2) {
    return {
      message: "Можете спокойно да се насладите на това, че сте навън!",
      className: "safe-message",
    };
  } else if (uvIndex >= 3 && uvIndex <= 7) {
    return {
      message:
        "Потърсете сянка през обедните часове! Покрийте кожата, нанесете слънцезащитен крем и сложете шапка!",
      className: "warning-message",
    };
  } else if (uvIndex >= 8) {
    return {
      message:
        "Избягвайте да сте навън в обедните часове! Уверете се, че търсите сянка! Риза, слънцезащитен крем и шапка са задължителни!",
      className: "danger-message",
    };
  } else {
    return {
      message: "UV index value is invalid.",
      className: "invalid-message",
    };
  }
}
