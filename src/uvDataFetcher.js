export async function fetchUVData(cityName) {
  // Convert city name to latitude and longitude using geocoding
  const geocodingUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    cityName
  )}`;

  try {
    const geocodingResponse = await fetch(geocodingUrl);
    const geocodingData = await geocodingResponse.json();

    // Wait for the geocoding response and check if the array is empty
    if (geocodingData.length === 0) {
      throw new Error("City not found");
    }

    const latitude = geocodingData[0].lat;
    const longitude = geocodingData[0].lon;

    // Now, use the latitude and longitude to fetch UV data
    const uvData = await fetchUVDataByCoordinates(latitude, longitude);
    return uvData;
  } catch (error) {
    console.error("Error fetching UV data:", error);
    throw error;
  }
}

async function fetchUVDataByCoordinates(latitude, longitude) {
  const myHeaders = new Headers();
  myHeaders.append("x-access-token", "openuv-1atfrlu8sxl2i-io");
  myHeaders.append("Content-Type", "application/json");
  const currentDate = new Date().toISOString().split("T")[0];
  const apiUrl = `https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}&alt=100&dt=`;

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching UV data:", error);
    throw error;
  }
}
