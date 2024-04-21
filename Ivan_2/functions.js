
const pressure_button = document.getElementById("pressure-button");
const pressure_input = document.getElementById("depth");
const pressure_result = document.getElementById("pressure-result");

pressure_button.addEventListener("click", () => {
    let depth = pressure_input.value;
    let unit = document.getElementById("pressure-unit").value;
    let result;

    if (unit === "Pa") {
        result = 997 * depth * 9.8;
    } else {
        result = (depth / 10) + 1;
    }
    pressure_result.innerHTML = `Result: ${result.toFixed(1)} ${unit}.`;
});