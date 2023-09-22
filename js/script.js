// Liens vers les images pour les dés
const desImages = [
  "images/1-des-face.png",
  "images/2-des-face.png",
  "images/3-des-face.png",
  "images/4-des-face.png",
  "images/5-des-face.png",
  "images/6-des-face.png"
];
//id des scores
const scoreID = 'SCR1';
const scoreID2 = 'SCR2'

// id des scores Total
const scoreTotalId = "SCRT1";
const scoreTotalId2 = "SCRT2";

// id des button qui déclenchent les fonctions.
const idButtonLancer = 'button';
const idButtonSauvegarder = 'suivant';
const idButtonRecomencer = 'recomencer';

// id balises song.
const songDes = 'song';
const songVictoire = 'victoire';

// variables pour les compteurs.
let scoreTotal = 0;
let scoreTotal2 = 0;
let compteur = 0;//servira de compteur pour la fonction
let stockageCompteur = 0;
let compteur1 = 0;//1 ET 2 sauvegarderons les valeurs de leurs joueurs respectifs
let compteur2 = 0;
const max =6;
const min=1;

// id de la balise image pour le des.
const idDes = 'imgS';

// Fonction pour lancer des
let calcul ='';

//messages pour joueurs
const j1 = 'Joueur 1 à vous';
const j2 = 'Joueur 2 à vous';

// var pour savoir a qui vas passer le tour
let tour = 0;
let afficherScore = '';
let fonctionPass = '';
//////////////////////////////////////////////////////

function lancerDes(joueur) {
   calcul = Math.floor(Math.random() * (max - min + 1)) + min;//des lancé
   document.getElementById('song').play();//song de dés.
    if (joueur==1) {
afficherScore = document.getElementById(scoreID);
tour = 1;

    }
    else if (joueur==2) {
afficherScore = document.getElementById(scoreID2);
tour = 2;

    }
////////////////////////////////////////////////////////////////////////

document.getElementById('music').play();
document.getElementById('music').volume = 0.5;

////////////////////////////////////////////////////////////////////////

if (calcul == 1) {
    document.getElementById(idDes).setAttribute('src',desImages[0]);
    document.getElementById(idDes).setAttribute('class','imgDes');
    compteur = 0;
    stockageCompteur = 0;
    alert("Le joueur a fait un 1 c'est donc au joueur suivant")
    passerTour();
    }

else if (calcul == 2) {
    document.getElementById(idDes).setAttribute('src',desImages[1]);
    document.getElementById(idDes).setAttribute('class','imgDes');
    compteur += 2;
    stockageCompteur = compteur;
    }

else if (calcul == 3) {
    document.getElementById(idDes).setAttribute('src',desImages[2]);
    document.getElementById(idDes).setAttribute('class','imgDes');
    compteur += 3;
    stockageCompteur = compteur;
    }

else if (calcul == 4) {
    document.getElementById(idDes).setAttribute('src',desImages[3]);
    document.getElementById(idDes).setAttribute('class','imgDes');
    compteur += 4;
    stockageCompteur = compteur;
    }

else if (calcul == 5) {
    document.getElementById(idDes).setAttribute('src',desImages[4]);
    document.getElementById(idDes).setAttribute('class','imgDes');
    compteur += 5;
    stockageCompteur = compteur;
    }

else if (calcul == 6) {
    document.getElementById(idDes).setAttribute('src',desImages[5]);
    document.getElementById(idDes).setAttribute('class','imgDes');
    compteur += 6;
    stockageCompteur = compteur;
    }
    console.log(stockageCompteur)
    afficherScore.innerHTML = compteur;
} 
////////////////////////////////////////


////////////////////////////////////////

function passerTour() {

    if (tour == 1) {
    scoreTotal += stockageCompteur;
    document.getElementById(scoreID).innerHTML = compteur1;//modifie le score;
    document.getElementById(scoreTotalId).innerHTML = scoreTotal;//modifie le score;
    stockageCompteur = 0;
    compteur = 0;
    document.getElementById('button').setAttribute('onclick','lancerDes(2)');
    alert(j2);
    }
    else if (tour == 2) {
    scoreTotal2 += stockageCompteur;
    document.getElementById(scoreID2).innerHTML = compteur2;//modifie le score;
    document.getElementById(scoreTotalId2).innerHTML = scoreTotal2;//modifie le score;
    document.getElementById('button').setAttribute('onclick','lancerDes(1)');   
    alert(j1);
    }
    stockageCompteur = 0;
    compteur = 0;
    
        // Ces cond permettent de metre fin a la parti et de dire qui a gagné;

if (scoreTotal >= 100) {
    document.getElementById('victoire').play();//song applaudissement.    
    setTimeout(alert,4000,'Félicitations, au joueur 1, son armé a atteint 100 de puissance et a écrasé celle du joueur 2.');
    setTimeout(newGame(),10000);
}
else if (scoreTotal2 >= 100) {
    document.getElementById('victoire').play();//song applaudissement.    
    setTimeout(alert,4000,'Félicitations, au joueur 2, son armé a atteint 100 de puissance et a écrasé celle du joueur 1.');
    setTimeout(newGame(),10000);
}
}

function newGame() {
    stockageCompteur = 0;
    compteur = 0;
    compteur1 = 0;
    compteur2 = 0;
    scoreTotal = 0;
    scoreTotal2 = 0;
    tour = 0;
    document.getElementById(scoreID).innerHTML = 0;
    document.getElementById(scoreID2).innerHTML = 0;
    document.getElementById(scoreTotalId2).innerHTML = 0;
    document.getElementById(scoreTotalId).innerHTML = 0;
}