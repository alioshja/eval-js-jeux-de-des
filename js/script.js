// construction du sript qui lance le dès après click sur le button.
// variables qui vont définir l'intervale de génération des chifres aléatoires
const max = 6;
const min = 1;
//tTscore est la variable de mon compteur total ce qui fait que je l'ai déclaré avant la fonction pour éviter que ma variable soit redéfini a 0 a chaque utilisation de ma fonction
var tTScore = 0;
var tTScore2 = 0;
function launching(joueur)
{
    //initialisation des var communes
    //var tTScore = 0;
    var pScore = 0;
    var lancer = 1;//Math.floor(Math.random() * (max - min + 1)) + min;
    var number = lancer;//cheked
    document.getElementById('song').play();
    var imgID = '';
    var nomDeClasse = '';
    var score = '';
    var scoreTotal = '';
    var tour = '';
    //redefinition des var en fonction de quel utilisateur il sagit J1 ou J2 par conditions
    if (joueur == '1') {
        imgID = 'imgS2';
        nomDeClasse = 'imgDes';
        score = 'SCR1';
        scoreTotal = 'SCRT1';
        var tour = 'joueur 1 à vous.';
    }
    else if (joueur == '2') {
        imgID = 'imgS2';
        nomDeClasse = 'imgDes2';
        score = 'SCR2';
        scoreTotal = 'SCRT2';
        var tour = 'joueur 2 à vous.';
    }
    else console.log('probleme');
    var getID = document.getElementById(imgID);
        //liens images pour dès
var d1l = "images/1-des-face.png";
var d2l = "images/2-des-face.png";
var d3l = "images/3-des-face.png";
var d4l = "images/4-des-face.png";
var d5l = "images/5-des-face.png";
var d6l = "images/6-des-face.png";

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
    
    //algoritme qui défini quelle images charges et quel chiffre aléatoire c'est ainsi que les modifications du dom.
    if (number == 1) {
        getID.setAttribute('src',d1l);
        getID.setAttribute('class',nomDeClasse)
        pScore=1;
        tTScore++;
        document.getElementById(score).textContent = pScore;
        document.getElementById(scoreTotal).textContent = tTScore;
        return tTScore;
    }

    else if (number == 2) {
        getID.setAttribute('src',d2l);
        getID.setAttribute('class',nomDeClasse)
        pScore = 2;
        tTScore =  tTScore + 2;
        document.getElementById(score).textContent = pScore;
        document.getElementById(scoreTotal).textContent = tTScore;
        return tTScore;
    }

    else if (number == 3) {
        getID.setAttribute('src',d3l);
        getID.setAttribute('class',nomDeClasse)
        pScore = 3;
        tTScore = tTScore + 3;
        document.getElementById(score).textContent = pScore;
        document.getElementById(scoreTotal).textContent = tTScore;
        return tTScore;
    }

    else if (number == 4) {
        getID.setAttribute('src',d4l);
        getID.setAttribute('class',nomDeClasse)
        pScore = 4;
        tTScore = tTScore + 4;
        document.getElementById(score).textContent = pScore;
        document.getElementById(scoreTotal).textContent = tTScore;
        return tTScore;
    }

    else if (number == 5) {    
        getID.setAttribute('src',d5l);
        getID.setAttribute('class',nomDeClasse)
        pScore = 5;
        tTScore = tTScore + 5;
        document.getElementById(score).textContent = pScore;
        document.getElementById(scoreTotal).textContent = tTScore;
        return tTScore;
    }

    else if (number == 6) {
        getID.setAttribute('src',d6l);
        getID.setAttribute('class',nomDeClasse)
        pScore = 6;
        tTScore = tTScore + 6;
        document.getElementById(score).textContent = pScore;
        document.getElementById(scoreTotal).textContent = tTScore;
        return tTScore;
    }
    console.log(tTScore);
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------


    //algoritme qui défini la fin de la parti et qui a gagné
    if (tTScore >= 100) {
        document.getElementById('victoire').play()
    }
    else tour;
}