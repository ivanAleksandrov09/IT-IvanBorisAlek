// ↓ Function for switching the images on the first page.

let planes = ["jet", "propeller", "rotor", "commercial"];
let urls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/800px-F-16_June_2008.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hercules.propeller.arp.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Makin_Island_conducts_flight_operations._%2814991813372%29.jpg",
    "https://www.aviationtoday.com/wp-content/uploads/2020/09/zeroe-concept-aircraft-patrol-flight.png"
];

for (let i = 0; i < planes.length; i++) {
    const button = document.getElementById(planes[i]);
    button.addEventListener('click', function updateImage() {
        let image = document.getElementById("image-id");
      
        image.src = urls[i];
        image.alt = planes[i];
    });
}

// ↓ Function for displaying the RPM Calculator; It is initially hidden.

const rotorButton = document.getElementById("rotor");
const rpmCalculator = document.getElementsByClassName("RPM-calculator")[0];

rotorButton.addEventListener("click", function() {
    rpmCalculator.style.display = "block";
});

// ↓ Function for actually running the RPM Calculator.

const rpm_button = document.getElementById("rpm-button");

rpm_button.addEventListener("click", function() {
    const rpm_result = document.getElementById("rpm-result");
    const speed = document.getElementById("speed").value;
    let result;

    result = 60 / speed;

    if (result < 0 || result > 10000) {
        rpm_result.innerHTML = "This is too fast! Try again.";
    } else {
        rpm_result.innerHTML = `Result: ${result.toFixed(1)} RPM.`;
    }
});

// ↓ Function for hiding the RPM Calculator when not in the rotor aircraft page.

const jetButton = document.getElementById("jet");
const propellerButton = document.getElementById("propeller");
const commercialButton = document.getElementById("commercial");

jetButton.addEventListener("click", function() {
    rpmCalculator.style.display = "none";
    document.getElementById("rpm-result").innerHTML = "";
    document.getElementById("speed").value = "";
});

propellerButton.addEventListener("click", function() {
    rpmCalculator.style.display = "none";
    document.getElementById("rpm-result").innerHTML = "";
    document.getElementById("speed").value = "";
});

commercialButton.addEventListener("click", function() {
    rpmCalculator.style.display = "none";
    document.getElementById("rpm-result").innerHTML = "";
    document.getElementById("speed").value = "";
});

// ↓ Start of the program for flight searching.
//Note: I hardcoded the European capitals because the API I was using had paid limitations.

const capitalsEurope = [
    { name: "Sofia", country: "Bulgaria", code: "SOF" },
    { name: "London", country: "UK", code: "LON" },
    { name: "Paris", country: "France", code: "PAR" },
    { name: "Berlin", country: "Germany", code: "BER" },
    { name: "Rome", country: "Italy", code: "ROM" },
    { name: "Madrid", country: "Spain", code: "MAD" },
    { name: "Vienna", country: "Austria", code: "VIE" },
    { name: "Amsterdam", country: "Netherlands", code: "AMS" },
    { name: "Brussels", country: "Belgium", code: "BRU" },
    { name: "Athens", country: "Greece", code: "ATH" },
    { name: "Dublin", country: "Ireland", code: "DUB" },
    { name: "Copenhagen", country: "Denmark", code: "CPH" },
    { name: "Stockholm", country: "Sweden", code: "STO" },
    { name: "Oslo", country: "Norway", code: "OSL" },
    { name: "Helsinki", country: "Finland", code: "HEL" },
    { name: "Lisbon", country: "Portugal", code: "LIS" },
    { name: "Prague", country: "Czech Republic", code: "PRG" },
    { name: "Budapest", country: "Hungary", code: "BUD" },
    { name: "Warsaw", country: "Poland", code: "WAW" },
    { name: "Bratislava", country: "Slovakia", code: "BTS" },
    { name: "Bucharest", country: "Romania", code: "BUH" },
    { name: "Zagreb", country: "Croatia", code: "ZAG" },
    { name: "Sarajevo", country: "Bosnia and Herzegovina", code: "SJJ" },
    { name: "Ljubljana", country: "Slovenia", code: "LJU" },
    { name: "Skopje", country: "North Macedonia", code: "SKP" },
    { name: "Belgrade", country: "Serbia", code: "BEG" },
    { name: "Podgorica", country: "Montenegro", code: "TGD" },
    { name: "Tirana", country: "Albania", code: "TIA" },
    { name: "Chisinau", country: "Moldova", code: "KIV" },
    { name: "Tallinn", country: "Estonia", code: "TLL" },
    { name: "Riga", country: "Latvia", code: "RIX" },
    { name: "Vilnius", country: "Lithuania", code: "VNO" },
    { name: "Valletta", country: "Malta", code: "MLA" },
    { name: "Nicosia", country: "Cyprus", code: "NIC" },
    { name: "Luxembourg", country: "Luxembourg", code: "LUX" },
    { name: "Andorra la Vella", country: "Andorra", code: "ALV" }
];

// ↓ I added the placeholder using .unshift, because just including it in the array wouldn't work.
capitalsEurope.unshift({ name: "Choose a capital", country: "", code: "" });

const originDropdown = document.getElementById('originCity');
const destinationDropdown = document.getElementById('destinationCity');



capitalsEurope.forEach(function(capital) {
    const optionOrigin = document.createElement('option');

    //The capital code is the only way i can fetch the flight data.
    optionOrigin.value = capital.code;
    if (capital.name !== "Choose a capital") {
        optionOrigin.textContent = `${capital.name}, ${capital.country} (${capital.code})`;
    }
    //I use appendChild to add the city data in the bottom of the dropdown.
    originDropdown.appendChild(optionOrigin);

    // ↓ Same thing now, but for the destination dropdown. 
    const optionDestination = document.createElement('option');

    optionDestination.value = capital.code;
    if (capital.name !== "Choose a capital") {
        optionDestination.textContent = `${capital.name}, ${capital.country} (${capital.code})`;
    }
    destinationDropdown.appendChild(optionDestination);
});

// ↓ I tried having the placeholder to be "Choose a capital", but it ended up being an empty space so i just left it like that.
originDropdown.value = "Choose a capital";
destinationDropdown.value = "Choose a capital";


// ↓ This event listener awaits a origin city dropdown change.
originDropdown.addEventListener('change', function() {
    // ↓ this.value refers to the the newly selected capital.
    const selectedCode = this.value;
    const inputElement = document.getElementById('originCity');
    inputElement.value = selectedCode;
});

// ↓ This event listener awaits a destination city dropdown change.
destinationDropdown.addEventListener('change', function() {
    const selectedCode = this.value;
    const inputElement = document.getElementById('destinationCity');
    inputElement.value = selectedCode;
});



// ↓ Most complex function, took around 20 hours. This function will be called when the flight data is fetched from the API and it will fill up a table with the data.

let priceDetails, totalFareBGN, totalFareUSD;

function populateTable(data, exchangeRateUsdToBgn) {

    const originCitySelect = document.getElementById("originCity");
    const destinationCitySelect = document.getElementById("destinationCity");
    const originCityOption = originCitySelect.options[originCitySelect.selectedIndex];
    const destinationCityOption = destinationCitySelect.options[destinationCitySelect.selectedIndex];
    // ↓ The comma indicates in what way the option will be split, ex. if there is 2 names seperated by a comma it will split the two names and remove the comma.
    const originCityName = originCityOption.text.split(',')[0];
    const destinationCityName = destinationCityOption.text.split(',')[0];


    document.getElementById('infoTable').style.display = 'table';
    const table = document.getElementById('flightTable');


    //The returned data's structure for reference:
    //getAirFlightDepartures > results > result > airline_data, aiport_data, branding_data, itinerary_count and itinerary_data.

    const itineraryData = data.getAirFlightDepartures.results.result.itinerary_data;
    //itineraryData's type is an object, not an array, so i need to access it with Object.values, which stores all the data in itineraryData in an array type.
    const itineraryValues = Object.values(itineraryData);

    //Complicated sorting: "a" and "b" represent 2 itineraries (flights).
    const sortedItineraries = itineraryValues.sort(function(a, b) {
        //a.slice_data.slice_0.flight_data refers to how much flights there are in a certain itinerary.
        //I want the flight sorting to be like this: From the cheapest direct flights to the most expensive and then the cheapest flight with one transfer.
        //The 2 bottom lines get the amount of flights in an itinerary. The JSON for that is like this:
        //slice_data > slice_0 > flight_data > here it would be only flight_0 if this is a direct flight, but for ex. if it is a one tranfer flight it would be flight_0 and flight_1.
        const flightsCountA = Object.keys(a.slice_data.slice_0.flight_data).length;
        const flightsCountB = Object.keys(b.slice_data.slice_0.flight_data).length;
        // ↓ This line returns the amount of flights in itinerary A minus amount of flights in itinerary B. 
        // ↓ If this returns negative, A is sorted before B. if it is positive, B is sorted before A. 
        return flightsCountA - flightsCountB;
    });
    
    const maxFlights = sortedItineraries.length;

    // ↓ This is the function for adding a row to the table and filling it with data.
    //It needs a lot of parameters for filling the table correctly.

    function insertFlightRow(itinerary, departure, arrival, departureTime, arrivalTime, originCityName, destinationCityName, exchangeRateUsdToBgn, table, flightType) {
        priceDetails = itinerary.price_details;
        const airline = itinerary.slice_data.slice_0.airline.name;
        //The API usually returns the data for the 4 rows below this, but sometimes it doesn't return it correctly (For example, Berlin).
        //The definition after the logical "or" statements make sure the 4 cells aren't empty and fill them with the user-inputted data. 
        const departureCity = departure.airport.city || originCityName;
        //The added string for "airport" helps fill the airport cells with the user-inputted city name and the word "airport" after them.
        const departureAirport = departure.airport.name || `${originCityName} airport`;
        const arrivalCity = arrival.airport.city || destinationCityName;
        const arrivalAirport = arrival.airport.name || `${destinationCityName} airport`;
    
        // ↓ These are the definitions which will be used for live currency calculations in fetchFlightData using an API. This is needed because the API returns flight prices in USD.
        totalFareUSD = priceDetails.display_total_fare;
        totalFareBGN = totalFareUSD * exchangeRateUsdToBgn;
    
        // ↓ This just uses all the variables provided to fill the row with the info.
        const row = table.insertRow();
        row.insertCell(0).textContent = departureCity;
        row.insertCell(1).textContent = departureAirport;
        row.insertCell(2).textContent = arrivalCity;
        row.insertCell(3).textContent = arrivalAirport;
        //flightType refers to the amount of flights (If it is direct or a 1 transfer flight).
        // ↓ This if is just so it doesn't display the price twice on 1 transfer flights. It's just not necessary..
        if (flightType === "Final destination") {
            row.insertCell(4).textContent = "";
        } else {
            //.toFixed makes sure the price isnt something like BGN 134.8374574 and limits it a while number.
            row.insertCell(4).textContent = `${totalFareBGN.toFixed(0)} BGN`;
        }
        row.insertCell(5).textContent = departureTime;
        row.insertCell(6).textContent = arrivalTime;
        row.insertCell(7).textContent = flightType;
        // ↓ The API sometimes returns outdated info so I make sure that doesn't happen.
        if (airline != "JAT Airways" && airline != "Alitalia") {
            row.insertCell(8).textContent = airline;
        } else if (airline == "JAT Airways") {
            row.insertCell(8).textContent = "Air Serbia";
        } else if (airline == "Alitalia") {
            row.insertCell(8).textContent = "Italian Airways";
        }
    }

    //I want to have space between the 1 transfer flights so it doesn't look so overfilled.
    function insertEmptyRow() {
        const row = table.insertRow();
        // ↓ Access the css so the empty rows are bigger.
        row.style.height = '25px';
        for (let i = 0; i < 8; i++) {
            row.insertCell(i).textContent = "";    
        }
        
        //All the cells in a row are all the <td> elements.
        let cells = row.getElementsByTagName('td');
        // ↓ This for loop cycles between all the cells and removes their borders, aswell as removing their hover color properties.
        for (let j = 0, cell; cell = cells[j]; j++) {
            cell.style.borderTop = '1px solid rgb(173, 162, 218)';
            cell.style.borderRight = '1px solid rgb(173, 162, 218)';
            cell.style.borderLeft = '1px solid rgb(173, 162, 218)';
            row.addEventListener('mouseover',function(){
                cell.style.display="block";
            })
            row.addEventListener('mouseleave',function(){
                cell.style.display="none";
            })
        }
    }
    
    let fiveFlightsLimit = 0;

    // ↓ This for loop is basically for defining all the data which will go in the table.
    for (let i = 0; i < maxFlights; i++) {
        const itinerary = sortedItineraries[i];

        //I use ↓ this to find out if the current itinerary is a direct flight.
        const flightsCount = Object.keys(itinerary.slice_data.slice_0.flight_data).length;

        let departure, arrival, departureTime, arrivalTime, departure1, arrival1, departureTime1, arrivalTime1, departure2, arrival2, departureTime2, arrivalTime2;
        
        priceDetails = itinerary.price_details;
        totalFareUSD = priceDetails.display_total_fare;
        totalFareBGN = totalFareUSD * exchangeRateUsdToBgn;
        // ↓ This is what happens when the itinerary is a direct flight. It also checks if the price of the tickets is lower than 500 BGN.
        if (flightsCount === 1 && totalFareBGN.toFixed(0) < 500) {

            if (i != 0) {
            //Add an empty row below the header row
            } else {
                insertEmptyRow();
            }

            departure = itinerary.slice_data.slice_0.flight_data.flight_0.departure;
            arrival = itinerary.slice_data.slice_0.flight_data.flight_0.arrival;
            // ↓ Here i've formatted the dates to my liking. (ex. March 3, 2024, 08:30 PM)
            departureTime = new Date(departure.datetime.date_time).toLocaleTimeString([], {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
            arrivalTime = new Date(arrival.datetime.date_time).toLocaleTimeString([], {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
            // ↓ Insert a row with the data, also add "Direct flight" as the flight type as a parameter.
            insertFlightRow(itinerary, departure, arrival, departureTime, arrivalTime, originCityName, destinationCityName, exchangeRateUsdToBgn, table, "Direct flight");

    } else if (flightsCount === 2) {

        //I only want a one-transfer flight to be displayed 5 times, so I make sure i keep track of that.
        if (fiveFlightsLimit == 5) {
            break;
        }

        insertEmptyRow();

        departure1 = itinerary.slice_data.slice_0.flight_data.flight_0.departure;
        arrival1 = itinerary.slice_data.slice_0.flight_data.flight_0.arrival;
        departureTime1 = new Date(departure1.datetime.date_time).toLocaleTimeString([], {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
        arrivalTime1 = new Date(arrival1.datetime.date_time).toLocaleTimeString([], {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
        insertFlightRow(itinerary, departure1, arrival1, departureTime1, arrivalTime1, originCityName, destinationCityName, exchangeRateUsdToBgn, table, "Middle point");

        departure2 = itinerary.slice_data.slice_0.flight_data.flight_1.departure;
        arrival2 = itinerary.slice_data.slice_0.flight_data.flight_1.arrival;
        departureTime2 = new Date(departure2.datetime.date_time).toLocaleTimeString([], {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
        arrivalTime2 = new Date(arrival2.datetime.date_time).toLocaleTimeString([], {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
        insertFlightRow(itinerary, departure2, arrival2, departureTime2, arrivalTime2, originCityName, destinationCityName, exchangeRateUsdToBgn, table, "Final destination");


        fiveFlightsLimit++;
      }
    } 
  }



//Now ↓ this function fetchFlightData is for actually fetching the data from the API, storing it and using the populateTable function to output the data to the user.



// ↓ Async functions are required for using await. Await was used in the API Documentation so I just went with that.
async function fetchFlightData() {
    try {
        // ↓ This is where I call the exchange rates API and grab the USD to BGN rate, using it in the insertFLightRow function and outputting the price in BGN for the user.
        const exchangeRateResponse = await fetch('https://v6.exchangerate-api.com/v6/1d4221e8f61cee37d8d9ebdf/latest/USD');
        const exchangeRateData = await exchangeRateResponse.json();
        //The API returns all exchange rates in an array "conversion_rates" so I just grab only the BGN rate.
        const exchangeRateUsdToBgn = exchangeRateData.conversion_rates["BGN"];

        const originCity = document.getElementById("originCity").value;
        const destinationCity = document.getElementById("destinationCity").value;
        const flightDate = document.getElementById("flightDate").value;

        // ↓ This is the flight data API request. These parameters in the url are just from the documentation.
        const url = `https://priceline-com-provider.p.rapidapi.com/v2/flight/departures?departure_date=${flightDate}&adults=1&sid=iSiX639&cabin_class=economy&origin_city_id=${originCity}&destination_city_id=${destinationCity}`;

        const options = {
            method: 'GET',
            headers: {
                // ↓ Right here I know i probably shouldn't include my API in a public repository, but I dont want to bother someone trying it by making them register for a key.
                //Same thing for the exchange rates API :)
                'X-RapidAPI-Key': '56156a12acmshccef2471ad9e896p19640cjsn005136fe5569',
                'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
            }
        };

        // ↓ Copied directly from the documentation.
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            populateTable(result, exchangeRateUsdToBgn);
            console.log(result);
        } catch (error) {
            console.error(error);
        } // ↓ Right here for some reason there was an error without a second catch.
        } catch (error) {
            console.error(error);
        }}


// ↓ This is where everything is activated accordingly.

const FlightElements = document.getElementById("FlightProgram");

// ↓ For hiding and showing the interface.
function hideFlightElements() {
    FlightElements.style.display = "none";
}

jetButton.addEventListener("click", hideFlightElements);
propellerButton.addEventListener("click", hideFlightElements);
rotorButton.addEventListener("click", hideFlightElements);


commercialButton.addEventListener("click", () => {
    FlightElements.style.display = "block";
});

// ↓ This is just for clearing the table when clicking the button more than once. Without this, it keeps stacking info over itself.

function clearTable() {
    const table = document.getElementById('flightTable');
    // ↓ Deleting the first row makes the second row become first and so on.
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

let searchButtonClicked = false;

document.getElementById("searchButton").addEventListener("click", function() {
    if (searchButtonClicked == true) {
        clearTable();
        fetchFlightData();
        searchButtonClicked = false;
    } else {
        fetchFlightData();
        searchButtonClicked = true;
    }
});