let planes = ["jet", "propeller", "rotor", "commercial"];
let urls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/800px-F-16_June_2008.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17yamJ5CuO08HhF3vvmf_vq20s9u_x65I2qDf4-iVEw&s",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Makin_Island_conducts_flight_operations._%2814991813372%29.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9R39CjIAEgqX9gI5byGJMtFR1a5i2xMrLbIjQd1FCg&s"
];

for (let i = 0; i < planes.length; i++) {
    const button = document.getElementById(planes[i]);
    button.addEventListener('click', function updateImage() {
        let image = document.getElementById("image-id");
      
        image.src = urls[i];
        image.alt = planes[i];
    });
}
