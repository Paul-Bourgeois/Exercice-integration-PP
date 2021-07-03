//fonction pour créer un tableau contenant le contenu du menu
function createMenuNamesAndText() {
    menuNames = [] ;
    menuNames.push({
        "buttonName": "A propos", 
        "linkNames":["La société", "L'histoire", "Les valeurs", "L'équipe"], 
        "textBeforeLinks": null, 
        "textAfterLinks":null
    });
    menuNames.push ({
        "buttonName": "Services", 
        "linkNames":null, 
        "textBeforeLinks": null, 
        "textAfterLinks":null
    });
    menuNames.push ({
        "buttonName": "Produits", 
        "linkNames":["Post emensos", "insuperabilis", "expeditionis", "languenntibus", "Caesaris Galli", "Ulmen insperato", "Ausurus hostilia",
            "Altera sententia", "Proinde concepta", "Castricius tresque", "Nondum", "Opinantibus"], 
            "textBeforeLinks": "Nos gammes", 
        "textAfterLinks":["Informations", "Eius populus ab incunabulis primid ad usque pueritiae tempus",
        "extremum, quod annis cirumcluditur"
    ]});
    menuNames.push ({
        "buttonName": "Actualités", 
        "linkNames":[], 
        "textBeforeLinks":null , 
        "textAfterLinks":null
    });
    
    return menuNames;
}



namesAndText = createMenuNamesAndText();
console.log(namesAndText);

domMenuNav = document.getElementById("menu");

namesAndText.forEach(entry => {
    var nav = document.createElement("button");
    nav.className += "dropdown";
    domMenuNav.appendChild(nav)

    var btnLink = document.createElement("button");
    btnLink.innerHTML = entry.buttonName;
    btnLink.className += "dropbutton";
    nav.appendChild(btnLink);

    var dropdiv = document.createElement("div");
    dropdiv.className += "dropdown__content";
    nav.appendChild(dropdiv);

    if (entry.textBeforeLinks !== null) {
        var title = document.createElement("p");
        title.style += "color: blue;";
        title.innerHTML = entry.textBeforeLinks;
        dropdiv.appendChild(title);
        console.log(title)
    }

    if (entry.linkNames !== null) {
        entry.linkNames.forEach(sublink => {
            var sublinkA = document.createElement("a");
            sublinkA.innerHTML = sublink;
            sublinkA.href = "#";
            dropdiv.appendChild(sublinkA);
        });
    }

    if (entry.textAfterLinks !== null) {
        var first = true;
        entry.textAfterLinks.forEach(additionalText => {
            var text = document.createElement("p");
            if (first === true) {
                text.style += "font-weight: bold, "
            }
            first = false;
            text.style += "color: black;";
            text.innerHTML = additionalText;
            dropdiv.appendChild(text);
            console.log(additionalText)
        });
    }
});

var callbtn = document.createElement("button");
callbtn.innerHTML="Appelez-nous";
domMenuNav.appendChild(callbtn);