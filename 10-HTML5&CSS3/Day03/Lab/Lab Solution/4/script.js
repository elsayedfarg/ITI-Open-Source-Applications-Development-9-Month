let currentLocation = null;

function getLocation(callback) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = "";

  if (!navigator.geolocation) {
    errorDiv.textContent = "Geolocation is not supported by your browser";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      currentLocation = pos;
      callback(); // if done execute the passed function
    },
    (err) => {
      const messages = {
        1: "Permission denied. Please allow location access.",
        2: "Position unavailable.",
        3: "Request timeout.",
      };
      errorDiv.textContent =
        "Unable to retrieve location: " +
        (messages[err.code] || "Unknown error");
    }
  );
}

function showMap() {
  getLocation(() => {
    const mapDiv = document.getElementById("map");
    document.getElementById("details").style.display = "none";
    mapDiv.style.display = "block";

    const { latitude: lat, longitude: lon } = currentLocation.coords;
    mapDiv.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        src="https://www.openstreetmap.org/export/embed.html?bbox=${
          lon - 0.01
        }%2C${lat - 0.01}%2C${lon + 0.01}%2C${
      lat + 0.01
    }&layer=mapnik&marker=${lat}%2C${lon}" 
        style="border:none;border-radius:5px;">
      </iframe>
    `;
  });
}

function showDetails() {
  getLocation(() => {
    const detailsDiv = document.getElementById("details");
    document.getElementById("map").style.display = "none";
    detailsDiv.style.display = "block";

    const { latitude, longitude, accuracy, altitude, altitudeAccuracy } =
      currentLocation.coords;
    const timestamp = new Date(currentLocation.timestamp);

    detailsDiv.innerHTML = `
      <h2>Location Details</h2>
      <div>Latitude: ${latitude.toFixed(6)}°</div>
      <div>Longitude: ${longitude.toFixed(6)}°</div>
      <div>Accuracy: ${accuracy.toFixed(2)} meters</div>
      <div>Timestamp: ${timestamp.toLocaleString()}</div>
      ${
        altitude !== null
          ? `<div>Altitude: ${altitude.toFixed(2)} meters</div>`
          : ""
      }
      ${
        altitudeAccuracy !== null
          ? `<div>Altitude Accuracy: ${altitudeAccuracy.toFixed(
              2
            )} meters</div>`
          : ""
      }
    `;
  });
}
