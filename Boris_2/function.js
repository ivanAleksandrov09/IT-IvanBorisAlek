// Initialize the map to focus on Bulgaria
const map = L.map('map').setView([42.733883, 25.48583], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let currentRoute = null;
let currentMarkers = [];

async function getFuelPrice(currency) {
    const tomtomAPIKey = 'peTmwiME7kFDGBDf1Sdp2e5ABv2Z3QIf'; 
    const response = await axios.get(`https://api.tomtom.com/search/2/categorySearch/fuel_station.json?key=${tomtomAPIKey}&lat=42.733883&lon=25.48583&radius=5000`);
    
    let price = 1.2; 
    if (response.data.results && response.data.results.length > 0) {
        price = response.data.results[0].poi.fuelPrices[0].price;
    }

    //Intended to be made with a real API but for the purpose of the task it is hardcoded
    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        BGN: 1.80,
        JPY: 110.0,
        CNY: 6.5,
        RUB: 75.0
    };

    return price * conversionRates[currency];
}

async function getTollTaxes(country) {
    const tolls = {
        USA: 5,
        UK: 3,
        DE: 4 
    };
    return tolls[country] || 0;
}

function addWaypointsForRest(route, duration, maxHoursPerDay = 24) {
    const waypoints = [];
    let totalHours = duration / 60;
    let stops = Math.floor(totalHours / maxHoursPerDay);
    const segmentLength = Math.floor(route.length / (stops + 1));

    for (let i = 1; i <= stops; i++) {
        waypoints.push(route[i * segmentLength]);
    }
    return waypoints;
}

function toggleFuelConsumption() {
    const mode = document.getElementById('mode').value;
    const fuelConsumptionContainer = document.getElementById('fuelConsumptionContainer');
    if (mode === 'driving-car') {
        fuelConsumptionContainer.style.display = 'block';
        document.getElementById('fuelConsumption').setAttribute('required', true);
    } else {
        fuelConsumptionContainer.style.display = 'none';
        document.getElementById('fuelConsumption').removeAttribute('required');
    }
}

async function calculateRoute() {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const mode = document.getElementById('mode').value;
    const fuelConsumption = mode === 'driving-car' ? parseFloat(document.getElementById('fuelConsumption').value) : 0;
    const fuelConsumptionPerKm = fuelConsumption / 100; 
    const currency = document.getElementById('currency').value;

    const geocodeURL = 'https://nominatim.openstreetmap.org/search?format=json&q=';
    const hostelCostPerNight = 50; // Example value, $50 per night. Should be fetched by an API.

    try {
        const startLocation = await axios.get(`${geocodeURL}${start}`);
        const endLocation = await axios.get(`${geocodeURL}${end}`);
        
        const startCoords = [startLocation.data[0].lat, startLocation.data[0].lon];
        const endCoords = [endLocation.data[0].lat, endLocation.data[0].lon];

        const routeURL = `https://api.openrouteservice.org/v2/directions/${mode}?api_key=5b3ce3597851110001cf6248c6281aa44d374b7bb884b1c75aec9ea9&start=${startCoords[1]},${startCoords[0]}&end=${endCoords[1]},${endCoords[0]}`;

        const response = await axios.get(routeURL);
        const coordinates = response.data.features[0].geometry.coordinates;

        const route = coordinates.map(coord => [coord[1], coord[0]]);

        
        if (currentRoute) {
            map.removeLayer(currentRoute);
        }
        currentMarkers.forEach(marker => map.removeLayer(marker));
        currentMarkers = [];

        
        currentRoute = L.polyline(route, { color: 'blue' }).addTo(map);
        map.fitBounds(route);

        const distance = response.data.features[0].properties.segments[0].distance / 1000;
        const duration = response.data.features[0].properties.segments[0].duration / 60; 

        const fuelPrice = await getFuelPrice(currency);

        const countries = ['USA']; // Example array, should be determined from the route
        let tollTaxes = 0;
        for (const country of countries) {
            tollTaxes += await getTollTaxes(country);
        }

        let cost = tollTaxes;
        if (mode === 'driving-car') {
            cost += (distance * fuelConsumptionPerKm) * fuelPrice;
        }

        let hours = Math.floor(duration / 60);
        let minutes = Math.round(duration % 60);

        if (hours > 24) {
            const nights = Math.ceil(hours / 24);
            cost += nights * hostelCostPerNight;

            const waypoints = addWaypointsForRest(route, duration);
            waypoints.forEach((point, index) => {
                const marker = L.marker(point, { icon: Icon }).addTo(map).bindPopup(`Rest Stop ${index + 1}`);
                currentMarkers.push(marker);
            });
        }

        const startMarker = L.marker(startCoords, { icon: Icon }).addTo(map).bindPopup("Start Point");
        const endMarker = L.marker(endCoords, { icon: Icon }).addTo(map).bindPopup("End Point");
        currentMarkers.push(startMarker, endMarker);

        document.getElementById('result').innerHTML = `
            <div class="result-box">
                <p><strong>Distance:</strong> ${distance.toFixed(2)} km</p>
                <p><strong>Duration:</strong> ${hours} hours and ${minutes} minutes</p>
                <p><strong>Estimated Cost:</strong> ${cost.toFixed(2)} ${currency}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching route data', error);
    }
}

const Icon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png', 
    iconSize: [21, 34],
    iconAnchor: [10, 34],
    popupAnchor: [0, -34]
});
