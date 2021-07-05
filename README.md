Voici les résultat de cet exercice, pour moi.

Je suis particulièrement déçu de ne pas avoir réussi à gérer correctement cet exercice. Mais je peux dire que je l'ai terminé. Dans le dossier "deprecated" vous trouverez ce que j'avais commencé par faire. C'est à dire : de l'HTML, du SCSS et du javascript avec juste VS Code pour écrire mon code. J'y ai passé du temps, trop de temps et je n'ai quasiment pas avancé. Mais mon CSS était plutôt bien de mon point de vue.

Il est 21h13, le 5 juillet quand j'écris ces lignes. J'ai refais entièrement la page internet en commencçant vers 13h aujourd'hui. Mais cette fois-ci en utilisant WordPress et essentiellement le plugin Elementor. Il m'a énormément simplifié la mise en place de ma page. Mais je n'ai pas pu tout faire comme je l'aurais voulu, loin de là. Je n'ai pas pris la version pro donc je n'avais à accès qu'à peu de choses.

Voici la liste des problèmes que j'ai rencontrés, ce qui cloche encore, les erreurs de designs.

- Je vais commencer par le plus présent : le manque total de précision sur l'emplacement de chaque élément. Je n'ai pas compris du tout comment pouvoir utiliser un équivalent de bootstrap. Je pense qu'absolument tout est mal placé et avec une mauvaise taille. J'ai beau avoir essayé d'utiliser les taille de police donnée par affinity designer,rien ne semblait correspondre. Et comme je n'arrivais pas à exploiter les colonnes correctement, j'ai du tout traffiquer.
Les couleurs devraient plus ou moins correspondre. Mon seul problème était que je convertissais les valeurs de hue, saturation et level en hexadécimal par un site : https://htmlcolors.com/hsl-to-hex. Et malheuresement, il n'y a aucune option d'opacité sur le site donc j'ai quelques imprecisions par endroit.

- Le header :
    * je ne l'ai pas fait via elementor. C'est d'ailleurs la seule chose pour laquelle je ne l'ai pas utilisé. J'ai utilisé un thème que j'ai trouvé sympa et j'ai essayé de l'adapter.
    * J'ai essayé de mettre le logo sur wordpress, mais rien n'apparaissait. Je n'ai pas compris ce qui clochait. J'ai donc abandonné le logo. 
    * La barre blanche est complète au d'avoir une forme plutôt jolie comme sur la maquette. Là encore : je n'ai aucune idée de comment faire cela. Je n'ai mis aucun effet diagonal comme celui ci sur tout le site.
    * les boutons "appelez-nous / contactez-nous" sont absent. Je n'ai pas trouvé comment les faire via la pesronnalisation d'apparence du menu. 
    * le méga menu est trop large et je n'ai pas trouvé non plus comment y mettre un sous titre et des informations complémentaires.
    * je n'ai pas réussi à faire l'effet souligné que l'on voit quand on hover par dessus le menu. Et les lignes dans les sous menus ne sont pas parfaites non plus.

- La section avec le slider :
    * le slider est un élément payant d'élémentor. J'ai bien trouvé une solution gratuite (ici : https://www.youtube.com/watch?v=mZMDoyQUOJ8). Je n'aurais pas été capable de faire un slider aussi bien que sur la maquette alors je l'ai laissé tombé. De plus, les explicatins n'étaient pas vraiment claires, l'auteur de la vidéo affirmant lui même ne pas avoir totu compris.
    * L'image de fond n'est pas joliment coupée en diagonale
    * Le zoom de l'image est approximatif
    * J'ai monté l'image à la main avec une marge négative sur la section. Je doute que ce soit très conseillé.

- La section avec le Titre  H1 :
    * je n'ai pas réussi à faire l'effet d'ombres du premier cadre. D'un côté, oui, pourquoi pas. Mais pas des deux. J'ai donc mis une ombre verticale vers le haut ce qui fait apparaître également l'ombre légèrement sur la droite et la gauche du cadre. Bien que le haut de l'ombre est normalement caché par le haut du cadre
    * les logos de flèches sur les boutons ne changent pas de couleur malgré le hover. Je n'ai pas trouvé comment faire cela, tout simplement et je ne voulais pas juste mettre en texte " -> "
    * les alignements verticaux des éléments sont très approximatifs.
    * je n'ai pas trouvé comment faire une petite ligne rose sous le titre. Je voulais mettre un bouton très fin, de couleur rose et qui ne fait strictement rien. Mais le bouton finissait par se remettre en grand et c'était plutôt moche.

- Nos actualités :
    * j'ai considéré que la légende serait dans les fichiers. Je ne vois pas comment cela peut fonctionne mais Elementor me proposait de le faire alors voila. Je pense que le texte de publication devrait nécessité du js pour récupéré l'infos quelque part.
    * l'effet d'hover sur les images : zoom + cadre flouté + multiples shadows rose. J'ai passé du temps à bidouiller les options d'Elementor mais je n'ai rien trouvé pour ça. Et je serais incapable de le faire actuellement en CSS. Les options d'ombre ne sont pas accessibles spécifiquement dans le hover. Dommage.
    * les ombres pour le bouton "voir tous les articles" sont les mêmes que pour les images. Je n'ai pas su les faire. J'avoue ne pas savoir si ajouter des "ombres" sous la fomre d'images superposée aurait été un choix judicieux, c'est pourquoi je ne l'ai pas fait. 

- Nos prochains rendez-vous :
    * la gestion de logo est un mystère pour moi. Je n'ai donc pas le changement de couleur du calendrier par hover. Et je n'ai pas la date des rendez-vous non plus
    * je ne sais pas pourquoi je ne pouvais plus ajouter de sous sections donc je n'ai pas pu placer les boutons côte à côte.
    * le petit fond discret en cas de hover n'a pas de dégradé comme sur la maquette
    * j'ai triché pour l'image vide. J'ai récupére le cadre et les apostrophes en une seule image au lieu de faire un fond bleu avec l'image par dessus

- Titre H2 :
    * Le fond n'est pas en diagonale et je ne coupe donc pas les apostrophes géantes
    * je n'ai pas changé la couleur des puces. Elementor ne le permet pas
    * le cadre de la photo avec bords arrondis est très approximatif chez moi. Mais il l'est pour toutes les images du genre

- Nos références :
    * Les boutons ne font rien du tout
    * Les logo sont tous décalés vers la droite parce que je ne gère pas du tout le placement des éléments.
    * je pense qu'ici il faudrait faire une requête pour chercher les logo plutôt que les mettre tous un par un.

- Footer : 
    * les bulles en fond ne sont pas dégradées
    * j'ai utilisé des liens wordpress pour "A propos, Contact, ..." c'est très approximatif, je ne pouvais pas enlever la puce ni changement quoi que ce soit au css.


Globalement, je suis donc tombé sur énormément de problèmes. N'ayant travaillé avec wordpress quasiment que cet après midi. Je peux juste dire que ce plugin est pratique en cas de crise mais que la version gratuite manque de beaucoup de choses.
Affinity Designer est plutôt agréable à l'emploi mais les données vraiment utiles (positions, police, couleurs, etc) sont disêrcées partout sur la fenêtre. C'est très contre intuitif. et oui, je n'ai utilisé aucune position donnée par le logiciel.

Il manque tous les éléments pour le référencement. C'est pas fou. Et le chargement de la page est surement long. Je n'ai pas fait de min.js ni min.css d'ailleurs.
Mais c'est responsif ... probablement ... peut être

Bien, il ne me reste qu'à espérer que j'arrive à partager mes résultats !




base de données SQL disponible :

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dauphin' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );


http://localhost/wordpress/wp-login.php
Identifiants wordpress :
PaulBourgeois
Mot de pass wordpress : 
LocalBourgeoisPaul00


Je conseille de prendre le fichier compressé plutôt que le dossier entier