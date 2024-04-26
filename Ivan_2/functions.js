
const pressure_button = document.getElementById("pressure-button");
const time_button = document.getElementById("time-button");
const water_button = document.getElementById("water-button");


function display_result(result_element_id, result, unit) {
    const result_element = document.getElementById(result_element_id);
    if (result == 1 && unit[unit.length - 1] == "s") {
        unit = unit.slice(0, -1); // Removes the 's' from the unit
    }
    if (result % 1 != 0) {
        result_element.innerHTML = `Result: ${result.toFixed(2)} ${unit}.`;
    } else {
        result_element.innerHTML = `Result: ${result} ${unit}.`;
    }
}

pressure_button.addEventListener("click", () => {
    let depth = document.getElementById("depth").value;
    let unit = document.getElementById("pressure-unit").value;
    let result;

    if (unit === "Pa") {
        result = 997 * depth * 9.8;
    } else {
        result = (depth / 10) + 1;
    }
    display_result("pressure-result", result, unit);
});

time_button.addEventListener("click", () => {
    let unit = document.getElementById("time-unit").value;
    let depth = document.getElementById("time-depth").value;
    let speed = document.getElementById("time-speed").value;
    let result = (depth * 0.001) / speed;
    
    if (unit === "minutes") {
        result *= 60;   
    } else if (unit === "seconds") {
        result *= 3600;
    }

    display_result("time-result", result, unit);
});

water_button.addEventListener("click", () => {
    let unit = document.getElementById("water-unit").value;
    let time = document.getElementById("water-time").value;

    let result = (1482 * time) / 2; // 1482 - approximate preditermined value for the speed of sound in water

    if (unit === "kilometers") {
        result /= 1000;
    }

    display_result("water-result", result, unit);
});