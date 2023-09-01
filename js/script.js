// déclaration des variables indispensables.

//launch est pour cibler l'endroit ou on vas modifier le script
var lauch = document.getElementById("button");
var reWrite = "button";

var turn = null;
var joueur1 = true;
var joueur2 = null;
function des() {
    return Math.random() * (6.49 - 1) + 1;
}
var lancer = des();//cheked



//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------


// construction du sript qui lance le dès après click sur le button.

function launching (launch) 
{
    var create = document.createElement("img");
    var number = null;

        // je crée un attribut src avec comme valeur le lien vers mon image
    if (number == 1) {
        create.setAttribute(src, "images/1-des-face.png").className = "imgDes";
        imagejavascript.src
        // je cree un attribut class avec comme valeur ma classe qui donne mes dimentions a l'image
    }

    if (number == 2) {
        create.setAttribute(src, "images/2-des-face.png").className = "imgDes";
    }

    if (number == 3) {
        create.setAttribute(src, "images/3-des-face.png").className = "imgDes";
    }

    if (number == 4) {
        create.setAttribute(src, "images/4-des-face.png").className = "imgDes";
    }

    if (number == 5) {
        create.setAttribute(src, "images/5-des-face.png").className = "imgDes";
    }

    if (number == 6) {
        create.setAttribute(src, "images/6-des-face.png").className = "imgDes";
    }
    else ;
}
