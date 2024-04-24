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



//show the rpm calculator
const rotor = document.getElementById("rotor");
const rpmCalculator = document.getElementsByClassName("RPM-calculator")[0];

rotor.addEventListener("click", () => {
    rpmCalculator.style.display = "block";
});




//actually run the rpm calculator
const rpm_button = document.getElementById("rpm-button");


rpm_button.addEventListener("click", () => {
    const rpm_result = document.getElementById("rpm-result");
    
    let speed = document.getElementById("speed").value;
    let result;

    result = 60 / speed;

    rpm_result.innerHTML = `Result: ${result.toFixed(1)} RPM.`;
});




//hide the rpm calculator
const jetButton = document.getElementById("jet");
const propellerButton = document.getElementById("propeller");
const commercialButton = document.getElementById("commercial");

jetButton.addEventListener("click", () => {
    rpmCalculator.style.display = "none";
});

propellerButton.addEventListener("click", () => {
    rpmCalculator.style.display = "none";
});

commercialButton.addEventListener("click", () => {
    rpmCalculator.style.display = "none";
});
