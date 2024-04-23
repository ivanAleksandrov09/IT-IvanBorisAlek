let fighterJets = [
   {name: "F-16 Fighting Falcon", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1200px-F-16_June_2008.jpg"},
   {name: "F-22 Raptor", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Lockheed_Martin_F-22A_Raptor_JSOH.jpg/1024px-Lockheed_Martin_F-22A_Raptor_JSOH.jpg"},
   {name: "F-35 Lightning II", imageUrl: "https://www.lockheedmartin.com/content/dam/lockheed-martin/general/template/images/ryan169.jpg"},
   {name: "Su-27 Flanker", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sukhoi_Su-27SKM_at_MAKS-2005_airshow.jpg/1200px-Sukhoi_Su-27SKM_at_MAKS-2005_airshow.jpg"},
   {name: "MiG-29 Fulcrum", imageUrl: "https://nationalinterest.org/sites/default/files/main_images/Aviamix2015-03_%28cropped%29%20%283%29%20%281%29.jpg"},
];

function showRandomFighterJet() {
    let randomIndex = Math.floor(Math.random() * fighterJets.length);
    let randomJet = fighterJets[randomIndex];
    document.getElementById("fighterJetName").textContent = randomJet.name;
    document.getElementById("fighterJetImage").src = randomJet.imageUrl;
}

document.getElementById("randomButton").addEventListener("click", showRandomFighterJet);
