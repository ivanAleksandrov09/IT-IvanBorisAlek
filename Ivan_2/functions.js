
const pressure_button = document.getElementById("pressure-button");


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