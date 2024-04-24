// Ivan`s js function to switch pictures

let bikes = ["roadbike", "mountainbike", "hybridbike", "citybike"];
let urls = [
    "https://dqh479dn9vg99.cloudfront.net/wp-content/uploads/sites/9/2018/02/canyon_ultimate_cf_slx_8_review.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Orbea_Occam_2020.jpg",
    "https://license.citruslime.com/cs/blogs/electricbikesales/Riese-and-Muller-Hybrid-e-bike_1FAB3082.png",
    "https://hips.hearstapps.com/hmg-prod/images/20210501-citibike-ebike-terrace-0596-1652111478.jpeg?resize=1200:*",
];

for (let i = 0; i < bikes.length; i++) {
    const button = document.getElementById(bikes[i]);
    button.addEventListener('click', function updateImage() {
        let image = document.getElementById("image-id");
      
        image.src = urls[i];
        image.alt = bikes[i];
    });
}

// Boris`s js function for the dropdown topnav
function dropMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

for (let i = 0; i < bikes.length; i++) {
    const button = document.getElementById(bikes[i]);
    button.addEventListener('click', function updateImage() {
        let image = document.getElementById("image-id");
      
        image.src = urls[i];
        image.alt = bikes[i];
    });
}

function calculateCaloriesBurned() {
    let weight = parseFloat(document.getElementById("calories-weight").value);
    let time = parseFloat(document.getElementById("calories-time").value);
    let intensity = document.getElementById("calories-intensity").value;
    
    let MET;
    switch (intensity) {
        case "low":
            MET = 4; 
            break;
        case "moderate":
            MET = 6; 
            break;
        case "high":
            MET = 8; 
            break;
        default:
            MET = customMET || 6;
    }
    document.getElementById("calories-result").innerHTML = "Result: " + ((MET * weight * time) / 60);
}
