let fighterJets = [
    {name: "F-16 Fighting Falcon", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1200px-F-16_June_2008.jpg", wikiUrl: "https://en.wikipedia.org/wiki/F-16_Fighting_Falcon" },
    {name: "F-22 Raptor", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Lockheed_Martin_F-22A_Raptor_JSOH.jpg/1024px-Lockheed_Martin_F-22A_Raptor_JSOH.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Lockheed_Martin_F-22_Raptor" },
    {name: "F-35 Lightning II", imageUrl: "https://www.lockheedmartin.com/content/dam/lockheed-martin/general/template/images/ryan169.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II" },
    {name: "Su-27 Flanker", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sukhoi_Su-27SKM_at_MAKS-2005_airshow.jpg/1200px-Sukhoi_Su-27SKM_at_MAKS-2005_airshow.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Sukhoi_Su-27" },
    {name: "MiG-29 Fulcrum", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Russian_Air_Force%2C_747%2C_Mikoyan-Gurevich_MiG-29M2.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Mikoyan_MiG-29" },
    {name: "F/A-18 Hornet", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/FA-18C_desert_refueling.jpg", wikiUrl: "https://en.wikipedia.org/wiki/McDonnell_Douglas_F/A-18_Hornet" },
    {name: "Eurofighter Typhoon", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg/1200px-RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Eurofighter_Typhoon" },
    {name: "Dassault Rafale", imageUrl: "https://images.dassault-aviation.com/f_auto,q_auto,g_center,dpr_auto/wp-auto-upload/2/files/2024/01/DA00055139S.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Dassault_Rafale" },
    {name: "JAS 39 Gripen", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Saab_JAS_39_Gripen_at_Kaivopuisto_Air_Show%2C_June_2017_%28altered%29_copy.jpg/1200px-Saab_JAS_39_Gripen_at_Kaivopuisto_Air_Show%2C_June_2017_%28altered%29_copy.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Saab_JAS_39_Gripen"},
    {name: "Chengdu J-20", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/J-20_at_Airshow_China_2016.jpg/1200px-J-20_at_Airshow_China_2016.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Chengdu_J-20"},
    {name: "Saab 35 Draken", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/J_35F_1972_%28cropped%2C_removal_of_damage_and_dirt_using_clone_tool%29.jpg/1200px-J_35F_1972_%28cropped%2C_removal_of_damage_and_dirt_using_clone_tool%29.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Saab_35_Draken"},
    {name: "Mitsubishi F-2", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/20170810034434%21Mitsubishi_F-2_in_flight_23_%28cropped%29.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Mitsubishi_F-2"},
    {name: "Dassault Mirage 2000", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mirage_2000C_in-flight_2_%28cropped%29.jpg/1200px-Mirage_2000C_in-flight_2_%28cropped%29.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Dassault_Mirage_2000"},
    {name: "Shenyang J-11", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Chinese_Su-27.JPG" , wikiUrl: "https://en.wikipedia.org/wiki/Shenyang_J-11"},
    {name: "Sukhoi Su-35", imageUrl: "https://www.ausairpower.net/VVS/Su-35S-KnAAPO-2P-1S.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Sukhoi_Su-35"},
    {name: "Lockheed Martin F-117 Nighthawk", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/F-117_Nighthawk_Front.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Lockheed_F-117_Nighthawk"},
    {name: "Northrop YF-23", imageUrl: "https://media.defense.gov/2008/Sep/04/2000682178/2000/2000/0/080904-F-1234S-003.JPG" , wikiUrl: "https://en.wikipedia.org/wiki/Northrop_YF-23"},
    {name: "HAL Tejas", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/HAL_Tejas"},
    {name: "Sukhoi Su-57", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sukhoi_Design_Bureau%2C_054%2C_Sukhoi_Su-57_%2849581303977%29.jpg/800px-Sukhoi_Design_Bureau%2C_054%2C_Sukhoi_Su-57_%2849581303977%29.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Sukhoi_Su-57"},
    {name: "F-4 Phantom II", imageUrl: "https://pimaair.org/wp-content/themes/yootheme/cache/McDonnell-Douglas-F-4J-9e3d78fb.jpeg" , wikiUrl: "https://en.wikipedia.org/wiki/McDonnell_Douglas_F-4_Phantom_II"},
    {name: "Chengdu J-10", imageUrl: "https://www.ausairpower.net/PLA-AF/Chengdu-J-10A-PL-11+PL-8-2S.jpg" , wikiUrl: "https://en.wikipedia.org/wiki/Chengdu_J-10"}
];


let randomIndex, lastRandomIndex, secondLastRandomIndex, thirdLastRandomIndex, randomJet;

function showRandomFighterJet() {
    randomIndex = Math.floor(Math.random() * fighterJets.length);

    //Super basic way to make sure you dont get 2 consecutive images.
    if (lastRandomIndex == randomIndex || secondLastRandomIndex == randomIndex || thirdLastRandomIndex == randomIndex) {
    randomJet = fighterJets[randomIndex - 1];
        if (lastRandomIndex == randomJet || secondLastRandomIndex == randomJet || thirdLastRandomIndex == randomJet) {
            randomJet = fighterJets[randomIndex - 2];
        }
    } else {
        randomJet = fighterJets[randomIndex];
    }

    lastRandomIndex = randomIndex;

    document.getElementById("fighterJetName").textContent = randomJet.name;
    document.getElementById("fighterJetImage").src = randomJet.imageUrl;
    document.getElementById("fighterJetLink").href = randomJet.wikiUrl;
    document.getElementById("RandomJet").style.display = "block";
}

document.getElementById("randomButton").addEventListener("click", showRandomFighterJet);