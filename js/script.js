// construction du sript qui lance le dès après click sur le button.
// variables qui vont définir l'intervale de génération des chifres aléatoires
const max = 6;
const min = 1;
//tTscore est la variable de mon compteur total ce qui fait que je l'ai déclaré avant la fonction pour éviter que ma variable soit redéfini a 0 a chaque utilisation de ma fonction
let tTScore = 0;
let tTScore2 = 0;

        //liens images pour dès
        const d1l = "images/1-des-face.png";
        const d2l = "images/2-des-face.png";
        const d3l = "images/3-des-face.png";
        const d4l = "images/4-des-face.png";
        const d5l = "images/5-des-face.png";
        const d6l = "images/6-des-face.png";

function newGame() {
let tTScore = '0';
let tTScore2 = '0';
document.getElementById('SCRT1').setAttribute('text',tTScore);
document.getElementById('SCRT2').setAttribute('text',tTScore2);
}
let tour = '';
let resultat;
function hold(joueur) {
    tTScore = pScore; 
    let scoreTotal = '';
        //redefinition des var en fonction de quel utilisateur il sagit J1 ou J2 par conditions

    if (joueur == 1) {
    scoreTotal = 'SCRT1';
    tour = 'Joueur 2 à vous';
    resultat = [scoreTotal,tour];
    return resultat;
}
else if (joueur ==2) {
    scoreTotal = 'SCRT2'
    tour = 'Joueur 1 à vous.'
    resultat = [scoreTotal,tour];
    return resultat;
}
else if (joueur == 3) {
    tTScore = 0;
    scoreTotal = 'SRT2';
    tour = 'Joueur 2 à vous';
    resultat = [scoreTotal,tour];
    return resultat;
}
else if (joueur == 4) {
    tTScore = 0;
    scoreTotal = 'SRT2';
    tour = 'Joueur 1 à vous.';
    resultat = [scoreTotal,tour];
    return resultat;
}
document.getElementById(scoreTotal).textContent = tTScore;
console.log(resultat[2]);
}
let score = 0;
let pScore = 0;
let passerTour = '';
function launching(joueur)
{
    //les joueurs peuvent lancer autant de fois le des quils le veulent mais si le dès tombe sur 1 le score tombe a 
    //0 et c'est au tour du 2ème joueur si un joueur sauvegarde son score grace au bouton hold alor il ne peut plus perdre son score et c'est au tour du 2ème joueur.
    
    //initialisation des var communes
        let lancer = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(lancer)
        document.getElementById('song').play();
        const nomDeClasse = 'imgDes';
        let imgID = 'imgS';
    //redefinition des var en fonction de quel utilisateur il sagit J1 ou J2 par conditions
    if (joueur == '1') {
        // ID score actuel
        score = 'SCR1';
        passerTour = hold(3);
    }
    else if (joueur == '2') {
        score = 'SCR2';
        passerTour = hold(4);
    }
    else ;
    const getID = document.getElementById(imgID);
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
    
    //algoritme qui défini quelle images charges et quel chiffre aléatoire c'est ainsi que les modifications du dom.
    if (lancer == 1) {
        pScore = 0;
        getID.setAttribute('src',d1l);
        getID.setAttribute('class',nomDeClasse);
        document.getElementById(score).textContent = pScore;
        passerTour;
        return pScore;
    }

    else if (lancer == 2) {
        getID.setAttribute('src',d2l);
        getID.setAttribute('class',nomDeClasse)
        pScore = pScore + 2;
        document.getElementById(score).textContent = pScore;
        return pScore;
    }

    else if (lancer == 3) {
        getID.setAttribute('src',d3l);
        getID.setAttribute('class',nomDeClasse)
        pScore = pScore + 3;
        document.getElementById(score).textContent = pScore;
        return pScore;
    }

    else if (lancer == 4) {
        getID.setAttribute('src',d4l);
        getID.setAttribute('class',nomDeClasse)
        pScore = pScore + 4;
        document.getElementById(score).textContent = pScore;
        return pScore;
    }

    else if (lancer == 5) {    
        getID.setAttribute('src',d5l);
        getID.setAttribute('class',nomDeClasse)
        pScore = pScore + 5;
        document.getElementById(score).textContent = pScore;
        return pScore;
    }

    else if (lancer == 6) {
        getID.setAttribute('src',d6l);
        getID.setAttribute('class',nomDeClasse)
        pScore = pScore + 6;
        document.getElementById(score).textContent = pScore;
        return pScore;
    }
    console.log(pScore);
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------


    //algoritme qui défini la fin de la parti et qui a gagné
    if (tTScore >= 100) {
        document.getElementById('victoire').play()
    }
    else tour;
}