/*Ce fichier permet de généré le menu de notre header
Je créé manuellement la liste des éléments du menu, mais il ne devrait pas être difficile de généré cela via des fichiers ou accès BDD
*/


/*fonction pour créer un tableau contenant le contenu du menu. Cela pourra être modifié pour accéder aux données via des fichiers
j'aurais pu utiliser des ableau vides plutôt que des variables null mais je ne ovulais rien instancier*/

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


// Générations de ma liste d'éléments
namesAndText = createMenuNamesAndText();
console.log(namesAndText);

// récupération de l'élément HTML qui contiendra le menu
domMenuNav = document.getElementById("menu");

// pour chaque élément de mon tableau je crée un nav
namesAndText.forEach(entry => {
    var nav = document.createElement("button");
    nav.className += "dropdown";
    domMenuNav.appendChild(nav)

    //j'ajouté un bouton dans le nav créé
    var btnLink = document.createElement("button");
    btnLink.innerHTML = entry.buttonName;
    btnLink.className += "dropbutton";
    nav.appendChild(btnLink);

    //j'ajoute une div au nav, juste sous le bouton
    var dropdiv = document.createElement("div");
    dropdiv.className += "dropdown__content";
    nav.appendChild(dropdiv);

    //si par hasard il y a du texte avant le sous menu, on le met
    if (entry.textBeforeLinks !== null) {
        var title = document.createElement("p");
        title.style += "color: blue;";
        title.innerHTML = entry.textBeforeLinks;
        dropdiv.appendChild(title);
        console.log(title)
    }

    //on ajoute chaque élément de sous menu s'il y en a
    if (entry.linkNames !== null) {
        entry.linkNames.forEach(sublink => {
            var sublinkA = document.createElement("a");
            sublinkA.innerHTML = sublink;
            sublinkA.href = "#";
            dropdiv.appendChild(sublinkA);
        });
    }

    //s'il y a du texte, comme des informations complémentaires, après les éléments de sous menu : on les ajoute
    if (entry.textAfterLinks !== null) {
        var first = true;
        entry.textAfterLinks.forEach(additionalText => {
            var text = document.createElement("p");
            if (first == true) {
                text.style.fontWeight = 'bold';
            }
            first = false;
            text.style.color = 'black';
            text.innerHTML = additionalText;
            dropdiv.appendChild(text);
            console.log(additionalText)
        });
    }
});

//Bouton de contact. Il faudrait en ajouter un second mais ce n'est pas ma priorité actuelle
var callbtn = document.createElement("button");
callbtn.innerHTML="Appelez-nous";
domMenuNav.appendChild(callbtn);