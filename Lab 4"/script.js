var map;

// Function to initialize the Leaflet map
function initMap(lat, lon) {
    map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lon]).addTo(map)
        .bindPopup('Your Location')
        .openPopup();
}

// Function to get the user's location and update the HTML elements
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            document.getElementById('latitude').textContent = latitude;
            document.getElementById('longitude').textContent = longitude;

            initMap(latitude, longitude); // Initialize the map
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

getLocation(); // Call the function to get the location
