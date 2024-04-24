let fighterJets = [
    {name: "F-16 Fighting Falcon", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1200px-F-16_June_2008.jpg", wikiUrl: "https://en.wikipedia.org/wiki/F-16_Fighting_Falcon" },
    {name: "F-22 Raptor", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Lockheed_Martin_F-22A_Raptor_JSOH.jpg/1024px-Lockheed_Martin_F-22A_Raptor_JSOH.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Lockheed_Martin_F-22_Raptor" },
    {name: "F-35 Lightning II", imageUrl: "https://www.lockheedmartin.com/content/dam/lockheed-martin/general/template/images/ryan169.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II" },
    {name: "Su-27 Flanker", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sukhoi_Su-27SKM_at_MAKS-2005_airshow.jpg/1200px-Sukhoi_Su-27SKM_at_MAKS-2005_airshow.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Sukhoi_Su-27" },
    {name: "MiG-29 Fulcrum", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Russian_Air_Force%2C_747%2C_Mikoyan-Gurevich_MiG-29M2.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Mikoyan_MiG-29" },
];

function showRandomFighterJet() {
    let randomIndex = Math.floor(Math.random() * fighterJets.length);
    let randomJet = fighterJets[randomIndex];
    document.getElementById("fighterJetName").textContent = randomJet.name;
    document.getElementById("fighterJetImage").src = randomJet.imageUrl;
    document.getElementById("fighterJetLink").href = randomJet.wikiUrl;
    document.getElementById("RandomJet").style.display = "block";

    //function for scroll to jet image from stackoverflow
    let buttonPosition = document.getElementById("JetButton").getBoundingClientRect().bottom;
    window.scrollTo({ top: buttonPosition, behavior: "smooth" });
}

document.getElementById("randomButton").addEventListener("click", showRandomFighterJet);
