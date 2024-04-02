export function displayUVData(data) {
  const uvDataDiv = document.getElementById("uvData");
  uvDataDiv.innerHTML = ""; // Clear previous data
  console.log("from uv display:", data);

  // Create a list to hold the data
  const dataList = document.createElement("ul");

  // Define headers and data
  const headers = [
    "UV Индекс",
    "UV Индекс Час UTC",
    "Макс UV Index за деня",
    "Макс UV Index Време UTC",
    "Ниво на Озона",
    "Час на Озонов Тест UTC",
  ];
  const rowData = [
    data.result.uv,
    data.result.uv_time,
    data.result.uv_max,
    data.result.uv_max_time,
    data.result.ozone,
    data.result.ozone_time,
  ];

  // Iterate through headers and data to create list items
  headers.forEach((header, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${header}: ${rowData[index]}`;
    // Add a class to the headers
    if (index % 2 === 0) {
      listItem.classList.add("header-item");
    }
    dataList.appendChild(listItem);
  });

  // Append the list to the UV data div
  uvDataDiv.appendChild(dataList);

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
