
const pressure_button = document.getElementById("pressure-button");
const time_button = document.getElementById("time-button");


pressure_button.addEventListener("click", () => {
    const pressure_result = document.getElementById("pressure-result");
    
    let depth = document.getElementById("depth").value;
    let unit = document.getElementById("pressure-unit").value;
    let result;

    if (unit === "Pa") {
        result = 997 * depth * 9.8;
    } else {
        result = (depth / 10) + 1;
    }
    pressure_result.innerHTML = `Result: ${result.toFixed(1)} ${unit}.`;
});

time_button.addEventListener("click", () => {
    const time_result = document.getElementById("time-result");
    
    let unit = document.getElementById("time-unit").value;
    let depth = document.getElementById("time-depth").value;
    let speed = document.getElementById("time-speed").value;
    let result = (depth * 0.001) / speed;
    
    if (unit === "minutes") {
        result *= 60;   
    } else if (unit === "seconds") {
        result *= 3600;
    }


    if (result === 1) {
        unit = unit.slice(0, -1); // Removes the 's' from the unit
    }
    if (result % 1 !== 0) {
        time_result.innerHTML = `Result: ${result.toFixed(2)} ${unit}.`;
    } else {
        time_result.innerHTML = `Result: ${result} ${unit}.`;
    }
    
    
});