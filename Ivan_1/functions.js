

let boats = ["rowboat", "sailboat", "motorboat", "canoe", "yacht"];
let urls = [
    "https://www.whitehallrow.com/wp-content/uploads/2021/06/classic-whitehall-spirit-14-traditional-rowboat-with-fixed-seats-menu.jpg",
    "https://assets-global.website-files.com/5ce44e4e8d1c1fc85b84c18d/630df6c4753999b44f9867b0_are-small-sailboats-or-big-sailboats-faster%253F.jpeg",
    "https://yuxianhua.com/jpg/powerboat-1.jpg",
    "https://bendingbranches.com/cdn/shop/articles/BB_Solo_five2nine_ca_99cbe5b8-3bb4-4427-9911-059de0605a13.jpg?v=1632501395",
    "https://www.fraseryachts.com/uploads/image/SILVER_EDGE.jpg",
];

for (let i = 0; i < boats.length; i++) {
    const button = document.getElementById(boats[i]);
    button.addEventListener('click', function updateImage() {
        let image = document.getElementById("image-id");
      
        image.src = urls[i];
        image.alt = boats[i];
    });
}

const trip_button = document.getElementById("trip-button");
trip_button.addEventListener('click', () => {
    const result_output = document.getElementById("trip-result");

    let distance = document.getElementById("trip-distance").value;
    let speed = document.getElementById("trip-speed").value;

    let hours = (distance / speed).toFixed(2);
    let days = Math.floor(hours / 24);

    result_output.innerHTML += hours + " hours!";
    if (hours > 24) {

        result_output.innerHTML += `\nThat's over ${days} ${days > 1 ? "days!" : "day!"}`;
    }
});

const fuel_button = document.getElementById("fuel-button");
fuel_button.addEventListener('click', () => {
    const result_output = document.getElementById("fuel-result");

    let consumption = document.getElementById("fuel-consumption").value;
    let distance = document.getElementById("fuel-distance").value;

    let fuel = consumption * distance * 0.01;

    result_output.innerHTML += fuel + " liters!";
});